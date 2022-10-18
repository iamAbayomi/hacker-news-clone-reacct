/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/footer";
import Headline from "@/components/headline";
import { useGetNewsItem, useGetPaginatedNewsItem } from "@/hooks/story";
import { footerData } from "@/utils/dummydate";
import { Box, Input, Text } from "@chakra-ui/react";
import AppLayout from "layout";
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

  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={newsItem}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default Index;
