import React from 'react';


const Home = () => {
    


    return (
        <div className="container mt-5">

            <div className="row">
                 <div className="col-5 mb-4 m-auto">
                      <div className="skill_Ball rounded-circle">
                        <p className="text-light mt-3"><small>Mongo</small></p>
                    </div>
               </div>
           </div>
          <div className="row">
                  <div className="col-9 mt-5 mb-5">
              <div className="d-flex justify-content-between">
                   <div className="skill_Ball rounded-circle">
                        <p className="text-light mt-2"><small>Html</small></p>
                     </div>
                     <div className="skill_Ball rounded-circle">
                        <p className="text-light mt-3"><small>Node</small></p>
                     </div>
                     <div className="skill_Ball rounded-circle">
                        <p className="text-light mt-3"><small>Css</small></p>
                    </div>
                 </div>
                 </div>
             </div>
             <div className="row">
                 <div className="col-5 m-auto mt-5">
                      <div  className="skill_Ball rounded-circle">
                        <p className="text-light mt-3"><small>React</small></p>
                    </div>
               </div>
           </div>
        </div>
    );

}


export default Home