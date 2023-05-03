import React from 'react'
import img1 from "../assets/6860646.jpg"

export default function HomeMid() {
  return (
    <div>
      <div className='hero-mid'>
        <div>
            <img src={img1} alt="" />
        </div>
        <div className='hero-mid-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam rerum maxime sed ut fuga rem modi veniam recusandae iste. Rerum vel blanditiis quisquam laudantium.
        </div>
      </div>
      <div className='hero-mid'>
        <div className='hero-mid-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam rerum maxime sed ut fuga rem modi veniam recusandae iste. Rerum vel blanditiis quisquam laudantium.
        </div>
        <div>
            <img src={img1} alt="" />
        </div>
      </div>
      <div className='hero-mid'>
        <div>
            <img src={img1} alt="" />
        </div>
        <div className='hero-mid-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam rerum maxime sed ut fuga rem modi veniam recusandae iste. Rerum vel blanditiis quisquam laudantium.
        </div>
      </div>
    </div>
  )
}
