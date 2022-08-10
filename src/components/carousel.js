//Source: https://daisyui.com/components/carousel/#item3

import * as React from "react"

export default function Carousel(){
	return (
		<div>
			<div class="carousel w-full">
			  <div id="item1" class="carousel-item w-full">
			    <img src="https://placeimg.com/800/200/arch" class="w-full" />
			  </div> 
			  <div id="item2" class="carousel-item w-full">
			    <img src="https://placeimg.com/800/200/arch" class="w-full" />
			  </div> 
			  <div id="item3" class="carousel-item w-full">
			    <img src="https://placeimg.com/800/200/arch" class="w-full" />
			  </div> 
			  <div id="item4" class="carousel-item w-full">
			    <img src="https://placeimg.com/800/200/arch" class="w-full" />
			  </div>
			</div> 
			<div class="flex justify-center w-full py-2 gap-2">
			  <a href="#item1" class="btn btn-xs btn-secondary">1</a> 
			  <a href="#item2" class="btn btn-xs btn-secondary">2</a> 
			  <a href="#item3" class="btn btn-xs btn-secondary">3</a> 
			  <a href="#item4" class="btn btn-xs btn-secondary">4</a>
			</div>
		</div>
	)
}