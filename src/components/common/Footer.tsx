import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Generate Video", href: "/generate" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export default function Footer() {
    return (
        <div className="">
            {/* Main Contact Section */}
            <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-3xl font-semibold leading-tight md:block hidden">
                            Do you have <br />any questions?
                        </h1>
                        <h1 className="text-3xl font-semibold leading-tight md:hidden">
                            Do you have any questions?
                        </h1>
                        <p className="mt-4 text-base text-gray-400">
                            Feel free to send us your questions or request a free consultation.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Type your message"
                            className="h-32 resize-none bg-transparent text-white placeholder:text-gray-400"
                        />
                        <div className="flex gap-4">
                            <Input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-transparent text-white placeholder:text-gray-400"
                            />
                            <Button className="bg-[#8b20e9] text-white hover:bg-[#8b20e9]/90">Get Started</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-4">
                        {/* Navigation */}
                        <div className="space-y-6">
                            <nav className="flex flex-col space-y-4">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.href} className="text-gray-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">SIGN UP</h3>
                                <p className="mt-2">+000 0000 0000</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">EMAIL</h3>
                                <p className="mt-2">youremail@mail.com</p>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">OPENING HOURS</h3>
                            <p className="mt-2">24/7</p>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center justify-end">
                            <Link to="/" className="text-2xl font-bold text-[#8b20e9]">
                                Arto <span className="text-white">NFTs</span>
                            </Link>
                        </div>
                    </div>

                    {/* Disclaimer & Copyright */}
                    <div className="mt-12 border-t border-gray-800 pt-8">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <Accordion type="single" collapsible className="w-full lg:w-auto">
                                <AccordionItem value="disclaimer" className="border-none">
                                    <AccordionTrigger className="hover:no-underline">Disclaimer</AccordionTrigger>
                                    <AccordionContent>
                                        This is the disclaimer content. Add your terms and conditions here.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <p className="text-gray-400">© 2025 — Copyright</p>
                        </div>
                    </div>

                    {/* Scroll to top button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="fixed bottom-8 right-8 rounded-full bg-[#8b20e9] text-white hover:bg-[#8b20e9]/90"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </Button>
                </div>
            </footer>
        </div>
    )
}

