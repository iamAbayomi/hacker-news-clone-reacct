/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import Headline from "@/components/headline";
import { useGetNewsItem, useGetPaginatedNewsItem } from "@/hooks/story";
import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { INewsItem } from "../types";

function Index() {
  const {
    newsItem,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetPaginatedNewsItem();
  function increaseStep() {
    fetchNextPage();
  }
  const footerLink = [
    "Guidelines",
    "FAQ",
    "Lists",
    "API",
    "Security",
    "Legal",
    "Apply to YC"
  ];
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
            <Text
              margin={"15px 0px 0px 0px"}
              //color={"#ff6600"}
              textAlign={"center"}
              // fontWeight={"bold"}
            >
              isLoading...
            </Text>
          ) : (
            <Box>
              {newsItem?.map((item: INewsItem, index: number) => (
                <Headline key={index} newsId={++index} headline={item} />
              ))}
            </Box>
          )}
        </div>
        {isFetchingNextPage ? (
          <Text margin={"15px 0px 15px 0px"} textAlign={"center"}>
            isLoading...
          </Text>
        ) : (
          <Text
            m={"10px 0px 10px 40px"}
            onClick={increaseStep}
            cursor={"pointer"}
            fontSize={"14px"}
            color={"#828282"}
          >
            More
          </Text>
        )}
        <Footer footerLink={footerLink} />
      </div>
    </div>
  );
}

export default Index;
