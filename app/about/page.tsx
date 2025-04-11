export default function About() {
  return (
    <main className="bg-gradient-to-br from-[#1a472a] to-[#2c3e1f]">
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center justify-center text-white text-center"
        style={{ 
          backgroundImage: 'url(https://i.ibb.co/Xxh1Tm9x/coffee-boss.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About East Quarter</h1>
          <p className="text-xl">Our Story, Our Passion</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
                <p className="text-white/90 mb-4">
                  East Quarter began as a dream to create a space where coffee lovers could experience the perfect blend of quality, comfort, and community. Founded in 2023, we've grown from a small coffee bar to a beloved destination in Ballarat.
                </p>
                <p className="text-white/90 mb-4">
                  Our founder, a passionate coffee enthusiast with over 15 years of experience in the industry, carefully selects each bean and trains our baristas to craft the perfect cup every time.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Quality: We source only the finest coffee beans from sustainable farms worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Community: We're more than just a coffee shop - we're a gathering place for friends and neighbors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sustainability: We're committed to eco-friendly practices and supporting local producers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Innovation: Constantly exploring new brewing methods and flavor combinations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="sticky top-8">
              <img 
                src="https://i.ibb.co/Xxh1Tm9x/coffee-boss.jpg" 
                alt="East Quarter Coffee Bar" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Philosophy Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2c3e1f] mb-6 text-center">Our Coffee Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f0] p-6 rounded-lg shadow-md border border-[#8B4513]/20">
              <h3 className="text-xl font-semibold text-[#2c3e1f] mb-4">Bean Selection</h3>
              <p className="text-[#2c3e1f]/80">
                We work directly with farmers to source premium Arabica beans, ensuring fair trade practices and exceptional quality.
              </p>
            </div>
            <div className="bg-[#f5f5f0] p-6 rounded-lg shadow-md border border-[#8B4513]/20">
              <h3 className="text-xl font-semibold text-[#2c3e1f] mb-4">Brewing Excellence</h3>
              <p className="text-[#2c3e1f]/80">
                Our baristas are trained in various brewing methods, from traditional espresso to modern pour-over techniques.
              </p>
            </div>
            <div className="bg-[#f5f5f0] p-6 rounded-lg shadow-md border border-[#8B4513]/20">
              <h3 className="text-xl font-semibold text-[#2c3e1f] mb-4">Customer Experience</h3>
              <p className="text-[#2c3e1f]/80">
                Every visit is an opportunity to create memorable moments and share our passion for great coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 