
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function DataSecurityPolicyPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-32 pb-10 lg:pt-40 lg:pb-14 border-b border-border bg-surface">
        <Container>
          <FadeUp delay={0.02}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-section font-bold tracking-tight text-foreground leading-[1.1]">
                Data Security Policy
              </h1>
              <p className="mt-4 text-sm text-muted font-medium">
                Last Revised: 30 July 2026
              </p>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="py-section-sm lg:py-section-lg">
        <Container>
          <div className="max-w-4xl mx-auto text-muted leading-relaxed text-base">

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">1. Introduction</h2>
                <p className="mb-4">JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the confidentiality, integrity and availability of information processed through JiNANAM Campus (&quot;Platform&quot;).</p>
                <p className="mb-4">This Data Security Policy describes the administrative, technical and organizational measures implemented to safeguard information entrusted to us by Educational Institutions and their authorized users.</p>
                <p className="mb-4">This Policy should be read together with our Privacy Policy, Terms & Conditions, Account Deletion Policy and other applicable policies.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">2. Scope</h2>
                <p className="mb-4">This Policy applies to all information processed through JiNANAM Campus, including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Educational Institution Information</li>
                  <li>Student Information</li>
                  <li>Parent Information</li>
                  <li>Teacher Information</li>
                  <li>Employee Information</li>
                  <li>Driver Information</li>
                  <li>Gatekeeper Information</li>
                  <li>Administrative Information</li>
                  <li>Attendance Records</li>
                  <li>Examination Records</li>
                  <li>Academic Records</li>
                  <li>Fee Records</li>
                  <li>Communication Records</li>
                  <li>Visitor Management Records</li>
                  <li>Transport Records</li>
                  <li>Uploaded Documents</li>
                  <li>Technical and Diagnostic Information</li>
                </ul>
                <p className="mb-4">It applies to all authorized users accessing JiNANAM Campus through mobile applications, web applications, administrative portals and official websites.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">3. Our Security Commitment</h2>
                <p className="mb-4">JiNANAM Technologies is committed to implementing commercially reasonable security practices designed to:</p>
                <p className="mb-4">Protect Personal Information.</p>
                <p className="mb-4">Prevent unauthorized access.</p>
                <p className="mb-4">Maintain confidentiality.</p>
                <p className="mb-4">Preserve data integrity.</p>
                <p className="mb-4">Reduce security risks.</p>
                <p className="mb-4">Detect suspicious activities.</p>
                <p className="mb-4">Respond to security incidents.</p>
                <p className="mb-4">Maintain service reliability.</p>
                <p className="mb-4">Support business continuity.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">4. Administrative Security Measures</h2>
                <p className="mb-4">We implement administrative safeguards that may include:</p>
                <p className="mb-4">Defined access control procedures.</p>
                <p className="mb-4">Role-based responsibilities.</p>
                <p className="mb-4">Restricted administrative access.</p>
                <p className="mb-4">Secure account management.</p>
                <p className="mb-4">Security awareness practices.</p>
                <p className="mb-4">Internal operating procedures.</p>
                <p className="mb-4">Change management processes.</p>
                <p className="mb-4">Controlled deployment procedures.</p>
                <p className="mb-4">Incident reporting processes.</p>
                <p className="mb-4">Periodic review of security controls.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">5. Technical Security Measures</h2>
                <p className="mb-4">Reasonable technical safeguards may include:</p>
                <p className="mb-4">Secure cloud infrastructure.</p>
                <p className="mb-4">Encrypted communications using industry-standard protocols.</p>
                <p className="mb-4">Secure authentication mechanisms.</p>
                <p className="mb-4">Password hashing for user credentials.</p>
                <p className="mb-4">Role-Based Access Control (RBAC).</p>
                <p className="mb-4">Session management controls.</p>
                <p className="mb-4">Firewall protection.</p>
                <p className="mb-4">Network security controls.</p>
                <p className="mb-4">Audit logging.</p>
                <p className="mb-4">Error monitoring.</p>
                <p className="mb-4">Application monitoring.</p>
                <p className="mb-4">Security event monitoring.</p>
                <p className="mb-4">Automated backups.</p>
                <p className="mb-4">Secure software deployment practices.</p>
                <p className="mb-4">System redundancy where applicable.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">6. Data Encryption</h2>
                <p className="mb-4">Where appropriate, JiNANAM Campus uses encryption technologies to help protect information during transmission and storage.</p>
                <p className="mb-4">Sensitive authentication credentials are stored using secure cryptographic methods.</p>
                <p className="mb-4">While reasonable safeguards are implemented, no electronic transmission or storage system can be guaranteed to be completely secure.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">7. User Authentication</h2>
                <p className="mb-4">Access to JiNANAM Campus is controlled through authenticated user accounts.</p>
                <p className="mb-4">Security measures may include:</p>
                <p className="mb-4">Username and password authentication.</p>
                <p className="mb-4">Secure password storage.</p>
                <p className="mb-4">Session timeout mechanisms.</p>
                <p className="mb-4">Login validation.</p>
                <p className="mb-4">Access authorization.</p>
                <p className="mb-4">Role-based permissions.</p>
                <p className="mb-4">Account deactivation where required.</p>
                <p className="mb-4">Users are responsible for maintaining the confidentiality of their login credentials.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">8. Access Control</h2>
                <p className="mb-4">Access to information is restricted according to the principle of least privilege.</p>
                <p className="mb-4">Only authorized users are permitted to access information necessary for their assigned responsibilities.</p>
                <p className="mb-4">Educational Institutions are responsible for configuring and maintaining user roles and permissions within their organizations.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">9. Infrastructure Security</h2>
                <p className="mb-4">JiNANAM Campus operates using professionally managed infrastructure designed to support:</p>
                <p className="mb-4">Platform availability.</p>
                <p className="mb-4">Secure data storage.</p>
                <p className="mb-4">Disaster recovery.</p>
                <p className="mb-4">System monitoring.</p>
                <p className="mb-4">Controlled administrative access.</p>
                <p className="mb-4">Infrastructure redundancy where applicable.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">10. Backup and Disaster Recovery</h2>
                <p className="mb-4">To support business continuity, backups may be maintained in accordance with operational requirements.</p>
                <p className="mb-4">Backup procedures are designed to:</p>
                <p className="mb-4">Protect against accidental data loss.</p>
                <p className="mb-4">Support disaster recovery.</p>
                <p className="mb-4">Restore services where reasonably possible.</p>
                <p className="mb-4">Maintain operational continuity.</p>
                <p className="mb-4">Backup retention periods may vary depending upon operational and legal requirements.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">11. Security Monitoring</h2>
                <p className="mb-4">JiNANAM Technologies may monitor Platform activity to:</p>
                <p className="mb-4">Detect unauthorized access.</p>
                <p className="mb-4">Identify suspicious behaviour.</p>
                <p className="mb-4">Monitor system performance.</p>
                <p className="mb-4">Investigate security incidents.</p>
                <p className="mb-4">Protect Platform integrity.</p>
                <p className="mb-4">Improve system reliability.</p>
                <p className="mb-4">Security logs may be maintained for operational, legal and security purposes.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">12. Security Incident Response</h2>
                <p className="mb-4">If a security incident is identified, JiNANAM Technologies may take appropriate actions including:</p>
                <p className="mb-4">Investigation of the incident.</p>
                <p className="mb-4">Containment measures.</p>
                <p className="mb-4">System recovery.</p>
                <p className="mb-4">Restoration of services.</p>
                <p className="mb-4">Security improvements.</p>
                <p className="mb-4">Notification where required by applicable law.</p>
                <p className="mb-4">The exact response will depend upon the nature and severity of the incident.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">13. Responsibilities of Educational Institutions</h2>
                <p className="mb-4">Educational Institutions are responsible for:</p>
                <p className="mb-4">Maintaining secure administrator credentials.</p>
                <p className="mb-4">Managing user permissions.</p>
                <p className="mb-4">Removing access for former employees.</p>
                <p className="mb-4">Keeping institution-managed devices reasonably secure.</p>
                <p className="mb-4">Ensuring users comply with institutional security practices.</p>
                <p className="mb-4">Protecting locally stored information.</p>
                <p className="mb-4">Reporting suspected security incidents promptly.</p>
                <p className="mb-4">JiNANAM Technologies cannot secure devices or networks that are owned or controlled by Educational Institutions.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">14. Responsibilities of Users</h2>
                <p className="mb-4">Every user is responsible for:</p>
                <p className="mb-4">Protecting login credentials.</p>
                <p className="mb-4">Using strong passwords.</p>
                <p className="mb-4">Not sharing authentication details.</p>
                <p className="mb-4">Logging out of shared devices.</p>
                <p className="mb-4">Reporting suspicious activities.</p>
                <p className="mb-4">Keeping devices reasonably secure.</p>
                <p className="mb-4">Installing available software updates where applicable.</p>
                <p className="mb-4">Using the Platform only for authorized purposes.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">15. Third-Party Services</h2>
                <p className="mb-4">JiNANAM Campus may rely on trusted third-party service providers for services such as:</p>
                <p className="mb-4">Cloud hosting.</p>
                <p className="mb-4">Infrastructure management.</p>
                <p className="mb-4">Notification delivery.</p>
                <p className="mb-4">Email services.</p>
                <p className="mb-4">SMS services.</p>
                <p className="mb-4">Analytics.</p>
                <p className="mb-4">Monitoring.</p>
                <p className="mb-4">Technical support.</p>
                <p className="mb-4">Such providers are selected based on operational and security considerations.</p>
                <p className="mb-4">However, JiNANAM Technologies is not responsible for independent security practices adopted by third-party organizations.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">16. Payment Security</h2>
                <p className="mb-4">Where Educational Institutions enable fee collection through JiNANAM Campus:</p>
                <p className="mb-4">Payments are made directly to the Educational Institution.</p>
                <p className="mb-4">JiNANAM Technologies does not store UPI PINs.</p>
                <p className="mb-4">JiNANAM Technologies does not store debit card PINs.</p>
                <p className="mb-4">JiNANAM Technologies does not store credit card PINs.</p>
                <p className="mb-4">JiNANAM Technologies does not store internet banking passwords.</p>
                <p className="mb-4">JiNANAM Technologies does not store OTPs.</p>
                <p className="mb-4">JiNANAM Technologies does not act as a payment gateway, bank or payment aggregator.</p>
                <p className="mb-4">Payment security is also subject to the security practices of the respective banking institutions and payment service providers.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">17. No Absolute Security</h2>
                <p className="mb-4">Although JiNANAM Technologies implements commercially reasonable safeguards, no technology platform can guarantee complete protection against every possible security risk.</p>
                <p className="mb-4">Users acknowledge that:</p>
                <p className="mb-4">Internet communications involve inherent risks.</p>
                <p className="mb-4">Cybersecurity threats continue to evolve.</p>
                <p className="mb-4">Unauthorized activities may occur despite reasonable safeguards.</p>
                <p className="mb-4">Accordingly, JiNANAM Technologies does not guarantee absolute security of information.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">18. Policy Updates</h2>
                <p className="mb-4">JiNANAM Technologies may revise this Data Security Policy from time to time.</p>
                <p className="mb-4">Updated versions shall become effective upon publication on the official website.</p>
                <p className="mb-4">Continued use of JiNANAM Campus constitutes acceptance of the revised Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">19. Governing Law</h2>
                <p className="mb-4">This Policy shall be governed by and interpreted in accordance with the laws of the Republic of India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">20. Jurisdiction</h2>
                <p className="mb-4">Any dispute arising out of or relating to this Data Security Policy shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">21. Contact Us</h2>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>For security-related enquiries, please contact:</li>
                  <li>JiNANAM Technologies / Vihaar Tech</li>
                  <li>Product: JiNANAM Campus</li>
                  <li>Website: www.jinanamcampus.in</li>
                  <li>Email: jinanamtech@gmail.com</li>
                  <li>Phone: +91 8693838281</li>
                  <li>Address:</li>
                  <li>203, Navghar Road,</li>
                  <li>Mulund East,</li>
                  <li>Mumbai – 400081,</li>
                </ul>
                <p className="mb-4">Maharashtra, India.</p>
                <p className="mb-4">By accessing or using JiNANAM Campus, you acknowledge that you have read, understood and agreed to this Data Security Policy.</p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>
    </main>
  );
}
