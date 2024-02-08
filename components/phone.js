import { useState } from 'react';

function PhoneNumberForm() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <form className="max-w-sm mx-auto mt-4">
            <div className="flex items-center">
                <button
                    id="dropdown-phone-button"
                    data-dropdown-toggle="dropdown-phone"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <svg
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 me-2"
                        viewBox="0 0 20 15"
                    >
                        {/* Green stripe */}
                        <rect width="20" height="5" y="0" fill="#128807" />
                        {/* White stripe */}
                        <rect width="20" height="5" y="5" fill="#FFFFFF" />
                        {/* Orange stripe */}
                        <rect width="20" height="5" y="10" fill="#FF9933" />
                        {/* Ashoka Chakra */}
                        <circle cx="10" cy="7.5" r="2" fill="#000080" />
                        {/* 24 spokes of Ashoka Chakra */}
                        {[...Array(24)].map((_, index) => (
                            <rect
                                key={index}
                                x="9.6"
                                y="5.5"
                                width="0.8"
                                height="4"
                                transform={`rotate(${index * 15} 10 7.5)`}
                                fill="#FFFFFF"
                            />
                        ))}
                    </svg>



                    +91
                </button>
                <input
                    id="phone_number"
                    type="tel"
                    className="flex-grow w-0 border border-gray-300 rounded-l-none rounded-r-lg shadow-sm py-2.5 px-3 text-sm focus:ring-4 focus:ring-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your phone number"
                />
            </div>
        </form>
    );
}

export default PhoneNumberForm;
