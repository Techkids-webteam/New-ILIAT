import React from "react";

export default class NavigatorMobile extends React.Component{
  componentDidMount(){
    // $("#navigator_dropdown").dropdown();
  }

  render(){
    return (
      <div className="iliat_navigator_mobile visible-xs">
        <div className="dropdown" id="navigator_dropdown">
          <button id="dLabel" type="button" className="iliat_dropdown_button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tìm hiểu khoá CFA
            <span className="dropdown_plus glyphicon glyphicon-plus"></span>
          </button>
          <ul className="dropdown-menu iliat_dropdown" aria-labelledby="dLabel">
            <li><a href="#">Học ở ILIAT có gì hot?</a></li>
            <li><a href="#">Giảng viên</a></li>
            <li><a href="#">Học ở ILIAT như thế nào?</a></li>
            <li><a href="#">Học phí và ưu đãi</a></li>
          </ul>
        </div>
      </div>
    );
  }
};
