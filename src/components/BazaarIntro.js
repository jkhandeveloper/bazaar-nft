"use client";
import React from "react";
import Image from "next/image";

export default function BazaarIntro() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold">
            What is <span className="text-primary">BAZAAR</span>
            <br /> Market place?
          </h2>

          <div className="mt-4">
            {/* Feature Item */}
            <div className="d-flex align-items-start mb-4">
              <i className="bi bi-globe2 fs-4 text-primary me-3"></i>
              <div>
                <h6 className="fw-semibold">Environment</h6>
                <p className="text-muted mb-0">
                  Bazaar NFT marketplace brings together artists, creators, and
                  crypto enthusiasts on a single platform to create and trade
                  top NFTs
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="d-flex align-items-start mb-4">
              <i className="bi bi-lightbulb fs-4 text-primary me-3"></i>
              <div>
                <h6 className="fw-semibold">Innovation</h6>
                <p className="text-muted mb-0">
                  Bazaar NFT marketplace brings together artists, creators, and
                  crypto enthusiasts on a single platform to create and trade
                  top NFTs
                </p>
              </div>
            </div>

            {/* Feature Item */}
            <div className="d-flex align-items-start">
              <i className="bi bi-stars fs-4 text-primary me-3"></i>
              <div>
                <h6 className="fw-semibold">Exclusive</h6>
                <p className="text-muted mb-0">
                  Bazaar NFT marketplace brings together artists, creators, and
                  crypto enthusiasts on a single platform to create and trade
                  top NFTs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Astronaut Image */}
        <div className="col-md-6 text-center">
          <Image
            src="/images/astronaut-money.png"
            alt="Astronaut on Planet"
            width={400}
            height={400}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
