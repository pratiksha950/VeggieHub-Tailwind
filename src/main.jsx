import { StrictMode } from 'react'
import { BrowserRouter,Routes,Route } from "react-router";
import {createRoot} from "react-dom/client"
import Home from './views/Home';
import Vegitable from './views/Vegitable';

const root=createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vegitable" element={<Vegitable />} />
      </Routes>
    </BrowserRouter>
  </>

)