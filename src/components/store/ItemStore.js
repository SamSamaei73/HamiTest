import React from 'react'

const ItemStore = ({bookPhoto , title , color , price}) => {
  return (
    <div id='ItemStore' style={color}>
        <div className="InfoPart">
            <h3>{title}</h3>
            <h5>قیمت</h5>
            <h4>{price} <span>تومان</span></h4>
        </div>
        <div className="ImgPart">
            <img src={bookPhoto} alt="bookPhoto" />
        </div>
        <div className="btnPart">
            <button>اضافه به سبد خرید</button>

        </div>
        
    </div>
  )
}

export default ItemStore