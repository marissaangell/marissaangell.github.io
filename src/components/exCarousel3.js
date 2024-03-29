//source: https://codesandbox.io/s/react-multi-item-carousel-uvmchp?file=/src/data.json:0-1462
import * as React from 'react'
import { useState, useRef, useEffect } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'


const data = {
  "resources": [
    {
      "title": "Find me on Twitter",
      "imageUrl": "https://placeimg.com/300/300/any"
    },
    {
      "title": "Welcome to Ark Labs",
      "imageUrl": "https://placeimg.com/300/300/animals"
    },
    {
      "title": "Some sort of third title",
      "imageUrl": "https://placeimg.com/300/300/architecture"
    },
    {
      "title": "A personal site perhaps?",
      "imageUrl": "https://placeimg.com/300/300/nature"
    },
    {
      "title": "Super item number five",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": "https://placeimg.com/300/300/people"
    },
    {
      "title": "Super item number six",
      "imageUrl": "https://placeimg.com/300/300/tech"
    },
    {
      "title": "Super item number seven",
      "imageUrl": "https://placeimg.com/300/300/animals"
    },
    {
      "title": "Super item number eight",
      "imageUrl": "https://placeimg.com/300/300/people"
    },
    {
      "title": "Super item number the last",
      "imageUrl": "https://placeimg.com/300/300/tech"
    }
  ]
}

const ExCarousel3 = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto no-prose">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <ChevronLeftIcon />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <ChevronRightIcon />
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
                <div
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExCarousel3;
