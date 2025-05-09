"use client"

export default function ServicesLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <div>
            {children}
        </div>
    )
}