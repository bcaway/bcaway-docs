import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { Step } from "@/components/mdx/Step";
import { Callout } from "@/components/mdx/Callout";
import { ExternalLink } from "lucide-react";
import { TOCHeading } from "@/components/TableOfContents";

const headings: TOCHeading[] = [
  { id: "installation-steps", text: "Installation Steps", level: 2 },
  { id: "requirements", text: "Requirements", level: 2 },
  { id: "feedback", text: "Submitting Feedback", level: 2 },
  { id: "attendance-notice", text: "Attendance Notice", level: 2 },
];

export default function InstallBetaPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { title: "Get Started", href: "/" },
        { title: "Install BCAway Beta" },
      ]}
      title="Install BCAway Beta"
      description="Follow these steps to install the BCAway pre-release build on your iPhone or iPad using Apple TestFlight."
      readingTime="2 minutes to read"
      headings={headings}
      prevPage={{
        title: "Home",
        href: "/",
      }}
      nextPage={{
        title: "MDX Elements Showcase",
        href: "/test",
      }}
    >
      <div className="space-y-8">
        {/* Direct Action Link */}
        <div className="pt-1">
          <a
            href="https://testflight.apple.com/join/tAmRzzn3"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <span>Open TestFlight Invitation</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Installation Steps */}
        <section id="installation-steps" className="scroll-mt-20 space-y-4">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Installation Steps
            <a href="#installation-steps" className="heading-anchor">
              #
            </a>
          </h2>

          <Step number={1} title="Install Apple TestFlight">
            <p>
              Download Apple&apos;s free{" "}
              <a
                href="https://apps.apple.com/app/testflight/id899247664"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                TestFlight app from the App Store
              </a>{" "}
              on your iPhone or iPad.
            </p>
          </Step>

          <Step number={2} title="Join the Beta Program">
            <p>
              On the same device, open the public invitation link:
            </p>
            <div className="my-2 p-2.5 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-blue-600 select-all">
              https://testflight.apple.com/join/tAmRzzn3
            </div>
            <p>
              Tap <strong>Start Testing</strong>, then tap <strong>Accept</strong> and <strong>Install</strong> when TestFlight opens.
            </p>
          </Step>

          <Step number={3} title="Enable Notifications">
            <p>
              Open BCAway from your Home Screen. When prompted, tap <strong>Allow</strong> for notifications so you receive alerts when your scheduled teachers are absent.
            </p>
          </Step>
        </section>

        {/* Requirements */}
        <section id="requirements" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Requirements
            <a href="#requirements" className="heading-anchor">
              #
            </a>
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
            <li>An iPhone or iPad running <strong>iOS 15.1</strong> or later.</li>
            <li>A valid Apple ID signed into the App Store.</li>
            <li>TestFlight builds expire after 90 days; updates will download automatically through TestFlight.</li>
          </ul>
        </section>

        {/* Submitting Feedback */}
        <section id="feedback" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Submitting Feedback
            <a href="#feedback" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Take a screenshot anywhere in BCAway and tap <strong>Share Beta Feedback</strong> to submit logs, or email developer Kabir Sekhon directly at{" "}
            <a
              href="mailto:kabsek30@bergen.org?subject=BCAway%20Beta%20Feedback"
              className="text-blue-600 hover:underline font-medium"
            >
              kabsek30@bergen.org
            </a>
            .
          </p>
        </section>

        {/* Attendance Notice */}
        <section id="attendance-notice" className="scroll-mt-20">
          <Callout type="important" title="Attendance Responsibility">
            <p>
              Absence data is parsed from school notice bulletins and can be subject to delays or last-minute shifts. Students remain 100% personally responsible for following official school attendance guidelines.
            </p>
          </Callout>
        </section>
      </div>
    </DocLayout>
  );
}
