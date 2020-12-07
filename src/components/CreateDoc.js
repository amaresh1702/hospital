import React from 'react';
import '../App.css';
import { postDocCallAPI, getDocCallAPI } from '../actions';

class CreateDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMsg: "",
      name: "",
      phonenumber: "",
      emailId: "",
      speciality: "",
      MinAge: "",
      MaxAge: ""
    }
  }
  alertFn = (event) => {
    if (event.target.name === "name") {
      if (event.target.value && event.target.value.length < 3) {
        this.setState({ alertMsg: "Name must contain min 3 letters", name: event.target.value });
      } else {
        this.setState({ alertMsg: "", name: event.target.value });
      }
    } else if (event.target.name === "emailaddress") {
      this.setState({ alertMsg: "", emailId: event.target.value });
    } else if (event.target.name === "speciality") {
      this.setState({ alertMsg: "", speciality: event.target.value });
    } else if (event.target.name === "phonenumber") {
      if (event.target.value && event.target.value.length === 10) {
        this.setState({ alertMsg: "", phonenumber: event.target.value });
      } else {
        this.setState({ alertMsg: "number must contain 10 numbers", phonenumber: event.target.value });
      }
    } else if (event.target.name === "MinAge" && Number(event.target.value) >= 0) {
      this.setState({ alertMsg: "", MinAge: event.target.value });
    } else if (event.target.name === "MaxAge") {
      if (Number(event.target.value) < Number(this.state.MinAge)) {
        this.setState({ alertMsg: "Max Age should  be greater than Min age", MaxAge: event.target.value });
      }
      else {
        this.setState({ alertMsg: "", MaxAge: event.target.value });
      }
    }
  }
  timeOut = (comp) => {
    setTimeout(function () {
      comp.setState({ alertMsg: "", name: "", emailId: "", speciality: "", phonenumber: "", MaxAge: "", MinAge: "" });
    }, 5000);
  }
  submitOn = () => {
    if (this.state.name && this.state.emailId && this.state.speciality && this.state.phonenumber && this.state.MinAge && this.state.MaxAge && !this.state.alertMsg) {
      postDocCallAPI({
        name: this.state.name,
        emailId: this.state.emailId,
        speciality: this.state.speciality,
        mobileNumber: this.state.phonenumber,
        MinAge: this.state.MinAge,
        MaxAge: this.state.MaxAge
      }).then((res) => {
        this.setState({ alertMsg: res }, () => {
          this.timeOut(this);
        })
      });
    } else {
      this.setState({ alertMsg: "Fill The Form Completely" })
    }
  }
  render() {
    let {name, emailId,speciality,phonenumber,MinAge,MaxAge} = this.state;
    return (
      <div className="create">
        <label htmlFor="name" style={{ marginRight: "64px" }}> Name </label>
        <span style={{ marginRight: "25px" }}>:  </span>
        <input type="text" id="name" name="name" onInput={this.alertFn} value={name} required />
        <br /> <br />
        <label htmlFor="emailaddress" style={{ marginRight: "15px" }}> Email address </label>
        <span style={{ marginRight: "25px" }}>:</span>
        <input type="email" id="emailaddress" name="emailaddress" onInput={this.alertFn} value={emailId} required />
        <br /><br />
        <label htmlFor="speciality" style={{ marginRight: "35px" }}>Speciality </label>
        <span style={{ marginRight: "15px" }}>:</span>
        <input type="text" id="speciality" name="speciality" style={{ marginLeft: "17px" }} onInput={this.alertFn} value={speciality} required />
        <br /><br />
        <label htmlFor="phonenumber" >mobile Number </label>
        <span style={{ marginRight: "25px" }}>:</span>
        <input type="number" id="phonenumber" name="phonenumber" pattern="[6-9]{1}[0-9]{8}[1-9]{1}" onInput={this.alertFn} value={phonenumber} required />
        <br /><br />
        <label htmlFor="MinAge" style={{ marginRight: "35px" }}> Min Age </label>
        <span style={{ marginRight: "40px" }}>:</span>
        <input type="number" id="MinAge" name="MinAge" onChange={this.alertFn} value={MinAge} required />
        <br /><br />
        <label htmlFor="MaxAge" style={{ marginRight: "35px" }}> Max Age </label>
        <span style={{ marginRight: "40px" }}>:</span>
        <input type="number" id="MaxAge" name="MaxAge" onChange={this.alertFn} value={MaxAge} required />
        <br /><br />
        <div style={{ marginRight: "100px" }}>
          <input id="submit" type="submit" value="Create" onClick={this.submitOn} />
        </div>
        <p id="alertMsg" style={{ marginRight: "100px", color: "red" }}>{this.state.alertMsg}</p>
      </div>
    )
  }
}

export default CreateDoc;