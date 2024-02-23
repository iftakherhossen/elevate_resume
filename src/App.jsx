import { CreateResume, Home, NotFound, Preview } from './pages';
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/create-resume",
    element: <CreateResume />,
    errorElement: <NotFound />,
  },
  {
    path: "/preview",
    element: <Preview />,
    errorElement: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;