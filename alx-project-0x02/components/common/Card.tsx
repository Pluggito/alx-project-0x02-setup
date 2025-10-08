import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-80 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-3 text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
