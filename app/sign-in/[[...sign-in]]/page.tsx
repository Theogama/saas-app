import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <SignIn />
    </main>
  )
}

export default SignInPage
