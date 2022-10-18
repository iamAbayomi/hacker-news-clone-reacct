import { useGetCustomStories } from "@/hooks/ask";
import { Box } from "@chakra-ui/react";
import AppLayout from "layout";
import dynamic from "next/dynamic";

const Index = () => {
  const {
    isLoading,
    customStories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetCustomStories("askstories", "ask");
  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={customStories}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    ></AppLayout>
  );
};

export default Index;
