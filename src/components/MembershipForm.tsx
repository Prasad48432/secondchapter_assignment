import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function MembershipForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [checked, setChecked] = useState({
    terms: false,
    personal: false,
    marketing: false,
  });

  const allChecked = checked.terms && checked.personal;
  const [open, setOpen] = useState(false);

  return (
    <form className="space-y-5 w-full max-w-sm mx-auto bg-background">
      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email">
          email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Please enter your email address"
          className="text-sm"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">
          phone number <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="010-1234-5678"
          className="text-sm"
        />
      </div>

      {/* Password */}
      <div className="space-y-1.5 relative">
        <Label htmlFor="password">
          password <span className="text-destructive">*</span>
        </Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Please enter at least 8 characters"
          className="text-sm pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[38px] text-muted-foreground"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5 relative">
        <Label htmlFor="confirm">
          verify password <span className="text-destructive">*</span>
        </Label>
        <Input
          id="confirm"
          type={showConfirm ? "text" : "password"}
          placeholder="Please re-enter your password"
          className="text-sm pr-10"
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-[38px] text-muted-foreground"
        >
          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Agreement */}
      <div className="space-y-3 text-left">
        <Label className="font-medium">Agree to terms and conditions</Label>

        {/* Full Agreement Row */}
        <div
          className="flex items-center justify-between gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
            <Checkbox
              checked={allChecked}
              onCheckedChange={(value) =>
                setChecked({
                  terms: !!value,
                  personal: !!value,
                  marketing: !!value,
                })
              }
            />
            <span className="text-sm">Full agreement</span>
          </div>
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>

        {/* Animated Section */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pl-4 text-sm"
            >
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Checkbox
                    checked={checked.terms}
                    onCheckedChange={(value) =>
                      setChecked((prev) => ({ ...prev, terms: !!value }))
                    }
                  />
                  <span>
                    Agree to Terms of Service{" "}
                    <span className="text-destructive">*</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Checkbox
                    checked={checked.personal}
                    onCheckedChange={(value) =>
                      setChecked((prev) => ({ ...prev, personal: !!value }))
                    }
                  />
                  <span>
                    Consent to collection and use of personal information{" "}
                    <span className="text-destructive">*</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Checkbox
                    checked={checked.marketing}
                    onCheckedChange={(value) =>
                      setChecked((prev) => ({ ...prev, marketing: !!value }))
                    }
                  />
                  <span>
                    Consent to receive marketing information (optional)
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full">
        join the membership
      </Button>
    </form>
  );
}
