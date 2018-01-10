import React from 'react'
import styled from 'styled-components';

import HeaderImage from '../../img/header-bg.jpg'

const Header = styled.header`

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

  .text {
    margin: auto;
    margin-top: 90px;
    width: 40%;
    height: 400px;
    padding-bottom: 100px; 
    background-color: white;
    box-shadow: 1px 1px 80px #777;
  }

  .fa {
    margin-top: 50px;
  }

  .font-color {
    color: #46B1D6;
  }

  h1 {
    margin-top: 10px;
  }

  .btn {
    width: 100%;
    outline: none !important;
    box-shadow: none !important;
  }
`

const Form = styled.form`
  width: 70%;
  text-align: cneter;
  margin: auto;
  font-family: 'Catamaran';

  .form-check {
    text-align: left;
  }
`

const LandingPage = () => (
  <div>
    <Header class="masthead">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text">
              <i class="fa fa-user-circle-o fa-5x font-color" aria-hidden="true"></i>
              <h1 style={{ fontFamily: 'Catamaran' }}>Sign In</h1>

              <Form action="/dashboard">
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email or username" autocomplete="off" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </Header>

  </div>
)

export default LandingPage