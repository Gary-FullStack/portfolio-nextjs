import React from 'react'
import { Hind } from 'next/font/google';

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  });



export default function AboutMe() {

  return (
    
    <React.Fragment>

        <div id='about-me' className='bg=[#E0F3FD] pt-[250px] mt-10 pb-[100px] lg:pb-[600px] relative lg:h-800px'>

            <div className='container m-auto'>
                <h1 className='text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[50px] text-[#EAF7FC]'>
                    About Me
                </h1>
                <h1 className='relative font-recoletaBlack text-5xl text-[#48AFDE] mb-5 -mt-40 md:px-24 px-5'> This is me, nice to meet you !</h1>
                <h4 className='relative w-full font-[300] md:w-3/4 lg:w-1/2 font-recoleta text-[#22374] text-2xl mb-10 px-5 md:px-24'>
                    A lifetime of problem solving and a thirst for leaning; coding fills that need.
                </h4>

                <section className='relative flex flex-col lg:flex-row px-5 md:px-24'>

                    <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className} `}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla facilisi. Sed non risus. Suspendisse lectus tortor,
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.   
                    </p>

                    <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className} `}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla facilisi. Sed non risus. Suspendisse lectus tortor,
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.   
                    </p>

                    <p className={`w-full lg:w-1/3 text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className} `}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla facilisi. Sed non risus. Suspendisse lectus tortor,
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.   
                    </p>


                </section>


            </div>

        </div>



        







    </React.Fragment>



  )
}
