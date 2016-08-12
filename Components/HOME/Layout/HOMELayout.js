import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import FullBanner from "../FullBanner/FullBanner";
import ILIATContentBlock from "../ILIATContentBlock/ILIATContentBlock";
import ILIATintruduceRight from "../ILIATContents/ILIATintruduceRight";
import ILIATFooter from "../ILIATFooter/ILIATFooter";
import ILIATHomeImages from "../ILIATContents/ILIATHomeImages";



export default class HOMELayout extends React.Component{
  render() {
    return (
      <div id="home">
        <Header/>
        <FullBanner/>
        <ILIATContentBlock><ILIATHomeImages/></ILIATContentBlock>
        <ILIATContentBlock><ILIATintruduceRight/></ILIATContentBlock>
        <ILIATFooter/>
      </div>
    );
  }
}


