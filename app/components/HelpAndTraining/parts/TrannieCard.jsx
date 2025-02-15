import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const TrannieCard = ({ trainer, currentPage }) => {
  const { name, title, img } = trainer;

  return (
    <>
      <Stack
        display={{
          xs: "none",
          md: "flex",
        }}
        border={"1px solid gray"}
        width={"323px"}
        height={"406px"}
        borderRadius={"10px"}
        sx={{
          position: "relative",
          left: `${(currentPage - 1) * 323}px`, // Adjust based on card width
        }}
      >
        <Stack height={"323px"} width={"323px"}>
          <Image src={img} alt="trannie image" />
        </Stack>
        <Stack padding={"15px 25px "}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        display={{
          xs: "flex",
          md: "none",
        }}
        border={"1px solid gray"}
        width={"323px"}
        height={"406px"}
        borderRadius={"10px"}
      >
        <Stack height={"323px"} width={"323px"}>
          <Image src={img} alt="trannie image" />
        </Stack>
        <Stack padding={"15px 25px "}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default TrannieCard;
