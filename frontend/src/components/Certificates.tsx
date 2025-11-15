import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  category: string;
  image: string;
}

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState("All");
  const [zoomImage, setZoomImage] = useState(false);


  // Load JSON
  useEffect(() => {
    fetch("src/certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificates(data));
  }, []);

  // Extract categories
  const categories = ["All", ...new Set(certificates.map((c) => c.category))];

  const filtered = filter === "All"
    ? certificates
    : certificates.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            A showcase of my continuous learning journey and professional certifications
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                filter === cat
                  ? "bg-accent text-white"
                  : "bg-background/30 text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="glass-card rounded-xl p-6 cursor-pointer hover:border-accent/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition">
                  <Award className="w-6 h-6 text-accent" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition">
                {cert.title}
              </h3>

              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs mt-1 mb-3 text-muted-foreground/70">{cert.date}</p>

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

      {/* POPUP */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-2xl glass-card">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              {selectedCertificate?.title}
            </DialogTitle>
          </DialogHeader>
            
          {selectedCertificate && (
            <div className="space-y-6">
              <div>
                <p className="font-medium text-accent">{selectedCertificate.issuer}</p>
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

              {/* Certificate Image */}
              <div className="space-y-3">
                <h4 className="font-semibold">Certificate Preview</h4>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="rounded-lg shadow-md border cursor-pointer hover:opacity-80 transition
                 max-w-[350px] max-h-[350px] object-contain"
                  onClick={() => setZoomImage(true)}
                />
               {zoomImage && selectedCertificate && (
  <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-6 space-y-6 animate-fade-in">
    
    <img
      src={selectedCertificate.image}
      alt={selectedCertificate.title}
      className="max-w-[90%] max-h-[75vh] rounded-lg shadow-xl object-contain"
    />
    
    {/* Soft Pill Button */}
    <button
      onClick={() => setZoomImage(false)}
      className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 
                 border border-white/20 text-white backdrop-blur-md 
                 transition text-sm"
    >
      Close Preview
    </button>

  </div>
)}



              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;
