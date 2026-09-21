const ROCOS_RESEARCH_RELATIONS = {
  "control-systems": {
    "projects": [
      {
        "slug": "mems-multidof-microactuator",
        "context": "다축 구동과 센싱을 통합하고, 안정화 및 정밀 피드백 제어를 다룹니다."
      },
      {
        "slug": "energy-aware-microrobot",
        "context": "자율 마이크로로봇의 운동과 전력을 함께 고려하는 제어 연구입니다."
      },
      {
        "slug": "multidof-manipulator-control",
        "context": "관절 서보 제어, 임베디드 구현, 기구학, 매니퓰레이터의 협조 운동을 다룹니다."
      },
      {
        "slug": "omnidirectional-mobility",
        "context": "전방향 로봇의 적응형 상태 추정, 슬립 보상, 지능형 운동 제어에 초점을 둡니다."
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
        "context": "비전 AI, 적응형 추정, Sim-to-Real 학습, 전방향 로봇 제어를 통합합니다."
      },
      {
        "slug": "gps-free-navigation",
        "context": "디지털 트윈 지도, 스테레오 영상, 상태 추정을 활용한 이동 로봇 자율주행 연구입니다."
      },
      {
        "slug": "dense-smoke-sensor-fusion",
        "context": "열영상, 레이더, 초음파를 융합해 시야가 제한된 환경에서 로봇의 인지 능력을 확보합니다."
      },
      {
        "slug": "energy-aware-microrobot",
        "context": "소형 로봇의 자원 제약을 고려한 제어와 자율 운동을 다룹니다."
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
      "탑재 센서 기반 운동 상태 추정",
      "이동 로봇 운동 및 동역학 모델링",
      "데이터 기반 로봇 동역학 모델링",
      "센서리스 외란 추정",
      "슬립을 고려한 이동",
      "인간–로봇 협력 제어"
    ]
  },
  "autonomous-navigation": {
    "projects": [
      {
        "slug": "gps-free-navigation",
        "context": "비전–CAD 위치 추정, 상태 융합, 경로 재계획을 통한 GPS 비가용 환경의 항법을 다룹니다."
      },
      {
        "slug": "omnidirectional-mobility",
        "context": "제한된 동적 환경에서 이동 로봇의 지역 운동 계획에 학습 기법을 활용합니다."
      },
      {
        "slug": "dense-smoke-sensor-fusion",
        "context": "가시성이 낮아진 환경에서 자율 운용을 뒷받침하는 다중 모달 환경 인지 연구입니다."
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
        "context": "운전 측정값에서 물리 기반 파라미터를 추정하고, 해석 가능한 고장 분리를 수행합니다."
      },
      {
        "slug": "intermediate-heat-exchanger-integrity",
        "context": "유한요소해석에서 얻은 응력, 변형률, 크리프 정보를 체계적으로 처리하고 평가를 자동화합니다."
      },
      {
        "slug": "ndir-multigas-sensing",
        "context": "다종 가스 측정을 위한 센서 모델링, 패턴 인식, 데이터 기반 추정을 다룹니다."
      },
      {
        "slug": "dense-smoke-sensor-fusion",
        "context": "다중 모달 추정과 센서 융합으로 주변 환경을 파악합니다."
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
