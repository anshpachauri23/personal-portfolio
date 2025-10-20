import { Building, Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "NMT Security",
    position: "Product Development and AI Integration Intern",
    location: "Tinton Falls, NJ",
    duration: "May 2025 - August 2025",
    description: "Architected and deployed a full-stack AI chatbot solution on AWS to solve real-world user queries, collaborating on backend engineering with Python and AWS Lambda, and integrating Amazon Bedrock for advanced conversational intelligence and natural language understanding.",
    achievements: [
      "Developed robust Python scripts to automate cybersecurity analysis tasks",
      "Integrated APIs (VirusTotal, OTX) for threat intelligence",
      "Built scalable tools for end-to-end data processing and automation"
    ],
    technologies: ["Python", "AWS Lambda", "Amazon Bedrock", "AWS", "Cybersecurity", "API Integration"]
  },
  {
    id: 2,
    company: "Deloitte",
    position: "Technology Consulting Virtual Intern",
    location: "Remote",
    duration: "June 2021 - September 2021",
    description: "Expedited team document search by 10 hours/month by migrating 100+ reports to a centralized cloud repository, while also reducing client deployment delays by 30% and saving $5K+ annually through diagnosing integration bottlenecks and implementing AWS automation tools.",
    achievements: [
      "Migrated 100+ reports to centralized cloud repository",
      "Reduced client deployment delays by 30%",
      "Saved $5K+ annually through AWS automation"
    ],
    technologies: ["AWS", "Cloud Migration", "Automation", "Consulting", "Document Management"]
  },
  {
    id: 3,
    company: "Verzeo Edutech",
    position: "Student Intern",
    location: "Remote",
    duration: "April 2021 - May 2021",
    description: "Delivered 4 AI projects (e.g., facial recognition, traffic sign detection) with 90%+ accuracy using Python/CNNs, adopted by 5+ peers. Led 20 peers to complete projects 2 weeks early using Agile task delegation.",
    achievements: [
      "Delivered 4 AI projects with 90%+ accuracy",
      "Led 20 peers to complete projects 2 weeks early",
      "Projects adopted by 5+ peers"
    ],
    technologies: ["Python", "CNNs", "Computer Vision", "Agile", "Leadership"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary"> Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10 w-fit">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {experience.position}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-medium">
                        <Briefcase className="h-4 w-4" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
