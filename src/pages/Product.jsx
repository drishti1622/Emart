import React, { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { useParams } from "react-router";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../components/Related/RelatedProducts";

function Product() {
  const { all_product } = useContext(Shopcontext);
  const { id } = useParams();
  const product = all_product.find((e) => e.id === Number(id));

  if (!product) {
    return <div>Product with ID {id} not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </div>
  );
}
export default Product;
