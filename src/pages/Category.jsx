import React, { useContext } from "react";
import './Css/category.css'
import { Shopcontext } from '../context/Shopcontext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from "../components/Item/Item";

const Category = (props) => {
    const { all_product } = useContext(Shopcontext);
    return (
        <div className="category">
            <img className="category-banner" src={props.banner} alt="" />
            <div className="indexsort">
                <p><span>
                    Showing 1-12</span> Out of 36 products</p>
                    <div className="category-sort">
                        Sort by <img src={dropdown_icon} alt="" />
                    </div>
            </div>
            <div className="category-products">
                {all_product.map((item,i)=>{
                    console.log("props.category:", props.category);
                    console.log("item.category:", item.category);
                
                   if(props.category===item.category){
                    return <Item  key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}/>
                   }
                   else{
                    return null;
                   }
                })}
            </div>
            <div className="loadmore">
                EXPLORE MORE
            </div>
        </div>
    );
}

export default Category;
