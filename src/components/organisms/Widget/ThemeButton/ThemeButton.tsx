import Icon from '@/components/atoms/Icon';
import Styles from './ThemeButton.module.css';

export default function ThemeButton() {
  return <div className={Styles.ThemeButton}>
    <Icon
      path='/assets/icons/chevron.svg'
      color='var(--text-primary)'
    />
  </div>;
}