import React from "react";
import './login.css'
import { NavLink, } from "react-router-dom";
import BloodSeekerMini from './BloodSeekerMini'
// import {Navbar,FormGroup,FormControl,Button} from 'react-bootstrap'

  class Page extends React.Component{

    onSelectChange = (event) => {
      const value = event.target.value
      this.props.changeValue(value)
    }
    scrollToBottom(){
      this.messageContainer.scrollTop = this.messageContainer.scrollHeight
    }
  
    componentDidUpdate(){
      this.scrollToBottom();
    }
  
    componentDidMount(){
      this.scrollToBottom();
  }
      
    render(){
       
       const persons_list = this.props.persons_list
       const value = this.props.value
       const filter = this.props.filter
       const filteraddress = this.props.filteraddress
       const del = this.props.del
       const changeValue = this.props.changeValue
       const user = this.props.user
       

      return(
        <div>

<div className="loginwrapper" >

      <div>
      <img className="logo1" style={{marginLeft:"-14px", marginTop:"-14px",width:"344px"}} alt="logo" src={require('./bloodlogo.jpeg')} />

        <div className="imgcontainer">

            {/* <div className="header">Blood Donor </div> */}

            <h2>Blood Seekers</h2>
            

            <form onSubmit={this.handleSubmit} >

              <div className="container" style={{ backgroundColor: '#f1f1f1', padding: '3px' }}>
                <select value={value} className="bloodlist" onChange={this.onSelectChange} style={{ backgroundColor: 'wheat', border: 'none' }}>
                  <option value="" >All types</option>
                  {user && <option value="my-type" >My Type</option>}
                  <option value="A+">A+</option>
                  <option value="AB+">AB+ </option>
                  <option value="A-">A-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                  <option value="O+">O+</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                </select>
                  {/* { user 
                  ? <a className="logout" onClick={logout}>logout</a>
                  : null
                  } */}
              </div>
            </form>
            
            <div className="seaker-list" ref={(el) => this.messageContainer = el}>



              { persons_list && persons_list.length 
              ? persons_list.map((p, i) =>
                  <BloodSeekerMini user={user} fil={changeValue} del={del} key={i} id={p.id} name={p.name} type={p.bloodtype} units={p.bloodunits} hospital={p.hospital} address={p.address} phone={p.phone} />
               
                )
                
              :<div>no people of blood type <b>{filter}</b> from <b>{filteraddress}</b> found</div>
              
              }
            </div>



          </div>
          {/* <div className="container" style={{ backgroundColor: '#f1f1f1', padding: '3px' }}>
            <NavLink to="/sendrequest" id="sendbtn">Send request</NavLink>
            <NavLink to="/" id="sendbtn">logout</NavLink> 

          </div> */}

      </div>
    </div>
          </div>
      )
    }
  }

export default Page;


