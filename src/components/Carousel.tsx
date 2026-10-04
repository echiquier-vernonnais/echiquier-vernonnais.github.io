import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200"
      ref={emblaRef}
    >
      <div className="flex">
        {[
          { src: "/enfants.jpg", caption: "Cours débutants" },
          { src: "/tournoi.jpg", caption: "Open FIDE" },
          { src: "/chessbar.jpg", caption: "Chess bar" },
        ].map((img, i) => (
          <div key={i} className="flex-[0_0_100%] min-w-0 relative">
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm text-center">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
