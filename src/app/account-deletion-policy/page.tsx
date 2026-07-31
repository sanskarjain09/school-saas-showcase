"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function AccountDeletionPolicyPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-20 pb-10 lg:pt-28 lg:pb-14 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Account Deletion Policy
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
                  This Account Deletion Policy explains the process for requesting the deletion of user accounts and associated personal information from JiNANAM Campus (&quot;Platform&quot;), owned and operated by JiNANAM Technologies / Vihaar Tech.
                </p>
                <p className="font-medium text-foreground">
                  This Policy should be read together with our Privacy Policy and Terms & Conditions.
                </p>
              </div>
            </FadeUp>

            {/* 2. Scope */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">2. Scope</h2>
                <p>This Policy applies to all user accounts created on JiNANAM Campus, including:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 bg-gray-50/80 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-sm">
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Institution Owners</li>
                    <li>Trustees & Principals</li>
                    <li>Directors & Admins</li>
                    <li>Teachers & Faculty</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Students</li>
                    <li>Parents or Guardians</li>
                    <li>Drivers & Gatekeepers</li>
                    <li>Office & Library Staff</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Hostel & Account Staff</li>
                    <li>Other Authorized Users</li>
                  </ul>
                </div>
              </div>
            </FadeUp>

            {/* 3. Institution Managed Accounts */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">3. Institution Managed Accounts</h2>
                <p>
                  JiNANAM Campus is a Business-to-Business (B2B) platform provided to Educational Institutions. Most user accounts are created, managed and controlled by the respective Educational Institution.
                </p>
                <p className="font-medium text-foreground">
                  Accordingly, Educational Institutions act as the primary administrators of their users and are responsible for managing account access, activation, suspension and deletion in accordance with their internal policies.
                </p>
              </div>
            </FadeUp>

            {/* 4. How to Request Account Deletion */}
            <FadeUp>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">4. How to Request Account Deletion</h2>
                
                <div className="space-y-3 pl-4 border-l-2 border-[#1A73E8]">
                  <h3 className="text-lg font-semibold text-foreground">A. Institution Administrators</h3>
                  <p>Institution Administrators may submit an account deletion request by contacting JiNANAM Technologies via email at <a href="mailto:jinanamtech@gmail.com" className="text-[#1A73E8] hover:underline">jinanamtech@gmail.com</a>.</p>
                  <p>The request should include:</p>
                  <ul className="space-y-1 list-disc pl-5 text-sm">
                    <li>Institution Name & Contact Person</li>
                    <li>Registered Mobile Number & Email Address</li>
                    <li>Reason for Deletion</li>
                    <li>Details of the account(s) to be deleted</li>
                  </ul>
                  <p className="text-xs pt-1">Additional verification may be required before processing the request.</p>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-gray-300 dark:border-white/20">
                  <h3 className="text-lg font-semibold text-foreground">B. Teachers, Students, Parents and Other Users</h3>
                  <p>
                    Where accounts are managed by an Educational Institution, individual users should first contact their respective Institution Administrator. The Institution Administrator may review the request and, where appropriate, coordinate with JiNANAM Technologies for further processing.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* 5. Verification Process */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">5. Verification Process</h2>
                <p>
                  Before processing any deletion request, JiNANAM Technologies may verify the identity and authority of the requesting individual through email verification, mobile confirmation, institution authorization, or identity confirmation. Requests that cannot be adequately verified may be declined to protect user privacy and security.
                </p>
              </div>
            </FadeUp>

            {/* 6. What Happens After a Deletion Request */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">6. What Happens After a Deletion Request</h2>
                <p>Once a valid deletion request has been received and approved:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>The account may be deactivated and access to JiNANAM Campus will be revoked.</li>
                  <li>Personal Information may be deleted or anonymized, subject to applicable legal and contractual obligations.</li>
                  <li>Authentication credentials will be invalidated and associated services will cease.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 7. Information That May Be Retained & 8. Institutional Records */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">7. Retained Information & 8. Institutional Records</h2>
                <p>
                  Certain information may continue to be retained where required for compliance with applicable laws, regulatory obligations, audit requirements, taxation, fraud prevention, legal proceedings, dispute resolution, or backup restoration.
                </p>
                <p>
                  Where Educational Institutions are legally required to retain academic, attendance, examination, financial or administrative records, such records may continue to exist within the Institution&apos;s systems even after an individual account has been deleted. JiNANAM Technologies does not determine statutory educational record retention requirements applicable to individual Institutions.
                </p>
              </div>
            </FadeUp>

            {/* 9. Backup Copies & 10. Effect of Account Deletion */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">9. Backup Copies & 10. Effect of Deletion</h2>
                <p>
                  Deleted information may continue to exist in encrypted backup systems for a limited period as part of standard disaster recovery procedures before being automatically removed or overwritten in accordance with internal retention schedules.
                </p>
                <p>
                  Following deletion, login access is permanently disabled, profile info becomes inaccessible, and previously generated reports or audit logs may continue to exist where required by law or legitimate business purposes.
                </p>
              </div>
            </FadeUp>

            {/* 11. Re-Registration & 12. Refusal of Deletion Requests */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">11. Re-Registration & 12. Refusal of Requests</h2>
                <p>
                  If an account has been deleted, future access may require creating a new account with fresh authorization and credentials. JiNANAM does not guarantee restoration of previously deleted info.
                </p>
                <p>
                  We reserve the right to refuse or defer deletion requests where identity cannot be verified, legal obligations require retention, or ongoing investigations require record preservation.
                </p>
              </div>
            </FadeUp>

            {/* 13. Data Security, 14. Changes, 15 & 16. Governing Law/Jurisdiction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">13. Security, Policy Changes & Jurisdiction</h2>
                <p>
                  Deletion requests are processed using reasonable administrative and technical safeguards. We reserve the right to modify this Policy at any time. This Policy is governed by the laws of India, with exclusive jurisdiction in Mumbai, Maharashtra.
                </p>
              </div>
            </FadeUp>

            {/* 17. Contact Us */}
            <FadeUp>
              <div className="space-y-4 p-8 bg-gray-50/80 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">17. Contact Us</h2>
                <p>For account deletion requests or privacy-related enquiries, please contact:</p>
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