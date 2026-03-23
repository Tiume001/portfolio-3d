import React from 'react'

export default function Overlay() {
  return (
    <div id="overlay-container" className="w-full relative z-10 text-white font-sans pointer-events-none">
      
      {/* 1. Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center p-8 pointer-events-auto">
        <div className="max-w-4xl text-center backdrop-blur-sm bg-black/10 p-10 rounded-3xl border border-white/5 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Ciao, sono [Tuo Nome]
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Studente Universitario & 3D Web Developer Appassionato
          </p>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer">
            Scopri di più
          </button>
        </div>
      </section>

      {/* 2. Skills Section */}
      <section className="h-screen w-full flex items-center justify-center p-8 pointer-events-auto">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Competenze</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Git', 'Vite'].map((skill, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-violet-500/50">
                <h3 className="text-xl font-medium text-gray-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Section */}
      <section className="h-screen w-full flex items-center justify-center p-8 pointer-events-auto">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Progetti in Evidenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-square flex flex-col justify-end p-8 hover:border-violet-500/50 transition-colors duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Progetto #{project}</h3>
                  <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Breve descrizione del progetto e tecnologie utilizzate.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section className="h-screen w-full flex items-center justify-center p-8 pointer-events-auto">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Lavoriamo Insieme</h2>
          <p className="text-xl text-gray-400 mb-12">
            Sono sempre aperto a nuove opportunità e collaborazioni stimolanti.
          </p>
          <form className="flex flex-col gap-6 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="La tua email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-colors backdrop-blur-md text-white"
            />
            <textarea 
              placeholder="Il tuo messaggio" 
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-colors backdrop-blur-md text-white resize-none"
            ></textarea>
            <button 
              type="button"
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer"
            >
              Invia Messaggio
            </button>
          </form>
          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </section>
      
    </div>
  )
}
