import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FramImg from "../../../assets/Frame62700.png";
import Link from "next/link";

const BlogBanner = (props) => {
  console.log(props);
  return (
    <Stack
      marginTop={{
        lg: "40px",
        md: "30px",
        sm: "20px",
        xs: "10px",
      }}
      alignItems={"center"}
      position={"relative"}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component="img"
          width={{
            lg: "90vw",
            md: "90%",
            sm: "100%",
            xs: "100%",
          }}
          height={"211px"}
          alt="The house from the offer."
          src={FramImg}
        ></Box>
      </Stack>
      <Stack
        maxWidth={"1536px"}
        margin={"0 auto"}
        alignSelf={"center"}
        width={{
          lg: "70%",
          md: "90%",
          sm: "95%",
          xs: "95%",
        }}
        mt={{
          lg: "40px",
          md: "40px",
          sm: "40px",
          xs: "40px",
        }}
        position={"absolute"}
      >
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              lg: "50px",
              md: "40px",
              sm: "30px",
              xs: "20px",
            },
            fontWeight: 600,
            lineHeight: "50px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#4DB267",
            textTransform: "uppercase",
          }}
        >
          Conceptual Learning Series
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              lg: "50px",
              md: "40px",
              sm: "30px",
              xs: "20px",
            },
            fontWeight: 600,
            lineHeight: "53px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#052973",
          }}
        >
          Saniiro
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BlogBanner;
