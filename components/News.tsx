
import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    { date: '15/12/2025', title: 'Hội nghị Giáo dục nghề nghiệp năm 2025', excerpt: 'Bộ Giáo dục và Đào tạo tổ chức hội nghị về định hướng giáo dục nghề nghiệp...' },
    { date: '10/12/2025', title: 'Triển khai Nghị quyết số 71 của Đảng', excerpt: 'Đảng ủy Bộ GDĐT chuẩn bị triển khai hội nghị học tập, triển khai Nghị quyết số 71...' },
    { date: '05/12/2025', title: 'Lễ khai giảng năm học mới tưng bừng', excerpt: 'Trường Tiểu Học Nguyễn Bỉnh Khiêm long trọng tổ chức lễ khai giảng năm học mới...' }
  ];

  return (
    <section id="tin-tức" className="py-24 bg-[#FCF9EA]/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-merriweather text-4xl font-black text-[#102E50] mb-4 relative inline-block">
            Tin Tức & Sự Kiện
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#E78B48] rounded-full" />
          </h2>
          <p className="text-[#E78B48] text-lg font-bold mt-4">Cập nhật thông tin mới nhất từ nhà trường</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform group">
              <div className="relative h-56 bg-[#102E50] overflow-hidden">
                <img src={`https://picsum.photos/id/${1040+i}/600/400`} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute top-4 right-4 bg-white text-[#102E50] font-black text-xs px-3 py-2 rounded-lg shadow-md">
                  {news.date}
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-merriweather text-xl font-black text-[#102E50] mb-4 leading-tight group-hover:text-[#E78B48] transition-colors">
                  {news.title}
                </h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {news.excerpt}
                </p>
                <a href="#" className="flex items-center gap-2 text-[#E78B48] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Đọc thêm <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
