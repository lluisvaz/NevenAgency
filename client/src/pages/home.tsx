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

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderWhite = isServicesOpen || isIndustriesOpen || isScrolled;

  const languages = [
    {
      name: "English",
      code: "en",
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfw3OxwdDqJWOsCWw7UU67mi8NszDRtWthYV8GU8YT0rjqs23m8LXrYZlovXIiCiPzhaGuFbY7Ddm3JV6-rxL-NgQ-I7McLtflR5D0uw&s=10",
    },
    {
      name: "Portuguese",
      code: "pt-BR",
      flag: "https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-2-cke.jpg",
    },
    {
      name: "French",
      code: "fr",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    },
    {
      name: "Spanish",
      code: "es",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    },
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
      <section className="relative min-h-screen w-full overflow-hidden block">
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
          className={`fixed top-0 left-0 right-0 z-[100] ${isHeaderWhite ? "bg-white text-black shadow-lg" : "bg-transparent text-white"}`}
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
                  className={`px-4 py-2.5 rounded-none transition-colors ${isHeaderWhite ? "text-black hover:text-black" : "text-white hover:text-white/70"} ${
                    isServicesOpen || isIndustriesOpen ? "text-gray-400" : ""
                  }`}
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className={`px-4 py-2.5 rounded-none transition-colors ${isHeaderWhite ? "text-black hover:text-black" : "text-white hover:text-white/70"} ${
                    isServicesOpen || isIndustriesOpen ? "text-gray-400" : ""
                  }`}
                >
                  About
                </a>
                <button
                  onClick={() => {
                    setIsServicesOpen(!isServicesOpen);
                    setIsIndustriesOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-none transition-all duration-300 cursor-pointer ${
                    isHeaderWhite
                      ? isServicesOpen
                        ? "text-black"
                        : "text-black hover:text-black"
                      : isServicesOpen
                        ? "text-white"
                        : "text-white hover:text-white/70"
                  } ${(isServicesOpen || isIndustriesOpen) && !isServicesOpen ? "text-gray-400" : ""} group/btn`}
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
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-none transition-all duration-300 cursor-pointer ${
                    isHeaderWhite
                      ? isIndustriesOpen
                        ? "text-black"
                        : "text-black hover:text-black"
                      : isIndustriesOpen
                        ? "text-white"
                        : "text-white hover:text-white/70"
                  } ${(isServicesOpen || isIndustriesOpen) && !isIndustriesOpen ? "text-gray-400" : ""} group/btn`}
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
                  className={`hidden md:flex items-center gap-2 transition-colors cursor-pointer group ${isHeaderWhite ? "text-black hover:text-black" : "text-white hover:text-white/70"}`}
                >
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden bg-white">
                    <img
                      src={languages.find((l) => l.name === language)?.flag}
                      alt={language}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLanguageOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-none shadow-xl border border-gray-100 py-2 z-[200]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.name);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors cursor-pointer rounded-none flex items-center gap-3 ${language === lang.name ? "text-black font-bold" : "text-gray-500"}`}
                      >
                        <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden bg-white">
                          <img
                            src={lang.flag}
                            alt={lang.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
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
                <div className="w-6 h-5 flex flex-col justify-between items-end">
                  <div className="w-full h-0.5 bg-current" />
                  <div className="w-4/5 h-0.5 bg-current" />
                  <div className="w-full h-0.5 bg-current" />
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
                  className="p-2 hover:bg-gray-100 rounded-none transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <a
                  href="#"
                  className="block text-xl hover:text-primary transition-colors p-3 rounded-none"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-xl hover:text-primary transition-colors p-3 rounded-none"
                >
                  About
                </a>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setIsMobileServicesOpen(!isMobileServicesOpen);
                      setIsMobileIndustriesOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-xl transition-all duration-300 p-3 rounded-none ${isMobileServicesOpen ? "bg-black text-white" : "hover:text-primary"}`}
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
                    <div className="bg-[#F9FAFB] rounded-none border border-gray-100 p-4 space-y-8">
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
                              className="flex items-start gap-4 p-3 rounded-none hover:bg-white transition-all duration-300 group"
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
                              className="flex items-start gap-4 p-3 rounded-none hover:bg-white transition-all duration-300 group"
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
                              className="flex items-start gap-4 p-3 rounded-none hover:bg-white transition-all duration-300 group"
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
                        <div className="group cursor-pointer p-3 rounded-none hover:bg-white transition-all duration-300">
                          <div className="aspect-[16/9] bg-primary/10 rounded-none mb-4 flex items-center justify-center overflow-hidden">
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
                    className={`w-full flex items-center justify-between text-xl transition-all duration-300 p-3 rounded-none ${isMobileIndustriesOpen ? "bg-black text-white" : "hover:text-primary"}`}
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
                    <div className="bg-[#F9FAFB] rounded-none border border-gray-100 p-4 space-y-8">
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
                              className="flex items-start gap-4 p-3 rounded-none hover:bg-white transition-all duration-300 group"
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
                        <div className="group cursor-pointer p-3 rounded-none hover:bg-white transition-all duration-300">
                          <div className="aspect-[16/9] bg-[#0F0F23] rounded-none mb-4 flex items-center justify-center overflow-hidden">
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
                      className={`w-full flex items-center justify-between text-xl transition-all duration-300 p-3 rounded-none ${isMobileLanguageOpen ? "bg-black text-white" : "hover:text-primary"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden bg-white">
                          <img
                            src={
                              languages.find((l) => l.name === language)?.flag
                            }
                            alt={language}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {language}
                      </div>
                      <ChevronDown
                        className={`transition-transform duration-300 ${isMobileLanguageOpen ? "rotate-180" : ""}`}
                        size={20}
                      />
                    </button>
                    <div
                      className={`overflow-y-auto transition-all duration-300 ${isMobileLanguageOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="bg-gray-50 rounded-none p-2 space-y-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.name);
                              setIsMobileLanguageOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-lg rounded-none transition-colors cursor-pointer flex items-center gap-3 ${language === lang.name ? "text-black font-bold" : "text-gray-500"}`}
                          >
                            <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden bg-white">
                              <img
                                src={lang.flag}
                                alt={lang.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <button className="w-full bg-black/5 border border-black/10 text-black px-6 py-4 font-bold uppercase tracking-wide text-sm hover:bg-black/10 transition-colors cursor-pointer rounded-none">
                    Schedule Intro Call
                  </button>
                </div>
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                      className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
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
                    <div className="aspect-[16/9] bg-primary/10 rounded-none mb-4 flex items-center justify-center overflow-hidden">
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
                    ].map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-start gap-3 p-3 rounded-none hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden"
                      >
                        <item.icon className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                        <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                          <span className="text-base text-black block transition-colors leading-tight">
                            {item.name}
                          </span>
                          <div className="overflow-hidden">
                            <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">
                              {item.desc}
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
                  Success Stories
                </h4>
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] bg-[#0F0F23] rounded-none mb-4 flex items-center justify-center overflow-hidden">
                      <div className="text-white font-bold text-2xl italic tracking-tighter">
                        Success
                      </div>
                    </div>
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                      How a Roofing Client Scaled to $10M ARR
                    </h5>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                      Read how we implemented a full-funnel digital strategy
                      that transformed a local roofing company into a market
                      leader...
                    </p>
                    <a
                      href="#"
                      className="text-xs font-bold text-primary flex items-center gap-1"
                    >
                      Read Case Study <ArrowRight size={12} />
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
                We are a proactive, cutting-edge marketing agency and
                transparent ROI partner. We make suggestions that actually move
                the needle, utilize the latest technology, and show you all the
                work we complete each month.
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
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 border-t border-gray-800 pt-8 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div className="text-sm font-bold leading-tight text-white">
                  <div className="flex text-yellow-500 mb-0.5">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  170+ Five-Star
                  <br />
                  Google Reviews
                </div>
              </div>
              <div className="h-8 w-px bg-gray-800 mx-2 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-white flex flex-col items-center justify-center text-[8px] font-bold leading-none bg-white text-black">
                  <span>BP</span>
                  <div className="w-full h-px bg-black my-0.5"></div>
                  <span>/W</span>
                </div>
                <div className="text-sm font-bold leading-tight text-white">
                  #6 Best Small
                  <br />
                  Biz to Work For
                </div>
              </div>
              <div className="h-8 w-px bg-gray-800 mx-2 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="font-serif font-black italic text-2xl tracking-tighter text-white">
                  Inc.
                  <br />
                  <span className="text-xs not-italic font-sans block -mt-1 tracking-normal text-gray-400">
                    5000
                  </span>
                </div>
                <div className="text-sm font-bold leading-tight text-white">
                  Ranked #2031 on
                  <br />
                  the INC. 5000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Industries Ticker Section */}
      <section className="bg-black pt-32 pb-32 w-full overflow-hidden block -mt-1 relative z-30">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 mb-16 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Our Expertise
          </div>
          <h2 className="text-[clamp(1.8rem,11vw,3.8rem)] md:text-6xl lg:text-7xl font-normal mb-6 text-white tracking-tight leading-[0.9] normal-case">
            Specialized in <span className="font-['Instrument_Serif'] italic font-normal capitalize">Home Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            We provide tailored marketing solutions for the industries that build and maintain our homes. 
            Scaling local heroes into market leaders.
          </p>
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Infinite Gradients Overlay */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          <div className="flex flex-col gap-4 w-full relative z-10">
            {/* Ticker Row 1 - Right to Left */}
            <div className="flex whitespace-nowrap overflow-hidden">
              <div className="flex gap-4 animate-scroll-left">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    {[
                      { name: "Roofing", icon: HomeIcon },
                      { name: "HVAC", icon: Wind },
                      { name: "Plumbing", icon: Droplets },
                      { name: "Electrical", icon: Lightbulb },
                      { name: "Solar", icon: Sun },
                      { name: "Landscaping", icon: Shovel },
                      { name: "Home Builders", icon: Hammer },
                    ].map((industry) => (
                      <div 
                        key={industry.name}
                        className="flex items-center gap-5 px-10 py-7 bg-white/5 border border-white/5 rounded-2xl text-white font-normal text-xl min-w-fit"
                      >
                        <industry.icon size={28} className="text-white" />
                        <span>{industry.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Ticker Row 2 - Left to Right */}
            <div className="flex whitespace-nowrap overflow-hidden">
              <div className="flex gap-4 animate-scroll-right">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    {[
                      { name: "Pest Control", icon: Bug },
                      { name: "Contractors", icon: HardHat },
                      { name: "Flooring", icon: Layers },
                      { name: "Garage Door", icon: SlidersHorizontal },
                      { name: "Moving", icon: Truck },
                      { name: "Painting", icon: Paintbrush },
                      { name: "Windows & Doors", icon: LayoutPanelTop },
                    ].map((industry) => (
                      <div 
                        key={industry.name}
                        className="flex items-center gap-5 px-10 py-7 bg-white/5 border border-white/5 rounded-2xl text-white font-normal text-xl min-w-fit"
                      >
                        <industry.icon size={28} className="text-white" />
                        <span>{industry.name}</span>
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
          <button className="bg-white text-black border border-black px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-black hover:text-white transition-all cursor-pointer rounded-none shrink-0">
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
              className="bg-white rounded-none overflow-hidden border border-gray-100 flex flex-col h-full group"
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
      <footer className="relative bg-black pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/images/background-footer.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-green-400 uppercase tracking-widest mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Hurry, only 3 spots left.
          </div>
          <h2 className="text-[clamp(2rem,12vw,4.5rem)] md:text-7xl lg:text-8xl font-normal text-white mb-8 tracking-tight leading-[0.9] normal-case">
            Are <span className="font-['Instrument_Serif'] italic">ready?</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
            This could be the start of something big.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase tracking-wide text-sm md:text-base hover:bg-gray-200 transition-colors cursor-pointer rounded-none">
              Book a call
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 font-bold text-white hover:bg-white/10 transition-colors text-sm md:text-base px-6 py-3.5 md:py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-none">
              See plans
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <nav className="flex flex-wrap items-center justify-center gap-6 text-[15px] font-medium text-gray-500 tracking-normal font-['Satoshi']">
              {["Pricing", "About", "Portfolio", "Careers", "Privacy Policy"].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 text-[15px] font-medium text-gray-500 tracking-normal font-['Satoshi']">
              <span>© Copyright {currentYear} Neven Agency.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
