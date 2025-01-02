import { useState } from "react"
import { useEffect } from "react"

const KelolaMenuLayout = () => {

    const [data, setData] = useState([])

    const fetchAll = () => {
        fetch("http://localhost:5000/fetchMenu/").then(
            (response) => response.json().then(
                (datas) => {
                    setData(datas)
                }
            )
        )
    }

    useEffect(()=>{
        fetchAll()
        },[]
    )

    const changeStatus = (id, value) => {
        const request = {id: id, value: value}
        fetch("http://localhost:5000/changeStatus",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        }).then(
            (response)=>{fetchAll()}
        )
    }

    const tableData = () => data.map((data)=>{
        return generateTable(data)
    })

    const generateTable = (data) => {
        return (
                <tr key={data.id}>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.id}</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.nama_menu}</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">{data.harga}</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                        {
                            (data.status===0)?(
                                <button className="px-5 py-3 bg-red-500" onClick={()=>{changeStatus(data.id,1)}}>
                                    Habis
                                </button>
                            ):(
                                <button className="px-5 py-3 bg-green-500" onClick={()=>{changeStatus(data.id,0)}}>
                                    Tersedia
                                </button>
                            )
                        }
                    </td>
                </tr>
        )
    }

    return(
        <div className="bg-red-200 w-4/5 h-auto">
            <div className="font-bold text-amber-700 text-2xl ml-7 mt-10 mb-4">
                DAFTAR MENU
            </div>
            <div className="ml-7 mb-4">
                <table>
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">No</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">NAMA MENU</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">HARGA</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KelolaMenuLayout;