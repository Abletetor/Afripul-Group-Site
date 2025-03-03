import "./TeamBehind.css";
import teamBehindImg from "../../assets/team-behind.jpeg";

const TeamBehind = () => {
   return (
      <section className="team-section">
         <div className="team-content">
            <h2 className="team-title">The team Behind it</h2>
            <p className="team-description">
               A fully engaged team, working hard to build a great tool that
               will solve problems in all aspects of society.
            </p>
            <div className="team-image">
               <img
                  src={ teamBehindImg }
                  alt="Team Working"
               />
            </div>
         </div>
      </section>
   );
};

export default TeamBehind;
