import React from "react";
export default class ILIATTuitionFee extends React.Component{
  constructor() {
        super();
        this.state = {
            data: []
        }
    };
    componentDidMount() {
        $.ajax({
            url: './json/jsonCFA/ILIATTuitionFee.json',
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
            <div className="row">
              <div className="col-sm-5">
                <p className="text-center ILIATTuitionFee_StudentandWork" dangerouslySetInnerHTML={this.rawMarkup(comment.Student)}></p>
                <div className="price_tag">
                  <div className="price_tag_content">
                    <p><s dangerouslySetInnerHTML={this.rawMarkup(comment.Moneydel)}></s></p>
                    <h3><strong dangerouslySetInnerHTML={this.rawMarkup(comment.MoneyStudent)}></strong></h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <p className="text-center ILIATTuitionFee_StudentandWork" dangerouslySetInnerHTML={this.rawMarkup(comment.Work)} ></p>
                <div className="price_tag">
                  <div className="price_tag_content">
                    <h3><strong dangerouslySetInnerHTML={this.rawMarkup(comment.MonneyWork)}></strong></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <p className="ILIATTuitionFee_Content" dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
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
