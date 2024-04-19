import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  if (!all_products) {
    return <div>Loading...</div>; // Or any other loading indicator
  }
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {

            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />

          }
          else {
            return null

          }
        })}
      </div>




    </div>
  )
}

export default ShopCategory