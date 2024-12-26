import { useState } from "react";
import Card from "../components/cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "../functions/navigateto";
import { useAtom } from "jotai";
import { pesanan } from "../state/statepemesanan";

const PemesananLayout = () => {
    const [category, setCategory] = useState("")
    const [pemesanan,setPemesanan] = useAtom(pesanan)
    const {navigateTo} = useNavigation()

    const updateQuantity = (name, newQuantity) => {
        setPemesanan((pemesanan) =>
            pemesanan.map((item) =>
                item.name === name ? { ...item, jumlah: newQuantity } : item
            )
        );
    };

    const generateMenus = (categories) => {
        const filteredMenus =
            categories !== ""
                ? pemesanan.filter((menu) => menu.category === categories)
                : pemesanan;

        return filteredMenus.map((menu, index) => (
            <div
                className={`mt-6 ${index === 0 ? "ml-4" : ""}`}
                key={menu.name}
            >
                <Card
                    item={menu}
                    click={() => {
                        updateQuantity(menu.name, (menu.jumlah||0) + 1);
                        console.log(menu)
                    }}
                />
            </div>
        ));
    };

    return(
        <div className="font-hardigan">
            <div className="mt-0 bg-red-200 pt-2 pr-3 pb-4">
                <div className="text-xl justify-self-center font-bold mb-2 mt-6 text-amber-700">
                    Kopi dan kuliner nusantara
                </div>
                <div className="text-lg justify-self-center font-bold mb-2 text-amber-700">
                    "Cita rasa masakan nusantara & beragam kahwa di tengah Kota Lama"
                </div>
                <div className="text-lg  ml-4 justify-self-start font-bold mb-2 mt-5 text-amber-700">
                    Kategori
                </div>
                <div className="flex flex-row mr-5 ml-4">
                    <div className="sm:space-x-3 space-x-2 sm:space-y-0 space-y-2">
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm " onClick={()=>setCategory((category === "Nusantara" )? "":"Nusantara")}>NUSANTARA</button>
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm " onClick={()=>setCategory((category === "Western" )? "":"Western")}>WESTERN</button>
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm " onClick={()=>setCategory((category === "Kopi" )? "":"Kopi")}>KOPI</button>
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm " onClick={()=>setCategory((category === "Non Kopi" )? "":"Non Kopi")}>NON KOPI</button>
                    </div>
                    <div className="ml-auto ">
                        <FontAwesomeIcon onClick={()=>{navigateTo("/pesan/detail")}} icon={faCartShopping} className="text-amber-700 ml-auto text-xl"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 space-x-4 w-auto space-y-6">
                    {generateMenus(category)}
                </div>
                <div className="justify-self-center text-amber-700 text-lg font-bold mt-12 mb-7">
                    harga belum termasuk PPN 11% dan Service 5%
                </div>
            </div>
        </div>    
    )
}

export default PemesananLayout;