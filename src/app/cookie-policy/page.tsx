"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function CookiePolicyPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-20 pb-10 lg:pt-28 lg:pb-14 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Cookie Policy
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
                  This Cookie Policy explains how JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar technologies on the JiNANAM Campus website and related web-based services.
                </p>
                <p>
                  This Policy should be read together with our Privacy Policy and Terms & Conditions.
                </p>
                <p className="font-medium text-foreground">
                  By accessing or using our website, you acknowledge that you have read and understood this Cookie Policy.
                </p>
              </div>
            </FadeUp>

            {/* 2. What Are Cookies? */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">2. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your computer, mobile device or web browser when you visit a website.
                </p>
                <p>
                  Cookies help websites function properly, improve user experience, remember user preferences, enhance security and provide website performance information.
                </p>
                <p className="text-sm">
                  Cookies do not generally provide us with direct access to your personal files or data stored on your device.
                </p>
              </div>
            </FadeUp>

            {/* 3. Scope */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">3. Scope</h2>
                <p>This Cookie Policy applies to:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Official JiNANAM Campus Website</li>
                  <li>Web Portals</li>
                  <li>Administrator Web Panel</li>
                  <li>Browser-based Services</li>
                  <li>Any future official JiNANAM Campus websites operated by JiNANAM Technologies</li>
                </ul>
                <p className="text-sm pt-2">
                  This Policy does not apply to third-party websites that may be linked from our website.
                </p>
              </div>
            </FadeUp>

            {/* 4. Types of Cookies We May Use */}
            <FadeUp>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">4. Types of Cookies We May Use</h2>
                <p>Depending on the services provided, our website may use one or more of the following categories of cookies:</p>
                
                <div className="space-y-6 pl-4 md:pl-6 border-l-2 border-[#1A73E8]">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Essential Cookies</h3>
                    <p>These cookies are necessary for the proper functioning of the website. They may be used to maintain user sessions, authenticate users, protect secure areas, enable login functionality, maintain security features, and prevent unauthorized access. Without these cookies, certain website functions may not operate correctly.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Functional Cookies</h3>
                    <p>These cookies help improve your browsing experience by remembering preferences such as language selection, login preferences, user interface settings, display preferences, and accessibility settings.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Performance Cookies</h3>
                    <p>Performance cookies help us understand how visitors interact with our website by collecting anonymous usage information such as pages visited, time spent on pages, browser information, device type, general website usage patterns, and error reporting. This helps improve website performance and user experience.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Analytics Cookies</h3>
                    <p>Analytics technologies may be used to better understand website usage and improve our services, including website traffic, visitor behaviour, device categories, geographic region (general location only), browser usage, and navigation patterns. Analytics data is generally aggregated and used for service improvement purposes.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Security Cookies</h3>
                    <p>Security-related cookies may be used to detect suspicious activity, prevent fraudulent use, protect authenticated sessions, and support website security mechanisms.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* 5. Mobile Applications */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">5. Mobile Applications</h2>
                <p>
                  JiNANAM Campus mobile applications generally do not use browser cookies in the same manner as websites. However, mobile applications may use similar technologies required for user authentication, session management, application functionality, security, performance monitoring, crash diagnostics, and push notification services. These technologies are governed by our Privacy Policy.
                </p>
              </div>
            </FadeUp>

            {/* 6. Third-Party Services */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">6. Third-Party Services</h2>
                <p>
                  Our website may use trusted third-party services that may place or access cookies in accordance with their own privacy policies. Such services may include providers supporting cloud infrastructure, website analytics, performance monitoring, security services, embedded content, and communication services.
                </p>
                <p className="text-sm">
                  JiNANAM Technologies does not control the cookie practices of independent third-party websites or services. Users are encouraged to review the privacy and cookie policies of such third parties where applicable.
                </p>
              </div>
            </FadeUp>

            {/* 7. Managing Cookies & 8. Do Not Track */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">7. Managing Cookies & 8. Do Not Track</h2>
                <p>
                  Most web browsers allow users to view stored cookies, delete cookies, block cookies, restrict certain categories of cookies, and configure browser cookie preferences. Please note that disabling certain cookies may affect the availability or functionality of portions of our website. Instructions are available within your web browser&apos;s settings or help documentation.
                </p>
                <p>
                  Some web browsers offer a &quot;Do Not Track&quot; (DNT) setting. As there is currently no universally accepted standard for responding to DNT signals, our website may not respond differently when such signals are received.
                </p>
              </div>
            </FadeUp>

            {/* 9. Children's Privacy, 10. Data Security & 11. Policy Updates */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">9. Children&apos;s Privacy, Security & Updates</h2>
                <p>
                  Our website is intended primarily for Educational Institutions and authorized users. We do not knowingly use cookies to intentionally collect personal information directly from children. Student-related information is processed through the Platform under the control of the respective Educational Institution in accordance with our Privacy Policy.
                </p>
                <p>
                  Information collected through cookies is protected using reasonable administrative, technical, and organizational safeguards. JiNANAM Technologies may revise this Cookie Policy from time to time to reflect technological or legal changes, and continued use of our website constitutes acceptance of the revised policy.
                </p>
              </div>
            </FadeUp>

            {/* 12. Governing Law & 13. Jurisdiction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">12. Governing Law & 13. Jurisdiction</h2>
                <p>
                  This Cookie Policy shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or relating to this Cookie Policy shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.
                </p>
              </div>
            </FadeUp>

            {/* 14. Contact Us */}
            <FadeUp>
              <div className="space-y-4 p-8 bg-gray-50/80 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">14. Contact Us</h2>
                <p>If you have any questions regarding this Cookie Policy, please contact:</p>
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