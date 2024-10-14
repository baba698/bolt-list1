import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 RSS News. All rights reserved.</p>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}