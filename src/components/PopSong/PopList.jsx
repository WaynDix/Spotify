import React, { useContext, useEffect, useState } from "react";
import { useProducts } from "../../contexts/MusicContextProvider";
import MenuBar from "../MenuBar";
import Pop from "../PopSong/Pop";

const PopList = () => {
  const { products, getMusic } = useProducts();
  const [music, setMusic] = useState(products);

  useEffect(() => {
    getMusic();
  }, []);

  useEffect(() => {
    setMusic(products);
  }, [products]);

  console.log(music);
  return (
    <div>
      <MenuBar />
      <Pop />
      {music.map((item) => (
        <Pop item={item} />
      ))}
    </div>
  );
};

export default PopList;
