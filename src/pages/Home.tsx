import HeroSection from "@/components/basic/HeroSection"
import LiveAuctions from "@/components/basic/LiveAuctions"
import WhoWeAre from "@/components/basic/WhoWeAre"
import WhyChooseUs from "@/components/basic/WhyChooseUs"
import StatsSection from "@/components/basic/StatsSection"
import LatestWorks from "@/components/basic/LatestWorks"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <LiveAuctions />
            <WhoWeAre />
            <WhyChooseUs />
            <StatsSection />
            <LatestWorks />
        </div>
    )
}

export default Home