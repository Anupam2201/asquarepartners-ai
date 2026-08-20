(()=>{
  const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

  // Make the breadth of AI Intelligence visible without hiding the FCC domains.
  const workbench=$('.workbench');
  if(workbench && !$('.intel-domain-matrix')){
    const matrix=document.createElement('div');
    matrix.className='intel-domain-matrix';
    ['AML / CFT','KYC / CDD','RTM','FRAUD','FRAML','SANCTIONS','INVESTIGATIONS','REG REPORTING'].forEach((name,i)=>{
      const el=document.createElement('span');el.textContent=name;if(i===0)el.classList.add('active');matrix.appendChild(el);
    });
    workbench.parentElement.insertBefore(matrix,workbench);
    const chips=$$('span',matrix);let ix=0;
    if(!reduceMotion)setInterval(()=>{chips.forEach(x=>x.classList.remove('active'));ix=(ix+1)%chips.length;chips[ix].classList.add('active')},2200);
  }

  // FCC cards: animate their existing miniature product scenes, preserving the restrained composition.
  $$('.coverage article').forEach((card,idx)=>{
    card.setAttribute('data-domain-index',String(idx+1));
    const micro=$('.micro',card);if(!micro)return;
    if(card.classList.contains('aml')){
      $$('.bars i',card).forEach((b,i)=>{b.style.transition='height .55s ease';if(!reduceMotion)setInterval(()=>{b.style.height=(18+((Date.now()/37+i*19)%46))+'px'},1800+i*120)});
    }
    if(card.classList.contains('rtm')&&!reduceMotion){
      const dots=$$('.flow i',card);let d=0;setInterval(()=>{dots.forEach(x=>x.style.boxShadow='0 0 0 5px rgba(201,156,72,.05)');dots[d%dots.length].style.boxShadow='0 0 0 7px rgba(201,156,72,.12),0 0 22px rgba(201,156,72,.45)';d++},700);
    }
    if(card.classList.contains('framl')&&!reduceMotion){
      const node=$('.converge b',card);if(node)setInterval(()=>{node.animate([{transform:'scale(.82)',opacity:.55},{transform:'scale(1.25)',opacity:1},{transform:'scale(.82)',opacity:.55}],{duration:1800})},2100);
    }
    if(card.classList.contains('sanctions')&&!reduceMotion){
      const rings=$$('.rings i',card);rings.forEach((r,i)=>r.animate([{opacity:.25,transform:'translate(-50%,-50%) scale(.84)'},{opacity:.85,transform:'translate(-50%,-50%) scale(1.08)'},{opacity:.25,transform:'translate(-50%,-50%) scale(.84)'}],{duration:2600+i*500,iterations:Infinity}));
    }
  });

  // Give the hero a traveling 'intelligence pulse' around the operating universe.
  const universe=$('#crimeUniverse');
  if(universe && !reduceMotion){
    const pulse=document.createElement('i');pulse.className='universe-pulse';
    pulse.style.cssText='position:absolute;width:8px;height:8px;border-radius:50%;background:#e4c274;box-shadow:0 0 18px rgba(228,194,116,.9);z-index:5;left:14%;top:24%;pointer-events:none';
    universe.appendChild(pulse);
    const points=[[14,24],[42,44],[50,50],[68,35],[81,48],[65,70],[50,77],[34,61],[14,24]];let p=0;
    setInterval(()=>{p=(p+1)%points.length;pulse.style.transition='left .85s ease,top .85s ease';pulse.style.left=points[p][0]+'%';pulse.style.top=points[p][1]+'%'},900);
  }

  // Network nodes respond as an actual investigative surface rather than a static illustration.
  const hpGraph=$('#homepageGraph');
  if(hpGraph){
    $$('.n-nodes>*',hpGraph).forEach((node,i)=>{
      node.style.cursor='pointer';
      node.addEventListener('mouseenter',()=>{$$('.n-nodes>*',hpGraph).forEach(x=>x.style.opacity='.25');node.style.opacity='1';$$('.n-path line',hpGraph).forEach(x=>x.style.opacity=i<5?'1':'.28')});
      node.addEventListener('mouseleave',()=>{$$('.n-nodes>*',hpGraph).forEach(x=>x.style.opacity='1')});
    });
  }

  // Agentic reasoning should visibly stop at authority.
  const auth=$('.authority-stop');
  if(auth&&!reduceMotion){
    let on=false;setInterval(()=>{on=!on;auth.style.boxShadow=on?'0 0 34px rgba(201,156,72,.16),inset 0 0 28px rgba(201,156,72,.07)':'0 0 8px rgba(201,156,72,.04)'},1500);
  }

  // Measurement bars become inspectable rather than merely decorative.
  $$('#interactiveBars>div').forEach((group,i)=>{
    const bar=$('i',group);if(!bar)return;
    group.title=['Detection effectiveness','Governed-action integrity','Automation & capacity','Regulatory clocks','Programme health'][i]||'Measured state';
    group.addEventListener('mouseenter',()=>{bar.style.filter='brightness(1.28) drop-shadow(0 0 12px rgba(229,197,126,.35))'});
    group.addEventListener('mouseleave',()=>{bar.style.filter=''});
  });
})();
