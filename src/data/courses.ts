import { Course } from "@/types/course";
import { modules as facilityModules } from "./modules";
import { hvacModules } from "./hvacModules";

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
];
