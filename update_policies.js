const fs = require('fs');
const path = require('path');

const policies = [
  {
    slug: 'data-security-policy',
    title: 'Data Security Policy',
    date: '30 July 2026',
    content: `1. Introduction
JiNANAM Technologies / Vihaar Tech ("Company", "we", "our", or "us") is committed to protecting the confidentiality, integrity and availability of information processed through JiNANAM Campus ("Platform").
This Data Security Policy describes the administrative, technical and organizational measures implemented to safeguard information entrusted to us by Educational Institutions and their authorized users.
This Policy should be read together with our Privacy Policy, Terms & Conditions, Account Deletion Policy and other applicable policies.

2. Scope
This Policy applies to all information processed through JiNANAM Campus, including but not limited to:
Educational Institution Information
Student Information
Parent Information
Teacher Information
Employee Information
Driver Information
Gatekeeper Information
Administrative Information
Attendance Records
Examination Records
Academic Records
Fee Records
Communication Records
Visitor Management Records
Transport Records
Uploaded Documents
Technical and Diagnostic Information
It applies to all authorized users accessing JiNANAM Campus through mobile applications, web applications, administrative portals and official websites.

3. Our Security Commitment
JiNANAM Technologies is committed to implementing commercially reasonable security practices designed to:
Protect Personal Information.
Prevent unauthorized access.
Maintain confidentiality.
Preserve data integrity.
Reduce security risks.
Detect suspicious activities.
Respond to security incidents.
Maintain service reliability.
Support business continuity.

4. Administrative Security Measures
We implement administrative safeguards that may include:
Defined access control procedures.
Role-based responsibilities.
Restricted administrative access.
Secure account management.
Security awareness practices.
Internal operating procedures.
Change management processes.
Controlled deployment procedures.
Incident reporting processes.
Periodic review of security controls.

5. Technical Security Measures
Reasonable technical safeguards may include:
Secure cloud infrastructure.
Encrypted communications using industry-standard protocols.
Secure authentication mechanisms.
Password hashing for user credentials.
Role-Based Access Control (RBAC).
Session management controls.
Firewall protection.
Network security controls.
Audit logging.
Error monitoring.
Application monitoring.
Security event monitoring.
Automated backups.
Secure software deployment practices.
System redundancy where applicable.

6. Data Encryption
Where appropriate, JiNANAM Campus uses encryption technologies to help protect information during transmission and storage.
Sensitive authentication credentials are stored using secure cryptographic methods.
While reasonable safeguards are implemented, no electronic transmission or storage system can be guaranteed to be completely secure.

7. User Authentication
Access to JiNANAM Campus is controlled through authenticated user accounts.
Security measures may include:
Username and password authentication.
Secure password storage.
Session timeout mechanisms.
Login validation.
Access authorization.
Role-based permissions.
Account deactivation where required.
Users are responsible for maintaining the confidentiality of their login credentials.

8. Access Control
Access to information is restricted according to the principle of least privilege.
Only authorized users are permitted to access information necessary for their assigned responsibilities.
Educational Institutions are responsible for configuring and maintaining user roles and permissions within their organizations.

9. Infrastructure Security
JiNANAM Campus operates using professionally managed infrastructure designed to support:
Platform availability.
Secure data storage.
Disaster recovery.
System monitoring.
Controlled administrative access.
Infrastructure redundancy where applicable.

10. Backup and Disaster Recovery
To support business continuity, backups may be maintained in accordance with operational requirements.
Backup procedures are designed to:
Protect against accidental data loss.
Support disaster recovery.
Restore services where reasonably possible.
Maintain operational continuity.
Backup retention periods may vary depending upon operational and legal requirements.

11. Security Monitoring
JiNANAM Technologies may monitor Platform activity to:
Detect unauthorized access.
Identify suspicious behaviour.
Monitor system performance.
Investigate security incidents.
Protect Platform integrity.
Improve system reliability.
Security logs may be maintained for operational, legal and security purposes.

12. Security Incident Response
If a security incident is identified, JiNANAM Technologies may take appropriate actions including:
Investigation of the incident.
Containment measures.
System recovery.
Restoration of services.
Security improvements.
Notification where required by applicable law.
The exact response will depend upon the nature and severity of the incident.

13. Responsibilities of Educational Institutions
Educational Institutions are responsible for:
Maintaining secure administrator credentials.
Managing user permissions.
Removing access for former employees.
Keeping institution-managed devices reasonably secure.
Ensuring users comply with institutional security practices.
Protecting locally stored information.
Reporting suspected security incidents promptly.
JiNANAM Technologies cannot secure devices or networks that are owned or controlled by Educational Institutions.

14. Responsibilities of Users
Every user is responsible for:
Protecting login credentials.
Using strong passwords.
Not sharing authentication details.
Logging out of shared devices.
Reporting suspicious activities.
Keeping devices reasonably secure.
Installing available software updates where applicable.
Using the Platform only for authorized purposes.

15. Third-Party Services
JiNANAM Campus may rely on trusted third-party service providers for services such as:
Cloud hosting.
Infrastructure management.
Notification delivery.
Email services.
SMS services.
Analytics.
Monitoring.
Technical support.
Such providers are selected based on operational and security considerations.
However, JiNANAM Technologies is not responsible for independent security practices adopted by third-party organizations.

16. Payment Security
Where Educational Institutions enable fee collection through JiNANAM Campus:
Payments are made directly to the Educational Institution.
JiNANAM Technologies does not store UPI PINs.
JiNANAM Technologies does not store debit card PINs.
JiNANAM Technologies does not store credit card PINs.
JiNANAM Technologies does not store internet banking passwords.
JiNANAM Technologies does not store OTPs.
JiNANAM Technologies does not act as a payment gateway, bank or payment aggregator.
Payment security is also subject to the security practices of the respective banking institutions and payment service providers.

17. No Absolute Security
Although JiNANAM Technologies implements commercially reasonable safeguards, no technology platform can guarantee complete protection against every possible security risk.
Users acknowledge that:
Internet communications involve inherent risks.
Cybersecurity threats continue to evolve.
Unauthorized activities may occur despite reasonable safeguards.
Accordingly, JiNANAM Technologies does not guarantee absolute security of information.

18. Policy Updates
JiNANAM Technologies may revise this Data Security Policy from time to time.
Updated versions shall become effective upon publication on the official website.
Continued use of JiNANAM Campus constitutes acceptance of the revised Policy.

19. Governing Law
This Policy shall be governed by and interpreted in accordance with the laws of the Republic of India.

20. Jurisdiction
Any dispute arising out of or relating to this Data Security Policy shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.

21. Contact Us
For security-related enquiries, please contact:
JiNANAM Technologies / Vihaar Tech
Product: JiNANAM Campus
Website: www.jinanamcampus.in
Email: jinanamtech@gmail.com
Phone: +91 8693838281
Address:
203, Navghar Road,
Mulund East,
Mumbai – 400081,
Maharashtra, India.

By accessing or using JiNANAM Campus, you acknowledge that you have read, understood and agreed to this Data Security Policy.`
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    date: '30 July 2026',
    content: `1. Introduction
This Cookie Policy explains how JiNANAM Technologies / Vihaar Tech ("Company", "we", "our", or "us") uses cookies and similar technologies on the JiNANAM Campus website and related web-based services.
This Policy should be read together with our Privacy Policy and Terms & Conditions.
By accessing or using our website, you acknowledge that you have read and understood this Cookie Policy.

2. What Are Cookies?
Cookies are small text files that are stored on your computer, mobile device or web browser when you visit a website.
Cookies help websites function properly, improve user experience, remember user preferences, enhance security and provide website performance information.
Cookies do not generally provide us with direct access to your personal files or data stored on your device.

3. Scope
This Cookie Policy applies to:
Official JiNANAM Campus Website
Web Portals
Administrator Web Panel
Browser-based Services
Any future official JiNANAM Campus websites operated by JiNANAM Technologies
This Policy does not apply to third-party websites that may be linked from our website.

4. Types of Cookies We May Use
Depending on the services provided, our website may use one or more of the following categories of cookies.
Essential Cookies
These cookies are necessary for the proper functioning of the website.
They may be used to:
Maintain user sessions.
Authenticate users.
Protect secure areas.
Enable login functionality.
Maintain security features.
Prevent unauthorized access.
Without these cookies, certain website functions may not operate correctly.

Functional Cookies
These cookies help improve your browsing experience by remembering preferences such as:
Language selection.
Login preferences.
User interface settings.
Display preferences.
Accessibility settings.

Performance Cookies
Performance cookies help us understand how visitors interact with our website by collecting anonymous usage information.
Such information may include:
Pages visited.
Time spent on pages.
Browser information.
Device type.
General website usage patterns.
Error reporting.
This information helps improve website performance and user experience.

Analytics Cookies
Analytics technologies may be used to better understand website usage and improve our services.
Analytics information may include:
Website traffic.
Visitor behaviour.
Device categories.
Geographic region (general location only).
Browser usage.
Navigation patterns.
Analytics data is generally aggregated and used for service improvement purposes.

Security Cookies
Security-related cookies may be used to:
Detect suspicious activity.
Prevent fraudulent use.
Protect authenticated sessions.
Support website security mechanisms.

5. Mobile Applications
JiNANAM Campus mobile applications generally do not use browser cookies in the same manner as websites.
However, mobile applications may use similar technologies required for:
User authentication.
Session management.
Application functionality.
Security.
Performance monitoring.
Crash diagnostics.
Push notification services.
These technologies are governed by our Privacy Policy.

6. Third-Party Services
Our website may use trusted third-party services that may place or access cookies in accordance with their own privacy policies.
Such services may include providers supporting:
Cloud infrastructure.
Website analytics.
Performance monitoring.
Security services.
Embedded content.
Communication services.
JiNANAM Technologies does not control the cookie practices of independent third-party websites or services.
Users are encouraged to review the privacy and cookie policies of such third parties where applicable.

7. Managing Cookies
Most web browsers allow users to:
View stored cookies.
Delete cookies.
Block cookies.
Restrict certain categories of cookies.
Configure browser cookie preferences.
Please note that disabling certain cookies may affect the availability or functionality of portions of our website.
Instructions for managing cookies are generally available within your web browser's settings or help documentation.

8. Do Not Track
Some web browsers offer a "Do Not Track" (DNT) setting.
As there is currently no universally accepted standard for responding to DNT signals, our website may not respond differently when such signals are received.

9. Children's Privacy
Our website is intended primarily for Educational Institutions and authorized users.
We do not knowingly use cookies to intentionally collect personal information directly from children.
Student-related information is processed through the Platform under the control of the respective Educational Institution in accordance with our Privacy Policy.

10. Data Security
Information collected through cookies and similar technologies is protected using reasonable administrative, technical and organizational safeguards appropriate to the nature of the information collected.

11. Policy Updates
JiNANAM Technologies may revise this Cookie Policy from time to time to reflect changes in technology, legal requirements or business practices.
The updated version shall become effective from the date published on our official website.
Continued use of our website after publication of the updated Policy constitutes acceptance of the revised Cookie Policy.

12. Governing Law
This Cookie Policy shall be governed by and construed in accordance with the laws of the Republic of India.

13. Jurisdiction
Any dispute arising out of or relating to this Cookie Policy shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.

14. Contact Us
If you have any questions regarding this Cookie Policy, please contact:
JiNANAM Technologies / Vihaar Tech
Product: JiNANAM Campus
Website: www.jinanamcampus.in
Email: jinanamtech@gmail.com
Phone: +91 8693838281
Address:
203, Navghar Road,
Mulund East,
Mumbai – 400081,
Maharashtra, India.

By accessing or using the JiNANAM Campus website, you acknowledge that you have read, understood and agreed to this Cookie Policy.`
  }
];

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
          </div>
        </Container>
      </Section>
    </main>
  );
}
`;
}

policies.forEach(policy => {
  const code = generateComponentCode(policy);
  const dirPath = path.join(__dirname, 'src/app', policy.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(filePath, code);
  console.log('Updated ' + filePath);
});
