import React from 'react'
import header__logo from "../img/header/header__logo.svg"
export default function Footer() {
  return (
    <div>
        <section className="bg-[#171717] pt-[38px] md:pt-[84px] pb-[79px] md:pb-[57px]">
  <div className="max-w-[1200px] mx-auto px-5 flex md:flex-row flex-col gap-11 md:gap-0 items-start justify-between">
    <div className="max-w-[308px] pt-[22px]">
      <a href="#" className="max-w-[117px] flex mb-[42px]">
        <img
          src={header__logo}
          alt=""
          className="w-full object-cover"
        />
      </a>
      <ul className="flex gap-[26px] mb-8 flex-col">
        <li>
          <a href="#" className="font-medium text-base md:text-lg text-white ">
            г. Уфа, ул. Зорге, 5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-medium text-base md:text-lg text-white flex items-center gap-4"
          >
            <svg
              width={27}
              height={28}
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.43 12.5405C7.59 16.7855 11.07 20.2655 15.315 22.4255L18.615 19.1255C19.035 18.7055 19.62 18.5855 20.145 18.7505C21.825 19.3055 23.625 19.6055 25.5 19.6055C25.8978 19.6055 26.2794 19.7635 26.5607 20.0448C26.842 20.3261 27 20.7076 27 21.1055V26.3555C27 26.7533 26.842 27.1348 26.5607 27.4161C26.2794 27.6974 25.8978 27.8555 25.5 27.8555C18.737 27.8555 12.251 25.1689 7.46878 20.3867C2.6866 15.6045 0 9.11849 0 2.35547C0 1.95764 0.158035 1.57611 0.43934 1.29481C0.720644 1.0135 1.10218 0.855469 1.5 0.855469H6.75C7.14782 0.855469 7.52936 1.0135 7.81066 1.29481C8.09196 1.57611 8.25 1.95764 8.25 2.35547C8.25 4.23047 8.55 6.03047 9.105 7.71047C9.27 8.23547 9.15 8.82047 8.73 9.24047L5.43 12.5405Z"
                fill="white"
              />
            </svg>
            +7 (917) 772-20-12
          </a>
        </li>
      </ul>
      <div className="mb-8">
        <h1 className="font-medium text-base md:text-lg text-white mb-2">
          Режим работы
        </h1>
        <p className="font-normal text-base md:text-lg text-white opacity-80">
          Вт-сб 9:00-18:00
        </p>
      </div>
      <a
        href="#"
        className="font-medium text-base md:text-lg text-white border-b border-white inline-block mb-4"
      >
        Политика конфиденциальности
      </a>
      <a
        href="#"
        className="font-medium text-base md:text-lg text-white border-b border-white inline-block  mb-[42px]"
      >
        Пользовательское соглашение
      </a>
      <button
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        className="hover:border-[#197FAF] hover:bg-transparent slow__default  w-full mb-6 hover:text-[#197FAF] border border-transparent max-w-[220px] bg-[#197FAF] py-3 px-6 font-normal  text-base md:text-lg rounded-[60px] text-white"
      >
        Заявка на замену
      </button>
      <button
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        className="hover:border-white hover:bg-transparent slow__default w-full mb-[38px] md:mb-[120px] hover:text-[white] max-w-[220px] border border-transparent bg-white  py-3 px-6 font-normal  text-base md:text-lg rounded-[60px] text-black"
      >
        Написать мастеру
      </button>
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
    <div className="grid grid-cols-1 md:max-w-[660px] w-full max-w-[330px] h-[330px] md:h-[619px] rounded-[42px] overflow-hidden">
      <iframe
        className="rounded-[42px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48331.914694183804!2d72.36463383704918!3d40.78962717612445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bceb6c1cd9fbed%3A0x6a03ba15f5f9679a!2sNodirabegim%20nomli%20madaniyat%20va%20istirohat%20bog'i!5e0!3m2!1sen!2s!4v1718350350230!5m2!1sen!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

    </div>
  )
}
