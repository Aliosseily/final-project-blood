import React, { Component } from "react";
import { Route, HashRouter, } from "react-router-dom";
import SendRequest from "./SendRequest";
import Sentrequest from './Sentrequest'
import Login from "./login";
import Signup from "./Signup";
// import BloodSeekerMini from './BloodSeekerMini'
import Chat from "./Chat";
import Menu from "./Menu";
import io from "socket.io-client";
import Donors from './Donors'




let ids = 5

class Main extends Component {
  constructor(props) {
    super(props);
    this.socket = io('localhost:8080');

    this.socket.on('REQUEST', objperson => {
      const newstate = this.state.person;
      newstate.push(objperson);
      this.setState({ person: newstate })
    })

    this.socket.on('PREVIOUS_REQUESTS', person => {
      console.log(person)
      this.setState({ person })
    })

    this.socket.on('ACCOUNT', userAccount => {
      const NewAccount = this.state.personAccount;
      NewAccount.push(userAccount)
      const value = (this.state.value ? this.state.value : 'my-type')
      const address = (this.state.address ? this.state.address : 'my-type')

      this.setState({ personAccount: NewAccount, user: userAccount, value, address })
    })

    this.socket.on('PREVIOUS_ACCOUNTS', personAccount => {
      console.log(personAccount)
      this.setState({ personAccount })
    })

    this.socket.on('DELETE', person => {

      this.setState({ person })
    })

    this.state = {
      value: '',
      user: null,
      person: [],
      personAccount: [],
      // address:''
    }


  }

  addNewPerson = (name, bloodtype, bloodunits, hospital, address, phone) => {

    const objperson = { id: ids++, name, bloodtype, bloodunits, hospital, address, phone }
    this.socket.emit('REQUEST', objperson)

  }


  AddNewaccount = (username, password, bloodtype/*address*/) => {
    const userAccount = { username, password, bloodtype/*address*/ }
    this.socket.emit('ACCOUNT', userAccount)
    console.log('new account added successfully')
  }





  authorize = (username, password) => {
    const found_person = this.state.personAccount.find(person => person.username === username && person.password === password)
    //const found_person = {username:'a',password:'n'}
    const value = (this.state.value ? this.state.value : 'my-type')
    // const address = (this.state.address ? this.state.address : 'my-type')

    this.setState({ user: found_person, value/*address*/ })
    if (found_person) {
      return true
    } else {
      return false
    }
  }


  logout = () => {
    console.log("heloo")
    this.setState({ user: null })
    window.location = 'http://localhost:3000/#/'
  }

  // renderBloodSeekers = () => {
  //   return (
  //     this.state.person.map((p) =>
  //       <BloodSeekerMini name={p.name} id={p.id} type={p.bloodtype} units={p.bloodunits} hospital={p.hospital} address={p.address} phone={p.phone}/>
  //        )
  //   )
  // }

  deleteElement = (id) => {
    // const index = delArray.findIndex(person => person.id === id)
    // if(index<0){
    //   return;
    // }
    // delArray.splice(index, 1);
    // this.setState({ person: delArray });
    this.socket.emit('DELETE', id)
    console.log("efef")
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  changeValue = (value) => {
    this.setState({ value });
  }
  // changeAddress = (address) => {
  //   this.setState({address});
  // }

  render() {

    const value = (this.state.value
      ? (this.state.value === 'my-type'
        ? this.state.user && this.state.user.bloodtype
        : this.state.value
      )
      : ''
    )

    // const address = ( this.state.address 
    //   ? ( this.state.address==='my-type'
    //     ? this.state.user && this.state.user.address
    //     : this.state.address
    //     )
    //   : ''
    //   )
    const people = (value ? this.state.person.filter(type => type.bloodtype === value /*&& type.address === address*/) : this.state.person)

    return (
      <div>

        <HashRouter>
          <div className="wrapper">

            <div className="content">


              <Route path="/" exact render={(match) => <Login history={match.history} authorize={this.authorize} personAccount={this.state.personAccount} />} />
              <Route path="/home" exact render={(match) => <Menu history={match.history} persons_list={people} user={this.state.user} person={this.state.person} logout={this.logout} filter={value}/* filteraddress={address}*/ value={this.state.value} del={this.deleteElement} changeValue={this.changeValue} AddAccount={this.AddNewaccount} />} />
              <Route path="/Signup" render={(match) => <Signup history={match.history} addPerson={this.addNewPerson} authorize={this.authorize} changeValue={this.changeValue} AddAccount={this.AddNewaccount} />} />
              <Route path="/sendrequest" render={(match) => <SendRequest history={match.history} AddAccount={this.AddNewaccount} authorize={this.authorize} sendSeaker={this.sendMessage} seakerValue={this.state.seaker} person={people} add={this.addNewPerson} user={this.state.user} />} />
              <Route path="/sentrequest" render={(match) => <Sentrequest history={match.history} AddAccount={this.AddNewaccount} authorize={this.authorize} sendSeaker={this.sendMessage} seakerValue={this.state.seaker} person={people} add={this.addNewPerson} user={this.state.user} />} />
              <Route path="/Chat" render={(match) => <Chat history={match.history} user={this.state.user} />} />
              <Route path="/donors" exact render={(match) => <Donors history={match.history} persons_list={people} user={this.state.user} person={this.state.person} logout={this.logout} filter={value}/* filteraddress={address}*/ value={this.state.value} del={this.deleteElement} changeValue={this.changeValue} AddAccount={this.AddNewaccount} />} />



            </div>

          </div>
        </HashRouter>
      </div>

    );
  }
}

export default Main;
