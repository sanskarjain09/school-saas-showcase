
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function RefundCancellationPolicyPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-32 pb-10 lg:pt-40 lg:pb-14 border-b border-border bg-surface">
        <Container>
          <FadeUp delay={0.02}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-section font-bold tracking-tight text-foreground leading-[1.1]">
                Refund & Cancellation Policy
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
                <p className="mb-4">This Refund & Cancellation Policy (&quot;Policy&quot;) governs subscription fees, cancellations and refund requests relating to JiNANAM Campus (&quot;Platform&quot;), owned and operated by JiNANAM Technologies / Vihaar Tech.</p>
                <p className="mb-4">By subscribing to or using JiNANAM Campus, the Educational Institution acknowledges that it has read, understood and agreed to this Policy.</p>
                <p className="mb-4">This Policy should be read together with our Terms & Conditions and Privacy Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">2. Business Model</h2>
                <p className="mb-4">JiNANAM Campus is a Business-to-Business (B2B) Software-as-a-Service (SaaS) platform.</p>
                <p className="mb-4">The Platform is licensed exclusively to Educational Institutions, including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Schools</li>
                  <li>Preschools</li>
                  <li>Colleges</li>
                  <li>Universities</li>
                  <li>Coaching Classes</li>
                  <li>Educational Trusts</li>
                  <li>Academies</li>
                  <li>Training Institutes</li>
                  <li>Other Educational Organizations</li>
                </ul>
                <p className="mb-4">The subscription agreement is entered into only between JiNANAM Technologies and the respective Educational Institution.</p>
                <p className="mb-4">Students, Parents, Teachers, Drivers, Gatekeepers, Staff Members and other end users are not customers of JiNANAM Technologies for subscription purposes.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">3. Subscription Model</h2>
                <p className="mb-4">JiNANAM Campus is generally offered on an Annual Subscription basis unless otherwise agreed in writing.</p>
                <p className="mb-4">The subscription grants the Educational Institution a limited, non-exclusive and non-transferable license to use the Platform during the active subscription period.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">4. Subscription Payments</h2>
                <p className="mb-4">Subscription payments are made directly by the Educational Institution to JiNANAM Technologies through mutually agreed offline payment methods, including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Bank Transfer</li>
                  <li>NEFT / RTGS / IMPS</li>
                  <li>Cheque</li>
                  <li>Demand Draft</li>
                  <li>Account Transfer</li>
                  <li>Other approved offline payment methods</li>
                </ul>
                <p className="mb-4">JiNANAM Campus does not currently offer subscription purchases through:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Mobile Applications</li>
                  <li>Google Play Billing</li>
                  <li>Apple In-App Purchase</li>
                  <li>Online Payment Gateway</li>
                  <li>Credit Card Checkout</li>
                  <li>Debit Card Checkout</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">5. No Refund Policy</h2>
                <p className="mb-4">All subscription payments made to JiNANAM Technologies are final and non-refundable.</p>
                <p className="mb-4">Once a subscription has been purchased, renewed, activated or provisioned for an Educational Institution, no refund, whether full or partial, shall be provided under any circumstances, including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Change of mind</li>
                  <li>Change in management</li>
                  <li>Non-usage of the Platform</li>
                  <li>Partial usage</li>
                  <li>Low usage</li>
                  <li>Staff changes</li>
                  <li>Administrative changes</li>
                  <li>Institutional restructuring</li>
                  <li>Closure of departments</li>
                  <li>Student strength reduction</li>
                  <li>Technical preferences</li>
                  <li>Business decisions</li>
                  <li>Migration to another software</li>
                  <li>Failure to fully utilize the subscription period</li>
                  <li>Early termination by the Institution</li>
                </ul>
                <p className="mb-4">The Educational Institution is encouraged to evaluate the Platform, request demonstrations and clarify all functional requirements before purchasing a subscription.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">6. Cancellation Policy</h2>
                <p className="mb-4">An Educational Institution may choose not to renew its subscription upon expiry of the current subscription term.</p>
                <p className="mb-4">However:</p>
                <p className="mb-4">Cancellation of an active subscription shall not entitle the Institution to any refund.</p>
                <p className="mb-4">Subscription charges already paid shall remain non-refundable.</p>
                <p className="mb-4">Access to the Platform may continue until the end of the paid subscription period unless otherwise agreed.</p>
                <p className="mb-4">JiNANAM Technologies reserves the right to suspend or terminate access in accordance with the Terms & Conditions.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">7. Student Fee Payments</h2>
                <p className="mb-4">JiNANAM Campus may facilitate fee payments by Students or Parents where such functionality has been enabled by the respective Educational Institution.</p>
                <p className="mb-4">For clarity:</p>
                <p className="mb-4">JiNANAM Technologies does not collect or retain student fee payments.</p>
                <p className="mb-4">Student fee payments are made directly to the Educational Institution.</p>
                <p className="mb-4">JiNANAM Technologies is not the merchant of record for student fee payments.</p>
                <p className="mb-4">JiNANAM Technologies is not a payment gateway, payment aggregator, bank, financial institution or escrow service.</p>
                <p className="mb-4">Accordingly, JiNANAM Technologies cannot process or approve refunds relating to student fee payments.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Any request concerning:</li>
                  <li>Fee refunds</li>
                  <li>Excess payments</li>
                  <li>Duplicate payments</li>
                  <li>Concessions</li>
                  <li>Waivers</li>
                  <li>Fee adjustments</li>
                  <li>Payment disputes</li>
                </ul>
                <p className="mb-4">must be addressed directly to the respective Educational Institution in accordance with its own policies.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">8. Failed or Pending Transactions</h2>
                <p className="mb-4">Where a payment transaction initiated by a Student or Parent remains pending, fails or is declined due to banking, UPI, network or third-party payment infrastructure issues, the matter shall be governed by the applicable policies of the respective bank, UPI service provider or payment service involved.</p>
                <p className="mb-4">JiNANAM Technologies shall not be liable for delays, failures or reversals arising from third-party payment infrastructure.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">9. Duplicate Payments</h2>
                <p className="mb-4">If a Student or Parent believes that a duplicate payment has been made towards Institution fees, the matter must be reported directly to the respective Educational Institution.</p>
                <p className="mb-4">Any refund or adjustment shall be solely at the discretion of the Educational Institution in accordance with its financial policies.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">10. Taxes</h2>
                <p className="mb-4">Applicable taxes, duties, levies or statutory charges, if any, shall be payable in accordance with applicable laws and the agreed commercial arrangement with the Educational Institution.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">11. Exceptional Circumstances</h2>
                <p className="mb-4">JiNANAM Technologies may, at its sole and absolute discretion, consider exceptional commercial arrangements where required by law or where a written agreement specifically provides otherwise.</p>
                <p className="mb-4">Any such decision shall not constitute a precedent and shall not create any obligation to provide refunds in future cases.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">12. Modification of this Policy</h2>
                <p className="mb-4">JiNANAM Technologies reserves the right to modify or update this Refund & Cancellation Policy at any time.</p>
                <p className="mb-4">The revised version shall become effective from the date published on the official website.</p>
                <p className="mb-4">Continued use of JiNANAM Campus after such revision shall constitute acceptance of the updated Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">13. Governing Law</h2>
                <p className="mb-4">This Refund & Cancellation Policy shall be governed by and interpreted in accordance with the laws of the Republic of India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">14. Jurisdiction</h2>
                <p className="mb-4">Any dispute arising from or relating to this Policy shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">15. Contact Us</h2>
                <p className="mb-4">For any questions relating to this Refund & Cancellation Policy, please contact:</p>
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
                <p className="mb-4">By purchasing or using JiNANAM Campus, the Educational Institution acknowledges that it has read, understood and agreed to this Refund & Cancellation Policy.</p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>
    </main>
  );
}
