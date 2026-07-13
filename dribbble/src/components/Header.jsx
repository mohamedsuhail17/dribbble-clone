import { useState } from "react"
import { CiSearch } from "react-icons/ci"
export default function Header(){
    // const [isInputFocus, setIsInputFocus] = useState(false)
    return (
        <div className="header-container px-4 py-4">
            <div className="nav flex justify-evenly items-center ">
                <img src="" alt="" />
                <div className="header-search w-100 flex bg-gray-100 gap-2 px-6 py-1.5 rounded-full">
                    <input
                     type="text" 
                     placeholder="What are you looking for? "
                     className="mr-auto border-none focus:outline-none text-sm text-black"
                    />
                    <select name="" id="" className="flex items-center justify-end font-medium">
                        <option value="shots" default>Shots</option>
                        <option value="designers">Designers</option>
                        <option value="services">Services</option>
                    </select>
                    <button>
                        <div className="ci-search-wrapper">
                            <CiSearch 
                                className="text-xl font-bold stroke-1"
                            />
                        </div>
                        
                    </button>
                </div>
                <div className="select-container flex gap-4 font-medium">
                    <select name="" id="">
                        <option value="" default>Explore</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <select name="" id="">
                        <option value="" default>Hire Talent</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <select name="" id="">
                        <option value="" default>Get Hired</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <select name="" id="">
                        <option value="" default>Community</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
                <div className="sign-btn flex gap-4">
                    <button>Sign up</button>
                    <button className="h-full px-6 py-2.5 bg-black text-white font-medium rounded-full">Log in</button>
                </div>
            </div>
            <div className="coupon">

            </div>
        </div>
    )
}