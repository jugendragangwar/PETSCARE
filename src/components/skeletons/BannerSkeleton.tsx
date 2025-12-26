import { cn } from "@/lib/utils";

interface BannerSkeletonProps {
  className?: string;
}

const BannerSkeleton = ({ className }: BannerSkeletonProps) => {
  return (
    <div className={cn("aspect-banner rounded-lg skeleton-shimmer", className)} />
  );
};

export default BannerSkeleton;