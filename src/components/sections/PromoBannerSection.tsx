import { Button } from "@/components/ui/button";
import Offimage from "@/assets/Off.png";
import Coupenimage from "@/assets/Coupen.png";

const PromoBannerSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Banner 1 - Healthy Food */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-secondary to-secondary/80 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]">
            <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-center z-10">
              <span className="text-primary font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">
                Premium Quality
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-2 sm:mb-3 leading-tight">
                Healthy Never{" "}
                <span className="font-script text-primary">Tasted</span>
                <br />
                So Good
              </h3>
              <p className="text-secondary-foreground/80 text-xs sm:text-sm mb-3 sm:mb-4 max-w-[180px] sm:max-w-[200px] md:max-w-[220px]">
                Nutritious meals your pets will love
              </p>
              <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5">
                Shop Now
              </Button>
            </div>

            {/* Decorative image */}
            <div className="absolute right-0 bottom-0 w-32 sm:w-40 md:w-48 lg:w-56 opacity-50">
              <img
                src={Offimage}
                alt="OffImage"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Banner 2 - Big Sale */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-primary/80 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]">
            <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-center z-10">
              <span className="text-primary-foreground/80 font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">
                Limited Time Offer
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3 leading-tight">
                Big Sale
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  50% OFF
                </span>
              </h3>
              <p className="text-primary-foreground/80 text-xs sm:text-sm mb-3 sm:mb-4">
                On selected premium pet food
              </p>
              <Button
                variant="outline"
                className="w-fit border-2 border-primary text-primary rounded-full text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5"
              >
                Shop Sale
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48 opacity-50">
              <img
                src={Coupenimage}
                alt="Coupenimage"
                className="w-full h-auto object-contain bg-slate-50 rounded-tl-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerSection;
