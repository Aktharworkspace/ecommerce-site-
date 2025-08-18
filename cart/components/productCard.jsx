import React  from "react";
import { Link } from "react-router-dom";


const ProductCard = (props) =>{

    const {id,name,price,image,slug} = props.data;

    return(
        <div className="bg-white p-5 rounded-xl shadow-sm">
            <Link to={slug}>
            <img src={image} alt="" className="w-full h-80"/>
            </Link>
        </div>

    )

}

export default ProductCard;
