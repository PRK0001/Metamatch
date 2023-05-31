import React from "react";
import { useNavigate } from "react-router-dom";

function Home ()
{
    const navigate =useNavigate();
   function  handleChange()
    {
    navigate('Order',{replace :true})
    }
    return(
<div>
    <h1>
        Home
    </h1>
    <button onClick={handleChange}>Place Order</button>
</div>
    );
}


export default Home;