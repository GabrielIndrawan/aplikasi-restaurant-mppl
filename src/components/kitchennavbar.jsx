import { useNavigation } from "../functions/navigateto";

const KitchenNavBar = () => {
    const{navigateTo} = useNavigation()
    return(
        <div className="w-1/5 h-auto min-h-screen bg-amber-700 select-none">
            <div className="mb-5">
                <div className="justify-self-center pt-5 text-white text-lg">
                    Kitchen
                </div>
                <div className="justify-self-center text-white text-2xl font-bold">
                    SUKAJAYA
                </div>
                <div className="justify-self-center text-white text-lg font-bold">
                    SEMARANG
                </div>
            </div>
            <div className="bg-red-200 mb-5 mx-3 rounded-xl justify-items-center">
                <button className="text-amber-700 py-4 w-full" onClick={()=>{navigateTo("/dapur/pesan")}}>DAFTAR PESANAN</button>
            </div>
            <div className="bg-red-200 mb-5 mx-3 rounded-xl">
                <button className="text-amber-700 py-4 w-full" onClick={()=>{navigateTo("/dapur/menu")}}>KELOLA MENU</button>
            </div>
        </div>
    )
}

export default KitchenNavBar;