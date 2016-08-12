import React from "react";
import BannerArrow from "../FullBanner/BannerArrow";
import FullBannerContent from "../FullBanner/FullBannerContent";

export default class FullBanner extends React.Component{
  render(){
    return (
      <section className="full_banner">
        <FullBannerContent/>
        <BannerArrow/>
      </section>
    );
  }
};
