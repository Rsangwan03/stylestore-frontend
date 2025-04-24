import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductGrid() {
  const { cartItems } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      
      {cartItems.length === 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">Your basket is empty</p>
        </div>
      )}
    </div>
  );
}