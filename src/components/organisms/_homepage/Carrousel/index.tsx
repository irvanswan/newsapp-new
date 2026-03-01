import dynamic from "next/dynamic";
import Carrousel from "@/components/molecules/Carrousel";
import Image from "next/image";
import Link from "next/link";


const Text = dynamic(() => import("@/components/atoms/Text/Text"));
const HomepageCarrousel = () => {
  return (
    <section className="w-full relative h-screen bg-Dark">
      <Carrousel
        slides={[
          <div key={`idx-1`} className="relative w-full h-full">
            <div className="absolute z-50 dark:bg-Dark/50 bg-white/50 w-full h-full">
              <section className="lg:max-w-1/2 flex flex-col justify-center h-full md:p-24 p-8 gap-4">
                <Text
                  value="Share Information and Educate People"
                  className="dark:text-white text-black text-5xl font-bold"
                />
                <Text
                  value="Everyone has their point of view of something, but just don’t be afraid to express the facts. Be an author and share you prespective of something to the world."
                  className="dark:text-white text-black text-base font-bold"
                />
                <Link href="/login" className='w-fit px-12 capitalize bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-lg transition-colors'>
                  <Text type='span' value='start_exploring' formatted />
                </Link>
              </section>
            </div>
            <Image
              src="/assets/images/banner_home.jpg"
              alt="banner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>,
          <div key={`idx-2`} className="relative w-full h-full">
             <div className="absolute z-50 dark:bg-Dark/50 bg-white/50 w-full h-full">
              <section className="lg:max-w-1/2 flex flex-col justify-center h-full md:p-24 p-8 gap-4">
                <Text
                  value="Share Information and Educate People"
                  className="dark:text-white text-black text-5xl font-bold"
                />
                <Text
                  value="Everyone has their point of view of something, but just don’t be afraid to express the facts. Be an author and share you prespective of something to the world."
                  className="dark:text-white text-black text-base font-bold"
                />
                <Link href="/login" className='w-fit px-12 capitalize bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-lg transition-colors'>
                  <Text type='span' value='start_exploring' formatted />
                </Link>
              </section>
            </div>
            <Image
              src="/assets/images/banner_login.png"
              alt="banner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>,
        ]}
        options={{
          loop: true,
        }}
      />
    </section>
  )
}

export default HomepageCarrousel;