import { Link } from "wouter";
import { useState, useEffect } from "react";
import { 
  CheckCircle2, Phone, SlidersHorizontal, PenTool, CircleDollarSign, 
  Play, Star, Menu, ChevronDown, ChevronUp, Globe, MapPin, 
  BarChart3, Rocket, Building2, Terminal, Layers, Users,
  Handshake, UserPlus, ArrowRight, Inbox, Hammer, Droplets, 
  Lightbulb, Sun, Shovel, Home as HomeIcon, Bug, Paintbrush, Archive, LayoutPanelTop,
  Wind, HardHat, Truck
} from "lucide-react";
import { LayoutGridIcon } from "@/components/ui/layout-grid-icon";
import { GlobeIcon } from "@/components/ui/globe-icon";
import heroVideo from "@assets/generated_videos/aerial_view_of_roofers_working_on_a_house_roof.mp4";

export default function Home() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeaderWhite = isServicesOpen || isIndustriesOpen || isScrolled;

  return (
    <div className="relative w-full overflow-x-hidden bg-black text-white font-sans">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen w-full overflow-hidden -mb-[1px]">
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
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isHeaderWhite ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'}`}>
          <nav className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-12">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${!isHeaderWhite ? 'invert' : ''}`} 
                />
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8 text-[17px] font-medium">
                <a href="#" className={`hover:text-primary transition-colors ${isHeaderWhite ? 'text-black' : 'text-white'}`}>Pricing</a>
                <a href="#" className={`hover:text-primary transition-colors ${isHeaderWhite ? 'text-black' : 'text-white'}`}>About</a>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      setIsServicesOpen(!isServicesOpen);
                      setIsIndustriesOpen(false);
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isServicesOpen 
                        ? 'bg-black text-white' 
                        : 'hover:text-primary'
                    }`}
                  >
                    Services
                    {isServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <button 
                    onClick={() => {
                      setIsIndustriesOpen(!isIndustriesOpen);
                      setIsServicesOpen(false);
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isIndustriesOpen 
                        ? 'bg-black text-white' 
                        : 'hover:text-primary'
                    }`}
                  >
                    Industries
                    {isIndustriesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <button className={`hidden md:flex items-center gap-2 transition-colors cursor-pointer group ${isHeaderWhite ? 'text-black' : 'text-white'}`}>
                <GlobeIcon size={26} className={isHeaderWhite ? 'text-black' : 'text-white'} />
                <ChevronDown size={18} className="text-gray-400 group-hover:text-primary" />
              </button>
              <button className="hidden md:block bg-primary text-white px-4 md:px-6 py-2.5 md:py-3 font-bold uppercase tracking-wide text-xs md:text-sm hover:bg-black transition-colors cursor-pointer shrink-0 rounded-sm">
                Schedule Intro Call
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 ${isHeaderWhite ? 'text-black' : 'text-white'}`}
              >
                <LayoutGridIcon size={32} />
              </button>
            </div>
          </nav>

          {/* Mobile Sidebar */}
          <div className={`fixed inset-0 z-[200] lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute top-0 right-0 bottom-0 w-full bg-white text-black flex flex-col shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronDown className="rotate-90" size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <a href="/" className="block text-xl font-bold hover:text-primary transition-colors">Home</a>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`w-full flex items-center justify-between text-xl font-bold transition-all duration-300 p-3 rounded-lg ${isMobileServicesOpen ? 'bg-black text-white' : 'hover:text-primary'}`}
                  >
                    Services
                    <ChevronDown className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-[#F9FAFB] rounded-xl border border-gray-100 p-4 space-y-8">
                      {/* Search & Strategy */}
                      <div className="space-y-4">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">Search & Strategy</h4>
                        <div className="space-y-1">
                          {[
                            { name: "Local SEO", desc: "Dominate local search results in your service area", icon: BarChart3 },
                            { name: "AI Search Optimization", desc: "Future-proof your presence for AI-driven search", icon: Terminal },
                            { name: "Organic SEO", desc: "Build long-term authority and organic traffic", icon: Globe }
                          ].map((item) => (
                            <a key={item.name} href="#" className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group">
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base font-bold text-black block leading-tight">{item.name}</span>
                                <p className="text-[13px] text-gray-500 leading-tight">{item.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Paid Media & Lead Gen */}
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">Paid Media & Lead Gen</h4>
                        <div className="space-y-1">
                          {[
                            { name: "Pay-Per-Click", desc: "Instant leads through Google Ads and Bing", icon: CircleDollarSign },
                            { name: "LSA Management", desc: "Maximize your Google Local Services Ads ROI", icon: Users },
                            { name: "OTT Advertising", desc: "Reach homeowners on streaming TV platforms", icon: Layers }
                          ].map((item) => (
                            <a key={item.name} href="#" className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group">
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base font-bold text-black block leading-tight">{item.name}</span>
                                <p className="text-[13px] text-gray-500 leading-tight">{item.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                    className={`w-full flex items-center justify-between text-xl font-bold transition-all duration-300 p-3 rounded-lg ${isMobileIndustriesOpen ? 'bg-black text-white' : 'hover:text-primary'}`}
                  >
                    Industries
                    <ChevronDown className={`transition-transform duration-300 ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileIndustriesOpen ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-[#F9FAFB] rounded-xl border border-gray-100 p-4 space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3">Industries We Serve</h4>
                        <div className="space-y-1">
                          {[
                            { name: "Roofing", desc: "Dominate local search and lead generation for roofing specialists", icon: HomeIcon },
                            { name: "HVAC", desc: "Maximize call volume and emergency service leads for HVAC", icon: Wind },
                            { name: "Plumbing", desc: "High-intent lead generation and local SEO for plumbing companies", icon: Droplets },
                            { name: "Electrical", desc: "Scale your electrical service business with targeted digital growth", icon: Lightbulb }
                          ].map((item) => (
                            <a key={item.name} href="#" className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-all duration-300 group">
                              <item.icon className="w-6 h-6 text-gray-400 group-hover:text-black mt-1 shrink-0" />
                              <div className="space-y-1">
                                <span className="text-base font-bold text-black block leading-tight">{item.name}</span>
                                <p className="text-[13px] text-gray-500 leading-tight">{item.desc}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#" className="block text-xl font-bold hover:text-primary transition-colors px-3">Pricing</a>
                <a href="#" className="block text-xl font-bold hover:text-primary transition-colors px-3">About</a>
              </div>

              <div className="p-6 border-t border-gray-100 space-y-6">
                <div className="flex items-center justify-between py-2 cursor-pointer group px-3">
                  <div className="flex items-center gap-3">
                    <Globe size={24} className="text-gray-400 group-hover:text-black transition-colors" />
                    <span className="text-lg font-bold">English</span>
                  </div>
                  <ChevronDown size={20} className="text-gray-400" />
                </div>
                <button className="w-full py-4 px-6 border-2 border-gray-900 rounded-full text-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
              isServicesOpen ? 'max-h-[1200px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
          >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-12 flex">
              {/* Main Content */}
              <div className="flex-1 space-y-12 pr-12 border-r border-gray-100">
                {/* Search & Strategy */}
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Search & Strategy</h4>
                  <div className="grid grid-cols-3 gap-1">
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <BarChart3 className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Local SEO</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Dominate local search results in your service area</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Terminal className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">AI Search Optimization</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Future-proof your presence for AI-driven search</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Globe className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Organic SEO</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Build long-term authority and organic traffic</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="h-px bg-gray-100 w-full mt-4"></div>
                </div>

                {/* Paid Media & Lead Gen */}
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Paid Media & Lead Gen</h4>
                  <div className="grid grid-cols-3 gap-1">
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <CircleDollarSign className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Pay-Per-Click</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Instant leads through Google Ads and Bing</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Users className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">LSA Management</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Maximize your Google Local Services Ads ROI</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Layers className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">OTT Advertising</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Reach homeowners on streaming TV platforms</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="h-px bg-gray-100 w-full mt-4"></div>
                </div>

                {/* Creative & Content */}
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Creative & Content</h4>
                  <div className="grid grid-cols-3 gap-1">
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <PenTool className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Website Design</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">High-converting websites for home services</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Rocket className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Digital PR</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Earn mentions and backlinks from top publications</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Handshake className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Social Media</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Build a community and brand on social platforms</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                      <Users className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                      <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                        <span className="text-base font-bold text-black block transition-colors leading-tight">Email Marketing</span>
                        <div className="overflow-hidden">
                          <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">Nurture leads and increase customer lifetime value</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-[350px] pl-12 space-y-8">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Our Blog</h4>
                
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] bg-primary/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                       <div className="text-primary font-bold text-2xl italic tracking-tighter">Insights</div>
                    </div>
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary">
                      The Future of Home Services Marketing in 2026
                    </h5>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                      Stay ahead of the curve with our latest insights on industry trends, AI technology, and growth strategies...
                    </p>
                    <a href="#" className="text-xs font-bold text-primary flex items-center gap-1">
                      Read More <ArrowRight size={12} />
                    </a>
                  </div>

                  <div className="group cursor-pointer border-t border-gray-100 pt-6">
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary">
                      How to Maximize Your ROI with Google Local Services Ads
                    </h5>
                    <a href="#" className="text-xs font-bold text-primary flex items-center gap-1">
                      Read More <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Industries Mega Menu Dropdown */}
          <div 
            className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${
              isIndustriesOpen ? 'max-h-[1200px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
          >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-12 flex">
              {/* Main Content */}
              <div className="flex-1 space-y-12 pr-12 border-r border-gray-100">
                <div className="group/section">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Industries We Serve</h4>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { name: "Roofing", desc: "Dominate local search and lead generation for roofing specialists", icon: HomeIcon },
                      { name: "HVAC", desc: "Maximize call volume and emergency service leads for HVAC", icon: Wind },
                      { name: "Plumbing", desc: "High-intent lead generation and local SEO for plumbing companies", icon: Droplets },
                      { name: "Electrical", desc: "Scale your electrical service business with targeted digital growth", icon: Lightbulb },
                      { name: "Solar", desc: "Capture high-quality solar leads and residential installation projects", icon: Sun },
                      { name: "Landscaping", desc: "Build a premium brand and organic presence for landscaping services", icon: Shovel },
                      { name: "Home Builders", desc: "Strategic marketing and high-converting websites for custom builders", icon: Hammer },
                      { name: "Pest Control", desc: "Consistent lead flow and local visibility for pest management", icon: Bug },
                      { name: "Remodeling", desc: "Showcase high-end renovation work to qualified local homeowners", icon: PenTool },
                      { name: "Contractors", desc: "Full-funnel digital marketing for multi-service general contractors", icon: HardHat },
                      { name: "Flooring", desc: "Drive residential and commercial flooring installation projects", icon: Layers },
                      { name: "Franchises", desc: "Scalable marketing systems for home service franchise networks", icon: LayoutGridIcon },
                      { name: "Garage Door", desc: "Instant visibility and call tracking for garage door services", icon: SlidersHorizontal },
                      { name: "Moving", desc: "Targeted customer acquisition for local and long-distance movers", icon: Truck },
                      { name: "Painting", desc: "Branding and lead gen that highlights quality painting results", icon: Paintbrush },
                      { name: "Storage", desc: "Boost occupancy rates with strategic local search optimization", icon: Archive },
                      { name: "Windows & Doors", desc: "Capture high-value leads for window and door replacements", icon: LayoutPanelTop }
                    ].map((industry) => (
                      <a key={industry.name} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all duration-300 group/item overflow-hidden">
                        <industry.icon className="w-5 h-5 text-gray-400 group-hover/item:text-black mt-1 shrink-0" />
                        <div className="grid transition-all duration-300 grid-rows-[auto_0fr] group-hover/section:grid-rows-[auto_1fr]">
                          <span className="text-base font-bold text-black block transition-colors leading-tight">{industry.name}</span>
                          <div className="overflow-hidden">
                            <p className="text-[13px] text-gray-500 pt-1 transition-all duration-300">{industry.desc}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-[350px] pl-12 space-y-8">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Case Studies</h4>
                
                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-[16/9] bg-[#0F0F23] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                       <div className="text-white font-bold text-2xl italic tracking-tighter">Success</div>
                    </div>
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary">
                      How a Roofing Client Scaled to $10M ARR
                    </h5>
                    <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                      Read how our strategic SEO and paid media approach transformed a local business into a regional leader...
                    </p>
                    <a href="#" className="text-xs font-bold text-primary flex items-center gap-1">
                      View Case Study <ArrowRight size={12} />
                    </a>
                  </div>

                  <div className="group cursor-pointer border-t border-gray-100 pt-6">
                    <h5 className="text-base font-bold mb-2 leading-tight group-hover:text-primary">
                      150% Increase in Qualified Leads for HVAC Partner
                    </h5>
                    <a href="#" className="text-xs font-bold text-primary flex items-center gap-1">
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
            isServicesOpen || isIndustriesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48 pt-48 md:pt-48 lg:pt-56 pb-20">
          <div className="max-w-3xl">
            <h2 className="text-gray-400 font-bold tracking-widest text-sm mb-4 uppercase">
              Home Services Marketing Agency
            </h2>
            
            <h1 className="text-[clamp(1.8rem,11vw,3.8rem)] md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[0.9] mb-6 md:mb-10 text-white tracking-tight break-words">
              Championing<br />
              Hometown Heroes
            </h1>

            <div className="space-y-4 mb-8 md:mb-12">
              <div className="flex items-start gap-3 md:gap-4">
                <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1 shrink-0" />
                <p className="text-base md:text-lg font-medium text-white">
                  <span className="font-bold">Proactive:</span> We make suggestions that actually move the needle each month.
                </p>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <PenTool className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1 shrink-0" />
                <p className="text-base md:text-lg font-medium text-white">
                  <span className="font-bold">Cutting Edge:</span> We're always utilizing the latest technology and sharing that with you.
                </p>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <CircleDollarSign className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1 shrink-0" />
                <p className="text-base md:text-lg font-medium text-white">
                  <span className="font-bold">Transparent ROI Partner:</span> We show you all the work we complete each month.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-20">
              <button className="w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-3.5 md:py-4 font-bold uppercase tracking-wide text-sm md:text-base hover:bg-white hover:text-black transition-colors cursor-pointer rounded-sm">
                Get Started Now
              </button>
              
              <a href="#" className="flex items-center gap-2 font-bold underline decoration-1 underline-offset-4 text-white hover:text-primary transition-colors text-sm md:text-base">
                <Play className="w-4 h-4 fill-white" />
                Real Customer Experiences
              </a>
            </div>

            {/* Badges / Social Proof */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-800 pt-8">
              {/* Google Reviews */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
                  170+ Five-Star<br/>Google Reviews
                </div>
              </div>

              <div className="h-8 w-px bg-gray-800 mx-2 hidden sm:block"></div>

              {/* Best Places to Work */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-white flex flex-col items-center justify-center text-[8px] font-bold leading-none bg-white text-black">
                    <span>BP</span>
                    <div className="w-full h-px bg-black my-0.5"></div>
                    <span>/W</span>
                </div>
                <div className="text-sm font-bold leading-tight text-white">
                  #6 Best Small<br/>Biz to Work For
                </div>
              </div>

              <div className="h-8 w-px bg-gray-800 mx-2 hidden sm:block"></div>

                {/* Inc 5000 */}
                <div className="flex items-center gap-3">
                  <div className="font-serif font-black italic text-2xl tracking-tighter text-white">
                    Inc.<br/><span className="text-xs not-italic font-sans block -mt-1 tracking-normal text-gray-400">5000</span>
                  </div>
                  <div className="text-sm font-bold leading-tight text-white">
                  Ranked #2031 on<br/>the INC. 5000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-black py-24 w-full relative z-20">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-[#A1A1AA] font-bold tracking-widest text-xs mb-4 uppercase">
              Elevating Home Service Businesses
            </h3>
            
            <h2 className="text-[clamp(1.8rem,9vw,3.2rem)] md:text-5xl lg:text-6xl font-heading font-bold uppercase leading-[0.9] text-white tracking-tight">
              We Love Serving Our Industry
            </h2>
          </div>

          <div 
            className="relative overflow-hidden rounded-2xl bg-[#18181B] p-8 md:p-12 border border-[#323232]"
            style={{
              boxShadow: '0 -4px 0 0 #323232',
              borderTopWidth: '4px',
              borderLeftWidth: '1px',
              borderRightWidth: '1px',
              borderBottomWidth: '1px'
            }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                <div className="bg-[#27272A]/50 border border-[#3F3F46] p-6 rounded-xl flex items-center gap-4 hover:bg-[#27272A] transition-colors cursor-pointer group">
                   <div className="w-12 h-12 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-white uppercase tracking-tight">Roofing</span>
                </div>

                <div className="bg-[#27272A]/50 border border-[#3F3F46] p-6 rounded-xl flex items-center gap-4 hover:bg-[#27272A] transition-colors cursor-pointer group">
                   <div className="w-12 h-12 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M12 12v-4M12 12l3 3M12 12l-3 3" />
                        <path d="M12 7v1M12 16v1M7 12h1M16 12h1" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-white uppercase tracking-tight">HVAC</span>
                </div>

                <div className="bg-[#27272A]/50 border border-[#3F3F46] p-6 rounded-xl flex items-center gap-4 hover:bg-[#27272A] transition-colors cursor-pointer group">
                   <div className="w-12 h-12 flex items-center justify-center text-white">
                      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3v18M3 12h18" strokeDasharray="2 2"/>
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                   </div>
                   <span className="text-xl font-bold text-white uppercase tracking-tight">Plumbing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white leading-tight">
                    Industry leaders recognize our work & endorse us
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>We're constantly learning about the trades</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>Dedicated to driving more leads to your business</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span>We partner with the best in roofing, HVAC, plumbing and home services</span>
                    </li>
                  </ul>
                  
                  <div className="bg-[#09090B] p-6 rounded-xl border border-[#27272A] relative overflow-hidden group">
                    <p className="text-sm italic text-[#D1D1D6] mb-4 relative z-10">
                      "This last year we spent far less than before, and we generated well over a million dollars in sales from paid ads."
                    </p>
                    <div className="flex items-center gap-3 relative z-10">
                      <img src="https://avatar.vercel.sh/marcus" alt="Marcus" className="w-10 h-10 rounded-full border border-[#3F3F46]" />
                      <div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider">Marcus Sheridan</div>
                        <div className="text-[10px] text-[#71717A] uppercase">Home Services Client</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                   <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
                    alt="Clients and Coaches" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black transition-transform group-hover:scale-110">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                      Clients & Coaches
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
