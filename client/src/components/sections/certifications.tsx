import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import dockerIcon from '@/assets/certifications/docker.svg';
import githubIcon from '@/assets/certifications/github.svg';
import linkedinIcon from '@/assets/certifications/linkedin.svg';
import mozillaIcon from '@/assets/certifications/mozilla.svg';
import ciscoIcon from '@/assets/certifications/cisco.svg';
import hackerRankIcon from '@/assets/certifications/hackerRank.svg';
import awsIcon from '@/assets/certifications/aws.svg';
import courseraIcon from '@/assets/certifications/coursera.svg';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker",
    date: "Issued May 2025",
    credentialId: "",
    credentialUrl: "https://www.linkedin.com/learning/certificates/21aea03108bc4fba225da933eccf03db4264d164c29dfa2b04ad1a14bc23f379",
    imageUrl: dockerIcon
  },
  {
    title: "Career Essentials in GitHub Professional Certificate",
    issuer: "GitHub",
    date: "Issued April 2025",
    credentialId: "",
    credentialUrl: "https://www.linkedin.com/learning/certificates/ba58da5f7fe417b21fe17fc0dcb57e0c1ae9de78971757df91f07a22f1bcd011?trk=share_certificate",
    imageUrl: githubIcon
  },
  {
    title: "Explore React.js Development",
    issuer: "LinkedIn",
    date: "Issued April 2025",
    credentialId: "",
    credentialUrl: "https://www.linkedin.com/learning/certificates/b852a67dbc122f6e07594d8d95d4a32b8385fa93a4408d646ca17b657f8de5b0",
    imageUrl: linkedinIcon
  },
  {
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    issuer: "Mozilla",
    date: "Issued April 2025",
    credentialId: "",
    credentialUrl: "https://www.linkedin.com/learning/certificates/d3c0236ec0d4e6bf90a5a065e00fb3063f375019d1bfdca153ac1e7ea6aac8e1",
    imageUrl: mozillaIcon
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Issued July 2022",
    credentialId: "",
    credentialUrl: "https://www.credly.com/badges/a05764b8-0fd8-48fa-a172-47dc1c683043/public_url",
    imageUrl: ciscoIcon
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Issued July 2022",
    credentialId: "",
    credentialUrl: "https://www.hackerrank.com/certificates/92dc0591b37f",
    imageUrl: hackerRankIcon
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued May 2022",
    credentialId: "",
    credentialUrl: "https://www.credly.com/badges/430a480f-37c4-43c9-8d82-a9244b2cbf3f/public_url",
    imageUrl: awsIcon
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Issued April 2022",
    credentialId: "",
    credentialUrl: "https://www.credly.com/badges/23b58c90-3596-4d38-bfdf-692558098722/public_url",
    imageUrl: ciscoIcon
  },
  {
    title: "Programming for Everybody (Getting Started with Python))",
    issuer: "Coursera",
    date: "Issued August 2020",
    credentialId: "",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/QVAX6KHQD9DM",
    imageUrl: courseraIcon
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    date: "Issued August 2020",
    credentialId: "",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/YD22L42Z4DCU",
    imageUrl: courseraIcon
  }
];

export function Certifications() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="certifications" className="py-20 bg-[#0A0A0A]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10 hover:border-[hsl(var(--electric-blue))]/50 transition-all duration-300 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
            >
              <div className="flex flex-col items-center text-center">
                {/* Certification Image */}
                <div className="mb-4">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </div>

                {/* Certification Details */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-[hsl(var(--electric-blue))] mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.date}
                    {cert.credentialId && (
                      <span className="ml-2">• Credential ID: {cert.credentialId}</span>
                    )}
                  </p>
                  
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[hsl(var(--electric-blue))] hover:text-[hsl(var(--electric-blue))]/80 transition-colors"
                    >
                      <span>View Credential</span>
                      <svg 
                        className="w-4 h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 