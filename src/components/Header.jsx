
function Header() {
  const { cart } = useCart();
  const { notifications } = useNotification();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white/70 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition"
              onClick={() => navigate("/")}
            >
              <h1 className="text-lg md:text-xl font-extrabold tracking-tight">cutiepao</h1>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-6 sm:mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Cari produk, brand, atau kata kunci..."
                className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 rounded-full px-3 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-sm hover:brightness-105 transition"
                onClick={() => navigate("/search")}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-2 py-1 rounded-full hover:bg-gray-50" onClick={() => navigate("/location") }>
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">Location</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative p-2 rounded-full hover:bg-gray-50" onClick={() => navigate("/notifications") }>
              <Bell className="h-5 w-5" />
              {notifications?.length > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  {notifications.length}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="relative p-2 rounded-full hover:bg-gray-50" onClick={() => navigate("/cart") }>
              <ShoppingCart className="h-5 w-5" />
              {cart?.length > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  {cart.length}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center space-x-2 px-2 py-1 rounded-full hover:bg-gray-50" onClick={() => navigate("/account") }>
              <User className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">
                {user ? user.name : "Account"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React from "react";
import { Search, ShoppingCart, User, Bell, MapPin } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input.jsx";
import { Badge } from "./ui/badge.jsx";
import { useCart } from "./context/CartContext.jsx";
import { useNotification } from "./context/NotificationContent.jsx";
import { useAuth } from "./context/AuthContext.jsx";
