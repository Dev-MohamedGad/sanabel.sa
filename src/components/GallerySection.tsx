import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
      <section
        id="gallery"
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-[hsl(var(--leaf-light))] to-background relative overflow-hidden"
        style={{ minHeight: "400px" }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 right-4 sm:top-20 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary/10 rounded-full">
                معرض الصور
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight px-2">
              منتجاتنا
              <span className="block text-secondary mt-1 sm:mt-2">الطازجة المجمدة</span>
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full" />
              <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
              جولة بصرية في عالم سنابل - اكتشف جودة منتجاتنا من الخضروات والفواكه المجمدة
            </p>
          </div>

          {/* Gallery Grid */}
          {galleryImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl cursor-pointer aspect-square bg-muted"
                  onClick={() => openLightbox(image.id)}
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image.src}`);
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-end justify-center p-3 sm:p-4 md:p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0">
                      <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-md rounded-full">
                        <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-primary/30 sm:border-transparent sm:group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(34,197,94,0.1)] sm:shadow-[0_0_30px_rgba(34,197,94,0.2)] opacity-100 sm:opacity-0 sm:group-hover:opacity-100" />
                </div>
              ))}
            </div>
          )}

          {galleryImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">لا توجد صور متاحة</p>
            </div>
          )}
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
              className="absolute top-2 right-2 sm:top-4 sm:left-4 z-10 p-2 sm:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="السابق"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 md:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="التالي"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[95vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl max-h-[85vh] sm:max-h-[90vh] mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages
                .filter((img) => img.id === selectedImage)
                .map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl"
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
