import * as React from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "NFTs", href: "/nfts" },
    { name: "Contact", href: "/contact" },
]

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="fixed top-0 z-50 w-full border-b bg-black">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Mobile menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="lg:hidden" size="icon">
                            <Menu className="h-6 w-6 text-white" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-black">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-lg font-medium text-white hover:text-[#8b20e9]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-medium text-white hover:text-[#8b20e9] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Auth buttons */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        className="hidden lg:inline-flex border-[#8b20e9] text-[#8b20e9] hover:bg-[#8b20e9] hover:text-white transition-colors"
                        asChild
                    >
                        <Link to="/signin">Sign in</Link>
                    </Button>
                    <Button
                        className="hidden lg:inline-flex bg-[#8b20e9] text-white hover:bg-[#8b20e9]/90 transition-colors"
                        asChild
                    >
                        <Link to="/register">Register here</Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}

