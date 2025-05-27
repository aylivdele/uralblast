// ProductRouter.jsx
import { useParams } from "react-router-dom";
import PartsTemplate from "./PartTemplate";
import { partsData } from "../data/partsData";

const PartPage = () => {
  const { id } = useParams();
  const part = partsData.find(p => p.id === id);

  if (!part) {
    return <h2>Запчасть не найдена</h2>;
  }

  return <PartsTemplate {...part} />;
};

export default PartPage;