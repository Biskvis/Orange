import React from 'react'
import Image from 'next/image'

interface Info {
    name: string;
    title: string;
    review: string;
    url: string;
    stars: number;
}


const ReviewCard: React.FC<{ info: Info }> = ({ info }) => {

    const { name, title, review, stars } = info;

    const displayStars = (stars: number) => {
        let starsArray = [];
        for (let i = 0; i < stars; i++) {
          starsArray.push(
            <Image
              key={i}
              className="block mr-1.5"
              src="/star.png"
              alt="Star"
              width={16}
              height={16}
            />
          );
        }
        return starsArray;
      };

  return (
    <div className="w-full max-w-sm flex-shrink-0 mr-8">
      <div className="p-6 bg-white rounded-4xl shadow-lg">
        <div className="flex mb-6 items-center">
          <div className="ml-5">
            <span className="block text-xl font-semibold leading-none">{name}</span>
            <span className="block text-sm text-gray-500">{title}</span>
          </div>
        </div>
        <p className="text-sm text-gray-900 mb-6">{review}</p>
        <div className="flex items-center">
          {displayStars(stars)}
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
