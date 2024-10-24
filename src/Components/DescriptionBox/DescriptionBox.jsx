import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(145)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae praesentium dolorem ipsa natus repellat temporibus, harum eius modi tenetur quas illum quae fuga eum? Earum quam et corrupti autem doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis officiis labore praesentium, rerum obcaecati id atque nihil totam est alias assumenda dolorem eos autem eius a quod ut vitae!</p>
        </div>
    </div>
  )
}

export default DescriptionBox