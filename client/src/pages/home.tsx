import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Phone,
  SlidersHorizontal,
  PenTool,
  CircleDollarSign,
  Play,
  Star,
  Menu,
  ChevronDown,
  ChevronUp,
  Globe,
  MapPin,
  BarChart3,
  Rocket,
  Building2,
  Terminal,
  Layers,
  Users,
  Handshake,
  UserPlus,
  ArrowRight,
  Inbox,
  Hammer,
  Droplets,
  Lightbulb,
  Sun,
  Shovel,
  Home as HomeIcon,
  Bug,
  Paintbrush,
  Archive,
  LayoutPanelTop,
  Wind,
  HardHat,
  Truck,
  X,
  Calendar,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { LayoutGridIcon } from "@/components/ui/layout-grid-icon";
import { GlobeIcon } from "@/components/ui/globe-icon";
import heroVideo from "@assets/generated_videos/aerial_view_of_roofers_working_on_a_house_roof.mp4";

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderWhite = isServicesOpen || isIndustriesOpen || isScrolled;

  const languages = [
    { name: "English", code: "en" },
    { name: "Portuguese (Brazil)", code: "pt-BR" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageOpen) {
        setIsLanguageOpen(false);
      }
    };
    if (isLanguageOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative w-full bg-black text-white font-sans min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 md:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-[450px] bg-gradient-to-t from-black via-black/95 via-40% to-transparent z-10" />
        </div>

        {/* Navigation */}
        <header
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isHeaderWhite ? "bg-white text-black shadow-lg" : "bg-transparent text-white"}`}
        >
          <nav className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-12">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${!isHeaderWhite ? "invert" : ""}`}
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1 text-[17px] font-medium">
                <a
                  href="#"
                  className={`px-4 py-2.5 rounded-full hover:text-primary transition-colors ${isHeaderWhite ? "text-black" : "text-white"}`}
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className={`px-4 py-2.5 rounded-full hover:text-primary transition-colors ${isHeaderWhite ? "text-black" : "text-white"}`}
                >
                  About
                </a>
                <button
                  onClick={() => {
                    setIsServicesOpen(!isServicesOpen);
                    setIsIndustriesOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isServicesOpen
                      ? "bg-black text-white"
                      : "hover:text-primary"
                  }`}
                >
                  Services
                  {isServicesOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsIndustriesOpen(!isIndustriesOpen);
                    setIsServicesOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isIndustriesOpen
                      ? "bg-black text-white"
                      : "hover:text-primary"
                  }`}
                >
                  Industries
                  {isIndustriesOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`hidden md:flex items-center gap-2 transition-colors cursor-pointer group ${isHeaderWhite ? "text-black" : "text-white"}`}
                >
                  <GlobeIcon
                    size={26}
                    className={isHeaderWhite ? "text-black" : "text-white"}
                  />
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 group-hover:text-primary transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLanguageOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-sm shadow-xl border border-gray-100 py-2 z-[200]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.name);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors cursor-pointer ${language === lang.name ? "text-black font-bold" : "text-gray-500"}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                className={`hidden md:block transition-all duration-300 cursor-pointer shrink-0 rounded-none px-4 md:px-6 py-2.5 md:py-3 font-bold uppercase tracking-wide text-xs md:text-sm ${
                  isHeaderWhite
                    ? "bg-black/5 border border-black/10 text-black hover:bg-black/10"
                    : "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Schedule Intro Call
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 transition-colors ${isHeaderWhite ? "text-black" : "text-white"}`}
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <div className="h-0.5 w-full bg-current transition-all"></div>
                  <div className="h-0.5 w-2/3 bg-current transition-all"></div>
                  <div className="h-0.5 w-full bg-current transition-all"></div>
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-0 z-[200] lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-0 right-0 bottom-0 w-full bg-white text-black flex flex-col shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <a
                  href="#"
                  className="block text-xl hover:text-primary transition-colors p-3 rounded-lg"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-xl hover:text-primary transition-colors p-3 rounded-lg"
                >
                  About
                </a>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setIsMobileServicesOpen(!isMobileServicesOpen);
                      setIsMobileIndustriesOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-xl transition-all duration-300 p-3 rounded-lg ${isMobileServicesOpen ? "bg-black text-white font-bold" : "hover:text-primary"}`}
                  >
                    Services
                    <ChevronDown
                      className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? "max-h-[2000px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                  >
                    <div className="bg-[#F9FAFB] rounded-xl border border-gray-100 p-4 space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">
                          Search & Strategy
                        </h4>
                        <div className="space-y-1">
                          {[
                            {
                              name: "Local SEO",
                              desc: "Dominate local search results in your service area",
                              icon: BarChart3,
                            },
                            {
                              name: "AI Search Optimization",
                              desc: "Future-proof your presence for AI-driven search",
                              icon: Terminal,
                            },
                            {
                              name: "Organic SEO",
                              desc: "Build long-term authority and organic traffic",
                              icon: Globe,
                            },
                          ].map((item) => (
                            <a
                              key={item.name}
                              href="#"
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group"
                            >
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base text-black block leading-tight">
                                  {item.name}
                                </span>
                                <p className="text-[13px] text-gray-500 leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">
                          Paid Media & Lead Gen
                        </h4>
                        <div className="space-y-1">
                          {[
                            {
                              name: "Pay-Per-Click",
                              desc: "Instant leads through Google Ads and Bing",
                              icon: CircleDollarSign,
                            },
                            {
                              name: "LSA Management",
                              desc: "Maximize your Google Local Services Ads ROI",
                              icon: Users,
                            },
                            {
                              name: "OTT Advertising",
                              desc: "Reach homeowners on streaming TV platforms",
                              icon: Layers,
                            },
                          ].map((item) => (
                            <a
                              key={item.name}
                              href="#"
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group"
                            >
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base text-black block leading-tight">
                                  {item.name}
                                </span>
                                <p className="text-[13px] text-gray-500 leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">
                          Creative & Content
                        </h4>
                        <div className="space-y-1">
                          {[
                            {
                              name: "Website Design",
                              desc: "High-converting websites for home services",
                              icon: PenTool,
                            },
                            {
                              name: "Digital PR",
                              desc: "Earn mentions and backlinks from top publications",
                              icon: Rocket,
                            },
                            {
                              name: "Social Media",
                              desc: "Build a community and brand on social platforms",
                              icon: Handshake,
                            },
                            {
                              name: "Email Marketing",
                              desc: "Nurture leads and increase customer lifetime value",
                              icon: Users,
                            },
                          ].map((item) => (
                            <a
                              key={item.name}
                              href="#"
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group"
                            >
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base text-black block leading-tight">
                                  {item.name}
                                </span>
                                <p className="text-[13px] text-gray-500 leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">
                          Our Blog
                        </h4>
                        <div className="group cursor-pointer p-3 rounded-lg hover:bg-white transition-all duration-300">
                          <div className="aspect-[16/9] bg-primary/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <div className="text-primary font-bold text-2xl italic tracking-tighter">
                              Insights
                            </div>
                          </div>
                          <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary transition-colors text-black">
                            The Future of Home Services Marketing in 2026
                          </h5>
                          <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                            Stay ahead of the curve with our latest insights on
                            industry trends, AI technology, and growth
                            strategies...
                          </p>
                          <a
                            href="#"
                            className="text-xs font-bold text-primary flex items-center gap-1"
                          >
                            Read More <ArrowRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setIsMobileIndustriesOpen(!isMobileIndustriesOpen);
                      setIsMobileServicesOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-xl transition-all duration-300 p-3 rounded-lg ${isMobileIndustriesOpen ? "bg-black text-white font-bold" : "hover:text-primary"}`}
                  >
                    Industries
                    <ChevronDown
                      className={`transition-transform duration-300 ${isMobileIndustriesOpen ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileIndustriesOpen ? "max-h-[2000px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                  >
                    <div className="bg-[#F9FAFB] rounded-xl border border-gray-100 p-4 space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">
                          Industries We Serve
                        </h4>
                        <div className="grid grid-cols-1 gap-1">
                          {[
                            {
                              name: "Roofing",
                              desc: "Dominate local search and lead generation for roofing specialists",
                              icon: HomeIcon,
                            },
                            {
                              name: "HVAC",
                              desc: "Maximize call volume and emergency service leads for HVAC",
                              icon: Wind,
                            },
                            {
                              name: "Plumbing",
                              desc: "High-intent lead generation and local SEO for plumbing companies",
                              icon: Droplets,
                            },
                            {
                              name: "Electrical",
                              desc: "Scale your electrical service business with targeted digital growth",
                              icon: Lightbulb,
                            },
                            {
                              name: "Solar",
                              desc: "Capture high-quality solar leads and residential installation projects",
                              icon: Sun,
                            },
                            {
                              name: "Landscaping",
                              desc: "Build a premium brand and organic presence for landscaping services",
                              icon: Shovel,
                            },
                            {
                              name: "Home Builders",
                              desc: "Strategic marketing and high-converting websites for custom builders",
                              icon: Hammer,
                            },
                            {
                              name: "Pest Control",
                              desc: "Consistent lead flow and local visibility for pest management",
                              icon: Bug,
                            },
                            {
                              name: "Contractors",
                              desc: "Full-funnel digital marketing for multi-service general contractors",
                              icon: HardHat,
                            },
                            {
                              name: "Flooring",
                              desc: "Drive residential and commercial flooring installation projects",
                              icon: Layers,
                            },
                            {
                              name: "Garage Door",
                              desc: "Instant visibility and call tracking for garage door services",
                              icon: SlidersHorizontal,
                            },
                            {
                              name: "Moving",
                              desc: "Targeted customer acquisition for local and long-distance movers",
                              icon: Truck,
                            },
                            {
                              name: "Painting",
                              desc: "Branding and lead gen that highlights quality painting results",
                              icon: Paintbrush,
                            },
                            {
                              name: "Windows & Doors",
                              desc: "Capture high-value leads for window and door replacements",
                              icon: LayoutPanelTop,
                            },
                          ].map((item) => (
                            <a
                              key={item.name}
                              href="#"
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group"
                            >
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base text-black block leading-tight">
                                  {item.name}
                                </span>
                                <p className="text-[13px] text-gray-500 leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">
                          Case Studies
                        </h4>
                        <div className="group cursor-pointer p-3 rounded-lg hover:bg-white transition-all duration-300">
                          <div className="aspect-[16/9] bg-[#0F0F23] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <div className="text-white font-bold text-2xl italic tracking-tighter">
                              Success
                            </div>
                          </div>
                          <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary transition-colors text-black">
                            How a Roofing Client Scaled to $10M ARR
                          </h5>
                          <a
                            href="#"
                            className="text-xs font-bold text-primary flex items-center gap-1"
                          >
                            View Case Study <ArrowRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="space-y-2">
                    <button
                      onClick={() =>
                        setIsMobileLanguageOpen(!isMobileLanguageOpen)
                      }
                      className={`w-full flex items-center justify-between text-xl transition-all duration-300 p-3 rounded-lg ${isMobileLanguageOpen ? "bg-black text-white font-bold" : "hover:text-primary"}`}
                    >
                      <div className="flex items-center gap-3">
                        <Globe
                          size={24}
                          className={
                            isMobileLanguageOpen
                              ? "text-white"
                              : "text-gray-400"
                          }
                        />
                        {language}
                      </div>
                      <ChevronDown
                        className={`transition-transform duration-300 ${isMobileLanguageOpen ? "rotate-180" : ""}`}
                        size={20}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isMobileLanguageOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="bg-gray-50 rounded-lg p-2 space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.name);
                              setIsMobileLanguageOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-lg rounded-md transition-colors cursor-pointer ${language === lang.name ? "text-black font-bold" : "text-gray-500"}`}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <button className="w-full bg-primary text-white py-4 px-6 font-bold uppercase tracking-wide text-sm hover:bg-black transition-colors cursor-pointer rounded-sm shadow-lg">
                  Schedule Intro Call
                </button>
              </div>
            </div>
          </div>

          {/* Mega Menu Dropdowns */}
          <div
            className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
              isServicesOpen
                ? "max-h-[1200px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-12 flex">
              <div className="flex-1 space-y-12 pr-12 border-r border-gray-100">
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                    Search & Strategy
                  </h4>
                  <div className="grid grid-cols-3 gap-1">
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <BarChart3 className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          Local SEO
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Dominate local search results in your service area
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <Terminal className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          AI Search Optimization
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Future-proof your presence for AI-driven search
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <Globe className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          Organic SEO
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Build long-term authority and organic traffic
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="h-px bg-gray-100 w-full mt-4"></div>
                </div>
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                    Paid Media & Lead Gen
                  </h4>
                  <div className="grid grid-cols-3 gap-1">
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <CircleDollarSign className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          Pay-Per-Click
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Instant leads through Google Ads and Bing
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <Users className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          LSA Management
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Maximize your Google Local Services Ads ROI
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <Layers className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          OTT Advertising
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Reach homeowners on streaming TV platforms
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="h-px bg-gray-100 w-full mt-4"></div>
                </div>
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                    Creative & Content
                  </h4>
                  <div className="grid grid-cols-3 gap-1">
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <PenTool className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          Website Design
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            High-converting websites for home services
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <Rocket className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          Digital PR
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Earn mentions and backlinks from top publications
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                    >
                      <Handshake className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base text-black block transition-colors leading-tight">
                          Social Media
                        </span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                            Build a community and brand on social platforms
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[350px] pl-12 space-y-8">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                  Our Blog
                </h4>
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] bg-primary/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-primary font-bold text-2xl italic tracking-tighter">
                        Insights
                      </div>
                    </div>
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                      The Future of Home Services Marketing in 2026
                    </h5>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                      Stay ahead of the curve with our latest insights on
                      industry trends, AI technology, and growth strategies...
                    </p>
                    <a
                      href="#"
                      className="text-xs font-bold text-primary flex items-center gap-1"
                    >
                      Read More <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
              isIndustriesOpen
                ? "max-h-[1200px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-12 flex">
              <div className="flex-1 space-y-12 pr-12 border-r border-gray-100">
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
                    Industries We Serve
                  </h4>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      {
                        name: "Roofing",
                        desc: "Dominate local search and lead generation for roofing specialists",
                        icon: HomeIcon,
                      },
                      {
                        name: "HVAC",
                        desc: "Maximize call volume and emergency service leads for HVAC",
                        icon: Wind,
                      },
                      {
                        name: "Plumbing",
                        desc: "High-intent lead generation and local SEO for plumbing companies",
                        icon: Droplets,
                      },
                      {
                        name: "Electrical",
                        desc: "Scale your electrical service business with targeted digital growth",
                        icon: Lightbulb,
                      },
                      {
                        name: "Solar",
                        desc: "Capture high-quality solar leads and residential installation projects",
                        icon: Sun,
                      },
                      {
                        name: "Landscaping",
                        desc: "Build a premium brand and organic presence for landscaping services",
                        icon: Shovel,
                      },
                      {
                        name: "Home Builders",
                        desc: "Strategic marketing and high-converting websites for custom builders",
                        icon: Hammer,
                      },
                      {
                        name: "Pest Control",
                        desc: "Consistent lead flow and local visibility for pest management",
                        icon: Bug,
                      },
                      {
                        name: "Contractors",
                        desc: "Full-funnel digital marketing for multi-service general contractors",
                        icon: HardHat,
                      },
                      {
                        name: "Flooring",
                        desc: "Drive residential and commercial flooring installation projects",
                        icon: Layers,
                      },
                      {
                        name: "Garage Door",
                        desc: "Instant visibility and call tracking for garage door services",
                        icon: SlidersHorizontal,
                      },
                      {
                        name: "Moving",
                        desc: "Targeted customer acquisition for local and long-distance movers",
                        icon: Truck,
                      },
                      {
                        name: "Painting",
                        desc: "Branding and lead gen that highlights quality painting results",
                        icon: Paintbrush,
                      },
                      {
                        name: "Windows & Doors",
                        desc: "Capture high-value leads for window and door replacements",
                        icon: LayoutPanelTop,
                      },
                    ].map((industry) => (
                      <a
                        key={industry.name}
                        href="#"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                      >
                        <industry.icon className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                        <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                          <span className="text-base text-black block transition-colors leading-tight">
                            {industry.name}
                          </span>
                          <div className="overflow-hidden">
                            <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                              {industry.desc}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[350px] pl-12 space-y-8">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                  Case Studies
                </h4>
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] bg-[#0F0F23] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-white font-bold text-2xl italic tracking-tighter">
                        Success
                      </div>
                    </div>
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                      How a Roofing Client Scaled to $10M ARR
                    </h5>
                    <a
                      href="#"
                      className="text-xs font-bold text-primary flex items-center gap-1"
                    >
                      View Case Study <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Backdrop Blur Overlay */}
        <div
          onClick={() => {
            setIsServicesOpen(false);
            setIsIndustriesOpen(false);
          }}
          className={`fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm transition-opacity duration-500 ease-in-out cursor-pointer ${
            isServicesOpen || isIndustriesOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 pt-64 md:pt-48 lg:pt-56 pb-20 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="max-w-3xl flex flex-col items-center md:items-start">
            <h2 className="text-gray-400 font-bold tracking-widest text-sm mb-4 uppercase">
              Home Services Marketing Agency
            </h2>
            <h1 className="text-[clamp(1.8rem,11vw,3.8rem)] md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[0.9] mb-6 md:mb-10 text-white tracking-tight break-words">
              Championing
              <br />
              Hometown Heroes
            </h1>
            <div className="mb-8 md:mb-12">
              <p className="text-base md:text-xl font-medium text-white leading-relaxed max-w-2xl mx-auto md:mx-0">
                We are a proactive, cutting-edge marketing agency and transparent ROI partner. 
                We make suggestions that actually move the needle, utilize the latest technology, 
                and show you all the work we complete each month.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12 md:mb-20 w-full">
              <button className="w-full sm:w-auto bg-white text-black px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase tracking-wide text-sm md:text-base hover:bg-gray-200 transition-colors cursor-pointer rounded-none">
                Get Started Now
              </button>
              <a
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-2 font-bold text-white hover:bg-white/10 transition-colors text-sm md:text-base px-6 py-3.5 md:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-none"
              >
                <Play className="w-4 h-4 fill-white" />
                Real Customer Experiences
              </a>
            </div>
            <div className="relative w-full overflow-hidden border-t border-white/5 pt-12 md:pt-16 mt-8 md:mt-12 group">
              {/* Fade Gradients */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              <div className="flex whitespace-nowrap animate-scroll">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                    {[
                      { name: "Google", icon: "SiGoogle" },
                      { name: "Facebook", icon: "SiFacebook" },
                      { name: "Instagram", icon: "SiInstagram" },
                      { name: "LinkedIn", icon: "SiLinkedin" },
                      { name: "YouTube", icon: "SiYoutube" },
                      { name: "Twitter", icon: "SiTwitter" },
                      { name: "Forbes", icon: "SiForbes" },
                      { name: "Inc", icon: "SiInc" },
                    ].map((logo, idx) => (
                      <div
                        key={idx}
                        className="text-white/20 hover:text-white/40 transition-colors text-2xl md:text-3xl font-black italic tracking-tighter"
                      >
                        {logo.name}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-[#F9FAFB] py-24 px-6 md:px-12 lg:px-24 xl:px-48">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[11px] block mb-2">
              Helpful Resources
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-black">
              CHECK OUT OUR TOP <span className="text-primary">RESOURCES</span>
            </h2>
          </div>
          <button className="bg-white text-black border border-black px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-black hover:text-white transition-all cursor-pointer rounded-sm shrink-0">
            View All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              date: "01/22/25",
              time: "15 Mins",
              title:
                "Google Maps SEO Services That Actually Work: Hook's RankMap.Ai Is Here",
              desc: "Imagine seeing your business light up Google Maps like a Christmas tree—greens everywhere, ranking 1-3 in your service areas, and...",
              image:
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
            },
            {
              date: "12/01/25",
              time: "25 Mins",
              title: "HVAC Marketing | 32 Strategies To Hook Better Leads",
              desc: "The possibilities for how to market your HVAC business are endless. From leveraging social media to harnessing the power of...",
              image:
                "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
            },
            {
              date: "05/23/25",
              time: "17 Mins",
              title: "20 Home Services Marketing Tips (That Actually Work)",
              desc: "We want to be your partner for your home services marketing efforts, but more than that, we want to help...",
              image:
                "https://images.unsplash.com/photo-1581578731522-a2047864190c?auto=format&fit=crop&q=80&w=800",
            },
          ].map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-6 text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gray-300" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gray-300" />
                    {post.time}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.desc}
                </p>
                <div className="mt-auto">
                  <button className="text-black font-black uppercase tracking-widest text-[11px] border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-all">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black pt-32 pb-12 px-6 md:px-12 lg:px-24 xl:px-48 border-t border-white/5">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
            <div className="space-y-12">
              <div className="space-y-10">
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-sm bg-white/5 border border-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] block mb-1">
                      Give Us A Call:
                    </span>
                    <a
                      href="tel:612-688-9108"
                      className="text-xl font-bold hover:text-primary transition-colors"
                    >
                      612-688-9108
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-sm bg-white/5 border border-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] block mb-1">
                      Visit Our Office:
                    </span>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">
                      600 N Washington Ave Suite C203,
                      <br />
                      Minneapolis, MN 55401
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  "Local SEO",
                  "AI Search Optimization",
                  "Organic SEO",
                  "Pay-Per-Click",
                  "LSA Management",
                  "OTT Advertising",
                  "Website Design",
                  "Digital PR",
                  "Social Media",
                  "Email Marketing",
                  "Our Blog",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8">
                Industries
              </h4>
              <ul className="space-y-4">
                {[
                  "Roofing",
                  "HVAC",
                  "Plumbing",
                  "Electrical",
                  "Solar",
                  "Landscaping",
                  "Home Builders",
                  "Pest Control",
                  "Contractors",
                  "Flooring",
                  "Garage Door",
                  "Moving",
                  "Painting",
                  "Windows & Doors",
                  "Case Studies",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-8">
                  Resources
                </h4>
                <ul className="space-y-4">
                  {["Pricing", "About", "Portfolio", "Careers"].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Sign up for free resources from our team.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <button className="bg-white/10 hover:bg-white/20 px-6 py-3 font-bold uppercase tracking-wide text-xs transition-colors shrink-0">
                    Sign Up Now!
                  </button>
                </div>
                <div className="flex md:hidden items-center gap-4 pt-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                    Follow us:
                  </span>
                  <div className="flex items-center gap-4 text-gray-400">
                    {[Linkedin, Instagram].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="hover:text-primary transition-all hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="hidden md:flex flex-col md:flex-row items-center gap-6 order-1 md:order-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                Follow us:
              </span>
              <div className="flex items-center gap-4 text-gray-400">
                {[Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-primary transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] order-2 md:order-1">
              <span>© Copyright {currentYear} Neven Agency.</span>
              <span className="opacity-20">•</span>
              <a
                href="#"
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
