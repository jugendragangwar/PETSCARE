import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import NewsLetter from "@/assets/NewsLetter.png";

const NewsletterSection = () => {
  return (
    <section className="py-12 md:py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                <Mail className="h-4 w-4" />
                Newsletter
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Get 20% Off Your
                <br />
                <span className="font-script text-primary">First Order</span>
              </h2>

              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and receive exclusive offers, pet
                care tips, and early access to new products.
              </p>

              {/* Email form */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                >
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>

            {/* Decorative image */}
            <div className="hidden md:flex justify-end">
              <div className="">
                <img
                  src={NewsLetter}
                  alt="Newsletter"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
