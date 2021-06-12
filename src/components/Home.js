import Chapters from "./Chapters"
import Player from "./Player"
import Reciters from "./Reciters"


const Home = () => {
    return (
        <div className="row p-5  vh-100">
            <div className="col-lg-4 col-md-4 col-sm-12 scroll bg-danger">
            <Reciters />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 scroll bg-primary">
            <Player />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 scroll bg-warning">
            <Chapters />
            </div>  
        </div>
    )
}

export default Home;
