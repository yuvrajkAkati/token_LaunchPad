

export function TokenLaunchPadStarter(){
    
    return <div className="flex justify-center pt-20 ">
        <div>
        <div className="text-5xl pb-5">Solana token launchpad</div>
        <div className="p-2 bg-"><input type="text" className="p-2 w-full rounded-lg border text-xl" placeholder="Name"/></div> 
        <div className="p-2"><input type="text" className="p-2 w-full rounded-lg border text-xl" placeholder="Symbol"/> </div>
        <div className="p-2"><input type="text" className="p-2 w-full rounded-lg border text-xl" placeholder="Image url"/> </div>
        <div className="p-2"><input type="text" className="p-2 w-full rounded-lg border text-xl " placeholder="Initial supply"/></div> 
        <div className=" flex justify-center"><button className="p-2 w-full rounded-lg border text-2xl text-white bg-slate-500">create token</button></div>
        </div>
    </div>
}