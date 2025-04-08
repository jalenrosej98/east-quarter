import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#f5f5f0]">
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[90vh] flex items-center justify-center text-white text-center overflow-hidden"
        style={{ 
          backgroundImage: 'url(/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Savour the Best Coffee & Snacks</h1>
          <p className="text-xl mb-8">Experience rich flavours and delightful treats in Ballarat.</p>
          <Link 
            href="/menu" 
            className="inline-block bg-[#8B4513] hover:bg-[#6B3610] text-white py-3 px-8 rounded-lg transition-colors"
          >
            Explore Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2c3e1f] mb-8">About East Quarter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#8B4513]/20">
              <h3 className="text-xl font-semibold text-[#2c3e1f] mb-4">Our Coffee Selection</h3>
              <p className="text-[#2c3e1f]/80">
                At East Quarter, we pride ourselves on offering an exquisite selection of coffee sourced from the finest beans. Our expert baristas are dedicated to crafting the perfect cup, ensuring each sip is a delight for coffee lovers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#8B4513]/20">
              <h3 className="text-xl font-semibold text-[#2c3e1f] mb-4">Our Tea Selection</h3>
              <p className="text-[#2c3e1f]/80">
                We also offer a carefully curated selection of premium teas, perfect for those who prefer a different kind of warmth. From classic black teas to herbal infusions, we have something for every tea enthusiast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#1a472a] to-[#2c3e1f]">
        <h2 className="text-3xl font-bold text-center text-white mb-8">East Quarter's Finest</h2>
        <p className="text-center text-white/90 mb-12">A Gallery of Our Most Popular Coffee and Tea Selections</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
            <img src="/images/sample.png" alt="Espresso" className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-white">Espresso</h3>
            <p className="text-white/90 mt-2">A strong and bold espresso shot.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
            <img src="/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg" alt="Cappuccino" className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-white">Cappuccino</h3>
            <p className="text-white/90 mt-2">Perfectly balanced with steamed milk.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
            <img src="/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg" alt="Tea Selection" className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-white">Tea Selection</h3>
            <p className="text-white/90 mt-2">Premium teas from around the world.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2c3e1f] mb-4">Questions or Concerns?</h2>
          <p className="text-[#2c3e1f]/80 mb-8">
            Have a comment or a question? Ready to place your order for delivery or pickup? 
            Use our contact form or give us a call and we can get your order ready for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#8B4513] hover:bg-[#6B3610] text-white py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
