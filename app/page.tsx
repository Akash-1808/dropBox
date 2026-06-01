"use client";

import { Button } from "@heroui/button";
// import { Card, CardBody } from "@heroui/card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import {
  CloudUpload,
  Shield,
  Folder,
  ArrowRight,
  GripVertical,
  Image as ImageIcon,
  Share2,
  RefreshCw,
  Zap,
  Monitor,
  Check,
  ChevronDown,
  Lock,
  Users,
  Clock,
  Star,
} from "lucide-react";
import Navbar from "@/components/NavBar";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ── Scroll-reveal wrapper ─────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Feature data ──────────────────────────────────── */
const features = [
  {
    icon: Shield,
    title: "Secure Upload",
    desc: "End-to-end encrypted tunnels for every single file transfer you make.",
  },
  {
    icon: GripVertical,
    title: "Drag & Drop",
    desc: "Seamless file organization with intuitive workspace interactions.",
  },
  {
    icon: ImageIcon,
    title: "Image Preview",
    desc: "Instant, high-fidelity previews for over 100+ file formats without downloading.",
  },
  {
    icon: Folder,
    title: "Folder Management",
    desc: "Smart tagging and automated sorting to keep your assets organized.",
  },
  {
    icon: Share2,
    title: "Link Sharing",
    desc: "Generate password-protected links with expiration dates in one click.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    desc: "Changes reflect across all devices instantly with differential syncing.",
  },
  {
    icon: Zap,
    title: "Fast Storage",
    desc: "NVMe-backed infrastructure ensures zero-latency access to your data.",
  },
  {
    icon: Monitor,
    title: "Multi-device",
    desc: "Desktop, Mobile, or Web. Your files are always within reach.",
  },
];

/* ── FAQ data ──────────────────────────────────────── */
const faqs = [
  {
    q: "How secure is my data on DropBox?",
    a: "Every file is encrypted with AES-256 both at rest and in transit. We use zero-knowledge architecture, meaning only you hold the keys to your files.",
  },
  {
    q: "Can I share files with non-users?",
    a: "Yes! You can generate public sharing links that anyone can access. You can also set passwords and expiration dates for extra security.",
  },
  {
    q: "Is there a file size limit?",
    a: "Free users can upload files up to 2GB. Pro and Enterprise users have no file size limits, supported by our multi-part upload technology.",
  },
];

/* ── FAQ Item ──────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.4)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="p-5 w-full flex justify-between items-center cursor-pointer text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors"
      >
        {q}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 text-blue-500 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <div className="px-5 pb-5 text-sm text-blue-600/80">{a}</div>
      </div>
    </div>
  );
}

/* ── Main Page ─────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* ─── Navbar ─────────────────────────────── */}
      <Navbar />

      {/* ─── Hero ───────────────────────────────── */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(-45deg, #faf8ff, #eaedff, #f2f3ff, #e2e7ff)",
            backgroundSize: "400% 400%",
            animation: "gradientBG 15s ease infinite",
          }}
        />
        {/* Floating blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500/15 rounded-full mix-blend-multiply blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />

        <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <Reveal>
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight text-blue-950">
                Store, Share & Access Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Files Anywhere
                </span>
              </h1>
              <p className="text-lg text-blue-700/70 max-w-lg leading-relaxed">
                The world&apos;s most secure cloud infrastructure for teams.
                Effortlessly collaborate, share heavy assets, and keep your
                digital life in sync with enterprise-grade encryption.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <SignedOut>
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
                      endContent={<ArrowRight className="h-4 w-4" />}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      size="lg"
                      className="font-semibold px-8 rounded-2xl border border-blue-200/60 hover:-translate-y-0.5 transition-all"
                      style={{
                        background: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(12px)",
                      }}
                      startContent={<CloudUpload className="h-4 w-4" />}
                    >
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
                      endContent={<ArrowRight className="h-4 w-4" />}
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                </SignedIn>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 pt-2 text-blue-600/60">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm">Trusted by 10k+ teams worldwide</span>
              </div>
            </div>
          </Reveal>

          {/* Right – floating dashboard mockup */}
          <Reveal delay={0.3} className="relative hidden md:block">
            <div
              className="p-5 rounded-3xl shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.5)",
                animation: "floating 6s ease-in-out infinite",
              }}
            >
              {/* Mock browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div
                  className="ml-3 flex-1 rounded-full px-4 py-1.5 text-xs text-blue-400"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  cloud.dropbox.app/dashboard
                </div>
              </div>
              {/* Mock files */}
              <div className="space-y-3">
                {[
                  { name: "Q3_Strategy.pdf", type: "PDF", size: "4.2 MB", color: "text-blue-500" },
                  { name: "Hero_Banner.png", type: "Image", size: "12.8 MB", color: "text-orange-400" },
                  { name: "Team_Video.mp4", type: "Video", size: "1.2 GB", color: "text-purple-400" },
                ].map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <CloudUpload className={`h-5 w-5 ${file.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-blue-900">
                        {file.name}
                      </span>
                    </div>
                    <span className="text-xs text-blue-400">{file.size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-4 p-3 rounded-2xl shadow-xl"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 text-green-600 rounded-lg">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-900">File Synced</p>
                  <p className="text-[10px] text-blue-400">2 mins ago</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </header>

      {/* ─── Features Bento Grid ────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3 tracking-tight">
              Everything you need to scale
            </h2>
            <p className="text-blue-600/60 max-w-2xl mx-auto">
              One platform, limitless possibilities. We&apos;ve built the tools
              to help you manage your files with precision.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div
                className="p-6 rounded-3xl group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 h-full"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 text-blue-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-blue-950 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-blue-600/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Product Dashboard Preview ──────────── */}
      <section className="py-20 bg-blue-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal className="lg:w-1/3 space-y-5">
              <span className="inline-block bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                Product Insights
              </span>
              <h2 className="text-3xl font-bold text-blue-950 tracking-tight">
                Control every byte of your data.
              </h2>
              <p className="text-blue-600/60 leading-relaxed">
                Monitor storage health, track recent activity, and manage
                permissions from a centralized dashboard.
              </p>

              {/* Storage bar */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">
                    Total Storage
                  </span>
                  <span className="text-sm font-bold text-blue-600">78%</span>
                </div>
                <div className="w-full bg-blue-200/30 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                      boxShadow: "0 0 8px rgba(37,99,235,0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Sync status */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">
                    Sync Status
                  </span>
                  <span className="text-sm font-bold text-green-600">Live</span>
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-full bg-green-500 h-1 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 75}ms` }}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Dashboard mock */}
            <Reveal delay={0.2} className="lg:w-2/3">
              <div
                className="p-6 rounded-3xl shadow-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.45)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div
                    className="px-4 py-1.5 rounded-full text-xs text-blue-400"
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    🔍 Find files...
                  </div>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-blue-200/30 text-xs text-blue-400 uppercase tracking-wider">
                      <th className="pb-4">Name</th>
                      <th className="pb-4">Type</th>
                      <th className="pb-4">Size</th>
                      <th className="pb-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100/30">
                    {[
                      { name: "Q3_Marketing_Strategy.pdf", type: "PDF Document", size: "4.2 MB", icon: CloudUpload, iconColor: "text-blue-500" },
                      { name: "Project_Hero_Banner.png", type: "Image", size: "12.8 MB", icon: ImageIcon, iconColor: "text-orange-400" },
                      { name: "Team_Offsite_Video.mp4", type: "Video", size: "1.2 GB", icon: Monitor, iconColor: "text-purple-400" },
                    ].map((row) => (
                      <tr
                        key={row.name}
                        className="group hover:bg-blue-50/50 transition-colors cursor-pointer"
                      >
                        <td className="py-4 flex items-center gap-3">
                          <row.icon
                            className={`h-5 w-5 ${row.iconColor} group-hover:scale-110 transition-transform`}
                          />
                          <span className="text-sm font-medium text-blue-900">
                            {row.name}
                          </span>
                        </td>
                        <td className="py-4 text-sm text-blue-500/60">
                          {row.type}
                        </td>
                        <td className="py-4 text-sm text-blue-500/60">
                          {row.size}
                        </td>
                        <td className="py-4 text-right">
                          <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                            <Check className="h-3 w-3" /> Synced
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us / Stats ──────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Stats grid */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "99.9%", label: "Uptime", icon: Clock },
                { value: "256-bit", label: "Encryption", icon: Lock },
                { value: "10TB", label: "Free Storage", icon: CloudUpload },
                { value: "50M+", label: "Active Users", icon: Users },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 rounded-2xl text-center hover:scale-105 transition-transform ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-4" : ""}`}
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.4)",
                  }}
                >
                  <s.icon className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="text-xs text-blue-500/60 mt-1 font-medium uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Checkpoints */}
          <Reveal delay={0.15}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-950 tracking-tight">
                Why industry leaders choose DropBox.
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: "End-to-end encryption",
                    desc: "Your data is yours. Even we can't see it.",
                  },
                  {
                    title: "Lightning fast global edge",
                    desc: "Download and upload from anywhere with zero friction.",
                  },
                  {
                    title: "Secure team backup",
                    desc: "Automatic snapshots for every version of every file.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4 group">
                    <div className="bg-blue-500/10 p-1.5 rounded-full text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">
                        {item.title}
                      </p>
                      <p className="text-sm text-blue-500/60">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Pricing ────────────────────────────── */}
      <section className="py-20 bg-blue-50/30">
        <Reveal>
          <div className="max-w-7xl mx-auto px-5 md:px-10 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-blue-600/60 mt-3">
              Choose the plan that fits your storage needs.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-3 gap-6 items-center">
          {/* Starter */}
          <Reveal>
            <div
              className="p-8 rounded-3xl hover:shadow-xl transition-all duration-300 h-full"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <p className="text-xs text-blue-500 uppercase tracking-wider font-semibold mb-2">
                Starter
              </p>
              <p className="text-4xl font-bold text-blue-950">
                $0
                <span className="text-sm text-blue-400 font-normal">/mo</span>
              </p>
              <p className="text-sm text-blue-500/60 mt-4 mb-8">
                Perfect for personal use and small projects.
              </p>
              <ul className="space-y-3 mb-8">
                {["10GB Storage", "3 Shared Links", "Mobile App Access"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-900">
                      <Check className="h-4 w-4 text-green-500" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <SignedOut>
                <Link href="/sign-up" className="block">
                  <Button className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-600 bg-transparent font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                    Get Started
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" className="block">
                  <Button className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-600 bg-transparent font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all">
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </Reveal>

          {/* Pro – featured */}
          <Reveal delay={0.1}>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-xl shadow-blue-500/20 md:scale-105 relative z-10 text-white hover:shadow-2xl transition-all duration-300 h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-bold shadow-md">
                MOST POPULAR
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">
                Pro
              </p>
              <p className="text-4xl font-bold">
                $12
                <span className="text-sm opacity-80 font-normal">/mo</span>
              </p>
              <p className="text-sm opacity-80 mt-4 mb-8">
                Everything you need for advanced productivity.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "2TB Storage",
                  "Unlimited Sharing",
                  "Password Protected Links",
                  "30-day History",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <SignedOut>
                <Link href="/sign-up" className="block">
                  <Button className="w-full py-3 rounded-xl bg-white text-blue-600 font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all">
                    Go Pro
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" className="block">
                  <Button className="w-full py-3 rounded-xl bg-white text-blue-600 font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all">
                    Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </Reveal>

          {/* Enterprise */}
          <Reveal delay={0.2}>
            <div
              className="p-8 rounded-3xl hover:shadow-xl transition-all duration-300 h-full"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <p className="text-xs text-blue-500 uppercase tracking-wider font-semibold mb-2">
                Enterprise
              </p>
              <p className="text-4xl font-bold text-blue-950">Custom</p>
              <p className="text-sm text-blue-500/60 mt-4 mb-8">
                Scalable infrastructure for large organizations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited Storage",
                  "Advanced SSO/SAML",
                  "Dedicated Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-blue-900">
                    <Check className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-600 bg-transparent font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Contact Sales
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-5 md:px-10 overflow-hidden">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-12 tracking-tight">
            What builders are saying
          </h2>
        </Reveal>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x lg:justify-center">
          {[
            {
              quote:
                "The fastest sync engine I've ever used. DropBox is a game changer for our dev team.",
              name: "Alex River",
              role: "CTO @ TechFlow",
            },
            {
              quote:
                "Finally a cloud storage that doesn't feel like it was built in 2005. Stunning UI.",
              name: "Sarah Jenkins",
              role: "Design Lead @ PixelSync",
            },
            {
              quote:
                "The encryption and security features give me total peace of mind for my clients.",
              name: "David Chen",
              role: "Founder @ SecureWorks",
            },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className="p-6 rounded-2xl min-w-[300px] max-w-[300px] flex-shrink-0 snap-center hover:shadow-xl transition-all"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm italic text-blue-700/70 mb-5 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-blue-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────── */}
      <section className="py-20 max-w-3xl mx-auto px-5">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-10 tracking-tight">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.08}>
              <FAQItem {...faq} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Final CTA Banner ───────────────────── */}
      <section className="py-20 px-5">
        <Reveal>
          <div
            className="max-w-7xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden group"
            style={{
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(59,130,246,0.15)",
            }}
          >
            {/* Glow blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 relative z-10 tracking-tight">
              Start Uploading Smarter Today
            </h2>
            <p className="text-lg text-blue-600/60 mb-8 max-w-xl mx-auto relative z-10">
              Join over 1 million users who trust DropBox for their secure
              storage needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <SignedOut>
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
                    endContent={<ArrowRight className="h-4 w-4" />}
                  >
                    Create Free Account
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
                    endContent={<ArrowRight className="h-4 w-4" />}
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Footer ──────────────────────────────── */}
      <footer className="bg-white/50 border-t border-blue-100/50 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <CloudUpload className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DropBox
              </span>
            </div>
            <p className="text-sm text-blue-500/60">
              Secure, reliable, and incredibly fast cloud infrastructure for the
              modern era.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-4">Product</p>
            <ul className="space-y-2 text-sm text-blue-500/60">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">API Docs</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-4">Company</p>
            <ul className="space-y-2 text-sm text-blue-500/60">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-blue-500/60">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-4">Status</p>
            <div className="flex items-center gap-2 text-sm text-blue-500/60">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-10 mt-12 pt-6 border-t border-blue-100/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-400">
            &copy; {new Date().getFullYear()} DropBox. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ─── Global keyframe styles ──────────────── */}
      <style jsx global>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0.5deg); }
          50% { transform: translateY(-12px) rotate(0deg); }
          100% { transform: translateY(0px) rotate(0.5deg); }
        }
      `}</style>
    </div>
  );
}