import React from "react";
import Card from 'react-bootstrap/Card';
import bg from '../components/assets/bg.jpg'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleArrowRight  } from '@fortawesome/free-solid-svg-icons'
import Popular from "../components/Popular/Popular";
import Offer from "../components/offer/Offer";
import NewCollections from "../components/New Collections/NewCollections";
import NewsLetter from "../components/newsletter/NewsLetter";

function home() {
  return (
    <div>
      <>
    
        <div className="hero">
          <Card className="bg-dark text-white border-0">
            <Card.Img
              src={bg}
              alt="background image"
              height="600px"
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center">
              <div className="container text-start me-5">
                <Card.Title className="display-3 fw-bolder mb-0 ">
                  NEW SEASON ARRIVALS
                </Card.Title>
                <Card.Text className="lead fs-2 ">
                  CHECK OUT ALL THE TRENDS
                </Card.Text>
              
                <Link to="/" className="btn  " >Latest Products<FontAwesomeIcon icon={faCircleArrowRight} transform='right-4'/></Link>
                
              </div>
            </Card.ImgOverlay>
          </Card>

        </div>
      </>
      <div>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
  

        </div>   
    </div>
  );
}
export default home;
