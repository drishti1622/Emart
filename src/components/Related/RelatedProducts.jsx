import React from "react";
import './RelatedProducts.css'
import data_product from "../assets/data";
import Item from "../Item/Item";

function RelatedProducts(){
    return(
        <div className="relatedproducts">
          <h1>RELATED PRODUCTS</h1>
          <hr />
          <div className="realtedproducts-item">
            {data_product.map((item,i)=>{
                return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}
          </div>
        </div>
    )
}
export default RelatedProducts