interface btnprops {
  text: string
}

export default function Btn({ text }: btnprops) {
  return <button>{text}</button>
}
