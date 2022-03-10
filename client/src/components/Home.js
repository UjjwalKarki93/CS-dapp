import React, { Component } from 'react';
import { Container,Header } from 'semantic-ui-react';
import '../App.css';


class Home extends Component {
    render() {
        return (
            <div className="left">
                        <Container fluid>
      <Header as='h2'>Decentralized Charity System Using Ethereum Blockchain</Header>
   
      
      <p>Put simply, Blockchain is a form of technology that allows digital information to be distributed, but not copied. This means each piece of data only has one owner. Through Blockchain processes, information can be distributed in a transparent way, which is safe and can help mitigate against fraud.</p>

 

<p> When describing Blockchain the phrase ‘digital ledger of transactions (DLT)’ is used, which means it is duplicated and distributed across computer systems. With Blockchain, transactions are recorded with a cryptographic signature, called a hash.</p>
 

<p>Each block within this chain of information contains a number of transactions and each time a new transaction is made in this Blockchain, a record is added to every participant’s ‘ledger’. It is essentially a growing list of records.</p>

 

<p>What does this mean for charities? In practical terms the use of Blockchain means that if one of the blocks is changed it is immediately evident that it has been altered. This makes life difficult for cyber criminals and hackers. They would find it hard to corrupt a Blockchain without changing every block in the chain, across all versions.</p>

 

<p>Blockchain is often used when talking about cryptocurrency, such as Bitcoin. But it is a misconception to see Blockchain as a cryptocurrency itself. It is the process which enables cryptocurrencies to operate, in the same way the internet allows email to work.</p>

 

<p>The first talk of Blockchain was in a 2008 whitepaper called Bitcoin: A Peer to Peer Electronic Cash System that talked of how Blockchain technology can enable a “purely peer-to-peer version of electronic cash”.</p>

 

<p>Understanding of Blockchain has developed since then, with many realising its potential to offer more than just enabling cryptocurrency to operate.</p>


<p>This is understandable for organisations in the pursuit of efficiency savings as there are clear benefits in decreasing the cost of transactions through Blockchain’s efficient and secure process. This has led to an increase in investment among organisations looking to see how Blockchain can improve the efficiency of supply chains, finance, voting, contracting, healthcare, and more.</p>

 

<p>Managing donations more efficiently is another benefit for charities, as well as improving trust with donors through the ability of being able to track and trace transactions through Blockchain.</p>

 
    </Container>
            </div>
        );
    }
}

export default Home;
