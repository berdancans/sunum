import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="RelatIQ product demo"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="RelatIQ product demo"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sıfırdan Global AI Startup Kurma Şansı
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  AI-First’ın ilk ürünü RelatIQ, kurumsal iletişimde krizleri henüz doğmadan öngören, zorlu bir yapay zeka platformu. 
                  Şirket sıfırdan senin teknik liderliğinde kurulacak, yazılım mimarisini ve ekibi tamamen sen şekillendireceksin.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Gerçek Ortaklık – Teknik Karar Senin
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Kurucu ile %100 şeffaf ve eşit bir ortaklık yapısı. Hisse, ekip ve roadmap tamamen birlikte belirleniyor. CTO olarak vizyonun, sadece koddan değil şirketin kaderinden de sorumlu.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Ölçeklenebilir AI – Gerçek Dünya Problemleri
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  RelatIQ ile Türkçe metin analizi, kurumsal entegrasyonlar, KVKK uyumu ve canlı dashboard gibi ileri seviye teknik zorlukları çözmek için CTO’ya ihtiyacımız var.  
                  <strong>Burası kod yazıp çıkan değil, tarihe imza atan teknik liderin yeri.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
