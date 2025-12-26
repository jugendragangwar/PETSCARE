import { Button } from "@/components/ui/button";
import Hero from "@/assets/hero.png"

const HeroSection = () => {
  return (
    <section className="min-h-[500px] md:min-h-[600px] bg-accent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-bl-[100px] hidden lg:block" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Premium Quality
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Caring For Your{" "}
              <span className="font-script text-primary block md:inline">
                Pet's Health
              </span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0">
              Discover our premium selection of nutritious pet food, carefully
              crafted to keep your furry friends happy and healthy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center md:justify-start pt-4">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  10K+
                </p>
                <p className="text-sm text-muted-foreground">Happy Pets</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  99%
                </p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero image - fixed aspect ratio for CLS */}
          <div className="overflow-hidden">
            <img
              src={Hero}
              alt="Happy golden retriever"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
