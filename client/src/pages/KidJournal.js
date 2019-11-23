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
            this.setState({ kidinfo: res.data, journalentries: res.data.journalentries,fosterfamilies:res.data.fosterfamilies,currentfamily:res.data.currentfamily, kidemail: res.data.email, rewards: res.data.rewards, goals: res.data.goals, coinCount: res.data.coinCount, firstname: res.data.firstname });
            
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



    render() {

        let listJournal= this.state.journalentries.map((item, i) =>  
        <Col  size="col s12 m12 l12" key={i}>
          <Card>

            <CardBody>
            <h6>{item}</h6>
       

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
                        <h1>My Journal </h1>
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
                                    
                                                <textarea id="textarea1" className="materialize-textarea" name="journalentry" onChange={this.handleChange}></textarea>
                                                
                                            </div>

                                            <Button color="primary" type="button" onClick={this.addJournalEntry}> SEND</Button>   
                                        </div>
                                        {/* Submit Button */}
                                       
                                        
                                    </div>
                                </div>
                           <div>

                              
                           </div>
                    </div>
                </div>

                {listJournal}
                {/* Past Homes */}
    

                </Col>
                </Row>
            </Container>
        );
    }
}





export default KidJournal;

