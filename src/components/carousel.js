//Made by following this tutorial: https://ndpniraj.com/blogs/responsive-infinite-carousel-slider-using-react-and-tailwind-css

import * as React from "react"
import * as ReactDOM from "react-dom"
import { useState, useRef, useEffect } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const images = ["https://placeimg.com/300/300/any", "https://placeimg.com/300/300/animals", "https://placeimg.com/300/300/architecture"]
let count = 0;

const ImgCarousel = ({ images }) => {

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
  }

 const handleOnPrevClick = () => {
   const numImages = images.length
   count = (currentIndex + numImages - 1) % numImages
   setCurrentIndex(count)
 }

 function moveToIndex(index){
    count = index
    setCurrentIndex(index)
 }

const [currentIndex, setCurrentIndex] = useState(0)

return (
    <div className="max-w-sm m-auto">
      <div className="w-full relative select-none">
        <img src={images[currentIndex]} alt="" className="mx-auto "/>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={handleOnPrevClick}><ChevronLeftIcon/></button>
            <button onClick={handleOnNextClick}><ChevronRightIcon/></button>
        </div>
        <div className="w-full flex flex-row justify-center gap-2 mx-auto">
          { images.map((image, index) => (
            index === currentIndex
            ? <button className="bg-gray-400 rounded-full p-2" />
            : <button className="bg-gray-600 rounded-full p-2" onClick={() => moveToIndex(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImgCarousel