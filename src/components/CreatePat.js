import React from 'react';
import '../App.css';
import { postPatCallAPI, getPatCallAPI } from '../actions';
class CreatePat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMsg: "",
      result: [],
      statements: [],
      name: "",
      problem: "",
      phonenumber: "",
      age: ""
    }
  }
  alertFn = (event) => {
    if (event.target.name === "name") {
      if (event.target.value && event.target.value.length < 3) {
        this.setState({ alertMsg: "Name must contain min 3 letters", name: event.target.value });
      } else {
        this.setState({ alertMsg: "", name: event.target.value });
      }
    } else if (event.target.name === "problem") {
      this.setState({ alertMsg: "", problem: event.target.value });
    } else if (event.target.name === "phonenumber") {
      if (event.target.value && event.target.value.length === 10) {
        this.setState({ alertMsg: "", phonenumber: event.target.value });
      } else {
        this.setState({ alertMsg: "number must contain 10 numbers", phonenumber: event.target.value });
      }
    } else if (event.target.name === "age") {
      if (Number(event.target.value) <= 0) {
        this.setState({ alertMsg: "Enter Valid Age", MaxAge: event.target.value });
      }
      else {
        this.setState({ alertMsg: "", age: event.target.value });
      }
    }
  }
  timeOut = (comp) => {
    setTimeout(function () {
      comp.setState({ alertMsg: "", name: "", problem: "", age: "", phonenumber: "" });
    }, 5000);
  }
  submitOn = () => {
    if (this.state.name && this.state.problem && this.state.age && this.state.phonenumber && !this.state.alertMsg) {
      postPatCallAPI({
        name: this.state.name,
        age: this.state.age,
        problem: this.state.problem,
        mobileNumber: this.state.phonenumber
      }).then((res) => {
        this.setState({ alertMsg: res }, () => {
          this.timeOut(this);
        })
      });
    } else {
      this.setState({ alertMsg: "Fill The Form Completely" })
    }
  }
  codeFn = () => {
    if (this.props.data.name === "Create Patients") {
      return <div className="create">
        <label htmlFor="name" style={{ marginRight: "64px" }}> Name </label>
        <span style={{ marginRight: "20px" }}>:  </span>
        <input type="text" id="name" name="name" onInput={this.alertFn} value={this.state.name} required />
        <br /> <br />
        <label htmlFor="age" style={{ marginRight: "85px" }}> Age </label>
        <span style={{ marginRight: "20px" }}>:</span>
        <input type="number" id="age" name="age" onInput={this.alertFn} value={this.state.age} required />
        <br /><br />
        <label htmlFor="problem" style={{ marginRight: "35px" }}>Problem </label>
        <span style={{ marginLeft: "15px" }}>:</span>
        <input type="text" id="problem" name="problem" style={{ marginLeft: "20px" }} onInput={this.alertFn} value={this.state.problem} required />
        <br /><br />
        <label htmlFor="phonenumber" >mobile Number </label>
        <span style={{ marginRight: "20px" }}>:</span>
        <input type="number" id="phonenumber" name="phonenumber" pattern="[6-9]{1}[0-9]{8}[1-9]{1}" onInput={this.alertFn} value={this.state.phonenumber} required />
        <br /><br />
        <div style={{ marginRight: "70px" }}>
          <input id="submit" type="submit" value="Create Patients" onClick={this.submitOn} />
        </div>
        <p id="alertMsg" style={{ marginRight: "70px", color: "red" }}> {this.state.alertMsg}</p>
        <p style={{ marginRight: "70px", color: "red" }}> {this.state.response}</p>
      </div>
    } else if (this.props.data.name === "List Of Patients") {
      this.listFn();
      return <div>
        <table id="PatTable">
          <thead>
            <tr>
              <th> Id </th>
              <th> name </th>
              <th> age </th>
              <th> Problem </th>
              <th> Mobile Number</th>
              <th> Preffered Doctor</th>
            </tr>
          </thead>
          <tbody>
            {this.state.statements}
          </tbody>
        </table>
      </div>
    }
  }
  render() {
    let {name,age,problem,phonenumber}=this.state
    return (
      <div>
        <div className="create">
          <label htmlFor="name" style={{ marginRight: "64px" }}> Name </label>
          <span style={{ marginRight: "20px" }}>:  </span>
          <input type="text" id="name" name="name" onInput={this.alertFn} value={name} required />
          <br /> <br />
          <label htmlFor="age" style={{ marginRight: "85px" }}> Age </label>
          <span style={{ marginRight: "20px" }}>:</span>
          <input type="number" id="age" name="age" onInput={this.alertFn} value={age} required />
          <br /><br />
          <label htmlFor="problem" style={{ marginRight: "35px" }}>Problem </label>
          <span style={{ marginLeft: "15px" }}>:</span>
          <input type="text" id="problem" name="problem" style={{ marginLeft: "20px" }} onInput={this.alertFn} value={problem} required />
          <br /><br />
          <label htmlFor="phonenumber" >mobile Number </label>
          <span style={{ marginRight: "20px" }}>:</span>
          <input type="number" id="phonenumber" name="phonenumber" pattern="[6-9]{1}[0-9]{8}[1-9]{1}" onInput={this.alertFn} value={phonenumber} required />
          <br /><br />
          <div style={{ marginRight: "70px" }}>
            <input id="submit" type="submit" value="Create Patients" onClick={this.submitOn} />
          </div>
          <p id="alertMsg" style={{ marginRight: "70px", color: "red" }}> {this.state.alertMsg}</p>
        </div>
      </div>
    )
  }
}

export default CreatePat;