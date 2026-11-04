const skills = [
    {
        n: "Microsoft 365 & Exchange",
        s: "proficient",
        d: "Tenant setup, custom domain onboarding, license management, and Exchange Online mail flow.",
        t: ["M365 Admin Center", "Exchange Online", "Mailbox Provisioning"],
        p: "https://github.com/sothatthoeung/it-runbooks"
    },
    {
        n: "DNS & Domain Management",
        s: "proficient",
        d: "Managing DNS records, mail routing policies, and TLS/SSL settings without breaking existing services.",
        t: ["Cloudflare DNS", "MX / SPF / CNAME", "Custom Domains"],
        p: "https://github.com/sothatthoeung/it-runbooks"
    },
    {
        n: "IT Documentation & SOPs",
        s: "proficient",
        d: "Writing clear troubleshooting steps, root-cause notes, and repeatable setup guides.",
        t: ["Runbooks", "Root-Cause Analysis", "Markdown", "Git"],
        p: "https://github.com/sothatthoeung/it-runbooks"
    },
    {
        n: "Identity & Access Security",
        s: "learning",
        d: "Securing admin accounts, separating daily user roles from Global Admin, and enforcing MFA.",
        t: ["Entra ID", "Microsoft Authenticator", "Least Privilege", "DKIM/DMARC"],
        p: null
    },
    {
        n: "Operating Systems & Virtualization",
        s: "learning",
        d: "Installing, configuring, and troubleshooting Windows and Linux environments in a home lab.",
        t: ["Windows 10/11", "Ubuntu Server", "Proxmox VE", "Hardware Setup"],
        p: null
    },
    {
        n: "Networking & Firewalls",
        s: "learning",
        d: "Local network setup, IP addressing, port management, and host-level firewall rules.",
        t: ["TCP/IP", "DHCP / DNS", "UFW Firewall", "Troubleshooting"],
        p: null
    },
    {
        n: "Scripting & Automation",
        s: "planned",
        d: "Automating routine user administration and system checks instead of clicking through portals.",
        t: ["PowerShell", "Bash", "Python Basics"],
        p: null
    },
    {
        n: "Containers & Self-Hosting",
        s: "planned",
        d: "Running isolated lab services and monitoring tools using containers.",
        t: ["Docker", "Docker Compose", "Linux Services"],
        p: null
    }
];

const label = {proficient: "Proficient", learning: "Learning now", planned: "Planned"};
const grid = document.getElementById("skill-grid");

function render(f) {
    grid.innerHTML = skills.filter(k => f === "all" || k.s === f).map(k =>
        `<article class="skill" data-s="${k.s}"><span class="badge">${label[k.s]}</span><h3>${k.n}</h3><p>${k.d}</p>` +
        (k.t.length ? `<div class="tags">${k.t.join(" · ")}</div>` : "") +
        (k.p ? `<a class="proof" href="${k.p}" target="_blank" rel="noopener">See the evidence →</a>` : "") +
        `</article>`).join("");
}

document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
    render(b.dataset.f);
}));

render("all");