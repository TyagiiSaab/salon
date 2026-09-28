/* ————————————————————————————————
  VELOURA · site.config — EDIT EVERYTHING HERE
  Salon name, images, services, prices, team,
  gallery, reviews, hours, contact, accent.
———————————————————————————————— */
window.SITE = {
  brand: {
    name: "VELOURA",
    suffix: "Maison de Beauté",
    logoText: "VELOURA",
    est: "EST. 2019",
    city: "PANIPAT, INDIA",
    hoursShort: "OPEN TODAY · 10AM — 8PM",
  },
  contact: {
    phoneDisplay: "+91 98960 12345",
    phoneLink: "+919896012345",
    whatsapp: "https://wa.me/919896012345?text=Hi%20VELOURA%2C%20I%27d%20like%20to%20book%20an%20appointment.",
    instagram: "https://instagram.com",
    instagramHandle: "@veloura.panipat",
    email: "hello@veloura.in",
    bookingUrl: "#booking",
  },
  location: {
    addressLine1: "SCO 12, First Floor, G.T. Road",
    addressLine2: "Model Town, Panipat, Haryana 132103",
    hours: [
      ["Mon — Fri", "10:00 AM — 8:00 PM"],
      ["Saturday", "10:00 AM — 9:00 PM"],
      ["Sunday", "11:00 AM — 7:00 PM"],
    ],
    mapsUrl: "https://maps.google.com/?q=G.T.+Road+Model+Town+Panipat",
  },
  // Switch accent easily: plum (default) / olive / burgundy / copper
  theme: {
    active: "plum",
    presets: {
      plum: "#704B5D",
      olive: "#5A5E3F",
      burgundy: "#6E2A35",
      copper: "#A35B2A",
    },
  },
  hero: {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
    portrait:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
  },
  /* ══ CORE MENU · 12 signature services ══ */
  services: [
    { cat: "Hair", name: "Signature Haircut", desc: "Consultation, precision cut, cleanse + editorial finish.", price: "₹800", duration: "45 MIN", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" },
    { cat: "Hair", name: "Luxe Hair Spa Ritual", desc: "Deep-repair masque, steam, scalp massage + gloss seal.", price: "₹1,500", duration: "60 MIN", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop" },
    { cat: "Hair", name: "Keratin Silk Therapy", desc: "Frizz-erasing keratin, glass-straight finish, 3-month shine.", price: "FROM ₹4,999", duration: "150 MIN", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" },
    { cat: "Color", name: "Global Colour", desc: "Custom-mixed shade, bond-care + tone-perfect finish.", price: "FROM ₹2,500", duration: "120 MIN", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" },
    { cat: "Color", name: "Balayage / Highlights", desc: "Hand-painted dimension, gloss toner + styling.", price: "FROM ₹4,500", duration: "180 MIN", img: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=800&auto=format&fit=crop" },
    { cat: "Styling", name: "Editorial Blowout", desc: "Volume, movement and mirror shine. Red-carpet ready.", price: "₹900", duration: "40 MIN", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop" },
    { cat: "Styling", name: "Bridal Couture Hair", desc: "Trial + wedding-day styling, extensions & drape setting.", price: "FROM ₹6,000", duration: "120 MIN", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
    { cat: "Beard", name: "Beard Sculpt", desc: "Precision shaping, hot towel, razor detailing + oils.", price: "₹500", duration: "30 MIN", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" },
    { cat: "Beard", name: "Skin Fade + Beard", desc: "Signature fade, beard architecture + cold finish.", price: "₹900", duration: "60 MIN", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop" },
    { cat: "Skin", name: "Glass Glow Facial", desc: "Cleanse, exfoliation, lymphatic massage + glass glow.", price: "₹1,800", duration: "60 MIN", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop" },
    { cat: "Nails", name: "Gel-X Extensions", desc: "Chip-proof extensions in almond, coffin or squoval. Art included.", price: "FROM ₹1,499", duration: "90 MIN", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" },
    { cat: "Packages", name: "The Full Reset", desc: "Cut + colour gloss + spa + facial. Half-day luxury.", price: "₹7,999", duration: "240 MIN", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop" },
  ],
  /* ══ HONEST RESULTS · finished work, no fake before/afters ══ */
  transformations: [
    { img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", service: "Lived-in Balayage", stylist: "Mehak Arora", price: "FROM ₹4,500" },
    { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop", service: "Precision Bob", stylist: "Sana Kapoor", price: "₹800" },
    { img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop", service: "Skin Fade + Beard", stylist: "Rohan Malik", price: "₹900" },
    { img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800&auto=format&fit=crop", service: "Gloss + Layers", stylist: "Sana Kapoor", price: "₹800" },
    { img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop", service: "Copper Melt + Cut", stylist: "Mehak Arora", price: "FROM ₹2,999" },
    { img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop", service: "Party Glam Makeup", stylist: "Ira Sharma", price: "FROM ₹2,500" },
  ],
  stylists: [
    { name: "Mehak Arora", role: "Colour Specialist", exp: "9 yrs", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", insta: "https://instagram.com" },
    { name: "Rohan Malik", role: "Master Barber", exp: "8 yrs", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", insta: "https://instagram.com" },
    { name: "Sana Kapoor", role: "Cut & Editorial", exp: "7 yrs", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", insta: "https://instagram.com" },
    { name: "Arjun Singh", role: "Skin & Beard", exp: "6 yrs", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", insta: "https://instagram.com" },
    { name: "Ira Sharma", role: "Makeup & Nails", exp: "5 yrs", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop", insta: "https://instagram.com" },
    { name: "Kabir Rana", role: "Spa & Rituals", exp: "6 yrs", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", insta: "https://instagram.com" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop",
  ],
  reviews: [
    { quote: "Best haircut I've had in Panipat. They actually listen, then execute. My balayage still gets compliments two months later.", name: "Priya Sharma", meta: "Balayage · Mehak", stars: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
    { quote: "As a guy who's picky about fades — Rohan is surgical. Clean shop, no rush, proper consultation. Worth every rupee.", name: "Karan Mehta", meta: "Skin Fade · Rohan", stars: 5, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
    { quote: "Booked bridal + family. Calm, punctual, insanely detailed. The photos speak for themselves.", name: "Simran Kaur", meta: "Bridal · Sana", stars: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
    { quote: "Gel-X nails and a glow facial in one visit — I walked out feeling like a magazine cover.", name: "Aditya Verma", meta: "Nails + Skin · Ira", stars: 5, img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop" },
    { quote: "The luxe hair spa ritual fixed a month of stress in one sitting. My new Sunday habit.", name: "Neha Gupta", meta: "Hair Spa · Sana", stars: 5, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop" },
    { quote: "Booked the Full Reset before my brother's wedding — cut, gloss, facial. Walked in tired, walked out dangerous.", name: "Rahul Jain", meta: "Full Reset · Arjun", stars: 5, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    { quote: "My keratin is three months old and still mirror-straight. They under-promised and over-delivered on the frizz fix.", name: "Ananya Rao", meta: "Keratin Silk · Mehak", stars: 5, img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" },
    { quote: "Got the glass glow facial before my sister's wedding. Strangers asked for my 'filter' — it was just my skin.", name: "Vikram Malhotra", meta: "Glow Facial · Arjun", stars: 5, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
    { quote: "Went copper-red for the festive season and the colour is still rich two months later. Consultation was honest, price was exact.", name: "Tanvi Khanna", meta: "Global Colour · Mehak", stars: 4, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
  ],
};
