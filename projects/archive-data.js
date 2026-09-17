// Add one object per project. Periods use YYYY.MM – YYYY.MM.
// The archive sorts by end date, then start date, newest first.
const ROCOS_PROJECTS = [
  {
    "slug": "gps-free-navigation",
    "title": "Vision–CAD Fusion for GPS-Free Autonomous Navigation",
    "summary": "A GPS-free autonomous navigation framework combining digital-twin maps, stereo vision, state estimation, dynamic replanning, and safety-aware control.",
    "period": "2026.04 – 2028.03",
    "role": "Principal Investigator",
    "supportedBy": "Ministry of SMEs and Startups (MSS) / Korea Technology and Information Promotion Agency for SMEs (TIPA)"
  },
  {
    "slug": "omnidirectional-mobility",
    "title": "AI-Driven Omnidirectional Mobility for Confined Manufacturing",
    "summary": "Vision AI, Sim-to-Real deep reinforcement learning, and adaptive sensor fusion for agile omnidirectional mobile robots operating in narrow manufacturing spaces.",
    "period": "2026.07 – 2027.12",
    "role": "Principal Investigator",
    "supportedBy": "Ministry of SMEs and Startups (MSS) / Korea Technology and Information Promotion Agency for SMEs (TIPA)"
  },
  {
    "slug": "intermediate-heat-exchanger-integrity",
    "title": "High-Temperature Structural Integrity Assessment of an Intermediate Heat Exchanger Prototype",
    "summary": "High-temperature structural assessment of an intermediate heat exchanger using 3D finite-element analysis, stress linearization, strain-limit evaluation, creep-damage assessment, and automated integrity evaluation.",
    "period": "2026.06 – 2026.12",
    "role": "Principal Investigator",
    "supportedBy": "Korea Atomic Energy Research Institute (KAERI)"
  },
  {
    "slug": "pump-fault-diagnosis",
    "title": "Interpretable Parameter-Space Fault Diagnosis of Centrifugal Pumps",
    "summary": "Physics-guided steady-state modeling and parameter estimation for interpretable detection and classification of centrifugal-pump faults.",
    "period": "2025.06 – 2025.11",
    "role": "Principal Investigator",
    "supportedBy": "Hanil Electric · Ilseok Scholarship Foundation"
  },
  {
    "slug": "self-priming-pump-cfd",
    "title": "CFD-Based Design Analysis of Air–Water Separation in a Self-Priming Pump",
    "summary": "Numerical investigation of air–water separation in a self-priming centrifugal pump, focusing on how separation-weir geometry influences priming and micro-bubble removal.",
    "period": "2025.05 – 2025.12",
    "role": "Principal Investigator",
    "supportedBy": "Hanil Electric · Ilseok Scholarship Foundation"
  },
  {
    "slug": "dense-smoke-sensor-fusion",
    "title": "Sensor Fusion for Object Detection in Dense Smoke Environments",
    "summary": "Fusion of thermal imaging, radar, and ultrasonic sensing for 3D object detection and localization under high-temperature, low-visibility fire-smoke conditions.",
    "period": "2021.06 – 2024.02",
    "role": "Principal Investigator",
    "supportedBy": "National Research Foundation of Korea (NRF)"
  },
  {
    "slug": "mems-multidof-microactuator",
    "title": "Multi-DOF MEMS Microactuator with Integrated Sensing and Feedback Control",
    "summary": "Development of a multi-degree-of-freedom MEMS microactuator combining rotation, two-axis tilting, vertical displacement, capacitive sensing, and precision feedback stabilization.",
    "period": "2016.11 – 2021.10",
    "role": "Principal Investigator",
    "supportedBy": "National Research Foundation of Korea (NRF)"
  },
  {
    "slug": "energy-aware-microrobot",
    "title": "Energy-Aware Motion Control for Autonomous Microrobots",
    "summary": "Integrated control of motion performance and power consumption through switching control, sensing-event scheduling, energy reuse, and low-power actuation for autonomous microrobots.",
    "period": "2014.11 – 2017.04",
    "role": "Principal Investigator",
    "supportedBy": "National Research Foundation of Korea (NRF)"
  },
  {
    "slug": "ndir-multigas-sensing",
    "title": "Low-Power NDIR Multi-Gas Sensing and Wireless Monitoring",
    "summary": "Development of a low-power NDIR multi-gas sensor with multi-path optical chambers, pattern-recognition algorithms, wireless communication, and mobile monitoring.",
    "period": "2014.12 – 2015.11",
    "role": "Principal Investigator",
    "supportedBy": "Korea Association of Industry, Academy and Research"
  },
  {
    "slug": "multidof-manipulator-control",
    "title": "Servo Control Architecture for a Multi-DOF Robotic Manipulator",
    "summary": "Development of joint-level servo controllers, embedded firmware, forward and inverse kinematics, and integrated manipulator motion-control algorithms.",
    "period": "2014.06 – 2015.07",
    "role": "Principal Investigator",
    "supportedBy": "Kyungin Tech Co., Ltd."
  }
];
