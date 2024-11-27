"use client";

import { useState } from "react";
import Link from "next/link";
import { Dropdown } from "./DropDown";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  { label: "Technology", href: "/category/technology" },
  { label: "Design", href: "/category/design" },
  { label: "Business", href: "/category/business" },
  { label: "Marketing", href: "/category/marketing" },
];

export function Header() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
    setIsSignInOpen(false);
  };

  return (
    <header className="bg-indigo-800 text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-bold text-white hover:text-indigo-200 transition-colors"
            >
              ModernBlog
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-white hover:text-indigo-200 hover:bg-indigo-700 px-3 py-2 rounded-md transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Dropdown label="Categories" items={categories} />
            <button
              onClick={() => setIsSignInOpen(true)}
              className="px-4 py-2 bg-white text-indigo-800 rounded-md hover:bg-indigo-100 transition-colors transform hover:scale-105 shadow-md"
            >
              Sign In
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Dropdown label="Categories" items={categories} />
          <button
            onClick={() => {
              setIsSignInOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-indigo-700 hover:text-white rounded-md"
          >
            Sign In
          </button>
        </div>
      </div>

      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-indigo-800">Sign In</h2>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsSignInOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
