import React from "react";

export default class BannerArrow extends React.Component{
  readMore(){
    $('html, body').animate({
      scrollTop: $("#introduction").offset().top - 60
    }, 500);
  }
  render(){
    return (
      <button className="banner_arrow hidden-xs" onClick={this.readMore}><img src="./images/fullbanner_arrow.png"/></button>
    );
  }
};
