import type { ProductType } from "./Products";

export type CartItemType = {
  id: string;
  userId: string;
  productId: string;
  product: ProductType;
};
export type CartItemsContectType = {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};
