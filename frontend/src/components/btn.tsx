import Link from "next/link";

interface btnprops {
  text: string,
  href: string,
  bg: string,
}

export default function Btn({ text, href, bg }: btnprops) {
  return <Link href={href} className={`${bg} text-center text-black rounded-xl py-1.5 px-5`}>{text}</Link>
}
