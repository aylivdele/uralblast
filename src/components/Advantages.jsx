import { advantagesData } from "../data/advantagesData";

const Advantages = () => {
  return (
    <section className="advantages section appear">
      <div className="advantages__container">
        <h2 className="advantages__title">Почему выбирают нас</h2>

        <div className="advantages__grid">
          {advantagesData.map((item) => (
            <div key={item.id} className="advantage-card">
              <div className="advantage-card__icon">{item.icon}</div>
              <h3 className="advantage-card__title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;