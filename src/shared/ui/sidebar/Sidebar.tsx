import { ReactNode } from 'react';
import { Icon } from 'shared/ui/icon';
import { SidebarNavItem } from 'shared/types/types';
import styles from './sidebar.module.scss';

interface SidebarProps {
  logoNode?: ReactNode;
  items: SidebarNavItem[];
}

export function Sidebar({ logoNode, items }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {logoNode && <div>{logoNode}</div>}
      <nav className={styles.nav}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}
          >
            {item.icon && <Icon name={item.icon} size={24} />}
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
