import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download, FileCode, Bell, Calendar, ShieldCheck } from "lucide-react";
import { DocLayout } from "@/components/DocLayout";
import { Callout } from "@/components/mdx/Callout";

export default function DocsHomePage() {
  return (
    <DocLayout isHome={true}>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-3 pt-2 pb-6 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            BCAway Documentation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Everything you need to install, configure, and test BCAway — the real-time teacher absence
            and bell schedule utility for students at Bergen County Academies.
          </p>
        </section>

        {/* Quickstart / Featured Cards (Expo Docs style) */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Get Started
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <Link
              href="/install-beta"
              className="p-5 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Download className="w-4 h-4 text-blue-600" />
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                    Quickstart
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Install BCAway Beta
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Fast step-by-step instructions to get TestFlight, join the public beta, and enable absent teacher push notifications.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                <span>Open installation guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/test"
              className="p-5 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileCode className="w-4 h-4 text-blue-600" />
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                    Reference
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  MDX Elements Showcase
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Interactive reference showcasing all documentation components: alert callouts, procedural steps, code blocks, tabs, and tables.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                <span>View component test suite</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Core Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 font-semibold text-sm text-gray-900 mb-1.5">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Live Absences</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Daily real-time updates for teacher absences, substitute assignments, and period coverage across all mods.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 font-semibold text-sm text-gray-900 mb-1.5">
                <Bell className="w-4 h-4 text-blue-600" />
                <span>Schedule Sync</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sync individual class timetables to display passing time countdowns and highlight free periods automatically.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 font-semibold text-sm text-gray-900 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Zero Profiling</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                No account credentials or passwords required. Fast local execution with zero tracking profiles.
              </p>
            </div>
          </div>
        </section>

        {/* Community & Resources */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Ecosystem & Resources
          </h2>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://testflight.apple.com/join/tAmRzzn3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 transition-colors"
            >
              <span>TestFlight Public Beta</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>

            <a
              href="https://app.bcaway.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 transition-colors"
            >
              <span>Launch Web Companion</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>

            <a
              href="https://bcaway.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 transition-colors"
            >
              <span>Official Website</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>

            <a
              href="https://github.com/bcaway"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          </div>

          <Callout type="note" title="Non-Affiliation Notice">
            <p>
              BCAway is an independent student utility developed by Kabir Sekhon and published by
              Savera Continental LTD. It is not affiliated with, authorized by, endorsed by, or
              sponsored by Bergen County Academies (BCA) or the Bergen County Technical School District.
            </p>
          </Callout>
        </section>
      </div>
    </DocLayout>
  );
}
