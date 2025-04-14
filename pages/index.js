import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SkyWings - Voler en toute liberté</title>
      </Head>

      <section className="relative w-full h-screen overflow-hidden">
        {/* Vidéo de fond */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="/images/fallback.jpg" // optionnel si tu veux une image de secours
        >
          <source src="/videos/skywings-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay + contenu */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Voler en toute liberté</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Découvrez une nouvelle façon de prendre les airs : simple, élégante et accessible. SkyWings vous invite à voyager autrement, dans le confort et la sérénité.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/vols">
              <button className="bg-white text-black font-semibold hover:bg-gray-200">
                Découvrir notre flotte
              </button>
            </Link>
            <Link href="/reserver">
              <button className="bg-transparent border border-white hover:bg-white hover:text-black">
                Réserver
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
