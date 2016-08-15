import React from "react";

export default class ILIATMemberList extends React.Component{
  constructor() {
      super();
      this.state = {
          data: []
      }
  };
  componentDidMount(){
    this.setState({slickInitialized : false});
    $.ajax({
      url: './json/jsonGRE/ILIATMemberList.json',
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

      $('#slick_slider').slick({
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
        return (
          <div key={comment.id}>  
              <div className="col-sm-12">
                <img className="iliat_member_thumbnail img-circle img-responsive" src="http://placehold.it/280x280"/>
                <h4 dangerouslySetInnerHTML={this.rawMarkup(comment.Name)}></h4>
                <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
              </div>
          </div>  
        )
      })
      return(
        <article id="members">
          <h2>Đội ngũ giảng viên ILIAT</h2>
          <div className="row">
            <div id="slick_slider">{Comments}</div>
          </div>
        </article>
      )
    }
  };
