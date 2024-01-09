"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import nProgress from "nprogress";

export default function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    nProgress.start();
    router.back();
  };
  return (
    <Button onClick={handleBack} className="m-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>
    </Button>
  );
}
