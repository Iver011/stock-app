import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          ></Image>
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Signalist turned my watchlist into winning list.
          </blockquote>
          <div>
            <cite className="auth-testimonial-author">- Ethan R.</cite>
            <p className="max-md:text-xs text-gray-500">
              Ive been using Signalist for a few months now and its been a
              game-changer for me. Its helped me stay on top of my investments
              and make more informed decisions.
            </p>
          </div>

          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Image
                src="/assets/icons/star.svg"
                alt="Star"
                key={star}
                width={20}
                height={20}
                className="w-5 h-5"
              ></Image>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0 "
          ></Image>
        </div>
      </section>
    </main>
  );
};
export default Layout;
