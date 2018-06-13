import React, { Component } from "react";
import './login.css'
import { Checkbox } from 'semantic-ui-react'


class Signup extends Component {

  constructor() {
    super();
    this.state = {
      checked: false,
      shown: false,
      bloodvalue: '',
      active: false
    };
  }
  username = (e) => {
    this.setState({ userName: e.target.value })
  }

  password = (e) => {
    this.setState({ Password: e.target.value })
  }

  handleChange = () => {
    if (this.state.checked) {
      this.setState({ checked: false })
    }
    else {
      this.setState({
        checked: !this.state.checked,
        shown: !this.state.shown
      })
    }
  }
  checkIt = () => {
    this.setState({ shown: false })
    this.setState({ checked: true })
    console.log(this.state.checked)
  }
  unCheckIt = () => {
    this.setState({ shown: false })
    this.setState({ checked: false })
  }

  onSelectChange = (event) => {
    const value = event.target.value
    this.props.changeValue(value)
  }

  handleSubmint = (event) => {
    event.preventDefault()
  }

  ChangeBloodValue = (evt,id) => {
    this.setState({ bloodvalue: evt.target.value })
    this.setState({ active: this.state.active === id ? false: id})
    console.log(this.state.bloodvalue)
    evt.preventDefault()
  }

  onFormSubmit = (evt) => {
    evt.preventDefault()
    const form = evt.target;
    const username = form.user_name.value;
    const password = form.user_password.value;
    const bloodtype = this.state.bloodvalue
    this.props.AddAccount(username, password, bloodtype)
    //console.log(this.props.AddAccount())
    console.log(">>>>>>>", username)
    console.log(">>>>>>>", password)
    console.log(">>>>>>>", bloodtype)
    if (!username || !password || !bloodtype) {
      return false
    }
    else {
      this.props.authorize(username, password)
      this.props.history.push('/home')
    }



  }
  preventspace = (event) => {
    const key = event.keyCode;

    if (key === 32) {
      event.preventDefault()
    }
  }


  render() {

    let btn_class = this.state.active ? "blue" : "white";
    console.log(btn_class)
    const a = <div className="popup">
      <b>• This appliction is a communication service which aims to facilitate the linkage between blood donors and blood recepients</b><br /><br />
      <b>• DO donate blood, only if you satisfy all of the following conditions:</b><br />
      1- You are between age group of 18-60 years.<br />
      2- Your weight is 50 kgs or more.<br />
      3- Your last blood donation was 3 or more months earlier.<br />
      4- You are healthy and have not suffered from malaria, typhoid or other transmissible disease in the recent past.<br /><br />
      <b>• DO NOT donate blood, if you have any of the following conditions:</b><br />
      1- Cold / fever in the past 1 week.<br />
      2- Under treatment with antibiotics or any other medication.<br />
      3- Cardiac problems, hypertension, epilepsy, diabetes , history of cancer, chronic kidney or liver disease,etc ...<br />
      4- Major surgery in the last 6 months.<br />
      5- Vaccination in the last 24 hours.<br />
      7- Had fainting attacks during last donation.<br />
      8- Have regularly received treatment with blood products.<br />
      9- Shared a needle to inject drugs/ have history of drug addiction.<br />
      <button className="Acceptpopup" onClick={this.checkIt}> I Agree </button>
      <button className="Cancelpopup" onClick={this.unCheckIt}> Cancel </button>
    </div>
    const content = this.state.shown
      ? a
      : null;
    return (
      <div className="loginwrapper">

        <div>


          <form action="/action_page.php" onSubmit={this.onFormSubmit}>
            {/* <img className="logo" alt="logo" src={require('./logo.jpg')} /> */}
            <h3 className="donor-registration" style={{ color: "white", lineHeight: "50px", height: "50px", textAlign: "center", backgroundColor: "red" }} >Register AS A DONOR</h3>

            <div className="container">
              <input type="text" style={{ width: "45%" }} placeholder="User Name" name="user_name" onKeyDown={this.preventspace} onChange={this.username} required />
              <input type="text" style={{ width: "45%", marginLeft: "31px" }} placeholder="Last Name" name="name" onKeyDown={this.preventspace} required />
              <input type="text" placeholder="Email" onKeyDown={this.preventspace} required />
              <input type="password" placeholder="Password" name="user_password" onChange={this.password} onKeyDown={this.preventspace} required />
              <input type="text" placeholder="Address" onKeyDown={this.preventspace} required />


              <br />  <br />
      
              <div className="btnwraper">
                <button style={{ width: "18%", backgroundColor:  this.state.active ===1 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                  this.ChangeBloodValue(e,1);
                } } name="user_bloodtype" value="AB+">AB+</button>
                <button style={{ width: "18%", backgroundColor: this.state.active ===2 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                  this.ChangeBloodValue(e,2);
                } }  name="user_bloodtype" value="AB-">AB-</button>
                <button style={{ width: "18%", backgroundColor: this.state.active ===3 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                  this.ChangeBloodValue(e,3)
                }} name="user_bloodtype" value="A-">A-</button>
                <button style={{ width: "18%", backgroundColor: this.state.active ===4 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                  this.ChangeBloodValue(e,4)
                }} name="user_bloodtype" value="A+">A+</button>
                <button style={{ width: "18%", backgroundColor: this.state.active ===5 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                  this.ChangeBloodValue(e,5)
                }} name="user_bloodtype" value="B-">B-</button>
                <button style={{ width: "18%", backgroundColor:this.state.active === 6 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                 this.ChangeBloodValue(e,6)
                }} name="user_bloodtype" value="B+">B+</button>
                <button style={{ width: "18%", backgroundColor: this.state.active ===7 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                 this.ChangeBloodValue(e,7)
                }} name="user_bloodtype" value="O-">O-</button>
                <button style={{ width: "18%", backgroundColor: this.state.active ===8 ? "darkgrey" : "white", borderRadius: "50px", textAlign: "center" }} onClick={(e)=>{
                 this.ChangeBloodValue(e,8)
                 }} name="user_bloodtype" value="O+">O+</button>
              </div>
              <br />


              <div required>
                <Checkbox label={{ children: 'I agree to the Terms and Conditions' }} checked={this.state.checked}
                  onChange={this.handleChange} required />
              </div>
              <br />
              <button onClick={this.sendlogout}>Submit</button>
              {/* <NavLink to="/" ><button type="submit">Login</button> </NavLink> */}
            </div>

          </form>

        </div>
        {content}

      </div>
    )
  }
}
export default Signup;   