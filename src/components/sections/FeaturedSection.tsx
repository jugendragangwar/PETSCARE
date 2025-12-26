import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredProducts = [
  {
    name: "Premium Beef & Vegetable",
    category: "Dog Food",
    price: 38.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/312jte8L1iL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    name: "Salmon & Tuna Delight",
    category: "Cat Food",
    price: 29.99,
    originalPrice: 35.99,
    rating: 4,
    image:
      "https://m.media-amazon.com/images/I/51ib4eJ6ssL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    name: "Chicken Feast Formula",
    category: "Dog Food",
    price: 32.99,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81PJwMQE8gL._SY450_.jpg",
    isNew: true,
  },
  {
    name: "Premium Beef & Vegetable",
    category: "Dog Food",
    price: 38.99,
    rating: 5,
    image:
      "https://m.media-amazon.com/images/I/312jte8L1iL._SY300_SX300_QL70_FMwebp_.jpg",
    isNew: false,
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className="lg:col-span-4 rounded-2xl overflow-hidden flex flex-col justify-between max-h-[395px] p-6 sm:p-8 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-vector/vector-image-girl-her-beloved-dog_1213699-13213.jpg?w=700')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60 -z-0"></div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary-foreground/20 text-primary-foreground text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
                Best Selling
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4 leading-tight">
                Best Selling
                <br />
                <span className="font-script">Pet Food</span>
              </h3>
              <p className="text-primary-foreground/80 text-sm sm:text-base mb-4 sm:mb-6">
                Up to 40% off on premium quality pet nutrition
              </p>
            </div>

            <div className="relative z-10">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-sm sm:text-base w-full sm:w-auto"
              >
                Shop Collection
              </Button>
            </div>
          </div>

          {/* Product Cards Swiper - Right Side */}
          <div className="lg:col-span-8 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="featured-products-swiper"
            >
              {featuredProducts.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-end py-2 gap-2">
              <button
                className="swiper-button-prev-custom z-10 w-10 h-10 bg-secondary text-primary-foreground shadow-lg flex items-center justify-center"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                className="swiper-button-next-custom z-10 w-10 h-10 bg-secondary text-primary-foreground shadow-lg flex items-center justify-center"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
