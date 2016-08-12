import React from "react";
export default class ILIATHowTwo extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: './json/jsonGmat/ILIATHowTwo.json',
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
            <div key={comment.id}> 
                <p className="How_Tow_Title">Những kiến thức bạn sẽ học tại ILIAT</p>
                <div className="How_Tow_Content">
                     <ul>
                        <li className="row">
                            <div className="col-sm-1 arrow">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineOne)}></span>    
                            </div>
                        </li>

                        <li className="row ">
                            <div className="col-sm-1 arrow">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineTwo)}></span>    
                            </div>
                        </li>

                        <li className="row">
                            <div className="col-sm-1 arrow">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineThree)}></span>    
                            </div> 
                        </li>

                        <li className="row arrow">
                            <div className="col-sm-1">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                  <span dangerouslySetInnerHTML={this.rawMarkup(comment.TitleFour)}></span>
                            </div>
                        </li>

                        <li className="row ">
                            <div className="col-sm-1 arrow_small">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineFour)}></span>    
                            </div>
                        </li>

                        <li className="row">
                            <div className="col-sm-1 arrow_small">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineFive)}></span>    
                            </div>
                        </li>

                        <li className="row">
                            <div className="col-sm-1 arrow_small">
                                <img src={comment.url}/>
                            </div> 
                            <div className="col-sm-8">
                                <span dangerouslySetInnerHTML={this.rawMarkup(comment.lineSix)}></span>    
                            </div>
                        </li>
                    </ul>
                </div>        
            </div>
            )
         })
        return(
            <div>{Comments}</div>
        ) 
    }
}