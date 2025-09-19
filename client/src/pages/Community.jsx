import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Heart } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  const { getToken } = useAuth();

  const fetchCreations = async () => {
    try {
      const { data } = await axios.get("/api/user/get-published-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setCreations(data.creations || []);
      } else {
        toast.error(data.message || "Failed to fetch creations");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-lg font-semibold text-gray-700">Creations</h1>

      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3">
        {loading ? (
          <p className="text-gray-500 text-sm text-center mt-10">
            Loading creations...
          </p>
        ) : Array.isArray(creations) && creations.length > 0 ? (
          creations.map((creation, index) => {
            if (!creation) return null; // skip invalid items

            return (
              <div
                key={index}
                className="relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3"
              >
                <img
                  src={creation.content}
                  alt={creation.prompt || "Generated content"}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg">
                  <p className="text-sm hidden group-hover:block">
                    {creation.prompt}
                  </p>
                  <div className="flex gap-1 items-center self-end">
                    <p>{creation.likes?.length || 0}</p>
                    <Heart
                      className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                        creation.likes?.includes(user?.id)
                          ? "fill-red-500 text-red-600"
                          : "text-white"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-sm text-center mt-10">
            No published creations yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Community;
