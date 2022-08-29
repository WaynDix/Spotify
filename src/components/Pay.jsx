import React from "react";
import WuzeeIcon from "./wuzeeimg.png";
import { useNavigate } from "react-router-dom";
import "../style/pay.css";
import CreditCard from "./CreditCard";

const Pay = () => {
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
      <div className="plan-mi">
        <div className="plan-inf">Мой план</div>
        <div className="int-back">
          <div className="ingride">
            <div className="inghiter">
              <h1 className="individ">
                Индивидуальная подписка Spotify Premium
              </h1>
              <div>
                <p className="free-inf">Бесплатно</p>
                <p className="free-3m">НА 3 МЕС.</p>
              </div>
            </div>
            <h3 className="inhit">1 Premium-аккаунт</h3>
          </div>
        </div>
        <div className="begall">
          <div className="begin">
            <div className="beg-tod">
              <p className="beginadd">Начало бесплатных месяцев</p>
              <p className="today">Сегодня</p>
            </div>
            <div>
              <p>Первая оплата</p>
              <ul className="info-li">
                <li>4.99 USD в месяц после 3 мес. пробного периода</li>
                <li>Бесплатно до 26 нояб. 2022 г.</li>
                <li>
                  Отменить можно в любой момент. Действуют Условия предложения.
                </li>
                <li>Мы пришлем уведомление за 7 дней до списания.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CreditCard />
    </div>
  );
};

export default Pay;
