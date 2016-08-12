import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";
import ILIATTuitionFeeTwo from "./ILIATTuitionFeeTwo";
export default class ILIATTuitionFee extends React.Component{
constructor() {
    super();
    this.state = {
        data: []
    }
};
componentDidMount() {
    $.ajax({
        url: './json/jsonIelts/ILIATTuitionFee.json',
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
componentDidUpdate(){
    console.log('componentDidUpdate');
    if(this.state.slickInitialized) return;
    if(this.state.data.length){
      this.setState({slickInitialized : true});

      $('.slick_slider').slick({
        dots: false,
        infinite: false,
        arrows:false,  
        //        centerMode: true,
        slidesToShow: 3 ,
        //        slidesToScroll: 1
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:false
          }
        }]
      });
    }    
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
          <div key={comment.id}>
            <div className="ILIATTuitionFee_border" >
                <div className="col-sm-12  ILIATTuitionFee_in">
                    <h2 dangerouslySetInnerHTML={this.rawMarkup(comment.Name)}></h2>
                    <h3  dangerouslySetInnerHTML={this.rawMarkup(comment.Price)}></h3>
                    <div className="ILIATTuitionFee_content">    
                        <p className="ILIATTuitionFee_content_introduce" dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
                        <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill1)}></h5>
                        <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide1)}></p>
                        <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill2)}></h5>
                        <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide2)}></p>
                        <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill3)}></h5>
                        <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide3)}></p>
                        <h5 dangerouslySetInnerHTML={this.rawMarkup(comment.Skill4)}></h5>
                        <p dangerouslySetInnerHTML={this.rawMarkup(comment.Guide4)}></p>
                    </div>    
                </div>
                <button className="ILIATTuitionFee_button">GHI DANH VÀO HỌC</button>
            </div>
          </div>  
        )
    })
    return (
      <article id="fee">
        <h2>Học phí và ưu đãi</h2>
        <div className="slick_slider row">{Comments}</div>
        <ILIATTuitionFeeTwo/>
      </article>
    )
  }
};
