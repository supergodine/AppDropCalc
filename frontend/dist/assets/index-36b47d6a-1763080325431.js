import{r as e,b as t,a as r}from"./vendor-5fcaeebf-1763080325431.js";import{u as n,L as s,a as i,B as a,R as o,b as l,N as c}from"./router-0a0d2cce-1763080325431.js";import{m as u,C as h,T as d,Z as m,A as p,U as f,M as g,L as y,E as x,a as b,b as v,c as w,d as N,S as E,e as S,f as C,g as T,h as _,i as k,G as j,j as I,k as A,l as P,n as R,o as D,p as O,q as L,B as M,r as U,s as F,t as V,H as B,u as $,v as z,P as q,w as H,x as G,X as W,y as K,I as J,D as X}from"./ui-04d7ae09-1763080325431.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var Q={exports:{}},Y={},Z=e,ee=Symbol.for("react.element"),te=Symbol.for("react.fragment"),re=Object.prototype.hasOwnProperty,ne=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,se={key:!0,ref:!0,__self:!0,__source:!0};function ie(e,t,r){var n,s={},i=null,a=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)re.call(t,n)&&!se.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:ee,type:e,key:i,ref:a,props:s,_owner:ne.current}}Y.Fragment=te,Y.jsx=ie,Y.jsxs=ie,Q.exports=Y;var ae=Q.exports,oe={},le=t;oe.createRoot=le.createRoot,oe.hydrateRoot=le.hydrateRoot;const ce={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},ue=e.createContext(void 0),he=({children:t})=>{const[r,n]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&n(e)},[]);const s={language:r,setLanguage:e=>{n(e),localStorage.setItem("language",e)},t:e=>ce[r][e]||e};return ae.jsx(ue.Provider,{value:s,children:t})},de=()=>{const t=e.useContext(ue);if(!t)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return t};let me,pe,fe,ge={data:""},ye=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ge},xe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,be=/\/\*[^]*?\*\/|  +/g,ve=/\n+/g,we=(e,t)=>{let r="",n="",s="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+a+";":n+="f"==i[1]?we(a,i):i+"{"+we(a,"k"==i[1]?"":t)+"}":"object"==typeof a?n+=we(a,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=we.p?we.p(i,a):i+":"+a+";")}return r+(t&&s?t+"{"+s+"}":s)+n},Ne={},Ee=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+Ee(e[r]);return t}return e},Se=(e,t,r,n,s)=>{let i=Ee(e),a=Ne[i]||(Ne[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!Ne[a]){let t=i!==e?e:(e=>{let t,r,n=[{}];for(;t=xe.exec(e.replace(be,""));)t[4]?n.shift():t[3]?(r=t[3].replace(ve," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(ve," ").trim();return n[0]})(e);Ne[a]=we(s?{["@keyframes "+a]:t}:t,r?"":"."+a)}let o=r&&Ne.g?Ne.g:null;return r&&(Ne.g=Ne[a]),((e,t,r,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(Ne[a],t,n,o),a};function Ce(e){let t=this||{},r=e.call?e(t.p):e;return Se(r.unshift?r.raw?((e,t,r)=>e.reduce((e,n,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":we(e,""):!1===e?"":e}return e+n+(null==i?"":i)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,ye(t.target),t.g,t.o,t.k)}Ce.bind({g:1});let Te=Ce.bind({k:1});function _e(e,t){let r=this||{};return function(){let n=arguments;function s(i,a){let o=Object.assign({},i),l=o.className||s.className;r.p=Object.assign({theme:pe&&pe()},o),r.o=/ *go\d+/.test(l),o.className=Ce.apply(r,n)+(l?" "+l:""),t&&(o.ref=a);let c=e;return e[0]&&(c=o.as||e,delete o.as),fe&&c[0]&&fe(o),me(c,o)}return t?t(s):s}}var ke=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,je=(()=>{let e=0;return()=>(++e).toString()})(),Ie=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ae="default",Pe=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return Pe(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},Re=[],De={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},Oe={},Le=(e,t=Ae)=>{Oe[t]=Pe(Oe[t]||De,e),Re.forEach(([e,r])=>{e===t&&r(Oe[t])})},Me=e=>Object.keys(Oe).forEach(t=>Le(e,t)),Ue=(e=Ae)=>t=>{Le(t,e)},Fe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ve=e=>(t,r)=>{let n=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||je()}))(t,e,r);return Ue(n.toasterId||(e=>Object.keys(Oe).find(t=>Oe[t].toasts.some(t=>t.id===e)))(n.id))({type:2,toast:n}),n.id},Be=(e,t)=>Ve("blank")(e,t);Be.error=Ve("error"),Be.success=Ve("success"),Be.loading=Ve("loading"),Be.custom=Ve("custom"),Be.dismiss=(e,t)=>{let r={type:3,toastId:e};t?Ue(t)(r):Me(r)},Be.dismissAll=e=>Be.dismiss(void 0,e),Be.remove=(e,t)=>{let r={type:4,toastId:e};t?Ue(t)(r):Me(r)},Be.removeAll=e=>Be.remove(void 0,e),Be.promise=(e,t,r)=>{let n=Be.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?ke(t.success,e):void 0;return s?Be.success(s,{id:n,...r,...null==r?void 0:r.success}):Be.dismiss(n),e}).catch(e=>{let s=t.error?ke(t.error,e):void 0;s?Be.error(s,{id:n,...r,...null==r?void 0:r.error}):Be.dismiss(n)}),e};var $e=(t,r="default")=>{let{toasts:n,pausedAt:s}=((t={},r=Ae)=>{let[n,s]=e.useState(Oe[r]||De),i=e.useRef(Oe[r]);e.useEffect(()=>(i.current!==Oe[r]&&s(Oe[r]),Re.push([r,s]),()=>{let e=Re.findIndex(([e])=>e===r);e>-1&&Re.splice(e,1)}),[r]);let a=n.toasts.map(e=>{var r,n,s;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==t?void 0:t.duration)||Fe[e.type],style:{...t.style,...null==(s=t[e.type])?void 0:s.style,...e.style}}});return{...n,toasts:a}})(t,r),i=e.useRef(new Map).current,a=e.useCallback((e,t=1e3)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),o({type:4,toastId:e})},t);i.set(e,r)},[]);e.useEffect(()=>{if(s)return;let e=Date.now(),t=n.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout(()=>Be.dismiss(t.id,r),n);t.visible&&Be.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[n,s,r]);let o=e.useCallback(Ue(r),[r]),l=e.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=e.useCallback((e,t)=>{o({type:1,toast:{id:e,height:t}})},[o]),u=e.useCallback(()=>{s&&o({type:6,time:Date.now()})},[s,o]),h=e.useCallback((e,t)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=t||{},a=n.filter(t=>(t.position||i)===(e.position||i)&&t.height),o=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<o&&e.visible).length;return a.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[n]);return e.useEffect(()=>{n.forEach(e=>{if(e.dismissed)a(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[n,a]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:h}}},ze=Te`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,qe=Te`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,He=Te`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ge=_e("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ze} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${He} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,We=Te`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ke=_e("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${We} 1s linear infinite;
`,Je=Te`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Xe=Te`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Qe=_e("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Xe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ye=_e("div")`
  position: absolute;
`,Ze=_e("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,et=Te`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tt=_e("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${et} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,rt=({toast:t})=>{let{icon:r,type:n,iconTheme:s}=t;return void 0!==r?"string"==typeof r?e.createElement(tt,null,r):r:"blank"===n?null:e.createElement(Ze,null,e.createElement(Ke,{...s}),"loading"!==n&&e.createElement(Ye,null,"error"===n?e.createElement(Ge,{...s}):e.createElement(Qe,{...s})))},nt=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,st=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,it=_e("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,at=_e("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ot=e.memo(({toast:t,position:r,style:n,children:s})=>{let i=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,s]=Ie()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[nt(r),st(r)];return{animation:t?`${Te(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Te(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},a=e.createElement(rt,{toast:t}),o=e.createElement(at,{...t.ariaProps},ke(t.message,t));return e.createElement(it,{className:t.className,style:{...i,...n,...t.style}},"function"==typeof s?s({icon:a,message:o}):e.createElement(e.Fragment,null,a,o))});!function(e,t,r,n){we.p=t,me=e,pe=r,fe=n}(e.createElement);var lt=({id:t,className:r,style:n,onHeightUpdate:s,children:i})=>{let a=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;s(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return e.createElement("div",{ref:a,className:r,style:n},i)},ct=Ce`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ut=({reverseOrder:t,position:r="top-center",toastOptions:n,gutter:s,children:i,toasterId:a,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:u}=$e(n,a);return e.createElement("div",{"data-rht-toaster":a||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(n=>{let a=n.position||r,o=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ie()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...s}})(a,u.calculateOffset(n,{reverseOrder:t,gutter:s,defaultPosition:r}));return e.createElement(lt,{id:n.id,key:n.id,onHeightUpdate:u.updateHeight,className:n.visible?ct:"",style:o},"custom"===n.type?ke(n.message,n):i?i(n):e.createElement(ot,{toast:n,position:a}))}))},ht=Be;const dt=e.createContext(void 0);function mt({children:t}){const[r,n]=e.useState(()=>localStorage.getItem("theme")||"dark");e.useEffect(()=>{const e=window.document.documentElement;"dark"===r?e.classList.add("dark"):e.classList.remove("dark")},[r]);const s=e=>{n(e),localStorage.setItem("theme",e)};return ae.jsx(dt.Provider,{value:{theme:r,setTheme:s,toggleTheme:()=>{s("light"===r?"dark":"light")}},children:t})}const pt=()=>ae.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f0fdf4 0%, #dbeafe 100%)",padding:"2rem",fontFamily:"system-ui, sans-serif"},children:ae.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[ae.jsxs("div",{style:{textAlign:"center"},children:[ae.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#1f2937",marginBottom:"0.5rem"},children:"🧮 DropCalc"}),ae.jsx("p",{style:{fontSize:"1.125rem",color:"#6b7280"},children:"Calculadora de Preços para Dropshipping"})]}),ae.jsxs("div",{style:{display:"flex",gap:"10px"},children:[ae.jsx("a",{href:"/dashboard",style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",textDecoration:"none",fontSize:"14px"},children:"📊 Dashboard"}),ae.jsx("button",{onClick:()=>{localStorage.clear(),alert("Todos os dados do localStorage foram limpos! Recarregue a página.")},style:{padding:"8px 16px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px"},children:"🗑️ Limpar Dados"})]})]}),ae.jsxs("div",{style:{display:"grid",gridTemplateColumns:window.innerWidth>1024?"1fr 1fr":"1fr",gap:"2rem"},children:[ae.jsxs("div",{style:{background:"white",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",padding:"1.5rem"},children:[ae.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600",color:"#1f2937",marginBottom:"1.5rem"},children:"Dados do Produto"}),ae.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[ae.jsxs("div",{children:[ae.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Custo do Fornecedor (USD)"}),ae.jsx("input",{type:"number",defaultValue:"100",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"}})]}),ae.jsxs("div",{children:[ae.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Margem Desejada (%)"}),ae.jsx("input",{type:"number",defaultValue:"30",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"}})]}),ae.jsxs("div",{children:[ae.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Plataforma"}),ae.jsxs("select",{style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"},children:[ae.jsx("option",{children:"Mercado Livre (16%)"}),ae.jsx("option",{children:"Amazon Brasil (15%)"}),ae.jsx("option",{children:"Nuvemshop (2%)"})]})]}),ae.jsxs("div",{children:[ae.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Gateway de Pagamento"}),ae.jsxs("select",{style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"},children:[ae.jsx("option",{children:"Mercado Pago (4.99%)"}),ae.jsx("option",{children:"PagSeguro (4.99%)"}),ae.jsx("option",{children:"PayPal (6.4%)"})]})]})]})]}),ae.jsxs("div",{style:{background:"white",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",padding:"1.5rem"},children:[ae.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600",color:"#1f2937",marginBottom:"1.5rem"},children:"✨ Resultado"}),ae.jsxs("div",{style:{background:"#f0fdf4",borderRadius:"0.5rem",padding:"1rem",border:"1px solid #bbf7d0",marginBottom:"1.5rem",textAlign:"center"},children:[ae.jsx("p",{style:{fontSize:"0.875rem",color:"#16a34a",fontWeight:"500",marginBottom:"0.25rem"},children:"PREÇO DE VENDA"}),ae.jsx("p",{style:{fontSize:"2rem",fontWeight:"bold",color:"#15803d"},children:"R$ 825,00"}),ae.jsx("p",{style:{fontSize:"0.875rem",color:"#16a34a"},children:"(USD $ 150,00)"})]}),ae.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid #e5e7eb"},children:[ae.jsx("span",{style:{color:"#6b7280"},children:"Custo em BRL:"}),ae.jsx("span",{style:{fontWeight:"500"},children:"R$ 550,00"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid #e5e7eb"},children:[ae.jsx("span",{style:{color:"#6b7280"},children:"Taxa da Plataforma:"}),ae.jsx("span",{style:{fontWeight:"500"},children:"R$ 132,00"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid #e5e7eb"},children:[ae.jsx("span",{style:{color:"#6b7280"},children:"Taxa do Gateway:"}),ae.jsx("span",{style:{fontWeight:"500"},children:"R$ 41,17"})]}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f9fafb",borderRadius:"0.375rem",padding:"0.75rem"},children:[ae.jsx("span",{style:{color:"#1f2937",fontWeight:"500"},children:"Lucro:"}),ae.jsx("span",{style:{fontWeight:"bold",color:"#16a34a"},children:"R$ 101,83"})]})]}),ae.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"#eff6ff",borderRadius:"0.5rem",border:"1px solid #bfdbfe"},children:ae.jsxs("p",{style:{fontSize:"0.875rem",color:"#2563eb"},children:[ae.jsx("strong",{children:"Taxa de câmbio:"})," 1 USD = R$ 5,50"]})})]})]}),ae.jsx("div",{style:{marginTop:"2rem",textAlign:"center"},children:ae.jsx("p",{style:{color:"#6b7280"},children:"💡 DropCalc - Calculadora funcionando! Interface completa em desenvolvimento."})})]})}),ft=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=63&s|128):55296==(64512&s)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++n)),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=63&s|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=63&s|128)}return t},gt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,a=i?e[s+1]:0,o=s+2<e.length,l=o?e[s+2]:0,c=t>>2,u=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,i||(h=64)),n.push(r[c],r[u],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ft(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const s=e[r++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[r++];t[n++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))}else{const i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<e.length;){const t=r[e.charAt(s++)],i=s<e.length?r[e.charAt(s)]:0;++s;const a=s<e.length?r[e.charAt(s)]:64;++s;const o=s<e.length?r[e.charAt(s)]:64;if(++s,null==t||null==i||null==a||null==o)throw new yt;const l=t<<2|i>>4;if(n.push(l),64!==a){const e=i<<4&240|a>>2;if(n.push(e),64!==o){const e=a<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xt=function(e){return function(e){const t=ft(e);return gt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},bt=function(e){try{return gt.decodeString(e,!0)}catch(ge){console.error("base64Decode failed: ",ge)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,wt=()=>{try{return vt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(ge){return}const t=e&&bt(e[1]);return t&&JSON.parse(t)})()}catch(ge){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${ge}`)}},Nt=e=>wt()?.emulatorHosts?.[e],Et=()=>wt()?.config,St=e=>wt()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _t(e){return(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt={};let jt=!1;function It(e,t){if("undefined"==typeof window||"undefined"==typeof document||!Tt(window.location.host)||kt[e]===t||kt[e]||jt)return;function r(e){return`__firebase__banner__${e}`}kt[e]=t;const n="__firebase__banner",s=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(kt))kt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function i(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{jt=!0,function(){const e=document.getElementById(n);e&&e.remove()}()},e}function a(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(n),t=r("text"),a=document.getElementById(t)||document.createElement("span"),o=r("learnmore"),l=document.getElementById(o)||document.createElement("a"),c=r("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,o);const r=i();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,a,l,r),document.body.appendChild(t)}s?(a.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',a.innerText="Preview backend running in this workspace."),a.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Pt(){return!function(){const e=wt()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(ge){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class Rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dt.prototype.create)}}class Dt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(Ot,(e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`})}(s,r):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new Rt(n,a,r)}}const Ot=/\{\$([^}]+)}/g;function Lt(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const s of r){if(!n.includes(s))return!1;const r=e[s],i=t[s];if(Mt(r)&&Mt(i)){if(!Lt(r,i))return!1}else if(r!==i)return!1}for(const s of n)if(!r.includes(s))return!1;return!0}function Mt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}class Ft{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=Vt),void 0===n.error&&(n.error=Vt),void 0===n.complete&&(n.complete=Vt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(ge){}}),this.observers.push(n),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(ge){"undefined"!=typeof console&&console.error&&console.error(ge)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vt(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return e&&e._delegate?e._delegate:e}class $t{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ct;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(ge){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(ge){if(r)return null;throw ge}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch(ge){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(ge){}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,i]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(s)&&i.resolve(n)}return n}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);const s=this.instances.get(r);return s&&e(s,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===zt?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}var n;return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ht{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Gt||(Gt={}));const Wt={debug:Gt.DEBUG,verbose:Gt.VERBOSE,info:Gt.INFO,warn:Gt.WARN,error:Gt.ERROR,silent:Gt.SILENT},Kt=Gt.INFO,Jt={[Gt.DEBUG]:"log",[Gt.VERBOSE]:"log",[Gt.INFO]:"info",[Gt.WARN]:"warn",[Gt.ERROR]:"error"},Xt=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),s=Jt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${n}]  ${e.name}:`,...r)};class Qt{constructor(e){this.name=e,this._logLevel=Kt,this._logHandler=Xt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Gt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Wt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Gt.DEBUG,...e),this._logHandler(this,Gt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Gt.VERBOSE,...e),this._logHandler(this,Gt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Gt.INFO,...e),this._logHandler(this,Gt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Gt.WARN,...e),this._logHandler(this,Gt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Gt.ERROR,...e),this._logHandler(this,Gt.ERROR,...e)}}let Yt,Zt;const er=new WeakMap,tr=new WeakMap,rr=new WeakMap,nr=new WeakMap,sr=new WeakMap;let ir={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return tr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||rr.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return lr(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ar(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Zt||(Zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(cr(this),t),lr(er.get(this))}:function(...t){return lr(e.apply(cr(this),t))}:function(t,...r){const n=e.call(cr(this),t,...r);return rr.set(n,t.sort?t.sort():[t]),lr(n)}}function or(e){return"function"==typeof e?ar(e):(e instanceof IDBTransaction&&function(e){if(tr.has(e))return;const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});tr.set(e,t)}(e),t=e,(Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,ir):e);var t}function lr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(lr(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&er.set(t,e)}).catch(()=>{}),sr.set(t,e),t}(e);if(nr.has(e))return nr.get(e);const t=or(e);return t!==e&&(nr.set(e,t),sr.set(t,e)),t}const cr=e=>sr.get(e);const ur=["get","getKey","getAll","getAllKeys","count"],hr=["put","add","delete","clear"],dr=new Map;function mr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(dr.get(t))return dr.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,s=hr.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!s&&!ur.includes(r))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),s&&i.done]))[0]};return dr.set(t,i),i}ir=(e=>({...e,get:(t,r,n)=>mr(t,r)||e.get(t,r,n),has:(t,r)=>!!mr(t,r)||e.has(t,r)}))(ir);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const fr="@firebase/app",gr="0.14.5",yr=new Qt("@firebase/app"),xr="@firebase/app-compat",br="@firebase/analytics-compat",vr="@firebase/analytics",wr="@firebase/app-check-compat",Nr="@firebase/app-check",Er="@firebase/auth",Sr="@firebase/auth-compat",Cr="@firebase/database",Tr="@firebase/data-connect",_r="@firebase/database-compat",kr="@firebase/functions",jr="@firebase/functions-compat",Ir="@firebase/installations",Ar="@firebase/installations-compat",Pr="@firebase/messaging",Rr="@firebase/messaging-compat",Dr="@firebase/performance",Or="@firebase/performance-compat",Lr="@firebase/remote-config",Mr="@firebase/remote-config-compat",Ur="@firebase/storage",Fr="@firebase/storage-compat",Vr="@firebase/firestore",Br="@firebase/ai",$r="@firebase/firestore-compat",zr="firebase",qr="[DEFAULT]",Hr={[fr]:"fire-core",[xr]:"fire-core-compat",[vr]:"fire-analytics",[br]:"fire-analytics-compat",[Nr]:"fire-app-check",[wr]:"fire-app-check-compat",[Er]:"fire-auth",[Sr]:"fire-auth-compat",[Cr]:"fire-rtdb",[Tr]:"fire-data-connect",[_r]:"fire-rtdb-compat",[kr]:"fire-fn",[jr]:"fire-fn-compat",[Ir]:"fire-iid",[Ar]:"fire-iid-compat",[Pr]:"fire-fcm",[Rr]:"fire-fcm-compat",[Dr]:"fire-perf",[Or]:"fire-perf-compat",[Lr]:"fire-rc",[Mr]:"fire-rc-compat",[Ur]:"fire-gcs",[Fr]:"fire-gcs-compat",[Vr]:"fire-fst",[$r]:"fire-fst-compat",[Br]:"fire-vertex","fire-js":"fire-js",[zr]:"fire-js-all"},Gr=new Map,Wr=new Map,Kr=new Map;function Jr(e,t){try{e.container.addComponent(t)}catch(ge){yr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,ge)}}function Xr(e){const t=e.name;if(Kr.has(t))return yr.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,e);for(const r of Gr.values())Jr(r,e);for(const r of Wr.values())Jr(r,e);return!0}function Qr(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Yr(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Dt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="12.5.0";function rn(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const n={name:qr,automaticDataCollectionEnabled:!0,...t},s=n.name;if("string"!=typeof s||!s)throw Zr.create("bad-app-name",{appName:String(s)});if(r||(r=Et()),!r)throw Zr.create("no-options");const i=Gr.get(s);if(i){if(Lt(r,i.options)&&Lt(n,i.config))return i;throw Zr.create("duplicate-app",{appName:s})}const a=new Ht(s);for(const l of Kr.values())a.addComponent(l);const o=new en(r,n,a);return Gr.set(s,o),o}function nn(e=qr){const t=Gr.get(e);if(!t&&e===qr&&Et())return rn();if(!t)throw Zr.create("no-app",{appName:e});return t}function sn(e,t,r){let n=Hr[e]??e;r&&(n+=`-${r}`);const s=n.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${n}" with version "${t}":`];return s&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void yr.warn(e.join(" "))}Xr(new $t(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="firebase-heartbeat-store";let on=null;function ln(){return on||(on=function(e,t,{blocked:r,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),o=lr(a);return n&&a.addEventListener("upgradeneeded",e=>{n(lr(a.result),e.oldVersion,e.newVersion,lr(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(an)}catch(ge){console.warn(ge)}}}).catch(e=>{throw Zr.create("idb-open",{originalErrorMessage:e.message})})),on}async function cn(e,t){try{const r=(await ln()).transaction(an,"readwrite"),n=r.objectStore(an);await n.put(t,un(e)),await r.done}catch(ge){if(ge instanceof Rt)yr.warn(ge.message);else{const t=Zr.create("idb-set",{originalErrorMessage:ge?.message});yr.warn(t.message)}}}function un(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mn(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=dn();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(ge){yr.warn(ge)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=dn(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const s of e){const e=r.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),pn(r)>t){e.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),pn(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=xt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(ge){return yr.warn(ge),""}}}function dn(){return(new Date).toISOString().substring(0,10)}class mn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(ge){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(r){t(r)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ln()).transaction(an),r=await t.objectStore(an).get(un(e));return await t.done,r}catch(ge){if(ge instanceof Rt)yr.warn(ge.message);else{const t=Zr.create("idb-get",{originalErrorMessage:ge?.message});yr.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return cn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return cn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function pn(e){return xt(JSON.stringify({version:2,heartbeats:e})).length}var fn;fn="",Xr(new $t("platform-logger",e=>new pr(e),"PRIVATE")),Xr(new $t("heartbeat",e=>new hn(e),"PRIVATE")),sn(fr,gr,fn),sn(fr,gr,"esm2020"),sn("fire-js","");var gn,yn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function r(e,t,r){r||(r=0);const n=Array(16);if("string"==typeof t)for(var s=0;s<16;++s)n[s]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(s=0;s<16;++s)n[s]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],s=e.g[2];let i,a=e.g[3];i=t+(a^r&(s^a))+n[0]+3614090360&4294967295,i=a+(s^(t=r+(i<<7&4294967295|i>>>25))&(r^s))+n[1]+3905402710&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(r^a&(t^r))+n[2]+606105819&4294967295,i=r+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+n[3]+3250441966&4294967295,i=t+(a^(r=s+(i<<22&4294967295|i>>>10))&(s^a))+n[4]+4118548399&4294967295,i=a+(s^(t=r+(i<<7&4294967295|i>>>25))&(r^s))+n[5]+1200080426&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(r^a&(t^r))+n[6]+2821735955&4294967295,i=r+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+n[7]+4249261313&4294967295,i=t+(a^(r=s+(i<<22&4294967295|i>>>10))&(s^a))+n[8]+1770035416&4294967295,i=a+(s^(t=r+(i<<7&4294967295|i>>>25))&(r^s))+n[9]+2336552879&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(r^a&(t^r))+n[10]+4294925233&4294967295,i=r+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+n[11]+2304563134&4294967295,i=t+(a^(r=s+(i<<22&4294967295|i>>>10))&(s^a))+n[12]+1804603682&4294967295,i=a+(s^(t=r+(i<<7&4294967295|i>>>25))&(r^s))+n[13]+4254626195&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(r^a&(t^r))+n[14]+2792965006&4294967295,i=r+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+n[15]+1236535329&4294967295,i=t+(s^a&((r=s+(i<<22&4294967295|i>>>10))^s))+n[1]+4129170786&4294967295,i=a+(r^s&((t=r+(i<<5&4294967295|i>>>27))^r))+n[6]+3225465664&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^r&(a^t))+n[11]+643717713&4294967295,i=r+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+n[0]+3921069994&4294967295,i=t+(s^a&((r=s+(i<<20&4294967295|i>>>12))^s))+n[5]+3593408605&4294967295,i=a+(r^s&((t=r+(i<<5&4294967295|i>>>27))^r))+n[10]+38016083&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^r&(a^t))+n[15]+3634488961&4294967295,i=r+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+n[4]+3889429448&4294967295,i=t+(s^a&((r=s+(i<<20&4294967295|i>>>12))^s))+n[9]+568446438&4294967295,i=a+(r^s&((t=r+(i<<5&4294967295|i>>>27))^r))+n[14]+3275163606&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^r&(a^t))+n[3]+4107603335&4294967295,i=r+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+n[8]+1163531501&4294967295,i=t+(s^a&((r=s+(i<<20&4294967295|i>>>12))^s))+n[13]+2850285829&4294967295,i=a+(r^s&((t=r+(i<<5&4294967295|i>>>27))^r))+n[2]+4243563512&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^r&(a^t))+n[7]+1735328473&4294967295,i=r+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+n[12]+2368359562&4294967295,i=t+((r=s+(i<<20&4294967295|i>>>12))^s^a)+n[5]+4294588738&4294967295,i=a+((t=r+(i<<4&4294967295|i>>>28))^r^s)+n[8]+2272392833&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^r)+n[11]+1839030562&4294967295,i=r+((s=a+(i<<16&4294967295|i>>>16))^a^t)+n[14]+4259657740&4294967295,i=t+((r=s+(i<<23&4294967295|i>>>9))^s^a)+n[1]+2763975236&4294967295,i=a+((t=r+(i<<4&4294967295|i>>>28))^r^s)+n[4]+1272893353&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^r)+n[7]+4139469664&4294967295,i=r+((s=a+(i<<16&4294967295|i>>>16))^a^t)+n[10]+3200236656&4294967295,i=t+((r=s+(i<<23&4294967295|i>>>9))^s^a)+n[13]+681279174&4294967295,i=a+((t=r+(i<<4&4294967295|i>>>28))^r^s)+n[0]+3936430074&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^r)+n[3]+3572445317&4294967295,i=r+((s=a+(i<<16&4294967295|i>>>16))^a^t)+n[6]+76029189&4294967295,i=t+((r=s+(i<<23&4294967295|i>>>9))^s^a)+n[9]+3654602809&4294967295,i=a+((t=r+(i<<4&4294967295|i>>>28))^r^s)+n[12]+3873151461&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^r)+n[15]+530742520&4294967295,i=r+((s=a+(i<<16&4294967295|i>>>16))^a^t)+n[2]+3299628645&4294967295,i=t+(s^((r=s+(i<<23&4294967295|i>>>9))|~a))+n[0]+4096336452&4294967295,i=a+(r^((t=r+(i<<6&4294967295|i>>>26))|~s))+n[7]+1126891415&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~r))+n[14]+2878612391&4294967295,i=r+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+n[5]+4237533241&4294967295,i=t+(s^((r=s+(i<<21&4294967295|i>>>11))|~a))+n[12]+1700485571&4294967295,i=a+(r^((t=r+(i<<6&4294967295|i>>>26))|~s))+n[3]+2399980690&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~r))+n[10]+4293915773&4294967295,i=r+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+n[1]+2240044497&4294967295,i=t+(s^((r=s+(i<<21&4294967295|i>>>11))|~a))+n[8]+1873313359&4294967295,i=a+(r^((t=r+(i<<6&4294967295|i>>>26))|~s))+n[15]+4264355552&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~r))+n[6]+2734768916&4294967295,i=r+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+n[13]+1309151649&4294967295,i=t+(s^((r=s+(i<<21&4294967295|i>>>11))|~a))+n[4]+4149444226&4294967295,i=a+(r^((t=r+(i<<6&4294967295|i>>>26))|~s))+n[11]+3174756917&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~r))+n[2]+718787259&4294967295,i=r+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+a&4294967295}function n(e,t){this.h=t;const r=[];let n=!0;for(let s=e.length-1;s>=0;s--){const i=0|e[s];n&&i==t||(r[s]=i,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.F=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.D=function(e,r,n){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[r].apply(e,s)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const n=t-this.blockSize,s=this.C;let i=this.h,a=0;for(;a<t;){if(0==i)for(;a<=n;)r(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(s[i++]=e.charCodeAt(a++),i==this.blockSize){r(this,s),i=0;break}}else for(;a<t;)if(s[i++]=e[a++],i==this.blockSize){r(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var r=e.length-8;r<e.length;++r)e[r]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,r=0;r<4;++r)for(let n=0;n<32;n+=8)e[t++]=this.g[r]>>>n&255;return e};var s={};function i(e){return-128<=e&&e<128?function(e,t){var r=s;return Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=t(e)}(e,function(e){return new n([0|e],e<0?-1:0)}):new n([0|e],e<0?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return d(a(-e));const t=[];let r=1;for(let n=0;e>=r;n++)t[n]=e/r|0,r*=4294967296;return new n(t,0)}var o=i(0),l=i(1),c=i(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,r=[];for(let n=0;n<t;n++)r[n]=~e.g[n];return new n(r,~e.h).add(l)}function m(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function f(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new f(o,o);if(h(e))return t=g(d(e),t),new f(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new f(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var r=l,n=t;n.l(e)<=0;)r=y(r),n=y(n);var s=x(r,1),i=x(n,1);for(n=x(n,2),r=x(r,2);!u(n);){var c=i.add(n);c.l(e)<=0&&(s=s.add(r),i=c),n=x(n,1),r=x(r,1)}return t=m(e,s.j(t)),new f(s,t)}for(s=o;e.l(t)>=0;){for(r=Math.max(1,Math.floor(e.m()/t.m())),n=(n=Math.ceil(Math.log(r)/Math.LN2))<=48?1:Math.pow(2,n-48),c=(i=a(r)).j(t);h(c)||c.l(e)>0;)c=(i=a(r-=n)).j(t);u(i)&&(i=l),s=s.add(i),e=m(e,c)}return new f(s,e)}function y(e){const t=e.g.length+1,r=[];for(let n=0;n<t;n++)r[n]=e.i(n)<<1|e.i(n-1)>>>31;return new n(r,e.h)}function x(e,t){const r=t>>5;t%=32;const s=e.g.length-r,i=[];for(let n=0;n<s;n++)i[n]=t>0?e.i(n+r)>>>t|e.i(n+r+1)<<32-t:e.i(n+r);return new n(i,e.h)}(e=n.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let r=0;r<this.g.length;r++){const n=this.i(r);e+=(n>=0?n:4294967296+n)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=a(Math.pow(e,6));var r=this;let n="";for(;;){const s=g(r,t).g;let i=(((r=m(r,s.j(t))).g.length>0?r.g[0]:r.h)>>>0).toString(e);if(u(r=s))return i+n;for(;i.length<6;)i="0"+i;n=i+n}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=m(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),r=[];let s=0;for(let n=0;n<=t;n++){let t=s+(65535&this.i(n))+(65535&e.i(n)),i=(t>>>16)+(this.i(n)>>>16)+(e.i(n)>>>16);s=i>>>16,t&=65535,i&=65535,r[n]=i<<16|t}return new n(r,-2147483648&r[r.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(c)<0&&e.l(c)<0)return a(this.m()*e.m());const t=this.g.length+e.g.length,r=[];for(var s=0;s<2*t;s++)r[s]=0;for(s=0;s<this.g.length;s++)for(let t=0;t<e.g.length;t++){const n=this.i(s)>>>16,i=65535&this.i(s),a=e.i(t)>>>16,o=65535&e.i(t);r[2*s+2*t]+=i*o,p(r,2*s+2*t),r[2*s+2*t+1]+=n*o,p(r,2*s+2*t+1),r[2*s+2*t+1]+=i*a,p(r,2*s+2*t+1),r[2*s+2*t+2]+=n*a,p(r,2*s+2*t+2)}for(e=0;e<t;e++)r[e]=r[2*e+1]<<16|r[2*e];for(e=t;e<2*t;e++)r[e]=0;return new n(r,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),r=[];for(let n=0;n<t;n++)r[n]=this.i(n)&e.i(n);return new n(r,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),r=[];for(let n=0;n<t;n++)r[n]=this.i(n)|e.i(n);return new n(r,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),r=[];for(let n=0;n<t;n++)r[n]=this.i(n)^e.i(n);return new n(r,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.B,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=a,n.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if((r=r||10)<2||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return d(e(t.substring(1),r));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=a(Math.pow(r,8));let s=o;for(let o=0;o<t.length;o+=8){var i=Math.min(8,t.length-o);const e=parseInt(t.substring(o,o+i),r);i<8?(i=a(Math.pow(r,i)),s=s.j(i).add(a(e))):(s=s.j(n),s=s.add(a(e)))}return s},gn=n}).apply(void 0!==yn?yn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var xn,bn,vn,wn,Nn,En,Sn,Cn,Tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Tn&&Tn];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function n(e,n){if(n)e:{var s=r;e=e.split(".");for(var i=0;i<e.length-1;i++){var a=e[i];if(!(a in s))break e;s=s[a]}(n=n(i=s[e=e[e.length-1]]))!=i&&null!=n&&t(s,e,{configurable:!0,writable:!0,value:n})}}n("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),n("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),n("Object.entries",function(e){return e||function(e){var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push([t,e[t]]);return r}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},i=this||self;function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,r){return e.call.apply(e.bind,arguments)}function l(e,t,r){return(l=o).apply(null,arguments)}function c(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function r(){}r.prototype=t.prototype,e.Z=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Ob=function(e,r,n){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[r].apply(e,s)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function m(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];var r=typeof t;if("array"==(r="object"!=r?r:t?Array.isArray(t)?"array":r:"null")||"object"==r&&"number"==typeof t.length){r=e.length||0;const n=t.length||0;e.length=r+n;for(let s=0;s<n;s++)e[r+s]=t[s]}else e.push(t)}}function p(e){i.setTimeout(()=>{throw e},0)}function f(){var e=v;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let x,b=!1,v=new class{constructor(){this.h=this.g=null}add(e,t){const r=g.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},w=()=>{const e=Promise.resolve(void 0);x=()=>{e.then(N)}};function N(){for(var e;e=f();){try{e.h.call(e.g)}catch(Ne){p(Ne)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}b=!1}function E(){this.u=this.u,this.C=this.C}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(Ne){}return e}();function T(e){return/^[\s\xa0]*$/.test(e)}function _(e,t){S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(_,S),_.prototype.init=function(e,t){const r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement)),this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&_.Z.h.call(this)},_.prototype.h=function(){_.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),j=0;function I(e,t,r,n,s){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=s,this.key=++j,this.da=this.fa=!1}function A(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function P(e,t,r){for(const n in e)t.call(r,e[n],n,e)}function R(e){const t={};for(const r in e)t[r]=e[r];return t}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(e,t){let r,n;for(let s=1;s<arguments.length;s++){for(r in n=arguments[s],n)e[r]=n[r];for(let t=0;t<D.length;t++)r=D[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function L(e){this.src=e,this.g={},this.h=0}function M(e,t){const r=t.type;if(r in e.g){var n,s=e.g[r],i=Array.prototype.indexOf.call(s,t,void 0);(n=i>=0)&&Array.prototype.splice.call(s,i,1),n&&(A(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function U(e,t,r,n){for(let s=0;s<e.length;++s){const i=e[s];if(!i.da&&i.listener==t&&i.capture==!!r&&i.ha==n)return s}return-1}L.prototype.add=function(e,t,r,n,s){const i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);const a=U(e,t,n,s);return a>-1?(t=e[a],r||(t.fa=!1)):((t=new I(t,this.src,i,!!n,s)).fa=r,e.push(t)),t};var F="closure_lm_"+(1e6*Math.random()|0),V={};function B(e,t,r,n,s){if(n&&n.once)return z(e,t,r,n,s);if(Array.isArray(t)){for(let i=0;i<t.length;i++)B(e,t[i],r,n,s);return null}return r=X(r),e&&e[k]?e.J(t,r,a(n)?!!n.capture:!!n,s):$(e,t,r,!1,n,s)}function $(e,t,r,n,s,i){if(!t)throw Error("Invalid event type");const o=a(s)?!!s.capture:!!s;let l=K(e);if(l||(e[F]=l=new L(e)),(r=l.add(t,r,n,o,i)).proxy)return r;if(n=function(){function e(r){return t.call(e.src,e.listener,r)}const t=W;return e}(),r.proxy=n,n.src=e,n.listener=r,e.addEventListener)C||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),n,s);else if(e.attachEvent)e.attachEvent(G(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return r}function z(e,t,r,n,s){if(Array.isArray(t)){for(let i=0;i<t.length;i++)z(e,t[i],r,n,s);return null}return r=X(r),e&&e[k]?e.K(t,r,a(n)?!!n.capture:!!n,s):$(e,t,r,!0,n,s)}function q(e,t,r,n,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)q(e,t[i],r,n,s);else n=a(n)?!!n.capture:!!n,r=X(r),e&&e[k]?(e=e.i,(i=String(t).toString())in e.g&&((r=U(t=e.g[i],r,n,s))>-1&&(A(t[r]),Array.prototype.splice.call(t,r,1),0==t.length&&(delete e.g[i],e.h--)))):e&&(e=K(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,r,n,s)),(r=e>-1?t[e]:null)&&H(r))}function H(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[k])M(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(G(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=K(t))?(M(r,e),0==r.h&&(r.src=null,t[F]=null)):A(e)}}}function G(e){return e in V?V[e]:V[e]="on"+e}function W(e,t){if(e.da)e=!0;else{t=new _(t,this);const r=e.listener,n=e.ha||e.src;e.fa&&H(e),e=r.call(n,t)}return e}function K(e){return(e=e[F])instanceof L?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function Q(){E.call(this),this.i=new L(this),this.M=this,this.G=null}function Y(e,t){var r,n=e.G;if(n)for(r=[];n;n=n.G)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var s=t;O(t=new S(n,e),s)}let i,a;if(s=!0,r)for(a=r.length-1;a>=0;a--)i=t.g=r[a],s=Z(i,n,!0,t)&&s;if(i=t.g=e,s=Z(i,n,!0,t)&&s,s=Z(i,n,!1,t)&&s,r)for(a=0;a<r.length;a++)i=t.g=r[a],s=Z(i,n,!1,t)&&s}function Z(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let s=!0;for(let i=0;i<t.length;++i){const a=t[i];if(a&&!a.da&&a.capture==r){const t=a.listener,r=a.ha||a.src;a.fa&&M(e.i,a),s=!1!==t.call(r,n)&&s}}return s&&!n.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:i.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(Q,E),Q.prototype[k]=!0,Q.prototype.removeEventListener=function(e,t,r,n){q(this,e,t,r,n)},Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const r=e.g[t];for(let e=0;e<r.length;e++)A(r[e]);delete e.g[t],e.h--}}this.G=null},Q.prototype.J=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},Q.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class te extends E{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(e){E.call(this),this.h=e,this.g={}}u(re,E);var ne=[];function se(e){P(e.g,function(e,t){this.g.hasOwnProperty(t)&&H(e)},e),e.g={}}re.prototype.N=function(){re.Z.N.call(this),se(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ie=i.JSON.stringify,ae=i.JSON.parse,oe=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function le(){}function ce(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function he(){S.call(this,"d")}function de(){S.call(this,"c")}u(he,S),u(de,S);var pe={},ge=null;function ye(){return ge=ge||new Q}function xe(e){S.call(this,pe.Ia,e)}function ve(e){const t=ye();Y(t,new xe(t))}function we(e,t){S.call(this,pe.STAT_EVENT,e),this.stat=t}function Ee(e){const t=ye();Y(t,new we(t,e))}function Se(e,t){S.call(this,pe.Ja,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function Te(){this.g=!0}function _e(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var r=i[e];if(!(r.length<2)){var n=r[1];if(Array.isArray(n)&&!(n.length<1)){var s=n[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let e=1;e<n.length;e++)n[e]=""}}}return ie(i)}catch(Oe){return t}}(e,r)+(n?" "+n:"")})}pe.Ia="serverreachability",u(xe,S),pe.STAT_EVENT="statevent",u(we,S),pe.Ja="timingevent",u(Se,S),Te.prototype.ua=function(){this.g=!1},Te.prototype.info=function(){};var ke,je={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ie={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Ae(){}function Pe(e){return encodeURIComponent(String(e))}function Re(e){var t=1;e=e.split(":");const r=[];for(;t>0&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}function De(e,t,r,n){this.j=e,this.i=t,this.l=r,this.S=n||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}u(Ae,le),Ae.prototype.g=function(){return new XMLHttpRequest},ke=new Ae;var Me={},Ue={};function Fe(e,t,r){e.M=1,e.A=ut(it(t)),e.u=r,e.R=!0,Ve(e,null)}function Ve(e,t){e.F=Date.now(),ze(e),e.B=it(e.A);var r=e.B,n=e.S;Array.isArray(n)||(n=[String(n)]),St(r.i,"t",n),e.C=0,r=e.j.L,e.h=new Le,e.g=ur(e.j,r?t:null,!e.u),e.P>0&&(e.O=new te(l(e.Y,e,e.g),e.P)),t=e.V,r=e.g,n=e.ba;var s="readystatechange";Array.isArray(s)||(s&&(ne[0]=s.toString()),s=ne);for(let i=0;i<s.length;i++){const e=B(r,s[i],n||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?R(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ve(),function(e,t,r,n,s,i){e.info(function(){if(e.g)if(i){var a="",o=i.split("&");for(let e=0;e<o.length;e++){var l=o[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");a=t.length>=2&&"type"==t[1]?a+(e+"=")+l+"&":a+(e+"=redacted&")}}}else a=null;else a=i;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+t+"\n"+r+"\n"+a})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Be(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function $e(e,t){var r=e.C,n=t.indexOf("\n",r);return-1==n?Ue:(r=Number(t.substring(r,n)),isNaN(r)?Me:(n+=1)+r>t.length?Ue:(t=t.slice(n,n+r),e.C=n+r,t))}function ze(e){e.T=Date.now()+e.H,qe(e,e.H)}function qe(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ce(l(e.aa,e),t)}function He(e){e.D&&(i.clearTimeout(e.D),e.D=null)}function Ge(e){0==e.j.I||e.K||ir(e.j,e)}function We(e){He(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,se(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function Ke(e,t){try{var r=e.j;if(0!=r.I&&(r.g==e||Ze(r.h,e)))if(!e.L&&Ze(r.h,e)&&3==r.I){try{var n=r.Ba.g.parse(t)}catch(u){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){e:if(!r.v){if(r.g){if(!(r.g.F+3e3<e.F))break e;sr(r),Kt(r)}tr(r),Ee(18)}}else r.xa=s[1],0<r.xa-r.K&&s[2]<37500&&r.F&&0==r.A&&!r.C&&(r.C=Ce(l(r.Va,r),6e3));Ye(r.h)<=1&&r.ta&&(r.ta=void 0)}else or(r,11)}else if((e.L||r.g==e)&&sr(r),!T(t))for(s=r.Ba.g.parse(t),t=0;t<s.length;t++){let l=s[t];const u=l[0];if(!(u<=r.K))if(r.K=u,l=l[1],2==r.I)if("c"==l[0]){r.M=l[1],r.ba=l[2];const t=l[3];null!=t&&(r.ka=t,r.j.info("VER="+r.ka));const s=l[4];null!=s&&(r.za=s,r.j.info("SVER="+r.za));const u=l[5];null!=u&&"number"==typeof u&&u>0&&(n=1.5*u,r.O=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=n.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(et(i,i.h),i.h=null))}if(n.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.wa=e,ct(n.J,n.G,e))}}r.I=3,r.l&&r.l.ra(),r.aa&&(r.T=Date.now()-e.F,r.j.info("Handshake RTT: "+r.T+"ms"));var a=e;if((n=r).na=cr(n,n.L?n.ba:null,n.W),a.L){tt(n.h,a);var o=a,c=n.O;c&&(o.H=c),o.D&&(He(o),ze(o)),n.g=a}else er(n);r.i.length>0&&Xt(r)}else"stop"!=l[0]&&"close"!=l[0]||or(r,7);else 3==r.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?or(r,7):Wt(r):"noop"!=l[0]&&r.l&&r.l.qa(l),r.A=0)}ve()}catch(u){}}De.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==zt(e)?t.j():this.Y(e)},De.prototype.Y=function(e){try{if(e==this.g)e:{const l=zt(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||qt(this.g)))){this.K||4!=l||7==c||ve(),He(this);var t=this.g.ca();this.X=t;var r=function(e){if(!Be(e))return e.g.la();const t=qt(e.g);if(""===t)return"";let r="";const n=t.length,s=4==zt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return We(e),Ge(e),"";e.h.i=new i.TextDecoder}for(let i=0;i<n;i++)e.h.h=!0,r+=e.h.i.decode(t[i],{stream:!(s&&i==n-1)});return t.length=0,e.h.g+=r,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,r,n,s,i,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+t+"\n"+r+"\n"+i+" "+a})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var n,s=this.g;if((n=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(n)){var a=n;break t}}a=null}if(!(e=a)){this.o=!1,this.m=3,Ee(12),We(this),Ge(this);break e}_e(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<r.length;){if(t=$e(this,r),t==Ue){4==l&&(this.m=4,Ee(14),e=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}if(t==Me){this.m=4,Ee(15),_e(this.i,this.l,r,"[Invalid Chunk]"),e=!1;break}_e(this.i,this.l,t,null),Ke(this,t)}if(Be(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=r.length||this.h.h||(this.m=1,Ee(16),e=!1),this.o=this.o&&e,e){if(r.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),rr(o),o.P=!0,Ee(11))}}else _e(this.i,this.l,r,"[Invalid Chunked Response]"),We(this),Ge(this)}else _e(this.i,this.l,r,null),Ke(this,r);4==l&&We(this),this.o&&!this.K&&(4==l?ir(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&zt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(T(e[n]))continue;var r=Re(e[n]);const s=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();const i=t[s]||[];t[s]=i,i.push(r)}!function(e,t){for(const r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&r.indexOf("Unknown SID")>0?(this.m=3,Ee(12)):(this.m=0,Ee(13)),We(this),Ge(this)}}}catch(as){}},De.prototype.cancel=function(){this.K=!0,We(this)},De.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ve(),Ee(17)),We(this),this.m=2,Ge(this)):qe(this,this.T-e)};var Je=class{constructor(e,t){this.g=e,this.map=t}};function Xe(e){this.l=e||10,i.PerformanceNavigationTiming?e=(e=i.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Ze(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function et(e,t){e.g?e.g.add(t):e.h=t}function tt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function rt(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const r of e.g.values())t=t.concat(r.G);return t}return d(e.i)}Xe.prototype.cancel=function(){if(this.i=rt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function st(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof st?(this.l=e.l,at(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.u),this.h=e.h,lt(this,Ct(e.i)),this.m=e.m):e&&(t=String(e).match(nt))?(this.l=!1,at(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),ot(this,t[4]),this.h=ht(t[5]||"",!0),lt(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.l=!1,this.i=new bt(null,this.l))}function it(e){return new st(e)}function at(e,t,r){e.j=r?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function lt(e,t,r){t instanceof bt?(e.i=t,function(e,t){t&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(e,t){const r=t.toLowerCase();t!=r&&(wt(this,t),St(this,r,e))},e)),e.j=t}(e.i,e.l)):(r||(t=dt(t,yt)),e.i=new bt(t,e.l))}function ct(e,t,r){e.i.set(t,r)}function ut(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,mt),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}st.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(dt(t,pt,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(Pe(r).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.u)&&e.push(":",String(r))),(r=this.h)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(dt(r,"/"==r.charAt(0)?gt:ft,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",dt(r,xt)),e.join("")},st.prototype.resolve=function(e){const t=it(this);let r=!!e.j;r?at(t,e.j):r=!!e.o,r?t.o=e.o:r=!!e.g,r?t.g=e.g:r=null!=e.u;var n=e.h;if(r)ot(t,e.u);else if(r=!!e.h){if("/"!=n.charAt(0))if(this.g&&!this.h)n="/"+n;else{var s=t.h.lastIndexOf("/");-1!=s&&(n=t.h.slice(0,s+1)+n)}if(".."==(s=n)||"."==s)n="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){n=0==s.lastIndexOf("/",0),s=s.split("/");const e=[];for(let t=0;t<s.length;){const r=s[t++];"."==r?n&&t==s.length&&e.push(""):".."==r?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),n&&t==s.length&&e.push("")):(e.push(r),n=!0)}n=e.join("/")}else n=s}return r?t.h=n:r=""!==e.i.toString(),r?lt(t,Ct(e.i)):r=!!e.m,r&&(t.m=e.m),t};var pt=/[#\/\?@]/g,ft=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,xt=/#/g;function bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let r=0;r<e.length;r++){const n=e[r].indexOf("=");let s,i=null;n>=0?(s=e[r].substring(0,n),i=e[r].substring(n+1)):s=e[r],t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function wt(e,t){vt(e),t=Tt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Nt(e,t){return vt(e),t=Tt(e,t),e.g.has(t)}function Et(e,t){vt(e);let r=[];if("string"==typeof t)Nt(e,t)&&(r=r.concat(e.g.get(Tt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)r=r.concat(e[t]);return r}function St(e,t,r){wt(e,t),r.length>0&&(e.i=null,e.g.set(Tt(e,t),d(r)),e.h+=r.length)}function Ct(e){const t=new bt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function Tt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _t(e,t,r,n,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),n(r)}catch(Oe){}}function kt(){this.g=new oe}function jt(e){this.i=e.Sb||null,this.h=e.ab||!1}function It(e,t){Q.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function At(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Pt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Rt(e)}function Rt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t="";return P(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function Ot(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=Dt(r),"string"==typeof e?null!=r&&Pe(r):ct(e,t,r))}function Lt(e){Q.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=bt.prototype).add=function(e,t){vt(this),this.i=null,e=Tt(this,e);let r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},e.forEach=function(e,t){vt(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},e.set=function(e,t){return vt(this),this.i=null,Nt(this,e=Tt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=Et(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let n=0;n<t.length;n++){var r=t[n];const s=Pe(r);r=Et(this,r);for(let t=0;t<r.length;t++){let n=s;""!==r[t]&&(n+="="+Pe(r[t])),e.push(n)}}return this.i=e.join("&")},u(jt,le),jt.prototype.g=function(){return new It(this.i,this.h)},u(It,Q),(e=It.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Rt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||i).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Pt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rt(this)),this.g&&(this.readyState=3,Rt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;At(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pt(this):Rt(this),3==this.readyState&&At(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Pt(this))},e.Na=function(e){this.g&&(this.response=e,Pt(this))},e.ga=function(){this.g&&Pt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var r=t.next();!r.done;)r=r.value,e.push(r[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(It.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(Lt,Q);var Mt=/^https?$/i,Ut=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Vt(e),$t(e)}function Vt(e){e.A||(e.A=!0,Y(e,"complete"),Y(e,"error"))}function Bt(e){if(e.h&&void 0!==s)if(e.v&&4==zt(e))setTimeout(e.Ca.bind(e),0);else if(Y(e,"readystatechange"),4==zt(e)){e.h=!1;try{const s=e.ca();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var r;if(!(r=t)){var n;if(n=0===s){let t=String(e.D).match(nt)[1]||null;!t&&i.self&&i.self.location&&(t=i.self.location.protocol.slice(0,-1)),n=!Mt.test(t?t.toLowerCase():"")}r=n}if(r)Y(e,"complete"),Y(e,"success");else{e.o=6;try{var a=zt(e)>2?e.g.statusText:""}catch(fe){a=""}e.l=a+" ["+e.ca()+"]",Vt(e)}}finally{$t(e)}}}function $t(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||Y(e,"ready");try{r.onreadystatechange=null}catch(me){}}}function zt(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ht(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function Gt(e){this.za=0,this.i=[],this.j=new Te,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ht("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ht("baseRetryDelayMs",5e3,e),this.Za=Ht("retryDelaySeedMs",1e4,e),this.Ta=Ht("forwardChannelMaxRetries",2,e),this.va=Ht("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Xe(e&&e.concurrentRequestLimit),this.Ba=new kt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Wt(e){if(Jt(e),3==e.I){var t=e.V++,r=it(e.J);if(ct(r,"SID",e.M),ct(r,"RID",t),ct(r,"TYPE","terminate"),Yt(e,r),(t=new De(e,e.j,t)).M=2,t.A=ut(it(r)),r=!1,i.navigator&&i.navigator.sendBeacon)try{r=i.navigator.sendBeacon(t.A.toString(),"")}catch(me){}!r&&i.Image&&((new Image).src=t.A,r=!0),r||(t.g=ur(t.j,null),t.g.ea(t.A)),t.F=Date.now(),ze(t)}lr(e)}function Kt(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jt(e){Kt(e),e.v&&(i.clearTimeout(e.v),e.v=null),sr(e),e.h.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function Xt(e){if(!Qe(e.h)&&!e.m){e.m=!0;var t=e.Ea;x||w(),b||(x(),b=!0),v.add(t,e),e.D=0}}function Qt(e,t){var r;r=t?t.l:e.V++;const n=it(e.J);ct(n,"SID",e.M),ct(n,"RID",r),ct(n,"AID",e.K),Yt(e,n),e.u&&e.o&&Ot(n,e.u,e.o),r=new De(e,e.j,r,e.D+1),null===e.u&&(r.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Zt(e,r,1e3),r.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),et(e.h,r),Fe(r,n,t)}function Yt(e,t){e.H&&P(e.H,function(e,r){ct(t,r,e)}),e.l&&P({},function(e,r){ct(t,r,e)})}function Zt(e,t,r){r=Math.min(e.i.length,r);const n=e.l?l(e.l.Ka,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+r];-1==t?r>0?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<r;c++){var i=s[c].g;const r=s[c].map;if((i-=t)<0)t=Math.max(0,s[c].g-100),l=!1;else try{i="req"+i+"_"||"";try{var o=r instanceof Map?r:Object.entries(r);for(const[t,r]of o){let n=r;a(r)&&(n=ie(r)),e.push(i+t+"="+encodeURIComponent(n))}}catch(kn){throw e.push(i+"type="+encodeURIComponent("_badmap")),kn}}catch(kn){n&&n(r)}}if(l){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,r),t.G=e,o}function er(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;x||w(),b||(x(),b=!0),v.add(t,e),e.A=0}}function tr(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ce(l(e.Da,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new De(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=it(e.na);ct(t,"RID","rpc"),ct(t,"SID",e.M),ct(t,"AID",e.K),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&ct(t,"TO",e.ia),ct(t,"TYPE","xmlhttp"),Yt(e,t),e.u&&e.o&&Ot(t,e.u,e.o),e.O&&(e.g.H=e.O);var r=e.g;e=e.ba,r.M=1,r.A=ut(it(t)),r.u=null,r.R=!0,Ve(r,e)}function sr(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function ir(e,t){var r=null;if(e.g==t){sr(e),rr(e),e.g=null;var n=2}else{if(!Ze(e.h,t))return;r=t.G,tt(e.h,t),n=1}if(0!=e.I)if(t.o)if(1==n){r=t.u?t.u.length:0,t=Date.now()-t.F;var s=e.D;Y(n=ye(),new Se(n,r)),Xt(e)}else er(e);else if(3==(s=t.m)||0==s&&t.X>0||!(1==n&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Ce(l(e.Ea,e,t),ar(e,e.D)),e.D++,0)))}(e,t)||2==n&&tr(e)))switch(r&&r.length>0&&(t=e.h,t.i=t.i.concat(r)),s){case 1:or(e,5);break;case 4:or(e,10);break;case 3:or(e,6);break;default:or(e,2)}}function ar(e,t){let r=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(r*=2),r*t}function or(e,t){if(e.j.info("Error code "+t),2==t){var r=l(e.bb,e),n=e.Ua;const t=!n;n=new st(n||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||at(n,"https"),ut(n),t?function(e,t){const r=new Te;if(i.Image){const n=new Image;n.onload=c(_t,r,"TestLoadImage: loaded",!0,t,n),n.onerror=c(_t,r,"TestLoadImage: error",!1,t,n),n.onabort=c(_t,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=c(_t,r,"TestLoadImage: timeout",!1,t,n),i.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){new Te;const r=new AbortController,n=setTimeout(()=>{r.abort(),_t(0,0,!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(n),e.ok?_t(0,0,!0,t):_t(0,0,!1,t)}).catch(()=>{clearTimeout(n),_t(0,0,!1,t)})}(n.toString(),r)}else Ee(2);e.I=0,e.l&&e.l.pa(t),lr(e),Jt(e)}function lr(e){if(e.I=0,e.ja=[],e.l){const t=rt(e.h);0==t.length&&0==e.i.length||(m(e.ja,t),m(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function cr(e,t,r){var n=r instanceof st?it(r):new st(r);if(""!=n.g)t&&(n.g=t+"."+n.g),ot(n,n.u);else{var s=i.location;n=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;const e=new st(null);n&&at(e,n),t&&(e.g=t),s&&ot(e,s),r&&(e.h=r),n=e}return r=e.G,t=e.wa,r&&t&&ct(n,r,t),ct(n,"VER",e.ka),Yt(e,n),n}function ur(e,t,r){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Lt(new jt({ab:r})):new Lt(e.ma)).Fa(e.L),t}function hr(){}function dr(){}function mr(e,t){Q.call(this),this.g=new Gt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!T(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!T(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new gr(this)}function pr(e){he.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function fr(){de.call(this),this.status=1}function gr(e){this.g=e}(e=Lt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ke.g(),this.g.onreadystatechange=h(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(Oe){return void Ft(this,Oe)}if(e=r||"",r=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)r.set(s,n[s]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const e of n.keys())r.set(e,n.get(e))}n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(Array.prototype.indexOf.call(Ut,t,void 0)>=0)||n||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of r)this.g.setRequestHeader(i,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(Oe){Ft(this,Oe)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Y(this,"complete"),Y(this,"abort"),$t(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$t(this,!0)),Lt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Bt(this):this.Xa())},e.Xa=function(){Bt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return zt(this)>2?this.g.status:-1}catch(be){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(be){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ae(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Gt.prototype).ka=8,e.I=1,e.connect=function(e,t,r,n){Ee(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.J=cr(this,null,this.W),Xt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new De(this,this.j,e);let i=this.o;if(this.U&&(i?(i=R(i),O(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)e:{for(var t=0,r=0;r<this.i.length;r++){var n=this.i[r];if(void 0===(n="__data__"in n.map&&"string"==typeof(n=n.map.__data__)?n.length:void 0))break;if((t+=n)>4096){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=Zt(this,s,t),ct(r=it(this.J),"RID",e),ct(r,"CVER",22),this.G&&ct(r,"X-HTTP-Session-Id",this.G),Yt(this,r),i&&(this.R?t="headers="+Pe(Dt(i))+"&"+t:this.u&&Ot(r,this.u,i)),et(this.h,s),this.Ra&&ct(r,"TYPE","init"),this.S?(ct(r,"$req",t),ct(r,"SID","null"),s.U=!0,Fe(s,r,null)):Fe(s,r,t),this.I=2}}else 3==this.I&&(e?Qt(this,e):0==this.i.length||Qe(this.h)||Qt(this))},e.Da=function(){if(this.v=null,nr(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ce(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ee(10),Kt(this),nr(this))},e.Va=function(){null!=this.C&&(this.C=null,Kt(this),tr(this),Ee(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hr.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},dr.prototype.g=function(e,t){return new mr(e,t)},u(mr,Q),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mr.prototype.close=function(){Wt(this.g)},mr.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=ie(e),e=r);t.i.push(new Je(t.Ya++,e)),3==t.I&&Xt(t)},mr.prototype.N=function(){this.g.l=null,delete this.j,Wt(this.g),delete this.g,mr.Z.N.call(this)},u(pr,he),u(fr,de),u(gr,hr),gr.prototype.ra=function(){Y(this.g,"a")},gr.prototype.qa=function(e){Y(this.g,new pr(e))},gr.prototype.pa=function(e){Y(this.g,new fr)},gr.prototype.oa=function(){Y(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,mr.prototype.send=mr.prototype.o,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,Cn=function(){return new dr},Sn=function(){return ye()},En=pe,Nn={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},je.NO_ERROR=0,je.TIMEOUT=8,je.HTTP_ERROR=6,wn=je,Ie.COMPLETE="complete",vn=Ie,ce.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",Q.prototype.listen=Q.prototype.J,bn=ce,Lt.prototype.listenOnce=Lt.prototype.K,Lt.prototype.getLastError=Lt.prototype.Ha,Lt.prototype.getLastErrorCode=Lt.prototype.ya,Lt.prototype.getStatus=Lt.prototype.ca,Lt.prototype.getResponseJson=Lt.prototype.La,Lt.prototype.getResponseText=Lt.prototype.la,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Fa,xn=Lt}).apply(void 0!==Tn?Tn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const _n="@firebase/firestore",kn="4.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jn.UNAUTHENTICATED=new jn(null),jn.GOOGLE_CREDENTIALS=new jn("google-credentials-uid"),jn.FIRST_PARTY=new jn("first-party-uid"),jn.MOCK_USER=new jn("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let In="12.3.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Qt("@firebase/firestore");function Pn(){return An.logLevel}function Rn(e,...t){if(An.logLevel<=Gt.DEBUG){const r=t.map(Ln);An.debug(`Firestore (${In}): ${e}`,...r)}}function Dn(e,...t){if(An.logLevel<=Gt.ERROR){const r=t.map(Ln);An.error(`Firestore (${In}): ${e}`,...r)}}function On(e,...t){if(An.logLevel<=Gt.WARN){const r=t.map(Ln);An.warn(`Firestore (${In}): ${e}`,...r)}}function Ln(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(ye){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,Un(e,n,r)}function Un(e,t,r){let n=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw Dn(n),new Error(n)}function Fn(e,t,r,n){let s="Unexpected state";"string"==typeof r?s=r:n=r,e||Un(t,s,n)}function Vn(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $n extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jn.UNAUTHENTICATED))}shutdown(){}}class Gn{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Wn{constructor(e){this.t=e,this.currentUser=jn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fn(void 0===this.o,42304);let r=this.i;const n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>n(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{Rn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Rn("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Rn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fn("string"==typeof t.accessToken,31837,{l:t}),new qn(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fn(null===e||"string"==typeof e,2055,{h:e}),new jn(e)}}class Kn{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=jn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jn{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Kn(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(jn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xn{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qn{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fn(void 0===this.o,3512);const r=e=>{null!=e.error&&Rn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const r=e.token!==this.m;return this.m=e.token,Rn("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};const n=e=>{Rn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?n(e):Rn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xn(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Fn("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Xn(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const r=Yn(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function es(e,t){return e<t?-1:e>t?1:0}function ts(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const r=e.charAt(n),s=t.charAt(n);if(r!==s)return ss(r)===ss(s)?es(r,s):ss(r)?1:-1}return es(e.length,t.length)}const rs=55296,ns=57343;function ss(e){const t=e.charCodeAt(0);return t>=rs&&t<=ns}function is(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="__name__";class os{constructor(e,t,r){void 0===t?t=0:t>e.length&&Mn(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&Mn(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===os.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof os?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const r=os.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return es(e.length,t.length)}static compareSegments(e,t){const r=os.isNumericId(e),n=os.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?os.extractNumericId(e).compare(os.extractNumericId(t)):ts(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gn.fromString(e.substring(4,e.length-2))}}class ls extends os{construct(e,t,r){return new ls(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $n(Bn.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new ls(t)}static emptyPath(){return new ls([])}}const cs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class us extends os{construct(e,t,r){return new us(e,t,r)}static isValidIdentifier(e){return cs.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),us.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===as}static keyField(){return new us([as])}static fromServerFormat(e){const t=[];let r="",n=0;const s=()=>{if(0===r.length)throw new $n(Bn.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let i=!1;for(;n<e.length;){const t=e[n];if("\\"===t){if(n+1===e.length)throw new $n(Bn.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new $n(Bn.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(i=!i,n++):"."!==t||i?(r+=t,n++):(s(),n++)}if(s(),i)throw new $n(Bn.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new us(t)}static emptyPath(){return new us([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.path=e}static fromPath(e){return new hs(ls.fromString(e))}static fromName(e){return new hs(ls.fromString(e).popFirst(5))}static empty(){return new hs(ls.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ls.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ls.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new hs(new ls(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e){if(!hs.isDocumentKey(e))throw new $n(Bn.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ms(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function ps(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mn(12329,{type:typeof e})}function fs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new $n(Bn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=ps(e);throw new $n(Bn.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e,t){const r={typeString:e};return t&&(r.value=t),r}function ys(e,t){if(!ms(e))throw new $n(Bn.INVALID_ARGUMENT,"JSON must be an object");let r;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}const a=e[n];if(s&&typeof a!==s){r=`JSON field '${n}' must be a ${s}.`;break}if(void 0!==i&&a!==i.value){r=`Expected '${n}' field to equal '${i.value}'`;break}}if(r)throw new $n(Bn.INVALID_ARGUMENT,r);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=-62135596800,bs=1e6;class vs{static now(){return vs.fromMillis(Date.now())}static fromDate(e){return vs.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*bs);return new vs(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $n(Bn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $n(Bn.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xs)throw new $n(Bn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $n(Bn.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bs}_compareTo(e){return this.seconds===e.seconds?es(this.nanoseconds,e.nanoseconds):es(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vs._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ys(e,vs._jsonSchema))return new vs(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vs._jsonSchemaVersion="firestore/timestamp/1.0",vs._jsonSchema={type:gs("string",vs._jsonSchemaVersion),seconds:gs("number"),nanoseconds:gs("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{static fromTimestamp(e){return new ws(e)}static min(){return new ws(new vs(0,0))}static max(){return new ws(new vs(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){return new Es(e.readTime,e.key,-1)}class Es{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Es(ws.min(),hs.empty(),-1)}static max(){return new Es(ws.max(),hs.empty(),-1)}}function Ss(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:(r=hs.comparator(e.documentKey,t.documentKey),0!==r?r:es(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Cs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(e){if(e.code!==Bn.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Rn("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mn(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _s((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof _s?t:_s.resolve(t)}catch(e){return _s.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):_s.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):_s.reject(t)}static resolve(e){return new _s((t,r)=>{t(e)})}static reject(e){return new _s((t,r)=>{r(e)})}static waitFor(e){return new _s((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=_s.resolve(!1);for(const r of e)t=t.next(e=>e?_s.resolve(e):r());return t}static forEach(e,t){const r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new _s((r,n)=>{const s=e.length,i=new Array(s);let a=0;for(let o=0;o<s;o++){const l=o;t(e[l]).next(e=>{i[l]=e,++a,a===s&&r(i)},e=>n(e))}})}static doWhile(e,t){return new _s((r,n)=>{const s=()=>{!0===e()?t().next(()=>{s()},n):r()};s()})}}function ks(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}js.ce=-1;function Is(e){return null==e}function As(e){return 0===e&&1/e==-1/0}function Ps(e,t){let r=t;const n=e.length;for(let s=0;s<n;s++){const t=e.charAt(s);switch(t){case"\0":r+="";break;case"":r+="";break;default:r+=t}}return r}function Rs(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){let t=0;for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function Os(e,t){for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function Ls(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.comparator=e,this.root=t||Fs.EMPTY}insert(e,t){return new Ms(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Fs.BLACK,null,null))}remove(e){return new Ms(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fs{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:Fs.RED,this.left=null!=n?n:Fs.EMPTY,this.right=null!=s?s:Fs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new Fs(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this;const s=r(e,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r)),n.fixUp()}removeMin(){if(this.left.isEmpty())return Fs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return Fs.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mn(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Mn(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Mn(27949);return e+(this.isRed()?0:1)}}Fs.EMPTY=null,Fs.RED=!0,Fs.BLACK=!1,Fs.EMPTY=new class{constructor(){this.size=0}get key(){throw Mn(57766)}get value(){throw Mn(16141)}get color(){throw Mn(16727)}get left(){throw Mn(29726)}get right(){throw Mn(36894)}copy(e,t,r,n,s){return this}insert(e,t,r){return new Fs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e){this.comparator=e,this.data=new Ms(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bs(this.data.getIterator())}getIteratorFrom(e){return new Bs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Vs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Vs(this.comparator);return t.data=e,t}}class Bs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.fields=e,e.sort(us.comparator)}static empty(){return new $s([])}unionWith(e){let t=new Vs(us.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $s(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new zs("Invalid base64 string: "+e):e}}(e);return new qs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new qs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return es(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qs.EMPTY_BYTE_STRING=new qs("");const Hs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gs(e){if(Fn(!!e,39018),"string"==typeof e){let t=0;const r=Hs.exec(e);if(Fn(!!r,46558,{timestamp:e}),r[1]){let e=r[1];e=(e+"000000000").substr(0,9),t=Number(e)}const n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Ws(e.seconds),nanos:Ws(e.nanos)}}function Ws(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ks(e){return"string"==typeof e?qs.fromBase64String(e):qs.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="server_timestamp",Xs="__type__",Qs="__previous_value__",Ys="__local_write_time__";function Zs(e){const t=(e?.mapValue?.fields||{})[Xs]?.stringValue;return t===Js}function ei(e){const t=e.mapValue.fields[Qs];return Zs(t)?ei(t):t}function ti(e){const t=Gs(e.mapValue.fields[Ys].timestampValue);return new vs(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,r,n,s,i,a,o,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=c}}const ni="(default)";class si{constructor(e,t){this.projectId=e,this.database=t||ni}static empty(){return new si("","")}get isDefaultDatabase(){return this.database===ni}isEqual(e){return e instanceof si&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="__type__",ai="__max__",oi={fields:{__type__:{stringValue:ai}}},li="__vector__",ci="value";function ui(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zs(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ai}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[ii]?.stringValue;return t===li}(e)?10:11:Mn(28295,{value:e})}function hi(e,t){if(e===t)return!0;const r=ui(e);if(r!==ui(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ti(e).isEqual(ti(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const r=Gs(e.timestampValue),n=Gs(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ks(e.bytesValue).isEqual(Ks(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ws(e.geoPointValue.latitude)===Ws(t.geoPointValue.latitude)&&Ws(e.geoPointValue.longitude)===Ws(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ws(e.integerValue)===Ws(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const r=Ws(e.doubleValue),n=Ws(t.doubleValue);return r===n?As(r)===As(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return is(e.arrayValue.values||[],t.arrayValue.values||[],hi);case 10:case 11:return function(e,t){const r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(Ds(r)!==Ds(n))return!1;for(const s in r)if(r.hasOwnProperty(s)&&(void 0===n[s]||!hi(r[s],n[s])))return!1;return!0}(e,t);default:return Mn(52216,{left:e})}}function di(e,t){return void 0!==(e.values||[]).find(e=>hi(e,t))}function mi(e,t){if(e===t)return 0;const r=ui(e),n=ui(t);if(r!==n)return es(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return es(e.booleanValue,t.booleanValue);case 2:return function(e,t){const r=Ws(e.integerValue||e.doubleValue),n=Ws(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return pi(e.timestampValue,t.timestampValue);case 4:return pi(ti(e),ti(t));case 5:return ts(e.stringValue,t.stringValue);case 6:return function(e,t){const r=Ks(e),n=Ks(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const r=e.split("/"),n=t.split("/");for(let s=0;s<r.length&&s<n.length;s++){const e=es(r[s],n[s]);if(0!==e)return e}return es(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const r=es(Ws(e.latitude),Ws(t.latitude));return 0!==r?r:es(Ws(e.longitude),Ws(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return fi(e.arrayValue,t.arrayValue);case 10:return function(e,t){const r=e.fields||{},n=t.fields||{},s=r[ci]?.arrayValue,i=n[ci]?.arrayValue,a=es(s?.values?.length||0,i?.values?.length||0);return 0!==a?a:fi(s,i)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===oi&&t===oi)return 0;if(e===oi)return 1;if(t===oi)return-1;const r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let a=0;a<n.length&&a<i.length;++a){const e=ts(n[a],i[a]);if(0!==e)return e;const t=mi(r[n[a]],s[i[a]]);if(0!==t)return t}return es(n.length,i.length)}(e.mapValue,t.mapValue);default:throw Mn(23264,{he:r})}}function pi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return es(e,t);const r=Gs(e),n=Gs(t),s=es(r.seconds,n.seconds);return 0!==s?s:es(r.nanos,n.nanos)}function fi(e,t){const r=e.values||[],n=t.values||[];for(let s=0;s<r.length&&s<n.length;++s){const e=mi(r[s],n[s]);if(e)return e}return es(r.length,n.length)}function gi(e){return yi(e)}function yi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Gs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Ks(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return hs.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",r=!0;for(const n of e.values||[])r?r=!1:t+=",",t+=yi(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let r="{",n=!0;for(const s of t)n?n=!1:r+=",",r+=`${s}:${yi(e.fields[s])}`;return r+"}"}(e.mapValue):Mn(61005,{value:e})}function xi(e){switch(ui(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ei(e);return t?16+xi(t):16;case 5:return 2*e.stringValue.length;case 6:return Ks(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+xi(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Os(e.fields,(e,r)=>{t+=e.length+xi(r)}),t}(e.mapValue);default:throw Mn(13486,{value:e})}}function bi(e){return!!e&&"integerValue"in e}function vi(e){return!!e&&"arrayValue"in e}function wi(e){return!!e&&"mapValue"in e}function Ni(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Os(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ni(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=Ni(e.arrayValue.values[r]);return t}return{...e}}class Ei{constructor(e){this.value=e}static empty(){return new Ei({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(t)}setAll(e){let t=us.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=Ni(e):n.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){const t=this.field(e.popLast());wi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];wi(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){Os(t,(t,r)=>e[t]=r);for(const n of r)delete e[n]}clone(){return new Ei(Ni(this.value))}}function Si(e){const t=[];return Os(e.fields,(e,r)=>{const n=new us([e]);if(wi(r)){const e=Si(r.mapValue).fields;if(0===e.length)t.push(n);else for(const r of e)t.push(n.child(r))}else t.push(n)}),new $s(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ci{constructor(e,t,r,n,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new Ci(e,0,ws.min(),ws.min(),ws.min(),Ei.empty(),0)}static newFoundDocument(e,t,r,n){return new Ci(e,1,t,ws.min(),r,n,0)}static newNoDocument(e,t){return new Ci(e,2,t,ws.min(),ws.min(),Ei.empty(),0)}static newUnknownDocument(e,t){return new Ci(e,3,t,ws.min(),ws.min(),Ei.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ws.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ei.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ei.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ws.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ci&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ci(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.position=e,this.inclusive=t}}function _i(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(n=i.field.isKeyField()?hs.comparator(hs.fromName(a.referenceValue),r.key):mi(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function ki(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!hi(e.position[r],t.position[r]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ii(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{}class Pi extends Ai{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new Fi(e,t,r):"array-contains"===t?new zi(e,r):"in"===t?new qi(e,r):"not-in"===t?new Hi(e,r):"array-contains-any"===t?new Gi(e,r):new Pi(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new Vi(e,r):new Bi(e,r)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(mi(t,this.value)):null!==t&&ui(this.value)===ui(t)&&this.matchesComparison(mi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mn(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends Ai{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ri(e,t)}matches(e){return Di(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Di(e){return"and"===e.op}function Oi(e){return function(e){for(const t of e.filters)if(t instanceof Ri)return!1;return!0}(e)&&Di(e)}function Li(e){if(e instanceof Pi)return e.field.canonicalString()+e.op.toString()+gi(e.value);if(Oi(e))return e.filters.map(e=>Li(e)).join(",");{const t=e.filters.map(e=>Li(e)).join(",");return`${e.op}(${t})`}}function Mi(e,t){return e instanceof Pi?function(e,t){return t instanceof Pi&&e.op===t.op&&e.field.isEqual(t.field)&&hi(e.value,t.value)}(e,t):e instanceof Ri?function(e,t){return t instanceof Ri&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,r,n)=>e&&Mi(r,t.filters[n]),!0)}(e,t):void Mn(19439)}function Ui(e){return e instanceof Pi?function(e){return`${e.field.canonicalString()} ${e.op} ${gi(e.value)}`}(e):e instanceof Ri?function(e){return e.op.toString()+" {"+e.getFilters().map(Ui).join(" ,")+"}"}(e):"Filter"}class Fi extends Pi{constructor(e,t,r){super(e,t,r),this.key=hs.fromName(r.referenceValue)}matches(e){const t=hs.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vi extends Pi{constructor(e,t){super(e,"in",t),this.keys=$i("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Bi extends Pi{constructor(e,t){super(e,"not-in",t),this.keys=$i("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $i(e,t){return(t.arrayValue?.values||[]).map(e=>hs.fromName(e.referenceValue))}class zi extends Pi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vi(t)&&di(t.arrayValue,this.value)}}class qi extends Pi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&di(this.value.arrayValue,t)}}class Hi extends Pi{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!di(this.value.arrayValue,t)}}class Gi extends Pi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>di(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.Te=null}}function Ki(e,t=null,r=[],n=[],s=null,i=null,a=null){return new Wi(e,t,r,n,s,i,a)}function Ji(e){const t=Vn(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Li(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Is(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>gi(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>gi(e)).join(",")),t.Te=e}return t.Te}function Xi(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Ii(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!Mi(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ki(e.startAt,t.startAt)&&ki(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Yi(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Zi(e){const t=Vn(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",n=function(e){let t=new Vs(us.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);n.forEach(n=>{e.has(n.canonicalString())||n.isKeyField()||t.Ie.push(new ji(n,r))}),e.has(us.keyField().canonicalString())||t.Ie.push(new ji(us.keyField(),r))}return t.Ie}function ea(e){const t=Vn(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return Ki(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new ji(e.field,t)});const r=e.endAt?new Ti(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Ti(e.startAt.position,e.startAt.inclusive):null;return Ki(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(t,Zi(e))),t.Ee}function ta(e,t,r){return new Qi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function ra(e,t){return Xi(ea(e),ea(t))&&e.limitType===t.limitType}function na(e){return`${Ji(ea(e))}|lt:${e.limitType}`}function sa(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Ui(e)).join(", ")}]`),Is(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>gi(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>gi(e)).join(",")),`Target(${t})`}(ea(e))}; limitType=${e.limitType})`}function ia(e,t){return t.isFoundDocument()&&function(e,t){const r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):hs.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(const r of Zi(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(const r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,r){const n=_i(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,Zi(e),t))&&!(e.endAt&&!function(e,t,r){const n=_i(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,Zi(e),t))}(e,t)}function aa(e,t,r){const n=e.field.isKeyField()?hs.comparator(t.key,r.key):function(e,t,r){const n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?mi(n,s):Mn(42886)}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return-1*n;default:return Mn(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r)for(const[n,s]of r)if(this.equalsFn(n,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Os(this.inner,(t,r)=>{for(const[n,s]of r)e(n,s)})}isEmpty(){return Ls(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Ms(hs.comparator);function ca(){return la}const ua=new Ms(hs.comparator);function ha(...e){let t=ua;for(const r of e)t=t.insert(r.key,r);return t}function da(e){let t=ua;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ma(){return fa()}function pa(){return fa()}function fa(){return new oa(e=>e.toString(),(e,t)=>e.isEqual(t))}const ga=new Ms(hs.comparator),ya=new Vs(hs.comparator);function xa(...e){let t=ya;for(const r of e)t=t.add(r);return t}const ba=new Vs(es);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:As(t)?"-0":t}}function wa(e){return{integerValue:""+e}}function Na(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!As(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?wa(t):va(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this._=void 0}}function Sa(e,t,r){return e instanceof _a?function(e,t){const r={fields:{[Xs]:{stringValue:Js},[Ys]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Zs(t)&&(t=ei(t)),t&&(r.fields[Qs]=t),{mapValue:r}}(r,t):e instanceof ka?ja(e,t):e instanceof Ia?Aa(e,t):function(e,t){const r=Ta(e,t),n=Ra(r)+Ra(e.Ae);return bi(r)&&bi(e.Ae)?wa(n):va(e.serializer,n)}(e,t)}function Ca(e,t,r){return e instanceof ka?ja(e,t):e instanceof Ia?Aa(e,t):r}function Ta(e,t){return e instanceof Pa?function(e){return bi(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class _a extends Ea{}class ka extends Ea{constructor(e){super(),this.elements=e}}function ja(e,t){const r=Da(t);for(const n of e.elements)r.some(e=>hi(e,n))||r.push(n);return{arrayValue:{values:r}}}class Ia extends Ea{constructor(e){super(),this.elements=e}}function Aa(e,t){let r=Da(t);for(const n of e.elements)r=r.filter(e=>!hi(e,n));return{arrayValue:{values:r}}}class Pa extends Ea{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ra(e){return Ws(e.integerValue||e.doubleValue)}function Da(e){return vi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Oa{constructor(e,t){this.version=e,this.transformResults=t}}class La{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new La}static exists(e){return new La(void 0,e)}static updateTime(e){return new La(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ua{}function Fa(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ja(e.key,La.none()):new qa(e.key,e.data,La.none());{const r=e.data,n=Ei.empty();let s=new Vs(us.comparator);for(let e of t.fields)if(!s.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),s=s.add(e)}return new Ha(e.key,n,new $s(s.toArray()),La.none())}}function Va(e,t,r){e instanceof qa?function(e,t,r){const n=e.value.clone(),s=Wa(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,t,r):e instanceof Ha?function(e,t,r){if(!Ma(e.precondition,t))return void t.convertToUnknownDocument(r.version);const n=Wa(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(Ga(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(e,t,r):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,r)}function Ba(e,t,r,n){return e instanceof qa?function(e,t,r,n){if(!Ma(e.precondition,t))return r;const s=e.value.clone(),i=Ka(e.fieldTransforms,n,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,r,n):e instanceof Ha?function(e,t,r,n){if(!Ma(e.precondition,t))return r;const s=Ka(e.fieldTransforms,n,t),i=t.data;return i.setAll(Ga(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):function(e,t,r){return Ma(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}(e,t,r)}function $a(e,t){let r=null;for(const n of e.fieldTransforms){const e=t.data.field(n.field),s=Ta(n.transform,e||null);null!=s&&(null===r&&(r=Ei.empty()),r.set(n.field,s))}return r||null}function za(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&is(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ka&&t instanceof ka||e instanceof Ia&&t instanceof Ia?is(e.elements,t.elements,hi):e instanceof Pa&&t instanceof Pa?hi(e.Ae,t.Ae):e instanceof _a&&t instanceof _a}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qa extends Ua{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Ha extends Ua{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ga(e){const t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=e.data.field(r);t.set(r,n)}}),t}function Wa(e,t,r){const n=new Map;Fn(e.length===r.length,32656,{Re:r.length,Ve:e.length});for(let s=0;s<r.length;s++){const i=e[s],a=i.transform,o=t.data.field(i.field);n.set(i.field,Ca(a,o,r[s]))}return n}function Ka(e,t,r){const n=new Map;for(const s of e){const e=s.transform,i=r.data.field(s.field);n.set(s.field,Sa(e,i,t))}return n}class Ja extends Ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xa extends Ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const t=this.mutations[n];t.key.isEqual(e.key)&&Va(t,e,r[n])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ba(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ba(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=pa();return this.mutations.forEach(n=>{const s=e.get(n.key),i=s.overlayedDocument;let a=this.applyToLocalView(i,s.mutatedFields);a=t.has(n.key)?null:a;const o=Fa(i,a);null!==o&&r.set(n.key,o),i.isValidDocument()||i.convertToNoDocument(ws.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xa())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(e,t)=>za(e,t))&&is(this.baseMutations,e.baseMutations,(e,t)=>za(e,t))}}class Ya{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){Fn(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let n=ga;const s=e.mutations;for(let i=0;i<s.length;i++)n=n.insert(s[i].key,r[i].version);return new Ya(e,t,r,n)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo,to;(to=eo||(eo={}))[to.OK=0]="OK",to[to.CANCELLED=1]="CANCELLED",to[to.UNKNOWN=2]="UNKNOWN",to[to.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",to[to.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",to[to.NOT_FOUND=5]="NOT_FOUND",to[to.ALREADY_EXISTS=6]="ALREADY_EXISTS",to[to.PERMISSION_DENIED=7]="PERMISSION_DENIED",to[to.UNAUTHENTICATED=16]="UNAUTHENTICATED",to[to.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",to[to.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",to[to.ABORTED=10]="ABORTED",to[to.OUT_OF_RANGE=11]="OUT_OF_RANGE",to[to.UNIMPLEMENTED=12]="UNIMPLEMENTED",to[to.INTERNAL=13]="INTERNAL",to[to.UNAVAILABLE=14]="UNAVAILABLE",to[to.DATA_LOSS=15]="DATA_LOSS",
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new gn([4294967295,4294967295],0);class ro{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function so(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function io(e,t){return no(e,t.toTimestamp())}function ao(e){return Fn(!!e,49232),ws.fromTimestamp(function(e){const t=Gs(e);return new vs(t.seconds,t.nanos)}(e))}function oo(e,t){return lo(e,t).canonicalString()}function lo(e,t){const r=function(e){return new ls(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?r:r.child(t)}function co(e,t){return oo(e.databaseId,t.path)}function uo(e){const t=function(e){const t=ls.fromString(e);return Fn(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t),10190,{key:t.toString()}),t}(e);return 4===t.length?ls.emptyPath():function(e){return Fn(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}(t)}function ho(e,t,r){return{name:co(e,t),fields:r.value.mapValue.fields}}function mo(e){let t=uo(e.parent);const r=e.structuredQuery,n=r.from?r.from.length:0;let s=null;if(n>0){Fn(1===n,65062);const e=r.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];r.where&&(i=function(e){const t=po(e);return t instanceof Ri&&Oi(t)?t.getFilters():[t]}(r.where));let a=[];r.orderBy&&(a=function(e){return e.map(e=>function(e){return new ji(fo(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(r.orderBy));let o=null;r.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Is(t)?null:t}(r.limit));let l=null;r.startAt&&(l=function(e){const t=!!e.before,r=e.values||[];return new Ti(r,t)}(r.startAt));let c=null;return r.endAt&&(c=function(e){const t=!e.before,r=e.values||[];return new Ti(r,t)}(r.endAt)),function(e,t,r,n,s,i,a,o){return new Qi(e,t,r,n,s,i,a,o)}(t,s,a,i,o,"F",l,c)}function po(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fo(e.unaryFilter.field);return Pi.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=fo(e.unaryFilter.field);return Pi.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=fo(e.unaryFilter.field);return Pi.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=fo(e.unaryFilter.field);return Pi.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Mn(61313);default:return Mn(60726)}}(e):void 0!==e.fieldFilter?function(e){return Pi.create(fo(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Mn(58110);default:return Mn(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ri.create(e.compositeFilter.filters.map(e=>po(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Mn(1026)}}(e.compositeFilter.op))}(e):Mn(30097,{filter:e})}function fo(e){return us.fromServerFormat(e.fieldPath)}function go(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}class yo{constructor(e){this.yt=e}}function xo(e){const t=mo({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ta(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.Cn=new vo}addToCollectionParentIndex(e,t){return this.Cn.add(t),_s.resolve()}getCollectionParents(e,t){return _s.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return _s.resolve()}deleteFieldIndex(e,t){return _s.resolve()}deleteAllFieldIndexes(e){return _s.resolve()}createTargetIndexes(e,t){return _s.resolve()}getDocumentsMatchingTarget(e,t){return _s.resolve(null)}getIndexType(e,t){return _s.resolve(0)}getFieldIndexes(e,t){return _s.resolve([])}getNextCollectionGroupToUpdate(e){return _s.resolve(null)}getMinOffset(e,t){return _s.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,t){return _s.resolve(Es.min())}updateCollectionGroup(e,t,r){return _s.resolve()}updateIndexEntries(e,t){return _s.resolve()}}class vo{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new Vs(ls.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new Vs(ls.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},No=41943040;class Eo{static withCacheSize(e){return new Eo(e,Eo.DEFAULT_COLLECTION_PERCENTILE,Eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eo.DEFAULT_COLLECTION_PERCENTILE=10,Eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Eo.DEFAULT=new Eo(No,Eo.DEFAULT_COLLECTION_PERCENTILE,Eo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Eo.DISABLED=new Eo(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new So(0)}static cr(){return new So(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="LruGarbageCollector";function To([e,t],[r,n]){const s=es(e,r);return 0===s?es(t,n):s}class _o{constructor(e){this.Ir=e,this.buffer=new Vs(To),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();To(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ko{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){Rn(Co,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ks(e)?Rn(Co,"Ignoring IndexedDB error during garbage collection: ",e):await Ts(e)}await this.Vr(3e5)})}}class jo{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return _s.resolve(js.ce);const r=new _o(t);return this.mr.forEachTarget(e,e=>r.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>r.Ar(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Rn("LruGarbageCollector","Garbage collection skipped; disabled"),_s.resolve(wo)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Rn("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wo):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,n,s,i,a,o,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Rn("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,i=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(s=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),Pn()<=Gt.DEBUG&&Rn("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${n} in `+(a-i)+"ms\n"+`\tRemoved ${s} targets in `+(o-a)+"ms\n"+`\tRemoved ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-c}ms`),_s.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:s,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(){this.changes=new oa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ci.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return void 0!==r?_s.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&Ba(r.mutation,e,$s.empty(),vs.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,xa()).next(()=>t))}getLocalViewOfDocuments(e,t,r=xa()){const n=ma();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ha();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const r=ma();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,xa()))}populateOverlays(e,t,r){const n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let s=ca();const i=fa(),a=fa();return t.forEach((e,t)=>{const a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof Ha)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),Ba(a.mutation,t,a.mutation.getFieldMask(),vs.now())):i.set(t.key,$s.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>a.set(e,new Ao(t,i.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){const r=fa();let n=new Ms((e,t)=>e-t),s=xa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let a=r.get(e)||$s.empty();a=s.applyToLocalView(i,a),r.set(e,a);const o=(n.get(s.batchId)||xa()).add(e);n=n.insert(s.batchId,o)})}).next(()=>{const i=[],a=n.getReverseIterator();for(;a.hasNext();){const n=a.getNext(),o=n.key,l=n.value,c=pa();l.forEach(e=>{if(!s.has(e)){const n=Fa(t.get(e),r.get(e));null!==n&&c.set(e,n),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,c))}return _s.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return function(e){return hs.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{const i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):_s.resolve(ma());let a=-1,o=s;return i.next(t=>_s.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),s.get(t)?_s.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,xa())).next(e=>({batchId:a,changes:da(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new hs(t)).next(e=>{let t=ha();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){const s=t.collectionGroup;let i=ha();return this.indexManager.getCollectionParents(e,s).next(a=>_s.forEach(a,a=>{const o=function(e,t){return new Qi(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,n))).next(e=>{s.forEach((t,r)=>{const n=r.getKey();null===e.get(n)&&(e=e.insert(n,Ci.newInvalidDocument(n)))});let r=ha();return e.forEach((e,n)=>{const i=s.get(e);void 0!==i&&Ba(i.mutation,n,$s.empty(),vs.now()),ia(t,n)&&(r=r.insert(e,n))}),r})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return _s.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:ao(e.createTime)}}(t)),_s.resolve()}getNamedQuery(e,t){return _s.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(e){return{name:e.name,query:xo(e.bundledQuery),readTime:ao(e.readTime)}}(t)),_s.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.overlays=new Ms(hs.comparator),this.qr=new Map}getOverlay(e,t){return _s.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ma();return _s.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.St(e,t,n)}),_s.resolve()}removeOverlaysForBatchId(e,t,r){const n=this.qr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(r)),_s.resolve()}getOverlaysForCollection(e,t,r){const n=ma(),s=t.length+1,i=new hs(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>r&&n.set(e.getKey(),e)}return _s.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new Ms((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=s.get(e.largestBatchId);null===t&&(t=ma(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=ma(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return _s.resolve(a)}St(e,t,r){const n=this.overlays.get(r.key);if(null!==n){const e=this.qr.get(n.largestBatchId).delete(r.key);this.qr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new Za(t,r));let s=this.qr.get(t);void 0===s&&(s=xa(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.sessionToken=qs.EMPTY_BYTE_STRING}getSessionToken(e){return _s.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,_s.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.Qr=new Vs(Mo.$r),this.Ur=new Vs(Mo.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Mo(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new Mo(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new hs(new ls([])),r=new Mo(t,e),n=new Mo(t,e+1),s=[];return this.Ur.forEachInRange([r,n],e=>{this.Gr(e),s.push(e.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new hs(new ls([])),r=new Mo(t,e),n=new Mo(t,e+1);let s=xa();return this.Ur.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new Mo(e,0),r=this.Qr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class Mo{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return hs.comparator(e.key,t.key)||es(e.Yr,t.Yr)}static Kr(e,t){return es(e.Yr,t.Yr)||hs.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Vs(Mo.$r)}checkEmpty(e){return _s.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Qa(s,t,r,n);this.mutationQueue.push(i);for(const a of n)this.Zr=this.Zr.add(new Mo(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _s.resolve(i)}lookupMutationBatch(e,t){return _s.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,n=this.ei(r),s=n<0?0:n;return _s.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _s.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return _s.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Mo(t,0),n=new Mo(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,n],e=>{const t=this.Xr(e.Yr);s.push(t)}),_s.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Vs(es);return t.forEach(e=>{const t=new Mo(e,0),n=new Mo(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,n],e=>{r=r.add(e.Yr)})}),_s.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,n=r.length+1;let s=r;hs.isDocumentKey(s)||(s=s.child(""));const i=new Mo(new hs(s),0);let a=new Vs(es);return this.Zr.forEachWhile(e=>{const t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.Yr)),!0)},i),_s.resolve(this.ti(a))}ti(e){const t=[];return e.forEach(e=>{const r=this.Xr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){Fn(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let r=this.Zr;return _s.forEach(t.mutations,n=>{const s=new Mo(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Mo(t,0),n=this.Zr.firstAfterOrEqual(r);return _s.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,_s.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.ri=e,this.docs=new Ms(hs.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return _s.resolve(r?r.document.mutableCopy():Ci.newInvalidDocument(t))}getEntries(e,t){let r=ca();return t.forEach(e=>{const t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():Ci.newInvalidDocument(e))}),_s.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let s=ca();const i=t.path,a=new hs(i.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Ss(Ns(a),r)<=0||(n.has(a.key)||ia(t,a))&&(s=s.insert(a.key,a.mutableCopy()))}return _s.resolve(s)}getAllFromCollectionGroup(e,t,r,n){Mn(9500)}ii(e,t){return _s.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Vo(this)}getSize(e){return _s.resolve(this.size)}}class Vo extends Io{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Nr.addEntry(e,n)):this.Nr.removeEntry(r)}),_s.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.persistence=e,this.si=new oa(e=>Ji(e),Xi),this.lastRemoteSnapshotVersion=ws.min(),this.highestTargetId=0,this.oi=0,this._i=new Lo,this.targetCount=0,this.ai=So.ur()}forEachTarget(e,t){return this.si.forEach((e,r)=>t(r)),_s.resolve()}getLastRemoteSnapshotVersion(e){return _s.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _s.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),_s.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),_s.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new So(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,_s.resolve()}updateTargetData(e,t){return this.Pr(t),_s.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,_s.resolve()}removeTargets(e,t,r){let n=0;const s=[];return this.si.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.si.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),_s.waitFor(s).next(()=>n)}getTargetCount(e){return _s.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return _s.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),_s.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),_s.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),_s.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return _s.resolve(r)}containsKey(e,t){return _s.resolve(this._i.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.ui={},this.overlays={},this.ci=new js(0),this.li=!1,this.li=!0,this.hi=new Oo,this.referenceDelegate=e(this),this.Pi=new Bo(this),this.indexManager=new bo,this.remoteDocumentCache=function(e){return new Fo(e)}(e=>this.referenceDelegate.Ti(e)),this.serializer=new yo(t),this.Ii=new Ro(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Do,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Uo(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){Rn("MemoryPersistence","Starting transaction:",e);const n=new zo(this.ci.next());return this.referenceDelegate.Ei(),r(n).next(e=>this.referenceDelegate.di(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ai(e,t){return _s.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class zo extends Cs{constructor(e){super(),this.currentSequenceNumber=e}}class qo{constructor(e){this.persistence=e,this.Ri=new Lo,this.Vi=null}static mi(e){return new qo(e)}get fi(){if(this.Vi)return this.Vi;throw Mn(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),_s.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),_s.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),_s.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _s.forEach(this.fi,r=>{const n=hs.fromPath(r);return this.gi(e,n).next(e=>{e||t.removeEntry(n,ws.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return _s.or([()=>_s.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ho{constructor(e,t){this.persistence=e,this.pi=new oa(e=>function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t=Rs(t)),t=Ps(e.get(r),t);return Rs(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new jo(e,t)}(this,t)}static mi(e,t){return new Ho(e,t)}Ei(){}di(e){return _s.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return _s.forEach(this.pi,(r,n)=>this.br(e,r,n).next(e=>e?_s.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const n=this.persistence.getRemoteDocumentCache(),s=n.newChangeBuffer();return n.ii(e,n=>this.br(e,n,t).next(e=>{e||(r++,s.removeEntry(n,ws.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),_s.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),_s.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),_s.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),_s.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xi(e.data.value)),t}br(e,t,r){return _s.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t);return _s.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=n}static As(e,t){let r=xa(),n=xa();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new Go(e,t.fromCache,r,n)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=Pt()?8:function(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}(At())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,n){const s={result:null};return this.ys(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.ws(e,t,n,r).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const r=new Wo;return this.Ss(e,t,r).next(n=>{if(s.result=n,this.Vs)return this.bs(e,t,r,n.size)})}).next(()=>s.result)}bs(e,t,r,n){return r.documentReadCount<this.fs?(Pn()<=Gt.DEBUG&&Rn("QueryEngine","SDK will not create cache indexes for query:",sa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),_s.resolve()):(Pn()<=Gt.DEBUG&&Rn("QueryEngine","Query:",sa(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.gs*n?(Pn()<=Gt.DEBUG&&Rn("QueryEngine","The SDK decides to create cache indexes for query:",sa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ea(t))):_s.resolve())}ys(e,t){if(Yi(t))return _s.resolve(null);let r=ea(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(t=ta(t,null,"F"),r=ea(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{const s=xa(...n);return this.ps.getDocuments(e,s).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{const i=this.Ds(t,n);return this.Cs(t,i,s,r.readTime)?this.ys(e,ta(t,null,"F")):this.vs(e,i,t,r)}))})))}ws(e,t,r,n){return Yi(t)||n.isEqual(ws.min())?_s.resolve(null):this.ps.getDocuments(e,r).next(s=>{const i=this.Ds(t,s);return this.Cs(t,i,r,n)?_s.resolve(null):(Pn()<=Gt.DEBUG&&Rn("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),sa(t)),this.vs(e,i,t,function(e,t){const r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,s=ws.fromTimestamp(1e9===n?new vs(r+1,0):new vs(r,n));return new Es(s,hs.empty(),t)}(n,-1)).next(e=>e))})}Ds(e,t){let r=new Vs(function(e){return(t,r)=>{let n=!1;for(const s of Zi(e)){const e=aa(s,t,r);if(0!==e)return e;n=n||s.field.isKeyField()}return 0}}(e));return t.forEach((t,n)=>{ia(e,n)&&(r=r.add(n))}),r}Cs(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Ss(e,t,r){return Pn()<=Gt.DEBUG&&Rn("QueryEngine","Using full collection scan to execute query:",sa(t)),this.ps.getDocumentsMatchingQuery(e,t,Es.min(),r)}vs(e,t,r,n){return this.ps.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,r,n){this.persistence=e,this.Fs=t,this.serializer=n,this.Ms=new Ms(es),this.xs=new oa(e=>Ji(e),Xi),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Po(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}async function Xo(e,t){const r=Vn(e);return await r.persistence.runTransaction("Handle user change","readonly",e=>{let n;return r.mutationQueue.getAllMutationBatches(e).next(s=>(n=s,r.Bs(t),r.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let a=xa();for(const e of n){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return r.localDocuments.getDocuments(e,a).next(e=>({Ls:e,removedBatchIds:s,addedBatchIds:i}))})})}function Qo(e,t){const r=Vn(e);return r.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}class Yo{constructor(){this.activeTargetIds=ba}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zo{constructor(){this.Mo=new Yo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{Oo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="ConnectivityMonitor";class rl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Rn(tl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Rn(tl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl=null;function sl(){return null===nl?nl=268435456+Math.round(2147483648*Math.random()):nl++,"0x"+nl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const il="RestConnection",al={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ol{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${n}`,this.Wo=this.databaseId.database===ni?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Go(e,t,r,n,s){const i=sl(),a=this.zo(e,t.toUriEncodedString());Rn(il,`Sending RPC '${e}' ${i}:`,a,r);const o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(o,n,s);const{host:l}=new URL(a),c=Tt(l);return this.Jo(e,a,o,r,c).then(t=>(Rn(il,`Received RPC '${e}' ${i}: `,t),t),t=>{throw On(il,`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",r),t})}Ho(e,t,r,n,s,i){return this.Go(e,t,r,n,s)}jo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+In,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}zo(e,t){const r=al[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="WebChannelConnection";class ul extends ol{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,n,s){const i=sl();return new Promise((s,a)=>{const o=new xn;o.setWithCredentials(!0),o.listenOnce(vn.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case wn.NO_ERROR:const t=o.getResponseJson();Rn(cl,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case wn.TIMEOUT:Rn(cl,`RPC '${e}' ${i} timed out`),a(new $n(Bn.DEADLINE_EXCEEDED,"Request time out"));break;case wn.HTTP_ERROR:const r=o.getStatus();if(Rn(cl,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Bn).indexOf(t)>=0?t:Bn.UNKNOWN}(t.status);a(new $n(e,t.message))}else a(new $n(Bn.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new $n(Bn.UNAVAILABLE,"Connection failed."));break;default:Mn(9055,{l_:e,streamId:i,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{Rn(cl,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(n);Rn(cl,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}T_(e,t,r){const n=sl(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Cn(),a=Sn(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.jo(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const c=s.join("");Rn(cl,`Creating RPC '${e}' stream ${n}: ${c}`,o);const u=i.createWebChannel(c,o);this.I_(u);let h=!1,d=!1;const m=new ll({Yo:t=>{d?Rn(cl,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(h||(Rn(cl,`Opening RPC '${e}' stream ${n} transport.`),u.open(),h=!0),Rn(cl,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Zo:()=>u.close()}),p=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,bn.EventType.OPEN,()=>{d||(Rn(cl,`RPC '${e}' stream ${n} transport opened.`),m.o_())}),p(u,bn.EventType.CLOSE,()=>{d||(d=!0,Rn(cl,`RPC '${e}' stream ${n} transport closed`),m.a_(),this.E_(u))}),p(u,bn.EventType.ERROR,t=>{d||(d=!0,On(cl,`RPC '${e}' stream ${n} transport errored. Name:`,t.name,"Message:",t.message),m.a_(new $n(Bn.UNAVAILABLE,"The operation could not be completed")))}),p(u,bn.EventType.MESSAGE,t=>{if(!d){const r=t.data[0];Fn(!!r,16349);const s=r,i=s?.error||s[0]?.error;if(i){Rn(cl,`RPC '${e}' stream ${n} received error:`,i);const t=i.status;let r=function(e){const t=eo[e];if(void 0!==t)return function(e){if(void 0===e)return Dn("GRPC error has no .code"),Bn.UNKNOWN;switch(e){case eo.OK:return Bn.OK;case eo.CANCELLED:return Bn.CANCELLED;case eo.UNKNOWN:return Bn.UNKNOWN;case eo.DEADLINE_EXCEEDED:return Bn.DEADLINE_EXCEEDED;case eo.RESOURCE_EXHAUSTED:return Bn.RESOURCE_EXHAUSTED;case eo.INTERNAL:return Bn.INTERNAL;case eo.UNAVAILABLE:return Bn.UNAVAILABLE;case eo.UNAUTHENTICATED:return Bn.UNAUTHENTICATED;case eo.INVALID_ARGUMENT:return Bn.INVALID_ARGUMENT;case eo.NOT_FOUND:return Bn.NOT_FOUND;case eo.ALREADY_EXISTS:return Bn.ALREADY_EXISTS;case eo.PERMISSION_DENIED:return Bn.PERMISSION_DENIED;case eo.FAILED_PRECONDITION:return Bn.FAILED_PRECONDITION;case eo.ABORTED:return Bn.ABORTED;case eo.OUT_OF_RANGE:return Bn.OUT_OF_RANGE;case eo.UNIMPLEMENTED:return Bn.UNIMPLEMENTED;case eo.DATA_LOSS:return Bn.DATA_LOSS;default:return Mn(39323,{code:e})}}(t)}(t),s=i.message;void 0===r&&(r=Bn.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),d=!0,m.a_(new $n(r,s)),u.close()}else Rn(cl,`RPC '${e}' stream ${n} received:`,r),m.u_(r)}}),p(a,En.STAT_EVENT,t=>{t.stat===Nn.PROXY?Rn(cl,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===Nn.NOPROXY&&Rn(cl,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{m.__()},0),m}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function hl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(e){return new ro(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,r=1e3,n=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=n,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),n=Math.max(0,t-r);n>0&&Rn("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,n,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="PersistentStream";class fl{constructor(e,t,r,n,s,i,a,o){this.Mi=e,this.S_=r,this.b_=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ml(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===Bn.RESOURCE_EXHAUSTED?(Dn(t.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Bn.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.D_===t&&this.G_(e,r)},t=>{e(()=>{const e=new $n(Bn.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{r(()=>this.z_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Rn(pl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Rn(pl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gl extends fl{constructor(e,t,r,n,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fn(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fn(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Fn(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Fn(void 0!==t,14353),e.map(e=>function(e,t){let r=e.updateTime?ao(e.updateTime):ao(t);return r.isEqual(ws.min())&&(r=ao(t)),new Oa(r,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),r=ao(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=function(e){return new ls(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let r;if(t instanceof qa)r={update:ho(e,t.key,t.value)};else if(t instanceof Ja)r={delete:co(e,t.key)};else if(t instanceof Ha)r={update:ho(e,t.key,t.data),updateMask:go(t.fieldMask)};else{if(!(t instanceof Xa))return Mn(16599,{Vt:t.type});r={verify:co(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const r=t.transform;if(r instanceof _a)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof ka)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof Ia)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof Pa)return{fieldPath:t.field.canonicalString(),increment:r.Ae};throw Mn(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(r.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:io(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mn(27497)}(e,t.precondition)),r}(this.serializer,e))};this.q_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{}class xl extends yl{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.ia=!1}sa(){if(this.ia)throw new $n(Bn.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,n){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Go(e,lo(t,r),n,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Bn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $n(Bn.UNKNOWN,e.toString())})}Ho(e,t,r,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Ho(e,lo(t,r),n,i,a,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Bn.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new $n(Bn.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class bl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(t),this.aa=!1):Rn("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="RemoteStore";class wl{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(e=>{r.enqueueAndForget(async()=>{Sl(this)&&(Rn(vl,"Restarting streams for network reachability change."),await async function(e){const t=Vn(e);t.Ea.add(4),await El(t),t.Ra.set("Unknown"),t.Ea.delete(4),await Nl(t)}(this))})}),this.Ra=new bl(r,n)}}async function Nl(e){if(Sl(e))for(const t of e.da)await t(!0)}async function El(e){for(const t of e.da)await t(!1)}function Sl(e){return 0===Vn(e).Ea.size}async function Cl(e,t,r){if(!ks(t))throw t;e.Ea.add(1),await El(e),e.Ra.set("Offline"),r||(r=()=>function(e){const t=Vn(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Rn(vl,"Retrying IndexedDB access"),await r(),e.Ea.delete(1),await Nl(e)})}function Tl(e,t){return t().catch(r=>Cl(e,r,t))}async function _l(e){const t=Vn(e),r=Ml(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;kl(t);)try{const e=await Qo(t.localStore,n);if(null===e){0===t.Ta.length&&r.L_();break}n=e.batchId,jl(t,e)}catch(e){await Cl(t,e)}Il(t)&&Al(t)}function kl(e){return Sl(e)&&e.Ta.length<10}function jl(e,t){e.Ta.push(t);const r=Ml(e);r.O_()&&r.X_&&r.ea(t.mutations)}function Il(e){return Sl(e)&&!Ml(e).x_()&&e.Ta.length>0}function Al(e){Ml(e).start()}async function Pl(e){Ml(e).ra()}async function Rl(e){const t=Ml(e);for(const r of e.Ta)t.ea(r.mutations)}async function Dl(e,t,r){const n=e.Ta.shift(),s=Ya.from(n,t,r);await Tl(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await _l(e)}async function Ol(e,t){t&&Ml(e).X_&&await async function(e,t){if(function(e){return function(e){switch(e){case Bn.OK:return Mn(64938);case Bn.CANCELLED:case Bn.UNKNOWN:case Bn.DEADLINE_EXCEEDED:case Bn.RESOURCE_EXHAUSTED:case Bn.INTERNAL:case Bn.UNAVAILABLE:case Bn.UNAUTHENTICATED:return!1;case Bn.INVALID_ARGUMENT:case Bn.NOT_FOUND:case Bn.ALREADY_EXISTS:case Bn.PERMISSION_DENIED:case Bn.FAILED_PRECONDITION:case Bn.ABORTED:case Bn.OUT_OF_RANGE:case Bn.UNIMPLEMENTED:case Bn.DATA_LOSS:return!0;default:return Mn(15467,{code:e})}}(e)&&e!==Bn.ABORTED}(t.code)){const r=e.Ta.shift();Ml(e).B_(),await Tl(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await _l(e)}}(e,t),Il(e)&&Al(e)}async function Ll(e,t){const r=Vn(e);r.asyncQueue.verifyOperationInProgress(),Rn(vl,"RemoteStore received new credentials");const n=Sl(r);r.Ea.add(3),await El(r),n&&r.Ra.set("Unknown"),await r.remoteSyncer.handleCredentialChange(t),r.Ea.delete(3),await Nl(r)}function Ml(e){return e.fa||(e.fa=function(e,t,r){const n=Vn(e);return n.sa(),new gl(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,r)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:Pl.bind(null,e),r_:Ol.bind(null,e),ta:Rl.bind(null,e),na:Dl.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await _l(e)):(await e.fa.stop(),e.Ta.length>0&&(Rn(vl,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ul{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,s){const i=Date.now()+r,a=new Ul(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new $n(Bn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fl(e,t){if(Dn("AsyncQueue",`${t}: ${e}`),ks(e))return new $n(Bn.UNAVAILABLE,`${t}: ${e}`);throw e}class Vl{constructor(){this.queries=Bl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const r=Vn(e),n=r.queries;r.queries=Bl(),n.forEach((e,r)=>{for(const n of r.Sa)n.onError(t)})}(this,new $n(Bn.ABORTED,"Firestore shutting down"))}}function Bl(){return new oa(e=>na(e),ra)}var $l,zl;(zl=$l||($l={})).Ma="default",zl.Cache="cache";class ql{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new oa(e=>na(e),ra),this.Iu=new Map,this.Eu=new Set,this.du=new Ms(hs.comparator),this.Au=new Map,this.Ru=new Lo,this.Vu={},this.mu=new Map,this.fu=So.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function Hl(e,t,r){const n=function(e){const t=Vn(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Kl.bind(null,t),t}(e);try{const e=await function(e,t){const r=Vn(e),n=vs.now(),s=t.reduce((e,t)=>e.add(t.key),xa());let i,a;return r.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=ca(),l=xa();return r.Ns.getEntries(e,s).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>r.localDocuments.getOverlayedDocuments(e,o)).next(s=>{i=s;const a=[];for(const e of t){const t=$a(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new Ha(e.key,t,Si(t.value.mapValue),La.exists(!0)))}return r.mutationQueue.addMutationBatch(e,n,a,t)}).next(t=>{a=t;const n=t.applyToLocalDocumentSet(i,l);return r.documentOverlayCache.saveOverlays(e,t.batchId,n)})}).then(()=>({batchId:a.batchId,changes:da(i)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(e.batchId),function(e,t,r){let n=e.Vu[e.currentUser.toKey()];n||(n=new Ms(es)),n=n.insert(t,r),e.Vu[e.currentUser.toKey()]=n}(n,e.batchId,r),await Ql(n,e.changes),await _l(n.remoteStore)}catch(e){const t=Fl(e,"Failed to persist write");r.reject(t)}}function Gl(e,t,r){const n=Vn(e);if(n.isPrimaryClient&&0===r||!n.isPrimaryClient&&1===r){const e=[];n.Tu.forEach((r,n)=>{const s=n.view.va(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const r=Vn(e);r.onlineState=t;let n=!1;r.queries.forEach((e,r)=>{for(const s of r.Sa)s.va(t)&&(n=!0)}),n&&function(e){e.Ca.forEach(e=>{e.next()})}(r)}(n.eventManager,t),e.length&&n.Pu.H_(e),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Wl(e,t){const r=Vn(e),n=t.batch.batchId;try{const e=await function(e,t){const r=Vn(e);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const n=t.batch.keys(),s=r.Ns.newChangeBuffer({trackRemovals:!0});return function(e,t,r,n){const s=r.batch,i=s.keys();let a=_s.resolve();return i.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{const i=r.docVersions.get(e);Fn(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(r,e,t,s).next(()=>s.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=xa();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))})}(r.localStore,t);Xl(r,n,null),Jl(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await Ql(r,e)}catch(e){await Ts(e)}}async function Kl(e,t,r){const n=Vn(e);try{const e=await function(e,t){const r=Vn(e);return r.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(Fn(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))})}(n.localStore,t);Xl(n,t,r),Jl(n,t),n.sharedClientState.updateMutationState(t,"rejected",r),await Ql(n,e)}catch(r){await Ts(r)}}function Jl(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function Xl(e,t,r){const n=Vn(e);let s=n.Vu[n.currentUser.toKey()];if(s){const e=s.get(t);e&&(r?e.reject(r):e.resolve(),s=s.remove(t)),n.Vu[n.currentUser.toKey()]=s}}async function Ql(e,t,r){const n=Vn(e),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((e,o)=>{a.push(n.pu(o,t,r).then(e=>{if((e||r)&&n.isPrimaryClient){const t=e?!e.fromCache:r?.targetChanges.get(o.targetId)?.current;n.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){s.push(e);const t=Go.As(o.targetId,e);i.push(t)}}))}),await Promise.all(a),n.Pu.H_(s),await async function(e,t){const r=Vn(e);try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>_s.forEach(t,t=>_s.forEach(t.Es,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>_s.forEach(t.ds,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(e){if(!ks(e))throw e;Rn("LocalStore","Failed to update sequence numbers: "+e)}for(const n of t){const e=n.targetId;if(!n.fromCache){const t=r.Ms.get(e),n=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(n);r.Ms=r.Ms.insert(e,s)}}}(n.localStore,i))}async function Yl(e,t){const r=Vn(e);if(!r.currentUser.isEqual(t)){Rn("SyncEngine","User change. New user:",t.toKey());const e=await Xo(r.localStore,t);r.currentUser=t,function(e,t){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new $n(Bn.CANCELLED,t))})}),e.mu.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ql(r,e.Ls)}}class Zl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,r,n){return new Jo(e,t,r,n)}(this.persistence,new Ko,e.initialUser,this.serializer)}Cu(e){return new $o(qo.mi,this.serializer)}Du(e){return new Zo}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zl.provider={build:()=>new Zl};class ec extends Zl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fn(this.persistence.referenceDelegate instanceof Ho,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ko(r,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?Eo.withCacheSize(this.cacheSizeBytes):Eo.DEFAULT;return new $o(e=>Ho.mi(e,t),this.serializer)}}class tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Gl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yl.bind(null,this.syncEngine),await async function(e,t){const r=Vn(e);t?(r.Ea.delete(2),await Nl(r)):t||(r.Ea.add(2),await El(r),r.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Vl}createDatastore(e){const t=dl(e.databaseInfo.databaseId),r=function(e){return new ul(e)}(e.databaseInfo);return function(e,t,r,n){return new xl(e,t,r,n)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(e,t,r,n,s){return new wl(e,t,r,n,s)}(this.localStore,this.datastore,e.asyncQueue,e=>Gl(this.syncEngine,e,0),rl.v()?new rl:new el)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){const o=new ql(e,t,r,n,s,i);return a&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Vn(e);Rn(vl,"RemoteStore shutting down."),t.Ea.add(5),await El(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}tc.provider={build:()=>new tc};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rc="FirestoreClient";class nc{constructor(e,t,r,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=jn.UNAUTHENTICATED,this.clientId=Zn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async e=>{Rn(rc,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(Rn(rc,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(ye){const r=Fl(ye,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sc(e,t){e.asyncQueue.verifyOperationInProgress(),Rn(rc,"Initializing OfflineComponentProvider");const r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await Xo(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ic(e,t){e.asyncQueue.verifyOperationInProgress();const r=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Rn(rc,"Using user provided OfflineComponentProvider");try{await sc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===Bn.FAILED_PRECONDITION||e.code===Bn.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;On("Error using user provided cache. Falling back to memory cache: "+n),await sc(e,new Zl)}}else Rn(rc,"Using default OfflineComponentProvider"),await sc(e,new ec(void 0));return e._offlineComponents}(e);Rn(rc,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>Ll(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>Ll(t.remoteStore,r)),e._onlineComponents=t}function ac(e){return async function(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Rn(rc,"Using user provided OnlineComponentProvider"),await ic(e,e._uninitializedComponentsProvider._online)):(Rn(rc,"Using default OnlineComponentProvider"),await ic(e,new tc))),e._onlineComponents}(e).then(e=>e.syncEngine)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const lc=new Map,cc="firestore.googleapis.com",uc=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new $n(Bn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cc,this.ssl=uc}else this.host=e.host,this.ssl=e.ssl??uc;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=No;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new $n(Bn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new $n(Bn.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oc(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new $n(Bn.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new $n(Bn.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new $n(Bn.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $n(Bn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new $n(Bn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hc(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Hn;switch(e.type){case"firstParty":return new Jn(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new $n(Bn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lc.get(e);t&&(Rn("ComponentProvider","Removing Datastore"),lc.delete(e),t.terminate())}(this),Promise.resolve()}}function mc(e,t,r,n={}){e=fs(e,dc);const s=Tt(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${r}`;s&&(_t(`https://${o}`),It("Firestore",!0)),i.host!==cc&&i.host!==o&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:o,ssl:s,emulatorOptions:n};if(!Lt(l,a)&&(e._setSettings(l),n.mockUserToken)){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=jn.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r=t||"demo-project",n=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i={iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[xt(JSON.stringify({alg:"none",type:"JWT"})),xt(JSON.stringify(i)),""].join(".")}(n.mockUserToken,e._app?.options.projectId);const s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new $n(Bn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new jn(s)}e._authCredentials=new Gn(new qn(t,r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pc(this.firestore,e,this._query)}}class fc{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fc(this.firestore,e,this._key)}toJSON(){return{type:fc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ys(t,fc._jsonSchema))return new fc(e,r||null,new hs(ls.fromString(t.referencePath)))}}fc._jsonSchemaVersion="firestore/documentReference/1.0",fc._jsonSchema={type:gs("string",fc._jsonSchemaVersion),referencePath:gs("string")};class gc extends pc{constructor(e,t,r){super(e,t,function(e){return new Qi(e)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fc(this.firestore,null,new hs(e))}withConverter(e){return new gc(this.firestore,e,this._path)}}function yc(e,t,...r){if(e=Bt(e),1===arguments.length&&(t=Zn.newId()),function(e,t,r){if(!r)throw new $n(Bn.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof dc){const n=ls.fromString(t,...r);return ds(n),new fc(e,null,new hs(n))}{if(!(e instanceof fc||e instanceof gc))throw new $n(Bn.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=e._path.child(ls.fromString(t,...r));return ds(n),new fc(e.firestore,e instanceof gc?e.converter:null,new hs(n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="AsyncQueue";class bc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ml(this,"async_queue_retry"),this._c=()=>{const e=hl();e&&Rn(xc,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=hl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=hl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(ge){if(!ks(ge))throw ge;Rn(xc,"Operation failed with retryable error: "+ge)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,Dn("INTERNAL UNHANDLED ERROR: ",vc(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const n=Ul.createAndSchedule(this,e,t,r,e=>this.hc(e));return this.tc.push(n),n}uc(){this.nc&&Mn(47125,{Pc:vc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function vc(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class wc extends dc{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new bc,this._persistenceKey=n?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bc(e),this._firestoreClient=void 0,await e}}}function Nc(e){if(e._terminated)throw new $n(Bn.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),r=function(e,t,r,n){return new ri(e,t,r,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,oc(n.experimentalLongPollingOptions),n.useFetchStreams,n.isUsingEmulator)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new nc(e._authCredentials,e._appCheckCredentials,e._queue,r,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Ec{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ec(qs.fromBase64String(e))}catch(e){throw new $n(Bn.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ec(qs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ec._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ys(e,Ec._jsonSchema))return Ec.fromBase64String(e.bytes)}}Ec._jsonSchemaVersion="firestore/bytes/1.0",Ec._jsonSchema={type:gs("string",Ec._jsonSchemaVersion),bytes:gs("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new $n(Bn.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new us(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $n(Bn.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $n(Bn.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return es(this._lat,e._lat)||es(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tc._jsonSchemaVersion}}static fromJSON(e){if(ys(e,Tc._jsonSchema))return new Tc(e.latitude,e.longitude)}}Tc._jsonSchemaVersion="firestore/geoPoint/1.0",Tc._jsonSchema={type:gs("string",Tc._jsonSchemaVersion),latitude:gs("number"),longitude:gs("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:_c._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ys(e,_c._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new _c(e.vectorValues);throw new $n(Bn.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_c._jsonSchemaVersion="firestore/vectorValue/1.0",_c._jsonSchema={type:gs("string",_c._jsonSchemaVersion),vectorValues:gs("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kc=/^__.*__$/;class jc{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new Ha(e,this.data,this.fieldMask,t,this.fieldTransforms):new qa(e,this.data,t,this.fieldTransforms)}}function Ic(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mn(40011,{Ac:e})}}class Ac{constructor(e,t,r,n,s,i){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===s&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ac({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return $c(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(Ic(this.Ac)&&kc.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Pc{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||dl(e)}Cc(e,t,r,n=!1){return new Ac({Ac:e,methodName:t,Dc:r,path:us.emptyPath(),fc:!1,bc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rc(e){const t=e._freezeSettings(),r=dl(e._databaseId);return new Pc(e._databaseId,!!t.ignoreUndefinedProperties,r)}function Dc(e,t,r,n,s,i={}){const a=e.Cc(i.merge||i.mergeFields?2:0,t,r,s);Uc("Data must be an object, but it was:",a,n);const o=Lc(n,a);let l,c;if(i.merge)l=new $s(a.fieldMask),c=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const n of i.mergeFields){const s=Fc(t,n,r);if(!a.contains(s))throw new $n(Bn.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);zc(e,s)||e.push(s)}l=new $s(e),c=a.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=a.fieldTransforms;return new jc(new Ei(o),l,c)}function Oc(e,t){if(Mc(e=Bt(e)))return Uc("Unsupported field value:",t,e),Lc(e,t);if(e instanceof Cc)return function(e,t){if(!Ic(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);const r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){const r=[];let n=0;for(const s of e){let e=Oc(s,t.wc(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=Bt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Na(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const r=vs.fromDate(e);return{timestampValue:no(t.serializer,r)}}if(e instanceof vs){const r=new vs(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:no(t.serializer,r)}}if(e instanceof Tc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ec)return{bytesValue:so(t.serializer,e._byteString)};if(e instanceof fc){const r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Sc(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:oo(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof _c)return function(e,t){return{mapValue:{fields:{[ii]:{stringValue:li},[ci]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Sc("VectorValues must only contain numeric values.");return va(t.serializer,e)})}}}}}}(e,t);throw t.Sc(`Unsupported field value: ${ps(e)}`)}(e,t)}function Lc(e,t){const r={};return Ls(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Os(e,(e,n)=>{const s=Oc(n,t.mc(e));null!=s&&(r[e]=s)}),{mapValue:{fields:r}}}function Mc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof vs||e instanceof Tc||e instanceof Ec||e instanceof fc||e instanceof Cc||e instanceof _c)}function Uc(e,t,r){if(!Mc(r)||!ms(r)){const n=ps(r);throw"an object"===n?t.Sc(e+" a custom object"):t.Sc(e+" "+n)}}function Fc(e,t,r){if((t=Bt(t))instanceof Sc)return t._internalPath;if("string"==typeof t)return Bc(e,t);throw $c("Field path arguments must be of type string or ",e,!1,void 0,r)}const Vc=new RegExp("[~\\*/\\[\\]]");function Bc(e,t,r){if(t.search(Vc)>=0)throw $c(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new Sc(...t.split("."))._internalPath}catch(n){throw $c(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function $c(e,t,r,n,s){const i=n&&!n.isEmpty(),a=void 0!==s;let o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new $n(Bn.INVALID_ARGUMENT,o+e+l)}function zc(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Hc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Hc extends qc{data(){return super.data()}}function Gc(e,t){return"string"==typeof t?Bc(e,t):t instanceof Sc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kc extends qc{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Gc("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $n(Bn.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Kc._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Kc._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kc._jsonSchema={type:gs("string",Kc._jsonSchemaVersion),bundleSource:gs("string","DocumentSnapshot"),bundleName:gs("string"),bundle:gs("string")};class Jc extends Kc{data(e={}){return super.data(e)}}class Xc{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new Wc(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Jc(this._firestore,this._userDataWriter,r.key,r,new Wc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $n(Bn.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{const n=new Jc(e._firestore,e._userDataWriter,r.doc.key,r.doc,new Wc(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const n=new Jc(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Wc(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(r=r.add(t.doc),i=r.indexOf(t.doc.key)),{type:Qc(t.type),doc:n,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $n(Bn.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xc._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],n=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),n.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qc(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mn(61501,{type:e})}}function Yc(e,t,r){e=fs(e,fc);const n=fs(e.firestore,wc),s=function(e,t,r){let n;return n=e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t,n}(e.converter,t,r);return function(e,t){return function(e,t){const r=new zn;return e.asyncQueue.enqueueAndForget(async()=>Hl(await ac(e),t,r)),r.promise}(Nc(e),t)}(n,[Dc(Rc(n),"setDoc",e._key,s,null!==e.converter,r).toMutation(e._key,La.none())])}Xc._jsonSchemaVersion="firestore/querySnapshot/1.0",Xc._jsonSchema={type:gs("string",Xc._jsonSchemaVersion),bundleSource:gs("string","QuerySnapshot"),bundleName:gs("string"),bundle:gs("string")},function(e,t=!0){!function(e){In=e}(tn),Xr(new $t("firestore",(e,{instanceIdentifier:r,options:n})=>{const s=e.getProvider("app").getImmediate(),i=new wc(new Wn(e.getProvider("auth-internal")),new Qn(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new $n(Bn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new si(e.options.projectId,t)}(s,r),s);return n={useFetchStreams:t,...n},i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),sn(_n,kn,e),sn(_n,kn,"esm2020")}();function Zc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
sn("firebase","12.5.0","app");const eu=Zc,tu=new Dt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ru=new Qt("@firebase/auth");function nu(e,...t){ru.logLevel<=Gt.ERROR&&ru.error(`Auth (${tn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e,...t){throw cu(e,...t)}function iu(e,...t){return cu(e,...t)}function au(e,t,r){const n={...eu(),[t]:r};return new Dt("auth","Firebase",n).create(t,{appName:e.name})}function ou(e){return au(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lu(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&su(e,"argument-error"),au(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cu(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return tu.create(e,...t)}function uu(e,t,...r){if(!e)throw cu(t,...r)}function hu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw nu(t),new Error(t)}function du(e,t){e||hu(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(){return"undefined"!=typeof self&&self.location?.href||""}function pu(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==pu()&&"https:"!==pu()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gu{constructor(e,t){this.shortDelay=e,this.longDelay=t,du(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return fu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(e,t){du(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void hu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void hu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void hu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},vu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wu=new gu(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Eu(e,t,r,n,s={}){return Su(e,s,async()=>{let s={},i={};n&&("GET"===t?i=n:s={body:JSON.stringify(n)});const a=Ut({key:e.config.apiKey,...i}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:o,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Tt(e.emulatorConfig.host)&&(l.credentials="include"),xu.fetch()(await Cu(e,e.config.apiHost,r,a),l)})}async function Su(e,t,r){e._canInitEmulator=!1;const n={...bu,...t};try{const t=new Tu(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw _u(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[r,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw _u(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===r)throw _u(e,"email-already-in-use",i);if("USER_DISABLED"===r)throw _u(e,"user-disabled",i);const o=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw au(e,o,a);su(e,o)}}catch(ge){if(ge instanceof Rt)throw ge;su(e,"network-request-failed",{message:String(ge)})}}async function Cu(e,t,r,n){const s=`${t}${r}?${n}`,i=e,a=i.config.emulator?yu(e.config,s):`${e.config.apiScheme}://${s}`;if(vu.includes(r)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(a).toString()}return a}class Tu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(iu(this.auth,"network-request-failed")),wu.get())})}}function _u(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const s=iu(e,t,n);return s.customData._tokenResponse=r,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(e,t){return Eu(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(ge){}}function Iu(e){return 1e3*Number(e)}function Au(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return nu("JWT malformed, contained fewer than 3 sections"),null;try{const e=bt(r);return e?JSON.parse(e):(nu("Failed to decode base64 JWT payload"),null)}catch(ge){return nu("Caught error parsing JWT payload as JSON",ge?.toString()),null}}function Pu(e){const t=Au(e);return uu(t,"internal-error"),uu(void 0!==t.exp,"internal-error"),uu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(e,t,r=!1){if(r)return t;try{return await t}catch(ge){throw ge instanceof Rt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ge)&&e.auth.currentUser===e&&await e.auth.signOut(),ge}}class Du{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(ge){return void("auth/network-request-failed"===ge?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ju(this.lastLoginAt),this.creationTime=ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(e){const t=e.auth,r=await e.getIdToken(),n=await Ru(e,ku(t,{idToken:r}));uu(n?.users.length,t,"internal-error");const s=n.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Mu(s.providerUserInfo):[],a=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,i),o=e.isAnonymous,l=!(e.email&&s.passwordHash||a?.length),c=!!o&&l,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ou(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,u)}function Mu(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){uu(e.idToken,"internal-error"),uu(void 0!==e.idToken,"internal-error"),uu(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Pu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){uu(0!==e.length,"internal-error");const t=Pu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(uu(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:s}=await async function(e,t){const r=await Su(e,{},async()=>{const r=Ut({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,i=await Cu(e,n,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:a,body:r};return e.emulatorConfig&&Tt(e.emulatorConfig.host)&&(o.credentials="include"),xu.fetch()(i,o)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,n,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:s}=t,i=new Uu;return r&&(uu("string"==typeof r,"internal-error",{appName:e}),i.refreshToken=r),n&&(uu("string"==typeof n,"internal-error",{appName:e}),i.accessToken=n),s&&(uu("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uu,this.toJSON())}_performRefresh(){return hu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e,t){uu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Vu{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new Du(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Ou(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await Ru(this,this.stsTokenManager.getToken(this.auth,e));return uu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Bt(e),n=await r.getIdToken(t),s=Au(n);uu(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:n,authTime:ju(Iu(s.auth_time)),issuedAtTime:ju(Iu(s.iat)),expirationTime:ju(Iu(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Bt(e);await Lu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(uu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vu({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){uu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yr(this.auth.app))return Promise.reject(ou(this.auth));const e=await this.getIdToken();return await Ru(this,async function(e,t){return Eu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,n=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,a=t.tenantId??void 0,o=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:m,stsTokenManager:p}=t;uu(u&&p,e,"internal-error");const f=Uu.fromJSON(this.name,p);uu("string"==typeof u,e,"internal-error"),Fu(r,e.name),Fu(n,e.name),uu("boolean"==typeof h,e,"internal-error"),uu("boolean"==typeof d,e,"internal-error"),Fu(s,e.name),Fu(i,e.name),Fu(a,e.name),Fu(o,e.name),Fu(l,e.name),Fu(c,e.name);const g=new Vu({uid:u,auth:e,email:n,emailVerified:h,displayName:r,isAnonymous:d,photoURL:i,phoneNumber:s,tenantId:a,stsTokenManager:f,createdAt:l,lastLoginAt:c});return m&&Array.isArray(m)&&(g.providerData=m.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,r=!1){const n=new Uu;n.updateFromServerResponse(t);const s=new Vu({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Lu(s),s}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];uu(void 0!==n.localId,"internal-error");const s=void 0!==n.providerUserInfo?Mu(n.providerUserInfo):[],i=!(n.email&&n.passwordHash||s?.length),a=new Uu;a.updateFromIdToken(r);const o=new Vu({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new Ou(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||s?.length)};return Object.assign(o,l),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map;function $u(e){du(e instanceof Function,"Expected a class definition");let t=Bu.get(e);return t?(du(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bu.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zu.type="NONE";const qu=zu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(e,t,r){return`firebase:${e}:${t}:${r}`}class Gu{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,n.apiKey,s),this.fullPersistenceKey=Hu("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await ku(this.auth,{idToken:e}).catch(()=>{});return t?Vu._fromGetAccountInfoResponse(this.auth,t,e):null}return Vu._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gu($u(qu),e,r);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=n[0]||$u(qu);const i=Hu(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const t=await l._get(i);if(t){let r;if("string"==typeof t){const n=await ku(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Vu._fromGetAccountInfoResponse(e,n,t)}else r=Vu._fromJSON(e,t);l!==s&&(a=r),s=l;break}}catch{}const o=n.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&o.length?(s=o[0],a&&await s._set(i,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new Gu(s,e,r)):new Gu(s,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Qu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ku(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zu(t))return"Blackberry";if(eh(t))return"Webos";if(Ju(t))return"Safari";if((t.includes("chrome/")||Xu(t))&&!t.includes("edge/"))return"Chrome";if(Yu(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===r?.length)return r[1]}return"Other"}function Ku(e=At()){return/firefox\//i.test(e)}function Ju(e=At()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xu(e=At()){return/crios\//i.test(e)}function Qu(e=At()){return/iemobile/i.test(e)}function Yu(e=At()){return/android/i.test(e)}function Zu(e=At()){return/blackberry/i.test(e)}function eh(e=At()){return/webos/i.test(e)}function th(e=At()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function rh(){return function(){const e=At();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function nh(e=At()){return th(e)||Yu(e)||eh(e)||Zu(e)||/windows phone/i.test(e)||Qu(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e,t=[]){let r;switch(e){case"Browser":r=Wu(At());break;case"Worker":r=`${Wu(At())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${tn}/${n}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,n)=>{try{r(e(t))}catch(ge){n(ge)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(ge){t.reverse();for(const r of t)try{r()}catch(Me){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:ge?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ch(this),this.idTokenSubscription=new ch(this),this.beforeStateQueue=new ih(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$u(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Gu.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(ge){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ku(this,{idToken:e}),r=await Vu._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Yr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,s=r?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==s||!i?.user||(r=i.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(ge){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(ge))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return uu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(ge){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lu(e)}catch(ge){if("auth/network-request-failed"!==ge?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yr(this.app))return Promise.reject(ou(this));const t=e?Bt(e):null;return t&&uu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&uu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yr(this.app)?Promise.reject(ou(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yr(this.app)?Promise.reject(ou(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($u(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Eu(e,"GET","/v2/passwordPolicy",Nu(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new ah(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Dt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Eu(e,"POST","/v2/accounts:revokeToken",Nu(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$u(e)||this._popupRedirectResolver;uu(t,this,"argument-error"),this.redirectPersistenceManager=await Gu.create(this,[$u(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(uu(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}),"function"==typeof t){const s=e.addObserver(t,r,n);return()=>{i=!0,s()}}{const r=e.addObserver(t);return()=>{i=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return uu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Yr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){ru.logLevel<=Gt.WARN&&ru.warn(`Auth (${tn}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function lh(e){return Bt(e)}class ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new Ft(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return uu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hh(e,t,r){const n=lh(e);uu(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const s=!!r?.disableWarnings,i=dh(t),{host:a,port:o}=function(e){const t=dh(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const e=s[1];return{host:e,port:mh(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:mh(t)}}}(t),l=null===o?"":`:${o}`,c={url:`${i}//${a}${l}/`},u=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator)return uu(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),void uu(Lt(c,n.config.emulator)&&Lt(u,n.emulatorConfig),n,"emulator-config-failed");n.config.emulator=c,n.emulatorConfig=u,n.settings.appVerificationDisabledForTesting=!0,Tt(a)?(_t(`${i}//${a}${l}`),It("Auth",!0)):s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function dh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function mh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ph{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hu("not implemented")}_getIdTokenResponse(e){return hu("not implemented")}_linkToIdToken(e,t){return hu("not implemented")}_getReauthenticationResolver(e){return hu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(e,t){return async function(e,t,r,n,s={}){const i=await Eu(e,t,r,n,s);return"mfaPendingCredential"in i&&su(e,"multi-factor-auth-required",{_serverResponse:i}),i}(e,"POST","/v1/accounts:signInWithIdp",Nu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends ph{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gh(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):su("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n,...s}=t;if(!r||!n)return null;const i=new gh(r,n);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return fh(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fh(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ut(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends yh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends xh{constructor(){super("facebook.com")}static credential(e){return gh._fromParams({providerId:bh.PROVIDER_ID,signInMethod:bh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bh.credentialFromTaggedObject(e)}static credentialFromError(e){return bh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bh.credential(e.oauthAccessToken)}catch{return null}}}bh.FACEBOOK_SIGN_IN_METHOD="facebook.com",bh.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh extends xh{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gh._fromParams({providerId:vh.PROVIDER_ID,signInMethod:vh.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vh.credentialFromTaggedObject(e)}static credentialFromError(e){return vh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vh.credential(t,r)}catch{return null}}}vh.GOOGLE_SIGN_IN_METHOD="google.com",vh.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wh extends xh{constructor(){super("github.com")}static credential(e){return gh._fromParams({providerId:wh.PROVIDER_ID,signInMethod:wh.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wh.credentialFromTaggedObject(e)}static credentialFromError(e){return wh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wh.credential(e.oauthAccessToken)}catch{return null}}}wh.GITHUB_SIGN_IN_METHOD="github.com",wh.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nh extends xh{constructor(){super("twitter.com")}static credential(e,t){return gh._fromParams({providerId:Nh.PROVIDER_ID,signInMethod:Nh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nh.credentialFromTaggedObject(e)}static credentialFromError(e){return Nh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nh.credential(t,r)}catch{return null}}}Nh.TWITTER_SIGN_IN_METHOD="twitter.com",Nh.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const s=await Vu._fromIdTokenResponse(e,r,n),i=Sh(r);return new Eh({user:s,providerId:i,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=Sh(r);return new Eh({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function Sh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Rt{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Ch.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Ch(e,t,r,n)}}function Th(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw Ch._fromErrorAndOperation(e,r,t,n);throw r})}const _h="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_h,"1"),this.storage.removeItem(_h),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);rh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jh.type="LOCAL";const Ih=jh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ah.type="SESSION";const Ph=Ah;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new Rh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:s}=t.data,i=this.handlersMap[n];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const a=Array.from(i).map(async e=>e(t.origin,s)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dh(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rh.receivers=[];class Oh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,i;return new Promise((a,o)=>{const l=Dh("",20);n.port1.start();const c=setTimeout(()=>{o(new Error("unsupported_event"))},r);i={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(t.data.response);break;default:clearTimeout(c),clearTimeout(s),o(new Error("invalid_response"))}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mh(){return void 0!==Lh().WorkerGlobalScope&&"function"==typeof Lh().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uh="firebaseLocalStorageDb",Fh="firebaseLocalStorage",Vh="fbase_key";class Bh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $h(e,t){return e.transaction([Fh],t?"readwrite":"readonly").objectStore(Fh)}function zh(){const e=indexedDB.open(Uh,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Fh,{keyPath:Vh})}catch(ge){r(ge)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Fh)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(Uh);return new Bh(e).toPromise()}(),t(await zh()))})})}async function qh(e,t,r){const n=$h(e,!0).put({[Vh]:t,value:r});return new Bh(n).toPromise()}function Hh(e,t){const r=$h(e,!0).delete(t);return new Bh(r).toPromise()}class Gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await zh()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(ge){if(t++>3)throw ge;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance(Mh()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Oh(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await qh(e,_h,"1"),await Hh(e,_h),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>qh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=$h(e,!1).get(t),n=await new Bh(r).toPromise();return void 0===n?null:n.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=$h(e,!1).getAll();return new Bh(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:n,value:s}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gh.type="LOCAL";const Wh=Gh;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kh(e,t){return t?$u(t):(uu(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new gu(3e4,6e4);class Jh extends ph{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xh(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,r=!1){if(Yr(e.app))return Promise.reject(ou(e));const n="signIn",s=await Th(e,n,t),i=await Eh._fromIdTokenResponse(e,n,s);return r||await e._updateCurrentUser(i.user),i}(e.auth,new Jh(e),e.bypassAuthState)}function Qh(e){const{auth:t,user:r}=e;return uu(r,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,r=!1){const{auth:n}=e;if(Yr(n.app))return Promise.reject(ou(n));const s="reauthenticate";try{const i=await Ru(e,Th(n,s,t,e),r);uu(i.idToken,n,"internal-error");const a=Au(i.idToken);uu(a,n,"internal-error");const{sub:o}=a;return uu(e.uid===o,n,"user-mismatch"),Eh._forOperation(e,s,i)}catch(ge){throw"auth/user-not-found"===ge?.code&&su(n,"user-mismatch"),ge}}(r,new Jh(e),e.bypassAuthState)}async function Yh(e){const{auth:t,user:r}=e;return uu(r,t,"internal-error"),async function(e,t,r=!1){const n=await Ru(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Eh._forOperation(e,"link",n)}(r,new Jh(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,r,n,s=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(ge){this.reject(ge)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:s,error:i,type:a}=e;if(i)return void this.reject(i);const o={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(ge){this.reject(ge)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xh;case"linkViaPopup":case"linkViaRedirect":return Yh;case"reauthViaPopup":case"reauthViaRedirect":return Qh;default:su(this.auth,"internal-error")}}resolve(e){du(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){du(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new gu(2e3,1e4);class td extends Zh{constructor(e,t,r,n,s){super(e,t,n,s),this.provider=r,this.authWindow=null,this.pollId=null,td.currentPopupAction&&td.currentPopupAction.cancel(),td.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return uu(e,this.auth,"internal-error"),e}async onExecution(){du(1===this.filter.length,"Popup operations only handle one event");const e=Dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(iu(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(iu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,td.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(iu(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ed.get())};e()}}td.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rd=new Map;class nd extends Zh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=ad(t),n=id(e);if(!(await n._isAvailable()))return!1;const s="true"===await n._get(r);return await n._remove(r),s}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(ge){e=()=>Promise.reject(ge)}rd.set(this.auth._key(),e)}return this.bypassAuthState||rd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function sd(e,t){rd.set(e._key(),t)}function id(e){return $u(e._redirectPersistence)}function ad(e){return Hu("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e,t,r){return async function(e,t,r){if(Yr(e.app))return Promise.reject(ou(e));const n=lh(e);lu(e,t,yh),await n._initializationPromise;const s=Kh(n,r);return await async function(e,t){return id(e)._set(ad(t),"true")}(s,n),s._openRedirect(n,t,"signInViaRedirect")}(e,t,r)}async function ld(e,t,r=!1){if(Yr(e.app))return Promise.reject(ou(e));const n=lh(e),s=Kh(n,t),i=new nd(n,s,r),a=await i.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hd(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!hd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(iu(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(e))}saveEventToCache(e){this.cachedEventUids.add(ud(e)),this.lastProcessedEventTime=Date.now()}}function ud(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function hd({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,md=/^https?/;async function pd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Eu(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(fd(r))return}catch{}su(e,"unauthorized-domain")}function fd(e){const t=mu(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&s.hostname===n}if(!md.test(r))return!1;if(dd.test(e))return n===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new gu(3e4,6e4);function yd(){const e=Lh().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function xd(e){return new Promise((t,r)=>{function n(){yd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yd(),r(iu(e,"network-request-failed"))},timeout:gd.get()})}if(Lh().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Lh().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Lh()[t]=()=>{gapi.load?n():r(iu(e,"network-request-failed"))},(s=`${uh.gapiScript}?onload=${t}`,uh.loadJS(s)).catch(e=>r(e))}n()}var s}).catch(e=>{throw bd=null,e})}let bd=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vd=new gu(5e3,15e3),wd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ed(e){const t=e.config;uu(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?yu(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:tn},s=Nd.get(e.config.apiHost);s&&(n.eid=s);const i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),`${r}?${Ut(n).slice(1)}`}async function Sd(e){const t=await function(e){return bd=bd||xd(e),bd}(e),r=Lh().gapi;return uu(r,e,"internal-error"),t.open({where:document.body,url:Ed(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wd,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});const s=iu(e,"network-request-failed"),i=Lh().setTimeout(()=>{n(s)},vd.get());function a(){Lh().clearTimeout(i),r(t)}t.ping(a).then(a,()=>{n(s)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Td{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(ge){}}}function _d(e,t,r,n=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l={...Cd,width:n.toString(),height:s.toString(),top:i,left:a},c=At().toLowerCase();r&&(o=Xu(c)?"_blank":r),Ku(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=At()){return th(e)&&!!window.navigator?.standalone}(c)&&"_self"!==o)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new Td(null);const h=window.open(t||"",o,u);uu(h,e,"popup-blocked");try{h.focus()}catch(ge){}return new Td(h)}const kd="__/auth/handler",jd="emulator/auth/handler",Id=encodeURIComponent("fac");async function Ad(e,t,r,n,s,i){uu(e.config.authDomain,e,"auth-domain-config-required"),uu(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:tn,eventId:s};if(t instanceof yh){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))a[e]=t}if(t instanceof xh){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))void 0===o[u]&&delete o[u];const l=await e._getAppCheckToken(),c=l?`#${Id}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${kd}`;return yu(e,jd)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ut(o).slice(1)}${c}`}const Pd="webStorageSupport";const Rd=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ph,this._completeRedirectFn=ld,this._overrideRedirectResult=sd}async _openPopup(e,t,r,n){du(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return _d(e,await Ad(e,t,r,mu(),n),Dh())}async _openRedirect(e,t,r,n){await this._originValidation(e);return function(e){Lh().location.href=e}(await Ad(e,t,r,mu(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(du(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Sd(e),r=new cd(e);return t.register("authEvent",t=>{uu(t?.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pd,{type:Pd},r=>{const n=r?.[0]?.[Pd];void 0!==n&&t(!!n),su(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nh()||Ju()||th()}};var Dd="@firebase/auth",Od="1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ld{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){uu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Md=St("authIdTokenMaxAge")||300;let Ud=null;var Fd;!function(e){uh=e}({loadJS:e=>new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=iu("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(n)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Fd="Browser",Xr(new $t("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=r.options;uu(i&&!i.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:i,authDomain:a,clientPlatform:Fd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sh(Fd)},l=new oh(r,n,s,o);return function(e,t){const r=t?.persistence||[],n=(Array.isArray(r)?r:[r]).map($u);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new $t("auth-internal",e=>(e=>new Ld(e))(lh(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Dd,Od,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Fd)),sn(Dd,Od,"esm2020");const Vd={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:Vd.apiKey?"✅ Configurado":"❌ Faltando",authDomain:Vd.authDomain,projectId:Vd.projectId});const Bd=rn(Vd),$d=function(e=nn()){const t=Qr(e,"auth");if(t.isInitialized())return t.getImmediate();const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const r=Qr(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(Lt(r.getOptions(),t??{}))return e;su(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Rd,persistence:[Wh,Ih,Ph]}),n=St("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(n,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Md)return;const n=t?.token;Ud!==n&&(Ud=n,await fetch(s,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,r){Bt(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,n){Bt(e).onIdTokenChanged(t,r,n)}(r,e=>t(e))}}var s;const i=Nt("auth");return i&&hh(r,`http://${i}`),r}(Bd),zd=new vh;zd.addScope("email"),zd.addScope("profile");const qd=function(e,t){const r="object"==typeof e?e:nn(),n="string"==typeof e?e:t||ni,s=Qr(r,"firestore").getImmediate({identifier:n});if(!s._initialized){const e=(e=>{const t=Nt(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]})("firestore");e&&mc(s,...e)}return s}(Bd);const Hd={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:Hd.getBaseURL(),authSignup:Hd.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[Hd.auth.signup,Hd.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const Gd=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,r){if(Yr(e.app))return Promise.reject(iu(e,"operation-not-supported-in-this-environment"));const n=lh(e);lu(e,t,yh);const s=Kh(n,r);return new td(n,"signInViaPopup",t,s).executeNotNull()}($d,zd),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await od($d,zd)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await lh(e)._initializationPromise,ld(e,t,!1)}($d);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=$d.currentUser,r=t?await t.getIdToken():null,n=await fetch(Hd.auth.login,{method:"POST",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!n.ok)return this.createUserInBackend(e);const s=await n.json();return console.log("✅ Usuário sincronizado com backend"),s}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(Hd.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return Bt(e).signOut()}($d),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return $d.currentUser}onAuthStateChange(e){return $d.onAuthStateChanged(e)}};const Wd=new class{getBaseURL(){const e=Hd.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((r,n)=>{const s=new XMLHttpRequest,i=Hd.auth.login;s.open("POST",i,!0),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("Cache-Control","no-cache"),s.onreadystatechange=function(){if(4===s.readyState)if(console.log("🔍 XHR Status:",s.status),console.log("🔍 XHR Response:",s.responseText),200===s.status)try{const e=JSON.parse(s.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),r(e.user)}catch(e){n(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(s.responseText);n(new Error(e.message||"Erro no login"))}catch(e){n(new Error("Credenciais inválidas"))}},s.onerror=function(){n(new Error("Erro de conexão"))},s.ontimeout=function(){n(new Error("Timeout na conexão"))},s.timeout=1e4;const a=JSON.stringify({email:e,password:t});s.send(a)})}catch(r){throw console.error("❌ Erro no login alternativo:",r),r}}async login(e,t){try{const n=Hd.auth.login;console.log("🔐 Login attempt:",{email:e,url:n});const s=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",s);const i=new AbortController,a=setTimeout(()=>i.abort(),1e4),o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:s,signal:i.signal});if(clearTimeout(a),console.log("📡 Response status:",o.status),console.log("📡 Response ok:",o.ok),console.log("📡 Response headers:",Object.fromEntries(o.headers.entries())),!o.ok){const e=await o.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",o.status),console.error("❌ Error response statusText:",o.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(r){t=e||t}throw 401===o.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await o.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(r){throw console.error("❌ Failed to parse response JSON:",r),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(n){if(console.error("❌ Erro no login completo:",n),"AbortError"===n.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===n.name&&n.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw n}}async register(e,t,r){try{this.clearPlanData();const n=Hd.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:n});const s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:r})});if(!s.ok){const e=await s.json();throw new Error(e.message||"Falha no registro")}return(await s.json()).user}catch(n){throw console.error("Erro no registro:",n),n}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await Gd.loginWithPopup(),t=await Gd.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",r),r}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await Gd.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await Gd.handleRedirectResult();if(!e)return null;const t=await Gd.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),r}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await Gd.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const r={basic:0,professional:1,premium:2};return r[t.type]>=r[e]}isAdmin(){const e=this.getCurrentUser();return"admin"===e?.role}},Kd=()=>{const[t,r]=e.useState(null),[n,s]=e.useState(!0),[i,a]=e.useState(null),[o,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=Wd.getCurrentUser(),t=Wd.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),r(e),l(t),e){const e=Wd.getUserPlan();console.log("📋 useAuth - Plano do usuário:",e),a(e)}else a(null);s(!1)},[]);return{user:t,loading:n,plan:i,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await Wd.logout(),r(null),a(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),Wd.updateUserPlan(e),a(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=Wd.getCurrentUser(),t=Wd.isAuthenticated();r(e),l(t),a(e?Wd.getUserPlan():null)},isAuthenticated:o,isAdmin:Wd.isAdmin(),checkPlanAccess:e=>Wd.checkPlanAccess(e)}},Jd=()=>{const t=n(),{user:r}=Kd();return e.useEffect(()=>{const e=new URLSearchParams(window.location.search),n=e.get("external_reference"),s=e.get("collection_status");if(n&&"approved"===s&&r?.id){const[e]=n.split("_"),s=new Date;let i="monthly";const a=new Date(s);a.setDate(s.getDate()+30),async function({userId:e,planId:t,period:r,startDate:n,expirationDate:s}){try{return await Yc(yc(qd,"userPlans",e),{planId:t,period:r,startDate:n,expirationDate:s,updatedAt:(new Date).toISOString()}),!0}catch(i){return console.error("Erro ao salvar plano no Firestore:",i),!1}}({userId:r.id,planId:e,period:i,startDate:s.toISOString(),expirationDate:a.toISOString()}),ht.success("Pagamento aprovado! Plano ativado."),setTimeout(()=>{t("/")},2e3)}else ht.error("Não foi possível ativar o plano."),setTimeout(()=>{t("/payment")},2e3)},[t,r]),ae.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen",children:[ae.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Processando pagamento..."}),ae.jsx("p",{children:"Aguarde, estamos ativando seu plano."})]})},Xd=()=>ae.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[ae.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),ae.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),ae.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),ae.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),ae.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[ae.jsxs(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[ae.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:ae.jsx(h,{className:"w-10 h-10 text-white"})}),ae.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),ae.jsxs(u.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",ae.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",ae.jsx("br",{}),ae.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[ae.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsx(d,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),ae.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),ae.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsx(m,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),ae.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),ae.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsx(h,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),ae.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[ae.jsx(s,{to:"/login",children:ae.jsxs(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",ae.jsx(p,{className:"w-5 h-5"})]})}),ae.jsx(s,{to:"/login?mode=signup",children:ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),Qd=()=>{const[t,r]=e.useState(""),[s,a]=e.useState(""),[o,l]=e.useState(""),[c,h]=e.useState(!0),[d,m]=e.useState(!1),[p,w]=e.useState(!1),N=n(),[E]=i(),{refreshAuth:S}=Kd();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",E.get("mode")),console.log("authService.isAuthenticated():",Wd.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await Wd.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),ht.success(`Bem-vindo, ${e.name}! 🎉`),void N("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),ht.error("Erro ao processar login Google")}})();const e=E.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void h(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[N,E]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",p),ae.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[ae.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[ae.jsx(u.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),ae.jsx(u.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),ae.jsx(u.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),ae.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[ae.jsxs("div",{className:"text-center mb-10",children:[ae.jsx(u.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:ae.jsx("span",{className:"text-3xl",children:"💰"})}),ae.jsx(u.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),ae.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&ae.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),ae.jsxs(u.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[ae.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&s&&(c||o)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?s.length<6?(ht.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&o.length<2&&(ht.error("O nome deve ter pelo menos 2 caracteres"),1)):(ht.error("Por favor, insira um e-mail válido"),0):(ht.error("Por favor, preencha todos os campos"),0)){w(!0);try{if(c){let e=!1,i=null;try{console.log("🔄 Tentando login principal..."),i=await Wd.login(t,s),e=!0}catch(r){console.log("❌ Login principal falhou:",r.message),console.log("🔄 Tentando método alternativo...");try{i=await Wd.loginAlternative(t,s),e=!0,console.log("✅ Login alternativo funcionou!")}catch(n){throw console.error("❌ Login alternativo também falhou:",n.message),n}}e&&i&&(localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),ht.success("Login realizado com sucesso!"),N("/dashboard"))}else await Wd.register(o,t,s),ht.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),N("/dashboard")}catch(i){console.error("Auth error:",i);const e=i.message||"Erro inesperado. Tente novamente";ht.error(e)}finally{w(!1)}}},className:"space-y-6",children:[!c&&ae.jsxs("div",{children:[ae.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:ae.jsx(f,{className:"h-5 w-5 text-gray-400"})}),ae.jsx("input",{id:"name",type:"text",value:o,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),ae.jsxs("div",{children:[ae.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:ae.jsx(g,{className:"h-5 w-5 text-gray-400"})}),ae.jsx("input",{id:"email",type:"email",value:t,onChange:e=>r(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),ae.jsxs("div",{children:[ae.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:ae.jsx(y,{className:"h-5 w-5 text-gray-400"})}),ae.jsx("input",{id:"password",type:d?"text":"password",value:s,onChange:e=>a(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),ae.jsx("button",{type:"button",onClick:()=>m(!d),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:d?ae.jsx(x,{className:"h-5 w-5"}):ae.jsx(b,{className:"h-5 w-5"})})]})]}),ae.jsx(u.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:p,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:p?ae.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):ae.jsxs(ae.Fragment,{children:[c?ae.jsx(v,{className:"h-5 w-5"}):ae.jsx(f,{className:"h-5 w-5"}),ae.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),ae.jsxs("div",{className:"mt-6",children:[ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-0 flex items-center",children:ae.jsx("div",{className:"w-full border-t border-gray-300/30"})}),ae.jsx("div",{className:"relative flex justify-center text-sm",children:ae.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),ae.jsxs(u.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(p)return;w(!0);const e=ht.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await Wd.loginWithGoogle();ht.dismiss(e),ht.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),N("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),ht.dismiss(e);let r="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?r="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?r="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(r="Erro de conexão. Verifique sua internet"),ht.error(r)}finally{w(!1)}},disabled:p,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[ae.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[ae.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),ae.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),ae.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),ae.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),ae.jsx("span",{children:"Continuar com Google"})]})]}),c&&ae.jsx("div",{className:"mt-6 text-center",children:ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>N("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),ae.jsxs("div",{className:"mt-8 text-center",children:[ae.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>h(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},Yd=()=>(console.log("LoginSimple carregando..."),ae.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[ae.jsx("h1",{children:"LOGIN SIMPLES"}),ae.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),ae.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[ae.jsxs("div",{style:{marginBottom:"15px"},children:[ae.jsx("label",{children:"Email:"}),ae.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),ae.jsxs("div",{style:{marginBottom:"15px"},children:[ae.jsx("label",{children:"Senha:"}),ae.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),ae.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]})),Zd=()=>{const[t,r]=e.useState("test@teste.com"),[n,s]=e.useState("123456"),[i,a]=e.useState(!1);console.log("🔥 LOGIN ALTERNATIVO - baseURL:",Hd.getBaseURL()),console.log("🔥 LOGIN ALTERNATIVO - loginURL:",Hd.auth.login);return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:ae.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full max-w-md",children:[ae.jsx("h1",{className:"text-3xl font-bold text-white mb-6 text-center",children:"🔧 Login Alternativo"}),ae.jsxs("div",{className:"mb-6",children:[ae.jsxs("p",{className:"text-white/80 text-sm mb-4",children:["API: ",ae.jsx("code",{className:"bg-black/30 px-2 py-1 rounded text-green-300",children:Hd.getBaseURL()})]}),ae.jsxs("div",{className:"flex gap-2 mb-4",children:[ae.jsx("button",{onClick:async()=>{try{const e=await fetch(Hd.getBaseURL());if(e.ok){const t=await e.text();Be.success(`Backend conectado: ${t}`)}}catch(e){Be.error(`Erro de conexão: ${e.message}`)}},className:"bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors",children:"✅ Testar Conexão"}),ae.jsx("button",{onClick:async()=>{try{const e=Hd.auth.signup;console.log("📝 Criando usuário em:",e);const t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Usuário Teste",email:"test@teste.com",password:"123456"})}),r=await t.json();t.ok?Be.success("Usuário teste criado com sucesso!"):Be.error(r.message||"Erro ao criar usuário")}catch(e){Be.error(`Erro: ${e.message}`)}},className:"bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors",children:"👤 Criar User Teste"})]})]}),ae.jsxs("form",{onSubmit:async e=>{e.preventDefault(),a(!0);try{Be.loading("Tentando login...");const e=Hd.auth.login;console.log("🔐 Fazendo login em:",e);const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}),s=await r.json();r.ok?(Be.success("Login realizado com sucesso!"),localStorage.setItem("token",s.access_token),localStorage.setItem("user",JSON.stringify(s.user)),window.location.href="/dashboard"):Be.error(s.message||"Erro no login")}catch(r){console.error("Login error:",r),Be.error(`Erro de conexão: ${r.message}`)}finally{a(!1)}},className:"space-y-4",children:[ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-white/80 text-sm font-medium mb-2",children:"Email"}),ae.jsx("input",{type:"email",value:t,onChange:e=>r(e.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"seu@email.com",required:!0})]}),ae.jsxs("div",{children:[ae.jsx("label",{className:"block text-white/80 text-sm font-medium mb-2",children:"Senha"}),ae.jsx("input",{type:"password",value:n,onChange:e=>s(e.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"sua senha",required:!0})]}),ae.jsx("button",{type:"submit",disabled:i,className:"w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors",children:i?"🔄 Entrando...":"🚀 Entrar"})]}),ae.jsxs("div",{className:"mt-6 pt-6 border-t border-white/20",children:[ae.jsx("p",{className:"text-white/60 text-sm text-center mb-3",children:"Outros testes:"}),ae.jsxs("div",{className:"flex gap-2",children:[ae.jsx("a",{href:"/login",className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center",children:"🔐 Login OAuth"}),ae.jsx("a",{href:"/debug",className:"flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center",children:"🔧 Debug"})]})]})]})})},em=()=>{const t=n(),[r]=i();return e.useEffect(()=>{(async()=>{const e=r.get("token"),n=r.get("user");if(r.get("error"))return ht.error("Erro no login com Google. Tente novamente."),void t("/login");if(e&&n)try{const r=JSON.parse(decodeURIComponent(n));localStorage.setItem("accessToken",e),localStorage.setItem("currentUser",JSON.stringify(r)),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),ht.success("Login com Google realizado com sucesso!"),t("/dashboard")}catch(s){console.error("Erro ao processar callback:",s),ht.error("Erro ao processar login. Tente novamente."),t("/login")}else ht.error("Dados de login inválidos."),t("/login")})()},[t,r]),ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center",children:ae.jsxs("div",{className:"text-center",children:[ae.jsx("div",{className:"w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"}),ae.jsx("p",{className:"text-white text-lg",children:"Processando login com Google..."})]})})};function tm(...e){return e.filter(e=>"string"==typeof e&&e).join(" ")}const rm=({children:e,className:t,padding:r="md"})=>ae.jsx("div",{className:tm("bg-white rounded-lg border border-gray-200 shadow-sm",{none:"p-0",sm:"p-4",md:"p-6",lg:"p-8"}[r],t),children:e}),nm=({className:e,variant:t="default",size:r="md",loading:n,children:s,disabled:i,...a})=>ae.jsxs("button",{className:tm("inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",{default:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-green-500",ghost:"text-gray-600 hover:bg-gray-100 focus:ring-green-500"}[t],{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"}[r],e),disabled:i||n,...a,children:[n&&ae.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[ae.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),ae.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s]}),sm=({className:e,type:t,label:r,error:n,startIcon:s,endIcon:i,...a})=>ae.jsxs("div",{className:"w-full",children:[r&&ae.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r}),ae.jsxs("div",{className:"relative",children:[s&&ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:ae.jsx("div",{className:"h-5 w-5 text-gray-400",children:s})}),ae.jsx("input",{type:t,className:tm("flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",s?"pl-10":"",i?"pr-10":"",n?"border-red-500 focus:ring-red-600":"",e),...a}),i&&ae.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:ae.jsx("div",{className:"h-5 w-5 text-gray-400",children:i})})]}),n&&ae.jsx("p",{className:"mt-1 text-sm text-red-600",children:n})]}),im=()=>{const t=n(),[r,s]=e.useState(""),[i,a]=e.useState(!1),[o,l]=e.useState(!1),c=()=>{t("/login")};return o?ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:ae.jsxs(rm,{className:"p-8 text-center",children:[ae.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:ae.jsx(w,{className:"w-16 h-16 text-green-500 mx-auto"})}),ae.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Email Enviado!"}),ae.jsxs("p",{className:"text-gray-300 mb-6",children:["Enviamos um link de recuperação para ",ae.jsx("strong",{children:r}),". Verifique sua caixa de entrada e siga as instruções para redefinir sua senha."]}),ae.jsxs("div",{className:"space-y-4",children:[ae.jsxs(nm,{onClick:c,variant:"outline",className:"w-full",children:[ae.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]}),ae.jsx("p",{className:"text-sm text-gray-400",children:"Não recebeu o email? Verifique sua pasta de spam ou tente novamente em alguns minutos."}),ae.jsxs("div",{className:"mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700",children:[ae.jsxs("p",{className:"text-xs text-blue-300 mb-2",children:[ae.jsx("strong",{children:"Demonstração:"})," Clique no link abaixo para simular o acesso via email"]}),ae.jsx("button",{onClick:()=>t("/reset-password?token=demo-token-123"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm underline",children:"Redefinir Senha (Demo)"})]})]})]})})}):ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:ae.jsxs(rm,{className:"p-8",children:[ae.jsxs("div",{className:"text-center mb-8",children:[ae.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:ae.jsx(g,{className:"w-12 h-12 text-blue-400 mx-auto"})}),ae.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Esqueci a Senha"}),ae.jsx("p",{className:"text-gray-300",children:"Digite seu email para receber um link de recuperação de senha"})]}),ae.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!r)return void Be.error("Por favor, insira seu email");if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){a(!0);try{await new Promise(e=>setTimeout(e,2e3)),l(!0),Be.success("Email de recuperação enviado com sucesso!")}catch(t){Be.error("Erro ao enviar email de recuperação")}finally{a(!1)}}else Be.error("Por favor, insira um email válido")},className:"space-y-6",children:[ae.jsx("div",{children:ae.jsx(sm,{type:"email",placeholder:"Digite seu email",value:r,onChange:e=>s(e.target.value),disabled:i,className:"w-full"})}),ae.jsxs(nm,{type:"submit",disabled:i||!r,className:"w-full",children:[i?ae.jsx(u.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):ae.jsx(E,{className:"w-4 h-4 mr-2"}),i?"Enviando...":"Enviar Link de Recuperação"]}),ae.jsxs(nm,{type:"button",variant:"outline",onClick:c,className:"w-full",children:[ae.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]}),ae.jsx("div",{className:"mt-6 text-center",children:ae.jsxs("p",{className:"text-sm text-gray-400",children:["Lembrou da senha?"," ",ae.jsx("button",{onClick:c,className:"text-blue-400 hover:text-blue-300 font-medium transition-colors",children:"Faça login aqui"})]})})]})})})},am=()=>{const t=n(),[r]=i(),[s,a]=e.useState(""),[o,l]=e.useState(""),[c,h]=e.useState(!1),[d,m]=e.useState(!1),[p,f]=e.useState(!1),[g,v]=e.useState(!0),[E,C]=e.useState(!1),T=r.get("token");e.useEffect(()=>{T||(v(!1),Be.error("Token de recuperação inválido ou expirado"))},[T]);const _=()=>{t("/login")};return g?E?ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:ae.jsxs(rm,{className:"p-8 text-center",children:[ae.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:ae.jsx(w,{className:"w-16 h-16 text-green-500 mx-auto"})}),ae.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Senha Redefinida!"}),ae.jsx("p",{className:"text-gray-300 mb-6",children:"Sua senha foi redefinida com sucesso. Agora você pode fazer login com sua nova senha."}),ae.jsx(nm,{onClick:_,className:"w-full",children:"Fazer Login"})]})})}):ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:ae.jsxs(rm,{className:"p-8",children:[ae.jsxs("div",{className:"text-center mb-8",children:[ae.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:ae.jsx(y,{className:"w-12 h-12 text-blue-400 mx-auto"})}),ae.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Redefinir Senha"}),ae.jsx("p",{className:"text-gray-300",children:"Digite sua nova senha"})]}),ae.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!s||!o)return void Be.error("Por favor, preencha todos os campos");const t=(r=s).length<8?"A senha deve ter pelo menos 8 caracteres":/(?=.*[a-z])/.test(r)?/(?=.*[A-Z])/.test(r)?/(?=.*\d)/.test(r)?null:"A senha deve conter pelo menos um número":"A senha deve conter pelo menos uma letra maiúscula":"A senha deve conter pelo menos uma letra minúscula";var r;if(t)Be.error(t);else if(s===o){f(!0);try{await new Promise(e=>setTimeout(e,2e3)),C(!0),Be.success("Senha redefinida com sucesso!")}catch(n){Be.error("Erro ao redefinir senha. Tente novamente")}finally{f(!1)}}else Be.error("As senhas não coincidem")},className:"space-y-6",children:[ae.jsxs("div",{children:[ae.jsxs("div",{className:"relative",children:[ae.jsx(sm,{type:c?"text":"password",placeholder:"Nova senha",value:s,onChange:e=>a(e.target.value),disabled:p,className:"w-full pr-12"}),ae.jsx("button",{type:"button",onClick:()=>h(!c),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:c?ae.jsx(x,{className:"w-4 h-4"}):ae.jsx(b,{className:"w-4 h-4"})})]}),s&&ae.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[ae.jsxs("div",{className:"flex items-center "+(s.length>=8?"text-green-400":"text-red-400"),children:[ae.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(s.length>=8?"bg-green-400":"bg-red-400")}),"Pelo menos 8 caracteres"]}),ae.jsxs("div",{className:"flex items-center "+(/(?=.*[a-z])/.test(s)?"text-green-400":"text-red-400"),children:[ae.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[a-z])/.test(s)?"bg-green-400":"bg-red-400")}),"Uma letra minúscula"]}),ae.jsxs("div",{className:"flex items-center "+(/(?=.*[A-Z])/.test(s)?"text-green-400":"text-red-400"),children:[ae.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[A-Z])/.test(s)?"bg-green-400":"bg-red-400")}),"Uma letra maiúscula"]}),ae.jsxs("div",{className:"flex items-center "+(/(?=.*\d)/.test(s)?"text-green-400":"text-red-400"),children:[ae.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*\d)/.test(s)?"bg-green-400":"bg-red-400")}),"Um número"]})]})]}),ae.jsxs("div",{children:[ae.jsxs("div",{className:"relative",children:[ae.jsx(sm,{type:d?"text":"password",placeholder:"Confirmar nova senha",value:o,onChange:e=>l(e.target.value),disabled:p,className:"w-full pr-12"}),ae.jsx("button",{type:"button",onClick:()=>m(!d),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:d?ae.jsx(x,{className:"w-4 h-4"}):ae.jsx(b,{className:"w-4 h-4"})})]}),o&&ae.jsx("div",{className:"mt-2 text-xs",children:ae.jsxs("div",{className:"flex items-center "+(s===o?"text-green-400":"text-red-400"),children:[ae.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(s===o?"bg-green-400":"bg-red-400")}),s===o?"Senhas coincidem":"Senhas não coincidem"]})})]}),ae.jsxs(nm,{type:"submit",disabled:p||!s||!o||s!==o,className:"w-full",children:[p?ae.jsx(u.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):ae.jsx(y,{className:"w-4 h-4 mr-2"}),p?"Redefinindo...":"Redefinir Senha"]}),ae.jsxs(nm,{type:"button",variant:"outline",onClick:_,className:"w-full",children:[ae.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})}):ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:ae.jsxs(rm,{className:"p-8 text-center",children:[ae.jsx(S,{className:"w-16 h-16 text-red-500 mx-auto mb-6"}),ae.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Token Inválido"}),ae.jsx("p",{className:"text-gray-300 mb-6",children:"O link de recuperação é inválido ou expirou. Por favor, solicite um novo link de recuperação."}),ae.jsxs("div",{className:"space-y-4",children:[ae.jsx(nm,{onClick:()=>t("/forgot-password"),className:"w-full",children:"Solicitar Novo Link"}),ae.jsxs(nm,{onClick:_,variant:"outline",className:"w-full",children:[ae.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})})};function om(e,t){return function(){return e.apply(t,arguments)}}const{toString:lm}=Object.prototype,{getPrototypeOf:cm}=Object,{iterator:um,toStringTag:hm}=Symbol,dm=(mm=Object.create(null),e=>{const t=lm.call(e);return mm[t]||(mm[t]=t.slice(8,-1).toLowerCase())});var mm;const pm=e=>(e=e.toLowerCase(),t=>dm(t)===e),fm=e=>t=>typeof t===e,{isArray:gm}=Array,ym=fm("undefined");function xm(e){return null!==e&&!ym(e)&&null!==e.constructor&&!ym(e.constructor)&&wm(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bm=pm("ArrayBuffer");const vm=fm("string"),wm=fm("function"),Nm=fm("number"),Em=e=>null!==e&&"object"==typeof e,Sm=e=>{if("object"!==dm(e))return!1;const t=cm(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||hm in e||um in e)},Cm=pm("Date"),Tm=pm("File"),_m=pm("Blob"),km=pm("FileList"),jm=pm("URLSearchParams"),[Im,Am,Pm,Rm]=["ReadableStream","Request","Response","Headers"].map(pm);function Dm(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,s;if("object"!=typeof e&&(e=[e]),gm(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{if(xm(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(n=0;n<i;n++)a=s[n],t.call(null,e[a],a,e)}}function Om(e,t){if(xm(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n,s=r.length;for(;s-- >0;)if(n=r[s],t===n.toLowerCase())return n;return null}const Lm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Mm=e=>!ym(e)&&e!==Lm;const Um=(Fm="undefined"!=typeof Uint8Array&&cm(Uint8Array),e=>Fm&&e instanceof Fm);var Fm;const Vm=pm("HTMLFormElement"),Bm=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),$m=pm("RegExp"),zm=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Dm(r,(r,s)=>{let i;!1!==(i=t(r,s,e))&&(n[s]=i||r)}),Object.defineProperties(e,n)};const qm=pm("AsyncFunction"),Hm=(Gm="function"==typeof setImmediate,Wm=wm(Lm.postMessage),Gm?setImmediate:Wm?(Km=`axios@${Math.random()}`,Jm=[],Lm.addEventListener("message",({source:e,data:t})=>{e===Lm&&t===Km&&Jm.length&&Jm.shift()()},!1),e=>{Jm.push(e),Lm.postMessage(Km,"*")}):e=>setTimeout(e));var Gm,Wm,Km,Jm;const Xm="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Lm):"undefined"!=typeof process&&process.nextTick||Hm,Qm={isArray:gm,isArrayBuffer:bm,isBuffer:xm,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||wm(e.append)&&("formdata"===(t=dm(e))||"object"===t&&wm(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&bm(e.buffer),t},isString:vm,isNumber:Nm,isBoolean:e=>!0===e||!1===e,isObject:Em,isPlainObject:Sm,isEmptyObject:e=>{if(!Em(e)||xm(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(ge){return!1}},isReadableStream:Im,isRequest:Am,isResponse:Pm,isHeaders:Rm,isUndefined:ym,isDate:Cm,isFile:Tm,isBlob:_m,isRegExp:$m,isFunction:wm,isStream:e=>Em(e)&&wm(e.pipe),isURLSearchParams:jm,isTypedArray:Um,isFileList:km,forEach:Dm,merge:function e(){const{caseless:t,skipUndefined:r}=Mm(this)&&this||{},n={},s=(s,i)=>{const a=t&&Om(n,i)||i;Sm(n[a])&&Sm(s)?n[a]=e(n[a],s):Sm(s)?n[a]=e({},s):gm(s)?n[a]=s.slice():r&&ym(s)||(n[a]=s)};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Dm(arguments[i],s);return n},extend:(e,t,r,{allOwnKeys:n}={})=>(Dm(t,(t,n)=>{r&&wm(t)?e[n]=om(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let s,i,a;const o={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],n&&!n(a,e,t)||o[a]||(t[a]=e[a],o[a]=!0);e=!1!==r&&cm(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:dm,kindOfTest:pm,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(gm(e))return e;let t=e.length;if(!Nm(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[um]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:Vm,hasOwnProperty:Bm,hasOwnProp:Bm,reduceDescriptors:zm,freezeMethods:e=>{zm(e,(t,r)=>{if(wm(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];wm(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach(e=>{r[e]=!0})};return gm(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Om,global:Lm,isContextDefined:Mm,isSpecCompliantForm:function(e){return!!(e&&wm(e.append)&&"FormData"===e[hm]&&e[um])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(Em(e)){if(t.indexOf(e)>=0)return;if(xm(e))return e;if(!("toJSON"in e)){t[n]=e;const s=gm(e)?[]:{};return Dm(e,(e,t)=>{const i=r(e,n+1);!ym(i)&&(s[t]=i)}),t[n]=void 0,s}}return e};return r(e,0)},isAsyncFn:qm,isThenable:e=>e&&(Em(e)||wm(e))&&wm(e.then)&&wm(e.catch),setImmediate:Hm,asap:Xm,isIterable:e=>null!=e&&wm(e[um])};function Ym(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}Qm.inherits(Ym,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Qm.toJSONObject(this.config),code:this.code,status:this.status}}});const Zm=Ym.prototype,ep={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ep[e]={value:e}}),Object.defineProperties(Ym,ep),Object.defineProperty(Zm,"isAxiosError",{value:!0}),Ym.from=(e,t,r,n,s,i)=>{const a=Object.create(Zm);Qm.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const o=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Ym.call(a,o,l,r,n,s),e&&null==a.cause&&Object.defineProperty(a,"cause",{value:e,configurable:!0}),a.name=e&&e.name||"Error",i&&Object.assign(a,i),a};function tp(e){return Qm.isPlainObject(e)||Qm.isArray(e)}function rp(e){return Qm.endsWith(e,"[]")?e.slice(0,-2):e}function np(e,t,r){return e?e.concat(t).map(function(e,t){return e=rp(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const sp=Qm.toFlatObject(Qm,{},null,function(e){return/^is[A-Z]/.test(e)});function ip(e,t,r){if(!Qm.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Qm.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Qm.isUndefined(t[e])})).metaTokens,s=r.visitor||c,i=r.dots,a=r.indexes,o=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Qm.isSpecCompliantForm(t);if(!Qm.isFunction(s))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Qm.isDate(e))return e.toISOString();if(Qm.isBoolean(e))return e.toString();if(!o&&Qm.isBlob(e))throw new Ym("Blob is not supported. Use a Buffer instead.");return Qm.isArrayBuffer(e)||Qm.isTypedArray(e)?o&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,s){let o=e;if(e&&!s&&"object"==typeof e)if(Qm.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Qm.isArray(e)&&function(e){return Qm.isArray(e)&&!e.some(tp)}(e)||(Qm.isFileList(e)||Qm.endsWith(r,"[]"))&&(o=Qm.toArray(e)))return r=rp(r),o.forEach(function(e,n){!Qm.isUndefined(e)&&null!==e&&t.append(!0===a?np([r],n,i):null===a?r:r+"[]",l(e))}),!1;return!!tp(e)||(t.append(np(s,r,i),l(e)),!1)}const u=[],h=Object.assign(sp,{defaultVisitor:c,convertValue:l,isVisitable:tp});if(!Qm.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Qm.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),Qm.forEach(r,function(r,i){!0===(!(Qm.isUndefined(r)||null===r)&&s.call(t,r,Qm.isString(i)?i.trim():i,n,h))&&e(r,n?n.concat(i):[i])}),u.pop()}}(e),t}function ap(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function op(e,t){this._pairs=[],e&&ip(e,this,t)}const lp=op.prototype;function cp(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function up(e,t,r){if(!t)return e;const n=r&&r.encode||cp;Qm.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let i;if(i=s?s(t,r):Qm.isURLSearchParams(t)?t.toString():new op(t,r).toString(n),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}lp.append=function(e,t){this._pairs.push([e,t])},lp.toString=function(e){const t=e?function(t){return e.call(this,t,ap)}:ap;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const hp=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Qm.forEach(this.handlers,function(t){null!==t&&e(t)})}},dp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mp={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:op,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},pp="undefined"!=typeof window&&"undefined"!=typeof document,fp="object"==typeof navigator&&navigator||void 0,gp=pp&&(!fp||["ReactNative","NativeScript","NS"].indexOf(fp.product)<0),yp="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,xp=pp&&window.location.href||"http://localhost",bp={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pp,hasStandardBrowserEnv:gp,hasStandardBrowserWebWorkerEnv:yp,navigator:fp,origin:xp},Symbol.toStringTag,{value:"Module"})),...mp};function vp(e){function t(e,r,n,s){let i=e[s++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),o=s>=e.length;if(i=!i&&Qm.isArray(n)?n.length:i,o)return Qm.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a;n[i]&&Qm.isObject(n[i])||(n[i]=[]);return t(e,r,n[i],s)&&Qm.isArray(n[i])&&(n[i]=function(e){const t={},r=Object.keys(e);let n;const s=r.length;let i;for(n=0;n<s;n++)i=r[n],t[i]=e[i];return t}(n[i])),!a}if(Qm.isFormData(e)&&Qm.isFunction(e.entries)){const r={};return Qm.forEachEntry(e,(e,n)=>{t(function(e){return Qm.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),n,r,0)}),r}return null}const wp={transitional:dp,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,s=Qm.isObject(e);s&&Qm.isHTMLForm(e)&&(e=new FormData(e));if(Qm.isFormData(e))return n?JSON.stringify(vp(e)):e;if(Qm.isArrayBuffer(e)||Qm.isBuffer(e)||Qm.isStream(e)||Qm.isFile(e)||Qm.isBlob(e)||Qm.isReadableStream(e))return e;if(Qm.isArrayBufferView(e))return e.buffer;if(Qm.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ip(e,new bp.classes.URLSearchParams,{visitor:function(e,t,r,n){return bp.isNode&&Qm.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((i=Qm.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ip(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||n?(t.setContentType("application/json",!1),function(e,t,r){if(Qm.isString(e))try{return(t||JSON.parse)(e),Qm.trim(e)}catch(ge){if("SyntaxError"!==ge.name)throw ge}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||wp.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Qm.isResponse(e)||Qm.isReadableStream(e))return e;if(e&&Qm.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e,this.parseReviver)}catch(ge){if(r){if("SyntaxError"===ge.name)throw Ym.from(ge,Ym.ERR_BAD_RESPONSE,this,null,this.response);throw ge}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:bp.classes.FormData,Blob:bp.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Qm.forEach(["delete","get","head","post","put","patch"],e=>{wp.headers[e]={}});const Np=wp,Ep=Qm.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sp=Symbol("internals");function Cp(e){return e&&String(e).trim().toLowerCase()}function Tp(e){return!1===e||null==e?e:Qm.isArray(e)?e.map(Tp):String(e)}function _p(e,t,r,n,s){return Qm.isFunction(n)?n.call(this,t,r):(s&&(t=r),Qm.isString(t)?Qm.isString(n)?-1!==t.indexOf(n):Qm.isRegExp(n)?n.test(t):void 0:void 0)}class kp{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function s(e,t,r){const s=Cp(t);if(!s)throw new Error("header name must be a non-empty string");const i=Qm.findKey(n,s);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Tp(e))}const i=(e,t)=>Qm.forEach(e,(e,r)=>s(e,r,t));if(Qm.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Qm.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let r,n,s;return e&&e.split("\n").forEach(function(e){s=e.indexOf(":"),r=e.substring(0,s).trim().toLowerCase(),n=e.substring(s+1).trim(),!r||t[r]&&Ep[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(e),t);else if(Qm.isObject(e)&&Qm.isIterable(e)){let r,n,s={};for(const t of e){if(!Qm.isArray(t))throw TypeError("Object iterator must return a key-value pair");s[n=t[0]]=(r=s[n])?Qm.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}i(s,t)}else null!=e&&s(t,e,r);return this}get(e,t){if(e=Cp(e)){const r=Qm.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Qm.isFunction(t))return t.call(this,e,r);if(Qm.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Cp(e)){const r=Qm.findKey(this,e);return!(!r||void 0===this[r]||t&&!_p(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function s(e){if(e=Cp(e)){const s=Qm.findKey(r,e);!s||t&&!_p(0,r[s],s,t)||(delete r[s],n=!0)}}return Qm.isArray(e)?e.forEach(s):s(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const s=t[r];e&&!_p(0,this[s],s,e,!0)||(delete this[s],n=!0)}return n}normalize(e){const t=this,r={};return Qm.forEach(this,(n,s)=>{const i=Qm.findKey(r,s);if(i)return t[i]=Tp(n),void delete t[s];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(s):String(s).trim();a!==s&&delete t[s],t[a]=Tp(n),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Qm.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Qm.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[Sp]=this[Sp]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Cp(e);t[n]||(!function(e,t){const r=Qm.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,s){return this[n].call(this,t,e,r,s)},configurable:!0})})}(r,e),t[n]=!0)}return Qm.isArray(e)?e.forEach(n):n(e),this}}kp.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Qm.reduceDescriptors(kp.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),Qm.freezeMethods(kp);const jp=kp;function Ip(e,t){const r=this||Np,n=t||r,s=jp.from(n.headers);let i=n.data;return Qm.forEach(e,function(e){i=e.call(r,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ap(e){return!(!e||!e.__CANCEL__)}function Pp(e,t,r){Ym.call(this,null==e?"canceled":e,Ym.ERR_CANCELED,t,r),this.name="CanceledError"}function Rp(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Ym("Request failed with status code "+r.status,[Ym.ERR_BAD_REQUEST,Ym.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}Qm.inherits(Pp,Ym,{__CANCEL__:!0});const Dp=(e,t,r=3)=>{let n=0;const s=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s,i=0,a=0;return t=void 0!==t?t:1e3,function(o){const l=Date.now(),c=n[a];s||(s=l),r[i]=o,n[i]=l;let u=a,h=0;for(;u!==i;)h+=r[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-s<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}(50,250);return function(e,t){let r,n,s=0,i=1e3/t;const a=(t,i=Date.now())=>{s=i,r=null,n&&(clearTimeout(n),n=null),e(...t)};return[(...e)=>{const t=Date.now(),o=t-s;o>=i?a(e,t):(r=e,n||(n=setTimeout(()=>{n=null,a(r)},i-o)))},()=>r&&a(r)]}(r=>{const i=r.loaded,a=r.lengthComputable?r.total:void 0,o=i-n,l=s(o);n=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:o,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:r,lengthComputable:null!=a,[t?"download":"upload"]:!0})},r)},Op=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Lp=e=>(...t)=>Qm.asap(()=>e(...t)),Mp=bp.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,bp.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(bp.origin),bp.navigator&&/(msie|trident)/i.test(bp.navigator.userAgent)):()=>!0,Up=bp.hasStandardBrowserEnv?{write(e,t,r,n,s,i,a){if("undefined"==typeof document)return;const o=[`${e}=${encodeURIComponent(t)}`];Qm.isNumber(r)&&o.push(`expires=${new Date(r).toUTCString()}`),Qm.isString(n)&&o.push(`path=${n}`),Qm.isString(s)&&o.push(`domain=${s}`),!0===i&&o.push("secure"),Qm.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function Fp(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Vp=e=>e instanceof jp?{...e}:e;function Bp(e,t){t=t||{};const r={};function n(e,t,r,n){return Qm.isPlainObject(e)&&Qm.isPlainObject(t)?Qm.merge.call({caseless:n},e,t):Qm.isPlainObject(t)?Qm.merge({},t):Qm.isArray(t)?t.slice():t}function s(e,t,r,s){return Qm.isUndefined(t)?Qm.isUndefined(e)?void 0:n(void 0,e,0,s):n(e,t,0,s)}function i(e,t){if(!Qm.isUndefined(t))return n(void 0,t)}function a(e,t){return Qm.isUndefined(t)?Qm.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function o(r,s,i){return i in t?n(r,s):i in e?n(void 0,r):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:o,headers:(e,t,r)=>s(Vp(e),Vp(t),0,!0)};return Qm.forEach(Object.keys({...e,...t}),function(n){const i=l[n]||s,a=i(e[n],t[n],n);Qm.isUndefined(a)&&i!==o||(r[n]=a)}),r}const $p=e=>{const t=Bp({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:o}=t;if(t.headers=a=jp.from(a),t.url=up(Fp(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),o&&a.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):""))),Qm.isFormData(r))if(bp.hasStandardBrowserEnv||bp.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(Qm.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&a.set(e,r)})}if(bp.hasStandardBrowserEnv&&(n&&Qm.isFunction(n)&&(n=n(t)),n||!1!==n&&Mp(t.url))){const e=s&&i&&Up.read(i);e&&a.set(s,e)}return t},zp="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const n=$p(e);let s=n.data;const i=jp.from(n.headers).normalize();let a,o,l,c,u,{responseType:h,onUploadProgress:d,onDownloadProgress:m}=n;function p(){c&&c(),u&&u(),n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}let f=new XMLHttpRequest;function g(){if(!f)return;const n=jp.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders());Rp(function(e){t(e),p()},function(e){r(e),p()},{data:h&&"text"!==h&&"json"!==h?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f}),f=null}f.open(n.method.toUpperCase(),n.url,!0),f.timeout=n.timeout,"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(g)},f.onabort=function(){f&&(r(new Ym("Request aborted",Ym.ECONNABORTED,e,f)),f=null)},f.onerror=function(t){const n=new Ym(t&&t.message?t.message:"Network Error",Ym.ERR_NETWORK,e,f);n.event=t||null,r(n),f=null},f.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const s=n.transitional||dp;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Ym(t,s.clarifyTimeoutError?Ym.ETIMEDOUT:Ym.ECONNABORTED,e,f)),f=null},void 0===s&&i.setContentType(null),"setRequestHeader"in f&&Qm.forEach(i.toJSON(),function(e,t){f.setRequestHeader(t,e)}),Qm.isUndefined(n.withCredentials)||(f.withCredentials=!!n.withCredentials),h&&"json"!==h&&(f.responseType=n.responseType),m&&([l,u]=Dp(m,!0),f.addEventListener("progress",l)),d&&f.upload&&([o,c]=Dp(d),f.upload.addEventListener("progress",o),f.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(a=t=>{f&&(r(!t||t.type?new Pp(null,e,f):t),f.abort(),f=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);y&&-1===bp.protocols.indexOf(y)?r(new Ym("Unsupported protocol "+y+":",Ym.ERR_BAD_REQUEST,e)):f.send(s||null)})},qp=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const s=function(e){if(!r){r=!0,a();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Ym?t:new Pp(t instanceof Error?t.message:t))}};let i=t&&setTimeout(()=>{i=null,s(new Ym(`timeout ${t} of ms exceeded`,Ym.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(s):e.removeEventListener("abort",s)}),e=null)};e.forEach(e=>e.addEventListener("abort",s));const{signal:o}=n;return o.unsubscribe=()=>Qm.asap(a),o}},Hp=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,s=0;for(;s<r;)n=s+t,yield e.slice(s,n),s=n},Gp=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Wp=(e,t,r,n)=>{const s=async function*(e,t){for await(const r of Gp(e))yield*Hp(r,t)}(e,t);let i,a=0,o=e=>{i||(i=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await s.next();if(t)return o(),void e.close();let i=n.byteLength;if(r){let e=a+=i;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw o(t),t}},cancel:e=>(o(e),s.return())},{highWaterMark:2})},{isFunction:Kp}=Qm,Jp=(({Request:e,Response:t})=>({Request:e,Response:t}))(Qm.global),{ReadableStream:Xp,TextEncoder:Qp}=Qm.global,Yp=(e,...t)=>{try{return!!e(...t)}catch(ge){return!1}},Zp=e=>{e=Qm.merge.call({skipUndefined:!0},Jp,e);const{fetch:t,Request:r,Response:n}=e,s=t?Kp(t):"function"==typeof fetch,i=Kp(r),a=Kp(n);if(!s)return!1;const o=s&&Kp(Xp),l=s&&("function"==typeof Qp?(c=new Qp,e=>c.encode(e)):async e=>new Uint8Array(await new r(e).arrayBuffer()));var c;const u=i&&o&&Yp(()=>{let e=!1;const t=new r(bp.origin,{body:new Xp,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),h=a&&o&&Yp(()=>Qm.isReadableStream(new n("").body)),d={stream:h&&(e=>e.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!d[e]&&(d[e]=(t,r)=>{let n=t&&t[e];if(n)return n.call(t);throw new Ym(`Response type '${e}' is not supported`,Ym.ERR_NOT_SUPPORT,r)})});const m=async(e,t)=>{const n=Qm.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Qm.isBlob(e))return e.size;if(Qm.isSpecCompliantForm(e)){const t=new r(bp.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Qm.isArrayBufferView(e)||Qm.isArrayBuffer(e)?e.byteLength:(Qm.isURLSearchParams(e)&&(e+=""),Qm.isString(e)?(await l(e)).byteLength:void 0)})(t):n};return async e=>{let{url:s,method:a,data:o,signal:l,cancelToken:c,timeout:p,onDownloadProgress:f,onUploadProgress:g,responseType:y,headers:x,withCredentials:b="same-origin",fetchOptions:v}=$p(e),w=t||fetch;y=y?(y+"").toLowerCase():"text";let N=qp([l,c&&c.toAbortSignal()],p),E=null;const S=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let C;try{if(g&&u&&"get"!==a&&"head"!==a&&0!==(C=await m(x,o))){let e,t=new r(s,{method:"POST",body:o,duplex:"half"});if(Qm.isFormData(o)&&(e=t.headers.get("content-type"))&&x.setContentType(e),t.body){const[e,r]=Op(C,Dp(Lp(g)));o=Wp(t.body,65536,e,r)}}Qm.isString(b)||(b=b?"include":"omit");const t=i&&"credentials"in r.prototype,l={...v,signal:N,method:a.toUpperCase(),headers:x.normalize().toJSON(),body:o,duplex:"half",credentials:t?b:void 0};E=i&&new r(s,l);let c=await(i?w(E,v):w(s,l));const p=h&&("stream"===y||"response"===y);if(h&&(f||p&&S)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=Qm.toFiniteNumber(c.headers.get("content-length")),[r,s]=f&&Op(t,Dp(Lp(f),!0))||[];c=new n(Wp(c.body,65536,r,()=>{s&&s(),S&&S()}),e)}y=y||"text";let T=await d[Qm.findKey(d,y)||"text"](c,e);return!p&&S&&S(),await new Promise((t,r)=>{Rp(t,r,{data:T,headers:jp.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:E})})}catch(T){if(S&&S(),T&&"TypeError"===T.name&&/Load failed|fetch/i.test(T.message))throw Object.assign(new Ym("Network Error",Ym.ERR_NETWORK,e,E),{cause:T.cause||T});throw Ym.from(T,T&&T.code,e,E)}}},ef=new Map,tf=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:s}=t,i=[n,s,r];let a,o,l=i.length,c=ef;for(;l--;)a=i[l],o=c.get(a),void 0===o&&c.set(a,o=l?new Map:Zp(t)),c=o;return o};tf();const rf={http:null,xhr:zp,fetch:{get:tf}};Qm.forEach(rf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(ge){}Object.defineProperty(e,"adapterName",{value:t})}});const nf=e=>`- ${e}`,sf=e=>Qm.isFunction(e)||null===e||!1===e;const af={getAdapter:function(e,t){e=Qm.isArray(e)?e:[e];const{length:r}=e;let n,s;const i={};for(let a=0;a<r;a++){let r;if(n=e[a],s=n,!sf(n)&&(s=rf[(r=String(n)).toLowerCase()],void 0===s))throw new Ym(`Unknown adapter '${r}'`);if(s&&(Qm.isFunction(s)||(s=s.get(t))))break;i[r||"#"+a]=s}if(!s){const e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Ym("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(nf).join("\n"):" "+nf(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return s},adapters:rf};function of(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pp(null,e)}function lf(e){of(e),e.headers=jp.from(e.headers),e.data=Ip.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return af.getAdapter(e.adapter||Np.adapter,e)(e).then(function(t){return of(e),t.data=Ip.call(e,e.transformResponse,t),t.headers=jp.from(t.headers),t},function(t){return Ap(t)||(of(e),t&&t.response&&(t.response.data=Ip.call(e,e.transformResponse,t.response),t.response.headers=jp.from(t.response.headers))),Promise.reject(t)})}const cf="1.13.1",uf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{uf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const hf={};uf.transitional=function(e,t,r){function n(e,t){return"[Axios v"+cf+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,s,i)=>{if(!1===e)throw new Ym(n(s," has been removed"+(t?" in "+t:"")),Ym.ERR_DEPRECATED);return t&&!hf[s]&&(hf[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,s,i)}},uf.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const df={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Ym("options must be an object",Ym.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const i=n[s],a=t[i];if(a){const t=e[i],r=void 0===t||a(t,i,e);if(!0!==r)throw new Ym("option "+i+" must be "+r,Ym.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Ym("Unknown option "+i,Ym.ERR_BAD_OPTION)}},validators:uf},mf=df.validators;class pf{constructor(e){this.defaults=e||{},this.interceptors={request:new hp,response:new hp}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(ge){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Bp(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:s}=t;void 0!==r&&df.assertOptions(r,{silentJSONParsing:mf.transitional(mf.boolean),forcedJSONParsing:mf.transitional(mf.boolean),clarifyTimeoutError:mf.transitional(mf.boolean)},!1),null!=n&&(Qm.isFunction(n)?t.paramsSerializer={serialize:n}:df.assertOptions(n,{encode:mf.function,serialize:mf.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),df.assertOptions(t,{baseUrl:mf.spelling("baseURL"),withXsrfToken:mf.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=s&&Qm.merge(s.common,s[t.method]);s&&Qm.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=jp.concat(i,s);const a=[];let o=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,a.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let u,h=0;if(!o){const e=[lf.bind(this),void 0];for(e.unshift(...a),e.push(...l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=a.length;let d=t;for(;h<u;){const e=a[h++],t=a[h++];try{d=e(d)}catch(m){t.call(this,m);break}}try{c=lf.call(this,d)}catch(m){return Promise.reject(m)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return up(Fp((e=Bp(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Qm.forEach(["delete","get","head","options"],function(e){pf.prototype[e]=function(t,r){return this.request(Bp(r||{},{method:e,url:t,data:(r||{}).data}))}}),Qm.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,s){return this.request(Bp(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}pf.prototype[e]=t(),pf.prototype[e+"Form"]=t(!0)});const ff=pf;class gf{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,s){r.reason||(r.reason=new Pp(e,n,s),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new gf(function(t){e=t});return{token:t,cancel:e}}}const yf=gf;const xf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(xf).forEach(([e,t])=>{xf[t]=e});const bf=xf;const vf=function e(t){const r=new ff(t),n=om(ff.prototype.request,r);return Qm.extend(n,ff.prototype,r,{allOwnKeys:!0}),Qm.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Bp(t,r))},n}(Np);vf.Axios=ff,vf.CanceledError=Pp,vf.CancelToken=yf,vf.isCancel=Ap,vf.VERSION=cf,vf.toFormData=ip,vf.AxiosError=Ym,vf.Cancel=vf.CanceledError,vf.all=function(e){return Promise.all(e)},vf.spread=function(e){return function(t){return e.apply(null,t)}},vf.isAxiosError=function(e){return Qm.isObject(e)&&!0===e.isAxiosError},vf.mergeConfig=Bp,vf.AxiosHeaders=jp,vf.formToJSON=e=>vp(Qm.isHTMLForm(e)?new FormData(e):e),vf.getAdapter=af.getAdapter,vf.HttpStatusCode=bf,vf.default=vf;const wf=vf;const Nf=()=>{const{user:t}=Kd(),[r,s]=e.useState(null),[i,a]=e.useState("monthly"),[o,l]=e.useState(null),[c,h]=e.useState({isConnected:!1,isLoading:!0,products:null}),d=n(),p=[{id:"basic",name:"Básico",icon:ae.jsx(j,{className:"w-10 h-10"}),color:"blue",gradient:"from-blue-500 to-cyan-500",features:["Cálculo de precificação manual e automático","Suporte a Real (BRL) e Dólar (USD)","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:4.9,quarterly:{total:13.4,perMonth:4.47},annual:{total:44.9,perMonth:3.74}}},{id:"gold",name:"Gold",icon:ae.jsx(I,{className:"w-10 h-10"}),color:"yellow",gradient:"from-yellow-500 to-orange-500",popular:!0,features:["Suporte a 10+ moedas internacionais","Integração com principais plataformas","Cálculo automático em tempo real","Atualização automática de câmbio","Shopee, AliExpress, Nuvemshop"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:8.97},annual:{total:89.9,perMonth:7.49}}},{id:"premium",name:"Premium",icon:ae.jsx(A,{className:"w-10 h-10"}),color:"purple",gradient:"from-purple-500 to-pink-500",features:["Todas as moedas globais (70+)","Integração com todas as plataformas","IA de precificação inteligente","Suporte técnico prioritário","Recursos avançados exclusivos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.66}}}];e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),r=localStorage.getItem("currentUser");if(e&&"active"===t&&r){const t=localStorage.getItem("subscriptionDate");if(t){const r=new Date(t);((new Date).getTime()-r.getTime())/36e5<24?s(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive"))}else s(e)}f()},[]);const f=async()=>{try{h(e=>({...e,isLoading:!0})),await new Promise(e=>setTimeout(e,1e3));h({isConnected:!0,isLoading:!1,products:{dropcalc_basic:{id:"dropcalc_basic",title:"DropCalc Básico",prices:{monthly:"R$ 0,00",quarterly:"R$ 0,00",annual:"R$ 0,00"}},dropcalc_gold:{id:"dropcalc_gold",title:"DropCalc Gold",prices:{monthly:"R$ 9,90",quarterly:"R$ 26,90",annual:"R$ 89,90"}},dropcalc_premium:{id:"dropcalc_premium",title:"DropCalc Premium",prices:{monthly:"R$ 19,90",quarterly:"R$ 54,90",annual:"R$ 199,90"}}}})}catch(e){console.error("Erro ao inicializar billing:",e),h(e=>({...e,isLoading:!1})),ht.error("Erro ao conectar com a loja. Tente novamente.")}},g=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}/mês`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)}`,savings:`≈ R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)}`,savings:`≈ R$ ${e.prices.annual.perMonth.toFixed(2)}/mês`}}},y=(e,t)=>{const r=e.prices.monthly*("quarterly"===t?3:12),n="quarterly"===t?e.prices.quarterly.total:e.prices.annual.total;return 0===r?0:Math.round((r-n)/r*100)},x=async(e,r)=>{const n=`${e.id}_${r}`;l(n);try{if(ht.loading("Redirecionando para pagamento...",{id:"purchase"}),!t?.id)throw new Error("Usuário não encontrado");const n=await async function({title:e,description:t,price:r,quantity:n=1,planId:s,userId:i}){const a={items:[{title:e,description:t,quantity:n,currency_id:"BRL",unit_price:r}],external_reference:`${s}_${i}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:i}};return(await wf.post("https://api.mercadopago.com/checkout/preferences",a,{headers:{Authorization:"Bearer [REDACTED_APP_USR_TOKEN]","Content-Type":"application/json"}})).data}({title:`Assinatura DropCalc - ${e.name}`,description:`Plano ${e.name} (${r})`,price:g(e,r).value,planId:e.id,userId:t.id});if(!n?.init_point)throw new Error("Preferência inválida retornada pelo servidor");window.location.href=n.init_point}catch(s){console.error("Erro ao criar pagamento:",s),ht.error("Erro ao redirecionar para pagamento.",{id:"purchase"})}finally{l(null)}};return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:ae.jsxs("div",{className:"container mx-auto px-4 py-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[ae.jsx("button",{onClick:()=>d(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors","aria-label":"Voltar",children:ae.jsx(N,{className:"w-6 h-6 text-gray-600"})}),ae.jsxs("div",{children:[ae.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Escolha seu plano DropCalc"}),ae.jsx("p",{className:"text-gray-600 mt-1",children:"Ative os recursos avançados de precificação e integração automática."})]})]}),r&&ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-green-50 border border-green-200 rounded-xl p-4 mb-8",children:ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(C,{className:"w-6 h-6 text-green-600"}),ae.jsxs("div",{children:[ae.jsxs("h3",{className:"font-semibold text-green-800",children:["Plano Ativo: ",p.find(e=>e.id===r)?.name]}),ae.jsx("p",{className:"text-green-600 text-sm",children:"Sua assinatura está ativa e funcionando perfeitamente!"})]})]})}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[ae.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4 text-center",children:"Período de Cobrança"}),ae.jsx("div",{className:"grid grid-cols-3 gap-3",children:["monthly","quarterly","annual"].map(e=>ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>a(e),className:"p-3 rounded-xl border-2 transition-all relative "+(i===e?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[ae.jsx("p",{className:"font-medium text-gray-800",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&ae.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full",children:["-",y(p[1],e)]})]},e))})]}),c.isLoading&&ae.jsxs("div",{className:"text-center mb-8",children:[ae.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600",children:"Carregando planos disponíveis..."})]}),!c.isLoading&&ae.jsx("div",{className:"grid lg:grid-cols-3 gap-6 mb-8",children:p.map((e,t)=>{const n=g(e,i),s=r===e.id,a=`${e.id}_${i}`,l=o===a;return ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*t},className:`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${e.popular?"border-yellow-300 shadow-2xl transform scale-105":"border-white/20 hover:shadow-2xl hover:scale-102"} ${s?"ring-2 ring-green-500":""}`,children:[e.popular&&ae.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:ae.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Mais Popular"})}),s&&ae.jsx("div",{className:"absolute -top-3 right-4",children:ae.jsxs("div",{className:"bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1",children:[ae.jsx(C,{className:"w-3 h-3"}),"Ativo"]})}),ae.jsxs("div",{className:"text-center mb-6",children:[ae.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${e.gradient} rounded-2xl mb-4 text-white`,children:e.icon}),ae.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:e.name})]}),ae.jsxs("div",{className:"text-center mb-6",children:[ae.jsx("div",{className:"text-3xl font-bold text-gray-800 mb-1",children:n.label}),"savings"in n&&n.savings&&ae.jsx("p",{className:"text-green-600 text-sm font-medium",children:n.savings}),"monthly"!==i&&ae.jsxs("p",{className:"text-gray-500 text-xs mt-1",children:["Economize ",y(e,i),"% vs mensal"]})]}),ae.jsx("div",{className:"space-y-3 mb-8",children:e.features.map((e,t)=>ae.jsxs("div",{className:"flex items-start gap-3",children:[ae.jsx("div",{className:"flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5",children:ae.jsx(C,{className:"w-3 h-3 text-white"})}),ae.jsx("span",{className:"text-gray-700 text-sm",children:e})]},t))}),ae.jsx(u.button,{whileHover:{scale:s?1:1.02},whileTap:{scale:s?1:.98},onClick:()=>!s&&x(e,i),disabled:l||s,className:"w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 "+(s?"bg-green-100 text-green-700 cursor-default":l?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-xl`),children:l?ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Processando..."]}):s?ae.jsxs(ae.Fragment,{children:[ae.jsx(C,{className:"w-5 h-5"}),"Plano Ativo"]}):ae.jsxs(ae.Fragment,{children:[ae.jsx(T,{className:"w-5 h-5"}),"Assinar"]})}),ae.jsx(u.button,{whileHover:{scale:s?1:1.02},whileTap:{scale:s?1:.98},onClick:()=>{},disabled:!0,className:"w-full mt-3 py-3 rounded-xl font-medium text-sm bg-white/30 text-gray-700 cursor-not-allowed","aria-hidden":!0,children:ae.jsxs("div",{className:"flex items-center justify-center gap-2",children:[ae.jsx(_,{className:"w-4 h-4"}),"Pagamento Seguro"]})}),!s&&ae.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4 text-xs text-gray-500",children:[ae.jsxs("div",{className:"flex items-center gap-1",children:[ae.jsx(_,{className:"w-3 h-3"}),ae.jsx("span",{children:"Pagamento Seguro"})]}),ae.jsxs("div",{className:"flex items-center gap-1",children:[ae.jsx(k,{className:"w-3 h-3"}),ae.jsx("span",{children:"Mercado Pago"})]})]})]},e.id)})}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl mb-8",children:[ae.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6 text-center",children:"Compare os Recursos"}),ae.jsx("div",{className:"overflow-x-auto",children:ae.jsxs("table",{className:"w-full",children:[ae.jsx("thead",{children:ae.jsxs("tr",{className:"border-b border-gray-200",children:[ae.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-800",children:"Recursos"}),ae.jsx("th",{className:"text-center py-3 px-4 font-semibold text-blue-600",children:"Básico"}),ae.jsx("th",{className:"text-center py-3 px-4 font-semibold text-yellow-600",children:"Gold"}),ae.jsx("th",{className:"text-center py-3 px-4 font-semibold text-purple-600",children:"Premium"})]})}),ae.jsxs("tbody",{className:"text-sm",children:[ae.jsxs("tr",{className:"border-b border-gray-100",children:[ae.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Calculadora de precificação"}),ae.jsx("td",{className:"text-center py-3 px-4",children:ae.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})}),ae.jsx("td",{className:"text-center py-3 px-4",children:ae.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})}),ae.jsx("td",{className:"text-center py-3 px-4",children:ae.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})})]}),ae.jsxs("tr",{className:"border-b border-gray-100",children:[ae.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Moedas suportadas"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"2"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"10+"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"70+"})]}),ae.jsxs("tr",{className:"border-b border-gray-100",children:[ae.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Integração com plataformas"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-400",children:"—"}),ae.jsx("td",{className:"text-center py-3 px-4",children:ae.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})}),ae.jsx("td",{className:"text-center py-3 px-4",children:ae.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})})]}),ae.jsxs("tr",{className:"border-b border-gray-100",children:[ae.jsx("td",{className:"py-3 px-4 text-gray-700",children:"IA de precificação"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-400",children:"—"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-400",children:"—"}),ae.jsx("td",{className:"text-center py-3 px-4",children:ae.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})})]}),ae.jsxs("tr",{children:[ae.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Suporte técnico"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"E-mail"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"E-mail"}),ae.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"Prioritário"})]})]})]})})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",children:[ae.jsx(m,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),ae.jsx("h3",{className:"text-xl font-bold mb-2",children:"💡 Dica Especial"}),ae.jsx("p",{className:"opacity-90",children:"Com o DropCalc Premium, você economiza tempo e maximiza seus lucros com cálculos automáticos e integração completa."})]})]})})},Ef=[{id:"basic",name:"Básico",price:0,features:["Calculadora básica","Até 10 cálculos por dia","Suporte por email"]},{id:"gold",name:"Gold",price:29.9,features:["Calculadora avançada","Cálculos ilimitados","Análise de margem","Suporte prioritário","Relatórios mensais"],popular:!0},{id:"premium",name:"Premium",price:49.9,features:["Todos os recursos Gold","API de integração","Suporte 24/7","Relatórios personalizados","Consultoria especializada"]}],Sf=()=>{const t=n(),{user:r,isAuthenticated:s}=Kd(),[i,a]=e.useState(""),[o,l]=e.useState(!1);e.useEffect(()=>{if(!s)return console.log("❌ Usuário não autenticado, redirecionando para login"),void t("/login");console.log("✅ Usuário autenticado na seleção de planos:",r)},[s,r,t]);return s?ae.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4",children:ae.jsxs("div",{className:"max-w-6xl mx-auto",children:[ae.jsxs("div",{className:"flex items-center mb-8",children:[ae.jsx("button",{onClick:()=>t("/dashboard"),className:"mr-4 p-2 hover:bg-white/10 rounded-lg transition-colors",children:ae.jsx(N,{className:"w-6 h-6"})}),ae.jsx("h1",{className:"text-3xl font-bold",children:"Escolha seu Plano"})]}),ae.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:Ef.map(e=>ae.jsxs("div",{className:"relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 "+(e.popular?"border-yellow-400 shadow-lg shadow-yellow-400/20":"border-gray-600 hover:border-blue-400"),children:[e.popular&&ae.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:ae.jsx("span",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold",children:"Mais Popular"})}),ae.jsxs("div",{className:"text-center mb-6",children:[ae.jsx(A,{className:"w-12 h-12 mx-auto mb-4 "+("premium"===e.id?"text-yellow-400":"gold"===e.id?"text-yellow-300":"text-gray-400")}),ae.jsx("h3",{className:"text-2xl font-bold mb-2",children:e.name}),ae.jsx("div",{className:"text-3xl font-bold",children:0===e.price?"Grátis":ae.jsxs(ae.Fragment,{children:["R$ ",ae.jsx("span",{className:"text-4xl",children:e.price}),ae.jsx("span",{className:"text-lg text-gray-300",children:"/mês"})]})})]}),ae.jsx("ul",{className:"space-y-3 mb-8",children:e.features.map((e,t)=>ae.jsxs("li",{className:"flex items-center",children:[ae.jsx(C,{className:"w-5 h-5 text-green-400 mr-3 flex-shrink-0"}),ae.jsx("span",{children:e})]},t))}),ae.jsx("button",{onClick:()=>(async e=>{l(!0);try{console.log("Plano selecionado:",e),a(e),await new Promise(e=>setTimeout(e,1e3)),t("/dashboard")}catch(r){console.error("Erro ao selecionar plano:",r)}finally{l(!1)}})(e.id),disabled:o,className:`w-full py-3 rounded-lg font-semibold transition-colors ${e.popular?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600":"bg-blue-600 hover:bg-blue-700 text-white"} disabled:opacity-50 disabled:cursor-not-allowed`,children:o?"Processando...":i===e.id?"Selecionado":"Escolher Plano"})]},e.id))}),ae.jsxs("div",{className:"mt-8 text-center text-gray-300",children:[ae.jsx("p",{children:"Todos os planos incluem garantia de 30 dias"}),ae.jsx("p",{className:"text-sm mt-2",children:"Cancele a qualquer momento"})]})]})}):null},Cf=()=>{const{t:t}=de(),[r,n]=e.useState([]);e.useEffect(()=>{try{const e=localStorage.getItem("calculadora-historico");e&&n(JSON.parse(e))}catch{n([])}},[]);return 0===r.length?ae.jsxs("div",{className:"text-center py-8 text-gray-500",children:[ae.jsx(F,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),ae.jsx("p",{children:t("calc.noHistory")})]}):ae.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:r.map(e=>{return ae.jsx(u.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all",children:ae.jsxs("div",{className:"flex justify-between items-start",children:[ae.jsxs("div",{className:"flex-1",children:[ae.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:e.nomeProduto}),ae.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[ae.jsxs("p",{children:[ae.jsx("span",{className:"font-medium",children:"Preço:"})," ",(s=e.moedaDestino,{USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[s]||s)," ",e.precoVenda.toFixed(2)]}),ae.jsxs("p",{children:[ae.jsx("span",{className:"font-medium",children:"Plataforma:"})," ",e.plataforma," | ",ae.jsx("span",{className:"font-medium",children:"Gateway:"})," ",e.gateway]}),ae.jsxs("p",{className:"text-xs text-gray-500",children:[t("calc.savedAt"),": ",e.dataCalculo]})]})]}),ae.jsx("button",{onClick:()=>(e=>{const t=r.filter(t=>t.id!==e);n(t),localStorage.setItem("calculadora-historico",JSON.stringify(t)),Be.success("Cálculo excluído")})(e.id),className:"text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",title:t("calc.deleteCalculation"),children:ae.jsx(V,{className:"w-4 h-4"})})]})},e.id);var s})})},Tf=()=>{const t=n(),{theme:r,setTheme:s}=function(){const t=e.useContext(dt);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t}(),{language:i,setLanguage:a,t:o}=de(),[l,c]=e.useState(null),[h,d]=e.useState({language:"pt",notifications:!0,isPremium:!1});e.useEffect(()=>{const e=localStorage.getItem("user");e&&c(JSON.parse(e));const t=i,r="true"===localStorage.getItem("notifications"),n="true"===localStorage.getItem("premiumActive");d({language:t,notifications:r,isPremium:n})},[]);const m=e=>{s(e),Be.success(`Tema ${"dark"===e?"escuro":"claro"} ativado!`)};return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900",children:ae.jsxs("div",{className:"container mx-auto px-4 py-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[ae.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",children:ae.jsx(N,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})}),ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(P,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"}),ae.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:o("settings.title")})]})]}),ae.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[ae.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[ae.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center",children:ae.jsx(R,{className:"w-6 h-6 text-white"})}),ae.jsxs("div",{children:[ae.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:l?.name||"Usuário"}),ae.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:l?.email})]})]}),ae.jsx("div",{className:"flex items-center gap-2",children:h.isPremium?ae.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:[ae.jsx(A,{className:"w-4 h-4"}),"Premium Ativo"]}):ae.jsxs("div",{className:"flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm",children:[ae.jsx(R,{className:"w-4 h-4"}),"Plano Gratuito"]})})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2",children:["dark"===r?ae.jsx(D,{className:"w-5 h-5"}):ae.jsx(O,{className:"w-5 h-5"}),o("settings.theme")]}),ae.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>m("light"),className:"p-4 rounded-xl border-2 transition-all "+("light"===r?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[ae.jsx(O,{className:"w-6 h-6 mx-auto mb-2 text-yellow-500"}),ae.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:o("settings.light")}),"light"===r&&ae.jsx(C,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]}),ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>m("dark"),className:"p-4 rounded-xl border-2 transition-all "+("dark"===r?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[ae.jsx(D,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),ae.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:o("settings.dark")}),"dark"===r&&ae.jsx(C,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[ae.jsx(L,{className:"w-5 h-5"}),o("settings.language")]}),ae.jsx("div",{className:"space-y-2",children:[{code:"pt",name:"Português",flag:"🇧🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"es",name:"Español",flag:"🇪🇸"}].map(e=>ae.jsxs(u.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:()=>{return t=e.code,d(e=>({...e,language:t})),a(t),void Be.success(o("msg.languageChanged"));var t},className:"w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 "+(h.language===e.code?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[ae.jsx("span",{className:"text-2xl",children:e.flag}),ae.jsx("span",{className:"font-medium text-gray-800",children:e.name}),h.language===e.code&&ae.jsx(C,{className:"w-4 h-4 text-blue-500 ml-auto"})]},e.code))})]}),ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:ae.jsxs("div",{className:"flex items-center justify-between",children:[ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(M,{className:"w-5 h-5 text-gray-600"}),ae.jsxs("div",{children:[ae.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:o("settings.notifications")}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Receber alertas e atualizações"})]})]}),ae.jsx(u.button,{whileTap:{scale:.95},onClick:()=>{const e=!h.notifications;d(t=>({...t,notifications:e})),localStorage.setItem("notifications",e.toString()),Be.success(`Notificações ${e?"ativadas":"desativadas"}!`)},className:"relative inline-flex h-6 w-11 items-center rounded-full transition-colors "+(h.notifications?"bg-blue-600":"bg-gray-300"),children:ae.jsx(u.span,{animate:{x:h.notifications?20:4},transition:{type:"spring",stiffness:500,damping:30},className:"inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"})})]})}),!h.isPremium&&ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white",children:[ae.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[ae.jsx(A,{className:"w-6 h-6"}),ae.jsx("h3",{className:"text-lg font-semibold",children:"Upgrade para Premium"})]}),ae.jsx("p",{className:"mb-4 opacity-90",children:"Desbloqueie todos os recursos da calculadora e tenha acesso completo às funcionalidades avançadas."}),ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("/payment"),className:"bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Ativar Premium"})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[ae.jsx(P,{className:"w-5 h-5"}),o("calc.calculationHistory")]}),ae.jsx(Cf,{})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[ae.jsx(_,{className:"w-5 h-5"}),"Segurança"]}),ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:async()=>{try{localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("premiumActive"),localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),Be.success("Logout realizado com sucesso!"),t("/")}catch(e){Be.error("Erro ao fazer logout")}},className:"w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2 font-medium",children:[ae.jsx(U,{className:"w-5 h-5"}),o("settings.logout")]})]})]})]})})},_f=()=>{const t=n(),[r,s]=e.useState(null),i=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:ae.jsx(h,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:ae.jsx(G,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:ae.jsx(d,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:ae.jsx(A,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Google Play"',"4. Complete o pagamento através da Google Play Store","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:ae.jsxs("div",{className:"container mx-auto px-4 py-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[ae.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:ae.jsx(N,{className:"w-6 h-6 text-gray-600"})}),ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(B,{className:"w-8 h-8 text-blue-600"}),ae.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),ae.jsxs("div",{className:"max-w-4xl mx-auto",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[ae.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),ae.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[ae.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),i.map((e,t)=>ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[ae.jsxs("button",{onClick:()=>{return t=e.id,void s(r===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[ae.jsxs("div",{className:"flex items-center gap-4",children:[ae.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),ae.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),ae.jsx(u.div,{animate:{rotate:r===e.id?90:0},transition:{duration:.2},children:ae.jsx($,{className:"w-5 h-5 text-gray-500"})})]}),ae.jsx(z,{children:r===e.id&&ae.jsx(u.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:ae.jsxs("div",{className:"p-6 pt-4",children:[ae.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>ae.jsx(u.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&ae.jsxs(u.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[ae.jsx(q,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[ae.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),ae.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>ae.jsxs(u.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[ae.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),ae.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",children:[ae.jsx(H,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),ae.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),ae.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Entrar em Contato"})]})]})]})})},kf=()=>{const[t,r]=e.useState([]),[n,s]=e.useState(!1),i="https://appdropcalc-production.up.railway.app",a=(e,t,n,s)=>{r(r=>r.map(r=>r.test===e?{...r,status:t,message:n,details:s}:r))};return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4",children:ae.jsx("div",{className:"max-w-4xl mx-auto",children:ae.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20",children:[ae.jsx("h1",{className:"text-3xl font-bold text-white mb-6",children:"🔧 Debug DropCalc"}),ae.jsxs("div",{className:"mb-6",children:[ae.jsxs("p",{className:"text-white/80 mb-4",children:["API Base URL: ",ae.jsx("code",{className:"bg-black/30 px-2 py-1 rounded text-green-300",children:i})]}),ae.jsxs("div",{className:"flex gap-4",children:[ae.jsx("button",{onClick:async()=>{s(!0);r([{test:"Conectividade Backend",status:"pending",message:"Verificando..."},{test:"Health Check",status:"pending",message:"Verificando..."},{test:"Plataformas API",status:"pending",message:"Verificando..."},{test:"OAuth Google Redirect",status:"pending",message:"Verificando..."},{test:"Variáveis de Ambiente",status:"pending",message:"Verificando..."}]);try{const e=await fetch(`${i}/`),t=await e.text();a("Conectividade Backend","success",`✅ Conectado: ${t}`,{status:e.status})}catch(e){a("Conectividade Backend","error",`❌ Erro: ${e.message}`,e)}try{const e=await fetch(`${i}/health`),t=await e.json();a("Health Check","success",`✅ Saudável: ${t.message}`,t)}catch(e){a("Health Check","error",`❌ Erro: ${e.message}`,e)}try{const e=await fetch(`${i}/calc/platforms`),t=await e.json();a("Plataformas API","success",`✅ ${t.length} plataformas carregadas`,t.slice(0,2))}catch(e){a("Plataformas API","error",`❌ Erro: ${e.message}`,e)}try{a("Firebase Auth","success","✅ Firebase Auth disponível (Google via popup)",{info:"Agora usando Firebase em vez de backend OAuth"})}catch(e){a("Firebase Auth","error",`❌ Firebase Error: ${e.message}`,{error:e.message})}a("Variáveis de Ambiente","success","✅ Variáveis carregadas",{VITE_API_URL:"https://appdropcalc-production.up.railway.app",VITE_OFFLINE_MODE:"false",VITE_APP_MODE:"production"}),s(!1),Be.success("Diagnóstico concluído!")},disabled:n,className:"bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:n?"🔄 Executando...":"🧪 Executar Diagnóstico"}),ae.jsx("button",{onClick:async()=>{try{const e=Be.loading("Testando login Google Firebase..."),t=await Wd.loginWithGoogle();Be.dismiss(e),Be.success(`Login Google funcionando! Usuário: ${t.name}`)}catch(e){Be.error(`Erro no teste Google: ${e.message}`)}},className:"bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:"🔐 Testar Login Google"})]})]}),ae.jsx("div",{className:"space-y-4",children:t.map((e,t)=>ae.jsxs("div",{className:"p-4 rounded-lg border-l-4 "+("success"===e.status?"bg-green-900/20 border-green-500":"error"===e.status?"bg-red-900/20 border-red-500":"bg-yellow-900/20 border-yellow-500"),children:[ae.jsxs("div",{className:"flex items-center justify-between",children:[ae.jsx("h3",{className:"font-semibold text-white",children:e.test}),ae.jsx("span",{className:"px-2 py-1 rounded text-xs font-bold "+("success"===e.status?"bg-green-600 text-white":"error"===e.status?"bg-red-600 text-white":"bg-yellow-600 text-black"),children:e.status.toUpperCase()})]}),ae.jsx("p",{className:"text-white/80 mt-2",children:e.message}),e.details&&ae.jsxs("details",{className:"mt-2",children:[ae.jsx("summary",{className:"text-white/60 cursor-pointer hover:text-white",children:"Ver detalhes"}),ae.jsx("pre",{className:"bg-black/30 p-3 rounded mt-2 text-xs text-green-300 overflow-x-auto",children:JSON.stringify(e.details,null,2)})]})]},t))})]})})})},jf={basic:{maxCurrencies:2,maxPlatforms:2,maxGateways:2,maxCalculationsPerMonth:10,hasAutoCalc:!1,hasExchangeUpdate:!1,hasAI:!1,hasHistory:!1,supportType:"email"},gold:{maxCurrencies:10,maxPlatforms:4,maxGateways:4,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!1,hasHistory:!1,supportType:"email"},premium:{maxCurrencies:70,maxPlatforms:99,maxGateways:99,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!0,hasHistory:!0,supportType:"priority"}};const If=({text:e,children:t})=>{const[n,s]=r.useState(!1);return ae.jsxs("div",{className:"relative inline-block",children:[ae.jsx("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"cursor-help",children:t}),n&&ae.jsxs("div",{className:"absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 max-w-xs",children:[e,ae.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"})]})]})},Af=()=>{const{plan:t,limits:r,isBasic:s,isGold:i,isPremium:a}=function(){const t=localStorage.getItem("userPlan")||"basic",r=e.useMemo(()=>jf[t],[t]);return{plan:t,limits:r,isBasic:"basic"===t,isGold:"gold"===t,isPremium:"premium"===t}}(),o=r,l=s,c=n(),{t:m}=de(),{user:p,logout:f,refreshAuth:g,isAdmin:y}=Kd();console.log("🎯 DashboardSimples - Estado atual:",{user:!!p,userEmail:p?.email,userName:p?.name,plan:!!t,planType:t,planName:t}),e.useEffect(()=>{const e=localStorage.getItem("accessToken"),t=localStorage.getItem("currentUser");if(console.log("🔍 DashboardSimples - Verificação de auth:",{hasToken:!!e,hasUserData:!!t}),!e||!t)return console.log("❌ Não autenticado, redirecionando para login"),void c("/login");!p&&t&&(console.log("🔄 Fazendo refresh do auth..."),g())},[p,c,g]);const[x,b]=e.useState(""),[v,w]=e.useState(()=>{try{const e=localStorage.getItem("calculadora-historico");return e?JSON.parse(e):[]}catch{return[]}}),[N,E]=e.useState("5.00"),[S,C]=e.useState("4.70"),[T,_]=e.useState("25"),[k,j]=e.useState("0"),[I,D]=e.useState("3"),[O,L]=e.useState("shopify"),[M,U]=e.useState("stripe"),[F,V]=e.useState("USD"),[B,$]=e.useState("USD"),[q,H]=e.useState(null),[G,Q]=e.useState(!1),[Y,Z]=e.useState(!1),[ee,te]=e.useState(!1),[re,ne]=e.useState(()=>{try{const e=localStorage.getItem("calculations-used-this-month");return e?parseInt(e):0}catch{return 0}});e.useEffect(()=>{},[]);const se=[{id:"shopify",nome:"Shopify",taxa:2.9},{id:"nuvemshop",nome:"Nuvem Shop",taxa:3.5},{id:"woocommerce",nome:"WooCommerce",taxa:0},{id:"magento",nome:"Magento",taxa:0},{id:"opencart",nome:"OpenCart",taxa:0},{id:"prestashop",nome:"PrestaShop",taxa:0},{id:"mercadolivre",nome:"Mercado Livre",taxa:13.99},{id:"amazon",nome:"Amazon Brasil",taxa:15},{id:"americanas",nome:"Americanas",taxa:17},{id:"submarino",nome:"Submarino",taxa:17},{id:"casasbahia",nome:"Casas Bahia",taxa:18},{id:"extra",nome:"Extra",taxa:16},{id:"pontofrio",nome:"Ponto Frio",taxa:17},{id:"shopee",nome:"Shopee",taxa:12},{id:"aliexpress",nome:"AliExpress",taxa:8},{id:"wish",nome:"Wish",taxa:15},{id:"etsy",nome:"Etsy",taxa:6.5},{id:"ebay",nome:"eBay",taxa:10},{id:"facebook",nome:"Facebook Shop",taxa:5},{id:"instagram",nome:"Instagram Shop",taxa:5},{id:"tiktok",nome:"TikTok Shop",taxa:6},{id:"elo7",nome:"Elo7",taxa:12},{id:"enjoei",nome:"Enjoei",taxa:15},{id:"olx",nome:"OLX",taxa:0},{id:"vinted",nome:"Vinted",taxa:7},{id:"shein",nome:"Shein",taxa:10},{id:"temu",nome:"Temu",taxa:8},{id:"zoom",nome:"Zoom",taxa:5},{id:"buscape",nome:"Buscapé",taxa:8},{id:"personalizado",nome:"Site Personalizado",taxa:0}],ie=[{id:"stripe",nome:"Stripe",taxa:3.4},{id:"pagseguro",nome:"PagSeguro",taxa:3.99},{id:"mercadopago",nome:"Mercado Pago",taxa:4.99},{id:"paypal",nome:"PayPal",taxa:4.4},{id:"cielo",nome:"Cielo",taxa:3.25},{id:"rede",nome:"Rede",taxa:3.5},{id:"getnet",nome:"Getnet",taxa:3.2},{id:"stone",nome:"Stone",taxa:2.95},{id:"adyen",nome:"Adyen",taxa:2.9},{id:"wirecard",nome:"Wirecard",taxa:3.8},{id:"iugu",nome:"Iugu",taxa:4.5},{id:"pagar.me",nome:"Pagar.me",taxa:4.99},{id:"picpay",nome:"PicPay",taxa:3.99},{id:"asaas",nome:"Asaas",taxa:3.5},{id:"gerencianet",nome:"Gerencianet",taxa:4.2},{id:"moip",nome:"Moip",taxa:4.69},{id:"ebanx",nome:"EBANX",taxa:4.2},{id:"checkout",nome:"Checkout.com",taxa:2.95},{id:"rakuten",nome:"Rakuten Pay",taxa:4.5},{id:"ifood",nome:"iFood Pay",taxa:5.2},{id:"shipay",nome:"SiPay",taxa:3.8},{id:"zoop",nome:"Zoop",taxa:3.59},{id:"vindi",nome:"Vindi",taxa:3.99},{id:"yapay",nome:"YaPay",taxa:4.1},{id:"pagarme",nome:"Pagar.me",taxa:4.99}],oe=[{codigo:"USD",nome:"Dólar Americano"},{codigo:"EUR",nome:"Euro"},{codigo:"GBP",nome:"Libra Esterlina"},{codigo:"CNY",nome:"Yuan Chinês"},{codigo:"JPY",nome:"Iene Japonês"},{codigo:"CAD",nome:"Dólar Canadense"},{codigo:"AUD",nome:"Dólar Australiano"},{codigo:"CHF",nome:"Franco Suíço"},{codigo:"SEK",nome:"Coroa Sueca"},{codigo:"NOK",nome:"Coroa Norueguesa"},{codigo:"DKK",nome:"Coroa Dinamarquesa"},{codigo:"PLN",nome:"Zloty Polonês"},{codigo:"CZK",nome:"Coroa Tcheca"},{codigo:"HUF",nome:"Forint Húngaro"},{codigo:"RON",nome:"Leu Romeno"},{codigo:"BGN",nome:"Lev Búlgaro"},{codigo:"HRK",nome:"Kuna Croata"},{codigo:"RUB",nome:"Rublo Russo"},{codigo:"TRY",nome:"Lira Turca"},{codigo:"ILS",nome:"Shekel Israelense"},{codigo:"ZAR",nome:"Rand Sul-Africano"},{codigo:"INR",nome:"Rupia Indiana"},{codigo:"KRW",nome:"Won Sul-Coreano"},{codigo:"SGD",nome:"Dólar de Singapura"},{codigo:"HKD",nome:"Dólar de Hong Kong"},{codigo:"THB",nome:"Baht Tailandês"},{codigo:"MYR",nome:"Ringgit Malaio"},{codigo:"IDR",nome:"Rupia Indonésia"},{codigo:"PHP",nome:"Peso Filipino"},{codigo:"VND",nome:"Dong Vietnamita"},{codigo:"BDT",nome:"Taka de Bangladesh"},{codigo:"PKR",nome:"Rupia Paquistanesa"},{codigo:"LKR",nome:"Rupia do Sri Lanka"},{codigo:"NPR",nome:"Rupia Nepalesa"},{codigo:"MVR",nome:"Rufiyaa das Maldivas"},{codigo:"BTN",nome:"Ngultrum do Butão"},{codigo:"AFN",nome:"Afghani Afegão"},{codigo:"IRR",nome:"Rial Iraniano"},{codigo:"IQD",nome:"Dinar Iraquiano"},{codigo:"JOD",nome:"Dinar Jordaniano"},{codigo:"KWD",nome:"Dinar Kuwaitiano"},{codigo:"LBP",nome:"Libra Libanesa"},{codigo:"SAR",nome:"Riyal Saudita"},{codigo:"AED",nome:"Dirham dos Emirados"},{codigo:"QAR",nome:"Riyal do Catar"},{codigo:"OMR",nome:"Rial de Omã"},{codigo:"BHD",nome:"Dinar do Bahrein"},{codigo:"YER",nome:"Rial Iemenita"},{codigo:"SYP",nome:"Libra Síria"},{codigo:"EGP",nome:"Libra Egípcia"},{codigo:"LYD",nome:"Dinar Líbio"},{codigo:"TND",nome:"Dinar Tunisiano"},{codigo:"DZD",nome:"Dinar Argelino"},{codigo:"MAD",nome:"Dirham Marroquino"},{codigo:"NGN",nome:"Naira Nigeriana"},{codigo:"GHS",nome:"Cedi Ganês"},{codigo:"KES",nome:"Xelim Queniano"},{codigo:"UGX",nome:"Xelim Ugandense"},{codigo:"TZS",nome:"Xelim Tanzaniano"},{codigo:"ETB",nome:"Birr Etíope"},{codigo:"RWF",nome:"Franco Ruandês"},{codigo:"MXN",nome:"Peso Mexicano"},{codigo:"GTQ",nome:"Quetzal Guatemalteco"},{codigo:"HNL",nome:"Lempira Hondurenha"},{codigo:"NIO",nome:"Córdoba Nicaraguense"},{codigo:"CRC",nome:"Colón Costa-riquenho"},{codigo:"PAB",nome:"Balboa Panamenha"},{codigo:"COP",nome:"Peso Colombiano"},{codigo:"VES",nome:"Bolívar Venezuelano"},{codigo:"GYD",nome:"Dólar Guianense"},{codigo:"SRD",nome:"Dólar Surinamês"},{codigo:"PEN",nome:"Sol Peruano"},{codigo:"BOB",nome:"Boliviano"},{codigo:"PYG",nome:"Guarani Paraguaio"},{codigo:"UYU",nome:"Peso Uruguaio"},{codigo:"ARS",nome:"Peso Argentino"},{codigo:"CLP",nome:"Peso Chileno"},{codigo:"BRL",nome:"Real Brasileiro"}],le=!o||o.maxPlatforms>=se.length?se:se.slice(0,o.maxPlatforms),ce=!o||o.maxCurrencies>=oe.length?oe:oe.slice(0,o.maxCurrencies),ue=!o||o.maxGateways>=ie.length?ie:ie.slice(0,o.maxGateways),he=e=>({USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[e]||e);e.useEffect(()=>{},[]);const me=async()=>{if(te(!0),!N||!I)return H(null),void te(!1);if(o.maxCalculationsPerMonth&&re>=o.maxCalculationsPerMonth)return alert(`Limite de ${o.maxCalculationsPerMonth} cálculos por mês atingido! Faça upgrade para continuar calculando.`),void te(!1);Z(!0);try{const e=parseFloat(N),t=parseFloat(I),r=parseFloat(T),n=parseFloat(k)||0,s=parseFloat(S)||0,i=((e,t)=>{if(e===t)return 1;const r={BRL:5.2,EUR:.92,GBP:.8,JPY:150,CNY:7.3,CAD:1.35,AUD:1.55,CHF:.9,SEK:10.5,NOK:10.8,MXN:18.5,ARS:365,CLP:900,COP:4100,PEN:3.75,INR:83.5,KRW:1320,THB:36,SGD:1.35,HKD:7.8};return"USD"===e?r[t]||1:"USD"===t?1/(r[e]||1):1/(r[e]||1)*(r[t]||1)})(F,B),a=se.find(e=>e.id===O),o=ie.find(e=>e.id===M),l=a?.taxa||2.9,c=o?.taxa||3.4,u=e*i,h=u*t,d=u+s*i+n*i,m=h*(c/100),p=h*(l/100),f=h*(r/100),g=m+p+f,y=h-d-g,x=d+g,b=[1,10,50,100,500,1e3].map(e=>({quantidade:e,lucro:y*e}));H({precoVenda:h,custoTotal:d,custoFornecedor:u,markup:t,taxaCambio:i,lucroLiquido:y,breakeven:x,taxas:{gateway:{percentual:c,valor:m},plataforma:{percentual:l,valor:p},marketing:{percentual:r,valor:f},extra:{percentual:0,valor:0},total:g},projecoes:b,percentuais:{custoMedio:d/h*100,marketing:r,margemContrib:y/h*100,breakeven:x/h*100}});const v=re+1;ne(v),localStorage.setItem("calculations-used-this-month",v.toString())}catch(e){console.error("Erro no cálculo:",e),H(null)}finally{Z(!1),te(!1)}};e.useEffect(()=>{o&&(ce.length>0&&!ce.map(e=>e.codigo).includes(F)&&V(ce[0].codigo||"USD"),ce.length>0&&!ce.map(e=>e.codigo).includes(B)&&$(ce[0].codigo||"USD"),le.length>0&&!le.map(e=>e.id).includes(O)&&L(le[0].id||"shopify"),ue.length>0&&!ue.map(e=>e.id).includes(M)&&U(ue[0].id||"stripe"))},[t,o,F,B,O,M]),e.useEffect(()=>{if(!l){const e=setTimeout(()=>{me()},500);return()=>clearTimeout(e)}null!==q&&H(null)},[N,S,T,k,I,O,M,F,B,l]);const pe=async()=>{try{console.log("🚪 Iniciando logout..."),localStorage.clear(),await f(),console.log("✅ Logout concluído, redirecionando..."),window.location.href="/welcome"}catch(e){console.error("❌ Erro no logout:",e),localStorage.clear(),window.location.href="/welcome"}};return ae.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900",children:[ae.jsx("header",{className:"bg-white/20 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10",children:ae.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:ae.jsxs("div",{className:"flex justify-between items-center h-16",children:[ae.jsxs("div",{className:"flex items-center",children:[ae.jsx(h,{className:"h-8 w-8 text-purple-400 mr-3"}),ae.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"DropCalc"})]}),ae.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[ae.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:[m("calc.welcome"),", ",p?.name||"Usuário","!",!1]}),t&&ae.jsxs("span",{className:"px-2 py-1 text-xs font-bold rounded-full flex items-center "+(a?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":i?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[ae.jsx(A,{className:"w-3 h-3 mr-1"}),t.toUpperCase()]}),ae.jsx("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano, navegando para /payment"),c("/payment")},className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors",children:t?"Alterar Plano":"Escolher Plano"}),y&&ae.jsx("button",{onClick:()=>c("/users"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",title:"Ver Usuários (Admin)",children:ae.jsx(R,{className:"w-5 h-5"})}),ae.jsx("button",{onClick:()=>c("/settings"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:ae.jsx(P,{className:"w-5 h-5"})}),ae.jsx("button",{onClick:pe,className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors",children:m("nav.logout")})]}),ae.jsx("button",{onClick:()=>Q(!G),className:"md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:G?ae.jsx(W,{className:"w-6 h-6"}):ae.jsx(K,{className:"w-6 h-6"})})]})})}),ae.jsx(z,{children:G&&ae.jsx(u.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-black/30 backdrop-blur-sm border-b border-white/10",children:ae.jsxs("div",{className:"px-4 py-4 space-y-2",children:[ae.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:[m("calc.welcome"),", ",p?.name||m("calc.user"),"!"]}),t&&ae.jsxs("div",{className:"inline-flex px-2 py-1 text-xs font-bold rounded-full items-center mb-2 "+(a?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":i?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[ae.jsx(A,{className:"w-3 h-3 mr-1"}),t.toUpperCase()]}),ae.jsxs("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano (mobile), navegando para /payment"),c("/payment"),Q(!1)},className:"flex items-center w-full p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[ae.jsx(A,{className:"w-4 h-4 mr-2"}),t?"Alterar Plano":"Escolher Plano"]}),y&&ae.jsxs("button",{onClick:()=>{c("/users"),Q(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[ae.jsx(R,{className:"w-4 h-4 mr-2"}),"Ver Usuários (Admin)"]}),ae.jsxs("button",{onClick:()=>{c("/settings"),Q(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[ae.jsx(P,{className:"w-4 h-4 mr-2"}),m("nav.settings")]}),ae.jsxs("button",{onClick:pe,className:"flex items-center w-full p-2 text-red-400 hover:text-red-300 transition-colors",children:[ae.jsx(R,{className:"w-4 h-4 mr-2"}),m("nav.logout")]})]})})}),ae.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:ae.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[ae.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[ae.jsx(h,{className:"w-6 h-6 mr-2 text-purple-400"}),m("calc.title"),Y&&ae.jsx("span",{className:"ml-3 text-sm text-yellow-400 animate-pulse",children:m("calc.loading")})]}),null!==o.maxCalculationsPerMonth&&ae.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4",children:[ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"Cálculos restantes este mês:"}),ae.jsxs("span",{className:"font-bold "+((o.maxCalculationsPerMonth||10)-re<=2?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"),children:[(o.maxCalculationsPerMonth||10)-re," de ",o.maxCalculationsPerMonth||10]})]}),(o.maxCalculationsPerMonth||10)-re<=2&&ae.jsx("p",{className:"text-xs text-orange-600 dark:text-orange-400 mt-1",children:"Poucos cálculos restantes! Considere fazer upgrade para continuar usando."})]}),ae.jsxs("div",{className:"space-y-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.productName"),ae.jsx(If,{text:m("tooltip.productName"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"text",className:"w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500",placeholder:m("calc.productName"),value:x,onChange:e=>b(e.target.value)})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.productCost")," (",F,")",ae.jsx(If,{text:m("tooltip.productCost"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:N,onChange:e=>E(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 16.73",step:"0.01"})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.originCurrency"),ae.jsx(If,{text:m("tooltip.originCurrency"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:F,onChange:e=>V(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ce.map(e=>ae.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))}),!a&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[s?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.saleCurrency"),ae.jsx(If,{text:m("tooltip.saleCurrency"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:B,onChange:e=>$(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ce.map(e=>ae.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))}),!a&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[s?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.additionalCosts")," (",F,")",ae.jsx(If,{text:m("tooltip.additionalCosts"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:S,onChange:e=>C(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 5.00",step:"0.01"})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.profitMargin"),ae.jsx(If,{text:m("tooltip.profitMargin"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:I,onChange:e=>D(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 4.12",step:"0.01",min:"1"})]})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Marketing (%)",ae.jsx(If,{text:m("tooltip.marketing"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:T,onChange:e=>_(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 25",step:"0.1",min:"0",max:"100"})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Custo Extra (",F,")",ae.jsx(If,{text:m("tooltip.extraCost"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:k,onChange:e=>j(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 2.00",step:"0.01"})]})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.platform"),ae.jsx(If,{text:m("tooltip.platform"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:O,onChange:e=>L(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:le.map(e=>ae.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))}),!a&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[s?"Plano Básico: Apenas Shopify e Nuvem Shop":"Plano Gold: Plataformas limitadas"," - Upgrade para Premium para todas as plataformas"]})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[m("calc.paymentGateway"),ae.jsx(If,{text:m("tooltip.gateway"),children:ae.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:M,onChange:e=>U(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ue.map(e=>ae.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))}),!a&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[s?"Plano Básico: Apenas Stripe e PayPal":"Plano Gold: 4 gateways principais"," - Upgrade para Premium para todos os gateways"]})]})]}),l&&ae.jsx("div",{className:"mt-6",children:ae.jsxs("button",{onClick:me,disabled:ee||!N||!I,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center text-lg",children:[ae.jsx(h,{className:"h-5 w-5 mr-2"}),ee?"Calculando...":"Calcular Preço"]})}),ae.jsx("div",{className:"mt-4 p-4 rounded-lg "+(l?"bg-orange-50 dark:bg-orange-900/20":"bg-green-50 dark:bg-green-900/20"),children:ae.jsxs("p",{className:"text-sm flex items-center "+(l?"text-orange-600 dark:text-orange-400":"text-green-600 dark:text-green-400"),children:[ae.jsx(d,{className:"h-4 w-4 mr-2"}),l?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real"]})})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[ae.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[ae.jsx(d,{className:"w-6 h-6 mr-2 text-green-400"}),m("calc.calculationResult")]}),q?ae.jsxs("div",{className:"space-y-6",children:[ae.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4",children:ae.jsxs("div",{className:"text-center",children:[ae.jsx("p",{className:"text-green-100 text-sm",children:m("calc.suggestedPrice")}),ae.jsxs("p",{className:"text-3xl font-bold text-white",children:[he(B)," ",q.precoVenda.toFixed(2)]}),ae.jsxs("p",{className:"text-green-200 text-xs mt-1",children:[m("calc.exchangeRate"),": 1 ",F," = ",q.taxaCambio.toFixed(4)," ",B]})]})}),ae.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3",children:ae.jsxs("div",{className:"flex flex-wrap justify-center gap-4 text-sm",children:[ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Plataforma:"}),ae.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:se.find(e=>e.id===O)?.nome||O})]}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Gateway:"}),ae.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:ie.find(e=>e.id===M)?.nome||M})]})]})}),ae.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[ae.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[ae.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:m("calc.pricing")}),ae.jsxs("div",{className:"space-y-2 text-sm",children:[ae.jsxs("div",{className:"flex justify-between items-center bg-green-600 text-white px-2 py-1 rounded",children:[ae.jsxs("span",{className:"flex items-center",children:[m("calc.sellingPrice"),":",ae.jsx(If,{text:m("tooltip.resultSellingPrice"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{children:[he(B)," ",q.precoVenda.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center bg-red-500 text-white px-2 py-1 rounded",children:[ae.jsxs("span",{className:"flex items-center",children:[m("calc.supplierCost"),":",ae.jsx(If,{text:m("tooltip.resultSupplierCost"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{children:[he(B)," ",q.custoFornecedor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center bg-gray-500 text-white px-2 py-1 rounded",children:[ae.jsxs("span",{className:"flex items-center",children:[m("calc.markupLabel"),":",ae.jsx(If,{text:m("tooltip.resultMarkup"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsx("span",{children:q.markup.toFixed(8)})]})]}),ae.jsx("h4",{className:"text-white font-bold text-center bg-blue-600 text-sm py-2 mt-4 mb-2 rounded",children:m("calc.taxes")}),ae.jsxs("div",{className:"space-y-1 text-sm",children:[ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:ie.find(e=>e.id===M)?.nome||M}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[q.taxas.gateway.percentual.toFixed(2),"%"]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.taxas.gateway.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:se.find(e=>e.id===O)?.nome||O}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[q.taxas.plataforma.percentual.toFixed(2),"%"]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.taxas.plataforma.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:m("calc.marketing")}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[q.taxas.marketing.percentual,"%"]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.taxas.marketing.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:m("calc.extra")}),ae.jsx("span",{className:"text-gray-900 dark:text-white",children:"0%"}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.taxas.extra.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-center bg-green-600 text-white px-2 py-1 rounded font-bold",children:[he(B)," ",q.taxas.total.toFixed(2)]})]})]}),ae.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[ae.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:m("calc.importantValues")}),ae.jsxs("div",{className:"space-y-2 text-sm",children:[ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[m("calc.saleValue"),ae.jsx(If,{text:m("tooltip.resultSaleValue"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.precoVenda.toFixed(2)]}),ae.jsx("span",{className:"text-green-600 dark:text-green-400",children:"100,00%"})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[m("calc.averageCost"),ae.jsx(If,{text:m("tooltip.resultAverageCost"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.custoTotal.toFixed(2)]}),ae.jsxs("span",{className:"text-red-400",children:[q.percentuais.custoMedio.toFixed(2),"%"]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[m("calc.marketing"),ae.jsx(If,{text:m("tooltip.resultMarketing"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.taxas.marketing.valor.toFixed(2)]}),ae.jsxs("span",{className:"text-yellow-400",children:[q.percentuais.marketing.toFixed(2),"%"]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[m("calc.contributionMargin"),ae.jsx(If,{text:m("tooltip.resultContributionMargin"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.lucroLiquido.toFixed(2)]}),ae.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[q.percentuais.margemContrib.toFixed(2),"%"]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[m("calc.breakeven"),ae.jsx(If,{text:m("tooltip.resultBreakeven"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[he(B)," ",q.breakeven.toFixed(2)]}),ae.jsxs("span",{className:"text-orange-400",children:[q.percentuais.breakeven.toFixed(2),"%"]})]})]}),ae.jsx("h4",{className:"text-white font-bold text-center bg-green-600 text-sm py-2 mt-4 mb-2 rounded",children:m("calc.sales")}),ae.jsxs("div",{className:"flex justify-between text-sm font-bold text-green-600 dark:text-green-400 mb-2",children:[ae.jsxs("span",{className:"flex items-center",children:[m("calc.units"),":",ae.jsx(If,{text:m("tooltip.resultUnits"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"flex items-center",children:[m("calc.profitLabel"),ae.jsx(If,{text:m("tooltip.resultProfit"),children:ae.jsx(J,{className:"w-3 h-3 ml-1"})})]})]}),ae.jsx("div",{className:"space-y-1 text-sm",children:q.projecoes.map((e,t)=>ae.jsxs("div",{className:"flex justify-between items-center bg-green-100/10 px-2 py-1 rounded",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[m("calc.units"),":"]}),ae.jsx("span",{className:"text-gray-900 dark:text-white font-bold",children:e.quantidade}),ae.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[he(B)," ",e.lucro.toFixed(2)]})]},t))})]})]}),o?.hasHistory&&ae.jsx("div",{className:"text-center",children:ae.jsxs("button",{onClick:()=>{if(!q)return;if(!o?.hasHistory)return void alert("Histórico disponível apenas no plano Premium. Faça upgrade para salvar seus cálculos!");const e=[{id:Date.now().toString(),nomeProduto:x||"Produto sem nome",precoVenda:q.precoVenda,moedaDestino:B,plataforma:O,gateway:M,dataCalculo:(new Date).toLocaleString("pt-BR"),detalhes:q},...v].slice(0,50);w(e),localStorage.setItem("calculadora-historico",JSON.stringify(e)),alert(m("calc.calculationSaved"))},className:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto",children:[ae.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:ae.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),m("calc.saveCalculation")]})}),!o?.hasHistory&&ae.jsxs("div",{className:"text-center bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4",children:[ae.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm mb-2",children:"💾 Histórico de cálculos disponível apenas no plano Premium"}),ae.jsx("button",{onClick:()=>c("/payment"),className:"bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm",children:"Fazer Upgrade Premium"})]})]}):Y?ae.jsxs("div",{className:"text-center py-12",children:[ae.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"}),ae.jsx("p",{className:"text-purple-400 font-medium",children:m("calc.loading")})]}):N&&I?ae.jsxs("div",{className:"text-center py-12",children:[ae.jsx(X,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:m("calc.enterValuesMessage")})]}):ae.jsxs("div",{className:"text-center py-12",children:[ae.jsx(X,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:m("calc.fillFieldsMessage")})]})]})]})})]})},Pf=()=>{const[t,r]=e.useState([]),[s,i]=e.useState(!0),[a,o]=e.useState(null),l=n();e.useEffect(()=>{c()},[]);const c=async()=>{try{const e=localStorage.getItem("token");if(!e)throw new Error("Token não encontrado");const t=Hd.users.list;console.log("🔍 Buscando usuários em:",t);const n=await fetch(t,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}});if(!n.ok)throw new Error(`Erro: ${n.status}`);const s=await n.json();r(s)}catch(e){o(e instanceof Error?e.message:"Erro desconhecido"),console.error("Erro ao buscar usuários:",e)}finally{i(!1)}},u=e=>new Date(e).toLocaleString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return s?ae.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex items-center justify-center",children:ae.jsx("div",{className:"text-xl",children:"Carregando usuários..."})}):a?ae.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex items-center justify-center",children:ae.jsxs("div",{className:"bg-red-500/20 border border-red-500 rounded-lg p-6 max-w-md w-full mx-4",children:[ae.jsx("h2",{className:"text-xl font-bold mb-2",children:"Erro"}),ae.jsx("p",{className:"mb-4",children:a}),ae.jsx("button",{onClick:()=>l("/dashboard"),className:"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded",children:"Voltar ao Dashboard"})]})}):ae.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4",children:ae.jsxs("div",{className:"max-w-6xl mx-auto",children:[ae.jsxs("div",{className:"flex justify-between items-center mb-6",children:[ae.jsx("h1",{className:"text-3xl font-bold",children:"Usuários Cadastrados"}),ae.jsx("button",{onClick:()=>l("/dashboard"),className:"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded",children:"← Voltar"})]}),ae.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-lg p-6",children:[ae.jsx("div",{className:"mb-4",children:ae.jsxs("p",{className:"text-lg",children:["Total de usuários: ",ae.jsx("span",{className:"font-bold text-yellow-300",children:t.length})]})}),ae.jsx("div",{className:"overflow-x-auto",children:ae.jsxs("table",{className:"w-full text-left",children:[ae.jsx("thead",{children:ae.jsxs("tr",{className:"border-b border-white/20",children:[ae.jsx("th",{className:"pb-3 pr-4",children:"Nome"}),ae.jsx("th",{className:"pb-3 pr-4",children:"Email"}),ae.jsx("th",{className:"pb-3 pr-4",children:"Data de Cadastro"}),ae.jsx("th",{className:"pb-3",children:"Última Atualização"})]})}),ae.jsx("tbody",{children:t.map((e,t)=>ae.jsxs("tr",{className:t%2==0?"bg-white/5":"",children:[ae.jsxs("td",{className:"py-3 pr-4",children:[ae.jsx("div",{className:"font-medium",children:e.name}),ae.jsxs("div",{className:"text-sm text-gray-300",children:["ID: ",e.id]})]}),ae.jsx("td",{className:"py-3 pr-4",children:e.email}),ae.jsx("td",{className:"py-3 pr-4",children:u(e.createdAt)}),ae.jsx("td",{className:"py-3",children:u(e.updatedAt)})]},e.id))})]})}),0===t.length&&ae.jsx("div",{className:"text-center py-8",children:ae.jsx("p",{className:"text-xl text-gray-300",children:"Nenhum usuário encontrado"})})]}),ae.jsx("div",{className:"mt-6 bg-blue-500/20 border border-blue-500 rounded-lg p-4",children:ae.jsxs("p",{className:"text-sm",children:[ae.jsx("strong",{children:"Nota:"})," Esta é uma página administrativa para visualizar todos os usuários cadastrados no sistema. Total atual: ",t.length," usuário(s)."]})})]})})};class Rf extends r.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:ae.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center max-w-md",children:[ae.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ops! Algo deu errado"}),ae.jsx("p",{className:"text-gray-300 mb-6",children:"Ocorreu um erro inesperado. Tente recarregar a página."}),ae.jsx("button",{onClick:()=>window.location.reload(),className:"bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200",children:"Recarregar Página"}),this.state.error&&ae.jsxs("details",{className:"mt-4 text-left",children:[ae.jsx("summary",{className:"text-gray-400 cursor-pointer",children:"Detalhes técnicos"}),ae.jsx("pre",{className:"text-xs text-red-300 mt-2 overflow-auto",children:this.state.error.toString()})]})]})}):this.props.children}}const Df=()=>(console.log("=== AppHybrid carregando ==="),ae.jsx(mt,{children:ae.jsx(a,{children:ae.jsxs("div",{className:"App",children:[ae.jsxs(o,{children:[ae.jsx(l,{path:"/welcome",element:ae.jsx(Xd,{})}),ae.jsx(l,{path:"/test",element:ae.jsx(pt,{})}),ae.jsx(l,{path:"/debug",element:ae.jsx(kf,{})}),ae.jsx(l,{path:"/login",element:ae.jsx(Qd,{})}),ae.jsx(l,{path:"/login-simple",element:ae.jsx(Yd,{})}),ae.jsx(l,{path:"/login-alt",element:ae.jsx(Zd,{})}),ae.jsx(l,{path:"/auth/callback",element:ae.jsx(em,{})}),ae.jsx(l,{path:"/forgot-password",element:ae.jsx(im,{})}),ae.jsx(l,{path:"/reset-password",element:ae.jsx(am,{})}),ae.jsx(l,{path:"/signup",element:ae.jsx(Qd,{})}),ae.jsx(l,{path:"/payment",element:ae.jsx(Nf,{})}),ae.jsx(l,{path:"/payment-success",element:ae.jsx(Jd,{})}),ae.jsx(l,{path:"/plans",element:ae.jsx(Sf,{})}),ae.jsx(l,{path:"/dashboard",element:ae.jsx(Rf,{children:ae.jsx(Af,{})})}),ae.jsx(l,{path:"/settings",element:ae.jsx(Tf,{})}),ae.jsx(l,{path:"/help",element:ae.jsx(_f,{})}),ae.jsx(l,{path:"/users",element:ae.jsx(Pf,{})}),ae.jsx(l,{path:"/",element:ae.jsx(c,{to:"/welcome",replace:!0})}),ae.jsx(l,{path:"*",element:ae.jsx(c,{to:"/welcome",replace:!0})})]}),ae.jsx(ut,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})}));let Of;async function Lf(){if(Of){Of.prompt();const{outcome:e}=await Of.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}Of=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Of=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",Lf),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const Mf=document.createElement("style");Mf.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(Mf),console.log("=== main.tsx carregando AppHybrid com sistema de idiomas ===");oe.createRoot(document.getElementById("root")).render(ae.jsx(he,{children:ae.jsx(Df,{})}));
