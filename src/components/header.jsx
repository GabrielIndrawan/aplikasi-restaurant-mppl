const Header = (props) => {
    const {title, secondaryTitle, color} = props
    return(
        <div className={`${color} sm:h-[95px] h-[60px] flex flex-col items-center justify-center `}>
            <div className="text-white text-2xl font-bold sm:text-3xl">
                {title}
            </div>
            <div className="text-white text-lg font-bold sm:text-xl">
                {secondaryTitle}
            </div>
        </div>
    )
}

export default Header;