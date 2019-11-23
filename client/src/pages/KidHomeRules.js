import React, { Component } from "react";
import { Tab, Tabs, Select, Button, } from 'react-materialize';
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import SimpleModal from "../components/SimpleModal";
import Icon from '@material-ui/core/Icon';
import KidSidebar from "../components/KidSidebar/KidSidebar.js";



class KidHomeRules extends Component {


    
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
            this.setState({ kidinfo: res.data, fosterfamilies:res.data.fosterfamilies,currentfamily:res.data.currentfamily, kidemail: res.data.email, rewards: res.data.rewards, goals: res.data.goals, coinCount: res.data.coinCount, firstname: res.data.firstname });
            this.getParentInfo();
        })
        .catch(err => console.log(err));



    }



    getParentInfo=()=> {



        API.getParent(this.state.kidinfo.fosterfamilies[this.state.kidinfo.fosterfamilies.length-1])
      .then(  res => {

          this.setState({parentinfo:res.data});
          
        
      }) 
      .catch(err => console.log(err));




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
              this.setState({currentfamily:1});
              this.updateCurrentFamily();
        
            })
            .catch(err => console.log(err));
      }

      updateCurrentFamily =(newentry)=> {

    
        API.updateKidUser(this.state.kidid, {
            currentfamily: this.state.currentfamily,
            fosterfamilies:[...this.state.fosterfamilies,this.state.parentinfo_id]}
            )
            .then()
        
            .catch(err => console.log(err));
   
    }


    render() {

        


   


        return (


           
                
            
            <Container>

                

                <div id="kidsidebar"><KidSidebar></KidSidebar> </div>
                <Row>
                <Col  size="col s12 l10 m9 offset-l2 offset-m4">




                <div id="nofamilyjoined">
                <Row>
                    <h1>Welcome to the {this.state.parentinfo.familyname} family!</h1>

                    <h2 className="paratitle">A message from your new home:</h2>
                    <p>{this.state.parentinfo.welcome}</p>
                    <br></br>
                    <h2 className="paratitle">About your foster parent</h2>
                    <p>Parent Name: {this.state.parentinfo.firstname}</p>       
                    <p>Parent Occupation: {this.state.parentinfo.occupation}</p>
                    <p>{this.state.parentinfo.aboutyou}</p>    
                        <br></br>
                    <h2 className="paratitle">About your foster family</h2>
                    <p>{this.state.parentinfo.aboutfamily}</p>   

                    <br></br>
                    <h2 className="paratitle">House Rules</h2>
                    <p>{this.state.parentinfo.rules}</p>      
                </Row>



                </div>


                </Col>
                </Row>
            </Container>
        );
    }
}





export default KidHomeRules;

