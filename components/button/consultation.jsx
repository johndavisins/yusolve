import { toggleSendModal } from "@/redux/slice/settings";
import React from "react";
import { useDispatch } from "react-redux";

export default function Consultation() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleSendModal())}
      type="button"
      className="px-7 py-3 font-semibold uppercase text-sm bg-white bg-opacity-5 backdrop-blur-lg border border-white rounded-lg text-white hover:bg-white hover:text-dark transition-all duration-150"
    >
      Get a free consultation
    </button>
  );
}
