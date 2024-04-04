import React, { Children } from 'react'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <section className='main-padding flex h-full max-h-full overflow-hidden relative'>
            {children}
        </section>
    )
}
