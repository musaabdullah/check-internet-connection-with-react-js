import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  
  const [connection, setConnection] = useState(false);
  const [visiable, setVisiable] = useState(true);
  useEffect(() => {
     const checkInternet = async () => {
       try {

         const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
         console.log(res);
         if(res.status === 200) {
           setConnection(true);
          }else {
            setConnection(false);
          }
        } catch(error) {
          console.log(error.message);
        }
     }
     checkInternet();
  }, [])
  
 


  return (
    <div className="app">
        <div className={` ${connection ? "wrapper__hide": "wrapper__show"}  ${visiable ? "wrapper__show": "wrapper__hide"} wrapper`}>
         <div className="wrapper__content">
             <i className={`${connection ? "content__icon--online":"content__icon--offline"} fa fa-wifi`}></i>
             <div className="wrapper__detail">
                 <div className="detail__header">
                    <span>{connection ? "Online" : "offline"}</span>
                 </div>
                 <div className="detail__body">
                   You are {connection ? "online" : "offline"} now.
                 </div>
             </div>
             <i onClick={() => setVisiable(false)}  className="wrapper__close	fa fa-close"></i>
         </div>
      </div> 
    </div>
  ); 
}

export default App;
