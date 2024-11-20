

export default function WebLayout({ children }: { children: React.ReactNode;}) {
    return (
        <main className="min-h-screen flex flex-col justify-between ">
            {children}
        </main>
    );
}
