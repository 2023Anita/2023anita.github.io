// A single frame bridges same-origin documents; it never changes browser history.
try {
 const raw=sessionStorage.getItem('earth-journey');sessionStorage.removeItem('earth-journey');
 if(raw){const data=JSON.parse(raw);if(data.to===location.pathname&&Date.now()-data.at<30000&&/^data:image\/jpeg;base64,/.test(data.image)){
  window.__earthJourney=data;document.documentElement.classList.add('journey-running');document.documentElement.style.setProperty('--journey-ui','0');const frame=document.createElement('img');frame.id='journey-frame';frame.alt='';frame.src=data.image;frame.style.cssText='position:fixed;inset:0;width:100%;height:100%;object-fit:fill;z-index:9999;background:#030609;pointer-events:none';document.documentElement.append(frame);setTimeout(()=>{if(!frame.isConnected)return;frame.remove();document.documentElement.classList.remove('journey-running');document.documentElement.style.removeProperty('--journey-ui');},12000);
 }}
}catch{/* Storage is optional. */}
