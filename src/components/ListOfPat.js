import React from 'react';
import '../App.css';
import { postPatCallAPI, getPatCallAPI } from '../actions';
class ListOfPat extends React.Component {
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
  listFn = () => {
    getPatCallAPI().then((res) => {
      this.setState({ result: [...res.data] })
    });
  }

  componentWillMount() {
    this.listFn();
  }
  render() {
    return (
      <div>
        <div>
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
              {this.state.result.map(i =>
                <tr>
                  <td>{i.key}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.problem}</td>
                  <td>{i.mobilenumber}</td>
                  <td>{i.preffereddoctor}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListOfPat;