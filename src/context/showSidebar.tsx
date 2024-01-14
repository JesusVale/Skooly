'use client'
import { createContext, useState } from "react";
import { type Dispatch, type SetStateAction } from "react";


type ShowSidebarType = {
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}

const ShowSidebarContext = createContext<ShowSidebarType>({
    showSidebar: false,
    setShowSidebar: () => {},  // Aquí puedes proporcionar una función vacía como un valor inicial para setSidebar
});

function ShowSidebarProvider({children}: {children: React.ReactNode}){
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <ShowSidebarContext.Provider value = {{
            showSidebar,
            setShowSidebar
        }}>{children}</ShowSidebarContext.Provider>
    )

}

export {
    ShowSidebarProvider,
    ShowSidebarContext
};