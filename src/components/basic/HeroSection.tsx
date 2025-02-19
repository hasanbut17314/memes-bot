import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface NFTItem {
    id: number
    image: string
    name: string
    currentBid: {
        eth: number
        usd: number
    }
    timeLeft: {
        hours: number
        minutes: number
        seconds: number
    }
}

const nftItems: NFTItem[] = [
    {
        id: 1,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        name: "Space Pug",
        currentBid: { eth: 8.25, usd: 10646.25 },
        timeLeft: { hours: 4, minutes: 25, seconds: 20 },
    },
    {
        id: 2,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        name: "Money Penguin",
        currentBid: { eth: 12.5, usd: 16125.75 },
        timeLeft: { hours: 2, minutes: 15, seconds: 45 },
    },
    {
        id: 3,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        name: "Bored Ape",
        currentBid: { eth: 15.75, usd: 20325.5 },
        timeLeft: { hours: 6, minutes: 30, seconds: 0 },
    },
    {
        id: 4,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        name: "Cool Penguin",
        currentBid: { eth: 5.5, usd: 7097.5 },
        timeLeft: { hours: 1, minutes: 45, seconds: 30 },
    },
    {
        id: 5,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        name: "Bitcoin Bird",
        currentBid: { eth: 9.99, usd: 12897.08 },
        timeLeft: { hours: 3, minutes: 20, seconds: 15 },
    },
    {
        id: 6,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`,
        name: "Rich Penguin",
        currentBid: { eth: 7.35, usd: 9486.75 },
        timeLeft: { hours: 5, minutes: 55, seconds: 40 },
    },
]

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = React.useState(2)
    const [timeLeft, setTimeLeft] = React.useState(nftItems[activeIndex].timeLeft)

    React.useEffect(() => {
        setTimeLeft(nftItems[activeIndex].timeLeft)
    }, [activeIndex])

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Stats and Badge */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <div className="h-3 w-3 rounded-full bg-[#bcc5d0]" />
                            <div className="h-3 w-3 rounded-full bg-[#bcc5d0]" />
                            <div className="h-3 w-3 rounded-full bg-[#bcc5d0]" />
                        </div>
                        <span className="sm:text-2xl text-lg font-bold">125M+</span>
                        <span className="text-sm text-[#a876ff]">Tech</span>
                    </div>
                    <Badge className="bg-[#542fb6] text-white">Infinite Possibilities</Badge>
                    <div className="text-right">
                        <span className="sm:text-2xl text-lg font-bold">60M+</span>
                        <span className="ml-2">Artworks</span>
                    </div>
                </div>

                {/* Heading */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Master Meme Coin Trading with
                        <br />
                        Solana's Smartest Copy Bot
                    </h1>
                    <p className="mx-auto max-w-3xl text-sm text-[#bcc5d0] sm:text-base">
                        NFTs revolutionize digital art by granting true ownership, seamlessly bridging the gap between virtual
                        creativity and real-world value in art and collectibles.
                    </p>
                </div>

                {/* Carousel */}
                <div className="mb-16 overflow-hidden">
                    <Swiper
                        initialSlide={2}
                        centeredSlides={true}
                        slidesPerView={1.5}
                        spaceBetween={14}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3.5,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        className="!overflow-visible !px-10 !z-20"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {nftItems.map((item, index) => (
                            <SwiperSlide key={item.id} className="!h-auto">
                                <div
                                    className={cn(
                                        "transition-all duration-300",
                                        index === activeIndex ? "scale-100" : index === activeIndex + 1 || index === activeIndex - 1 ? "translate-y-10 scale-75 opacity-50" : "scale-50 opacity-50 translate-y-20",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "relative aspect-[3/4] overflow-hidden rounded-3xl border-4",
                                            index === activeIndex ? "border-8 border-[#542fb6]" : "border-[#35323d]",
                                        )}
                                    >
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev !text-white after:!text-2xl"></div>
                        <div className="swiper-button-next !text-white after:!text-2xl"></div>
                    </Swiper>
                </div>

                {/* Bid Info */}
                <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl bg-[#542fb6]/30 p-4 sm:flex-row sm:p-6 relative z-10 bidInfo">
                    <div>
                        <h3 className="text-center text-sm font-medium text-[#bcc5d0] sm:text-left">Current Bid</h3>
                        <div className="mt-1 text-center sm:text-left">
                            <span className="text-2xl font-bold sm:text-3xl">{nftItems[activeIndex].currentBid.eth} ETH</span>
                            <span className="ml-2 text-sm text-[#bcc5d0]">
                                ${nftItems[activeIndex].currentBid.usd.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center text-sm font-medium text-[#bcc5d0] sm:text-left">Remaining Time</h3>
                        <div className="mt-1 flex gap-2">
                            <div className="rounded bg-[#542fb6] px-2 py-1 sm:px-3">
                                <span className="text-lg font-bold sm:text-xl">{String(timeLeft.hours).padStart(2, "0")}</span>
                                <span className="ml-1 text-xs">Hours</span>
                            </div>
                            <div className="rounded bg-[#542fb6] px-2 py-1 sm:px-3">
                                <span className="text-lg font-bold sm:text-xl">{String(timeLeft.minutes).padStart(2, "0")}</span>
                                <span className="ml-1 text-xs">Minutes</span>
                            </div>
                            <div className="rounded bg-[#542fb6] px-2 py-1 sm:px-3">
                                <span className="text-lg font-bold sm:text-xl">{String(timeLeft.seconds).padStart(2, "0")}</span>
                                <span className="ml-1 text-xs">Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

