import { useState } from "react";
import Card from "../components/cards";

const PemesananLayout = () => {
    const [category, setCategory] = useState("")

    const menus = [
        {name: "Ayam Bakar",pic: "",price: 10,desc: "Ayam Bakar Nusantara",category: "Nusantara"},
        {name: "Kopi Hitam",pic: "",price: 2,desc: "Kopi Hitam Nusantara",category: "Kopi"},
        {name: "Susu Coklat",pic: "",price: 2,desc: "Susu Coklat manies",category: "Non Kopi"},
        {name: "Spaghetti",pic: "",price: 2,desc: "Susu Coklat manies",category: "Western"},
        {name: "Ayam Bakar",pic: "",price: 10,desc: "Ayam Bakar Nusantara",category: "Nusantara"},
        {name: "Kopi Hitam",pic: "",price: 2,desc: "Kopi Hitam Nusantara",category: "Kopi"},
        {name: "Susu Coklat",pic: "",price: 2,desc: "Susu Coklat manies",category: "Non Kopi"},
        {name: "Spaghetti",pic: "",price: 2,desc: "Susu Coklat manies",category: "Western"},
    ]

    const generateMenus = () => {
        return menus.map(
            (menu,index)=>{
                if(index===0){
                    return (
                        <div className="mt-6 ml-4">
                            <Card item={menu}/>
                        </div>
                    );
                }else{
                    return <Card item={menu}/>;
                }
            }
        )
    }

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
                    {generateMenus()}
                </div>
                <div className="justify-self-center text-amber-700 text-lg font-bold mt-12 mb-7">
                    harga belum termasuk PPN 11% dan Service 5%
                </div>
            </div>
        </>    
    )
}

export default PemesananLayout;