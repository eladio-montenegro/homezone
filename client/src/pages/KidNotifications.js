import React, { Component } from "react";
import { Tab, Tabs, Select, Button, } from 'react-materialize';
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import SimpleModal from "../components/SimpleModal";
import Icon from '@material-ui/core/Icon';
import KidSidebar from "../components/KidSidebar/KidSidebar.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";



class KidNotifications extends Component {


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
           
            firstname: "",
            status: "",
            rewards: [],
            goals: [],
            kidemail: "lotuslindez@gmail.com",

            joinhome: "",
            parentinfo: {},
            currentfamily:0,
            fosterfamilies:[],
            allfosterfamilies:[].length,
            journalentries:[],
            journalentry: "",

            notifications:[],
       
        }
    }


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    addJournalEntry=()=> {

        this.setState({
            journalentries: [...this.state.journalentries,this.state.journalentry]
        });


     
        API.updateKidUser(this.state.kidid, {
            journalentries: [...this.state.journalentries,this.state.journalentry]}
            )
            .then(myDude => { console.log("updated");
            })
        
            .catch(err => console.log(err));

        
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
            this.setState({ kidinfo: res.data, notifications: res.data.notifications, journalentries: res.data.journalentries,fosterfamilies:res.data.fosterfamilies,currentfamily:res.data.currentfamily, kidemail: res.data.email, rewards: res.data.rewards, goals: res.data.goals, coinCount: res.data.coinCount, firstname: res.data.firstname });
            
            this.getAllFamilyInfo();



        
        })
        .catch(err => console.log(err));


    }

    getAllFamilyInfo=()=> {

        var families=this.state.fosterfamilies;
        




        for(var i=0;i<families.length;i++){

        API.getParent(families[i])
        .then(  res => {
  
            this.setState({allfosterfamilies: [...this.state.allfosterfamilies,res.data]});
            
            
        }) 
        .catch(err => console.log(err));

    }
        


      }


    

    getKids =(newentry)=> {

    
        API.updateKidUser(this.state.fromparentprofile, {
            goals: newentry}
            )
            .then(myDude => { console.log("updated");
            })
        
            .catch(err => console.log(err));
   
    }

    

    componentDidMount() {

        
        this.getKid();

       
    
        
      };


      deleteNotification=event=>{

      
        const {name, value} = event.target;
        
        const notifications =this.state.notifications.filter(note => note !== name);

        API.updateKidUser(this.state.kidid, {
          notifications: notifications,}
          )
          .then( dude=>{this.setState({notifications :this.state.notifications.filter(note => note !== name)})})
      
          .catch(err => console.log(err));
    
      }
    



    render() {

        let listNotifications= this.state.notifications.map((item, i) =>  
        <Col  size="col s12 m12" key={i}>
          <Card>

            <CardBody>
            <h6>{item}</h6>


            <button
            style={{ float: 'right', backgroundColor:'white',border: 'none',borderColor:'white'}}
            name={item}
            onClick= {this.deleteNotification}
            >
            
            OKAY
          
            </button>

            </CardBody>
          </Card> 
        </Col>
      );
        


   


        return (


           
                
            
            <Container>

                

                <div id="kidsidebar"><KidSidebar></KidSidebar> </div>
                <Row>
                <Col  size="col s12 l10 m9 offset-l2 offset-m4">


                <div className="row">
                    <div className="col l12">
                        {/* Welcoming Message */}
                        <h1>Notifications </h1>
                    </div>
                   
                </div>
                <div className="row">
                    {/* Three Tabs */}
                    <div className="col l10 s12">


                  
                                {/* Journal Tab Data */}
                                
                           <div>

                              
                           </div>
                    </div>
                </div>

                {listNotifications}
                {/* Past Homes */}
    

                </Col>
                </Row>
            </Container>
        );
    }
}





export default KidNotifications;

