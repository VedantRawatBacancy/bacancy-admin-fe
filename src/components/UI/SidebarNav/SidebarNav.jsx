
const SidebarNav = () => {
    return (
        <div className="flex flex-col space-y-2 py-4">
            <a href="#" className="block px-4 py-2 text-white rounded bg-gray-600">
                Dashboard
            </a>
            <a href="#" className="block px-4 py-2 text-white rounded bg-gray-600">
                My Tasks
            </a>
            <a href="#" className="block px-4 py-2 text-white rounded bg-gray-600">
                Settings
            </a>
            <a href="#" className="block px-4 py-2 text-white rounded bg-gray-600">
                Profile
            </a>
            <a href="#" className="block px-4 py-2 text-white rounded bg-gray-600">
                Logout
            </a>
        </div>
    );
};

export default SidebarNav;