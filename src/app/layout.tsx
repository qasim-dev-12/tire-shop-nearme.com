"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HangingCTA from "@/components/Common/HangingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { Sora } from "next/font/google";
import Script from "next/script";
import "../styles/index.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const particles = [
  { left: 8, top: 12, size: 3, duration: 9, delay: 0 },
  { left: 18, top: 28, size: 4, duration: 11, delay: 1.2 },
  { left: 27, top: 8, size: 3, duration: 8, delay: 2.4 },
  { left: 36, top: 22, size: 5, duration: 12, delay: 0.6 },
  { left: 45, top: 15, size: 3, duration: 10, delay: 3 },
  { left: 54, top: 30, size: 4, duration: 9.5, delay: 1.8 },
  { left: 62, top: 10, size: 3, duration: 11.5, delay: 0.3 },
  { left: 71, top: 24, size: 5, duration: 8.5, delay: 2.1 },
  { left: 80, top: 14, size: 3, duration: 10.5, delay: 1.5 },
  { left: 89, top: 26, size: 4, duration: 9, delay: 2.7 },
  { left: 14, top: 20, size: 3, duration: 12.5, delay: 3.3 },
  { left: 94, top: 18, size: 3, duration: 10, delay: 0.9 },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18223576133"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18223576133');
          `}
        </Script>
        <Script id="tel-click-conversion" strategy="afterInteractive">
          {`
            (function(){
                document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="tel:"]')){
                    gtag('event', 'conversion', {'send_to': 'AW-18223576133/xuRYCLjQg9IcEMXo1vFD'});
                    CG.conversion();
                    initCCConvertion();
                }
                });
            })();
          `}
        </Script>
        <Script id="whatsapp-click-conversion" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e){
              if(e.target.closest('a[href^="https://wa.me/"]')){
                gtag('event', 'conversion', {'send_to': 'AW-18223576133/IABYCPi-idIcEMXo1vFD'});
                CG.conversion();
                initCCConvertion();
              }
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18333851092"
          strategy="afterInteractive"
        />
        <Script id="gtag-init-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18333851092');
          `}
        </Script>
        <Script id="tel-click-conversion-2" strategy="afterInteractive">
          {`
            (function(){
                document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="tel:"]')){
                    gtag('event', 'conversion', {'send_to': 'AW-18333851092/1XjSCPjyh9kcENS7oaZE'});
                    CG.conversion();
                    initCCConvertion();
                }
                });
            })();
          `}
        </Script>
        <Script id="whatsapp-click-conversion-2" strategy="afterInteractive">
          {`
            (function(){
                document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="https://wa.me/"]')){
                    gtag('event', 'conversion', {'send_to': 'AW-18333851092/yA1nCOuqreAcENS7oaZE'});
                    CG.conversion();
                    initCCConvertion();
                }
                });
            })();
          `}
        </Script>
      </head>

      <body className={`bg-black ${sora.className}`}>
        <div
          aria-hidden
          className="bg-particles-fade pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          {particles.map((p, i) => (
            <span
              key={i}
              className="bg-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <HangingCTA />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

