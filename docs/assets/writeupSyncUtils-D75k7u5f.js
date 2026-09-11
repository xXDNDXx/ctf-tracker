import{G as V,e as D}from"./index-Dbh2sK8X.js";function C(e,o,t=""){const r=o.toLowerCase(),n=t.toLowerCase(),s=[];let c;return r.includes("ftp")||e===21?(s.push("ftp","hydra","nmap --script ftp-anon,ftp-vuln*"),n.includes("2.3.4")?c="CVE-2011-2523 (vsftpd Backdoor RCE)":n.includes("proftpd 1.3.5")&&(c="CVE-2015-3306 (mod_copy File Copy)")):r.includes("ssh")||e===22?(s.push("ssh","ssh-audit","hydra"),n.includes("libssh 0.6")&&(c="CVE-2018-10933 (Authentication Bypass)")):r.includes("http")||e===80||e===443||e===8080||e===8443?(s.push("ffuf","gobuster","whatweb","nikto","feroxbuster"),n.includes("2.4.49")?c="CVE-2021-41773 (Apache Path Traversal/RCE)":n.includes("2.4.50")?c="CVE-2021-42013 (Apache RCE Bypass)":n.includes("tomcat")&&n.includes("9.0.30")&&(c="CVE-2020-1938 (Ghostcat)")):r.includes("smb")||r.includes("microsoft-ds")||r.includes("netbios")||e===445||e===139?(s.push("crackmapexec smb","netexec smb","enum4linux-ng","smbclient -L","smbmap"),n.includes("3.0.20")?c="CVE-2007-2447 (Samba usermap script RCE)":n.includes("samba")?c="Samba Null Session / Share Enumeration":c="MS17-010 (EternalBlue) / Signing Check"):r.includes("kerberos")||e===88?(s.push("kerbrute userenum","GetNPUsers.py (AS-REP)","GetUserSPNs.py (Kerberoast)"),c="Active Directory Kerberos KDC"):r.includes("ldap")||e===389||e===636||e===3268?(s.push("ldapsearch -x","bloodhound-python","netexec ldap"),c="Active Directory Domain Controller LDAP"):r.includes("dns")||r.includes("domain")||e===53?s.push("dig axfr","dnsrecon"):r.includes("mysql")||e===3306?s.push("mysql -h <IP> -u root -p","sqlmap"):r.includes("mssql")||r.includes("ms-sql")||e===1433?(s.push("crackmapexec mssql","mssqlclient.py"),c="xp_cmdshell Execution / Linked Database Abuse"):r.includes("winrm")||e===5985||e===5986?s.push("evil-winrm -i <IP> -u <USER> -p <PASS>"):r.includes("rdp")||e===3389?(s.push("xfreerdp /v:<IP> /u:<USER>","rdesktop"),(n.includes("5.1")||n.includes("6.0"))&&(c="CVE-2019-0708 (BlueKeep)")):r.includes("snmp")||e===161?s.push("snmpwalk -v2c -c public","onesixtyone"):r.includes("redis")||e===6379?s.push("redis-cli -h <IP>","redis-rogue-server"):s.push("nc -nv","nmap -sC -sV"),{tools:s,cve:c}}const N=e=>!isNaN(e)&&e>=1&&e<=65535;function L(e){try{if(typeof window>"u"||typeof DOMParser>"u")return null;const o=e.toUpperCase();if(o.includes("<!ENTITY")||o.includes("<!DOCTYPE")&&(o.includes("SYSTEM")||o.includes("PUBLIC"))&&o.includes("["))return console.warn("[Security] Nmap XML import rejected: suspicious custom entity or external DTD declaration detected"),null;const t=e.replace(/<!DOCTYPE\s+nmaprun[^>]*>/i,""),n=new DOMParser().parseFromString(t,"text/xml");if(n.querySelector("parsererror")||!n.querySelector("nmaprun"))return null;let i,a,l;const u=[],p=Array.from(n.querySelectorAll("host")),d=p.find(h=>h.querySelector('ports > port > state[state="open"]'))||p[0];if(d){const h=d.querySelector('address[addrtype="ipv4"]')||d.querySelector("address");h&&(i=h.getAttribute("addr")||void 0);const f=d.querySelector("hostname");f&&(a=f.getAttribute("name")||void 0);const g=d.querySelector("osmatch");g&&(l=g.getAttribute("name")||void 0),d.querySelectorAll("ports > port").forEach(S=>{const v=S.querySelector("state");if(((v==null?void 0:v.getAttribute("state"))||"closed")!=="open")return;const $=parseInt(S.getAttribute("portid")||"0",10);if(!N($))return;const y=(S.getAttribute("protocol")||"tcp").toLowerCase(),m=S.querySelector("service"),w=((m==null?void 0:m.getAttribute("name"))||"unknown").toLowerCase(),x=(m==null?void 0:m.getAttribute("product"))||"",E=(m==null?void 0:m.getAttribute("version"))||"",I=(m==null?void 0:m.getAttribute("extrainfo"))||"",b=[x,E,I].filter(Boolean).join(" ")||"Unknown Version",{tools:T,cve:k}=C($,w,b);u.push({port:$,protocol:y,state:"open",service:w,version:b,suggestedTools:T,cveNotes:k})})}return u.length===0&&!i?null:{format:"nmap-xml",detectedIp:i,detectedHost:a,detectedOs:l,ports:u,rawSummary:`Nmap XML scan parsed with ${u.length} open ports discovered.`}}catch{return null}}function O(e){var s,c,i;if(!e.includes("Ports:")&&!e.includes("# Nmap"))return null;const o=e.split(`
`);let t,r;const n=[];for(const a of o)if(a.startsWith("Host:")){const l=a.match(/^Host:\s*([0-9]{1,3}(?:\.[0-9]{1,3}){3}|[a-fA-F0-9:]{3,39})\s*(?:\(([^)]*)\))?/);l&&(t=l[1],l[2]&&(r=l[2]));const u=a.split("Ports:")[1];if(u){const d=u.split("	")[0].split(",");for(const h of d){const f=h.trim().split("/");if(f.length>=5){const g=parseInt(f[0],10),P=(s=f[1])==null?void 0:s.toLowerCase(),S=((c=f[2])==null?void 0:c.toLowerCase())||"tcp",v=((i=f[4])==null?void 0:i.toLowerCase())||"unknown",$=(f.length>6?f.slice(6).join("/"):f[5]||"Unknown Version").trim()||"Unknown Version";if((P==="open"||P==="open|filtered")&&N(g)){const{tools:y,cve:m}=C(g,v,$);n.push({port:g,protocol:S,state:"open",service:v,version:$,suggestedTools:y,cveNotes:m})}}}}}return n.length===0&&!t?null:{format:"gnmap",detectedIp:t,detectedHost:r,ports:n,rawSummary:`Grepable Nmap scan parsed with ${n.length} open ports.`}}function q(e){if(!(e.toLowerCase().includes("rustscan")||e.includes("Open ")||e.includes("[~] Starting Script(s)")))return null;let t;const r=[],n=/Open\s+([0-9]{1,3}(?:\.[0-9]{1,3}){3}|(?:\[[a-fA-F0-9:]+\]|[a-fA-F0-9:]+)):([0-9]{1,5})/gi;let s;for(;(s=n.exec(e))!==null;){t||(t=s[1].replace(/[[\]]/g,""));const u=parseInt(s[2],10);N(u)&&r.push(u)}const c=e.match(/\[([0-9,\s]+)\]/);if(c&&r.length===0){const u=c[1].split(",").map(p=>parseInt(p.trim(),10)).filter(p=>N(p));r.push(...u)}const i=R(e);if(i&&i.ports.length>0)return{format:"rustscan",detectedIp:t||i.detectedIp,detectedHost:i.detectedHost,detectedOs:i.detectedOs,ports:i.ports,rawSummary:`Rustscan parsed: ${i.ports.length} open ports detected.`};if(r.length===0)return null;const l=Array.from(new Set(r)).sort((u,p)=>u-p).map(u=>{const{tools:p,cve:d}=C(u,"unknown","Unknown");return{port:u,protocol:"tcp",state:"open",service:"unknown",version:"Unknown",suggestedTools:p,cveNotes:d}});return{format:"rustscan",detectedIp:t,ports:l,rawSummary:`Rustscan parsed: ${l.length} open ports detected on target.`}}function R(e){if(!e.includes("Nmap scan report")&&!e.includes("PORT")&&!e.includes("STATE"))return null;const o=e.match(/Nmap scan report for (?:[^\s(]+\s\()?([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}|[a-fA-F0-9:]{3,39})/),t=e.match(/Nmap scan report for ([^\s(]+)/),r=e.match(/Service Info:[^\n\r]*?\bOSs?:\s*([^;\n\r]+)/i),n=/([0-9]{1,5})\/(tcp|udp)\s+(open(?:\|filtered)?)\s+([^\s]+)\s*([^\r\n]*)/gi,s=[];let c;for(;(c=n.exec(e))!==null;){const i=parseInt(c[1],10);if(!N(i))continue;const a=c[2].toLowerCase(),l=c[4].toLowerCase(),u=c[5].trim()||"Unknown Version",{tools:p,cve:d}=C(i,l,u);s.push({port:i,protocol:a,state:"open",service:l,version:u,suggestedTools:p,cveNotes:d})}return s.length===0&&!o?null:{format:"nmap-text",detectedIp:o?o[1]:void 0,detectedHost:t?t[1]:void 0,detectedOs:r?r[1].trim():void 0,ports:s,rawSummary:`Standard Nmap scan report: ${s.length} open ports identified.`}}function z(e){const o=e.trim();if(!o)return null;if(o.startsWith("<?xml")||o.includes("<nmaprun")||o.includes("<host>")){const a=L(o);if(a)return a}if(o.includes("Ports:")&&(o.includes("# Nmap")||o.includes("Host:"))){const a=O(o);if(a)return a}if(o.toLowerCase().includes("rustscan")||o.includes("Open ")&&o.includes(":")){const a=q(o);if(a)return a}const t=R(o);if(t)return t;if(o.includes("```")||/(?:^|\n)#{1,6}\s+/m.test(o)||o.split(/\s+/).filter(a=>/^[a-zA-Z]{3,}/.test(a)).length>10)return null;const n=o.match(/\b([0-9]{1,3}(?:\.[0-9]{1,3}){3})\b/),s=n?n[1]:void 0,i=o.replace(/\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g," ").replace(/\b[0-9a-fA-F]{1,4}(?::[0-9a-fA-F]{1,4}){1,7}\b/g," ").match(new RegExp("(?<![.\\w])([0-9]{1,5})(?![.\\w])","g"));if(i&&i.length>0){const a=Array.from(new Set(i.map(l=>parseInt(l,10)).filter(l=>l>0&&l<=65535))).sort((l,u)=>l-u);if(a.length>0){const l=a.map(u=>{const{tools:p,cve:d}=C(u,"tcp");return{port:u,protocol:"tcp",state:"open",service:"service",version:"Raw port intake",suggestedTools:p,cveNotes:d}});return{format:"raw-ports",detectedIp:s,ports:l,rawSummary:`Manual port intake: ${l.length} ports extracted${s?` for ${s}`:""}.`}}}return null}function M(e,o){const t=e.format.toUpperCase(),r=new Date().toLocaleTimeString(),n=[`### ⚡ Discovered Services & Open Ports [${t}] (Imported ${r})`,`- **Target IP / Host:** \`${e.detectedIp||o}\``];return e.detectedOs&&n.push(`- **Detected OS:** ${e.detectedOs}`),n.push(""),e.ports.length>0?(n.push("| Port | Protocol | State | Service | Version | Suggested Tools | CVE Notes |"),n.push("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |"),e.ports.forEach(s=>{const c=s.suggestedTools&&s.suggestedTools.length>0?`\`${s.suggestedTools.slice(0,3).join(", ")}\``:"-",i=s.cveNotes?`🚨 ${s.cveNotes}`:"-";n.push(`| **${s.port}** | ${s.protocol} | ${s.state} | ${s.service.toUpperCase()} | ${s.version||"-"} | ${c} | ${i} |`)}),n.push(""),n.push("#### Service Summary:"),e.ports.forEach(s=>{n.push(`- **Port ${s.port}/${s.protocol}:** ${s.state.toUpperCase()} — ${s.service.toUpperCase()} ${s.version?`(${s.version})`:""}${s.cveNotes?` ➔ 🚨 *${s.cveNotes}*`:""}`)})):n.push("*No open ports were detected in this imported scan.*"),n.join(`
`)}function U(e){if(!e||e.length===0)return"";const o=["### 🔑 Compromised Credentials & Loot Vault","| Username | Secret / Hash | Type | Service | Domain | Privileged | Notes |","| :--- | :--- | :--- | :--- | :--- | :--- | :--- |"],t=r=>(r||"-").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ").trim();return e.forEach(r=>{const n=r.isPrivileged?"Yes 👑":"No",s=t(r.domain),c=t(r.service?r.service.toUpperCase():"ANY"),i=t(r.notes),a=t(r.username),l=t(r.secret),u=l.length>40?`\`${l.slice(0,37)}...\``:`\`${l}\``;o.push(`| **${a}** | ${u} | ${r.type.toUpperCase()} | ${c} | ${s} | ${n} | ${i} |`)}),o.join(`
`)}function F(e){if(!e||e.length===0)return"";const o=["### 🛡️ Associated CVE Intelligence"];return e.forEach(t=>{o.push(`- **[${t}](${V(t)})**: Vulnerability details on NIST NVD`)}),o.join(`
`)}function j(e,o,t){const r=M(o,t.ip);if(!e||!e.trim())return`# ${t.name} — Writeup & Penetration Testing Report
**Target IP:** \`${t.ip}\` | **OS:** ${t.os} | **Platform:** ${t.platform}

---

## 2. Reconnaissance & Nmap Scan Results

${r}
`;const n=/(## 2\. Reconnaissance & Nmap Scan Results[\s\S]*?)(?=---|\n## 3\.|\n## [0-9]|$)/i,s=n.exec(e);if(s){const c=s[1];if(c.includes("OpenSSH 8.4p1")&&c.includes("Apache httpd 2.4.41")){const a=`## 2. Reconnaissance & Nmap Scan Results
### TCP Port Reconnaissance
\`\`\`bash
# Fast SYN and Service Version Detection
nmap -sC -sV -Pn --min-rate 2000 -oN nmap_quick.txt ${t.ip}
\`\`\`

${r}

`;return e.replace(n,a)}else{const a=`${c.trimEnd()}

${r}

`;return e.replace(n,a)}}return`${e.trimEnd()}

---

## 2. Reconnaissance & Nmap Scan Results
${r}
`}function B(e,o){let t=e||"";if(o.openPorts&&o.openPorts.length>0){const n=[...o.openPorts].sort((i,a)=>i-a),s=`### Discovered Services (${n.length} Open Ports Detected):
`+n.map(i=>`- **Port ${i}/tcp:** Open (Discovered during recon)`).join(`
`),c=/### Discovered Services(?: \([^)]+\))?:\s*\n(?:- \*\*Port \d+\/(?:tcp|udp):\*\* [^\n]*\n?)+/i;c.test(t)?t=t.replace(c,`${s}
`):t.includes("## 2. Reconnaissance & Nmap Scan Results")&&(t.includes("### Web Directory & Endpoint Fuzzing")?t=t.replace("### Web Directory & Endpoint Fuzzing",`${s}

### Web Directory & Endpoint Fuzzing`):t=t.replace("## 2. Reconnaissance & Nmap Scan Results",`## 2. Reconnaissance & Nmap Scan Results

${s}
`))}if(o.credentials&&o.credentials.length>0){const n=U(o.credentials);if(t.includes("Compromised Credentials & Loot Vault")){const c=/### 🔑 Compromised Credentials & Loot Vault[\s\S]*?(?=---|\n## [0-9]|\n### |$)/i;t=t.replace(c,`${n}

`)}else{const c=/## 5\.\s*Post-Exploitation Loot[^\n]*/i;c.test(t)?t=t.replace(c,i=>`${i}

${n}
`):t=`${t.trimEnd()}

---

${n}
`}}const r=D(o);if(r.length>0){const n=F(r);if(!t.includes("Associated CVE Intelligence")){const c=/## 3\.\s*Vulnerability Analysis[^\n]*/i;c.test(t)?t=t.replace(c,i=>`${i}

${n}
`):t=`${t.trimEnd()}

---

${n}
`}}if(o.quickNotes&&o.quickNotes.trim().length>0){const n=o.quickNotes.trim();if(!t.includes(n.slice(0,40))){const s=`

### 📝 Operator Field Notes & Tactical Observations
${n}
`,c=/## 3\.\s*Vulnerability Analysis[^\n]*/i;c.test(t)?t=t.replace(c,i=>`${i}${s}`):t=`${t.trimEnd()}

---
${s}`}}return t}export{U as a,z as d,F as f,j as i,B as s};
