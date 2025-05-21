import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { LinkIcon, LogOut } from 'lucide-react';
import useFetch from '../hooks/use-fetch';
import { logout } from '../db/apiAuth';
import { UrlState } from '../context/UrlContext';
import { BarLoader } from 'react-spinners';

const Header = () => {
  const { loading, fn: fnLogout } = useFetch(logout);

  const { user, fetchUser } = UrlState();

  const navigate = useNavigate();


  return (
    <>
      <nav className="w-full border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="TrimMR Logo" className="h-16 " />
          </Link>

          <div>
            {!user ? (
              <Button
                onClick={() => navigate("/auth")}
                className="bg-gradient-to-r cursor-pointer from-cyan-500 via-blue-600 to-indigo-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Login
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none rounded-full focus:ring-2 focus:ring-white">
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={user?.user_metadata?.profile_pic} />
                    <AvatarFallback>PN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 mt-2 bg-white shadow-lg border rounded-md">
                  <DropdownMenuLabel className="text-sm font-medium text-gray-700">
                    {user?.user_metadata?.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => navigate("/dashboard")}
                    className="text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    My Links
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      fnLogout().then(() => {
                        fetchUser();
                        navigate("/auth");
                      });
                    }}
                    className="text-sm text-red-500 hover:bg-red-50 cursor-pointer flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </nav>
      {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
    </>
  );
};

export default Header;
