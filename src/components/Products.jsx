import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <input type="Search" placeholder="Search Product" />
      </div>
      <nav className="secondary">
      <Link to='featured'>Featured</Link>
      <Link to='new'>new</Link>
      </nav>
    </>
  );
}
export default Products;
