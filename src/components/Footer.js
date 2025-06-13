"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold text-uppercase">BAZAAR</h5>
            <p className="small">
              our marketplace is the world’s first largest NFT market for
              independent creators worldwide
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-md-9">
            <div className="row">
              {/* Marketplace */}
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <h6 className="fw-semibold">Marketplace</h6>
                <ul className="list-unstyled small">
                  <li>All NFTs</li>
                  <li>Explore</li>
                  <li>Art</li>
                  <li>Collectibles</li>
                  <li>Photography</li>
                </ul>
              </div>

              {/* My Account */}
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <h6 className="fw-semibold">My Account</h6>
                <ul className="list-unstyled small">
                  <li>Profile</li>
                  <li>Favorites</li>
                  <li>Watchlist</li>
                  <li>My Collections</li>
                  <li>Settings</li>
                </ul>
              </div>

              {/* Resources */}
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <h6 className="fw-semibold">Resources</h6>
                <ul className="list-unstyled small">
                  <li>Help Center</li>
                  <li>Partners</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>Give us a feedback</li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-6 col-md-3">
                <h6 className="fw-semibold">Company</h6>
                <ul className="list-unstyled small">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Ventures</li>
                  <li>Grants</li>
                  <li>Docs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
