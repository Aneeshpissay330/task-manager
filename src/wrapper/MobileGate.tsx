import { useEffect, useState } from "react";

const MobileGate = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen text-center p-6 bg-gray-50">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Mobile View Not Supported
          </h1>
          <p className="text-gray-700 mb-2">
            This web application is optimized for desktop and large screen usage.
          </p>
          <p className="text-gray-700 mb-4">
            For mobile users, you can access the same features through our Android app on the Play Store.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.yourapp.package" // Replace with your actual app link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="w-44 mx-auto"
            />
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileGate;
