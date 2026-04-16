import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Conference.css';

const treeNodes = [
  { id: 1, label: 'Penetration Testing', x: 25, y: 30, delay: 0.5, desc: 'Ethical Hacking & Vulnerability Assessment' },
  { id: 2, label: 'Forensics', x: 75, y: 30, delay: 0.7, desc: 'Digital Evidence & Incident Response' },
  { id: 3, label: 'CyberSecurity', x: 50, y: 15, delay: 0.9, desc: 'Security & Privacy' },
  { id: 4, label: 'Network Security', x: 15, y: 60, delay: 0.3, desc: 'Firewalls & Intrusion Detection' },
  { id: 5, label: 'Malware Analysis', x: 85, y: 60, delay: 0.4, desc: 'Reverse Engineering & Threat Intel' },
];

const paths = [
  "M 50 90 Q 35 70 25 30", // to Penetration Testing
  "M 50 90 Q 65 70 75 30", // to Forensics
  "M 50 90 Q 50.1 50 50 15", // to CyberSecurity (0.1 offset avoids SVG 0-width bounding-box bug)
  "M 50 90 Q 25 80 15 60", // to Network Sec
  "M 50 90 Q 75 80 85 60", // to Malware Anal
];

export default function Conference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="conference" className="conference-section" ref={ref}>
      <div className="conf-layout">
        <div className="conf-info">
          <motion.h2 
            className="conf-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Technical Conference
          </motion.h2>
          <motion.p 
            className="conf-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the <strong>Tree of Knowledge</strong>. Join industry leaders, visionaries, and ethical hackers as they dissect the frontiers of digital forensics, cryptography, and offensive security.
          </motion.p>
          
          <AnimatePresenceBox activeNode={activeNode} />

          <motion.button 
            className="conf-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reserve a Seat
          </motion.button>
        </div>
        <div className="conf-visual">
          <div className="tree-container">
            <svg viewBox="0 0 100 100" className="tree-svg">
              {/* Trunk/root base */}
              <motion.circle 
                cx="50" cy="90" r="4" 
                fill="#d4af37" 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="tree-root"
              />
              <motion.text 
                x="50" y="98" 
                fill="#d4af37" 
                fontSize="4" 
                textAnchor="middle" 
                className="tree-root-text"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                KNOWLEDGE CORE
              </motion.text>

              {/* Branches */}
              {paths.map((d, i) => (
                <motion.path
                  key={`path-${i}`}
                  d={d}
                  fill="none"
                  stroke="url(#branchGlow)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.2 + (i * 0.15), ease: "easeInOut" }}
                />
              ))}

              {/* Data Orbs (traveling along branches) */}
               {paths.map((d, i) => (
                <motion.circle 
                  key={`orb-${i}`} 
                  r="0.8" 
                  fill="#00F5FF" 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
                  className="data-orb"
                >
                  <animateMotion dur={`${3 + (i % 3) * 0.5}s`} repeatCount="indefinite" path={d} />
                </motion.circle>
              ))}

              {/* Nodes */}
              {treeNodes.map((node) => (
                <g 
                  key={`node-${node.id}`} 
                  onMouseEnter={() => setActiveNode(node)} 
                  onMouseLeave={() => setActiveNode(null)}
                  className="tree-node-group"
                >
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="2.5"
                    fill="#0a0a1a"
                    stroke={activeNode?.id === node.id ? "#FF9933" : "#00F5FF"}
                    strokeWidth="0.8"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: activeNode?.id === node.id ? 1.5 : 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: isInView ? node.delay + 0.8 : 0 }}
                    className="tree-node"
                  />
                  <motion.text
                    x={node.x}
                    y={node.y - 5}
                    fill={activeNode?.id === node.id ? "#FF9933" : "#fff"}
                    fontSize="3.5"
                    textAnchor="middle"
                    fontWeight="bold"
                    filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.8))"
                    initial={{ opacity: 0, y: 5 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: activeNode?.id === node.id ? 1.2 : 1 } : { opacity: 0, y: 5 }}
                    transition={{ duration: 0.5, delay: isInView ? node.delay + 1 : 0 }}
                    className="tree-node-label"
                  >
                    {node.label}
                  </motion.text>
                </g>
              ))}

              <defs>
                <linearGradient id="branchGlow" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#FF9933" />
                  <stop offset="100%" stopColor="#00F5FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

const AnimatePresenceBox = ({ activeNode }) => {
  return (
    <div className="node-info-box">
      <AnimatePresence mode="wait">
        {activeNode ? (
          <motion.div
            key="node-info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="node-info-content"
          >
            <span className="node-info-label">{activeNode.label} Tracker</span>
            <p className="node-info-desc">{activeNode.desc}</p>
          </motion.div>
        ) : (
          <motion.div
            key="node-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="node-info-empty"
          >
            Hover over the nodes to explore topics
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
