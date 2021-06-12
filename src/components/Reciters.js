import { FaUserCircle } from 'react-icons/fa';

const Reciters = () => {
    return (
        <div className="min-vh-100 shadow-lg p-3 bg-red">
           <h1 className="text-center fs-5 fw-bold">Reciters</h1> <hr/>
           <div>
               <div className="d-flex aling-items-center py-0 cursor">
                   <FaUserCircle className="fs-3" />{'  '}
                   <span className="fs-5">Abdil basit</span>
                  
               </div>
               
               <hr />
           </div>
        </div>
    )
}

export default Reciters;
