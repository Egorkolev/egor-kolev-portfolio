"use client";
import { useEffect } from "react";
import { toast } from "sonner";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PToast = ({response, trigger}: any) => {
  console.log(response, "response");
  
  useEffect(() => {
    if (trigger) {
      const messageType = response?.message
        ? "Success!"
        : "Error!";

        const toastStyle = 
        messageType === "Success!"
        ? "bg-dark bg-opacity-80 border border-greenText text-greenText font-bold text-lg"
        : "bg-dark bg-opacity-80 border border-pinkShade text-pinkShade font-bold text-lg";

      const messageContent =
        response?.message || response?.error || "Something happened";

      toast(messageType, {
        className: `${toastStyle} max-w-[300px] m-auto md:max-w-full md:m-0`,
        description: messageContent,
      });
    }
  }, [trigger, response]);

  return null;
};

export default PToast;