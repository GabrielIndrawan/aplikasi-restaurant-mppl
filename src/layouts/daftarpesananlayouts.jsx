
const DaftarPesananLayout = () => {
    fetch()

    const generateTable = () => {
        <tbody>
            <tr>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*order id</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*no meja</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*nama pelanggan</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*detail pesanan</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*total</td>
                <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*status</td>
            </tr>
        </tbody>
    }

    return(
        <div className="bg-red-200 w-4/5">
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
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">DETAIL PESANAN</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">TOTAL</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">STATUS</th>
                        </tr>
                    </thead>
                    {generateTable()}
                </table>
            </div>
        </div>
    )
}

export default DaftarPesananLayout;