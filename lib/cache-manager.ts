// lib/cache-manager.ts
export class CacheManager {
  private static baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001' 
    : 'https://your-domain.vercel.app';

  static async revalidatePath(path: string) {
    try {
      const response = await fetch(`${this.baseUrl}/api/revalidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.REVALIDATE_SECRET,
          path
        })
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to revalidate:', error);
      throw error;
    }
  }

  static async refreshAllCache() {
    try {
      const response = await fetch(`${this.baseUrl}/api/refresh-cache`, {
        method: 'POST'
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to refresh cache:', error);
      throw error;
    }
  }

  // Utility để check thời gian cache
  static getCacheInfo() {
    return {
      revalidateTime: Number(process.env.NEXT_PUBLIC_WP_REVALIDATE || 600),
      lastUpdate: new Date().toISOString(),
      environment: process.env.NODE_ENV
    };
  }
}
