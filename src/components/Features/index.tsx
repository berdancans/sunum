import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Teknik Olarak Sıfırdan İnşa – CTO’ya Meydan Okuma"
          paragraph="AI-First ve RelatIQ; ölçeklenebilirlikten NLP’ye, entegrasyondan veri güvenliğine kadar Türkiye’de çözülememiş problemleri çözmek için teknik liderini arıyor. Bu özelliklerin her biri senin imzanı bekliyor."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
