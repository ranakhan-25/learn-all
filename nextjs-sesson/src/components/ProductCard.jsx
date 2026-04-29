
// import DeleteAction from "./DeleteAction";

const ProductCard = ({ product }) => {
  const { name, price, description } = product;
  return (
    <div className="bg-red-200 p-3 rounded-lg text-center">
      <h1 className="text-xl font-medium">{name}</h1>
      <p className="font-bold text-red-500 my-3">{price}</p>
      <p className="text-gray-600 ">{description}</p>

      <form action={""}>
        <button
          type="submit"
          className="inline px-5 text-lg text-white rounded-md hover:bg-blue-300 hover:border-b border-blue-400 py-1.5 bg-blue-400 mt-3"
        >
          delete
        </button>
      </form>
    </div>
  );
};

export default ProductCard;
