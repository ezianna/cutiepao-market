import React from "react";
import Header from "../components/Header";
import Categorynav from "../components/Categorynav";
import HeroBanner from "../components/HeroBanner";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

// Mock product data
const flashSaleProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB - Space Black",
    price: 18000000,
    originalPrice: 20000000,
    rating: 4.8,
    reviews: 1245,
    image: "https://images.unsplash.com/photo-1675953935267-e039f13ddd79?...",
    discount: 10,
    seller: "Tech Store Official",
    location: "Jakarta Pusat",
  },
  {
    id: 2,
    name: "MacBook Air M2 13-inch - Midnight",
    price: 16500000,
    originalPrice: 18500000,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1613398773682-9e272a85f203?...",
    discount: 11,
    seller: "Apple Authorized Store",
    location: "Jakarta Selatan",
  },
];

const popularProducts = [
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra 512GB",
    price: 19500000,
    rating: 4.8,
    reviews: 956,
    image: "https://images.unsplash.com/photo-1675953935267-e039f13ddd79?...",
    seller: "Samsung Official Store",
    location: "Jakarta Pusat",
  },
  {
    id: 7,
    name: "Dell XPS 13 Plus - Platinum Silver",
    price: 22000000,
    rating: 4.7,
    reviews: 543,
    image: "https://images.unsplash.com/photo-1613398773682-9e272a85f203?...",
    seller: "Dell Official",
    location: "Jakarta Selatan",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Categorynav />

      <main>
        <HeroBanner />

        {/* Flash Sale */}
        <FeaturedSection
          title="Flash Sale"
          subtitle="Limited time offers with huge discounts"
          products={flashSaleProducts}
        />

        {/* Popular Products */}
        <FeaturedSection
          title="Popular Products"
          subtitle="Most loved items by our customers"
          products={popularProducts}
        />

        {/* New Arrivals */}
        <FeaturedSection
          title="New Arrivals"
          subtitle="Latest products just for you"
          products={flashSaleProducts.slice(0, 4)}
        />
      </main>
    </div>
  );
}

export default App;
