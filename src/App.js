import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PemesananPage from './pages/pemesananpage';
import DetailPemesananPage from './pages/detailpemesananpage';
import DaftarPesananPage from './pages/daftarpesananpage';
import KelolaMenuPage from './pages/kelolamenupage';

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
      {
        path: "/dapur/pesan",
        element: <DaftarPesananPage/>
      },
      {
        path: "/dapur/menu",
        element: <KelolaMenuPage/>
      },
    ]
  )

  return(
    <RouterProvider router={routes}/>
  )
}

export default App;
