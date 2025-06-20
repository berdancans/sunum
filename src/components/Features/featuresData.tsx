import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // NLP icon örneği (dilersen özel svg ekleyebilirsin)
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Gelişmiş Türkçe NLP ve Duygu Analizi",
    paragraph:
      "Kurumsal iletişimde Türkçe metinlerden kriz ve risk sinyali yakalayacak güçlü doğal dil işleme modelleri. CTO olarak algoritma geliştirme ve model fine-tune sorumluluğu sende.",
  },
  {
    id: 2,
    icon: (
      // Social Graph icon örneği
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="20" cy="6" r="3" fill="currentColor"/>
        <circle cx="20" cy="34" r="3" fill="currentColor"/>
        <circle cx="34" cy="20" r="3" fill="currentColor"/>
        <circle cx="6" cy="20" r="3" fill="currentColor"/>
        <line x1="20" y1="9" x2="20" y2="31" stroke="currentColor" strokeWidth="2"/>
        <line x1="9" y1="20" x2="31" y2="20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "İletişim Ağı Analizi & Örüntü Tespiti",
    paragraph:
      "Şirket içi yazışmalarda, takımları ve ilişkileri haritalandırıp, riskli örüntüleri AI ile erken saptama. Ölçeklenebilir sosyal grafik analiz altyapısı kurmak senin elinde.",
  },
  {
    id: 3,
    icon: (
      // Security icon
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="7" y="17" width="26" height="15" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="20" cy="26" r="3" fill="currentColor"/>
        <rect x="15" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "KVKK Uyumlu Veri Güvenliği",
    paragraph:
      "Tamamen Türkiye’nin veri regülasyonlarına uygun, yüksek güvenlikli bir mimari. CTO olarak, veri mahremiyeti ve kurumsal güvenlik standartlarını sen belirleyeceksin.",
  },
  {
    id: 4,
    icon: (
      // Integration icon
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="6" y="15" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
        <circle cx="12" cy="20" r="2" fill="currentColor"/>
        <circle cx="28" cy="20" r="2" fill="currentColor"/>
        <line x1="14" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Kurumsal Entegrasyonlar (Slack, Outlook vs.)",
    paragraph:
      "Çoklu iletişim platformlarından (Slack, Outlook, Teams) veri çekip gerçek zamanlı analiz yapan, entegre ve ölçeklenebilir bir backend. Bütünleşik sistem mimarisini birlikte kuruyoruz.",
  },
  {
    id: 5,
    icon: (
      // Dashboard icon
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="5" y="10" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
        <line x1="12" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Gerçek Zamanlı Dashboard & Raporlama",
    paragraph:
      "Kurumlara anlık risk ve iletişim özetleri sunan, hızlı ve etkileyici bir dashboard. Veri akışının ve UX’in temelini sen atacaksın.",
  },
  {
    id: 6,
    icon: (
      // Scalability icon
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="10" y="10" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M15 25L25 15" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 15H25V25" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Ölçeklenebilirlik & Performans",
    paragraph:
      "Yüzlerce kurumsal müşteri ve milyonlarca veri noktasında çalışacak, modüler ve hızlı bir mimari. CTO olarak altyapının kalıcı sürdürülebilirliğinden sen sorumlu olacaksın.",
  },
];
export default featuresData;
