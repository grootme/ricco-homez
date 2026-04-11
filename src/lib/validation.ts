/**
 * Input Validation Schemas
 * Uses Zod for type-safe form validation across the application.
 */

import { z } from 'zod';

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Login form validation
export const loginFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

// Register form validation
export const registerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  ),
  confirmPassword: z.string(),
  agreeTerms: z.literal(true, { errorMap: () => ({ message: 'You must agree to the terms' }) }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

// Property search filters validation
export const propertySearchSchema = z.object({
  query: z.string().optional(),
  propertyType: z.array(z.string()).optional(),
  status: z.enum(['for-sale', 'for-rent', 'sold', 'rented']).optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  minBedrooms: z.number().min(0).optional(),
  minBathrooms: z.number().min(0).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  sort: z.enum(['newest', 'price-asc', 'price-desc', 'popular']).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(50).optional(),
});

export type PropertySearchData = z.infer<typeof propertySearchSchema>;

// Inquiry form validation
export const inquiryFormSchema = z.object({
  propertyId: z.string().min(1, 'Property ID is required'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;

// Tour scheduling validation
export const tourFormSchema = z.object({
  propertyId: z.string().min(1, 'Property ID is required'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number').max(20),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  tourType: z.enum(['in-person', 'virtual', 'video']).default('in-person'),
  message: z.string().max(500).optional(),
});

export type TourFormData = z.infer<typeof tourFormSchema>;

// Review form validation
export const reviewFormSchema = z.object({
  propertyId: z.string().optional(),
  agentId: z.string().optional(),
  title: z.string().min(5, 'Title must be at least 5 characters').max(200),
  content: z.string().min(20, 'Review must be at least 20 characters').max(2000),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
});

export type ReviewFormData = z.infer<typeof reviewFormSchema>;

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Helper function to validate and parse form data
export async function validateForm<T>(schema: z.ZodSchema<T>, data: unknown) {
  try {
    return { success: true as const, data: schema.parse(data) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false as const,
        errors: error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      };
    }
    return { success: false as const, errors: [{ field: 'unknown', message: 'Validation failed' }] };
  }
}
