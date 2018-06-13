import React, { Component } from 'react'
import BloodSeekerMini from './BloodSeekerMini'
class Donors extends Component {

    onSelectChange = (event) => {
        const value = event.target.value
        this.props.changeValue(value)
        console.log(value)
    }


    render() {

        
        const people = this.props.persons_list
        const user = this.props.user
        
        const filter = this.props.filter
        const filteraddress = this.props.filteraddress
        const changeValue = this.props.changeValue
      


        return (
            <div>
                <form style={{ height: "560px" }}>
                    <h3 className="donor-registration" style={{ color: "white", lineHeight: "50px", height: "50px", textAlign: "center", backgroundColor: "red" }} >Find the blood DONOR</h3>
                    <select className="Donorlists" onChange={this.onSelectChange}>
                        <option value="" >All types</option>
                        <option value="A+">A+</option>
                        <option value="AB+">AB+ </option>
                        <option value="A-">A-</option>
                        <option value="AB-">AB-</option>
                        <option value="O-">O-</option>
                        <option value="O+">O+</option>
                        <option value="B-">B-</option>
                        <option value="B+">B+</option>
                    </select>
                    <br />
                    <button className="loginBtn" style={{ width: "95%", marginLeft: "8px" }}>Search</button>
                    {people && people.length
                        ? people.map((p, i) =>
                            <BloodSeekerMini user={user} fil={changeValue} key={i} id={p.id} name={p.name} type={p.bloodtype} units={p.bloodunits} hospital={p.hospital} address={p.address} phone={p.phone} />

                        )

                        : <div>no people of blood type <b>{filter}</b> from <b>{filteraddress}</b> found</div>

                    }
                </form>

            </div>
        )
    }
}
export default Donors;