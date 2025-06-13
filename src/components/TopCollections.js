"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";

const sampleData = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: "Mutant Ape",
  image: `/images/nft${(i % 5) + 1}.jpg`,
  price: "3.38",
  value: "6,308.76",
  change: [12.56, -38.65, 22.65, 38.56][i % 4] * (i % 3 === 0 ? -1 : 1),
}));

export default function TopCollections() {
  const [active, setActive] = useState("All");

  const networks = ["All", "Ethereum", "Flow", "Polygon", "See All"];

  return (
    <section className="py-5 px-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <h5 className="fw-bold">
          Top collections over <span className="text-primary">last 7 days</span>
          <span className="ms-1 dropdown-toggle small" role="button" />
        </h5>

        <div className="d-flex flex-wrap gap-2">
          {networks.map((net) => (
            <button
              key={net}
              className={`btn btn-sm ${
                active === net
                  ? "btn-primary text-white"
                  : "btn-outline-light text-dark border"
              }`}
              onClick={() => setActive(net)}
            >
              {net}
            </button>
          ))}
        </div>
      </div>

      {/* Rankings */}
      <div className="row">
        {[0, 1, 2].map((col) => (
          <div key={col} className="col-12 col-md-4 d-flex flex-column gap-3">
            {sampleData.slice(col * 5, col * 5 + 5).map((item) => (
              <div key={item.id} className="d-flex align-items-center gap-3">
                <span className="fw-bold text-muted" style={{ width: 20 }}>
                  {item.id}
                </span>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{item.name}</div>
                  <div className="small text-muted d-flex align-items-center gap-1">
                    Floor Price <FaEthereum className="ms-1" /> {item.price}
                  </div>
                </div>
                <div
                  className={`fw-semibold small ${
                    item.change > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {item.change > 0 ? "+" : ""}
                  {item.change.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
