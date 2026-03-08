export const mockCourses = [
  {
    id: "networking-core-course",
    slug: "networking-core",
    title: "Networking Core Foundations",
    description: "Master essential networking concepts including IP addressing, protocols, and network devices.",
    introVideoId: "rfscVS0vtbw",
    videoTagline: "Build job-ready networking skills from fundamentals to practical troubleshooting.",
    modules: [
      {
        id: "networking-module-1",
        title: "Module 1: Network Basics",
        lessons: [
          {
            id: "networking-lesson-1",
            title: "Understanding Networks",
            duration: "12 min",
            definition: "Learn how data travels between devices over local and wide-area networks.",
            content: [
              { type: "heading", text: "Core Networking Model" },
              { type: "paragraph", text: "Networks connect devices so they can share data, applications, and services." },
              { type: "list", items: ["LAN vs WAN", "Network devices", "Physical vs wireless links", "Basic topologies"] },
              { type: "tip", text: "Start by mapping your home or office network to understand concepts quickly." },
            ],
          },
          {
            id: "networking-lesson-2",
            title: "IP Addressing Essentials",
            duration: "15 min",
            definition: "Understand IPv4 structure, private ranges, and subnet basics.",
            content: [
              { type: "heading", text: "IP Essentials" },
              { type: "paragraph", text: "IP addresses uniquely identify hosts on a network." },
              { type: "code", language: "text", code: "Private IPv4 ranges:\n10.0.0.0/8\n172.16.0.0/12\n192.168.0.0/16" },
              { type: "quote", text: "Good network design starts with good addressing." },
            ],
          },
        ],
      },
      {
        id: "networking-module-2",
        title: "Module 2: Practical Troubleshooting",
        lessons: [
          {
            id: "networking-lesson-3",
            title: "Basic Network Diagnostics",
            duration: "18 min",
            definition: "Use common tools to verify connectivity and identify issues.",
            content: [
              { type: "heading", text: "Troubleshooting Flow" },
              { type: "paragraph", text: "Start from physical checks, then verify IP settings, then test routes." },
              { type: "list", items: ["ipconfig / ifconfig", "ping", "traceroute", "nslookup"] },
              { type: "code", language: "bash", code: "ping 8.8.8.8\nnslookup example.com" },
            ],
          },
          {
            id: "networking-lesson-4",
            title: "Secure Wireless Setup",
            duration: "16 min",
            unlocked: false,
            definition: "Configure safer Wi-Fi access with strong encryption and segmentation.",
            content: [
              { type: "heading", text: "Wi-Fi Security Basics" },
              { type: "paragraph", text: "Use WPA2/WPA3, unique passwords, and separate guest networks." },
              { type: "tip", text: "Disable default router credentials immediately after setup." },
              { type: "code", language: "text", code: "Recommended:\nEncryption: WPA2/WPA3\nGuest SSID: Enabled\nAdmin password: Strong unique value" },
            ],
          },
        ],
      },
    ],
  },
];
