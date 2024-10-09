import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../app/store';
// Error Page
import Error from "../Error/Error";
// Components
import MovieList from "../Components/Body/MovieList";
import NavBar from "../Components/Header/NavBar";
import Favorite from "../Components/Body/Favorite";
import SearchPage from "../Components/Body/SearchPage";
import MovieDetails from "../Components/Body/MovieDetails";


const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};


const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Provider store={store}>
                  <AppLayout />
          </Provider>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MovieList />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "movie/:id",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;