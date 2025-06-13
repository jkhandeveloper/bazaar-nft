"use client";
import TopCollections from "@/components/TopCollections";
import RunningAuctions from "@/components/RunningAuctions";
import PopularCollections from "@/components/PopularCollections";
import TopCreators from "@/components/TopCreators";
import BazaarIntro from "@/components/BazaarIntro";
import MarketplaceStats from "@/components/MarketplaceStats";
import CreateAndSell from "@/components/CreateAndSell";
import BackedAndNewsletter from "@/components/BackedAndNewsletter";
import Footer from "@/components/Footer";
import NFTGrid from "@/components/NFTGrid";

export default function HomePage() {
  return (
    <>
      <main className="d-flex">
        {/* Left Section */}
        <div className="p-5 flex-grow-1 bg-light text-start">
          <h6 className="text-primary">NFT MARKETPLACE</h6>
          <h1 className="fw-bold display-5">Start YOUR NFT JOURNEY HERE</h1>
          <p className="text-muted mt-3">
            Our marketplace is the world's first largest NFT market for
            independent creators worldwide.
          </p>
          <div className="mt-4">
            <button className="btn btn-primary me-2">Explore</button>
            <button className="btn btn-outline-primary">Create</button>
          </div>
          <div className="mt-3">
            <a href="#" className="text-decoration-none text-primary">
              ➜ Learn more about Bazaar
            </a>
          </div>
        </div>

        {/* Right Section: NFT Image Grid */}
        <NFTGrid />
      </main>
      <div>
        <TopCollections />
      </div>
      <div>
        <RunningAuctions />
      </div>
      <div>
        <PopularCollections />
      </div>
      <div>
        <TopCreators />
      </div>
      <div>
        <BazaarIntro />
      </div>
      <div>
        <MarketplaceStats />
      </div>
      <div>
        <CreateAndSell />
      </div>
      <div>
        <BackedAndNewsletter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
