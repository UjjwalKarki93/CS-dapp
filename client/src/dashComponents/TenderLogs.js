import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import {NavLink,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import TenderStatus from '../components/TenderStatus'

export default function TenderLogs(props) {

  const[dvalue,setdValue]=useState('')
  const[refreshb,setRef]=useState(false)

  const clickRefresh=()=>{
    setRef(!refreshb)
  }
  

  const clickHandler = async ()=>{
    await props.contract.methods.donate().send(
      {from : props.account[0],value:props.web3.utils.toWei(dvalue,'ether')})
  }
   
 console.log("account=",props.account)
  return (
    <div className='ui container center'>
      <h1>Tenders:</h1>
      <Router>
       <Card>
      <Card.Content>
        <Card.Header>{props.address}</Card.Header>
        <Card.Meta>Deployed Tender Address</Card.Meta>
        <nav>
        <Card.Description>
        <NavLink to="/tenderlog/tenderstatus" classNmae="text-blue" >View Details</NavLink>
           
         
        
        </Card.Description>
        <label>Amount:
           <input type="number" labelPosition="right" placeholder='Amount' onChange={(e) => setdValue(e.target.value)}></input>
         </label>   
        
         <button className='ui button green' onClick={clickHandler} 
         >Donate</button>
         
        
        </nav>
        <i class=" icon sync"></i>
        <p><button className='ui button blue' onClick={clickRefresh}>Refresh</button></p>
      </Card.Content>
    
     
     
      
    </Card>
    

    <Switch>
    <Route exact path="/tenderlog/tenderstatus">
      <TenderStatus
        
        contract={props.contract}
        account={props.account}
        web3={props.web3}
        refresh={refreshb} />

      </Route>
      </Switch>

    </Router>
    
    </div>
  )
}