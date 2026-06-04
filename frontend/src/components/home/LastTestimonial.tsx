import Link from "next/link"
 
const  LastTestimonial = () => {
return (
    <section >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="bg-gradient-to-br from-blue-200 to-gray-50 dark:from-gray-900 dark:bg-gray-800 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
                <div className="md:w-2/5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-blue-950 dark:text-white font-display font-bold leading-tight">
                        Your Next Journey Awaits ✈️
                    </h1>
                </div>
                <div className="flex flex-col md:flex-1 space-y-8">
                    <p className="text-gray-700 dark:text-gray-300 text-xl">
                        Discover breathtaking destinations, hidden gems, and unforgettable experiences crafted just for you.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link className="bg-transparent rounded-full border py-3 border-gray-400 backdrop-blur px-5 transition duration-300 hover:-translate-y-1 hover:bg-gray/12" href="/booking">
                            Book your trip now
                        </Link>
                        <Link href="/packages" className="h-12 px-5 rounded-full flex border border-amber-100 items-center bg-orange-600 text-white  transition duration-300 hover:-translate-y-1">
                            Explore Packages
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
export default LastTestimonial