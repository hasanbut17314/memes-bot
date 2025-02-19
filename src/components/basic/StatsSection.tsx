export default function StatsSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Years Experience */}
                    <div className="text-center">
                        <div className="text-[#a876ff] text-4xl md:text-6xl font-light mb-2">20</div>
                        <div className="text-gray-400 text-sm md:text-base">Year Experience</div>
                    </div>

                    {/* Owned */}
                    <div className="text-center">
                        <div className="text-[#a876ff] text-4xl md:text-6xl font-light mb-2">296</div>
                        <div className="text-gray-400 text-sm md:text-base">Owned</div>
                    </div>

                    {/* Digital Art */}
                    <div className="text-center">
                        <div className="text-[#a876ff] text-4xl md:text-6xl font-light mb-2">16M</div>
                        <div className="text-gray-400 text-sm md:text-base">Digital Art</div>
                    </div>

                    {/* Projects Completed */}
                    <div className="text-center">
                        <div className="text-[#a876ff] text-4xl md:text-6xl font-light mb-2">106</div>
                        <div className="text-gray-400 text-sm md:text-base">Project Completed</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

