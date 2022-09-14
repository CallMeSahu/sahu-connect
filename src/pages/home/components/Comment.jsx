import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addComment } from "../postSlice";
import { CommentM } from "./CommentM";

export function Comment({ post }){
  const { user, token } = useSelector((state) => state.auth);
  const [commentInput, setCommentInput] = useState({
    text: "",
    editText: "",
    commentId: "",
    editModal: false,
  });

  const dispatch = useDispatch();
  const commentHandler = () => {
    if (commentInput.text.trim() !== "") {
      setCommentInput((prev) => ({ ...prev, text: "" }));
      dispatch(
        addComment({
          postId: post._id,
          commentData: { text: commentInput.text },
          token: token,
        })
      );
    } else {
      toast("Comment something, it cannot be empty");
    }
  };

  return(
    <div className="">
      <div className="flex mb-3 ">
        <img className="h-8 w-8 object-cover rounded-full" src={user.avatar} alt={user.avatar}/>
        <div className="border gap-2 border-gray-200  px-2 py-1 ml-3 border-solid grow flex items-center rounded-md bg-white">
          <input
            className="grow focus:outline-none sm:text-sm bg-white"
            placeholder="Add your comment..."
            value={commentInput.text}
            onChange={(e) =>
              setCommentInput((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>
        <button
          className={`px-4 text-blue-500 ${
            commentInput.text === "" &&
            "hover: cursor-not-allowed text-slate-400"
          }
            `}
          disabled={commentInput.text === "" ? true : false}
          onClick={() => commentHandler()}
        >
          Post
        </button>
      </div>
      {post.comments.map((item) => (
        <CommentM
          item={item}
          commentInput={commentInput}
          setCommentInput={setCommentInput}
          postId={post._id}
        />
      ))}
    </div>
  )
}


