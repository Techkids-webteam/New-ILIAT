import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";

export default class FullBannerContent extends React.Component{
  render(){
    return (
      <div className="fullbanner_content text-center">
        <h1>Pass CFA?</h1>
        <h1>Easy as pie!</h1>
        <ILIATButton>Đăng ký ngay</ILIATButton>
        <p>Tìm hiểu thêm về khoá học</p>
      </div>
    );
  }
};
