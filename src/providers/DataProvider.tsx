'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { getDataSource, type DataSource, type DataSourceType } from '@/lib/datasource';

interface DataContextType {
  /** Data source instance */
  dataSource: DataSource;
  /** Current data source type */
  dataSourceType: DataSourceType;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
  /** Override data source type */
  dataSourceType?: DataSourceType;
}

export function DataProvider({ children, dataSourceType }: DataProviderProps) {
  // Get the data source singleton
  const dataSource = getDataSource();
  
  // Determine the data source type
  const currentDataSourceType: DataSourceType = 
    dataSourceType ?? (process.env.DATA_SOURCE?.toUpperCase() as DataSourceType) ?? 'DATABASE';

  const value: DataContextType = {
    dataSource,
    dataSourceType: currentDataSourceType,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

/**
 * Hook to access data context
 */
export function useData(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

/**
 * Hook to access data source directly
 */
export function useDataSource(): DataSource {
  const { dataSource } = useData();
  return dataSource;
}

/**
 * Hook to access properties data source
 */
export function usePropertyDataSource() {
  const { dataSource } = useData();
  return dataSource.properties;
}

/**
 * Hook to access agents data source
 */
export function useAgentDataSource() {
  const { dataSource } = useData();
  return dataSource.agents;
}

/**
 * Hook to access cities data source
 */
export function useCityDataSource() {
  const { dataSource } = useData();
  return dataSource.cities;
}

/**
 * Hook to access blog data source
 */
export function useBlogDataSource() {
  const { dataSource } = useData();
  return dataSource.blog;
}

/**
 * Hook to access testimonials data source
 */
export function useTestimonialDataSource() {
  const { dataSource } = useData();
  return dataSource.testimonials;
}

/**
 * Hook to access categories data source
 */
export function useCategoryDataSource() {
  const { dataSource } = useData();
  return dataSource.categories;
}

/**
 * Hook to access users data source
 */
export function useUserDataSource() {
  const { dataSource } = useData();
  return dataSource.users;
}

/**
 * Hook to access messages data source
 */
export function useMessageDataSource() {
  const { dataSource } = useData();
  return dataSource.messages;
}

/**
 * Hook to access reviews data source
 */
export function useReviewDataSource() {
  const { dataSource } = useData();
  return dataSource.reviews;
}

/**
 * Hook to access inquiries data source
 */
export function useInquiryDataSource() {
  const { dataSource } = useData();
  return dataSource.inquiries;
}

/**
 * Hook to access tours data source
 */
export function useTourDataSource() {
  const { dataSource } = useData();
  return dataSource.tours;
}

/**
 * Hook to access payments data source
 */
export function usePaymentDataSource() {
  const { dataSource } = useData();
  return dataSource.payments;
}

/**
 * Hook to access notifications data source
 */
export function useNotificationDataSource() {
  const { dataSource } = useData();
  return dataSource.notifications;
}

export default DataProvider;
