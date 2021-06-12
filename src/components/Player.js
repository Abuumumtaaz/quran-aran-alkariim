import ReactPlayer from "react-player";

const Player = () => {
    return (
        <div className="min-vh-100 shadow-lg p-3 bg-red">
        <h1 className="text-center fs-5 fw-bold">Player</h1> <hr/>
        <ul className="text-end list-group">
            <div>
                <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-5 ps-0 d-flex justify-content-between ">
                     <span>Reciter:</span>
                     <span className="fs-6 ">Abdil basit</span>
                </li>
                <hr/>
                <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                     <span>Surah in Arabic:</span>
                     <span className="fs-5 ">maida</span>
                </li>
                <hr/>
                <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                     <span>Surah in English:</span>
                     <span className="fs-6 ">Maida</span>
                </li>
                <hr/>
                <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                     <span>Revalation Place:</span>
                     <span className="fs-6 ">madinah</span>
                </li>
                <hr/>
                <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                     <span>Translated Name:</span>
                     <span className="fs-6 ">The Table </span>
                </li>
                <hr/>

                <ReactPlayer url={'ss'}  playing={true} controls={true} width='100%' height='100%' />
            </div>
        </ul>
        </div>
    )
}

export default Player;
