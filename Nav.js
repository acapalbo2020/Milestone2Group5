import {Link} from "react-router-dom";

const Nav = () =>{
    return (
        <div>
            <header>
            <nav>
                <Link to="/"> Home Page
                </Link>
                <Link to="/List"> My To Do List
                </Link>
                <Link to="/Detail"> View Task Detail
                </Link>
                <Link to="/CreateNew"> Create New Task
                </Link>
            </nav>      
            </header>

        </div>

    );
};

export default Nav;