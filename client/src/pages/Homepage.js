import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
import CTABtn from "../components/CTABtn";
import ImageCard from "../components/ImageCard";
import ImgCarasol from "../components/ImgCarasol";

class Homepage extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="s12">
            <Jumbotron>
              <h1 class="whit">
               HomeZone
              </h1>

            </Jumbotron>
          </Col>
        </Row>

        <Row>
        
        <Col size="col s3" offset="offset-s2">
 
                <p></p>
                <div class="containimg" >
                    <img class="materialboxed" height="300px" width="360px" src="img/fosteryouth1.jpg"></img>
                    <div class="bottom-left">Foster Kid or Teen</div>
                </div>
    
                </Col>

                <Col size="col s3" offset="offset-s2">
                <p></p>
                <div class="containimg">
                    <img class="materialboxed parent" height="300px" width="360px"  src="img/fosterparent2.jpg"></img>
                    <div class="bottom-left">Foster Parent</div>
                </div>
                </Col>





        </Row>
        <Row>
          <Col size="col s5" offset="offset-s2">
          
          <h2 >HomeZone connects Foster Families</h2>
          <p>Anyone involved in foster care knows that it can be tough connecting with people you barely know. HomeZone let's foster homes and kids and familes create a profile that sticks with them throughout their fostering journey where you can:</p>
          <h3>Foster Kids Can</h3>
            <CheckList>
                <CheckListItem color="purp">Learn about their foster family</CheckListItem>
                <CheckListItem color="purp">Earn coins and rewards with good behavior</CheckListItem>
                <CheckListItem color="purp">Send notes to their foster parents</CheckListItem>
            </CheckList>

            <h3>Foster Parents Can</h3>
            <CheckList>
                <CheckListItem color="gre">Learn about their foster kids</CheckListItem>
                <CheckListItem color="gre">Help kids plan goals</CheckListItem>
                <CheckListItem color="gre">Recieve updates and notes from foster kids</CheckListItem>
            </CheckList>
          </Col>

          
        </Row>
      

        <Row backcolor="lightgrey-backcolor">
            <Col size="col s8" offset="offset-s2">
                <h2 >Features</h2>
                <ImgCarasol
                    img1="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
                    title1="Goal Tracker"
                    img2="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
                    title2="Home Management Dashboard"
                    img3="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
                    title3="Shared Journal">
                </ImgCarasol>

            </Col>
        </Row>

        <Row>
            <Col size="col s8" offset="offset-s2">
                <h2 >Meet The Team</h2>
                <p className="col s9">This conceptual app was created using the MERN stack and involved Node.js, Javascript, React.js, Express Server, MongoDB, Mongoose, Passport, HTML, CSS, and Materialize.</p>
                <ImageCard 
                    title="Lotus Lindez" 
                    imagesrc="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/69810523_10220060231437435_3214664853620785152_n.jpg?_nc_cat=100&_nc_oc=AQlxjLSk_DvjVjY6a_ZW9ehH8a8aSrBwXr-2UcJcrHLh0p6_q5a6zPvPNbXHAxUNizI&_nc_ht=scontent-ort2-2.xx&oh=c6e08ce56865f5638b95a1ca52d91e93&oe=5E60D17C"
                    content="Client-side, Server-side Code, UI/UX Design and Project Management" 
                    action="Go to LinkedIn" 
                    link="https://www.linkedin.com/in/lotuslindez/">   
                </ImageCard> 
                <ImageCard 
                    title="Eladio Montenegro" 
                    imagesrc="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/11916082_10100302486728005_448809646271839715_n.jpg?_nc_cat=103&_nc_oc=AQmDzU8ofp6EwGk6X2yoQaNmW8OBqks26mi-1T-3wOL1_l1XHhZo1Sj4YS6TWP5rl9A&_nc_ht=scontent-ort2-2.xx&oh=54254eb6ae9c44ca6c9a452dc13daba3&oe=5E1A29EF"
                    content="Client-side ,Server-side Code, GIT Management, Authentication" 
                    action="Go to LinkedIn" 
                    link="https://www.linkedin.com/in/lotuslindez/">   
                </ImageCard> 

                <ImageCard 
                    title="Jennifer Ramos" 
                    imagesrc="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/31776078_962451223918050_2190139253139177472_n.jpg?_nc_cat=105&_nc_oc=AQnFkREDluNEy70sCiJ8VA3oG4L2PjV7ZgjSqTFNdaMecnbFeVCo1xbt_S48uezlIq0&_nc_ht=scontent-ort2-2.xx&oh=2a5e6b646a442e0816967196c155d348&oe=5E1ED78A"
                    content="Client-side, Server-side Code, Security and Code Standards" 
                    action="Go to LinkedIn" 
                    link="https://www.linkedin.com/in/lotuslindez/">   
                </ImageCard> 

            </Col>


        </Row>

        
      </Container>
    );
  }
}

export default Homepage;
