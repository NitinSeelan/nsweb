'use client'

const MyLink = ({link, text, imgsrc}) => {
    const handleClick = () => {
        // this should send us to {link}
        window.open(link, "_blank")
    };

    if(imgsrc){
        return (
            <button onClick={handleClick} className="linkDiv">
                <img src={imgsrc} width = "50px" />
            </button>
        )
    }
    
    return (
        <button onClick={handleClick} className="linkDiv">
            <h3>{text}</h3>
        </button>
    )
}

export default MyLink;