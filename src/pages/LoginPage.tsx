import { AuthForm } from "@/components/AuthForm";
import { GridGradient } from "@/components/GridGradient";
import { SocialButton } from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-2 bg-backround relative">
      <div className="flex items-center gap-2 absolute top-4 left-4 z-50">
        <Button onClick={() => navigate(-1)} size={"icon"} variant={"outline"}>
          <ArrowLeft />
        </Button>
        <span className="text-sm lg:text-base text-foreground/70">Log in</span>
      </div>
      <GridGradient className="h-[350px] z-[49]" />
      <div className="w-full max-w-lg space-y-4 lg:space-y-6 text-center relative z-50">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Welcome to everyone's management
          </h1>
          <p className="text-sm text-muted-foreground">
            Log in easily and use the service.
          </p>
        </div>
        <AuthForm />
        <div className="flex items-center gap-2 px-18">
          <hr className="flex-1 border-muted border-dashed border-[1.5px]" />
          <span className="text-sm text-muted-foreground">or</span>
          <hr className="flex-1 border-muted border-dashed border-[1.5px]" />
        </div>
        <SocialButton />
      </div>
    </div>
  );
}
