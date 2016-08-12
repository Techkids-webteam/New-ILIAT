import React from "react";
import NavigatorMobile from "../Navigator/NavigatorMobile";
import NavigatorDesktop from "../Navigator/NavigatorDesktop";

export default class ILIATContentBlock extends React.Component{
  render(){
    let navMobile = this.props.navigator ? <NavigatorMobile/> : ""
    let navDesktop = this.props.navigator ? <NavigatorDesktop/> : ""
    return (
      <section className={'ilat_content_block ' +  this.props.background}>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              {navMobile}
              {navDesktop}
            </div>
            <div className="col-sm-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
};
