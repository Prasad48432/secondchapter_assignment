import { GridGradient } from "@/components/GridGradient";
import { MembershipForm } from "@/components/MembershipForm";
import { SocialButton } from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MembershipPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-2 bg-backround relative">
      <div className="flex items-center gap-2 absolute top-4 left-4 z-50">
        <Button onClick={() => navigate(-1)} size={"icon"} variant={"outline"}>
          <ArrowLeft />
        </Button>
        <span className="text-sm lg:text-base text-foreground/70">
          Join Membership
        </span>
      </div>
      <GridGradient className="h-[350px] z-[49]" />
      <div className="w-full max-w-md space-y-4 lg:space-y-6 text-center relative z-50">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Stay in touch with everyone
          </h1>
          <p className="text-sm text-muted-foreground">
            Enjoy various services with easy membership registration
          </p>
        </div>
        <MembershipForm />
        <div className="flex items-center gap-2 px-12">
          <hr className="flex-1 border-muted border-dashed border-[1.5px]" />
          <span className="text-sm text-muted-foreground">or</span>
          <hr className="flex-1 border-muted border-dashed border-[1.5px]" />
        </div>
        <a
          href="/join"
          className=" flex items-center justify-center gap-1 text-xs lg:text-sm text-muted-foreground/80 w-full bg-[linear-gradient(to_right,transparent,var(--text-background),transparent)]"
        >
          Already have an Account?{" "}
          <span className="flex items-center gap-1 text-muted-foreground/90 font-semibold">
            Log in
            <LogIn className="w-4 h-4 lg:w-4.5 lg:h-4.5" strokeWidth={1.5} />
          </span>
        </a>
      </div>
    </div>
  );
}
