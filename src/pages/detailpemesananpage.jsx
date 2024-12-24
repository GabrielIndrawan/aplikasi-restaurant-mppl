import Footer from "../components/footer";
import Header from "../components/header";
import DetailPemesananLayout from "../layouts/detailpemesananlayouts";

const DetailPemesananPage = () => {
    return(
        <>
          <Header title="SUKAJAYA" secondaryTitle="Semarang" color="bg-amber-700"/>
          <DetailPemesananLayout/>
          <Footer desc="2024@CopyrightSukajayaKopi"/>
        </>
    )
}

export default DetailPemesananPage;