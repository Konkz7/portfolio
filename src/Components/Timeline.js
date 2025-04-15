import React from 'react';
import './Timeline.css';

// TimelineItem takes these props:
// • header: A title for that work experience entry (like your role).
// • logo: URL or import for a logo image.
// • workplaceName: The name of the company or workplace.
// • description: A short paragraph describing the experience.
// • children: Additional sub elements (for bullet points, etc.)
const TimelineItem = ({ header, logo, workplaceName, description, children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-header">
        {logo && (
          <img src={logo} alt={`${workplaceName} logo`} className="timeline-logo" />
        )}
        <div className="header-text">
          <h3 className="timeline-workplace">{workplaceName}</h3>
          <h4 className="timeline-role">{header}</h4>
        </div>
      </div>
      <div className="timeline-content">
        <p className="timeline-description">{description}</p>
        {children && <div className="timeline-points">{children}</div>}
      </div>
    </div>
  );
};

// VerticalTimeline will serve as the container for all timeline items.
const VerticalTimeline = ({ children }) => {
  return <div className="vertical-timeline">{children}</div>;
};

export { VerticalTimeline, TimelineItem };
