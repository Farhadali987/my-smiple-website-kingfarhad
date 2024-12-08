import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 border-4 border-red-500">
      <Image 
        className="w-full h-48 object-cover" 
        src={imageUrl} 
        alt={title} 
        width={400} 
        height={200} 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;