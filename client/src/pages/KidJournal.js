import React, { Component } from "react";
import { Tab, Tabs, Select, Button, } from 'react-materialize';
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import SimpleModal from "../components/SimpleModal";
import Icon from '@material-ui/core/Icon';
import KidSidebar from "../components/KidSidebar/KidSidebar.js";



class KidJournal extends Component {


    
    constructor(props) {
        super(props)
        this.state = {
            kidinfo:{},
            kidid: localStorage.getItem("kidid"),
            fromparentprofile: localStorage.getItem("parentkidprofile"),
            nologin:0,
            entry: "",
            coinCount: 0,
            newcoins: "" ,
            newgoal: "" ,
            newreward:"",
            newrewardcoins:"",
           
            nickname: "",
            status: "",
            rewards: [],
            goals: [],
            kidemail: "lotuslindez@gmail.com"
       
        }
    }


    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    getKid=()=> {

        
        API.getKid(this.state.fromparentprofile)
        .then(res => {
            this.setState({ kidemail: res.data.email, rewards: res.data.rewards, goals: res.data.goals, coinCount: res.data.coinCount, nickname: res.data.firstname });
            
            this.renderGoal();
            this.renderReward();
        
        })
        .catch(err => console.log(err));


    }

    

    renderGoal = () => {
        var table = document.getElementById("goalTable");
        this.state.goals.forEach( (goal,i) => { 

        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = goal.goal;
        cell2.innerHTML = goal.coins;

        if (this.state.kidid){

            cell3.innerHTML = goal.status;
        }
        else {
        cell3.innerHTML = "<a goal='"+ goal.goal+ "' coins='"+goal.coins+"' onClick='this.finishedGoal()'> Earned </a>";
             }
        });
    }

    
    renderReward = event => {
        var table = document.getElementById("rewardTable");
        this.state.rewards.forEach( (reward,i) => { 

        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = reward.reward;
        cell2.innerHTML = reward.coins;

        if (this.state.kidid && this.state.coinCount>= reward.coins){

            cell3.innerHTML = "<a reward='"+ reward.reward+ "' coins='"+reward.coins+"' onClick='this.requestItem()'> Request Reward </a>";
        }

        else if (this.state.kidid){
            cell3.innerHTML = "Not Enough Coins";

        }


        else {
        cell3.innerHTML = "<a reward='"+ reward.reward+ "' coins='"+reward.coins+"' onClick='this.earnItem()'> Used </a>";
         }

        });
    }

    addGoal = event => {
        var table = document.getElementById("goalTable");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = this.state.newgoal;
        cell2.innerHTML = this.state.newcoins;
        cell3.innerHTML = "<a goal='"+ this.state.newgoal+ "' coins='"+this.state.newcoins+"' onClick='this.finishedGoal()'> Earned </a>";
             

         let newentry= [...this.state.goals,{ 
            goal:this.state.newgoal,
            coins:this.state.newcoins, 
            status:"incomplete"}];

        
         this.getKids(newentry);
               
       
     
    }


    getKids =(newentry)=> {

    
        API.updateKidUser(this.state.fromparentprofile, {
            goals: newentry}
            )
            .then(myDude => { console.log("updated");
            })
        
            .catch(err => console.log(err));
   
    }

    
    addReward = event => {
        var table = document.getElementById("rewardTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
       

        cell1.innerHTML = this.state.newreward;
        cell2.innerHTML = this.state.newrewardcoins;
        cell3.innerHTML = "<a reward='"+ this.state.newreward+ "' coins='"+this.state.newrewardcoinss+"' onClick='this.earnItem()'> Used </a>";
    

         let newrewardentry= [...this.state.rewards,{ 
            reward:this.state.newreward,
            coins:this.state.newrewardcoins, 
            }];

        
         this.getKidRewards(newrewardentry);
         console.log (newrewardentry);    
     
    }

    getKidRewards =(newentry)=> {

    
        API.updateKidUser(this.state.fromparentprofile, {
            rewards: newentry}
            )
            .then(myDude => { console.log("updated");
            })
        
            .catch(err => console.log(err));
   
    }


    componentDidMount() {

        
        this.determineEntry();
        this.renderGoal();
        
        
 
        
      };

      hideFromKid=()=> {


        document.getElementById("back").style.display = "none";




      }

      hideFromParent=()=> {

        document.getElementById("kidsidebar").style.display = "none";

        
    }

      //checks to see if we are entering from parent portal or from a kid login
      determineEntry=()=> {

        if (this.state.kidid){

            this.setState({entry:this.state.kidid});
            this.hideFromKid();
            
          
        }

        else if (this.state.fromparentprofile) {

            this.setState({entry:this.state.fromparentprofile});
           
           
            this.hideFromParent();
            

        }

        else {
            //if neither then we need to redirect to the login page
            this.setState({nologin:1});
            window.location.href = "/login";

        }





        this.getKid();

       
      }


    render() {

        


   


        return (


           
                
            
            <Container>

                

                <div id="kidsidebar"><KidSidebar></KidSidebar> </div>
                <Row>
                <Col  size="col s12 l10 m9 offset-l2 offset-m4">

                <div id="back">
                <a href="/parentportal"> <h6>Back to My Portal</h6> </a>   
                </div>


                <div className="row">
                    <div className="col l12">
                        {/* Welcoming Message */}
                        <h1>{this.state.nickname}'s Journal </h1>
                    </div>
                   
                </div>
                <div className="row">
                    {/* Three Tabs */}
                    <div className="col l10 s12">


                  
                                {/* Journal Tab Data */}
                                <div id="journalTab">
                                    {/* Heading */}
                           
                                    {/* Journal Box */}
                                    <div className="journal">
                                        <div className="row">   <label>
                                                    <p>Write any thoughts, feelings or ideas you want to share with your guardians </p>
                                            </label>

                                            <div className="input-field col s8">
                                                {/* Text Area */}
                                    
                                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                                
                                            </div>

                                            <Button color="primary" type="button" onClick={this.addJournalEntry}> Submit</Button>   
                                        </div>
                                        {/* Submit Button */}
                                       
                                        
                                    </div>
                                </div>
                           
                    </div>
                </div>
                {/* Past Homes */}
    

                </Col>
                </Row>
            </Container>
        );
    }
}





export default KidJournal;

