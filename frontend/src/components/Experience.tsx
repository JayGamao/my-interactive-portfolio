import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
    const experiences = [
    {
      title: "Game Development Intern",
      company: "Winnoven, Inc.",
      period: "2022",
      description:
        "Assisted in game development tasks, debugging, and UI/UX refinement. Collaborated with the team on gameplay mechanics and design improvements.",
      achievements: [
        "Recognized for strong performance, sincerity, and collaboration",
        "Contributed to gameplay feature adjustments and visual refinements",
        "Supported debugging and optimization of in-game interactions",
      ],
    },

    {
      title: "AI/ML & iOS Development Experience",
      company: "Independent & Academic Projects",
      period: "2023 – 2025",
      description:
        "Led the development of multiple machine learning, computer vision, and iOS-based systems involving real-time inference, object detection, and clustering.",
      achievements: [
        "Developed a YOLOv12-based Coffee Bean Detection and Grading System with custom dataset training and high model accuracy",
        "Built a real-time Color Clustering iOS App using optimized K-Means clustering and Firebase integration",
        "Created a Core ML-powered Fall Detection App using accelerometer and gyroscope sensor data",
        "Implemented ESP32-CAM Car Counter System using background subtraction and real-time data streaming",
        "Developed Room Resort Booking Website with authentication, bookings, and admin dashboard using React and Firebase",
      ],
    },

    {
      title: "Researcher — Computer Vision",
      company: "ICSTE 2025 (Ei Compendex, Scopus)",
      period: "2025",
      description:
        "Conducted comparative study of YOLOv12 and Lightly Train pre-training methods for domain-specific object detection datasets.",
      achievements: [
        "Authored and published research paper at ICSTE 2025",
        "Performed dataset preprocessing, training, evaluation, and ablation analysis",
        "Improved defect detection performance using optimized training strategies",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-background to-deep-space opacity-90" />
      <div className="absolute inset-0 cosmic-gradient opacity-10 animate-cosmic-drift" style={{ backgroundSize: "200% 200%" }} />
      
      {/* Floating nebula effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-nebula-purple/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-nebula-pink/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-nebula-blue/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Mission <span className="cosmic-gradient bg-clip-text text-transparent">Log</span>
          </h2>

          <div className="relative">
            {/* Cosmic timeline */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-accent/50 via-nebula-purple/50 to-cosmic-accent/50" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                } md:w-1/2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glowing timeline node */}
                <div className="absolute left-0 md:left-auto md:right-0 md:translate-x-1/2 top-0 w-4 h-4 rounded-full bg-cosmic-accent border-4 border-deep-space md:-mr-2 animate-nebula-pulse" />

                <div className="spaceship-panel rounded-xl p-6 ml-8 md:ml-0 hover:border-cosmic-accent/50 transition-all duration-300 group">
                  <div className="flex items-center gap-2 text-cosmic-accent mb-2 justify-start md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-starlight">{exp.title}</h3>
                  <p className="text-nebula-pink font-medium mb-3 flex items-center gap-2 justify-start md:justify-end">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </p>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-cosmic-accent mt-1">✦</span>
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
