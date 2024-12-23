import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import PemesananLayout from './layouts/pemesananlayouts';

function App() {
  return(
    <>
      <Header title="SUKAJAYA" secondaryTitle="Semarang" color="bg-amber-700"/>
      <PemesananLayout/>
      <Footer desc="Total : 0"/>
    </>
  )
}

export default App;
