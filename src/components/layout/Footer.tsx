import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer mt-16">
      <div className="container-x py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <span className="inline-block h-8 w-8 rounded-xl animate-gradient-x" />
              <span>Lokākṣema 2026</span>
            </div>
            <p className="mt-3 text-sm opacity-80">One Earth • One Family • One Future</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Summit</p>
            <ul className="space-y-2 opacity-90">
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/sponsors">Partners</Link></li>
              <li><Link href="/what-to-expect">What to Expect</Link></li>
              <li><Link href="/stats">Stats</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Company</p>
            <ul className="space-y-2 opacity-90">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Legal</p>
            <ul className="space-y-2 opacity-90">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/code-of-conduct">Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Lokākṣema Summit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
