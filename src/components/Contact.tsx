"use client";
import { slideInFromLeft, slideInFromRight } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Caveat } from "next/font/google";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { HiOutlineLightBulb } from "react-icons/hi";
import z from "zod";
import EarthCanvas from "./Models3D/EarthCanvas";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
interface ContactProps {}

const caveat = Caveat({
  subsets: ["latin"],
});
//template_portfolio

const Contact: FC<ContactProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formInputValidation = z.object({
    name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    subject: z.string(),
    message: z.string().min(10),
  });

  type formInputType = z.infer<typeof formInputValidation>;

  const {
    register,
    handleSubmit,
    formState: { errors: formError },
    watch,
  } = useForm<formInputType>({
    resolver: zodResolver(formInputValidation),
    defaultValues: {
      name: undefined,
      email: undefined,
      subject: "",
      message: undefined,
    },
  });

  const sendEmail = async (data: formInputType) => {
    setIsLoading(true);
    const toasterId = toast.loading("Sending Email", {
      className:
        "!hero-box !border !border-[#7042f88b] !opacity-[0.9] !bg-transparent !rounded-xl !text-[#b49bff] !backdrop-blur-md",
      icon: <Loader2 className="h-4 w-4 animate-spin ml-2" />,
    });
    try {
      const res = await axios.post("/api/sendEmail", data);
      toast.success("Email has been Sent", {
        duration: 4000,
        icon: undefined,
        id: toasterId,
        className:
          "!text-green-400/70 !border-green-400/70 !hero-box !border !opacity-[0.9] !bg-transparent !rounded-xl !shadow-green-400/40 !backdrop-blur-md !shadow-[inset_0_-7px_11px]",
      });
      setIsLoading(false);
    } catch (error) {
      toast.error("Somtehing went wrong, Please try again later", {
        icon: undefined,
        id: toasterId,
        className:
          "!text-red-400/70 !border-red-400/70 !hero-box !border !opacity-[0.9] !bg-transparent !rounded-xl !shadow-red-400/40 !backdrop-blur-md !shadow-[inset_0_-7px_11px]",
      });
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse w-full gap-10 overflow-hidden pt-20 lg:flex-row px-6  items-center justify-center lg:justify-evenly z-30 min-h-screen"
      id="contact"
    >
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="lg:w-[40%] bg-muted/30 rounded-2xl p-8 h-fit max-w-xl min-w-[60%] lg:min-w-fit"
      >
        <div className="hero-box py-2 pr-3 pl-2 border border-[#7042f88b] opacity-[0.9]">
          <HiOutlineLightBulb className="text-[#b49bff] h-4 w-4 mr-2 lg:h-5 lg:w-5" />
          <h1 className="hero-text text-xs lg:text-sm">Got an Idea</h1>
        </div>
        <h3
          className={cn(
            "text-primary/90 font-bold text-3xl lg:text-4xl my-4",
            caveat.className
          )}
        >
          Drop me a Line (or Two)
        </h3>
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="text-sm lg:text-base placeholder:text-sm placeholder:lg:text-base"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-x-4">
            <label className="flex flex-col w-full mb-3 2xl:mb-4">
              <span className="text-muted-foreground font-medium mb-1">
                Name
              </span>
              <Input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Your Name"
                className={cn(
                  "bg-card/70 backdrop-blur-lg",
                  formError.name && "focus-visible:ring-red-500"
                )}
              />
            </label>
            <label className="flex flex-col w-full mb-3 2xl:mb-4">
              <span className="text-muted-foreground font-medium mb-1">
                Email
              </span>
              <Input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Your Email"
                className={cn(
                  "bg-card/70 backdrop-blur-lg",
                  formError.email && "focus-visible:ring-red-500"
                )}
              />
            </label>
          </div>
          <label className="flex flex-col mb-3 2xl:mb-4">
            <span className="text-muted-foreground font-medium mb-1">
              Subject
            </span>
            <Input
              {...register("subject")}
              type="text"
              name="subject"
              placeholder="Subject"
              className={cn(
                "bg-card/70 backdrop-blur-lg",
                formError.subject && "focus-visible:ring-red-500"
              )}
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="text-muted-foreground font-medium mb-1">
              Message
            </span>
            <Textarea
              {...register("message")}
              placeholder="Enter your Message"
              rows={3}
              minRows={3}
              maxRows={4}
              className={cn(
                "bg-card/70 resize-none text-base pr-3 lg:pr-6 py-3 scrollbar-thumb-primary scrollbar-thumb-rounded scrollbar-track-secondary scrollbar-w-2 scrolling-touch",
                formError.message && "focus-visible:ring-red-500"
              )}
            />
          </label>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <span>Sending </span>
                <Loader2
                  className="h-4
                  w-4 animate-spin ml-2"
                />
              </>
            ) : (
              "Send"
            )}
          </Button>
        </form>

        {Object.keys(formError).length > 0 && (
          <p className="text-red-500 lg:text-sm text-xs">
            {Object.values(formError)[0].message}
          </p>
        )}
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.2)}
        className="lg:w-[45%] lg:h-[65vh] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
