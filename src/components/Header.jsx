import React, { useEffect, useState } from 'react'
import header__logo from "../img/header/header__logo.svg"
import header__bg from "../img/header/header__bg.png"
import ptichka from "../img/hero/ptichka.png"
import hamburger from "../img/header/hamburger.svg"
import close from "../img/header/close.svg"
import hero__close from "../img/hero/form__close.svg"

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [formModal, setformModal] = useState(false)
  const [selectBox, setSelectBox] = useState(false)
  const [selectBox2, setSelectBox2] = useState(false)

  const [state, state2] = useState(false)

  console.log(state, state2);

  
  const toggmeAllMenus = (setState, stateValue) => {
    setState(!stateValue)
  }
  return (
    <div>
      <div
        className="pb-[53px] bg-black md:pb-[27px] relative"
        style={{
          backgroundImage: `url(${header__bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        {/* heade start */}
        <header className="pt-[9px] md:pt-3 pb-[30px] md:pb-[68px] relative">
          <div className="max-w-[1205px] mx-auto px-5 flex items-center justify-between">
            <ul className="hidden md:flex items-center gap-3 lg:gap-[42px]">
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  Работы
                </a>
              </li>
            </ul>
            <a href="#" className="md:max-w-[136px] max-w-[96px]">
              <img
                src={header__logo}
                alt=""
                className="w-full object-cover"
              />
            </a>
            <ul className="hidden md:flex items-center gap-3 lg:gap-[42px]">
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-lg text-white hover:text-[#197FAF] slow__default"
                >
                  +7 (917) 772-20-12
                </a>
              </li>
            </ul>
            <button id="hamburger" onClick={() => setMenuIsOpen(!menuIsOpen)} className="max-w-[45px] md:hidden">
              <img
                src={hamburger}
                alt=""
                className="w-full object-cover"
              />
            </button>
          </div>
          <div
            id="res__nav"
            className={`fixed z-10 md:hidden slow__default ${menuIsOpen ? "top-0" : "top-[-1000%]"} left-0 pt-[9px] pb-[121px] w-full bg-[#171717]`}
          >
            <div className=" max-w-[1205px] mx-auto px-5">
              <div className="flex items-center justify-between mb-[54px]">
                <a href="#" className="md:max-w-[136px] max-w-[96px]">
                  <img
                    src={header__logo}
                    alt=""
                    className="w-full object-cover"
                  />
                </a>
                <button id="close__btn" onClick={() => setMenuIsOpen(!menuIsOpen)} className="max-w-[45px]">
                  <img
                    src={close}
                    alt=""
                    className="w-full object-cover"
                  />
                </button>
              </div>
              <div className="w-full flex flex-col items-center gap-8">
                <ul className="flex flex-col items-center gap-8">
                  <li>
                    <a
                      href="#"
                      className="font-medium text-xl text-white hover:text-[#197FAF] slow__default"
                    >
                      Каталог
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-xl text-white hover:text-[#197FAF] slow__default"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-xl text-white hover:text-[#197FAF] slow__default"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-xl text-white hover:text-[#197FAF] slow__default"
                    >
                      Работы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-xl text-white hover:text-[#197FAF] slow__default"
                    >
                      Отзывы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-xl text-white hover:text-[#197FAF] slow__default"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
                <div className="flex items-center gap-8">
                  <a
                    href="#"
                    target="_blank"
                    className="text-[white] slow__default hover:text-[#197FAF]"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM23.424 10.88C23.184 13.408 22.144 19.552 21.616 22.384C21.392 23.584 20.944 23.984 20.528 24.032C19.6 24.112 18.896 23.424 18 22.832C16.592 21.904 15.792 21.328 14.432 20.432C12.848 19.392 13.872 18.816 14.784 17.888C15.024 17.648 19.12 13.92 19.2 13.584C19.2111 13.5331 19.2096 13.4803 19.1957 13.4301C19.1818 13.3799 19.1558 13.3339 19.12 13.296C19.024 13.216 18.896 13.248 18.784 13.264C18.64 13.296 16.4 14.784 12.032 17.728C11.392 18.16 10.816 18.384 10.304 18.368C9.728 18.352 8.64 18.048 7.824 17.776C6.816 17.456 6.032 17.28 6.096 16.72C6.128 16.432 6.528 16.144 7.28 15.84C11.952 13.808 15.056 12.464 16.608 11.824C21.056 9.968 21.968 9.648 22.576 9.648C22.704 9.648 23.008 9.68 23.2 9.84C23.36 9.968 23.408 10.144 23.424 10.272C23.408 10.368 23.44 10.656 23.424 10.88Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-[white] slow__default hover:text-[#197FAF]"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.6068 7.37942C24.82 -0.000243945 15.047 -2.1942 7.46785 2.39316C0.0881831 6.98052 -2.30522 16.953 2.48159 24.3327L2.88049 24.9311L1.28489 30.9146L7.2684 29.319L7.86675 29.7179C10.4596 31.114 13.2519 31.9118 16.0442 31.9118C19.036 31.9118 22.0277 31.114 24.6206 29.5184C32.0002 24.7316 34.1942 14.9585 29.6068 7.37942ZM25.4184 22.7371C24.6206 23.9338 23.6233 24.7316 22.2272 24.9311C21.4294 24.9311 20.4321 25.33 16.4431 23.7344C13.0525 22.1387 10.2602 19.5459 8.26565 16.5541C7.06895 15.158 6.4706 13.3629 6.27115 11.5679C6.27115 9.97228 6.8695 8.57612 7.86675 7.57887C8.26565 7.17997 8.66455 6.98052 9.06345 6.98052H10.0607C10.4596 6.98052 10.8585 6.98052 11.058 7.77832C11.4569 8.77557 12.4541 11.169 12.4541 11.3684C12.6536 11.5679 12.6536 11.9668 12.4541 12.1662C12.6536 12.5651 12.4541 12.964 12.2547 13.1635C12.0552 13.3629 11.8558 13.7618 11.6563 13.9613C11.2574 14.1607 11.058 14.5596 11.2574 14.9585C12.0552 16.1552 13.0525 17.3519 14.0497 18.3492C15.2464 19.3464 16.4431 20.1442 17.8393 20.7426C18.2382 20.942 18.6371 20.942 18.8365 20.5431C19.036 20.1442 20.0332 19.147 20.4321 18.7481C20.831 18.3492 21.0305 18.3492 21.4294 18.5486L24.6206 20.1442C25.0195 20.3437 25.4184 20.5431 25.6178 20.7426C25.8173 21.3409 25.8173 22.1387 25.4184 22.7371Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-[white] slow__default hover:text-[#197FAF]"
                  >
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9168 0H11.1008C2.1312 0 0 2.1328 0 11.0832V20.9008C0 29.8672 2.1168 32 11.0832 32H20.9008C29.8672 32 32 29.8832 32 20.9168V11.1008C32 2.1312 29.8832 0 20.9168 0ZM25.8336 22.832H23.4992C22.616 22.832 22.3504 22.1168 20.7664 20.5328C19.384 19.2 18.8 19.0336 18.4496 19.0336C17.9664 19.0336 17.8336 19.1664 17.8336 19.8336V21.9328C17.8336 22.5008 17.6496 22.8336 16.1664 22.8336C14.727 22.7369 13.3311 22.2995 12.0938 21.5576C10.8564 20.8158 9.81307 19.7905 9.0496 18.5664C7.23707 16.3104 5.97591 13.6626 5.3664 10.8336C5.3664 10.4832 5.4992 10.1664 6.1664 10.1664H8.5008C9.1008 10.1664 9.3168 10.4336 9.5504 11.0496C10.6832 14.384 12.616 17.2832 13.4 17.2832C13.7008 17.2832 13.832 17.1504 13.832 16.4V12.9664C13.7328 11.4 12.9008 11.2672 12.9008 10.7008C12.9115 10.5514 12.9799 10.4121 13.0917 10.3123C13.2034 10.2125 13.3496 10.1602 13.4992 10.1664H17.1664C17.6672 10.1664 17.8336 10.416 17.8336 11.016V15.6496C17.8336 16.1504 18.0496 16.3168 18.2 16.3168C18.5008 16.3168 18.7328 16.1504 19.2832 15.6C20.4654 14.1583 21.4313 12.5521 22.1504 10.832C22.2239 10.6254 22.363 10.4485 22.5464 10.3283C22.7299 10.2081 22.9476 10.1513 23.1664 10.1664H25.5008C26.2 10.1664 26.3488 10.5168 26.2 11.016C25.3512 12.9175 24.3009 14.7225 23.0672 16.4C22.816 16.784 22.7152 16.984 23.0672 17.4336C23.2992 17.784 24.1168 18.4672 24.6672 19.1168C25.467 19.9146 26.1313 20.8377 26.6336 21.8496C26.8336 22.4992 26.4992 22.832 25.8336 22.832Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1205px] mx-auto px-5 hidden md:flex items-center justify-between">
            <div className="">
              <h1 className="font-medium text-lg text-white mb-2">Режим работы</h1>
              <p className="font-normal text-lg text-white opacity-80">
                Вт-сб 9:00-18:00
              </p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#"
                target="_blank"
                className="text-[white] slow__default hover:text-[#197FAF]"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM23.424 10.88C23.184 13.408 22.144 19.552 21.616 22.384C21.392 23.584 20.944 23.984 20.528 24.032C19.6 24.112 18.896 23.424 18 22.832C16.592 21.904 15.792 21.328 14.432 20.432C12.848 19.392 13.872 18.816 14.784 17.888C15.024 17.648 19.12 13.92 19.2 13.584C19.2111 13.5331 19.2096 13.4803 19.1957 13.4301C19.1818 13.3799 19.1558 13.3339 19.12 13.296C19.024 13.216 18.896 13.248 18.784 13.264C18.64 13.296 16.4 14.784 12.032 17.728C11.392 18.16 10.816 18.384 10.304 18.368C9.728 18.352 8.64 18.048 7.824 17.776C6.816 17.456 6.032 17.28 6.096 16.72C6.128 16.432 6.528 16.144 7.28 15.84C11.952 13.808 15.056 12.464 16.608 11.824C21.056 9.968 21.968 9.648 22.576 9.648C22.704 9.648 23.008 9.68 23.2 9.84C23.36 9.968 23.408 10.144 23.424 10.272C23.408 10.368 23.44 10.656 23.424 10.88Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-[white] slow__default hover:text-[#197FAF]"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.6068 7.37942C24.82 -0.000243945 15.047 -2.1942 7.46785 2.39316C0.0881831 6.98052 -2.30522 16.953 2.48159 24.3327L2.88049 24.9311L1.28489 30.9146L7.2684 29.319L7.86675 29.7179C10.4596 31.114 13.2519 31.9118 16.0442 31.9118C19.036 31.9118 22.0277 31.114 24.6206 29.5184C32.0002 24.7316 34.1942 14.9585 29.6068 7.37942ZM25.4184 22.7371C24.6206 23.9338 23.6233 24.7316 22.2272 24.9311C21.4294 24.9311 20.4321 25.33 16.4431 23.7344C13.0525 22.1387 10.2602 19.5459 8.26565 16.5541C7.06895 15.158 6.4706 13.3629 6.27115 11.5679C6.27115 9.97228 6.8695 8.57612 7.86675 7.57887C8.26565 7.17997 8.66455 6.98052 9.06345 6.98052H10.0607C10.4596 6.98052 10.8585 6.98052 11.058 7.77832C11.4569 8.77557 12.4541 11.169 12.4541 11.3684C12.6536 11.5679 12.6536 11.9668 12.4541 12.1662C12.6536 12.5651 12.4541 12.964 12.2547 13.1635C12.0552 13.3629 11.8558 13.7618 11.6563 13.9613C11.2574 14.1607 11.058 14.5596 11.2574 14.9585C12.0552 16.1552 13.0525 17.3519 14.0497 18.3492C15.2464 19.3464 16.4431 20.1442 17.8393 20.7426C18.2382 20.942 18.6371 20.942 18.8365 20.5431C19.036 20.1442 20.0332 19.147 20.4321 18.7481C20.831 18.3492 21.0305 18.3492 21.4294 18.5486L24.6206 20.1442C25.0195 20.3437 25.4184 20.5431 25.6178 20.7426C25.8173 21.3409 25.8173 22.1387 25.4184 22.7371Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-[white] slow__default hover:text-[#197FAF]"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9168 0H11.1008C2.1312 0 0 2.1328 0 11.0832V20.9008C0 29.8672 2.1168 32 11.0832 32H20.9008C29.8672 32 32 29.8832 32 20.9168V11.1008C32 2.1312 29.8832 0 20.9168 0ZM25.8336 22.832H23.4992C22.616 22.832 22.3504 22.1168 20.7664 20.5328C19.384 19.2 18.8 19.0336 18.4496 19.0336C17.9664 19.0336 17.8336 19.1664 17.8336 19.8336V21.9328C17.8336 22.5008 17.6496 22.8336 16.1664 22.8336C14.727 22.7369 13.3311 22.2995 12.0938 21.5576C10.8564 20.8158 9.81307 19.7905 9.0496 18.5664C7.23707 16.3104 5.97591 13.6626 5.3664 10.8336C5.3664 10.4832 5.4992 10.1664 6.1664 10.1664H8.5008C9.1008 10.1664 9.3168 10.4336 9.5504 11.0496C10.6832 14.384 12.616 17.2832 13.4 17.2832C13.7008 17.2832 13.832 17.1504 13.832 16.4V12.9664C13.7328 11.4 12.9008 11.2672 12.9008 10.7008C12.9115 10.5514 12.9799 10.4121 13.0917 10.3123C13.2034 10.2125 13.3496 10.1602 13.4992 10.1664H17.1664C17.6672 10.1664 17.8336 10.416 17.8336 11.016V15.6496C17.8336 16.1504 18.0496 16.3168 18.2 16.3168C18.5008 16.3168 18.7328 16.1504 19.2832 15.6C20.4654 14.1583 21.4313 12.5521 22.1504 10.832C22.2239 10.6254 22.363 10.4485 22.5464 10.3283C22.7299 10.2081 22.9476 10.1513 23.1664 10.1664H25.5008C26.2 10.1664 26.3488 10.5168 26.2 11.016C25.3512 12.9175 24.3009 14.7225 23.0672 16.4C22.816 16.784 22.7152 16.984 23.0672 17.4336C23.2992 17.784 24.1168 18.4672 24.6672 19.1168C25.467 19.9146 26.1313 20.8377 26.6336 21.8496C26.8336 22.4992 26.4992 22.832 25.8336 22.832Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </header>
        {/* header end */}
        {/* hero start */}
        <section className="md:pb-[110px]">
          <div className="max-w-[1205px] mx-auto px-5 ">
            <div className="max-w-[1089px]">
              <h2
                id="hero__title"
                className="font-[Bebas Neue] font-bold text-3xl md:text-[44px] mb-8 md:mb-14 lg:leading-[76px] text-white"
              >
                Продажа и установка автостекол в Уфе{" "}
                <span className="text-[#197FAF]">за 1 час</span>{" "}
                <br className="xl:block hidden" /> и спожизненной гарантией на стекло
                и на работу
              </h2>
              <div className="flex md:hidden flex-col gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src={ptichka}
                    alt=""
                    className="w-7 h-7 object-cover"
                  />
                  <p id="hero__text" className="font-medium text-base text-white">
                    Установка за 1 час
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={ptichka}
                    alt=""
                    className="w-7 h-7 object-cover"
                  />
                  <p id="hero__text" className="font-medium text-base text-white">
                    Пожизненная гарантия
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={ptichka}
                    alt=""
                    className="w-7 h-7 object-cover"
                  />
                  <p id="hero__text" className="font-medium text-base text-white">
                    Новейшее оборудование
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={ptichka}
                    alt=""
                    className="w-7 h-7 object-cover"
                  />
                  <p id="hero__text" className="font-medium text-base text-white">
                    Все виды работ по автостеклу
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={ptichka}
                    alt=""
                    className="w-7 h-7 object-cover"
                  />
                  <p id="hero__text" className="font-medium text-base text-white">
                    Собственный склад
                  </p>
                </div>
              </div>
              <div className="md:hidden">
                <a
                  href="#"
                  className="flex items-center gap-4 text-balance font-medium text-white mb-4"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02222 8.65556C5.62222 11.8 8.2 14.3778 11.3444 15.9778L13.7889 13.5333C14.1 13.2222 14.5333 13.1333 14.9222 13.2556C16.1667 13.6667 17.5 13.8889 18.8889 13.8889C19.1836 13.8889 19.4662 14.006 19.6746 14.2143C19.8829 14.4227 20 14.7053 20 15V18.8889C20 19.1836 19.8829 19.4662 19.6746 19.6746C19.4662 19.8829 19.1836 20 18.8889 20C13.8792 20 9.07478 18.0099 5.53243 14.4676C1.99007 10.9252 0 6.12076 0 1.11111C0 0.816426 0.117063 0.533811 0.325437 0.325437C0.533811 0.117063 0.816426 0 1.11111 0H5C5.29469 0 5.5773 0.117063 5.78567 0.325437C5.99405 0.533811 6.11111 0.816426 6.11111 1.11111C6.11111 2.5 6.33333 3.83333 6.74444 5.07778C6.86667 5.46667 6.77778 5.9 6.46667 6.21111L4.02222 8.65556Z"
                      fill="white"
                    />
                  </svg>
                  +7 (917) 772-20-12
                </a>
                <div className="mb-[83px]">
                  <h1 className="font-medium text-base text-white mb-2">
                    Режим работы
                  </h1>
                  <p className="font-normal text-base text-white opacity-80">
                    Вт-сб 9:00-18:00
                  </p>
                </div>
              </div>
              <button
                id="hero_btn" onClick={() => toggmeAllMenus(setformModal, formModal)}
                className="max-w-[330px] md:hidden px-[78px] slow__default hover:bg-[#fff] py-4 hover:text-black text-white rounded-[60px] bg-[#197FAF] font-medium text-xl"
              >
                Оставить заявку
              </button>
              <div className="hidden md:flex items-center justify-between">
                <div className="flex flex-col gap-[42px] max-w-[517px]">
                  <div className="flex items-center gap-6">
                    <img
                      src={ptichka}
                      alt=""
                      className="object-cover"
                    />
                    <p id="hero__text" className="font-medium text-2xl text-white">
                      Установка за 1 час
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={ptichka}
                      alt=""
                      className="object-cover"
                    />
                    <p id="hero__text" className="font-medium text-2xl text-white">
                      Реальная пожизненная гарантия
                      <br />
                      на стекло и на работу
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={ptichka}
                      alt=""
                      className="object-cover"
                    />
                    <p id="hero__text" className="font-medium text-2xl text-white">
                      Новейшее оборудование и квалифицированные специалисты
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[42px] max-w-[490px]">
                  <div className="flex items-center gap-6">
                    <img
                      src={ptichka}
                      alt=""
                      className="object-cover"
                    />
                    <p id="hero__text" className="font-medium text-2xl text-white">
                      Все виды работ по автостеклу
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <img
                      src={ptichka}
                      alt=""
                      className="object-cover"
                    />
                    <p id="hero__text" className="font-medium text-2xl text-white">
                      Собственный склад с наличием большинства моделей
                    </p>
                  </div>
                  <button
                    id="hero_btn" onClick={() => toggmeAllMenus(setformModal, formModal)}
                    className="max-w-[336px] px-16 py-6 hover:text-black text-white rounded-[60px] bg-[#197FAF] font-medium text-2xl"
                  >
                    Оставить заявку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="form"
          className={`slow__default fixed overflow-auto w-full h-full bg-white pt-[21px] md:pt-20 pb-11 md:pb-[114px] z-50 top-0 ${formModal ? "left-[0]" : "left-[-100%]"}`}
        >
          <div className="max-w-[592px] mx-auto px-5 flex flex-col items-center">
            <a href="#" className="block max-w-[136px] mb-6 md:mb-[33px]">
              <img
                src={header__logo}
                alt=""
                className="w-full object-cover"
              />
            </a>
            <h2 className="font-bold text-3xl md:text-[64px] text-[#197FAF] mb-4 md:mb-16">
              Заявка мастеру
            </h2>
            <form action="#" className="w-full">
              <div className="grid grid-cols-1 gap-6 mb-8 max-w-[540px]">
                <div onClick={() => toggmeAllMenus(setSelectBox, selectBox)} id="form__sel" className={`pt-4 cursor-pointer 
                 slow__default overflow-hidden 
          md:pl-[112px] pl-8 md:pr-[94px] w-full gap-1 rounded border border-[#0000004D] ${selectBox ? "h-[381px]" : "h-[53px]"}  ${selectBox ? "md:pl-[112px]" : "md:pl-[32px]"}`}>
                  <div
                    id="form__sel__text"
                    className={`flex pb-4 ${selectBox ? "md:justify-center" : "md:justify-start"} items-center slow__default  gap-1`}
                  >
                    Мне нужна услуга
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
                        d="M7.00052 9.49953L11.175 2.50034H2.82604L7.00052 9.49953ZM6.10503 12C6.19579 12.152 6.32632 12.2782 6.48351 12.366C6.6407 12.4538 6.81901 12.5 7.00052 12.5C7.18202 12.5 7.36033 12.4538 7.51752 12.366C7.67471 12.2782 7.80525 12.152 7.89601 12L13.8615 2.00026C13.9522 1.84821 14 1.67574 14 1.50018C14 1.32461 13.9522 1.15214 13.8615 1.0001C13.7707 0.848052 13.6402 0.721792 13.483 0.634007C13.3258 0.546222 13.1475 0.500004 12.966 0.5H1.03403C0.852515 0.500004 0.674202 0.546222 0.51701 0.634007C0.359818 0.721792 0.229285 0.848052 0.13853 1.0001C0.0477764 1.15214 -1.15279e-06 1.32461 0 1.50018C1.15284e-06 1.67574 0.0477811 1.84821 0.138537 2.00026L6.10503 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="inline-flex flex-col gap-[10px]">
                    <button className="px-8 max-w-[243px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Замена лобового стекла
                    </button>
                    <button className="px-8 max-w-[164px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Ремонт скола
                    </button>
                    <button className="px-8 max-w-[214px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Остановка трещины
                    </button>
                    <button className="px-8 max-w-[139px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Проекция
                    </button>
                    <button className="px-8 max-w-[196px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Заливка трещины
                    </button>
                    <button className="px-8 max-w-[230px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Полировка антидождь
                    </button>
                    <button className="px-8 max-w-[179px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Полировка фар
                    </button>
                  </div>
                </div>
                <div onClick={() => toggmeAllMenus(setSelectBox2, selectBox2)} id="form__sel" className={`pt-4 cursor-pointer 
                  slow__default overflow-hidden 
          md:pl-[112px] pl-8 md:pr-[94px] w-full gap-1 rounded border border-[#0000004D] 
          ${selectBox2 ? "h-[245px]" : "h-[53px]"} max-h-[245px]  ${selectBox2 ? "md:pl-[32px]" : "md:pl-[112px]"}`}
                >
                  <div
                    id="form__sel__text"
                    className="flex text-black hover:text-[#197FAF] slow__default md:hidden pb-4 items-center md:justify-center gap-1"
                  >
                    Наличие опций
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
                        d="M7.00052 9.49953L11.175 2.50034H2.82604L7.00052 9.49953ZM6.10503 12C6.19579 12.152 6.32632 12.2782 6.48351 12.366C6.6407 12.4538 6.81901 12.5 7.00052 12.5C7.18202 12.5 7.36033 12.4538 7.51752 12.366C7.67471 12.2782 7.80525 12.152 7.89601 12L13.8615 2.00026C13.9522 1.84821 14 1.67574 14 1.50018C14 1.32461 13.9522 1.15214 13.8615 1.0001C13.7707 0.848052 13.6402 0.721792 13.483 0.634007C13.3258 0.546222 13.1475 0.500004 12.966 0.5H1.03403C0.852515 0.500004 0.674202 0.546222 0.51701 0.634007C0.359818 0.721792 0.229285 0.848052 0.13853 1.0001C0.0477764 1.15214 -1.15279e-06 1.32461 0 1.50018C1.15284e-06 1.67574 0.0477811 1.84821 0.138537 2.00026L6.10503 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="inline-flex flex-col gap-[10px]">
                    <button className="px-8 max-w-[243px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Камера
                    </button>
                    <button className="px-8 max-w-[164px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Датчик дождя
                    </button>
                    <button className="px-8 max-w-[214px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Обогрев
                    </button>
                    <button className="px-8 max-w-[139px] py-2 rounded-lg bg-[#197FAF] font-normal text-sm text-white">
                      Проекция
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <input
                    type="checkbox"
                    className="block md:h-[25px] h-10 w-10 md:w-[25px]"
                    name=""
                    id="check"
                    required=""
                  />
                  <label htmlFor="check" className="font-normal text-sm md:text-lg ">
                    Подобрать стекло из наличия
                  </label>
                </div>
                <input
                  type="text"
                  className="w-full py-4 pl-8 font-normal text-sm md:text-lg input rounded border border-[#0000004D]"
                  required=""
                  placeholder="Марка"
                />
                <input
                  type="text"
                  className="w-full py-4 pl-8 font-normal text-sm md:text-lg input rounded border border-[#0000004D]"
                  required=""
                  placeholder="Vin"
                />
                <input
                  type="tel"
                  className="w-full py-4 pl-8 font-normal text-sm md:text-lg input rounded border border-[#0000004D]"
                  required=""
                  placeholder="Телефон"
                />
              </div>
              <button
                id="form__btn" onClick={() => toggmeAllMenus(setformModal, formModal)}
                className="max-w-[336px] py-6 px-16 rounded-[60px] bg-[#197FAF] mx-auto block font-medium text-2xl text-white mb-8 md:mb-[55px]"
              >
                Оставить заявку
              </button>
            </form>
            <button id="form__close" onClick={() => toggmeAllMenus(setformModal, formModal)} className="max-w-[47px] block">
              <img
                src={hero__close}
                alt=""
                className="w-full object-cover"
              />
            </button>
          </div>
        </div>
        <a
          href="#choose"
          className="max-w-[44px] mx-auto hidden md:block"
        >
          <svg
            width={44}
            height={76}
            viewBox="0 0 44 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_18_327"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={44}
              height={44}
            >
              <rect width={44} height={44} fill="url(#pattern0_18_327)" />
            </mask>
            <g mask="url(#mask0_18_327)">
              <rect width={44} height={44} fill="white" />
            </g>
            <mask
              id="mask1_18_327"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={32}
              width={44}
              height={44}
            >
              <rect y={32} width={44} height={44} fill="url(#pattern1_18_327)" />
            </mask>
            <g mask="url(#mask1_18_327)">
              <rect y={32} width={44} height={44} fill="white" />
            </g>
            <defs>
              <pattern
                id="pattern0_18_327"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <use xlinkHref="#image0_18_327" transform="scale(0.00195312)" />
              </pattern>
              <pattern
                id="pattern1_18_327"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
              >
                <use xlinkHref="#image0_18_327" transform="scale(0.00195312)" />
              </pattern>
              <image
                id="image0_18_327"
                width={512}
                height={512}
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </a>
        {/* hero end */}
      </div>

    </div>
  )
}
