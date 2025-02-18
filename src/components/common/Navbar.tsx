import * as React from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "NFTs", href: "/nfts" },
    { name: "Contact", href: "/contact" },
]

export default function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="relative z-50 w-full">
            <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Mobile menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="lg:hidden" size="icon">
                            <Menu className="h-14 w-14 text-white" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-black">
                        <SheetTitle className="text-xl font-semibold text-primary p-3">
                            GovernX
                        </SheetTitle>
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-base font-medium text-white px-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col mt-6 px-4 gap-4">
                            <Button
                                variant="outline"
                                className="inline-flex border-primary text-primary hover:bg-primary hover:text-white transition-colors bg-transparent rounded-full"
                                asChild
                            >
                                <Link to="/signin">Sign in</Link>
                            </Button>
                            <Button
                                className="inline-flex bg-primary text-white hover:bg-primary/90 transition-colors rounded-full"
                                asChild
                            >
                                <Link to="/register">Register here</Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-medium text-white hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div>
                    <h3 className="sm:text-2xl text-xl font-semibold text-primary">GovernX</h3>
                </div>

                {/* Auth buttons */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        className="hidden lg:inline-flex border-primary text-primary hover:bg-primary hover:text-white transition-colors bg-transparent rounded-full"
                        asChild
                    >
                        <Link to="/signin">Sign in</Link>
                    </Button>
                    <Button
                        className="hidden lg:inline-flex bg-primary text-white hover:bg-primary/90 transition-colors rounded-full"
                        asChild
                    >
                        <Link to="/register">Register here</Link>
                    </Button>
                </div>
            </nav>
        </header>
    )
}

