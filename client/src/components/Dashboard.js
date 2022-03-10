import React, { Component } from 'react';
import { BrowserRouter as Router,NavLink,Switch,Route } from 'react-router-dom';
import Guideline from '../dashComponents/Guideline';
import Tender from '../dashComponents/Tender';
import '../dashComponents/sidebar.css';
import aboutUS from '../dashComponents/aboutUS';
import RequestLog from '../dashComponents/RequestLog';
import TenderLogs from '../dashComponents/TenderLogs';
import '../App.css'



let array=new Array(1).fill().map(()=>new Array(8).fill('0')) //this is dummy array of objects used for local storage 
localStorage.setItem("info",JSON.stringify(array))
 class Dashboard extends Component {

     constructor(props) {
       super(props);
     }

   state={sidebar:true}

  showSidebar = () => { 
     this.setState({sidebar: !(this.state.sidebar)});

  }
  render() {
  

    return( 
    <div className='App'>

    <Router>
    <nav className={this.state.sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={this.showSidebar}><div></div></button>
      <ul onClick={this.showSidebar}>
        <li>DASHBOARD</li>
        <li><NavLink activeClassName="text-white" to="/guideline" >User Guideline</NavLink></li>
        <li><NavLink to="/tender">Tender Creation</NavLink></li>
        <li><NavLink to="/tenderlog">Tender Logs</NavLink></li>
        <li><NavLink to="/request">Request Logs</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
      </ul>
    </nav>
    

    <Switch>
      
      <Route exact path="/guideline"  component={Guideline} />

      <Route path="/tender">
        <Tender
         web3={this.props.web3} 
        contract={this.props.contract}
         account={this.props.account}
          />
      </Route>
      

      <Route exact path="/tenderlog">
      <TenderLogs
         address={this.props.caddress}
         contract={this.props.contract}
         account={this.props.account}
         web3={this.props.web3} />
         
      </Route>

      <Route path="/request">
        <RequestLog
        
        address={this.props.caddress}
        contract={this.props.contract}
        account={this.props.account}
        web3={this.props.web3} />

      </Route>

      <Route path="/aboutus"  component={aboutUS} />
    

    </Switch>
    </Router>

  </div>
    );
  }
}
export default Dashboard