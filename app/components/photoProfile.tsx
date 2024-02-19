import Image from "next/image";

export default function PhotoProfile() {
  return (
    <div className="flex gap-2">
      <Image
        src="/profile.jpeg"
        width={50}
        height={50}
        alt="Muh. Khaerur Rafiq"
        className="rounded-full" />
      <h2 className="text-xl text-slate-700 mb-1">Hi, saya Rafiq
        <p className="text-sm text-slate-600"><i>Web Developer</i></p></h2>
    </div>
  )
}