import Card from "../components/cards";

const PemesananLayout = () => {
    return(
        <>
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
                    <div className="space-x-3">
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm font-bold">NUSANTARA</button>
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm font-bold">WESTERN</button>
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm font-bold">KOPI</button>
                        <button className="bg-amber-700 text-white py-1 px-3 rounded-full text-sm font-bold">NON KOPI</button>
                    </div>
                    <div className="ml-auto ">
                        <button className="bg-amber-700 ml-auto">Test</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 space-x-4 w-auto space-y-6">
                    <div className="mt-6 ml-4">
                        <Card item={{name: "Menu 1", desc: "Desc"}}/>
                    </div>
                    <Card item={{name: "Menu 2", desc: "Desc"}}/>
                    <Card item={{name: "Menu 3", desc: "Desc"}}/>
                    <Card item={{name: "Menu 4", desc: "Desc"}}/>
                    <Card item={{name: "Menu 5", desc: "Desc"}}/>
                    <Card item={{name: "Menu 6", desc: "Desc"}}/>
                    <Card item={{name: "Menu 7", desc: "Desc"}}/>
                    <Card item={{name: "Menu 8", desc: "Desc"}}/>
                </div>
            </div>
            <div className="bg-amber-700 ">

            </div>
        </>    
    )
}

export default PemesananLayout;