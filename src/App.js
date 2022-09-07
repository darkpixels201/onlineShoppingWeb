import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const Signup = React.lazy(() => import('./pages/Signup'))
const DefaultLayout = React.lazy(() => import('./components/Dashboard/DefaultLayout'))
const Sidebarnav = React.lazy(() => import('./pages/Sidebarnav'))
const Furniture = React.lazy(() => import('./pages/Furniture'))
const ProductDetailScreen = React.lazy(() => import('./pages/ProductDetailScreen'))

 


function App() {
  return (
    <HashRouter >
     
        <Suspense>
      <Routes>
      <Route path="/sidebarr" name="Sidebarnav" element={<Sidebarnav />} />
      <Route exact path="/" name="Home" element={<Home />} />
      <Route exact path="/login" name="Login" element={<Login />} />
      <Route exact path="/signup" name="Signup" element={<Signup />} />
      <Route path="*" name="DefaultLayout" element={<DefaultLayout />} />
      <Route path="/product/:id" element={<ProductDetailScreen />} />
      <Route path="*" name="furniture" element={<Furniture />} />
      </Routes>
        </Suspense>
    </HashRouter>
  );
}

export default App;
