import { useNavigate } from 'react-router-dom';
import error from "../../src/assets/error.svg";

export function Error(){
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center errorbox">
      <img src={error} alt="" className="h-2/3" />
      <div>
        <button
          className="w-full mt-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold px-7 py-2"
          onClick={() => navigate("/login")}
        >
          Go Back to Login
        </button>
      </div>
    </div>
  );
}
