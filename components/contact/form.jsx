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
  <b>Company:</b> ${data.company}
  <b>Fleet Size:</b> ${data.fleet}
  <b>Service:</b> ${data.service}
  <b>Message:</b> ${data.message}
  <b>Page:</b> ${page}
      `;

      await sendMessageToTelegramGroup(message);
      Swal.fire({
        title: "Message Sent Successfully!",
        text: "Your message has been delivered successfully. We will contact you within 24 hours.",
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
      className="py-14 md:py-32 sm:py-32 bg-cover bg-dark relative z-0 lamp__container"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 text-white relative z-10">
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(submitFn)}
        >
          <div className="col-span-2">
            <h3 className="font-semibold text-2xl">
              Request a Free Consultation
            </h3>
            <p className="text-base pt-3 text-gray-300">
              Fill out the form below and our team will contact you within 24 hours.
              For urgent matters — DOT audit, active investigation — call us directly at{" "}
              <a href="tel:+12163771111" className="text-white underline">+1 216 377 1111</a>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
            <div>
              <Input
                type={"text"}
                register={register}
                name={"name"}
                placeholder={"First Name"}
                id="name"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"surname"}
                placeholder={"Last Name"}
                id="surname"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"company"}
                placeholder={"Company Name"}
                id="company"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"phone"}
                placeholder={"Phone Number"}
                id="phone"
                required
              />
            </div>
            <div>
              <Input
                type={"text"}
                register={register}
                name={"email"}
                placeholder={"Email Address"}
                id="email"
                required
              />
            </div>
            <div>
              <select
                {...register("fleet")}
                className="px-5 py-2 w-full text-sm focus:outline-white rounded-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 text-white"
              >
                <option value="" className="text-dark">Number of Trucks</option>
                <option value="1-3" className="text-dark">1–3 trucks</option>
                <option value="4-10" className="text-dark">4–10 trucks</option>
                <option value="11-25" className="text-dark">11–25 trucks</option>
                <option value="26-50" className="text-dark">26–50 trucks</option>
                <option value="50+" className="text-dark">50+ trucks</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <select
                {...register("service")}
                className="px-5 py-2 w-full text-sm focus:outline-white rounded-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 text-white"
              >
                <option value="" className="text-dark">Service Interested In</option>
                <option value="Safety & DOT Compliance" className="text-dark">Safety & DOT Compliance</option>
                <option value="Fleet Documentation" className="text-dark">Fleet Documentation</option>
                <option value="HR & Driver Management" className="text-dark">HR & Driver Management</option>
                <option value="Insurance Consulting" className="text-dark">Insurance Consulting</option>
                <option value="All Services" className="text-dark">All Services (Full Package)</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <Textarea
                type={"text"}
                register={register}
                name={"message"}
                placeholder={"Tell us about your situation — upcoming audit, compliance concerns, or any questions..."}
                id="message"
              />
            </div>
            <button
              type="submit"
              disabled={reqloading}
              className="px-7 flex items-center justify-center py-2 font-semibold uppercase text-base bg-white hover:bg-opacity-5 backdrop-blur-lg border border-white rounded-lg hover:text-white hover:bg-white text-dark transition-all duration-150"
            >
              {reqloading ? <Spinner /> : "Send Request"}
            </button>
          </div>
        </form>

        {/* Right side: image + contact info */}
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl h-[280px] sm:h-[320px] overflow-hidden">
            <img
              src="/images/truck-1.jpg"
              alt="main"
              title="main"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 text-white">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <span>128 Sunset Blvd, New Castle, DE 19720</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📞</span>
                <a href="tel:+12163771111" className="hover:text-white transition-colors">+1 216 377 1111</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">✉️</span>
                <a href="mailto:yusolvellc@gmail.com" className="hover:text-white transition-colors">yusolvellc@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">💬</span>
                <a href="https://t.me/yusolve" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">t.me/yusolve</a>
              </div>
            </div>
            <div className="mt-2">
              <h5 className="font-semibold text-sm mb-3 text-white">Business Hours</h5>
              <div className="flex flex-col gap-2 text-sm text-gray-300">
                <div className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM EST</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>10:00 AM – 2:00 PM EST</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                For urgent DOT audit or roadside inspection matters, send a message via Telegram or call directly — we respond to emergencies outside business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
