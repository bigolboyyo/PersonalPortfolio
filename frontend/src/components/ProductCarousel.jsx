import React from "react";

function ProductCarousel() {
  return (
    <div className="product-frame">
      <img
        id="product1"
        className="product one"
        src="/images/self.jpeg"
        alt="me"
        style={{ width: "20vw" }}
      />
      <img
        className="product two"
        id="product2"
        src="/images/self.jpeg"
        alt="me"
        style={{ width: "20vw" }}
      />
      <img
        className="product three"
        id="product3"
        src="/images/self.jpeg"
        alt="me"
        style={{ width: "20vw" }}
      />
      <img
        className="product four"
        id="product4"
        src="/images/self.jpeg"
        alt="me"
        style={{ width: "20vw" }}
      />
    </div>
  );
}

export default ProductCarousel;
