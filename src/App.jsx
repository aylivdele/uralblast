import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Video from "./components/BackgroundVideo";
import Catalog from "./components/Catalog";
import Apps from "./components/Services";
import Form from "./components/ContactForm"
import Benefits from "./components/Advantages"
import Faq from "./components/Faq"
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import PartPage from './components/PartPage';
import { productsData } from './data/productData';
import { partsData } from './data/partsData';
import SideButton from './components/SideButtons';
import useSrollToTop from './hooks/scrollToTop.hook';
import useAnimations from './hooks/useAnimations.hook';

function App() {

  useSrollToTop();
  useAnimations();

  return (
    <div className="app">
      <SideButton/>
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
              <Faq />
            </div>
          </>
        } />

        {/* Страницы продуктов */}
        <Route path="/products" element={<Catalog id='products' data={productsData} link={'/products'} title={'Наша продукция'}/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/parts" element={<Catalog id='parts' data={partsData} link={'/parts'} title={'Запчасти'}/>} />
        <Route path="/parts/:id" element={<PartPage />} />

        {/* <Route path="/news" element={<NewsPage />} /> */}
      </Routes>
      <Footer />

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