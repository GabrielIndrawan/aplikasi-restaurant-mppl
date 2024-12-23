const Footer = (props) => {
    const {desc} = props
    return(
        <div className="bg-amber-700 sm:h-[95px] h-[60px] flex flex-row items-center pl-5 pr-6">
            <div className="text-white text-2xl font-bold sm:text-3xl">
                {desc}
            </div>
            <button className="p-4 rounded-full bg-white text-lg font-bold sm:text-3xl ml-auto">
                <div className="text-xl text-amber-700">
                Check Out
                </div>
            </button>
        </div>
    )
}

export default Footer