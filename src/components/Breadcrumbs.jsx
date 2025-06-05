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
        pathname.split('/').filter(part => !!part).flatMap((part, index) => {
          if (definedNames[part]) {
            return [<div key={`divider${index}`}>/</div>, (<Link key={index} className="link" to={`/${part}`}>{definedNames[part]}</Link>)];
          }
          return [<div key={`divider${index}`}>/</div>,`${name ?? part}`];
        })
      }
    </div>
  );
};

export default Breadcrumbs;