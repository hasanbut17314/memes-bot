import { Badge } from "@/components/ui/badge"

interface AuctionItem {
    id: number
    image: string
    name: string
    bid: number
    isActive: boolean
}

const auctionItems: AuctionItem[] = [
    {
        id: 1,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/280/280`,
        name: "Abstractux #24",
        bid: 7.5,
        isActive: true,
    },
    {
        id: 2,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/280/280`,
        name: "Abstractux #24",
        bid: 7.5,
        isActive: true,
    },
    {
        id: 3,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/280/280`,
        name: "Abstractux #24",
        bid: 7.5,
        isActive: true,
    },
    {
        id: 4,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/280/280`,
        name: "Abstractux #24",
        bid: 7.5,
        isActive: true,
    },
    {
        id: 5,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/280/280`,
        name: "Abstractux #24",
        bid: 7.5,
        isActive: true,
    },
    {
        id: 6,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/280/280`,
        name: "Abstractux #24",
        bid: 7.5,
        isActive: true,
    },
]

export default function LiveAuctions() {
    return (
        <div className="py-16">
            <div className="max-w-7xl ms-auto px-4 lg:pe-6">
                <h2 className="mb-8 sm:text-4xl text-3xl font-bold text-white">Live Auctions</h2>
                <div className="no-scrollbar flex w-full gap-6 overflow-x-auto pb-6">
                    {auctionItems.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[280px] flex-none rounded-2xl transition-transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="aspect-square w-full rounded-2xl object-cover"
                                />
                                {item.isActive && (
                                    <Badge className="absolute left-4 top-4 bg-black/50 text-xs font-normal text-white backdrop-blur-sm">
                                        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#a876ff]" />
                                        Active
                                    </Badge>
                                )}
                            </div>
                            <div className="space-y-3 p-4">
                                <h3 className="text-sm text-gray-400">{item.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">Your bid</span>
                                    <span className="font-medium text-white">{item.bid} ETH</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

