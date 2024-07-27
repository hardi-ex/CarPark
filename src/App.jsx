import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Loader } from "./components/Loader/Loader";

import { getAllAdverts } from "./redux/catalog/operations";
import { getFavoriteAdverts } from "./redux/favorites/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdverts = async () => {
      await dispatch(getAllAdverts());
      dispatch(getFavoriteAdverts());
    };

    fetchAdverts();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Loader />}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader />}>
              <FavoritesPage />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <Navigate to="/" />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
