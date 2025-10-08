"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "Learning Next.js", content: "Next.js makes building React apps easier and faster." },
    { title: "TypeScript Support", content: "TypeScript improves code quality and reduces bugs." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Header />
      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Home Page 🏠</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-8 hover:bg-blue-700 transition"
        >
          + Add New Post
        </button>

        <div className="flex flex-wrap gap-6 justify-center">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </section>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </main>
  );
}
