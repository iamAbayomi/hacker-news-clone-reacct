import { useGetJobStories } from "@/hooks/job";
import { Box } from "@chakra-ui/react";
import AppLayout from "layout";
import dynamic from "next/dynamic";

const Index = () => {
  const {
    isLoading,
    jobStories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetJobStories();
  return (
    <AppLayout
      isLoading={isLoading}
      newsItems={jobStories}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    ></AppLayout>
  );
};

export default Index;
