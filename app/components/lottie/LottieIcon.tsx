'use client'
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface Props {
  animationData: object
  size?: number
  loop?: boolean
}

export default function LottieIcon({ animationData, size = 400, loop = true }: Props) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      style={{ width: size, height: size }}
    />
  )
}
