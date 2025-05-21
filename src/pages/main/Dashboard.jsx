import React, { useState, useEffect } from 'react';
import FolderSection from './FolderSection';
import Card from './card';
import SidebarComponent from './Sidebar';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
    Sidebar as SidebarIcon,
    Users,
    Folder,
    PlusCircle,
    ChevronDown,
    Bot,
    Repeat,
    BrainCircuit,
    LayoutDashboard,
    List,
    Calendar,
    GanttChart,
    Table,
    Plus,
    Grid,
    Clock,
    FileText,
    Bookmark,
    File,
    Menu,
} from 'lucide-react';
import ListSection from './ListSection';
import ResourceSection from './ResourcesSection';
import WorkloadStatusChart from './WorkloadStatusChart';
import VerticalNavbar from './VerticalNavbar';

const initialCards = [
    {
        id: '1',
        title: 'Recent',
        icon: Clock,
        items: [
            { text: 'Project 1 - in Projects', icon: File },
            { text: 'Projects - in Team Space', icon: File },
            { text: 'Project 2 - in Projects', icon: File },
        ]
    },
    {
        id: '2',
        title: 'Docs',
        icon: FileText,
        items: [
            { text: 'Project 1 - in Projects', icon: File }
        ]
    },
    {
        id: '3',
        title: 'Bookmarks',
        icon: Bookmark,
        showAddButton: true,
        items: [
            { text: 'Bookmarks' }
        ]
    }
];

const tabs = [
    { name: 'Overview', icon: <LayoutDashboard size={18} className='text-blue-400' /> },
    { name: 'Board', icon: <Grid size={24} className='text-amber-300' /> },
    { name: 'List', icon: <List size={18} className='text-orange-600' /> },
    { name: 'Calendar', icon: <Calendar size={18} className='text-teal-500' /> },
    { name: 'Gantt', icon: <GanttChart size={18} className='text-red-400' /> },
    { name: 'Table', icon: <Table size={18} className='text-purple-400' /> },
    { name: '+View', icon: <Plus size={18} className='text-green-400' /> },
];

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cards, setCards] = useState(initialCards);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const newCards = Array.from(cards);
        const [removed] = newCards.splice(result.source.index, 1);
        newCards.splice(result.destination.index, 0, removed);
        setCards(newCards);
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const [isDesktopNew, setIsDesktopNew] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktopNew(window.innerWidth >= 1024); // Tailwind's 'lg' breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isDesktop = windowWidth >= 768;

    return (
        <div className="flex  mt-20 md:mt-9 border-1 border-gray-800 rounded-lg bg-[#0f0f0f] h-screen p-2 text-white overflow-x-hidden ">

            {isSidebarOpen && <SidebarComponent onClose={() => setIsSidebarOpen(false)} />}
            <div className="flex-1 flex flex-col p-2 overflow-y-auto relative mb-12 ">

                <div className="w-full bg-[#111] text-white">

                    <div className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-3">

                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden text-white bg-[#191919] p-2 rounded hover:bg-[#151515]"
                            >
                                <Menu size={20} />
                            </button>


                            <button
                                onClick={toggleSidebar}
                                className=" md:flex text-white bg-[#191919] p-2 rounded hover:bg-[#151515]"
                            >
                                <SidebarIcon size={20} />
                            </button>


                            <div className="relative hidden md:flex items-center">
                                <div
                                    onClick={toggleDropdown}
                                    className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-[#161616]"
                                >
                                    <Users size={20} />
                                    <span className="font-semibold text-sm">Team Space</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                {isDropdownOpen && (
                                    <div className="absolute top-full mt-2 bg-[#151515] rounded shadow-lg w-64 z-20">
                                        <ul className="py-1 text-sm">
                                            <li className="px-4 py-2 hover:bg-[#222222] cursor-pointer flex items-center gap-2">
                                                <Users size={16} />
                                                Team Space
                                            </li>
                                            <li className="px-4 py-2">
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    className="w-full px-3 py-2 rounded bg-[#1d1d1d] text-white text-sm placeholder-gray-400 focus:outline-none"
                                                />
                                            </li>
                                            <li className="px-4 py-2 hover:bg-[#222222] cursor-pointer flex items-center gap-2">
                                                <PlusCircle size={16} className='bg-blue-600 p-1 rounded-2xl' />
                                                Team space
                                            </li>
                                            <li className="px-4 py-2 hover:bg-[#222222] cursor-pointer flex items-center gap-2">
                                                <Folder size={16} />
                                                Projects
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className="hidden md:flex gap-3 bg-[#131313] px-4 py-2 rounded-lg shadow-md text-[gray]">
                            <button className="flex items-center gap-1 px-1 py-1 border border-gray-700 rounded-lg">
                                <Bot size={18} className='text-pink-500' />
                                <span className="text-sm font-medium">Agent</span>
                            </button>
                            <button className="flex items-center gap-1 px-1 py-1 border border-gray-700 rounded-lg">
                                <span className="text-sm font-medium">Share</span>
                            </button>
                            <button className="flex items-center gap-1 px-2 py-1 border border-gray-700 rounded-lg">
                                <Repeat size={18} className='text-yellow-500' />
                                <span className="text-sm font-medium">Automate</span>
                            </button>
                            <button className="flex items-center gap-1 px-1 py-1 rounded-lg text-white">
                                <BrainCircuit size={18} className='text-pink-900' />
                                <span className="text-sm font-medium">AI</span>
                            </button>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-[#151515] border-t border-gray-700 px-4 py-3 space-y-3">
                            <div onClick={toggleDropdown} className="flex items-center gap-2 cursor-pointer">
                                <Users size={18} />
                                <span>Team Space</span>
                                <ChevronDown size={18} className={`${isDropdownOpen ? 'rotate-180' : ''} transition-transform`} />
                            </div>

                            {isDropdownOpen && (
                                <ul className="text-sm mt-2 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Users size={16} />
                                        Team Space
                                    </li>
                                    <li>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="w-full px-3 py-2 rounded bg-[#1d1d1d] text-white text-sm placeholder-gray-400 focus:outline-none"
                                        />
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <PlusCircle size={16} className='bg-blue-600 p-1 rounded-2xl' />
                                        Team space
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Folder size={16} />
                                        Projects
                                    </li>
                                </ul>
                            )}


                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-600 mt-3">
                                <button className="flex items-center gap-1 px-2 py-1 border border-gray-700 rounded-lg text-sm">
                                    <Bot size={16} className='text-pink-500' /> Agent
                                </button>
                                <button className="flex items-center gap-1 px-2 py-1 border border-gray-700 rounded-lg text-sm">
                                    Share
                                </button>
                                <button className="flex items-center gap-1 px-2 py-1 border border-gray-700 rounded-lg text-sm">
                                    <Repeat size={16} className='text-yellow-500' /> Automate
                                </button>
                                <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-white text-sm">
                                    <BrainCircuit size={16} className='text-pink-900' /> AI
                                </button>
                            </div>
                        </div>
                    )}

                    <nav className="w-full border-b mt-5 content-start border-gray-700 bg-[#111] text-white">
                        <div className="max-w-7xl sm:px-3 lg:px-2">
                            <div className="flex overflow-x-auto whitespace-nowrap">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`flex items-center gap-1 px-2 py-2 text-[12px] font-medium transition-all duration-200 border-b-2
                                    ${activeTab === tab.name ? 'border-white text-white' : 'border-transparent hover:border-white hover:text-white'}`}
                                    >
                                        {tab.icon}
                                        <span>{tab.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>


                <div className="h-auto mb-7 pb-7 w-full">
                    <div className="w-full  mt-6 pb-4 h-auto flex flex-col overflow-hidden">

                        <div className="flex-1 overflow-y-auto scrollbar-custom">
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable
                                    droppableId="cards"
                                    direction="horizontal"
                                    isDropDisabled={Boolean(!isDesktop)}
                                >
                                    {(provided) => (
                                        <div
                                            className="flex gap-6 flex-wrap overflow-x-hidden md:overflow-y-hidden"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {cards.map((card, index) => (
                                                <Draggable
                                                    draggableId={card.id}
                                                    index={index}
                                                    key={card.id}
                                                    isDragDisabled={Boolean(!isDesktop)}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="flex-shrink-0 bg-[#181818] rounded-xl border border-[#242424] shadow-md p-4 w-full sm:min-w-[250px] md:w-[31%] md:h-[45%] aspect-[4/3] overflow-x-hidden"
                                                        >
                                                            <Card
                                                                title={card.title}
                                                                icon={card.icon}
                                                                showAddButton={card.showAddButton}
                                                                items={card.items}
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>

                            <div className="mt-4 flex flex-col w-full gap-2">
                                <div className="w-full">
                                    <FolderSection isDraggable={isDesktopNew} />
                                </div>
                                <div className="w-full">
                                    <ListSection isDraggable={isDesktopNew} />
                                </div>
                                <div className="mt-4 w-full flex gap-2 md:flex-row flex-col">
                                    <div className="md:w-1/2 w-full">
                                        <ResourceSection isDraggable={isDesktopNew} />
                                    </div>
                                    <div className="md:w-1/2 w-full">
                                        <WorkloadStatusChart isDraggable={isDesktopNew} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
