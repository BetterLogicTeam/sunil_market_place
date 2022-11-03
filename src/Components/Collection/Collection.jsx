import React from 'react';
import collections_img1 from "../../Assets/collections_img1.png";
import collections_img2 from "../../Assets/collections_img2.png";
import collections_img3 from "../../Assets/collections_img3.png";
import collections_img4 from "../../Assets/collections_img4.png";
import collections_user1 from "../../Assets/collections_user1.png";
import collections_user2 from "../../Assets/collections_user2.png";
import collections_user3 from "../../Assets/collections_user3.png";
import collections_user4 from "../../Assets/collections_user4.png";
import collections_profile from "../../Assets/collections_profile.jpg";


function Collection() {
  return (
    <div>
        <div class="collections-area pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h2>Hot Collections</h2>
                    </div>
                    <div class="row pt-45">
                        <div class="col-lg-3 col-6">
                            <div class="collections-card">
                                <a href="/collection">
                                    <img src={collections_img1} alt="Images"/>
                                    </a>
                                    <div class="content">
                                        <div class="collections-user">
                                            <img src={collections_user1} alt="Images"/>
                                            </div>
                                            <h3><a href="/collection">Wrapped Cryptopunks</a></h3>
                                            <span>ETH - 11,256</span>
                                            </div>
                                            </div>
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <div class="collections-card">
                                                    <a href="/collection">
                                                        <img src={collections_img2} alt="Images"/>
                                                        </a>
                                                        <div class="content">
                                                            <div class="collections-user">
                                                                <img src={collections_user2} alt="Images"/>
                                                                </div>
                                                                <h3><a href="/collection">Art Blocks</a></h3>
                                                                <span>ETH - 12,256</span>
                                                                </div>
                                                                </div>
                                                                </div>
                                                                <div class="col-lg-3 col-6">
                                                                    <div class="collections-card">
                                                                        <a href="/collection">
                                                                            <img src={collections_img3} alt="Images"/>
                                                                            </a>
                                                                            <div class="content">
                                                                                <div class="collections-user">
                                                                                    <img src={collections_user3} alt="Images"/>
                                                                                    </div>
                                                                                    <h3><a href="/collection">Hashmasks</a></h3>
                                                                                    <span>ETH - 11,764</span>
                                                                                    </div>
                                                                                    </div>
                                                                                    </div>
                                                                                    <div class="col-lg-3 col-6">
                                                                                        <div class="collections-card">
                                                                                            <a href="/collection">
                                                                                                <img src={collections_img4} alt="Images"/>
                                                                                                </a>
                                                                                                <div class="content">
                                                                                                    <div class="collections-user">
                                                                                                        <img src={collections_user4} alt="Images"/>
                                                                                                        </div>
                                                                                                        <h3>
                                                                                                            <a href="/collection">Inventory</a>
                                                                                                            </h3>
                                                                                                            <span>ETH - 13,264</span>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                            </div>
    </div>
  )
}

export default Collection