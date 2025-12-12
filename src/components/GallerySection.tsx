import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";

// Import all available images
import image0 from "@/assets/0.jpeg";
import image1 from "@/assets/1.jpeg";
import image2 from "@/assets/2.jpeg";
import image3 from "@/assets/3.jpeg";
import image4 from "@/assets/4.jpeg";
import image5 from "@/assets/5.jpeg";
import image6 from "@/assets/6.jpeg";
import image7 from "@/assets/7.jpeg";
import image8 from "@/assets/8.jpeg";
import image9 from "@/assets/9.jpeg";
import image12 from "@/assets/12.jpeg";
import image14 from "@/assets/14.jpg";
import image15 from "@/assets/15.jpeg";
import image16 from "@/assets/16.jpeg";
import image17 from "@/assets/17.jpg";
import image18 from "@/assets/18.jpg";
import image19 from "@/assets/19.jpg";
import image20 from "@/assets/20.jpeg";
import image21 from "@/assets/21.jpeg";

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

const galleryImages: ImageItem[] = [
  { id: 1, src: image0, alt: "فراولة مجمدة سنابل" },
  { id: 2, src: image1, alt: "سبانخ مجمدة طازجة" },
  { id: 3, src: image2, alt: "منتجات سنابل في السوبرماركت" },
  { id: 4, src: image3, alt: "بامية زيرو مجمدة" },
  { id: 5, src: image4, alt: "خضروات مشكلة" },
  { id: 6, src: image5, alt: "بروكلي طازج مجمد" },
  { id: 7, src: image6, alt: "فاصوليا خضراء مجمدة" },
  { id: 8, src: image7, alt: "ذرة حلوة مجمدة" },
  { id: 9, src: image8, alt: "بازلاء خضراء مجمدة" },
  { id: 10, src: image9, alt: "خليط خضروات للشوربة" },
  { id: 11, src: image12, alt: "منتجات سنابل المتنوعة" },
  { id: 12, src: image14, alt: "خضروات مجمدة عالية الجودة" },
  { id: 13, src: image15, alt: "فواكه مجمدة طازجة" },
  { id: 14, src: image16, alt: "منتجات سنابل الطبيعية" },
  { id: 15, src: image17, alt: "خضروات ورقية مجمدة" },
  { id: 16, src: image18, alt: "تشكيلة منتجات سنابل" },
  { id: 17, src: image19, alt: "خضروات طازجة مجمدة" },
  { id: 18, src: image20, alt: "منتجات سنابل الممتازة" },
  { id: 19, src: image21, alt: "فواكه وخضروات مجمدة" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    } else {
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  return (
    <>
      <section id="gallery" ref={ref} className="py-24 bg-gradient-to-b from-background via-leaf-light to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider px-4 py-2 bg-secondary/10 rounded-full">
                معرض الصور
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              منتجاتنا
              <span className="block text-secondary mt-2">الطازجة المجمدة</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              جولة بصرية في عالم سنابل - اكتشف جودة منتجاتنا من الخضروات والفواكه المجمدة
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
                onClick={() => openLightbox(image.id)}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-full">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(34,197,94,0.2)] opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 left-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="إغلاق"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95"
              aria-label="السابق"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95"
              aria-label="التالي"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages
                .filter((img) => img.id === selectedImage)
                .map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-2xl shadow-2xl"
                    />
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
