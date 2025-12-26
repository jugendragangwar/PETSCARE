import ProductCard from "@/components/ProductCard";

const bestSellerProducts = [
  {
    name: "Premium Dog Food - Chicken & Rice",
    category: "Dog Food",
    price: 29.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/312jte8L1iL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    name: "Organic Cat Treats - Salmon Flavor",
    category: "Cat Food",
    price: 15.99,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/412hSia8h6L._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: true,
  },
  {
    name: "Bird Seed Mix - Tropical Blend",
    category: "Bird Food",
    price: 12.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/51ib4eJ6ssL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    name: "Rabbit Pellets - Garden Fresh",
    category: "Rabbit Food",
    price: 18.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81PJwMQE8gL._SY450_.jpg",
    isNew: false,
  },
];

const BestSellerSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-script text-foreground mb-2">
              Best Seller Products
            </h2>
            <p className="text-muted-foreground">
              Our most loved products by pet parents
            </p>
          </div>

          <a href="#" className="text-primary font-medium hover:underline">
            View All Products →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellerProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
