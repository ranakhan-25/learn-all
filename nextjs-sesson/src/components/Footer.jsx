import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyLogo</h2>
          <p className="text-sm text-gray-400">
            Building modern web applications with clean UI and great user experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white">Blogs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social / Actions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>

          <div className="mt-6">
            <Link
              href="/signup"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Join Now
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MyLogo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;