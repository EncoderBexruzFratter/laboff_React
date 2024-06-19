import React, { useState } from 'react'

export default function Catalog() {
  const [selectBox , setSelectBox] = useState(false)
  const selectFun = () => {
    setSelectBox(!selectBox)
  }
  return (
    <div>
        <section className="pb-[77px] pt-[59px] md:pt-[74px] bg-[#EEEEEE]">
  <div className="max-w-[703px] mx-auto px-5">
    <h2 className="font-bold font-[Bebas Neue] md:text-[64px] text-[32px] mb-8 md:mb-4 text-[#197FAF]">
      Каталог автостекол
    </h2>
    <h3 className="font-medium text-lg md:text-2xl font-[Montserrat] mb-4">
      Бесплатная консультация наших специалистов и помощь в подборе нужного
      стекла
    </h3>
    <p className="font-normal text-sm md:text-lg text-[#000000CC] font-[Montserrat] mb-6 md:mb-[74px]">
      В наличии более 5000 позиций. Для корректного подбора укажите марку авто,
      год выпуска и наличие опций (камера, датчик дождя, обогрев, проекция).
      Если не уверены, понадобится VIN-номер авто.
    </p>
    <div className="w-full py-4 pl-8 rounded border border-[#0000004D] mb-6">
      <p id="katalog__text" className="">
        Марка
      </p>
    </div>
    <div className="w-full py-4 pl-8 rounded border border-[#0000004D] mb-6">
      <p id="katalog__text" className="">
        Год выпуска
      </p>
    </div>
    <div className="w-full py-4 pl-8 rounded border border-[#0000004D] mb-6">
      <p id="katalog__text" className="">
        Телефон для связи
      </p>
    </div>
    <button onClick={selectFun} id="katalog__box" className={`w-full overflow-hidden ${selectBox ? "h-[262px]" : "h-[56px]"} py-4 pl-8 rounded border border-[#0000004D] mb-6 slow__default`}>
      <button
        id="katalog__text__box"
        className="flex cursor-pointer items-center pb-4 gap-[10px] mb-[10px]"
      >
        <p id="katalog__text" onClick={selectFun} className="">
          Камера
        </p>
        <svg
          width={14}
          height={13}
          viewBox="0 0 14 13"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.00052 9.61916L11.175 2.61997H2.82604L7.00052 9.61916ZM6.10503 12.1196C6.19579 12.2716 6.32632 12.3979 6.48351 12.4856C6.6407 12.5734 6.81901 12.6196 7.00052 12.6196C7.18202 12.6196 7.36033 12.5734 7.51752 12.4856C7.67471 12.3979 7.80525 12.2716 7.89601 12.1196L13.8615 2.11988C13.9522 1.96784 14 1.79537 14 1.61981C14 1.44424 13.9522 1.27177 13.8615 1.11973C13.7707 0.967681 13.6402 0.841421 13.483 0.753636C13.3258 0.665851 13.1475 0.619633 12.966 0.619629H1.03403C0.852515 0.619633 0.674202 0.665851 0.51701 0.753636C0.359818 0.841421 0.229285 0.967681 0.13853 1.11973C0.0477764 1.27177 -1.15279e-06 1.44424 0 1.61981C1.15284e-06 1.79537 0.0477811 1.96784 0.138537 2.11988L6.10503 12.1196Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div className="flex flex-col gap-[10px]">
        <button className="max-w-[164px] px-8  py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
          Камера
        </button>
        <button className="max-w-[164px] px-8  py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
          Датчик дождя
        </button>
        <button className="max-w-[164px] px-8  py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
          Обогрев
        </button>
        <button className="max-w-[164px] px-8  py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
          Проекция
        </button>
      </div>
    </button>
    <div className="w-full py-4 pl-8 rounded border border-[#0000004D] mb-8">
      <p id="katalog__text" className="">
        Vin-kod
      </p>
    </div>
    <button
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      className="md:max-w-[336px] w-full px-[87px]  md:px-16 py-4 md:py-6 bg-[#197FAF] rounded-[60px] font-medium text-lg md:text-2xl text-white slow__default  hover:bg-black hover:text-white"
    >
      Оставить заявку
    </button>
  </div>
</section>

    </div>
  )
}
