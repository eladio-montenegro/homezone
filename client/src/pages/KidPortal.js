import React, { Component } from "react";
import { Tab, Tabs, Select, Button, } from 'react-materialize';
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import SimpleModal from "../components/SimpleModal";
import Icon from '@material-ui/core/Icon';
import KidSidebar from "../components/KidSidebar/KidSidebar.js";
import AlbumIcon from '@material-ui/icons/Album';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import ConfettiGenerator from "confetti-js";
import { relative } from "path";

import emailjs from 'emailjs-com';





class KidPortal extends Component {


    
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
            notifications:[],
           
            firstname: "",
            status: "",
            rewards: [],
            goals: [],
            kidemail: "lotuslindez@gmail.com",

            joinhome: "",
            parentinfo: {},
            currentfamily:0,
            fosterfamilies:[]
       
        }
    }


    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    getKid=()=> {

        var switchid;

        if(this.state.kidid){

            switchid=this.state.kidid;


        }

        else {

            switchid=this.state.fromparentprofile;
        }

        
        API.getKid(switchid)
        .then(res => {
            this.setState({ kidinfo: res.data, notifications: res.data.notifications,fosterfamilies:res.data.fosterfamilies,currentfamily:res.data.currentfamily, kidemail: res.data.email, rewards: res.data.rewards, goals: res.data.goals, coinCount: res.data.coinCount, firstname: res.data.firstname });
            
         
            


        if(this.state.currentfamily===1 && this.state.kidid){

            document.getElementById("nofamilyjoined").style.display = "none";
            document.getElementById("coinsection").style.display = "block";
            

        }

        else if (this.state.fromparentprofile){

            document.getElementById("nofamilyjoined").style.display = "none";
            document.getElementById("coinsection").style.display = "block";
            

        }

        else{

            
            document.getElementById("nofamilyjoined").style.display = "block";
            document.getElementById("coinsection").style.display = "none";


        }
            
        if(this.state.goals.length >=1  && !this.state.kidid) {

            document.getElementById("parentgoalemptystate").style.display = "none";

        }

        if(this.state.rewards.length >=1  && !this.state.kidid) {

            document.getElementById("parentrewardemptystate").style.display = "none";

        }

            

            
            if(this.state.goals.length >=1 && this.state.kidid) {

                document.getElementById("goalemptystate").style.display = "none";
                
    
            }

            if(this.state.rewards.length >=1 && this.state.kidid) {
            document.getElementById("rewardemptystate").style.display = "none";
        }


        
        })
        .catch(err => console.log(err));


    }

    


    

    addGoal = event => {
        var table = document.getElementById("goalTable");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = this.state.newgoal;
        cell2.innerHTML = this.state.newcoins;
        cell3.innerHTML = "<a goal='"+ this.state.newgoal+ "' coins='"+this.state.newcoins+"' onClick='this.finishedGoal()'> Complete </a>";
             

         let newentry= [...this.state.goals,{ 
            goal:this.state.newgoal,
            coins:this.state.newcoins, 
            status:"incomplete"}];

        
         this.getKids(newentry);


                document.getElementById("parentgoalemptystate").style.display = "none";
                document.getElementById("goalemptystate").style.display = "none";
             
    
            
             API.updateKidUser(this.state.fromparentprofile, {
                notifications: [...this.state.notifications,"A new goal has been added to your goal dashboard: "+this.state.newgoal]}
                )
                .then(myDude => { this.sendEmail("A new goal has been added to your goal dashboard: "+this.state.newgoal); 
                })
            
                .catch(err => console.log(err));  
                
    }

    sendEmail =(mess)=> {
        console.log("sending");

        // this.state.fromparentprofile.email
        //this.state.fromparentprofile.username


        var templateParams = {
            "email": "lotuslindez@gmail.com",
            "username": "poop",
            "message": "hi"
        };
         
        var service_id = "gmail";
        var template_id = "template_GJKpY6Qr";
 

        emailjs.send(service_id ,template_id, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.reload();
               
            }, function(error) {
               console.log('FAILED...', error);
               window.location.reload();
            });



    }

    finishedGoal = event =>{

        const {name} = event.target;
        const comegoals =this.state.goals.filter(goal => goal.coins !== name);

    
    
        this.setState({coinCount: (parseInt(this.state.coinCount)+parseInt(name))});
        this.setState({goals:comegoals});

        API.updateKidUser(this.state.fromparentprofile, {
             coinCount: (parseInt(this.state.coinCount)+parseInt(name)),
            goals:comegoals,
            notifications: [...this.state.notifications,"You have completed a goal for "+name+"coins"]}
            )
            .then(myDude => { console.log("updated");
            })
        
            .catch(err => console.log(err));  

    }


    buyReward = event =>{

        const {name} = event.target;


        if(name<=this.state.coinCount) {
        const comerewards =this.state.rewards.filter(reward => reward.coins !== name);
        console.log(comerewards);


        this.setState({coinCount: (parseInt(this.state.coinCount)-parseInt(name))});
        this.setState({rewards:comerewards});


        API.updateKidUser(this.state.fromparentprofile, {
            coinCount: (parseInt(this.state.coinCount)-parseInt(name)),
            rewards:this.state.rewards.filter(reward => reward.coins !== name) ,
            notifications: [...this.state.notifications,"You recently bought a reward for "+name+" coins!"]},
            )
            .then(myDude => { alert("updated");
            })
        
            .catch(err => console.log(err));  

        }

        else {

            alert ("You don't have enough coins for this reward. Try completing more goals or ask your foster parent for more oppurtunities.");
        }

        
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render(); 
        window.scrollBy(0, 300);
        setTimeout( function(){confetti.clear()},3000);
        setTimeout( function(){window.scrollBy(0, -400);},3000);
        
        

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
           
         document.getElementById("parentrewardemptystate").style.display = "none";
         document.getElementById("rewardemptystate").style.display = "none"; 


         API.updateKidUser(this.state.fromparentprofile, {
            notifications: [...this.state.notifications,"A new reward to earn has been added to your goal dashboard: "+this.state.newreward]}
            )
            .then(myDude => {  window.location.reload();
            })
        
            .catch(err => console.log(err));
     
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
      
        
        
 
        
      };

      hideFromKid=()=> {

        document.getElementById("theaddrewardbutton").style.display = "none";
        document.getElementById("theaddgoalbutton").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("parentgoalemptystate").style.display = "none";
        document.getElementById("parentrewardemptystate").style.display = "none";
        




        if(this.state.goals.length >1) {

            document.getElementById("goalemptystate").style.display = "none";

        }

        if(this.state.rewards.length >1) {

            document.getElementById("rewardemptystate").style.display = "none";

        }





      }

      hideFromParent=()=> {

        document.getElementById("kidsidebar").style.display = "none";
        document.getElementById("goalemptystate").style.display = "none";
        document.getElementById("rewardemptystate").style.display = "none";


  

        
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


      addFamily=()=> {

        API.getParentbyCode(this.state.joinhome)
        .then(  res => {
  
            this.setState({parentinfo:res.data});
            this.updateParent();
        }) 
        .catch(err => console.log(err));

      }


      updateParent=()=> {


        API.updateParentUser(this.state.parentinfo._id, {
            fosterkids: [...this.state.parentinfo.fosterkids, this.state.kidinfo._id]}
            )
            .then(myDude => {
         
              console.log([...this.state.parentinfo.fosterkids, this.state.kidinfo._id]);
              document.getElementById("nofamilyjoined").style.display = "none";
              document.getElementById("coinsection").style.display = "block";
              this.setState({currentfamily:1});
              this.updateCurrentFamily();
        
            })
            .catch(err => console.log(err));
      }

      updateCurrentFamily =(newentry)=> {

    
        API.updateKidUser(this.state.kidid, {
            currentfamily: this.state.currentfamily,
            fosterfamilies:[...this.state.fosterfamilies,this.state.parentinfo._id]}
            )
            .then(dude=> {window.location.href = "/kidhomerules";})
        
            .catch(err => console.log(err));
   
    }


    render() {

        let listGoals;
        let listRewards;

        if(this.state.fromparentprofile) {
        
       listGoals= this.state.goals.map((item, i) =>  

        <tr> 
                <td>{item.goal}</td> 
                <td>{item.coins} </td> 

                    
                    <td> <a className="completebutton"
                            name={item.coins} 
                            value={i} 
                            onClick={this.finishedGoal}> Complete </a> 
                            
                    </td>  

        </tr>
        
      );

        }

        else{

           listGoals= this.state.goals.map((item, i) =>  

        <tr> 
                <td>{item.goal}</td> 
                <td>{item.coins} </td> 

                    
                <td>not done</td>

        </tr>

          

        
            );}

        

      

    if(this.state.fromparentprofile) {
        
        listRewards= this.state.rewards.map((item, i) =>  

        <tr> <td> {item.reward}</td> <td>{item.coins} </td> <td> Not Bought </td> </tr>
        
      );
 
         }
 
         else{
             
            listRewards= this.state.rewards.map((item, i) =>  

            <tr> <td> {item.reward}</td> <td>{item.coins} </td> <td> <a className="buybutton" name={item.coins}  coins={item.coins} onClick={this.buyReward}> Buy </a> </td> </tr>
            
          );}



   


        return (


           
                
            
            <Container>

                

                <div id="kidsidebar"><KidSidebar></KidSidebar> </div>
                <Row>
                <Col  size="col s12 l10 m9 offset-l2 offset-m4">

                <div id="back">
                <a href="/parentportal"> <h6>Back to My Portal</h6> </a>   
                </div>


                <div id="nofamilyjoined">
                <Row>
                    <h1>You are currently not part of a foster family! Click on the button below when you are ready. </h1>
                    <SimpleModal 

    
                                    buttontext="+ Join a Family"
                                    modaltitle="Join a Family">
                                    <p>Add a 4 digit code to join a family. Ask your foster parent for the code. </p> 
                                    <div>
                                            <div className="form-group">
                                            <p>Code</p>

                                            <input
                                            className="form-control"
                                            id="joinhome"
                                            name="joinhome"
                                            type="text"
                                            placeholder="Enter goal"
                                            onChange={this.handleChange}
                                            />
                                        

                                            <Button color="primary" type="button" onClick={this.addFamily}> Join Home</Button>   
                                            </div>
                                            

                                    </div>
                                    
                        </SimpleModal>
                
                </Row>



                </div>
               
                <div id="coinsection">
                <div className="row"  >
                    <div className="col l12">
                        {/* Welcoming Message */}
                        <h1>{this.state.kidinfo.firstname}'s Goal Dashboard </h1>
                        
                    </div>
                   
                </div>
                <div className="row">
                    {/* Three Tabs */}
                    <div className="col l10 s12">


                  

                     
                        <Tabs className="tab-demo">
                            {/* My Goals Tab */}
                            <Tab title="My Goals" href="#myGoalsTab" className="col l12" active>
                                {/* My Goals Tab Data */}
                                <div id="myGoalsTab">
                                    {/* Heading */}
                                    <div className="row">
                                        <div class="col s4">
                                            <h5>My Coins</h5>
                                        </div>
                                       
                                    </div>
                                    {/* Coin Count Box */}
                                    <div className="row">
                                        <div className="col l12 s12">
                                            <div className="coinBox">
                                                <p>You have</p>
                                                <h4 className="coinCount">{this.state.coinCount} <OfflineBoltIcon/></h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div class="col s4">
                                            <h5>Goals</h5>
                                        </div>
                                       
                                    </div>
    

                                    {/* My Goals Labels*/}
                                    <div className="row">


                                    <table id="goalTable">
                                        <thead>
                                        <tr>
                                            <th>Goal</th>
                                            <th>Coins to Earn</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>

                                        <tbody>

                                            {listGoals}

                        
                                        </tbody>
                                    </table>

                                    <div class="emptystate" id="goalemptystate">

                                             <p> Looks like your parent hasn't set up any goals for you yet! Come back later. </p>

                                     </div>
                                     <div class="emptystate" id="parentgoalemptystate">

                                             <p> You have not added any goals for {this.state.firstname}. Click on the button to add one as soon as you can. </p>

                                     </div>                                 
                                    <div id="theaddgoalbutton">
                                
                                <SimpleModal 

    
                                    buttontext="+ Add a Goal"
                                    modaltitle="New Goal">
                                    <p>Add a goal for your child to complete. </p> 
                                    <div>
                                            <div className="form-group">
                                            <p>Goal</p>

                                            <input
                                            className="form-control"
                                            id="newgoal"
                                            name="newgoal"
                                            type="text"
                                            placeholder="Enter goal"
                                            onChange={this.handleChange}
                                            />
                                            
                                            <p>Coins to Earn</p>

                                            <input
                                            className="form-control"
                                            id="coins"
                                            name="newcoins"
                                            type="text"
                                            placeholder="Enter coin amount they can earn"
                                            onChange={this.handleChange}
                                            /> 


                                            
                                            <Button color="primary" type="button" onClick={this.addGoal}> Add Goal</Button>   
                                            </div>
                                            

                                    </div>


                                    
                                    </SimpleModal>
 
                                    </div>
                                    </div> 

                                    <div className="row">
                                        <div class="col s4">
                                            <h5>Rewards</h5>
                                        </div>
                                       
                                    </div>

                                    {/* Rewards, Price, Status */}
                                    <div className="row">
                                    <table id="rewardTable">
                                        <thead>
                                        <tr>
                                            <th>Rewards</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {listRewards}
                                       
                                        </tbody>
                                    </table>
                                    <div class="emptystate" id="rewardemptystate">

                                        <p> Looks like your parent hasn't set up any rewards for you yet! Come back later. </p>



                                        </div>
                                        <div class="emptystate" id="parentrewardemptystate">

                                            <p> You have not added any rewards for {this.state.nickname}. Click on the button to add one as soon as you can. </p>

                                            </div> 

                                    <div id="theaddrewardbutton">
                                    <SimpleModal 

    
                                    buttontext="+ Add a Reward"
                                    modaltitle="New Reward">
                                    <p>Add a reward for your child to earn by completing goals. </p> 
                                    <div>
                                            <div className="form-group">
                                            <p>Reward</p>

                                            <input
                                            className="form-control"
                                            id="newreward"
                                            name="newreward"
                                            type="text"
                                            placeholder="Enter reward"
                                            onChange={this.handleChange}
                                            />
                                            
                                            <p>Coins to Earn</p>

                                            <input
                                            className="form-control"
                                            id="newrewardcoins"
                                            name="newrewardcoins"
                                            type="text"
                                            placeholder="Enter cost for this reward "
                                            onChange={this.handleChange}
                                            /> 


                                            <div id="rewardtoHide">
                                            <Button color="primary" type="button" onClick={this.addReward}> Add Reward</Button>   
                                            </div>
                                            </div>

                                    </div>

                                            </SimpleModal>
                                            </div>

                                    </div>
                                </div>
                            </Tab>


                            {/* Goal History Tab */}
                            <Tab title="Goal History" href="#goalHistoryTab" className="col l12" active>
                                {/* Goal History Tab Data */}
                                <div id="goalHistoryTab">
                                    <div className="row">
                                        <div class="col s4">
                                            <h5>Goal History</h5>
                                        </div>
                                       
                                    </div>
                                    {/* Coin History Boxes */}
                                    <div className="row">
                                        <div class="col l6 s6">
                                            <div className="coinBox">
                                                {/*  Coins Earned */}
                                                <p>Coins Earned</p>
                                                <h4 className="coinsEarned">158 O</h4>
                                                {/* Add Dynamically */}
                                            </div>
                                        </div>
                                        <div className="col l6 s6">
                                            <div class="coinBox">
                                                {/*  Coins Spent */}
                                                <p>Coins Spent</p>
                                                <h4 className="coinsSpent">143 O</h4>
                                                {/* Add Dynamically */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Goal History Labels */}
                                    <div className="row">
                                        <div class="col l8">
                                            <h5>Goals Completed</h5>
                                        </div>
                                        <div className="col l2">
                                            <h5>Coin Value</h5>
                                        </div>
                                        <div className="col l2">
                                            <h5>Date</h5>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        {/* Goals Completed */}
                                        <div className="col l8">
                                            <p>Clean Bathroom</p>
                                            <p>Wash Dishes</p>
                                            <p>No Missing Homework Assignments for a Week</p>
                                            <p>Vaccum the House</p>
                                        </div>
                                        {/* Coin Value */}
                                        <div className="col l2">
                                            <p>5 O</p>
                                            <p>10 O</p>
                                            <p>25 O</p>
                                            <p>5</p>
                                        </div>
                                        {/* Date */}
                                        <div className="col l2">
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                            <p>TimeStamp</p>
                                        </div>
                                    </div>
                                    {/* <!-- Rewards Labels --> */}
                                    <div className="row">
                                        <div class="col l8">
                                            <h5>Rewards Earned</h5>
                                        </div>
                                        <div className="col l2">
                                            <h5>Price</h5>
                                        </div>
                                        <div className="col l2">
                                            <h5>Date</h5>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        {/* Rewards Earned */}
                                        <div className="col l8">
                                            <p>Pizza Dinner</p>
                                            <p>Go to Water Park</p>
                                            <p>Movie Night</p>
                                            <p>Buy God of War 3</p>
                                            <p>1 hour of computer time</p>
                                        </div>
                                        {/* Price */}
                                        <div className="col l2">
                                            <p>25 O</p>
                                            <p>35 O</p>
                                            <p>50 O</p>
                                            <p>75 O</p>
                                            <p>25 O</p>
                                        </div>
                                        {/* Date */}
                                        <div className="col l2">
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

                        </Tabs>
                        <canvas id="my-canvas" >

                            <h1>Congrats! You did it! Keep accomplishing your goals!</h1>



                        </canvas>
                    </div>
                </div>

                </div>
                
         

                </Col>
                </Row>
            </Container>
        );
    }
}





export default KidPortal;

