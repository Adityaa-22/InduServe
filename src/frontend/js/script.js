/* =========================================================
   InduServe
   Shared JavaScript (mock data + page logic)
   No backend. No frameworks. Vanilla JS only.
   ========================================================= */

/* =====================================================
   1. MOCK DATA
   ===================================================== */

var APPROVALS_DATA = [
  {
    id: "APR-001",
    name: "Factory Licence",
    department: "Labour Department",
    industry: "Manufacturing",
    state: "Maharashtra",
    type: "State Licence",
    mode: "Online",
    processingTime: "15-30 days",
    fee: "Rs. 5,000 - Rs. 25,000 (varies by unit size)",
    status: "Required",
    description: "A statutory licence required to operate any premises defined as a 'factory' under the Factories Act, covering worker safety, health and working-condition standards.",
    whoNeeds: "Any manufacturing unit employing 10 or more workers using power, or 20 or more workers without power.",
    eligibility: "Applicable to manufacturing units meeting the worker-count threshold defined under the Factories Act.",
    documents: [
      "Site plan and building layout",
      "Proof of land ownership or lease agreement",
      "List of machinery to be installed",
      "Identity and address proof of occupier",
      "Project report / manufacturing process details"
    ],
    process: [
      "Submit online application with required documents",
      "Preliminary scrutiny by Labour Department",
      "Site inspection by factory inspector",
      "Query resolution, if any",
      "Licence issued upon compliance verification"
    ],
    validity: "1 year (renewable annually)",
    renewal: "Renewal application to be filed at least 30 days before expiry, along with the prescribed renewal fee."
  },
  {
    id: "APR-002",
    name: "Pollution Consent (Consent to Operate)",
    department: "State Pollution Control Board",
    industry: "Manufacturing",
    state: "Maharashtra",
    type: "Environmental Clearance",
    mode: "Online",
    processingTime: "30-45 days",
    fee: "Based on category of industry and investment",
    status: "Required",
    description: "Consent required under the Water and Air Acts before an industrial unit can commence or continue operations that may generate emissions or effluents.",
    whoNeeds: "Industrial units classified as Red, Orange or Green category based on pollution potential.",
    eligibility: "Applicable to all industrial units generating trade effluent or air emissions as per Pollution Control Board classification.",
    documents: [
      "Consent to Establish (CTE) copy",
      "Effluent and emission treatment details",
      "Site layout showing treatment facilities",
      "Board resolution / authorisation letter",
      "Environmental compliance report (if applicable)"
    ],
    process: [
      "Apply online with unit and process details",
      "Document scrutiny by regional office",
      "Site inspection (for Orange/Red category units)",
      "Assessment of pollution control measures",
      "Consent order issued"
    ],
    validity: "1 to 5 years depending on category",
    renewal: "Renewal to be applied for at least 120 days before expiry of existing consent."
  },
  {
    id: "APR-003",
    name: "Fire NOC",
    department: "Fire Department",
    industry: "Manufacturing",
    state: "Maharashtra",
    type: "Safety Clearance",
    mode: "Online",
    processingTime: "7-15 days",
    fee: "As per built-up area slab",
    status: "Required",
    description: "No Objection Certificate confirming that the premises comply with fire prevention and life safety norms applicable to the building's occupancy type.",
    whoNeeds: "Industrial, commercial and institutional buildings above the height/area threshold specified in the state fire safety rules.",
    eligibility: "Applicable to units where built-up area or building height exceeds the threshold under local fire safety regulations.",
    documents: [
      "Building plan approved by local authority",
      "Fire fighting system layout",
      "Structural stability certificate",
      "Occupancy certificate (if available)"
    ],
    process: [
      "Submit application with building and safety-system details",
      "Document verification",
      "Physical inspection of fire safety installations",
      "NOC issued or deficiency report shared"
    ],
    validity: "1 year",
    renewal: "Renewal application to be submitted before expiry along with updated inspection report."
  },
  {
    id: "APR-004",
    name: "Trade Licence",
    department: "Local Authority (Municipal Corporation)",
    industry: "All Industries",
    state: "Maharashtra",
    type: "Local Body Licence",
    mode: "Online",
    processingTime: "7-14 days",
    fee: "Based on trade category and area",
    status: "Required",
    description: "Licence issued by the local municipal body permitting a business to operate a trade or commercial activity within its jurisdiction.",
    whoNeeds: "Any business establishment operating within municipal limits, including manufacturing and trading units.",
    eligibility: "Applicable to establishments operating within the jurisdiction of the local municipal corporation or council.",
    documents: [
      "Proof of business premises (ownership/lease)",
      "Identity proof of applicant",
      "Property tax receipt",
      "No Objection Certificate from landlord (if rented)"
    ],
    process: [
      "Apply online through municipal portal",
      "Document verification",
      "Site inspection (if applicable)",
      "Licence fee payment",
      "Trade licence issued"
    ],
    validity: "1 year",
    renewal: "To be renewed annually before 31 March."
  },
  {
    id: "APR-005",
    name: "FSSAI Licence",
    department: "Food Safety Department",
    industry: "Food Processing",
    state: "Maharashtra",
    type: "Central / State Licence",
    mode: "Online",
    processingTime: "7-60 days",
    fee: "Rs. 2,000 - Rs. 7,500 per year (based on category)",
    status: "Required",
    description: "Licence required for units engaged in manufacturing, processing, storage, distribution or sale of food products.",
    whoNeeds: "Food business operators, including manufacturing and processing units, above the turnover threshold for state/central licensing.",
    eligibility: "Applicable to food business operators based on annual turnover and scale of operations.",
    documents: [
      "Business constitution certificate",
      "Identity and address proof",
      "List of food products to be manufactured",
      "Layout plan of processing unit",
      "Water testing report"
    ],
    process: [
      "Apply online via Food Licensing and Registration System",
      "Document scrutiny",
      "Inspection of premises (as applicable)",
      "Licence issued upon compliance"
    ],
    validity: "1 to 5 years (as opted at application)",
    renewal: "Renewal application to be filed 30 days before expiry."
  },
  {
    id: "APR-006",
    name: "Environmental Clearance (EC)",
    department: "State Environment Impact Assessment Authority",
    industry: "Manufacturing",
    state: "Gujarat",
    type: "Environmental Clearance",
    mode: "Online",
    processingTime: "60-105 days",
    fee: "As per project category",
    status: "Required",
    description: "Prior clearance required for specified categories of industrial projects before construction or expansion, assessing likely environmental impact.",
    whoNeeds: "Projects listed under Category A or B of the EIA notification, based on project type and capacity.",
    eligibility: "Applicable to new projects or expansions falling under the notified list of activities requiring clearance.",
    documents: [
      "Pre-feasibility report",
      "Form 1 / Form 1A application",
      "Environmental Impact Assessment report (Category A/B1)",
      "Site location map"
    ],
    process: [
      "Screening by State Expert Appraisal Committee",
      "Scoping and terms of reference issued",
      "Public consultation (where required)",
      "Appraisal of final EIA report",
      "Clearance granted with conditions"
    ],
    validity: "7-10 years depending on sector",
    renewal: "Not renewable; fresh clearance required for expansion beyond approved capacity."
  },
  {
    id: "APR-007",
    name: "Labour Welfare Registration",
    department: "Labour Department",
    industry: "All Industries",
    state: "Karnataka",
    type: "Registration",
    mode: "Online",
    processingTime: "5-10 days",
    fee: "Nominal registration fee",
    status: "Required",
    description: "Registration under the state Shops and Establishments Act or equivalent labour welfare statute for units employing workers.",
    whoNeeds: "Any establishment employing one or more workers, including offices, factories and commercial units.",
    eligibility: "Applicable to all establishments employing workers within the state's jurisdiction.",
    documents: [
      "Identity and address proof of employer",
      "Proof of business premises",
      "List of employees"
    ],
    process: [
      "Submit application online",
      "Verification of submitted details",
      "Registration certificate issued"
    ],
    validity: "5 years",
    renewal: "Renewal to be filed before expiry of the registration period."
  },
  {
    id: "APR-008",
    name: "Boiler Registration",
    department: "Directorate of Boilers",
    industry: "Manufacturing",
    state: "Maharashtra",
    type: "Safety Registration",
    mode: "Online",
    processingTime: "10-20 days",
    fee: "As per boiler capacity",
    status: "Required",
    description: "Registration and periodic inspection certificate required for operating boilers under the Boilers Act, to ensure safe operation.",
    whoNeeds: "Units operating steam boilers above the exempted pressure/capacity limit.",
    eligibility: "Applicable to units operating boilers that fall within the scope of the Boilers Act.",
    documents: [
      "Boiler manufacturer's certificate",
      "Design and drawing approval",
      "Hydraulic test certificate",
      "Site layout showing boiler location"
    ],
    process: [
      "Application for provisional registration",
      "Inspection by boiler inspector",
      "Hydraulic and safety valve test",
      "Registration certificate issued"
    ],
    validity: "1 year",
    renewal: "Annual inspection and renewal required before certificate expiry."
  }
];

var COMPLIANCE_DATA = [
  { id: "CMP-101", requirement: "GST Return Filing (GSTR-3B)", department: "Tax Department", dueDate: "10 Sep 2026", dueDateISO: "2026-09-10", status: "Pending" },
  { id: "CMP-102", requirement: "Pollution Monitoring Report", department: "State Pollution Control Board", dueDate: "17 Sep 2026", dueDateISO: "2026-09-17", status: "Pending" },
  { id: "CMP-103", requirement: "Factory Licence Renewal", department: "Labour Department", dueDate: "15 Oct 2026", dueDateISO: "2026-10-15", status: "Completed" },
  { id: "CMP-104", requirement: "Provident Fund (PF) Return", department: "Employees' Provident Fund Organisation", dueDate: "15 Sep 2026", dueDateISO: "2026-09-15", status: "Pending" },
  { id: "CMP-105", requirement: "ESI Contribution Filing", department: "Employees' State Insurance Corporation", dueDate: "21 Sep 2026", dueDateISO: "2026-09-21", status: "Pending" },
  { id: "CMP-106", requirement: "Fire Safety Inspection Report", department: "Fire Department", dueDate: "28 Aug 2026", dueDateISO: "2026-08-28", status: "Overdue" },
  { id: "CMP-107", requirement: "Annual Return - Factories Act", department: "Labour Department", dueDate: "31 Jan 2026", dueDateISO: "2026-01-31", status: "Completed" },
  { id: "CMP-108", requirement: "Boiler Annual Inspection", department: "Directorate of Boilers", dueDate: "05 Nov 2026", dueDateISO: "2026-11-05", status: "Pending" },
  { id: "CMP-109", requirement: "Trade Licence Renewal", department: "Municipal Corporation", dueDate: "31 Mar 2026", dueDateISO: "2026-03-31", status: "Completed" },
  { id: "CMP-110", requirement: "Hazardous Waste Manifest Filing", department: "State Pollution Control Board", dueDate: "20 Sep 2026", dueDateISO: "2026-09-20", status: "Pending" }
];

/* Reference "today" used to compute due-in/overdue-by text for the compliance
   page. Kept fixed so the prototype's mock data stays consistent between visits. */
var COMPLIANCE_TODAY = new Date(2026, 8, 5);

function daysUntil(isoDate) {
  var target = new Date(isoDate + "T00:00:00");
  var diffMs = target.getTime() - COMPLIANCE_TODAY.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

var SCHEMES_DATA = [
  {
    id: "SCH-01",
    category: "scheme",
    categoryLabel: "Startup Support",
    name: "Startup Support Scheme",
    department: "Department for Promotion of Industry and Internal Trade",
    targetGroup: "Recognised startups (up to 10 years from incorporation)",
    benefit: "Reimbursement of select statutory filing costs and access to fast-track approval processing.",
    eligibility: "Entity must hold valid startup recognition and meet turnover criteria for the relevant financial year.",
    matchScore: 78
  },
  {
    id: "SCH-02",
    category: "scheme",
    categoryLabel: "MSME Support",
    name: "MSME Support Scheme",
    department: "Ministry of Micro, Small and Medium Enterprises",
    targetGroup: "Registered micro, small and medium enterprises",
    benefit: "Support towards quality certification, testing infrastructure and market development activities.",
    eligibility: "Unit must hold valid Udyam registration and fall within prescribed investment and turnover limits.",
    matchScore: 91
  },
  {
    id: "SCH-03",
    category: "subsidy",
    categoryLabel: "Credit-Linked Support",
    name: "Credit-Linked Capital Subsidy",
    department: "Ministry of Micro, Small and Medium Enterprises",
    targetGroup: "MSMEs undertaking technology upgradation",
    benefit: "Capital subsidy on institutional credit availed for approved plant and machinery upgrades.",
    eligibility: "Unit must avail term loan from an eligible lending institution for approved technology upgrade.",
    matchScore: 64
  },
  {
    id: "SCH-04",
    category: "subsidy",
    categoryLabel: "Technology Upgrade",
    name: "Technology Upgradation Fund",
    department: "State Industries Department",
    targetGroup: "Manufacturing units upgrading production technology",
    benefit: "Partial reimbursement of costs incurred in adopting approved cleaner or more efficient production technology.",
    eligibility: "Unit must submit a technology upgrade plan and obtain pre-approval before implementation.",
    matchScore: 70
  },
  {
    id: "SCH-05",
    category: "incentive",
    categoryLabel: "Employment Incentive",
    name: "Employment Generation Incentive",
    department: "State Industries Department",
    targetGroup: "Units generating new direct employment",
    benefit: "Reimbursement linked to employer's statutory contribution for eligible new employees over a defined period.",
    eligibility: "Unit must maintain minimum specified headcount growth over the base employment year.",
    matchScore: 55
  },
  {
    id: "SCH-06",
    category: "incentive",
    categoryLabel: "Investment Incentive",
    name: "Industrial Investment Incentive",
    department: "State Industries Department",
    targetGroup: "New and expanding manufacturing units",
    benefit: "Incentives linked to fixed capital investment, subject to minimum investment thresholds by industry category.",
    eligibility: "Unit must commence commercial production within the notified period after registration of the project.",
    matchScore: 68
  }
];

var NOTIFICATIONS_DATA = [
  { id: "NTF-01", category: "applications", text: "Your Factory Licence application (IND-2026-004821) is currently under department review.", date: "04 Sep 2026, 11:20 AM" },
  { id: "NTF-02", category: "compliance", text: "Pollution compliance report is due on 17 September 2026.", date: "03 Sep 2026, 09:05 AM" },
  { id: "NTF-03", category: "schemes", text: "A new government support scheme may be relevant to your business: Technology Upgradation Fund.", date: "02 Sep 2026, 04:40 PM" },
  { id: "NTF-04", category: "applications", text: "Documents for your Pollution Consent application have been verified.", date: "01 Sep 2026, 02:15 PM" },
  { id: "NTF-05", category: "compliance", text: "Fire Safety Inspection Report is overdue since 28 August 2026.", date: "29 Aug 2026, 10:00 AM" },
  { id: "NTF-06", category: "applications", text: "Fire NOC application has been received and is pending initial scrutiny.", date: "28 Aug 2026, 05:30 PM" },
  { id: "NTF-07", category: "schemes", text: "Eligibility window for the Employment Generation Incentive closes soon.", date: "26 Aug 2026, 01:00 PM" }
];

var BASE_APPLICATIONS = [
  {
    id: "IND-2026-004821",
    approvalName: "Factory Licence",
    department: "Labour Department",
    submitted: "02 Sep 2026",
    status: "In Review",
    currentDepartment: "Labour Department - Regional Office",
    lastUpdated: "04 Sep 2026",
    expectedCompletion: "22 Sep 2026",
    timeline: [
      { title: "Application Submitted", date: "02 Sep 2026", state: "completed" },
      { title: "Documents Verified", date: "03 Sep 2026", state: "completed" },
      { title: "Department Review", date: "04 Sep 2026", state: "active" },
      { title: "Inspection", date: "Pending", state: "pending" },
      { title: "Final Approval", date: "Pending", state: "pending" }
    ]
  },
  {
    id: "IND-2026-004790",
    approvalName: "Pollution Consent",
    department: "State Pollution Control Board",
    submitted: "03 Sep 2026",
    status: "Approved",
    currentDepartment: "State Pollution Control Board",
    lastUpdated: "01 Sep 2026",
    expectedCompletion: "Completed",
    timeline: [
      { title: "Application Submitted", date: "10 Jul 2026", state: "completed" },
      { title: "Documents Verified", date: "14 Jul 2026", state: "completed" },
      { title: "Department Review", date: "02 Aug 2026", state: "completed" },
      { title: "Inspection", date: "20 Aug 2026", state: "completed" },
      { title: "Final Approval", date: "01 Sep 2026", state: "completed" }
    ]
  },
  {
    id: "IND-2026-004802",
    approvalName: "Fire NOC",
    department: "Fire Department",
    submitted: "04 Sep 2026",
    status: "Pending",
    currentDepartment: "Fire Department - Zonal Office",
    lastUpdated: "04 Sep 2026",
    expectedCompletion: "18 Sep 2026",
    timeline: [
      { title: "Application Submitted", date: "04 Sep 2026", state: "active" },
      { title: "Documents Verified", date: "Pending", state: "pending" },
      { title: "Department Review", date: "Pending", state: "pending" },
      { title: "Inspection", date: "Pending", state: "pending" },
      { title: "Final Approval", date: "Pending", state: "pending" }
    ]
  }
];

var ADMIN_USERS_DATA = [
  { name: "Amit Sharma", org: "Sharma Industries Pvt. Ltd.", email: "amit.sharma@example.com", regDate: "12 Jan 2026", status: "Active" },
  { name: "Priya Nair", org: "Nair Agro Foods", email: "priya.nair@example.com", regDate: "03 Feb 2026", status: "Active" },
  { name: "Rohit Verma", org: "Verma Steel Works", email: "rohit.verma@example.com", regDate: "22 Feb 2026", status: "Active" },
  { name: "Sunita Patil", org: "Patil Textiles Ltd.", email: "sunita.patil@example.com", regDate: "18 Mar 2026", status: "Inactive" },
  { name: "Karan Mehta", org: "Mehta Plastics", email: "karan.mehta@example.com", regDate: "05 Apr 2026", status: "Active" },
  { name: "Deepa Iyer", org: "Iyer Chemicals Pvt. Ltd.", email: "deepa.iyer@example.com", regDate: "27 May 2026", status: "Active" },
  { name: "Manoj Reddy", org: "Reddy Engineering Works", email: "manoj.reddy@example.com", regDate: "14 Jun 2026", status: "Suspended" },
  { name: "Anjali Desai", org: "Desai Food Processing", email: "anjali.desai@example.com", regDate: "30 Jul 2026", status: "Active" }
];

/* =====================================================
   1B. SHARED ICON LIBRARY (simple inline SVGs)
   Reused by the sidebar, homepage service cards and
   notification list so icon markup lives in one place.
   ===================================================== */

var ICONS = {
  dashboard: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1.5"></rect><rect x="13" y="3" width="8" height="8" rx="1.5"></rect><rect x="3" y="13" width="8" height="8" rx="1.5"></rect><rect x="13" y="13" width="8" height="8" rx="1.5"></rect></svg>',
  approvals: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"></path><path d="M14 3v4h4"></path><path d="M9.5 13.5l2 2 4-4.5"></path></svg>',
  tracking: '<svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="1.6"></circle><circle cx="5" cy="12" r="1.6"></circle><circle cx="5" cy="18" r="1.6"></circle><path d="M9 6h11M9 12h11M9 18h11"></path></svg>',
  compliance: '<svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z"></path><path d="M9 12l2 2 4-4.5"></path></svg>',
  schemes: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v9M9.5 9.5c0-1.2 1.1-2 2.5-2s2.5.8 2.5 2c0 2.6-5 1.4-5 4 0 1.2 1.1 2 2.5 2s2.5-.8 2.5-2"></path></svg>',
  documents: '<svg viewBox="0 0 24 24"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v10A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5z"></path></svg>',
  notifications: '<svg viewBox="0 0 24 24"><path d="M12 4a4 4 0 0 0-4 4v3.5c0 1-.4 2-1.1 2.7L6 15h12l-.9-.8c-.7-.7-1.1-1.7-1.1-2.7V8a4 4 0 0 0-4-4z"></path><path d="M10 18a2 2 0 0 0 4 0"></path></svg>',
  profile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"></path></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="8.5" cy="8" r="3"></circle><circle cx="16" cy="9" r="2.5"></circle><path d="M3 19c0-3 2.5-5.5 5.5-5.5S14 16 14 19"></path><path d="M15 14.2c2.3.4 4 2.3 4 4.8"></path></svg>',
  analytics: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7"></path><path d="M2.5 20h19"></path></svg>',
  help: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M9.5 9.3c.2-1.2 1.2-2 2.5-2 1.4 0 2.5.9 2.5 2.1 0 1.6-2.3 1.7-2.3 3.4"></path><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none"></circle></svg>',
  logout: '<svg viewBox="0 0 24 24"><path d="M9 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H9"></path><path d="M15 8l4 4-4 4"></path><path d="M19 12H9"></path></svg>'
};

/* Maps a sidebar/notification label to an icon key. Used so icon markup can
   be swapped in after page load without duplicating SVG code in every file. */
var NAV_LABEL_TO_ICON = {
  "dashboard": "dashboard",
  "admin dashboard": "dashboard",
  "industrial approvals": "approvals",
  "approvals": "approvals",
  "my applications": "tracking",
  "applications": "tracking",
  "compliance": "compliance",
  "government schemes": "schemes",
  "documents": "documents",
  "notifications": "notifications",
  "profile": "profile",
  "users": "users",
  "analytics": "analytics"
};

function applyNavIcons() {
  qsa(".sidebar-nav .nav-icon").forEach(function (span) {
    var parentEl = span.parentElement;
    if (!parentEl) return;
    var fullText = parentEl.textContent.trim();
    var placeholder = span.textContent;
    var linkText = fullText.slice(placeholder.length).trim().toLowerCase();
    var iconKey = NAV_LABEL_TO_ICON[linkText];
    if (iconKey && ICONS[iconKey]) span.innerHTML = ICONS[iconKey];
  });
}

function applyServiceIcons() {
  qsa("[data-icon]").forEach(function (el) {
    var iconKey = el.getAttribute("data-icon");
    if (ICONS[iconKey]) el.innerHTML = ICONS[iconKey];
  });
}

/* =====================================================
   2. LOCAL STORAGE HELPERS
   ===================================================== */

var LS_KEYS = {
  USER: "isw_current_user",
  APPLICATIONS: "isw_submitted_applications",
  NOTIF_READS: "isw_read_notifications",
  DOC_PREFS: "isw_doc_preferences",
  THEME: "isw_theme"
};

/* =====================================================
   1B. DARK MODE
   ===================================================== */

var MOON_ICON = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 12.4A6.4 6.4 0 018.1 4.6 6.5 6.5 0 1015.5 12.4z"/></svg>';
var SUN_ICON = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="3.3"/><path d="M10 2.6v2M10 15.4v2M17.4 10h-2M4.6 10h-2M15.2 4.8l-1.4 1.4M6.2 13.8l-1.4 1.4M15.2 15.2l-1.4-1.4M6.2 6.2L4.8 4.8"/></svg>';

function updateThemeToggleButtons(theme) {
  qsa(".theme-toggle-btn").forEach(function (btn) {
    btn.innerHTML = theme === "dark" ? SUN_ICON : MOON_ICON;
    var label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  updateThemeToggleButtons(theme);
}

function initThemeToggle() {
  var saved = "light";
  try { saved = localStorage.getItem(LS_KEYS.THEME) || "light"; } catch (e) { /* storage unavailable */ }
  applyTheme(saved);

  qsa(".theme-toggle-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      var next = isDark ? "light" : "dark";
      try { localStorage.setItem(LS_KEYS.THEME, next); } catch (e) { /* storage unavailable */ }
      applyTheme(next);
    });
  });
}

function getCurrentUser() {
  var raw = localStorage.getItem(LS_KEYS.USER);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fall through */ }
  }
  return { name: "Amit Sharma", org: "Sharma Industries Pvt. Ltd.", email: "amit.sharma@example.com" };
}

function setCurrentUser(user) {
  localStorage.setItem(LS_KEYS.USER, JSON.stringify(user));
}

function logoutUser() {
  localStorage.removeItem(LS_KEYS.USER);
  window.location.href = "index.html";
}

function getSubmittedApplications() {
  var raw = localStorage.getItem(LS_KEYS.APPLICATIONS);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { return []; }
  }
  return [];
}

function saveSubmittedApplication(application) {
  var list = getSubmittedApplications();
  list.unshift(application);
  localStorage.setItem(LS_KEYS.APPLICATIONS, JSON.stringify(list));
}

function findApplicationById(id) {
  var all = getSubmittedApplications().concat(BASE_APPLICATIONS);
  for (var i = 0; i < all.length; i++) {
    if (all[i].id.toLowerCase() === id.toLowerCase()) return all[i];
  }
  return null;
}

function getReadNotificationIds() {
  var raw = localStorage.getItem(LS_KEYS.NOTIF_READS);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { return []; }
  }
  return [];
}

function setReadNotificationIds(ids) {
  localStorage.setItem(LS_KEYS.NOTIF_READS, JSON.stringify(ids));
}

/* =====================================================
   3. GENERAL UTILITIES
   ===================================================== */

function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

function getQueryParam(name) {
  var params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function generateApplicationId() {
  var year = "2026";
  var rand = Math.floor(100000 + Math.random() * 899999);
  return "IND-" + year + "-" + rand;
}

function statusBadgeInfo(status) {
  var s = (status || "").toLowerCase();
  if (s.indexOf("approved") > -1) return { cls: "badge-approved", label: status };
  if (s.indexOf("completed") > -1) return { cls: "badge-completed", label: status };
  if (s.indexOf("overdue") > -1) return { cls: "badge-overdue", label: status };
  if (s.indexOf("action") > -1) return { cls: "badge-action", label: status };
  if (s.indexOf("rejected") > -1) return { cls: "badge-rejected", label: status };
  if (s.indexOf("review") > -1 || s.indexOf("progress") > -1 || s.indexOf("inspection") > -1) return { cls: "badge-progress", label: status };
  if (s.indexOf("pending") > -1) return { cls: "badge-pending", label: status };
  return { cls: "badge-neutral", label: status };
}

function badgeHtml(status) {
  var info = statusBadgeInfo(status);
  return '<span class="badge ' + info.cls + '">' + escapeHtml(info.label) + '</span>';
}

/* =====================================================
   4. TOAST NOTIFICATIONS
   ===================================================== */

function ensureToastContainer() {
  var container = qs(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  return container;
}

function showToast(message, type) {
  var container = ensureToastContainer();
  var toast = document.createElement("div");
  toast.className = "toast" + (type ? " " + type : "");
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(function () {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(function () { toast.remove(); }, 250);
  }, 3500);
}

/* =====================================================
   5. MODAL
   ===================================================== */

function openModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
}

function closeModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
}

function initModalDismiss() {
  qsa(".modal-overlay").forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      qsa(".modal-overlay.open").forEach(function (o) { o.classList.remove("open"); });
    }
  });
}

/* =====================================================
   6. NAVIGATION (public nav + app sidebar)
   ===================================================== */

function initPublicNav() {
  var toggle = qs(".nav-toggle");
  var nav = qs(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
  setActiveLinks(".main-nav a");
}

function initAppSidebar() {
  var toggle = qs(".sidebar-toggle");
  var sidebar = qs(".sidebar");
  var backdrop = qs(".sidebar-backdrop");
  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      if (backdrop) backdrop.classList.toggle("open");
    });
  }
  if (backdrop && sidebar) {
    backdrop.addEventListener("click", function () {
      sidebar.classList.remove("open");
      backdrop.classList.remove("open");
    });
  }
  setActiveLinks(".sidebar-nav a");

  var logoutLink = qs("[data-action='logout']");
  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      logoutUser();
    });
  }

  var userNameEls = qsa("[data-user-name]");
  var userOrgEls = qsa("[data-user-org]");
  var userInitialEls = qsa("[data-user-initial]");
  var user = getCurrentUser();
  userNameEls.forEach(function (el) { el.textContent = user.name; });
  userOrgEls.forEach(function (el) { el.textContent = user.org; });
  userInitialEls.forEach(function (el) { el.textContent = user.name.charAt(0).toUpperCase(); });
}

/* -----------------------------------------------------
   Profile menu: a friendlier way to reach the account
   options that already exist in the sidebar footer
   (Admin Panel / Help & Support / Logout). Purely a
   presentation layer — no new destinations are added.
------------------------------------------------------ */
function initProfileMenu() {
  var chip = qs(".user-chip");
  if (!chip) return;

  var user = getCurrentUser();
  var initial = user.name.charAt(0).toUpperCase();

  var menu = document.createElement("div");
  menu.className = "profile-menu";
  menu.setAttribute("role", "menu");
  menu.innerHTML =
    '<div class="profile-menu-header">' +
      '<span class="user-avatar">' + escapeHtml(initial) + "</span>" +
      "<div>" +
        '<div class="profile-menu-name">' + escapeHtml(user.name) + "</div>" +
        '<span class="profile-menu-role">' + escapeHtml(user.org || "Applicant") + "</span>" +
      "</div>" +
    "</div>" +
    '<ul class="profile-menu-links">' +
      '<li><a href="profile.html">My Profile</a></li>' +
      '<li><a href="admin.html">Admin Panel</a></li>' +
      '<li><a href="#help">Help &amp; Support</a></li>' +
      '<li><a href="index.html" data-action="logout">Logout</a></li>' +
    "</ul>";

  chip.appendChild(menu);
  chip.setAttribute("aria-haspopup", "true");
  chip.setAttribute("aria-expanded", "false");

  var logoutLink = qs("[data-action='logout']", menu);
  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      logoutUser();
    });
  }

  function closeMenu() {
    menu.classList.remove("open");
    chip.setAttribute("aria-expanded", "false");
  }

  chip.addEventListener("click", function (e) {
    e.stopPropagation();
    var willOpen = !menu.classList.contains("open");
    menu.classList.toggle("open", willOpen);
    chip.setAttribute("aria-expanded", String(willOpen));
  });
  menu.addEventListener("click", function (e) { e.stopPropagation(); });
  document.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
}


/* -----------------------------------------------------
   Profile page
------------------------------------------------------ */
function initProfilePage() {
  var form = qs("#profileForm");
  if (!form) return;

  var user = getCurrentUser();
  var name = qs("#profileName");
  var org = qs("#profileOrg");
  var email = qs("#profileEmail");
  var phone = qs("#profilePhone");
  var initials = qs("#profileInitial");
  if (name) name.value = user.name || "";
  if (org) org.value = user.org || "";
  if (email) email.value = user.email || "";
  if (phone) phone.value = user.phone || "";
  if (initials) initials.textContent = (user.name || "A").charAt(0).toUpperCase();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var updated = {
      name: name ? name.value.trim() : user.name,
      org: org ? org.value.trim() : user.org,
      email: email ? email.value.trim() : user.email,
      phone: phone ? phone.value.trim() : user.phone
    };
    if (!updated.name || !updated.email) {
      showToast("Name and email are required.");
      return;
    }
    setCurrentUser(updated);
    if (initials) initials.textContent = updated.name.charAt(0).toUpperCase();
    qsa("[data-user-name]").forEach(function (el) { el.textContent = updated.name; });
    qsa("[data-user-org]").forEach(function (el) { el.textContent = updated.org; });
    qsa("[data-user-initial]").forEach(function (el) { el.textContent = updated.name.charAt(0).toUpperCase(); });
    showToast("Profile updated successfully.");
  });
}

/* -----------------------------------------------------
   Button ripple: a small, purely visual touch feedback
   effect on .btn clicks. Adds no new functionality.
------------------------------------------------------ */
function initButtonRipple() {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".btn") : null;
    if (!btn || btn.disabled) return;
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 1.1;
    var ripple = document.createElement("span");
    ripple.className = "btn-ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", function () { ripple.remove(); });
  });
}

function setActiveLinks(selector) {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  qsa(selector).forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var hrefPage = href.split("?")[0];
    if (hrefPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/* =====================================================
   7. AUTHENTICATION (simulated, no backend)
   ===================================================== */

function isValidEmailOrMobile(value) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var mobilePattern = /^[6-9]\d{9}$/;
  return emailPattern.test(value) || mobilePattern.test(value);
}

function validateLogin(identifier, password) {
  var errors = {};
  if (!identifier || !isValidEmailOrMobile(identifier)) {
    errors.identifier = "Enter a valid email address or 10-digit mobile number.";
  }
  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }
  return errors;
}

function showFieldError(inputEl, message) {
  var group = inputEl.closest(".form-group");
  if (!group) return;
  group.classList.add("has-error");
  var errorEl = group.querySelector(".form-error");
  if (errorEl) errorEl.textContent = message;
}

function clearFieldError(inputEl) {
  var group = inputEl.closest(".form-group");
  if (!group) return;
  group.classList.remove("has-error");
}

function initLoginPage() {
  var form = qs("#loginForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var identifier = qs("#loginIdentifier");
    var password = qs("#loginPassword");
    clearFieldError(identifier);
    clearFieldError(password);
    var errors = validateLogin(identifier.value.trim(), password.value);
    if (errors.identifier) showFieldError(identifier, errors.identifier);
    if (errors.password) showFieldError(password, errors.password);
    if (Object.keys(errors).length > 0) {
      showToast("Please correct the highlighted fields.", "error");
      return;
    }
    var demoName = identifier.value.indexOf("@") > -1
      ? identifier.value.split("@")[0].replace(/[.\-_]/g, " ")
      : "Amit Sharma";
    demoName = demoName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
    setCurrentUser({ name: demoName || "Amit Sharma", org: "Sharma Industries Pvt. Ltd.", email: identifier.value });
    showToast("Login successful. Redirecting to dashboard...", "success");
    setTimeout(function () { window.location.href = "dashboard.html"; }, 700);
  });
}

function initRegisterPage() {
  var form = qs("#registerForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fields = {
      fullName: qs("#regFullName"),
      email: qs("#regEmail"),
      mobile: qs("#regMobile"),
      password: qs("#regPassword"),
      confirmPassword: qs("#regConfirmPassword"),
      orgName: qs("#regOrgName"),
      orgType: qs("#regOrgType")
    };
    Object.keys(fields).forEach(function (key) { clearFieldError(fields[key]); });

    var errors = validateRegistration({
      fullName: fields.fullName.value.trim(),
      email: fields.email.value.trim(),
      mobile: fields.mobile.value.trim(),
      password: fields.password.value,
      confirmPassword: fields.confirmPassword.value,
      orgName: fields.orgName.value.trim(),
      orgType: fields.orgType.value
    });

    var hasErrors = false;
    Object.keys(errors).forEach(function (key) {
      if (fields[key]) {
        showFieldError(fields[key], errors[key]);
        hasErrors = true;
      }
    });

    if (hasErrors) {
      showToast("Please correct the highlighted fields.", "error");
      return;
    }

    setCurrentUser({
      name: fields.fullName.value.trim(),
      org: fields.orgName.value.trim(),
      email: fields.email.value.trim()
    });
    showToast("Registration successful. Redirecting to dashboard...", "success");
    setTimeout(function () { window.location.href = "dashboard.html"; }, 700);
  });
}

function validateRegistration(data) {
  var errors = {};
  if (!data.fullName || data.fullName.length < 3) {
    errors.fullName = "Enter your full name (minimum 3 characters).";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.mobile || !/^[6-9]\d{9}$/.test(data.mobile)) {
    errors.mobile = "Enter a valid 10-digit mobile number.";
  }
  if (!data.password || data.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }
  if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match.";
  }
  if (!data.orgName || data.orgName.length < 2) {
    errors.orgName = "Enter your organisation or company name.";
  }
  if (!data.orgType) {
    errors.orgType = "Select an organisation type.";
  }
  return errors;
}

function initForgotPasswordPage() {
  var form = qs("#forgotPasswordForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = qs("#fpIdentifier");
    clearFieldError(input);
    if (!input.value.trim() || !isValidEmailOrMobile(input.value.trim())) {
      showFieldError(input, "Enter a valid registered email address or mobile number.");
      return;
    }
    qs("#forgotPasswordForm").style.display = "none";
    qs("#fpSuccessMessage").style.display = "block";
  });
}

function initPasswordToggles() {
  qsa(".password-toggle-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var input = document.getElementById(btn.dataset.target);
      if (!input) return;
      var isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.textContent = isHidden ? "Hide" : "Show";
      btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
  });
}

/* =====================================================
   8. DASHBOARD
   ===================================================== */

function renderDashboardOverview() {
  var tableBody = qs("#dashboardApplicationsBody");
  if (!tableBody) return;

  var recent = BASE_APPLICATIONS.slice(0, 3);
  tableBody.innerHTML = recent.map(function (app) {
    return "<tr>" +
      '<td class="cell-primary">' + escapeHtml(app.approvalName) + "</td>" +
      "<td>" + escapeHtml(app.department) + "</td>" +
      '<td class="cell-muted">' + escapeHtml(app.submitted) + "</td>" +
      "<td>" + badgeHtml(app.status) + "</td>" +
      "</tr>";
  }).join("");

  var deadlineList = qs("#dashboardDeadlines");
  if (deadlineList) {
    var pending = COMPLIANCE_DATA.filter(function (c) { return c.status !== "Completed"; }).slice(0, 3);
    deadlineList.innerHTML = pending.map(function (c) {
      return '<li class="deadline-item">' +
        '<div><div class="deadline-title">' + escapeHtml(c.requirement) + '</div>' +
        '<div class="deadline-dept">' + escapeHtml(c.department) + "</div></div>" +
        '<div class="deadline-date">' + escapeHtml(c.dueDate) + "</div>" +
        "</li>";
    }).join("");
  }

  var schemesPreview = qs("#dashboardSchemes");
  if (schemesPreview) {
    var picks = SCHEMES_DATA.slice(0, 3);
    schemesPreview.innerHTML = picks.map(function (s) {
      return '<li class="deadline-item">' +
        '<div><div class="deadline-title">' + escapeHtml(s.name) + '</div>' +
        '<div class="deadline-dept">' + escapeHtml(s.department) + "</div></div>" +
        '<a href="schemes.html" class="btn btn-outline btn-sm">View</a>' +
        "</li>";
    }).join("");
  }

  var notifPreview = qs("#dashboardNotifications");
  if (notifPreview) {
    var readIds = getReadNotificationIds();
    var recentNotifs = NOTIFICATIONS_DATA.slice(0, 3);
    notifPreview.innerHTML = recentNotifs.map(function (n) {
      var isRead = readIds.indexOf(n.id) > -1;
      return '<li class="notification-item ' + (isRead ? "read" : "unread") + '">' +
        '<div class="notification-dot-col"><span class="notification-dot"></span></div>' +
        '<div class="notification-body">' +
        '<div class="notification-text">' + escapeHtml(n.text) + "</div>" +
        '<div class="notification-meta"><span>' + escapeHtml(n.date) + "</span></div>" +
        "</div></li>";
    }).join("");
  }

  var welcomeName = qs("#dashboardWelcomeName");
  if (welcomeName) welcomeName.textContent = getCurrentUser().name;
}

/* =====================================================
   9. APPROVALS PAGE
   ===================================================== */

function renderApprovals(list) {
  var tbody = qs("#approvalsTableBody");
  if (!tbody) return;

  var countEl = qs("#approvalsResultCount");
  if (countEl) {
    if (!list.length) {
      countEl.innerHTML = "No approvals match the selected filters.";
    } else {
      countEl.innerHTML = list.length + (list.length === 1 ? " approval may be required" : " approvals may be required") +
        ' <span class="text-muted">for your business based on the selected filters</span>';
    }
  }

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state"><div class="empty-icon">&mdash;</div>No approvals match the selected filters. Try adjusting your search or filters.</div></td></tr>';
    return;
  }
  tbody.innerHTML = list.map(function (a) {
    return "<tr>" +
      '<td class="cell-primary">' + escapeHtml(a.name) + "</td>" +
      "<td>" + escapeHtml(a.department) + "</td>" +
      '<td class="cell-muted">' + escapeHtml(a.processingTime) + "</td>" +
      "<td>" + escapeHtml(a.mode) + "</td>" +
      "<td>" + badgeHtml(a.status) + "</td>" +
      '<td><a class="btn btn-outline btn-sm" href="approval-details.html?id=' + encodeURIComponent(a.id) + '">View Details</a></td>' +
      "</tr>";
  }).join("");
}

function filterApprovals() {
  var searchVal = (qs("#approvalSearch") ? qs("#approvalSearch").value : "").toLowerCase().trim();
  var industry = qs("#filterIndustry") ? qs("#filterIndustry").value : "";
  var state = qs("#filterState") ? qs("#filterState").value : "";
  var department = qs("#filterDepartment") ? qs("#filterDepartment").value : "";
  var type = qs("#filterType") ? qs("#filterType").value : "";

  var filtered = APPROVALS_DATA.filter(function (a) {
    var matchesSearch = !searchVal || a.name.toLowerCase().indexOf(searchVal) > -1 || a.department.toLowerCase().indexOf(searchVal) > -1;
    var matchesIndustry = !industry || a.industry === industry;
    var matchesState = !state || a.state === state;
    var matchesDept = !department || a.department === department;
    var matchesType = !type || a.type === type;
    return matchesSearch && matchesIndustry && matchesState && matchesDept && matchesType;
  });

  renderApprovals(filtered);
}

function searchApprovals() {
  filterApprovals();
}

function populateApprovalFilters() {
  var industrySelect = qs("#filterIndustry");
  var stateSelect = qs("#filterState");
  var deptSelect = qs("#filterDepartment");
  var typeSelect = qs("#filterType");

  function fillSelect(select, values) {
    if (!select) return;
    values.forEach(function (v) {
      var opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
  }

  var industries = Array.from(new Set(APPROVALS_DATA.map(function (a) { return a.industry; })));
  var states = Array.from(new Set(APPROVALS_DATA.map(function (a) { return a.state; })));
  var depts = Array.from(new Set(APPROVALS_DATA.map(function (a) { return a.department; })));
  var types = Array.from(new Set(APPROVALS_DATA.map(function (a) { return a.type; })));

  fillSelect(industrySelect, industries);
  fillSelect(stateSelect, states);
  fillSelect(deptSelect, depts);
  fillSelect(typeSelect, types);
}

function initApprovalsPage() {
  var tbody = qs("#approvalsTableBody");
  if (!tbody) return;
  populateApprovalFilters();
  renderApprovals(APPROVALS_DATA);

  var searchInput = qs("#approvalSearch");
  if (searchInput) searchInput.addEventListener("input", searchApprovals);

  ["#filterIndustry", "#filterState", "#filterDepartment", "#filterType"].forEach(function (sel) {
    var el = qs(sel);
    if (el) el.addEventListener("change", filterApprovals);
  });

  var resetBtn = qs("#resetFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (searchInput) searchInput.value = "";
      ["#filterIndustry", "#filterState", "#filterDepartment", "#filterType"].forEach(function (sel) {
        var el = qs(sel);
        if (el) el.value = "";
      });
      renderApprovals(APPROVALS_DATA);
    });
  }
}

/* =====================================================
   10. APPROVAL DETAILS PAGE
   ===================================================== */

function renderApprovalDetails() {
  var container = qs("#approvalDetailContainer");
  if (!container) return;

  var id = getQueryParam("id");
  var approval = APPROVALS_DATA.filter(function (a) { return a.id === id; })[0] || APPROVALS_DATA[0];

  qs("#detailName").textContent = approval.name;
  qs("#detailDepartment").textContent = approval.department;
  qs("#detailBreadcrumbName").textContent = approval.name;
  qs("#detailDescription").textContent = approval.description;
  qs("#detailWhoNeeds").textContent = approval.whoNeeds;
  qs("#detailEligibility").textContent = approval.eligibility;
  qs("#detailProcessingTime").textContent = approval.processingTime;
  qs("#detailFee").textContent = approval.fee;
  qs("#detailValidity").textContent = approval.validity;
  qs("#detailRenewal").textContent = approval.renewal;
  qs("#detailMode").textContent = approval.mode;
  qs("#detailType").textContent = approval.type;

  var docsList = qs("#detailDocuments");
  docsList.innerHTML = approval.documents.map(function (d) { return "<li>" + escapeHtml(d) + "</li>"; }).join("");

  var processList = qs("#detailProcess");
  processList.innerHTML = approval.process.map(function (p) { return "<li>" + escapeHtml(p) + "</li>"; }).join("");

  var applyBtn = qs("#applyForApprovalBtn");
  if (applyBtn) applyBtn.href = "apply.html?id=" + encodeURIComponent(approval.id);
}

/* =====================================================
   11. APPLY WIZARD
   ===================================================== */

var currentWizardStep = 1;
var uploadedFiles = {};

function goToStep(stepNumber) {
  currentWizardStep = stepNumber;
  qsa(".wizard-panel").forEach(function (panel) {
    panel.classList.toggle("active", parseInt(panel.dataset.step, 10) === stepNumber);
  });
  qsa(".steps li").forEach(function (li) {
    var stepIndex = parseInt(li.dataset.step, 10);
    li.classList.remove("completed", "active");
    if (stepIndex < stepNumber) li.classList.add("completed");
    if (stepIndex === stepNumber) li.classList.add("active");
  });
  if (stepNumber === 4) populateReviewStep();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextStep() {
  if (!validateWizardStep(currentWizardStep)) return;
  if (currentWizardStep < 5) goToStep(currentWizardStep + 1);
}

function prevStep() {
  if (currentWizardStep > 1) goToStep(currentWizardStep - 1);
}

function validateWizardStep(step) {
  var panel = qs('.wizard-panel[data-step="' + step + '"]');
  if (!panel) return true;
  var requiredFields = qsa("input[required], select[required], textarea[required]", panel);
  var valid = true;
  requiredFields.forEach(function (field) {
    clearFieldError(field);
    if (!field.value || !field.value.trim()) {
      showFieldError(field, "This field is required.");
      valid = false;
    }
  });
  if (!valid) showToast("Please fill all required fields before continuing.", "error");
  return valid;
}

function handleDocumentUpload(inputEl, docKey, rowId) {
  var files = inputEl.files;
  if (!files || !files.length) return;
  uploadedFiles[docKey] = files[0].name;
  var row = document.getElementById(rowId);
  if (row) {
    var statusCell = row.querySelector(".doc-upload-status");
    if (statusCell) {
      statusCell.innerHTML = '<span class="badge badge-approved">Uploaded: ' + escapeHtml(files[0].name) + "</span>";
    }
  }
  showToast("File selected: " + files[0].name, "success");
}

function populateReviewStep() {
  var reviewEl = qs("#reviewSummary");
  if (!reviewEl) return;

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value : "";
  }

  var businessFields = [
    ["Business / Unit Name", val("bizName")],
    ["Type of Organisation", val("bizType")],
    ["Industry Sector", val("bizIndustry")],
    ["State", val("bizState")],
    ["Business Address", val("bizAddress")]
  ];
  var applicantFields = [
    ["Applicant Name", val("appName")],
    ["Designation", val("appDesignation")],
    ["Email", val("appEmail")],
    ["Mobile Number", val("appMobile")]
  ];

  var docNames = Object.keys(uploadedFiles).length
    ? Object.keys(uploadedFiles).map(function (k) { return uploadedFiles[k]; }).join(", ")
    : "No documents uploaded yet";

  reviewEl.innerHTML =
    "<h3>Business Information</h3>" +
    '<table class="info-table">' + businessFields.map(function (f) {
      return "<tr><th>" + f[0] + "</th><td>" + (escapeHtml(f[1]) || "-") + "</td></tr>";
    }).join("") + "</table>" +
    "<h3>Applicant Information</h3>" +
    '<table class="info-table">' + applicantFields.map(function (f) {
      return "<tr><th>" + f[0] + "</th><td>" + (escapeHtml(f[1]) || "-") + "</td></tr>";
    }).join("") + "</table>" +
    "<h3>Documents</h3><p>" + escapeHtml(docNames) + "</p>";
}

function handleApplicationSubmit(e) {
  if (e) e.preventDefault();
  var approvalId = getQueryParam("id");
  var approval = APPROVALS_DATA.filter(function (a) { return a.id === approvalId; })[0];
  var approvalName = approval ? approval.name : "Industrial Approval";
  var department = approval ? approval.department : "Concerned Department";

  var newId = generateApplicationId();
  var today = "05 Sep 2026";

  var application = {
    id: newId,
    approvalName: approvalName,
    department: department,
    submitted: today,
    status: "Application Submitted",
    currentDepartment: department,
    lastUpdated: today,
    expectedCompletion: "To be confirmed after document verification",
    timeline: [
      { title: "Application Submitted", date: today, state: "active" },
      { title: "Documents Verified", date: "Pending", state: "pending" },
      { title: "Department Review", date: "Pending", state: "pending" },
      { title: "Inspection", date: "Pending", state: "pending" },
      { title: "Final Approval", date: "Pending", state: "pending" }
    ]
  };

  saveSubmittedApplication(application);
  goToStep(5);

  var idDisplay = qs("#generatedApplicationId");
  if (idDisplay) idDisplay.textContent = newId;
  var trackLink = qs("#trackNewApplicationLink");
  if (trackLink) trackLink.href = "tracking.html?id=" + encodeURIComponent(newId);

  showToast("Application submitted successfully.", "success");
}

function initApplyPage() {
  var wizard = qs(".wizard-panel");
  if (!wizard) return;

  var approvalId = getQueryParam("id");
  var approval = APPROVALS_DATA.filter(function (a) { return a.id === approvalId; })[0];
  var nameEl = qs("#applyApprovalName");
  if (nameEl && approval) nameEl.textContent = approval.name;

  goToStep(1);

  qsa("[data-action='next-step']").forEach(function (btn) {
    btn.addEventListener("click", nextStep);
  });
  qsa("[data-action='prev-step']").forEach(function (btn) {
    btn.addEventListener("click", prevStep);
  });

  var form = qs("#applicationForm");
  if (form) {
    form.addEventListener("submit", handleApplicationSubmit);
  }

  qsa(".doc-upload-input").forEach(function (input) {
    input.addEventListener("change", function () {
      handleDocumentUpload(input, input.dataset.docKey, input.dataset.rowId);
    });
  });
}

/* =====================================================
   12. TRACKING PAGE
   ===================================================== */

function renderTimelineHtml(timeline) {
  return timeline.map(function (step) {
    var icon = step.state === "completed" ? "&#10003;" : (step.state === "active" ? "&#9679;" : "");
    return '<li class="timeline-item ' + step.state + '">' +
      '<div class="timeline-marker">' + icon + "</div>" +
      '<div class="timeline-content">' +
      '<div class="timeline-title">' + escapeHtml(step.title) + "</div>" +
      '<div class="timeline-date">' + escapeHtml(step.date) + "</div>" +
      "</div></li>";
  }).join("");
}

function trackApplication(id) {
  var resultBox = qs("#trackingResult");
  var emptyBox = qs("#trackingEmpty");
  if (!resultBox) return;

  var application = findApplicationById(id.trim());

  if (!application) {
    resultBox.style.display = "none";
    if (emptyBox) {
      emptyBox.style.display = "block";
      emptyBox.innerHTML = '<div class="empty-state"><div class="empty-icon">&mdash;</div>No application found for ID "' + escapeHtml(id) + '". Check the application ID and try again.</div>';
    }
    return;
  }

  if (emptyBox) emptyBox.style.display = "none";
  resultBox.style.display = "block";

  qs("#trackAppName").textContent = application.approvalName;
  qs("#trackAppId").textContent = application.id;
  qs("#trackAppDept").textContent = application.department;
  qs("#trackAppSubmitted").textContent = application.submitted;
  qs("#trackAppStatus").innerHTML = badgeHtml(application.status);
  qs("#trackLastUpdated").textContent = application.lastUpdated;
  qs("#trackExpectedCompletion").textContent = application.expectedCompletion;
  qs("#trackCurrentDept").textContent = application.currentDepartment;

  qs("#trackingTimeline").innerHTML = renderTimelineHtml(application.timeline);
}

function initTrackingPage() {
  var form = qs("#trackingForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = qs("#trackingIdInput");
    if (!input.value.trim()) {
      showToast("Enter an application ID to track.", "error");
      return;
    }
    trackApplication(input.value.trim());
  });

  var urlId = getQueryParam("id");
  if (urlId) {
    qs("#trackingIdInput").value = urlId;
    trackApplication(urlId);
  }
}

/* =====================================================
   13. COMPLIANCE PAGE
   ===================================================== */

function renderCompliance(filter) {
  var tbody = qs("#complianceTableBody");
  if (!tbody) return;

  var list = COMPLIANCE_DATA;
  if (filter && filter !== "all") {
    list = COMPLIANCE_DATA.filter(function (c) { return c.status.toLowerCase() === filter; });
  }

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state">No compliance items in this category.</div></td></tr>';
    return;
  }

  tbody.innerHTML = list.map(function (c) {
    var rowClass = "";
    var dueNote = "";
    if (c.status !== "Completed" && c.dueDateISO) {
      var days = daysUntil(c.dueDateISO);
      if (days < 0) {
        rowClass = "row-overdue";
        dueNote = '<span class="overdue-text">Overdue by ' + Math.abs(days) + (Math.abs(days) === 1 ? " day" : " days") + "</span>";
      } else if (days <= 5) {
        rowClass = "row-due-soon";
        dueNote = '<span class="due-soon-text">' + (days === 0 ? "Due today" : "Due in " + days + (days === 1 ? " day" : " days")) + "</span>";
      }
    }
    return '<tr class="' + rowClass + '">' +
      '<td class="cell-primary">' + escapeHtml(c.requirement) + "</td>" +
      "<td>" + escapeHtml(c.department) + "</td>" +
      '<td class="cell-muted">' + escapeHtml(c.dueDate) + dueNote + "</td>" +
      "<td>" + badgeHtml(c.status) + "</td>" +
      '<td><button class="btn btn-outline btn-sm" onclick="openComplianceModal(\'' + c.id + "')\">View Requirement</button></td>" +
      "</tr>";
  }).join("");
}

function openComplianceModal(id) {
  var item = COMPLIANCE_DATA.filter(function (c) { return c.id === id; })[0];
  if (!item) return;
  qs("#complianceModalTitle").textContent = item.requirement;
  qs("#complianceModalBody").innerHTML =
    '<table class="info-table">' +
    "<tr><th>Department</th><td>" + escapeHtml(item.department) + "</td></tr>" +
    "<tr><th>Due Date</th><td>" + escapeHtml(item.dueDate) + "</td></tr>" +
    "<tr><th>Status</th><td>" + badgeHtml(item.status) + "</td></tr>" +
    "</table>" +
    '<p class="text-muted text-sm" style="margin-top:14px;">Prototype data. In a production system this section would show the filing form or supporting document checklist for this requirement.</p>';
  openModal("complianceModal");
}

function initCompliancePage() {
  var tbody = qs("#complianceTableBody");
  if (!tbody) return;

  renderCompliance("all");

  qsa(".compliance-filter-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      qsa(".compliance-filter-tab").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      renderCompliance(tab.dataset.filter);
    });
  });

  var completed = COMPLIANCE_DATA.filter(function (c) { return c.status === "Completed"; }).length;
  var pending = COMPLIANCE_DATA.filter(function (c) { return c.status === "Pending"; }).length;
  var overdue = COMPLIANCE_DATA.filter(function (c) { return c.status === "Overdue"; }).length;
  var total = COMPLIANCE_DATA.length;
  var pct = Math.round((completed / total) * 100);

  if (qs("#complianceCompletedCount")) qs("#complianceCompletedCount").textContent = completed;
  if (qs("#compliancePendingCount")) qs("#compliancePendingCount").textContent = pending;
  if (qs("#complianceOverdueCount")) qs("#complianceOverdueCount").textContent = overdue;
  if (qs("#compliancePercentValue")) qs("#compliancePercentValue").textContent = pct + "%";
  var ring = qs("#complianceRing");
  if (ring) ring.style.setProperty("--pct", pct);
}

/* =====================================================
   14. SCHEMES PAGE
   ===================================================== */

function renderSchemes(category) {
  var grid = qs("#schemesGrid");
  if (!grid) return;

  var list = SCHEMES_DATA;
  if (category && category !== "all") {
    list = SCHEMES_DATA.filter(function (s) { return s.category === category; });
  }

  if (!list.length) {
    grid.innerHTML = '<div class="empty-state">No schemes found in this category.</div>';
    return;
  }

  grid.innerHTML = list.map(function (s) {
    var matchScore = s.matchScore || 60;
    return '<div class="scheme-card">' +
      "<h3>" + escapeHtml(s.name) + "</h3>" +
      '<div class="scheme-dept">' + escapeHtml(s.department) + "</div>" +
      '<div class="scheme-match">' +
      '<div class="scheme-match-label"><span>Eligibility Match</span><strong>' + matchScore + "% Match</strong></div>" +
      '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + matchScore + '%;"></div></div>' +
      "</div>" +
      "<dl>" +
      "<dt>Who It Is For</dt><dd>" + escapeHtml(s.targetGroup) + "</dd>" +
      "<dt>Potential Support</dt><dd>" + escapeHtml(s.benefit) + "</dd>" +
      "</dl>" +
      '<button class="btn btn-outline btn-sm" onclick="openSchemeModal(\'' + s.id + "')\">View Details</button>" +
      "</div>";
  }).join("");
}

function openSchemeModal(id) {
  var s = SCHEMES_DATA.filter(function (item) { return item.id === id; })[0];
  if (!s) return;
  qs("#schemeModalTitle").textContent = s.name;
  qs("#schemeModalBody").innerHTML =
    '<table class="info-table">' +
    "<tr><th>Department</th><td>" + escapeHtml(s.department) + "</td></tr>" +
    "<tr><th>Target Group</th><td>" + escapeHtml(s.targetGroup) + "</td></tr>" +
    "<tr><th>Benefit</th><td>" + escapeHtml(s.benefit) + "</td></tr>" +
    "<tr><th>Eligibility</th><td>" + escapeHtml(s.eligibility) + "</td></tr>" +
    "</table>" +
    '<p class="text-muted text-sm" style="margin-top:14px;">Illustrative scheme data shown for demonstration purposes only.</p>';
  openModal("schemeModal");
}

function checkEligibility(e) {
  if (e) e.preventDefault();
  var industryType = qs("#eligIndustryType").value;
  var businessType = qs("#eligBusinessType").value;
  var investment = qs("#eligInvestment").value;
  var employees = qs("#eligEmployees").value;
  var location = qs("#eligLocation").value;

  if (!industryType || !businessType || !investment || !employees || !location) {
    showToast("Please complete all fields to check eligibility.", "error");
    return;
  }

  var matched = 3;
  var additional = 1;
  var score = 82;

  if (businessType === "startup") { matched = 4; score = 88; }
  if (investment === "above-10cr") { additional = 2; score = 74; }

  qs("#eligScore").textContent = score + "%";
  if (qs("#eligScore2")) qs("#eligScore2").textContent = score + "%";
  qs("#eligMatched").textContent = matched;
  qs("#eligAdditional").textContent = additional;
  qs("#eligibilityResult").classList.add("show");
  qs("#eligibilityResult").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function initSchemesPage() {
  var grid = qs("#schemesGrid");
  if (grid) {
    renderSchemes("all");
    qsa(".scheme-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        qsa(".scheme-tab").forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        renderSchemes(tab.dataset.category);
      });
    });
  }

  var eligForm = qs("#eligibilityForm");
  if (eligForm) {
    eligForm.addEventListener("submit", checkEligibility);
  }
}

/* =====================================================
   15. NOTIFICATIONS PAGE
   ===================================================== */

var NOTIFICATION_CATEGORY_LABELS = {
  applications: "Application Update",
  compliance: "Compliance Alert",
  schemes: "Scheme Update"
};

function notificationItemHtml(n, isRead, showActions) {
  var category = n.category || "applications";
  var title = NOTIFICATION_CATEGORY_LABELS[category] || "Update";
  var icon = ICONS[category === "applications" ? "tracking" : (category === "compliance" ? "compliance" : "schemes")] || "";
  return '<li class="notification-item ' + (isRead ? "read" : "unread") + " " + category + '" data-id="' + n.id + '">' +
    '<div class="notif-icon-wrap">' +
    '<div class="notif-icon ' + category + '">' + icon + "</div>" +
    (isRead ? "" : '<span class="notif-unread-dot"></span>') +
    "</div>" +
    '<div class="notification-body">' +
    '<div class="notification-title text-sm" style="font-weight:700; margin-bottom:2px;">' + escapeHtml(title) + "</div>" +
    '<div class="notification-text">' + escapeHtml(n.text) + "</div>" +
    '<div class="notification-meta"><span>' + escapeHtml(n.date) + "</span></div>" +
    "</div>" +
    (showActions ? '<div class="notification-actions">' +
      (isRead ? "" : '<button class="btn btn-outline btn-sm" onclick="markNotificationRead(\'' + n.id + "')\">Mark as read</button>") +
      "</div>" : "") +
    "</li>";
}

function renderNotifications(filter) {
  var list = qs("#notificationsList");
  if (!list) return;

  var readIds = getReadNotificationIds();
  var items = NOTIFICATIONS_DATA;
  if (filter && filter !== "all") {
    items = NOTIFICATIONS_DATA.filter(function (n) { return n.category === filter; });
  }

  if (!items.length) {
    list.innerHTML = '<li><div class="empty-state">No notifications in this category.</div></li>';
    return;
  }

  list.innerHTML = items.map(function (n) {
    var isRead = readIds.indexOf(n.id) > -1;
    return notificationItemHtml(n, isRead, true);
  }).join("");
}

function markNotificationRead(id) {
  var readIds = getReadNotificationIds();
  if (readIds.indexOf(id) === -1) {
    readIds.push(id);
    setReadNotificationIds(readIds);
  }
  var activeTab = qs(".notification-tab.active");
  renderNotifications(activeTab ? activeTab.dataset.filter : "all");
  showToast("Notification marked as read.", "success");
}

function markAllNotificationsRead() {
  setReadNotificationIds(NOTIFICATIONS_DATA.map(function (n) { return n.id; }));
  var activeTab = qs(".notification-tab.active");
  renderNotifications(activeTab ? activeTab.dataset.filter : "all");
  showToast("All notifications marked as read.", "success");
}

function showNotification(text, category) {
  NOTIFICATIONS_DATA.unshift({ id: "NTF-" + Date.now(), category: category || "applications", text: text, date: "Just now" });
  renderNotifications("all");
}

function initNotificationsPage() {
  var list = qs("#notificationsList");
  if (!list) return;

  renderNotifications("all");

  qsa(".notification-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      qsa(".notification-tab").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      renderNotifications(tab.dataset.filter);
    });
  });

  var markAllBtn = qs("#markAllReadBtn");
  if (markAllBtn) markAllBtn.addEventListener("click", markAllNotificationsRead);
}

/* =====================================================
   16. ADMIN PANEL
   ===================================================== */

function renderAdminDashboard() {
  var usersBody = qs("#adminUsersBody");
  if (!usersBody) return;

  usersBody.innerHTML = ADMIN_USERS_DATA.map(function (u) {
    return "<tr>" +
      '<td class="cell-primary">' + escapeHtml(u.name) + "</td>" +
      "<td>" + escapeHtml(u.org) + "</td>" +
      '<td class="cell-muted">' + escapeHtml(u.email) + "</td>" +
      '<td class="cell-muted">' + escapeHtml(u.regDate) + "</td>" +
      "<td>" + badgeHtml(u.status) + "</td>" +
      '<td><button class="btn btn-outline btn-sm" onclick="showToast(\'Viewing profile for ' + escapeHtml(u.name) + '\')">View</button></td>' +
      "</tr>";
  }).join("");

  var approvalsBody = qs("#adminApprovalsBody");
  if (approvalsBody) {
    approvalsBody.innerHTML = APPROVALS_DATA.map(function (a, idx) {
      var appCount = 8 + (idx * 3) % 25;
      return "<tr>" +
        '<td class="cell-primary">' + escapeHtml(a.name) + "</td>" +
        "<td>" + escapeHtml(a.department) + "</td>" +
        "<td>" + appCount + "</td>" +
        '<td class="cell-muted">' + escapeHtml(a.processingTime) + "</td>" +
        "<td>" + badgeHtml("Active") + "</td>" +
        "</tr>";
    }).join("");
  }

  var schemesBody = qs("#adminSchemesBody");
  if (schemesBody) {
    schemesBody.innerHTML = SCHEMES_DATA.map(function (s) {
      return "<tr>" +
        '<td class="cell-primary">' + escapeHtml(s.name) + "</td>" +
        "<td>" + escapeHtml(s.department) + "</td>" +
        "<td>" + escapeHtml(s.targetGroup) + "</td>" +
        "<td>" + badgeHtml("Active") + "</td>" +
        '<td><button class="btn btn-outline btn-sm" onclick="showToast(\'Editing ' + escapeHtml(s.name) + '\')">Edit</button></td>' +
        "</tr>";
    }).join("");
  }

  var applicationsBody = qs("#adminApplicationsBody");
  if (applicationsBody) {
    var allApps = getSubmittedApplications().concat(BASE_APPLICATIONS);
    applicationsBody.innerHTML = allApps.map(function (a) {
      return "<tr>" +
        '<td class="cell-primary">' + escapeHtml(a.id) + "</td>" +
        "<td>" + escapeHtml(a.approvalName) + "</td>" +
        "<td>" + escapeHtml(a.department) + "</td>" +
        '<td class="cell-muted">' + escapeHtml(a.submitted) + "</td>" +
        "<td>" + badgeHtml(a.status) + "</td>" +
        "</tr>";
    }).join("");
  }

  var totalUsers = qs("#adminTotalUsers");
  var activeApps = qs("#adminActiveApplications");
  var pendingApprovals = qs("#adminPendingApprovals");
  var completedApps = qs("#adminCompletedApplications");
  var allAppsForStats = getSubmittedApplications().concat(BASE_APPLICATIONS);

  if (totalUsers) totalUsers.textContent = ADMIN_USERS_DATA.length;
  if (activeApps) activeApps.textContent = allAppsForStats.filter(function (a) { return a.status !== "Approved"; }).length;
  if (pendingApprovals) pendingApprovals.textContent = allAppsForStats.filter(function (a) { return a.status.toLowerCase().indexOf("pending") > -1 || a.status.toLowerCase().indexOf("review") > -1; }).length;
  if (completedApps) completedApps.textContent = allAppsForStats.filter(function (a) { return a.status === "Approved"; }).length;

  renderAdminAnalytics(allAppsForStats);
}

function renderAdminAnalytics(allApps) {
  var byStatus = {};
  allApps.forEach(function (a) {
    byStatus[a.status] = (byStatus[a.status] || 0) + 1;
  });

  var statusContainer = qs("#adminStatusBreakdown");
  if (statusContainer) {
    var total = allApps.length || 1;
    statusContainer.innerHTML = Object.keys(byStatus).map(function (status) {
      var pct = Math.round((byStatus[status] / total) * 100);
      var colorClass = statusBadgeInfo(status).cls === "badge-approved" ? "green"
        : statusBadgeInfo(status).cls === "badge-overdue" || statusBadgeInfo(status).cls === "badge-action" ? "red"
        : statusBadgeInfo(status).cls === "badge-pending" ? "orange" : "";
      return '<div class="progress-row">' +
        '<div class="progress-label">' + escapeHtml(status) + "</div>" +
        '<div class="progress-bar-track"><div class="progress-bar-fill ' + colorClass + '" style="width:' + pct + '%;"></div></div>' +
        '<div class="progress-value">' + pct + "%</div>" +
        "</div>";
    }).join("");
  }

  var complianceContainer = qs("#adminComplianceOverview");
  if (complianceContainer) {
    var completed = COMPLIANCE_DATA.filter(function (c) { return c.status === "Completed"; }).length;
    var pending = COMPLIANCE_DATA.filter(function (c) { return c.status === "Pending"; }).length;
    var overdue = COMPLIANCE_DATA.filter(function (c) { return c.status === "Overdue"; }).length;
    var total = COMPLIANCE_DATA.length;
    complianceContainer.innerHTML =
      '<div class="progress-row"><div class="progress-label">Completed</div><div class="progress-bar-track"><div class="progress-bar-fill green" style="width:' + Math.round(completed / total * 100) + '%;"></div></div><div class="progress-value">' + completed + "</div></div>" +
      '<div class="progress-row"><div class="progress-label">Pending</div><div class="progress-bar-track"><div class="progress-bar-fill orange" style="width:' + Math.round(pending / total * 100) + '%;"></div></div><div class="progress-value">' + pending + "</div></div>" +
      '<div class="progress-row"><div class="progress-label">Overdue</div><div class="progress-bar-track"><div class="progress-bar-fill red" style="width:' + Math.round(overdue / total * 100) + '%;"></div></div><div class="progress-value">' + overdue + "</div></div>";
  }

  var processingContainer = qs("#adminProcessingOverview");
  if (processingContainer) {
    processingContainer.innerHTML = APPROVALS_DATA.slice(0, 5).map(function (a) {
      var widthMap = { "Manufacturing": 70, "Food Processing": 55, "All Industries": 40 };
      var width = widthMap[a.industry] || 50;
      return '<div class="progress-row">' +
        '<div class="progress-label">' + escapeHtml(a.name) + "</div>" +
        '<div class="progress-bar-track"><div class="progress-bar-fill" style="width:' + width + '%;"></div></div>' +
        '<div class="progress-value">' + escapeHtml(a.processingTime.split("-")[0]) + "d+</div>" +
        "</div>";
    }).join("");
  }
}

/* =====================================================
   17. INIT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle();
  applyNavIcons();
  applyServiceIcons();
  initPublicNav();
  initAppSidebar();
  initModalDismiss();
  initPasswordToggles();
  initProfileMenu();
  initProfilePage();
  initButtonRipple();

  initLoginPage();
  initRegisterPage();
  initForgotPasswordPage();

  renderDashboardOverview();
  initApprovalsPage();
  renderApprovalDetails();
  initApplyPage();
  initTrackingPage();
  initCompliancePage();
  initSchemesPage();
  initNotificationsPage();
  renderAdminDashboard();
});

/* =====================================================
   18. SITE-WIDE INTERACTIVE EFFECTS & FLOATING CHATBOT
   ===================================================== */
function initMotionEffects() {
  document.body.classList.add("page-motion-ready");

  var selectors = "section, .card, .stat-card, .service-card, .feature-card, .dashboard-card, .approval-card, .scheme-card, .tracking-card, .table-card, .profile-form-card, .profile-summary-card";
  var items = qsa(selectors);
  items.forEach(function (item) { item.classList.add("motion-reveal"); });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(function (item) { observer.observe(item); });
  } else {
    items.forEach(function (item) { item.classList.add("motion-visible"); });
  }

  qsa(".btn, button, .nav-link, .sidebar-link, .icon-btn").forEach(function (el) {
    el.addEventListener("click", function () {
      el.classList.remove("btn-click-pop");
      void el.offsetWidth;
      el.classList.add("btn-click-pop");
    });
  });
}

function initFloatingChatbot() {
  var bot = qs(".support-bot-link");
  if (!bot || document.querySelector(".induserve-chat-panel")) return;

  var panel = document.createElement("div");
  panel.className = "induserve-chat-panel";
  panel.innerHTML =
    '<div class="chat-panel-head">' +
      '<div class="chat-panel-avatar">🤖</div>' +
      '<div class="chat-panel-title"><strong>InduServe Assistant</strong><span>Online • Ready to help</span></div>' +
      '<button class="chat-panel-close" aria-label="Close chat">×</button>' +
    '</div>' +
    '<div class="chat-panel-body">' +
      '<div class="chat-message">Hello! 👋 I can help you explore approvals, applications, schemes and compliance services.</div>' +
      '<div class="chat-message" id="chatDynamicReply">Choose a quick option or continue with our assistant.</div>' +
      '<div class="chat-quick-actions">' +
        '<button type="button" data-chat="approvals">Find approvals</button>' +
        '<button type="button" data-chat="application">Track application</button>' +
        '<button type="button" data-chat="schemes">Explore schemes</button>' +
      '</div>' +
      '<a class="chat-open-telegram" href="https://t.me/InduSure_bot" target="_blank" rel="noopener noreferrer">Open Full Assistant</a>' +
    '</div>';
  document.body.appendChild(panel);

  qs(".chat-panel-close", panel).addEventListener("click", function () { panel.classList.remove("open"); });
  qsa("[data-chat]", panel).forEach(function (button) {
    button.addEventListener("click", function () {
      var reply = qs("#chatDynamicReply", panel);
      var map = {
        approvals: "You can browse required approvals and licences based on your industry and location.",
        application: "Open the Tracking section to view your application status and recent updates.",
        schemes: "Explore government schemes and incentives that may match your organisation."
      };
      reply.textContent = map[button.dataset.chat] || "How can I help you today?";
      reply.classList.remove("user");
      reply.style.animation = "none";
      void reply.offsetWidth;
      reply.style.animation = "chatMessageIn .35s ease both";
    });
  });
}

/* Run after existing page initialization. */
document.addEventListener("DOMContentLoaded", function () {
  initMotionEffects();
  initFloatingChatbot();
});
