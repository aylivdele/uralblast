import { Link } from 'react-router-dom';

const CatalogCard = ({ image, title, description, link }) => {
  return (
    <div className="container_card-iner">
      <div className="card">
        <div className="card-front">
          <div className="front-content">
            <img className="card_icon-images" src={image} alt={title} />
            <div className="card_name-header">{title}</div>
            <Link to={link} className="card-link-top">
              Подробнее
            </Link>
          </div>
        </div>

        <div className="card-back">
          <div className="back-content">
            <div className="back_content-description">{description}</div>
            <Link to={link} className="card-link-top">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Catalog = ({id, data, link, title}) => {
  return (
    <section className="product-catalog section" id={id}>
      <h2>{title}</h2>

      <div className="container_card-catalog">
        {data.map((card) => (
          <CatalogCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.cardDescription ?? card.description}
            link={card.link ?? `${link}/${card.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
