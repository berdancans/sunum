import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl shadow-md">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-extrabold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white tracking-tight">
          {title}
        </h3>
        <p className="text-body-color text-base font-medium leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
