import NavLink from './NavLink';

export default function NavBar({ navItems }) {
    return (
        <nav className="flex w-full">
            <div className="container m-auto flex max-w-6xl items-center justify-between px-12 py-7 font-poppins">
                <h1 className="text-4xl font-bold">
                    <span className="text-[#6AA78D]">Food</span>
                    <span className="text-[#1D1D35]">idie</span>
                </h1>
                <div className="flex gap-12">
                    {navItems.map((item, index) => (
                        <NavLink key={index}>{item.label}</NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
