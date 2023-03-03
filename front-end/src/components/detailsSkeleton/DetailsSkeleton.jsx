import React from "react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const DetailsSkeleton = () => {
  return (
    <div className="detailsBanner">
      <div className="detailsBannerSkeleton">
        <ContentWrapper>
          <div className="left skeleton"></div>
          <div className="right">
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row skeleton"></div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
