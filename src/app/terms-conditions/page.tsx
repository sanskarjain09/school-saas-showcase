
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function TermsConditionsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-32 pb-10 lg:pt-40 lg:pb-14 border-b border-border bg-surface">
        <Container>
          <FadeUp delay={0.02}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-section font-bold tracking-tight text-foreground leading-[1.1]">
                Terms & Conditions
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
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of JiNANAM Campus (&quot;Platform&quot;, &quot;Application&quot;, &quot;Services&quot;), owned and operated by JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).</p>
                <p className="mb-4">By accessing, registering for, or using JiNANAM Campus, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must discontinue use of the Platform immediately.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">2. About JiNANAM Campus</h2>
                <p className="mb-4">JiNANAM Campus is a cloud-based Education Management System designed for educational institutions, including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Schools</li>
                  <li>Preschools</li>
                  <li>Colleges</li>
                  <li>Universities</li>
                  <li>Coaching Classes</li>
                  <li>Educational Trusts</li>
                  <li>Academies</li>
                  <li>Training Institutes</li>
                  <li>Other educational organizations</li>
                </ul>
                <p className="mb-4">The Platform enables institutions to manage academic, administrative, communication, transport, attendance, examinations, fee management, reports and other institution-related operations.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">3. Eligibility</h2>
                <p className="mb-4">You may use JiNANAM Campus only if:</p>
                <p className="mb-4">You are authorized by an Educational Institution using the Platform; or</p>
                <p className="mb-4">You are an authorized representative of JiNANAM Technologies.</p>
                <p className="mb-4">If you are using the Platform on behalf of an Educational Institution, you represent that you have the authority to bind that Institution to these Terms.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">4. Accounts</h2>
                <p className="mb-4">Users are responsible for:</p>
                <p className="mb-4">Providing accurate information where required.</p>
                <p className="mb-4">Maintaining the confidentiality of login credentials.</p>
                <p className="mb-4">Keeping account information updated.</p>
                <p className="mb-4">Restricting unauthorized access to their account.</p>
                <p className="mb-4">Immediately notifying the Institution or JiNANAM Technologies of any suspected unauthorized use.</p>
                <p className="mb-4">Users are responsible for activities performed through their accounts unless unauthorized access has been promptly reported.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">5. Institution Responsibilities</h2>
                <p className="mb-4">Each Educational Institution agrees to:</p>
                <p className="mb-4">Maintain accurate information uploaded to the Platform.</p>
                <p className="mb-4">Obtain all necessary permissions and consents before uploading personal information.</p>
                <p className="mb-4">Manage user roles and permissions responsibly.</p>
                <p className="mb-4">Maintain confidentiality of administrator credentials.</p>
                <p className="mb-4">Comply with all applicable laws and regulations.</p>
                <p className="mb-4">Ensure that only authorized users access the Platform.</p>
                <p className="mb-4">Use the Platform only for lawful educational purposes.</p>
                <p className="mb-4">The Institution remains solely responsible for all data uploaded or managed through its account.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">6. User Responsibilities</h2>
                <p className="mb-4">Users agree that they shall not:</p>
                <p className="mb-4">Use the Platform for any unlawful purpose.</p>
                <p className="mb-4">Share login credentials with unauthorized persons.</p>
                <p className="mb-4">Attempt unauthorized access to any account or system.</p>
                <p className="mb-4">Interfere with Platform security or functionality.</p>
                <p className="mb-4">Upload malicious software or harmful code.</p>
                <p className="mb-4">Copy, reverse engineer, modify or attempt to derive the source code of the Platform except where permitted by applicable law.</p>
                <p className="mb-4">Misuse communication features.</p>
                <p className="mb-4">Upload illegal, offensive, defamatory, fraudulent or infringing content.</p>
                <p className="mb-4">Violate the rights of any third party.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">7. Subscription and Licensing</h2>
                <p className="mb-4">JiNANAM Campus is licensed to Educational Institutions under a subscription model.</p>
                <p className="mb-4">Subscription is generally offered on an annual basis unless otherwise agreed in writing.</p>
                <p className="mb-4">Subscription rights are non-transferable and non-exclusive.</p>
                <p className="mb-4">Access is limited to the Institution and its authorized users.</p>
                <p className="mb-4">JiNANAM Technologies retains all ownership rights in the Platform.</p>
                <p className="mb-4">No ownership rights are transferred to the Institution or any User.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">8. Fees and Payments</h2>
                <p className="mb-4">Subscription fees are payable only by the Educational Institution.</p>
                <p className="mb-4">Students, Parents, Teachers, Drivers, Gatekeepers and other end users are not charged by JiNANAM Technologies for using the Platform unless otherwise expressly agreed in writing.</p>
                <p className="mb-4">Subscription payments may be collected through invoices, bank transfers or other mutually agreed payment methods.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">9. Student Fee Payments</h2>
                <p className="mb-4">Where the Institution enables fee collection through JiNANAM Campus:</p>
                <p className="mb-4">Payments are made directly to the Educational Institution.</p>
                <p className="mb-4">JiNANAM Technologies does not receive, hold, settle or retain student fee payments.</p>
                <p className="mb-4">JiNANAM Technologies is not a bank, payment gateway, payment aggregator, financial institution or escrow service.</p>
                <p className="mb-4">The Institution is solely responsible for fee amounts, invoices, concessions, refunds, payment disputes and financial reconciliation.</p>
                <p className="mb-4">Any dispute relating to student fees must be resolved directly with the respective Educational Institution.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">10. Intellectual Property</h2>
                <p className="mb-4">JiNANAM Campus, including its software, source code, user interface, graphics, designs, trademarks, logos, documentation, databases and related materials, is the exclusive property of JiNANAM Technologies and is protected by applicable intellectual property laws.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Users shall not:</li>
                  <li>Copy</li>
                  <li>Reproduce</li>
                  <li>Modify</li>
                  <li>Redistribute</li>
                  <li>Sell</li>
                  <li>License</li>
                  <li>Reverse engineer</li>
                  <li>Create derivative works</li>
                </ul>
                <p className="mb-4">without prior written permission from JiNANAM Technologies.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">11. Privacy</h2>
                <p className="mb-4">Collection and processing of personal information are governed by our Privacy Policy.</p>
                <p className="mb-4">By using JiNANAM Campus, Users agree to the collection and processing of information in accordance with the Privacy Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">12. Availability of Services</h2>
                <p className="mb-4">JiNANAM Technologies aims to provide reliable Services but does not guarantee uninterrupted or error-free operation.</p>
                <p className="mb-4">The Platform may be temporarily unavailable due to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Scheduled maintenance</li>
                  <li>Security updates</li>
                  <li>Emergency maintenance</li>
                  <li>Internet disruptions</li>
                  <li>Third-party service interruptions</li>
                  <li>Events beyond our reasonable control</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">13. Third-Party Services</h2>
                <p className="mb-4">The Platform may integrate with third-party providers for services such as notifications, cloud infrastructure, analytics, communication or payment facilitation.</p>
                <p className="mb-4">JiNANAM Technologies is not responsible for products or services provided independently by third parties.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">14. Suspension or Termination</h2>
                <p className="mb-4">JiNANAM Technologies reserves the right to suspend or terminate access where:</p>
                <p className="mb-4">These Terms are violated.</p>
                <p className="mb-4">Fraudulent or illegal activity is suspected.</p>
                <p className="mb-4">Platform security is compromised.</p>
                <p className="mb-4">Subscription obligations are not fulfilled.</p>
                <p className="mb-4">Required by law or regulatory authority.</p>
                <p className="mb-4">Termination shall not affect rights or obligations that arose prior to termination.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">15. Disclaimer</h2>
                <p className="mb-4">JiNANAM Campus is provided on an &quot;as available&quot; and &quot;as is&quot; basis.</p>
                <p className="mb-4">To the maximum extent permitted by applicable law, JiNANAM Technologies does not warrant that:</p>
                <p className="mb-4">The Platform will operate without interruption.</p>
                <p className="mb-4">The Platform will be error-free at all times.</p>
                <p className="mb-4">Every feature will be continuously available.</p>
                <p className="mb-4">Every issue can be resolved immediately.</p>
                <p className="mb-4">Educational Institutions remain responsible for verifying important academic, financial and administrative information.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">16. Limitation of Liability</h2>
                <p className="mb-4">To the maximum extent permitted by law, JiNANAM Technologies shall not be liable for:</p>
                <p className="mb-4">Institution-entered data.</p>
                <p className="mb-4">Incorrect information uploaded by Users.</p>
                <p className="mb-4">Academic decisions made by Institutions.</p>
                <p className="mb-4">Fee calculations or Institution financial policies.</p>
                <p className="mb-4">Payment disputes between Users and Institutions.</p>
                <p className="mb-4">Internet failures.</p>
                <p className="mb-4">Third-party service interruptions.</p>
                <p className="mb-4">Unauthorized access caused by credential sharing or Institution negligence.</p>
                <p className="mb-4">Indirect, incidental, consequential, special or punitive damages.</p>
                <p className="mb-4">Nothing in these Terms excludes liability where such exclusion is prohibited by applicable law.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">17. Indemnity</h2>
                <p className="mb-4">The Educational Institution and its Users agree to indemnify and hold harmless JiNANAM Technologies, its directors, employees, affiliates and representatives from claims, losses, liabilities, damages, costs and expenses arising out of:</p>
                <p className="mb-4">Violation of these Terms;</p>
                <p className="mb-4">Misuse of the Platform;</p>
                <p className="mb-4">Infringement of third-party rights;</p>
                <p className="mb-4">Unlawful activities;</p>
                <p className="mb-4">Institution-uploaded content or data.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">18. Force Majeure</h2>
                <p className="mb-4">JiNANAM Technologies shall not be liable for any delay or failure in performance caused by circumstances beyond its reasonable control, including natural disasters, fire, flood, pandemic, epidemic, war, terrorism, cyberattacks, governmental actions, labour disputes, internet failures, cloud infrastructure failures or power outages.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">19. Amendments</h2>
                <p className="mb-4">JiNANAM Technologies may revise these Terms from time to time.</p>
                <p className="mb-4">Updated Terms will be published on the official website and shall become effective from the revised date.</p>
                <p className="mb-4">Continued use of the Platform constitutes acceptance of the updated Terms.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">20. Governing Law</h2>
                <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the Republic of India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">21. Jurisdiction</h2>
                <p className="mb-4">Any dispute arising out of or relating to these Terms or the use of JiNANAM Campus shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">22. Contact Information</h2>
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
                <p className="mb-4">By accessing or using JiNANAM Campus, you acknowledge that you have read, understood and agreed to these Terms & Conditions.</p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>
    </main>
  );
}
