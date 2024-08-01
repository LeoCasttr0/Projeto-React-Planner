
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

//rotas
//vamos definir um array com todas as paginas da nossa aplicação
const router = createBrowserRouter([
  {
    //Path : qual caminho o usuario vai digitar na url
    //e dado esse caminho, qual elemento vai ser exibido na tela
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
