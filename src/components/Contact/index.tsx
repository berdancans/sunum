const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-full max-w-xl px-4">
            <div
              className="rounded-2xl bg-white px-8 py-11 shadow-xl dark:bg-gray-dark sm:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-3xl font-bold text-black dark:text-white">
                CTO Olarak Başvur
              </h2>
              <p className="mb-8 text-base font-medium text-body-color">
                AI-First ve RelatIQ’da teknik ortak olmak için formu doldur — başvurun doğrudan kurucuya ulaşacak. Sadece gerçekten istekli, vizyon sahibi teknik liderler başvursun.
              </p>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    İsim Soyisim
                  </label>
                  <input
                    type="text"
                    placeholder="Adın Soyadın"
                    className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="E-posta adresin"
                    className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="linkedin"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    LinkedIn (isteğe bağlı)
                  </label>
                  <input
                    type="text"
                    placeholder="LinkedIn profilin (opsiyonel)"
                    className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-dark dark:text-white"
                  >
                    Kısaca kendinden ve neden başvurduğundan bahset
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Kısa özgeçmiş ve başvuru motivasyonun"
                    className="border-stroke w-full resize-none rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark"
                  ></textarea>
                </div>
                <button className="rounded-md bg-primary px-9 py-4 text-base font-bold text-white shadow-lg duration-300 hover:bg-primary/90">
                  CTO Olarak Başvur
                </button>
              </form>
              <div className="mt-8 text-center">
                <span className="text-sm text-body-color dark:text-body-color-dark">
                  Sorun mu var? <a href="mailto:info@ai-first.me" className="text-primary underline">Kurucuya direkt mail at</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
