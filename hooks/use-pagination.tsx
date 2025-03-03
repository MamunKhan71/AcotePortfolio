import { useMemo } from "react";

type UsePaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay?: number; // Number of visible pages in the middle
};

export function usePagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 5,
}: UsePaginationProps) {
  return useMemo(() => {
    if (totalPages <= paginationItemsToDisplay) {
      return { pages: Array.from({ length: totalPages }, (_, i) => i + 1), showLeftEllipsis: false, showRightEllipsis: false };
    }

    const firstPages = [1, 2, 3]; // Always show first 3 pages
    const lastPages = [totalPages - 1, totalPages]; // Always show last 2 pages
    let middlePages: (number | string)[] = [];

    const middleRange = Math.floor(paginationItemsToDisplay / 2);
    let startPage = Math.max(4, currentPage - middleRange);
    let endPage = Math.min(totalPages - 3, currentPage + middleRange);

    if (startPage > 4) {
      middlePages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      middlePages.push(i);
    }

    if (endPage < totalPages - 3) {
      middlePages.push("...");
    }

    return {
      pages: [...firstPages, ...middlePages, ...lastPages],
      showLeftEllipsis: startPage > 4,
      showRightEllipsis: endPage < totalPages - 3,
    };
  }, [currentPage, totalPages, paginationItemsToDisplay]);
}
