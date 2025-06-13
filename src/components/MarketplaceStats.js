"use client";
import React from "react";

export default function MarketplaceStats() {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Title */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="fw-bold mb-0">
              Marketplace <br /> in numbers
            </h3>
          </div>

          {/* Stat 1 */}
          <div className="col-6 col-md-3 text-md-center">
            <h4 className="fw-bold">10.3M</h4>
            <p className="small text-uppercase mb-0">
              Tons of millions of <br /> eUSD spent on digital assets
            </p>
          </div>

          {/* Stat 2 */}
          <div className="col-6 col-md-3 text-md-center">
            <h4 className="fw-bold">1.2B</h4>
            <p className="small text-uppercase mb-0">
              Tons of millions of <br /> eUSD spent on digital assets
            </p>
          </div>

          {/* Stat 3 */}
          <div className="col-12 col-md-3 text-md-center mt-4 mt-md-0">
            <h4 className="fw-bold">3.2M</h4>
            <p className="small text-uppercase mb-0">
              Tons of millions of <br /> eUSD spent on digital assets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
