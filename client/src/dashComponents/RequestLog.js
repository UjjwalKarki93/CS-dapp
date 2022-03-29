
import React, { useState } from 'react';
import ShowRequest from '../components/ShowRequest';

const RequestLog = (props) => {

  const [description, setDes] = useState(null)
  const [amount, setAmount] = useState(null)
  const [recipient, setRecp] = useState(null)
  const [refresh, SetRef] = useState(false)

  const clickHandler = async () => {

    await props.contract.methods.createRequests(description, recipient, props.web3.utils.toWei(amount)).send({ from: props.account })
    let f = await props.contract.methods.getreqNo().call()
    SetRef(!refresh)

  }

  return (
    <div className="ui container center">
      <h1 id="dashboard-h1">BLOCKCHAIN BASED CHARITY SYSTEM</h1>
      <div className='cheat-arrange'>
        <h1>REQUEST CREATION </h1>
        <div className='request_div'>
          <form className="ui form" type='submit'>

            <div className="eight wide field">
              <label>Description</label>
              <input type="text" name="Target" placeholder="Description" onChange={(e) => setDes(e.target.value)}></input>
            </div>
            <div className="eight wide field">
              <label>Amount </label>
              <input type="number" placeholder="Request Amount" onChange={(e) => setAmount(e.target.value)}></input>
            </div>
            <div className="eight wide field">
              <label>Recipient</label>
              <input type="text" name="Minimum Contribution" placeholder="Payable Address" onChange={(e) => setRecp(e.target.value)}></input>
            </div>
          </form>

          <p></p>
          <button className='ui button blue' onClick={clickHandler}>Create Request</button>
          <p></p>
        </div>

        <div className='request-table'>
          <p></p>
          <br />
          <ShowRequest
            contract={props.contract}
            account={props.account}
            web3={props.web3}
            refresh={refresh}
          />
        </div>
      </div>
    </div>
  );
}
export default RequestLog
