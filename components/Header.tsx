
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0a1f36] to-[#102E50] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-5 bg-[#DA251D] rounded-sm flex items-center justify-center text-[10px] text-[#FFCD00]">
              ★
            </div>
            <span>Tiếng Việt</span>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span>📧 contact@nbk.edu.vn</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞 Liên hệ: 028.xxxx.xxxx</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#102E50] rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg hover:rotate-3 transition-transform cursor-pointer">
              NBK
            </div>
            <div className="font-merriweather">
              <h1 className="flex flex-col text-[#102E50] leading-[1.2] tracking-tight">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">Trường Tiểu Học</span>
                <span className="text-base md:text-lg font-black whitespace-nowrap">Nguyễn Bỉnh Khiêm</span>
              </h1>
              <p className="text-[9px] text-[#E78B48] uppercase tracking-[0.2em] font-sans font-bold mt-1">Sạch - Đẹp - An Toàn</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-bold text-xs tracking-wider">
            {['TRANG CHỦ', 'GIỚI THIỆU', 'TIN TỨC', 'THƯ VIỆN', 'KHÔNG GIAN HỒ CHÍ MINH', 'LIÊN HỆ'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                  className="hover:text-[#E78B48] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E78B48] after:transition-all hover:after:w-full transition-colors text-[#102E50]"
                >
                  {item}
                </a>
              </li>
            ))}
            <button className="p-2.5 bg-[#FCF9EA] rounded-xl text-[#102E50] hover:bg-[#102E50] hover:text-white transition-all shadow-sm">
              🔍
            </button>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-2xl text-[#102E50]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-6 absolute w-full shadow-2xl animate-fade-in-down">
            <ul className="flex flex-col gap-5 font-bold text-sm">
              {['TRANG CHỦ', 'GIỚI THIỆU', 'TIN TỨC', 'THƯ VIỆN', 'KHÔNG GIAN HỒ CHÍ MINH', 'LIÊN HỆ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="block hover:text-[#E78B48] py-2 border-b border-gray-50 last:border-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
