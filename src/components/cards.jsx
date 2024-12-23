const Card = (props) => {
    const {item} = props
    return(
        <>
            <div className="bg-amber-700 p-5 rounded-2xl h-[400px]">
                <div className="bg-gray-300 h-3/5">
                    
                </div>
                <div className="mt-2 text-white text-lg">
                    {item.name}
                </div>
                <div className="mt-2 text-white text-lg">
                    ${item.price}
                </div>
                <div className="flex flex-row">
                    <div className="mt-2 text-white text-lg">
                        {item.desc}
                    </div>
                    <button className="bg-white ml-auto w-14 h-14 text-3xl font-bold rounded-full">
                        <div className="justify-self-center align-middle">
                            +
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;