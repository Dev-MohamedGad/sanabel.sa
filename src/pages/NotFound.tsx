import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Leaf, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-primary/10 rounded-full">
            <Leaf className="w-16 h-16 text-primary" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        
        {/* Message */}
        <p className="mb-2 text-2xl font-semibold text-foreground">الصفحة غير موجودة</p>
        <p className="mb-8 text-muted-foreground">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        
        {/* Back Button */}
        <Link to="/">
          <Button className="gap-2 px-8 py-6 text-lg rounded-full">
            <Home className="w-5 h-5" />
            العودة للرئيسية
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
