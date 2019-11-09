import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
import Footer from "../components/Footer";
import ChildView from "../components/ChildView";
import { cpus } from "os";

class KidPortal extends Component {
  render() {
    return (
      <div>
            <Container>
              <Row>
                <Col size="s6">
                {/* Welcoming Message */}
                <h4>Welcome to Homebase, Nickname</h4>
                </Col>
                <Col size="l4 offset-l2">
                  {/* Join New Home */}
                  <h6 className="joinNewHomeBtn">Join New Home</h6>  {/* Button will take you to a component to add Home Code */}
                </Col>
              </Row>
              {/* Three Tabs */}
              <Row>
                <ul className="tabs">
                  <li className="tab col l2"><a class="active"href=".myGoalsTab">My Goals</a></li>
                  <li className="tab col l2"><a href=".goalHistoryTab">Goal History</a></li>
                  <li className="tab col l2"><a href=".journalTab">Journal</a></li>
                </ul>
              </Row>
              {/* Coin Count Box */}
              <Row>
                <Col size="s12">
                <div className="coinCountBox">
                  <p>You have</p>
                  <h4 class="coinCount">15 O</h4> {/*Add Dynamically*/}
                </div>
                </Col>
              </Row>
              {/* Current Goals */}
              <Row>
                <Col size="s2"><h5>Goals</h5></Col>
                <Col size="s2" offset="offset-s6">
                  <h5>Coin Value</h5>
                </Col>
                <Col size="s2">
                  <h5>Status</h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col size="s8">
                  {/* Goals  */}
                  <p className="newgoal"></p>
                  <p className="newgoal">Fold Laundry</p>
                  <p className="newgoal">Pass Physics Exam</p>
                  <p>Ask for a new goal + </p>
                </Col>
                <Col size="s2">
                  {/* Coin Value */}
                  <p>5 O</p>
                  <p>25 O</p>
                </Col>
                <Col size="s2">
                  {/* Status */}
                  <button>pending</button> {/*Pending, In Progress, Done */}
                  <button>pending</button>
                </Col>
              </Row>
              <Row>
                <Col size="s8">
                  <h5>Reward</h5> 
                </Col>
                <Col size="s2">
                  <h5>Price</h5>
                </Col>
                <Col size="s2">
                  <h5>Status</h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col size="s8">
                {/* Rewards */}
                <p>Pizza Dinner</p>
                <p>Delay Curfew by 30 minutes</p>
                <p>Ask for a new reward + </p>
                </Col>
                <Col size="s2">
                  {/* Price */}
                  <p>25 O</p>
                  <p>150 O</p>
                </Col>
                <Col size="s2">
                  <button>pending</button>
                  <button>pending</button>
                </Col>
              </Row>
              <Row>
                <Col size="s6">
                  <h5>My Past Homes</h5>
                </Col>
              </Row>
              {/* My Past Homes */}
              <Row>
                <Col size="s3">
                  <h6 className="pasthome">The Hernandez Home</h6>
                </Col>
                <Col size="s3">
                  <h6 className="pasthome">The Smith Home</h6>
                </Col>
                <Col size="s3">
                  <h6 class="pasthome">The Johnson Home</h6>
                </Col>
                {/* Arrow Arrow to be added by Lotus */}
              </Row>
              <Footer></Footer>
            </Container>
      </div>
    );
  }
}

export default KidPortal;

