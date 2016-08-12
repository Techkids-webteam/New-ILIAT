import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";
export default class ILIATRegister extends React.Component{
	constructor() {
        super();
        this.state = {
            data: []
        }
    };
  	componentDidMount() {
        $.ajax({
            url: './json/jsonGMAT/ILIATRegister.json',
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
			<div className="row ">
				<div className="col-sm-offset-4 col-sm-8 text-center Register">
					<h1 dangerouslySetInnerHTML={this.rawMarkup(comment.Title)}></h1>
					<p dangerouslySetInnerHTML={this.rawMarkup(comment.Content)}></p>
					<ILIATButton>ĐĂNG KÝ NGAY</ILIATButton>
				</div>
			</div>
			)
		})
		return(
			<div>{Comments}</div>
		)
	}
}