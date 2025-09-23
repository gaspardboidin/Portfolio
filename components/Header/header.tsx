import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <header className="flex items-center justify-between max-w-7xl mx-auto m-4 p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="profile.jpg" />
            <AvatarFallback className="bg-white/20 text-white font-semibold">
              GB
            </AvatarFallback>
          </Avatar>
          <p className="text-lg font-semibold text-white">Gaspard Boidin</p>
        </div>
        <Link
          href="https://github.com/gaspardboidin"
          target="_blank"
          className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
        >
          <Github className="w-5 h-5 text-white" />
        </Link>
      </header>
    </div>
  );
}
