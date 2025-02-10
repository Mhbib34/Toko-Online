import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/common/LoadingAnimation";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingAnimation className="w-full h-full flex justify-center items-center" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-48 h-48" />
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <p>Rating: {product.rating.rate} ⭐</p>
    </div>
  );
}
