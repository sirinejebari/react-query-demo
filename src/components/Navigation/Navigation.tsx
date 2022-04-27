import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link, Navigate} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Navigation: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const linkStyle = {
        textDecoration: "none",
    };

    return (
        <div style={{padding: "20px"}}>
            <Button
                variant="outlined"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<MenuIcon/>}
            >
                Go to
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link style={linkStyle} to="/">
                    Basic Query
                </Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link style={linkStyle} to="/paginated">
                    Pagination
                </Link></MenuItem>
                <MenuItem onClick={handleClose}><Link style={linkStyle} to="/infinite">
                    Infinite Scroll
                </Link></MenuItem>
            </Menu>
        </div>
    );
}
