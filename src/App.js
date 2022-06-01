import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";

const Homepage = lazy(() => import("./pages/Homepage"));
const Moviepage = lazy(() => import("./pages/Moviepage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <Homepage></Homepage>
                </>
              }
            ></Route>

            <Route path="/movies" element={<Moviepage></Moviepage>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
