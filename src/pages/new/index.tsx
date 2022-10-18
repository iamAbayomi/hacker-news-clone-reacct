import { useGetNewStories } from "@/hooks/story";
import { Box } from "@chakra-ui/react";
import AppLayout from "layout";
import dynamic from "next/dynamic";

const Ask = dynamic(() => import("../../components/headers/New/index"));

const Index = () => {
  const {
    isLoading,
    newStories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetNewStories();

  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={newStories}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    ></AppLayout>
  );
};

export default Index;
