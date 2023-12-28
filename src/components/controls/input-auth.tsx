
type Props = {
  placeholder: string,
  name: string,
  type: "text" | "password" | "email";
}

function InputAuth({placeholder, name, type}: Props) {
  return (
    <input className="border-solid border w-full border-white text-white bg-transparent px-3 py-1 placeholder:text-[#7D7D7D]" type={type} placeholder={placeholder} name={name} />
  )
}

export default InputAuth