
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function AccountDeletionPolicyPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-32 pb-10 lg:pt-40 lg:pb-14 border-b border-border bg-surface">
        <Container>
          <FadeUp delay={0.02}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-section font-bold tracking-tight text-foreground leading-[1.1]">
                Account Deletion Policy
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
                <p className="mb-4">This Account Deletion Policy explains the process for requesting the deletion of user accounts and associated personal information from JiNANAM Campus (&quot;Platform&quot;), owned and operated by JiNANAM Technologies / Vihaar Tech.</p>
                <p className="mb-4">This Policy should be read together with our Privacy Policy and Terms & Conditions.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">2. Scope</h2>
                <p className="mb-4">This Policy applies to all user accounts created on JiNANAM Campus, including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Institution Owners</li>
                  <li>Trustees</li>
                  <li>Principals</li>
                  <li>Directors</li>
                  <li>Administrators</li>
                  <li>Teachers</li>
                  <li>Students</li>
                  <li>Parents or Guardians</li>
                  <li>Drivers</li>
                  <li>Gatekeepers</li>
                  <li>Office Staff</li>
                  <li>Library Staff</li>
                  <li>Hostel Staff</li>
                  <li>Account Staff</li>
                  <li>Other Authorized Users</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">3. Institution Managed Accounts</h2>
                <p className="mb-4">JiNANAM Campus is a Business-to-Business (B2B) platform provided to Educational Institutions.</p>
                <p className="mb-4">Most user accounts are created, managed and controlled by the respective Educational Institution.</p>
                <p className="mb-4">Accordingly, Educational Institutions act as the primary administrators of their users and are responsible for managing account access, activation, suspension and deletion in accordance with their internal policies.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">4. How to Request Account Deletion</h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">A. Institution Administrators</h2>
                <p className="mb-4">Institution Administrators may submit an account deletion request by contacting JiNANAM Technologies through:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Email: jinanamtech@gmail.com</li>
                  <li>The request should include:</li>
                  <li>Institution Name</li>
                  <li>Registered Contact Person</li>
                  <li>Registered Mobile Number</li>
                  <li>Registered Email Address</li>
                  <li>Reason for Deletion</li>
                  <li>Details of the account(s) to be deleted</li>
                </ul>
                <p className="mb-4">Additional verification may be required before processing the request.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">B. Teachers, Students, Parents and Other Users</h2>
                <p className="mb-4">Where accounts are managed by an Educational Institution, individual users should first contact their respective Institution Administrator.</p>
                <p className="mb-4">The Institution Administrator may review the request and, where appropriate, coordinate with JiNANAM Technologies for further processing.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">5. Verification Process</h2>
                <p className="mb-4">Before processing any deletion request, JiNANAM Technologies may verify the identity and authority of the requesting individual.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Verification may include:</li>
                  <li>Registered Email Verification</li>
                  <li>Registered Mobile Verification</li>
                  <li>Institution Authorization</li>
                  <li>Identity Confirmation</li>
                </ul>
                <p className="mb-4">Additional Supporting Information where reasonably required</p>
                <p className="mb-4">Requests that cannot be adequately verified may be declined to protect user privacy and security.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">6. What Happens After a Deletion Request</h2>
                <p className="mb-4">Once a valid deletion request has been received and approved:</p>
                <p className="mb-4">The account may be deactivated.</p>
                <p className="mb-4">Access to JiNANAM Campus will be revoked.</p>
                <p className="mb-4">Personal Information may be deleted or anonymized, subject to applicable legal and contractual obligations.</p>
                <p className="mb-4">Authentication credentials will be invalidated.</p>
                <p className="mb-4">Certain associated services may no longer be available.</p>
                <p className="mb-4">Deletion requests are processed within a reasonable timeframe after successful verification.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">7. Information That May Be Retained</h2>
                <p className="mb-4">Certain information may continue to be retained where required for:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Compliance with applicable laws</li>
                  <li>Regulatory obligations</li>
                  <li>Audit requirements</li>
                  <li>Financial record keeping</li>
                  <li>Taxation requirements</li>
                  <li>Fraud prevention</li>
                  <li>Security investigations</li>
                  <li>Legal proceedings</li>
                  <li>Dispute resolution</li>
                  <li>Enforcement of contractual rights</li>
                  <li>Backup restoration processes</li>
                  <li>System integrity and disaster recovery</li>
                </ul>
                <p className="mb-4">Such retained information shall be protected in accordance with our Privacy Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">8. Institutional Records</h2>
                <p className="mb-4">Where Educational Institutions are legally required to retain academic, attendance, examination, financial or administrative records, such records may continue to exist within the Institution&apos;s systems even after an individual account has been deleted.</p>
                <p className="mb-4">JiNANAM Technologies does not determine statutory educational record retention requirements applicable to individual Institutions.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">9. Backup Copies</h2>
                <p className="mb-4">Deleted information may continue to exist in encrypted backup systems for a limited period as part of standard backup, disaster recovery and business continuity procedures.</p>
                <p className="mb-4">Such backup copies are securely maintained and are automatically removed or overwritten in accordance with our internal retention schedules.</p>
                <p className="mb-4">Backup copies are not ordinarily restored except where necessary for disaster recovery or system restoration purposes.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">10. Effect of Account Deletion</h2>
                <p className="mb-4">Following deletion:</p>
                <p className="mb-4">Login access will be permanently disabled.</p>
                <p className="mb-4">Profile information may no longer be accessible.</p>
                <p className="mb-4">Platform services linked to the deleted account will cease.</p>
                <p className="mb-4">Certain educational records may remain associated with the Institution where legally required.</p>
                <p className="mb-4">Previously generated reports, audit logs and historical records may continue to exist where required by law or legitimate business purposes.</p>
                <p className="mb-4">Account deletion does not automatically delete records that are legally required to be maintained.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">11. Re-Registration</h2>
                <p className="mb-4">If an account has been deleted, future access to JiNANAM Campus may require:</p>
                <p className="mb-4">Creation of a new account;</p>
                <p className="mb-4">Fresh authorization by the Educational Institution;</p>
                <p className="mb-4">New authentication credentials.</p>
                <p className="mb-4">JiNANAM Technologies does not guarantee restoration of previously deleted information.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">12. Refusal of Deletion Requests</h2>
                <p className="mb-4">JiNANAM Technologies reserves the right to refuse or defer deletion requests where:</p>
                <p className="mb-4">Identity cannot be verified.</p>
                <p className="mb-4">The requester lacks authority.</p>
                <p className="mb-4">Applicable laws require continued retention.</p>
                <p className="mb-4">Court orders or regulatory directions prohibit deletion.</p>
                <p className="mb-4">Ongoing investigations require preservation of records.</p>
                <p className="mb-4">Deletion would adversely affect legal rights or contractual obligations.</p>
                <p className="mb-4">Fraud prevention or security measures require continued retention.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">13. Data Security During Deletion</h2>
                <p className="mb-4">All deletion requests are processed using reasonable administrative and technical safeguards designed to protect user information throughout the deletion process.</p>
                <p className="mb-4">Only authorized personnel are permitted to process verified deletion requests.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">14. Changes to this Policy</h2>
                <p className="mb-4">JiNANAM Technologies reserves the right to update or modify this Account Deletion Policy at any time.</p>
                <p className="mb-4">The updated version shall become effective from the date published on the official website.</p>
                <p className="mb-4">Continued use of JiNANAM Campus after any revision constitutes acceptance of the updated Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">15. Governing Law</h2>
                <p className="mb-4">This Account Deletion Policy shall be governed by and construed in accordance with the laws of the Republic of India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">16. Jurisdiction</h2>
                <p className="mb-4">Any dispute arising from or relating to this Account Deletion Policy shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">17. Contact Us</h2>
                <p className="mb-4">For account deletion requests or privacy-related enquiries, please contact:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
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
                <p className="mb-4">By using JiNANAM Campus, you acknowledge that you have read, understood and agreed to this Account Deletion Policy.</p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>
    </main>
  );
}
