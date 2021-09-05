
export function DoCircle({name}) {
    return (
        <div className="w-2 h-2 rounded-full bg-blue-600">{name}</div>
    )
}

export function TopMenu({titles}) {
    return (
        <div className="flex w-screen content-evenly" > 
        { titles.map(element => {
            return (
            <div className="p-2 flex-auto content-center text-center">
                <button className="">{element}</button>
            </div>
            )
        })}
        </div>    
    )
}