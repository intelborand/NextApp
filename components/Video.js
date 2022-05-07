import React from 'react'



export default function Video() {
  return (
    <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            width="100%"
            height="800"
            poster="MyPoster.jpg"
            data-setup="{}"
            >
            <source src="MY_VIDEO.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
          </video>
  )
}
