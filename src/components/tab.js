import React from 'react'
import '../App.css';
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      button:this.props.data.default
    }
    this.code = this.props.data.operations[this.props.data.default]
  }
  clickFn = (event) => {
    this.code = this.props.data.operations[event.target.id];
    this.props.data.codeFn(event.target.name);
    this.setState({ click: true,button:event.target.id});
  }
  buttonsFn = (data) => {
    let temp = [];
    for (let i in data) {
      if(Number(i)===Number(this.state.button)){
        temp.push(<button class="selectedtabs" id={i} name={data[i]} onClick={this.clickFn} > {data[i]} </button>)
      }else{
      temp.push(<button class="tabs" id={i} name={data[i]} onClick={this.clickFn} > {data[i]} </button>)
      }
    }
    return temp;
  }
  render() {
    let {className , buttons} = this.props.data;
    return (
      <div className={className}>
        {this.buttonsFn(buttons)}
        { this.code}
      </div>
    )
  };
}

export default Tab;
