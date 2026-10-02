/* ============ CONFIGURACIÓN (edita aquí) ============ */
const FIREBASE_CONFIG={
  apiKey:"AIzaSyD-zkyK0P6s0B26gL80AUSQ8qvWcqF1J1M",
  authDomain:"kahve-coffee.firebaseapp.com",
  projectId:"kahve-coffee",
  storageBucket:"kahve-coffee.firebasestorage.app",
  messagingSenderId:"641025226895",
  appId:"1:641025226895:web:31d7021ae940b5b49c18fa",
  measurementId:"G-HQSKWR7PDW"
};
const BRANCHES=[ // coordenadas tomadas de tus enlaces de Google Maps
{id:"coronado",name:"Coronado",zone:"Chame, Panamá Oeste",lat:8.5475747,lng:-79.9108171,wa:"50700000000",maps:"https://maps.app.goo.gl/vQfoGTvLGZr36mMk9",hours:"7:30 am – 8:30 pm"},
{id:"penonome",name:"Penonomé",zone:"Penonomé, Coclé",lat:8.4921424,lng:-80.375265,wa:"50700000000",maps:"https://maps.app.goo.gl/4HjBuaHj9h99CAyt8",hours:"7:30 am – 8:30 pm"},
{id:"santiago",name:"Santiago",zone:"Santiago, Veraguas",lat:8.1021169,lng:-80.9683738,wa:"50764163179",maps:"https://maps.app.goo.gl/7vY5nwgrY3MatQeu8",hours:"7:30 am – 8:30 pm"}];
const PAGO={yappy:"Yappy al 6000-0000 (Kahve Panamá Coffee)"};
/* Precios de ejemplo: reemplázalos por los reales. img: usa data-URI, archivo local o URL de stock. */
const IM={mer:"assets/tartaleta-merengue.jpg",fra:"assets/tartaleta-frambuesa.jpg",man:"assets/tartaleta-manzana.jpg",fp:"assets/pumpkin-frappe.jpg",lt:"assets/pumpkin-latte.jpg",ic:"assets/pumpkin-iced.jpg",};
const SZ={n:"Tamaño",c:[["6 oz",0],["8 oz",.5],["12 oz",1]],req:1},SZ12={n:"Tamaño",c:[["12 oz",0]],req:1},SZ2={n:"Tamaño",c:[["8 oz",0],["12 oz",.75]],req:1};
const MK={n:"Tipo de leche",c:[["Entera",0],["Almendras",.75],["Deslactosada",.5]],req:1};
const FLV=["Caramelo","Caramelo Sugar Free","Amaretto","Vainilla","Crema Irlandesa","Avellana","Chocolate","Caramelo Salado","Red Velvet","Mantequilla de maní","Macadamia","Menta","Pumpkin Spice"];
const FLO={n:"Sabor",c:FLV.map(x=>[x,.5]),req:1};
const XT={n:"Adiciones",many:1,c:[["Shot de espresso",1],["Crema batida",.5],["Sirope adicional",.5]]};
const XF={n:"Adiciones",many:1,c:[["Queso crema porcionado",.75],["Salmón ahumado",2.5],["Miel porcionada",.5],["Frutas mixtas",1.5]]};
const UN=id=>"https://unsplash.com/photos/"+id+"/download?force=true&w=640";
const ICED=["OSLnJG62isk","LJPAmUnE-QM","GmcTQt_fEM4","eNEhkC23WMA","F0Wd4djYvSA"].map(UN);
function imgFail(el){const d=document.createElement("div");d.className=el.closest(".zoom")?"no":"ph no";d.textContent="☕";el.replaceWith(d)}
const c=(n,p,o=[],d="",i="",e="☕")=>({id:n,n,p,o,d,i,e});
const MENU=[
{k:"cafe",t:"Café",s:"Espresso hecho al momento · 6, 8 o 12 oz",items:[
c("Espresso",2,[SZ,XT],"Intenso y aromático."),c("Cortado",2.5,[SZ,MK,XT],"Espresso cortado con un toque de leche."),c("Macchiato",2.75,[SZ,MK,XT],"Espresso manchado con espuma de leche."),c("Americano",2.25,[SZ,XT],"Espresso largo con agua caliente."),c("Capuccino",3,[SZ,MK,XT],"Espresso, leche vaporizada y espuma."),c("Latte",3.25,[SZ,MK,XT],"Suave y cremoso."),c("Mocaccino",3.75,[SZ,MK,XT],"Café con chocolate y leche."),c("Caramel Latte",3.75,[SZ,MK,XT],"Latte con caramelo."),c("Capuccino Saborizado",3.5,[SZ,FLO,MK,XT],"Elige tu sabor favorito."),c("Latte Saborizado",3.75,[SZ,FLO,MK,XT],"Elige tu sabor favorito."),c("Flat White",3.5,[SZ,MK,XT],"Doble espresso con microespuma.")]},
{k:"iced",t:"Iced Coffee",s:"12 oz · bien fríos",items:[
c("Iced Coffee Latte Clásico",4,[SZ12,MK,XT],"",IM.ic,"🧊"),c("Iced Coffee Latte Saborizado",4.5,[SZ12,FLO,MK,XT],"","","🧊"),c("Iced Coffee Sugarless Negro",3.5,[SZ12,XT],"Sin azúcar.","","🧊"),c("Iced Coffee Sugarless Latte",4,[SZ12,MK,XT],"Sin azúcar.","","🧊"),c("Iced Coffee Sugarless Saborizado",4.5,[SZ12,FLO,MK,XT],"Sin azúcar.","","🧊")]},
{k:"frappe",t:"Frappé",s:"12 oz",items:["Chocolate y mantequilla de maní","Vainilla Café","Caramelo","Chocolate & Doble Café","Otoe","Melón Verde","Chocolate Amargo y Café","Chocolate y Chispas de Chocolate","Caramelo, Gladiola & Café","Frapuccino","Chocolate","Cookies & Cream","Mocca","Matcha","Bubble Gum (chicle)","Chocolate Blanco","Algodón de Azúcar","Banana & Fresa","Fresa","Horchata"].map(n=>c(n,4.75,[{n:"Adiciones",many:1,c:[["Crema batida",.5],["Shot de espresso",1]]}],"Frappé de 12 oz.","","🥤"))},
{k:"infu",t:"Infusiones y Té",s:"Calientes 8 / 12 oz · Frías 12 oz",items:[
...["Cranberry","Kiwi & Fresa","Mango & Piña","Hierba Buena","Peppermit","Wildberry","Canela & Té negro","Manzanilla"].map(n=>c("Infusión "+n,2.5,[SZ2],"Caliente. Disponible fría en 12 oz.","","🍵")),
...["Chai","Chai Latte","Iced Chai","Iced Chai Latte","Matcha","Matcha Latte","Iced Matcha","Iced Matcha Latte"].map(n=>c(n,3.75,[SZ2,MK],"","","🍵")),
...["Cranberry","Kiwi & Fresa","Mango y Piña","Wildberry"].map(n=>c("Infusión fría "+n,3,[SZ12],"","","🧊"))]},
{k:"beb",t:"Bebidas",s:"8 / 12 oz",items:[c("Milkshake (sabor de temporada)",4.5,[SZ2],"","","🥛"),c("Chocolate Caliente",3,[SZ2,XT],"","","🍫")]},
{k:"des",t:"Desayunos",s:"Servidos todo el día",items:[
c("Omelette de 4 huevos",7.5,[XF],"Con especias, relleno de queso mozzarella y vegetales salteados, con lascas de pan y mantequilla porcionada.","","🍳"),c("Waffles & Omelette",9.5,[XF],"Waffles estilo belga, miel, queso crema, omelette de dos huevos relleno de mozzarella, lascas de salmón y frutas.","","🧇"),c("Waffles & Blueberry",6.5,[XF],"Waffles estilo belga con compota de blueberries.","","🧇"),c("Tostadas Francesas & Pecans",6.5,[XF],"Tres lascas de tostadas francesas con salsa de pecans dulce.","","🍞"),c("Chicken y Waffles",8.5,[XF],"Chicken fingers, waffles estilo belga y salsa de la casa.","","🍗")]},
{k:"pos",t:"Postres",s:"Tartaletas de la casa",items:[c("Tartaleta de Merengue",3.5,[],"Base crujiente, crema y merengue flameado con cacao.",IM.mer),c("Tartaleta de Frambuesa",3.75,[],"Frambuesas frescas, coulis y crema chantilly.",IM.fra),c("Tartaleta de Manzana",3.5,[],"Manzana horneada con canela y cacao.",IM.man)]},
{k:"temp",t:"Temporada",s:"Pumpkin Spice + mini rollo",items:[
c("Combo Frappé Pumpkin Spice",6.5,[{n:"Mini rollo a elegir",c:[["Queso",0],["Aceituna",0]],req:1}],"Frappé Pumpkin Spice + 1 mini rollo.",IM.fp),c("Combo Pumpkin Latte",5.5,[{n:"Mini rollo a elegir",c:[["Queso",0],["Aceituna",0]],req:1}],"Pumpkin Latte + 1 mini rollo.",IM.lt),c("Combo Iced Pumpkin Spice",6.25,[{n:"Mini rollo a elegir",c:[["Queso",0],["Aceituna",0]],req:1}],"Iced Pumpkin Spice + 1 mini rollo.",IM.ic)]}
];
MENU.forEach(m=>m.items.forEach(i=>i.o=i.o.filter(Boolean)));
MENU.find(m=>m.k==="iced").items.forEach((i,x)=>i.i=ICED[x%ICED.length]);
MENU.find(m=>m.k==="frappe").items.forEach(i=>i.i=IM.fp);
/* ============ ESTADO ============ */
const $=s=>document.querySelector(s),money=n=>"$"+n.toFixed(2),esc=s=>{const d=document.createElement("div");d.textContent=s;return d.innerHTML};
let branch=localStorage.getItem("kahve_b"),cart=JSON.parse(localStorage.getItem("kahve_c")||"[]");
const save=()=>localStorage.setItem("kahve_c",JSON.stringify(cart));
const toast=t=>{const e=$("#toast");e.textContent=t;e.classList.add("on");setTimeout(()=>e.classList.remove("on"),2200)};
const B=()=>BRANCHES.find(b=>b.id===branch);
/* ============ MAPA ============ */
let map,markers={};
function initMap(){map=L.map("map",{scrollWheelZoom:false}).setView([8.4,-80.4],8);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}).addTo(map);
BRANCHES.forEach(b=>{const m=L.marker([b.lat,b.lng],{icon:L.divIcon({className:"",html:'<div class="cup">☕</div>',iconSize:[30,30],iconAnchor:[15,28]})}).addTo(map);
m.bindPopup(`<b>Kahve ${b.name}</b><br>${b.zone}<br>${b.hours}`);m.on("click",()=>focusB(b.id,true));markers[b.id]=m});
$("#blist").innerHTML=BRANCHES.map(b=>`<div class="bcard" data-b="${b.id}"><b style="font:1.6rem var(--head)">Kahve ${b.name}</b><div>${b.zone}<br>🕖 ${b.hours}</div><div class="info"><a href="${b.maps}" target="_blank" rel="noopener">Cómo llegar</a><a href="https://wa.me/${b.wa}" target="_blank" rel="noopener">WhatsApp</a><a href="#" data-pick="${b.id}">Pedir aquí</a></div></div>`).join("")}
function focusB(id,noScroll){const b=BRANCHES.find(x=>x.id===id);map.flyTo([b.lat,b.lng],17,{duration:1.8});markers[id].openPopup();
document.querySelectorAll(".bcard").forEach(e=>e.classList.toggle("on",e.dataset.b===id))}
$("#blist").addEventListener("click",e=>{const p=e.target.closest("[data-pick]");if(p){e.preventDefault();setBranch(p.dataset.pick);return}const c=e.target.closest(".bcard");if(c&&!e.target.closest("a"))focusB(c.dataset.b)});
/* ============ SUCURSAL (obligatoria) ============ */
function pickBranch(force){const o=$("#ovl");o.hidden=false;
o.innerHTML=`<div class="mod"><div class="body" style="text-align:center"><img src="assets/logo.jpg" alt="" style="width:84px;margin:0 auto 8px;border-radius:50%"><h3>¿Dónde quieres pedir?</h3><p class="sub">Elige tu sucursal: tu carrito y tu pedido de WhatsApp irán a ella.</p>${BRANCHES.map(b=>`<button class="bcard" data-sel="${b.id}"><b style="font:1.5rem var(--head)">☕ Kahve ${b.name}</b><br><small>${b.zone} · ${b.hours}</small></button>`).join("")}${force?"":'<button class="lnk" id="cx">Cancelar</button>'}</div></div>`;
o.onclick=e=>{const s=e.target.closest("[data-sel]");if(s)setBranch(s.dataset.sel);if(e.target.id==="cx")o.hidden=true}}
function setBranch(id){branch=id;localStorage.setItem("kahve_b",id);$("#ovl").hidden=true;paintB();
document.getElementById("sucursales").scrollIntoView();setTimeout(()=>focusB(id),500);toast("Sucursal: Kahve "+B().name)}
function paintB(){const b=B();$("#bchip").textContent=b?"📍 Kahve "+b.name+" · cambiar":"📍 Elegir sucursal";$("#hb").textContent=b?"Pides en Kahve "+b.name+".":"Elige tu sucursal para empezar tu pedido.";$("#fsuc").innerHTML=BRANCHES.map(x=>`<option ${b&&x.id===b.id?"selected":""}>${x.name}</option>`).join("")}
$("#bchip").onclick=()=>pickBranch(false);
/* ============ MENÚ ============ */
const thumb=i=>i.i?`<img class="ph" src="${i.i}" alt="${esc(i.n)}" loading="lazy" onerror="imgFail(this)">`:`<div class="ph no" aria-hidden="true">${i.e}</div>`;
let cat="cafe"; // "cafe" abre en Café; cambia a "all" para abrir en Menú completo
function showCat(k,scroll){cat=k;document.querySelectorAll("#cats button").forEach(b=>b.classList.toggle("on",b.dataset.c===k));document.querySelectorAll("#menu .sec").forEach(s=>s.hidden=!(k==="all"||s.id==="s-"+k));if(scroll)document.getElementById("menu").scrollIntoView({behavior:"smooth"});const on=document.querySelector("#cats .on");if(on)on.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})}
function renderMenu(){$("#cats").innerHTML=`<button class="all" data-c="all">🍽️ Menú completo</button>`+MENU.map(m=>`<button data-c="${m.k}">${m.t}</button>`).join("");
$("#menu").innerHTML=MENU.map(m=>`<section class="sec" id="s-${m.k}"><h2>${m.t}</h2><p class="sub">${m.s}</p><div class="grid">${m.items.map(i=>`<button class="card" data-i="${esc(i.id)}">${thumb(i)}<span><b>${esc(i.n)}</b><small>${esc(i.d||"")}</small><span class="pr">Desde ${money(i.p)}</span></span></button>`).join("")}</div></section>`).join("")}
$("#cats").onclick=e=>{const b=e.target.closest("button");if(b)showCat(b.dataset.c,true)};showCat(cat,false);
$("#menu").onclick=e=>{const b=e.target.closest("[data-i]");if(b)openItem(b.dataset.i)};
const all=()=>MENU.flatMap(m=>m.items);
/* ============ MODAL DE PRODUCTO ============ */
function openItem(id){if(!branch)return pickBranch(true);const it=all().find(x=>x.id===id),o=$("#ovl");o.hidden=false;
o.innerHTML=`<div class="mod"><button class="x" aria-label="Cerrar" id="cl">×</button><div class="zoom" id="zm" title="Toca para acercar" ${it.i?`style="--bg:url('${it.i}')"`:""}>${it.i?`<img src="${it.i}" alt="${esc(it.n)}" onerror="imgFail(this)">`:`<div class="no">${it.e}</div>`}</div><div class="body"><h3>${esc(it.n)}</h3><p>${esc(it.d||"")}</p>
${it.o.map((g,gi)=>`<div class="grp">${g.n}${g.req?" *":""}</div>${g.c.map((x,xi)=>`<label class="opt"><span><input type="${g.many?"checkbox":"radio"}" name="g${gi}" value="${xi}" ${g.req&&xi===0?"checked":""}>${esc(x[0])}</span><span>${x[1]?"+"+money(x[1]):""}</span></label>`).join("")}`).join("")}
<div class="grp">Notas</div><input type="text" id="nt" placeholder="Sin azúcar, extra caliente…"><div class="tot g"><span>Total</span><b id="pt"></b></div><button class="btn" id="add">Agregar al carrito</button></div></div>`;
const calc=()=>{let t=it.p,sel=[];it.o.forEach((g,gi)=>o.querySelectorAll(`[name=g${gi}]:checked`).forEach(k=>{const x=g.c[k.value];t+=x[1];sel.push(x[0])}));return{t,sel}};
const upd=()=>$("#pt").textContent=money(calc().t);o.onchange=upd;upd();
o.onclick=e=>{if(e.target===o||e.target.id==="cl")o.hidden=true;if(e.target.closest("#zm"))$("#zm").classList.toggle("z");
if(e.target.id==="add"){const r=calc();cart.push({n:it.n,sel:r.sel,note:$("#nt").value.trim(),p:r.t,q:1});save();paintCart();o.hidden=true;toast("Agregado al carrito")}}}
/* ============ CARRITO Y CHECKOUT ============ */
const dr=$("#dr"),sh=$("#shade");
const LOCAL="Consumo en local";
let co={},pm=null,pk=null;
const openDr=()=>{dr.classList.add("open");sh.hidden=false;view("cart")},closeDr=()=>{dr.classList.remove("open");sh.hidden=true};
$("#cartb").onclick=()=>branch?openDr():pickBranch(true);sh.onclick=closeDr;
const sub=()=>cart.reduce((s,i)=>s+i.p*i.q,0);
function paintCart(){const n=cart.reduce((s,i)=>s+i.q,0);$("#bdg").hidden=!n;$("#bdg").textContent=n}
const ready=()=>!!($("#nm")&&$("#nm").value.trim()&&$("#tl").value.trim()&&(co.ent!=="Delivery"||co.lat!=null)&&(co.pay!=="Yappy"||co.ack));
function paintPay(){const loc=co.ent===LOCAL;if(!loc)co.pay="Yappy";
$("#pg").innerHTML=(loc?["Efectivo","Yappy"]:["Yappy"]).map(p=>`<label><input type="radio" name="pg" value="${p}" ${p===co.pay?"checked":""}><span>${loc||p!=="Yappy"?p:"Yappy (obligatorio)"}</span></label>`).join("");
$("#pb").innerHTML=co.pay==="Efectivo"?`<div class="pay">💵 <b>Pago en efectivo:</b> debes pagar en caja para confirmar tu pedido. Envía el pedido por WhatsApp y avisa al llegar.</div>`
:`<div class="pay warn">⚠️ <b>Pago por Yappy</b> al ${PAGO.yappy}.<br>Después de enviar el pedido, adjunta la captura de tu comprobante en el chat de WhatsApp para confirmarlo.<button type="button" class="ack ${co.ack?"on":""}" data-a="ack">${co.ack?"✓ ¡Listo! Enviaré mi comprobante por WhatsApp":"✓ Entendido, enviaré mi comprobante al WhatsApp"}</button></div>`;
$("#sb").disabled=!ready()}
function view(v){pm=pk=null;
if(v==="cart"){dr.innerHTML=`<div class="dh"><h3 style="font-size:2rem">Tu pedido</h3><button class="lnk" data-a="close">Cerrar ×</button></div><p class="sub">Kahve ${B().name}</p>${cart.length?cart.map((i,x)=>`<div class="li"><div><b>${esc(i.n)}</b><small>${esc(i.sel.join(" · "))}${i.note?" · “"+esc(i.note)+"”":""}</small><span class="q"><button data-a="m" data-x="${x}" aria-label="Quitar uno">−</button> ${i.q} <button data-a="p" data-x="${x}" aria-label="Agregar uno">+</button></span></div><b>${money(i.p*i.q)}</b></div>`).join("")+`<div class="tot g"><span>Subtotal</span><span>${money(sub())}</span></div><button class="btn" data-a="co">Continuar con el pedido</button><button class="lnk" data-a="clr">Vaciar carrito</button>`:`<p class="sub">Tu carrito está vacío. Agrega algo del menú.</p>`}`}
else{co={ent:LOCAL,pay:"Efectivo",ack:false,lat:null,lng:null};
dr.innerHTML=`<button class="lnk" data-a="back">← Volver al carrito</button><form id="co" novalidate><div class="grp">¿Cómo quieres tu pedido?</div><div class="seg"><label><input type="radio" name="ent" value="${LOCAL}" checked><span> En el local</span></label><label><input type="radio" name="ent" value="Retiro en sucursal"><span> Retirar</span></label><label><input type="radio" name="ent" value="Delivery"><span> Delivery</span></label></div>
<input type="text" id="nm" placeholder="Tu nombre" autocomplete="name"><input type="tel" id="tl" placeholder="Teléfono" autocomplete="tel">
<div id="ad" hidden><div class="grp">Ubicación de entrega</div><button type="button" class="btn ghost" data-a="gps">📍 Usar mi ubicación exacta (GPS)</button><p id="gs" class="hint" hidden></p><div id="pm"></div><p class="hint">Si el punto no coincide con tu casa, toca el mapa o arrastra el marcador.</p><textarea id="ds" rows="2" placeholder="Referencia: barriada, calle, color de casa…"></textarea></div>
<div class="grp">Método de pago</div><div class="seg" id="pg"></div><div id="pb"></div>
<div class="tot g"><span>Total</span><span>${money(sub())}</span></div><p id="er" class="hint" style="color:#a22" hidden></p><button class="btn wa" id="sb" type="submit" disabled>Enviar pedido por WhatsApp</button></form>`;paintPay()}}
function initPm(){if(pm)return;pm=L.map("pm").setView([B().lat,B().lng],15);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}).addTo(pm);pm.on("click",e=>setPin(e.latlng.lat,e.latlng.lng))}
let gw=null,gc=null;
function setPin(lat,lng,acc,live){co.lat=lat;co.lng=lng;initPm();pm.invalidateSize();
if(!pk){pk=L.marker([lat,lng],{draggable:true,icon:L.divIcon({className:"",html:'<div class="cup">📍</div>',iconSize:[30,30],iconAnchor:[15,28]})}).addTo(pm);pk.on("dragend",()=>{const p=pk.getLatLng();setPin(p.lat,p.lng)})}else pk.setLatLng([lat,lng]);
if(gc){pm.removeLayer(gc);gc=null}if(acc)gc=L.circle([lat,lng],{radius:acc,color:"#1F4D2B",weight:1,fillOpacity:.12}).addTo(pm);
pm.setView([lat,lng],acc?(acc>80?17:19):Math.max(pm.getZoom(),18));
const g=$("#gs"),n=Math.round(acc||0),lk=`<a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" rel="noopener">ver en Google Maps</a>`;g.hidden=false;
g.innerHTML=live?`Afinando tu ubicación… precisión actual ±${n} m. Espera unos segundos.`
:!acc?`Ubicación marcada manualmente ✅ · ${lk}`
:acc<=30?`Ubicación precisa capturada ✅ (±${n} m) · ${lk}`
:acc<=100?`Ubicación capturada (±${n} m). Si no coincide con tu casa, arrastra el punto. · ${lk}`
:`Precisión baja (±${n} m). Prueba de nuevo al aire libre o mueve el punto hasta tu casa. · ${lk}`;
paintPay()}
function useGPS(){const g=$("#gs"),b=document.querySelector('[data-a=gps]');g.hidden=false;
if(!window.isSecureContext||!navigator.geolocation){g.textContent="El GPS solo funciona con la página en HTTPS y un navegador compatible. Toca el mapa para marcar tu casa.";return}
if(gw!=null)navigator.geolocation.clearWatch(gw);
b.disabled=true;g.textContent="Pidiendo tu ubicación… acepta el permiso del navegador y activa el GPS del teléfono.";
let best=null,done=false,t0=Date.now(),tm;
const stop=()=>{done=true;clearTimeout(tm);navigator.geolocation.clearWatch(gw);gw=null;b.disabled=false;b.textContent="📍 Volver a obtener mi ubicación exacta"};
const fin=()=>{if(done)return;stop();if(best)setPin(best.coords.latitude,best.coords.longitude,best.coords.accuracy);else g.textContent="No pudimos obtener tu ubicación. Activa el GPS o toca el mapa para marcarla."};
tm=setTimeout(fin,22000);
gw=navigator.geolocation.watchPosition(p=>{if(done)return;const c=p.coords;if(!best||c.accuracy<best.coords.accuracy){best=p;setPin(c.latitude,c.longitude,c.accuracy,true)}
if(best.coords.accuracy<=12||(best.coords.accuracy<=30&&Date.now()-t0>7000))fin()},
err=>{if(done)return;if(err.code===1){stop();g.textContent="Permiso de ubicación denegado. Actívalo en los ajustes del navegador o toca el mapa para marcar tu casa."}},
{enableHighAccuracy:true,timeout:20000,maximumAge:0})}
dr.onclick=e=>{const a=e.target.closest("[data-a]");if(!a)return;const x=+a.dataset.x,k=a.dataset.a;
if(k==="close")closeDr();else if(k==="ack"){co.ack=!co.ack;paintPay()}else if(k==="gps")useGPS();else if(k==="co")view("co");else if(k==="back")view("cart");
else if(k==="p"||k==="m"||k==="clr"){if(k==="p")cart[x].q++;if(k==="m"&&--cart[x].q<1)cart.splice(x,1);if(k==="clr")cart=[];save();paintCart();view("cart")}};
dr.onchange=e=>{const n=e.target.name,v=e.target.value;if(n==="ent"){co.ent=v;co.ack=false;co.pay=v===LOCAL?"Efectivo":"Yappy";$("#ad").hidden=v!=="Delivery";if(v==="Delivery"){initPm();setTimeout(()=>pm.invalidateSize(),60)}paintPay()}if(n==="pg"){co.pay=v;co.ack=false;paintPay()}};
dr.oninput=()=>{const b=$("#sb");if(b)b.disabled=!ready()};
dr.onsubmit=e=>{e.preventDefault();if(!ready())return;
const L=cart.map(i=>`• ${i.q}x ${i.n}${i.sel.length?" ("+i.sel.join(", ")+")":""}${i.note?" — "+i.note:""} — ${money(i.p*i.q)}`);
const d=co.ent==="Delivery";
const t=[`*Pedido Kahve ${B().name}*`,`Cliente: ${$("#nm").value.trim()}`,`Tel: ${$("#tl").value.trim()}`,`Servicio: ${co.ent}`,
d?`Ubicación: https://www.google.com/maps?q=${co.lat},${co.lng}${$("#ds").value.trim()?"\nReferencia: "+$("#ds").value.trim():""}`:null,"","*Pedido:*",...L,"",`*Total: ${money(sub())}*`,
`Pago: ${co.pay}`,co.pay==="Yappy"?"_(Comprobante de pago adjunto en este chat)_":"_(Pagará en caja)_"].filter(x=>x!==null).join("\n");
const u=`https://api.whatsapp.com/send?phone=${B().wa}&text=${encodeURIComponent(t)}`;
if(!window.open(u,"_blank"))location.href=u;
cart=[];save();paintCart();closeDr();toast("¡Pedido enviado! Confírmalo en WhatsApp ☕")};
/* ============ RESEÑAS (Firebase + respaldo local) ============ */
let db=null;try{if(FIREBASE_CONFIG.apiKey!=="TU_API_KEY"&&window.firebase){firebase.initializeApp(FIREBASE_CONFIG);db=firebase.firestore()}}catch(x){console.warn(x)}
let stars=0;$("#stars").innerHTML=[1,2,3,4,5].map(n=>`<button type="button" class="star" data-n="${n}" aria-label="${n} estrellas">★</button>`).join("");
$("#stars").onclick=e=>{const b=e.target.closest(".star");if(!b)return;stars=+b.dataset.n;document.querySelectorAll(".star").forEach(s=>s.classList.toggle("on",+s.dataset.n<=stars))};
const sel={};document.querySelectorAll("[data-g]").forEach(g=>g.onclick=e=>{const b=e.target.closest(".ch");if(!b)return;g.querySelectorAll(".ch").forEach(x=>x.classList.toggle("on",x===b));sel[g.dataset.g]=b.textContent});
const loc=()=>JSON.parse(localStorage.getItem("kahve_fb")||"[]");
function paintFb(a){$("#fe").hidden=a.length>0;$("#fbl").innerHTML=a.slice(0,20).map(f=>`<div class="fb"><span class="s">${"★".repeat(f.estrellas)}${"☆".repeat(5-f.estrellas)}</span> · ${esc(f.alias||"Anónimo")} · Kahve ${esc(f.sucursal||"")} · ${esc(f.comida||"")} · Precios: ${esc(f.precios||"")} · ${esc(f.fecha||"")}${f.consejoComida?`<p>“${esc(f.consejoComida)}”</p>`:""}${f.atencion?`<p>“${esc(f.atencion)}”</p>`:""}</div>`).join("")}
function subFb(){const n=$("#sync");if(db){db.collection("resenas").orderBy("creado","desc").limit(20).onSnapshot(s=>paintFb(s.docs.map(d=>d.data())),()=>{n.hidden=false;n.textContent="No se pudo leer la nube; mostrando opiniones locales.";paintFb(loc())})}else{n.hidden=false;n.textContent="Firebase sin configurar: las opiniones solo se ven en este dispositivo.";paintFb(loc())}}
$("#ff").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);if(!stars||!sel.comida||!sel.precios||!f.get("fuente")){toast("Faltan estrellas o respuestas");return}
const r={estrellas:stars,fuente:f.get("fuente"),comida:sel.comida,precios:sel.precios,sucursal:f.get("sucursal"),consejoComida:f.get("consejoComida"),atencion:f.get("atencion"),alias:(f.get("alias")||"").trim().slice(0,24),fecha:new Date().toLocaleDateString("es-PA")};
const local=()=>{const a=loc();a.unshift(r);localStorage.setItem("kahve_fb",JSON.stringify(a));paintFb(a)};
if(db)db.collection("resenas").add({...r,creado:firebase.firestore.FieldValue.serverTimestamp()}).catch(()=>{toast("Sin conexión a la nube; guardado en este dispositivo");local()});else local();
e.target.reset();stars=0;document.querySelectorAll(".star,.ch").forEach(x=>x.classList.remove("on"));$("#thx").hidden=false;paintB()};
/* ============ INICIO ============ */
$("#yr").textContent=new Date().getFullYear();renderMenu();initMap();paintB();paintCart();subFb();
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&branch){$("#ovl").hidden=true;closeDr()}});
if(!branch)pickBranch(true);
