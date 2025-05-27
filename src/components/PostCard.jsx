import React, { useState } from "react";
import { TfiComment } from "react-icons/tfi";
import { CiBookmark } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

function PostCard() {
    const [bookmarked, setBookmarked] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div className="h-[42rem] w-full
                        pt-4
                        flex flex-col
                        ">
            <div className="w-full h-[10%] flex items-center px-4 gap-4">
                <div className="w-14 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="w-52 md:w-60 h-14 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
            </div>
            <div className="px-4 py-2 space-y-2">
                <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="w-2/3 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="w-1/2 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
            <div className="flex-grow bg-gray-200 dark:bg-gray-700 m-4 rounded-xl animate-pulse" />
            <div className="h-12 mx-4 mb-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            <div className="h-12 mx-4 mb-4
                            flex justify-between items-center">
                <div
                    className="flex gap-2 items-center relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Nút cảm xúc */}
                    <span className="flex items-center hover:cursor-pointer hover:bg-gray-200 px-2 py-1 rounded-full
                                    dark:hover:bg-dark-hover">
                        <span className="">❤️</span>
                        <span>😂</span>
                        <span>😮</span>
                        <span>😢</span>
                        <span>😡</span>
                    </span>
                    <span className="dark:text-dark-text">209</span>

                    {/* Popup cảm xúc */}
                    <AnimatePresence>
                        {isHovering && (
                            <motion.div
                                className="absolute bottom-full left-0 mb-2 px-2 py-1 
                                        bg-white rounded-full shadow-xl border border-gray-300
                                        cursor-pointer
                                        flex items-center text-2xl
                                        dark:bg-dark-hover dark:text-white dark:border-dark-border"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                {["❤️", "😂", "😮", "😢", "😡"].map((emoji, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{
                                        scale: 1.5,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 10,
                                        },
                                    }}
                                    className="mx-1"
                                >
                                    {emoji}
                                </motion.span>
                            ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black
                                    dark:text-dark-text-subtle dark:hover:text-dark-text">
                        <TfiComment size={18} className="mt-1" title="Comments"/>
                        <span>18</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black
                                    dark:text-dark-text-subtle dark:hover:text-dark-text">
                        <CiShare1 size={19} className="mt-1" title="Share"/>
                        <span>18</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-black
                                    dark:text-dark-text-subtle dark:hover:text-dark-text"
                        onClick={() => setBookmarked(!bookmarked)}>
                        {bookmarked ? (
                            <IoBookmark size={20} className="mt-0.5 text-[#E1306C]" title="Book Mark"/>
                        ) : (
                            <CiBookmark size={20} className="mt-0.5" title="Book Mark" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
