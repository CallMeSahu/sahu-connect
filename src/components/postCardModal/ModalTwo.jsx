import { useDispatch } from "react-redux";
import { openPostCardModal } from "../postCardModal/postCardModalSlice";

export function PostCardModalTwo(){
    const dispatch = useDispatch();
    return(
      <div onClick={() => dispatch(openPostCardModal())} className="bg-slate-100 flex flex-col w-5/6 ll search xl:w-full h-13 sticky top-0 mt-8 mb-2">
      <div className="bg-white my-2 py-2 w-full h-10s rounded-lg">
        <div className="sm:w-11/12  flex justify-between w-full px-5 items-center">
          <p className="text-slate-400">Whats in your mind ?</p>
          <i className="bx bx-plus text-xl text-blue-500 font-bold"></i>
        </div>
      </div>
    </div>
    )
}


