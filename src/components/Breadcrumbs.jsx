import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const definedNames = {
  products: 'Продукты',
  parts: 'Запчасти'
};

const Breadcrumbs = ({name}) => {
  const { pathname } = useLocation();

  return (
    <div className="breadcrumbs">
      <Link to='/' className="link">Главная</Link> 
      {
        pathname.split('/').filter(part => !!part).flatMap(part => {
          if (definedNames[part]) {
            return [<div>/</div>, (<Link className="link" to={`/${part}`}>{definedNames[part]}</Link>)];
          }
          return [<div>/</div>,`${name ?? part}`];
        })
      }
    </div>
  );
};

export default Breadcrumbs;