import './styles/main.css';
import logo from './img/cookmelogo500.png'
import profilePic from './img/profile1.png'
import post1 from './img/post1.jpg'
function App() {
  return (
    <div className="container">
      <nav>
        <img src={logo} alt="Logo of CookMe"></img>
        <h1>CookMe</h1>
        <section>
          <img src={profilePic} alt="Profile picture"></img>
          <p>Welcome, User</p>
          <button>Log out</button>
        </section>
      </nav>
      <section id="feed">
        <section className="card">
          <section className="cardtop">
            <img src={profilePic} alt="Profile picture"></img>
            <p>User posted this at 12pm.</p>
          </section>
          <section className="imgPost">
            <img src={post1} alt="User's post" />
          </section>
          <section className="engagement">
            <p>50 likes.</p>
            <p>3 comments.</p>
          </section>
          <section className="comments">
            <section className="comment">
              <img src={profilePic} alt="Profile picture"></img>
              <p>This is nice.</p>
            </section>
            <section className="comment">
              <img src={profilePic} alt="Profile picture"></img>
              <p>This is nice.</p>
            </section>
            <section className="comment">
              <img src={profilePic} alt="Profile picture"></img>
              <p>This is nice.</p>
            </section>
          </section>
          <section className="addComment">
            <input type="text" placeholder="Enter a comment here"></input>
            <button>Add comment</button>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
