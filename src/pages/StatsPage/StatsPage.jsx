import "./StatsPage.scss";
import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Graph from "../../components/Graph/Graph";
import DropdownButton from "../../components/Dropdown/Dropdown";

const StatsPage = () => {
  return (
    <div className="stats-page">
      <section className="stats-page__stats">
        <div className="stats-page__top-line">
          <AvatarHeading
            avatarHeadingText="Stats for Jack"
            headingStyle={"dropdown-heading"}
            className="stats-page__heading"
          />

          <div className="stats-page__buttons">
            <DropdownButton
              option1={"LEVEL 1"}
              option2={"LEVEL 2"}
              option3={"LEVEL 3"}
              option4={"LEVEL 4"}
              dropdownStyle={"dropdown-level"}
            />
            <DropdownButton
              option1={"JACK"}
              option2={"HOPE"}
              option3={"EMMA"}
              option4={"CONNOR"}
              dropdownStyle={"dropdown-name"}
            />
          </div>
        </div>

        <div className="stats-page__score-graph">
          <h2>Score Over Time</h2>
          <Graph />
        </div>

        <div className="stats-page__correct-phonemes">
          <h2>Correct Phonemes</h2>
          <ul>
            <li>SH</li>
            <li>EE</li>
            <li>P</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StatsPage;
