import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/movie-detail",
    element: <MovieDetails />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
