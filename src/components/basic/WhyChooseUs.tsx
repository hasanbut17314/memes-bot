export default function WhyChooseUs() {
    return (
        <section className="text-white px-4 pb-16 pt-9">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="space-y-4 mb-16">
                    <h2 className="text-purple-500 text-xl font-medium">why choose us</h2>
                    <h3 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl">
                        Innovating Together for Unforgettable Results
                    </h3>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Feature 1 */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold">Exclusive Creations</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Our NFTs offer one-of-a-kind digital art pieces that you won't find anywhere else.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold">Ownership on the Blockchain</h4>
                        <p className="text-gray-300 leading-relaxed">
                            When you purchase our NFTs, you gain indisputable ownership rights secured by blockchain technology.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold">Support Emerging Artists</h4>
                        <p className="text-gray-300 leading-relaxed">
                            By choosing our NFTs, you're supporting a vibrant community of emerging artists who are pushing the
                            boundaries of creativity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

