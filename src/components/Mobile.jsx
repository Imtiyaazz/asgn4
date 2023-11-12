import React from "react";


export const Mobile =({url,title,price,desc})=>{
    return(
        <div className="sub">
        
            <img src={`img/${url}.webp`} alt="" />
            <h3>{title}</h3>
            <h3>RS. {price}</h3>
            <p>{desc}</p>
            <h4>ADD TO CART</h4>
            <h4>BUY</h4>

        </div>
    )
}




