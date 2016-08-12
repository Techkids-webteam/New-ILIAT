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
        url: './json/jsonIelts/ILIATIntroduction.json',
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
    return (
        <div className="row" key ={comment.id}>
          <div className="col-sm-1 text-center circle">
              <img src={comment.url}/>    
          </div>
          <div className="col-sm-8 introduction_content">
            <span dangerouslySetInnerHTML={this.rawMarkup(comment.FirstLine)}></span>
            <span dangerouslySetInnerHTML={this.rawMarkup(comment.SecondLine)}></span>
          </div>
        </div>  
        )
      })
      return(
      <article id="introduction">
        <h2>Học IELTS - Tại sao chọn ILIAT?</h2>
        <h4>ILIAT - Sự lựa chọn đầu tiên và tốt nhất đưa bạn đến những trường đại học kinh doanh hàng đầu thế giới!</h4>
        <div>{Comments}</div>
      </article>  
    )
  }
};
