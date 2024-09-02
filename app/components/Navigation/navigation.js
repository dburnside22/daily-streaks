"use client";

import Link from "next/link";
import "./navigation.css";

const Navigation = () => (
  <nav>
    <ul className="Navigation">
      <li className="Navigation-link">
        <Link href="/">Home</Link>
      </li>
      <li className="Navigation-link">
        <Link href="/about">About</Link>
      </li>
      <li className="Navigation-link">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
