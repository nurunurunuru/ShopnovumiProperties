
import React, { useEffect, useState } from "react";
import "./styles.css";

const COMPANY = {
  name: "Shopnovumi Properties",
  slogan: "স্মার্ট বিনিয়োগে, সমৃদ্ধ ভবিষ্যৎ!",
  logo: "https://i.postimg.cc/2S9NC5p0/Shopnovumi-Properties-Logo.png",
  hotline: "+8809658355908",
  whatsapp: "01734697485",
  facebook: "https://www.facebook.com/shopnovumiproperties1",
  headOffice: "Lotus Kamal Tower-2 (Level-11), 59 & 61 Gulshan South Avenue, Gulshan-1, Dhaka-1212",
  salesOffice: "Hosaf Shopping Complex, Level - 3, Malibagh, Dhaka - 1217"
};

const projects = [
  { id: "western", name: "ঢাকা ওয়েস্টার্ন ভ্যালি", en: "Dhaka Western Valley", image: "https://i.postimg.cc/JhJpxSHS/7.jpg", short: "মিরপুর বেড়িবাঁধ সংলগ্ন প্রাইম লোকেশনে পরিকল্পিত আবাসন ও বিনিয়োগ প্রকল্প।" },
  { id: "eco", name: "পুষ্প ইকো সিটি", en: "Pushpo Eco City", image: "https://i.postimg.cc/fyYT5zjV/Untitled-design.jpg", short: "সবুজ, শান্ত ও পরিবারবান্ধব পরিবেশে আধুনিক জীবনযাপনের প্রকল্প।" },
  { id: "satellite", name: "পুষ্প স্যাটেলাইট সিটি", en: "Pushpo Satellite City", image: "https://i.postimg.cc/k47Xg3Qr/Chat-GPT-Image-May-1-2026-10-35-41-PM.png", short: "আধুনিক নগর পরিকল্পনা ও প্রিমিয়াম সুবিধাসম্পন্ন স্যাটেলাইট সিটি প্রকল্প।" },
  { id: "bay", name: "দ্যা বে আইকন - হোটেল এন্ড রিসোর্ট", en: "The Bay Icon Hotel & Resort", image: "https://i.postimg.cc/pLr7f0B6/Shopnovumi-Properties-FB-Post-(3).png", short: "সমুদ্রঘেঁষা প্রিমিয়াম হোটেল ও রিসোর্ট কনসেপ্ট।" },
  { id: "dubai", name: "দুবাই গার্ডেন সিটি", en: "Dubai Garden City", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80", short: "সবুজ পরিবেশ, আধুনিক স্থাপত্য ও প্রিমিয়াম কমিউনিটি সুবিধা।" },
  { id: "condo", name: "পুষ্প সিটি লাক্সারিয়াস কনডোমিনিয়াম", en: "Pushpo City Luxurious Condominium", image: "https://i.postimg.cc/rFRccFBq/Chat-GPT-Image-May-1-2026-10-37-19-PM.png", short: "কমফোর্ট, নিরাপত্তা ও প্রিমিয়াম পরিকল্পনার সমন্বয়ে লাক্সারিয়াস কনডোমিনিয়াম।" }
];

const westernGallery = [
  "https://i.postimg.cc/JhJpxSHS/7.jpg", "https://i.postimg.cc/cLf3bWT1/8.jpg", "https://i.postimg.cc/zf5hmQPh/9.jpg",
  "https://i.postimg.cc/jjX7RhGm/10.jpg", "https://i.postimg.cc/bzQ06xFT/11.jpg", "https://i.postimg.cc/76tJ2ZYk/12.jpg"
];

const ecoGallery = [
  "https://i.postimg.cc/nLQ4Z7Hn/1.jpg", "https://i.postimg.cc/qqpy852v/2.jpg", "https://i.postimg.cc/KcQg6QnN/3.jpg",
  "https://i.postimg.cc/02BKQQX1/4.jpg", "https://i.postimg.cc/Hk8c7gFM/5.jpg", "https://i.postimg.cc/W3N1SLYW/6.jpg"
];

const westernMaps = [
  { title: "Phase 1", src: "https://i.postimg.cc/T3BQjKZT/Screenshot-(229).png" },
  { title: "Phase 2", src: "https://i.postimg.cc/ZKRL1PmR/Screenshot-(230).png" }
];

const ecoMaps = [
  { title: "Sector 1", src: "https://i.postimg.cc/9FWr19K4/Sector-01-scaled.webp" },
  { title: "Sector 2", src: "https://i.postimg.cc/ZnJK7kf1/Sector-02-2-scaled.webp" },
  { title: "Sector 3", src: "https://i.postimg.cc/ydHVx4zK/Sector-03-2-scaled.webp" }
];

const westernPrices = [
  { type: "বাণিজ্যিক প্লট (কর্ণার)", phase1: 2400000, phase2: 2200000 },
  { type: "বাণিজ্যিক প্লট (অন্যান্য)", phase1: 2300000, phase2: 2100000 },
  { type: "আবাসিক প্লট (কর্ণার)", phase1: 1800000, phase2: 1600000 },
  { type: "আবাসিক প্লট (দক্ষিণ)", phase1: 1750000, phase2: 1550000 },
  { type: "আবাসিক প্লট (অন্যান্য)", phase1: 1700000, phase2: 1500000 }
];

const ecoPrices = [
  { type: "আবাসিক প্লট (কর্ণার)", sector1: 1350000, sector2: 1000000, sector3: 900000 },
  { type: "আবাসিক প্লট (দক্ষিণ)", sector1: 1300000, sector2: 950000, sector3: 850000 },
  { type: "আবাসিক প্লট (অন্যান্য)", sector1: 1250000, sector2: 900000, sector3: 800000 },
  { type: "বাণিজ্যিক প্লট", sector1: 2000000, sector2: 1500000, sector3: 1200000 }
];

const westernAmenities = ["মসজিদ", "হাসপাতাল", "কমিউনিটি সেন্টার", "স্কুল, কলেজ, বিশ্ববিদ্যালয়", "শপিং সেন্টার", "জিমনেসিয়াম", "সিনে-ক্যাফে", "নিরাপত্তা ব্যবস্থা ও পুলিশ বক্স", "খেলার মাঠ", "শিশু পার্ক ও অ্যামিউজমেন্ট"];
const ecoAmenities = ["ডে-কেয়ার সেন্টার", "স্কুল, কলেজ ও বিশ্ববিদ্যালয়", "খেলার মাঠ", "মসজিদ", "ক্লিনিক ও হাসপাতাল", "বাংলা ও ইংরেজি মাধ্যমের মাদ্রাসা", "শপিং সেন্টার ও সিনে-ক্যাফে", "শিশু পার্ক ও অ্যামিউজমেন্ট পার্ক", "কমিউনিটি সেন্টার", "জিমনেসিয়াম", "নিরাপত্তা ব্যবস্থা ও পুলিশ বক্স", "কবরস্থান"];
const universities = ["MIST", "BUP", "BUiT", "BUBT", "Asian University", "Uttara University", "Shanto Mariam University", "World University", "BGMEA University", "IUBAT University", "Atish Dipankar University", "European University of Bangladesh", "Brac University", "Manarat University", "Eastern University", "Daffodil University"];

const genericDetails = {
  satellite: {
    label: "Pushpo Satellite City",
    title: "আধুনিক স্যাটেলাইট সিটি প্রকল্প",
    intro: "ঢাকা জিরো পয়েন্ট থেকে ২২ কিলোমিটার এবং পদ্মাসেতু হতে ১৩ কিলোমিটারের মধ্যে অবস্থিত এবং ৪০০ ফুট প্রশস্ত ঢাকা-মাওয়া মহাসড়কের পাশে Pushpo Satellite City প্রকল্পের অবস্থান। প্রকল্প এলাকা প্রাকৃতিক সবুজের মাঝে লেক বেষ্টিত আবাসন প্রকল্প।",
    about: "আমাদের প্রকল্পটি ঢাকা-মাওয়া হাইওয়ে রোড সংলগ্ন। হাইওয়ে থেকে ১৩০ ফুট এডিনিউ রাস্তা এবং অভ্যন্তরে ৬০ ফুট, ৫০ ফুট, ৪০ ফুট ও ৩০ ফুট রাস্তা ব্যবহার করে যোগাযোগ ব্যবস্থা স্থাপন করা হয়েছে।",
    highlights: ["৪০০ ফুট ঢাকা-মাওয়া মহাসড়ক সংলগ্ন", "লেক বেষ্টিত সবুজ আবাসন", "৩.৫, ৫ ও ১০ কাঠার প্লট"],
    reasons: ["সরকারী নীতিমালা অনুযায়ী পরিকল্পিত প্রকল্প।", "পদ্মাসেতু অঞ্চলের উন্নয়ন পরিকল্পনার কেন্দ্রবিন্দুতে অবস্থিত।", "ঢাকা-পদ্মাসেতু এক্সপ্রেসওয়ের সাথে সংযুক্ত।", "নিজস্ব বিদ্যুৎ, পানি, বর্জ্য ও বায়োগ্যাস ব্যবস্থাপনা।", "আন্তর্জাতিক মানের মেডিক্যাল, বিশ্ববিদ্যালয় ও বিনোদন সুবিধা।", "ডুপ্লেক্স ও ট্রিপ্লেক্স জোন সুবিধা।"],
    cta: "প্লট বুকিং কিংবা বিস্তারিত জানতে"
  },
  dubai: {
    label: "Dubai Garden City",
    title: "প্রিমিয়াম নাগরিক সুবিধার আধুনিক ঠিকানা",
    intro: "Dubai Garden City প্রকল্পে রয়েছে সর্বোচ্চ নাগরিক সুবিধা নিশ্চিতের জন্য এটিএম বুথ, কিডস্ জোন, রুফটপ সুইমিং পুল, অত্যাধুনিক নিরাপত্তা ব্যবস্থা, আধুনিক অগ্নিনির্বাপন ব্যবস্থা, ২৪ ঘন্টা সিসিটিভি মনিটরিং, আধুনিক পার্কিং ও শপিং মল।",
    about: "প্রতিটি এপার্টমেন্ট সংলগ্ন ভেন্টিলেশন সুবিধা থাকবে, যা এপার্টমেন্টের ভেতর পর্যাপ্ত আলো-বাতাস প্রবাহিত করবে।",
    highlights: ["রুফটপ সুইমিং পুল", "২৪/৭ CCTV monitoring", "Shopping mall & parking"],
    facilities: ["এটিএম বুথ", "কিডস্ জোন", "রুফটপ সুইমিং পুল", "আধুনিক নিরাপত্তা ব্যবস্থা", "আধুনিক অগ্নিনির্বাপন ব্যবস্থা", "২৪ ঘন্টা সিসিটিভি মনিটরিং", "আধুনিক পার্কিং", "শপিং মল"],
    reasons: ["সর্বোচ্চ নাগরিক সুবিধা।", "নিরাপদ পরিবেশ।", "পর্যাপ্ত আলো-বাতাসের প্রবাহ।", "কমার্শিয়াল স্পেসে আধুনিক সুবিধা।", "আলাদা প্রবেশপথ।", "এ সুযোগ সীমিত সময়ের জন্য।"],
    cta: "প্লট বুকিং কিংবা বিস্তারিত জানতে"
  },
  condo: {
    label: "Pushpo Luxurious Condominium",
    title: "নারায়ণগঞ্জে নিজের ফ্ল্যাটের স্বপ্ন এবার হবে সত্যি",
    intro: "শুধু একটি ঠিকানা নয়, বরং আপনার পরিবারের জন্য এক নিরাপদ ভবিষ্যতের নিশ্চয়তা দিচ্ছে Pushpo Luxurious Condominium। আধুনিক স্থাপত্যশৈলী আর বিশ্বমানের সুযোগ-সুবিধাসহ সাজানো হয়েছে এই প্রকল্প।",
    about: "প্রতিটি ফ্ল্যাট পরিকল্পিত, প্রশস্ত এবং আরামদায়ক, যা আপনার পরিবারের জন্য দেবে স্বস্তি, শান্তি ও মর্যাদাপূর্ণ জীবনযাপন।",
    highlights: ["Premium Building: ১৮৩৪, ১৮৪২, ১۸۶۸ ও ১۹১۸ বর্গফুট", "Classic Building: ১۴۸۹ ও ১۶۴১ বর্গফুট", "পরিকল্পিত, প্রশস্ত ও আরামদায়ক ফ্ল্যাট"],
    facilities: ["মসজিদ", "সুইমিং পুল", "২৪ ঘন্টা সিসি টিভি মনিটরিং", "নিরাপত্তা ব্যবস্থা", "জিমনেসিয়াম/ফিটনেস সেন্টার", "সুপার শপ", "এটিএম বুথ", "কিড্স জোন", "গ্রীন জোন"],
    reasons: ["আধুনিক ডিজাইন।", "নিরাপত্তা।", "খোলা জায়গা ও সবুজায়ন।", "লাইফস্টাইল সুবিধা।", "সাশ্রয়ী বিনিয়োগ।", "এ সুযোগ সীমিত সময়ের জন্য।"],
    extra: ["প্রিমিয়াম বিল্ডিং: ১۸৩۴, ১۸۴২, ১۸۶۸ ও ১۹১۸ বর্গফুট।", "ক্লাসিক বিল্ডিং: ১۴۸۹ এবং ১۶۴১ বর্গফুট।"],
    cta: "ফ্ল্যাট বুকিং কিংবা বিস্তারিত জানতে"
  },
  bay: {
    label: "The Bay Icon Hotel & Resort",
    title: "Cox’s Bazar সমুদ্র তীরে নতুন এক ল্যান্ডমার্ক",
    intro: "Cox’s Bazar এর সমুদ্র তীরে আসছে নতুন এক ল্যান্ডমার্ক – The Bay Icon Hotel & Resort। এটি কেবল একটি হোটেল নয়, বরং সমুদ্রতীরবর্তী লাইফস্টাইলের এক নতুন সংজ্ঞা।",
    about: "আধুনিক স্থাপত্যশৈলী, দৃষ্টিনন্দন ডিজাইন, বিশ্বমানের সুযোগ-সুবিধা এবং আন্তর্জাতিক মানের সেবার সমন্বয়ে The Bay Icon Hotel & Resort হবে কক্সবাজারের ফাইভ স্টার আতিথেয়তার এক প্রকৃত প্রতীক।",
    highlights: ["১টি ইউনিট: ۷۵ বর্গফুট", "জমির পরিমাণ: ০.০৩۷۵ শতাংশ", "১টি শেয়ার: ৩০০ বর্গফুট"],
    reasons: ["সমুদ্রের দৃশ্যপটে বিলাসবহুল রুম ও স্যুইট।", "বিশ্বমানের সুইমিং পুল, স্পা ও ওয়েলনেস সেন্টার।", "আন্তর্জাতিক মানের রেস্টুরেন্ট ও কুইজিন।", "কনফারেন্স, ইভেন্ট ও ডেস্টিনেশন ওয়েডিং সুবিধা।", "পূর্ণাঙ্গ গন্তব্য।", "এ সুযোগ সীমিত সময়ের জন্য।"],
    extra: ["১টি ইউনিট: ৭۵ বর্গফুট। জমির পরিমাণ: ০.০৩۷۵ শতাংশ।", "১টি শেয়ার: ৩০০ বর্গফুট।"],
    cta: "শেয়ার/ইউনিট বুকিং কিংবা বিস্তারিত জানতে"
  }
};


function bengaliNumber(value) {
  const map = { "0":"\u09E6", "1":"\u09E7", "2":"\u09E8", "3":"\u09E9", "4":"\u09EA", "5":"\u09EB", "6":"\u09EC", "7":"\u09ED", "8":"\u09EE", "9":"\u09EF" };
  return String(value).replace(/[0-9]/g, d => map[d]);
}
function money(value) { return bengaliNumber(Math.round(Number(value) || 0).toLocaleString("en-US")) + " ৳"; }
function kathaLabel(v) { return bengaliNumber(v) + " কাঠা"; }
function instLabel(v) { return bengaliNumber(v) + " কিস্তি"; }
function normalizePhone(v) {
  const d = String(v || "").replace(/\D/g, "");
  if (!d) return "";
  if (d.startsWith("880")) return d;
  if (d.startsWith("0")) return "88" + d;
  if (d.startsWith("1")) return "880" + d;
  return d;
}
function whatsapp(message) { return "https://wa.me/" + normalizePhone(COMPANY.whatsapp) + "?text=" + encodeURIComponent(message); }
function ecoInstallments(sector) {
  if (sector === "sector1") return [36, 60, 84];
  if (sector === "sector2") return [36, 60, 84, 108];
  return [36, 60, 84, 108, 120];
}

function Header() {
  return <header className="header">
    <a href="#home" className="brand"><img src={COMPANY.logo} alt="logo"/><div><h1>{COMPANY.name}</h1><p>{COMPANY.slogan}</p></div></a>
    <nav><a href="#home">হোম</a><a href="#projects">আমাদের প্রজেক্টসমূহ</a><a href="#contact">যোগাযোগ</a></nav>
    <a className="hotline" href="tel:+8809658355908">Hotline: {COMPANY.hotline}</a>
  </header>;
}

function Hero({ active, setActive }) {
  useEffect(() => {
    const t = setInterval(() => setActive(v => (v + 1) % projects.length), 3500);
    return () => clearInterval(t);
  }, [setActive]);
  const p = projects[active];
  return <section id="home" className="hero">
    <div className="heroText">
      <p className="promise">একটি উন্নত জীবনযাত্রার প্রতিশ্রুতি</p>
      <h2>নির্ভরতার সাথে গড়ে তুলুন আপনার নিশ্চিত ভবিষ্যৎ</h2>
      <p className="lead">Shopnovumi Properties আপনাকে দিচ্ছে উন্নত মানের পরিকল্পিত প্রজেক্ট, স্বচ্ছ মূল্য কাঠামো এবং এক্সক্লুসিভ সার্ভিস।</p>
      <div className="heroBtns"><a className="btn" href="#projects">আমাদের প্রজেক্টসমূহ</a><a className="btn outline" href={whatsapp("Hello Shopnovumi Properties, I want to know more about your projects.")}>WhatsApp এ মেসেজ করুন</a></div>
    </div>
    <div className="slider"><img src={p.image} alt={p.name}/><div className="sliderInfo"><p>চলমান প্রজেক্ট</p><h3>{p.name}</h3><span>{p.short}</span></div><div className="sliderControls"><button onClick={() => setActive((active + projects.length - 1) % projects.length)}>পূর্ববর্তী</button><button onClick={() => setActive((active + 1) % projects.length)}>পরবর্তী</button></div></div>
  </section>;
}

function SectionTitle({ kicker, title, text }) { return <div className="sectionTitle"><p>{kicker}</p><h2>{title}</h2>{text && <span>{text}</span>}</div>; }
function Gallery({ title, images }) { return <section className="block"><SectionTitle kicker="প্রজেক্ট গ্যালারি" title={title} text="আর next level upgrade চাইলে: click করলে বড় করে (lightbox view), slider gallery, auto slide।"/><div className="gallery">{images.map((src,i)=><img key={src} src={src} alt={title+" "+(i+1)}/>)}</div></section>; }
function MapSection({ title, maps }) { return <section className="block soft"><SectionTitle kicker="Project Masterplan" title={title} text="প্রকল্পের সম্পূর্ণ লেআউট নিচে দেওয়া আছে।"/><div className={"maps cols"+maps.length}>{maps.map(m=><div className="mapCard" key={m.title}><img src={m.src} alt={m.title}/><b>{m.title}</b></div>)}</div></section>; }
function InfoGrid({ title, items }) { return <section className="infoBlock"><h2>{title}</h2><div className="infoGrid">{items.map(x=><p key={x}>✓ {x}</p>)}</div></section>; }
function Steps() { const items=["পরামর্শ","বুকিং","কিস্তি","হস্তান্তর"]; return <section className="steps"><p>বিনিয়োগের সমস্ত ধাপ</p><h2>বিনিয়োগ সম্পন্ন করার সহজ এবং স্বচ্ছ চারটি ধাপ</h2><div>{items.map((x,i)=><article key={x}><b>{bengaliNumber(i+1)}</b><h3>{x}</h3><span>আমাদের প্রতিনিধি আপনাকে প্রতিটি ধাপে প্রয়োজনীয় সাপোর্ট দিবে।</span></article>)}</div></section>; }

function PriceTable({ type }) {
  const isEco = type === "eco"; const rows = isEco ? ecoPrices : westernPrices;
  return <section className="priceTable"><h2>কাঠা প্রতি বর্তমান মূল্য তালিকা</h2><div className="tableWrap"><table><thead><tr><th>প্লটের ধরণ</th>{isEco ? <><th>সেক্টর ১</th><th>সেক্টর ২</th><th>সেক্টর ৩</th></> : <><th>Phase ১</th><th>Phase ২</th></>}</tr></thead><tbody>{rows.map(r=><tr key={r.type}><td>{r.type}</td>{isEco ? <><td>{money(r.sector1)}</td><td>{money(r.sector2)}</td><td>{money(r.sector3)}</td></> : <><td>{money(r.phase1)}</td><td>{money(r.phase2)}</td></>}</tr>)}</tbody></table></div><div className="notes">{isEco ? <><p>• বুকিং মানি: কাঠা প্রতি <b>{money(20000)}</b></p><p>• ডাউন পেমেন্ট: কাঠা প্রতি <b>{money(100000)}</b></p><p>• সেক্টর ১: ۸۴ কিস্তি</p><p>• সেক্টর ২: ১০۸ কিস্তি</p><p>• সেক্টর ৩: ১২০ কিস্তি</p><p>• এককালীন পরিশোধে বিশেষ ছাড়!</p></> : <><p>• বুকিং মানি: কাঠা প্রতি <b>{money(20000)}</b></p><p>• ডাউন পেমেন্ট: কাঠা প্রতি <b>{money(100000)}</b></p><p>• সর্বোচ্চ ۸۴ কিস্তিতে পরিশোধযোগ্য</p><p>• এককালীন পরিশোধে বিশেষ ছাড়!</p></>}</div></section>;
}

function PaymentCalculator({ type }) {
  const isEco = type === "eco";
  const [area,setArea] = useState("3");
  const [plot,setPlot] = useState(isEco ? ecoPrices[0].type : westernPrices[2].type);
  const [zone,setZone] = useState(isEco ? "sector1" : "phase1");
  const [inst,setInst] = useState("84");
  const rows = isEco ? ecoPrices : westernPrices;
  const selected = rows.find(r=>r.type===plot) || rows[0];
  const rate = selected[zone] || 0;
  const k = Number(area);
  const total = rate*k, booking = 20000*k, down = 100000*k, remaining = Math.max(total-booking-down,0), monthly = remaining/Number(inst || 1);
  const installmentOptions = isEco ? ecoInstallments(zone) : [36,60,84];
  function changeZone(v){ setZone(v); if(isEco){ if(v==="sector1") setInst("84"); if(v==="sector2") setInst("108"); if(v==="sector3") setInst("120"); } }
  return <section className="calculator"><h2>প্লট প্রাইস এস্টিমেটর</h2><div className="calcInputs">
    <select value={zone} onChange={e=>changeZone(e.target.value)}>{isEco ? <><option value="sector1">সেক্টর ১</option><option value="sector2">সেক্টর ২</option><option value="sector3">সেক্টর ৩</option></> : <><option value="phase1">Phase ১</option><option value="phase2">Phase ২</option></>}</select>
    <select value={plot} onChange={e=>setPlot(e.target.value)}>{rows.map(r=><option key={r.type} value={r.type}>{r.type}</option>)}</select>
    <select value={area} onChange={e=>setArea(e.target.value)}>{(isEco ? [3,4,5,6,8,10,20] : [3,5,10,20]).map(v=><option key={v} value={String(v)}>{kathaLabel(v)}</option>)}</select>
    <select value={inst} onChange={e=>setInst(e.target.value)}>{installmentOptions.map(v=><option key={v} value={String(v)}>{instLabel(v)}</option>)}</select>
  </div><div className="result"><p><span>প্রতি কাঠা</span><b>{money(rate)}</b></p><p><span>সর্বমোট</span><b>{money(total)}</b></p><p><span>বুকিং</span><b>{money(booking)}</b></p><p><span>ডাউন পেমেন্ট</span><b>{money(down)}</b></p><p><span>অবশিষ্ট</span><b>{money(remaining)}</b></p><p><span>মাসিক কিস্তি</span><b>{money(monthly)}</b></p></div></section>;
}

function ProjectHero({ label,title,text }) { return <section className="projectHero"><p>{label}</p><h2>{title}</h2><span>{text}</span><a href={whatsapp("Hello, I want details about "+label+".")}>এই প্রজেক্ট সম্পর্কে জানতে মেসেজ করুন</a></section>; }
function WesternDetails(){ return <div id="project-details" className="details"><ProjectHero label="Dhaka Western Valley" title="আগামীর ঢাকা, আপনার স্বপ্নের ঠিকানা" text="মিরপুর বেড়িবাঁধ সংলগ্ন ও ধানমন্ডি ওয়াটার পাম্পের পশ্চিমে অবস্থিত একটি আধুনিক, সুপরিকল্পিত ও পরিবেশবান্ধব আবাসন প্রকল্প। মেট্রো রেল ও ফ্লাইওভারের সংযোগে ঢাকার যেকোনো প্রান্ত থেকে যাতায়াত সহজ।"/><Gallery title="ঢাকা ওয়েস্টার্ন ভ্যালি গ্যালারি" images={westernGallery}/><MapSection title="Dhaka Western Valley Layout Map" maps={westernMaps}/><InfoGrid title="সর্বজনীন সুবিধাসমূহ" items={westernAmenities}/><InfoGrid title="নিকটবর্তী শিক্ষা প্রতিষ্ঠান" items={universities.map(x=>"🎓 "+x)}/><InfoGrid title="আমরাই কেন সেরা" items={["প্রিমিয়াম লোকেশন","সেতু সংযোগ সুবিধা","নিরাপদ বিনিয়োগ","DOHS সংলগ্ন অঞ্চল","মহাসড়ক সংযোগ","শিক্ষানগরী পরিবেশ"]}/><InfoGrid title="আপনার স্বপ্নের জমি বেছে নিন" items={["কমার্শিয়াল প্লট","কমার্শিয়াল স্পেস","লাক্সারি অ্যাপার্টমেন্ট","রেসিডেনশিয়াল প্লট"]}/><Steps/><div className="bottomCalc"><PriceTable type="western"/><PaymentCalculator type="western"/></div></div>; }
function EcoDetails(){ return <div id="project-details" className="details"><ProjectHero label="Pushpo Eco City" title="প্রকৃতির মাঝে আধুনিক ও নিরাপদ আবাসন" text="প্রাকৃতিক সৌন্দর্যে ঘেরা ও নান্দনিক নির্মাণশৈলীতে ঢাকা শহরের অদূরে গড়ে উঠছে আধুনিক, নিরাপদ এবং শান্তির আবাসন প্রকল্প “পুষ্প ইকো সিটি”। এখানে নাগরিক জীবনের প্রয়োজনীয় সকল সুবিধা পরিকল্পিতভাবে রাখা হয়েছে।"/><Gallery title="পুষ্প ইকো সিটি গ্যালারি" images={ecoGallery}/><MapSection title="Pushpo Eco City Layout Map" maps={ecoMaps}/><InfoGrid title="সামাজিক ও নাগরিক সুযোগ-সুবিধা" items={ecoAmenities}/><Steps/><div className="bottomCalc"><PriceTable type="eco"/><PaymentCalculator type="eco"/></div></div>; }

function GenericDetails({id}){ const d=genericDetails[id]; if(!d) return null; return <div id="project-details" className="details"><section className="premiumHero"><div><p>{d.label}</p><h2>{d.title}</h2><span>{d.intro}</span><a href={whatsapp("Hello, I want details about "+d.label+".")}>WhatsApp এ মেসেজ করুন</a></div><aside>{d.highlights.map(x=><p key={x}>{x}</p>)}</aside></section><section className="block"><h2>প্রকল্প সম্পর্কে</h2><p className="about">{d.about}</p></section>{d.facilities && <InfoGrid title="নাগরিক সুবিধা" items={d.facilities}/>}<InfoGrid title="কেন বেছে নিবেন?" items={d.reasons}/>{d.extra && <InfoGrid title="বিস্তারিত তথ্য" items={d.extra}/>}<section className="cta"><h2>{d.cta}</h2><p>আমাদের সাথে সরাসরি WhatsApp-এ যোগাযোগ করুন এবং {d.label} সম্পর্কে বিস্তারিত জেনে নিন।</p><a href={whatsapp("Hello, I want details about "+d.label+".")}>WhatsApp এ মেসেজ করুন</a></section></div>; }

export default function App(){
  const [activeSlide,setActiveSlide]=useState(0);
  const [open,setOpen]=useState(null);
  useEffect(()=>{ if(!open) return; const t=setTimeout(()=>document.getElementById("project-details")?.scrollIntoView({behavior:"smooth"}),100); return()=>clearTimeout(t); },[open]);
  return <div><Header/><main><Hero active={activeSlide} setActive={setActiveSlide}/><section id="projects" className="projects"><SectionTitle kicker="প্রজেক্ট তালিকা" title="আমাদের প্রজেক্টসমূহ"/><div className="projectGrid">{projects.map(p=><div className="projectCard" key={p.id}><img src={p.image} alt={p.name}/><div><h3>{p.name}</h3><button onClick={()=>setOpen(open===p.id?null:p.id)}>{open===p.id?"বিস্তারিত বন্ধ করুন":"বিস্তারিত জানুন"}</button></div></div>)}</div></section>{open==="western"&&<WesternDetails/>}{open==="eco"&&<EcoDetails/>}{open&&!["western","eco"].includes(open)&&<GenericDetails id={open}/>}<section id="contact" className="contact"><div><p>যোগাযোগ করুন</p><h2>আপনার স্বপ্নের বিনিয়োগ শুরু করুন আমাদের সাথে</h2><span>প্রজেক্ট ডিটেইলস, মূল্য, পেমেন্ট প্ল্যান এবং সাইট ভিজিট সাপোর্টের জন্য সরাসরি WhatsApp করুন।</span><div className="contactNums"><b>Hotline: {COMPANY.hotline}</b><b>WhatsApp: {COMPANY.whatsapp}</b></div></div><div className="contactCard"><h3>সরাসরি যুক্ত হোন</h3><a href={whatsapp("Hello Shopnovumi Properties, I want to know more about your projects.")}>WhatsApp এ মেসেজ করুন →</a><a href={COMPANY.facebook}>Facebook পেজে যান →</a><p><b>হেড অফিস:</b> {COMPANY.headOffice}</p><p><b>সেলস অফিস:</b> {COMPANY.salesOffice}</p></div></section></main><footer>© 2026 {COMPANY.name}. সর্বস্বত্ব সংরক্ষিত.</footer></div>;
}
