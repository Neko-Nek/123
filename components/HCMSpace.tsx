
import React from 'react';

const HCMSpace: React.FC = () => {
  const links = [
    { icon: '🎯', label: 'Cuộc đời, sự nghiệp' },
    { icon: '🖼️', label: 'Gương điển hình' },
    { icon: '💭', label: 'Tư tưởng, đạo đức Hồ Chí Minh' },
    { icon: '🌍', label: 'Hồ Chí Minh & thế giới' },
    { icon: '🏛️', label: 'Tham quan Bảo tàng Hồ Chí Minh' }
  ];

  return (
    <section id="tieu-su-hcm" className="py-24 bg-gradient-to-br from-[#f5e6d3] to-[#fff8e7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Không Gian Văn Hóa Hồ Chí Minh
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Tìm hiểu về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row gap-16 items-center border border-white">
          <div className="lg:w-2/5 group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:-rotate-1">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/H%E1%BB%93_Ch%C3%AD_Minh_1946.jpg" 
                alt="Hồ Chí Minh" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20 pointer-events-none"></div>
            </div>
          </div>
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {links.map((link, i) => (
              <a 
                key={i} 
                href="#" 
                className={`flex items-center gap-5 bg-gradient-to-r from-[#b91c1c] to-[#991b1b] p-6 rounded-2xl text-white font-bold hover:from-[#dc2626] hover:to-[#b91c1c] hover:scale-[1.02] active:scale-95 transition-all shadow-lg group relative overflow-hidden ${i === 4 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform shrink-0">
                  {link.icon}
                </div>
                <span className="text-base leading-tight">{link.label}</span>
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HCMSpace;
