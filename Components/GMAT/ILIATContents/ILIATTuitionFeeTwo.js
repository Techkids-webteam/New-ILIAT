import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";
export default class ILIATTuitionFeeTwo extends React.Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-sm-8">
						<p>Chương trình đặc biệt hè này! Nhận học bổng ngay sau phỏng vấn? Tại sao không?</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-5">
						<ILIATButton>Tôi đăng ký nhận học bổng</ILIATButton>
					</div>
					<div className="col-sm-5">
						<button>Không,tôi không muốn nhận học bổng</button>
					</div>
				</div>
			</div>	
		)
	}
}