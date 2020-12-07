import React from 'react';
import '../App.css';
import CreateDoc from './CreateDoc';
import ListOfDoc from './ListOfDoc';
import Tab from './tab';
class DoctorManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      management: ""
    }
  }
  codeFn = () => {
    this.setState({ management: this.props.data.name });
  }
  render() {
    return (
      <div>
        <Tab data={{ buttons: ["Create Doctor", "List Of Doctors"], operations: [<CreateDoc />, <ListOfDoc />], className: "subtabs", codeFn: this.codeFn.bind(this),default:1 }}></Tab> 
      </div>
    )
  }
}

export default DoctorManagement;