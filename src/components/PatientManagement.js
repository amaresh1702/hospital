import React from 'react';
import '../App.css';
import CreatePat from './CreatePat';
import ListOfPat from './ListOfPat';
import Tab from './tab';

class PatientManagement extends React.Component {
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
        <Tab data={{ buttons: ["Create Patients", "List Of Patients"], operations: [<CreatePat />, <ListOfPat />], className: "subtabs", codeFn: this.codeFn.bind(this),default:1}}></Tab>
      </div>
    )
  }
}

export default PatientManagement;