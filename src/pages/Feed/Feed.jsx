import { SinglePost } from "../home/components/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getUserHandler } from "../profile/userSlice";

export function Feed(){
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const [feedPost, setFeedPost] = useState([]);
  const [trendingPost, setTrendingPost] = useState({
    posts: [],
    isTrending: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (allPosts) {
      setFeedPost(
        allPosts
          .filter(
            (item) =>
              item?.username === user?.username ||
              user?.following?.find(
                (itemTwo) => itemTwo?.username === item?.username
              )
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, allPosts]);

  useEffect(() => {
    dispatch(getUserHandler(user._id));
  }, [allPosts, feedPost]);

  const trendingHandler = () => {
    setTrendingPost((prev) => ({ ...prev, isTrending: true }));
    setTrendingPost((prev) => ({
      ...prev,
      posts: [...feedPost]
        .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        .filter((post) => post.likes.likeCount > 0),
    }));
  };

  const latestPostHandler = () => {
    setTrendingPost((prev) => ({ ...prev, isTrending: false }));
  };

  return(
    <div className="bg-slate-100 feed-width flex w-5/6 xl:w-full h-13 flex-col ">
      <div className="bg-white flex
         px-4 py-2.5 rounded-lg gap-4 mb-2 text-center  font-semibold justify-evenly text-gray-500">
        <div className="w-1/2 border-r-2 border-blue-400">
          <button
            onClick={() => trendingHandler()}
            className="hover:opacity-70 cursor-pointer"
          >
           <i class='bx bxs-hot'></i>
            {" "}Trending
          </button>
        </div>
        <div className="w-1/2 ">
          <button
            onClick={() => latestPostHandler()}
            className="hover:opacity-70 cursor-pointer"
          >
            <i class='bx bxs-sort-alt'></i>
            {" "}Latest
          </button>
        </div>
      </div>
      { trendingPost.isTrending ? (
        <div className="flex flex-col">
          {trendingPost.posts.length > 0 ? (
            [...trendingPost.posts].map((post) => (
              <SinglePost key={post._id} post={post} />
            ))
          ) : (
            <div>No trending</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          {feedPost.length > 0 ? (
            feedPost.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <div className="text-center font-bold text-lg mt-5 text-slate-500">
              No trending
            </div>
          )}
        </div>
      )}
    </div>
  )
}


