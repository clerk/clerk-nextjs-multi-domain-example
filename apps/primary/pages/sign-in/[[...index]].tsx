import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
}
