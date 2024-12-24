import GreyBar from "../components/greybar";

const DetailPemesananLayout = () => {
    return(
        <>
            <div className="mt-0 bg-red-200 pt-2 pr-3 pb-4">
                <div className="text-lg  ml-4 justify-self-start font-bold mb-2 mt-5 text-amber-700">
                    Kategori
                </div>
                <form>
                    <GreyBar formation="flex flex-row py-4">
                        <label className="font-bold ml-3 text-md mr-1" htmlFor="name">
                            Nama Pelanggan : 
                        </label>
                        <input id="name" className="bg-gray-400 mt-1 w-64 pl-2" maxLength={30}/>
                    </GreyBar>
                    <div className="text-amber-700 font-bold text-xl my-3 ml-4">
                        PESANAN MU
                    </div>
                    <div className="h-[199px] overflow-y-auto">

                    </div>
                    <GreyBar formation="grid grid-cols-1">
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[90px] text-md mr-1 ">
                                Subtotal
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="font-bold text-md ml-auto mr-5">
                                Test
                            </div>
                        </div>
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[90px] text-md mr-1 ">
                                Pajak 
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="font-bold text-md ml-auto mr-5">
                                Test
                            </div>
                        </div>
                        <div className="flex flex-row my-4">
                            <label className="font-bold ml-3 w-[90px] text-md mr-1 ">
                                Service 
                            </label>
                            <div className="font-bold text-md">
                                :
                            </div>
                            <div className="font-bold text-md ml-auto mr-5">
                                Test
                            </div>
                        </div>
                    </GreyBar>
                    <div className="mt-5 bg-amber-700 ml-4 text-white font-bold text-lg rounded-xl">
                        <button type="submit" className="w-full h-full py-5">KONFIRMASI PESANAN</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DetailPemesananLayout;