import React from "react";
import WebsiteCarousel from "./websiteCarousel";
import WebsiteBlocks from "./websiteBlocks";
import WebsiteFeaturedProducts from "./products/websiteFeaturedProducts";
import WebsiteSaleProducts from "./products/websiteSaleProducts";
import WebSiteSectionTitle from "./../common/WebsiteSectionTitle";

function WebsiteHome(props) {
  return (
    <React.Fragment>
      <div className="row mb-2">
        <WebsiteCarousel />
      </div>
      <div className="row mb-2">
        <WebsiteBlocks />
      </div>
      <div className="row mb-2 ">
        <WebSiteSectionTitle title="Featured Products" />
        <WebsiteFeaturedProducts />
      </div>

      <div className="row mb-2 ">
        <WebSiteSectionTitle title="Sale Products" />
        <WebsiteSaleProducts />
      </div>
    </React.Fragment>
  );
}

export default WebsiteHome;
