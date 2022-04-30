import React, { Component } from 'react';
//import { Container } from 'semantic-ui-react';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="home-h1">BLOCKCHAIN BASED CHARITY SYSTEM</h1>
                <h3 id='home-h3'>A decentralised form of donation</h3>
                <iframe width="1000" height="400" src="https://www.youtube.com/embed/yubzJw0uiE4?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                <div className='home-body'>
                    <h3>What is Block Chain?</h3>
                    <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and 
                        traded on a blockchain network, reducing risk and cutting costs for all involved.</p>
                        <h3>Why blockchain is important?</h3>
                            <p> Business runs on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.</p>
                        
                    <div class="ui  stripe segment">
                        
                        <div class="ui middle aligned stackable grid container">

                            <div class="row">
                                <div class="eight wide column">
                                    <h3 class="ui header">Accurately target aid</h3>
                                    <p>Ensure aid goes to the exact individuals who need it,
                                        checking their identities against the blockchain.</p>
                                    <h3 class="ui header">We Make Bananas That Can Dance</h3>
                                    <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
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
                                    <h3>"I should have try this before"</h3>
                                    <p>
                                        <b></b> Chief Fun Officer Acme Toys
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui vertical stripe segment">
                        <div class="ui text container">
                            <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
                            <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
                            <a class="ui large button">Read More</a>
                            <h4 class="ui horizontal header divider">
                            </h4>
                            <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
                            <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
                            <a class="ui large button">I'm Still Quite Interested</a>
                        </div>
                    </div>

                </div>

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
