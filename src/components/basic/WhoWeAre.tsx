import robot from '/robot.png';
import bg from '/bg.png'

export default function WhoWeAre() {
    return (
        <div className='relative'>
            <section className="flex flex-col lg:flex-row items-center text-white overflow-hidden max-w-7xl mx-auto py-16 lg:py-24 px-4 lg:px-0 lg:gap-8 gap-6">
                {/* Image container */}
                <div className="w-full lg:w-1/2 relative">
                    <img
                        src={robot}
                        alt="AI robot head with glowing accents"
                        className="w-auto lg:h-[350px] h-64 rounded-md lg:ms-auto"
                    />
                </div>

                {/* Content container */}
                <div className="w-full lg:w-1/2 p-4 lg:p-8 space-y-6">
                    <h2 className="text-purple-500 text-xl font-medium">Who we are</h2>

                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                        Revolutionizing Governance with Incentivized Innovation and Rewards!
                    </h1>

                    <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                        Introducing the world's first governance protocol that merges token rewards with effortless ICO participation.
                        Buy, sell, and govern with ease—empowering investors while earning incentives every step of the way!
                    </p>

                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-7 rounded-full transition-colors duration-200">
                        PURCHASE TOKEN
                    </button>
                </div>
            </section>
            <div className='absolute top-0 right-0 scale-[-1] z-[-1] -translate-y-1/3'>
                <img src={bg} alt="background" />
            </div>
        </div>
    )
}

