import React, { Component } from "react";
import { Tab, Tabs, Select, Button, } from 'react-materialize';
import Footer from "../components/Footer";
import ChildView from "../components/ChildView";
import { cpus } from "os";
import API from "../utils/API";

class KidPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kidid: localStorage.getItem("kidid"),
            coinCount: 0,
            nickname: "",
            status: ""
        }
    }
    // handleChange = event => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     const { coinCount, nickname, status } = this.state
    //     alert(
    //         `${coinCount, nickname, status} \n `
    //     )
    // }

    render() {
        API.getKid(this.state.kidid)
            .then(res => {
                this.setState({ coinCount: res.data.coinCount, nickname: res.data.nickname });
            })
            .catch(err => console.log(err))
        return (
            <div className="container">
                <div className="row">
                    <div className="col l6">
                        {/* Welcoming Message */}
                        <h4>Welcome to Homebase, {this.state.nickname} </h4>
                    </div>
                    <div className="col l4 offset-l2">
                        {/* Join New Home */}
                        <h6 className="joinNewHomeBtn">Join New Home</h6> {/*</div>Button will take you to a component to add Home Code*/}
                    </div>
                </div>
                <div class="row">
                    {/* Three Tabs */}
                    <div className="col l12">
                        <Tabs className="tab-demo">
                            {/* My Goals Tab */}
                            <Tab title="My Goals" href="#myGoalsTab" className="col l12" active>
                                {/* My Goals Tab Data */}
                                <div id="myGoalsTab">
                                    {/* Heading */}
                                    <div class="row">
                                        <div class="col s4 offset-s4">
                                            <h5>My Goals</h5>
                                        </div>
                                        <div class="offset-4"></div>
                                    </div>
                                    {/* Coin Count Box */}
                                    <div class="row">
                                        <div class="col l12">
                                            <div class="coinBox">
                                                <p>You have</p>
                                                <h4 class="coinCount">{this.state.coinCount} O</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* My Goals Labels*/}
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
                                    {/* Goals, Coin Value, Status */}
                                    <div class="row">
                                        <div class="col l8">
                                            {/* Goals */}
                                            <p className="newgoal"></p>
                                            <p className="newgoal">Fold Laundry</p>
                                            <p className="newgoal">Pass Physics Exam</p>
                                            <Button className="askGoal" waves="light" style={{ marginRight: '5px' }}>
                                                Ask for a new goal +
                                            </Button>
                                        </div>
                                        <div class="col l2">
                                            {/* Coin Value */}
                                            <p>5 O</p>
                                            <p>25 O</p>
                                        </div>
                                        <div class="col l2">
                                            {/* Status */}
                                            {/* <Select value="" onChange={handleChange}>
                                                <option value="" disabled>
                                                    Set Status
                                                </option>
                                                <option value="Not Started">
                                                    Not Started
                                                </option>
                                                <option value="In Progress">
                                                    In Progress
                                                </option>
                                                <option value="Finished">
                                                    Finished
                                                </option>
                                            </Select> */}
                                        </div>
                                    </div>
                                    {/* My Goals: Reward Labels */}
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
                                    {/* Rewards, Price, Status */}
                                    <div class="row">
                                        <div class="col l8">
                                            {/* Rewards */}
                                            <p>Pizza Dinner</p>
                                            <p>Delay Curfew by 30 minutes</p>
                                            <p>Ask for a new reward + </p>
                                            <Button className="askReward" waves="light" style={{ marginRight: '5px' }}>
                                                Ask for a new reward +
                                            </Button>
                                        </div>
                                        <div class="col l2">
                                            {/* Price */}
                                            <p>25 O</p>
                                            <p>150 O</p>
                                        </div>
                                        <div class="col l2">
                                            {/* Status */}
                                            <button>pending</button>
                                            <button>pending</button>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            {/* Goal History Tab */}
                            <Tab title="Goal History" href="#goalHistoryTab" className="col l12" active>
                                {/* Goal History Tab Data */}
                                <div id="goalHistoryTab">
                                    <div class="row">
                                        <div class="col s4 offset-s4">
                                            <h5>Goal History</h5>
                                        </div>
                                        <div class="offset-4"></div>
                                    </div>
                                    {/* Coin History Boxes */}
                                    <div class="row">
                                        <div class="col l6">
                                            <div class="coinBox">
                                                {/*  Coins Earned */}
                                                <p>Coins Earned</p>
                                                <h4 class="coinsEarned">158 O</h4>
                                                {/* Add Dynamically */}
                                            </div>
                                        </div>
                                        <div class="col l6">
                                            <div class="coinBox">
                                                {/*  Coins Spent */}
                                                <p>Coins Spent</p>
                                                <h4 class="coinsSpent">143 O</h4>
                                                {/* Add Dynamically */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Goal History Labels */}
                                    <div class="row">
                                        <div class="col l8">
                                            <h5>Goals Completed</h5>
                                        </div>
                                        <div class="col l2">
                                            <h5>Coin Value</h5>
                                        </div>
                                        <div class="col l2">
                                            <h5>Date</h5>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        {/* Goals Completed */}
                                        <div class="col l8">
                                            <p>Clean Bathroom</p>
                                            <p>Wash Dishes</p>
                                            <p>No Missing Homework Assignments for a Week</p>
                                            <p>Vaccum the House</p>
                                        </div>
                                        {/* Coin Value */}
                                        <div class="col l2">
                                            <p>5 O</p>
                                            <p>10 O</p>
                                            <p>25 O</p>
                                            <p>5</p>
                                        </div>
                                        {/* Date */}
                                        <div class="col l2">
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                        </div>
                                    </div>
                                    {/* <!-- Rewards Labels --> */}
                                    <div class="row">
                                        <div class="col l8">
                                            <h5>Rewards Earned</h5>
                                        </div>
                                        <div class="col l2">
                                            <h5>Price</h5>
                                        </div>
                                        <div class="col l2">
                                            <h5>Date</h5>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                        {/* Rewards Earned */}
                                        <div class="col l8">
                                            <p>Pizza Dinner</p>
                                            <p>Go to Water Park</p>
                                            <p>Movie Night</p>
                                            <p>Buy God of War 3</p>
                                            <p>1 hour of computer time</p>
                                        </div>
                                        {/* Price */}
                                        <div class="col l2">
                                            <p>25 O</p>
                                            <p>35 O</p>
                                            <p>50 O</p>
                                            <p>75 O</p>
                                            <p>25 O</p>
                                        </div>
                                        {/* Date */}
                                        <div class="col l2">
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            {/* Journal Tab */}
                            <Tab title="Journal" className="col l12" href="#journalTab" active>
                                {/* Journal Tab Data */}
                                <div id="journalTab">
                                    {/* Heading */}
                                    <div class="row">
                                        <div class="col s4 offset-s4">
                                            <h5>My Sharing Journal</h5>
                                        </div>
                                        <div class="offset-4"></div>
                                    </div>
                                    {/* Journal Box */}
                                    <div class="journal">
                                        <div class="row">
                                            <div class="input-field col s8 offset-s2">
                                                {/* Text Area */}
                                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                                <label for="textarea1">
                                                    Write any thoughts, feelings or ideas you want to share with your guardians
                                            </label>
                                            </div>
                                        </div>
                                        {/* Submit Button */}
                                        <div class="row">
                                            <button>Submit</button>
                                        </div>
                                        <div class="col offset-2"></div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                {/* Past Homes */}
                <div class="row">
                    <div class="col l6">
                        {/* Heading */}
                        <h5>My Past Homes</h5>
                    </div>
                </div>
                <div className="row">
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

