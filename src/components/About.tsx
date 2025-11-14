import { BrainCircuit, Smartphone, Image as Vision, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "iOS Development",
      description: "Building intelligent, real-time iOS applications powered by Core ML and device sensors.",
    },
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "Specializing in object detection, model training, and on-device inference using YOLO and K-Means.",
    },
    {
      icon: Vision,
      title: "Computer Vision",
      description: "Designing CV pipelines for defect detection, clustering, and real-time data processing.",
    },
    {
      icon: Rocket,
      title: "End-to-End Engineering",
      description: "Delivering polished, production-ready systems from concept to deployment.",
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
              I'm a software developer specializing in iOS development, machine learning, 
              and computer vision. I build intelligent systems that combine real-time inference, 
              sensor data, and mobile-first engineering.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience includes developing Core ML–powered iOS apps, YOLOv12-based object detection 
              pipelines, K-Means clustering engines, and full-stack web applications. I enjoy solving complex 
              technical challenges, transforming ideas into functional products, and continuously expanding 
              my expertise in AI and mobile development.
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
