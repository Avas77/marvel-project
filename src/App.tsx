import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/character/:cid",
      element: <ProfilePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
