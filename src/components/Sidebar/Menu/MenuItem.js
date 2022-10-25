import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={cx('menu-item')}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
