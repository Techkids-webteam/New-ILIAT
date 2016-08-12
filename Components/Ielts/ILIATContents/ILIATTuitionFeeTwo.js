import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";
export default class ILIATTuitionFeeTwo extends React.Component{
	render(){
		return(
			<div className="ILIATTuitionFeeTwo">
				<div className="row">
					<div className="col-sm-12 ILIATTuitionFeeTwo_title ">
						<p>Chương trình đặc biệt hè này! Nhận học bổng ngay sau phỏng vấn? Tại sao không?</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6  text-center">
						<button className="ILIATTuitionFeeTwo_blue">Tôi đăng ký nhận học bổng</button>
					</div>
					<div className="col-sm-6  text-center">
						<button className=" ILIATTuitionFeeTwo_white ">Không,tôi không muốn nhận học bổng</button>
					</div>
				</div>
			</div>	
		)
	}
}