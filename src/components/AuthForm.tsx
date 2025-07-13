import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader, LockKeyhole, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/lib/schema";
import { z } from "zod";
import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "./toast";
import { cn } from "@/lib/utils";

type AuthFormValues = z.infer<typeof authSchema>;

export function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (data: AuthFormValues) => {
    setLoading(true);
    const success = await login(data.email, data.password);
    setLoading(false);

    if (success) {
      ToastSuccess({ message: "Logged in successfully!" });
      navigate("/dashboard");
    } else {
      ToastError({ message: "Invalid credentials." });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-sm mx-auto bg-background"
    >
      <div className="space-y-1.5">
        <Label htmlFor="email">
          Email <span className="text-destructive text-left">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Please enter your email address"
          {...register("email")}
          className="text-sm"
        />
        {errors.email && (
          <p className="text-xs text-destructive/70 text-left">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5 relative">
        <Label htmlFor="password">
          Password <span className="text-destructive text-left">*</span>
        </Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Please enter your password"
          {...register("password")}
          className="text-sm"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={cn(
            "absolute right-3 top-1/2",
            errors.password ? "-translate-y-1/2" : "translate-y-0"
          )}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        {errors.password && (
          <p className="text-xs text-destructive/70 text-left">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            Logging in <Loader className="animate-spin" />
          </>
        ) : (
          "Login"
        )}
      </Button>

      <div className="flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1 underline text-muted-foreground/80 text-xs lg:text-sm"
        >
          <LockKeyhole className="w-4 h-4" strokeWidth={1.5} /> Find password
        </a>
        <a
          href="/join"
          className="flex items-center gap-1 text-muted-foreground/90 underline text-xs lg:text-sm"
        >
          Join the membership <UserPlus className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </form>
  );
}
