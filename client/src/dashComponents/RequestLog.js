import React, { Component } from 'react';
import { Table,Checkbox,Button} from 'semantic-ui-react';
import '../App.css'


export default class RequestLog extends Component {
 
  render() {
    return (
    <div className='container'>
     <Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Request_No:</Table.HeaderCell>
        <Table.HeaderCell>Creator Address</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Recipient</Table.HeaderCell>
        <Table.HeaderCell>Voters/Donors</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox toggle />
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>0/0</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='6'>
          <Button
            floated='right'
            icon
            primary
            size='small'

          > Make Payment
          </Button>
          <Button size='small' color='green'>Vote</Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

    </div>
    );
  }
}
