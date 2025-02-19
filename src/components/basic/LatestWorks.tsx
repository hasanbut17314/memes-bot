export default function LatestWorks() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-white text-4xl md:text-5xl font-light text-center mb-12">Our Latest Works</h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Featured Card */}
                    <div className="bg-[#6B5B95] rounded-xl p-8 flex flex-col justify-between lg:col-span-9 col-span-12 min-h-[230px]">
                        <h3 className="text-white text-4xl font-light">Dragonic</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">Curret Bid</p>
                            <div className="space-y-1">
                                <p className="text-white text-3xl font-medium">8.25 ETH</p>
                                <p className="text-gray-300">$10,646.25</p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder Card 1 */}
                    <div className="bg-gray-200 rounded-xl lg:col-span-3 col-span-12 min-h-[230px]"></div>

                    {/* Placeholder Card 2 */}
                    <div className="bg-gray-200 rounded-xl lg:col-span-3 col-span-12 min-h-[230px]"></div>

                    {/* Placeholder Card 3 */}
                    <div className="bg-gray-200 rounded-xl lg:col-span-9 col-span-12 min-h-[230px]"></div>
                </div>
            </div>
        </section>
    )
}

