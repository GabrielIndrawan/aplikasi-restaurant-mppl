import Footer from "../components/footer";
import Header from "../components/header";
import PemesananLayout from "../layouts/pemesananlayouts";

const PemesananPage = () => {
    return(
        <>
          <Header title="SUKAJAYA" secondaryTitle="Semarang" color="bg-amber-700"/>
          <PemesananLayout/>
          <Footer desc="2024@CopyrightSukajayaKopi"/>
        </>
    )
}

export default PemesananPage;