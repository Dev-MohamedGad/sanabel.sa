import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, Mail, Building } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            نحن هنا لخدمتك
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            تواصل معنا
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            نسعد بتواصلكم واستفساراتكم حول منتجاتنا
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Phone/WhatsApp */}
            <div className="flex gap-4 items-start p-6 bg-leaf-light rounded-2xl text-foreground hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary rounded-full">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-primary mb-2">الهاتف / واتساب</h3>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/966546715962"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-secondary transition-colors flex items-center gap-2"
                    dir="ltr"
                  >
                    +966 54 671 5962
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/966570471099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-secondary transition-colors flex items-center gap-2"
                    dir="ltr"
                  >
                    +966 57 047 1099
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex gap-4 items-start p-6 bg-leaf-light rounded-2xl text-foreground hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary rounded-full">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">عن الشركة</h3>
                <p className="text-foreground mb-1">سنابل للخضروات والفواكه المجمدة</p>
                <p className="text-muted-foreground text-sm">Sanabel - Frozen Vegetables & Fruits</p>
              </div>
            </div>

            {/* Location - with Schema.org microdata */}
            <div
              className="flex gap-4 items-start p-6 bg-leaf-light rounded-2xl text-foreground hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="p-3 bg-primary rounded-full">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الموقع</h3>
                <p className="text-foreground mb-1" itemProp="streetAddress">
                  شارع العريضة، مبنى 7788
                </p>
                <p className="text-foreground mb-1">
                  <span itemProp="addressLocality">حي اشبيلية، الرياض</span>
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  الرمز البريدي: <span itemProp="postalCode">13226</span>
                </p>
                <p className="text-muted-foreground text-sm mb-2" itemProp="addressCountry">
                  المملكة العربية السعودية
                </p>
                <a
                  href="https://maps.app.goo.gl/DRKFq4v6zqJCEHX67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline flex items-center gap-1 text-sm font-medium"
                >
                  عرض على الخريطة
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4 items-start p-6 bg-leaf-light rounded-2xl text-foreground hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary rounded-full">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">ساعات العمل</h3>
                <p className="text-foreground">8:00 صباحاً - 6:00 مساءً</p>
                <p className="text-muted-foreground text-sm">من السبت إلى الخميس</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl text-foreground text-center"
            >
              <h3 className="font-bold text-xl text-primary mb-4">تواصل معنا الآن</h3>
              <p className="text-muted-foreground mb-6">
                للاستفسار عن المنتجات أو طلب عروض الأسعار
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/966546715962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg font-semibold text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>واتساب</span>
                </a>
                <a
                  href="mailto:info@sanabel.com"
                  className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform shadow-lg font-semibold text-lg"
                >
                  <Mail className="w-6 h-6" />
                  <span>البريد الإلكتروني</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1!2d46.6543!3d24.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ0LjQiTiA0NsKwMzknMTUuNiJF!5e0!3m2!1sar!2ssa!4v1234567890!5m2!1sar!2ssa"
            width="100%"
            height="300"
            className="sm:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع سنابل للخضروات المجمدة"
          />
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/DRKFq4v6zqJCEHX67"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              فتح في Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
