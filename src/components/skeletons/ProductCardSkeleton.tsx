import { cn } from "@/lib/utils";

interface ProductCardSkeletonProps {
  className?: string;
}

const ProductCardSkeleton = ({ className }: ProductCardSkeletonProps) => {
  return (
    <div className={cn("bg-card rounded-lg overflow-hidden shadow-sm", className)}>
      <div className="aspect-product skeleton-shimmer" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-16 rounded skeleton-shimmer" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded skeleton-shimmer" />
          <div className="h-4 w-3/4 rounded skeleton-shimmer" />
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-4 rounded skeleton-shimmer" />
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 w-16 rounded skeleton-shimmer" />
          <div className="h-8 w-8 rounded-full skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;