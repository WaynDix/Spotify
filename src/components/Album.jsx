import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/albums.css";

const Album = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="songs-type-line">Categories Songs</div>

      {/* 1 categories */}

      <div className="all-albums-cust">
        <div className="category-albums">
          <div className="category-albums-player">
            <div className="all-massiv" onClick={() => navigate("/pop-songs")}>
              <div className="descr-album">
                <span className="descr-album-name">Pop</span>
              </div>
              <img
                src="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv charts-c"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Charts</span>
              </div>
              <img
                src="	https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv new-releases"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">New Releases</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv discover"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Discover</span>
              </div>
              <img
                src="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv events"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Live Events</span>
              </div>
              <img
                src="https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv chill"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Chill</span>
              </div>
              <img
                src="	https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2 categories */}

      <div className="all-albums-cust">
        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv rock"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Rock</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv jazz"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Jazz</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv classical"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Classical</span>
              </div>
              <img
                src="	https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv pop"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">K-pop</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv metal"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Metal</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f0000000285704160b49125ac95099ec8"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv sleep"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Sleep</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 categories */}

      <div className="all-albums-cust">
        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv opening"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Anime Opening</span>
              </div>
              <img
                src="	https://i.scdn.co/image/ab67706c0000da848a7389b690006be01dc5474b"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv Soul"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Soul</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f000000026e1034ebd7b7c86546c6acca"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv Punk"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Punk</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f0000000275251d7d488b0fd69e4c50bd"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv Funk"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Funk</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f00000002f16913f0326b9d44bf78fc88"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv Workout"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Workout</span>
              </div>
              <img
                src="	https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>

        <div className="category-albums">
          <div className="category-albums-player">
            <div
              className="all-massiv Hip-Hop"
              onClick={() => navigate("/music-player")}
            >
              <div className="descr-album">
                <span className="descr-album-name">Hip-Hop</span>
              </div>
              <img
                src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c"
                alt=""
                height={80}
                width={80}
                className="img-descr-info"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
