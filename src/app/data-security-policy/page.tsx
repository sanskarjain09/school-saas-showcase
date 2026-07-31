"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function DataSecurityPolicyPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-20 pb-10 lg:pt-28 lg:pb-14 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Data Security Policy
              </h1>
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                Last Revised: 30 July 2026
              </p>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="pt-12 pb-20 lg:pt-16 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16 text-muted-foreground leading-relaxed text-base">
            
            {/* 1. Introduction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">1. Introduction</h2>
                <p>
                  JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the confidentiality, integrity and availability of information processed through JiNANAM Campus (&quot;Platform&quot;).
                </p>
                <p>
                  This Data Security Policy describes the administrative, technical and organizational measures implemented to safeguard information entrusted to us by Educational Institutions and their authorized users.
                </p>
                <p className="font-medium text-foreground">
                  This Policy should be read together with our Privacy Policy, Terms & Conditions, Account Deletion Policy and other applicable policies.
                </p>
              </div>
            </FadeUp>

            {/* 2. Scope */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">2. Scope</h2>
                <p>This Policy applies to all information processed through JiNANAM Campus, including:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 bg-gray-50/80 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-sm">
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Educational Institution Info</li>
                    <li>Student Information</li>
                    <li>Parent Information</li>
                    <li>Teacher Information</li>
                    <li>Employee Information</li>
                    <li>Driver Information</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Gatekeeper Information</li>
                    <li>Administrative Information</li>
                    <li>Attendance Records</li>
                    <li>Examination Records</li>
                    <li>Academic Records</li>
                    <li>Fee Records</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Communication Records</li>
                    <li>Visitor Management Records</li>
                    <li>Transport Records</li>
                    <li>Uploaded Documents</li>
                    <li>Technical & Diagnostic Info</li>
                  </ul>
                </div>
                <p className="text-sm">
                  It applies to all authorized users accessing JiNANAM Campus through mobile applications, web applications, administrative portals and official websites.
                </p>
              </div>
            </FadeUp>

            {/* 3. Our Security Commitment */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">3. Our Security Commitment</h2>
                <p>JiNANAM Technologies is committed to implementing commercially reasonable security practices designed to:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Protect Personal Information.</li>
                  <li>Prevent unauthorized access.</li>
                  <li>Maintain confidentiality and preserve data integrity.</li>
                  <li>Reduce security risks and detect suspicious activities.</li>
                  <li>Respond to security incidents promptly.</li>
                  <li>Maintain service reliability and support business continuity.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 4. Administrative Security Measures */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">4. Administrative Security Measures</h2>
                <p>We implement administrative safeguards that may include:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Defined access control procedures and role-based responsibilities.</li>
                  <li>Restricted administrative access and secure account management.</li>
                  <li>Security awareness practices and internal operating procedures.</li>
                  <li>Change management and controlled deployment procedures.</li>
                  <li>Incident reporting processes and periodic review of security controls.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 5. Technical Security Measures */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">5. Technical Security Measures</h2>
                <p>Reasonable technical safeguards may include:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Secure cloud infrastructure and encrypted communications using industry-standard protocols.</li>
                  <li>Secure authentication mechanisms and password hashing for user credentials.</li>
                  <li>Role-Based Access Control (RBAC) and session management controls.</li>
                  <li>Firewall protection and network security controls.</li>
                  <li>Audit logging, error monitoring, application monitoring, and security event monitoring.</li>
                  <li>Automated backups, secure software deployment practices, and system redundancy where applicable.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 6. Data Encryption */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">6. Data Encryption</h2>
                <p>
                  Where appropriate, JiNANAM Campus uses encryption technologies to help protect information during transmission and storage. Sensitive authentication credentials are stored using secure cryptographic methods.
                </p>
                <p className="font-medium text-foreground">
                  While reasonable safeguards are implemented, no electronic transmission or storage system can be guaranteed to be completely secure.
                </p>
              </div>
            </FadeUp>

            {/* 7. User Authentication */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">7. User Authentication</h2>
                <p>Access to JiNANAM Campus is controlled through authenticated user accounts. Security measures may include:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Username and password authentication with secure password storage.</li>
                  <li>Session timeout mechanisms and login validation.</li>
                  <li>Access authorization, role-based permissions, and account deactivation where required.</li>
                </ul>
                <p className="text-sm">Users are responsible for maintaining the confidentiality of their login credentials.</p>
              </div>
            </FadeUp>

            {/* 8. Access Control */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">8. Access Control</h2>
                <p>
                  Access to information is restricted according to the principle of least privilege. Only authorized users are permitted to access information necessary for their assigned responsibilities. Educational Institutions are responsible for configuring and maintaining user roles and permissions within their organizations.
                </p>
              </div>
            </FadeUp>

            {/* 9. Infrastructure Security */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">9. Infrastructure Security</h2>
                <p>
                  JiNANAM Campus operates using professionally managed infrastructure designed to support platform availability, secure data storage, disaster recovery, system monitoring, controlled administrative access, and infrastructure redundancy where applicable.
                </p>
              </div>
            </FadeUp>

            {/* 10. Backup and Disaster Recovery */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">10. Backup and Disaster Recovery</h2>
                <p>
                  To support business continuity, backups may be maintained in accordance with operational requirements. Backup procedures are designed to protect against accidental data loss, support disaster recovery, restore services where reasonably possible, and maintain operational continuity. Retention periods may vary based on operational and legal requirements.
                </p>
              </div>
            </FadeUp>

            {/* 11. Security Monitoring */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">11. Security Monitoring</h2>
                <p>
                  JiNANAM Technologies may monitor Platform activity to detect unauthorized access, identify suspicious behaviour, monitor system performance, investigate security incidents, protect Platform integrity, and improve system reliability. Security logs may be maintained for operational, legal, and security purposes.
                </p>
              </div>
            </FadeUp>

            {/* 12. Security Incident Response */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">12. Security Incident Response</h2>
                <p>
                  If a security incident is identified, JiNANAM Technologies may take appropriate actions including investigation of the incident, containment measures, system recovery, restoration of services, security improvements, and notification where required by applicable law. The exact response will depend upon the nature and severity of the incident.
                </p>
              </div>
            </FadeUp>

            {/* 13. Responsibilities of Educational Institutions */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">13. Responsibilities of Educational Institutions</h2>
                <p>Educational Institutions are responsible for:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Maintaining secure administrator credentials and managing user permissions.</li>
                  <li>Removing access for former employees and keeping institution-managed devices reasonably secure.</li>
                  <li>Ensuring users comply with institutional security practices and protecting locally stored information.</li>
                  <li>Reporting suspected security incidents promptly.</li>
                </ul>
                <p className="text-xs pt-1">JiNANAM Technologies cannot secure devices or networks that are owned or controlled by Educational Institutions.</p>
              </div>
            </FadeUp>

            {/* 14. Responsibilities of Users */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">14. Responsibilities of Users</h2>
                <p>Every user is responsible for:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Protecting login credentials, using strong passwords, and not sharing authentication details.</li>
                  <li>Logging out of shared devices and reporting suspicious activities.</li>
                  <li>Keeping devices reasonably secure, installing software updates, and using the Platform only for authorized purposes.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 15. Third-Party Services */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">15. Third-Party Services</h2>
                <p>
                  JiNANAM Campus may rely on trusted third-party service providers for cloud hosting, infrastructure management, notifications, email, SMS, analytics, monitoring, and technical support. Such providers are selected based on security considerations, but JiNANAM Technologies is not responsible for independent security practices adopted by third-party organizations.
                </p>
              </div>
            </FadeUp>

            {/* 16. Payment Security */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">16. Payment Security</h2>
                <p>Where Educational Institutions enable fee collection through JiNANAM Campus:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Payments are made directly to the Educational Institution.</li>
                  <li>JiNANAM Technologies does not store UPI PINs, debit/credit card PINs, internet banking passwords, or OTPs.</li>
                  <li>JiNANAM Technologies does not act as a payment gateway, bank or payment aggregator.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 17. No Absolute Security, 18. Policy Updates, 19 & 20. Governing Law/Jurisdiction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">17. Security Limits, Updates & Jurisdiction</h2>
                <p>
                  Although commercially reasonable safeguards are implemented, no technology platform can guarantee complete protection against every possible security risk. JiNANAM Technologies may revise this Policy from time to time by publishing updated versions on the official website.
                </p>
                <p>
                  This Policy is governed by the laws of India, with exclusive jurisdiction in Mumbai, Maharashtra.
                </p>
              </div>
            </FadeUp>

            {/* 21. Contact Us */}
            <FadeUp>
              <div className="space-y-4 p-8 bg-gray-50/80 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">21. Contact Us</h2>
                <p>For security-related enquiries, please contact:</p>
                <div className="text-foreground font-medium space-y-1 pt-2">
                  <p>JiNANAM Technologies / Vihaar Tech</p>
                  <p>Product: JiNANAM Campus</p>
                  <p>Website: <a href="https://www.jinanamcampus.in" target="_blank" rel="noopener noreferrer" className="text-[#1A73E8] hover:underline">www.jinanamcampus.in</a></p>
                  <p>Email: <a href="mailto:jinanamtech@gmail.com" className="text-[#1A73E8] hover:underline">jinanamtech@gmail.com</a></p>
                  <p>Phone: +91 8693838281</p>
                  <p className="pt-2 text-muted-foreground font-normal">
                    Address: 203, Navghar Road, Mulund East, Mumbai – 400081, Maharashtra, India.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>

    </main>
  );
}