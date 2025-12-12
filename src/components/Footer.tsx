import { MessageCircle, Leaf, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="p-3 bg-white/10 rounded-full">
              <Leaf className="w-10 h-10 text-accent" />
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-bold text-2xl mb-1">سنابل</h3>
              <p className="text-primary-foreground/80 text-sm">Sanabel</p>
              <p className="text-primary-foreground/60 text-xs mt-1">للخضروات والفواكه المجمدة</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">تواصل معنا</p>
            <div className="flex flex-col items-center gap-3 mb-4">
              <a
                href="tel:+966545173492"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+966 54 517 3492</span>
              </a>
              <address className="not-italic text-primary-foreground/80 text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>حي اشبيلية، الرياض 13226</span>
                </div>
                <div className="text-primary-foreground/60 text-xs mr-6">
                  المملكة العربية السعودية
                </div>
              </address>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/966545173492"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="واتساب"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-4">من نحن</p>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              سنابل هي علامة تجارية رائدة في مجال الخضروات والفواكه المجمدة، نقدم منتجات عالية الجودة بأحدث تقنيات التجميد للحفاظ على النضارة والقيمة الغذائية.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} سنابل - Sanabel | جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
