import { APPLY_URL, SLACK_URL } from "@/lib/content";

const product = [
  { href: "https://keploy.io", label: "Keploy" },
  { href: "https://keploy.io/docs", label: "Docs" },
  { href: "https://keploy.io/blog", label: "Blog" },
  { href: "https://github.com/keploy/keploy", label: "GitHub" },
];

const community = [
  { href: SLACK_URL, label: "Slack" },
  { href: "https://twitter.com/keployio", label: "Twitter" },
  { href: "https://www.youtube.com/@keploy", label: "YouTube" },
  { href: "https://www.linkedin.com/company/keploy", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-[#efe7e0]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold">Keploy Inc.</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#c9beb5]">
            Developer experience for end-to-end testing. Toolkit that creates test cases
            and data mocks from API calls, database queries, and related traffic.
          </p>
          <p className="mt-4 text-sm text-[#c9beb5]">
            850 New Burton Road, Suite 201, Dover, DE 19904, USA
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-[#c9beb5]">
            {product.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Community</p>
          <ul className="mt-3 space-y-2 text-sm text-[#c9beb5]">
            {community.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={APPLY_URL} target="_blank" rel="noreferrer">
                Apply to DevRel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-[#c9beb5]">
        Copyright {new Date().getFullYear()} Keploy Inc. All rights reserved.
      </div>
    </footer>
  );
}
