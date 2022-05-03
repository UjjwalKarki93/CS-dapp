import React, { Component } from 'react';
//import { Container } from 'semantic-ui-react';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="home-h1">BLOCKCHAIN BASED CHARITY SYSTEM</h1>
                <h3 id='home-h3'>A decentralised form of donation</h3>
               
                <div className='home-body'>
                     <div class="ui vertical stripe segment">
                        <div class="ui text container">
                            <h3 class="ui header">What is Block Chain?</h3>
                            <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking 
                                assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible 
                                (intellectual property, patents, copyrights, branding). 
                               </p>
                        </div>
                    </div>

           
                        
                    <div class="ui  stripe segment">
                        
                        <div class="ui middle aligned stackable grid container">

                            <div class="row">
                                <div class="eight wide column">
                                    <h3 class="ui header">Accurately target aid</h3>
                                <p>
                                Business runs on information. The faster it’s received and the more accurate it is, the better. 
                                Blockchain is ideal for delivering that information because it provides immediate, shared and 
                                completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members.
            
              
                                </p>
                    
                                </div>
                              

                            </div>
                        </div>
                    </div>

                    <div class="ui vertical stripe quote segment">
                        <div class="ui equal width stackable internally celled grid">
                            <div class="center aligned row">
                                <div class="column">
                                    <h3>"What is Decentralised Website"</h3>
                                    <p>Unlike typical websites,where service provider has<br /> full control of your activity,
                                        decentralised websites allow you to control your data.
                                    </p>
                                </div>
                                <div class="column">
                                    <h3>Charity Blockchain</h3>
                                    <p>
                                        <b></b> Blockchain Charity Foundation is a non-profit organization dedicated to achieve SDGs through programs funded by cryptocurrency donations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui vertical stripe segment">
                        <div class="ui text container">
                            <h3 class="ui header">Blockchain Future</h3>
                            <p>It is expected that blockchain will expand its scope of usability in many more sectors including finance, data analysis, and
                                 the Internet of Things with the advent of 5G. Usage of the Blockchain system in different sectors apart from cryptocurrencies a
                                nd NFTs can easily save time, money and solve many problems.</p>
                        </div>
                    </div>
                </div>
                <br />
                <iframe width='700' height="400" src="https://www.youtube.com/embed/yubzJw0uiE4?autoplay=1" title="YouTube video player" frameborder="0" allow="" allowfullscreen></iframe>

                <div className='home-footer'>
                    <div class="ui inverted vertical footer segment">
                        <div class="ui container">
                            <div class="ui stackable inverted divided equal height stackable grid">
                                <div class="three wide column">

                                    <h4 class="ui inverted header">About</h4>
                                    <div class="ui inverted link list">
                                        <a href="#" class="item">Sitemap</a>
                                        <a href="#" class="item">Contact Us</a>
                                        <a href="#" class="item">Gazebo Plans</a>
                                    </div>
                                </div>
                                <div class="three wide column">
                                    <h4 class="ui inverted header">Other Sites</h4>
                                    <div class="ui inverted link list">
                                        <a href="https://www.google.com/" class="item" target="_blank">Google</a>
                                        <a href="https://www.facebook.com" class="item" target="_blank">facebook</a>
                                        <a href="https://www.instagram.com/" class="item" target="_blank">Instagram</a>
                                        <a href="https://www.twitter.com/" class="item" target="_blank">Twitter</a>

                                    </div>
                                </div>
                                <div class="seven wide column">
                                    <h4 class="ui inverted header">Minor Project</h4>
                                    <p>This is a minor project of BCT III (II) from KEC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
