import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { CheckList, CheckListItem } from "../components/Checklist";
import Footer from "../components/Footer";
import ChildView from "../components/ChildView";
import { cpus } from "os";

class KidPortal extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
            <div class="col l6">
                {/* Welcoming Message */}
                <h4>Welcome to Homebase, Nickname</h4>
            </div>
            <div class="col l4 offset-l2">
                {/* Join New Home */}
                <h6 class="joinNewHomeBtn">Join New Home</h6> {/*</div>Button will take you to a component to add Home Code*/}
            </div>
        </div>
        {/* Three Tabs */}
        <div class="row">
            <ul class="tabs">
                <li class="tab col l2"><a class="active"href=".myGoalsTab">My Goals</a></li>
                <li class="tab col l2"><a href=".goalHistoryTab">Goal History</a></li>
                <li class="tab col l2"><a href=".journalTab">Journal</a></li>
            </ul>
        </div>
        {/* Coin Count Box */}
        <div class="row">
            <div class="col12">
                <div class="coinCountBox">
                    <p>You have</p>
                    <h4 class="coinCount">15 O</h4> {/*Add Dynamically*/}
                </div>
            </div>
        </div>
        {/* Current Goals */}
        <div class="row">
            <div class="col l2">
                <h5>Goals</h5> 
            </div>
            <div class="col l2 offset-l6">
                <h5>Coin Value</h5> 
            </div>
            <div class="col l2">
                <h5>Status</h5>
            </div>
        </div>
        <hr></hr>
        <div class="row">
            <div class="col l8">
                {/* Goals */}
                <p class="newgoal"></p>
                <p class="newgoal">Fold Laundry</p>
                <p class="newgoal">Pass Physics Exam</p>
                <p>Ask for a new goal + </p>

            </div>
            <div class="col l2">
                {/* Coin Value */}
                <p>5 O</p>
                <p>25 O</p>
            </div>
            <div class="col l2">
                {/* Status */}
                <button>pending</button> {/* Pending, In Progress, Done */}
                <button>pending</button>
            </div>
        </div>
        <div class="row">
            <div class="col l8">
                <h5>Reward</h5> 
            </div>
            <div class="col l2">
                <h5>Price</h5> 
            </div>
            <div class="col l2">
                <h5>Status</h5> 
            </div>
        </div>
        <hr></hr>
        <div class="row">
            <div class="col l8">
                {/* Rewards */}
                <p>Pizza Dinner</p>
                <p>Delay Curfew by 30 minutes</p>
                <p>Ask for a new reward + </p>
            </div>
            <div class="col l2">
                {/* Price */}
                <p>25 O</p>
                <p>150 O</p>
            </div>
            <div class="col l2">
                <button>pending</button>
                <button>pending</button>
            </div>
        </div>

        
        <div class="row">
            <div class="col l6">
                <h5>My Past Homes</h5>
            </div>
        </div>
        {/* Past Homes */}
        <div class="row">
            <div class="col l3">
                <h6 class="pasthome">The Hernandez Home</h6>
            </div>
            <div class="col l3">
                <h6 class="pasthome">The Smith Home</h6>
            </div>
            <div class="col l3">
                <h6 class="pasthome">The Johnson Home</h6>
            </div>
            Arrow {/*Arrow to be added by Lotus*/}
        </div>
    </div>
      
    );
  }
}

export default KidPortal;

