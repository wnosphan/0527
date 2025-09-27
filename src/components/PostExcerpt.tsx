'use client';

import React, { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface PostExcerptProps {
  html: string;
}

export default function PostExcerpt({ html }: PostExcerptProps) {
  const [sanitizedHtml, setSanitizedHtml] = useState('');

  useEffect(() => {
    // Chỉ sanitize HTML khi component đã mount (client-side)
    const clean = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
      ALLOWED_ATTR: []
    });
    setSanitizedHtml(clean);
  }, [html]);

  // Fallback cho server-side render
  if (!sanitizedHtml) {
    const textOnly = html.replace(/<[^>]*>/g, '').trim();
    return <p className="text-gray-700 text-sm">{textOnly}</p>;
  }

  return (
    <div
      className="text-gray-700 text-sm"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
