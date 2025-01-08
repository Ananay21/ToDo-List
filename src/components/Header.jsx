import ChecklistIcon from '@mui/icons-material/Checklist';

function Header(){
    return <div className="Header-grid">
            <div className="Header-grid-img"><h1><ChecklistIcon style={{textShadow:"1px 1px black"}}/></h1></div>
            <div className="Header-grid-col"><h1>To-do List</h1></div>
    </div>
}

export default Header;