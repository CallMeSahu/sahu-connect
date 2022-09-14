/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPost } from "../../home/postSlice";
import { openEditProfileModal } from "../profileModalSlice";
import "../../../components/postCardModal/postCardModal.css";
import { getUserHandler } from "../userSlice";
import { openFollowingModal } from "../../../components/followBar/followModalSlice";

export function UserProfile(){
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { authUser } = useSelector((state) => state.user);
  const { allPosts } = useSelector((state) => state.post);
  const userPost = allPosts.filter(
    (post) => post.username === authUser.username
  );

  useEffect(() => {
    dispatch(getUserPost(user.username));
  }, [allPosts]);

  useEffect(() => {
    dispatch(getUserHandler(user._id));
  }, [user]);

  return(
    <div
      className="bg-slate-100 flex flex-col px-2 py-1 rounded-md  w-full my-2"
      key={authUser._id}
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center h-20 w-20 rounded-full">
          <img
            src={authUser.avatar}
            alt="avatar"
            className="h-18 w-20 object-cover rounded-full sm:h-16 sm:w-16 border-0"
          />
        </div>

        <span className="text-xl font-semibold mt-2">{`${authUser.firstName} ${authUser.lastName}`}</span>
        <span className="text-sm text-gray-500">@{authUser.username}</span>

        <div className="font-semibold text-gray-500 mt-3">{authUser.bio}</div>

        <div className="font-semibold text-gray-500 mt-1.5 flex gap-5">
          <span>{userPost.length} Posts</span>
          <span>{user.followers.length} Followers</span>
          <span
            className="cursor-pointer border-b-5"
            onClick={() => dispatch(openFollowingModal())}
          >
            {user?.following.length} Following
          </span>
        </div>

        <button
          onClick={() => dispatch(openEditProfileModal())}
          className="mt-4 border rounded-md px-6 py-1.5 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        >
          Edit
        </button>
        
      </div>
    </div>
  )
}