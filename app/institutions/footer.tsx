import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#001A40] bg-[linear-gradient(#ffffff03_1px,transparent_1px),linear-gradient(90deg,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] text-white py-12 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-2 items-center mb-6">
          {/* Footer Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/footer.png"
              alt="Footer Logo"
              width={120}
              height={120}
              className="w-auto max-w-full"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end gap-4 flex-wrap">
            {["facebook", "google", "linkedin", "youtube"].map((platform) => (
              <Link key={platform} href="#" className="rounded-full overflow-hidden w-8 h-8">
                <Image
                  src={`/images/${platform}.png`}
                  alt={platform}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-white/20 mb-8" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <Link href="mailto:career@tickets.com" className="hover:text-white">
                  career@tickets.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span>Address:</span>
                <span>89 KG 14 Ave, Kigali</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Phone:</span>
                <Link href="tel:+250700000" className="hover:text-white">
                  +250700000
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm text-gray-300">
              {["Home", "Program", "About", "Contact Us"].map((item) => (
                <Link key={item} href="#" className="block hover:text-white">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Join our newsletter to keep up to date with us!
            </h3>
            <div className="flex flex-col md:flex-row bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-black placeholder:text-gray-400 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>Copyright © All Rights Reserved SawaPay 2024</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
