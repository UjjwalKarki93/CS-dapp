import React,{useState}from 'react'
import { Button,Input,Table } from 'semantic-ui-react'
import swal from 'sweetalert';

const TransactionRow=(props)=> {
    const[reqNumber,setReq]=useState(null)
    const[a,setA]=useState(false)


    const datas=JSON.parse(localStorage.getItem("info" || "[]"))


    const VoteHandler = async () => {

        await props.contract.methods.voteRequest(reqNumber).send({
          from: props.account[0]
        });
        
        props.current(!a)
      };


      
    const PaymentHandler = async () => {

        await props.contract.methods.settleRequest(reqNumber).send({
          from: props.account[0]
        });
        props.current(!a)
        swal("Succesful Payment", "Please review your recipient account!");
    
      };


  return (
    <div className='ui conatiner '>
   
    <Table compact celled definition >
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell>Request_NO</Table.HeaderCell>
      <Table.HeaderCell>Creator</Table.HeaderCell>
      <Table.HeaderCell>Description:</Table.HeaderCell>
      <Table.HeaderCell>Amount:</Table.HeaderCell>
      <Table.HeaderCell>Recipient:</Table.HeaderCell>
      <Table.HeaderCell>Voters/Donors</Table.HeaderCell>
      <Table.HeaderCell>Payment Completed</Table.HeaderCell>
     
    </Table.Row>
  </Table.Header>


  <Table.Body>


{
  datas.map((e,index)=>(
    
      <Table.Row key={index.toString()}>
        <Table.Cell>
        </Table.Cell>
        <Table.Cell>{index}</Table.Cell>
        <Table.Cell>{e[6]}</Table.Cell>
        <Table.Cell>{e[5]}</Table.Cell>
        <Table.Cell>{props.web3.utils.fromWei(e[2])}</Table.Cell>
        <Table.Cell>{e[3]}</Table.Cell>
        <Table.Cell>{e[4]}/{e[7]}</Table.Cell>
        <Table.Cell>{String(e[1])}</Table.Cell>
      
      </Table.Row>
    ))
    
}
</Table.Body>
  




    <Table.Footer fullWidth>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell colSpan='7'>
      <Input position='right' placeholder='Request Number' onChange={e=>setReq(e.target.value)} />    
        <p></p>
        <Button size='small' color="green" onClick={VoteHandler}>Vote</Button>
        <Button
          floated='left'
          icon
          labelPosition='right'
          primary
          size='small'
          onClick={PaymentHandler}
        >
         
        Make Payment
        </Button >
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>

  </Table>

    </div>
  )
}
export default TransactionRow
