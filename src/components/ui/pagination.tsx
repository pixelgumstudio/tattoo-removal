// components/ui/Pagination.tsx
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /**
   * How many page numbers to show on *each* side of the current page (≥ 0)
   */
  siblingCount?: number;
  className?: string;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  /* ------------------------------------------------------------------ */
  /* Helper to generate a compact page range with ellipses              */
  /* ------------------------------------------------------------------ */
  const createPageRange = () => {
    const totalNumbers = siblingCount * 2 + 3;        // cur + siblings + first & last
    const totalBlocks  = totalNumbers + 2;            // +2 for the potential ellipses

    // Show everything if there are not enough pages to truncate
    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftBound  = Math.max(2, page - siblingCount);
    const rightBound = Math.min(totalPages - 1, page + siblingCount);
    const showLeftEllipsis  = leftBound > 2;
    const showRightEllipsis = rightBound < totalPages - 1;

    const range: (number | 'ellipsis')[] = [];

    range.push(1);                    // First page

    if (showLeftEllipsis) range.push('ellipsis');

    for (let i = leftBound; i <= rightBound; i++) {
      range.push(i);
    }

    if (showRightEllipsis) range.push('ellipsis');

    range.push(totalPages);           // Last page
    return range;
  };

  const pageRange = createPageRange();

  const buttonBase =
    'px-3 py-1 rounded border text-sm select-none transition disabled:opacity-50 disabled:cursor-not-allowed';

  /* ------------------------------------------------------------------ */
  /* JSX                                                                */
  /* ------------------------------------------------------------------ */
  return (
    <nav
      aria-label="Pagination"
      className={clsx('flex flex-col justify-center items-center gap-3 mt-8 sm:flex-row', className)}
    >
      {/* ---------- Mobile condensed read-out (hidden ≥ sm) ---------- */}
      <span className="sm:hidden text-sm">
        Page&nbsp;<strong>{page}</strong>&nbsp;/&nbsp;<strong>{totalPages}</strong>
      </span>

      {/* ---------- Navigation buttons ---------- */}
      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={clsx(buttonBase, 'flex items-center gap-1')}
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page numbers (hidden on mobile) */}
        <ul className="flex items-center gap-1">
          {pageRange.map((item, idx) =>
            item === 'ellipsis' ? (
              <li key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                …
              </li>
            ) : (
              <li key={item}>
                <button
                  onClick={() => onPageChange(item)}
                  className={clsx(
                    buttonBase,
                    item === page
                      ? 'bg-black text-white border-black'
                      : 'hover:border-gray-400'
                  )}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Next */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={clsx(buttonBase, 'flex items-center gap-1')}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </nav>
  );
}
