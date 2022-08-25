import React from "react";
import "../style/support.css";
import WuzeeImg from "./wuzeeimg.png";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="wuzee-nav">
      <div>
        <img
          src={WuzeeImg}
          alt=""
          height={70}
          className="imgIconW"
          onClick={() => navigate("/")}
        />
      </div>
      <h1 className="text-sup">СЛУЖБА ПОДДЕРЖКИ WUZEE</h1>
      <h2 className="text-sup2">
        Мы всегда <br /> готовы помочь
      </h2>
      <div className="category-sup">
        <div className="category-all">
          <div className="pay-sup" onClick={() => navigate("/support-connect")}>
            <div className="text-all-sup-card">
              <span className="text-sup-all">Помощь с платежами</span>
            </div>
            <img
              src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format"
              alt=""
              height={50}
              width={50}
              className="img-sup-ni"
            />
          </div>
          <div
            className="pay-sup  sub"
            onClick={() => navigate("/support-connect")}
          >
            <div className="text-all-sup-card">
              <span className="text-sup-all">Справка по подпискам</span>
            </div>
            <img
              src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format"
              alt=""
              height={50}
              width={50}
              className="img-sup-ni"
            />
          </div>
          <div
            className="pay-sup app"
            onClick={() => navigate("/support-connect")}
          >
            <div className="text-all-sup-card">
              <span className="text-sup-all">Справка по приложению</span>
            </div>
            <img
              src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format"
              alt=""
              height={50}
              width={50}
              className="img-sup-ni"
            />
          </div>
          <div
            className="pay-sup device"
            onClick={() => navigate("/support-connect")}
          >
            <div className="text-all-sup-card">
              <span className="text-sup-all">Справка по устройствам</span>
            </div>
            <img
              src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format"
              alt=""
              height={50}
              width={50}
              className="img-sup-ni"
            />
          </div>
          <div
            className="pay-sup security"
            onClick={() => navigate("/support-connect")}
          >
            <div className="text-all-sup-card">
              <span className="text-sup-all">
                Безопасность и конфиденциальность
              </span>
            </div>
            <img
              src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format"
              alt=""
              height={50}
              width={50}
              className="img-sup-ni"
            />
          </div>
          <div
            className="pay-sup acchelp"
            onClick={() => navigate("/support-connect")}
          >
            <div className="text-all-sup-card">
              <span className="text-sup-all">Помощь с аккаунтом</span>
            </div>
            <img
              src="https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format"
              alt=""
              height={50}
              width={50}
              className="img-sup-ni"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
