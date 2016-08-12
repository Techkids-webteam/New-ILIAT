import React from "react";
export default class ILIATintruducePoint extends React.Component{
   constructor() {
        super();
        this.state = {
            data: []
        }
    };
    rawMarkup(markdown) {
        var md = new Remarkable();
        var rawMarkup = md.render(markdown);
        return { __html: rawMarkup };
    }

    componentDidMount(){
        this.setState({slickInitialized : false});
        $.ajax({
          url: './json/jsonHome/ILIATintruducePoint.json',
          // dataType: 'json',
          cache: false,
          success: function(res){
            console.log(res);
            this.setState({data : res});
          }.bind(this),
          error: function(res){
            console.log(res);
          }.bind(this)
        });
    }
  render(){
        var Comments = this.state.data.map((comment)=>{
      return(
        <div className="row" key={comment.id}>
          <div className="col-sm-2">
            <span className="vertical_divider"></span>
          </div>
          <div className="col-sm-10 ILIATintruducePoint_right ">
            <strong dangerouslySetInnerHTML={this.rawMarkup(comment.Number)}></strong>
            <p dangerouslySetInnerHTML={this.rawMarkup(comment.Graduate)}></p>
            <div className="row">
              <div className="col-sm-4">
                <img className="ILIATintruducePoint_img"src="../../../images/start.png"/>
              </div>
              <div className="col-sm-8 ILIATintruducePoint_between">
                <strong  dangerouslySetInnerHTML={this.rawMarkup(comment.Notable)}></strong>
              </div>
            </div>
            <strong dangerouslySetInnerHTML={this.rawMarkup(comment.Percent)}></strong>
            <p dangerouslySetInnerHTML={this.rawMarkup(comment.Satisfied)}></p>

          </div>
        </div>
      )
  })
      return(
        <div>{Comments}</div>
      )  
  }
}