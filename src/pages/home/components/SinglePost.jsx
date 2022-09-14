import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./Comment";
import { openPostCardModal } from "../../../components/postCardModal/postCardModalSlice";
import {
  bookmarkPost,
  deletePost,
  dislikePost,
  likePost,
  removeBookmarkPost,
} from "../postSlice";
import { useNavigate } from "react-router-dom";

export function SinglePost({ post }){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editPost, setEditPost] = useState("");
  const { allUsers, authUser } = useSelector((state) => state.user);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const userInfo =
    allUsers && allUsers?.find((user) => user.username === post.username);

  const isLiked = post.likes.likedBy.some(
    (item) => item.username === user.username
  );

  const isBookMarked = post.bookmark?.some(
    (item) => item.username === user.username
  );

  const likePostHandler = () => {
    isLiked
      ? dispatch(dislikePost({ postId: post._id, token: token }))
      : dispatch(likePost({ postId: post._id, token: token }));
  };

  const bookmarkHandler = () => {
    if (isBookMarked) {
      dispatch(removeBookmarkPost({ postId: post._id, token: token }));
    } else {
      dispatch(bookmarkPost({ postId: post._id, token: token }));
    }
  };

  const getPostDate = (date) => {
    let postDate = new Date(date);
    postDate = postDate.toDateString().split(" ").slice(1, 4).join(" ");
    return postDate.slice(0, 6) + "," + postDate.slice(6);
  };

  return userInfo ? (
    <div
      className="bg-white flex flex-col px-4 py-4 pb-0 rounded-lg w-full mt-3 shadow"
      key={post._id}
    >
      <div className="flex cursor-pointer">
        <div className="w-13">
          <img
            src={
              user.username === userInfo?.username
                ? authUser.avatar
                : userInfo.avatar
            }
            className="h-11 w-12 object-cover rounded-full sm:h-10 sm:w-11"
            alt="avatar"
          />
        </div>
        <div className="flex justify-between  mx-1 px-1 w-full items-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center" onClick={() => {
              user.username === userInfo?.username ? 
              navigate("/profile") : navigate(`/profile/${userInfo.username}`)
            }}>
              <span className="text-md font-semibold">
                {user.username === post.username
                  ? `${authUser.firstName} ${authUser.lastName}`
                  : post.name}
              </span>
              <span className="text-sm text-gray-500">@{post.username}</span>
            </div>
            <small className="text-gray-400">
              {getPostDate(post.createdAt)}
            </small>
          </div>
          {user.username === post.username && (
            <div
              onClick={() => setEditPost(!editPost)}
              className="flex  items-center py-1 px-1 hover:rounded-full hover:bg-slate-200 cursor-pointer relative"
            >
              <i className="bx bx-dots-vertical-rounded pointer"></i>
              {editPost && (
                <ul className="border rounded-md w-32 bg-white absolute m-0 top-7 right-4 text-sm text-gray-500 flex flex-col p-1">
                  <li
                    onClick={() => dispatch(openPostCardModal(post))}
                    className="text-black hover:bg-blue-50 rounded-sm mb-2 p-1 flex gap-2 items-center"
                  >
                    <i className="bx bxs-edit-alt"></i>
                    <span>Edit</span>
                  </li>
                  <li
                    onClick={() => dispatch(deletePost({ post, token }))}
                    className="text-black hover:bg-blue-50 rounded-sm p-1 flex gap-2 items-center"
                  >
                    <i className="bx bxs-trash-alt"></i>
                    <span>Delete</span>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="my-3">
        <div>
          <p className="text-gray-600 break-all">{post.content}</p>
        </div>
        <div className=" text-gray-600 flex gap-4 mt-4 cursor-pointer text-sm ">
          <span
            className="flex items-center gap-1"
            onClick={() => likePostHandler()}
          >
            <i
              className={`${
                isLiked ? "bx bxs-heart" : "bx bx-heart"
              } text-xl`}
              style={{color : `${isLiked ? "#ef4444" : ""}`}}
            ></i>
            <span>
              {post.likes.likeCount === 0 ? "" : post.likes.likeCount}
            </span>
          </span>
          <span
            onClick={() => bookmarkHandler()}
            className="flex items-center gap-1"
          >
            <i
              className={`${
                isBookMarked ? "bx bxs-bookmark-star" : "bx bx-bookmark"
              } text-xl`}
            ></i>
          </span>
          <span
            onClick={() => setShowCommentBox((prev) => !prev)}
            className="flex items-center gap-1"
          >
            <i className="bx bx-comment text-xl"></i>
            <span>
              {post.comments.length === 0 ? "" : post.comments.length}
            </span>
          </span>
        </div>
      </div>
      {showCommentBox ? (
        <div>
          <Comment post={post}/>
        </div>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
}


