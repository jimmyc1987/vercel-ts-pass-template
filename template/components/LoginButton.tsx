import { Button } from "@/components/ui/button"
import { useFutureverseAuth } from "@futureverse/auth-react"

export default function LoginButton() {
  const { isAuthenticated, signIn, signOut } = useFutureverseAuth()

  return isAuthenticated ? (
    <Button variant="secondary" onClick={() => signOut()}>
      Sign out
    </Button>
  ) : (
    <Button onClick={() => signIn()}>Sign in with Pass</Button>
  )
}
