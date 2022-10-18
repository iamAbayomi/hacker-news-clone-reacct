/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import Headline from "@/components/headline";
import { footerData } from "@/utils/dummydate";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { INewsItem } from "../types";

type ILayout = {
  children?: ReactElement;
  isLoading: boolean;
  newsItems: INewsItem[];
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};

const AppLayout = ({
  children,
  isLoading,
  newsItems,
  isFetchingNextPage,
  fetchNextPage
}: ILayout) => {
  const router = useRouter();

  function goToPage(page: string) {
    router.push(`${page}`);
  }

  function increaseStep() {
    fetchNextPage();
  }
  return (
    <Box>
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="header-section">
              <div className="header-image-section">
                <img alt="gif" className="header-image" src="y18.gif" />
              </div>
              <div className="header-text-section">
                <div
                  className="header-text-content"
                  onClick={() => goToPage("/")}
                >
                  <p className="header-text">Hackers News</p>
                </div>
                <div className="header-menu">
                  <p className="menu-item" onClick={() => goToPage("new")}>
                    new |
                  </p>
                  <p className="menu-item" onClick={() => goToPage("ask")}>
                    ask |
                  </p>
                  <p className="menu-item" onClick={() => goToPage("show")}>
                    show |
                  </p>
                  <p className="menu-item" onClick={() => goToPage("jobs")}>
                    jobs |
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lists-of-headline">
            {isLoading ? (
              <Text margin={"15px 0px 0px 0px"} textAlign={"center"}>
                isLoading...
              </Text>
            ) : (
              <Box>
                {newsItems?.map((item: INewsItem, index: number) => (
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
        </div>
        <Footer footerLink={footerData} />
      </div>
    </Box>
  );
};

export default AppLayout;
