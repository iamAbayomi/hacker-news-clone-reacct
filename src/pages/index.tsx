/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import Headline from "@/components/headline";
import { useGetNewsItem } from "@/hooks/story";
import { Box, Input, Text } from "@chakra-ui/react";
import { INewsItem } from "../types";

function Index() {
  const { newsItem, isLoading } = useGetNewsItem();
  const footerLink = [
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
        <Text m={"10px 0px 10px 40px"} fontSize={"14px"} color={"#828282"}>
          More
        </Text>
        <Footer footerLink={footerLink} />
      </div>
    </div>
  );
}

export default Index;
