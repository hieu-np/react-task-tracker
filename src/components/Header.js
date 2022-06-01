import PropType from 'prop-types'
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({title, onAdd, showAddTask}) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
            color={showAddTask ? "red" : "green"} text="Add"
            onClick={onAdd} />
            )}
        </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropType.string.isRequired,
}
export default Header;