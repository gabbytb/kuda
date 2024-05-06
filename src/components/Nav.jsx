import { Link } from "react-router-dom";
import { BrandLogo } from "../assets/images";
import { NgFlag, DropdownIcon } from "../assets/icons";






const Nav = () => {

    return (
        <header className="h-20 flex bg-white shadow-md">
            <div className="flex justify-between items-center w-full px-20">
                
                
                {/******* Menu Left *******/}
                <div className="flex justify-start w-full menu-left">

                    {/* Brand Logo */}
                    <div className="min-w-36 brand">
                        <BrandLogo />
                    </div>
                    {/* Brand Logo */}



                    {/* Nav Links */}
                    <ul className="inline-flex ml-28 w-full space-x-16 nav-links">
                        <li>
                            <p>personal <span><DropdownIcon /></span></p>
                        </li>
                        <li>
                            <p>business <span><DropdownIcon /></span></p>
                        </li>
                        <li>
                            <p>company <span><DropdownIcon /></span></p>
                        </li>
                        <li>
                            <p>help <span><DropdownIcon /></span></p>
                        </li>
                    </ul>
                    {/* Nav Links */}

                </div>
                {/******* Menu Left *******/}

                


                {/******* Menu Right *******/}
                <div className="inline-flex justify-end items-center w-full space-x-8 menu-right">
                    <Link to="#" alt="sign in">
                        sign in
                    </Link>
                    <Link to="#" alt="join kuda">
                        join kuda
                    </Link>
                </div>
                {/******* Menu Right *******/}




                {/******* Nationality Dropdown *******/}
                <div className="ml-12">
                    <NgFlag />
                </div>
                {/******* Nationality Dropdown *******/}
            </div>
        </header>
    );
};

export default Nav;
