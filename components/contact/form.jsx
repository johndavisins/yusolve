import Link from "next/link";
import React, { useState } from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import Textarea from "../ui/textarea";
import { sendMessageToTelegramGroup } from "@/utils/send-message";
import Swal from "sweetalert2";
import Spinner from "./spinner";

export default function Form({ page = " Contact page" }) {
  const [reqloading, setReqLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
    },
  });

  const submitFn = async (data) => {
    try {
      setReqLoading(true);

      const message = `
  <b>New Message</b>
  <b>Name:</b> ${data.name}
  <b>Surname:</b> ${data.surname}
  <b>Phone:</b> ${data.phone}
  <b>Email:</b> ${data.email}
  <b>Message:</b> ${data.message}
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

  return (
    <section
      id="about"
      className="py-14 md:py-32 sm:py-32 bg-cover bg-dark  relative z-0 lamp__container"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 text-white relative z-10">
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(submitFn)}
        >
          <div className="col-span-2">
            <h3 className="font-semibold text-2xl">
              Application for contacting
            </h3>
            <p className="text-base pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              porro deleniti! Recusandae eaque temporibus dignissimos rem ipsam
              eveniet ea vitae!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
            <div>
              <Input
                type={"text"}
                register={register}
                name={"name"}
                placeholder={"Name"}
                id="name"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"surname"}
                placeholder={"Surname"}
                id="surname"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"email"}
                placeholder={"Email"}
                id="email"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"phone"}
                placeholder={"Phone"}
                id="phone"
                required
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <Textarea
                type={"text"}
                register={register}
                name={"message"}
                placeholder={"Message"}
                id="message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={reqloading}
              className="px-7 flex items-center justify-center py-2 font-semibold uppercase text-base bg-white hover:bg-opacity-5 backdrop-blur-lg border border-white rounded-lg hover:text-white hover:bg-white text-dark transition-all duration-150"
            >
              {reqloading ? <Spinner /> : "Send"}
            </button>
          </div>
        </form>
        <div className="rounded-3xl h-[350px] sm:h-[550px] overflow-hidden">
          <img
            src="/images/truck-1.jpg"
            alt="main"
            title="main"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
