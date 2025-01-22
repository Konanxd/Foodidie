import NavBar from '@/Components/NavBar';

export default function GuestLayout({ children }) {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/recipes', label: 'Recipes' },
        { path: '/about', label: 'About' },
    ];
    return (
        <div className="flex min-h-screen flex-col">
            <div>
                <NavBar navItems={navItems} />
            </div>

            <div className="w-full bg-[#F7FEF8] font-poppins">{children}</div>
        </div>
    );
}
