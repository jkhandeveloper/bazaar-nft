// components/NFTGrid.js
"use client";
import React from "react";
import Image from "next/image";
import styles from "@/styles/NFTGrid.module.css";

const imageUrls = [
  "/images/nft4.jpg",
  "/images/nft5.jpg",
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
];

export default function NFTGrid() {
  const columnCount = 5;
  const columns = Array.from({ length: columnCount }, () => []);

  imageUrls.forEach((url, index) => {
    columns[index % columnCount].push(url);
  });

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.gridContainer}>
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`${styles.nftColumn} ${styles[`offset${colIndex}`]}`}
          >
            {column.map((img, idx) => (
              <div key={idx} className="mb-3">
                <Image
                  src={img}
                  alt={`NFT ${idx}`}
                  width={180}
                  height={200}
                  className="rounded img-fluid"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
