import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  User,
  Home,
  ChevronDown,
  CreditCard,
  Settings,
  Keyboard,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavBar = () => {
  return (
    <nav className="px-4 bg-black md:px-10 max-container padding-container relative z-30 py-5 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/">
          <Image
            src="/next.svg"
            className="dark:invert"
            alt="logo"
            width={74}
            height={29}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center md:ml-4">
        <div className="mb-4 md:mb-0 md:ml-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-black">
                <ChevronDown className="mr-2 h-4 w-4" />
                Partner with us
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-full md:w-46 ml-0 md:ml-5">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/">
                    <span>Riders</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Partners</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Careers</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Deliverdoo for Work</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-4 md:mb-0 md:ml-4">
          <Button className="bg-white text-black">
            <Home className="mr-2 h-4 w-4" /> Sign up or login
          </Button>
        </div>

        <div className="mb-4 md:mb-0 md:ml-4">
          <Button className="bg-white text-black">
            <User className="mr-2 h-4 w-4" /> Account
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
