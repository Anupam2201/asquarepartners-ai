const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

// Coverage depth without decorative excess.
$$('.coverage article').forEach(card=>{if(!reduceMotion){card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(850px) rotateX(${y*-2.2}deg) rotateY(${x*2.2}deg) translateY(-5px)`});card.addEventListener('mouseleave',()=>card.style.transform='')}});

// Four canonical PRISM layers. AI is native across all four.
const layerCopy={intelligence:['AI INTELLIGENCE','Evidence → entity → network → models → behavior → risk context'],agentic:['AGENTIC ACTION','Evidence → hypotheses → gaps → recommendation → proposed governed action'],measurement:['MEASUREMENT & KPIs','Outcome → effectiveness → action integrity → capacity → programme health'],governance:['GOVERNANCE','AI risk → control → live state → consequence tier → human authority → replay']};
$$('[data-layer]').forEach(el=>el.onclick=()=>{$$('[data-layer]').forEach(x=>x.classList.remove('active'));el.classList.add('active');const [a,b]=layerCopy[el.dataset.layer];$('#layerStage b').textContent=a;$('#layerStage span').textContent=b});

// Intelligence workbench changes meaningfully with the selected built capability.
const intel={
alerts:['Alert Queue','Rules and ML coexist, with typology, intervention, disposition and evidence context visible in one operating surface.','WHOLE-BANK ALERT POSTURE','RULES + ML SIDE BY SIDE',['APP / MULE','INTERNATIONAL WIRE','SCREENING']],
entity:['Entity 360','Fragmented records resolve into a canonical entity while source variants, confidence, provenance and resolution rationale remain inspectable.','CANONICAL ENTITY RESOLUTION','WHY PRISM BELIEVES IT',['KYC + CRM','ALIASES','SOURCE VARIANTS']],
network:['Network / UBO','People, companies, accounts, devices, addresses, transactions and ownership paths become one typed evidence-backed graph.','RELATIONSHIP INTELLIGENCE','TYPED EDGES + PROVENANCE',['ENTITY PATH','SHARED DEVICE','UBO EXPOSURE']],
models:['Models · SHAP','Model output sits beside explainability, feature contribution and source context rather than appearing as an opaque risk number.','MODEL INTELLIGENCE','SCORE + EXPLAINABILITY',['RULE','MODEL','SHAP CONTRIBUTION']],
sanctions:['Sanctions / PEP','Screening extends into ownership and relationship context while direct match, indirect exposure and adjudication remain distinct.','SCREENING INTELLIGENCE','PARTY + OWNERSHIP CONTEXT',['DIRECT MATCH','OWNERSHIP','NETWORK EXPOSURE']],
behavior:['Behavioral Baseline','Behavior is evaluated against entity and peer context so deviation becomes evidence, not a generic anomaly flag.','BEHAVIORAL BASELINE','ENTITY + PEER CONTEXT',['BASELINE','DEVIATION','CHANGE']],
pcra:['pCRA · Client Risk','Client risk combines governed factors and evidence without erasing underlying source states or lifecycle change.','CLIENT RISK','FACTOR + EVIDENCE',['PROFILE','RISK FACTORS','LIFECYCLE']],
typology:['Typology Library','Financial-crime patterns remain explicit, testable and connected to the rules/models and outcomes they influence.','TYPOLOGY LIBRARY','PATTERN → CONTROL → OUTCOME',['MULE','LAYERING','SANCTIONS EVASION']],
framl:['FRAML · Fraud','Fraud and AML retain separate control authority while sharing entity, network and investigation intelligence where evidence connects them.','FRAML INTELLIGENCE','SHARED INTELLIGENCE · DISTINCT CONTROLS',['APP SIGNAL','SHARED DEVICE','AML WIRE']],
relationship:['Fraud & Relationship','Relationship intelligence brings mule, beneficiary, device and counterparty context into fraud operations.','FRAUD RELATIONSHIP INTELLIGENCE','ENTITY + NETWORK',['MULE ACCOUNT','DEVICE','BENEFICIARY']],
fraudops:['Fraud Operations','Operational fraud signals connect to protective intervention, investigation and governed action.','FRAUD OPERATIONS','SIGNAL → INTERVENTION',['APP','SCAM','MULE']],
rules:['Rule Studio','Rules remain explicit, governed and measurable alongside ML rather than disappearing behind an AI-only abstraction.','RULE STUDIO','RULE + THRESHOLD + OUTCOME',['RULE LOGIC','THRESHOLD','EFFECTIVENESS']],
modelgov:['Model Governance','Model identity, version, validation and drift state remain part of the intelligence operating surface.','MODEL GOVERNANCE','VERSION + VALIDATION + DRIFT',['MODEL ID','VALIDATION','DRIFT']],
dq:['Data Quality','Missing, stale, conflicting or unsourced evidence changes confidence and downstream eligibility instead of being silently converted into certainty.','DATA QUALITY & EVIDENCE','QUALITY PROPAGATES',['CONFLICT','STALE','UNSOURCED']],
deploy:['Deployment','Governed deployment keeps model/rule version, validation state and operating scope visible at the point of release.','DEPLOYMENT','VERSION + SCOPE + CONTROL',['VALIDATED','SCOPED','RELEASED']]
};
$$('[data-intel]').forEach(btn=>btn.onclick=()=>{const d=intel[btn.dataset.intel];$$('[data-intel]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#intelTitle').textContent=d[0];$('#intelCopy').textContent=d[1];$('#canvasMode').textContent=d[2];$('#canvasTech').textContent=d[3];const cards=$$('#alertRiver>div');cards.forEach((c,i)=>{c.querySelector('small').textContent=d[4][i]||d[4][0];c.querySelector('b').textContent=['EVIDENCE','CONTEXT','DECISION INPUT'][i];c.querySelector('span').textContent=['Observed / source-backed','Derived / explainable','Governed downstream use'][i]});const bars=$$('.canvas-chart i');bars.forEach((b,i)=>b.style.height=(28+((i*17+btn.dataset.intel.length*11)%62))+'%')});

// Network showcase modes.
const netModes={entity:['Entity network','Resolved entity at the center; evidence-backed relationships remain inspectable.'],transaction:['Transaction flow','Payment direction and connected counterparties come forward while entity context remains available.'],risk:['Risk overlay','Risk-relevant objects and paths rise visually without replacing the underlying evidence graph.'],ubo:['UBO / ownership','Direct and indirect ownership unfolds through intermediary entities, controllers and jurisdictions.'],path:['Suspicious path','The APP → account → shared device → entity → wire path isolates while unrelated context recedes.']};
$$('[data-netmode]').forEach(btn=>btn.onclick=()=>{$$('[data-netmode]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const [t,c]=netModes[btn.dataset.netmode];$('#netInsightTitle').textContent=t;$('#netInsightCopy').textContent=c;const path=$$('.n-path line'), edges=$$('.n-edges line'), nodes=$$('.n-nodes>*');path.forEach(x=>x.style.opacity=btn.dataset.netmode==='path'||btn.dataset.netmode==='risk'?'1':'.35');edges.forEach(x=>x.style.opacity=btn.dataset.netmode==='path'?'.12':'1');nodes.forEach((x,i)=>x.style.opacity=btn.dataset.netmode==='path'&&![0,1,2,3,4].includes(i)?'.2':'1')});

// Measurement: illustrative interactive states are explicitly scenario visualizations, not external factual claims.
const measure={
effectiveness:['CONTROL EFFECTIVENESS','Which controls are producing meaningful outcomes?','View disposition, rule/model contribution and outcome evidence without confusing alert volume with effectiveness.',['42','70','55','82','63']],
governed:['GOVERNED-ACTION INTEGRITY','Are gates operating as controls?','Compare approvals, refusals, four-eyes use, queue state and time at gate while keeping observed history separate from proven capability.',['72','34','61','48','79']],
capacity:['AUTOMATION & CAPACITY','Where is work being automated, routed and accumulated?','Use segment and queue context to understand analyst load, throughput, backlog and automation without treating volume as effectiveness.',['58','76','43','67','88']],
regulatory:['REGULATORY CLOCKS','Which statutory clocks are actually sourced?','Publish a numeric clock only when the legal basis supports it; otherwise show basis pending or not sourced.',['82','64','28','55','39']],
programme:['PROGRAMME HEALTH','What remains unresolved or evidentially weak?','Keep missing sources, assumptions, open controls and engineering gaps visible instead of manufacturing a uniformly green posture.',['36','51','69','44','77']]
};
$$('[data-measure]').forEach(btn=>btn.onclick=()=>{const d=measure[btn.dataset.measure];$$('[data-measure]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#measureEyebrow').textContent=d[0];$('#measureTitle').textContent=d[1];$('#measureText').textContent=d[2];$$('#interactiveBars i').forEach((x,i)=>x.style.height=d[3][i]+'%')});

// Bring scenes in as the user scrolls.
const sections=$$('section');if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('inview')}),{threshold:.08});sections.forEach(s=>io.observe(s))}else sections.forEach(s=>s.classList.add('inview'));

// Semantic motion: do not animate for motion-sensitive users.
if(!reduceMotion){let k=0;const records=$$('.record-cloud span');setInterval(()=>{records.forEach(x=>x.style.borderColor='#3b4b62');if(records.length){records[k%records.length].style.borderColor='#9a8254';k++}},900);let g=0;const gp=$$('.n-path line');setInterval(()=>{gp.forEach((x,i)=>x.style.opacity=i<=g?'1':'.2');g=(g+1)%Math.max(gp.length,1)},650)}

const style=document.createElement('style');style.textContent=`section{transition:opacity .6s ease,transform .6s ease}section:not(.inview){opacity:.95}.layers article{transition:.25s}.coverage article{transition:transform .18s ease,box-shadow .18s ease}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`;document.head.appendChild(style);
