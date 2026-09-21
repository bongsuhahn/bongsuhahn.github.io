// Relationships only; project records come from archive-data.js, and publication records from index.html.
// Add project slugs and exact publication/manuscript titles to categorize future work.
const ROCOS_RESEARCH_RELATIONS = {
  "control-systems": {
    "projects": [
      {
        "slug": "mems-multidof-microactuator",
        "context": "Multi-axis actuation, sensing, stabilization, and precision feedback control."
      },
      {
        "slug": "energy-aware-microrobot",
        "context": "Integrated motion and power control for autonomous microrobotic systems."
      },
      {
        "slug": "multidof-manipulator-control",
        "context": "Joint servo control, embedded implementation, kinematics, and coordinated manipulator motion."
      },
      {
        "slug": "omnidirectional-mobility",
        "context": "Adaptive state estimation, slip compensation, and intelligent motion control for omnidirectional robots."
      }
    ],
    "projectLimit": 4,
    "publications": {
      "featured": [
        "Sensorless Human-Intent-Based Power-Assist Control for Indoor Cooperative Transport via Interaction Estimation and Compliant Motion Generation",
        "Force-Fighting Phenomena and Disturbance Rejection in Aircraft Dual-Redundant Electro-Mechanical Actuation Systems",
        "Convergence and Energy Analysis for Iterative Adaptive ON-OFF Control of Piezoelectric Microactuators",
        "A Model-Free ON-OFF Iterative Adaptive Controller Based on Stochastic Approximation",
        "On-Off Iterative Adaptive Controller for Low-Power Micro-Robotic Step Regulation"
      ],
      "additional": [
        "A Sensorless Control Framework for Human Intention Based Power Assist Robots",
        "A Digital Current Control Using Single DC-Link Current Sensing of BLDC Actuation Systems",
        "Performance and Power/Energy Consumption in Microrobotic Servo Systems: Iterative Adaptive On-Off Controllers vs. LQG/PWM Controllers",
        "Active Prevention Strategy for Rollover of Cargo Crane Trucks Using a Control Moment Gyro",
        "A Controller for Minimizing Roll Moment in an Attitude Control System with Thrusters Using Asymmetric Nozzle Throats",
        "Modeling and Optimal Low-Power On-Off Control of Thin-Film Piezoelectric Rotational Actuators"
      ]
    },
    "directions": [
      "Data-Driven Dynamic Modeling and Sensorless Joint-Torque Estimation for Collision-Aware Control of a Six-DOF Manipulator"
    ]
  },
  "mobile-robotics": {
    "projects": [
      {
        "slug": "omnidirectional-mobility",
        "context": "Vision AI, adaptive estimation, Sim-to-Real learning, and omnidirectional robot control."
      },
      {
        "slug": "gps-free-navigation",
        "context": "Digital-twin maps, stereo vision, state estimation, and autonomous mobile-robot navigation."
      },
      {
        "slug": "dense-smoke-sensor-fusion",
        "context": "Thermal, radar, and ultrasonic sensing for robotic perception in low-visibility environments."
      },
      {
        "slug": "energy-aware-microrobot",
        "context": "Resource-aware control and autonomous motion for compact robotic systems."
      }
    ],
    "projectLimit": 4,
    "publications": {
      "featured": [
        "Sensorless Human-Intent-Based Power-Assist Control for Indoor Cooperative Transport via Interaction Estimation and Compliant Motion Generation",
        "A Sensorless Control Framework for Human Intention Based Power Assist Robots",
        "The Design of a Low-Cost Sensing and Control Architecture for a Search and Rescue Assistant Robot",
        "Design of an In-Pipe Mobile Robot with Screw Drive Mechanism Using Control Moment Gyroscopes",
        "Performance and Power/Energy Consumption in Microrobotic Servo Systems: Iterative Adaptive On-Off Controllers vs. LQG/PWM Controllers"
      ],
      "additional": [
        "HybridDWAVO: Finite-Horizon Velocity-Obstacle Filtering within the Dynamic Window Approach for Dynamic Obstacle Avoidance",
        "Enhancing Obstacle Avoidance in Dynamic Window Approach via Dynamic Obstacle Behavior Prediction",
        "Research and Conceptual Design of Sensor Fusion for Object Detection in Dense Smoke Environments",
        "A User Following Control System for Displays"
      ]
    },
    "directions": [
      "Motion-State Estimation from Onboard Sensing",
      "Robot Motion and Dynamic Modeling",
      "Data-Driven Robot Dynamics Modeling",
      "Sensorless Disturbance Estimation",
      "Slip-Aware Mobility",
      "Human–Robot Cooperative Control"
    ]
  },
  "autonomous-navigation": {
    "projects": [
      {
        "slug": "gps-free-navigation",
        "context": "Vision–CAD localization, state fusion, dynamic replanning, and GPS-free navigation."
      },
      {
        "slug": "omnidirectional-mobility",
        "context": "Learning-assisted local motion planning for mobile robots in constrained dynamic environments."
      },
      {
        "slug": "dense-smoke-sensor-fusion",
        "context": "Multimodal environmental perception supporting autonomous operation under degraded visibility."
      }
    ],
    "projectLimit": 4,
    "publications": {
      "featured": [
        "HybridDWAVO: Finite-Horizon Velocity-Obstacle Filtering within the Dynamic Window Approach for Dynamic Obstacle Avoidance",
        "Enhancing Obstacle Avoidance in Dynamic Window Approach via Dynamic Obstacle Behavior Prediction",
        "Research and Conceptual Design of Sensor Fusion for Object Detection in Dense Smoke Environments",
        "The Design of a Low-Cost Sensing and Control Architecture for a Search and Rescue Assistant Robot"
      ],
      "additional": [
        "A User Following Control System for Displays",
        "Design of an In-Pipe Mobile Robot with Screw Drive Mechanism Using Control Moment Gyroscopes"
      ]
    },
    "directions": [
      "Uncertainty-Calibrated Risk-Aware Predictive Dynamic Window Approach for Dynamic Obstacle Avoidance",
      "Learning-Assisted Localization Correction for Resource-Constrained Visual SLAM with Sparse Map Representations",
      "Data-Driven Local Obstacle Avoidance for Mobile Robots via Supervised Learning and Reinforcement Learning"
    ]
  },
  "data-driven-modeling-estimation": {
    "projects": [
      {
        "slug": "pump-fault-diagnosis",
        "context": "Physics-guided parameter estimation and interpretable fault separation from measured operating data."
      },
      {
        "slug": "intermediate-heat-exchanger-integrity",
        "context": "Structured processing and automated interpretation of FEA-derived stress, strain, and creep information."
      },
      {
        "slug": "ndir-multigas-sensing",
        "context": "Sensor modeling, pattern recognition, and data-driven estimation for multi-gas measurement."
      },
      {
        "slug": "dense-smoke-sensor-fusion",
        "context": "Multimodal estimation and sensor fusion for environmental perception."
      }
    ],
    "projectLimit": 4,
    "publications": {
      "featured": [
        "A Two-Stage Probabilistic Framework with Validity Screening and Physics-Informed Trend Modeling for Lithium-Ion Battery Health Estimation from Short Discharge Transients",
        "Explainable Integration of Process and Optical Parameters for Plasma Etch Depth Prediction",
        "Position Estimator Design for a MEMS Top-Drive Electrostatic Rotary Actuator",
        "Sensing Parameter Selection Strategy for Ultra-Low-Power Micro-Servosystem Identification",
        "Sensing Strategies to Reduce Power Consumption of Recursive-Least-Squares Parameter Identification of Autonomous Microsystems"
      ],
      "additional": [
        "Angle Estimator Design for Electrostatic Rotary Actuator",
        "A Digital Current Control Using Single DC-Link Current Sensing of BLDC Actuation Systems"
      ]
    },
    "directions": [
      "Observability-Informed Adaptive Deep Koopman Modeling for Battery Monitoring",
      "Observability-Informed Low-Order Nonlinear State-Space Modeling and Estimation for Plasma Etching",
      "Steady-State Parameter-Space Analysis for Interpretable Fault Diagnosis of Centrifugal Pumps",
      "Model Calibration for Lithium-Ion Battery Voltage Prediction Using a Single Particle Model with Electrolyte",
      "Adaptive Endpoint Detection Modeling under Limited and Imbalanced Plasma Etching Data",
      "OES-Supported State-Constrained Recipe Optimization for Mean Thickness and Uniformity Control in Plasma Etching"
    ]
  }
};
