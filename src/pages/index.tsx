/* eslint-disable @next/next/no-img-element */
import Headline from "@/components/headline";
import { useGetNews, useGetNewsItem } from "@/hooks/story";
import { Box, Input, Text } from "@chakra-ui/react";
import { INewsItem } from "../types";

function Index() {
  const { newsItem, isLoading } = useGetNewsItem();
  const footerLists = [
    "Guidelines",
    "FAQ",
    "Lists",
    "API",
    "Security",
    "Legal",
    "Apply to YC"
  ];
  console.log("newsItem", newsItem, "items");
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="header-section">
            <div className="header-image-section">
              <img alt="gif" className="header-image" src="y18.gif" />
            </div>
            <div className="header-text-section">
              <div className="header-text-content">
                <p className="header-text">Hackers News</p>
              </div>
              <div className="header-menu">
                <p className="menu-item">new |</p>
                <p className="menu-item">past |</p>
                <p className="menu-item">comments |</p>
                <p className="menu-item">asks |</p>
                <p className="menu-item">show |</p>
                <p className="menu-item">jobs |</p>
                <p className="menu-item">submit</p>
              </div>
            </div>
          </div>
          <div className="login-section">
            <p>login</p>
          </div>
        </div>
        <div className="lists-of-headline">
          {isLoading ? (
            <Text>isLoading...</Text>
          ) : (
            <Box>
              {newsItem?.map((item: INewsItem, index: number) => (
                <Headline key={index} newsId={++index} headline={item} />
              ))}
            </Box>
          )}
        </div>
        <Text m={"10px 0px 20px 50px"} color={"#828282"}>
          More
        </Text>
        <Box borderTop={"2px solid #ff6600"} />
        <Box maxWidth={"469px"} margin={"30px auto 10px"} pb={"20px"}>
          <Text fontSize={"15px"} textAlign={"center"} fontWeight={"400"}>
            Applications are open for YC Winter 2023
          </Text>
          <Box display={"flex"} margin={"auto"} alignItems={"center"}>
            {footerLists.map((item: string, index: number) => (
              <Box
                display={"flex"}
                alignItems={"center"}
                key={index}
                // border={"1px solid"}
              >
                <Text fontSize={"11px"} margin={"10px"}>
                  {item}
                </Text>
                <Box borderRight={"1px solid"} height={"13px"} />
              </Box>
            ))}
            <Text margin={"10px"} fontSize={"11px"}>
              Contact
            </Text>
          </Box>
          <Box
            maxWidth={"200px"}
            margin={"5px auto"}
            display={"flex"}
            alignItems={"center"}
          >
            <Text fontSize={"15px"} color={"#828282"} fontWeight={"500"}>
              Search:{" "}
            </Text>
            <Input
              type={"name"}
              height={"21.5px"}
              width={"148px"}
              ml={"5px"}
              background={"white"}
              borderRadius={"1px"}
              border={"1px solid black"}
              borderColor={"black"}
            />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Index;
