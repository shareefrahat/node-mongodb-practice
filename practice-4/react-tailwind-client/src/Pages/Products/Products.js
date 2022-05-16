import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <div>
      <section className="my-10">
        <h3 className="text-2xl text-blue-800 underline">Our Products</h3>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-10">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
