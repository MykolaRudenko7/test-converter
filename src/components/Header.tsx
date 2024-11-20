import { Link } from 'react-router-dom'
import { headerMenuItems } from '../constants/data'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
          {headerMenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
