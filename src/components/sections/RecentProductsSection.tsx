import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const tabs = ["All", "Dog Food", "Cat Food", "Bird Food", "Rabbit Food"];

const recentProducts = [
  {
    name: "Wellness Core Grain-Free",
    category: "Dog Food",
    price: 42.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/312jte8L1iL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: true,
  },
  {
    name: "Blue Buffalo Tastefuls",
    category: "Cat Food",
    price: 24.99,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/412hSia8h6L._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: true,
  },
  {
    name: "Kaytee Fiesta Parakeet",
    category: "Bird Food",
    price: 16.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/51ib4eJ6ssL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    name: "Oxbow Essentials Adult",
    category: "Rabbit Food",
    price: 21.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81PJwMQE8gL._SY450_.jpg",
    isNew: true,
  },
  {
    name: "Royal Canin Size Health",
    category: "Dog Food",
    price: 58.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/41LZQX4bUzL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    name: "Purina Pro Plan Savor",
    category: "Cat Food",
    price: 36.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71L3T9luDOL._SY450_.jpg",
    isNew: false,
  },
  {
    name: "Wild Harvest Daily Blend",
    category: "Bird Food",
    price: 11.99,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/41+NEC8mSYL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: true,
  },
  {
    name: "Small Pet Select Timothy Hay",
    category: "Rabbit Food",
    price: 29.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/41Jq9HYV2-L._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
];

const RecentProductsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? recentProducts
      : recentProducts.filter((p) => p.category === activeTab);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-script text-foreground mb-3">
            Recently Added Products
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Check out our latest arrivals
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-colors text-sm md:text-base",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProductsSection;
