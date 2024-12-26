import KitchenNavBar from "../components/kitchennavbar";
import DaftarPesananLayout from "../layouts/daftarpesananlayouts";

const DaftarPesananPage = () => {
    return(
        <div className="flex flex-row font-hardigan">
            <KitchenNavBar/>
            <DaftarPesananLayout/>
        </div>
    )
}

export default DaftarPesananPage;