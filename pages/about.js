import { helloLog } from "../Controller/utils"
import { DoCircle, TopMenu } from "../Components/circle"

export default function About() {

const myItems = ["About", "Dereck"];

  return (
    <div className="flex flex-col min-h-screen py-2">
      <button onClick={helloLog} className="text-gray-700 hover:text-red-600 hover:cursor-pointer text-9xl">Hi!</button>
      <DoCircle name="myName"/>
      <TopMenu titles={myItems} className="w-full flex-auto" />
    </div>
  )
}
