import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Feed from "./components/Feed";
import RightPanel from "./components/RightPanel";
import ArtCard from "./components/ArtCard";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 overflow-y-auto space-y-8">
          <Feed />
          <section>
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3].map((id) => (
                <ArtCard key={id} id={id} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <RightPanel />
    </div>
  );
}