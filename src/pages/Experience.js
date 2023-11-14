import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021- present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Vellore Institute of Technology, Chennai.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          </h4>
          <p>B-tech in Computer Science and Engineering.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019-2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SBS Model High School, Garhshankar
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          </h4>
          <p> Class: 4th - 10th
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2019"
          iconStyle={{ background: "#3e497a", color: "#000" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Carmel School, Garhshankar
          </h3>
          <p> Class: 4th - 10th</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;