import React from "react";
import BannerArrow from "../FullBanner/BannerArrow";

export default class FullBanner extends React.Component{
  render(){
    return (
      <section className="full_banner">
        <BannerArrow/>
      </section>
    );
  }
};
