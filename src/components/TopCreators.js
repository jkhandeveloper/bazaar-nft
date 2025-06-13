"use client";
import React from "react";
import Image from "next/image";

const creators = [
  {
    bg: "/images/creator-bg-1.jpg",
    avatar: "/images/avatar-1.png",
    name: "Dmitry Sergushkin",
    creator: "Evolution",
  },
  {
    bg: "/images/creator-bg-2.jpg",
    avatar: "/images/avatar-2.png",
    name: "Dmitry Sergushkin",
    creator: "G-star",
  },
  {
    bg: "/images/creator-bg-3.jpg",
    avatar: "/images/avatar-3.png",
    name: "Dmitry Sergushkin",
    creator: "Sina Mo",
  },
];

export default function TopCreators() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold">
          Top creators in <span className="text-primary">7 days</span>
        </h5>
        <div>
          <button className="btn btn-outline-secondary btn-sm me-2 rounded-circle">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary btn-sm rounded-circle">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="row gy-4">
        {creators.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card shadow rounded-4">
              <div className="position-relative">
                <Image
                  src={item.bg}
                  alt="background"
                  className="card-img-top rounded-top-4"
                  width={600}
                  height={300}
                  style={{ objectFit: "cover", height: "180px" }}
                />
                <div
                  className="position-absolute top-100 start-50 translate-middle"
                  style={{ marginTop: "-32px" }}
                >
                  <Image
                    src={item.avatar}
                    alt="avatar"
                    width={64}
                    height={64}
                    className="rounded-circle border border-white border-3"
                  />
                </div>
              </div>
              <div className="card-body text-center pt-5">
                <h6 className="fw-semibold mb-0">{item.name}</h6>
                <small className="text-muted">
                  Created by{" "}
                  <span className="text-primary">{item.creator}</span>{" "}
                  <i className="bi bi-patch-check-fill text-primary"></i>
                </small>
                <div className="d-flex justify-content-around mt-3 text-muted small">
                  <div>
                    <strong>9.2k</strong>
                    <br />
                    Items
                  </div>
                  <div>
                    <strong>6.5k</strong>
                    <br />
                    Owners
                  </div>
                  <div>
                    <strong>0.234</strong>
                    <br />
                    Floor Price
                  </div>
                  <div>
                    <strong>1.3k</strong>
                    <br />
                    Volume Traded
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
