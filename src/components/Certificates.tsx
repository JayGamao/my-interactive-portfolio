import { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image?: string;
}

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Demonstrated expertise in designing distributed systems on AWS, including compute, storage, database, and networking.",
      skills: ["AWS", "Cloud Architecture", "DevOps"],
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced proficiency in building scalable React applications with modern hooks, context, and performance optimization.",
      skills: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      description: "Comprehensive training covering frontend and backend development, databases, and API design.",
      skills: ["Node.js", "MongoDB", "Express"],
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "2023",
      description: "Foundations of user experience design, user research, prototyping, and usability testing.",
      skills: ["Figma", "Design Thinking", "UX Research"],
    },
    {
      id: 5,
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2022",
      description: "Data analysis and visualization using Python, pandas, NumPy, and Matplotlib.",
      skills: ["Python", "Data Analysis", "Machine Learning"],
    },
    {
      id: 6,
      title: "Docker & Kubernetes",
      issuer: "Linux Foundation",
      date: "2024",
      description: "Container orchestration and management using Docker and Kubernetes in production environments.",
      skills: ["Docker", "Kubernetes", "DevOps"],
    },
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Certificates & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my continuous learning journey and professional certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="glass-card rounded-xl p-6 cursor-pointer hover:border-accent/50 transition-all duration-300 group animate-fade-in-up certificate-hover"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground/70 mb-4">{cert.date}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-2xl glass-card">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              {selectedCertificate?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCertificate && (
            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium text-accent">{selectedCertificate.issuer}</p>
                <p className="text-sm text-muted-foreground">{selectedCertificate.date}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedCertificate.description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        .certificate-hover {
          position: relative;
          overflow: hidden;
        }
        .certificate-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, hsl(var(--accent) / 0.1), transparent);
          transition: left 0.5s;
        }
        .certificate-hover:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
