import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { membershipSchema } from "@/lib/schema";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { ToastSuccess } from "./toast";

type MembershipFormValues = z.infer<typeof membershipSchema>;

export function MembershipForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      confirm: "",
      terms: false,
      personal: false,
      marketing: false,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data: MembershipFormValues) => {
    await sleep(3000);
    console.log("Form submitted:", data);
    ToastSuccess({
      message: "Membership confirmed successfully!",
    });
  };

  const allChecked = watch("terms") && watch("personal");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email">
          Email <span className="text-destructive text-left">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Please enter your email address"
          className="text-sm"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive/70 text-left">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone">
          Phone number <span className="text-destructive text-left">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="010-1234-5678"
          className="text-sm"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-destructive/70 text-left">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-1.5 relative">
        <Label htmlFor="password">
          Password <span className="text-destructive text-left">*</span>
        </Label>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Please enter at least 8 characters"
          className="pr-10 text-sm"
          {...register("password")}
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

      {/* Confirm */}
      <div className="space-y-1.5 relative">
        <Label htmlFor="confirm">
          Verify password <span className="text-destructive text-left">*</span>
        </Label>
        <Input
          id="confirm"
          type={showConfirm ? "text" : "password"}
          placeholder="Please re-enter your password"
          className="pr-10 text-sm"
          {...register("confirm")}
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className={cn(
            "absolute right-3 top-1/2",
            errors.confirm ? "-translate-y-1/2" : "translate-y-0"
          )}
        >
          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        {errors.confirm && (
          <p className="text-xs text-destructive/70 text-left">
            {errors.confirm.message}
          </p>
        )}
      </div>

      {/* Agreement */}
      <div className="space-y-3 text-left">
        <Label className="font-medium">
          Agree to terms and conditions{" "}
          <span className="text-destructive text-left">*</span>
        </Label>

        {/* Full agreement */}
        <div
          className="flex items-center justify-between gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
            <Checkbox
              checked={allChecked}
              onCheckedChange={(value) => {
                setValue("terms", !!value);
                setValue("personal", !!value);
                setValue("marketing", !!value);
              }}
            />
            <span className="text-sm flex items-center gap-2 text-foreground/80">
              Full agreement{" "}
              {(errors.terms || errors.personal) && (
                <p className="text-xs text-destructive/70">
                  {errors.terms?.message || errors.personal?.message}
                </p>
              )}
            </span>
          </div>
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>

        {/* Hidden terms */}
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
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={watch("terms")}
                    onCheckedChange={(val) => setValue("terms", !!val)}
                  />
                  <span>Agree to Terms of Service *</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={watch("personal")}
                    onCheckedChange={(val) => setValue("personal", !!val)}
                  />
                  <span>Consent to use of personal information *</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={watch("marketing")}
                    onCheckedChange={(val) => setValue("marketing", !!val)}
                  />
                  <span>Consent to marketing (optional)</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button
        disabled={!isDirty || isSubmitting}
        type="submit"
        className="w-full"
      >
        {" "}
        {isSubmitting ? (
          <>
            Confirming your Membership <Loader className="animate-spin" />
          </>
        ) : (
          "Join Membership"
        )}
      </Button>
    </form>
  );
}
