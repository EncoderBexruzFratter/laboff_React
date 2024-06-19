import React from 'react'
import about__vid from "../img/about/about__top.png"
import about__bottom from "../img/about/about__bottom.png"
import ptichka from "../img/hero/ptichka.png"
import laboff from "../img/about/lobof.png"

export default function About() {
  return (
    <div>
        <section className="bg-white py-[84px] md:pt-24 md:pb-[120px]">
  <div className="max-w-[1202px] mx-auto px-5">
    <div className="flex lg:flex-row flex-col lg:items-center lg:gap-0 gap-4 justify-between mb-6 lg:mb-24">
      <div className="max-w-[416px]">
        <h2 className="font-normal text-sm md:text-lg mb-2   md:mb-1">
          Директор дядя Лобофф Уфа
        </h2>
        <h3 className="font-medium text-sm md:text-2xl italic mb-2 md:mb-4">
          Роман Игоревич Прохоров
        </h3>
        <h4 className="from-black font-[Bebas Neue] text-[32px] md:text-[64px] mb-4 md:mb-8 text-[#197FAF]">
          Дядя лобофф
        </h4>
        <div className="lg:hidden lg:max-w-[660px] mb-8 h-[464px] lg:h-[349px] lg:rounded-[32px] rounded-[24px] overflow-hidden">
          <img
            src={about__vid}
            alt=""
            className="w-full object-cover h-full"
          />
        </div>
        <h5 className="font-medium text-2xl mb-4">
          Вас приветствует компания <br />{" "}
          <span className="text-[#197FAF]">«ДЯДЯ ЛОБОФФ»</span> г. Уфа
        </h5>
        <p className=" font-normal text-sm md:text-lg">
          Мы оказываем услуги по замене и ремонту лобового (ветрового), заднего,
          бокового автостекла. Замена стекла авто в компании
        </p>
      </div>
      <div className="lg:max-w-[660px] lg:block hidden h-[464px] lg:h-[349px] lg:rounded-[32px] rounded-[24px] overflow-hidden">
        <img
          src={about__vid}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
    </div>
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 lg:items-center justify-between">
      <div className="max-w-[582px] h-[206px] rounded-[24px] overflow-hidden sm:rounded-[32px] sm:h-[360px]">
        <img
          src={about__bottom}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-[499px]">
        <img src={ptichka} alt="" className="mb-3" />
        <p className="font-normal text-sm md:text-lg mb-8 ">
          <span className="font-medium">«ДЯДЯ ЛОБОФФ»</span>&nbsp;— это гарантия
          надежности и качества. Реализуемая нами продукция отличается
          прочностью и безопасностью, обладает правильной геометрией и гладкой
          поверхностью, не портит зрение и соответствует требованиям ГОСТ.
        </p>
        <img src={laboff} alt="" className="mb-[10px]" />
        <p className="font-normal text-sm md:text-lg ">
          Стекла для основных европейских{" "}
          <span className="font-medium">и японских марок/моделей машин.</span>
          &nbsp;
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
