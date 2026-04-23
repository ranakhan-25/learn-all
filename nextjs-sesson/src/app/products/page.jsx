import ProductCard from "@/components/ProductCard";
import DataFetch from "@/lib/DataFetch";
import React, { Suspense } from "react";

const ProductPage = async () => {
  const products = await DataFetch("http://localhost:3000/product", {
    next:{revalidate:20},
  });

  return (
    <div className="max-w-400 mx-auto  my-5">
      <h1 className="text-center font-bold text-2xl my-3 mt-7"> Products page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Suspense>
    </div>
  );
};

export default ProductPage;
