'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePropertyDataSource } from '@/providers';
import { useAgentDataSource } from '@/providers';
import { useCityDataSource } from '@/providers';
import { useTestimonialDataSource } from '@/providers';
import { useBlogDataSource } from '@/providers';
import { useCategoryDataSource } from '@/providers';

/**
 * Generic hook for async data fetching with loading/error states.
 * Designed for use with the DataSource hooks in client components.
 */
export function useAsyncData<T>(
  fetcher: () => Promise<T>,
  deps: React.DependencyList = [],
  options?: {
    initialData?: T;
    enabled?: boolean;
  }
) {
  const [data, setData] = useState<T | undefined>(options?.initialData);
  const [isLoading, setIsLoading] = useState(!options?.initialData);
  const [error, setError] = useState<Error | null>(null);
  const mountedRef = useRef(true);

  const enabled = options?.enabled ?? true;

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      if (mountedRef.current) {
        setData(result);
        setIsLoading(false);
      }
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setIsLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    mountedRef.current = true;
    fetchData();
    return () => {
      mountedRef.current = false;
    };
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch };
}

/**
 * Hook to fetch all properties from the data source.
 */
export function useProperties(options?: { limit?: number; initialData?: any[] }) {
  const propertyDS = usePropertyDataSource();

  return useAsyncData(
    async () => {
      const result = await propertyDS.getProperties({ limit: options?.limit ?? 100 });
      return result.data;
    },
    [options?.limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch featured properties from the data source.
 */
export function useFeaturedProperties(limit = 6, options?: { initialData?: any[] }) {
  const propertyDS = usePropertyDataSource();

  return useAsyncData(
    async () => propertyDS.getFeaturedProperties(limit),
    [limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch properties by status.
 */
export function usePropertiesByStatus(status: string, limit = 20, options?: { initialData?: any[] }) {
  const propertyDS = usePropertyDataSource();

  return useAsyncData(
    async () => propertyDS.getPropertiesByStatus(status, limit),
    [status, limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch a single property by ID.
 */
export function usePropertyById(id: string, options?: { initialData?: any }) {
  const propertyDS = usePropertyDataSource();

  return useAsyncData(
    async () => propertyDS.getPropertyById(id),
    [id],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch properties by city.
 */
export function usePropertiesByCity(city: string, limit = 20, options?: { initialData?: any[] }) {
  const propertyDS = usePropertyDataSource();

  return useAsyncData(
    async () => propertyDS.getPropertiesByCity(city, limit),
    [city, limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch all cities from the data source.
 */
export function useCities(options?: { initialData?: any[] }) {
  const cityDS = useCityDataSource();

  return useAsyncData(
    async () => {
      const result = await cityDS.getCities({ limit: 100 });
      return result.data;
    },
    [],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch featured cities.
 */
export function useFeaturedCities(limit = 6, options?: { initialData?: any[] }) {
  const cityDS = useCityDataSource();

  return useAsyncData(
    async () => cityDS.getFeaturedCities(limit),
    [limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch all agents from the data source.
 */
export function useAgents(options?: { limit?: number; initialData?: any[] }) {
  const agentDS = useAgentDataSource();

  return useAsyncData(
    async () => {
      const result = await agentDS.getAgents({ limit: options?.limit ?? 100 });
      return result.data;
    },
    [options?.limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch featured agents.
 */
export function useFeaturedAgents(limit = 6, options?: { initialData?: any[] }) {
  const agentDS = useAgentDataSource();

  return useAsyncData(
    async () => agentDS.getFeaturedAgents(limit),
    [limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch a single agent by ID.
 */
export function useAgentById(id: string, options?: { initialData?: any }) {
  const agentDS = useAgentDataSource();

  return useAsyncData(
    async () => agentDS.getAgentById(id),
    [id],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch properties by agent.
 */
export function usePropertiesByAgent(agentId: string, limit = 20, options?: { initialData?: any[] }) {
  const propertyDS = usePropertyDataSource();

  return useAsyncData(
    async () => propertyDS.getPropertiesByAgent(agentId, limit),
    [agentId, limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch all testimonials from the data source.
 */
export function useTestimonials(options?: { initialData?: any[] }) {
  const testimonialDS = useTestimonialDataSource();

  return useAsyncData(
    async () => {
      const result = await testimonialDS.getTestimonials({ limit: 100 });
      return result.data;
    },
    [],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch featured testimonials.
 */
export function useFeaturedTestimonials(limit = 6, options?: { initialData?: any[] }) {
  const testimonialDS = useTestimonialDataSource();

  return useAsyncData(
    async () => testimonialDS.getFeaturedTestimonials(limit),
    [limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch all blog posts from the data source.
 */
export function useBlogPosts(options?: { initialData?: any[] }) {
  const blogDS = useBlogDataSource();

  return useAsyncData(
    async () => {
      const result = await blogDS.getBlogPosts({ limit: 100 });
      return result.data;
    },
    [],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch featured blog posts.
 */
export function useFeaturedBlogPosts(limit = 6, options?: { initialData?: any[] }) {
  const blogDS = useBlogDataSource();

  return useAsyncData(
    async () => blogDS.getFeaturedBlogPosts(limit),
    [limit],
    { initialData: options?.initialData }
  );
}

/**
 * Hook to fetch all categories from the data source.
 */
export function useCategories(options?: { initialData?: any[] }) {
  const categoryDS = useCategoryDataSource();

  return useAsyncData(
    async () => categoryDS.getCategories(),
    [],
    { initialData: options?.initialData }
  );
}
