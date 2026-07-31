const fs = require('fs');
const path = require('path');

const policy = {
    slug: 'data-security-policy',
    title: 'Data Security Policy',
    date: '30 July 2026',
    content: `1. Introduction
This Data Security Policy ("Policy") outlines the technical, administrative, and organizational measures implemented by JiNANAM Technologies / Vihaar Tech ("Company", "we", "us", or "our") to protect information processed through JiNANAM Campus ("Platform").
The security of educational data is a fundamental priority. We are committed to maintaining a robust security posture to protect the confidentiality, integrity and availability of information entrusted to us by Educational Institutions and Users.
This Policy should be read in conjunction with our Privacy Policy and Terms & Conditions.

2. Information Security Objectives
Our data security framework is designed to:
Protect Personal Information against unauthorized access.
Ensure the confidentiality of sensitive academic and financial records.
Maintain the integrity of institutional data by preventing unauthorized modification.
Ensure the continuous availability of Platform services.
Comply with applicable legal and regulatory security requirements.
Detect, respond to, and recover from security incidents promptly.

3. Architecture and Infrastructure Security
A. Cloud Hosting
JiNANAM Campus is hosted on secure, industry-leading cloud infrastructure providers (such as Amazon Web Services (AWS), Google Cloud Platform (GCP) or Microsoft Azure).
Our cloud infrastructure is configured using security best practices, including isolated Virtual Private Clouds (VPCs), restrictive firewalls and secure network architectures.
Our infrastructure partners maintain rigorous security certifications, including ISO 27001, SOC 2 and PCI-DSS compliance.

B. Data Residency
All production infrastructure and primary databases associated with JiNANAM Campus are hosted in secure data centers located within India, in compliance with applicable local data localization requirements.

C. Network Security
We employ multiple layers of network security, including:
Web Application Firewalls (WAF) to protect against common web exploits (e.g., SQL injection, Cross-Site Scripting).
Distributed Denial of Service (DDoS) protection mechanisms.
Strict inbound and outbound firewall rules.
Network segmentation isolating public-facing services from internal databases.
Intrusion Detection and Prevention Systems (IDS/IPS).

4. Data Encryption
A. Data in Transit
All communications between User devices (browsers, mobile applications) and our servers are encrypted using industry-standard Transport Layer Security (TLS 1.2 or higher).
This ensures that data cannot be intercepted or read while traversing the internet.

B. Data at Rest
Sensitive information stored within our primary databases is encrypted at rest using Advanced Encryption Standard (AES-256) or equivalent encryption algorithms.
Encryption keys are managed securely using dedicated Key Management Services (KMS).

5. Access Control and Authentication
A. Administrative Access (Internal)
Access to production environments and customer data by JiNANAM Technologies personnel is strictly controlled.
Access is granted on a "Least Privilege" and "Need-to-Know" basis.
All administrative access requires Multi-Factor Authentication (MFA).
Access logs are maintained and regularly audited.
Upon termination or transfer of personnel, access rights are revoked immediately.

B. User Access (Platform)
Access to JiNANAM Campus by Institution Users requires valid authentication credentials.
Passwords must meet specific complexity requirements.
Passwords are not stored in plaintext; they are securely hashed using strong cryptographic algorithms (e.g., bcrypt or Argon2) with unique salts.
The Platform implements session management controls, including automatic session timeouts for inactivity.
Institutions are provided with Role-Based Access Control (RBAC) mechanisms, enabling administrators to restrict access based on a User's role (e.g., Teacher, Accountant, Driver).

6. Application Security
Our development lifecycle incorporates security by design:
Code Review: All code changes undergo peer review before deployment to production.
Vulnerability Scanning: Automated tools are used to scan for known vulnerabilities in third-party libraries and dependencies.
Security Testing: Regular security assessments and penetration testing are conducted to identify and remediate potential application vulnerabilities.
Input Validation: Strict input validation and output encoding are implemented to prevent injection attacks.
Secure APIs: Application Programming Interfaces (APIs) are secured using authentication tokens and rate-limiting to prevent abuse.

7. Data Backup and Recovery
To ensure data availability and resilience against data loss:
Automated backups of primary databases are performed at regular intervals.
Backups are encrypted and stored in secure, geographically separated storage locations within India.
Backup integrity is periodically verified.
Disaster Recovery (DR) plans are maintained and periodically tested to ensure the Platform can be restored within an acceptable Recovery Time Objective (RTO) in the event of a catastrophic failure.

8. Vulnerability Management
We actively monitor for emerging security threats and vulnerabilities.
Security patches and updates for operating systems, frameworks and dependencies are applied promptly.
Critical vulnerabilities are prioritized for immediate remediation.

9. Endpoint Security
Devices used by JiNANAM Technologies personnel to access or manage the Platform infrastructure are equipped with:
Full-disk encryption.
Endpoint Detection and Response (EDR) or robust antivirus software.
Mobile Device Management (MDM) policies.
Automatic screen locks and secure authentication requirements.

10. Third-Party Vendor Management
Before engaging third-party service providers who may have access to Platform data, we conduct appropriate security assessments.
Third-party providers are bound by strict confidentiality and data protection agreements.
We utilize only those third-party services that demonstrate a commitment to security standards equivalent to or exceeding our own.

11. Logging and Monitoring
We maintain comprehensive logging and monitoring systems to track Platform health and security.
Logs include:
Authentication attempts (successes and failures).
Administrative actions.
System errors and exceptions.
Network traffic patterns.
We monitor Platform activity to:
Detect unauthorized access.
Identify suspicious behaviour.
Monitor system performance.
Investigate security incidents.
Protect Platform integrity.
Improve system reliability.
Security logs may be maintained for operational, legal and security purposes.

12. Security Incident Response
If a security incident is identified,`
};

function generateComponentCode(policy) {
  // Parse sections
  const sections = [];
  let currentSection = null;
  const lines = policy.content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (/^[0-9A-Z]+\.\s/.test(line)) {
      if (currentSection) sections.push(currentSection);
      currentSection = { title: line, paragraphs: [] };
    } else {
      if (!currentSection) {
        currentSection = { title: '', paragraphs: [] };
      }
      currentSection.paragraphs.push(line);
    }
  }
  if (currentSection) sections.push(currentSection);

  // Generate JSX
  let jsxContent = '';
  sections.forEach(sec => {
    if (!sec.title) return;
    
    const paras = [];
    let currentList = [];
    
    sec.paragraphs.forEach(p => {
      if (p.length < 50 && !p.endsWith('.') && !p.endsWith(';')) {
        currentList.push(p);
      } else {
        if (currentList.length > 0) {
          if (currentList.length > 1) {
            paras.push({ type: 'list', items: currentList });
          } else {
            paras.push({ type: 'p', text: currentList[0] });
          }
          currentList = [];
        }
        paras.push({ type: 'p', text: p });
      }
    });
    if (currentList.length > 0) {
      if (currentList.length > 1) {
        paras.push({ type: 'list', items: currentList });
      } else {
        paras.push({ type: 'p', text: currentList[0] });
      }
    }

    let innerContent = `                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">${sec.title}</h2>\n`;
    
    paras.forEach(p => {
      if (p.type === 'p') {
        innerContent += `                <p className="mb-4">${p.text.replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</p>\n`;
      } else if (p.type === 'list') {
        innerContent += `                <ul className="space-y-2 list-disc pl-6 mb-4">\n`;
        p.items.forEach(item => {
          innerContent += `                  <li>${item.replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</li>\n`;
        });
        innerContent += `                </ul>\n`;
      }
    });

    jsxContent += `
            <FadeUp delay={0.02}>
              <div className="space-y-2">
${innerContent}              </div>
            </FadeUp>
`;
  });

  const componentName = policy.title.replace(/[^a-zA-Z]/g, '') + 'Page';

  return `
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function ${componentName}() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-32 pb-10 lg:pt-40 lg:pb-14 border-b border-border bg-surface">
        <Container>
          <FadeUp delay={0.02}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-section font-bold tracking-tight text-foreground leading-[1.1]">
                ${policy.title}
              </h1>
              <p className="mt-4 text-sm text-muted font-medium">
                Last Revised: ${policy.date}
              </p>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="py-section-sm lg:py-section-lg">
        <Container>
          <div className="max-w-4xl mx-auto text-muted leading-relaxed text-base">
${jsxContent}
            {/* Note: Additional content goes here for Security Incident Response and beyond */}
          </div>
        </Container>
      </Section>
    </main>
  );
}
`;
}

const code = generateComponentCode(policy);
const filePath = path.join(__dirname, 'src/app', policy.slug, 'page.tsx');
fs.writeFileSync(filePath, code);
console.log('Updated ' + filePath);
