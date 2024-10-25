'use client'

const MyLink = ({link, text}) => {
    const handleClick = () => {
        // this should send us to {link}
        window.open(link, "_blank")
    };
    
    return (
        <button onClick={handleClick} className="linkDiv">
            <h3>{text}</h3>
        </button>
    )
}

export default MyLink;