import './StoryTransition.css';

export default function StoryTransition({ chapter, title, text }) {
  return (
    <div className="story-transition-section">
      <div className="story-line"></div>
      <div className="story-content">
        <span className="story-chapter">CHAPTER {chapter}</span>
        <h2 className="story-title">{title}</h2>
        <p className="story-text">{text}</p>
      </div>
      <div className="story-line"></div>
    </div>
  );
}
