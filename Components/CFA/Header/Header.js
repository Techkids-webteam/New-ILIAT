import React from "react";

export default class Header extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top" id="header">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#header_nav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="./images/logo.png" className="img-responsive"/></a>
          </div>

          <div className="collapse navbar-collapse" id="header_nav">
            <ul className="nav navbar-nav center_menu">
              <li><a href="#">Lịch học CFA</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" className="pull-right iliat_header_button">Đăng ký ngay</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
