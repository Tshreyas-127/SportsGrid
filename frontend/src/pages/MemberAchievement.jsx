import "./MemberAchievement.css";

// IMAGES (KEPT AS-IS)
import RS from "../assets/images/b439fc1b-a868-4647-ab16-9329df37be55.png";
import AV from "../assets/images/b7782b62-c8a3-4ae9-8552-b74bf730f70f.png";
import SP from "../assets/images/6aeaee78-2ef5-4a23-87a3-c6daa8466e09.png";
import RK from "../assets/images/f5185df9-7571-47a7-a650-e2eeb489f7a4.png";
import NJ from "../assets/images/ChatGPT Image Jan 27, 2026, 07_01_04 PM.png";
import KM from "../assets/images/ChatGPT Image Jan 27, 2026, 07_09_54 PM.png";

const members = [
  {
    name: "Rahul Sharma",
    sport: "Cricket",
    role: "All-Rounder",
    image: RS,
    achievements: [
      { title: "Best Batsman – Inter-Club League", year: 2023 },
      { title: "Player of the Match – Friendly Series", year: 2022 },
      { title: "Most Consistent Performer", year: 2023 },
    ],
    moments: [
      "Anchored crucial innings in league matches",
      "Known for discipline and consistency",
    ],
  },
  {
    name: "Amit Verma",
    sport: "Football",
    role: "Defender",
    image: AV,
    achievements: [
      { title: "Best Defender – Inter-Club Tournament", year: 2024 },
      { title: "Fair Play Award", year: 2023 },
      { title: "Community Cup Finalist", year: 2023 },
    ],
    moments: [
      "Strong defensive presence throughout the season",
      "Recognized for leadership on the field",
    ],
  },
  {
    name: "Sneha Patil",
    sport: "Lawn Tennis",
    role: "Doubles Specialist",
    image: SP,
    achievements: [
      { title: "Inter-Club Doubles Champion", year: 2023 },
      { title: "In-House Tournament Winner", year: 2022 },
      { title: "Most Improved Player", year: 2023 },
    ],
    moments: [
      "Excellent coordination in doubles matches",
      "Consistent performer in club tournaments",
    ],
  },
  {
    name: "Rohit Kulkarni",
    sport: "Cricket",
    role: "Fast Bowler",
    image: RK,
    achievements: [
      { title: "Best Bowler – Inter-Club League", year: 2023 },
      { title: "5-Wicket Haul – Friendly Match", year: 2022 },
      { title: "Most Economical Bowler", year: 2023 },
    ],
    moments: [
      "Delivered match-winning spells",
      "Known for accuracy and pace control",
    ],
  },
  {
    name: "Neha Joshi",
    sport: "Track – 100m",
    role: "Sprinter",
    image: NJ,
    achievements: [
      { title: "Gold – 100m Inter-Club Meet", year: 2024 },
      { title: "Fastest Timing of the Season", year: 2023 },
      { title: "Best Athlete Award", year: 2024 },
    ],
    moments: [
      "Consistent podium finishes in sprint events",
      "Strong focus on speed and fitness training",
    ],
  },
  {
    name: "Karan Mehta",
    sport: "Football",
    role: "Midfielder",
    image: KM,
    achievements: [
      { title: "Best Midfielder – Local Tournament", year: 2023 },
      { title: "Highest Assists in Season", year: 2022 },
      { title: "Team Leadership Recognition", year: 2023 },
    ],
    moments: [
      "Key playmaker in midfield transitions",
      "Recognized for vision and teamwork",
    ],
  },
];

export default function MemberAchievement() {
  return (
    <div className="member-page">
      {/* HEADER */}
      <header className="member-hero">
        <h1>Member Achievements</h1>
        <p>
          Celebrating individual excellence and contributions that strengthen
          our club’s sporting culture.
        </p>
      </header>

      {/* MEMBERS */}
      <section className="members-section">
        {members.map((member, index) => (
          <div
            className={`member-row ${index % 2 === 1 ? "reverse" : ""}`}
            key={index}
          >
            {/* IMAGE */}
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>

            {/* CONTENT */}
            <div className="member-content">
              <h2>{member.name}</h2>
              <p className="member-meta">
                {member.sport} • {member.role}
              </p>

              <ul className="achievement-list">
                {member.achievements.map((a, i) => (
                  <li key={i}>
                    <strong>{a.title}</strong>{" "}
                    <span>({a.year})</span>
                  </li>
                ))}
              </ul>

              {/* PLAYER MOMENTS */}
              <div className="player-moments">
                <h4>Player Moments</h4>
                <ul>
                  {member.moments.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="member-footer">
        <p>© 2026 Sports Club</p>
        <p>Celebrating individual excellence at club level</p>
      </footer>
    </div>
  );
}
