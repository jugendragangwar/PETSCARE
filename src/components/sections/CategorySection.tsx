const categories = [
  { name: "Bird Food", image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=200&h=200&fit=crop", color: "bg-blue-100" },
  { name: "Cat Food", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop", color: "bg-pink-100" },
  { name: "Dog Food", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop", color: "bg-orange-100" },
  { name: "Rabbit Food", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=200&h=200&fit=crop", color: "bg-green-100" },
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-bold font-script text-foreground mb-3">
            Browse By Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto ">
            Find the perfect food for your beloved pets
          </p>
        </div>
        
        <div className="flex justify-around flex-wrap gap-6 md:gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group flex flex-col items-center gap-4"
            >
              {/* Category circle with fixed aspect ratio */}
              <div 
                className={`aspect-square w-24 h-24 md:w-32 md:h-32  rounded-full ${category.color} overflow-hidden transition-transform group-hover:scale-110 shadow-lg`}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;