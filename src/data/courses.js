export const courses = [
  {
    id: "networking-internet-basics",
    title: "Networking & Internet Basics",
    instructor: "IT Faculty",
    category: "Networking",
    level: "Beginner",
    duration: "4 Weeks",
    thumbnail: "/projects/project15.jpg",
    description: "Learn core networking concepts, internet safety, and troubleshooting essentials.",
    syllabus: [
      { title: "Module 1: Networking Fundamentals", topics: ["IP Addressing", "Routers and Switches", "LAN and WAN", "Network Cabling Basics"] },
      { title: "Module 2: Internet Fundamentals", topics: ["DNS Basics", "Web Protocols", "Internet Access Workflows", "Bandwidth Basics"] },
      { title: "Module 3: Troubleshooting", topics: ["Ping & Traceroute", "Common Network Errors", "Wi-Fi Optimization"] },
    ],
  },
  {
    id: "network-security-basics",
    title: "Network Security Basics",
    instructor: "IT Faculty",
    category: "Networking",
    level: "Intermediate",
    duration: "5 Weeks",
    thumbnail: "/projects/project16.jpg",
    description: "Build practical security habits to protect local networks, users, and data.",
    syllabus: [
      { title: "Threat Awareness", topics: ["Phishing", "Malware", "Social Engineering", "Risk Assessment"] },
      { title: "Defensive Controls", topics: ["Firewalls", "Access Control", "Network Segmentation", "Secure Wi-Fi"] },
      { title: "Monitoring & Response", topics: ["Log Basics", "Incident Response", "Backup Strategies"] },
    ],
  },
  {
    id: "wireless-network-setup",
    title: "Wireless Network Setup & Optimization",
    instructor: "IT Faculty",
    category: "Networking",
    level: "Beginner",
    duration: "3 Weeks",
    thumbnail: "/projects/project13.jpg",
    description: "Set up reliable wireless networks and improve stability, coverage, and performance.",
    syllabus: [
      { title: "Wi-Fi Foundations", topics: ["2.4GHz vs 5GHz", "SSID Planning", "Channel Selection"] },
      { title: "Router Configuration", topics: ["DHCP", "NAT", "Guest Networks", "Quality of Service"] },
      { title: "Optimization", topics: ["Signal Mapping", "Interference Reduction", "Performance Testing"] },
    ],
  },
  {
    id: "network-support-practice",
    title: "Network Support Practice Lab",
    instructor: "IT Faculty",
    category: "Networking",
    level: "Advanced",
    duration: "6 Weeks",
    thumbnail: "/projects/project14.jpg",
    description: "Practice real support scenarios and build confidence in diagnosing network incidents.",
    syllabus: [
      { title: "Ticket Workflows", topics: ["Issue Triage", "Prioritization", "Root Cause Tracking"] },
      { title: "Hands-on Diagnostics", topics: ["Command-line Tools", "Switch Port Checks", "DNS & Gateway Tests"] },
      { title: "Reporting", topics: ["Client Updates", "Post-Incident Notes", "Preventive Recommendations"] },
    ],
  },
];

export const courseLevels = ["All", "Beginner", "Intermediate", "Advanced"];

export const courseCategories = ["Networking"];
