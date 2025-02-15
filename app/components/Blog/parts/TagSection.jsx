// import { Box, Stack, Typography } from "@mui/material";
// import React, { useState } from "react";

// const TagSection = ({ activeTags, setActiveTags, Tagss }) => {
//   const handleClick = (tag) => {
//     setActiveTags((prevActiveTags) => {
//       if (prevActiveTags.includes(tag)) {
//         // Remove the tag from activeTags array if it's already active
//         return prevActiveTags.filter((item) => item !== tag);
//       } else {
//         // Add the tag to activeTags array if it's not active
//         return [...prevActiveTags, tag];
//       }
//     });
//   };
//   return (
//     <Stack marginTop={"10px"}>
//       {Tagss?.map((tagGroup, index) => (
//         <Stack key={index}>
//           <Stack
//             marginTop={"25px"}
//             marginBottom={"6px"}
//             sx={{
//               fontFamily: "Work Sans",
//               fontSize: "14px",
//               fontWeight: 700,
//               lineHeight: "15px",
//               letterSpacing: "0em",
//               textAlign: "left",
//               color: "#89A3FF",
//             }}
//           >
//             {tagGroup.Title}
//           </Stack>
//           <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
//             {tagGroup.Categories.map((tag, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   height: "35px",
//                   borderRadius: "4px",
//                   border: "1px",
//                   gap: "10px",
//                   background: activeTags.includes(tag) ? "#89A3FF" : "#FFFFFF",
//                   border: "1px solid #00000033",
//                   color: activeTags.includes(tag) ? "#FFFFFF" : "#000000",
//                   cursor: "pointer",

//                   "&:hover": {
//                     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
//                   },
//                 }}
//                 onClick={() => handleClick(tag)} // Call handleClick function on click
//               >
//                 <Typography
//                   sx={{
//                     fontFamily: "Work Sans",
//                     fontSize: "14px",
//                     fontWeight: 400,
//                     lineHeight: "21px",
//                     letterSpacing: "-0.02em",
//                     textAlign: "left",
//                     padding: "7px 11px 7px 11px",
//                   }}
//                 >
//                   {tag.Name}
//                 </Typography>
//               </Box>
//             ))}
//           </Stack>
//         </Stack>
//       ))}
//     </Stack>
//   );
// };

// export default TagSection;


import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const TagSection = ({ activeTags, setActiveTags, Tagss, onTagClick }) => {
  const handleClick = (tag) => {
    setActiveTags((prevActiveTags) => {
      const updatedTags = prevActiveTags.includes(tag.Id)
        ? prevActiveTags.filter((item) => item !== tag.Id)
        : [...prevActiveTags, tag.Id];

      // Notify the parent about the tag click
      onTagClick(updatedTags.length > 0); // Pass true if any tags are selected, else false
      return updatedTags;
    });
  };

  return (
    <Stack marginTop={"10px"}>
      {Tagss?.map((tagGroup, index) => (
        <Stack key={index}>
          <Stack
            marginTop={"25px"}
            marginBottom={"6px"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#89A3FF",
            }}
          >
            {tagGroup.Title}
          </Stack>
          <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
            {tagGroup.Categories?.map((tag, i) => (
              <Box
                key={i}
                sx={{
                  height: "35px",
                  borderRadius: "4px",
                  border: "1px",
                  gap: "10px",
                  background: activeTags.includes(tag.Id)
                    ? "#89A3FF"
                    : "#FFFFFF",
                  border: "1px solid #00000033",
                  color: activeTags.includes(tag.Id) ? "#FFFFFF" : "#000000",
                  cursor: "pointer",

                  "&:hover": {
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
                  },
                }}
                onClick={() => handleClick(tag)} // Call handleClick function on click
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    padding: "7px 11px 7px 11px",
                  }}
                >
                  {tag.Name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default TagSection;
