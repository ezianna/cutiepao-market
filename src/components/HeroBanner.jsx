
function HeroBanner() {
  const banners = [
    {
      id: 1,
      title: "Mega Electronics Sale",
      subtitle: "Up to 70% off on smartphones, laptops & more",
      bgColor: "bg-gradient-to-r from-blue-600 to-purple-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Fashion Week Special",
      subtitle: "Trendy clothes with exclusive discounts",
      bgColor: "bg-gradient-to-r from-pink-500 to-rose-500",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Home Essentials",
      subtitle: "Transform your space with our deals",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      textColor: "text-white"
    }
  ];
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main banner */}
        <div className="lg:col-span-3 relative">
          <Card className={`${banners[0].bgColor} ${banners[0].textColor} p-8 h-64 flex items-center justify-between overflow-hidden`}>
            <div className="z-10">
              <h2 className="text-3xl font-bold mb-2">{banners[0].title}</h2>
              <p className="text-lg mb-4 opacity-90">{banners[0].subtitle}</p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100" onClick={() => navigate("/products") }>
                Shop Now
              </Button>
            </div>
            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => alert("Banner sebelumnya") }>
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => alert("Banner selanjutnya") }>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            {/* Banner indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {banners.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>
        {/* Side banners */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 h-32 cursor-pointer" onClick={() => navigate("/flash-sale") }>
            <h3 className="font-semibold mb-1">Flash Sale</h3>
            <p className="text-sm opacity-90">Limited time offers</p>
          </Card>
          <Card className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 h-32 cursor-pointer" onClick={() => navigate("/new-arrivals") }>
            <h3 className="font-semibold mb-1">New Arrivals</h3>
            <p className="text-sm opacity-90">Latest products</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;