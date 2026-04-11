import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homez - Real Estate NextJS Template",
  description: "Find your dream home with Homez. Browse thousands of properties, apartments, and commercial spaces. Modern real estate platform with advanced search and filtering.",
  keywords: ["real estate", "homes", "apartments", "properties", "buy home", "rent home", "Homez", "Next.js"],
  authors: [{ name: "Homez Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Homez - Real Estate Platform",
    description: "Find your dream home with our extensive collection of properties",
    siteName: "Homez",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homez - Real Estate Platform",
    description: "Find your dream home with our extensive collection of properties",
  },
};

/**
 * Root Layout (Minimal)
 * The actual HTML structure with locale-aware lang attribute
 * is handled by the [locale] layout for dynamic locale routing.
 * 
 * This layout primarily exports metadata for the application.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
