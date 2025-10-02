import React from "react";
const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* ...isi footer, bisa sesuaikan dengan kebutuhan... */}
      <div className="container py-8 text-center text-muted-foreground">
        &copy; {new Date().getFullYear()} cutiepao. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
import { Search, MapPin, ShoppingCart, User, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            cutiepao
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products, brands, and more..."
              className="pl-10 pr-4 w-full rounded-full border-primary/20 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Location</span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center">
              3
            </span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Account</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
