"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Check, Power } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data, isPending } = useSession()
  
  if (isPending) {
    return <p>Loading...</p>
  }

  const user = data?.user;
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/blogs" className="hover:text-blue-600">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">

          

          {
            user ? <div>
              <button onClick={()=>signOut()}>LogOut</button>
            </div> :  <div><Link href="/signin">Sign In</Link></div>
          }

          
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>

          <Switch
            onClick={() =>
              setTheme((theme) => (theme == "dark" ? "light" : "dark"))
            }
          >
            {({ isSelected }) => (
              <>
                <Switch.Control
                  className={`h-7.75 w-12.75 bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                >
                  <Switch.Thumb
                    className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                  >
                    <Switch.Icon>
                      {isSelected ? (
                        <Check className="size-4 text-cyan-600" />
                      ) : (
                        <Power className="size-4 text-blue-600" />
                      )}
                    </Switch.Icon>
                  </Switch.Thumb>
                </Switch.Control>
              </>
            )}
          </Switch>

          

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>


      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <div className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <Link
              href="/signin"
              className="w-full px-4 py-2 border rounded-lg hover:bg-gray-100 text-center text-black"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            >
              Sign Up
            </Link>

            <Switch
              onClick={() =>
                setTheme((theme) => (theme == "dark" ? "light" : "dark"))
              }
            >
              {({ isSelected }) => (
                <>
                  <Switch.Control
                    className={`h-7.75 w-12.75 bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                  >
                    <Switch.Thumb
                      className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                    >
                      <Switch.Icon>
                        {isSelected ? (
                          <Check className="size-4 text-cyan-600" />
                        ) : (
                          <Power className="size-4 text-blue-600" />
                        )}
                      </Switch.Icon>
                    </Switch.Thumb>
                  </Switch.Control>
                </>
              )}
            </Switch>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
