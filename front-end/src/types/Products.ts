export type ProductsType = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};
