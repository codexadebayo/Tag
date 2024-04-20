import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-nav-box">
                Description
            </div>
            <div className="description-box-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="description-box-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus corporis, maxime quam ullam accusamus possimus maiores repudiandae expedita quaerat, nulla recusandae fugiat deserunt, assumenda dolor molestias ea est consectetur.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit doloribus placeat nemo minima ratione vero natus est consequatur expedita, ad blanditiis. Amet id necessitatibus et perspiciatis esse ipsa vel!</p>
        </div>
        
    </div>
  )
}

export default DescriptionBox