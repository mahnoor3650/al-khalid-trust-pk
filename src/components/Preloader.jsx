import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader-active" className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="preloader-inner relative">
        <div className="preloader-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-theme-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="preloader-img relative z-10">
          <img src="/assets/img/logo/logoo.png" alt="Al-Khalid Trust Pakistan" className="w-32 h-32 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
