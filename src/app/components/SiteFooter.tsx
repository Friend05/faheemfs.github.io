import { profile } from '../data/portfolio';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-zinc-200 text-xs text-zinc-500">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p>
          © {currentYear} {profile.name}. {profile.roleTitle}.
        </p>
        <a
          href="#top"
          className="text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
