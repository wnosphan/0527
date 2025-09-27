import React from "react";
import { getPostsBySection } from "../../lib/wp";
import { homeSections } from "../lib/sections";
import PostCard from "../components/PostCard";
import SectionTitle from "../components/SectionTitle";
import CacheStatus from "../components/CacheStatus";
import HeroCarousel from "../components/HeroCarousel";
import { heroSlides } from "../lib/site";
import HeroStats from "../components/HeroStats";
import CallToAction from "../components/CallToAction";

export default async function Home() {
  try {
    // Fetch posts for all sections in parallel
    const sectionsWithPosts = await Promise.all(
      homeSections.map(async (section) => {
        const posts = await getPostsBySection(section);
        return {
          ...section,
          posts
        };
      })
    );

    return (
      <>
        <HeroCarousel slides={heroSlides} />
        <HeroStats />
        <div className="bg-gray-50" id="latest">
          {/* Cache Status Bar */}
          <div className="bg-blue-100 border-b border-blue-200">
            <div className="max-w-6xl mx-auto px-6 py-2 flex justify-end">
              <CacheStatus />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-6 py-12">
            {sectionsWithPosts.map((section) => (
              <section key={section.key} className="mb-16">
                <SectionTitle>{section.title}</SectionTitle>
                {section.description && (
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{section.description}</p>
                )}
                
                {section.posts.length > 0 ? (
                  <div className={`grid gap-8 ${
                    section.key === 'featured' 
                      ? 'md:grid-cols-2 lg:grid-cols-3' 
                      : 'md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {section.posts.map((post) => (
                      // @ts-ignore - React key prop is handled specially
                      <PostCard key={post.ID} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
                    <div className="text-4xl mb-3">📝</div>
                    <p className="text-lg">Không có bài viết nào trong mục này</p>
                    <p className="text-sm text-gray-400 mt-1">Nội dung sẽ được cập nhật sớm</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          <CallToAction />

          {/* Footer info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t mt-16">
            <div className="max-w-6xl mx-auto px-6 py-8">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-bold text-blue-800 mb-4 text-xl flex items-center">
                  🔄 Automation Features
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">ACTIVE</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-600 text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-blue-800 mb-1">ISR Cache</h4>
                    <p className="text-sm text-blue-700">Làm mới mỗi {process.env.NEXT_PUBLIC_WP_REVALIDATE || 600} giây</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-600 text-2xl mb-2">🔄</div>
                    <h4 className="font-semibold text-green-800 mb-1">Manual Refresh</h4>
                    <p className="text-sm text-green-700">API: <code>/api/revalidate</code></p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-purple-600 text-2xl mb-2">🚀</div>
                    <h4 className="font-semibold text-purple-800 mb-1">Auto Cache</h4>
                    <p className="text-sm text-purple-700">API: <code>/api/refresh-cache</code></p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-orange-600 text-2xl mb-2">⏰</div>
                    <h4 className="font-semibold text-orange-800 mb-1">Vercel Cron</h4>
                    <p className="text-sm text-orange-700">Tự động mỗi 10 phút</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Blog - Lực Tuyết Kỳ Tuyết Mê</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">
            ⚠️ Không thể tải bài viết. Vui lòng thử lại sau.
          </p>
          <p className="text-red-600 text-sm mt-2">
            Lỗi: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    );
  }
}
