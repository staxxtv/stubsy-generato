import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const navigation = [
    { name: "Paystub Creator", href: "/creator" },
    { name: "W2-Form", href: "/w2" },
    { name: "1099 Form", href: "/1099" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const openLoginModal = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };

  const openSignupModal = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">Bolt Stubs</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="ml-4" onClick={openLoginModal}>
              Login
            </Button>
            <Button onClick={openSignupModal}>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2 px-3">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => {
                  openLoginModal();
                  setIsOpen(false);
                }}
              >
                Login
              </Button>
              <Button 
                className="w-full"
                onClick={() => {
                  openSignupModal();
                  setIsOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        mode={authMode}
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
      />
    </nav>
  );
};

export default Navbar;
