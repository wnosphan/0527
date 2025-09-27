// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, path } = body;

    // Kiểm tra secret để bảo mật
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate các path quan trọng
    const pathsToRevalidate = [
      '/',
      '/category/tru-tien', 
      '/tag/anh',
      ...(path ? [path] : [])
    ];

    for (const pathToRevalidate of pathsToRevalidate) {
      revalidatePath(pathToRevalidate);
    }

    return NextResponse.json({ 
      revalidated: true, 
      paths: pathsToRevalidate,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
}
