import React from "react";
import { DocLayout } from "@/components/DocLayout";
import { Step } from "@/components/mdx/Step";
import { Terminal } from "@/components/mdx/Terminal";
import { Callout } from "@/components/mdx/Callout";
import { Tabs } from "@/components/mdx/Tabs";
import { Collapsible } from "@/components/mdx/Collapsible";
import { TOCHeading } from "@/components/TableOfContents";

const headings: TOCHeading[] = [
  { id: "typography", text: "Typography & Headings", level: 2 },
  { id: "subsections-and-code", text: "Subsections & Inline Code", level: 3 },
  { id: "lists-and-blockquotes", text: "Lists & Blockquotes", level: 3 },
  { id: "alerts-and-callouts", text: "Alerts & Callouts", level: 2 },
  { id: "procedural-steps", text: "Procedural Steps", level: 2 },
  { id: "code-blocks", text: "Code Blocks & Terminal", level: 2 },
  { id: "tabbed-content", text: "Tabbed Content", level: 2 },
  { id: "collapsible-sections", text: "Collapsible Sections", level: 2 },
  { id: "data-tables", text: "Data Tables", level: 2 },
];

export default function TestPage() {
  return (
    <DocLayout
      breadcrumbs={[
        { title: "Testing & Elements", href: "/test" },
        { title: "MDX Elements Showcase" },
      ]}
      title="MDX Elements Showcase"
      description="Reference and test page showcasing standard typography, Microsoft Learn-style alerts, procedural steps, and layout components."
      readingTime="3 minutes to read"
      headings={headings}
      prevPage={{
        title: "Install BCAway Beta",
        href: "/install-beta",
      }}
      nextPage={{
        title: "Overview",
        href: "/",
      }}
    >
      <div className="space-y-8">
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
          imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>

        {/* Section 1: Typography */}
        <section id="typography" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Typography & Headings
            <a href="#typography" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          </p>

          <div id="subsections-and-code" className="scroll-mt-20 space-y-2 pt-1">
            <h3 className="text-base font-semibold text-gray-900">
              Subsections & Inline Code
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Inline code formatting uses a neutral monospace style:{" "}
              <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 text-xs font-mono">
                process.env.EXPO_PUBLIC_API_URL
              </code>
              . Standard text formatting includes <strong>bold text</strong>, <em>italic emphasis</em>,
              and tabular figures: <span className="tabular-nums font-mono text-xs">08:00 – 08:45 AM</span>.
            </p>
          </div>

          <div id="lists-and-blockquotes" className="scroll-mt-20 space-y-3 pt-1">
            <h3 className="text-base font-semibold text-gray-900">
              Lists & Blockquotes
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
              <li>Accusantium doloremque laudantium, totam rem aperiam</li>
              <li>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</li>
            </ul>

            <blockquote className="my-4 border-l-3 border-gray-300 pl-4 py-1 italic text-gray-600 text-sm">
              &ldquo;Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Section 2: Alerts & Callouts */}
        <section id="alerts-and-callouts" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Alerts & Callouts
            <a href="#alerts-and-callouts" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Standard Microsoft Docs-style alert callouts featuring a solid 4px left accent bar,
            subtle gray container, and bold title prefix:
          </p>

          <Callout type="note" title="Note">
            <p>
              This is a standard informational note highlighting supplementary context or best
              practices for developers.
            </p>
          </Callout>

          <Callout type="tip" title="Tip">
            <p>
              Pro tips provide recommended implementation patterns and productivity shortcuts.
            </p>
          </Callout>

          <Callout type="important" title="Important">
            <p>
              Important notices highlight critical configuration requirements and prerequisites
              that must not be skipped.
            </p>
          </Callout>

          <Callout type="caution" title="Caution">
            <p>
              Caution blocks inform readers about security consequences, data loss risks, or
              attendance policy enforcement.
            </p>
          </Callout>
        </section>

        {/* Section 3: Procedural Steps */}
        <section id="procedural-steps" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Procedural Steps
            <a href="#procedural-steps" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Numbered procedural steps designed for straightforward, uncluttered tutorial reading:
          </p>

          <Step number={1} title="Initialize the Project Workspace">
            <p>
              Clone the project repository and navigate into the root directory of the application:
            </p>
            <div className="p-2.5 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-800">
              git clone https://github.com/bcaway/bcaway-docs.git
            </div>
          </Step>

          <Step number={2} title="Install Dependencies and Configure Environment">
            <p>
              Install the necessary dependencies using your preferred package manager and ensure
              the local runtime matches the minimum version requirements.
            </p>
          </Step>

          <Step number={3} title="Run the Application">
            <p>
              Start the development server and verify the application output in your browser or
              device simulator.
            </p>
          </Step>
        </section>

        {/* Section 4: Code Blocks */}
        <section id="code-blocks" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Code Blocks & Terminal
            <a href="#code-blocks" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Code snippet blocks with multi-package manager tabs and one-click copy button:
          </p>

          <Terminal
            pkgCommand={{
              npm: "npx create-expo-app@latest my-bcaway-app",
              yarn: "yarn create expo-app my-bcaway-app",
              pnpm: "pnpm create expo-app my-bcaway-app",
              bun: "bun create expo-app my-bcaway-app",
            }}
          />

          <Terminal cmd="bun run build" title="Console" />
        </section>

        {/* Section 5: Tabbed Content */}
        <section id="tabbed-content" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Tabbed Content
            <a href="#tabbed-content" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tabbed containers for organizing platform-specific instructions without clutter:
          </p>

          <Tabs
            items={[
              {
                id: "ios-tab",
                label: "iOS",
                content: (
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Instructions specific to iOS devices. Push alerts and background synchronization
                    are handled via Apple Push Notification service (APNs).
                  </p>
                ),
              },
              {
                id: "macos-tab",
                label: "macOS",
                content: (
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Instructions for running the iPad application build on Apple Silicon Macs
                    using TestFlight for Mac.
                  </p>
                ),
              },
              {
                id: "web-tab",
                label: "Web",
                content: (
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Browser companion instructions accessible at app.bcaway.app with offline
                    service worker caching.
                  </p>
                ),
              },
            ]}
          />
        </section>

        {/* Section 6: Collapsible Sections */}
        <section id="collapsible-sections" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Collapsible Sections
            <a href="#collapsible-sections" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Accordions allow tucking away troubleshooting details and edge cases:
          </p>

          <Collapsible title="Troubleshooting: Notification Permission Declined" defaultOpen={true}>
            <p>
              If push notifications were accidentally declined during initial onboarding, navigate to
              <strong> Settings &gt; BCAway &gt; Notifications</strong> on your iOS device and toggle
              <strong> Allow Notifications</strong> on.
            </p>
          </Collapsible>
        </section>

        {/* Section 7: Data Tables */}
        <section id="data-tables" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
            Data Tables
            <a href="#data-tables" className="heading-anchor">
              #
            </a>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clean HTML tables with subtle border dividers and neutral headers:
          </p>

          <div className="border border-gray-200 rounded overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                <tr>
                  <th className="py-2.5 px-4">Feature</th>
                  <th className="py-2.5 px-4">Native iOS App</th>
                  <th className="py-2.5 px-4">Web Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">Push Notifications</td>
                  <td className="py-2.5 px-4 text-emerald-600 font-medium">Supported (APNs)</td>
                  <td className="py-2.5 px-4 text-gray-500">Manual Refresh</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">Bell Schedule Sync</td>
                  <td className="py-2.5 px-4 text-emerald-600 font-medium">Supported</td>
                  <td className="py-2.5 px-4 text-emerald-600 font-medium">Supported</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">Tactile Haptics</td>
                  <td className="py-2.5 px-4 text-emerald-600 font-medium">Supported</td>
                  <td className="py-2.5 px-4 text-gray-400">Not Applicable</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">Offline Caching</td>
                  <td className="py-2.5 px-4 text-emerald-600 font-medium">SQLite Database</td>
                  <td className="py-2.5 px-4 text-gray-500">Service Worker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}
