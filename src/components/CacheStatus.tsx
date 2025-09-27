import React from 'react';
import { CacheManager } from '../../lib/cache-manager';

export default function CacheStatus() {
  const cacheInfo = CacheManager.getCacheInfo();

  return (
    <div className="bg-gray-50 border rounded-lg p-4 text-sm">
      <h3 className="font-semibold text-gray-700 mb-2">📊 Cache Status</h3>
      <div className="space-y-1 text-gray-600">
        <div>⏱️ Revalidate: {cacheInfo.revalidateTime}s</div>
        <div>🕐 Last check: {new Date().toLocaleTimeString('vi-VN')}</div>
        <div>🌍 Environment: {cacheInfo.environment}</div>
      </div>
    </div>
  );
}
