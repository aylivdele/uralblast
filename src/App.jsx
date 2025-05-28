import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Video from "./components/BackgroundVideo";
import Catalog from "./components/Catalog";
import Apps from "./components/Services";
import Form from "./components/ContactForm"
import Benefits from "./components/Advantages"
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import PartPage from './components/PartPage';
import { productsData } from './data/productData';
import { partsData } from './data/partsData';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <div className="app">
       <Navbar />
       
      <Routes>
        <Route path="/" element={
          <>
            <Video />
            <div className='sections'>
              <Catalog id='products' data={productsData} link={'/products'} title={'Наша продукция'}/>
              <Apps />
              <Form />
              <Benefits />
            </div>
            <Footer />
          </>
        } />

        {/* Страницы продуктов */}
        <Route path="/products" element={<Catalog id='products' data={productsData} link={'/products'} title={'Наша продукция'}/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/parts" element={<Catalog id='parts' data={partsData} link={'/parts'} title={'Запчасти'}/>} />
        <Route path="/parts/:id" element={<PartPage />} />

        <Route path="/news" element={<NewsPage />} />
       
      </Routes>
    </div>
  );
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Navbar />
//     <Video />
//     <Catalog />
//     <Apps />
//     <Form />
//     <Benefits />
//   </React.StrictMode>
// );