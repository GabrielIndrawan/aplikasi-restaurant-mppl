import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GreyBar from "../components/greybar";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "../functions/navigateto";
import { useAtom } from "jotai";
import { defaultValue, pesanan } from "../state/statepemesanan";

const DetailPemesananLayout = () => {
    const {navigateTo} = useNavigation()
    const [pemesanan,setPemesanan] = useAtom(pesanan)
    const calculateSummary = () => {
        return pemesanan.reduce(
            (acc, item) => {
                acc.totalPrice += item.price * item.jumlah;
                acc.totalQuantity += item.jumlah;
                return acc;
            },
            { totalPrice: 0, totalQuantity: 0 }
        );
    }
    const updateQuantity = (name, newQuantity) => {
        setPemesanan((pemesanan) =>
            pemesanan.map((item) =>
                item.name === name ? { ...item, jumlah: newQuantity } : item
            )
        );
    };
    const { totalPrice, totalQuantity } = calculateSummary();
    const generatePesanan = () => {
        return pemesanan.map(
            (pesan)=>{
                return (pesan.jumlah!==0)?
                (
                <GreyBar key={pesan.name}>
                    <div className="flex flex-row my-4 items-center">
                        <label className="font-bold ml-3 w-[100px] text-md mr-1 ">
                            {pesan.name}
                        </label>
                        <div className="font-bold text-md">
                            :
                        </div>
                        <div className="w-[10px]"/>
                        <div className="text-md ml-auto mr-5">
                            Rp {pesan.price*pesan.jumlah}
                        </div>
                        <button onClick={()=>updateQuantity(pesan.name,pesan.jumlah-1)}>
                            <FontAwesomeIcon className="text-amber-700 " icon={faArrowLeft}/>
                        </button>
                        <div className="text-md mx-3">
                            {pesan.jumlah}
                        </div>
                        <button onClick={()=>updateQuantity(pesan.name,pesan.jumlah+1)}>
                            <FontAwesomeIcon className="text-amber-700" icon={faArrowRight}/>
                        </button>
                    </div>
                </GreyBar>
                )
                :
                (
                    <></>
                )
            }
        )
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="font-hardigan">
            <div className="mt-0 bg-red-200 pt-2 pr-3 pb-4">
                <div onClick={()=>{navigateTo("/pesan/")}} className="text-lg  ml-4 justify-self-start font-bold mb-2 mt-5 bg-amber-700 text-white rounded-full">
                    <FontAwesomeIcon icon={faArrowLeft} className="mt-1 mx-4"/>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <GreyBar formation="flex flex-row py-4">
                        <label className="font-bold ml-3 text-md mr-1" htmlFor="name">
                            Nama Pelanggan : 
                        </label>
                        <input id="name" name="nama pelanggan" className="bg-gray-400 mt-1 w-64 pl-2" maxLength={30}/>
                    </GreyBar>
                    <div className="text-amber-700 font-bold text-xl my-3 ml-4">
                        PESANAN MU
                    </div>
                    <div className="h-[200px] overflow-y-auto mb-3 space-y-2">
                        {generatePesanan()}
                    </div>
                    <GreyBar formation="grid grid-cols-1">
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[120px] text-md mr-1 ">
                                Subtotal
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="text-md ml-auto mr-5">
                                Rp {totalPrice}
                            </div>
                        </div>
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[120px] text-md mr-1 ">
                                Pajak 
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="text-md ml-auto mr-5">
                                Rp {11/100*totalPrice}
                            </div>
                        </div>
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[120px] text-md mr-1 ">
                                Service 
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="text-md ml-auto mr-5">
                                Rp {5/100*totalPrice}
                            </div>
                        </div>
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[120px] text-md mr-1 ">
                                Total Pembayaran
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="text-md ml-auto mr-5">
                                Rp {16/100*totalPrice+totalPrice}
                            </div>
                        </div>
                    </GreyBar>
                    <div className="mt-5 bg-amber-700 ml-4 text-white text-lg rounded-xl">
                        <button type="submit" className="w-full h-full py-5" onClick={
                            ()=>{
                                console.log(JSON.stringify(pemesanan))
                                fetch("http://localhost:5000/insert/",
                                    {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(pemesanan)
                                    }
                                )
                            }
                        }>KONFIRMASI PESANAN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DetailPemesananLayout;