import Link from "next/link";

interface btnprops {
  text: string,
  href: string,
}

export default function Btn({ text, href }: btnprops) {
  return <Link href={href}>{text}</Link>
}
