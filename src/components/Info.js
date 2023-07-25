import user from "../images/user.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <img src={user} alt="user" />
      <div className="details">
        <h2>Zealot Femi</h2>
        <div className="spec">Frontend Developer</div>
        <div className="site">
          <a href="https://twitter.com/zf_mackie">zfmackie.com</a>
        </div>
      </div>
      <div className="btn">
        <a href="mailto:zealfemi@gmail.com">
          <button id="email">
            <img src={email} alt="email" />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/akinola-femi/">
          <button id="linked-in">
            <img src={linkedin} alt="linkedin" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
