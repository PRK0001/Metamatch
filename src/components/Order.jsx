import React from "react";
import { useNavigate } from "react-router-dom";

function Order ()
{
    const navigate = useNavigate();
    function handleChange()
    {
        navigate(-1);
    }
    return (<div>
        Order Conformed!
        <button onClick={handleChange}>go back</button>
    </div>);
}
export default Order;