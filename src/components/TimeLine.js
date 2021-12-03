import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const buildTimeLineElement = ({ sourceURL, text, date }, index) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#3cb054", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      icon={<img src="../assets/img/christmasTree.png" alt="christmas tree" />}
      iconStyle={{
        background: "#3cb054",
        color: "#fff",
        display: "flex",
        padding: "10px",
      }}
      key={index}
    >
      <div className="row">
        <div className="col">
          <img src="../assets/img/calendar.png" alt="calendar" />
          <span className="ml-0 ml-2">{date}</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <span className="ppc-timeline_text">&laquo; {text} &raquo;</span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <a
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            className="ppc-timeline_source"
          >
            Source
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default function TimeLine({ orbituaries }) {
  function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
  orbituaries.sort(custom_sort);

  return (
    <div className="row">
      <div
        className="col d-flex justify-content-center ppc-timeline_background"
        id="timeline"
      >
        <VerticalTimeline>
          {orbituaries.map((entry, index) => {
            return buildTimeLineElement(entry, index);
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: "#3cb054",
              color: "#fff",
              display: "flex",
              padding: "13px",
            }}
            icon={
              <img src="../assets/img/peercoin-leaf.svg" alt="peercoin leaf" />
            }
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
