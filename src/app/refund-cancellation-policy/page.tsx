"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function RefundPolicyPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-20 pb-10 lg:pt-28 lg:pb-14 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Refund & Cancellation Policy
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
                  This Refund & Cancellation Policy (&quot;Policy&quot;) governs subscription fees, cancellations and refund requests relating to JiNANAM Campus (&quot;Platform&quot;), owned and operated by JiNANAM Technologies / Vihaar Tech.
                </p>
                <p className="font-medium text-foreground">
                  By subscribing to or using JiNANAM Campus, the Educational Institution acknowledges that it has read, understood and agreed to this Policy. This Policy should be read together with our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </FadeUp>

            {/* 2. Business Model */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">2. Business Model</h2>
                <p>
                  JiNANAM Campus is a Business-to-Business (B2B) Software-as-a-Service (SaaS) platform licensed exclusively to Educational Institutions, including:
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
                    <li>Other Educational Organizations</li>
                  </ul>
                </div>
                <p>
                  The subscription agreement is entered into only between JiNANAM Technologies and the respective Educational Institution. Students, Parents, Teachers, Drivers, Gatekeepers, Staff Members and other end users are not customers of JiNANAM Technologies for subscription purposes.
                </p>
              </div>
            </FadeUp>

            {/* 3. Subscription Model */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">3. Subscription Model</h2>
                <p>
                  JiNANAM Campus is generally offered on an Annual Subscription basis unless otherwise agreed in writing. The subscription grants the Educational Institution a limited, non-exclusive and non-transferable license to use the Platform during the active subscription period.
                </p>
              </div>
            </FadeUp>

            {/* 4. Subscription Payments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">4. Subscription Payments</h2>
                <p>
                  Subscription payments are made directly by the Educational Institution to JiNANAM Technologies through mutually agreed offline payment methods, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3 text-sm">
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Bank Transfer</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">NEFT / RTGS / IMPS</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Cheque</div>
                  <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/10 text-center font-medium">Demand Draft</div>
                </div>
                <p className="text-sm">
                  JiNANAM Campus does not currently offer subscription purchases through Mobile Applications, Google Play Billing, Apple In-App Purchase, Online Payment Gateways, or direct Credit/Debit Card checkouts.
                </p>
              </div>
            </FadeUp>

            {/* 5. No Refund Policy */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">5. No Refund Policy</h2>
                <p className="font-semibold text-foreground">
                  All subscription payments made to JiNANAM Technologies are final and non-refundable.
                </p>
                <p>
                  Once a subscription has been purchased, renewed, activated or provisioned for an Educational Institution, no refund, whether full or partial, shall be provided under any circumstances, including:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-sm">
                  <li>Change of mind or business decisions</li>
                  <li>Change in management or institutional restructuring</li>
                  <li>Non-usage, partial usage, or low usage of the Platform</li>
                  <li>Staff changes or administrative adjustments</li>
                  <li>Closure of departments or student strength reduction</li>
                  <li>Technical preferences or migration to another software</li>
                  <li>Failure to fully utilize the subscription period or early termination</li>
                </ul>
                <p className="text-xs pt-2">
                  The Educational Institution is encouraged to evaluate the Platform, request demonstrations and clarify all functional requirements before purchasing a subscription.
                </p>
              </div>
            </FadeUp>

            {/* 6. Cancellation Policy */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">6. Cancellation Policy</h2>
                <p>
                  An Educational Institution may choose not to renew its subscription upon expiry of the current subscription term. However:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Cancellation of an active subscription shall not entitle the Institution to any refund.</li>
                  <li>Subscription charges already paid shall remain non-refundable.</li>
                  <li>Access to the Platform may continue until the end of the paid subscription period unless otherwise agreed.</li>
                  <li>JiNANAM Technologies reserves the right to suspend or terminate access in accordance with the Terms & Conditions.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 7. Student Fee Payments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">7. Student Fee Payments</h2>
                <p>
                  JiNANAM Campus may facilitate fee payments by Students or Parents where enabled by the Educational Institution. For clarity:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>JiNANAM Technologies does not collect or retain student fee payments.</li>
                  <li>Student fee payments are made directly to the Educational Institution (JiNANAM is not the merchant of record).</li>
                  <li>JiNANAM Technologies is not a payment gateway, payment aggregator, bank, financial institution or escrow service.</li>
                  <li>Any request concerning fee refunds, excess payments, duplicate payments, concessions, waivers, or fee adjustments must be addressed directly to the respective Educational Institution.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 8. Failed or Pending Transactions & 9. Duplicate Payments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">8. Failed Transactions & 9. Duplicate Payments</h2>
                <p>
                  Where a payment transaction initiated by a Student or Parent remains pending, fails, or is declined due to banking, UPI, or network issues, the matter is governed by the policies of the respective bank or payment provider. JiNANAM Technologies shall not be liable for third-party payment infrastructure failures.
                </p>
                <p>
                  If a duplicate payment is made towards institution fees, it must be reported directly to the Educational Institution. Any refund or adjustment shall be solely at the discretion of the Educational Institution.
                </p>
              </div>
            </FadeUp>

            {/* 10. Taxes & 11. Exceptional Circumstances */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">10. Taxes & 11. Exceptional Circumstances</h2>
                <p>
                  Applicable taxes, duties, levies or statutory charges shall be payable in accordance with applicable laws and the agreed commercial arrangement.
                </p>
                <p>
                  JiNANAM Technologies may, at its sole and absolute discretion, consider exceptional commercial arrangements where required by law or where a written agreement specifically provides otherwise. Such decisions do not create any future obligations.
                </p>
              </div>
            </FadeUp>

            {/* 12. Modification, 13. Governing Law & 14. Jurisdiction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">12. Modifications, Governing Law & Jurisdiction</h2>
                <p>
                  We reserve the right to modify this Policy at any time by publishing the revised version on our website. This Policy shall be governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.
                </p>
              </div>
            </FadeUp>

            {/* 15. Contact Us */}
            <FadeUp>
              <div className="space-y-4 p-8 bg-gray-50/80 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">15. Contact Us</h2>
                <p>For any questions relating to this Refund & Cancellation Policy, please contact:</p>
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