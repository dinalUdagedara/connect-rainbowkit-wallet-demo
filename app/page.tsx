import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="flex w-full justify-center items-center p-20">
      <ConnectButton />
    </div>
  );
}
