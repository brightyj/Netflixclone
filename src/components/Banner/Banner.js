import React from 'react'
import "./Banner.css"
import banner from"../../assests/banner/moneybanner.jpg"
const Banner = () => {
  return (
  <>
    <div className='Banner'>
      <div className='content'>
        <h1 style={{color:"white"}}className='Title'>INTERSELLAR</h1>
        <div className='bannerbutton'></div>
          <button className='button'>► PLAY</button>
          <button className='button'>+ MY LIST</button>
        </div>
      <div className='description'> 
      "Interstellar" is a sci-fi masterpiece directed by Christopher Nolan. Released in 2014, the film takes audiences on an epic journey through space and time. The narrative revolves around a group of astronauts tasked with finding a new habitable planet for humanity, exploring complex themes of love, survival, and the boundless mysteries of the cosmos. With stunning visuals, a gripping storyline, and an emotional core, "Interstellar" has become a modern classic in the science fiction genre.
.</div>
    </div>
    <div className='fade_bottom'></div>
    </>
  );
}
export default Banner
