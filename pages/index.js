import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-primary flex flex-col gap-10 items-center justify-center min-h-screen py-2">
      <div className="bg-gray-50">
        <img src="/resources/images/test1.png" className="object-contain w-832 h-468 bg-indigo-500"/>
      </div>
      <div className="flex flex-col">
        <span className="font-title font-extrabold text-xl text-center">Dereck McDuff</span>
        <span className="font-body text-center">d_rawtheworld@icloud.com</span>
      </div>
    </div>
  )
}
