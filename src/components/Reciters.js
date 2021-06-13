import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Reciters = ({reciters, reciterHnadler}) => {
    const [activeId, setActiveId] = useState('');
    return (
        <div className="min-vh-100 shadow-lg p-3 bg-red">
        <h1 className="text-center fs-5 fw-bold">Reciters</h1> <hr/>
        <ul className="text-start list-group">
            {reciters && reciters.length > 0 ? (
                reciters.map(reciter => (
                    <div key={reciter.id}>
                    <li onClick={(e) => {
                        reciterHnadler(reciter)
                        setActiveId(reciter.id)
                        } }className={`list-group-item  bg-transparent border-0 text-light py-0  cursor fs-6 ps-0 ${reciter.id === activeId && 'active'}`}>
                    <FaUserCircle className="fs-6 me-3 cursorr" />{'  '}
                         <span className=" ">{reciter.name}</span>
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
    //     <div className="min-vh-100 shadow-lg p-3 bg-red">
    //        <h1 className="text-center fs-5 fw-bold">Reciters</h1> <hr/>
    //        <div>
    //            <div className="d-flex aling-items-center py-0 cursor ">
    //                <FaUserCircle className="fs-3" />{'  '}
    //                <span className="fs-5 cursor2">Abdil basit</span>
                  
    //            </div>
               
    //            <hr  className="my-1" />
    //        </div>
    //     </div>
    )
}

export default Reciters;
