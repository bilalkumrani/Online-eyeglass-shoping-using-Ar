import React from "react";

function WebsiteBlocks(props) {
  const blocks = [
    { title: "Free Shipping", subtitle: "For orders from $50", icon: "truck" },
    { title: "Support 24/7", subtitle: "Call us anytime", icon: "phone" },
    { title: "100% Safety", subtitle: "Only Secure Payments", icon: "shield" },
    { title: "Hot offers", subtitle: "Discounts uptop 90%", icon: "bullhorn" },
  ];
  return (
    <React.Fragment>
      {blocks.map((item) => (
        <div
        key={item.title}
          class="block-features__item d-flex flex-column justify-content-center align-items-center col p-5 rounded "
          style={{ background: "#F5F5F5" }}
        >
          <div class="block-features__icon mb-2">
            <i
              className={`fas fa-${item.icon} fa-3x`}
              style={{ color: "#FFD333" }}
            ></i>
          </div>
          <div class="block-features__content">
            <div class="block-features__title">
              <span style={{ fontSize: "1.3rem", fontWeight: "700" }}>
                {item.title}
              </span>
            </div>
            <div class="block-features__subtitle">
              <span style={{ fontSize: "1.1rem", fontWeight: "400" }}>
                {item.subtitle}
              </span>
            </div>
          </div>
        </div>

      ))}
    </React.Fragment>
  );
}

export default WebsiteBlocks;
