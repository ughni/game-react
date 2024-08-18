const Input = (props) => {
  const {type,placeholder} = props
  return (
    <input type={type} className="placeholder: opacity-50k text-sm border rounded w-full py-2 px-3 text-slate-700" placeholder={placeholder} />
  )
}

export default Input;