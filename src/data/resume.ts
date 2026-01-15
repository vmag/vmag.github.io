export const resumeData = {
  personalInfo: {
    name: "Virginijus Magelinskas",
    title: "Senior DevOps Engineer | Cloud & Kubernetes | Distributed Systems",
    email: "virginijus.m@gmail.com",
    phone: "+370 610 33099",
    location: "Kaunas, Lithuania",
    linkedin: "https://www.linkedin.com/in/virginijusmagelinskas",
    github: "https://github.com/vmag",
    website: "https://github.com/vmag",
    summary:
      "Senior DevOps Engineer and Systems Architect with 15+ years of experience designing, automating, and operating large-scale, distributed, and highly available platforms. Deep expertise in Kubernetes, cloud infrastructure, CI/CD, GitOps (ArgoCD), observability, and infrastructure automation. Proven track record building production-grade platforms for real-time data streaming, microservices, and global delivery systems. Strong AWS and self-managed Kubernetes background, with Azure platform experience (Marketplace, identity, networking) and rapid onboarding to AKS environments.",
  },
  skills: [
    {
      category: "Containers & Orchestration",
      items: ["Kubernetes", "Rancher", "Helm", "Kustomize", "Docker", "ArgoCD (GitOps)"],
    },
    {
      category: "Cloud Platforms",
      items: ["AWS (EC2, VPC, IAM)", "Azure (Marketplace, AKS)", "Load Balancing", "VM Images"],
    },
    {
      category: "CI/CD",
      items: ["GitLab CI", "Azure DevOps Pipelines", "GitHub Actions"],
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform", "Ansible", "ARM/Bicep"],
    },
    {
      category: "Distributed Systems",
      items: ["NATS", "HashiCorp Nomad", "Service Discovery", "High Availability"],
    },
    {
      category: "Observability",
      items: ["Prometheus", "Grafana", "ELK", "InfluxDB", "Alerting", "SLOs"],
    },
    {
      category: "Security & Identity",
      items: ["RBAC", "Secrets Management", "PKI", "OAuth/OIDC", "Zero Trust"],
    },
    {
      category: "Automation & Scripting",
      items: ["Python", "Bash", "Shell", "Rundeck"],
    },
    {
      category: "Networking",
      items: ["TCP/IP", "BGP", "Anycast", "CDN", "Segment Routing (SRv6)"],
    },
    {
      category: "Operating Systems",
      items: ["Linux (Debian, Ubuntu, RHEL, CentOS, FreeBSD)"],
    },
  ],
  experience: [
    {
      id: 1,
      company: "Synternet (formerly Syntropy)",
      role: "Senior Systems Architect / DevOps Engineer",
      period: "Mar 2018 – Present",
      description:
        "Designed and operated a self-hosted, Rancher-managed Kubernetes platform for secure multi-cluster management and GitOps-based delivery.",
      achievements: [
        "Designed and operated a self-hosted, Rancher-managed Kubernetes platform, providing secure multi-cluster management, RBAC, and GitOps-based delivery (ArgoCD).",
        "Implemented GitOps workflows using ArgoCD for declarative application delivery, environment promotion, drift detection, and automated rollback.",
        "Architected and maintained a decentralized, distributed data-streaming platform based on Kubernetes, HashiCorp Nomad, and NATS.",
        "Built CI/CD pipelines using GitLab CI for microservices and infrastructure components.",
        "Implemented full observability stack (Prometheus, Grafana, InfluxDB, ELK), including metrics, logs, alerting, and incident response workflows.",
        "Automated infrastructure provisioning and configuration using Ansible, Python, Shell, and Rundeck.",
        "Designed networking, security, and reliability architecture for geographically distributed systems.",
      ],
    },
    {
      id: 2,
      company: "Sigaba",
      role: "AWS Cloud & CDN Architect",
      period: "May 2017 – Present",
      description:
        "Designed highly available cloud-native and multi-CDN architectures on AWS.",
      achievements: [
        "Designed highly available cloud-native and multi-CDN architectures on AWS.",
        "Consulted on scalability, latency optimization, and disaster-tolerant system design.",
        "Built secure, automated infrastructure supporting high-throughput media and data platforms.",
      ],
    },
    {
      id: 3,
      company: "Ambernetas",
      role: "DevOps Engineer / Senior Linux System Administrator",
      period: "Oct 2007 – Jan 2018",
      description:
        "Designed and operated global CDN and ISP infrastructure with strict availability and performance requirements.",
      achievements: [
        "Designed and operated global CDN and ISP infrastructure with strict availability and performance requirements.",
        "Implemented automation using Python, Ansible, Puppet.",
        "Built monitoring platforms with Zabbix, Telegraf, InfluxDB, Grafana, ELK.",
        "Performed capacity planning, performance tuning, and incident response for large-scale Linux environments.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      institution: "Kaunas University of Technology",
      degree: "Master’s Degree in CS",
      period: "Graduated",
    },
  ],
  certifications: [
    {
      id: 2,
      institution: "Linux Foundation",
      degree: "Kubernetes Monitoring with Prometheus",
      period: "Certification",
    },
    {
      id: 3,
      institution: "Linux Academy",
      degree: "Docker Deep Dive",
      period: "Certification",
    },
    {
      id: 4,
      institution: "Linux Foundation",
      degree: "Jenkins Certified Engineer",
      period: "Certification",
    },
    {
      id: 5,
      institution: "Self-Paced",
      degree: "Infrastructure Automation with Ansible & Terraform",
      period: "Training",
    },
    {
      id: 6,
      institution: "Self-Paced",
      degree: "Advanced Linux Networking & Performance",
      period: "Training",
    },
  ],
  projects: [
    {
      id: 1,
      name: "SRv6 Traceroute",
      description:
        "Author of SRv6 Traceroute tool (Segment Routing v6), forked and adopted by Cisco.",
      tags: ["Python", "Networking", "SRv6", "Open Source"],
      link: "https://github.com/vmag/srv6_tracert",
    },
    {
      id: 2,
      name: "GNS3 SRv6 Appliances",
      description:
        "Creator of GNS3 SRv6 appliance images for large-scale network simulation.",
      tags: ["GNS3", "Virtualization", "Networking", "Open Source"],
      link: "https://github.com/vmag/gns3-appliances",
    },
  ],
};
