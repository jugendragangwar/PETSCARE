import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard = ({
  name,
  category,
  price,
  originalPrice,
  rating,
  image,
  isNew,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "bg-card border overflow-hidden transition-shadow group",
        className
      )}
    >
      {/* Image container with fixed aspect ratio */}
      <div className="aspect-product relative bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            NEW
          </span>
        )}

        {originalPrice && (
          <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
            SALE
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category */}
        <span className="text-xs text-primary font-medium uppercase tracking-wide">
          {category}
        </span>

        {/* Name */}
        <h3 className="text-foreground line-clamp-2 transition-colors">
          {name}
        </h3>

        {/* Price and cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-normal text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-9 w-9"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
