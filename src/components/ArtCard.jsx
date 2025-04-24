import React from "react";

const imageMap = {
  1: `${process.env.PUBLIC_URL}/images/lower4.png`,
  2: `${process.env.PUBLIC_URL}/images/LowerPart2.png`,
  3: `${process.env.PUBLIC_URL}/images/LowerPart.png`
};

export default function ArtCard({ id, title, price, rating }) {
  const filledStars = Math.floor(rating || (4 + (id % 2)));
  const emptyStars = 5 - filledStars;
  const imageUrl = imageMap[id] || `https://source.unsplash.com/random/400x300?art-${id}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title || `Framed Art #${id}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h4 className="font-bold text-lg">{title || `Framed Art #${id}`}</h4>
        <div className="flex justify-between items-center pt-2">
          <span className="text-teal-600 font-semibold">₹{price || id * 499}</span>
          <div className="flex text-yellow-500">
            {Array.from({ length: filledStars }).map((_, i) => (
              <span key={"filled" + i}>★</span>
            ))}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <span key={"empty" + i}>☆</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
