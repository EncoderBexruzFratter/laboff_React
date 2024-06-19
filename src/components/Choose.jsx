import React from 'react'
import choose1 from "../img/choose/1.png"
import choose2 from "../img/choose/2.png"
import choose3 from "../img/choose/3.png"
import choose4 from "../img/choose/4.png"
import choose5 from "../img/choose/5.png"
import choose6 from "../img/choose/6.png"
import choose7 from "../img/choose/7.png"
import choose8 from "../img/choose/8.png"


export default function Choose() {
  return (
    <div>
        <section className="bg-white pt-[84px] md:pt-[120px] pb-[115px] md:pb-[155px]">
  <div id="choose" className="max-w-[1202px] mx-auto px-5">
    <div className="max-w-[1023px]">
      <h3 className="font-[Bebas Neue] font-bold text-[32px] text-[#197FAF] mb-[55px] md:text-[64px]">
        Почему выбирают нас?
      </h3>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-[92px] gap-y-[52px]">
        <div className="w-full">
          <img
            src={choose1}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Установим стекло за час
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose2}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Премиум
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Используем толькокачественные материалы
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose3}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Профессионализм
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Высокая квалификация и опыт работы более 10 лет.
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose4}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Более 5.000 позиций
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Ведущих производителей: Рilkingtоn, Sеkurit, Fuyао, АGС, Веnsоn,
            Кmk, Lеmsоn.
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose5}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Сертификаты
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Все стекла имеют сертификаты и перед поступлением на склад проходят
            проверку
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose6}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Гарантия
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            На установку БЕССРОЧНО
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose7}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Качество
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Осуществляем ремонт автостекол быстро и качественно
          </p>
        </div>
        <div className="w-full">
          <img
            src={choose8}
            alt=""
            id="choose__img"
            className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
          />
          <h4 id="choose__title" className="font-medium text-2xl mb-6">
            Лучшая цена
          </h4>
          <p
            id="choose__text"
            className="font-normal  text-lg text-[#000000CC]"
          >
            Самая конкурентная цена на рынке
          </p>
        </div>
      </div>
      <div className="grid md:hidden grid-cols-1 gap-y-6">
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose1}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose2}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose3}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose4}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose5}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose6}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose7}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={choose8}
              alt=""
              id="choose__img"
              className="md:w-16 w-8 h-8 md:h-16 object-cover md:mb-4"
            />
            <h4 id="choose__title" className="font-medium text-lg md:text-2xl ">
              Установим стекло за час
            </h4>
          </div>
          <p
            id="choose__text"
            className="font-normal  text-sm md:text-lg text-[#000000CC]"
          >
            Сделаем качеcтвeннo. Аккуратно отноcимcя к каждoму автo, в
            нeзависимости от модели
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
