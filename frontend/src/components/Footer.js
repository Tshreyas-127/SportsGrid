import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-col">
          <h3>We Are SportGrid</h3>
          <p>Contact No: +91 9892649590, +91 8655944301, +91 8655944300</p>
          <p>Email: info@sportgrid.in</p>
          <p>info@sportgrid.com</p>
          <p>
            Address: SportGrid Club, Yashwantrao Chavan Pratishthan,<br />
            Nariman Point, Mumbai, 400019
          </p>
        </div>

        {/* Sports Column */}
        <div className="footer-col">
          <h3>Sports</h3>
          <ul>
            <li><a href="/facilities/sports/aerobics">Aerobics</a></li>
            <li><a href="/facilities/sports/badminton">Badminton</a></li>
            <li><a href="/facilities/sports/billiards">Billiards</a></li>
            <li><a href="/facilities/sports/carrom">Carrom</a></li>
            <li><a href="/facilities/sports/chess">Chess</a></li>
            <li><a href="/facilities/sports/gymnastics">Gymnastics</a></li>
            <li><a href="/facilities/sports/indoor-cricket">Indoor Cricket Nets</a></li>
            <li><a href="/facilities/sports/pistol-shooting">Pistol Shooting</a></li>
            <li><a href="/facilities/sports/squash">Squash</a></li>
            <li><a href="/facilities/sports/table-tennis">Table Tennis</a></li>
            <li><a href="/facilities/sports/yoga">Yoga</a></li>
            <li><a href="/facilities/sports/swimming">Swimming</a></li>
            <li><a href="/facilities/sports/volleyball">Volley Ball</a></li>
            <li><a href="/facilities/sports/Skating">Skating</a></li>
            <li><a href="/facilities/sports/gym">Gym</a></li>
            <li><a href="/facilities/sports/lawntennis">Lawn Tennis</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="footer-col">
          <h3>About Us</h3>
          <ul>
            <li><a href="/club/about">About Us</a></li>
            <li><a href="/club/contact">Contact</a></li>
            <li><a href="/facilities/recreation/kidszone">Kids Zone</a></li>
            <li><a href="/facilities/recreation/gaming">Gaming Zone</a></li>
            <li><a href="/facilities/recreation/library">Library Reading</a></li>
            <li><a href="/facilities/hospitality/rooms">Rooms</a></li>
            <li><a href="/facilities/hospitality/banquet">Banquet Halls</a></li>
            <li><a href="/facilities/hospitality/food">Food Services</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 — SportGrid Gymkhana. All rights reserved. Developed by Group 8
      </div>

      {/* Scroll to top */}
      <a href="#" className="scroll-top">↑</a>
    </footer>
  );
}
