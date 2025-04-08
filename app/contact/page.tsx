export default function Contact() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with West Quarter</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#2c3e1f] mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#2c3e1f] p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2c3e1f]">Address</h3>
                      <p className="text-[#2c3e1f]/80">123 Coffee Street, Ballarat VIC 3350</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#2c3e1f] p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.257.845a1.1 1.1 0 00-.44 1.684l1.1 1.1a1.1 1.1 0 001.684-.44l.845-1.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2c3e1f]">Phone</h3>
                      <p className="text-[#2c3e1f]/80">(03) 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#2c3e1f] p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2c3e1f]">Email</h3>
                      <p className="text-[#2c3e1f]/80">hello@westquarter.com.au</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2c3e1f] mb-6">Opening Hours</h2>
                <div className="space-y-2 text-[#2c3e1f]/80">
                  <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-[#8B4513]/20">
              <h2 className="text-3xl font-bold text-[#2c3e1f] mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2c3e1f] font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-[#8B4513]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e1f]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#2c3e1f] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-[#8B4513]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e1f]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#2c3e1f] font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-[#8B4513]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e1f]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8B4513] hover:bg-[#6B3610] text-white py-3 px-8 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 