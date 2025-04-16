import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './UtilityBar.module.css';

const UtilityBar = () => {
  return (
    <div className={styles.utilityBar}>
      {/* Left: Welcome text */}
      <div className={styles.leftText}>
  
      </div>

      {/* Right: Search + Language Selector */}
      <div className={styles.rightSection}>
        {/* Search */}
        <div className={styles.searchContainer}>
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>

        {/* Language Selector */}
        <select className={styles.languageSelector}>
          <option value="en">EN</option>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </div>
  );
};

export default UtilityBar;
