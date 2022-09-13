import { Follow, PostCardModalTwo, Sidebar } from "../../components";

export function Wrapper({children}){
  return (
    <div className="flex w-full bg-slate-100 min-h-screen justify-center relative">
      <Sidebar />
      <div className="w-2/4 mb-4 width lg:w-3/5 relative md:pr-0 flex flex-col items-center xl:mx-0 pr-5 md:pb-12">
        <PostCardModalTwo />
        <div className="flex justify-center w-full ">{children}</div>
      </div>
      <div className="w-1/4 lg:w-0">
        <Follow />
      </div>
    </div>
  );
}


