// ProductTemplate.jsx
import { useMemo } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ImageCarousel from "./ImageCarousel";

const tableColumnNamesMap = {
  model: 'Модель',
  voltage: 'Напряжение В/Гц',
  power: 'Мощность кВт',
  telpherCount: 'К-во тельферов',
  turbineCount: 'К-во турбин',
  load: 'Нагрузка на тельфер, кг',
  productivity: 'Расчетная производительность т/час',
  ventilation: 'Производительность вентиляции, м3/час',
  dimensions: 'Диаметр очищаемого изделия, длина/высота, мм',
  availability: 'Наличие',
  widthproduct: 'Максимальная масса одного изделия, кг',
  loadingWeight: 'Максимальная масса загрузки, кг',
  volume: 'Объем обрабатываемых деталей, мм',
  consumption: 'Расход дроби, кг/мин',
  productivityMin: 'Производительность, м/мин',
  pipeDiametr: 'Диаметр трубы, мм',
  flactionFlow: 'Поток дроби, кг/мин',
  partsProcessing: 'Обработка детали Ш*В*Д (мм)',
  sizeWindow: 'Размер окна',
  powerTurbine: 'Мощность турбин КВТ/КГ',
  powerDust: 'Мощность пылеуловителя кВт/М3',
  feedRate: 'Скорость подачи заготовки м/мин',
  maximumWeidth: 'Максимальный вес детали кг/метр',
  powerIs: 'Примерная общая мощность кВт',
  loadStol: 'Максимальная нагрузка на стол, М3/час',
  diameter: 'Диаметр стола, мм',
  conveyorWidth: 'Ширина конвеера, мм',
  speed: 'Скорость отчистки, м/мин',
  shot: 'Расход дроби, кг/мин',
  sizeDetalis: 'Размер обрабатываемой детали, мм',
  maxWorkpieceWeight: 'Максимальный вес обрабатываемой детали, кг',
  fractionConsumpion: 'Расход дроби, кг/мин',
  separatePower: 'Отдельная мощность, т/ч',
}

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



const ProductTemplate = ({ title, image, description, advantages, tableHeader, tableData, carouselImages, constryctionTitle, constryctionDescription, applicationTitle, applicationDescription, titleBlockTurbine, descriptionBlockTurbine }) => {

  return (
    <div className="container_event-product" style={{ overflow: 'hidden'}}>
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
          <h2 className="mg-2 md-9 mg-7">{constryctionTitle}</h2>
          {constryctionDescription.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          <h2 className="mg-2 md-9 mg-7">{applicationTitle}</h2>
          {applicationDescription.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      <h2 className="mg-2 md-9 mg-7">{titleBlockTurbine}</h2>
      <p className="ug-09">{descriptionBlockTurbine}</p>


      <ImageCarousel images={carouselImages}/>

      <AdvantagesSection advantages={advantages} />
     

      <div className="table-model appear">
        <table className="iksweb_l">
          <thead>
            {
              tableHeader 
                ? tableHeader.map((row, index) => (
                <tr key={index}>
                  {
                    row.map((col, colIndex) => (
                      <th key={colIndex} className="table_sm-01" rowSpan={col.rowspan} colSpan={col.colspan}>{col.title ?? col}</th>
                    ))
                  }
                </tr>))
                : (
                  <tr>
                    {
                      Object.keys(tableData[0]).filter(key => key !== "isColSpan" && key !== "text").map((key, index) => (
                      <th className="table_sm-01" key={index}>{tableColumnNamesMap[key] ?? key}</th>
                    ))
                    }
                  </tr>
                )
            }
            
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
                    <td className="table_sm-01" key={i} rowSpan={val.rowspan} colSpan={ val.colspan}>{val.value ?? val}</td>
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
