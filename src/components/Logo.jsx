import React from 'react'
import logo1 from "../img/logo/1.png"
import logo2 from "../img/logo/2.png"
import logo3 from "../img/logo/3.png"
import logo4 from "../img/logo/4.png"
import logo5 from "../img/logo/5.png"
import logo6 from "../img/logo/6.png"


export default function Logo() {
  return (
    <div>
        <section className="pb-[84px] md:pb-[207px]">
  <div className="max-w-[1160px] mx-auto">
    <marquee behavior="scroll" loop={-1} direction="">
      <div className="flex items-center gap-[52px] md:gap-16">
        <img src={logo1} alt="" className="" />
        <img src={logo2} alt="" className="" />
        <img src={logo3} alt="" className="" />
        <img src={logo4} alt="" className="" />
        <img src={logo5} alt="" className="" />
        <img src={logo6} alt="" className="" />
      </div>
    </marquee>
  </div>
</section>

    </div>
  )
}
