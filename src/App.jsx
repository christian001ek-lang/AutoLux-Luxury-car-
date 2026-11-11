import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, ArrowRight, Search, Menu, X, Sun, Moon, Heart, SlidersHorizontal,
  Gauge, Fuel, Settings2, CalendarDays, MapPin, ShieldCheck, Sparkles, CarFront,
  ChevronDown, Check, Phone, Mail, Instagram, Facebook, Youtube, MessageCircle,
  CirclePlay, Zap, Clock3, BadgeCheck, ChevronRight
} from 'lucide-react'

const copy = {
  en: {
    nav: ['Home','Explore cars','Services','About','Contact'], buy: 'Find your car',
    eyebrow:'THE ART OF DRIVING', heroA:'Drive beyond', heroB:'ordinary.', heroDesc:'A curated world of exceptional automobiles. Discover the machine that matches your ambition.',
    explore:'Explore collection', watch:'Watch the film', scroll:'SCROLL TO EXPLORE',
    stat1:'Premium vehicles', stat2:'Happy clients', stat3:'Years of excellence',
    label:'THE COLLECTION', collectionTitle:'Machines with', collectionAccent:' a soul.',
    collectionDesc:'From timeless icons to the latest performance masterpieces — find your next obsession.',
    all:'All cars', sport:'Sports', luxury:'Luxury', suv:'SUV', electric:'Electric',
    search:'Search by make, model or keyword...', sort:'Sort by',
    view:'View details', featured:'FEATURED', rent:'RENT', sale:'FOR SALE',
    servicesTag:'BEYOND THE DRIVE', servicesTitle:'A better way to', servicesAccent:' own the road.',
    service1:'Buy with confidence', service1d:'Carefully selected vehicles, transparent details and a smoother buying journey.',
    service2:'Premium rentals', service2d:'Make every arrival unforgettable with flexible luxury rentals.',
    service3:'Concierge support', service3d:'From first enquiry to handover, our team is here for every detail.',
    aboutTag:'THE AUTOLUX STANDARD', aboutTitle:'Not just a car. A feeling.', aboutDesc:'We bring remarkable cars and passionate drivers together. AutoLux is built around trust, thoughtful service and the belief that the journey should feel special from the very first click.',
    aboutBtn:'Our story', why:'WHY AUTOLUX', whyTitle:'The details make', whyAccent:' the difference.',
    why1:'Verified quality', why1d:'Every vehicle is reviewed with care before it reaches our collection.',
    why2:'Personal service', why2d:'Real people, thoughtful guidance and support at every step.',
    why3:'A world of choice', why3d:'A considered collection for every kind of driving dream.',
    reviews:'DRIVER STORIES', reviewsTitle:'Loved by those', reviewsAccent:' who drive.',
    ctaTag:'YOUR NEXT CHAPTER STARTS HERE', ctaTitle:'Ready for the', ctaAccent:' extraordinary?', ctaDesc:'Tell us what you are looking for. We will help you find the right car and make the next step effortless.',
    ctaBtn:'Talk to our team', contact:'GET IN TOUCH', contactTitle:'Let’s find your', contactAccent:' next car.',
    name:'Your name', email:'Email address', message:'Tell us what you have in mind', send:'Send enquiry',
    footer:'The road is yours. Make it unforgettable.', quick:'Explore', follow:'Follow the journey',
    rights:'© 2026 AutoLux. All rights reserved.', demo:'Demo experience — enquiries are not sent to a live dealership.',
    details:'Vehicle details', close:'Close', transmission:'Transmission', mileage:'Mileage', fuel:'Fuel', year:'Year',
    enquire:'Enquire about this car', noCars:'No cars match your search. Try another keyword or category.',
    language:'Language'
  },
  fa: {
    nav:['خانه','موترها','خدمات','درباره ما','تماس'], buy:'موتر خود را بیابید',
    eyebrow:'هنر رانندگی', heroA:'فراتر از', heroB:'معمولی برانید.', heroDesc:'دنیایی از موترهای استثنایی. ماشینی را پیدا کنید که با آرزوهای شما هماهنگ است.',
    explore:'دیدن مجموعه', watch:'تماشای ویدیو', scroll:'برای دیدن پایین بروید',
    stat1:'موترهای ممتاز', stat2:'مشتریان راضی', stat3:'سال تجربه',
    label:'مجموعه ما', collectionTitle:'ماشین‌هایی با', collectionAccent:' روح خاص.',
    collectionDesc:'از موترهای کلاسیک تا شاهکارهای سرعت و قدرت؛ انتخاب بعدی شما اینجاست.',
    all:'همه موترها', sport:'ورزشی', luxury:'لوکس', suv:'شاسی‌بلند', electric:'برقی',
    search:'نام برند یا مدل را جستجو کنید...', sort:'ترتیب',
    view:'جزئیات', featured:'ویژه', rent:'کرایه', sale:'برای فروش',
    servicesTag:'فراتر از رانندگی', servicesTitle:'راهی بهتر برای', servicesAccent:' مالکیت موتر.',
    service1:'خرید با اطمینان', service1d:'موترهای بررسی‌شده، معلومات شفاف و روند خرید آسان‌تر.',
    service2:'کرایه ممتاز', service2d:'با کرایه انعطاف‌پذیر موترهای لوکس، هر ورود را خاص بسازید.',
    service3:'پشتیبانی ویژه', service3d:'از نخستین پرسش تا تحویل موتر، در کنار شما هستیم.',
    aboutTag:'معیار اتولکس', aboutTitle:'فقط یک موتر نیست؛ یک احساس است.', aboutDesc:'ما موترهای خاص را با رانندگان علاقه‌مند پیوند می‌دهیم. اتولکس بر پایه اعتماد، خدمات دقیق و این باور ساخته شده که سفر باید از نخستین کلیک خاص باشد.',
    aboutBtn:'داستان ما', why:'چرا اتولکس', whyTitle:'تفاوت در', whyAccent:' جزئیات است.',
    why1:'کیفیت تأییدشده', why1d:'هر موتر پیش از ورود به مجموعه با دقت بررسی می‌شود.',
    why2:'خدمات شخصی', why2d:'راهنمایی واقعی و پشتیبانی در تمام مراحل.',
    why3:'انتخاب گسترده', why3d:'مجموعه‌ای سنجیده برای هر سلیقه و آرزوی رانندگی.',
    reviews:'تجربه رانندگان', reviewsTitle:'محبوب کسانی که', reviewsAccent:' رانندگی می‌کنند.',
    ctaTag:'فصل بعدی شما از اینجا آغاز می‌شود', ctaTitle:'برای تجربه‌ای', ctaAccent:' فراتر آماده‌اید؟', ctaDesc:'به ما بگویید دنبال چه موتر هستید. برای انتخاب درست و آسان شدن مراحل همراه‌تان هستیم.',
    ctaBtn:'با تیم ما صحبت کنید', contact:'با ما در تماس شوید', contactTitle:'بیایید موتر', contactAccent:' بعدی شما را بیابیم.',
    name:'نام شما', email:'ایمیل', message:'درباره خواست خود بنویسید', send:'ارسال درخواست',
    footer:'جاده از آن شماست؛ آن را فراموش‌نشدنی بسازید.', quick:'دسترسی سریع', follow:'ما را دنبال کنید',
    rights:'© ۲۰۲۶ اتولکس. تمام حقوق محفوظ است.', demo:'نسخه نمایشی — درخواست‌ها به نمایندگی واقعی ارسال نمی‌شوند.',
    details:'جزئیات موتر', close:'بستن', transmission:'گیربکس', mileage:'کارکرد', fuel:'سوخت', year:'سال',
    enquire:'درخواست معلومات درباره این موتر', noCars:'موتر مطابق جستجوی شما پیدا نشد. واژه یا دسته دیگری را امتحان کنید.',
    language:'زبان'
  },
  ps: {
    nav:['کور','موټرونه','خدمتونه','زموږ په اړه','اړیکه'], buy:'خپل موټر ومومئ',
    eyebrow:'د موټر چلولو هنر', heroA:'له عادي څخه', heroB:'لوړ موټر وچلوئ.', heroDesc:'د ځانګړو موټرو نړۍ. هغه موټر ومومئ چې ستاسو له هیلو سره سمون لري.',
    explore:'موټرونه وګورئ', watch:'ویډیو وګورئ', scroll:'د لیدلو لپاره ښکته شئ',
    stat1:'لوړ کیفیت موټرونه', stat2:'خوښ پېرودونکي', stat3:'د غوره تجربې کلونه',
    label:'زموږ ټولګه', collectionTitle:'ځانګړي موټرونه له', collectionAccent:' ځانګړي احساس سره.',
    collectionDesc:'له کلاسیکو موټرو څخه تر نویو پیاوړو ماډلونو پورې؛ خپل راتلونکی موټر ومومئ.',
    all:'ټول موټرونه', sport:'سپورټ', luxury:'لوکس', suv:'SUV', electric:'برېښنايي',
    search:'د شرکت یا ماډل نوم ولټوئ...', sort:'ترتیب',
    view:'نور معلومات', featured:'ځانګړی', rent:'کرایه', sale:'د پلور لپاره',
    servicesTag:'له موټر چلولو هاخوا', servicesTitle:'د موټر لرلو', servicesAccent:' غوره لاره.',
    service1:'په ډاډه زړه پېرود', service1d:'په دقت ارزول شوي موټرونه او روښانه معلومات.',
    service2:'لوکس کرایه', service2d:'د لوکس موټرو په کرایه هره شېبه ځانګړې کړئ.',
    service3:'ځانګړې مرسته', service3d:'له لومړۍ پوښتنې څخه د موټر تر سپارلو درسره یو.',
    aboutTag:'د اتولوکس معیار', aboutTitle:'یوازې موټر نه، بلکې یو احساس.', aboutDesc:'موږ ځانګړي موټرونه له مینه‌والو چلوونکو سره نښلوو. اتولوکس پر باور، غوره خدمت او ځانګړې تجربې ولاړ دی.',
    aboutBtn:'زموږ کیسه', why:'ولې اتولوکس', whyTitle:'توپیر په', whyAccent:' جزئیاتو کې دی.',
    why1:'تایید شوی کیفیت', why1d:'هر موټر زموږ ټولګې ته له راتګ مخکې ارزول کېږي.',
    why2:'شخصي خدمت', why2d:'په هر پړاو کې لارښوونه او مرسته ترلاسه کړئ.',
    why3:'ډېر انتخابونه', why3d:'د هر ډول موټر مینه‌وال لپاره ځانګړې ټولګه.',
    reviews:'د چلوونکو کیسې', reviewsTitle:'د هغو خلکو خوښ موټرونه', reviewsAccent:' چې موټر چلوي.',
    ctaTag:'ستاسو نوی سفر دلته پیلېږي', ctaTitle:'د ځانګړې تجربې', ctaAccent:' لپاره چمتو یاست؟', ctaDesc:'موږ ته ووایاست چې کوم موټر غواړئ. د سم انتخاب په موندلو کې مرسته کوو.',
    ctaBtn:'له ټیم سره خبرې', contact:'اړیکه ونیسئ', contactTitle:'راځئ ستاسو', contactAccent:' راتلونکی موټر ومومو.',
    name:'ستاسو نوم', email:'برېښنالیک', message:'خپله غوښتنه ولیکئ', send:'غوښتنه ولېږئ',
    footer:'سړک ستاسو دی؛ سفر مو نه هېرېدونکی کړئ.', quick:'چټک لینکونه', follow:'موږ تعقیب کړئ',
    rights:'© ۲۰۲۶ اتولوکس. ټول حقونه خوندي دي.', demo:'نمونوي وېبپاڼه — غوښتنې ریښتیني پلورونکي ته نه لېږل کېږي.',
    details:'د موټر معلومات', close:'بندول', transmission:'ګیربکس', mileage:'مزل', fuel:'سونګ', year:'کال',
    enquire:'د دې موټر په اړه پوښتنه', noCars:'ستاسو د لټون سره سم موټر ونه موندل شو.',
    language:'ژبه'
  }
}

const cars = [
  {id:1, name:'BMW M4 Competition', brand:'BMW', type:'sport', year:2024, price:'$92,500', mileage:'8,200 km', fuel:'Petrol', transmission:'Automatic', power:'503 HP', image:'/assets/bmw-m3.jpg', tag:'featured', desc:'Precision engineering meets unmistakable M performance. A confident, beautifully balanced sports coupe.'},
  {id:2, name:'Dodge Challenger SRT', brand:'Dodge', type:'sport', year:2023, price:'$78,900', mileage:'12,400 km', fuel:'Petrol', transmission:'Automatic', power:'717 HP', image:'/assets/dodge-challenger.jpg', tag:'sale', desc:'American muscle with a bold presence, a thunderous character and timeless road attitude.'},
  {id:3, name:'Ford Mustang Dark Horse', brand:'Ford', type:'sport', year:2024, price:'$68,400', mileage:'4,100 km', fuel:'Petrol', transmission:'Manual', power:'500 HP', image:'/assets/mustang-gt.jpg', tag:'featured', desc:'A track-inspired Mustang built for drivers who love an engaging, visceral experience.'},
  {id:4, name:'Ferrari F8 Tributo', brand:'Ferrari', type:'luxury', year:2022, price:'$289,000', mileage:'3,600 km', fuel:'Petrol', transmission:'Automatic', power:'710 HP', image:'/assets/ferrari-white.jpg', tag:'sale', desc:'Italian design and exhilarating performance, sculpted into an unforgettable supercar.'},
  {id:5, name:'Porsche 911 Carrera', brand:'Porsche', type:'sport', year:2024, price:'$134,900', mileage:'5,800 km', fuel:'Petrol', transmission:'Automatic', power:'388 HP', image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85', tag:'featured', desc:'An icon refined over generations. Everyday usability with unmistakable sports-car soul.'},
  {id:6, name:'Mercedes-Benz S-Class', brand:'Mercedes-Benz', type:'luxury', year:2024, price:'$119,000', mileage:'6,700 km', fuel:'Hybrid', transmission:'Automatic', power:'496 HP', image:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85', tag:'rent', desc:'A sanctuary of comfort, technology and understated prestige for every journey.'},
  {id:7, name:'Range Rover Sport', brand:'Land Rover', type:'suv', year:2023, price:'$97,500', mileage:'14,000 km', fuel:'Hybrid', transmission:'Automatic', power:'434 HP', image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85', tag:'sale', desc:'Effortless capability and modern luxury, equally at home in the city or beyond it.'},
  {id:8, name:'Porsche Taycan Turbo', brand:'Porsche', type:'electric', year:2024, price:'$156,000', mileage:'2,900 km', fuel:'Electric', transmission:'Automatic', power:'670 HP', image:'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=1200&q=85', tag:'featured', desc:'Instant electric response wrapped in the unmistakable spirit of Porsche.'}
]

const rise = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}} }

function App(){
  const [lang,setLang]=useState('en')
  const [dark,setDark]=useState(true)
  const [mobile,setMobile]=useState(false)
  const [category,setCategory]=useState('all')
  const [query,setQuery]=useState('')
  const [sort,setSort]=useState('featured')
  const [favorites,setFavorites]=useState([])
  const [selected,setSelected]=useState(null)
  const [toast,setToast]=useState('')
  const [submitted,setSubmitted]=useState(false)
  const t=copy[lang], rtl=lang!=='en'

  const filtered=useMemo(()=>{
    let list=cars.filter(c=>(category==='all'||c.type===category) && `${c.name} ${c.brand}`.toLowerCase().includes(query.toLowerCase()))
    if(sort==='price-low') list=[...list].sort((a,b)=>Number(a.price.replace(/[$,]/g,''))-Number(b.price.replace(/[$,]/g,'')))
    if(sort==='price-high') list=[...list].sort((a,b)=>Number(b.price.replace(/[$,]/g,''))-Number(a.price.replace(/[$,]/g,'')))
    return list
  },[category,query,sort])

  const notify=(msg)=>{setToast(msg);setTimeout(()=>setToast(''),2600)}
  const toggleFav=(id)=>setFavorites(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id])
  const navTo=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMobile(false)}
  const navIds=['home','collection','services','about','contact']

  return <div className={dark?'app dark':'app light'} dir={rtl?'rtl':'ltr'}>
    <header className="header">
      <a className="brand" href="#home" onClick={e=>{e.preventDefault();navTo('home')}}><span className="brand-mark">A</span><span>AUTO<span className="brand-light">LUX</span><small>DRIVE BEYOND ORDINARY</small></span></a>
      <nav className="desktop-nav">{t.nav.map((n,i)=><button key={n} onClick={()=>navTo(navIds[i])} className="nav-link">{n}</button>)}</nav>
      <div className="header-actions">
        <div className="language-wrap"><select aria-label={t.language} value={lang} onChange={e=>setLang(e.target.value)}><option value="en">EN</option><option value="fa">دری</option><option value="ps">پښتو</option></select><ChevronDown size={13}/></div>
        <button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button>
        <button className="header-cta" onClick={()=>navTo('collection')}>{t.buy}<ArrowUpRight size={15}/></button>
        <button className="mobile-menu icon-btn" onClick={()=>setMobile(!mobile)} aria-label="Menu">{mobile?<X/>:<Menu/>}</button>
      </div>
      <AnimatePresence>{mobile&&<motion.div className="mobile-panel" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>{t.nav.map((n,i)=><button key={n} onClick={()=>navTo(navIds[i])}>{n}<ArrowUpRight size={15}/></button>)}</motion.div>}</AnimatePresence>
    </header>

    <main>
      <section id="home" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/mustang-gt.jpg"><source src="/assets/hero-drive.mp4" type="video/mp4"/></video>
        <div className="hero-overlay"/>
        <div className="hero-grain"/>
        <div className="hero-content">
          <motion.div initial="hidden" animate="show" variants={rise}>
            <div className="eyebrow"><span className="eyebrow-line"/>{t.eyebrow}</div>
            <h1>{t.heroA}<br/><em>{t.heroB}</em></h1>
            <p className="hero-desc">{t.heroDesc}</p>
            <div className="hero-buttons"><button className="btn-primary" onClick={()=>navTo('collection')}>{t.explore}<ArrowUpRight size={17}/></button><button className="btn-ghost" onClick={()=>document.getElementById('film')?.scrollIntoView({behavior:'smooth'})}><span className="play-icon"><CirclePlay size={19}/></span>{t.watch}</button></div>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>{t.scroll}</span><span className="hero-index">01 <i/> 04</span></div>
        <div className="hero-side">AUTOMOTIVE EXCELLENCE — EST. 2026</div>
      </section>

      <section className="stats-strip">
        <div><strong>120<span>+</span></strong><small>{t.stat1}</small></div><div><strong>1.8k<span>+</span></strong><small>{t.stat2}</small></div><div><strong>12<span>+</span></strong><small>{t.stat3}</small></div><div className="stats-note"><Sparkles size={17}/><span>Curated for the<br/>extraordinary.</span></div>
      </section>

      <section id="collection" className="section collection-section">
        <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{once:true}} variants={rise}>
          <div><div className="eyebrow"><span className="eyebrow-line"/>{t.label}</div><h2>{t.collectionTitle}<em>{t.collectionAccent}</em></h2></div>
          <p>{t.collectionDesc}</p>
        </motion.div>
        <div className="collection-tools">
          <div className="filters">{[['all',t.all],['sport',t.sport],['luxury',t.luxury],['suv',t.suv],['electric',t.electric]].map(([v,label])=><button key={v} className={category===v?'filter active':'filter'} onClick={()=>setCategory(v)}>{label}</button>)}</div>
          <div className="search-sort"><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.search}/></label><label className="sort-box"><SlidersHorizontal size={15}/><select value={sort} onChange={e=>setSort(e.target.value)} aria-label={t.sort}><option value="featured">{t.sort}</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>
        </div>
        <div className="car-grid">
          {filtered.map((car,i)=><motion.article className="car-card" key={car.id} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.55,delay:(i%4)*.07}}>
            <div className="car-image-wrap"><img src={car.image} alt={car.name} loading="lazy"/><span className="car-tag">{car.tag==='rent'?t.rent:car.tag==='featured'?t.featured:t.sale}</span><button className={favorites.includes(car.id)?'fav-btn chosen':'fav-btn'} onClick={()=>toggleFav(car.id)} aria-label="Save car"><Heart size={17} fill={favorites.includes(car.id)?'currentColor':'none'}/></button><button className="image-view" onClick={()=>setSelected(car)}>{t.view}<ArrowUpRight size={15}/></button></div>
            <div className="car-info"><div className="car-brand">{car.brand} <span>{car.year}</span></div><h3>{car.name}</h3><div className="car-specs"><span><Gauge size={14}/>{car.power}</span><span><Settings2 size={14}/>{car.transmission}</span><span><Fuel size={14}/>{car.fuel}</span></div><div className="car-card-bottom"><strong>{car.price}</strong><button onClick={()=>setSelected(car)} aria-label={`View ${car.name}`}><ArrowUpRight size={18}/></button></div></div>
          </motion.article>)}
        </div>
        {filtered.length===0&&<div className="empty-state"><CarFront size={34}/><p>{t.noCars}</p></div>}
        <div className="collection-foot"><span>SHOWING <b>{filtered.length.toString().padStart(2,'0')}</b> / 08 VEHICLES</span><button className="text-link" onClick={()=>{setCategory('all');setQuery('')}}>{t.all}<ArrowRight size={16}/></button></div>
      </section>

      <section id="film" className="film-section">
        <div className="film-image"><img src="/assets/dodge-challenger.jpg" alt="Dark performance car surrounded by cinematic smoke"/><div className="film-shade"/></div>
        <div className="film-copy"><div className="eyebrow"><span className="eyebrow-line"/>THE DRIVE IS THE DESTINATION</div><h2>Feel the<br/><em>difference.</em></h2><p>Some things are better experienced than explained. Find the car that makes every road feel like your own.</p><button className="btn-primary" onClick={()=>navTo('collection')}>{t.explore}<ArrowUpRight size={17}/></button></div>
        <div className="film-number">02 / EXPERIENCE</div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>{t.servicesTag}</div><h2>{t.servicesTitle}<em>{t.servicesAccent}</em></h2></div><span className="heading-number">03 — 05</span></div>
        <div className="service-grid">
          {[{icon:<CarFront/>,title:t.service1,desc:t.service1d,n:'01'},{icon:<CalendarDays/>,title:t.service2,desc:t.service2d,n:'02'},{icon:<MessageCircle/>,title:t.service3,desc:t.service3d,n:'03'}].map((s)=><motion.div className="service-card" key={s.n} whileHover={{y:-7}} transition={{duration:.25}}><div className="service-top"><span>{s.n}</span>{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p><ArrowUpRight className="service-arrow"/></motion.div>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-visual"><img src="/assets/ferrari-white.jpg" alt="Elegant white luxury sports car"/><div className="about-stamp"><span>THE</span><strong>A</strong><span>AUTOLUX<br/>STANDARD</span></div></div>
        <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/>{t.aboutTag}</div><h2>{t.aboutTitle}</h2><p>{t.aboutDesc}</p><button className="text-link" onClick={()=>navTo('contact')}>{t.aboutBtn}<ArrowUpRight size={17}/></button>
          <div className="about-points"><div><ShieldCheck/><span>{t.why1}</span></div><div><BadgeCheck/><span>{t.why2}</span></div><div><Zap/><span>{t.why3}</span></div></div>
        </div>
      </section>

      <section className="why-section section"><div className="eyebrow"><span className="eyebrow-line"/>{t.why}</div><h2>{t.whyTitle}<em>{t.whyAccent}</em></h2><div className="why-grid">{[{n:'01',title:t.why1,desc:t.why1d,icon:<ShieldCheck/>},{n:'02',title:t.why2,desc:t.why2d,icon:<Heart/>},{n:'03',title:t.why3,desc:t.why3d,icon:<Sparkles/>}].map(x=><div className="why-item" key={x.n}><span className="why-icon">{x.icon}</span><small>{x.n}</small><h3>{x.title}</h3><p>{x.desc}</p></div>)}</div></section>

      <section className="quote-section"><div className="quote-mark">“</div><div className="eyebrow">DRIVER STORIES</div><blockquote>“The right car does more than take you places. It changes how you feel getting there.”</blockquote><div className="quote-author"><span className="author-line"/> THE AUTOLUX EXPERIENCE</div></section>

      <section className="cta-section"><div className="cta-bg"/><div className="cta-content"><div className="eyebrow"><span className="eyebrow-line"/>{t.ctaTag}</div><h2>{t.ctaTitle}<em>{t.ctaAccent}</em></h2><p>{t.ctaDesc}</p><button className="btn-primary" onClick={()=>navTo('contact')}>{t.ctaBtn}<ArrowUpRight size={17}/></button></div></section>

      <section id="contact" className="section contact-section"><div className="contact-intro"><div className="eyebrow"><span className="eyebrow-line"/>{t.contact}</div><h2>{t.contactTitle}<em>{t.contactAccent}</em></h2><p>Our team is ready when you are.</p><div className="contact-detail"><Phone size={17}/><span>+93 700 000 000</span></div><div className="contact-detail"><Mail size={17}/><span>hello@autolux.example</span></div><div className="contact-detail"><MapPin size={17}/><span>Kabul, Afghanistan</span></div></div>
        <form className="contact-form" onSubmit={e=>{e.preventDefault();setSubmitted(true);notify('Your demo enquiry is ready. No message was sent.')}}><div className="form-row"><label>{t.name}<input required placeholder="John Doe"/></label><label>{t.email}<input type="email" required placeholder="you@example.com"/></label></div><label>{t.message}<textarea required rows="4" placeholder="I'm interested in..."/></label><button className="btn-primary" type="submit">{submitted?'Request prepared':t.send}<ArrowUpRight size={17}/></button><small>{t.demo}</small></form>
      </section>
    </main>

    <footer className="footer"><div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">A</span><span>AUTO<span className="brand-light">LUX</span><small>DRIVE BEYOND ORDINARY</small></span></a><p>{t.footer}</p><div className="socials"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a><a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube/></a></div></div><div className="footer-bottom"><span>{t.rights}</span><span>DESIGNED FOR THE LOVE OF DRIVING</span><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>BACK TO TOP ↑</button></div></footer>

    <AnimatePresence>{selected&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}><motion.div className="car-modal" initial={{opacity:0,y:25,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}><X/></button><img src={selected.image} alt={selected.name}/><div className="modal-content"><div className="eyebrow">{t.details}</div><h2>{selected.name}</h2><strong className="modal-price">{selected.price}</strong><p>{selected.desc}</p><div className="modal-spec-grid"><span><CalendarDays/>{t.year}: {selected.year}</span><span><Gauge/>{t.mileage}: {selected.mileage}</span><span><Fuel/>{t.fuel}: {selected.fuel}</span><span><Settings2/>{t.transmission}: {selected.transmission}</span></div><button className="btn-primary" onClick={()=>{setSelected(null);navTo('contact')}}>{t.enquire}<ArrowUpRight size={17}/></button></div></motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{toast&&<motion.div className="toast" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}}><Check size={17}/>{toast}</motion.div>}</AnimatePresence>
  </div>
}

export default App
