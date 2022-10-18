import api from "@/utils/api";
import { _errorHandler } from "@/utils/helpers";
import { useInfiniteQuery } from "react-query";

const onError = (err: any) => {
  _errorHandler(err);
};

export const useGetJobStories = () => {
  let jobStoriesResponse: any[] = [];
  const getJobStories = async (step: number) => {
    const storiesresponse = await api.get(`jobstories.json?print=pretty`);
    let storiesresponseID = storiesresponse.data;
    for (let i = 0; i < step; i++) {
      const resposne = await api.get(
        `/item/${storiesresponseID[i]}.json?print=pretty`
      );
      jobStoriesResponse[i] = resposne.data;
    }
    return jobStoriesResponse;
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      "jobStories",
      ({ pageParam = 30 }) => getJobStories(pageParam),
      {
        onError,
        getNextPageParam: (lastPage, pages) => {
          return lastPage ? pages.length + 30 : null;
        }
      }
    );

  let jobStories: any[] = [];

  data?.pages.map((page) => page.map((item: any) => jobStories.push(item)));
  return {
    jobStories,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  };
};
