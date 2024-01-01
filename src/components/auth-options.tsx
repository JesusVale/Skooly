import AuthGoogleButton from "./controls/auth-google-button"

function AuthOptions() {
  return (
    <div>
        <div className="flex items-center my-6">
        <hr className="h-0 border-b border-solid grow opacity-45" />
        <p className="mx-4 text-white">o</p>
        <hr className="h-0 border-b border-solid grow opacity-45" />
      </div>

      <AuthGoogleButton />

    </div>
  )
}

export default AuthOptions