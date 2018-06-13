import React, { Component } from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Home from './Home'
import './Menu.css'
class SidebarLeftOverlay extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  logoutMenu = () => {
    console.log("heloo")
    this.setState({ user: null })
    window.location = '/#/'
  }
  render() {
    const { visible } = this.state
    const history = this.props.history
    const people = this.props.persons_list
    const user = this.props.user
    const logout = this.props.logout
    const filter = this.props.filter
    const filteraddress = this.props.filteraddress
    const value = this.props.value
    const deleteElement = this.props.del
    const changeValue = this.props.changeValue
    const AddNewaccount = this.props.AddAccount

    return (
      <div className="chatholder">

        <Sidebar.Pushable as={Segment}>

          {/* <Button className="menuBtn" style={{ width: "50px" }} onClick={this.toggleVisibility}>-</Button> */}
          <img className="menu" alt="logo" src={require('./menu1.png')} onClick={this.toggleVisibility} />

          <Sidebar onClick={this.toggleVisibility} style={{ cursor: "pointer" }} as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
            <div className="username-menu">
              <Menu.Item className='home' style={{ color: "white", fontSize: "30px" }}>
                <Icon name='user outline' />

                {user && user.username}   {user && user.bloodtype}
              </Menu.Item>

            </div>
            <Menu.Item className="slidemenu" href="/#/sentrequest" style={{ color: "black", textAllign: "left" }} name='gamepad'>
              <Icon name='send' />
              Send Request
            </Menu.Item>
            <Menu.Item name='donors' href="/#/donors" style={{ color: "black", textAllign: "left", borderBottom: "1px solid black" }}>
              <Icon name='search' />
              Find DONORS
            </Menu.Item>
            <Menu.Item name='logout' onClick={this.logoutMenu} style={{ color: "black", textAllign: "left" }}>
              <Icon name='sign out' />
              logout
            </Menu.Item>

          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Home history={history} persons_list={people} user={user} logout={logout} filter={filter} filteraddress={filteraddress} value={value} del={deleteElement} changeValue={changeValue} AddAccount={AddNewaccount} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftOverlay
