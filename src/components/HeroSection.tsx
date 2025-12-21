import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingBasket } from "lucide-react";
import heroImage from "@/assets/2.jpeg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 md:pt-32">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/50 z-10" />
        <img
          src={heroImage}
          alt="منتجات سنابل للخضروات المجمدة"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Logo/Brand Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Leaf className="w-12 h-12 text-accent" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
        >
          سنابل
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 sm:mb-4 font-medium"
        >
          للخضروات والفواكه المجمدة
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
        >
          جودة عالية • نضارة دائمة • أسعار منافسة
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#menu")}
            className="bg-white text-primary font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/95 transition-all hover:scale-105 border-2 border-white group"
          >
            <ShoppingBasket className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            منتجاتنا
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="bg-secondary hover:bg-secondary/90 text-white border-2 border-secondary/50 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          >
            تواصل معنا
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
