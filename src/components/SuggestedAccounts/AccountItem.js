import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);


function AccountItem({}) {
    return ( 
        <div className={cx('account-item')}>
            <img 
                className={cx('avatar')}
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666886400&x-signature=PHqOjglEYIYlmJNl05bLeViToho%3D'
                alt='sdaf'
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>nguyen van a</strong>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>aaa</p>
            </div>

        </div>
    );
}

AccountItem.propTypes = {
    label: PropTypes.string.isRequired,
}

export default AccountItem;