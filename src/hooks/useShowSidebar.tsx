'use client'
import { useContext } from "react"
import { ShowSidebarContext } from "@/context/showSidebar"

function useShowSidebar() {

    const showSidebar = useContext(ShowSidebarContext);

    if(showSidebar === undefined){
        throw new Error("showSidebar should be in a ShowSidebarProvider");
    }

    return showSidebar;
}

export default useShowSidebar