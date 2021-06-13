import ReactPlayer from "react-player";

const Player = ({chapterDetils, reciterDetils}) => {
    return (
        <div className="min-vh-100 shadow-lg p-3 bg-red">
        <h1 className="text-center fs-5 fw-bold">Player</h1> <hr/>
       {reciterDetils !== null && chapterDetils !== null ? (
             <ul className="text-end list-group">
             <div>
                 <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                      <span>Reciter:</span>
                      <span className="fs-6 ">{reciterDetils.name}</span>
                 </li>
                 <hr/>
                 <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                      <span>Surah in Arabic:</span>
                      <span className="fs-5 ">{chapterDetils.name_arabic}</span>
                 </li>
                 <hr/>
                 <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                      <span>Surah in English:</span>
                      <span className="fs-6 ">{chapterDetils.name_complex}</span>
                 </li>
                 <hr/>
                 <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                      <span>Revalation Place:</span>
                      <span className="fs-6 ">{chapterDetils.revelation_place}</span>
                 </li>
                 <hr/>
                 <li className="list-group-item bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ">
                      <span>Translated Name:</span>
                      <span className="fs-6 ">
                         {chapterDetils.translated_name.name} 
                      </span>
                 </li>
                 <hr/>
 
                 <ReactPlayer url={
                      audioLink(reciterDetils.server.chapterDetils.id)
                 }  
                 playing={true} controls={true} 
                 width='100%' height='60%' />
             </div>
         </ul>
       ) : (
            <div className="text-center">
                 <span className="spinner-border"></span>
            </div>
       )}
        </div>
    )
}

export default Player;
//${activeId === chapter.id && 'active'}