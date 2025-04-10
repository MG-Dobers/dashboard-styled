// components/product-tabs.tsx
"use client";
import { useState } from "react";

interface TabData {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface ProductTabsProps {
    tabs: TabData[];
}

export default function ProductTabs({ tabs }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id);

    return (
        <div className="mt-6">
            <div className="mb-4 border-b dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id
                                        ? "border-blue-500 text-blue-600 dark:text-blue-500"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                                type="button"
                                role="tab"
                                aria-selected={activeTab === tab.id}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div id="tab-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                        className={`${activeTab === tab.id ? "block" : "hidden"} pt-4`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
