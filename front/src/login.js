import React, { Component } from "react";
import './login.css'
import { NavLink, } from "react-router-dom";
import { Icon, Input } from 'semantic-ui-react'

class Login extends Component {
  onSubmit = (evt) => {
    evt.preventDefault()
    const username = evt.target.user_name.value
    const pass = evt.target.user_password.value
    const success = this.props.authorize(username, pass)
    console.log(username)

    if (success && username !== "" && pass !== "") {
      this.props.history.push('/home')
    }


  }
  // add = () => {                
  //   const a = this.props.personAccount
  //   console.log(a[0].bloodtype)
  // }
  render() {
    // const value = this.state.value
    // const people = ( value ? this.state.person.filter(type=>type.bloodtype === value) : this.state.person )

    // const { user, logout } = this.props

    // if (user) {
    //   return <button className="logout" onClick={logout}>logout></button>
    // }

    return (

      <div className="loginwrapper">
        {/* <button onClick = {this.add}>dfedee</button> */}

        <div>

          <form className="loginForm" onSubmit={this.onSubmit}>
            <div className="imgcontainer">
              <img className="logo1" alt="logo" src={require('./bloodlogo.jpeg')} />
               </div>
               <div className="container">
               <label htmlFor="uname" style={{ marginLeft: "5px" }} ><b>Username</b></label>
              <Input iconPosition='left' name="user_name" >
                <input placeholder="Enter Username" />
                <Icon name='user' />
              </Input>
                <br />
                <br />
                <label htmlFor="password" style={{ marginLeft: "5px" }} ><b>Password</b></label>
              <Input iconPosition='left' name="user_password">
                <Icon name='key' />
                <input placeholder="Enter Password" />
              </Input>
                <br /><br />
                <button className="loginBtn">Login</button>
              <NavLink to="/signup" ><button className="loginBtn" type="submit">Become A Donor</button>   </NavLink>

              <NavLink to="/sendrequest" ><button className="loginBtn" type="submit">Request Blood</button>   </NavLink>
              {/* <label> Remember me</label>
              <input type="checkbox" /> */}

            </div>

          </form>
        </div>
      </div>

    )
  }
}
export default Login;