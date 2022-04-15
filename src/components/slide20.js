import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Slide20 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container_a roadmap">
          <div className="container">
            <div className="new_container">
              <ScrollAnimation 
                animateIn="zoomIn"
                animateOut="fadeOut"
                duration={1.2}
                delay={1.5}
              >
                <div className="service-title">
                  <h1 style={{marginTop: "8vh"}}>Roadmap</h1>
                </div>
              </ScrollAnimation>
        
              <h2><span>Q1</span> / 2022</h2>
              <div className="roadmap_line"></div>
              <div className="roadmap_row">
                <div className="roadmap_col">
                  <h5 >Jan - Feb </h5>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>Complete UI/UX Development and Testing for Beta Launch</li>
                      <li>Testing Backend and Completion of Contract Event Sensing Integration</li>
                      <li>Price Feeds Integration</li>
                      <li>Airdrops with Bounties, APIs Integration</li>
                      <li>Charity Place APIs Integration</li>
                      <li>Fantom Blockchain Integration</li>
                    </ul>
                  </div>
                </div>
                <div className="roadmap_col">
                  <h5>Feb - March </h5>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>MeDIA eYe Discord Community Launch</li>
                      <li>Global Roll-Out Marketing and Partnerships</li>
                      <li>Minting and Release of NFT Collections</li>
                      <li>Testing All Platform Functionality after integrations</li>
                      <li>UX User Experience Reviews and Testing</li>
                      <li>Completion of full UI/UX Front End Testing and Fixes</li>
                      <li>Payment Provider Final Testing</li>
                      <li>Deployment of Contracts on Fantom</li>
                      <li>Litepaper Updates</li>
                      <li>Strategic and Tech Partnership Announcements</li>
                    </ul>
                  </div>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>Global Marketing Campaign Release</li>
                      <li>NFT Focused Promotions and Marketing by Segment</li>
                      <li className="Roadmap_noDot">ETA for Public Beta Launch 17 - 19th of February</li>
                      <li>Platform Launches on BSC/ETH/FTM</li>
                      <li>eYe Farming Promotion Launch for 8 weeks (with Partner Protocol)</li>
                      <li>NFT airdrops campaign</li>
                      <li>TV Interviews / AMAs / Promotions</li>
                      <li>YouTube Reviews and Walk-Thru</li>
                      <li>Release during Beta - Events Gallery</li>
                      <li>Release during Beta - Million Pixels Canvas</li>
                    </ul>
                  </div>
                </div>
                <div className="roadmap_col">
                  <h5 className="Roadmap_active">March - April </h5>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>Release in Beta - Cross-Chain Transfer</li>
                      <li>Release in Beta - Million Pixels Canvas to Markets</li>
                      <li>Continue with Marketing Campaigns</li>
                      <li>Announce Strategic Partnerships</li>
                      <li className="Roadmap_noDot">Full Public Launch MeDIA eYe (V1)</li>
                      <li className="Roadmap_noDot"><i>Initiate Development of MeDIA eYe Commerce HUB</i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 className="Roadmap_headQ"><span>Q2</span> / 2022</h2>
              <div className="roadmap_line"></div>
              <div className="roadmap_row">
                <div className="roadmap_col">
                  <h5>April - May </h5>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>Lessons Learned On-Going QA/QC Measures</li>
                      <li>Integration of Platform for Launch on Avalanche</li>
                      <li>Updates to UI and Further Improvements to UX</li>
                      <li>Cross-chain NFT Transfer Fully Operational for All Chains</li>
                      <li>MeDIA eYe Commerce HUB Development On-Going</li>
                      <li className="Roadmap_noDot">Launch MeDIA eYe Platform on Avalanche</li>
                      <li>Announce Partnerships and Continue Roll-Out on Avalanche</li>
                      <li>Expand MeDIA eYe HUB Coverage for NFT Markets</li>
                    </ul>
                  </div>
                </div>
                <div className="roadmap_col">
                  <h5>May - June </h5>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>Marketing and Strategic Partnerships Across All-Chains</li>
                      <li>UX - Further Improvements to User Experience</li>
                      <li>UI/UX Development (continued)</li>
                      <li className="Roadmap_noDot">Major Burn Event for eYe on BSC and ETH (Burn expected to reach 200 million
                        eYe)</li>
                      <li>Launch eYe token on Fantom</li>
                      <li>Launch Trading of eYe on Fantom</li>
                    </ul>
                  </div>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li>Launch Cohort Farm on Fantom</li>
                      <li>NFT Airdrops and Rewards Campaign on Fantom</li>
                      <li>Launch Rewards Pools on Fantom</li>
                      <li>Continued development - MeDIA eYe Commerce HUB</li>
                      <li>Updates to Litepaper - On-Going</li>
                      <li>YouTuber Reviews and Walk-Thru</li>
                      <li>And On-Going Marketing for MeDIA eYe Global Roll Out</li>
                    </ul>
                  </div>
                </div>
                <div className="roadmap_col">
                  <h5>June - July </h5>
                  <div className="roadmap_col_inside">
                    <ul>
                      <li className="Roadmap_noDot">Marketing and Strategic Partnerships (Continue)</li>
                      <li>Launch eYe token on Avalanche</li>
                      <li>Price Feeds IntegrationLaunch Trading of eYe on Avalanche</li>
                      <li>Launch Cohort Farm on Avalanche</li>
                      <li>Launch Rewards Pools on Avalanche</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    );
  }
}



