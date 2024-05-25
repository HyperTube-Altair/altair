// app/providers.tsx

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <main className="purple-dark text-foreground bg-background">
                {children}
            </main>
        </NextUIProvider>
    )
}
