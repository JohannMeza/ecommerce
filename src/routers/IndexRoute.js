import { Route, Routes } from "react-router-dom";
import ArticulosPage from "../modules/ArticulosPage";
import HomePage from "../modules/HomePage";

export default function IndexRoute () {  
  return (
    <Routes>
      <Route path={"/*"} element={<HomePage />} />
      <Route path={"/articulos"} element={<ArticulosPage />} />
    </Routes>
  )
}