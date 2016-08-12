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
      url: './json/jsonGmat/ILIATMemberList.json',
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
             
          </div>  
        )
      })
      return(
        <article id="members">
            <div id="slick_slider">{Comments}</div>
        </article>
      )
    }
  };
