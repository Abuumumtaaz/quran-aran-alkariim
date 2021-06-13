import { useState } from "react"


const Chapters = ({chapters, chapterHandler}) => {
    const [activeId, setActiveId] = useState("");
    return (
        <div className="min-vh-100 shadow-lg p-3 bg-red">
        <h1 className="text-center fs-5 fw-bold">Chapters</h1> <hr/>
        <ul className="text-end list-group">
            {chapters && chapters.length > 0 ? (
                chapters.map(chapter => (
                    <div key={chapter.id}>
                    <li onClick={(e) => {
                    chapterHandler(chapter)
                    setActiveId(chapter.id)
                    }} className={`list-group-item  bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 d-flex justify-content-between ${activeId === chapter.id && 'active'}`}>
                        <span>{chapter.id}</span>
                        <span>{chapter.name_arabic}</span>
                    </li>
                    <hr/>
                </div>
                ))
            ) : (
                <div className="text-center">
                    <span className="spinner-border"></span>
                </div>
            )}
           
        </ul>
        </div>
    )
}

export default Chapters;

