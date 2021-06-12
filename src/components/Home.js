import Chapters from "./Chapters"
import Player from "./Player"
import Reciters from "./Reciters"


const Home = () => {
    return (
        <div className="row p-5  vh-100">
            <div className="col-lg-4 col-md-4 col-sm-12 scroll ">
            <Reciters />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 scroll ">
            <Chapters />
            </div> 
            <div className="col-lg-4 col-md-4 col-sm-12 scroll ">
            <Player />
            </div>
            
        </div>
    )
}

export default Home;
