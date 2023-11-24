'use client'
import HomeComponent from './components/HomeComponent/HomeComponent'
import {Hind} from 'next/font/google';
import MySlider from './components/SliderCard/MySlider';

const hind = Hind({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"]
})

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div id='portfolio'
      className='mt-0 pt-5 -mb-40'
      style={{
        backgroundImage: "linear-gradient(-62deg, #EEF7FB 0 40%, white 0% 100% )",
        width: "100%",
      }}      
      >
        <div className='container m-auto '>
          <p className='text-[300px] text-[#F7FBFD] md:pl-[50px] max-w-[750px] w-[100%] overflow-hidden'
          style={{transform: 'translate(0px, 120px)'}}
          >
            Portfolio
          </p>

          <div style={{transform: 'translate(0px, -90px)'}}>

            <p className='text-[#48AFDE] md:pl-[80px] px-5 font-extrabold text-5xl'>
              Some of My Work
            </p>

            <p className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}>
            Over my twenty-one years of Active Duty Military Service I developed a host of diverse skills and attention to detail that are usefull in my current coder role. My mission focus and can-do mindset means I will solve your problem and offer you a best practice solution or I will tell you why its not feasible inside your goals and/or budget target.
            </p>
                     
           
          </div>          
        </div>

        <div className=""><MySlider /></div>

      </div>      
    </main>
  )
}