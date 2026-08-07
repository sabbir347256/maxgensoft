import { Cpu, Server, Wifi } from "lucide-react";
import React from "react";
import { VscLoading } from "react-icons/vsc";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F2EA]/80 backdrop-blur-md">
      <div className="absolute w-[300px] h-[300px] bg-amber-200/40 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute w-[200px] h-[200px] bg-blue-300/30 rounded-full blur-[80px] animate-pulse delay-300" />

      <div className="relative flex flex-col items-center justify-center space-y-6">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2b58b8] border-r-[#2b58b8]/40 animate-[spin_2s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-amber-500 border-l-amber-500/40 animate-[spin_1.5s_linear_infinite_reverse]" />
          <div className="w-8 h-8 rounded-full bg-[#2b58b8] shadow-[0_0_20px_#2b58b8] animate-ping opacity-75" />
          <div className="absolute w-4 h-4 rounded-full bg-[#2b58b8] shadow-md" />
        </div>

        <div className="flex items-center space-x-1 text-[#2b58b8] font-bold text-lg tracking-wider">
          <span>Loading</span>
          <span className="animate-[bounce_1s_infinite_100ms]">.</span>
          <span className="animate-[bounce_1s_infinite_200ms]">.</span>
          <span className="animate-[bounce_1s_infinite_300ms]">.</span>
        </div>
      </div>
    </div>

    //  <div className="flex min-h-screen items-center justify-center bg-blue-600">
    //       <LoadingSpinner></LoadingSpinner>
    //     </div>
  );
};

export default LoadingSpinner;
