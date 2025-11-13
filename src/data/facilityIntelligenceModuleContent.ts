import { ModuleContent } from "@/types/course";

export const facilityIntelligenceModuleContent: Record<number, ModuleContent> = {
  1: {
    id: 1,
    title: "Introduction to Facility Intelligence™",
    objective: "Understand the Nexum Suum ecosystem, data-driven facility management, and professional operational standards",
    duration: "90 minutes",
    narrationScript: [
      "Welcome to the Facility Intelligence Engineer Certification program by Nexum Suum.",
      "Facility Intelligence represents the convergence of operational excellence, digital systems, and continuous improvement.",
      "This module introduces you to the complete Nexum Suum SaaS ecosystem and establishes the foundation for professional facility management.",
      "You will learn how to navigate the Portal, understand data flow between systems, and embrace virtuous operational behaviors.",
      "By the end of this module, you'll understand why digital transformation is essential for modern facility operations."
    ],
    scenario: {
      title: "Day One: New Facility Intelligence Engineer",
      description: "Your first day as a Facility Intelligence Engineer at a 500,000 sq ft manufacturing facility",
      situation: "You arrive at the facility and are given access to the Nexum Suum Portal. Your supervisor explains that the facility recently transitioned from paper logs to the digital ecosystem. Your task is to familiarize yourself with the dashboard, review yesterday's boiler and chiller logs, and identify any outstanding compliance items. The plant manager expects a brief summary by end of shift."
    },
    standards: {
      title: "Professional Standards for Facility Intelligence Engineers",
      items: [
        "Complete daily system checks using digital logs within the first 2 hours of shift",
        "Maintain 100% accuracy in data entry for all operational parameters",
        "Respond to system alerts within 15 minutes during operating hours",
        "Document all abnormal conditions with photos and detailed descriptions",
        "Review VVFI recommendations daily and implement corrective actions",
        "Communicate critical issues to supervisors immediately using professional protocols",
        "Maintain current knowledge of all connected facility systems",
        "Demonstrate virtuous behaviors: discipline, accountability, honesty, and continuous improvement"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What are the core components of the Nexum Suum SaaS ecosystem?",
        type: "multiple-choice",
        options: [
          "Portal, VVFI, Boiler Log, Chiller Log, Compliance Log, Training Center, AI Engine, Digital Workbooks",
          "Only Boiler Log and Chiller Log",
          "Portal and AI Engine only",
          "Training Center and Compliance Log only"
        ],
        correctAnswer: 0,
        explanation: "The complete Nexum Suum ecosystem includes all eight integrated components: Portal, VVFI, Boiler Log, Chiller Log, Compliance Log, Training Center, AI Engine, and Digital Workbooks."
      },
      {
        id: 2,
        question: "Why are digital logs superior to paper logs for facility operations?",
        type: "multiple-choice",
        options: [
          "They're easier to lose",
          "Real-time data analysis, trend tracking, instant alerts, accessibility, and permanent documentation",
          "They require less training",
          "They're cheaper to implement"
        ],
        correctAnswer: 1,
        explanation: "Digital logs provide real-time analytics, automatic trend detection, instant alerting for abnormal conditions, multi-user accessibility, and permanent, searchable documentation—capabilities impossible with paper systems."
      },
      {
        id: 3,
        question: "What is the primary role of a Facility Intelligence Engineer?",
        type: "multiple-choice",
        options: [
          "Only monitor equipment",
          "Integrate data-driven decision making with operational excellence to optimize facility systems",
          "Replace all maintenance staff",
          "Only complete paperwork"
        ],
        correctAnswer: 1,
        explanation: "Facility Intelligence Engineers combine technical expertise with data analytics to optimize systems, predict issues, ensure compliance, and drive continuous improvement across all facility operations."
      },
      {
        id: 4,
        question: "Which virtuous behavior is most critical when documenting a system failure?",
        type: "multiple-choice",
        options: [
          "Speed over accuracy",
          "Honesty and complete documentation, even if it reveals operational mistakes",
          "Minimal detail to save time",
          "Only document successful operations"
        ],
        correctAnswer: 1,
        explanation: "Honesty and thorough documentation are essential for root cause analysis, preventing future failures, and maintaining operational integrity. Incomplete or dishonest documentation compromises safety and efficiency."
      }
    ],
    reflectionPrompt: "Reflect on how transitioning from reactive maintenance to intelligent, data-driven facility management can transform your role and career trajectory. What specific skills will you need to develop?",
    keyTakeaways: [
      "Facility Intelligence combines operational expertise with digital systems and data analytics",
      "The Nexum Suum ecosystem provides integrated tools for all aspects of facility management",
      "Digital logs enable real-time monitoring, predictive analytics, and continuous improvement",
      "Professional standards require discipline, accuracy, timely response, and clear communication",
      "Virtuous behaviors (discipline, accountability, honesty) are foundational to operational excellence",
      "Data-driven decision making replaces reactive, intuition-based operations"
    ]
  },

  2: {
    id: 2,
    title: "VVFI: Virtual Virtuous Facility Instructor",
    objective: "Master the use of VVFI for system diagnosis, compliance analysis, and operational guidance",
    duration: "75 minutes",
    narrationScript: [
      "VVFI—the Virtual Virtuous Facility Instructor—is your AI-powered expert assistant for facility operations.",
      "VVFI can analyze photos of equipment, interpret log data, diagnose issues, and recommend corrective actions.",
      "Understanding how to properly use VVFI's capabilities will dramatically accelerate your troubleshooting and decision-making.",
      "This module teaches you prompt engineering, photo analysis workflows, and how to leverage VVFI for compliance and PM optimization.",
      "VVFI is not a replacement for your expertise—it's a force multiplier that helps you work smarter and faster."
    ],
    scenario: {
      title: "Chiller High Approach Temperature Alert",
      description: "Using VVFI to diagnose a condenser issue",
      situation: "At 10:30 AM, you receive an alert: Chiller #2 approach temperature has increased from 3°F to 7°F over the past 4 hours. The chiller is still running, but efficiency is declining. You take photos of the condenser gauge panel, the cooling tower sump, and the tube bundle access panel. You upload these to VVFI with a prompt: 'Chiller 2 approach temp rising. See attached photos. What should I check?' VVFI responds with a step-by-step diagnostic protocol."
    },
    standards: {
      title: "VVFI Usage Standards",
      items: [
        "Always provide clear, specific prompts with relevant context (equipment ID, readings, timeline)",
        "Upload high-quality photos showing gauges, nameplates, and problem areas clearly",
        "Review VVFI recommendations before taking action—validate against your knowledge",
        "Document VVFI recommendations and actions taken in system logs",
        "Use VVFI Compliance Analyzer for all regulatory document reviews",
        "Respect daily prompt limits—prioritize critical issues",
        "Never rely solely on VVFI for life-safety decisions—escalate to supervisors",
        "Provide feedback when VVFI recommendations are particularly helpful or inaccurate"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What information should you include in a VVFI prompt for equipment troubleshooting?",
        type: "multiple-choice",
        options: [
          "Just 'help me fix this'",
          "Equipment ID, current readings, timeline of issue, recent changes, and specific symptoms",
          "Only the equipment model number",
          "A vague description of the problem"
        ],
        correctAnswer: 1,
        explanation: "Effective VVFI prompts include: equipment identification, specific parameter readings, timeline (when did it start, how has it changed), recent maintenance or operational changes, and detailed symptom description. Context enables better AI analysis."
      },
      {
        id: 2,
        question: "When should you NOT rely solely on VVFI recommendations?",
        type: "multiple-choice",
        options: [
          "For routine parameter logging",
          "For life-safety situations, emergency shutdowns, or confined space entry decisions",
          "For basic troubleshooting",
          "For compliance document review"
        ],
        correctAnswer: 1,
        explanation: "While VVFI is a powerful tool, life-safety decisions, emergency response, and high-risk operations require human expertise, supervisor approval, and adherence to established safety protocols. Always escalate critical situations."
      },
      {
        id: 3,
        question: "What is the primary benefit of VVFI's photo analysis capability?",
        type: "multiple-choice",
        options: [
          "It replaces the need for inspections",
          "It can identify gauge readings, equipment conditions, and potential issues from images, providing immediate diagnostic insights",
          "It only works for boilers",
          "It eliminates the need for documentation"
        ],
        correctAnswer: 1,
        explanation: "VVFI can analyze photos to read gauges, identify equipment conditions, spot anomalies (leaks, corrosion, misalignments), and suggest diagnostic steps—providing rapid initial assessment that guides your investigation."
      },
      {
        id: 4,
        question: "How should you handle a situation where VVFI's recommendation conflicts with your experience?",
        type: "multiple-choice",
        options: [
          "Always follow VVFI without question",
          "Ignore VVFI completely",
          "Document both perspectives, consult with supervisor, and apply critical thinking to determine best course",
          "Disable VVFI access"
        ],
        correctAnswer: 2,
        explanation: "VVFI is a tool that augments your expertise, not replaces it. When conflicts arise, document both the AI recommendation and your assessment, consult experienced personnel, and make informed decisions based on complete information."
      }
    ],
    reflectionPrompt: "Consider a recent equipment issue at your facility. How could VVFI have accelerated diagnosis or improved your response? What questions would you have asked?",
    keyTakeaways: [
      "VVFI is an AI-powered diagnostic and guidance tool integrated into the Nexum Suum ecosystem",
      "Effective prompts include equipment ID, specific readings, timelines, and detailed context",
      "Photo analysis enables rapid visual assessment of equipment conditions and gauge readings",
      "VVFI Compliance Analyzer helps interpret regulations and identify compliance gaps",
      "Always validate VVFI recommendations against your knowledge and facility-specific conditions",
      "Life-safety and emergency decisions require human expertise and supervisor involvement",
      "Document VVFI interactions and recommendations for continuous improvement and training"
    ]
  },

  3: {
    id: 3,
    title: "Boiler Operations & Thermal Efficiency",
    objective: "Operate boilers safely, monitor thermal efficiency, and optimize combustion performance using digital logs",
    duration: "120 minutes",
    narrationScript: [
      "Boilers are the thermal heart of most industrial facilities, converting fuel into steam or hot water for heating and process loads.",
      "Understanding boiler types, combustion fundamentals, and efficiency metrics is essential for safe, cost-effective operations.",
      "This module covers firetube and watertube boilers, burner management, feedwater systems, and how to interpret efficiency data.",
      "You'll learn to use the Nexum Suum Boiler Log to track critical parameters and identify efficiency degradation early.",
      "Proper boiler operation directly impacts energy costs, safety, and environmental compliance."
    ],
    scenario: {
      title: "Declining Boiler Efficiency Investigation",
      description: "Identifying the cause of a 3% efficiency drop over two weeks",
      situation: "Your Boiler Log dashboard shows Boiler #1 thermal efficiency has declined from 83% to 80% over the past two weeks. Stack temperature has increased from 385°F to 410°F, and O₂ readings have risen from 3.5% to 5.2%. The boiler is operating normally with no alarms. You need to investigate the cause, recommend corrective actions, and document your findings. You use VVFI to analyze the trend data and develop an action plan."
    },
    standards: {
      title: "Boiler Operating Standards",
      items: [
        "Log all critical parameters (steam pressure, feedwater temp, stack temp, O₂, blowdown) at specified intervals",
        "Maintain stack temperature within manufacturer specifications (typically 300-450°F)",
        "Target O₂ levels between 2-4% for optimal combustion efficiency",
        "Perform daily visual inspections for leaks, unusual noises, and flame quality",
        "Conduct blowdown procedures per water chemistry protocols",
        "Monitor thermal efficiency trends—investigate any decline >2%",
        "Test safety valves, low-water cutoffs, and flame safeguard systems per PM schedule",
        "Never override safety interlocks without supervisor authorization and documented justification"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary difference between firetube and watertube boilers?",
        type: "multiple-choice",
        options: [
          "Firetube boilers are always more efficient",
          "In firetube boilers, hot gases pass through tubes surrounded by water; in watertube boilers, water passes through tubes surrounded by hot gases",
          "Watertube boilers cannot produce high pressure steam",
          "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "Firetube boilers have hot combustion gases passing through tubes immersed in water, typically used for lower pressures. Watertube boilers have water in tubes with hot gases outside, allowing higher pressures and faster steam generation."
      },
      {
        id: 2,
        question: "If boiler stack temperature increases while O₂ percentage rises, what is the most likely cause?",
        type: "multiple-choice",
        options: [
          "Perfect combustion",
          "Excess air entering the system, reducing combustion efficiency and increasing heat loss",
          "Too much fuel",
          "Normal operation"
        ],
        correctAnswer: 1,
        explanation: "Rising stack temperature with increasing O₂ indicates excess air is passing through the boiler. This excess air absorbs heat without participating in combustion, reducing efficiency and increasing stack losses."
      },
      {
        id: 3,
        question: "What is the purpose of boiler blowdown?",
        type: "multiple-choice",
        options: [
          "To waste water",
          "To remove concentrated dissolved solids and prevent scale formation, corrosion, and carryover",
          "To test the drain valve",
          "To cool the boiler"
        ],
        correctAnswer: 1,
        explanation: "Blowdown removes concentrated dissolved solids that accumulate as water evaporates into steam. This prevents scale buildup, reduces corrosion risk, and prevents carryover of contaminants into the steam system."
      },
      {
        id: 4,
        question: "Thermal efficiency is calculated as:",
        type: "multiple-choice",
        options: [
          "(Steam output × temperature) ÷ Fuel cost",
          "(Useful heat output ÷ Heat input from fuel) × 100",
          "Stack temperature ÷ Steam pressure",
          "O₂ percentage × Fuel flow rate"
        ],
        correctAnswer: 1,
        explanation: "Thermal efficiency = (Useful heat delivered to steam or hot water ÷ Total heat content of fuel consumed) × 100. It measures how effectively the boiler converts fuel energy into usable thermal energy."
      },
      {
        id: 5,
        question: "What immediate action should you take if the low-water cutoff alarm activates?",
        type: "multiple-choice",
        options: [
          "Add more feedwater immediately",
          "Allow the boiler to shut down safely, do NOT add water, investigate the cause, and notify supervisor",
          "Override the alarm and continue operating",
          "Increase steam production"
        ],
        correctAnswer: 1,
        explanation: "Low-water cutoffs protect against catastrophic dry-firing. Never add water to an overheated boiler (can cause violent steam explosion). Let it shut down, cool, investigate why water level dropped, and follow restart procedures only after supervisor approval."
      }
    ],
    reflectionPrompt: "How would improving boiler efficiency by 3% impact your facility's annual fuel costs? Calculate the potential savings based on your current consumption.",
    keyTakeaways: [
      "Boilers convert fuel into thermal energy—efficiency directly impacts operating costs",
      "Monitor stack temperature and O₂ levels to maintain optimal combustion efficiency",
      "Rising stack temp + rising O₂ indicates excess air and declining efficiency",
      "Blowdown prevents scale formation and maintains water chemistry within specifications",
      "Digital Boiler Logs enable trend analysis and early detection of efficiency degradation",
      "Safety systems (low-water cutoff, pressure relief, flame safeguard) must never be overridden",
      "Thermal efficiency trends should trigger investigation when declining >2% from baseline"
    ]
  },

  4: {
    id: 4,
    title: "Boiler Water Chemistry (Baselines)",
    objective: "Maintain optimal boiler water chemistry to prevent corrosion, scaling, and efficiency loss",
    duration: "90 minutes",
    narrationScript: [
      "Boiler water chemistry is critical for equipment longevity, efficiency, and safety.",
      "Poor water quality causes scale formation, corrosion, carryover, and premature equipment failure.",
      "This module teaches the fundamentals of conductivity, pH, alkalinity, hardness, and chemical treatment programs.",
      "You'll learn how to test, log, and interpret water chemistry parameters using the Nexum Suum system.",
      "Understanding the relationship between water chemistry and thermal efficiency will help you optimize operations and prevent costly failures."
    ],
    scenario: {
      title: "High Conductivity Alarm Response",
      description: "Investigating and correcting elevated boiler water conductivity",
      situation: "The Boiler Log triggers an alert: Boiler #3 conductivity has increased from 2,800 µS/cm to 4,200 µS/cm over the past 12 hours. pH is stable at 11.2, and feedwater hardness is within spec. You need to determine the cause, perform corrective blowdown, test chemistry parameters, and document the incident. VVFI provides guidance on blowdown procedures and suggests investigating makeup water quality and condensate return contamination."
    },
    standards: {
      title: "Boiler Water Chemistry Standards",
      items: [
        "Test and log boiler water parameters daily: conductivity, pH, alkalinity, phosphate, sulfite",
        "Test feedwater: hardness, pH, conductivity, dissolved oxygen",
        "Maintain boiler water conductivity below maximum limits (typically 3,000-5,000 µS/cm depending on pressure)",
        "Target pH between 10.5-12.0 for most low-pressure steam boilers",
        "Perform bottom blowdown when conductivity exceeds setpoint to remove concentrated solids",
        "Monitor deaerator operation—ensure dissolved oxygen <0.005 ppm in feedwater",
        "Track chemical feed rates and inventory—notify supervisor of unusual consumption",
        "Investigate any rapid changes in water chemistry parameters within 2 hours"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What does conductivity measure in boiler water?",
        type: "multiple-choice",
        options: [
          "Temperature",
          "The concentration of dissolved solids (minerals and salts) in the water",
          "Water flow rate",
          "pH level"
        ],
        correctAnswer: 1,
        explanation: "Conductivity measures the water's ability to conduct electrical current, which correlates directly with the concentration of dissolved solids. High conductivity indicates high dissolved solids concentration, requiring blowdown."
      },
      {
        id: 2,
        question: "Why is maintaining proper pH (typically 10.5-12.0) important in boiler water?",
        type: "multiple-choice",
        options: [
          "It makes the water taste better",
          "It prevents corrosion, protects metal surfaces, and optimizes chemical treatment effectiveness",
          "It increases fuel efficiency",
          "It has no real purpose"
        ],
        correctAnswer: 1,
        explanation: "Proper alkaline pH (10.5-12.0) creates a protective oxide layer on metal surfaces, prevents acidic corrosion, and ensures chemical treatments (phosphates, oxygen scavengers) function effectively. Low pH causes severe corrosion; excessively high pH can cause caustic embrittlement."
      },
      {
        id: 3,
        question: "What is the purpose of a deaerator (DA) tank?",
        type: "multiple-choice",
        options: [
          "To add air to the water",
          "To remove dissolved oxygen and other gases from feedwater, preventing corrosion",
          "To heat the boiler room",
          "To filter particulates"
        ],
        correctAnswer: 1,
        explanation: "Deaerators heat feedwater and strip dissolved oxygen and CO₂ from the water. Dissolved oxygen causes severe pitting corrosion in boilers and condensate systems. DA tanks typically reduce oxygen to <0.005 ppm."
      },
      {
        id: 4,
        question: "What chemical is commonly used as an oxygen scavenger in boiler systems?",
        type: "multiple-choice",
        options: [
          "Chlorine",
          "Sodium sulfite or alternative organic scavengers",
          "Salt (sodium chloride)",
          "Vinegar"
        ],
        correctAnswer: 1,
        explanation: "Sodium sulfite (Na₂SO₃) reacts with dissolved oxygen to form sodium sulfate, eliminating oxygen before it can cause corrosion. Modern systems may use organic oxygen scavengers (DEHA, carbohydrazide) for higher pressure applications."
      },
      {
        id: 5,
        question: "The Langelier Saturation Index (LSI) helps predict:",
        type: "multiple-choice",
        options: [
          "Boiler fuel consumption",
          "The tendency of water to form scale (positive LSI) or cause corrosion (negative LSI)",
          "Steam pressure limits",
          "Chemical feed rates"
        ],
        correctAnswer: 1,
        explanation: "LSI predicts calcium carbonate scaling or corrosion tendency. Positive LSI indicates supersaturation (scaling risk); negative LSI indicates undersaturation (corrosion risk). Target is slightly positive (0.2-0.5) for protective scale without buildup."
      }
    ],
    reflectionPrompt: "How would undetected corrosion or scaling in your boiler system impact long-term facility costs and safety? What preventive monitoring would you implement?",
    keyTakeaways: [
      "Boiler water chemistry directly affects equipment life, efficiency, and safety",
      "Conductivity measures dissolved solids concentration—high conductivity requires blowdown",
      "pH must be maintained between 10.5-12.0 to prevent corrosion and optimize treatment",
      "Deaerators remove dissolved oxygen, preventing corrosion in feedwater and condensate systems",
      "Chemical treatments include oxygen scavengers, pH adjusters, scale inhibitors, and antifoaming agents",
      "Daily testing and logging of chemistry parameters enables early detection of issues",
      "Understanding chemistry-efficiency connections helps optimize both performance and equipment life"
    ]
  },

  5: {
    id: 5,
    title: "Chiller Operations & ΔT Management",
    objective: "Operate chillers efficiently, optimize ΔT performance, and diagnose common operational issues",
    duration: "120 minutes",
    narrationScript: [
      "Chillers are often the largest energy consumers in commercial and industrial facilities.",
      "Understanding chiller fundamentals, flow relationships, and ΔT optimization is critical for energy cost management.",
      "This module covers centrifugal, screw, and scroll chillers, condenser/evaporator principles, and approach temperature monitoring.",
      "You'll learn how to calculate chiller load percentage, interpret efficiency trends, and use VVFI for diagnostics.",
      "Proper ΔT management can reduce energy consumption by 10-30% while extending equipment life."
    ],
    scenario: {
      title: "Low ΔT Performance Issue",
      description: "Diagnosing why chiller ΔT has dropped from 12°F to 7°F",
      situation: "Chiller #1 is producing 42°F supply water with 49°F return water—a ΔT of only 7°F instead of the design 12°F. The chiller is running at 85% capacity but only delivering 60% of design tonnage. Flow rates appear normal on the display. You photograph the evaporator gauge panel and the building automation system screen showing supply/return temps. You prompt VVFI: 'Chiller 1 low delta-T issue. Design 12°F, current 7°F. See attached flow and temp data. Diagnose cause.'"
    },
    standards: {
      title: "Chiller Operating Standards",
      items: [
        "Log chiller parameters every 4 hours: supply/return temps, ΔT, flow, kW, oil temp/pressure, approach temps",
        "Target evaporator ΔT at design specification (typically 10-14°F for comfort cooling)",
        "Monitor approach temperatures: evaporator approach <3°F, condenser approach <5°F",
        "Calculate and track chiller load percentage: (Actual tons ÷ Design tons) × 100",
        "Investigate any ΔT decline >2°F from baseline within 4 hours",
        "Monitor oil temperature and pressure—shutdown if outside manufacturer specifications",
        "Coordinate with cooling tower operations to maintain condenser water temps",
        "Track kW/ton efficiency—investigate increases >5% from baseline"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is ΔT (Delta-T) in chiller operations?",
        type: "multiple-choice",
        options: [
          "The temperature of the chilled water",
          "The temperature difference between return and supply water (Return temp - Supply temp)",
          "The ambient temperature",
          "The refrigerant pressure"
        ],
        correctAnswer: 1,
        explanation: "ΔT is the temperature difference between chilled water return and supply. For example, if return is 56°F and supply is 44°F, ΔT = 12°F. Higher ΔT (at proper flow) indicates efficient heat transfer and proper loading."
      },
      {
        id: 2,
        question: "If chiller ΔT decreases while the building load remains constant, what is the likely cause?",
        type: "multiple-choice",
        options: [
          "The chiller is more efficient",
          "Excessive flow rate through the evaporator (water moving too fast to absorb heat properly)",
          "The building needs more cooling",
          "The chiller is off"
        ],
        correctAnswer: 1,
        explanation: "Low ΔT with constant load indicates water is flowing too quickly through the evaporator to absorb design heat. This is often caused by control valve failures, bypass issues, or improperly configured variable flow systems. The chiller works harder (higher kW) for the same cooling output."
      },
      {
        id: 3,
        question: "What does 'approach temperature' measure?",
        type: "multiple-choice",
        options: [
          "How close the chiller is to the building",
          "The temperature difference between leaving water and refrigerant temperature in the evaporator or condenser",
          "The outside air temperature",
          "The difference between oil and water temperature"
        ],
        correctAnswer: 1,
        explanation: "Approach temperature indicates heat transfer efficiency. Low approach (<3°F evaporator, <5°F condenser) means efficient heat transfer. High approach indicates fouling, scaling, low flow, or refrigerant issues reducing heat transfer effectiveness."
      },
      {
        id: 4,
        question: "How do you calculate chiller load percentage?",
        type: "multiple-choice",
        options: [
          "kW input × 100",
          "(Actual tons delivered ÷ Chiller design tonnage) × 100, where tons = (GPM × ΔT × 500) ÷ 12,000",
          "Supply temperature ÷ Return temperature",
          "Flow rate × Pressure"
        ],
        correctAnswer: 1,
        explanation: "Chiller load % = (Actual tons ÷ Design tons) × 100. Actual tons = (GPM × ΔT × 500) ÷ 12,000. This shows what percentage of design capacity the chiller is delivering, critical for staging and efficiency optimization."
      },
      {
        id: 5,
        question: "Why is tube scaling in the evaporator or condenser a serious efficiency concern?",
        type: "multiple-choice",
        options: [
          "It makes the water dirty",
          "Scale acts as an insulator, reducing heat transfer efficiency, increasing approach temps, and forcing the chiller to work harder (higher kW/ton)",
          "It improves efficiency",
          "It only affects appearance"
        ],
        correctAnswer: 1,
        explanation: "Scale buildup (from minerals in water) on tube surfaces insulates the metal, reducing heat transfer. This increases approach temps, reduces capacity, and dramatically increases energy consumption (kW/ton) as the chiller works harder to achieve the same cooling output."
      }
    ],
    reflectionPrompt: "If improving your chiller's ΔT performance reduced energy consumption by 15%, what would that mean for annual electricity costs and environmental impact at your facility?",
    keyTakeaways: [
      "Chiller ΔT performance directly impacts energy efficiency and operating costs",
      "Target design ΔT (typically 10-14°F)—low ΔT indicates excessive flow or control issues",
      "Approach temperatures indicate heat transfer efficiency—high approach signals fouling or flow problems",
      "Chiller load percentage = (Actual tons ÷ Design tons) × 100",
      "Monitor kW/ton efficiency trends—increases indicate declining performance requiring investigation",
      "Tube scaling and fouling dramatically reduce efficiency and increase energy costs",
      "Coordination with cooling tower operations is essential for optimizing condenser performance"
    ]
  },

  6: {
    id: 6,
    title: "Facility Maintenance & Reliability",
    objective: "Implement preventive maintenance strategies, optimize reliability, and reduce unplanned downtime",
    duration: "90 minutes",
    narrationScript: [
      "Preventive maintenance is the foundation of facility reliability and long-term cost efficiency.",
      "Shifting from reactive to predictive maintenance reduces downtime, extends equipment life, and lowers total cost of ownership.",
      "This module covers PM scheduling, work order management, lubrication programs, and vibration analysis basics.",
      "You'll learn how to identify energy waste, implement sustainable practices, and maintain organized, safe facility spaces.",
      "Digital workbooks and maintenance logs in the Nexum Suum ecosystem enable data-driven reliability improvement."
    ],
    scenario: {
      title: "Preventing a Pump Failure",
      description: "Using vibration trends to predict and prevent equipment failure",
      situation: "During your monthly vibration rounds, you notice Chilled Water Pump #2 vibration has increased from 0.08 in/sec to 0.18 in/sec over the past 4 weeks. The pump is still operating, but the trend is concerning. You photograph the vibration analyzer display and upload it to VVFI with pump nameplate data and recent maintenance history. VVFI recommends immediate bearing inspection and provides a step-by-step diagnostic protocol. You create a work order and schedule downtime with operations."
    },
    standards: {
      title: "Facility Maintenance Standards",
      items: [
        "Complete all scheduled PM tasks on time—no deferrals without supervisor approval",
        "Document all maintenance activities in work order system with parts used, time spent, and findings",
        "Perform daily visual inspections for leaks, unusual noises, vibration, and overheating",
        "Maintain lubrication schedules—wrong or missed lubrication is a leading cause of bearing failure",
        "Conduct monthly vibration analysis on critical rotating equipment",
        "Keep equipment rooms clean, organized, and free of obstructions and trip hazards",
        "Label all equipment, valves, and electrical panels clearly and accurately",
        "Investigate any abnormal conditions immediately—don't wait for failure"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary difference between preventive and predictive maintenance?",
        type: "multiple-choice",
        options: [
          "There is no difference",
          "Preventive is scheduled based on time/usage intervals; predictive uses condition monitoring data to predict failures before they occur",
          "Predictive maintenance is always more expensive",
          "Preventive maintenance is reactive"
        ],
        correctAnswer: 1,
        explanation: "Preventive maintenance follows fixed schedules (e.g., change oil every 6 months). Predictive maintenance uses real-time condition data (vibration, temperature, oil analysis) to predict when equipment will fail, allowing maintenance only when needed—reducing waste and preventing unexpected failures."
      },
      {
        id: 2,
        question: "Why is proper lubrication critical for rotating equipment?",
        type: "multiple-choice",
        options: [
          "It makes equipment look cleaner",
          "It reduces friction and heat, prevents wear, and extends bearing life—improper lubrication causes 50%+ of bearing failures",
          "It's only important for appearance",
          "It increases energy consumption"
        ],
        correctAnswer: 1,
        explanation: "Proper lubrication creates a protective film between moving parts, reducing friction, heat, and wear. Over-lubrication, under-lubrication, or wrong lubricant type causes the majority of bearing failures. Follow manufacturer specifications exactly."
      },
      {
        id: 3,
        question: "What does increasing vibration in rotating equipment typically indicate?",
        type: "multiple-choice",
        options: [
          "Normal operation",
          "Developing problems: bearing wear, misalignment, imbalance, or looseness",
          "Improved efficiency",
          "Nothing important"
        ],
        correctAnswer: 1,
        explanation: "Increasing vibration is an early warning of mechanical problems: bearing wear, shaft misalignment, impeller imbalance, loose mounting, or coupling issues. Trending vibration data enables predictive maintenance before catastrophic failure."
      },
      {
        id: 4,
        question: "What is a common source of energy waste in facility operations?",
        type: "multiple-choice",
        options: [
          "Equipment operating only when needed",
          "Compressed air leaks, steam leaks, running equipment during unoccupied hours, poor insulation, and inefficient lighting",
          "Turning off lights",
          "Regular maintenance"
        ],
        correctAnswer: 1,
        explanation: "Major energy waste sources include: compressed air leaks (20-30% losses common), steam trap failures, running HVAC during unoccupied periods, poor insulation, simultaneous heating/cooling, and outdated lighting. Identifying and eliminating waste is high-ROI maintenance work."
      }
    ],
    reflectionPrompt: "Identify three pieces of critical equipment at your facility. What would be the operational and financial impact if each failed unexpectedly? How would predictive maintenance prevent these failures?",
    keyTakeaways: [
      "Preventive maintenance prevents failures; predictive maintenance optimizes timing based on condition data",
      "Proper lubrication (right type, right amount, right frequency) prevents 50%+ of bearing failures",
      "Vibration analysis trends provide early warning of mechanical issues before catastrophic failure",
      "Work order documentation creates historical knowledge base for troubleshooting and reliability improvement",
      "Energy waste identification (leaks, inefficient operation, poor controls) is high-value maintenance work",
      "Clean, organized, well-labeled facility spaces improve safety, efficiency, and response time",
      "Digital maintenance logs enable trend analysis and data-driven reliability strategies"
    ]
  },

  7: {
    id: 7,
    title: "EHS Regulations & Compliance",
    objective: "Understand OSHA requirements, maintain regulatory compliance, and create a culture of safety",
    duration: "105 minutes",
    narrationScript: [
      "Environmental, Health, and Safety (EHS) compliance is non-negotiable in facility operations.",
      "OSHA regulations exist to protect workers from injury, illness, and death—compliance is both legal requirement and moral obligation.",
      "This module covers Lockout/Tagout, Confined Space Entry, PPE requirements, chemical safety, and emergency protocols.",
      "You'll learn how to use the Nexum Suum Compliance Log to track inspections, violations, and corrective actions.",
      "Creating a safety-first culture starts with understanding regulations and demonstrating consistent, disciplined compliance behaviors."
    ],
    scenario: {
      title: "Confined Space Entry Planning",
      description: "Properly planning and executing a boiler fireside inspection",
      situation: "You need to perform an annual fireside inspection of Boiler #2, which requires entering the combustion chamber—a permit-required confined space. You must: 1) Verify the boiler is locked out and cooled, 2) Test atmosphere for oxygen, combustible gases, and toxic gases, 3) Set up continuous ventilation, 4) Assign attendant and rescue personnel, 5) Complete confined space permit, 6) Document entry in Compliance Log. You use VVFI to review confined space entry requirements and create a checklist."
    },
    standards: {
      title: "EHS Compliance Standards",
      items: [
        "Never enter confined spaces without proper permits, testing, and attendant",
        "Always use Lockout/Tagout procedures before servicing equipment—verify zero energy state",
        "Wear appropriate PPE for all tasks: safety glasses, hard hat, steel-toe boots minimum in mechanical rooms",
        "Maintain current SDS (Safety Data Sheets) for all chemicals—accessible to all personnel",
        "Inspect fire extinguishers, eyewash stations, and emergency equipment monthly",
        "Report all safety hazards, near-misses, and injuries immediately",
        "Complete all required safety training before performing regulated tasks",
        "Document all safety inspections, training, and incidents in Compliance Log"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the primary purpose of Lockout/Tagout (LOTO)?",
        type: "multiple-choice",
        options: [
          "To prevent theft",
          "To control hazardous energy and prevent unexpected equipment startup during maintenance, protecting workers from injury or death",
          "To mark broken equipment",
          "To reserve equipment for specific shifts"
        ],
        correctAnswer: 1,
        explanation: "LOTO procedures control hazardous energy (electrical, mechanical, hydraulic, pneumatic, thermal) by physically locking equipment in a safe, zero-energy state before maintenance. This prevents unexpected startup, movement, or energy release that could injure or kill workers."
      },
      {
        id: 2,
        question: "What are the three atmospheric hazards that must be tested before confined space entry?",
        type: "multiple-choice",
        options: [
          "Temperature, humidity, light level",
          "Oxygen level (19.5-23.5%), combustible gases (<10% LEL), and toxic gases (below exposure limits)",
          "Noise, vibration, dust",
          "Only oxygen level"
        ],
        correctAnswer: 1,
        explanation: "Before entry, test for: 1) Oxygen (must be 19.5-23.5%), 2) Combustible gases (must be <10% of Lower Explosive Limit), 3) Toxic gases (CO, H₂S, etc., must be below permissible exposure limits). Test continuously during entry."
      },
      {
        id: 3,
        question: "Which PPE is considered minimum requirement in mechanical/boiler rooms?",
        type: "multiple-choice",
        options: [
          "Only gloves",
          "Safety glasses, hard hat, and steel-toe boots",
          "No PPE required",
          "Only safety glasses"
        ],
        correctAnswer: 1,
        explanation: "Minimum PPE in mechanical spaces typically includes: safety glasses (impact/splash protection), hard hat (overhead hazard protection), and steel-toe boots (foot protection from dropped objects and compression). Additional PPE required based on specific tasks (hearing protection, respirators, chemical gloves, etc.)."
      },
      {
        id: 4,
        question: "What information must a Safety Data Sheet (SDS) contain?",
        type: "multiple-choice",
        options: [
          "Only the product name",
          "Chemical identification, hazards, composition, first aid, handling/storage, exposure controls, physical/chemical properties, and disposal",
          "Just the price",
          "Only emergency contact information"
        ],
        correctAnswer: 1,
        explanation: "SDS provides comprehensive safety information in 16 standardized sections: identification, hazards, composition, first aid, firefighting, accidental release, handling/storage, exposure controls/PPE, physical/chemical properties, stability/reactivity, toxicology, ecological impact, disposal, transport, regulatory, and other information."
      },
      {
        id: 5,
        question: "How often must emergency eyewash stations be tested to ensure functionality?",
        type: "multiple-choice",
        options: [
          "Never—they don't need testing",
          "Weekly activation to verify water flow and flush debris from lines",
          "Only when someone gets injured",
          "Every 5 years"
        ],
        correctAnswer: 1,
        explanation: "OSHA and ANSI Z358.1 require weekly activation of eyewash/shower stations to verify water flow, remove sediment, and ensure equipment functions in an emergency. Monthly inspection and annual detailed inspection are also required. Document all testing in Compliance Log."
      }
    ],
    reflectionPrompt: "Reflect on a situation where you or a colleague took a safety shortcut. What was the potential consequence? How can you create a culture where shortcuts are unacceptable?",
    keyTakeaways: [
      "OSHA compliance protects workers and is legally required—violations carry severe penalties",
      "Lockout/Tagout prevents injury from unexpected equipment energization during maintenance",
      "Confined space entry requires permits, atmospheric testing, ventilation, attendants, and rescue plans",
      "Proper PPE selection and use is the last line of defense against workplace hazards",
      "SDS must be readily available for all chemicals—employees must know how to access and interpret them",
      "Emergency equipment (eyewash, showers, extinguishers) requires regular testing and documentation",
      "Safety culture is built through consistent compliance, hazard reporting, and accountability"
    ]
  },

  8: {
    id: 8,
    title: "Evacuation & Emergency Protocols",
    objective: "Execute emergency response procedures, manage evacuations, and ensure personnel safety during crises",
    duration: "75 minutes",
    narrationScript: [
      "Emergency preparedness can mean the difference between minor incident and catastrophic outcome.",
      "Every facility must have clear evacuation plans, trained personnel, and practiced emergency protocols.",
      "This module covers emergency roles, alarm systems, communication hierarchies, and accountability procedures.",
      "You'll learn how to respond to fires, chemical spills, equipment failures, and natural disasters.",
      "VVFI can provide emergency guidance, but human decision-making and leadership are critical during crises."
    ],
    scenario: {
      title: "Boiler Room Fire Alarm Response",
      description: "Managing evacuation and emergency response during a fire alarm",
      situation: "At 2:15 PM, the fire alarm activates in the main boiler room. You are the senior operator on duty. Smoke is visible near Boiler #1. You must: 1) Initiate emergency shutdown of affected equipment, 2) Activate facility evacuation procedures, 3) Call 911 and provide clear location/hazard information, 4) Account for all personnel at assembly point, 5) Coordinate with emergency responders, 6) Document incident and actions taken. Time is critical—you have seconds to make decisions."
    },
    standards: {
      title: "Emergency Response Standards",
      items: [
        "Know all evacuation routes, assembly points, and alarm signals for your facility",
        "In fire alarm situations: evacuate immediately unless assigned as emergency coordinator",
        "Call 911 first in life-safety emergencies—provide clear location and hazard description",
        "Never re-enter facility during evacuation without authorization from emergency personnel",
        "Know location of fire extinguishers, pull stations, emergency shutoffs, and first aid equipment",
        "Emergency coordinators must account for all personnel at assembly points",
        "Document all emergency events immediately after resolution—include timeline, actions, personnel involved",
        "Participate in all emergency drills—treat them as real events"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What is the first action you should take when discovering a fire in the facility?",
        type: "multiple-choice",
        options: [
          "Try to fight the fire yourself",
          "Activate the fire alarm, call 911, and evacuate—fight fire only if very small, you're trained, and have clear escape route",
          "Look for the cause",
          "Continue working and ignore it"
        ],
        correctAnswer: 1,
        explanation: "Priority order: 1) Activate alarm to warn others, 2) Call 911 to get professional help coming, 3) Evacuate to safety. Attempt fire suppression ONLY if fire is very small (wastebasket-size), you're trained on extinguishers, proper extinguisher is available, and you have clear escape path. Never risk your life for property."
      },
      {
        id: 2,
        question: "During an evacuation, who is responsible for accounting for all personnel?",
        type: "multiple-choice",
        options: [
          "No one—everyone is on their own",
          "Designated emergency coordinators/floor wardens must account for personnel at assembly points",
          "Only the fire department",
          "The newest employee"
        ],
        correctAnswer: 1,
        explanation: "Emergency coordinators/floor wardens are pre-assigned responsibility for accounting for all personnel in their areas at designated assembly points. They report headcount and any missing persons to incident commander. This ensures rescue efforts focus on confirmed missing personnel."
      },
      {
        id: 3,
        question: "What critical information should you provide when calling 911 for a facility emergency?",
        type: "multiple-choice",
        options: [
          "Just say there's a problem",
          "Exact address, building/floor location, type of emergency, number of injured, hazards present (chemicals, confined spaces), and callback number",
          "Only your name",
          "Ask them to guess"
        ],
        correctAnswer: 1,
        explanation: "Provide: 1) Exact facility address and specific location (Building 3, Boiler Room, 2nd floor), 2) Emergency type (fire, chemical spill, injury), 3) Injuries and number of people involved, 4) Specific hazards (high pressure steam, ammonia, confined space), 5) Callback number. Clear information saves lives."
      },
      {
        id: 4,
        question: "When should you re-enter a facility after an evacuation?",
        type: "multiple-choice",
        options: [
          "Whenever you want",
          "Only after 'all clear' is given by emergency responders or facility emergency coordinator",
          "As soon as the alarm stops",
          "After 5 minutes"
        ],
        correctAnswer: 1,
        explanation: "NEVER re-enter until official 'all clear' is given by fire department, emergency coordinator, or designated authority. Hidden hazards (structural damage, toxic gases, smoldering fires) may remain. Unauthorized re-entry endangers you and rescue personnel."
      }
    ],
    reflectionPrompt: "Walk through your facility and identify evacuation routes, assembly points, emergency equipment locations, and potential hazards. Are you confident you could lead an evacuation?",
    keyTakeaways: [
      "Emergency preparedness requires planning, training, and practice before incidents occur",
      "Fire alarm response: activate alarm, call 911, evacuate—property is replaceable, people are not",
      "Emergency coordinators are responsible for personnel accountability at assembly points",
      "Provide clear, specific information when calling 911: location, hazard type, injuries, special risks",
      "Never re-enter evacuated facilities without official all-clear from emergency personnel",
      "Know locations of emergency equipment: extinguishers, pull stations, shutoffs, first aid, AEDs",
      "Document all emergency events immediately—timeline, actions, personnel, outcomes"
    ]
  },

  9: {
    id: 9,
    title: "Communication & Leadership Excellence",
    objective: "Develop professional communication skills, leadership behaviors, and operational accountability",
    duration: "75 minutes",
    narrationScript: [
      "Technical excellence must be paired with professional communication and leadership to drive operational success.",
      "Clear documentation, effective escalation, and disciplined collaboration are essential facility management skills.",
      "This module teaches professional writing, fault reporting, email etiquette, and de-escalation techniques.",
      "You'll learn the virtuous behavior model: discipline, accountability, honesty, and continuous improvement.",
      "Leadership isn't about title—it's about demonstrating excellence and inspiring others to higher standards."
    ],
    scenario: {
      title: "Communicating a Critical Equipment Failure",
      description: "Reporting a chiller failure to operations and management",
      situation: "At 6:00 AM, Chiller #1 trips on high discharge pressure. The building will lose cooling capacity by 9:00 AM when occupancy begins. You must: 1) Document the failure clearly in the Chiller Log, 2) Email operations and management with situation, impact, and estimated restoration time, 3) Coordinate with HVAC contractor for emergency service, 4) Provide hourly updates, 5) Debrief after resolution with lessons learned. Your communication must be clear, factual, and solution-focused."
    },
    standards: {
      title: "Professional Communication Standards",
      items: [
        "Document all system issues clearly: What happened, when, current status, impact, actions taken",
        "Use professional language in all logs and communications—no slang, abbreviations, or unclear terminology",
        "Escalate critical issues immediately to supervisors—don't wait for scheduled reports",
        "Provide solution-focused communication: state problem, describe actions, estimate timeline",
        "Respond to emails and requests within 4 hours during business hours",
        "Own mistakes honestly—focus on corrective actions, not blame",
        "Give credit to team members for contributions and solutions",
        "Maintain calm, professional demeanor during high-stress situations"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What elements should a professional fault report include?",
        type: "multiple-choice",
        options: [
          "Just 'it's broken'",
          "Equipment ID, timestamp, symptoms, readings, actions taken, current status, estimated impact, and next steps",
          "Only who to blame",
          "Personal opinions"
        ],
        correctAnswer: 1,
        explanation: "Effective fault reports include: 1) Equipment identification, 2) Exact time issue discovered, 3) Specific symptoms and abnormal readings, 4) Actions already taken, 5) Current operational status, 6) Impact on facility/occupants, 7) Estimated resolution timeline, 8) Next steps and resources needed. This enables informed decision-making."
      },
      {
        id: 2,
        question: "When should you escalate an equipment issue to your supervisor?",
        type: "multiple-choice",
        options: [
          "Never—handle everything yourself",
          "Immediately for: safety hazards, critical equipment failures, regulatory violations, situations beyond your authority/expertise",
          "Only at the end of the month",
          "When you feel like it"
        ],
        correctAnswer: 1,
        explanation: "Escalate immediately when: 1) Life-safety hazard exists, 2) Critical equipment fails (impacts operations/occupants), 3) Regulatory compliance is at risk, 4) Issue exceeds your authority or expertise, 5) Costs will exceed budget authority, 6) Management notification is required. Early escalation enables better resource allocation and decision-making."
      },
      {
        id: 3,
        question: "Which demonstrates virtuous behavior when you make an operational mistake?",
        type: "multiple-choice",
        options: [
          "Hide it and hope no one notices",
          "Immediately report the mistake honestly, explain what happened, take responsibility, and propose corrective actions",
          "Blame equipment malfunction",
          "Wait until someone discovers it"
        ],
        correctAnswer: 1,
        explanation: "Virtuous response to mistakes: 1) Report immediately and honestly, 2) Take responsibility without excuses, 3) Explain what happened factually, 4) Describe corrective actions taken, 5) Propose preventive measures. This builds trust, enables learning, and prevents repeat issues. Hiding mistakes compromises safety and integrity."
      },
      {
        id: 4,
        question: "How should you communicate during a tense interaction with a frustrated building occupant?",
        type: "multiple-choice",
        options: [
          "Get defensive and argumentative",
          "Listen actively, acknowledge concerns, explain situation calmly, provide timeline, and follow up—remain professional regardless of their tone",
          "Ignore them",
          "Tell them it's not your problem"
        ],
        correctAnswer: 1,
        explanation: "De-escalation technique: 1) Listen without interrupting, 2) Acknowledge their concern/frustration, 3) Explain situation in simple terms, 4) Provide realistic timeline, 5) Offer to follow up, 6) Remain calm and professional regardless of their tone. You represent the facility—professionalism builds credibility and resolves conflicts."
      }
    ],
    reflectionPrompt: "Reflect on a time when clear communication prevented or resolved a facility crisis. What specific communication behaviors made the difference?",
    keyTakeaways: [
      "Professional communication requires clarity, accuracy, timeliness, and solution focus",
      "Fault reports must include: equipment ID, timeline, symptoms, actions, status, impact, next steps",
      "Escalate immediately when issues involve safety, critical equipment, compliance, or exceed your authority",
      "Virtuous behaviors (discipline, accountability, honesty) build trust and operational excellence",
      "Own mistakes honestly—focus on solutions and prevention, not blame or excuses",
      "De-escalation requires active listening, empathy, calm explanation, and professional demeanor",
      "Leadership is demonstrated through consistent excellence, integrity, and inspiring others to higher standards"
    ]
  },

  10: {
    id: 10,
    title: "Inventory & Sustainable Scaling",
    objective: "Manage facility inventory, control costs, implement sustainable practices, and scale operations efficiently",
    duration: "90 minutes",
    narrationScript: [
      "Effective inventory management balances equipment availability with cost control and sustainability.",
      "Understanding spare parts management, vendor relationships, and energy-saving strategies is critical for long-term facility performance.",
      "This module teaches inventory tracking systems, cost controls, KPI monitoring, and responsible scaling practices.",
      "You'll learn how to integrate inventory management with the Nexum Suum dashboards for complete operational visibility.",
      "Sustainable operations aren't just environmentally responsible—they're financially smart and future-focused."
    ],
    scenario: {
      title: "Emergency Part Procurement During Chiller Failure",
      description: "Managing inventory and vendor coordination during equipment crisis",
      situation: "Chiller #2's oil heater has failed. The part is not in stock, and the chiller cannot operate safely without it. You need to: 1) Search inventory system for alternative solutions, 2) Contact vendors for emergency pricing and availability, 3) Evaluate rental chiller vs. repair costs, 4) Get management approval for unbudgeted expense, 5) Coordinate delivery and contractor scheduling, 6) Update inventory records and document lessons learned to prevent future stockouts of critical parts."
    },
    standards: {
      title: "Inventory & Sustainability Standards",
      items: [
        "Maintain accurate inventory records—update immediately when parts are used or received",
        "Stock critical spare parts for equipment with long lead times or high failure impact",
        "Track inventory costs—identify opportunities for standardization and bulk purchasing",
        "Establish vendor relationships before emergencies—know lead times and emergency service capabilities",
        "Monitor energy KPIs monthly: kWh/sq ft, steam lb/production unit, water gallons/occupant",
        "Identify and implement energy-saving opportunities: LED lighting, VFDs, controls optimization",
        "Dispose of hazardous materials properly—never bypass environmental regulations for convenience",
        "Document cost-saving and sustainability initiatives in annual facility reports"
      ]
    },
    quiz: [
      {
        id: 1,
        question: "What criteria should guide decisions on which spare parts to stock?",
        type: "multiple-choice",
        options: [
          "Stock everything possible",
          "Critical equipment impact, lead time, failure probability, and cost of downtime vs. cost of stocking",
          "Only stock the cheapest parts",
          "Never stock anything"
        ],
        correctAnswer: 1,
        explanation: "Stock parts when: 1) Equipment is critical to operations, 2) Lead time is long (weeks/months), 3) Failure probability is moderate to high, 4) Downtime cost exceeds stocking cost. Use risk matrix: High-criticality + Long lead time + Moderate failure rate = Stock the part."
      },
      {
        id: 2,
        question: "How can facility operators contribute to energy cost reduction?",
        type: "multiple-choice",
        options: [
          "Run all equipment 24/7",
          "Optimize schedules, fix leaks promptly, maintain equipment efficiency, eliminate simultaneous heating/cooling, and implement setback strategies",
          "Turn everything off permanently",
          "Energy reduction is not an operator responsibility"
        ],
        correctAnswer: 1,
        explanation: "Operators drive energy savings through: 1) Optimized run schedules (avoid unnecessary operation), 2) Leak repair (compressed air, steam), 3) Maintaining efficiency (clean filters, proper ΔT, combustion tuning), 4) Eliminating waste (simultaneous heating/cooling, excessive lighting), 5) Temperature setbacks during unoccupied periods. Operators have the most direct impact on energy use."
      },
      {
        id: 3,
        question: "What is the purpose of tracking facility KPIs (Key Performance Indicators)?",
        type: "multiple-choice",
        options: [
          "Just extra paperwork",
          "To measure performance trends, identify improvement opportunities, benchmark against standards, and demonstrate value to management",
          "To make spreadsheets look complicated",
          "KPIs have no value"
        ],
        correctAnswer: 1,
        explanation: "KPIs provide objective measurement of facility performance: energy consumption (kWh/sq ft), water use (gal/occupant), maintenance costs ($/sq ft), uptime %, response time, etc. Trending KPIs identifies improvement opportunities and demonstrates facility team value to leadership. What gets measured gets managed."
      },
      {
        id: 4,
        question: "Why is vendor relationship management important for facility operations?",
        type: "multiple-choice",
        options: [
          "It's not important",
          "Strong vendor relationships ensure faster emergency response, better pricing, priority service, technical support, and long-term partnership benefits",
          "To get free lunches",
          "Vendors should be treated as adversaries"
        ],
        correctAnswer: 1,
        explanation: "Strategic vendor partnerships provide: 1) Faster emergency response and priority scheduling, 2) Better pricing through relationship and volume, 3) Technical expertise and training, 4) Extended payment terms and warranty support, 5) Innovation insights and product updates. Treat vendors as partners, not just suppliers."
      }
    ],
    reflectionPrompt: "Calculate your facility's current energy cost per square foot. Identify three specific actions you could implement to reduce that cost by 10% over the next year.",
    keyTakeaways: [
      "Stock critical spare parts based on equipment criticality, lead time, and failure probability",
      "Accurate inventory tracking prevents stockouts, controls costs, and enables data-driven purchasing",
      "Energy cost reduction is operator-driven: optimize schedules, fix leaks, maintain efficiency, eliminate waste",
      "Track KPIs (energy/sq ft, uptime %, maintenance cost, response time) to measure and demonstrate value",
      "Vendor partnerships provide emergency response, better pricing, technical support, and competitive advantage",
      "Sustainable practices (energy efficiency, waste reduction, proper disposal) are environmentally and financially smart",
      "Integration with Nexum Suum dashboards provides complete operational visibility and decision support"
    ]
  }
};
