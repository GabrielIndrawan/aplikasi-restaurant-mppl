const Header = (props) => {
    const {title, secondaryTitle, color} = props
    return(
        <div className={`${color} sm:h-[95px] h-[60px] flex flex-col items-center justify-center rounded-b-3xl`}>
            <div className="text-white text-2xl font-bold sm:text-3xl font-hardigan">
                {title}
            </div>
            <div className="text-white text-lg font-bold sm:text-xl font-hardigan">
                {secondaryTitle}
            </div>
        </div>
    )
}

export default Header;