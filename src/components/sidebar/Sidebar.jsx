import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { openPostCardModal } from "../postCardModal/postCardModalSlice";
import { logoutUser } from "../../pages/authentication/authSlice";
import { toast } from "react-toastify";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={`sticky top-0 w-1/4 lg:w-2/5 mr-3 px-10 lg:px-5 h-fit sidebar md:fixed md:min-w-full md:mr-0 md:px-0 md:bg-slate-100 md:h-13 `}
    >
      <NavLink to="/">
        <div className="px-3 flex title items-center justify-center mt-10 lg:justify-start lg:px-0 md:mt-0">
          <span className="text-3xl font-bold md:hidden lg:px-4 text-blue-500">Sahu Connect</span>
        </div>
      </NavLink>

      <div className=" flex justify-center  md:justify-between">
        <ul className=" lg:w-4/5 md:flex md:justify-between md:items-center md:m-0 sidebarlist">
          <li className=" py-2 text-xl flex gap-3 items-center px-3 hover:bg-white list cursor-pointer rounded-md mb-3 mt-3 md:py-0">
            <NavLink to="/">
              <i className="bx bxs-home mr-3 md:text-2xl"></i>
              <span className="md:hidden">Feed</span>
            </NavLink>
          </li>
          <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white  list  shadow-current cursor-pointer rounded-md mb-3 md:mb-0 md:py-0">
            <NavLink to="/explore">
              <i className="bx bxs-compass mr-3 md:text-2xl"></i>
              <span className="md:hidden">Explore</span>
            </NavLink>
          </li>
          <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white  list  shadow-current cursor-pointer rounded-md mb-3 md:mb-0 md:py-0">
            <NavLink to="/bookmark">
              <i className="bx bxs-bookmark-star mr-3 md:text-2xl"></i>
              <span className="md:hidden">Bookmark</span>
            </NavLink>
          </li>
          <li className="py-2 text-xl flex gap-2 items-center px-3 hover:bg-white  list  shadow-current cursor-pointer rounded-md mb-3 md:mb-0 md:py-0">
            <NavLink to="/profile">
              <i className="bx bxs-user-circle mr-3 md:text-2xl"></i>
              <span className="md:hidden">Profile</span>
            </NavLink>
          </li>
          <li className="py-2 text-xl  flex gap-2 items-center px-3 hover:bg-white  list  shadow-current cursor-pointer rounded-md mb-3 md:mb-0 md:py-0">
            <NavLink to="/login">
              <i className="bx bx-log-out mr-3 md:text-2xl"></i>
              <span
                className="md:hidden"
                onClick={() => {
                  dispatch(logoutUser());
                  toast.success("Logged Out!");
                }}
              >
                Logout
              </span>
            </NavLink>
          </li>

          <li className="py-2 justify-center bg-blue-500 hover:bg-blue-600 text-white text-xl flex gap-2 items-center px-3 cursor-pointer rounded-md mb-3 md:hidden">
            <button
              className="w-full"
              onClick={() => dispatch(openPostCardModal())}
            >
              Post
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Sidebar };
