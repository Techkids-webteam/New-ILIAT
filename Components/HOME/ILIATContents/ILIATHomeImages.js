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
        url: './json/jsonHome/ILIATHomeImages.json',
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
        <div className="col-sm-3 text-center images">
          <img key={comment.id} src={comment.url}/> 
        </div>
        )
      })
      return(
        <div className="row ILIATHomeImages">      
                <h1 className="text-center">CÁC KHOÁ HỌC TẠI ILIAT</h1>
                <div>{Comments}</div>
        </div> 
    )
  }
};
