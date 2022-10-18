import { Box } from "@chakra-ui/react";
import AppLayout from "layout";
import dynamic from "next/dynamic";

const Ask = dynamic(() => import("../../components/headers/New/index"));

const Index = () => {
  return (
    <AppLayout
      isLoading={false}
      newsItems={[]}
      isFetchingNextPage={false}
      fetchNextPage={function (): void {
        throw new Error("Function not implemented.");
      }}
    ></AppLayout>
  );
};

export default Index;
