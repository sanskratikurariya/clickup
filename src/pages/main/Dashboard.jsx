// Dashboard.jsx

import React, { useState } from 'react';
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
    Clock, FileText, Bookmark, File
} from 'lucide-react';

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

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const newCards = Array.from(cards);
        const [removed] = newCards.splice(result.source.index, 1);
        newCards.splice(result.destination.index, 0, removed);
        setCards(newCards);
    };

    return (
        <div className="flex h-screen mt-9 border-1 border-gray-800 rounded-lg bg-[#0f0f0f] text-white overflow-hidden">
            {isSidebarOpen && <SidebarComponent onClose={() => setIsSidebarOpen(false)} />}
            <div className="flex-1 p-2 overflow-y-auto relative">
                {/* Topbar */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSidebar}
                            className="text-white bg-[#191919] p-2 rounded hover:bg-[#151515]"
                        >
                            <SidebarIcon size={20} />
                        </button>
                        <div className="relative flex items-center justify-between">
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
                                <div className="absolute mt-48 bg-[#151515] rounded shadow-lg w-64 z-20">
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

                    <div className="absolute top-2 right-4 flex gap-3 bg-[#131313] px-4 py-2 rounded-lg shadow-md mb-10 text-[gray]">
                        <button className="flex items-center gap-1 px-1 py-1 border-[1px] border-gray-700 rounded-lg">
                            <Bot size={18} className='text-pink-500' />
                            <span className="text-sm font-medium">Agent</span>
                        </button>
                        <button className="flex items-center gap-1 px-1 py-1 border-[1px] border-gray-700 rounded-lg">
                            <span className="text-sm font-medium">Share</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 border-[1px] border-gray-700 rounded-lg">
                            <Repeat size={18} className='text-yellow-500' />
                            <span className="text-sm font-medium">Automate</span>
                        </button>
                        <button className="flex items-center gap-1 px-1 py-1 rounded-lg text-white">
                            <BrainCircuit size={18} className='text-pink-900' />
                            <span className="text-sm font-medium">AI</span>
                        </button>
                    </div>
                </div>

                {/* Tabs */}
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

                {/* Cards Section */}
                <div className="flex h-screen w-full  gap-4 mt-6 overflow-x-auto content-center">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="cards" direction="horizontal">
                            {(provided) => (
                                <div
                                    className="flex flex-wrap md:flex-nowrap gap-4"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {cards.map((card, index) => (
                                        <Draggable draggableId={card.id} index={index} key={card.id}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="md:w-[60%] md:h-[45%] w-[30%] h-[40%]  bg-[#181818] rounded-xl border-1 border-[#242424] shadow-md p-4 flex-shrink-0  md:flex-row flex-col"
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
                </div>

                <FolderSection />
            </div>
        </div>
    );
};

export default Dashboard;
