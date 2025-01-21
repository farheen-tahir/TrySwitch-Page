import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <form action="" className="mt-4">
      <div className="flex gap-5 mb-5">
        <div className="grid w-full max-w-sm items-center gap-1.5">
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
        </div>
      </div>

      <div className="grid w-full  items-center gap-1.5 mb-5">
        <Label htmlFor="subject" className="font-semibold ">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          placeholder="Enter subject of your message"
          className="h-12"
        />
      </div>

      <div className="grid w-full gap-1.5 mb-5">
        <Label htmlFor="message" className="font-semibold ">
          Message
        </Label>
        <Textarea
          placeholder="Enter Your Message"
          id="message"
          className="h-24"
        />
      </div>
      <div className="grid w-full  items-center gap-1.5 mb-5">
        <Label htmlFor="subject" className="font-semibold ">
          Phone Number
        </Label>
        <Input
          type="text"
          id="subject"
          placeholder="Enter Phone Number"
          className="h-12"
        />
      </div>
      <Button className="w-full h-12">Submit</Button>
    </form>
  );
};

export default Form;
