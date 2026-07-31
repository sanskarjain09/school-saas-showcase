"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-white dark:bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-20 pb-10 lg:pt-28 lg:pb-14 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1A73E8] uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Privacy Policy
              </h1>
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                Last Revised: 30 July 2026
              </p>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* Content Section with reduced top padding to fix the large gap */}
      <Section className="pt-12 pb-20 lg:pt-16 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16 text-muted-foreground leading-relaxed text-base">
            
            {/* 1. Introduction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">1. Introduction</h2>
                <p>
                  JiNANAM Campus (&quot;Platform&quot;, &quot;Application&quot;, &quot;App&quot;, &quot;Services&quot;) is a cloud-based Education Management System owned and operated by JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). The Platform is designed to assist educational institutions in managing their academic, administrative, operational and communication activities through secure digital solutions.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, process, store, disclose, safeguard and otherwise handle information obtained through JiNANAM Campus, including our mobile applications, web applications, administrative portals, websites and related services.
                </p>
                <p>
                  Your privacy is important to us. We are committed to protecting your personal information and processing it responsibly, transparently and in accordance with applicable laws.
                </p>
                <p className="font-medium text-foreground">
                  By accessing or using JiNANAM Campus, you acknowledge that you have read, understood and agreed to this Privacy Policy.
                </p>
              </div>
            </FadeUp>

            {/* 2. Scope */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">2. Scope</h2>
                <p>This Privacy Policy applies to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 bg-gray-50/80 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-sm">
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Educational Institutions</li>
                    <li>Schools & Preschools</li>
                    <li>Colleges & Universities</li>
                    <li>Coaching Classes</li>
                    <li>Educational Trusts</li>
                    <li>Training Institutes</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Institution Owners</li>
                    <li>Trustees & Directors</li>
                    <li>Principals & Admins</li>
                    <li>Teachers & Faculty</li>
                    <li>Students</li>
                    <li>Parents or Guardians</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Drivers & Security Staff</li>
                    <li>Office & Library Staff</li>
                    <li>Hostel & Account Staff</li>
                    <li>Employees & Contractors</li>
                    <li>Authorized Reps</li>
                    <li>Website Visitors</li>
                  </ul>
                </div>
                <p>
                  This Privacy Policy applies regardless of whether our Services are accessed through Android devices, iOS devices, tablets, desktops, laptops or supported web browsers.
                </p>
              </div>
            </FadeUp>

            {/* 3. Definitions */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">3. Definitions</h2>
                <ul className="space-y-3 list-disc pl-5">
                  <li><strong className="text-foreground">Company</strong> means JiNANAM Technologies / Vihaar Tech.</li>
                  <li><strong className="text-foreground">Platform</strong> means JiNANAM Campus including all mobile applications, websites, administrative portals and related services.</li>
                  <li><strong className="text-foreground">Institution</strong> means any School, Preschool, College, University, Coaching Class, Educational Trust, Academy, Training Institute or other educational organization using JiNANAM Campus.</li>
                  <li><strong className="text-foreground">User</strong> means any individual authorized to access or use the Platform including Administrators, Teachers, Students, Parents, Drivers, Gatekeepers, Employees and other authorized personnel.</li>
                  <li><strong className="text-foreground">Personal Information</strong> means any information capable of identifying an individual directly or indirectly.</li>
                  <li><strong className="text-foreground">Services</strong> means all software, applications, websites and services offered under JiNANAM Campus.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 4. Information We Collect */}
            <FadeUp>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">4. Information We Collect</h2>
                <p>Depending upon your role and usage of the Platform, we may collect the following categories of information:</p>
                
                <div className="space-y-6 pl-4 md:pl-6 border-l-2 border-[#1A73E8]">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.1 Institution Information</h3>
                    <p>Institution Name, Type, Registration Details, Trust/Society Details, GST Information, Logo, Official Email, Contact Numbers, Address, Academic Configuration, Departments, Classes, Subjects, Timetable, Transport Configuration, Fee Structure, Academic Sessions, Employee/Student/Parent Records, and Settings.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.2 Administrator Information</h3>
                    <p>Name, Profile Photograph, Mobile Number, Email, Employee ID, Username, Encrypted Password, Designation, Department, Role & Permissions, Login Activity, and Security Preferences.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.3 Teacher Information</h3>
                    <p>Name, Photograph, Employee ID, Mobile, Email, Qualification, Department, Subject Allocation, Attendance, Timetable, Homework, Examination Info, Leave Records, and Uploaded Documents.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.4 Student Information</h3>
                    <p>Name, Admission Number, Student ID, Roll Number, Class, Section, DOB, Gender, Photograph, Parent Info, Address, Attendance, Homework, Assignments, Exam Results, Academic Records, Transport Details, Library Records, Hostel Details, Health Info, Emergency Contacts, and Uploaded Documents.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.5 Parent or Guardian Information</h3>
                    <p>Name, Mobile Number, Email, Residential Address, Relationship with Student, Emergency Contact Information, and Communication Preferences.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.6 Driver Information</h3>
                    <p>Driver Name, Photograph, Mobile Number, Employee ID, Vehicle Assignment, Route Assignment, Attendance, and Login Activity.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.7 Gatekeeper & Security Staff Information</h3>
                    <p>Name, Employee ID, Mobile Number, Attendance, Login Records, and Visitor Management Records.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">4.8 Technical Information</h3>
                    <p>Device Type, Model, OS, Browser Info, App Version, Device Identifiers, IP Address, Language Settings, Network Info, Login History, Session Info, Diagnostic Info, Crash Reports, Performance Metrics, Error Logs, Security Logs, and Access Timestamps.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* 5. How We Use Information */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">5. How We Use Information</h2>
                <p>Information collected through JiNANAM Campus may be used to create accounts, provide functionality, authenticate users, maintain academic records, manage attendance, conduct exams, publish homework, manage communications, send push notifications, manage transport, generate reports, improve performance, resolve technical issues, protect against unauthorized access, detect fraud, maintain audit trails, comply with legal obligations, and ensure security.</p>
                <p className="font-medium text-foreground">We process only such information as is reasonably necessary for providing our Services.</p>
              </div>
            </FadeUp>

            {/* 6. Mobile Application Permissions */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">6. Mobile Application Permissions</h2>
                <p>Depending upon features enabled by an Institution and your device settings, JiNANAM Campus may request access to:</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li><strong className="text-foreground">Camera:</strong> Used for profile photos, assignment uploads, visitor verification, and QR Code scanning.</li>
                  <li><strong className="text-foreground">Photos & Media:</strong> Used for uploading documents, sharing educational materials, and profile pictures.</li>
                  <li><strong className="text-foreground">Notifications:</strong> Used for attendance alerts, homework updates, exam notices, circulars, transport tracking, fee reminders, and security warnings.</li>
                  <li><strong className="text-foreground">Location:</strong> Requested only for transport tracking, bus routes, or attendance where explicitly enabled by the Institution.</li>
                  <li><strong className="text-foreground">Storage & Internet:</strong> Used for saving/uploading files and communicating securely with servers.</li>
                </ul>
              </div>
            </FadeUp>

            {/* 7. Fee Payments */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">7. Fee Payments</h2>
                <p>
                  JiNANAM Campus facilitates fee collections through supported payment methods (like UPI) configured by respective Institutions.
                </p>
                <p className="font-medium text-foreground">
                  JiNANAM Technologies does not collect, receive, hold, process, settle or retain student fee payments on its own behalf. JiNANAM Technologies acts solely as a technology service provider and is not a bank, payment gateway, financial institution, or escrow service.
                </p>
                <p>
                  We do not store sensitive banking credentials such as UPI PINs, Debit/Credit Card PINs, CVV numbers, OTPs, or Net Banking passwords. All financial disputes must be resolved directly with the respective Educational Institution.
                </p>
              </div>
            </FadeUp>

            {/* 8. Communications */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">8. Communications</h2>
                <p>
                  We communicate via In-App notifications, Push notifications, SMS, Email, WhatsApp, and Web Portal notices for academic updates, attendance, homework, circulars, security alerts, and fee reminders. Certain service-related alerts are essential and cannot be opted out of while an account is active.
                </p>
              </div>
            </FadeUp>

            {/* 9. Children's Privacy */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">9. Children&apos;s Privacy</h2>
                <p>
                  JiNANAM Campus is intended exclusively for use by Educational Institutions. Student accounts are managed and controlled by the respective Institution. Educational Institutions are solely responsible for obtaining parental consents required under applicable laws. JiNANAM Technologies does not knowingly collect personal info directly from children independent of the Institution.
                </p>
              </div>
            </FadeUp>

            {/* 10. Data Sharing and Disclosure */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">10. Data Sharing and Disclosure</h2>
                <p className="font-medium text-foreground">JiNANAM Technologies does not sell, rent, trade or commercially exploit Personal Information.</p>
                <p>Information may be disclosed only to Educational Institutions (governed by role-based permissions), trusted third-party service providers (cloud hosting, storage, analytics, error monitoring), legal authorities when required by law, or during approved business transfers / restructuring.</p>
              </div>
            </FadeUp>

            {/* 11. Third-Party Services */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">11. Third-Party Services</h2>
                <p>
                  We integrate with push notification, SMS, email, cloud infrastructure, analytics, and mapping providers. These third-party services operate under their own privacy policies. JiNANAM Technologies is not responsible for privacy practices of third parties not owned or controlled by us.
                </p>
              </div>
            </FadeUp>

            {/* 12. Data Retention */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">12. Data Retention</h2>
                <p>
                  We retain information only as long as necessary to provide services, comply with legal obligations, resolve disputes, maintain security, and meet audit requirements. When no longer required, data is securely deleted, anonymized, or archived in accordance with backup schedules.
                </p>
              </div>
            </FadeUp>

            {/* 13. International Access */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">13. International Access</h2>
                <p>
                  JiNANAM Campus is operated from India. Users accessing the Platform from outside India consent to the processing and storage of their information on infrastructure located in India or authorized service provider jurisdictions.
                </p>
              </div>
            </FadeUp>

            {/* 14. Data Security */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">14. Data Security</h2>
                <p>
                  We implement commercially reasonable administrative, technical, and organizational safeguards including secure cloud infrastructure, encrypted data transmission (SSL/TLS), password hashing, Role-Based Access Control (RBAC), firewalls, and audit trails. While we enforce strict security protocols, no electronic transmission is 100% secure.
                </p>
              </div>
            </FadeUp>

            {/* 15. Responsibilities of Educational Institutions */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">15. Responsibilities of Educational Institutions</h2>
                <p>
                  Institutions are responsible for ensuring data accuracy, obtaining necessary parental/user consents, managing role-based user permissions, protecting admin credentials, and complying with all applicable laws and regulations.
                </p>
              </div>
            </FadeUp>

            {/* 16. User Responsibilities */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">16. User Responsibilities</h2>
                <p>
                  Users agree to provide accurate info, keep login credentials confidential, use the platform solely for lawful educational purposes, refrain from uploading malicious code, and immediately report unauthorized account activity.
                </p>
              </div>
            </FadeUp>

            {/* 17. User Rights */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">17. User Rights</h2>
                <p>
                  Subject to applicable laws and institutional policies, users may request access, correction, or deletion of personal information by contacting their respective Educational Institution or JiNANAM support where applicable.
                </p>
              </div>
            </FadeUp>

            {/* 18. Account Deletion */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">18. Account Deletion</h2>
                <p>
                  Account deletion requests should be initiated through your Educational Institution&apos;s administrator. Upon valid requests, data is deleted or anonymized subject to legal, tax, audit, and regulatory requirements.
                </p>
              </div>
            </FadeUp>

            {/* 19. Cookies and Similar Technologies */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">19. Cookies and Similar Technologies</h2>
                <p>
                  Our website uses cookies and similar technologies to remember user preferences, analyze traffic, maintain session security, and enhance functionality. Browsers can be configured to refuse cookies, though some features may be impacted.
                </p>
              </div>
            </FadeUp>

            {/* 20. Changes to this Privacy Policy */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">20. Changes to this Privacy Policy</h2>
                <p>
                  We reserve the right to update this Privacy Policy at any time. Revised versions will be published on our official website with an updated &quot;Last Revised&quot; date.
                </p>
              </div>
            </FadeUp>

            {/* 21. Limitation of Liability */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">21. Limitation of Liability</h2>
                <p>
                  JiNANAM Technologies shall not be liable for inaccuracies in institution-uploaded data, third-party internet outages, unauthorized access resulting from credential sharing, or indirect/consequential damages arising from platform usage.
                </p>
              </div>
            </FadeUp>

            {/* 22. Governing Law and Jurisdiction */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">22. Governing Law and Jurisdiction</h2>
                <p>
                  This Privacy Policy is governed by the laws of the Republic of India. Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.
                </p>
              </div>
            </FadeUp>

            {/* 23. Contact Us */}
            <FadeUp>
              <div className="space-y-4 p-8 bg-gray-50/80 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight">23. Contact Us</h2>
                <p>For questions or concerns regarding this Privacy Policy, please contact:</p>
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

            {/* 24. Severability & 25. Entire Policy */}
            <FadeUp>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-gray-100 dark:border-white/10">24. Severability & 25. Entire Framework</h2>
                <p>
                  If any provision of this Privacy Policy is found invalid, the remaining provisions remain in full force. This Privacy Policy, together with our Terms & Conditions, Refund Policy, and Cookie Policy, constitutes the complete legal agreement governing JiNANAM Campus.
                </p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>

    </main>
  );
}