import React from "react";

export default class ILIATButton extends React.Component{
  render(){
    return (
      <button className="iliat_button">{this.props.children}</button>
    );
  }
};
