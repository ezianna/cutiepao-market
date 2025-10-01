
function Header() {
  const { cart } = useCart();
  const { notifications } = useNotification();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => navigate("/")}>
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
                onClick={() => navigate("/search")}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={() => navigate("/location") }>
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Location</span>
            </Button>

            <Button variant="ghost" size="sm" className="relative" onClick={() => navigate("/notifications") }>
              <Bell className="h-5 w-5" />
              {notifications?.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {notifications.length}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="relative" onClick={() => navigate("/cart") }>
              <ShoppingCart className="h-5 w-5" />
              {cart?.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cart.length}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={() => navigate("/account") }>
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">
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
