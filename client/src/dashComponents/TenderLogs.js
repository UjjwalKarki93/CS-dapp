import React, { useState } from 'react'
import { Card, Icon, Divider } from 'semantic-ui-react'
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TenderStatus from '../components/TenderStatus'
import '../App.css';

export default function TenderLogs(props) {

  const [dvalue, setdValue] = useState('')
  const [refreshb, setRef] = useState(false)

  const clickRefresh = () => {
    setRef(!refreshb)
  }


  const clickHandler = async () => {
    await props.contract.methods.donate().send(
      { from: props.account, value: props.web3.utils.toWei(dvalue, 'ether') })
  }

  console.log("account=", props.account)
  return (
    <div className='ui container center'>
      <div className='cheat-arrange'>
        <h1>Tender:</h1>
        <div className='tender_box'>
          <Router>
            <Card>
              <Card.Content>
                <Card.Header>{props.address}</Card.Header>
                <Card.Meta>Deployed Tender Address</Card.Meta>
                <nav>
                  <Card.Description>
                    <NavLink to="/tenderlog/tenderstatus" classNmae="text-blue" >View Details</NavLink>
                  </Card.Description>
                  <Divider section></Divider>
                  <label>Amount:
                    <input type="number" placeholder='in ETH' onChange={(e) => setdValue(e.target.value)}></input>
                    <p></p>
                    <button className='ui button green' onClick={clickHandler}
                    >Donate</button>
                  </label>


                </nav>

              </Card.Content>




              <button className='ui button blue' onClick={clickRefresh}><Icon name='sync' />Refresh</button>
            </Card>

            <br /><br />

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
      </div>
    </div>
  )
}