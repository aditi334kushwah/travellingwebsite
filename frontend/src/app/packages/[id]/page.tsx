import { packages } from "@/data/packages";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

// ✅ THIS IS IMPORTANT
export function generateStaticParams() {
  return packages.map((item) => ({
    id: item.id,
  }));
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = packages.find(
    (item) => item.id === id
  );

  if (!data) {
    return <div className="p-50 text-xl">Package Not Found</div>;
  }

  return (

    <section>
        <div className="bg-gradient-to-r from-white to-[#e5e3e2] ] px-20 py-10">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-8">
            <h1 className="text-4xl font-bold">{data.title}</h1>

            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <MapPin size={18} />
              {data.location}
            </div>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              {data.desc}
            </p>

            <div className="mt-5 flex gap-4">
              <button className="bg-[#c8782f] text-white px-6 py-3 rounded-full">
                Book Now
              </button>

              <Link href="/packages">
                <button className="bg-gray-300 px-6 py-3 rounded-full">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
    </div>
    </section>
    
  );
};

export default Page;