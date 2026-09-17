import { Link } from "react-router";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import type { ProductsType } from "../types/Products";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [products, setProducts] = useState<ProductsType[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "flex items-center justify-center p-2 text-sm md:text-base cursor-pointer h-[35px] max-w-[130px] min-w-[100px] cursor-pointer rounded-sm bg-[#F2DAAC] font-bold border border-[#F2DAAC] text-[#161410]";
    const elementoNaoSelecionado =
      "flex items-center justify-center p-2 text-sm md:text-base cursor-pointer h-[35px] max-w-[130px] min-w-[100px] rounded-sm bg-transparent border-[#F2DAAC] border font-bold text-[#F2DAAC] border-[#F2DAAC] ";

    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      return;
    }
  };
  const filterProduct = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-auto flex w-full flex-col p-3 text-white md:w-[737px]">
      <div className="flex gap-2">
        <Link to="">
          <div
            className={getCategoryClass("Hamburguer")}
            onClick={() => handleChangeCategory("Hamburguer")}
          >
            Hamburguer
          </div>
        </Link>
        <Link to="">
          <div
            className={getCategoryClass("Bebidas")}
            onClick={() => handleChangeCategory("Bebidas")}
          >
            Bebidas
          </div>
        </Link>
        <Link to="">
          <div
            className={getCategoryClass("Porções")}
            onClick={() => handleChangeCategory("Porções")}
          >
            Porções
          </div>
        </Link>
      </div>
      <div className="mt-5 mb-2.5 flex flex-col md:mt-4">
        <p className="text-base font-bold text-[#F2DAAC] uppercase md:text-lg">
          {category}
        </p>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        {filterProduct.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            img={product.img}
            key={product.id}
            setProducts={setProducts}
          />
        ))}
        {filterProduct.length === 0 && <p>Não há produtos cadastrados</p>}
      </div>
    </div>
  );
};
export default Home;
