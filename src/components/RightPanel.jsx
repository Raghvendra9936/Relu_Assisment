import React from "react";

const artists = [
  {
    name: "Thomas Edward",
    handle: "@thewildwithyou",
    profile: `${process.env.PUBLIC_URL}/images/Sideman.png`,
    cover: `${process.env.PUBLIC_URL}/images/sidebackeground.png`
  },
  {
    name: "Chris Doe",
    handle: "@artofdreams",
    profile: `${process.env.PUBLIC_URL}/images/Sideman2.png`,
    cover: `${process.env.PUBLIC_URL}/images/sidebackeground2.png`
  },
  {
    name: "Emilie Jones",
    handle: "@thecanvaslady",
    profile: `${process.env.PUBLIC_URL}/images/sidegirl.png`,
    cover: `${process.env.PUBLIC_URL}/images/sidebc3.png`
  },
  {
    name: "Jessica Williams",
    handle: "@sunsetlines",
    profile: `${process.env.PUBLIC_URL}/images/Girl.png`,
    cover: `${process.env.PUBLIC_URL}/images/sidebc4.png`
  }
];

export default function RightPanel() {
  return (
    <aside className="w-80 bg-gray-100 p-6 space-y-6">
      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-semibold">
        Become a Seller
      </button>

      <div>
        <h3 className="text-lg font-semibold mb-4">Artists</h3>
        <div className="space-y-6">
          {artists.map((artist, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <div
                className="relative h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${artist.cover})` }}
              >
                <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                  <img
                    src={artist.profile}
                    alt={artist.name}
                    className="w-16 h-16 rounded-lg border-2 border-white object-cover"
                  />
                </div>
              </div>
              <div className="bg-white pt-10 pb-4 px-4">
                <div className="font-semibold text-sm">{artist.name}</div>
                <div className="text-xs text-gray-500">{artist.handle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
