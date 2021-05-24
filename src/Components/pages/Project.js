import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardText} from 'reactstrap';
import Scroll from '../Scroll/Scroll';



const Project = () => {
    

    return (
        <div className="container">
            <Scroll>
            <Card className="mb-2">
                <CardBody>
                    <CardImg
                        src={'assets/images/web1.png'}
                        alt=""
                        width="100%"
                        height="100%"
                    />
                    <CardImgOverlay>
                     <CardText className="text-center mt-5 text-light"style={{cursor:'pointer'}}>View</CardText>
                   </CardImgOverlay>
               </CardBody>
            </Card>

            <Card className="mb-2">
                <CardBody>
                    <CardImg
                        src={'assets/images/web2.png'}
                        alt=""
                        width="100%"
                        height="100%"
                    />
                    <CardImgOverlay>
                     <CardText className="text-center mt-5 text-light"style={{cursor:'pointer'}}>View</CardText>
                   </CardImgOverlay>
               </CardBody>
          </Card>
                
            <Card className="mb-2">
                <CardBody>
                    <CardImg
                        src={'assets/images/web3.png'}
                        alt=""
                        width="100%"
                        height="100%"
                    />
                    <CardImgOverlay>
                     <CardText className="text-center mt-5 text-light"style={{cursor:'pointer'}}>View</CardText>
                   </CardImgOverlay>
               </CardBody>
            </Card>

            <Card className="mb-2">
                <CardBody>
                    <CardImg
                        src={'assets/images/web4.png'}
                        alt=""
                        width="100%"
                        height="100%"
                    />
                    <CardImgOverlay>
                     <CardText className="text-center mt-5 text-light"style={{cursor:'pointer'}}>View</CardText>
                   </CardImgOverlay>
               </CardBody>
            </Card>
           </Scroll>
        </div>
    );

}


export default Project