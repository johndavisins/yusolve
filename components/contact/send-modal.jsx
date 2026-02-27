import Link from "next/link";
import React, { useState } from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import Textarea from "../ui/textarea";
import { sendMessageToTelegramGroup } from "@/utils/send-message";
import Swal from "sweetalert2";
import Spinner from "./spinner";
import { useDispatch, useSelector } from "react-redux";
import { toggleSendModal } from "@/redux/slice/settings";

export default function SendModal({ page = " Modal window" }) {
  const [reqloading, setReqLoading] = useState(false);
  const { sendModal } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const submitFn = async (data) => {
    try {
      setReqLoading(true);

      const message = `
  <b>New Message</b>
  <b>Name:</b> ${data.name}
  <b>Phone:</b> ${data.phone}
  <b>Email:</b> ${data.email}
  <b>Page:</b> ${page}
      `;

      await sendMessageToTelegramGroup(message);
      // const question = await axios.post("connect/", data);
      Swal.fire({
        title: "Message Sent Successfully!",
        text: "Your message has been delivered successfully.",
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: true,
      });
      dispatch(toggleSendModal());
      reset();
    } catch (e) {
      setTimeout(() => {
        Swal.fire({
          title: "Error",
          text: e?.response?.data?.reason || e.message,
          icon: "error",
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      }, 1500);
    } finally {
      setReqLoading(false);
    }
  };

  const closeModal = () => {
    dispatch(toggleSendModal());
  };

  return (
    <div
      id="send-modal"
      className={`fixed top-0 left-0 w-full min-h-full bg-dark bg-opacity-80 flex items-center justify-center  ${
        sendModal
          ? "opacity-1 visible z-[100] transition-all duration-200"
          : "opacity-0 invisible z-[-100] transition-all duration-200"
      }`}
      onClick={() => closeModal()}
    >
      <form
        className={`flex flex-col gap-5 w-[90%] sm:w-[400px] bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-40 p-5 rounded-xl ${
          sendModal
            ? "scale-100 transition-all duration-200 opacity-1 visible"
            : "scale-0 opacity-0 invisible transition-all duration-200"
        }`}
        onSubmit={handleSubmit(submitFn)}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-5 right-5 text-white"
          onClick={() => closeModal()}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00018 2L22 22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.9999 2L2.00001 22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="col-span-2 text-white text-center pt-3">
          <h3 className="font-semibold text-2xl">Free Consultation</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 py-3">
          <div className="w-full xs:w-3/4">
            <Input
              type={"text"}
              register={register}
              name={"name"}
              placeholder={"Name"}
              id="name"
              required
            />
          </div>
          <div className="w-full xs:w-3/4">
            <Input
              type={"text"}
              register={register}
              name={"email"}
              placeholder={"Email"}
              id="email"
              required
            />
          </div>
          <div className="w-full xs:w-3/4">
            <Input
              type={"text"}
              register={register}
              name={"phone"}
              placeholder={"Phone"}
              id="phone"
              required
            />
          </div>
          <button
            type="submit"
            disabled={reqloading}
            className="px-7 w-2/4 flex items-center justify-center py-2 font-semibold uppercase text-base bg-white hover:bg-opacity-5 backdrop-blur-lg border border-white rounded-lg hover:text-white hover:bg-white text-dark transition-all duration-150"
          >
            {reqloading ? <Spinner /> : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
