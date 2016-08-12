import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";

export default class NavigatorDesktop extends React.Component{
  componentDidMount(){
    $('body').scrollspy({
      target: '#scrollspy',
      offset: 110
    });

    $('#scrollspy').affix({
      offset: {
        top: function () {
          return (this.top = $(window).height())
        }
      }
    })
  }

  moveToTarget(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(e.target).attr("href")).offset().top - 60
    }, 500);
  }

  render(){
    return (
      <div className="iliat_navigator_desktop hidden-xs" data-spy="affix" id="scrollspy">
        <ul className="nav col-sm-10 col-sm-offset-1 iliat_navigator_list" role="tablist">
          <li className="active"><a href="#introduction" onClick={this.moveToTarget}>Học ở ILIAT có gì hot?</a></li>
          <li><a href="#members" onClick={this.moveToTarget}>Giảng viên</a></li>
          <li><a href="#iliat_how" onClick={this.moveToTarget}>Học ở ILIAT như thế nào?</a></li>
          <li className="highlight"><a href="#fee" onClick={this.moveToTarget}>Học phí và ưu đãi</a></li>
          <button>đăng ký ngay</button>
        </ul>
      </div>
    );
  }
};
