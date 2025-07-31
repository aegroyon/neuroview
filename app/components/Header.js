'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/development', label: 'Development' },
    { href: '/collection', label: 'Collection' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-white/20 rounded border border-white/30"></div>
            
            {/* Navigation links */}
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Try NeuroView button */}
          <Link href="/input" className="border border-white/30 text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
            Try NeuroView
          </Link>
        </div>
      </div>
    </header>
  );
}