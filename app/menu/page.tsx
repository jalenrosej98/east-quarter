export default function Menu() {
  const menuItems = [
    {
      category: "Coffee",
      items: [
        { name: "Espresso", description: "A strong and bold espresso shot", price: "$4.50" },
        { name: "Cappuccino", description: "Perfectly balanced with steamed milk", price: "$5.00" },
        { name: "Latte", description: "Smooth espresso with velvety steamed milk", price: "$5.50" },
        { name: "Flat White", description: "Rich espresso with microfoam", price: "$5.00" },
        { name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$5.50" },
        { name: "Americano", description: "Espresso with hot water", price: "$4.50" },
        { name: "Macchiato", description: "Espresso with a dollop of foam", price: "$4.50" },
        { name: "Cold Brew", description: "Smooth, cold-brewed coffee", price: "$5.00" },
      ]
    },
    {
      category: "Tea",
      items: [
        { name: "English Breakfast", description: "Classic black tea blend", price: "$4.00" },
        { name: "Earl Grey", description: "Black tea with bergamot", price: "$4.00" },
        { name: "Green Tea", description: "Fresh and light green tea", price: "$4.00" },
        { name: "Chamomile", description: "Soothing herbal infusion", price: "$4.00" },
        { name: "Peppermint", description: "Refreshing mint tea", price: "$4.00" },
      ]
    },
    {
      category: "Food",
      items: [
        { name: "Croissant", description: "Buttery, flaky pastry", price: "$4.50" },
        { name: "Muffin", description: "Freshly baked daily", price: "$4.00" },
        { name: "Scone", description: "Traditional with jam & cream", price: "$4.50" },
        { name: "Avocado Toast", description: "Sourdough with smashed avocado", price: "$8.50" },
        { name: "Breakfast Wrap", description: "Egg, bacon, and cheese", price: "$9.00" },
        { name: "Quiche", description: "Daily selection", price: "$7.50" },
        { name: "Salad Bowl", description: "Fresh seasonal ingredients", price: "$10.00" },
      ]
    }
  ];

  return (
    <main className="bg-[#f5f5f0]">
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center justify-center text-white text-center"
        style={{ 
          backgroundImage: 'url(/nathan-dumlao-6VhPY27jdps-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl">Discover our selection of coffee, tea, and delicious treats</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {menuItems.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-[#2c3e1f] mb-8 text-center">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white p-6 rounded-lg shadow-md border border-[#8B4513]/20 hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-w-16 aspect-h-9 mb-4 bg-[#f5f5f0] rounded-md">
                      {/* Image placeholder - replace with actual images later */}
                      <div className="w-full h-48 bg-[#f5f5f0] rounded-md flex items-center justify-center">
                        <span className="text-[#2c3e1f]/50">Image coming soon</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2c3e1f] mb-2">{item.name}</h3>
                    <p className="text-[#2c3e1f]/80 mb-4">{item.description}</p>
                    <p className="text-[#8B4513] font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 