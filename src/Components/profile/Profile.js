import React from 'react';
import {CardText} from 'reactstrap';

const Profile = () => {
    
    return (
        <div className="mt-5">
            <div className="row">
                <div className="col-4 m-auto mt-4">
                    <img src={'assets/images/myprofile.png'}
                        alt="profile.png"
                        width="70px"
                        height="70px"
                        className="rounded-circle"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 m-auto mt-3">
                   <h6 className="text-light">Name : Nazmul Islam ador</h6>
               </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto mt-2">
                    <CardText className="text-light">Profession : Web developer</CardText>
               </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto mt-2">
                    <CardText className="text-light">Location : Bangladesh</CardText>
               </div>
            </div>
            <div className="row">
                <div className="col-md-6  m-auto mt-3">
                    <CardText className="text-light">Address : Savar,Dhaka 37/1</CardText>
               </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-auto mt-4">
             <div className="d-flex justify-content-around">
                    <img
                    src={'assets/images/facebook.png'}
                    alt="profile.png"
                    width="30px"
                    height="30px"
                    className="rounded-circle"
                     style={{cursor:'pointer'}}       
                    />
                 <img
                    src={'assets/images/github.png'}
                    alt="profile.png"
                    width="30px"
                    height="30px"
                    className="rounded-circle"
                    style={{cursor:'pointer'}}     
                    />
                <img
                    src={'assets/images/linked.png'}
                    alt="profile.png"
                    width="30px"
                    height="30px"
                    className="rounded-circle"
                    style={{cursor:'pointer'}}     
                    />
                 <img
                    src={'assets/images/skype.png'}
                    alt="profile.png"
                    width="30px"
                    height="30px"
                    className="rounded-circle"
                    style={{cursor:'pointer'}}     
                   />
                   </div>
                </div>
            </div>
        </div>
    );
    
}




export default Profile