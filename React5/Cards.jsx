import Heading from "./Heading"

// We are getting properties as object
function Cards(props){
    //console.log(props)
    return(
            <div className="card">
                <img src={props.imgSrc} alt="img" className="card_img"></img>
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <Heading seriesName={props.seriesName}></Heading>
                    <a href={props.links} target="_blank" rel="noreferrer">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
    )
}

export default Cards