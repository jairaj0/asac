import React from "react";
import "./Roadmap.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container _roadmap">
        <h1
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          className="title"
        >
          ROADMAP
        </h1>

        <div className="aman">
          <div className="phases">
            {/* ************* one sided ********** */}
            <div className="box onebox flex-between">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 1</h3>

                <ul className="para">
                  <li>
                    First collection mint – The Sadboys. A total of 7777 male
                    only NFTs will land on the Ethereum blockchain.
                  </li>
                  <li>
                    $1000 in ETH giveaway to discord raffle winner. NFT
                    giveaways. Community games with awesome prices.
                  </li>
                  <li>
                    After mint we will start our own Streetwear brand with
                    clothing from some of the traits in the nfts. The ASAC
                    holders owns 20% of the shares meaning 20% of the profit
                    will go back to the holders.{" "}
                  </li>
                  <li>Marketing push for the project to be known worldwide.</li>
                  <li>All NFT holders from P1 will get whitelisted for P2.</li>
                </ul>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 2</h3>
                <ul className="para">
                  <li>
                    Second Collection – Geisha Society. A total of 7777 female
                    NFTs.
                  </li>
                  <li>$5000 in ETH to one holder.</li>
                  <li>
                    $ASAC-token will be implemented. $ASAC can be used to buy
                    merch, incubators (Phase 3) and in-game items (Phase 4)
                  </li>
                  <li>
                    We will buy land in a metaverse that will be chosen by the
                    community.
                  </li>
                </ul>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 3</h3>
                <ul className="para">
                  <li>
                    Staking/breeding – You will be able to stake your NFTs from
                    p1 and p2 through an incubator to get a “Deviant” airdrop
                    that have traits from both staked nfts. This will be unlike
                    anything you have ever seen in the NFT world before. Your
                    staked nfts will get hurt by the acidic liquid in the
                    incubator, coming back with scars.
                  </li>
                  <li>
                    Partnerships in the anime world. We will get the best deals
                    for our holders in terms of discounts for clothing and
                    memberships.
                  </li>
                </ul>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 4</h3>
                <ul className="para">
                  <li>
                    P2E mobile game. You will be able to implement your NFTs in
                    a Play-2-Earn game where you can win $ASAC, NFTs and
                    cryptocurrency.
                  </li>
                  <li>Roadmap 2.0 release</li>
                  <li>$10 000 in ETH to one holder.</li>
                </ul>
              </div>
            </div>
            {/* ************* one sided ********** */}

            <div className="box flex-between">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 1</h3>

                <ul className="para">
                  <li>
                    First collection mint – The Sadboys. A total of 7777 male
                    only NFTs will land on the Ethereum blockchain.
                  </li>
                  <li>
                    $1000 in ETH giveaway to discord raffle winner. NFT
                    giveaways. Community games with awesome prices.
                  </li>
                  <li>
                    After mint we will start our own Streetwear brand with
                    clothing from some of the traits in the nfts. The ASAC
                    holders owns 20% of the shares meaning 20% of the profit
                    will go back to the holders.{" "}
                  </li>
                  <li>Marketing push for the project to be known worldwide.</li>
                  <li>All NFT holders from P1 will get whitelisted for P2.</li>
                </ul>
              </div>
              <div className="blank"></div>

              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 3</h3>
                <ul className="para">
                  <li>
                    Staking/breeding – You will be able to stake your NFTs from
                    p1 and p2 through an incubator to get a “Deviant” airdrop
                    that have traits from both staked nfts. This will be unlike
                    anything you have ever seen in the NFT world before. Your
                    staked nfts will get hurt by the acidic liquid in the
                    incubator, coming back with scars.
                  </li>
                  <li>
                    Partnerships in the anime world. We will get the best deals
                    for our holders in terms of discounts for clothing and
                    memberships.
                  </li>
                </ul>
              </div>
              <div className="blank"></div>
            </div>

            <div className="box flex-between">
              <div className="blank"></div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 2</h3>
                <ul className="para">
                  <li>
                    Second Collection – Geisha Society. A total of 7777 female
                    NFTs.
                  </li>
                  <li>$5000 in ETH to one holder.</li>
                  <li>
                    $ASAC-token will be implemented. $ASAC can be used to buy
                    merch, incubators (Phase 3) and in-game items (Phase 4)
                  </li>
                  <li>
                    We will buy land in a metaverse that will be chosen by the
                    community.
                  </li>
                </ul>
              </div>

              <div className="blank"></div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                className="content"
              >
                <h3 className="title">Phase 4</h3>
                <ul className="para">
                  <li>
                    P2E mobile game. You will be able to implement your NFTs in
                    a Play-2-Earn game where you can win $ASAC, NFTs and
                    cryptocurrency.
                  </li>
                  <li>Roadmap 2.0 release</li>
                  <li>$10 000 in ETH to one holder.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
