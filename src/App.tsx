import React, { useEffect, useState } from 'react';
import { Reveal } from './components/Reveal';
import { TiltCard } from './components/TiltCard';

const HIGHLIGHTS = [
  {
    title: 'Earn 2% cash back on favorite brands',
    body: 'Earn 2%¹ cash back on favorite brands, 1%¹ cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more.',
  },
  {
    title: 'Moving to the U.S.? No SSN required',
    body: 'Start building credit before you even enter the country. Sign up with your international address, passport & visa instead**.',
  },
  {
    title: 'Get help from a real person',
    body: 'When you’ve got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs.',
  },
];

const COMPARE_ROWS = [
  { label: 'No monthly fees or minimum balance', credit: true, debit: true },
  { label: 'Deposits FDIC insured up to $250,000', credit: true, debit: true },
  { label: 'Rewards, cash back & card perks', credit: true, debit: true },
  { label: 'Send checks & transfer money for free', credit: true, debit: true },
  { label: 'Build credit history from Day 1', credit: true, debit: false },
  { label: 'No credit check required for sign up', credit: true, debit: false },
];

const TESTIMONIALS = [
  {
    quote:
      'Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch.',
    author: 'K Oiwake',
  },
  {
    quote:
      'The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!',
    author: 'E Berhe',
  },
  {
    quote:
      'Opening an account took less than five minutes with my passport and visa. The 2% cash back on everyday brands is unbeatable.',
    author: 'M Patel',
  },
];

const BRAND_PARTNERS = [
  { name: 'Whole Foods', src: './assets/7baef.svg', cls: 'size-[130px]', highlightIdx: 0 },
  { name: 'Netflix', src: './assets/99be4.svg', cls: 'h-[130px] w-[69px]', highlightIdx: 0 },
  { name: 'Spotify', src: './assets/bfca5.svg', cls: 'size-[130px]', highlightIdx: 1 },
  { name: 'Uber Eats', src: './assets/ed3fc.svg', cls: 'h-[100px] w-[130px]', highlightIdx: 1 },
  { name: 'Amazon', src: './assets/25607.svg', cls: 'h-[130px] w-[126px]', highlightIdx: 2 },
  { name: 'Uber', src: './assets/f921b.svg', cls: 'h-[43px] w-[130px]', highlightIdx: 2 },
];

export default function App() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Sticky Glassmorphic Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-black/75 py-[16px] backdrop-blur-xl'
            : 'bg-transparent py-[28px]'
        }`}
      >
        <div className="mx-auto flex max-w-[1340px] items-center justify-between px-[40px]">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <img alt="Sable." className="h-[28px] w-auto" src="./assets/8712b.svg" />
          </a>

          <nav className="hidden items-center gap-[32px] md:flex">
            <a
              href="#compare-sable"
              className="group flex items-center gap-[6px] text-[13.5px] font-medium tracking-[0.2px] text-white/70 uppercase transition-colors hover:text-white"
            >
              <span>Credit</span>
              <span className="size-[6px] rounded-full bg-[#1fc6bb] transition-transform duration-300 group-hover:scale-125" />
            </a>
            <a
              href="#debit-section"
              className="text-[13.5px] font-medium tracking-[0.2px] text-white/70 uppercase transition-colors hover:text-white"
            >
              Debit
            </a>
            <a
              href="#app-section"
              className="text-[13.5px] font-medium tracking-[0.2px] text-white/70 uppercase transition-colors hover:text-white"
            >
              App
            </a>
            <a
              href="#highlights-section"
              className="group flex items-center gap-[6px] text-[13.5px] font-medium tracking-[0.2px] text-white/70 uppercase transition-colors hover:text-white"
            >
              <span>Learn</span>
              <span className="size-[6px] rounded-full bg-[#1fc6bb] transition-transform duration-300 group-hover:scale-125" />
            </a>
          </nav>

          <a
            href="#download-cta"
            className="rounded-full bg-white px-[24px] py-[14px] text-[12px] font-semibold tracking-[1.35px] text-black uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(255,255,255,0.28)] active:scale-[0.98]"
          >
            Open an account
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden px-[40px] pb-[72px] pt-[120px]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <img
              alt="Sable Cards"
              className="animate-hero-float h-full w-full max-w-[1224px] object-cover opacity-90"
              src="./assets/9e552.png"
            />
          </div>

          <div className="relative z-10 flex max-w-[640px] flex-col items-center text-center">
            <h1 className="animate-hero-reveal text-[52px] leading-[64px] font-normal tracking-[1.2px] text-white md:text-[60px] md:leading-[74px]">
              The fastest, most premium path to{' '}
              <span className="font-bold">financial freedom</span>
            </h1>
            <a
              href="#app-section"
              className="animate-hero-reveal-delay-1 mt-[32px] inline-flex items-center justify-center rounded-full bg-[#6fdbd4] px-[48px] py-[24px] text-[13.5px] font-semibold tracking-[0.4px] text-black uppercase transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(111,219,212,0.45)] active:scale-[0.98]"
            >
              Explore
            </a>
          </div>

          {/* FDIC Legal Badge */}
          <div className="animate-hero-reveal-delay-2 relative z-10 mx-auto mt-auto flex w-full max-w-[1240px] items-center gap-[16px] pt-[80px]">
            <img alt="FDIC" className="h-[22px] w-[56px] shrink-0" src="./assets/b8d05.svg" />
            <p className="max-w-[330px] text-[10px] font-medium leading-[12px] tracking-[0.2px] text-[#a0a1a8]">
              Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by
              Mastercard International Inc.
            </p>
          </div>
        </section>

        {/* Section 2: 400,000 Accounts + Phone Mockup + Features + Press Marquee */}
        <section id="app-section" className="w-full overflow-hidden bg-[#1c1c1e] pt-[120px]">
          <div className="mx-auto max-w-[1240px] px-[40px]">
            <Reveal className="mx-auto flex max-w-[664px] flex-col items-center text-center">
              <p className="text-[14.5px] leading-[18.5px] tracking-[0.31px] text-[#6fdbd4] uppercase">
                400,000 ACCOUNTS &amp; COUNTING
              </p>
              <h2 className="mt-[12px] text-[36px] font-bold leading-[46px] tracking-[0.77px] text-white">
                No hidden fees. No credit checks.{' '}
                <span className="font-normal">No more barriers to building credit.</span>
              </h2>
            </Reveal>

            <div className="relative mt-[64px] grid grid-cols-1 items-center gap-[40px] border-b border-[#73757b] pb-[64px] lg:grid-cols-12">
              {/* Left 2 features */}
              <div className="flex flex-col gap-[64px] lg:col-span-3">
                <Reveal delayMs={80}>
                  <div className="group flex flex-col items-start gap-[16px]">
                    <img
                      alt=""
                      className="size-[38px] transition-transform duration-300 group-hover:scale-110"
                      src="./assets/0bb70.svg"
                    />
                    <h3 className="text-[21px] font-semibold leading-[25.5px] tracking-[0.3px] text-white">
                      Get a secured credit card and bank account in 5 minutes.
                    </h3>
                    <p className="text-[14.5px] leading-[18.5px] text-[#a0a1a8]">
                      No credit history, credit check, or minimum deposit required.
                    </p>
                  </div>
                </Reveal>

                <Reveal delayMs={180}>
                  <div className="group flex flex-col items-start gap-[16px]">
                    <img
                      alt=""
                      className="size-[38px] transition-transform duration-300 group-hover:scale-110"
                      src="./assets/03115.svg"
                    />
                    <h3 className="text-[20px] font-semibold leading-[25.5px] tracking-[0.3px] text-white">
                      The only premium card for building credit.
                    </h3>
                    <p className="text-[14.5px] leading-[18.5px] text-[#a0a1a8]">
                      2% unlimited cash back on your favorite brands, 2X first year cash back match,
                      premium benefits and more!
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Center Phone Mockup */}
              <Reveal delayMs={120} className="flex justify-center lg:col-span-6">
                <img
                  alt="Sable Mobile App"
                  className="w-full max-w-[620px] object-contain transition-transform duration-700 hover:scale-[1.02]"
                  src="./assets/04752.png"
                />
              </Reveal>

              {/* Right 2 features */}
              <div className="flex flex-col gap-[64px] lg:col-span-3 lg:items-end lg:text-right">
                <Reveal delayMs={120}>
                  <div className="group flex flex-col gap-[16px] lg:items-end">
                    <img
                      alt=""
                      className="size-[38px] transition-transform duration-300 group-hover:scale-110"
                      src="./assets/595ac.svg"
                    />
                    <h3 className="text-[20px] font-semibold leading-[25.5px] tracking-[0.3px] text-white">
                      Build your U.S. credit
                    </h3>
                    <p className="text-[14.5px] leading-[18.5px] text-[#a0a1a8]">
                      We believe in forming positive habits. Build your U.S. credit with Sable
                    </p>
                  </div>
                </Reveal>

                <Reveal delayMs={220}>
                  <div className="group flex flex-col gap-[16px] lg:items-end">
                    <img
                      alt=""
                      className="size-[38px] transition-transform duration-300 group-hover:scale-110"
                      src="./assets/6bc61.svg"
                    />
                    <h3 className="text-[21px] font-semibold leading-[25.5px] tracking-[0.3px] text-white">
                      Bank like a global citizen with Sable.
                    </h3>
                    <p className="text-[14.5px] leading-[18.5px] text-[#a0a1a8]">
                      Start building credit before you even enter the country. Non-U.S. citizens can
                      apply with their passport and visa.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Press Logo Marquee */}
          <div className="w-full overflow-hidden py-[80px]">
            <div className="animate-marquee items-center gap-[160px]">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center gap-[160px] pr-[160px]">
                  <img alt="Yahoo Finance" className="h-[46px] w-auto opacity-80 transition-opacity hover:opacity-100" src="./assets/c433a.svg" />
                  <img alt="Bloomberg" className="h-[46px] w-auto opacity-80 transition-opacity hover:opacity-100" src="./assets/2e0eb.svg" />
                  <img alt="Business Insider" className="h-[46px] w-auto opacity-80 transition-opacity hover:opacity-100" src="./assets/5079a.svg" />
                  <img alt="Forbes" className="h-[46px] w-auto opacity-80 transition-opacity hover:opacity-100" src="./assets/f12c7.svg" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Black Card Showcase with 3D Tilt */}
        <section className="mx-auto flex max-w-[1240px] items-center justify-end overflow-hidden px-[40px] py-[120px]">
          <Reveal>
            <TiltCard baseRotateDeg={20}>
              <img
                alt="Sable Secured Credit Card"
                className="h-[480px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(31,198,187,0.16)]"
                src="./assets/fb369.png"
              />
            </TiltCard>
          </Reveal>
        </section>

        {/* Section 4: White Debit Card Feature with 3D Tilt */}
        <section id="debit-section" className="w-full overflow-hidden bg-white py-[120px] text-black">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[48px] px-[40px] md:grid-cols-12">
            <Reveal className="flex justify-center md:col-span-6">
              <TiltCard baseRotateDeg={-20}>
                <img
                  alt="Sable Debit Card"
                  className="h-[480px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]"
                  src="./assets/8c033.png"
                />
              </TiltCard>
            </Reveal>
            <Reveal delayMs={150} className="md:col-span-6">
              <h2 className="max-w-[490px] text-[38px] font-normal leading-[46px] text-black">
                Get a bank account &amp; debit card{' '}
                <span className="text-[#1fc6bb]">in five minutes.</span>
              </h2>
            </Reveal>
          </div>
        </section>

        {/* Section 5: Interactive Highlights + Brand Partners Grid */}
        <section id="highlights-section" className="grid w-full grid-cols-1 bg-[#1c1c1e] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-[40px] py-[80px] lg:px-[100px]">
            <div className="flex flex-col">
              {HIGHLIGHTS.map((item, idx) => {
                const isActive = activeHighlight === idx;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveHighlight(idx)}
                    className={`cursor-pointer border-t py-[40px] text-left transition-all duration-300 ${
                      isActive
                        ? 'translate-x-[6px] border-[rgba(196,196,196,0.5)] text-white'
                        : 'border-[rgba(196,196,196,0.12)] text-white/30 hover:text-white/65'
                    }`}
                  >
                    <h3 className="text-[30px] font-medium leading-[37px]">{item.title}</h3>
                    <p
                      className={`mt-[12px] max-w-[495px] text-[17px] leading-[25px] tracking-[0.35px] transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-65'
                      }`}
                    >
                      {item.body}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center bg-[rgba(235,235,241,0.93)] px-[40px] py-[80px]">
            <div className="grid grid-cols-2 gap-[40px]">
              {BRAND_PARTNERS.map((brand) => {
                const emphasized = brand.highlightIdx === activeHighlight;
                return (
                  <div
                    key={brand.name}
                    className={`flex size-[200px] items-center justify-center rounded-[36px] bg-white/95 transition-all duration-500 hover:scale-[1.05] hover:shadow-xl ${
                      emphasized ? 'scale-[1.03] shadow-lg ring-2 ring-[#1fc6bb]/50' : 'opacity-90 shadow-sm'
                    }`}
                  >
                    <img alt={brand.name} className={brand.cls} src={brand.src} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Compare Sable */}
        <section id="compare-sable" className="w-full overflow-hidden bg-black py-[120px]">
          <div className="w-full overflow-hidden pb-[80px]">
            <div className="animate-marquee items-center gap-[64px]">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex shrink-0 items-center gap-[64px] pr-[64px]">
                  <span className="text-[72px] font-medium leading-[84px] text-white md:text-[84px]">
                    Compare Sable
                  </span>
                  <span className="size-[16px] rounded-full bg-white" />
                </div>
              ))}
            </div>
          </div>

          <Reveal className="mx-auto max-w-[1240px] px-[40px]">
            <div className="grid grid-cols-12 items-end gap-[24px] pb-[32px]">
              <div className="col-span-4" />
              <div className="col-span-4 flex flex-col items-start gap-[16px]">
                <img
                  alt="Sable Secured Credit & Debit Card"
                  className="h-[124px] w-auto object-contain transition-transform duration-300 hover:-translate-y-1"
                  src="./assets/970de.png"
                />
                <p className="max-w-[240px] text-[24px] leading-[30px] text-[#10aca2]">
                  Sable Secured Credit &amp; Debit Card
                </p>
              </div>
              <div className="col-span-4 flex flex-col items-start gap-[16px]">
                <img
                  alt="Sable Debit Card"
                  className="h-[124px] w-auto object-contain transition-transform duration-300 hover:-translate-y-1"
                  src="./assets/e3d4c.png"
                />
                <p className="max-w-[160px] text-[24px] leading-[30px] text-[#10aca2]">
                  Sable Debit Card
                </p>
              </div>
            </div>

            <div className="border-t border-[#2f2f2f]">
              {COMPARE_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-12 items-center border-b border-[#2f2f2f] py-[20px] transition-colors hover:bg-white/[0.03]"
                >
                  <div className="col-span-4 text-[14.5px] leading-[23px] text-white">
                    {row.label}
                  </div>
                  <div className="col-span-4">
                    <img
                      alt={row.credit ? 'Included' : 'Locked'}
                      className="size-[19px]"
                      src={row.credit ? './assets/f6c34.svg' : './assets/233e3.svg'}
                    />
                  </div>
                  <div className="col-span-4">
                    <img
                      alt={row.debit ? 'Included' : 'Locked'}
                      className="size-[19px]"
                      src={row.debit ? './assets/f6c34.svg' : './assets/233e3.svg'}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-12 items-center py-[24px]">
                <div className="col-span-4 text-[14.5px] leading-[23px] text-white">
                  Cost per year
                </div>
                <div className="col-span-4">
                  <span className="text-[41px] leading-[55px] text-white">$0 </span>
                  <span className="text-[10px] text-[#a0a1a8]">/year</span>
                </div>
                <div className="col-span-4">
                  <span className="text-[41px] leading-[55px] text-white">$0 </span>
                  <span className="text-[10px] text-[#a0a1a8]">/year</span>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center pt-[16px]">
                <div className="col-span-4" />
                <div className="col-span-4">
                  <a
                    href="#download-cta"
                    className="inline-flex rounded-full bg-[#6fdbd4] px-[24px] py-[15px] text-[12.5px] font-semibold tracking-[1.35px] text-black uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(111,219,212,0.4)]"
                  >
                    Get Credit &amp; Debit
                  </a>
                </div>
                <div className="col-span-4">
                  <a
                    href="#download-cta"
                    className="inline-flex rounded-full bg-[#6fdbd4] px-[24px] py-[15px] text-[12.5px] font-semibold tracking-[1.35px] text-black uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(111,219,212,0.4)]"
                  >
                    Get Debit
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 7: Testimonials */}
        <section className="mx-auto max-w-[1240px] px-[40px] py-[100px]">
          <Reveal className="mb-[56px] flex justify-center">
            <span className="text-[69px] font-medium leading-[77px] text-white">4.8</span>
          </Reveal>

          <div className="grid grid-cols-1 gap-[32px] md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <Reveal key={t.author} delayMs={idx * 110}>
                <div className="flex h-full flex-col justify-between rounded-[19px] bg-[#1c1c1e] p-[40px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#242427]">
                  <div className="flex flex-col gap-[24px]">
                    <img alt="" className="h-[31px] w-[39px]" src="./assets/c2dc2.svg" />
                    <p className="text-[22px] leading-[30px] text-white">{t.quote}</p>
                  </div>
                  <div className="mt-[48px] flex items-center gap-[16px]">
                    <span className="h-[4px] w-[48px] bg-white" />
                    <span className="text-[16px] font-bold tracking-[0.35px] text-white">
                      {t.author}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Section 8: Join 400,000 Accounts CTA Banner */}
        <section id="download-cta" className="mx-auto max-w-[1240px] px-[40px] py-[60px]">
          <Reveal>
            <div className="group relative flex min-h-[412px] w-full flex-col justify-end overflow-hidden rounded-[19px] p-[48px]">
              <img
                alt="Join Sable"
                className="pointer-events-none absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                src="./assets/64b9d.png"
              />
              <div className="absolute inset-0 bg-black/45" />

              <div className="relative z-10 flex flex-wrap items-end justify-between gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <h2 className="text-[36px] font-semibold leading-[46px] text-white">
                    Join over <span className="text-[56px] leading-[64px]">400,000</span> accounts
                  </h2>
                  <p className="max-w-[475px] text-[17.5px] leading-[25px] tracking-[0.35px] text-white">
                    Download Sable: effortless, borderless banking for a more connected world.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-[20px]">
                  <a
                    href="#"
                    aria-label="Get it on Google Play"
                    className="transition-transform duration-300 hover:scale-[1.04]"
                  >
                    <img alt="Google Play" className="h-[61px] w-auto" src="./assets/8f691.svg" />
                  </a>
                  <a
                    href="#"
                    aria-label="Download on the App Store"
                    className="transition-transform duration-300 hover:scale-[1.04]"
                  >
                    <img alt="App Store" className="h-[61px] w-auto" src="./assets/88e30.svg" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-[1240px] px-[40px] pb-[80px] pt-[100px]">
        <div className="grid grid-cols-1 gap-[48px] pb-[64px] md:grid-cols-12">
          <div className="flex flex-col gap-[24px] md:col-span-4">
            <div>
              <h4 className="text-[29px] font-medium leading-[37px] tracking-[0.38px] text-white">
                Sable Credit
              </h4>
              <div className="mt-[12px] flex flex-col gap-[8px] text-[16px] text-white">
                <a href="#compare-sable" className="transition-colors hover:text-[#6fdbd4]">
                  Sable ONE Credit
                </a>
                <p>
                  Credit Score <span className="text-[#1fc6bb]">Coming Soon</span>
                </p>
              </div>
            </div>

            <a
              href="#debit-section"
              className="text-[29px] font-medium leading-[37px] tracking-[0.38px] text-white transition-colors hover:text-[#6fdbd4]"
            >
              Sable Debit
            </a>
            <a
              href="#app-section"
              className="text-[29px] font-medium leading-[37px] tracking-[0.38px] text-white transition-colors hover:text-[#6fdbd4]"
            >
              App
            </a>

            <div>
              <h4 className="text-[29px] font-medium leading-[37px] tracking-[0.38px] text-white">
                Learn
              </h4>
              <div className="mt-[12px] flex flex-col gap-[8px] text-[16px] text-white">
                <a href="#highlights-section" className="transition-colors hover:text-[#6fdbd4]">
                  FAQs
                </a>
                <a href="#highlights-section" className="transition-colors hover:text-[#6fdbd4]">
                  About Sable
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-[48px] md:col-span-8">
            <div className="flex flex-wrap items-start justify-between gap-[32px]">
              <div>
                <h4 className="text-[29px] font-medium leading-[37px] tracking-[0.38px] text-white">
                  Contact
                </h4>
                <div className="mt-[12px] flex flex-col gap-[8px] text-[16px] text-white">
                  <p>Email: help@sablecard.com</p>
                  <p>Location: New York, NY</p>
                </div>
              </div>
              <img alt="Sable." className="h-[60px] w-auto" src="./assets/8712b.svg" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-[24px]">
              <div className="flex items-center gap-[32px]">
                {[
                  { alt: 'Instagram', src: './assets/6f4fb.svg' },
                  { alt: 'Twitter', src: './assets/88e84.svg' },
                  { alt: 'Facebook', src: './assets/edbe5.svg' },
                  { alt: 'YouTube', src: './assets/f47bd.svg' },
                  { alt: 'TikTok', src: './assets/b1fd1.svg' },
                ].map((s) => (
                  <img
                    key={s.alt}
                    alt={s.alt}
                    className="size-[30px] cursor-pointer opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
                    src={s.src}
                  />
                ))}
              </div>
              <p className="text-[12.5px] text-white">© Sable Money Inc, all rights reserved.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2f2f2f] pt-[36px] text-[11.5px] leading-[18px] text-[#73757b]">
          <p className="mb-[24px] text-[10.5px]">Privacy policy | Terms and conditions</p>
          <p>
            *Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by
            Mastercard International Inc.
          </p>
          <p>
            Sable account is FDIC-insured up to $250,000 per depositor through Coastal Community
            Bank, Member FDIC.
          </p>
          <p>
            **If you are not a U.S. citizen, you can apply with your passport and U.S. Visa. Please
            note: you must submit an SSN once you receive one. If you are a U.S. citizen, SSN is
            required to open a bank account.
          </p>
          <p>*** Double cashback bonus (through 12/2022)</p>
          <ol className="mt-[12px] list-decimal pl-[18px]">
            <li>
              Please see www.sablecard.com/terms-and-conditions#creditrnb for terms and conditions.
              Some exclusions apply.
            </li>
            <li>Please see www.sablecard.com/terms-and-conditions for terms and conditions.</li>
            <li>
              This benefit is provided by MasterCard. Benefits are subject to terms, conditions and
              limitations, including limitations on the amount of coverage. Please see the terms and
              conditions.
            </li>
            <li>Sable estimated annual value</li>
            <li>Sable product comparisons</li>
          </ol>
          <p className="mt-[12px]">† Sable Remittance Best Rate Guarantee Terms</p>
        </div>
      </footer>
    </div>
  );
}
