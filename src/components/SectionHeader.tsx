import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function SectionHeader({ title, description, showViewAll, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
      {showViewAll && viewAllHref && (
        <a
          href={viewAllHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
        >
          Xem tất cả →
        </a>
      )}
    </div>
  );
}
