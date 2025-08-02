import Carrousel from "@/components/molecules/Carrousel";
import Image from "next/image";

const HomepageCarrousel = () => {
  return (
    <section className="w-full relative md:h-screen h-[50dvh] bg-Dark">
      <Carrousel
        slides={[
          <div key={`idx-1`} className="relative w-full h-full">
            <Image
              src="/assets/images/banner_login.png"
              alt="banner"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>,
          <div key={`idx-2`} className="relative w-full h-full">
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