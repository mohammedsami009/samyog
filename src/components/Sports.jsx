import React, { useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import './Sports.css';

const sportsData = [
  { 
    id: 1, 
    title: 'Football', 
    icon: '⚽', 
    date: '28th Apr • Arena A', 
    animType: 'bounce',
    desktopClass: 'node-pos-1',
    mobileClass: 'node-mob-1'
  },
  { 
    id: 2, 
    title: 'Basketball', 
    icon: '🏀', 
    date: '28th Apr • Court 1', 
    animType: 'bounce',
    desktopClass: 'node-pos-2',
    mobileClass: 'node-mob-2'
  },
  { 
    id: 3, 
    title: 'Badminton', 
    icon: '🏸', 
    date: '29th Apr • Indoor', 
    animType: 'shuttle',
    desktopClass: 'node-pos-3',
    mobileClass: 'node-mob-3'
  },
  { 
    id: 4, 
    title: 'Cricket', 
    icon: '🏏', 
    date: '29th Apr • Ground', 
    animType: 'bounce',
    desktopClass: 'node-pos-4',
    mobileClass: 'node-mob-4'
  },
];

const SportNode = ({ data, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getMicroAnim = () => {
    if (data.animType === 'bounce') {
      return { y: isHovered ? [0, -10, 0] : 0, transition: { repeat: Infinity, duration: 0.6 } };
    }
    if (data.animType === 'shuttle') {
      return { rotate: isHovered ? [0, -20, 20, 0] : 0, transition: { repeat: Infinity, duration: 0.4 } };
    }
    return { scale: isHovered ? [1, 1.1, 1] : 1, transition: { repeat: Infinity, duration: 1 } };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`sport-node-container ${isMobile ? data.mobileClass : data.desktopClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div 
        className="sport-path-dot"
        animate={{ scale: isHovered || isActive ? 1.5 : 1, boxShadow: isHovered ? '0 0 30px #00F5FF' : '0 0 15px #00F5FF' }}
      />
      
      <motion.div 
        className={`sport-node-card ${isHovered || isActive ? 'sport-node-hovered' : ''}`}
        animate={{ scale: isHovered ? 1.05 : 1 }}
      >
        <motion.div className="sport-node-icon" animate={getMicroAnim()}>
          {data.icon}
        </motion.div>
        <h3 className="sport-node-title">{data.title}</h3>
        <span className="sport-node-date">{data.date}</span>

        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sport-node-expand"
            >
              <p className="sport-node-register">Register Now</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function Sports() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  return (
    <section ref={containerRef} id="sports" className="sports-master-container">
      <div className="sports-master-header">
        <h2 className="sports-master-title">Sports Arena</h2>
        <p className="sports-master-subtitle">Follow the trail of champions</p>
      </div>

      <div className="sports-path-container">
        {/* DESKTOP PATH */}
        <div className="sports-desktop-path">
          <svg viewBox="0 0 100 100" className="sports-svg" preserveAspectRatio="none">
            <path d="M -10,50 C 25,90 40,10 60,70 S 80,30 110,50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <motion.path 
              d="M -10,50 C 25,90 40,10 60,70 S 80,30 110,50" 
              fill="none" 
              stroke="url(#desktopGlow)" 
              strokeWidth="0.8"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
              className="sports-active-path"
            />
            <motion.circle r="1" fill="#FF9933" className="sports-particle">
              <animateMotion dur="4s" repeatCount="indefinite" path="M -10,50 C 25,90 40,10 60,70 S 80,30 110,50" />
            </motion.circle>
            <motion.circle r="1.5" fill="#00F5FF" className="sports-particle-blue">
              <animateMotion dur="5s" repeatCount="indefinite" path="M -10,50 C 25,90 40,10 60,70 S 80,30 110,50" begin="2s" />
            </motion.circle>

            <defs>
              <linearGradient id="desktopGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="50%" stopColor="#FF9933" />
                <stop offset="100%" stopColor="#00F5FF" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="sports-desktop-nodes">
             {sportsData.map(sport => <SportNode key={sport.id} data={sport} isMobile={false} />)}
          </div>
        </div>

        {/* MOBILE PATH */}
        <div className="sports-mobile-path">
          <svg viewBox="0 0 100 100" className="sports-svg-mobile" preserveAspectRatio="none">
            <path d="M 50,-10 Q 80,25 50,50 T 50,110" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <motion.path 
              d="M 50,-10 Q 80,25 50,50 T 50,110" 
              fill="none" 
              stroke="url(#mobileGlow)" 
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
              className="sports-active-path"
            />
            <motion.circle r="2" fill="#FF9933">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 50,-10 Q 80,25 50,50 T 50,110" />
            </motion.circle>
            <defs>
              <linearGradient id="mobileGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="50%" stopColor="#FF9933" />
                <stop offset="100%" stopColor="#00F5FF" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="sports-mobile-nodes">
             {sportsData.map(sport => <SportNode key={sport.id} data={sport} isMobile={true} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
