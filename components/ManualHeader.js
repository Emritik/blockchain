"use client";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function ManualHeader() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading} = useMoralis();
  useEffect(() => {
    if(isWeb3Enabled) return
    if(typeof window !== "undefined"){
        if(window.localStorage.getItem("connected")){
            enableWeb3();
        }
    }
  },[isWeb3Enabled]) 
  
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
        console.log(`Account Changed to ${account}`)
        if(account == null) {
            window.localStorage.removeItem("connected")
            deactivateWeb3()
            console.log("Null account Found")
        }
    })
  },[isWeb3Enabled])


  return (
    <div>
      {account ? (
        <div>
          Connected to {account.slice(0, 5)}.....
          {account.slice(account.length - 4)}
        </div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if(typeof window !== "undefined"){
                window.localStorage.setItem("connected","injected") 
            }
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect
        </button>
      )}
    </div>
  );
}
