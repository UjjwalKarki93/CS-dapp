import React, { Component } from 'react';
//import { Container } from 'semantic-ui-react';
import '../App.css';

export default class aboutUS extends Component {
  render() {
    return <div>
     

      <div className='cheat-arrange'>
      
        <h3 className='aboutUs_h3'>
        <h1 className='about_h1'>ABOUT</h1>
          This is a minor project developed by KEC (BCT) students 075 batch
        </h3>

        <h3 style={{color:"red"}}> Members of Development team </h3>
        <div className="aboutUs_div">
          &#x25CF; Suraj Dahal <br />
          &#x25CF; Ujjwal Karki <br />
          &#x25CF; Rajendra Joshi <br />
          &#x25CF; Tshering Wangel Sherpa

        </div>
      </div >
    </div>
  }
}
