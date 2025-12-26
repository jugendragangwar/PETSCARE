import { cn } from "@/lib/utils";

interface CategorySkeletonProps {
  className?: string;
}

const CategorySkeleton = ({ className }: CategorySkeletonProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full skeleton-shimmer" />
      <div className="h-4 w-20 rounded skeleton-shimmer" />
    </div>
  );
};

export default CategorySkeleton;