// config/site.config.js — v3.0 SINGLE SOURCE OF TRUTH
// Noyon Boostify × Naviro — "Turn Clicks Into Customers."

const siteConfig = {

  brand: {
    fullName:    "Noyon Boostify × Naviro",
    shortName:   "Boostify",
    tagline:     "Turn Clicks Into Customers.",
    description: "Performance-driven Meta & TikTok ad agency. Data-backed. Results-focused.",
    navName:     "Boostify",
    layers: {
      noyon:    "Personal Brand — The trusted face behind every strategy.",
      boostify: "Marketing Service — Meta + TikTok ads that convert.",
      naviro:   "Coming Soon — A smarter system for ad management.",
    },
  },

  contact: {
    whatsappNumber:  process.env.NEXT_PUBLIC_WHATSAPP || "+8801339462285",
    whatsappMessage: "Hi Noyon Boostify! I want to scale my ads. Can we talk?",
    email:           process.env.NEXT_PUBLIC_EMAIL || "hello@noyonboostify.com",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber.replace(/\D/g,'')}?text=${encodeURIComponent(this.whatsappMessage)}`;
    },
  },

  stats: [
    { value: 47,   suffix: "+",   label: "Brands Scaled",        color: "accent" },
    { value: 3.8,  suffix: "×",   label: "Average ROAS",         color: "green"  },
    { value: 2.4,  suffix: "Cr+", label: "Ad Spend Managed (৳)", color: "accent" },
    { value: 98,   suffix: "%",   label: "Client Retention",      color: "green"  },
  ],

  services: [
    {
      id:          "meta-ads",
      icon:        "meta",
      title:       "Meta Ads",
      subtitle:    "Facebook & Instagram",
      description: "Find buyers, not browsers. Full-funnel campaigns built to convert scroll into sales.",
      highlights:  ["Creative Strategy", "Audience Research", "A/B Testing", "Weekly Reporting"],
      badge:       "Most Popular",
      badgeType:   "green",
    },
    {
      id:          "tiktok-ads",
      icon:        "tiktok",
      title:       "TikTok Ads",
      subtitle:    "Short-Form Video Advertising",
      description: "Native creatives that stop the scroll. Built for the algorithm. Built for results.",
      highlights:  ["UGC-style Creatives", "Trend Research", "Spark Ads", "Pixel + Event Setup"],
      badge:       "Fastest Growth",
      badgeType:   "blue",
    },
    {
      id:          "lead-gen",
      icon:        "leadgen",
      title:       "Lead Generation",
      subtitle:    "Fill Your Sales Pipeline",
      description: "High-quality leads for local businesses, coaches, and service providers.",
      highlights:  ["Landing Page Strategy", "Form Optimization", "Retargeting", "CRM Setup"],
      badge:       null,
    },
    {
      id:          "ecom-ads",
      icon:        "ecommerce",
      title:       "E-commerce Ads",
      subtitle:    "Product Sales & ROAS",
      description: "Catalog ads, DPA, and retargeting designed to turn browsers into buyers at scale.",
      highlights:  ["Dynamic Product Ads", "ROAS Optimization", "Cart Abandonment", "Scaling"],
      badge:       null,
    },
    {
      id:          "retargeting",
      icon:        "retarget",
      title:       "Retargeting",
      subtitle:    "Recover Lost Customers",
      description: "Re-engage warm audiences who visited but didn't buy. Highest ROI ad type.",
      highlights:  ["Custom Audiences", "Lookalike Audiences", "Cross-Platform", "Sequence Ads"],
      badge:       null,
    },
    {
      id:          "ad-infra",
      icon:        "infrastructure",
      title:       "Ad Infrastructure",
      subtitle:    "Technical Foundation",
      description: "Pixel setup, event tracking, UTM structure, and attribution done right.",
      highlights:  ["Meta Pixel", "TikTok Pixel", "Event Tracking", "UTM Architecture"],
      badge:       "One-Time Setup",
      badgeType:   "blue",
    },
  ],

  packages: [
    {
      name:      "Starter Boost",
      tagline:   "Get your first wins",
      features:  ["Budget optimization", "Basic targeting", "1 active campaign", "Bi-weekly reporting"],
      featured:  false,
    },
    {
      name:      "Growth Engine",
      tagline:   "Scale what works",
      features:  ["Full funnel campaigns", "Creative A/B testing", "Retargeting", "Weekly reporting"],
      featured:  true,
      badge:     "Most Popular",
    },
    {
      name:      "Scale Pro",
      tagline:   "Dominate your market",
      features:  ["Advanced scaling system", "Daily optimization", "ROI-focused strategy", "Dedicated support"],
      featured:  false,
    },
  ],

  process: [
    { step: "01", title: "Discovery",      description: "Deep research into your product, audience, and competitors." },
    { step: "02", title: "Creative Brief", description: "A tested creative strategy before any ad goes live." },
    { step: "03", title: "Launch & Test",  description: "Multiple ad variations tested systematically, not randomly." },
    { step: "04", title: "Optimize",       description: "Weekly data analysis. Kill losers. Scale winners." },
    { step: "05", title: "Scale",          description: "Proven creatives + budget scaling = predictable growth." },
  ],

  testimonials: [
    {
      name:        "Rifat Hassan",
      role:        "E-commerce Founder",
      company:     "StyleBD",
      text:        "Went from 1.2× ROAS to 4.1× in 6 weeks. These guys didn't just run ads — they built a system.",
      initials:    "RH",
      result:      "4.1× ROAS",
      avatarColor: "#2D8CFF",
      resultType:  "green",
    },
    {
      name:        "Tasnia Akter",
      role:        "Beauty Brand Owner",
      company:     "GlowUp BD",
      text:        "CPA dropped 62%. I've never seen results this fast from any agency. Truly data-driven.",
      initials:    "TA",
      result:      "62% CPA Drop",
      avatarColor: "#00FF9D",
      resultType:  "green",
    },
    {
      name:        "Mehedi Khan",
      role:        "Digital Retailer",
      company:     "TechGear BD",
      text:        "Professional, transparent, results-focused. Tried 3 agencies before. Noyon Boostify is different.",
      initials:    "MK",
      result:      "3.2× Revenue",
      avatarColor: "#2D8CFF",
      resultType:  "accent",
    },
  ],

  seo: {
    title:       "Noyon Boostify × Naviro — Meta & TikTok Ads Agency Bangladesh",
    description: "Performance-driven Meta Ads and TikTok Ads agency. Real ROAS. Real results. Start on WhatsApp.",
    ogImage:     "/og-image.png",
    keywords:    ["meta ads", "tiktok ads", "digital advertising Bangladesh", "ROAS agency", "performance marketing BD"],
    canonical:   "https://noyonboostify.com",
  },

  colors: {
    bg:        "#000000",
    bgDeep:    "#0A1F44",
    accent:    "#2D8CFF",
    green:     "#00FF9D",
  },
};

export default siteConfig;
