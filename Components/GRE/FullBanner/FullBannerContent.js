import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";

export default class FullBannerContent extends React.Component{
  render(){
    return (
      <div className="fullbanner_content text-center">
        <div className="container">
          <div className="row">
              <div className="col-sm-offset-6 col-sm-6 ">
                <img src="../../images/GRE_text.png"/>
                <ILIATButton>Đăng ký ngay</ILIATButton>
                <p>Tìm hiểu thêm về khoá học</p>
              </div>     
            </div>
          </div>
      </div>
    );
  }
};
