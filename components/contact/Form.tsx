import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useToast } from "@/hooks/use-toast";
import { contactCode3Scribe } from "@/lib/API/contact";
const Form = () => {
  const { toast } = useToast();
  // ✅ Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // ✅ Handle phone change separately
  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
  };

  // ✅ Validation logic
  const validateForm = () => {
    const { firstName, lastName, subject,email, message, phoneNumber } = formData;

    if (!firstName.trim() || !lastName.trim()) {
      toast({
        variant: "destructive",
        title: "First & Last Name is required!",
      });
      return false;
    }
    if (!email.trim() ) {
      toast({
        variant: "destructive",
        title: "Email is required!",
      });
      return false;
    }
    if (!subject.trim()) {
      toast({ variant: "destructive", title: "Subject is required!" });

      return false;
    }

    if (!message.trim()) {
      toast({ variant: "destructive", title: "Message is required!" });

      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ variant: "destructive", title: "Enter a valid email address" });
      return false;
    }
    if (message.length > 150) {
      toast({
        variant: "destructive",
        title: "Message cannot exceed 150 characters",
      });

      return false;
    }

    if (!phoneNumber || phoneNumber.length < 7) {
      toast({ variant: "destructive", title: "Enter valid Phone-Number" });
      return false;
    }

    return true;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
     
      const contactResponse = await contactCode3Scribe(formData);
      console.log(contactResponse);
    } catch (error) { 
      console.log(error);
    } finally {
      setFormData({
        firstName: "",
        lastName: "",
        subject: "",
        email:"",
        message: "",
        phoneNumber: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-5 mb-5 xl:gap-[5.25rem]">
        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="firstName" className="font-semibold ">
            First Name
          </Label>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="h-12"
          />
        </div> 
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="lastName" className="font-semibold ">
            Last Name
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="h-12"
          />
        </div> */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="firstName"
            className="font-semibold lg:text-[16px] xl:text-[20px] xl:mb-2"
          >
            First Name
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
              className="h-12 lg:h-11 xl:h-14 pl-10 w-full"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5229 21.99H4.48785C2.98485 21.99 1.82485 20.856 2.02185 19.366L2.13585 18.497C2.34285 17.297 3.44085 16.542 4.63285 16.283L11.9279 15H12.0719L19.3669 16.283C20.5789 16.563 21.6569 17.276 21.8639 18.497L21.9779 19.377C22.1749 20.867 21.0149 22 19.5119 22L19.5229 21.99ZM16.9999 7C16.9999 8.32608 16.4731 9.59785 15.5354 10.5355C14.5977 11.4732 13.3259 12 11.9999 12C10.6738 12 9.402 11.4732 8.46432 10.5355C7.52664 9.59785 6.99985 8.32608 6.99985 7C6.99985 5.67392 7.52664 4.40215 8.46432 3.46447C9.402 2.52678 10.6738 2 11.9999 2C13.3259 2 14.5977 2.52678 15.5354 3.46447C16.4731 4.40215 16.9999 5.67392 16.9999 7Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label
            htmlFor="firstName"
            className="font-semibold lg:text-[16px] xl:text-[20px] xl:mb-2"
          >
            Last Name
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData?.lastName}
              className="h-12 lg:h-11 xl:h-14 pl-10 w-full"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5229 21.99H4.48785C2.98485 21.99 1.82485 20.856 2.02185 19.366L2.13585 18.497C2.34285 17.297 3.44085 16.542 4.63285 16.283L11.9279 15H12.0719L19.3669 16.283C20.5789 16.563 21.6569 17.276 21.8639 18.497L21.9779 19.377C22.1749 20.867 21.0149 22 19.5119 22L19.5229 21.99ZM16.9999 7C16.9999 8.32608 16.4731 9.59785 15.5354 10.5355C14.5977 11.4732 13.3259 12 11.9999 12C10.6738 12 9.402 11.4732 8.46432 10.5355C7.52664 9.59785 6.99985 8.32608 6.99985 7C6.99985 5.67392 7.52664 4.40215 8.46432 3.46447C9.402 2.52678 10.6738 2 11.9999 2C13.3259 2 14.5977 2.52678 15.5354 3.46447C16.4731 4.40215 16.9999 5.67392 16.9999 7Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="relative grid w-full items-center gap-1.5 mb-5">
        <Label
          htmlFor="email"
          className="font-semibold lg:text-[16px] xl:text-[20px] xl:mb-2"
        >
          Email
        </Label>
        <div className="relative">
          <Input
            type="text"
            id="email"
            onChange={handleChange}
            value={formData?.email}
            placeholder="Enter Email"
            className="h-12 lg:h-11 xl:h-14 pl-10 w-full"
          />
           <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                x="3"
                y="6"
                width="18"
                height="12"
                rx="2"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>{" "}
              <path
                d="M20.5737 7L12 13L3.42635 7"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>

      <div className="relative grid w-full items-center gap-1.5 mb-5">
        <Label
          htmlFor="subject"
          className="font-semibold lg:text-[16px] xl:text-[20px] xl:mb-2"
        >
          Subject
        </Label>
        <div className="relative">
          <Input
            type="text"
            id="subject"
            onChange={handleChange}
            value={formData?.subject}
            placeholder="Enter subject of your message"
            className="h-12 lg:h-11 xl:h-14 pl-10 w-full"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_823_2044)">
              <path
                d="M2.66211 21.7502H6.90461L22.4611 6.19367L18.2181 1.95117L2.66211 17.5077V21.7502Z"
                stroke="#555555"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M13.9756 6.19385L18.2181 10.4363"
                stroke="#555555"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_823_2044">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* <div className="grid w-full  items-center gap-1.5 mb-5">
        <Label htmlFor="subject" className="font-semibold ">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          placeholder="Enter subject of your message"
          className="h-12"
        />
      </div> */}

      {/* <div className="grid w-full gap-1.5 mb-5">
        <Label htmlFor="message" className="font-semibold ">
          Message
        </Label>
        <Textarea
          placeholder="Enter Your Message"
          id="message"
          className="h-24"
        />
      </div> */}
      <div className="relative w-full mb-5">
        <Label
          htmlFor="message"
          className="font-semibold lg:text-[16px] xl:text-[20px]  xl:mb-3"
        >
          Message
        </Label>
        <Textarea
          className=" w-full p-3 pl-10 resize-none xl:mt-2"
          rows={4.5}
          placeholder="Enter Your Message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        />
        <span className="absolute bottom-2 right-3 text-gray-500 text-sm">
          {0}/150
        </span>
        <div className="absolute left-3 top-[2.25rem] xl:top-[2.75rem]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.482 20.52L13.024 19.604L11.734 18.84L11.191 19.756L12.482 20.52ZM8.476 19.604L9.018 20.52L10.308 19.756L9.767 18.84L8.476 19.604ZM11.191 19.756C11.1443 19.8308 11.0793 19.8925 11.0021 19.9353C10.925 19.978 10.8382 20.0005 10.75 20.0005C10.6618 20.0005 10.575 19.978 10.4979 19.9353C10.4207 19.8925 10.3557 19.8308 10.309 19.756L9.018 20.52C9.791 21.827 11.708 21.827 12.482 20.52L11.191 19.756ZM9.25 1.5H12.25V4.16459e-07H9.25V1.5ZM20 9.25V10.25H21.5V9.25H20ZM1.5 10.25V9.25H0V10.25H1.5ZM0 10.25C0 11.405 -4.84288e-08 12.308 0.05 13.037C0.0999999 13.772 0.203 14.384 0.438 14.95L1.824 14.376C1.677 14.024 1.591 13.594 1.546 12.935C1.5 12.269 1.5 11.425 1.5 10.25H0ZM6.553 16.992C5.297 16.97 4.639 16.89 4.123 16.676L3.55 18.062C4.355 18.396 5.271 18.471 6.527 18.493L6.553 16.992ZM0.438 14.95C0.726965 15.6477 1.15052 16.2816 1.68448 16.8155C2.21844 17.3495 2.85234 17.773 3.55 18.062L4.123 16.676C3.08168 16.2447 2.25535 15.4173 1.824 14.376L0.438 14.95ZM20 10.25C20 11.425 20 12.269 19.954 12.935C19.909 13.594 19.823 14.024 19.677 14.376L21.062 14.95C21.297 14.384 21.4 13.772 21.451 13.037C21.501 12.308 21.5 11.405 21.5 10.25H20ZM14.973 18.491C16.229 18.47 17.145 18.396 17.95 18.062L17.376 16.676C16.861 16.89 16.203 16.97 14.948 16.992L14.973 18.491ZM19.677 14.376C19.2457 15.4173 18.4183 16.2447 17.377 16.676L17.95 18.062C18.6477 17.773 19.2816 17.3495 19.8155 16.8155C20.3495 16.2816 20.773 15.6477 21.062 14.95L19.677 14.376ZM12.25 1.5C13.901 1.5 15.087 1.5 16.012 1.589C16.926 1.676 17.507 1.842 17.971 2.126L18.754 0.847C18.015 0.395 17.177 0.193 16.154 0.0950004C15.142 -0.000999555 13.872 4.16459e-07 12.25 4.16459e-07V1.5ZM21.5 9.25C21.5 7.628 21.5 6.359 21.404 5.346C21.307 4.323 21.105 3.484 20.653 2.746L19.373 3.529C19.658 3.993 19.824 4.574 19.911 5.489C19.999 6.413 20 7.599 20 9.25H21.5ZM17.97 2.126C18.5422 2.4763 19.0233 2.95707 19.374 3.529L20.653 2.746C20.1788 1.97198 19.528 1.32123 18.754 0.847L17.97 2.126ZM9.25 4.16459e-07C7.628 4.16459e-07 6.359 4.47035e-07 5.346 0.0950004C4.323 0.193 3.484 0.395 2.746 0.847L3.529 2.127C3.993 1.842 4.574 1.676 5.489 1.589C6.413 1.501 7.599 1.5 9.25 1.5V4.16459e-07ZM1.5 9.25C1.5 7.599 1.5 6.413 1.589 5.488C1.676 4.574 1.842 3.993 2.126 3.529L0.847 2.747C0.395 3.485 0.193 4.323 0.095 5.346C2.98023e-08 6.36 0 7.628 0 9.25H1.5ZM2.746 0.847C1.97198 1.32123 1.32123 1.97298 0.847 2.747L2.127 3.529C2.47714 2.9573 2.95755 2.47655 3.529 2.126L2.746 0.847ZM9.766 18.84C9.564 18.497 9.386 18.194 9.212 17.956C9.03372 17.6944 8.80109 17.4744 8.53 17.311L7.776 18.608C7.823 18.636 7.888 18.686 8 18.84C8.121 19.006 8.258 19.236 8.476 19.604L9.766 18.84ZM6.527 18.491C6.967 18.499 7.244 18.505 7.456 18.528C7.654 18.55 7.731 18.582 7.776 18.608L8.53 17.311C8.25055 17.1546 7.94033 17.0611 7.621 17.037C7.323 17.004 6.965 16.999 6.553 16.992L6.527 18.491ZM13.024 19.604C13.242 19.237 13.379 19.006 13.5 18.84C13.612 18.686 13.677 18.636 13.724 18.608L12.97 17.311C12.68 17.481 12.47 17.706 12.288 17.956C12.115 18.194 11.936 18.496 11.733 18.84L13.024 19.604ZM14.948 16.992C14.536 16.999 14.177 17.004 13.879 17.037C13.568 17.072 13.263 17.141 12.97 17.311L13.724 18.608C13.769 18.582 13.846 18.55 14.044 18.528C14.256 18.505 14.534 18.498 14.974 18.491L14.948 16.992Z"
              fill="#555555"
            />
            <path
              d="M6.75 9.75H6.759M10.741 9.75H10.75M14.741 9.75H14.75"
              stroke="#555555"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="grid w-full  items-center gap-1.5 mb-5">
        <Label
          htmlFor="subject"
          className="font-semibold lg:text-[16px] xl:text-[20px] xl:mb-2"
        >
          Phone Number
        </Label>
        {/* <Input
          type="text"
          id="subject"
          placeholder="Enter Phone Number"
          className="h-12"
        /> */}
        <PhoneInput
          buttonStyle={{
            width: "4rem",
            paddingLeft: "0.5rem",
            justifyContent: "center",
            backgroundColor: "#ffffff",
          }}
          inputStyle={{
            paddingLeft: "5rem",
            height: "3rem",
            width: "100%",
          }}
          inputProps={{
            id: "custom-phone-input",
          }}
          country={"us"}
          value={formData?.phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>

      <Button className="w-full h-12 xl:h-[65px] xl:text-[22px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-[linear-gradient(to_bottom,_#270AAD,_#583FCB)]">
        SUBMIT
      </Button>
    </form>
  );
};

export default Form;
