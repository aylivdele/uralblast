// ProductRouter.jsx
import { useParams } from "react-router-dom";
import ProductTemplate from "./ProductTemplate";
import { productsData } from "../data/productData";

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return <h2>Продукт не найден</h2>;
  }

  return <ProductTemplate {...product} />;
};

export default ProductPage;