"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function TermsConditionsPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-20 pb-10 lg:pt-28 lg:pb-14 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Terms & Conditions
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
            
            {/* 1. Acceptance of Terms */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">1. Acceptance of Terms</h2>
                <p>
                  These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of JiNANAM Campus (&quot;Platform&quot;, &quot;Application&quot;, &quot;Services&quot;), owned and operated by JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                </p>
                <p className="font-medium text-foreground">
                  By accessing, registering for, or using JiNANAM Campus, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must discontinue use of the Platform immediately.
                </p>
              </div>
            </FadeUp>

            {/* 2. About JiNANAM Campus */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">2. About JiNANAM Campus</h2>
                <p>
                  JiNANAM Campus is a cloud-based Education Management System designed for educational institutions, including but not limited to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 bg-gray-50/80 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-sm">
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Schools</li>
                    <li>Preschools</li>
                    <li>Colleges</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Universities</li>
                    <li>Coaching Classes</li>
                    <li>Educational Trusts</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Academies</li>
                    <li>Training Institutes</li>
                    <li>Other educational organizations</li>
                  </ul>
                </div>
                <p>
                  The Platform enables institutions to manage academic, administrative, communication, transport, attendance, examinations, fee management, reports and other institution-related operations.
                </p>
              </div>
            </FadeUp>

            {/* 3. Eligibility */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">3. Eligibility</h2>
                <p>You may use JiNANAM Campus only if:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>You are authorized by an Educational Institution using the Platform; or</li>
                  <li>You are an authorized representative of JiNANAM Technologies.</li>
                </ul>
                <p>
                  If you are using the Platform on behalf of an Educational Institution, you represent that you have the authority to bind that Institution to these Terms.
                </p>
              </div>
            </FadeUp>

            {/* 4. Accounts */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">4. Accounts</h2>
                <p>Users are responsible for:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Providing accurate information where required.</li>
                  <li>Maintaining the confidentiality of login credentials.</li>
                  <li>Keeping account information updated.</li>
                  <li>Restricting unauthorized access to their account.</li>
                  <li>Immediately notifying the Institution or JiNANAM Technologies of any suspected unauthorized use.</li>
                </ul>
                <p className="font-medium text-foreground">
                  Users are responsible for activities performed through their accounts unless unauthorized access has been promptly reported.
                </p>
              </div>
            </FadeUp>

            {/* 5. Institution Responsibilities */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">5. Institution Responsibilities</h2>
                <p>Each Educational Institution agrees to:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Maintain accurate information uploaded to the Platform.</li>
                  <li>Obtain all necessary permissions and consents before uploading personal information.</li>
                  <li>Manage user roles and permissions responsibly.</li>
                  <li>Maintain confidentiality of administrator credentials.</li>
                  <li>Comply with all applicable laws and regulations.</li>
                  <li>Ensure that only authorized users access the Platform.</li>
                  <li>Use the Platform only for lawful educational purposes.</li>
                </ul>
                <p className="font-medium text-foreground">
                  The Institution remains solely responsible for all data uploaded or managed through its account.
                </p>
              </div>
            </FadeUp>

            {/* 6. User Responsibilities */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">6. User Responsibilities</h2>
                <p>Users agree that they shall not:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Use the Platform for any unlawful purpose.</li>
                  <li>Share login credentials with unauthorized persons.</li>
                  <li>Attempt unauthorized access to any account or system.</li>
                  <li>Interfere with Platform security or functionality.</li>
                  <li>Upload malicious software or harmful code.</li>
                  <li>Copy, reverse engineer, modify or attempt to derive the source code of the Platform except where permitted by applicable law.</li>
                  <li>Misuse communication features.</li>
                  <li>Upload illegal, offensive, defamatory, fraudulent or infringing content.</li>
                  <li>Violate the rights of any third party.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 7. Subscription and Licensing */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">7. Subscription and Licensing</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>JiNANAM Campus is licensed to Educational Institutions under a subscription model.</li>
                  <li>Subscription is generally offered on an annual basis unless otherwise agreed in writing.</li>
                  <li>Subscription rights are non-transferable and non-exclusive.</li>
                  <li>Access is limited to the Institution and its authorized users.</li>
                  <li>JiNANAM Technologies retains all ownership rights in the Platform.</li>
                  <li>No ownership rights are transferred to the Institution or any User.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 8. Fees and Payments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">8. Fees and Payments</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Subscription fees are payable only by the Educational Institution.</li>
                  <li>Students, Parents, Teachers, Drivers, Gatekeepers and other end users are not charged by JiNANAM Technologies for using the Platform unless otherwise expressly agreed in writing.</li>
                  <li>Subscription payments may be collected through invoices, bank transfers or other mutually agreed payment methods.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 9. Student Fee Payments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">9. Student Fee Payments</h2>
                <p>Where the Institution enables fee collection through JiNANAM Campus:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Payments are made directly to the Educational Institution.</li>
                  <li>JiNANAM Technologies does not receive, hold, settle or retain student fee payments.</li>
                  <li>JiNANAM Technologies is not a bank, payment gateway, payment aggregator, financial institution or escrow service.</li>
                  <li>The Institution is solely responsible for fee amounts, invoices, concessions, refunds, payment disputes and financial reconciliation.</li>
                  <li>Any dispute relating to student fees must be resolved directly with the respective Educational Institution.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 10. Intellectual Property */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">10. Intellectual Property</h2>
                <p>
                  JiNANAM Campus, including its software, source code, user interface, graphics, designs, trademarks, logos, documentation, databases and related materials, is the exclusive property of JiNANAM Technologies and is protected by applicable intellectual property laws.
                </p>
                <p>Users shall not:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3 text-sm">
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Copy</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Reproduce</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Modify</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Redistribute</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Sell</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">License</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Reverse engineer</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Create derivative works</div>
                </div>
                <p className="text-xs">without prior written permission from JiNANAM Technologies.</p>
              </div>
            </FadeUp>

            {/* 11. Privacy */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">11. Privacy</h2>
                <p>
                  Collection and processing of personal information are governed by our Privacy Policy. By using JiNANAM Campus, Users agree to the collection and processing of information in accordance with the Privacy Policy.
                </p>
              </div>
            </FadeUp>

            {/* 12. Availability of Services */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">12. Availability of Services</h2>
                <p>
                  JiNANAM Technologies aims to provide reliable Services but does not guarantee uninterrupted or error-free operation. The Platform may be temporarily unavailable due to:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Scheduled maintenance</li>
                  <li>Security updates</li>
                  <li>Emergency maintenance</li>
                  <li>Internet disruptions</li>
                  <li>Third-party service interruptions</li>
                  <li>Events beyond our reasonable control</li>
                </ul>
              </div>
            </FadeUp>

            {/* 13. Third-Party Services */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">13. Third-Party Services</h2>
                <p>
                  The Platform may integrate with third-party providers for services such as notifications, cloud infrastructure, analytics, communication or payment facilitation. JiNANAM Technologies is not responsible for products or services provided independently by third parties.
                </p>
              </div>
            </FadeUp>

            {/* 14. Suspension or Termination */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">14. Suspension or Termination</h2>
                <p>JiNANAM Technologies reserves the right to suspend or terminate access where:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>These Terms are violated.</li>
                  <li>Fraudulent or illegal activity is suspected.</li>
                  <li>Platform security is compromised.</li>
                  <li>Subscription obligations are not fulfilled.</li>
                  <li>Required by law or regulatory authority.</li>
                </ul>
                <p>Termination shall not affect rights or obligations that arose prior to termination.</p>
              </div>
            </FadeUp>

            {/* 15. Disclaimer */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">15. Disclaimer</h2>
                <p>
                  JiNANAM Campus is provided on an &quot;as available&quot; and &quot;as is&quot; basis. To the maximum extent permitted by applicable law, JiNANAM Technologies does not warrant that:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>The Platform will operate without interruption.</li>
                  <li>The Platform will be error-free at all times.</li>
                  <li>Every feature will be continuously available.</li>
                  <li>Every issue can be resolved immediately.</li>
                </ul>
                <p className="font-medium text-foreground">
                  Educational Institutions remain responsible for verifying important academic, financial and administrative information.
                </p>
              </div>
            </FadeUp>

            {/* 16. Limitation of Liability */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">16. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, JiNANAM Technologies shall not be liable for:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Institution-entered data.</li>
                  <li>Incorrect information uploaded by Users.</li>
                  <li>Academic decisions made by Institutions.</li>
                  <li>Fee calculations or Institution financial policies.</li>
                  <li>Payment disputes between Users and Institutions.</li>
                  <li>Internet failures.</li>
                  <li>Third-party service interruptions.</li>
                  <li>Unauthorized access caused by credential sharing or Institution negligence.</li>
                  <li>Indirect, incidental, consequential, special or punitive damages.</li>
                </ul>
                <p>Nothing in these Terms excludes liability where such exclusion is prohibited by applicable law.</p>
              </div>
            </FadeUp>

            {/* 17. Indemnity */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">17. Indemnity</h2>
                <p>
                  The Educational Institution and its Users agree to indemnify and hold harmless JiNANAM Technologies, its directors, employees, affiliates and representatives from claims, losses, liabilities, damages, costs and expenses arising out of:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Violation of these Terms;</li>
                  <li>Misuse of the Platform;</li>
                  <li>Infringement of third-party rights;</li>
                  <li>Unlawful activities;</li>
                  <li>Institution-uploaded content or data.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 18. Force Majeure */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">18. Force Majeure</h2>
                <p>
                  JiNANAM Technologies shall not be liable for any delay or failure in performance caused by circumstances beyond its reasonable control, including natural disasters, fire, flood, pandemic, epidemic, war, terrorism, cyberattacks, governmental actions, labour disputes, internet failures, cloud infrastructure failures or power outages.
                </p>
              </div>
            </FadeUp>

            {/* 19. Amendments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">19. Amendments</h2>
                <p>
                  JiNANAM Technologies may revise these Terms from time to time. Updated Terms will be published on the official website and shall become effective from the revised date. Continued use of the Platform constitutes acceptance of the updated Terms.
                </p>
              </div>
            </FadeUp>

            {/* 20. Governing Law & 21. Jurisdiction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">20. Governing Law & 21. Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or relating to these Terms or the use of JiNANAM Campus shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.
                </p>
              </div>
            </FadeUp>

            {/* 22. Contact Information */}
            <FadeUp>
              <div className="space-y-4 bg-gray-50/80 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">22. Contact Information</h2>
                <p>For any questions regarding these Terms & Conditions, please contact:</p>
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