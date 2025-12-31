import { StrictMode } from 'react'
import { BrowserRouter,Routes,Route } from "react-router";
import {createRoot} from "react-dom/client"


const root=createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  </>

)