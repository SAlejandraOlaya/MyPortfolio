import React from 'react';
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import DownloadButton from "@/components/DownloadButton";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto mb-0">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              ¡Hola!soy <br /> <span className="text-accent">Alejandra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Fusiono mi experiencia médica con la pasión por el desarrollo web.
              Creo soluciones digitales intuitivas y de alto impacto.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;