"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        // Map API response to our PostProps shape
        const formattedPosts: PostProps[] = data.slice(0, 10).map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Header />
      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts 📰</h1>

        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                userId={post.userId}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
