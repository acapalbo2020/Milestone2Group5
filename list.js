import './style.css'
import Nav from './Nav'

function List() {
    return(

    <body>
        <header>
            <div class="innerHeader">
                <h1><img class="logo" src="rocketship.jpg" alt="rocketshiplogo"/> Florida Tech Space Network / My To Do List</h1>
                <div class="usernav">
                    <a class="usernav" href="list.html">Log-In</a>
                    <a class="usernav" href="list.html">Sign Up</a>
                </div>
            </div>
        </header>   

        <main>
        <Nav></Nav>

            
            <ul>
                <li class = "tasK_obj">Essential Tasks</li>
            </ul>
            <div class="subtask">
            <ul>
                <li><a class="tasklist" href="list.html">Attend Classes </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
                <li><a class="tasklist" href="list.html">Undergo Zero-G Simulations </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
                <li><a class="tasklist" href="list.html">Participate in Hazardous Environment Training </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
            </ul>
            </div>

            <ul>
                <li class = "tasK_obj">Side Tasks<br/></li>
            </ul>
            <div class="subtask">
            <ul>
                <li><a class="tasklist" href="list.html">Clean room </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
                <li><a class="tasklist" href="list.html">Finish assignments </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
                <li><a class="tasklist" href="list.html">Shop for new supplies </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
            </ul>
            </div>

            <ul>
                <li class = "tasK_obj">Miscellaneous Tasks<br/></li>
            </ul>
            <div class="subtask">
            <ul>
                <li><a class="tasklist" href="list.html">Talk to friends </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
                <li><a class="tasklist" href="list.html">Finish personal project </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
                <li><a class="tasklist" href="list.html">Organize summer trip to Mars </a>
                    <button onclick="window.location.href='detail.html';">
                        Update
                    </button>
                </li>
            </ul>
            </div>

        </main>

        <footer>
            <p><span>&copy;</span>2223 FTSN (Team 5) All Rights Reserved.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Privacy Policy | Contact Emergency Services | Contact FTSN | FOIA | Suppliers
            </p>
        </footer>
    </body>

    );
}

export default List;
