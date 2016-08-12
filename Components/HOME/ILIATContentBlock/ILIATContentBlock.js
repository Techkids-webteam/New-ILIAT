import React from "react";


export default class ILIATContentBlock extends React.Component{
  render(){
    return (
      <section className={'ilat_content_block ' +  this.props.background}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    );
  }
};
