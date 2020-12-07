import React from 'react';
import '../App.css';
import { postDocCallAPI, getDocCallAPI } from '../actions';

class ListOfDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    }
  }
  listFn = () => {
    getDocCallAPI().then((res) => {
      //  console.log(res.data);
      this.setState({ result: [...res.data] })
    });
  }
  componentWillMount() {
    this.listFn();
  }
  render() {
    return (
      <div>
        <table id="DocTable">
          <thead>
            <tr>
              <th> Id </th>
              <th> Name </th>
              <th> Email </th>
              <th> Speciality </th>
              <th> PhoneNumber </th>
              <th> MinAge </th>
              <th> MaxAge </th>
            </tr>
          </thead>
          <tbody>
            {this.state.result.map(i =>
              <tr>
                <td>{i.key}</td>
                <td>{i.name}</td>
                <td>{i.emailid}</td>
                <td>{i.speciality}</td>
                <td>{i.mobilenumber}</td>
                <td>{i.minage}</td>
                <td>{i.maxage}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListOfDoc;