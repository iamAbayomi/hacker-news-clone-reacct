import { useGetShowStories } from "@/hooks/show";
import { Box } from "@chakra-ui/react";
import AppLayout from "layout";
import dynamic from "next/dynamic";

const Ask = dynamic(() => import("../../components/headers/New/index"));

const Index = () => {
  const {
    showStories,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetShowStories();
  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={showStories}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    ></AppLayout>
  );
};

export default Index;
