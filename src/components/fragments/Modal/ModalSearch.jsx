import Input from "@/components/elements/input/InputIndex";
import { dataItem } from "@/constants/Index";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";

const ModalSearch = ({ isVisible, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const results = dataItem.filter(
        (item) => item.name && item.name.toLowerCase().includes(query)
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]); // Reset hasil pencarian jika input kosong
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-50 px-4 bg-black bg-opacity-90 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="fixed inset-0 top-0 z-50 px-4 sm:top-20 "
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-start justify-start h-full sm:items-center ">
              <div className="flex w-full gap-2 px-2 py-4   sm:w-1/2 ">
                <div className="flex items-center w-full px-2 py-2 overflow-hidden border-2 border-zinc-700 rounded-xl bg-black/80 ">
                  <Input
                    classname="text-[1rem] px-2 outline-none round text-white bg-transparent"
                    type="search"
                    placeholder="Search products..."
                    name="search"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={handleSearch}
                  />

                  <button
                    onClick={handleSearch}
                    className="px-2 sm:text-[1rem] text-[0.75rem] text-zinc-400 transition duration-200 hover:text-white"
                  >
                    <Search />
                  </button>
                </div>
                <button
                  className="px-2 duration-200 sm:text-[1rem] text-[0.75rem] ease-in-out text-zinc-400 hover:text-red-500"
                  onClick={onClose}
                >
                  <X />
                </button>
              </div>

              {/* Menampilkan jumlah hasil pencarian dan no result found */}
              {searchQuery && (
                <div className="w-full sm:w-1/2 bg-zinc-950  text-white py-2 text-center">
                  {filteredItems.length > 0 ? (
                    <span>
                      Products {filteredItems.length} Result
                      {filteredItems.length !== 1 ? "s" : ""} Found
                    </span>
                  ) : (
                    <span>No results found</span>
                  )}
                </div>
              )}

              {/* Bagian untuk menampilkan hasil pencarian hanya saat ada input */}
              {searchQuery && (
                <div className="w-full sm:w-1/2 max-h-[60vh] overflow-auto bg-zinc-950">
                  {filteredItems.length > 0 ? (
                    <ul className="divide-y divide-zinc-700">
                      {filteredItems.map((item) => (
                        <li
                          key={item.id}
                          className="flex p-4 items-center gap-4"
                        >
                          <a
                            href={`/product/${item.slug}`}
                            className="flex items-center gap-2 w-full"
                          >
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex flex-col text-white">
                              <span>{item.name}</span>
                              <span className="text-sm text-gray-400">
                                Rp {item.price.toLocaleString()}
                              </span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalSearch;
