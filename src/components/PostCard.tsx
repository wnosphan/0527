'use client';

import React from 'react';
import PostExcerpt from "./PostExcerpt";
import { WPPost } from "../../lib/wp";

interface PostCardProps {
  post: WPPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      {/* Featured Image */}
      {post.featured_image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          <a
            href={post.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-600 transition-colors"
          >
            {post.title}
          </a>
        </h3>

        {/* Excerpt */}
        <div className="mb-3">
          <PostExcerpt html={post.excerpt} />
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>📅 {new Date(post.date).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}</span>
          <a
            href={post.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Đọc tiếp →
          </a>
        </div>
      </div>
    </article>
  );
}
