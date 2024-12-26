const KelolaMenuLayout = () => {

    const generateTable = () => {
        return (
            <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*no</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*menu</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*harga</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*desc</td>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">*status</td>
                </tr>
            </tbody>
        )
    }

    return(
        <div className="bg-red-200 w-4/5">
            <div className="font-bold text-amber-700 text-2xl ml-7 mt-10 mb-4">
                DAFTAR MENU
            </div>
            <div className="ml-7">
                <table>
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">No</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">NAMA MENU</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">HARGA</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">DESC</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">STATUS</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default KelolaMenuLayout;