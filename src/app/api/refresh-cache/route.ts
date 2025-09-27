// src/app/api/refresh-cache/route.ts  
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET() {
  try {
    // Các path cần refresh định kỳ
    const paths = [
      '/',
      '/category/tru-tien',
      '/tag/anh'  
    ];

    for (const path of paths) {
      revalidatePath(path);
    }

    return NextResponse.json({
      message: 'Cache refreshed successfully',
      paths,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Cache refresh error:', error);
    return NextResponse.json(
      { error: 'Failed to refresh cache' },
      { status: 500 }
    );
  }
}

// Có thể gọi từ cron job hoặc external service
export async function POST() {
  return GET();
}
