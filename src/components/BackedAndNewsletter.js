"use client";
import React from "react";
import Image from "next/image";

export default function BackedAndNewsletter() {
  return (
    <section className="pt-5">
      {/* Top Text Section */}
      <div className="container text-start mb-5">
        <h3 className="fw-bold">Backed by top firms & industry leaders</h3>
        <p className="text-muted mb-0">
          Who are helping us pave the way towards a brand new digital economy
        </p>
      </div>

      {/* Bottom Gradient Section */}
      <div
        className="bg-gradient d-flex align-items-center py-5"
        style={{
          background: "linear-gradient(to right, #dfe9f3 0%, #blue 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left - Email Signup */}
            <div className="col-md-5">
              <h5 className="fw-bold mb-3">Stay in the top</h5>
              <p className="text-muted">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating.
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
                <button className="btn btn-primary" type="button">
                  Send
                </button>
              </div>
            </div>

            {/* Center - Robot Image */}
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <Image
                src="/images/robot.png"
                alt="Newsletter Robot"
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>

            {/* Right - Social Links */}
            <div className="col-md-3 text-center text-md-start">
              <h6 className="fw-bold">Join the community</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
                <i className="bi bi-twitter fs-4"></i>
                <i className="bi bi-telegram fs-4"></i>
                <i className="bi bi-discord fs-4"></i>
                <i className="bi bi-medium fs-4"></i>
                <i className="bi bi-youtube fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
