import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";
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
          href="https://calendly.com/gboidin-16/audit-gratuit-15-min"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-500/10 transition-colors duration-200 bg-white/10"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Rendez-vous</span>
        </Link>
      </header>
    </div>
  );
}
