import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-80 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      <p className="text-sm text-gray-400">Posted by User #{userId}</p>
    </div>
  );
};

export default PostCard;
