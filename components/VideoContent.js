import React from 'react'
import Carousel from './Carousel'
import Video from './Video'

export default function VideoContent() {
  return (
    <>
    <div className='container'>
        <nav>
            <div className='back-btn'>Back</div>
        </nav>
        <div className='video-container'>

          <Video />

          <div className='video-desc'>
            <h2>Betsy & Irv trailer</h2>
            <p>17d ago - Watch Betsy Sailor's story of survival and unexpected hero, Penn State offensive tackle Irv Pankey, who helped her as she confronted a predator, an institution and a justice system. Now streaming on ESPN+.</p>
          </div>
        </div>
    </div>
       <Carousel title={"LIVE"}/>
       <Carousel title={"TRAILERS"} />
    </>
  )
}
