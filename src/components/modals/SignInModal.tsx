"use client"
import { FaGithub } from "react-icons/fa"
import Modal from "./Modal"
import { useModalStore } from "@/store/useModalStore"
import { FcGoogle } from "react-icons/fc"
import { authClient } from "@/lib/auth-client"

const SignInModal = () => {

  const signInWithGoogle = async ()=>{
    await authClient.signIn.social({
      provider: "google"
    })
  }

  const signInWithGithub = async ()=>{
    await authClient.signIn.social({
      provider: "github"
    })
  }


    const {isSignInOpen, closeSignIn} = useModalStore()
  return (
    <Modal onClose={closeSignIn} isOpen={isSignInOpen}>
      <h2 className="text-xl font-semibold text-white mb-2 ">SignIn to TechBlog</h2>
      <p className="text-sm text-gray-400 mb-8">Continue With One of the providers below </p>

      <div className="space-y-4">
        {/* Google */}
        <button onClick={signInWithGoogle} className="w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-white text-black font-medium hover:bg-gray-200 transition  "> <FcGoogle className="text-xl" /> Continue With Google</button>
        {/* Github */}
        <button onClick={signInWithGithub} className="w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-hover text-white border border-white/10  font-medium hover:bg-[#202020] transition  "> <FaGithub className="text-xl"/>  Continue With Github</button>

      </div>

      <p className="text-sm text-gray-500 mt-8 text-center ">By continuing, you agree to our terms & policies</p>
    </Modal>
  )
}

export default SignInModal
