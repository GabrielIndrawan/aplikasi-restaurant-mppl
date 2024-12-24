const Footer = (props) => {
    const {desc} = props
    return(
        <div className="bg-amber-700 sm:h-[95px] h-[60px] items-center pl-5 pr-6 grid rounded-t-3xl">
            <div className="text-white text-lg font-bold sm:text-xl justify-self-center align-middle">
                {desc}
            </div>
        </div>
    )
}

export default Footer