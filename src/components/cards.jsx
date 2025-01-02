const Card = (props) => {
    const {item, click, image, imageVariant,} = props
    return(
        <>
            <div className="bg-amber-700 p-5 rounded-2xl h-[400px]">
                <div className="bg-gray-300 h-3/5">
                    <img src={image} className={`h-full ${imageVariant}`}/>
                </div>
                <div className="mt-2 text-white text-lg select-none">
                    {item.name}
                </div>
                <div className="mt-2 text-white text-lg select-none flex flex-row">
                    Rp
                    <div className="w-1"/>
                    {item.price}
                </div>
                <div className="flex flex-row">
                    <div className="mt-2 text-white text-lg select-none">
                        {item.desc}
                    </div>
                    <button className="bg-white ml-auto w-14 h-14 text-4xl font-bold rounded-full align-bottom mt-4">
                        <div className="justify-center align-middle mb-3 text-5xl select-none font-sans" onClick={click}>
                            +
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;