import React from "react"; 
import { Search, ShoppingCart, User, Bell, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-4 py-2 rounded-lg">
              <h1 className="text-xl font-bold text-white">cutiepao</h1>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands, and more..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Location</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
