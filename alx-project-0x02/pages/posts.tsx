import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // Map API response to our PostProps shape
  const formattedPosts: PostProps[] = data.slice(0, 10).map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts: formattedPosts,
    },
  };
};

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <Header />
      <section className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts 📰</h1>

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
      </section>
    </main>
  );
};

export default PostsPage;
