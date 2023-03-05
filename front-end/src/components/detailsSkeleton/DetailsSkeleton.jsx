import React from "react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const DetailsSkeleton = () => {
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton">
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ContentWrapper>
      <div className="detailsBannerSkeleton">
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
      </div>
      <div className="castSkeleton">
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
      </div>
      <div className="videoSkeleton">
        {loadingSkeleton()}
        {loadingSkeleton()}
        {loadingSkeleton()}
        {loadingSkeleton()}
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
    </ContentWrapper>
  );
};

export default DetailsSkeleton;
