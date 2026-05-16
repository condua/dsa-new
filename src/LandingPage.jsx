// App.jsx
import React, { useState, useEffect } from "react";

// ==================== NAVBAR ====================----
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Tính năng", href: "#features" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              NovaTech
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-violet-600 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5">
              Bắt đầu miễn phí
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 font-medium hover:text-violet-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-full font-semibold">
              Bắt đầu miễn phí
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

// ==================== HERO SECTION ====================
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-violet-950 to-indigo-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-500" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-white/80 text-sm">
                Phiên bản 3.0 mới ra mắt
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Xây dựng{" "}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                tương lai
              </span>{" "}
              số của bạn
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Nền tảng toàn diện giúp doanh nghiệp của bạn chuyển đổi số nhanh
              chóng, tăng trưởng bền vững và vượt trội hơn đối thủ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Dùng thử miễn phí
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button className="group border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Xem demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "10K+", label: "Người dùng" },
                { value: "99.9%", label: "Uptime" },
                { value: "4.9★", label: "Đánh giá" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating Card 1 */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">Tăng trưởng</span>
                </div>
                <div className="text-3xl font-bold text-white">+247%</div>
                <div className="text-sm text-gray-400">Trong 30 ngày</div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-16 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-delayed">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">
                    Người dùng mới
                  </span>
                </div>
                <div className="text-3xl font-bold text-white">1,284</div>
                <div className="text-sm text-gray-400">Hôm nay</div>
              </div>

              {/* Central Circle */}
              <div className="absolute inset-16 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-violet-600/40 to-indigo-600/40 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

// ==================== BRANDS SECTION ====================
const BrandsSection = () => {
  const brands = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Spotify",
    "Slack",
  ];
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
          Được tin tưởng bởi 10,000+ doanh nghiệp hàng đầu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-40 grayscale">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-2xl sm:text-3xl font-bold text-gray-900 hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== FEATURES SECTION ====================
const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Hiệu suất siêu tốc",
      desc: "Tốc độ xử lý nhanh gấp 10 lần với công nghệ tối ưu tiên tiến nhất thị trường.",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Bảo mật tuyệt đối",
      desc: "Mã hóa end-to-end, xác thực 2 lớp và tuân thủ tiêu chuẩn bảo mật quốc tế.",
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Giao diện trực quan",
      desc: "Thiết kế UI/UX hiện đại, dễ sử dụng cho mọi đối tượng người dùng.",
      color: "from-violet-500 to-purple-500",
      bg: "bg-violet-50",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Phân tích thông minh",
      desc: "Dashboard realtime với AI phân tích dự báo xu hướng và hành vi người dùng.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Hợp tác nhóm",
      desc: "Làm việc nhóm hiệu quả với công cụ chia sẻ, bình luận và phân quyền chi tiết.",
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "Tích hợp dễ dàng",
      desc: "Kết nối với 200+ công cụ phổ biến qua API mở và plugin linh hoạt.",
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Tính năng nổi bật
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mọi thứ bạn cần để{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              thành công
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Bộ công cụ mạnh mẽ được thiết kế để giúp bạn làm việc thông minh
            hơn, nhanh hơn và hiệu quả hơn.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} text-white rounded-xl w-14 h-14 flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT SECTION ====================
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-violet-600 mb-1">
                    5+
                  </div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Chuyên gia</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-pink-600 mb-1">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Dự án thành công</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Hỗ trợ</div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl -z-10 opacity-50" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Về chúng tôi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Chúng tôi tạo ra{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                giải pháp
              </span>{" "}
              đột phá
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực công nghệ, NovaTech tự
              hào là đối tác tin cậy của hàng ngàn doanh nghiệp. Chúng tôi không
              chỉ cung cấp công cụ — chúng tôi kiến tạo giải pháp.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Đội ngũ chuyên gia hàng đầu trong ngành",
                "Phương pháp Agile linh hoạt & hiệu quả",
                "Cam kết đồng hành cùng khách hàng lâu dài",
                "Cập nhật công nghệ mới nhất liên tục",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5">
              Tìm hiểu thêm →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== PRICING SECTION ====================
const PricingSection = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "Phù hợp cho cá nhân & startup",
      price: annual ? 0 : 0,
      features: [
        "3 dự án",
        "1GB lưu trữ",
        "Hỗ trợ email",
        "Cơ bản analytics",
        "SSL miễn phí",
      ],
      cta: "Bắt đầu miễn phí",
      popular: false,
    },
    {
      name: "Professional",
      desc: "Tốt nhất cho doanh nghiệp nhỏ",
      price: annual ? 29 : 39,
      features: [
        "Không giới hạn dự án",
        "100GB lưu trữ",
        "Hỗ trợ ưu tiên 24/7",
        "Advanced analytics",
        "Tích hợp API",
        "Custom domain",
        "Team collaboration",
      ],
      cta: "Dùng thử 14 ngày",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "Dành cho tổ chức lớn",
      price: annual ? 99 : 129,
      features: [
        "Tất cả tính năng Pro",
        "Không giới hạn lưu trữ",
        "Quản lý tài khoản riêng",
        "SLA 99.99%",
        "On-premise deployment",
        "Custom integration",
        "Đào tạo đội ngũ",
        "Audit & compliance",
      ],
      cta: "Liên hệ tư vấn",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Bảng giá
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Giá cả{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              hợp lý
            </span>{" "}
            cho mọi quy mô
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`text-sm font-medium ${
                !annual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Hàng tháng
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                annual ? "bg-violet-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  annual ? "translate-x-7" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                annual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Hàng năm{" "}
              <span className="text-green-600 font-semibold">(-25%)</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "shadow-2xl shadow-violet-500/20 border-2 border-violet-500 scale-105"
                  : "shadow-lg border border-gray-100 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Phổ biến nhất
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-500">/tháng</span>
              </div>

              <button
                className={`w-full py-3.5 rounded-full font-semibold transition-all mb-8 ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/30"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== TESTIMONIALS SECTION ====================
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn An",
      role: "CEO, TechViet Corp",
      avatar: "NA",
      content:
        "NovaTech đã giúp chúng tôi tăng doanh thu 300% chỉ sau 6 tháng sử dụng. Công cụ tuyệt vời với đội ngũ hỗ trợ nhiệt tình!",
      rating: 5,
    },
    {
      name: "Trần Thị Mai",
      role: "CTO, Digital Solutions",
      avatar: "TM",
      content:
        "Giao diện trực quan, dễ sử dụng. Đội ngũ của tôi có thể bắt đầu ngay mà không cần đào tạo phức tạp. Rất đáng đồng tiền!",
      rating: 5,
    },
    {
      name: "Lê Hoàng Phúc",
      role: "Product Manager, StartUp X",
      avatar: "LP",
      content:
        "Tích hợp API dễ dàng, tài liệu chi tiết. NovaTech là lựa chọn tốt nhất mà chúng tôi đã thử trong năm nay.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Đánh giá khách hàng
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Khách hàng nói{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              gì về chúng tôi
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CTA SECTION ====================
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Sẵn sàng bứt phá giới hạn?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Tham gia cùng 10,000+ doanh nghiệp đã tin tưởng NovaTech. Bắt đầu miễn
          phí hôm nay — không cần thẻ tín dụng.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-violet-700 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
            Bắt đầu miễn phí →
          </button>
          <button className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Liên hệ tư vấn
          </button>
        </div>

        <p className="text-white/50 text-sm mt-6">
          ✓ Miễn phí 14 ngày &nbsp; ✓ Không cần thẻ tín dụng &nbsp; ✓ Hủy bất cứ
          lúc nào
        </p>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer = () => {
  const footerLinks = {
    "Sản phẩm": ["Tính năng", "Bảng giá", "Tích hợp", "API", "Changelog"],
    "Công ty": ["Về chúng tôi", "Blog", "Tuyển dụng", "Press Kit", "Liên hệ"],
    "Hỗ trợ": [
      "Trung tâm trợ giúp",
      "Tài liệu",
      "Community",
      "Trạng thái hệ thống",
    ],
    "Pháp lý": ["Điều khoản sử dụng", "Chính sách bảo mật", "Cookie", "GDPR"],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-white">NovaTech</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Nền tảng công nghệ hàng đầu cho doanh nghiệp hiện đại.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors"
                >
                  <span className="text-xs uppercase font-bold">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 NovaTech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Tất cả hệ thống hoạt động bình thường
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN APP ====================
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
