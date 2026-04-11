'use client';

import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePagination = () => {
    // Total page numbers to show = siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    // If the number of pages is less than the page numbers we want to show
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Case 2: No left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, '...', totalPages];
    }

    // Case 3: No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, '...', ...rightRange];
    }

    // Case 4: Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }

    return range(1, totalPages);
  };

  const pages = generatePagination();

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1">
      {/* First Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        className="hidden sm:flex"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>

      {/* Previous Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`dots-${index}`}
                className="px-3 py-2 text-gray-400"
              >
                ...
              </span>
            );
          }

          return (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="icon"
              onClick={() => goToPage(page as number)}
              className={currentPage === page ? 'bg-homez-primary hover:bg-homez-primary/90' : ''}
            >
              {page}
            </Button>
          );
        })}
      </div>

      {/* Next Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Last Page */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        className="hidden sm:flex"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
