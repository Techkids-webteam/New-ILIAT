import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";
export default class ILIATTuitionFee extends React.Component{
  constructor() {
        super();
        this.state = {
            data: []
        }
    };
  componentDidMount() {
        $.ajax({
            url: './json/jsonGMAT/ILIATTuitionFee.json',
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
      <div key={comment.id}>
        <div className="row visible-xs">
            <div className="price_tag">
              <div className="price_tag_content">
                <h3><strong dangerouslySetInnerHTML={this.rawMarkup(comment.Money)}></strong></h3>
              </div>
            </div>
            <div className="TuitionFee_content text-left">
              <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p> 
            </div>
            <div className="text-center">
              <ILIATButton>Kết Nối Ngay Với ILIAT</ILIATButton>
            </div>
        </div>
        <div className="row hidden-xs">
          <div className="col-sm-5 TuitionFee_content " >
              <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p> 
          </div>
          <div className="col-sm-offset-2 col-sm-5 TuitionFee_content_desktop text-center">
              <div className="price_tag">
                <div className="price_tag_content">
                  <h3><strong dangerouslySetInnerHTML={this.rawMarkup(comment.Money)}></strong></h3>
                </div>
              </div>
              <p dangerouslySetInnerHTML={this.rawMarkup(comment.Support)}></p>
              <ILIATButton>Kết Nối Ngay Với ILIAT</ILIATButton>
          </div>
        </div>
      </div>  
      )
    })
      return(
        <article id="fee">
          <h2>Học phí và ưu đãi</h2>
          <div>{Comments}</div>
        </article>  
        
      )  
  }
};
