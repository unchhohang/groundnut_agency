'use client'
import { TextAaIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { ReactElement } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const requiredString = z.string().trim().min(1, "required!!!");

const validationSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: z.email('Oops! Invalid mail').trim(),
  about: z.string().trim().min(1, "Tell us more about yourself so that we can help you...")
});

type Inputs = z.infer<typeof validationSchema>

export default function CTAPage() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validationSchema)
  })


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await axios.post('/api/send', data)
      .then(() => router.push('/cta/ThankYou'))

  }

  console.log(isSubmitting);


  return (
    <div className="relative h-screen flex flex-col ">
      <div className="max-h-20vh relative bg-[url(/assets/cta_bg.jpeg)] bg-cover">
        <div className="   mt-15 mb-10">
          <div className=" font-medium text-6xl text-center tracking-tighter leading-20
        text-white">Book a <span className="font-instru italic text-white text-6xl font-medium text-center tracking-tight">call.</span>
          </div>
          <div className="flex justify-center my-4">
            <div className=" text-center max-w-[80%] tablet:max-w-[50%]">
              Ready to take the next step? Let’s schedule a call to discuss how we can help your business grow and succeed online.
            </div>
          </div>
        </div>
      </div>

      <form className="my-5 mx-5 grid grid-cols-2 gap-4 }" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-2 tablet:col-span-1">
          <div className="text-body-xxs text-white mb-1 ">First Name</div>
          <input
            className="w-full border border-[#141414] border-opacity-50 rounded-lg p-1 px-2 text-sm"
            placeholder="Henry"
            {...register("firstName")}
          />
          <div>{errors.firstName?.message}</div>
        </div>
        <div className="col-span-2 tablet:col-span-1">
          <div className="text-body-xxs text-white mb-1 ">Last Name</div>
          <input
            className="w-full border border-[#141414] border-opacity-50 rounded-lg p-1 px-2 text-sm"
            placeholder=" Smith"
            {...register("lastName")}
          />
          <div>{errors.lastName?.message}</div>
        </div>
        <div className="col-span-2">
          <div className="text-body-xxs text-white mb-1">Email</div>
          <input
            className="w-full border border-[#141414] border-opacity-50 rounded-lg p-1 px-2 text-sm"
            placeholder="Henry@gmail.com"
            {...register("email")}
          />
          <div>{errors.email?.message}</div>
        </div>
        <div className="col-span-2">
          <div className="text-body-xxs text-white mb-1">
            Tell us about your business?
          </div>
          <textarea
            className="w-full border border-[#141414] border-opacity-50 rounded-lg p-1 px-2 text-sm h-30"
            placeholder="What does your business sell or offer? "
            {...register("about")}
          />
          <div>{errors.about?.message}</div>
        </div>


        <div className=" col-span-2 flex justify-center w-full">
          <button
            className={
              `bg-cta   rounded-full text-center  px-6 py-4 text-white 
        text-lg }
        hover:shadow-[0_0_0_5px_rgba(98,20,217,0.33)]
        tablet:px-6 tablet:py-4
        ${isSubmitting ? 'cursor-progress opacity-70' : 'cursor-pointer'}
      `}
            type="submit"
            disabled={isSubmitting}
          >


            Book a call
          </button>
        </div>
      </form>
      <footer className="flex justify-center items-end text-body-sm cursor-pointer my-10">
        <div><Link href={'/'}>Home</Link></div>
      </footer>
    </div>
  );
}


