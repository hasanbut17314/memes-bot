import { Rocket, Box, CircleDollarSign, Expand, Coins } from "lucide-react"
import bg from '/bg.png'

export default function Roadmap() {
    const roadmapItems = [
        {
            icon: Rocket,
            title: "Launch & Community Building",
            description:
                "The roadmap for our meme token is designed to ensure steady growth, strong community engagement, and long-term sustainability. We begin by launching the project with a strong focus on community building.",
            position: "top",
        },
        {
            icon: Box,
            title: "Token Launch & Liquidity",
            description:
                "Once the community is established, we move to the token launch phase. The token will be listed on decentralized exchanges (DEX), with liquidity provided and locked to ensure trust and stability.",
            position: "top",
        },
        {
            icon: CircleDollarSign,
            title: "Ecosystem Growth",
            description:
                "As the ecosystem grows, we will expand our offerings by integrating NFTs, partnerships with popular influencers and meme pages, and interactive engagement programs to keep the community excited.",
            position: "top",
        },
        {
            icon: Expand,
            title: "Expansion & Utility",
            description:
                "To further enhance the token's utility, we will develop additional features such as meme-based mini-games, governance mechanisms, and potential exchange listings on centralized platforms (CEX).",
            position: "bottom",
        },
        {
            icon: Coins,
            title: "Sustainability & Future Plans",
            description:
                "Finally, we will ensure sustainability by consistently rolling out updates and extending our roadmap based on community feedback. This includes charity initiatives, community-driven projects, and possible cross-chain expansion to reach a wider audience.",
            position: "bottom",
        },
    ]

    return (
        <section className="py-16 md:py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto md:px-2 px-4">
                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-white text-6xl md:text-7xl font-light">Roadmap</h2>
                    <h3 className="text-2xl md:text-3xl text-white font-light">
                        Our{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                            Copy Trading Bot
                        </span>{" "}
                        Roadmap
                    </h3>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Horizontal Timeline Line */}
                    <div className="absolute left-0 right-0 top-[50%] h-[6px] bg-gray-400 hidden md:block w-full">
                        <div className="absolute left-0 size-10 bg-gray-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute right-0 size-10 bg-gray-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    {/* Cards Container */}
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {roadmapItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    className={`
                    relative bg-white/15 rounded-lg p-5 space-y-4 border border-gray-300
                    ${index === 0 ? "md:-translate-y-5" : ""}
                    ${index === 1 ? "md:-translate-y-5" : ""}
                    ${index === 2 ? "md:-translate-y-5" : ""}
                    ${index === 3 ? "md:translate-y-12 md:translate-x-1/2" : ""}
                    ${index === 4 ? "md:translate-y-12 md:translate-x-1/2" : ""}
                  `}
                                >
                                    {/* Vertical Connection Line */}
                                    <div
                                        className={`absolute left-1/2 h-14 w-[2px] bg-gray-300 hidden md:block
                    ${item.position === 'top' ? 'bottom-0 translate-y-[132%]' : 'top-0 -translate-y-full'}`}
                                    ></div>

                                    <div className="flex justify-center">
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-center">{item.title}</h4>
                                    <p className="text-sm text-center leading-relaxed">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='absolute top-0 right-0 scale-[-1] z-[-1] -translate-y-1/3'>
                <img src={bg} alt="background" className="opacity-60" />
            </div>
            <div className='absolute bottom-0 left-0 z-[-1] translate-y-1/3'>
                <img src={bg} alt="background" className="opacity-50" />
            </div>
        </section>
    )
}

