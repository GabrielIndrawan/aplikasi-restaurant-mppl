import { useEffect } from "react"
import { useState } from "react"

const DaftarPesananLayout = () => {
    const [data, setData] = useState([{id:"",pembeli:"",name:"", harga:0, jumlah:0}])

    const fetchAll = () => { fetch("http://localhost:5000/fetch/",{
        method: "GET"
    }).then(
        (response) => response.json().then(
            (datas) => {
                console.log(datas);
                setData(datas)
            }
        )
    )}

    useEffect(()=>{
        fetchAll()
    },[]
    )
    
    const tableData = () => data.map((data)=>{
        return generateTable(data)
    })

    const pesananDone = (id) => {
        const request = {id:id}
        fetch("http://localhost:5000/delete/",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request)
            }
        ).then(
            (response) => {
                fetchAll()
            }
        )
    }

    const generateTable = (data) => 
        <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.id}</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{Math.floor(Math.random() * 10)}</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.pembeli}</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.nama}</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.harga*data.jumlah}</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                    <button className="px-5 py-3 bg-green-500" onClick={()=>{pesananDone(data.id)}}>
                        Done
                    </button>
                </td>
            </tr>
        </tbody>


    return(
        <div className="bg-red-200 w-4/5 pb-4">
            <div className="font-bold text-amber-700 text-2xl ml-7 mt-10 mb-4">
                DAFTAR PESANAN
            </div>
            <div className="ml-7">
                <table>
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">ORDER ID</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">NO MEJA</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">NAMA PELANGGAN</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">NAMA PESANAN</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">TOTAL</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">STATUS</th>
                        </tr>
                    </thead>
                    {tableData()}
                </table>
            </div>
        </div>
    )
}

export default DaftarPesananLayout;