import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";

export default class ILIATHow extends React.Component{
   constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonGmat/ILIATHow.json',
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
            <div className="iliat_timeline">
              <span className="highlight_hours"dangerouslySetInnerHTML={this.rawMarkup(comment.Total)}></span>
              <span className="big_equal_sign">
                <div className="iliat_equal_piece"></div>
                <div className="iliat_equal_piece"></div>
              </span>
              <span className="timetable">
                <h4 dangerouslySetInnerHTML={this.rawMarkup(comment.Calendar)}></h4>
              </span>
              <span className="vertical_divider"></span>
              <ILIATButton>Lich học GMAT 2016</ILIATButton>
            </div>

            <h4 className="text-left" dangerouslySetInnerHTML={this.rawMarkup(comment.In)}></h4>

            <div className="row iliat_steps">
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-xs-4">
                    <div className="iliat_step_arrow">1</div>
                    <p className="text-center" dangerouslySetInnerHTML={this.rawMarkup(comment.ContentArrow1)}></p>
                  </div>
                  <div className="col-xs-4">
                    <div className="iliat_step_arrow">2</div>
                    <p className="text-center" dangerouslySetInnerHTML={this.rawMarkup(comment.ContentArrow2)} ></p>
                  </div>
                  <div className="col-xs-4">
                    <div className="iliat_step_arrow">3</div>
                    <p className="text-center" dangerouslySetInnerHTML={this.rawMarkup(comment.ContentArrow3)}></p>
                  </div>
                </div>
              </div>
            </div>
        </div>    
        )
      })
        return(
          <article id="iliat_how">
            <h2>Học tại ILIAT như thế nào</h2>
            <h4 className="text-left">Lộ trình tinh gọn. Hiệu quả cao. Chi phí thấp. Học là (đam) &quot;mê&quot;!</h4>
            <div>{Comments}</div>
          </article>
        )
      }
    };
