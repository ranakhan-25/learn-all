import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useEffect } from "react";
import { getProduct } from "./productSlice";

const ProductsView = () => {
  const { isLoading, products, error } = useSelector(
    (state: RootState) => state.productsR,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <div>{products.length > 0 && <div className="grid grid-cols-3 p-5">
    {
      products.slice(0,10).map(product => <div key={product.id} className="border p-5 m-2 rounded ">
        <h1>{product.title}</h1>
        <img src={product.thumbnailUrl} alt="img" />
        <button className="bg-red-400 py-1 px-3 my-2 rounded cursor-pointer hover:bg-red-500">Delete</button>
        <button className="bg-blue-400 py-1 px-3 my-2 rounded cursor-pointer hover:bg-blue-500 ml-5">Update</button>
      </div>)
  }
  </div>}</div>;
};

export default ProductsView;
