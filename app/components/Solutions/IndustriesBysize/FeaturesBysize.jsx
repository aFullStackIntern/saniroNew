import React, { useState, useEffect } from "react";
import "./Features.css";
import FeatureIcon1 from "../../assets/FeatureIcon1.svg";
import iconSize from "../../assets/iconSize.svg";
import BoxImage from "../../assets/BoxImage.png";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import kickStart from "../../assets/kickStart.svg";
import Image from "next/image";
function FeaturesBysize() {
  const [activeItem, setActiveItem] = useState("item1");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".item");
    let active = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        active = section.id;
      }
    });
    setActiveItem(active);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(item);
    if (element) {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener temporarily
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll); // Add back the scroll event listener after a short delay
      }, 10000); // Adjust the delay as needed
    }
  };
  const lists = [
    {
      heading: "Startups",
      id: "1",
    },
    {
      heading: "Small-Sized Organizations",
      id: "2",
    },
    {
      heading: "Small-Scale Organizations",
      id: "3",
    },
    {
      heading: "Non-Profit Organizations",
      id: "4",
    },
    {
      heading: "Billing, Inventory, and Accounting Aspects",
      id: "5",
    },
  ];
  // const lists2 = [
  //   {
  //     id: "1",
  //     title: "A secure and scalable <br/> CRM at the heart of your enterprise",
  //     description:
  //       "Enterprise organizations have to manage large volumes of customer data, coordinate and execute complex business processes, maintain impeccable security standards, and comply with local and international regulations.<br/> <br/> Zoho CRM enables enterprise organizations to unify their business data across departments and deliver a more compelling customer experience. With our robust backend infrastructure, rich feature set, and enterprise-grade data security processes, we've empowered highly complex, large-scale businesses to operate seamlessly and securely across the globe.",
  //     items: [
  //       {
  //         id: "1",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "2",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "3",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "4",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "5",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "6",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "7",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //       {
  //         id: "8",
  //         src: iconSize,
  //         title: "Sales Force Automation",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     title: "Bespoke industry solutions",
  //     description:
  //       "With their own special challenges, businesses in vertical markets struggle to find solutions that fit their needs. However, the flexibility and depth of customization offered by Zoho CRM empowers every business to implement our solution seamlessly into their operations. From fields and modules to business processes and workflows, every aspect of Zoho CRM can be molded to meet the needs of your respective business and vertical with ease.",
  //     items: [
  //       {
  //         id: "1",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //       {
  //         id: "2",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //       {
  //         id: "3",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //       {
  //         id: "4",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //       {
  //         id: "5",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //       {
  //         id: "6",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //       {
  //         id: "7",
  //         src: BoxImage,
  //         title: "Life Science",
  //       },
  //     ],
  //   },

  //   {
  //     id: "3",
  //     title: "Sales Force Automation",
  //     description:
  //       "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
  //     items: [
  //       {
  //         id: "1",
  //         src: FeatureIcon1,
  //         title: "Lead Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "2",
  //         src: FeatureIcon1,
  //         title: "Contact Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "3",
  //         src: FeatureIcon1,
  //         title: "Deal Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "4",
  //         src: FeatureIcon1,
  //         title: "Workflow Automation",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     title: "Sales Force Automation",
  //     description:
  //       "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
  //     items: [
  //       {
  //         id: "1",
  //         src: FeatureIcon1,
  //         title: "Lead Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "2",
  //         src: FeatureIcon1,
  //         title: "Contact Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "3",
  //         src: FeatureIcon1,
  //         title: "Deal Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "4",
  //         src: FeatureIcon1,
  //         title: "Workflow Automation",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //     ],
  //     bgcolor: "#052973",
  //   },
  //   {
  //     id: "5",
  //     title: "Sales Force Automation",
  //     description:
  //       "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
  //     items: [
  //       {
  //         id: "1",
  //         src: FeatureIcon1,
  //         title: "Lead Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "2",
  //         src: FeatureIcon1,
  //         title: "Contact Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "3",
  //         src: FeatureIcon1,
  //         title: "Deal Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "4",
  //         src: FeatureIcon1,
  //         title: "Workflow Automation",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //     ],
  //   },
  //   {
  //     id: "6",
  //     title: "Sales Force Automation",
  //     description:
  //       "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
  //     items: [
  //       {
  //         id: "1",
  //         src: FeatureIcon1,
  //         title: "Lead Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "2",
  //         src: FeatureIcon1,
  //         title: "Contact Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "3",
  //         src: FeatureIcon1,
  //         title: "Deal Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "4",
  //         src: FeatureIcon1,
  //         title: "Workflow Automation",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //     ],
  //     bgcolor: "#F15B25",
  //   },
  //   {
  //     id: "7",
  //     title: "Sales Force Automation",
  //     description:
  //       "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
  //     items: [
  //       {
  //         id: "1",
  //         src: FeatureIcon1,
  //         title: "Lead Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "2",
  //         src: FeatureIcon1,
  //         title: "Contact Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "3",
  //         src: FeatureIcon1,
  //         title: "Deal Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "4",
  //         src: FeatureIcon1,
  //         title: "Workflow Automation",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //     ],
  //   },
  //   {
  //     id: "8",
  //     title: "Sales Force Automation",
  //     description:
  //       "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
  //     items: [
  //       {
  //         id: "1",
  //         src: FeatureIcon1,
  //         title: "Lead Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "2",
  //         src: FeatureIcon1,
  //         title: "Contact Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "3",
  //         src: FeatureIcon1,
  //         title: "Deal Management",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //       {
  //         id: "4",
  //         src: FeatureIcon1,
  //         title: "Workflow Automation",
  //         description:
  //           "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
  //       },
  //     ],
  //   },
  // ];
  const lists2 = [
    {
      id: "1",
      title: "Startups",
      Description: {
        overview:
          "<p>Startups need flexible and scalable solutions to support rapid growth and changing needs. Saniiro Books provides startups with the tools to manage their finances, streamline operations, and focus on innovation.</p>",
        key_features: [
          "<ul>",
          "<li>Billing and Invoicing: Simplified invoicing processes, recurring billing options, and payment tracking.</li>",
          "<li>Inventory Management: Basic inventory tracking to manage initial stock levels and ensure availability.</li>",
          "<li>Financial Reporting: Essential financial reports for tracking income, expenses, and cash flow.</li>",
          "</ul>",
        ],
        reports_required: [
          "<ul>",
          "<li>Cash flow statements</li>",
          "<li>Profit and loss statements</li>",
          "<li>Balance sheets</li>",
          "</ul>",
        ],
        integration_capabilities: [
          "<ul>",
          "<li>CRM systems for lead generation and customer management</li>",
          "<li>Payment gateways for seamless transactions</li>",
          "</ul>",
        ],
      },
    },
    {
      id: "2",
      title: "Small-Sized Organizations",
      Description: {
        overview:
          "<p>Small-sized organizations require robust solutions to manage their growing business operations. Saniiro Books helps these businesses maintain accurate records, manage inventory, and generate insightful financial reports.</p>",
        key_features: [
          "<ul>",
          "<li>Billing and Invoicing: Efficient billing processes with support for multiple payment methods.</li>",
          "<li>Inventory Management: Advanced inventory tracking, barcode management, and reorder level management.</li>",
          "<li>Financial Reporting: Comprehensive financial reports and audit trails for informed decision-making.</li>",
          "</ul>",
        ],
        reports_required: [
          "<ul>",
          "<li>Detailed financial reports</li>",
          "<li>Inventory valuation reports</li>",
          "<li>Sales and purchase reports</li>",
          "</ul>",
        ],
        integration_capabilities: [
          "<ul>",
          "<li>E-commerce platforms for expanding sales channels</li>",
          "<li>POS systems for seamless billing and inventory updates</li>",
          "</ul>",
        ],
      },
    },
    {
      id: "3",
      title: "Small-Scale Organizations",
      Description: [
        {
          overview:
            "<p>Startups need flexible and scalable solutions to support rapid growth and changing needs. Saniiro Books provides startups with the tools to manage their finances, streamline operations, and focus on innovation.</p>",
          key_features: [
            "<ul>",
            "<li>Billing and Invoicing: Simplified invoicing processes, recurring billing options, and payment tracking.</li>",
            "<li>Inventory Management: Basic inventory tracking to manage initial stock levels and ensure availability.</li>",
            "<li>Financial Reporting: Essential financial reports for tracking income, expenses, and cash flow.</li>",
            "</ul>",
          ],
          reports_required: [
            "<ul>",
            "<li>Cash flow statements</li>",
            "<li>Profit and loss statements</li>",
            "<li>Balance sheets</li>",
            "</ul>",
          ],
          integration_capabilities: [
            "<ul>",
            "<li>CRM systems for lead generation and customer management</li>",
            "<li>Payment gateways for seamless transactions</li>",
            "</ul>",
          ],
        },
      ],
    },
    {
      id: "4",
      title: "Non-Profit Organizations",
      Description: [
        {
          overview:
            "<p>Startups need flexible and scalable solutions to support rapid growth and changing needs. Saniiro Books provides startups with the tools to manage their finances, streamline operations, and focus on innovation.</p>",
          key_features: [
            "<ul>",
            "<li>Billing and Invoicing: Simplified invoicing processes, recurring billing options, and payment tracking.</li>",
            "<li>Inventory Management: Basic inventory tracking to manage initial stock levels and ensure availability.</li>",
            "<li>Financial Reporting: Essential financial reports for tracking income, expenses, and cash flow.</li>",
            "</ul>",
          ],
          reports_required: [
            "<ul>",
            "<li>Cash flow statements</li>",
            "<li>Profit and loss statements</li>",
            "<li>Balance sheets</li>",
            "</ul>",
          ],
          integration_capabilities: [
            "<ul>",
            "<li>CRM systems for lead generation and customer management</li>",
            "<li>Payment gateways for seamless transactions</li>",
            "</ul>",
          ],
        },
      ],
    },
    {
      id: "5",
      title: "Billing, Inventory, and Accounting Aspects",
      Description: [
        {
          overview:
            "<p>Startups need flexible and scalable solutions to support rapid growth and changing needs. Saniiro Books provides startups with the tools to manage their finances, streamline operations, and focus on innovation.</p>",
          key_features: [
            "<ul>",
            "<li>Billing and Invoicing: Simplified invoicing processes, recurring billing options, and payment tracking.</li>",
            "<li>Inventory Management: Basic inventory tracking to manage initial stock levels and ensure availability.</li>",
            "<li>Financial Reporting: Essential financial reports for tracking income, expenses, and cash flow.</li>",
            "</ul>",
          ],
          reports_required: [
            "<ul>",
            "<li>Cash flow statements</li>",
            "<li>Profit and loss statements</li>",
            "<li>Balance sheets</li>",
            "</ul>",
          ],
          integration_capabilities: [
            "<ul>",
            "<li>CRM systems for lead generation and customer management</li>",
            "<li>Payment gateways for seamless transactions</li>",
            "</ul>",
          ],
        },
      ],
    },
  ];
  return (
    <>
      {/* Desktop view  */}
      <Stack
        direction={{ xl: "row", xs: "column" }}
        alignItems={"start"}
        pt={{ xl: 40, xs: "none" }}
        width={{ xl: "85%", xs: "100%" }}
      >
        <Stack
          className="sidebar"
          width={{ lg: "20%", xs: "100%" }}
          alignItems={"center"}
          bgcolor={"white"}
          border={"1px solid lightgrey"}
          zIndex={11}
        >
          <Stack
            height={{ xs: "70px", lg: "" }}
            width={{ lg: "53%", xs: "95%" }}
            margin={"0 auto"}
            direction={{ lg: "column", xs: "row" }}
            gap={{ lg: 1, xs: "30px" }}
            sx={{
              overflowY: "scroll",
              scrollbarWidth: "none",
              scrollbarColor: "transparent transparent",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {lists.map((d) => (
              <ul key={d.id}>
                <li onClick={() => handleItemClick(`item${d.id}`)}>
                  <Typography
                    style={{
                      listStyle: "none",
                      textDecoration:
                        activeItem === `item${d.id}` ? "underline" : "none",
                      textUnderlineOffset: "5px",
                    }}
                  >
                    {d.heading}
                  </Typography>
                </li>
              </ul>
            ))}
          </Stack>
        </Stack>
        <Stack
          margin={"0 auto"}
          bgcolor={"#F8F8F8"}
          width={"100%"}
          height={"fit-content"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"start"} width={"95%"}>
            <Stack width={{ xl: "80%", xs: "none" }} gap={2}>
              {lists2.map((d) => (
                <Stack className="content" bgcolor={d.bgcolor}>
                  <Stack
                    minHeight={0}
                    gap={2}
                    id={`item${d.id}`}
                    className="item"
                  >
                    <Typography
                      fontWeight={"bold"}
                      fontSize={{
                        xs: "16px",
                        sm: "20px",
                        md: "28px",
                        xs: "35px",
                      }}
                      color={d.id === "4" || d.id === "6" ? "white" : "black"}
                      textAlign={"center"}
                      dangerouslySetInnerHTML={{ __html: d.title }}
                    />

                    <Typography
                      p={{ xl: d.id === "1" ? "0 52px" : "0", xs: "0" }}
                      textAlign={"center"}
                      fontSize={{
                        xs: "11px",
                        sm: "14px",
                        xl: "16px",
                      }}
                      dangerouslySetInnerHTML={{ __html: d.description }}
                      color={d.id === "4" || d.id === "6" ? "white" : "black"}
                    />
                    {d.id !== "2.5" && (
                      <Button
                        endIcon={<EastIcon />}
                        sx={{
                          bgcolor: "transparent",
                          color:
                            d.id === "4"
                              ? "#DF7E00"
                              : d.id === "6"
                              ? "white"
                              : "#0079FF",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            xl: "16px",
                          },
                          fontWeight: "bold",
                          pl: "0px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#0079FF",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    )}
                    {d.id === "2.5" && (
                      <Stack pt={1}>
                        <Button
                          sx={{
                            width: "200px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "Work Sans",
                            p: 1.5,
                          }}
                        >
                          Request Demo
                        </Button>
                      </Stack>
                    )}

                    <Stack
                      direction={"row"}
                      gap={{
                        xs: "6px",
                        sm: "16px",
                        md: "20px",
                        xl: "22px",
                      }}
                      pt={{ xl: 2, xs: 1 }}
                      flexWrap={"wrap"}
                      justifyContent={"center"}
                    >
                      {d.id === "1" &&
                        d.items?.map((di) => (
                          <Stack
                            width={{ xl: "27%", xs: "37%" }}
                            direction={"row"}
                            alignItems={"center"}
                            gap={{
                              xs: "4px",
                              sm: "6px",
                              md: "10px",
                              xl: 2,
                            }}
                            p={{
                              xs: "5px",
                              sm: "8px",
                              xl: "20px",
                            }}
                            borderRadius={2}
                            border={"1px solid lightgrey"}
                          >
                            {/* <img
                              src={di.src}
                              alt=""
                              style={{ width: "23px", height: "23px" }}
                            />
                            <Box
                              bgcolor={"lightgray"}
                              sx={{
                                content: "''",
                                width: "1px",
                                height: "20px",
                              }}
                            ></Box> */}
                            <Box
                              width={{
                                xs: "15px",
                                sm: "44px",
                                md: "23px",
                              }}
                              height={{
                                xs: "15px",
                                sm: "28px",
                                md: "23px",
                              }}
                            >
                              <Image
                                src={di.src}
                                alt=""
                                width={"100%"}
                                height={"100%"}
                              />
                            </Box>

                            <Typography
                              fontSize={{
                                xs: "12px",
                                sm: "9px",
                                md: "16px",
                                xl: "16px",
                              }}
                              fontWeight={"bold"}
                              color={"black"}
                            >
                              {di.title}
                            </Typography>
                          </Stack>
                        ))}
                      {d.id === 2 &&
                        d.items?.map((d) => (
                          <Stack
                            width={{ xl: "30%", xs: "45%" }}
                            position={"relative"}
                          >
                            <Image
                              src={d.src}
                              alt=""
                              style={{ borderRadius: 1 }}
                            />
                            <Typography
                              width={"fit-content"}
                              height={"fit-content"}
                              fontSize={{
                                xs: "8px",
                                sm: "9px",
                                md: "16px",
                              }}
                              color={"white"}
                              position={"absolute"}
                              sx={{
                                top: { xl: 0, xs: "50%" },
                                bottom: 0,
                                marginTop: "auto",
                                marginBottom: "auto",
                                left: { xl: 0, xs: "33%" },
                                right: 0,
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                            >
                              Life Sciences
                            </Typography>
                          </Stack>
                        ))}
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* mobile view  */}
      {/* <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
      >
        <Stack alignItems={"center"} p={"20px 0"} bgcolor={"white"}>
          <Stack
            display={"fixed"}
            margin={"0 auto"}
            width={{
              xs: "95%",
            }}
            direction={"row"}
            gap={2}
            sx={{ overflowY: "auto" }}
            justifyContent={"center"}
          >
            {lists.map((d) => (
              <Box
                marginBottom={"15px"}
                border={"1px solid lightgrey"}
                borderRadius={"10px"}
                margin={"5px"}
                padding={{
                  xs: "10px 5px",
                  sm: "10px 5px",
                  md: "10px 5px",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#F0F8FE",
                  },
                }}
                alignItems={"center"}
                onClick={() => handleItemClick(`item${d.id}`)}
                className={activeItem === `item${d.id}` ? "active" : ""}
              >
                {d.heading}
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack
          margin={"0 auto"}
          bgcolor={"#F8F8F8"}
          width={"100%"}
          height={"fit-content"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"start"} width={"95%"}>
            <Stack gap={2}>
              {lists2.map((d) => (
                <Stack className="content" bgcolor={d.bgcolor}>
                  <Stack
                    minHeight={0}
                    gap={2}
                    id={`item${d.id}`}
                    className="item"
                  >
                    <Typography
                      fontWeight={"bold"}
                      fontSize={{
                        xs: "16px",
                        sm: "20px",
                        md: "28px",
                      }}
                      color={d.id === "4" || d.id === "6" ? "white" : "black"}
                      textAlign={"center"}
                      dangerouslySetInnerHTML={{ __html: d.title }}
                    />

                    <Typography
                      p={d.id === "1" ? "0 0px" : "0"}
                      textAlign={"center"}
                      fontSize={{
                        xs: "11px",
                        sm: "14px",
                        md: "16px",
                      }}
                      dangerouslySetInnerHTML={{ __html: d.description }}
                      color={d.id === "4" || d.id === "6" ? "white" : "black"}
                    />
                    {d.id !== "2.5" && (
                      <Button
                        endIcon={<EastIcon />}
                        sx={{
                          bgcolor: "transparent",
                          color:
                            d.id === "4"
                              ? "#DF7E00"
                              : d.id === "6"
                              ? "white"
                              : "#0079FF",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                          },
                          fontWeight: "bold",
                          pl: "0px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#0079FF",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    )}
                    {d.id === "2.5" && (
                      <Stack pt={1}>
                        <Button
                          sx={{
                            width: "200px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "Work Sans",
                            p: 1.5,
                          }}
                        >
                          Request Demo
                        </Button>
                      </Stack>
                    )}

                    <Stack
                      direction={"row"}
                      gap={{
                        xs: "6px",
                        sm: "9px",
                        md: "20px",
                      }}
                      pt={1}
                      flexWrap={"wrap"}
                      justifyContent={"center"}
                    >
                      {d.id === "1" &&
                        d.items?.map((di) => (
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={{
                              xs: "4px",
                              sm: "6px",
                              md: "10px",
                            }}
                            p={{
                              xs: "5px",
                              sm: "8px",
                              md: "20px",
                            }}
                            borderRadius={2}
                            border={"1px solid lightgrey"}
                          >
                            <Box
                              width={{
                                xs: "15px",
                                sm: "18px",
                                md: "23px",
                              }}
                              height={{
                                xs: "15px",
                                sm: "18px",
                                md: "23px",
                              }}
                            >
                              <img
                                src={di.src}
                                alt=""
                                width={"100%"}
                                height={"100%"}
                              />
                            </Box>

                            <Box
                              bgcolor={"lightgray"}
                              sx={{
                                content: "''",
                                width: "1px",
                                height: "20px",
                              }}
                            ></Box>
                            <Typography
                              fontSize={{
                                xs: "8px",
                                sm: "9px",
                                md: "16px",
                              }}
                              fontWeight={"bold"}
                              color={"black"}
                            >
                              {di.title}
                            </Typography>
                          </Stack>
                        ))}
                      {d.id === "2" &&
                        d.items?.map((d) => (
                          <Stack width={"45%"} position={"relative"}>
                            <Image
                              src={d.src}
                              alt=""
                              style={{ borderRadius: 1 }}
                            />
                            <Typography
                              width={"fit-content"}
                              height={"fit-content"}
                              fontSize={{
                                xs: "8px",
                                sm: "9px",
                                md: "16px",
                              }}
                              color={"white"}
                              position={"absolute"}
                              sx={{
                                top: 0,
                                bottom: 0,
                                marginTop: "auto",
                                marginBottom: "auto",
                                left: 0,
                                right: 0,
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                            >
                              Life Sciences
                            </Typography>
                          </Stack>
                        ))}
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack> */}
    </>
  );
}

export default FeaturesBysize;
