// src/components/posts/Posts.js
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts", userId],
    queryFn: async () => {
      console.log("Fetching posts for userId:", userId);
      const response = await makeRequest.get("/posts?userId=" + userId);
      return response.data;
    },
  });

  console.log("posts data", data)

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "Loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;