import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { IoLogIn, IoLogOutOutline } from "react-icons/io5";

async function checkAuth() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("isAuthenticated");
  return auth?.value === "true";
}

export default async function Navbar() {
  const isAuth = await checkAuth();

  return (
    <nav className="flex items-center justify-between bg-[#f97316] px-6 py-4 text-white">
      {/* Logo */}
      <div className="flex-shrink-0 hidden lg:flex">
        <Link href="/">
          <div className="flex items-center font-medium">
            <Image
              src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/black-square-blogger-logo-icon-png-8.png"
              alt="BlogHub Logo"
              width={50}
              height={50}
              priority
              className="object-contain"
            />
            <div>BlogHub</div>
          </div>
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="hover:text-orange-200 transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-orange-200 hidden md:flex transition-colors font-medium"
        >
          About
        </Link>
        <Link
          href="/blogs"
          className="hover:text-orange-200 transition-colors font-medium"
        >
          Blogs
        </Link>
        {isAuth && (
          <Link
            href="/profile"
            className="hover:text-orange-200 transition-colors font-medium"
          >
            Profile
          </Link>
        )}
      </div>

      <div className="shrink-0 min-w-22.5 flex justify-end">
        {isAuth ? (
          <form
            action={async () => {
              "use server";
              const cookieStore = await cookies();
              cookieStore.delete("isAuthenticated");
              redirect("/login");
            }}
          >
            <button
              type="submit"
              className="flex items-center gap-2 px-5 cursor-pointer py-2 text-white rounded-md transition-colors font-medium"
            >
              <IoLogOutOutline className="text-lg" />
              Logout
            </button>
          </form>
        ) : (
          <Link href="/login" className="flex items-center gap-2">
            <IoLogIn className="text-lg" />
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
