import React, {Suspense} from "react";

export const withSuspense = (Component: React.ComponentType) => {
    return (props: any) => {
        return <Suspense fallback={<div>Загрузка...</div>}><Component {...props}/> </Suspense>
    }
}