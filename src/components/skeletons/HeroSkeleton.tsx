const HeroSkeleton = () => {
  return (
    <section className="min-h-[500px] md:min-h-[600px] bg-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="h-8 w-32 rounded skeleton-shimmer" />
            <div className="space-y-3">
              <div className="h-12 w-full rounded skeleton-shimmer" />
              <div className="h-12 w-3/4 rounded skeleton-shimmer" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full rounded skeleton-shimmer" />
              <div className="h-4 w-2/3 rounded skeleton-shimmer" />
            </div>
            <div className="h-12 w-32 rounded-full skeleton-shimmer" />
          </div>
          <div className="aspect-hero rounded-lg skeleton-shimmer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;