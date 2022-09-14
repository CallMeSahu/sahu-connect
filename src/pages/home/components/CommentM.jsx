import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteComment, editComment } from "../postSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function CommentM({ item, commentInput, setCommentInput, postId }){
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const saveEditedComment = (commentId) => {
    if (commentInput.editText.trim() !== "") {
      setCommentInput((prev) => ({ ...prev, editModal: false, editText: "" }));
      dispatch(
        editComment({
          postId: postId,
          commentId: commentId,
          commentData: { text: commentInput.editText },
          token: token,
        })
      );
    } else {
      toast("Comment something, it cannot be empty");
    }
  };

  return (
    <div
      key={item._id}
      className="flex py-3 pb-2 bg-white rounded-md justify-between items-center w-full"
    >
      <div className="flex gap-3 w-full">
        <img
          className="h-8 w-8 object-cover rounded-full"
          src={item.username === user.username ? user.avatar : item.avatar}
          alt={item.username === user.username ? "user_avatar" : item.avatar}
        />
        <div className="text-black flex flex-col w-full cursor-pointer">
          <span
            onClick={() => {
              user.username === item?.username
                ? navigate("/profile")
                : navigate(`/profile/${item.username}`);
            }}
            className="text-md"
          >{`${item.firstName} ${item.lastName}`}</span>
          {commentInput.editModal && item._id === commentInput.commentId ? (
            <div className="flex ">
              <input
                type="text"
                value={commentInput.editText}
                onChange={(e) =>
                  setCommentInput((prev) => ({
                    ...prev,
                    editText: e.target.value,
                  }))
                }
                className="border-b-2 mr-2 grow focus:outline-none text-sm text-slate-800 border-gray-400"
              />
              <span onClick={() => saveEditedComment(item._id)}>
                <i className="bx bx-check p-0.5 rounded-full mr-2 cursor-pointer"></i>
              </span>
              <span
                onClick={() =>
                  setCommentInput((prev) => ({
                    ...prev,
                    editModal: false,
                  }))
                }
              >
                <i className="bx bx-x p-0.5 rounded-full cursor-pointer"></i>
              </span>
            </div>
          ) : (
            <div className=" flex justify-between w-full">
              <span className="text-sm text-slate-800">{item.text}</span>
              {item.username === user.username && (
                <div
                  className="rounded-full px-2 cursor-pointer relative"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <i className={`bx bx-dots-vertical-rounded opacity-60`}></i>

                  {isEdit ? (
                    <ul className="border rounded-md bg-white absolute m-0 top-7 right-6 text-sm text-gray-500 flex flex-col p-1">
                      <li
                        onClick={() => {
                          setCommentInput((prev) => ({
                            ...prev,
                            editText: item.text,
                            commentId: item._id,
                            editModal: true,
                          }));
                        }}
                        className="text-black hover:bg-blue-50 rounded-sm mb-2 p-1 flex gap-2 items-center"
                      >
                        <i className="bx bxs-edit-alt"></i>
                        <span>Edit</span>
                      </li>
                      <li
                        onClick={() =>
                          dispatch(
                            deleteComment({
                              postId: postId,
                              commentId: item._id,
                              token: token,
                            })
                          )
                        }
                        className="text-black hover:bg-blue-50 rounded-sm p-1 flex gap-2 items-center"
                      >
                        <i className="bx bxs-trash-alt"></i>
                        <span>Delete</span>
                      </li>
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

