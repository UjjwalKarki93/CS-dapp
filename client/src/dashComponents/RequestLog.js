import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import'../App.css'

export default class RequestLog extends Component {
 
  render() {
    return (
    <div className='container'>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>3 People</Table.HeaderCell>
        <Table.HeaderCell>2 Approved</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Footer>
  </Table>

    </div>
    );
  }
}
