import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePostCardModal } from "../postCardModal/postCardModalSlice";
import "./postCardModal.css";
import { createPost, editPosts } from "../../pages/home/postSlice";

export function PostCardM(){
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { postCardModal, postCardContent } = useSelector(
    (state) => state.postCardModal
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    if (postCardContent && postCardContent.content) {
      setInput(postCardContent.content);
    }
  }, [postCardContent]);

  const postHandler = () => {
    postCardContent
      ? dispatch(
          editPosts({
            postData: {...postCardContent, content: input}, 
            token: token,
          })
        )
      : dispatch(createPost({ postData: { content: input }, token: token }));
    setInput("");
    dispatch(closePostCardModal());
  };

  return(
    <div
      className={`container fixed justify-center items-center ${
        postCardModal ? "flex" : "hidden"
      }`}
    >
      <div className="w-1/4 bg-white p-3 flex flex-col rounded-lg sm:w-full sm:mx-2 md:w-3/4">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg font-bold pl-1">Add a Post</h2>
          <button
            className="px-3"
            onClick={() => {
              dispatch(closePostCardModal());
              setInput("");
            }}
          >
            <i className="bx bx-x text-lg"></i>
          </button>
        </div>
        <textarea
          placeholder="Start writing here..."
          className="focus:outline-none border rounded-lg p-2 mt-4 h-24"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div className="w-full mt-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
          <button
            className={`w-full rounded-lg py-1 ${
              input.length < 1 && "hover: cursor-not-allowed"
            }`}
            disabled={input.trim().length < 1 ? true : false}
            onClick={() => postHandler()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}


