import React from "react";

export default class ILIATFooter extends React.Component{
  render(){
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 footer_col">
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                  <img src="./images/logo.png" className="footer_logo img-responsive"/>
                </div>
              </div>

              <div>Số 28, ngách 10, ngõ 121, Chùa Láng</div>
              <div>Số 101D, ngõ 95, chùa Bộc, Đống Đa</div>
              <div>Ms. Quỳnh: 0165 339 9457</div>
              <div>Ms. Hà: 0165 300 5670</div>
              <div>contact@iliat.org</div>
            </div>
            <div className="col-sm-3 footer_col">
              <h3>Khoá học</h3>
              <nav>
                <a href="#">Khoá học GMAT</a>
                <a href="#">Khoá học IELTS</a>
                <a href="#">Khoá học GRE</a>
                <a href="#">Khoá học CFA</a>
              </nav>
            </div>
            <div className="col-sm-3 hidden-xs">
              <h3>&nbsp;</h3>
              <nav>
                <a href="#">Lịch khai giảng 2016</a>
                <a href="#">Về ILIAT</a>
              </nav>
            </div>
            <div className="col-sm-3 footer_col">
              <h3 className="text-center">Tìm ILIAT tại</h3>
              <div className="row">
                <div className="col-xs-4 text-center">
                  <img src="./images/icon_facebook.png" className="img-responsive"/>
                </div>
                <div className="col-xs-4 text-center">
                  <img src="./images/icon_youtube.png" className="img-responsive"/>
                </div>
                <div className="col-xs-4 text-center">
                  <img src="./images/icon_blog.png" className="img-responsive"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};
