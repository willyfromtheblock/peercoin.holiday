import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const buildTimeLineElement = ({ transactionId, text, date }, index) => {
  var myDate = date > 0 ? new Date(date * 1000) : new Date();
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
        <div className="col-1">
          <img src="../assets/img/calendar.png" alt="calendar" />
        </div>
        <div className="col-auto">
          <div>{myDate.toLocaleString("en-GB", { timeZone: "UTC" })}</div>
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
            href={"https://blockbook.peercoin.net/tx/" + transactionId}
            target="_blank"
            rel="noreferrer"
            className="ppc-timeline_source"
          >
            Transaction
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default function TimeLine({ holidayMessages }) {
  if (holidayMessages.length === 0) return <div></div>;

  holidayMessages.sort(function (x, y) {
    return y.date - x.date;
  });

  return (
    <div className="row">
      <div
        className="col d-flex justify-content-center ppc-timeline_background"
        id="timeline"
      >
        <VerticalTimeline>
          {holidayMessages.map((entry, index) => {
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
