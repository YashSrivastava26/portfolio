"use client";
import { slideInFromLeft, slideInFromRight } from "@/lib/animation";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import EarthCanvas from "./Models3D/EarthCanvas";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { HiOutlineLightBulb } from "react-icons/hi";
interface ContactProps {}

//template_portfolio

const Contact: FC<ContactProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formInputValidation = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    subject: z.string(),
    message: z.string().min(10),
  });

  type formInputType = z.infer<typeof formInputValidation>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInputType>({
    resolver: zodResolver(formInputValidation),
  });

  const sendEmail = (data: formInputType) => {
    setIsLoading(true);
    try {
      emailjs
        .send(
          "Yash_portfolio",
          "template_portfolio",
          {
            from_name: data.name,
            to_name: "Yash",
            subject: data.subject,
            from_email: data.email,
            to_email: "yashsrivastava26032002@gmail.com",
            message: data.message,
          },
          "VG1_i4jiJgAjy7fWN"
        )
        .then((res) => {
          console.log(res, "sent");
        });
    } catch (error) {
      console.log(error, "error");
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse w-full gap-10 overflow-hidden pt-20 md:flex-row px-4  items-center justify-center md:justify-evenly z-40 min-h-screen"
      id="contact"
    >
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="md:w-[40%] bg-muted/30 rounded-2xl p-8 h-fit max-w-xl"
      >
        <div className="hero-box py-2 pr-3 pl-2 border border-[#7042f88b] opacity-[0.9]">
          <HiOutlineLightBulb className="text-[#b49bff] h-4 w-4 mr-2 md:h-5 md:w-5" />
          <h1 className="hero-text text-xs md:text-sm">Got an Idea</h1>
        </div>
        <h3 className="text-primary/90 font-semibold text-2xl my-4">
          Drop me a Line (or Two)
        </h3>
        <form onSubmit={handleSubmit(sendEmail)}>
          <div className="flex items-center justify-between gap-x-4">
            <label className="flex flex-col w-full mb-4">
              <span className="text-muted-foreground font-medium mb-1">
                Name
              </span>
              <Input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-card/70 backdrop-blur-lg"
              />
            </label>
            <label className="flex flex-col w-full mb-4">
              <span className="text-muted-foreground font-medium mb-1">
                Email
              </span>
              <Input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-card/70 backdrop-blur-lg"
              />
            </label>
          </div>
          <label className="flex flex-col mb-4">
            <span className="text-muted-foreground font-medium mb-1">
              Subject
            </span>
            <Input
              {...register("subject")}
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-card/70 backdrop-blur-lg"
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="text-muted-foreground font-medium mb-1">
              Message
            </span>
            <Textarea
              {...register("message")}
              placeholder="Enter your Message"
              rows={4}
              minRows={4}
              maxRows={7}
              className="bg-card/70 resize-none text-base pr-12 py-3 scrollbar-thumb-primary scrollbar-thumb-rounded scrollbar-track-secondary scrollbar-w-2 scrolling-touch"
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
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.2)}
        className="md:w-[45%] md:h-[65vh] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
