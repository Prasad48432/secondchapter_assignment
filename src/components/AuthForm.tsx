import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LockKeyhole, UserPlus } from "lucide-react";

export function AuthForm() {
  return (
    <form className="space-y-6 w-full max-w-sm mx-auto bg-background">
      <div>
        <Label className="mb-2" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Please enter your email address"
          className="text-sm"
        />
      </div>
      <div>
        <Label className="mb-2" htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Please enter your password"
          className="text-sm"
        />
      </div>
      <Button type="submit" className="w-full">
        Log in
      </Button>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1 underline text-muted-foreground/80 text-xs lg:text-sm"
        >
          <LockKeyhole className="w-4 h-4 lg:w-4.5 lg:h-4.5" strokeWidth={1.5} /> Find password
        </a>
        <a
          href="/join"
          className=" flex items-center gap-1 text-muted-foreground/90 underline text-xs lg:text-sm"
        >
          Join the membership <UserPlus className="w-4 h-4 lg:w-4.5 lg:h-4.5" strokeWidth={1.5} />
        </a>
      </div>
    </form>
  );
}
