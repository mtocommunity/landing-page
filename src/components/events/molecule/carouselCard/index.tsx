import React from 'react';

interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ title, description, image }) => {
  return (
    <div className="carousel-card bg-black text-white p-4 rounded-lg border-4 border-gradient">
      <img src={image} alt={title} className="mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default CarouselCard;