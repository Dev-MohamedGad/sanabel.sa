import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Truck, ThermometerSnowflake, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/1.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: ThermometerSnowflake,
      title: "تجميد سريع",
      description: "تقنية IQF للحفاظ على النضارة",
    },
    {
      icon: ShieldCheck,
      title: "جودة مضمونة",
      description: "معايير صارمة للجودة والسلامة",
    },
    {
      icon: Truck,
      title: "توزيع واسع",
      description: "شبكة توزيع تغطي المملكة",
    },
    {
      icon: Award,
      title: "منتجات متميزة",
      description: "أفضل المحاصيل المختارة بعناية",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 md:py-20 bg-leaf-light">
      <div className="container mx-auto px-4">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            تعرف علينا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            من نحن
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="منتجات سنابل للخضروات المجمدة"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-primary font-bold text-sm">جودة عالية</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground">
              <span className="font-bold text-primary text-2xl">سنابل</span> هي علامة تجارية رائدة في مجال الخضروات والفواكه المجمدة في المملكة العربية السعودية.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              نلتزم بتقديم منتجات عالية الجودة، مختارة بعناية من أفضل المزارع، ومعالجة بأحدث تقنيات التجميد السريع (IQF) للحفاظ على القيمة الغذائية والنضارة.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              منتجاتنا تصل إلى موائدكم بأعلى معايير الجودة والسلامة الغذائية، لتوفر لكم خضروات وفواكه طازجة على مدار السنة.
            </p>

            {/* Stats */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">سنة خبرة</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">منتج متنوع</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">جودة مضمونة</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
