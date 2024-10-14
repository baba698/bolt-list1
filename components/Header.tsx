import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">RSS News</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/category/world" className="hover:text-primary">World</Link></li>
            <li><Link href="/category/business" className="hover:text-primary">Business</Link></li>
            <li><Link href="/category/technology" className="hover:text-primary">Technology</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="flex">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button type="submit" variant="ghost">Search</Button>
          </form>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}