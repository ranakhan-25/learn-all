"use server"
const DeleteAction = async (ProductId) => {
  console.log(ProductId)
  const res = await fetch(`http://localhost:3000/products/${productId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete product");
  }
}

export default DeleteAction