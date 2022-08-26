import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/premium.css";
import WuzeeIcon from "./wuzeeimg.png";

const Premium = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="nav-back">
        <img
          src={WuzeeIcon}
          alt=""
          className="img-iconw"
          onClick={() => navigate("/")}
        />
        <ul className="direction">
          <li className="dir-nav" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="dir-nav" onClick={() => navigate("/support")}>
            Support
          </li>
        </ul>
      </div>

      <div className="info-prem">
        <div className="all-info-sub">
          <h1 className="sub-info">
            Получите ​​1 месяц​​ 3 месяца Premium-подписки за USD 0.00
          </h1>
          <h2 className="info-buy">
            Слушайте музыку без рекламы и офлайн. Бесплатно до 26 ноября 2022 г.
            Отменить подписку можно в любой момент.
          </h2>
          <div className="buy-button">
            <button class="button-79" role="button">
              3 месяца бесплатно
            </button>
            <p className="infor-buys">
              Только индивидуальная подписка. Затем USD 4.99 в месяц. Действуют
              Условия использования. Только для новых пользователей Premium.
              Акция заканчивается 11.09.2022.
            </p>
          </div>
        </div>
        <div className="imgICON">
          <img
            src="https://i.scdn.co/image/ab678e040000ed3acc8d1d663e4eedee1b70ca11"
            alt=""
            className="scdn-img"
          />
        </div>
      </div>
      <div className="premium-subs">
        <h2 className="psubs">Что дает Premium-подписка</h2>
        <div className="giving-sub">
          <li className="li-give">
            <div className="down-m">
              <img
                src="	https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137"
                alt=""
                width={150}
                height={150}
                className="scdn-m"
              />
            </div>
            <p className="all-inf-crip">Скачивайте треки</p>
            <p>Музыка с вами даже офлайн.</p>
          </li>
          <li className="li-give">
            <div className="not-ads">
              {" "}
              <img
                src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"
                alt=""
                width={150}
                height={150}
                className="scdn-m"
              />
            </div>
            <p className="all-inf-crip">Музыка без рекламы</p>
            <p>Больше никаких перерывов.</p>
          </li>
          <li className="li-give">
            <div className="on-m">
              {" "}
              <img
                src="	https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"
                alt=""
                width={150}
                height={150}
                className="scdn-m"
              />
            </div>
            <p className="all-inf-crip">Включайте любую музыку</p>
            <p>И на мобильных устройствах тоже.</p>
          </li>
          <li className="li-give">
            <div className="acces-m">
              {" "}
              <img
                src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"
                alt=""
                width={150}
                height={150}
                className="scdn-m"
              />
            </div>
            <p className="all-inf-crip">Пропускайте сколько хотите</p>
            <p>Ограничений нет.</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Premium;
