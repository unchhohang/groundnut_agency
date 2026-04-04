'use client'
import { TFaq } from "@/app/types";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { useState } from "react"

type props = { faqs: TFaq[] }

export default function Accordion({ faqs }: props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col p-5  ">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-white/10  m-2 p-2 rounded-lg">

          {/* trigger */}
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left text-white"
          >
            <span className="font-medium text-sm">{faq.head}</span>
            {
              open === i ?
                <MinusIcon className="m-1" /> :
                <PlusIcon className="m-1" />
            }
          </button>

          {/* body */}
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}>
            <p className="pb-5 text-white/60 text-sm font-light">{faq.body}</p>
          </div>

        </div>
      ))}
    </div>
  )
}
