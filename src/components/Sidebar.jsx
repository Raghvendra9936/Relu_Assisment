import React from "react";
import { Home, Bell, ShoppingBag, MessageCircle, Wallet, CreditCard, User, Settings, LogOut } from "lucide-react";

const navItems = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <Bell size={20} />, label: "Notifications" },
  { icon: <ShoppingBag size={20} />, label: "Shop" },
  { icon: <MessageCircle size={20} />, label: "Conversation" },
  { icon: <Wallet size={20} />, label: "Wallet" },
  { icon: <CreditCard size={20} />, label: "Subscription" },
  { icon: <User size={20} />, label: "My Profile" },
  { icon: <Settings size={20} />, label: "Settings" }
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      <div>
        <div className="text-lg font-bold mb-6">LOGO</div>
        <nav className="space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-gray-600 hover:text-black cursor-pointer">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-3 text-red-600 cursor-pointer">
        <LogOut size={20} />
        <span>Log out</span>
      </div>
    </aside>
  );
}