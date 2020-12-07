import React from 'react'
import './App.css';
import DoctorManagement from './components/DoctorManagement';
import PatientManagement from './components/PatientManagement';
import Tab from './components/tab';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      management: "",
    }
  }

  codeFn = (name) => {
    this.setState({ management: name });
  }
  render() {
    return (<div>
      <Tab data={{ buttons: ["Doctor Management", "Patient Management"], operations: [<DoctorManagement data={{ name: "List Of Doctors" }} />, <PatientManagement data={{ name: "List Of Patients" }} />], className: "TAB", codeFn: this.codeFn.bind(this),default:0 }}></Tab>
      <br />
      {/* {!this.state.management ? <h1 className="create"> Welcome To The Hospital </h1> : <br />} */}
    </div>
    )
  };
}

export default App;
