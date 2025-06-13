"use client";
import Link from "next/link";
import { FaUserCircle, FaWallet, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom flex-wrap gap-3">
      {/* Logo */}
      <div className="fw-bold fs-4">
        <Link href="/" className="text-decoration-none text-dark">
          BAZAAR
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-grow-1 d-flex justify-content-center">
        <div className="position-relative w-75" style={{ maxWidth: 400 }}>
          <FaSearch
            className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
            size={14}
          />
          <input
            type="text"
            className="form-control ps-5 rounded-pill"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="d-none d-md-flex gap-4">
        <Link href="/explore" className="text-decoration-none text-dark">
          Explore
        </Link>
        <Link href="/stats" className="text-decoration-none text-dark">
          Stats
        </Link>
        <Link href="/resources" className="text-decoration-none text-dark">
          Resources
        </Link>
        <Link href="/create" className="text-decoration-none text-dark">
          Create
        </Link>
      </div>

      {/* Icons */}
      <div className="d-flex gap-3">
        <FaUserCircle size={22} title="Login" />
        <FaWallet size={22} title="Wallet" />
      </div>
    </nav>
  );
}
