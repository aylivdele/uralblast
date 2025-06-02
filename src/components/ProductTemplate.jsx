// ProductTemplate.jsx
import Breadcrumbs from "./Breadcrumbs";
import ImageCarousel from "./ImageCarousel";

const AdvantagesSection = ({ advantages }) => (
  <section style={{ margin: "40px 0" }} className="appear">
    <h2 className="gradient-text">Основные преимущества</h2>
    <div className="container_modification_mufel-pech">
      {advantages.map((advantage, index) => (
        <div key={index} className="card_modification_mufel-pech">
          <h3 className="card-mufelnya_pech_header">{advantage.title}</h3>
          <p className="card-mufelnya_pech_text">{advantage.text}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProductTemplate = ({ title, image, description, advantages, tableData, carouselImages }) => {
  

  return (
    <div className="container" style={{ overflow: 'hidden'}}>
      <Breadcrumbs name={title}/>
      <div className="top-section">
        <div className="image-block from-left">
          <img src={image} alt={title} />
        </div>
        <div className="text-block from-right">
          <h2 className="mg-2 md-9 mg-7">{title}</h2>
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      <ImageCarousel images={carouselImages}/>

      <AdvantagesSection advantages={advantages} />

      <div className="box_mufelnye_pechi-table-model appear">
        <table className="iksweb_l">
          <thead>
            <tr>
              {Object.keys(tableData[0]).filter(key => key !== "isColSpan" && key !== "text").map((key, index) => (
                <th className="table_sm-01" key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              row.isColSpan ? (
                <tr key={index}>
                  <td className="table_sm-01" colSpan="100%">{row.text}</td>
                </tr>
              ) : (
                <tr key={index}>
                  {Object.values(row).map((val, i) => (
                    <td className="table_sm-01" key={i}>{val}</td>
                  ))}
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTemplate;