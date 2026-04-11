'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUpDown } from 'lucide-react';
import { PropertySearchFilters } from '@/types';

interface SortDropdownProps {
  value: PropertySearchFilters['sortBy'];
  onChange: (value: PropertySearchFilters['sortBy']) => void;
}

const sortOptions: { value: PropertySearchFilters['sortBy']; label: string }[] = [
  { value: 'date-desc', label: 'Newest First' },
  { value: 'date-asc', label: 'Oldest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'sqft-asc', label: 'Sqft: Small to Large' },
  { value: 'sqft-desc', label: 'Sqft: Large to Small' },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <Select value={value || 'date-desc'} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <ArrowUpDown className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value || 'date-desc'}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
