
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/animations/FadeUp";

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      
      {/* Header Section */}
      <Section className="pt-32 pb-10 lg:pt-40 lg:pb-14 border-b border-border bg-surface">
        <Container>
          <FadeUp delay={0.02}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Legal & Compliance</p>
              <h1 className="text-4xl md:text-section font-bold tracking-tight text-foreground leading-[1.1]">
                Privacy Policy
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
                <p className="mb-4">JiNANAM Campus (&quot;Platform&quot;, &quot;Application&quot;, &quot;App&quot;, &quot;Services&quot;) is a cloud-based Education Management System owned and operated by JiNANAM Technologies / Vihaar Tech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). The Platform is designed to assist educational institutions in managing their academic, administrative, operational and communication activities through secure digital solutions.</p>
                <p className="mb-4">This Privacy Policy explains how we collect, use, process, store, disclose, safeguard and otherwise handle information obtained through JiNANAM Campus, including our mobile applications, web applications, administrative portals, websites and related services.</p>
                <p className="mb-4">Your privacy is important to us. We are committed to protecting your personal information and processing it responsibly, transparently and in accordance with applicable laws.</p>
                <p className="mb-4">By accessing or using JiNANAM Campus, you acknowledge that you have read, understood and agreed to this Privacy Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">2. Scope</h2>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>This Privacy Policy applies to:</li>
                  <li>Educational Institutions</li>
                  <li>Schools</li>
                  <li>Preschools</li>
                  <li>Colleges</li>
                  <li>Universities</li>
                  <li>Coaching Classes</li>
                  <li>Educational Trusts</li>
                  <li>Training Institutes</li>
                  <li>Academies</li>
                  <li>Institution Owners</li>
                  <li>Trustees</li>
                  <li>Directors</li>
                  <li>Principals</li>
                  <li>Administrators</li>
                  <li>Teachers</li>
                  <li>Students</li>
                  <li>Parents or Guardians</li>
                  <li>Drivers</li>
                  <li>Gatekeepers</li>
                  <li>Security Staff</li>
                  <li>Office Staff</li>
                  <li>Library Staff</li>
                  <li>Hostel Staff</li>
                  <li>Account Staff</li>
                  <li>Employees</li>
                  <li>Contractors</li>
                  <li>Authorized Representatives</li>
                  <li>Visitors using our website</li>
                </ul>
                <p className="mb-4">This Privacy Policy applies regardless of whether our Services are accessed through Android devices, iOS devices, tablets, desktops, laptops or supported web browsers.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">3. Definitions</h2>
                <p className="mb-4">For the purposes of this Privacy Policy:</p>
                <p className="mb-4">Company means JiNANAM Technologies / Vihaar Tech.</p>
                <p className="mb-4">Platform means JiNANAM Campus including all mobile applications, websites, administrative portals and related services.</p>
                <p className="mb-4">Institution means any School, Preschool, College, University, Coaching Class, Educational Trust, Academy, Training Institute or other educational organization using JiNANAM Campus.</p>
                <p className="mb-4">User means any individual authorized to access or use the Platform including Administrators, Teachers, Students, Parents, Drivers, Gatekeepers, Employees and other authorized personnel.</p>
                <p className="mb-4">Personal Information means any information capable of identifying an individual directly or indirectly.</p>
                <p className="mb-4">Services means all software, applications, websites and services offered under JiNANAM Campus.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">4. Information We Collect</h2>
                <p className="mb-4">Depending upon your role and usage of the Platform, we may collect the following categories of information.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>4.1 Institution Information</li>
                  <li>Institution Name</li>
                  <li>Institution Type</li>
                  <li>Registration Information</li>
                  <li>Trust or Society Details</li>
                  <li>GST Information (where applicable)</li>
                  <li>Institution Logo</li>
                  <li>Official Email Address</li>
                  <li>Official Contact Numbers</li>
                  <li>Institution Address</li>
                  <li>Academic Configuration</li>
                  <li>Departments</li>
                  <li>Classes</li>
                  <li>Subjects</li>
                  <li>Timetable Configuration</li>
                  <li>Transport Configuration</li>
                  <li>Fee Structure</li>
                  <li>Academic Sessions</li>
                  <li>Employee Records</li>
                  <li>Student Records</li>
                  <li>Parent Records</li>
                  <li>Notification Preferences</li>
                  <li>Institution Settings</li>
                  <li>4.2 Administrator Information</li>
                  <li>Name</li>
                  <li>Profile Photograph</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Employee ID</li>
                  <li>Username</li>
                  <li>Encrypted Password</li>
                  <li>Designation</li>
                  <li>Department</li>
                  <li>Role & Permissions</li>
                  <li>Login Activity</li>
                  <li>Security Preferences</li>
                  <li>4.3 Teacher Information</li>
                  <li>Name</li>
                  <li>Photograph</li>
                  <li>Employee ID</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Qualification</li>
                  <li>Department</li>
                  <li>Subject Allocation</li>
                  <li>Attendance</li>
                  <li>Timetable</li>
                  <li>Homework</li>
                  <li>Examination Information</li>
                  <li>Class Assignment</li>
                  <li>Leave Records</li>
                  <li>Uploaded Documents</li>
                  <li>4.4 Student Information</li>
                  <li>Student information may include:</li>
                  <li>Name</li>
                  <li>Admission Number</li>
                  <li>Student ID</li>
                  <li>Roll Number</li>
                  <li>Class</li>
                  <li>Section</li>
                  <li>Date of Birth</li>
                  <li>Gender</li>
                  <li>Photograph</li>
                  <li>Parent Information</li>
                  <li>Residential Address</li>
                  <li>Attendance</li>
                  <li>Homework</li>
                  <li>Assignments</li>
                  <li>Examination Results</li>
                  <li>Academic Records</li>
                  <li>Transport Details</li>
                  <li>Library Records</li>
                  <li>Hostel Details</li>
                  <li>Health Information (if provided by Institution)</li>
                  <li>Emergency Contacts</li>
                  <li>Uploaded Documents</li>
                  <li>4.5 Parent or Guardian Information</li>
                  <li>Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Residential Address</li>
                  <li>Relationship with Student</li>
                  <li>Emergency Contact Information</li>
                  <li>Communication Preferences</li>
                  <li>4.6 Driver Information</li>
                  <li>Where Transport Management is enabled:</li>
                  <li>Driver Name</li>
                  <li>Photograph</li>
                  <li>Mobile Number</li>
                  <li>Employee ID</li>
                  <li>Vehicle Assignment</li>
                  <li>Route Assignment</li>
                  <li>Attendance</li>
                  <li>Login Activity</li>
                  <li>4.7 Gatekeeper & Security Staff Information</li>
                  <li>Name</li>
                  <li>Employee ID</li>
                  <li>Mobile Number</li>
                  <li>Attendance</li>
                  <li>Login Records</li>
                  <li>Visitor Management Records</li>
                  <li>4.8 Technical Information</li>
                </ul>
                <p className="mb-4">When using our Platform we may automatically collect:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Device Type</li>
                  <li>Device Model</li>
                  <li>Operating System</li>
                  <li>Browser Information</li>
                  <li>App Version</li>
                  <li>Device Identifiers</li>
                  <li>IP Address</li>
                  <li>Language Settings</li>
                  <li>Network Information</li>
                  <li>Login History</li>
                  <li>Session Information</li>
                  <li>Diagnostic Information</li>
                  <li>Crash Reports</li>
                  <li>Performance Information</li>
                  <li>Error Logs</li>
                  <li>Security Logs</li>
                  <li>Date & Time of Access</li>
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">5. How We Use Information</h2>
                <p className="mb-4">Information collected through JiNANAM Campus may be used to:</p>
                <p className="mb-4">Create and manage user accounts.</p>
                <p className="mb-4">Provide Platform functionality.</p>
                <p className="mb-4">Authenticate users.</p>
                <p className="mb-4">Maintain academic records.</p>
                <p className="mb-4">Manage attendance.</p>
                <p className="mb-4">Conduct examinations.</p>
                <p className="mb-4">Publish homework and assignments.</p>
                <p className="mb-4">Manage communication between Institutions and Users.</p>
                <p className="mb-4">Send notifications.</p>
                <p className="mb-4">Manage transport operations.</p>
                <p className="mb-4">Generate reports.</p>
                <p className="mb-4">Improve Platform performance.</p>
                <p className="mb-4">Resolve technical issues.</p>
                <p className="mb-4">Protect against unauthorized access.</p>
                <p className="mb-4">Detect fraud or misuse.</p>
                <p className="mb-4">Maintain audit records.</p>
                <p className="mb-4">Comply with applicable legal obligations.</p>
                <p className="mb-4">Improve user experience.</p>
                <p className="mb-4">Provide customer support.</p>
                <p className="mb-4">Ensure Platform security and reliability.</p>
                <p className="mb-4">We process only such information as is reasonably necessary for providing our Services.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">6. Mobile Application Permissions</h2>
                <p className="mb-4">Depending upon features enabled by an Institution and your device settings, JiNANAM Campus may request access to certain device permissions including:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Camera</li>
                  <li>Used for:</li>
                  <li>Profile photographs</li>
                  <li>Assignment uploads</li>
                  <li>Visitor verification</li>
                  <li>Document uploads</li>
                  <li>QR Code scanning</li>
                  <li>Identity verification where applicable</li>
                  <li>Photos & Media</li>
                  <li>Used for:</li>
                  <li>Uploading documents</li>
                  <li>Sharing educational materials</li>
                  <li>Profile pictures</li>
                  <li>Assignment submissions</li>
                  <li>Images required for Platform functionality</li>
                  <li>Notifications</li>
                  <li>Used to send:</li>
                  <li>Attendance notifications</li>
                  <li>Homework alerts</li>
                  <li>Examination updates</li>
                  <li>Institution announcements</li>
                  <li>Circulars</li>
                  <li>Transport notifications</li>
                  <li>Fee reminders</li>
                  <li>Emergency notifications</li>
                  <li>Security alerts</li>
                  <li>Platform updates</li>
                </ul>
                <p className="mb-4">Users may disable notifications through device settings, although certain important notifications may no longer be received.</p>
                <p className="mb-4">Location</p>
                <p className="mb-4">Location permission may be requested only where required by Institution-enabled features, including:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Transport tracking</li>
                  <li>Bus route management</li>
                  <li>Attendance features</li>
                </ul>
                <p className="mb-4">Location-based services specifically enabled by the Institution</p>
                <p className="mb-4">Location data is not continuously collected unless a specific feature requires it and appropriate permissions have been granted.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Storage</li>
                  <li>Used only for:</li>
                  <li>Saving downloaded files</li>
                  <li>Uploading documents</li>
                  <li>Viewing educational resources</li>
                  <li>Exporting reports where permitted</li>
                  <li>Internet</li>
                </ul>
                <p className="mb-4">Required for communication with JiNANAM Campus servers and accessing Platform features.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">7. Fee Payments</h2>
                <p className="mb-4">JiNANAM Campus provides Educational Institutions with the ability to facilitate fee collections through supported payment methods, including Unified Payments Interface (UPI), where such functionality has been enabled by the respective Institution.</p>
                <p className="mb-4">JiNANAM Technologies does not collect, receive, hold, process, settle or retain student fee payments on its own behalf.</p>
                <p className="mb-4">All fee payments initiated through JiNANAM Campus are made directly by the payer to the respective Educational Institution using the payment details configured and authorized by that Institution.</p>
                <p className="mb-4">JiNANAM Technologies acts solely as a technology service provider and does not operate as:</p>
                <p className="mb-4">A bank;</p>
                <p className="mb-4">A payment gateway;</p>
                <p className="mb-4">A payment aggregator;</p>
                <p className="mb-4">A financial institution;</p>
                <p className="mb-4">An escrow service;</p>
                <p className="mb-4">A money transfer service; or</p>
                <p className="mb-4">A custodian of funds.</p>
                <p className="mb-4">The respective Educational Institution is solely responsible for:</p>
                <p className="mb-4">Fee structures;</p>
                <p className="mb-4">Fee calculations;</p>
                <p className="mb-4">Payment requests;</p>
                <p className="mb-4">Collection of fees;</p>
                <p className="mb-4">Refunds;</p>
                <p className="mb-4">Concessions;</p>
                <p className="mb-4">Waivers;</p>
                <p className="mb-4">Payment disputes;</p>
                <p className="mb-4">Outstanding balances;</p>
                <p className="mb-4">Financial reconciliations.</p>
                <p className="mb-4">Payment-related information that may be processed for operational purposes includes:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Transaction Reference Number</li>
                  <li>Transaction Status</li>
                  <li>Amount Paid</li>
                  <li>Date and Time of Payment</li>
                  <li>Student Reference</li>
                  <li>Institution Reference</li>
                  <li>Receipt Number (where generated)</li>
                </ul>
                <p className="mb-4">JiNANAM Technologies does not collect or store sensitive banking credentials such as:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>UPI PIN</li>
                  <li>Debit Card PIN</li>
                  <li>Credit Card PIN</li>
                  <li>Internet Banking Passwords</li>
                  <li>CVV Numbers</li>
                  <li>OTPs</li>
                  <li>Bank Login Credentials</li>
                </ul>
                <p className="mb-4">Any payment disputes, refund requests, chargebacks, reversals or financial claims must be resolved directly with the respective Educational Institution in accordance with its own policies.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">8. Communications</h2>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>We may communicate with Users through:</li>
                  <li>In-App Notifications</li>
                  <li>Push Notifications</li>
                  <li>SMS</li>
                  <li>Email</li>
                  <li>WhatsApp (where enabled)</li>
                  <li>Web Portal Notifications</li>
                  <li>Administrative Announcements</li>
                  <li>Communications may include:</li>
                  <li>Attendance Updates</li>
                  <li>Homework Notifications</li>
                  <li>Examination Information</li>
                  <li>Timetable Updates</li>
                  <li>Circulars</li>
                  <li>Emergency Notifications</li>
                  <li>Fee Reminders</li>
                  <li>Transport Updates</li>
                  <li>Account Security Alerts</li>
                  <li>Password Reset Notifications</li>
                  <li>Platform Maintenance Notices</li>
                </ul>
                <p className="mb-4">Certain service-related communications are essential for operation of the Platform and cannot be opted out of while an account remains active.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">9. Children&apos;s Privacy</h2>
                <p className="mb-4">JiNANAM Campus is intended exclusively for use by Educational Institutions.</p>
                <p className="mb-4">Student accounts are generally created, managed and controlled by the respective Educational Institution.</p>
                <p className="mb-4">Where applicable, Parents or Legal Guardians remain responsible for supervising a child&apos;s use of the Platform.</p>
                <p className="mb-4">Educational Institutions are solely responsible for obtaining all permissions, authorizations and parental consents required under applicable laws before collecting, uploading or processing any Student Information through JiNANAM Campus.</p>
                <p className="mb-4">JiNANAM Technologies does not knowingly collect Personal Information directly from children independent of the Educational Institution.</p>
                <p className="mb-4">If we become aware that information has been uploaded in violation of applicable law, we reserve the right to restrict processing or remove such information where legally required.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">10. Data Sharing and Disclosure</h2>
                <p className="mb-4">JiNANAM Technologies does not sell Personal Information.</p>
                <p className="mb-4">We do not rent, trade or commercially exploit Personal Information.</p>
                <p className="mb-4">Information may be shared only where necessary for providing the Services or where legally required.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Information may be disclosed to:</li>
                  <li>Educational Institutions</li>
                </ul>
                <p className="mb-4">Information is accessible to authorized representatives of the Institution that manages the User&apos;s account.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Such representatives may include:</li>
                  <li>Institution Owners</li>
                  <li>Trustees</li>
                  <li>Directors</li>
                  <li>Principals</li>
                  <li>Administrators</li>
                  <li>Authorized Staff</li>
                </ul>
                <p className="mb-4">Access is governed by role-based permissions configured by the Institution.</p>
                <p className="mb-4">Service Providers</p>
                <p className="mb-4">We may engage trusted third-party service providers for services including:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Cloud Hosting</li>
                  <li>Data Storage</li>
                  <li>Notification Delivery</li>
                  <li>Analytics</li>
                  <li>Error Monitoring</li>
                  <li>Customer Support</li>
                  <li>Security Services</li>
                  <li>Backup Services</li>
                  <li>Infrastructure Monitoring</li>
                </ul>
                <p className="mb-4">Such providers receive only the information reasonably necessary to perform their services and are required to protect such information.</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Legal Authorities</li>
                  <li>Information may be disclosed where required:</li>
                </ul>
                <p className="mb-4">By law;</p>
                <p className="mb-4">By court order;</p>
                <p className="mb-4">By regulatory authority;</p>
                <p className="mb-4">During investigations;</p>
                <p className="mb-4">To comply with lawful governmental requests;</p>
                <p className="mb-4">To protect legal rights;</p>
                <p className="mb-4">To prevent fraud;</p>
                <p className="mb-4">To safeguard users or public safety.</p>
                <p className="mb-4">Business Transfers</p>
                <p className="mb-4">If JiNANAM Technologies undergoes a merger, acquisition, restructuring, sale of assets or similar business transaction, user information may be transferred as part of that transaction subject to applicable law.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">11. Third-Party Services</h2>
                <p className="mb-4">JiNANAM Campus may integrate with third-party services including but not limited to:</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Push Notification Providers</li>
                  <li>SMS Service Providers</li>
                  <li>Email Service Providers</li>
                  <li>Cloud Infrastructure Providers</li>
                  <li>Analytics Providers</li>
                  <li>Mapping Services</li>
                </ul>
                <p className="mb-4">Payment Facilitation Services (where enabled by Institutions)</p>
                <p className="mb-4">Authentication Services</p>
                <p className="mb-4">These third-party providers operate under their own privacy policies.</p>
                <p className="mb-4">JiNANAM Technologies is not responsible for the privacy practices of third-party services that are not owned or controlled by us.</p>
                <p className="mb-4">Users are encouraged to review the applicable privacy policies of such third-party providers where relevant.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">12. Data Retention</h2>
                <p className="mb-4">We retain information only for as long as reasonably necessary to:</p>
                <p className="mb-4">Provide the Services;</p>
                <p className="mb-4">Maintain Platform functionality;</p>
                <p className="mb-4">Comply with legal obligations;</p>
                <p className="mb-4">Resolve disputes;</p>
                <p className="mb-4">Maintain security;</p>
                <p className="mb-4">Enforce agreements;</p>
                <p className="mb-4">Support audit requirements;</p>
                <p className="mb-4">Meet regulatory obligations.</p>
                <p className="mb-4">Retention periods may vary depending upon:</p>
                <p className="mb-4">Institution requirements;</p>
                <p className="mb-4">Applicable laws;</p>
                <p className="mb-4">Regulatory obligations;</p>
                <p className="mb-4">Contractual commitments;</p>
                <p className="mb-4">Technical requirements.</p>
                <p className="mb-4">When information is no longer required, reasonable measures are taken to securely delete, anonymize or archive such information in accordance with applicable laws and operational requirements.</p>
                <p className="mb-4">Backup copies may continue to exist for a limited period before being permanently overwritten in accordance with our backup retention schedules.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">13. International Access</h2>
                <p className="mb-4">JiNANAM Campus is operated from India.</p>
                <p className="mb-4">Users accessing the Platform from outside India acknowledge that their information may be processed and stored on infrastructure located in India or other jurisdictions where our authorized service providers operate.</p>
                <p className="mb-4">By using our Services, Users consent to such processing and transfers to the extent permitted by applicable law.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">14. Data Security</h2>
                <p className="mb-4">The security of information entrusted to us is of utmost importance. JiNANAM Technologies implements commercially reasonable administrative, technical and organizational safeguards designed to protect Personal Information against unauthorized access, disclosure, alteration, misuse, loss or destruction.</p>
                <p className="mb-4">Our security measures may include, where applicable:</p>
                <p className="mb-4">Secure cloud infrastructure</p>
                <p className="mb-4">Encrypted data transmission using industry-standard encryption protocols</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Encrypted storage of sensitive credentials</li>
                  <li>Role-Based Access Control (RBAC)</li>
                  <li>Authentication and authorization mechanisms</li>
                  <li>Password protection and secure password hashing</li>
                  <li>Multi-level administrative access controls</li>
                  <li>Firewall and network security controls</li>
                  <li>Security logging and audit trails</li>
                </ul>
                <p className="mb-4">Continuous monitoring of platform performance and security events</p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Regular software updates and security patches</li>
                  <li>Backup and disaster recovery procedures</li>
                  <li>Controlled access to production systems</li>
                  <li>Data minimization practices</li>
                  <li>Secure development and deployment practices</li>
                </ul>
                <p className="mb-4">While we strive to protect your information using reasonable safeguards, no method of electronic transmission, storage or processing can be guaranteed to be completely secure. Accordingly, JiNANAM Technologies cannot guarantee absolute security of any information.</p>
                <p className="mb-4">Users and Institutions are also responsible for maintaining the confidentiality of their login credentials and taking appropriate security measures within their own environments.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">15. Responsibilities of Educational Institutions</h2>
                <p className="mb-4">Educational Institutions using JiNANAM Campus acknowledge and agree that they are responsible for:</p>
                <p className="mb-4">Ensuring the accuracy of information uploaded to the Platform.</p>
                <p className="mb-4">Obtaining all required permissions, authorizations and consents from Students, Parents, Guardians, Teachers, Employees and other Users before collecting or uploading their information.</p>
                <p className="mb-4">Managing user accounts and role-based permissions within their Institution.</p>
                <p className="mb-4">Maintaining the confidentiality of administrative credentials.</p>
                <p className="mb-4">Ensuring compliance with all applicable laws, regulations and internal institutional policies.</p>
                <p className="mb-4">Promptly notifying JiNANAM Technologies of any suspected unauthorized access or security incident relating to their accounts.</p>
                <p className="mb-4">Ensuring that only authorized personnel access Institution data.</p>
                <p className="mb-4">JiNANAM Technologies acts solely as the technology service provider and does not independently verify the legality, completeness or accuracy of information uploaded by an Institution.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">16. User Responsibilities</h2>
                <p className="mb-4">Each User agrees to:</p>
                <p className="mb-4">Provide accurate and up-to-date information where required.</p>
                <p className="mb-4">Maintain the confidentiality of login credentials.</p>
                <p className="mb-4">Use the Platform only for lawful and authorized educational purposes.</p>
                <p className="mb-4">Not attempt to gain unauthorized access to the Platform or other user accounts.</p>
                <p className="mb-4">Not upload malicious software, viruses or harmful code.</p>
                <p className="mb-4">Not misuse or interfere with the operation of the Platform.</p>
                <p className="mb-4">Immediately report any suspected unauthorized use of their account.</p>
                <p className="mb-4">Comply with the policies and instructions issued by their Educational Institution.</p>
                <p className="mb-4">Users are responsible for all activities performed through their accounts unless unauthorized use is promptly reported.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">17. User Rights</h2>
                <p className="mb-4">Subject to applicable laws and institutional policies, Users may have the right to:</p>
                <p className="mb-4">Access their Personal Information.</p>
                <p className="mb-4">Request correction of inaccurate information.</p>
                <p className="mb-4">Request updates to incomplete information.</p>
                <p className="mb-4">Request deletion of information where legally permissible.</p>
                <p className="mb-4">Withdraw consent where processing is based on consent.</p>
                <p className="mb-4">Raise concerns regarding the processing of Personal Information.</p>
                <p className="mb-4">Contact JiNANAM Technologies regarding privacy-related matters.</p>
                <p className="mb-4">Certain requests may require approval or involvement of the respective Educational Institution where the Institution controls the user account or the underlying data.</p>
                <p className="mb-4">JiNANAM Technologies reserves the right to refuse requests where required by law, contractual obligations, security requirements or legitimate operational interests.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">18. Account Deletion</h2>
                <p className="mb-4">Users may request deletion of their accounts where permitted by the respective Educational Institution and applicable laws.</p>
                <p className="mb-4">Where an account is managed by an Educational Institution, account deletion requests should generally be initiated through the Institution&apos;s authorized administrator.</p>
                <p className="mb-4">Upon receipt of a valid request, JiNANAM Technologies may delete or anonymize Personal Information within a reasonable period, subject to:</p>
                <p className="mb-4">Legal obligations;</p>
                <p className="mb-4">Regulatory requirements;</p>
                <p className="mb-4">Audit requirements;</p>
                <p className="mb-4">Contractual obligations;</p>
                <p className="mb-4">Security requirements;</p>
                <p className="mb-4">Ongoing investigations;</p>
                <p className="mb-4">Legitimate business interests.</p>
                <p className="mb-4">Certain records may be retained for a limited period where retention is required by applicable law or necessary for legal compliance, dispute resolution, fraud prevention, accounting, taxation or enforcement of agreements.</p>
                <p className="mb-4">Additional information regarding account deletion may be available in our separate Account Deletion Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">19. Cookies and Similar Technologies</h2>
                <p className="mb-4">Our website may use cookies and similar technologies to:</p>
                <p className="mb-4">Improve website functionality.</p>
                <p className="mb-4">Remember user preferences.</p>
                <p className="mb-4">Enhance user experience.</p>
                <p className="mb-4">Measure website performance.</p>
                <p className="mb-4">Analyze website traffic.</p>
                <p className="mb-4">Maintain session management.</p>
                <p className="mb-4">Improve security.</p>
                <p className="mb-4">Users may configure their web browsers to refuse or delete cookies; however, certain features of the website may not function correctly as a result.</p>
                <p className="mb-4">Our mobile applications generally do not rely on browser cookies in the same manner as websites, although similar technologies may be used where necessary for application functionality, authentication, security or analytics.</p>
                <p className="mb-4">Additional information is available in our separate Cookie Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">20. Changes to this Privacy Policy</h2>
                <p className="mb-4">JiNANAM Technologies reserves the right to modify, update or revise this Privacy Policy at any time to reflect changes in:</p>
                <p className="mb-4">Applicable laws;</p>
                <p className="mb-4">Regulatory requirements;</p>
                <p className="mb-4">Business practices;</p>
                <p className="mb-4">Platform functionality;</p>
                <p className="mb-4">Security practices;</p>
                <p className="mb-4">Operational requirements.</p>
                <p className="mb-4">Any updated version will be published on our official website and shall become effective from the date specified as the &quot;Last Revised&quot; date.</p>
                <p className="mb-4">Continued use of JiNANAM Campus after such changes constitutes acceptance of the revised Privacy Policy.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">21. Limitation of Liability</h2>
                <p className="mb-4">JiNANAM Technologies provides JiNANAM Campus as a technology platform for Educational Institutions.</p>
                <p className="mb-4">To the maximum extent permitted by applicable law, JiNANAM Technologies shall not be responsible for:</p>
                <p className="mb-4">The accuracy, completeness or legality of information uploaded by Educational Institutions or Users.</p>
                <p className="mb-4">Decisions made by Educational Institutions based on information available through the Platform.</p>
                <p className="mb-4">Fee structures, fee calculations, refunds, concessions or financial decisions of Educational Institutions.</p>
                <p className="mb-4">User-generated content or Institution-generated content.</p>
                <p className="mb-4">Temporary interruptions caused by internet connectivity, telecommunications providers, cloud infrastructure providers or other third-party services.</p>
                <p className="mb-4">Unauthorized access resulting from negligence, credential sharing or security failures within an Educational Institution.</p>
                <p className="mb-4">Indirect, incidental, consequential, special or punitive damages arising from the use or inability to use the Platform.</p>
                <p className="mb-4">Nothing in this Privacy Policy limits any rights that cannot be excluded under applicable law.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">22. Governing Law and Jurisdiction</h2>
                <p className="mb-4">This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India.</p>
                <p className="mb-4">Any dispute, claim or legal proceeding arising out of or relating to this Privacy Policy or the use of JiNANAM Campus shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">23. Contact Us</h2>
                <p className="mb-4">For questions, requests or concerns regarding this Privacy Policy or the processing of Personal Information, please contact:</p>
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
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">24. Severability</h2>
                <p className="mb-4">If any provision of this Privacy Policy is determined by a court or competent authority to be invalid, illegal or unenforceable, the remaining provisions shall continue in full force and effect.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.02}>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground tracking-tight border-b pb-3 border-border mt-10 mb-4">25. Entire Privacy Policy</h2>
                <p className="mb-4">This Privacy Policy, together with our Terms & Conditions, Refund & Cancellation Policy, Account Deletion Policy and Cookie Policy, constitutes the complete privacy framework governing the use of JiNANAM Campus.</p>
                <p className="mb-4">By accessing or using JiNANAM Campus, you acknowledge that you have read, understood and agreed to this Privacy Policy.</p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </Section>
    </main>
  );
}
