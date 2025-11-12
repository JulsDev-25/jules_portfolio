import React, {useEffect} from 'react'
import PhotoInShape from '../PhotoInshape'
import pic from '../../assets/img/caracterr.png'
import { motion } from 'framer-motion'

function Hero() {
  useEffect(() => {
    const banner = document.getElementById("banner");
    const gradient = document.getElementById("gradient");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = banner.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;

      gradient.style.background = `
  radial-gradient(
    600px circle at ${x}px ${y}px,
    rgba(99, 102, 241, 0.22),   /* Indigo clair */
    rgba(56, 189, 248, 0.12),   /* Bleu ciel */
    transparent 80%
  )
`;
    };

    banner.addEventListener("mousemove", handleMouseMove);
    return () => banner.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div 
      className='md:h-[100vh] pt-5 md:pt-0 ' id="banner"
      style={{ backgroundSize: 'cover', background: 'linear-gradient(135deg, rgba(8, 19, 138, 0.5) 30%, rgba(166, 64, 255, 0.4) 78%), url("https://cloud-1de12d.becdn.net/media/iW=5000&iH=any/80c17333f2a637f2d7a5311c89ca6df7/background-image.jpg")  center' }}
    >
      <div className='h-full grid gid-cols-1 md:grid-cols-2 justify-center items-center lg:mx-40 md:mx-20 sm:mx-10 mx-5'>
        <div className='col-span-1 flex flex-col md:ml-5 items-center md:items-start '>
           {/*<h1 className='text-slate-50 text-8xl font-[900] mb-8'>Introduction</h1> ]*/}

           <p className='font-[900] text-slate-50 text-8xl text-center md:text-start'> <span className='text-4xl'>Salut, Moi c'est</span> <br className='mb-5'/> <span className='font-mono'>Jules Loïc <br/> NGNIPIBEO</span> </p>

           <div className='text-xl text-slate-50/40 mt-5 mb-10'>
            <p className='text-center md:text-start'> Développeur Full-Stack <span className='text-slate-100 ' >web</span> et <span className='text-slate-100' >mobile</span>, je conçois des solutions qui simplifient le quotidien, accéssibles n'importe ou et sur n'importe de quel appareil. Donner vie à des idées, transformer des concepts en interfaces fluides et des lignes de code en expériences utiles.</p>
           </div>

           <div className='flex gap-4'>
            <button 
              className='border-1 hover:bg-linear-to-r text-slate-50 from-indigo-500 to-purple-500 px-6 py-2 transition'
              style={{borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6) 1'}}
            >
              À propos de moi
            </button>
            <button 
              className='border-1 bg-linear-to-r text-slate-50 from-indigo-500 to-purple-500 px-6 py-2 transition'
              style={{borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6) 1'}}
            >
              Mes Projets
            </button>
           </div>
        </div>



        <div className="col-span-1 flex justify-end">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotation: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className='relative flex justify-center items-end'
          >
            {/* Welcome image */}
            <PhotoInShape src={pic} size={600} />

            {/* Ombre dynamique */}
            <motion.div 
              animate={{
                scaleX: [1, 0.6, 1],
                opacity: [0.9, 0.5, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='absolute bottom-0 w-3/4 h-8 bg-black/60 rounded-full blur-2xl'
            />
          </motion.div>
        </div>
      </div>

      <div
        id="gradient"
        className="absolute inset-0 pointer-events-none transition-all duration-200"
      ></div>
    </div>
  )
}

export default Hero