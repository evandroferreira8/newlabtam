(()=>{
const here=new URL(".",document.currentScript.src);
const parts=["p0.txt","p1.txt","p2.txt","p3.txt","p4.txt","p5.txt","p6.txt"];
const hero="https://labtam.ccet.ufrn.br/assets/img/carousel.png";
const logoSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 130"><rect width="430" height="130" rx="18" fill="white"/><text x="18" y="78" font-family="Arial,sans-serif" font-weight="800" font-size="64" fill="%230095DB">Lab</text><text x="123" y="78" font-family="Arial,sans-serif" font-weight="800" font-size="64" fill="%23164194">Tam</text><path d="M260 18h62l-12 23h-22v61h-28V41h-20z" fill="%23009D43"/><text x="326" y="73" font-family="Arial,sans-serif" font-weight="700" font-size="30" fill="%23164194">UFRN</text><text x="20" y="108" font-family="Arial,sans-serif" font-size="15" fill="%236a7c92">Laboratório de Tecnologia Ambiental</text></svg>';
const logo="data:image/svg+xml;charset=utf-8,"+logoSvg;
document.querySelectorAll('img[src$="assets/images/equipe.jpg"],img[src$="equipe.jpg"]').forEach(i=>i.src=hero);
(async()=>{try{
 const texts=await Promise.all(parts.map(p=>fetch(new URL("../payload/"+p,here),{cache:"no-store"}).then(r=>{if(!r.ok)throw new Error(p+" "+r.status);return r.text()})));
 const b64=texts.join("").trim();
 const bytes=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
 const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
 const source=await new Response(stream).text();
 (0,eval)(source);
 document.querySelectorAll('img[src$="assets/images/logo-labtam.png"],img[src$="logo-labtam.png"]').forEach(i=>{i.src=logo;i.removeAttribute("srcset")});
 document.querySelectorAll('img[src$="assets/images/equipe.jpg"],img[src$="equipe.jpg"]').forEach(i=>i.src=hero);
}catch(e){console.error("Erro ao carregar o site LabTam:",e);document.body.insertAdjacentHTML("afterbegin",'<div style="padding:12px;background:#fff3cd;color:#664d03;text-align:center;font:14px Arial">Não foi possível carregar todos os recursos do site. Atualize a página.</div>')}})();
})();