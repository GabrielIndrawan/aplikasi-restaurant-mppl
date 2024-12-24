const GreyBar = (props) => {
    const {children, formation} = props
    return(
        <div className={`bg-gray-400 ml-4 h-auto rounded-xl flex items-center ${formation}`}>
            {children}
        </div>
    )
}

export default GreyBar;