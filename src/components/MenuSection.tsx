import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Import available images
import image0 from "@/assets/0.jpeg";
import image1 from "@/assets/1.jpeg";
import image3 from "@/assets/3.jpeg";
import image4 from "@/assets/4.jpeg";
import image5 from "@/assets/5.jpeg";
import image6 from "@/assets/6.jpeg";
import image7 from "@/assets/7.jpeg";
import image8 from "@/assets/8.jpeg";
import image9 from "@/assets/9.jpeg";

const menuItems = [
  {
    id: 1,
    name: "فراولة مجمدة",
    description: "فراولة طازجة مجمدة بتقنية IQF للحفاظ على النكهة الطبيعية والقيمة الغذائية",
    image: image0,
    category: "فواكه",
  },
  {
    id: 2,
    name: "سبانخ مجمدة",
    description: "سبانخ طازجة مجمدة غنية بالحديد والفيتامينات، مثالية للطبخ الصحي",
    image: image1,
    category: "خضروات ورقية",
  },
  {
    id: 3,
    name: "بامية زيرو",
    description: "بامية صغيرة مختارة بعناية، مجمدة للحفاظ على الطعم الأصلي",
    image: image3,
    category: "خضروات",
  },
  {
    id: 4,
    name: "خضروات مشكلة",
    description: "مزيج متنوع من الخضروات الطازجة المجمدة، جاهزة للطبخ",
    image: image4,
    category: "خضروات",
  },
  {
    id: 5,
    name: "بروكلي طازج",
    description: "بروكلي أخضر مجمد، غني بالألياف ومضادات الأكسدة",
    image: image5,
    category: "خضروات",
  },
  {
    id: 6,
    name: "فاصوليا خضراء",
    description: "فاصوليا خضراء مقطعة ومجمدة، سهلة التحضير وغنية بالبروتين",
    image: image6,
    category: "خضروات",
  },
  {
    id: 7,
    name: "ذرة حلوة",
    description: "حبوب ذرة حلوة مجمدة، مثالية للسلطات والأطباق المتنوعة",
    image: image7,
    category: "خضروات",
  },
  {
    id: 8,
    name: "بازلاء خضراء",
    description: "بازلاء طازجة مجمدة، غنية بالبروتين النباتي والفيتامينات",
    image: image8,
    category: "خضروات",
  },
  {
    id: 9,
    name: "خليط شوربة",
    description: "مزيج خضروات مثالي لتحضير الشوربات الصحية واللذيذة",
    image: image9,
    category: "مشكل",
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <section id="menu" ref={ref} className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            تشكيلة واسعة
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            منتجاتنا
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            تشكيلة متنوعة من الخضروات والفواكه المجمدة بأعلى معايير الجودة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full bg-card">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full shadow-lg z-10">
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
