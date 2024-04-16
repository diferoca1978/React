import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { ProductsCompany } from "../pages/Products/components/ProductsCompany";
import { ProductsHome } from "../pages/Products/components/ProductsHome";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout />} >
      <Route path="" element={ <Home /> } />
      <Route path="productscompany" element={ <ProductsCompany /> } />
      <Route path="productshome" element={ <ProductsHome /> } />
      <Route path="about" element={ <About /> } />
    </Route>
  )
)