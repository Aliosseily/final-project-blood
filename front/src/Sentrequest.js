import React from "react";
import './App.css'
import { Form, Select } from 'semantic-ui-react'

const bloodtypes = [
  { key: 'a', text: 'AB+', value: 'AB+' },
  { key: 'b', text: 'AB-', value: 'AB-' },
  { key: 'c', text: 'A+', value: 'A+' },
  { key: 'd', text: 'A-', value: 'A-' },
  { key: 'e', text: 'B+', value: 'B+' },
  { key: 'f', text: 'B-', value: 'B-' },
  { key: 'g', text: 'O+', value: 'O+' },
  { key: 'h', text: 'O-', value: 'O-' },
]
const bloodunits = [
  { key: 'i', text: '1', value: '1' },
  { key: 'j', text: '2', value: '2' },
  { key: 'k', text: '3', value: '3' },
  { key: 'l', text: '4', value: '4' },
  { key: 'm', text: 'more', value: 'more' },


]
class SentRequest extends React.Component {
  constructor() {
    super()
    this.state = {
      type: '',
      units: ''
    }
  }
  ChangeBlood = (evt, { value }) => {
    this.setState({ type: value })
    console.log("??????" + this.state.type)
  }
  ChangeUnits = (evt, { value }) => {
    this.setState({ units: value })
  }
  onFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.person_name.value;
    const bloodtype = this.state.type;
    const bloodunits = this.state.units
    console.log("ff" + bloodtype)
    const hospital = form.hospital_name.value;
    const address = form.hospital_addrses.value;
    const phone = form.phone_number.value;

    this.props.add(name, bloodtype, bloodunits, hospital, address, phone)

    form.person_name.value = ""
    // form.blood_type.value = ""
    // form.blood_units.value = ""
    form.hospital_name.value = ""
    form.hospital_addrses.value = ""
    form.phone_number.value = ""
    // this.props.AddAccount(name, password, bloodtype)
    // this.props.authorize(name, password)
    this.props.history.push('/home')
  }


  render() {
    return (
      <div className="loginwrapper">

        <div>
          <form action="/action_page.php" onSubmit={this.onFormSubmit}>
            <div className="imgcontainer">
              <h3 className="donor-registration" style={{ color: "white", marginTop: "-24px", lineHeight: "50px", height: "50px", textAlign: "center", backgroundColor: "red" }} >Send REQUEST</h3>

            </div>
            <div className="container">
              <Form.Input id="name" fluid label='Name' name="person_name" placeholder='Name' maxLength="14" required />
               Blood type
              <Select fluid label='Blood Type' options={bloodtypes} onChange={this.ChangeBlood} placeholder='select blood' required />
               Blood units
              <Select fluid label=' Blood units' options={bloodunits} value={this.state.units} onChange={this.ChangeUnits} placeholder='Blood units' required />
              <Form.Input fluid id="hospital" label='Hospital' name="hospital_name" placeholder='hospital' required />
              <Form.Input fluid id="address" label='Location' name="hospital_addrses" placeholder='location' required />
              <Form.Input fluid id="phone" label='Phone' name="phone_number" placeholder='phone' required /><br/>



              {/*<NavLink to="/home" >*/}<button>Submit</button>  {/*</NavLink>*/}


            </div>

          </form>

        </div>

      </div>

    )
  }
}

export default SentRequest;

