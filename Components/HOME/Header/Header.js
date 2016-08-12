import React from "react";
import { IndexLink, Link, withRouter } from "react-router";
export default class Header extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top " id="header">
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

          <div className="collapse navbar-collapse " id="header_nav">
              <ul className="nav navbar-nav navbar-right header_list">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle header_dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">KHÓA HỌC</a>
                  <ul className="dropdown-menu header_dropdown_list ">
                    <li><Link to="GMAT">KHÓA HỌC GMAT</Link></li>
                    <li><Link to="IELTS">KHÓA HỌC IELTS</Link></li>
                    <li><Link to="GRE">KHÓA HỌC GRE</Link></li>
                    <li><Link to="CFA">KHÓA HỌC CFA</Link></li>
                  </ul>
                </li>
                <li><a href="#">LICH KHAI GIẢNG 2016</a></li>
                <li><a href="#">VỀ ILIAT</a></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
};
