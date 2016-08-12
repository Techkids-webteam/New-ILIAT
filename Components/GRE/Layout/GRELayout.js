import React from "react";
import ReactDOM from "react-dom";
import Header from "../../CFA/Header/Header";
import FullBanner from "../FullBanner/FullBanner";
import ILIATContentBlock from "../ILIATContentBlock/ILIATContentBlock";
import ILIATIntroduction from "../ILIATContents/ILIATIntroduction";
import ILIATMemberList from "../ILIATContents/ILIATMemberList";
import ILIATHow from "../ILIATContents/ILIATHow";
import ILIATTuitionFee from "../ILIATContents/ILIATTuitionFee";
import ILIATFooter from "../../HOME/ILIATFooter/ILIATFooter";


export default class CFALayout extends React.Component{
  render() {
    return (
      <div id="gre">
        <Header />
        <FullBanner/>
        <ILIATContentBlock navigator="true"><ILIATIntroduction/></ILIATContentBlock>
        <ILIATContentBlock background="gray_bg"><ILIATMemberList/></ILIATContentBlock>
        <ILIATContentBlock><ILIATHow/></ILIATContentBlock>
        <ILIATContentBlock background="gray_bg"><ILIATTuitionFee/></ILIATContentBlock>
        <ILIATFooter/>
      </div>
    );
  }
}
