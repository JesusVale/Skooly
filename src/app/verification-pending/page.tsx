import AuthHeader from "@/components/auth-header"

export default function page(){
    return (
        <div className="grid place-items-center h-screen">

            <div className="w-[55%]">
                <AuthHeader title="Verificar Email" />

                <section className={`text-white border border-solid border-white p-6 text-base rounded-md`}>
                    <h3 className="text-green-500 font-bold text-lg">¡Se registró el Usuario Correctamente!</h3>
                    <p>Para garantizar la seguridad de tu cuenta y brindarte la mejor experiencia posible, es necesario que verifiques tu dirección de correo electrónico. Hemos enviado un mensaje a la dirección de correo electrónico que proporcionaste durante el proceso de registro.</p>
                    <p className="my-4">Por favor, sigue estos sencillos pasos para completar la verificación:</p>
                    <ol className="list-decimal list-inside">
                        <li>Abre tu bandeja de entrada de correo electrónico.</li>
                        <li>Busca un mensaje de nuestra parte para la verificación de tu cuenta.</li>
                        <li>Haz clic en el enlace de verificación que encontrarás en el correo.</li>
                    </ol>
                </section>
            </div>
            
        </div>
        
    )
}