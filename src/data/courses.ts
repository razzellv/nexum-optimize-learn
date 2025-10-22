import { Course } from "@/types/course";
import { modules as facilityModules } from "./modules";
import { hvacModules } from "./hvacModules";
import { thermodynamicsModules } from "./thermodynamicsModules";
import { specialistModules } from "./specialistModules";

export const courses: Course[] = [
  {
    id: "facility-optimization",
    title: "Facility Optimization & Compliance Mastery",
    description: "Comprehensive training on facility management, regulatory compliance, and operational excellence",
    modules: facilityModules,
  },
  {
    id: "hvac-optimization",
    title: "Facility HVAC Optimization Mastery: Compliance, Chemistry, and Control",
    description: "Master HVAC systems, chemistry, troubleshooting, and data-driven optimization strategies",
    modules: hvacModules,
  },
  {
    id: "thermodynamics-tech",
    title: "HVAC Thermodynamics & Smart Technology Integration",
    description: "Master thermodynamics principles, heat transfer, HVAC history, and AI/IoT integration in modern climate control systems",
    modules: thermodynamicsModules,
  },
  {
    id: "career-specialist",
    title: "Career Specialist Assessment",
    description: "Comprehensive aptitude assessment to discover your ideal career paths based on your unique strengths, values, and aspirations",
    modules: specialistModules,
  },
];
