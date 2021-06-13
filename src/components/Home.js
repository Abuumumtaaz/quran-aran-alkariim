import axios from "axios";
import { useEffect, useState } from "react";
import Chapters from "./Chapters"
import Player from "./Player"
import Reciters from "./Reciters"


const Home = () => {
    const [reciters, setReciters] = useState([]);
    const [chapters, setChapters] = useState([]);

    const [reciterDetils, setReciterDetils] = useState(null);
    const [chapterDetils, setChapterDetils] = useState(null);

    //get all reciters with audio
    useEffect(() => {
        async function fetchData() {
            const { data: { reciters },
         } = await axios.get(`https://mp3quran.net/api/_english.php`)
         setReciters(reciters)
        }
       fetchData()
    }, [])
    //get all chapters
    useEffect(() => {
        async function fetchData() {
            const { data: chapters 
         } = await axios.get(`https://api.quran.com/api/v4/chapters`)
         setChapters(chapters)

         
        }
        reciters && reciters.length > 0 && fetchData()
    }, [reciters])

    //console.log(chapters);

    const reciterHnadler = (reciter) => {
         setReciterDetils(reciter)
    };
    const chapterHandler = (chapter) => { 
        setChapterDetils(chapter);
    };

    return (
        <div className="row p-5  vh-100">
            <div className="col-lg-4 col-md-4 col-sm-12 scroll ">
            <Reciters reciters={reciters}  reciterHnadler={reciterHnadler} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 scroll ">
            <Chapters chapters={chapters && chapters.chapters} chapterHandler={chapterHandler} />
            </div> 
            <div className="col-lg-4 col-md-4 col-sm-12 scroll ">
            <Player chapterDetils={chapterDetils} reciterDetils={reciterDetils} />
            </div>
            
        </div>
    )
}

export default Home;
