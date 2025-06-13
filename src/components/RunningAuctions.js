"use client";
import Image from "next/image";
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

const nftList = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  title: "#0001",
  image: `/images/nft${(i % 5) + 1}.jpg`,
  price: "0.056",
  highestBid: 1,
  hasBuyNow: i === 3,
  timer: "08:10:00",
}));

export default function RunningAuctions() {
  return (
    <section className="px-4 py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold">Running auctions</h5>
        <button className="btn btn-sm btn-outline-secondary">See All</button>
      </div>

      <div className="row g-4">
        {nftList.map((nft, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="position-relative">
                <Image
                  src={nft.image}
                  alt={nft.title}
                  width={400}
                  height={400}
                  className="card-img-top rounded-top-4"
                />
                <span className="position-absolute top-0 start-0 m-2 badge bg-primary rounded-pill px-2 py-1 small">
                  ⏱ {nft.timer}
                </span>
                <span className="position-absolute top-0 end-0 m-2 text-dark">
                  <FaRegHeart />
                </span>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Image
                      key={v}
                      src="/images/avatar.png"
                      alt="Bidder"
                      width={24}
                      height={24}
                      className="rounded-circle border border-white"
                      style={{
                        marginLeft: v > 1 ? -12 : 0,
                        zIndex: 6 - v,
                        background: "#fff",
                      }}
                    />
                  ))}
                </div>
                <h6 className="mb-1 fw-semibold">{nft.title}</h6>
                <small className="text-muted d-block mb-2">
                  Highest Bid ({nft.highestBid})
                </small>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Price</span>
                  <span className="text-primary fw-semibold d-flex align-items-center gap-1">
                    {nft.hasBuyNow && (
                      <span className="me-2 text-decoration-underline text-primary">
                        Buy Now
                      </span>
                    )}
                    {nft.price} <FaEthereum />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
