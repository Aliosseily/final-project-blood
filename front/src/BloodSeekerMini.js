import React from 'react'
import './BloodSeekerMini.css'
import Chat from "./Chat";
import {  Modal } from 'semantic-ui-react'


class BloodSeekerMini extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true,
        }
    }
    state = {
        open: false
    }
    state = {
        show: false
    }


    toggleHidden = (evt) => {
        this.setState({
            isHidden: !this.state.isHidden,
        })
        console.log(this.state.fullHidden)
        evt.preventDefault()
    }

    toggle = () => {
        this.setState({ open: !this.state.open })
    }
    
    deleteperson = (evt, index) => {

        evt.preventDefault();
        console.log('deleting item', index)
        this.props.del(index)
         
        
    }

    showhide = () => {
        this.setState({ show: !this.state.show })
    }

    show = size => () => this.setState({ size, open: true })

    close = () => this.setState({ open: false })


    render() {
        console.log(this.props);
        const { id, name = '', type = '', units = '', hospital = '', address = '', phone = '' } = this.props
        const { open } = this.state
        // const mainClasses = "blood-seeker-mini" + (open? ' blood-seeker-open':'') 
        const mainClasses = "blood-seeker-mini"
        const { toggle } = this
        const phonenumber = () => {
        }
        const {  size } = this.state
        const user = this.props.user
        return (
            <div className={mainClasses}>
                <button className="delbutton" onClick={(event) => { this.deleteperson(event, id) }} >x</button>

                <div className="blood-seeker-mini-main">

                    <div className="blood-seeker-properties" onClick={toggle}>

                        <div className="blood-seeker-property">
                            <div className="blood-seeker-property-name">{id} Name: {name}</div>
                            <div className="blood-seeker-property-type">Type: {type}</div>

                        </div>

                    </div>

                </div>

                <div className="blood-seeker-additional-info">

                    Quantity:&emsp;{units}<br /> <br /> Hospital:&emsp;{hospital} <br /> <br /> Address:&emsp;{address}<br />
                    <img className="phone" alt="phoneicon" src={require('./icona-telefono.png')} onClick={phonenumber} />
                    <img className="chat" alt="chaticon" src={require('./chat.png')} onClick={this.toggleHidden} />
                    <div className="chatlayout">
                        {this.state.isHidden ? "" :
                            <div className="chat-container" style={{ background: 'white' }}>
                                <div className="card-title" style={{ color: 'black' }}>Chat</div>
                                <div className="exitchat" style={{ color: 'black' }} onClick={this.showhide}>X</div>
                                <br /><br />

                                <Chat user={user} />
                            </div>
                        }
                    </div>

                </div>
                <div>


                    <Modal size={size} open={open} onClose={this.close}>
                        <Modal.Header>
                            <div className="blood-seeker-property-name"> {name}</div>
                            <div className="blood-seeker-property-type">{type}</div>
                        </Modal.Header>
                        <Modal.Content>
                            <b>Quantity:</b>&emsp;{units}<br /> <br /> <b>Hospital:</b>&emsp;{hospital} <br /> <br /> <b>Address:</b>&emsp;{address}<br /><br /> <b>Phone:</b>&emsp;{phone}<br /><br />
                           <a href="tel:+96181647748" ><img className="phone" alt="phoneicon" src={require('./a.jpg')} onClick={phonenumber} />
                            </a>
                            <div className="chatlayout">
                                <div className="chat-container" style={{ background: 'white' }}>
                                    <div className="card-title" style={{ color: 'black' }}>Chat</div>
                                    {/* <div className="exitchat" style = {{color: 'black'}} onClick={this.toggleHidden}>X</div> */}
                                    <hr />
                                    <Chat user={this.props.user} />
                                </div>

                            </div>


                        </Modal.Content>
                        <Modal.Actions>

                        </Modal.Actions>
                    </Modal>
                </div>
            </div>

        )
    }
}

export default BloodSeekerMini