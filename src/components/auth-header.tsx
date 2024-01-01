import { SkoolyLogo } from "./icons"

type Props = {
    title: string
}

function AuthHeader({ title }: Props) {
  return (
    <header>
        
        <div className="mb-1 text-white">
          <div className="flex justify-center">
            <SkoolyLogo width="300" height="90" />
          </div>
          <p className="font-semibold text-center">Construyendo puentes hacia el conocimiento</p>
        </div>
        <h1 className="text-white font-bold text-2xl py-5 text-center">{title}</h1>
        
      </header>
  )
}

export default AuthHeader