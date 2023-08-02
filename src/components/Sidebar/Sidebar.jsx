import React, { useState } from 'react';
import { menuItems } from '../../utils/Data/SidebarData';
import './Sidebar.css';
import Icon from '../designs/Icons/Icon';
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';
import ProfileMenu from './ProfileMenu';

const Sidebar = () => {
    const [open, setOpen] = useState(-1);

    const handleClick = (id) => {
        setOpen((prev) => prev === id ? -1 : id);
    }

    return (
<>
                {/* Icon Section Start */}
                <Icon />
                {/* Icon Section End */}
                <hr />

                {/* Menu Section Start */}
                <nav className='flex flex-1 flex-col justify-between'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-2 overflow-y-auto'>
                        {
                            menuItems.map((item, index) =>
                                <li key={index}>
                                    {
                                        item.type === 'item' ?
                                            <MenuItem item={item} />
                                            :
                                            <MenuGroup item={item} index={index} handleClick={handleClick} open={open} />
                                    }
                                </li>
                            )
                        }
                    </ul>
                    <ProfileMenu />
                </nav>
                </>
            // </div>
        // </div>
    )
}

export default Sidebar
