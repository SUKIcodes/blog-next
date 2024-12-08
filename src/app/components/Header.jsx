"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  return (
    <Navbar className="border-b-2">
      <Link
        href={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-lg font-bold "
      >
        <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white">
          Next
        </span>
        <span>Blog</span>
      </Link>
      <form>
        <TextInput
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden md:inline"
        />
        <Button pill className="md:hidden w-12 h-10 items-center ">
          <AiOutlineSearch />
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 rounded-lg hidden sm:inline"
          pill
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
        <SignedIn>
          <UserButton
            appearance={{ baseTheme: theme === "light" ? light : dark }}
          />
        </SignedIn>
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        </SignedOut>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href={"/"}>
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link href={"/about"}>
          <Navbar.Link active={path === "/about"} as={"div"}>
            About
          </Navbar.Link>
        </Link>
        <Link href={"/projects"}>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
