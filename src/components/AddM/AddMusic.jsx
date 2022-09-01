import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/MusicContextProvider";
import { Box, TextField } from "@mui/material";

const AddMusic = () => {
  const { addMusic } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    picture: "",
    name: "",
    file: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "name") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className="standart-back">
      <div className="theme-add">
        ADMIN PANEL
        <b style={{ color: "#808080" }}>ADD MUSIC</b>
      </div>
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            },
          }}
          noValidate
          autoComplete="off"
          className="inp-add"
        >
          <TextField
            id="standard-basic"
            label="Picture"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="picture"
          />
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="name"
          />
          <input
            type="file"
            id="standard-basic"
            label="Name"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="file"
          />
          <button
            class="button-1"
            role="button"
            variant="outlined"
            fullWidth
            size="large"
            onClick={() => {
              addMusic(product);
              navigate("/pop-songs");
            }}
          >
            ADD MUSIC
          </button>
        </Box>
      </div>
    </div>
  );
};

export default AddMusic;
