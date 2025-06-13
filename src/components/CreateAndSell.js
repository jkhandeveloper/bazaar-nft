"use client";
import React from "react";
import Image from "next/image";

export default function CreateAndSell() {
  const steps = [
    {
      title: "Connect your wallet",
      icon: "/images/wallet.png",
      text: "Use Trust Wallet or MetaMask to connect to the app. Once you’ve set up your wallet of choice, connect it by clicking the wallet icon in the top right corner.",
    },
    {
      title: "Create your collection",
      icon: "/images/collection.png",
      text: "Use Trust Wallet or MetaMask to connect to the app. Once you’ve set up your wallet of choice, connect it by clicking the wallet icon in the top right corner.",
    },
    {
      title: "Add your NFTs",
      icon: "/images/nft.png",
      text: "Use Trust Wallet or MetaMask to connect to the app. Once you’ve set up your wallet of choice, connect it by clicking the wallet icon in the top right corner.",
    },
    {
      title: "List them for sale",
      icon: "/images/sale.png",
      text: "Use Trust Wallet or MetaMask to connect to the app. Once you’ve set up your wallet of choice, connect it by clicking the wallet icon in the top right corner.",
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-5">How to create and sell NFT?</h2>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="mb-3">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </div>
              <h5 className="fw-semibold">{step.title}</h5>
              <p className="text-muted small">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
