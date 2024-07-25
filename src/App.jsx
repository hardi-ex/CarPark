import { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { getAdverts, getAllAdverts } from "./redux/catalog/operations";
import { useDispatch } from "react-redux";
import { Loader } from "./components/Loader/Loader";
import { resetPage } from "./redux/catalog/slice";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPage());
    dispatch(getAllAdverts());
    dispatch(getAdverts({ page: 1, limit: 12 }));
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
            <HomePage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
