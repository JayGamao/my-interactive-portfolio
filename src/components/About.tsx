import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and reliability",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer with a strong foundation in both frontend and backend technologies. 
              My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in modern frameworks and a commitment to continuous learning, I transform 
              ideas into robust, user-friendly applications. I believe in writing code that not only works 
              but is also clean, efficient, and maintainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
