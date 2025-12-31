import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "react-toastify";
import type { Products } from "../Api/types/Products.types";

export interface CartItem extends Products {
  quantity: number;
}

interface CartContextType {
  cartItem: CartItem[];
  addToCard: (product: Products, amount?: number) => void;
  updateQuantity: (productId: number | string, action: "increase" | "decrease") => void;
  deleteItem: (productId: number | string) => void;
  setCardItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItem, setCardItem] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("shopping-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCard = (product: Products, amount: number = 1) => {
    const itemInCart = cartItem.find((item) => item._id === product._id);

    if (itemInCart) {
      const updatedCard = cartItem.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + amount } : item
      );
      setCardItem(updatedCard);
    } else {
      setCardItem([...cartItem, { ...product, quantity: amount }]);
      toast.success(`${amount} item added to cart!`);
    }
  };

  const updateQuantity = (productId: number | string, action: "increase" | "decrease") => {
    setCardItem((prevItems) => 
      prevItems
        .map((item) => {
          if (item._id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit += 1;
            } else if (action === "decrease") {
              newUnit -= 1;
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const deleteItem = (productId: number | string) => {
    setCardItem(cartItem.filter((item) => item._id !== productId));
    toast.error("Item removed from cart");
  };

  const clearCart = () => {
  setCardItem([]);
};

  return (
    <CartContext.Provider value={{ cartItem, setCardItem, addToCard, updateQuantity, deleteItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};