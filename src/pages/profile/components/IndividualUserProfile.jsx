import { SinglePost } from "../../home/components/SinglePost";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { followUserHandler, unfollowUser } from "../../authentication/authSlice";
import { getUserPost } from "../../home/postSlice";
import { getUsers } from "../userSlice";

export function IndividualUserProfile(){
 const { userPosts, allPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const userId = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const [individualUser, setIndividualUser] = useState({});

  useEffect(() => {
    setIndividualUser(allUsers.find((item) => item.username === userId.userId));
  }, [allUsers, userId]);

  useEffect(() => {
    dispatch(getUsers());
  }, [allUsers]);

  useEffect(() => {
    dispatch(getUserPost(individualUser?._id));
  }, [individualUser, allPosts]);

  const isFollowing = individualUser?.followers?.some(
    (item) => item.username === user.username
  );

  console.log(isFollowing);
  const followUser = (_id) => {
    if (isFollowing) {
      dispatch(unfollowUser({ followUserId: _id, token: token }));
    } else {
      dispatch(followUserHandler({ followUserId: _id, token: token }));
    }
  };

  console.log(individualUser); 

  return(
    <div className="w-5/6 xl:w-full px-1 mb-8">
      <div className="w-full" key={individualUser._id}>
          <div className="bg-slate-100  flex flex-col px-2 py-2 rounded-md  w-full my-2">
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center h-20 w-20 rounded-full">
                <img
                  src={individualUser?.avatar}
                  alt="avatar"
                  className="h-20 w-20 object-cover rounded-full sm:h-16 sm:w-16 border-0"
                />
              </div>

              <span className="text-xl font-semibold mt-2">
                {`${individualUser.firstName} ${individualUser.lastName}`}
              </span>
              <span className="text-sm text-gray-500">
                @{individualUser.username}
              </span>

              <div className="font-semibold text-gray-500 mt-3">
                {individualUser.bio}
              </div>

              <div className="font-semibold text-gray-500 mt-1.5 flex gap-5">
                <span>{userPosts?.length} Posts</span>
                <span>
                  {individualUser?.followers?.length > 0
                    ? individualUser?.followers?.length
                    : 0}{" "}
                  Followers
                </span>
                <span className="cursor-pointer border-b-5">
                  {individualUser?.following?.length > 0
                    ? individualUser?.following?.length
                    : 0}{" "}
                  Following
                </span>
              </div>

              <button
                onClick={() => followUser(individualUser?._id)}
                className="mt-4 border rounded-md px-6 py-1.5 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              >
                {!isFollowing ? "Follow" : "Unfollow"}
              </button>              
            </div>
          </div>
        </div>
    </div>
  )
}


