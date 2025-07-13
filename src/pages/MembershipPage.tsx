import { MembershipForm } from "@/components/MembershipForm";
import { SocialButton } from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function MembershipPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-2 bg-backround relative">
      <div className="flex items-center gap-2 absolute top-4 left-4">
        <Button size={"icon"} variant={"outline"}>
          <ArrowLeft />
        </Button>
        <span className="text-sm lg:text-base text-foreground/70">Log in</span>
      </div>
      <div className="w-full max-w-md space-y-4 lg:space-y-6 text-center">
        <h1 className="text-xl lg:text-2xl font-semibold">
          Stay in touch with everyone
        </h1>
        <p className="text-sm text-muted-foreground">
          Enjoy various services with easy membership registration
        </p>
        <MembershipForm />
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-muted" />
          <span className="text-sm text-muted-foreground">or</span>
          <hr className="flex-1 border-muted" />
        </div>
        <SocialButton />
      </div>
    </div>
  );
}
