import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description: "Leading development of cloud-based applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipelines improving deployment frequency",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2021 - 2023",
      description: "Developed and maintained multiple web applications for enterprise clients using modern tech stack.",
      achievements: [
        "Built scalable REST APIs serving 100K+ daily requests",
        "Implemented responsive designs improving mobile UX by 60%",
        "Collaborated with cross-functional teams on product features",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2020 - 2021",
      description: "Contributed to various projects, focusing on frontend development and learning modern frameworks.",
      achievements: [
        "Developed reusable component library in React",
        "Participated in code reviews and agile ceremonies",
        "Integrated third-party APIs and payment systems",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                } md:w-1/2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 md:translate-x-1/2 top-0 w-4 h-4 rounded-full bg-accent border-4 border-background md:-mr-2" />

                <div className="glass-card rounded-xl p-6 ml-8 md:ml-0">
                  <div className="flex items-center gap-2 text-accent mb-2 justify-start md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3 flex items-center gap-2 justify-start md:justify-end">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
