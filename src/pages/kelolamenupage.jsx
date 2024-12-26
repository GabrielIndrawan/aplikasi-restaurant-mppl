import KelolaMenuLayout from "../layouts/kelolamenulayouts";
import KitchenNavBar from "../components/kitchennavbar";

const KelolaMenuPage = () => {
    return(
        <div className="flex flex-row font-hardigan">
            <KitchenNavBar/>
            <KelolaMenuLayout/>
        </div>
    )
}

export default KelolaMenuPage;