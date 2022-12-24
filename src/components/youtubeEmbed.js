import * as React from 'react'

const YoutubeEmbed = ({ src, width='560' }) => {
  const url = "https://www.youtube.com/embed/" + src

  return (
    <div className="w-full flex justify-center no-prose">
      <div className="aspect-video h-full w-full flex justify-center">
        <iframe width={width} src={url} className="flex flex-grow"
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default YoutubeEmbed


