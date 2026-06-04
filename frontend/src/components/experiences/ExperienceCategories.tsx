import Image from "next/image";

const categories = [
  { title: "Adventure", desc: "Explore thrilling mountain and trekking experiences.", img: "/images/contact.png" },
  { title: "Spiritual", desc: "Discover peace in sacred destinations.", img: "/images/chardham.png" },
  { title: "Beach", desc: "Relax by the sea and enjoy coastal vibes.", img: "/images/goa.png" },
  { title: "Nature", desc: "Reconnect with nature and greenery.", img: "/images/hero.jpg" },
  { title: "Cultural", desc: "Experience traditions, festivals, and heritage.", img: "/images/jaipur.png" },
];

export default function ExperienceCategories() {
  return (
    <section className="py-12 sm:py-16 w-[90%] mx-auto text-black rounded-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        Explore Experiences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((item, i) => (
          <div key={i} className="bg-gray-100 rounded-xl overflow-hidden hover:scale-105 transition">
            <div className="relative w-full h-[200px] sm:h-[220px]">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
