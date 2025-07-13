import { Button } from "@/components/ui/button"
import { SiApple, SiKakao, SiNaver } from "react-icons/si"

export function SocialButton() {
  return (
    <div className="space-y-2 w-full max-w-sm mx-auto">
      <Button className="w-full bg-[#FEE500] text-black hover:bg-[#f3d900]">Log in with Kakao <SiKakao /></Button>
      <Button className="w-full bg-[#03C75A] text-white hover:bg-[#02b050]">Log in with Naver <SiNaver /></Button>
      <Button className="w-full bg-black text-white hover:bg-[#0d0d0d]">Sign in with Apple <SiApple /></Button>
    </div>
  )
}
