"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} not found`}
        width={48}
        height={48}
        priority
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">
          404 - Page Not Found
          <p className="text-destructive">Could not find the requested page</p>
          <Button
            variant="outline"
            className="mt-4 ml-2"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
        </h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
