import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const users = [
  {
    name: "Lara LEones",
    handle: "@thewallart",
    profile: `${process.env.PUBLIC_URL}/images/Girl.png`,
    image: `${process.env.PUBLIC_URL}/images/Main.png`
  },
  {
    name: "Thomas J.",
    handle: "@thecustomcreater",
    profile: `${process.env.PUBLIC_URL}/images/Manprofile.png`,
    image: `${process.env.PUBLIC_URL}/images/Main2.png`
  },
  {
    name: "Chris Doe",
    handle: "@zaraartist",
    profile: `${process.env.PUBLIC_URL}/images/Girl.png`,
    image: `${process.env.PUBLIC_URL}/images/Main.png`
  }
];

export default function Feed() {
  return (
    <section className="grid grid-cols-1 gap-6">
      {users.map((user, id) => (
        <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center p-4 space-x-3">
            <img
              src={user.profile}
              alt={user.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <div className="font-semibold text-sm">{user.name}</div>
              <div className="text-xs text-gray-500">{user.handle}</div>
            </div>
          </div>
          <img
            src={user.image}
            alt="Artwork"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Heart size={16} /> <span>9.8k</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle size={16} /> <span>8.6k</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share2 size={16} /> <span>7.2k</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
