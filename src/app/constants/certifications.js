import { CertificationClass } from "../classes/CertificationClass";
// new Certificate("title", "organization", "date", "image source", ["List of Skills"])

export const CERTIFICATION_LIST = [
  new CertificationClass(
    "Python Project: pillow, tesseract, and opencvPython",
    "University of Michigan",
    "Coursera-Python-Project-pillow-tesseract-and-opencv.pdf",
    ["Programming", "Python"]
  ),
  new CertificationClass(
    "Getting Started with Shell Scripting for Bash and Z Shell",
    "Pluralsight",
    "Pluralsight-Getting-Started-wth-Shell-Scripting-for-Bash-and-Z-Shell.pdf",
    ["Bash", "Linux", "Shell Scripting"]
  ),
];
