import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ErorPage = () => {
  return (
    <div className="flex items-center text-xl font-medium tracking-wider bg-black min-h-svh place-content-center text-zinc-800">
      <div className="flex flex-col items-center gap-4">
        404 not found
        <Link to="/">
          <Button className="flex items-center rounded-xl">
            <ChevronLeft />
            Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErorPage;
