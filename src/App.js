import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PemesananPage from './pages/pemesananpage';
import DetailPemesananPage from './pages/detailpemesananpage';

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/pesan",
        element: <PemesananPage/>
      },
      {
        path: "/pesan/detail",
        element: <DetailPemesananPage/>
      },
    ]
  )

  return(
    <RouterProvider router={routes}/>
  )
}

export default App;
