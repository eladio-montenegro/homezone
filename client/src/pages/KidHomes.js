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



class KidHomes extends Component {


    
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
            allfosterfamilies:[]
       
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


        let listHomes= this.state.allfosterfamilies.map((item, i) =>  
        <Col  size="col s12 m4" key={i}>
          <Card>
            <CardHeader color="info">
              <h4>The {item.familyname} Family</h4>
          
            </CardHeader>
            <CardBody>
              <p>{item.aboutfamily}</p>
       

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
                        <h1>My Past Homes </h1>
                    </div>
                   
                </div>
                <div className="row">
                    {listHomes}
                   
                </div>

                
                </Col>
                </Row>
            </Container>
        );
    }
}





export default KidHomes;

