import NavLink from './NavLink';

export default function NavBar({ navItems }) {
    return (
        <nav className="flex w-full bg-[#F7FEF8]">
            <div className="container m-auto flex max-w-6xl items-center justify-between px-12 py-7 font-poppins">
                <h1 className="text-3xl font-bold">
                    <span className="text-[#6AA78D]">Food</span>
                    <span className="text-[#1D1D35]">idie</span>
                </h1>
                <div className="flex gap-12">
                    {navItems.map((item, index) => (
                        <NavLink href={item.path} key={index}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
