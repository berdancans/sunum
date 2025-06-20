import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  CTO Arıyoruz:  
                  Türkiye’den Global AI-First Şirketini Birlikte Kuralım!
                </h1>
                <p className="mb-12 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl md:text-2xl">
                  AI-First, kurumsal iletişimde krizleri henüz doğmadan öngören yapay zekâ ürünü <strong>RelatIQ</strong> ile pazarı değiştirmeye hazırlanıyor.  
                  <span className="block mt-4 font-semibold">Şirketin teknik mimarisini, ürün yol haritasını ve ekibini sıfırdan birlikte inşa edeceğimiz gerçek CTO’yu arıyoruz.  
                  Vizyon sahibi, risk almaktan korkmayan ve kalıcı ortak olmak isteyen teknik lider sen misin?</span>
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🚀 CTO Olarak Başvur
                  </Link>
                  <Link
                    href="mailto:info@ai-first.me"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Kurucuya Mail At
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG arka planları aynı şekilde bırakabilirsin */}
      </section>
    </>
  );
};

export default Hero;
