import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Home, User, ShoppingBag, Image, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "الرئيسية", href: "#hero", icon: Home },
    { label: "من نحن", href: "#about", icon: User },
    { label: "منتجاتنا", href: "#menu", icon: ShoppingBag },
    { label: "معرض الصور", href: "#gallery", icon: Image },
    { label: "تواصل معنا", href: "#contact", icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-lg text-primary">سنابل</h2>
              <p className="text-xs text-muted-foreground">Sanabel</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 px-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center justify-end w-full px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all font-medium group"
                  >
                    <span className="text-lg">{item.label}</span>
                    <item.icon className="w-5 h-5 ml-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
