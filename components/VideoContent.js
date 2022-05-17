import React from 'react'
import Carousel from './Carousel'
import CategoriesBar from './CategoriesBar'
import Chat from './Chat'
import Header from './Header'
import Video from './Video'

export default function VideoContent() {
  return (
    <>
    <div className='container'>
        <Header />
        </div>

        <div className='categories-container'>
          <CategoriesBar />
        </div>

        <div className='main'>
          <div className='main__video'>
            <Video />
          </div>
           <Chat />
        </div>

       <Carousel title={"LIVE"}/>
       <Carousel title={"TRAILERS"} />
    </>
  )
}
