import React from "react";

export default class ILIATIntroduction extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
      $.ajax({
        url: './json/jsonCFA/ILIATIntroduction.json',
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
    rawMarkup(markdown) {
      var md = new Remarkable();
      var rawMarkup = md.render(markdown);
      return { __html: rawMarkup };
    }
    render(){
    console.log("data:" + this.state.data);
    var Comments = this.state.data.map((comment)=>{
    return(
        <div key ={comment.id}>
          <div className="col-sm-4">
            <h4 dangerouslySetInnerHTML={this.rawMarkup(comment.Title)}></h4>
            <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
          </div> 
        </div>
      )
    })
    return(
      <article id="introduction">
        <h2>Học CFA - Tại sao chọn ILIAT?</h2>
        <h4>Chương trình học được thiết kế riêng cho bạn!</h4>
        <div className="row">
          <div>{Comments}</div>
        </div>
      </article>  
    )
  }
}
