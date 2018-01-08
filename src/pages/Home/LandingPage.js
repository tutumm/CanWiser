import React from 'react'
import styled from 'styled-components';

import HeaderImage from '../../img/header-bg.jpg'

const Header = styled.header`

// 46B1D6

  text-align: center;
  color: black;
  background-image: url(${HeaderImage});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;

  .btn {
    outline: none !important;
    box-shadow: none !important;
  }

  .intro-text {
    padding-top: 30%;
    padding-bottom: 100px; }

  .intro-text .intro-lead-in {
    font-size: 3rem;
    font-style: italic;
    line-height: 22px;
    margin-bottom: 25px;
    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif; }

  .intro-text .intro-heading {
    font-size: 3rem;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 25px;
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif; }
`

const LandingPage = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">CanWiser</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
          <div class="intro-text">
            <div class="intro-lead-in">Welcome To CanWiser!</div>
            <div class="intro-heading text-uppercase">a smart platform for <br />cancer analytics</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/login">Get Started!</a>
          </div>
          </div>
          <div class="col-md-4">
          </div>
        </div>
      </div>
    </Header>

    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Services</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">E-Commerce</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Responsive Design</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Web Security</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-lg-12 text-center">
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default LandingPage