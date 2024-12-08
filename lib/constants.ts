import { SocialPlatform, Column } from "@/lib/types";

export const customerSupportTasks = [
  {
    id: "1",
    title: "Support Request",
    social: SocialPlatform.WhatsApp,
    userName: "Sigma Skibidi",
    contactInfo: { email: "static@example.com", phone: "000-000-0000" },
    interactionHistory: [],
    status: "Closed",
    notes: "Not happy with product X",
    urgency: "High",
    category: "customer_support",
    subcategory: "Complaint",
    timestamp: "2024-10-29T10:15:00Z",
  },
  {
    id: "12",
    title: "Delivery Issue",
    social: SocialPlatform.Email,
    userName: "Alice Brown",
    contactInfo: { email: "static@example.com", phone: "000-000-0000" },
    interactionHistory: [],
    status: "Open",
    notes: "Issue with product delivery",
    urgency: "High",
    category: "customer_support",
    subcategory: "Delivery Issue",
    timestamp: "2024-10-30T09:00:00Z",
  },
];

export const customerAcquisitionTasks = [
  {
    id: "2",
    title: "Customer Acquisition",
    social: SocialPlatform.Email,
    userName: "Jane Smith",
    contactInfo: { email: "static@example.com", phone: "000-000-0000" },
    interactionHistory: [],
    status: "Closed",
    notes: "Prefers competitor's product",
    urgency: "Low",
    category: "customer_acquisition",
    subcategory: "Competitor",
    timestamp: "2024-10-27T16:00:00Z",
  },
  {
    id: "21",
    title: "Product Demo Interest",
    social: SocialPlatform.WhatsApp,
    userName: "Liam Davis",
    contactInfo: { email: "static@example.com", phone: "000-000-0000" },
    interactionHistory: [],
    status: "Active",
    notes: "Interested in demo",
    urgency: "Medium",
    category: "customer_acquisition",
    subcategory: "Prospect",
    timestamp: "2024-10-29T12:45:00Z",
  },
];

export const otherTasks = [
  {
    id: "3",
    title: "Partnership Inquiry",
    social: SocialPlatform.FacebookMessenger,
    userName: "Michael Johnson",
    contactInfo: { email: "static@example.com", phone: "000-000-0000" },
    interactionHistory: [],
    status: "Active",
    notes: "Scheduled follow-up",
    urgency: "Mid",
    subcategory: "Demo",
    category: "customer_acquisition",
    timestamp: "2024-10-30T10:00:00Z",
  },
  {
    id: "31",
    title: "Warranty Inquiry",
    social: SocialPlatform.WhatsApp,
    userName: "Sarah Lee",
    contactInfo: { email: "static@example.com", phone: "000-000-0000" },
    interactionHistory: [],
    status: "Closed",
    notes: "Warranty information provided",
    urgency: "Low",
    category: "customer_acquisition",
    subcategory: "Support Inquiry",
    timestamp: "2024-10-26T09:15:00Z",
  },
];

export const columnsData: Column[] = [
  {
    id: "1",
    name: "Customer Support",
    icon: "Users",
    tasks: customerSupportTasks,
  },
  {
    id: "2",
    name: "Customer Acquisition",
    icon: "Handshake",
    tasks: customerAcquisitionTasks,
  },
  {
    id: "3",
    name: "Others",
    icon: "Box",
    tasks: otherTasks,
  },
];
