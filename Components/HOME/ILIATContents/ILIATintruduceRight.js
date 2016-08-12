import React from "react";
import ILIATintruducePoint from "./ILIATintruducePoint";
export default class ILIATintruduceRight extends React.Component{
   constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount(){
        this.setState({slickInitialized : false});
        $.ajax({
          url: './json/jsonHome/ILIATintruduceRight.json',
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
              dots: true,
              infinite: true,
              slidesToShow: 1,
              arrows:false, 
        //    slidesToScroll: 1
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
                <div className="col-sm-offset-6 col-sm-4 intruduce_right">
                   <h2 className="intruduce_right_name" dangerouslySetInnerHTML={this.rawMarkup(comment.Name)}></h2>
                    <div className="intruduce_right_img">   
                        <img src={comment.url}/> 
                    </div>
                </div>
                <div className="row">
                    <div className=" col-sm-11 text-right intruduce_content">
                        <p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
                    </div>
                </div>
            </div>   
          )
        })
        return(
          <div className="intruduce hidden-xs">
            <h1 className="text-center">HỌC VIÊN NGHĨ GÌ VỀ ILIAT</h1>
            <div className="row">
              <div className="col-sm-7">
                <div id="slick_slider">{Comments}</div>
              </div>
              <div className="col-sm-4">
                <ILIATintruducePoint/>
              </div>
            </div>
          </div>
          
        )
      }
    };
