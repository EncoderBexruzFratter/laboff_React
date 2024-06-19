import React from 'react'
import services1 from "../img/services/1.png"
import services2 from "../img/services/2.png"
import services3 from "../img/services/3.png"
import services4 from "../img/services/4.png"
import services5 from "../img/services/5.png"
import services6 from "../img/services/6.png"

export default function Services() {
  return (
    <div>
        <section className="bg-[#EEEEEE] pt-[38px] pb-20 md:pt-[70px] md:pb-[117px]">
  <div className="max-w-[1202px] mx-auto px-5">
    <h2 className="font-bold text-3xl md:text-[64px] text-[#197FAF] mb-8 md:mb-[42px]">
      Услуги
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 md:gap-y-[84px]">
      <div className="w-full">
        <img
          src={services1}
          alt=""
          className="w-full mb-8"
          id="sevices__img"
        />
        <h3
          className="font-medium text-lg  md:text-2xl mb-3 text-nowrap"
          id="services__title"
        >
          Замена любого стекла
        </h3>
        <p id="services__text" className="font-normal text-sm md:text-xl mb-6">
          от 600 рублей
        </p>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          id="services__btn"
          className="md:inline-block  block w-full hover:bg-black hover:text-white slow__default md:max-w-[232px] py-4 px-[42px] bg-[#197FAF] rounded-[60px] text-white"
        >
          Заявка мастеру
        </button>
      </div>
      <div className="w-full">
        <img
          src={services2}
          alt=""
          className="w-full mb-8"
          id="sevices__img"
        />
        <h3
          className="font-medium text-lg  md:text-2xl mb-3 text-nowrap"
          id="services__title"
        >
          Ремонт скола
        </h3>
        <p id="services__text" className="font-normal text-sm md:text-xl mb-6">
          от 600 рублей
        </p>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          id="services__btn"
          className="md:inline-block  block w-full hover:bg-black hover:text-white slow__default md:max-w-[232px] py-4 px-[42px] bg-[#197FAF] rounded-[60px] text-white"
        >
          Заявка мастеру
        </button>
      </div>
      <div className="w-full">
        <img
          src={services3}
          alt=""
          className="w-full mb-8"
          id="sevices__img"
        />
        <h3
          className="font-medium text-lg  md:text-2xl mb-3 text-nowrap"
          id="services__title"
        >
          Остановка трещины
        </h3>
        <p id="services__text" className="font-normal text-sm md:text-xl mb-6">
          от 500 рублей
        </p>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          id="services__btn"
          className="md:inline-block  block w-full hover:bg-black hover:text-white slow__default md:max-w-[232px] py-4 px-[42px] bg-[#197FAF] rounded-[60px] text-white"
        >
          Заявка мастеру
        </button>
      </div>
      <div className="w-full">
        <img
          src={services4}
          alt=""
          className="w-full mb-8"
          id="sevices__img"
        />
        <h3
          className="font-medium text-lg  md:text-2xl mb-3 text-nowrap"
          id="services__title"
        >
          Заливка трещины
        </h3>
        <p id="services__text" className="font-normal text-sm md:text-xl mb-6">
          от 700 рублей
        </p>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          id="services__btn"
          className="md:inline-block  block w-full hover:bg-black hover:text-white slow__default md:max-w-[232px] py-4 px-[42px] bg-[#197FAF] rounded-[60px] text-white"
        >
          Заявка мастеру
        </button>
      </div>
      <div className="w-full">
        <img
          src={services5}
          alt=""
          className="w-full mb-8"
          id="sevices__img"
        />
        <h3
          className="font-medium text-lg  md:text-2xl mb-3 text-nowrap"
          id="services__title"
        >
          Покрытие “Антидождь”
        </h3>
        <p id="services__text" className="font-normal text-sm md:text-xl mb-6">
          от 2500 рублей
        </p>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          id="services__btn"
          className="md:inline-block  block w-full hover:bg-black hover:text-white slow__default md:max-w-[232px] py-4 px-[42px] bg-[#197FAF] rounded-[60px] text-white"
        >
          Заявка мастеру
        </button>
      </div>
      <div className="w-full">
        <img
          src={services6}
          alt=""
          className="w-full mb-8"
          id="sevices__img"
        />
        <h3
          className="font-medium text-lg  md:text-2xl mb-3 text-nowrap"
          id="services__title"
        >
          Полировка фар
        </h3>
        <p id="services__text" className="font-normal text-sm md:text-xl mb-6">
          от 800 рублей
        </p>
        <button
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          id="services__btn"
          className="md:inline-block  block w-full hover:bg-black hover:text-white slow__default md:max-w-[232px] py-4 px-[42px] bg-[#197FAF] rounded-[60px] text-white"
        >
          Заявка мастеру
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
