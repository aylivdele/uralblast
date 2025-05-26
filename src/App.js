import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from "./Navbar";
import Video from "./Video";
import Catalog from "./Catalog";
import Apps from "./Apps";
import Form from "./FormData"
import Benefits from "./Benefits"
import Footer from './Footer';
import Zapchasti from './products/Zapchasti';
import Lopast from './zapchasti/Lopast';
import Camera from './zapchasti/Camera';
import Impeller from './zapchasti/Impeller';
import Coleso from './zapchasti/Coleso';
import VerkhnyayaBronya from './zapchasti/VerkhnyayaBronya';
import BokovayaBronya from './zapchasti/BokovayaBronya';
import TortsevayaBronya from './zapchasti/TortsevayaBronya';
import Zashchita from './zapchasti/Zashchita';
import Kovsh from './zapchasti/Kovsh';
import Shtorka from './zapchasti/Shtorka';
import Shnek from './zapchasti/Shnek';
import ZashchitaShneka from './zapchasti/ZashchitaShneka';
import ReportsPage from './Otchety';
import ProductPage from './products/ProductPage';

function App() {
  return (
    <div className="app">
       <Navbar />
       
      
      <Routes>
        <Route path="/" element={
          <>
            <Video />
            <Catalog />
            <Apps />
            <Form />
            <Benefits />
            <Footer />
          </>
        } />

        {/* Страницы продуктов */}
        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/zapchasti" element={<Zapchasti />} />
        <Route path="/lopast" element={<Lopast />} />
        <Route path="/raspredelitelnaya-kamera" element={<Camera />} />
        <Route path="/impeller" element={<Impeller />} />
        <Route path="/Koleso-dlya-krepleniya-lopastey" element={<Coleso />} />
        <Route path="/verkhnyaya-bronya-turbiny" element={<VerkhnyayaBronya />} />
        <Route path="/bokovaya-bronya-turbiny" element={<BokovayaBronya />} />
        <Route path="/tortsevaya-bronya" element={<TortsevayaBronya />} />
        <Route path="/zashchita-drobemetnoy-kamery" element={<Zashchita />} />
        <Route path="/kovsh-dlya-elevatora" element={<Kovsh />} />
        <Route path="/shtorka-dlya-drobemeta" element={<Shtorka />} />
        <Route path="/shnek" element={<Shnek />} />
        <Route path="/zashchita-shneka" element={<ZashchitaShneka />} />
        <Route path="/otchety" element={<ReportsPage />} />
       
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