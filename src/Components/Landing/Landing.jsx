import React from 'react';
import './Landing.css';
import home_1 from "../../Assets/home_1.jpg";
import home_2 from "../../Assets/home_2.jpg";
import author_1 from "../../Assets/author_1.jpg";
import author_2 from "../../Assets/author_2.jpg";
import circle_1 from "../../Assets/circle_1.png";
import circle_2 from "../../Assets/circle_2.png";
import bg_shape from "../../Assets/bg_shape.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { TiTick } from "react-icons/ti";


function Landing() {
    return (
        <div>
            <div className="landing_main">
                <div class="banner-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
<div class="banner-content">
    <span>Buying &amp; Selling NFT World</span><h1>Discover, Collect, and Sell Extraordinary NFTs</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam etiam rhoncus aenean a iaculis aliquet rhoncus sed. Accumsan sit consequat, sodales consectetur. Egestas scelerisque ut dui sed nulla morbi quam eget luctus. In a vel morbi sed nisi.</p>
    <div class="banner-btn">
        <a class="default-btn border-radius-5" href="/about">Explore More</a>
        <a class="default-btn two border-radius-5" href="/add-wallet">Connect NFT</a>
                                    </div>
                                </div>
                            </div>
    <div class="col-lg-6">
        <div class="banner-card-area">
            <div class="row">
                <div class="col-lg-6 col-sm-6">
                    <div class="banner-card">
<div class="banner-card-img">
        <img src={home_1} alt="Images" />
        <div class="banner-card-content">
        <div class="card-left">
            <span>Start Bid</span>
                <h3>15,00 ETH</h3>
            </div>
            <div class="card-right">
            <h3>Remaining Time</h3>
            <div class="timer-text" id="time1" data-countdown="2021/10/10">
        </div>
        </div>
        </div>
        </div>
        <div class="content">
<div class="banner-user-list">
    <div class="banner-user-list-img">
        <a href="/author-profile">
    <img src={author_1} alt="Images"/>
    </a>
    <i class="ri-check-line"><TiTick /></i>
    </div>
    <h3><a href="/author-profile">Flowers in Concrete</a></h3>
    <span>Created by<a href="/author-profile">@Evelyn</a></span>
    </div>
    <a class="banner-user-btn" href="/author-profile"><BiRightArrowAlt /></a>
    <button type="button" class="default-btn border-radius-5">Place Bid</button>
    </div>
        </div>
        </div>
        <div class="col-lg-6 col-sm-6">
            <div class="banner-card banner-card-mt">
                <div class="banner-card-img">
                     <img src={home_2} alt="Images"/>
                    <div class="banner-card-content">
                        <div class="card-left">
    <span>Start Bid</span>
    <h3>11,00 ETH</h3>
    </div>
    <div class="card-right">
        <h3>Remaining Time</h3>
        <div class="timer-text" id="time2" data-countdown="2021/09/09"></div>
        </div>
        </div>
        </div>
        <div class="content">
            <div class="banner-user-list">
    <div class="banner-user-list-img">
        <a href="/author-profile">
            <img src={author_2} alt="Images"/>
            </a>
            <i class="ri-check-line"><TiTick /></i>
            </div>
            <h3><a href="/author-profile">Walking on Air</a></h3>
            <span>Created by<a href="/author-profile">@Adison</a></span>
            </div>
            <a class="banner-user-btn" href="/author-profile"><BiRightArrowAlt /></a>
            <button type="button" class="default-btn border-radius-5">Place Bid</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="banner-shape">
                <div class="shape-circle1">
                    <img src={circle_1} alt="Images"/>
                    </div>
                    <div class="shape-circle2">
                        <img src={circle_2} alt="Images"/>
                        </div>
                        <div class="shape-bg">
                            <img src={bg_shape} alt="Images"/>
                            </div>
                            </div>
                            </div>
            </div>
        </div>
    )
}

export default Landing