import{r as e,b as t,a as n}from"./vendor-5fcaeebf-1763218910686.js";import{u as r,L as s,a as i,B as o,R as a,b as l,N as c}from"./router-fdefd287-1763218910686.js";import{m as u,C as h,T as d,Z as p,A as m,U as f,M as g,L as y,E as v,a as b,b as x,c as w,d as E,S as N,e as S,f as C,g as T,G as _,h as I,i as j,j as A,k,l as R,n as P,o as D,p as O,B as L,q as M,r as U,s as F,H as V,t as B,u as $,P as H,v as z,w as G,X as q,x as K,D as W}from"./ui-289b7e8e-1763218910686.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var J={exports:{}},X={},Q=e,Y=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,te=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ne={key:!0,ref:!0,__self:!0,__source:!0};function re(e,t,n){var r,s={},i=null,o=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)ee.call(t,r)&&!ne.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:Y,type:e,key:i,ref:o,props:s,_owner:te.current}}X.Fragment=Z,X.jsx=re,X.jsxs=re,J.exports=X;var se=J.exports,ie={},oe=t;ie.createRoot=oe.createRoot,ie.hydrateRoot=oe.hydrateRoot;const ae={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},le=e.createContext(void 0),ce=({children:t})=>{const[n,r]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&r(e)},[]);const s={language:n,setLanguage:e=>{r(e),localStorage.setItem("language",e)},t:e=>ae[n][e]||e};return se.jsx(le.Provider,{value:s,children:t})},ue=()=>{const t=e.useContext(le);if(!t)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return t};let he,de,pe,me={data:""},fe=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||me},ge=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ye=/\/\*[^]*?\*\/|  +/g,ve=/\n+/g,be=(e,t)=>{let n="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+o+";":r+="f"==i[1]?be(o,i):i+"{"+be(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=be(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=be.p?be.p(i,o):i+":"+o+";")}return n+(t&&s?t+"{"+s+"}":s)+r},xe={},we=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+we(e[n]);return t}return e},Ee=(e,t,n,r,s)=>{let i=we(e),o=xe[i]||(xe[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!xe[o]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=ge.exec(e.replace(ye,""));)t[4]?r.shift():t[3]?(n=t[3].replace(ve," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(ve," ").trim();return r[0]})(e);xe[o]=be(s?{["@keyframes "+o]:t}:t,n?"":"."+o)}let a=n&&xe.g?xe.g:null;return n&&(xe.g=xe[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(xe[o],t,r,a),o};function Ne(e){let t=this||{},n=e.call?e(t.p):e;return Ee(n.unshift?n.raw?((e,t,n)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":be(e,""):!1===e?"":e}return e+r+(null==i?"":i)},""))(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,fe(t.target),t.g,t.o,t.k)}Ne.bind({g:1});let Se=Ne.bind({k:1});function Ce(e,t){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:de&&de()},a),n.o=/ *go\d+/.test(l),a.className=Ne.apply(n,r)+(l?" "+l:""),t&&(a.ref=o);let c=e;return e[0]&&(c=a.as||e,delete a.as),pe&&c[0]&&pe(a),he(c,a)}return t?t(s):s}}var Te=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,_e=(()=>{let e=0;return()=>(++e).toString()})(),Ie=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),je="default",Ae=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return Ae(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},ke=[],Re={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},Pe={},De=(e,t=je)=>{Pe[t]=Ae(Pe[t]||Re,e),ke.forEach(([e,n])=>{e===t&&n(Pe[t])})},Oe=e=>Object.keys(Pe).forEach(t=>De(e,t)),Le=(e=je)=>t=>{De(t,e)},Me={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ue=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||_e()}))(t,e,n);return Le(r.toasterId||(e=>Object.keys(Pe).find(t=>Pe[t].toasts.some(t=>t.id===e)))(r.id))({type:2,toast:r}),r.id},Fe=(e,t)=>Ue("blank")(e,t);Fe.error=Ue("error"),Fe.success=Ue("success"),Fe.loading=Ue("loading"),Fe.custom=Ue("custom"),Fe.dismiss=(e,t)=>{let n={type:3,toastId:e};t?Le(t)(n):Oe(n)},Fe.dismissAll=e=>Fe.dismiss(void 0,e),Fe.remove=(e,t)=>{let n={type:4,toastId:e};t?Le(t)(n):Oe(n)},Fe.removeAll=e=>Fe.remove(void 0,e),Fe.promise=(e,t,n)=>{let r=Fe.loading(t.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?Te(t.success,e):void 0;return s?Fe.success(s,{id:r,...n,...null==n?void 0:n.success}):Fe.dismiss(r),e}).catch(e=>{let s=t.error?Te(t.error,e):void 0;s?Fe.error(s,{id:r,...n,...null==n?void 0:n.error}):Fe.dismiss(r)}),e};var Ve=(t,n="default")=>{let{toasts:r,pausedAt:s}=((t={},n=je)=>{let[r,s]=e.useState(Pe[n]||Re),i=e.useRef(Pe[n]);e.useEffect(()=>(i.current!==Pe[n]&&s(Pe[n]),ke.push([n,s]),()=>{let e=ke.findIndex(([e])=>e===n);e>-1&&ke.splice(e,1)}),[n]);let o=r.toasts.map(e=>{var n,r,s;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(n=t[e.type])?void 0:n.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(r=t[e.type])?void 0:r.duration)||(null==t?void 0:t.duration)||Me[e.type],style:{...t.style,...null==(s=t[e.type])?void 0:s.style,...e.style}}});return{...r,toasts:o}})(t,n),i=e.useRef(new Map).current,o=e.useCallback((e,t=1e3)=>{if(i.has(e))return;let n=setTimeout(()=>{i.delete(e),a({type:4,toastId:e})},t);i.set(e,n)},[]);e.useEffect(()=>{if(s)return;let e=Date.now(),t=r.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout(()=>Fe.dismiss(t.id,n),r);t.visible&&Fe.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[r,s,n]);let a=e.useCallback(Le(n),[n]),l=e.useCallback(()=>{a({type:5,time:Date.now()})},[a]),c=e.useCallback((e,t)=>{a({type:1,toast:{id:e,height:t}})},[a]),u=e.useCallback(()=>{s&&a({type:6,time:Date.now()})},[s,a]),h=e.useCallback((e,t)=>{let{reverseOrder:n=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),a=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<a&&e.visible).length;return o.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return e.useEffect(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:h}}},Be=Se`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$e=Se`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,He=Se`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ze=Ce("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$e} 0.15s ease-out forwards;
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
`,Ge=Se`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,qe=Ce("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ge} 1s linear infinite;
`,Ke=Se`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,We=Se`
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
}`,Je=Ce("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ke} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${We} 0.2s ease-out forwards;
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
`,Xe=Ce("div")`
  position: absolute;
`,Qe=Ce("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ye=Se`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ze=Ce("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:t})=>{let{icon:n,type:r,iconTheme:s}=t;return void 0!==n?"string"==typeof n?e.createElement(Ze,null,n):n:"blank"===r?null:e.createElement(Qe,null,e.createElement(qe,{...s}),"loading"!==r&&e.createElement(Xe,null,"error"===r?e.createElement(ze,{...s}):e.createElement(Je,{...s})))},tt=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,nt=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,rt=Ce("div")`
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
`,st=Ce("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,it=e.memo(({toast:t,position:n,style:r,children:s})=>{let i=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,s]=Ie()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[tt(n),nt(n)];return{animation:t?`${Se(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Se(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||n||"top-center",t.visible):{opacity:0},o=e.createElement(et,{toast:t}),a=e.createElement(st,{...t.ariaProps},Te(t.message,t));return e.createElement(rt,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof s?s({icon:o,message:a}):e.createElement(e.Fragment,null,o,a))});!function(e,t,n,r){be.p=t,he=e,de=n,pe=r}(e.createElement);var ot=({id:t,className:n,style:r,onHeightUpdate:s,children:i})=>{let o=e.useCallback(e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;s(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return e.createElement("div",{ref:o,className:n,style:r},i)},at=Ne`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,lt=({reverseOrder:t,position:n="top-center",toastOptions:r,gutter:s,children:i,toasterId:o,containerStyle:a,containerClassName:l})=>{let{toasts:c,handlers:u}=Ve(r,o);return e.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(r=>{let o=r.position||n,a=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ie()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...s}})(o,u.calculateOffset(r,{reverseOrder:t,gutter:s,defaultPosition:n}));return e.createElement(ot,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?at:"",style:a},"custom"===r.type?Te(r.message,r):i?i(r):e.createElement(it,{toast:r,position:o}))}))},ct=Fe;const ut=e.createContext(void 0);function ht({children:t}){const[n,r]=e.useState(()=>localStorage.getItem("theme")||"dark");e.useEffect(()=>{const e=window.document.documentElement;"dark"===n?e.classList.add("dark"):e.classList.remove("dark")},[n]);const s=e=>{r(e),localStorage.setItem("theme",e)};return se.jsx(ut.Provider,{value:{theme:n,setTheme:s,toggleTheme:()=>{s("light"===n?"dark":"light")}},children:t})}const dt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},pt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==i||null==o||null==a)throw new mt;const l=t<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class mt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ft=function(e){return function(e){const t=dt(e);return pt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},gt=function(e){try{return pt.decodeString(e,!0)}catch(me){console.error("base64Decode failed: ",me)}return null};
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
const yt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,vt=()=>{try{return yt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(me){return}const t=e&&gt(e[1]);return t&&JSON.parse(t)})()}catch(me){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${me}`)}},bt=e=>vt()?.emulatorHosts?.[e],xt=()=>vt()?.config,wt=e=>vt()?.[`_${e}`];
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
class Et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function Nt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function St(e){return(await fetch(e,{credentials:"include"})).ok}
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
 */const Ct={};let Tt=!1;function _t(e,t){if("undefined"==typeof window||"undefined"==typeof document||!Nt(window.location.host)||Ct[e]===t||Ct[e]||Tt)return;function n(e){return`__firebase__banner__${e}`}Ct[e]=t;const r="__firebase__banner",s=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ct))Ct[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function i(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{Tt=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),o=document.getElementById(t)||document.createElement("span"),a=n("learnmore"),l=document.getElementById(a)||document.createElement("a"),c=n("preprendIcon"),u=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,a);const n=i();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,c),t.append(u,o,l,n),document.body.appendChild(t)}s?(o.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function It(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function jt(){return!function(){const e=vt()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(me){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class At extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(Rt,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new At(r,o,n)}}const Rt=/\{\$([^}]+)}/g;function Pt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(Dt(n)&&Dt(i)){if(!Pt(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dt(e){return null!==e&&"object"==typeof e}
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
 */function Ot(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Lt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Mt),void 0===r.error&&(r.error=Mt),void 0===r.complete&&(r.complete=Mt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(me){}}),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(me){"undefined"!=typeof console&&console.error&&console.error(me)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mt(){}
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
 */function Ut(e){return e&&e._delegate?e._delegate:e}class Ft{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Vt="[DEFAULT]";
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
 */class Bt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Et;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(me){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(me){if(n)return null;throw me}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch(me){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(me){}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Vt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class $t{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Ht;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ht||(Ht={}));const zt={debug:Ht.DEBUG,verbose:Ht.VERBOSE,info:Ht.INFO,warn:Ht.WARN,error:Ht.ERROR,silent:Ht.SILENT},Gt=Ht.INFO,qt={[Ht.DEBUG]:"log",[Ht.VERBOSE]:"log",[Ht.INFO]:"info",[Ht.WARN]:"warn",[Ht.ERROR]:"error"},Kt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=qt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class Wt{constructor(e){this.name=e,this._logLevel=Gt,this._logHandler=Kt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ht))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?zt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ht.DEBUG,...e),this._logHandler(this,Ht.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ht.VERBOSE,...e),this._logHandler(this,Ht.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ht.INFO,...e),this._logHandler(this,Ht.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ht.WARN,...e),this._logHandler(this,Ht.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ht.ERROR,...e),this._logHandler(this,Ht.ERROR,...e)}}let Jt,Xt;const Qt=new WeakMap,Yt=new WeakMap,Zt=new WeakMap,en=new WeakMap,tn=new WeakMap;let nn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Yt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Zt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(an(this),t),on(Qt.get(this))}:function(...t){return on(e.apply(an(this),t))}:function(t,...n){const r=e.call(an(this),t,...n);return Zt.set(r,t.sort?t.sort():[t]),on(r)}}function sn(e){return"function"==typeof e?rn(e):(e instanceof IDBTransaction&&function(e){if(Yt.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});Yt.set(e,t)}(e),t=e,(Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,nn):e);var t}function on(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(on(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Qt.set(t,e)}).catch(()=>{}),tn.set(t,e),t}(e);if(en.has(e))return en.get(e);const t=sn(e);return t!==e&&(en.set(e,t),tn.set(t,e)),t}const an=e=>tn.get(e);const ln=["get","getKey","getAll","getAllKeys","count"],cn=["put","add","delete","clear"],un=new Map;function hn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(un.get(t))return un.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=cn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!ln.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return un.set(t,i),i}nn=(e=>({...e,get:(t,n,r)=>hn(t,n)||e.get(t,n,r),has:(t,n)=>!!hn(t,n)||e.has(t,n)}))(nn);
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
class dn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const pn="@firebase/app",mn="0.14.5",fn=new Wt("@firebase/app"),gn="@firebase/app-compat",yn="@firebase/analytics-compat",vn="@firebase/analytics",bn="@firebase/app-check-compat",xn="@firebase/app-check",wn="@firebase/auth",En="@firebase/auth-compat",Nn="@firebase/database",Sn="@firebase/data-connect",Cn="@firebase/database-compat",Tn="@firebase/functions",_n="@firebase/functions-compat",In="@firebase/installations",jn="@firebase/installations-compat",An="@firebase/messaging",kn="@firebase/messaging-compat",Rn="@firebase/performance",Pn="@firebase/performance-compat",Dn="@firebase/remote-config",On="@firebase/remote-config-compat",Ln="@firebase/storage",Mn="@firebase/storage-compat",Un="@firebase/firestore",Fn="@firebase/ai",Vn="@firebase/firestore-compat",Bn="firebase",$n="[DEFAULT]",Hn={[pn]:"fire-core",[gn]:"fire-core-compat",[vn]:"fire-analytics",[yn]:"fire-analytics-compat",[xn]:"fire-app-check",[bn]:"fire-app-check-compat",[wn]:"fire-auth",[En]:"fire-auth-compat",[Nn]:"fire-rtdb",[Sn]:"fire-data-connect",[Cn]:"fire-rtdb-compat",[Tn]:"fire-fn",[_n]:"fire-fn-compat",[In]:"fire-iid",[jn]:"fire-iid-compat",[An]:"fire-fcm",[kn]:"fire-fcm-compat",[Rn]:"fire-perf",[Pn]:"fire-perf-compat",[Dn]:"fire-rc",[On]:"fire-rc-compat",[Ln]:"fire-gcs",[Mn]:"fire-gcs-compat",[Un]:"fire-fst",[Vn]:"fire-fst-compat",[Fn]:"fire-vertex","fire-js":"fire-js",[Bn]:"fire-js-all"},zn=new Map,Gn=new Map,qn=new Map;function Kn(e,t){try{e.container.addComponent(t)}catch(me){fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,me)}}function Wn(e){const t=e.name;if(qn.has(t))return fn.debug(`There were multiple attempts to register component ${t}.`),!1;qn.set(t,e);for(const n of zn.values())Kn(n,e);for(const n of Gn.values())Kn(n,e);return!0}function Jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Xn(e){return null!=e&&void 0!==e.settings}
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
 */const Qn=new kt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Yn{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}
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
 */const Zn="12.5.0";function er(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:$n,automaticDataCollectionEnabled:!0,...t},s=r.name;if("string"!=typeof s||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=xt()),!n)throw Qn.create("no-options");const i=zn.get(s);if(i){if(Pt(n,i.options)&&Pt(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const o=new $t(s);for(const l of qn.values())o.addComponent(l);const a=new Yn(n,r,o);return zn.set(s,a),a}function tr(e=$n){const t=zn.get(e);if(!t&&e===$n&&xt())return er();if(!t)throw Qn.create("no-app",{appName:e});return t}function nr(e,t,n){let r=Hn[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void fn.warn(e.join(" "))}Wn(new Ft(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
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
 */const rr="firebase-heartbeat-store";let sr=null;function ir(){return sr||(sr=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=on(o);return r&&o.addEventListener("upgradeneeded",e=>{r(on(o.result),e.oldVersion,e.newVersion,on(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(rr)}catch(me){console.warn(me)}}}).catch(e=>{throw Qn.create("idb-open",{originalErrorMessage:e.message})})),sr}async function or(e,t){try{const n=(await ir()).transaction(rr,"readwrite"),r=n.objectStore(rr);await r.put(t,ar(e)),await n.done}catch(me){if(me instanceof At)fn.warn(me.message);else{const t=Qn.create("idb-set",{originalErrorMessage:me?.message});fn.warn(t.message)}}}function ar(e){return`${e.name}!${e.options.appId}`}
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
 */class lr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ur(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=cr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(me){fn.warn(me)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=cr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),hr(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=ft(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(me){return fn.warn(me),""}}}function cr(){return(new Date).toISOString().substring(0,10)}class ur{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(me){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ir()).transaction(rr),n=await t.objectStore(rr).get(ar(e));return await t.done,n}catch(me){if(me instanceof At)fn.warn(me.message);else{const t=Qn.create("idb-get",{originalErrorMessage:me?.message});fn.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function hr(e){return ft(JSON.stringify({version:2,heartbeats:e})).length}var dr;dr="",Wn(new Ft("platform-logger",e=>new dn(e),"PRIVATE")),Wn(new Ft("heartbeat",e=>new lr(e),"PRIVATE")),nr(pn,mn,dr),nr(pn,mn,"esm2020"),nr("fire-js","");var pr,mr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var s=0;s<16;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];let i,o=e.g[3];i=t+(o^n&(s^o))+r[0]+3614090360&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[1]+3905402710&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[2]+606105819&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[3]+3250441966&4294967295,i=t+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[4]+4118548399&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[5]+1200080426&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[6]+2821735955&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[7]+4249261313&4294967295,i=t+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[8]+1770035416&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[9]+2336552879&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[10]+4294925233&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[11]+2304563134&4294967295,i=t+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[12]+1804603682&4294967295,i=o+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[13]+4254626195&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[14]+2792965006&4294967295,i=n+(t^(s=o+(i<<17&4294967295|i>>>15))&(o^t))+r[15]+1236535329&4294967295,i=t+(s^o&((n=s+(i<<22&4294967295|i>>>10))^s))+r[1]+4129170786&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[6]+3225465664&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[11]+643717713&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[0]+3921069994&4294967295,i=t+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[5]+3593408605&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[10]+38016083&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[15]+3634488961&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[4]+3889429448&4294967295,i=t+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[9]+568446438&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[14]+3275163606&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[3]+4107603335&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[8]+1163531501&4294967295,i=t+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[13]+2850285829&4294967295,i=o+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[2]+4243563512&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[7]+1735328473&4294967295,i=n+(o^t&((s=o+(i<<14&4294967295|i>>>18))^o))+r[12]+2368359562&4294967295,i=t+((n=s+(i<<20&4294967295|i>>>12))^s^o)+r[5]+4294588738&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[8]+2272392833&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[11]+1839030562&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[14]+4259657740&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[1]+2763975236&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[4]+1272893353&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[7]+4139469664&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[10]+3200236656&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[13]+681279174&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[0]+3936430074&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[3]+3572445317&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[6]+76029189&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[9]+3654602809&4294967295,i=o+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[12]+3873151461&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[15]+530742520&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^t)+r[2]+3299628645&4294967295,i=t+(s^((n=s+(i<<23&4294967295|i>>>9))|~o))+r[0]+4096336452&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[7]+1126891415&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[14]+2878612391&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[5]+4237533241&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[12]+1700485571&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[3]+2399980690&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[10]+4293915773&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[1]+2240044497&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[8]+1873313359&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[15]+4264355552&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[6]+2734768916&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[13]+1309151649&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[4]+4149444226&4294967295,i=o+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[11]+3174756917&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[2]+718787259&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+o&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let s=e.length-1;s>=0;s--){const i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,s=this.C;let i=this.h,o=0;for(;o<t;){if(0==i)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(s[i++]=e.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<t;)if(s[i++]=e[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var s={};function i(e){return-128<=e&&e<128?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(e<0)return d(o(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var a=i(0),l=i(1),c=i(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function p(e,t){return e.add(d(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function f(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new f(a,a);if(h(e))return t=g(d(e),t),new f(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new f(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;r.l(e)<=0;)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=i.add(r);c.l(e)<=0&&(s=s.add(n),i=c),r=v(r,1),n=v(n,1)}return t=p(e,s.j(t)),new f(s,t)}for(s=a;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),c=(i=o(n)).j(t);h(c)||c.l(e)>0;)c=(i=o(n-=r)).j(t);u(i)&&(i=l),s=s.add(i),e=p(e,c)}return new f(s,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const s=e.g.length-n,i=[];for(let r=0;r<s;r++)i[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=o(Math.pow(e,6));var n=this;let r="";for(;;){const s=g(n,t).g;let i=(((n=p(n,s.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=s))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=p(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let s=0;for(let r=0;r<=t;r++){let t=s+(65535&this.i(r))+(65535&e.i(r)),i=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);s=i>>>16,t&=65535,i&=65535,n[r]=i<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(c)<0&&e.l(c)<0)return o(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let t=0;t<e.g.length;t++){const r=this.i(s)>>>16,i=65535&this.i(s),o=e.i(t)>>>16,a=65535&e.i(t);n[2*s+2*t]+=i*a,m(n,2*s+2*t),n[2*s+2*t+1]+=r*a,m(n,2*s+2*t+1),n[2*s+2*t+1]+=i*o,m(n,2*s+2*t+1),n[2*s+2*t+2]+=r*o,m(n,2*s+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let s=a;for(let a=0;a<t.length;a+=8){var i=Math.min(8,t.length-a);const e=parseInt(t.substring(a,a+i),n);i<8?(i=o(Math.pow(n,i)),s=s.j(i).add(o(e))):(s=s.j(r),s=s.add(o(e)))}return s},pr=r}).apply(void 0!==mr?mr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var fr,gr,yr,vr,br,xr,wr,Er,Nr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Nr&&Nr];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in s))break e;s=s[o]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},i=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=a).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function p(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if("array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function m(e){i.setTimeout(()=>{throw e},0)}function f(){var e=x;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,b=!1,x=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},w=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(E)}};function E(){for(var e;e=f();){try{e.h.call(e.g)}catch(xe){m(xe)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}b=!1}function N(){this.u=this.u,this.C=this.C}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(xe){}return e}();function T(e){return/^[\s\xa0]*$/.test(e)}function _(e,t){S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(_,S),_.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&_.Z.h.call(this)},_.prototype.h=function(){_.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var I="closure_listenable_"+(1e6*Math.random()|0),j=0;function A(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++j,this.da=this.fa=!1}function k(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function R(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<D.length;t++)n=D[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function L(e){this.src=e,this.g={},this.h=0}function M(e,t){const n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(k(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function U(e,t,n,r){for(let s=0;s<e.length;++s){const i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}L.prototype.add=function(e,t,n,r,s){const i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);const o=U(e,t,r,s);return o>-1?(t=e[o],n||(t.fa=!1)):((t=new A(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var F="closure_lm_"+(1e6*Math.random()|0),V={};function B(e,t,n,r,s){if(r&&r.once)return H(e,t,n,r,s);if(Array.isArray(t)){for(let i=0;i<t.length;i++)B(e,t[i],n,r,s);return null}return n=X(n),e&&e[I]?e.J(t,n,o(r)?!!r.capture:!!r,s):$(e,t,n,!1,r,s)}function $(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");const a=o(s)?!!s.capture:!!s;let l=W(e);if(l||(e[F]=l=new L(e)),(n=l.add(t,n,r,a,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=K;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)C||(s=a),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function H(e,t,n,r,s){if(Array.isArray(t)){for(let i=0;i<t.length;i++)H(e,t[i],n,r,s);return null}return n=X(n),e&&e[I]?e.K(t,n,o(r)?!!r.capture:!!r,s):$(e,t,n,!0,r,s)}function z(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)z(e,t[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=X(n),e&&e[I]?(e=e.i,(i=String(t).toString())in e.g&&((n=U(t=e.g[i],n,r,s))>-1&&(k(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[i],e.h--)))):e&&(e=W(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,n,r,s)),(n=e>-1?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[I])M(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=W(t))?(M(n,e),0==n.h&&(n.src=null,t[F]=null)):k(e)}}}function q(e){return e in V?V[e]:V[e]="on"+e}function K(e,t){if(e.da)e=!0;else{t=new _(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function W(e){return(e=e[F])instanceof L?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function Q(){N.call(this),this.i=new L(this),this.M=this,this.G=null}function Y(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var s=t;O(t=new S(r,e),s)}let i,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)i=t.g=n[o],s=Z(i,r,!0,t)&&s;if(i=t.g=e,s=Z(i,r,!0,t)&&s,s=Z(i,r,!1,t)&&s,n)for(o=0;o<n.length;o++)i=t.g=n[o],s=Z(i,r,!1,t)&&s}function Z(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let s=!0;for(let i=0;i<t.length;++i){const o=t[i];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&M(e.i,o),s=!1!==t.call(n,r)&&s}}return s&&!r.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:i.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(Q,N),Q.prototype[I]=!0,Q.prototype.removeEventListener=function(e,t,n,r){z(this,e,t,n,r)},Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)k(n[e]);delete e.g[t],e.h--}}this.G=null},Q.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Q.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class te extends N{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(e){N.call(this),this.h=e,this.g={}}u(ne,N);var re=[];function se(e){R(e.g,function(e,t){this.g.hasOwnProperty(t)&&G(e)},e),e.g={}}ne.prototype.N=function(){ne.Z.N.call(this),se(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ie=i.JSON.stringify,oe=i.JSON.parse,ae=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function le(){}function ce(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function de(){S.call(this,"d")}function me(){S.call(this,"c")}u(de,S),u(me,S);var fe={},ge=null;function ve(){return ge=ge||new Q}function be(e){S.call(this,fe.Ia,e)}function we(e){const t=ve();Y(t,new be(t))}function Ee(e,t){S.call(this,fe.STAT_EVENT,e),this.stat=t}function Ne(e){const t=ve();Y(t,new Ee(t,e))}function Se(e,t){S.call(this,fe.Ja,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function Te(){this.g=!0}function _e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let e=1;e<r.length;e++)r[e]=""}}}return ie(i)}catch(Pe){return t}}(e,n)+(r?" "+r:"")})}fe.Ia="serverreachability",u(be,S),fe.STAT_EVENT="statevent",u(Ee,S),fe.Ja="timingevent",u(Se,S),Te.prototype.ua=function(){this.g=!1},Te.prototype.info=function(){};var Ie,je={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ae={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function ke(){}function Re(e){return encodeURIComponent(String(e))}function De(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Oe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}u(ke,le),ke.prototype.g=function(){return new XMLHttpRequest},Ie=new ke;var Me={},Ue={};function Fe(e,t,n){e.M=1,e.A=ut(it(t)),e.u=n,e.R=!0,Ve(e,null)}function Ve(e,t){e.F=Date.now(),He(e),e.B=it(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),St(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Le,e.g=hn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new te(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var s="readystatechange";Array.isArray(s)||(s&&(re[0]=s.toString()),s=re);for(let i=0;i<s.length;i++){const e=B(n,s[i],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?P(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),we(),function(e,t,n,r,s,i){e.info(function(){if(e.g)if(i){var o="",a=i.split("&");for(let e=0;e<a.length;e++){var l=a[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+l+"&":o+(e+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Be(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function $e(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ue:(n=Number(t.substring(n,r)),isNaN(n)?Me:(r+=1)+n>t.length?Ue:(t=t.slice(r,r+n),e.C=r+n,t))}function He(e){e.T=Date.now()+e.H,ze(e,e.H)}function ze(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ce(l(e.aa,e),t)}function Ge(e){e.D&&(i.clearTimeout(e.D),e.D=null)}function qe(e){0==e.j.I||e.K||on(e.j,e)}function Ke(e){Ge(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,se(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function We(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ze(n.h,e)))if(!e.L&&Ze(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Wt(n)}tn(n),Ne(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ce(l(n.Va,n),6e3));Ye(n.h)<=1&&n.ta&&(n.ta=void 0)}else ln(n,11)}else if((e.L||n.g==e)&&sn(n),!T(t))for(s=n.Ba.g.parse(t),t=0;t<s.length;t++){let l=s[t];const u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const s=l[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(et(i,i.h),i.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,ct(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=e;if((r=n).na=un(r,r.L?r.ba:null,r.W),o.L){tt(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(Ge(a),He(a)),r.g=o}else en(r);n.i.length>0&&Xt(n)}else"stop"!=l[0]&&"close"!=l[0]||ln(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ln(n,7):Kt(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}we()}catch(u){}}Oe.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Ht(e)?t.j():this.Y(e)},Oe.prototype.Y=function(e){try{if(e==this.g)e:{const l=Ht(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||zt(this.g)))){this.K||4!=l||7==c||we(),Ge(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Be(e))return e.g.la();const t=zt(e.g);if(""===t)return"";let n="";const r=t.length,s=4==Ht(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Ke(e),qe(e),"";e.h.i=new i.TextDecoder}for(let i=0;i<r;i++)e.h.h=!0,n+=e.h.i.decode(t[i],{stream:!(s&&i==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(r)){var o=r;break t}}o=null}if(!(e=o)){this.o=!1,this.m=3,Ne(12),Ke(this),qe(this);break e}_e(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,We(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=$e(this,n),t==Ue){4==l&&(this.m=4,Ne(14),e=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}if(t==Me){this.m=4,Ne(15),_e(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}_e(this.i,this.l,t,null),We(this,t)}if(Be(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,Ne(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nn(a),a.P=!0,Ne(11))}}else _e(this.i,this.l,n,"[Invalid Chunked Response]"),Ke(this),qe(this)}else _e(this.i,this.l,n,null),We(this,n);4==l&&Ke(this),this.o&&!this.K&&(4==l?on(this.j,this):(this.o=!1,He(this)))}else(function(e){const t={};e=(e.g&&Ht(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(T(e[r]))continue;var n=De(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),Ke(this),qe(this)}}}catch(rs){}},Oe.prototype.cancel=function(){this.K=!0,Ke(this)},Oe.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(we(),Ne(17)),Ke(this),this.m=2,qe(this)):ze(this,this.T-e)};var Je=class{constructor(e,t){this.g=e,this.map=t}};function Xe(e){this.l=e||10,i.PerformanceNavigationTiming?e=(e=i.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Ze(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function et(e,t){e.g?e.g.add(t):e.h=t}function tt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function nt(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}Xe.prototype.cancel=function(){if(this.i=nt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function st(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof st?(this.l=e.l,ot(this,e.j),this.o=e.o,this.g=e.g,at(this,e.u),this.h=e.h,lt(this,Ct(e.i)),this.m=e.m):e&&(t=String(e).match(rt))?(this.l=!1,ot(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),at(this,t[4]),this.h=ht(t[5]||"",!0),lt(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.l=!1,this.i=new bt(null,this.l))}function it(e){return new st(e)}function ot(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function lt(e,t,n){t instanceof bt?(e.i=t,function(e,t){t&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(wt(this,t),St(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=dt(t,yt)),e.i=new bt(t,e.l))}function ct(e,t,n){e.i.set(t,n)}function ut(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,pt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function pt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}st.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(dt(t,mt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,mt,!0),"@"),e.push(Re(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")},st.prototype.resolve=function(e){const t=it(this);let n=!!e.j;n?ot(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)at(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=t.h.lastIndexOf("/");-1!=s&&(r=t.h.slice(0,s+1)+r)}if(".."==(s=r)||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const e=[];for(let t=0;t<s.length;){const n=s[t++];"."==n?r&&t==s.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==s.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=s}return n?t.h=r:n=""!==e.i.toString(),n?lt(t,Ct(e.i)):n=!!e.m,n&&(t.m=e.m),t};var mt=/[#\/\?@]/g,ft=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let s,i=null;r>=0?(s=e[n].substring(0,r),i=e[n].substring(r+1)):s=e[n],t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function wt(e,t){xt(e),t=Tt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return xt(e),t=Tt(e,t),e.g.has(t)}function Nt(e,t){xt(e);let n=[];if("string"==typeof t)Et(e,t)&&(n=n.concat(e.g.get(Tt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function St(e,t,n){wt(e,t),n.length>0&&(e.i=null,e.g.set(Tt(e,t),d(n)),e.h+=n.length)}function Ct(e){const t=new bt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function Tt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _t(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(Pe){}}function It(){this.g=new ae}function jt(e){this.i=e.Sb||null,this.h=e.ab||!1}function At(e,t){Q.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function kt(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Rt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Pt(e)}function Pt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t="";return R(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dt(n),"string"==typeof e?null!=n&&Re(n):ct(e,t,n))}function Lt(e){Q.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=bt.prototype).add=function(e,t){xt(this),this.i=null,e=Tt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){xt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return xt(this),this.i=null,Et(this,e=Tt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=Nt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const s=Re(n);n=Nt(this,n);for(let t=0;t<n.length;t++){let r=s;""!==n[t]&&(r+="="+Re(n[t])),e.push(r)}}return this.i=e.join("&")},u(jt,le),jt.prototype.g=function(){return new At(this.i,this.h)},u(At,Q),(e=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Pt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||i).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Rt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kt(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rt(this):Pt(this),3==this.readyState&&kt(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Rt(this))},e.Na=function(e){this.g&&(this.response=e,Rt(this))},e.ga=function(){this.g&&Rt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(Lt,Q);var Mt=/^https?$/i,Ut=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Vt(e),$t(e)}function Vt(e){e.A||(e.A=!0,Y(e,"complete"),Y(e,"error"))}function Bt(e){if(e.h&&void 0!==s)if(e.v&&4==Ht(e))setTimeout(e.Ca.bind(e),0);else if(Y(e,"readystatechange"),4==Ht(e)){e.h=!1;try{const s=e.ca();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){let t=String(e.D).match(rt)[1]||null;!t&&i.self&&i.self.location&&(t=i.self.location.protocol.slice(0,-1)),r=!Mt.test(t?t.toLowerCase():"")}n=r}if(n)Y(e,"complete"),Y(e,"success");else{e.o=6;try{var o=Ht(e)>2?e.g.statusText:""}catch(pe){o=""}e.l=o+" ["+e.ca()+"]",Vt(e)}}finally{$t(e)}}}function $t(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||Y(e,"ready");try{n.onreadystatechange=null}catch(he){}}}function Ht(e){return e.g?e.g.readyState:0}function zt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Gt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qt(e){this.za=0,this.i=[],this.j=new Te,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gt("baseRetryDelayMs",5e3,e),this.Za=Gt("retryDelaySeedMs",1e4,e),this.Ta=Gt("forwardChannelMaxRetries",2,e),this.va=Gt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Xe(e&&e.concurrentRequestLimit),this.Ba=new It,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Kt(e){if(Jt(e),3==e.I){var t=e.V++,n=it(e.J);if(ct(n,"SID",e.M),ct(n,"RID",t),ct(n,"TYPE","terminate"),Yt(e,n),(t=new Oe(e,e.j,t)).M=2,t.A=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.A.toString(),"")}catch(he){}!n&&i.Image&&((new Image).src=t.A,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),He(t)}cn(e)}function Wt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Jt(e){Wt(e),e.v&&(i.clearTimeout(e.v),e.v=null),sn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function Xt(e){if(!Qe(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||w(),b||(v(),b=!0),x.add(t,e),e.D=0}}function Qt(e,t){var n;n=t?t.l:e.V++;const r=it(e.J);ct(r,"SID",e.M),ct(r,"RID",n),ct(r,"AID",e.K),Yt(e,r),e.u&&e.o&&Ot(r,e.u,e.o),n=new Oe(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Zt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),et(e.h,n),Fe(n,r,t)}function Yt(e,t){e.H&&R(e.H,function(e,n){ct(t,n,e)}),e.l&&R({},function(e,n){ct(t,n,e)})}function Zt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?l(e.l.Ka,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<n;c++){var i=s[c].g;const n=s[c].map;if((i-=t)<0)t=Math.max(0,s[c].g-100),l=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[t,n]of a){let r=n;o(n)&&(r=ie(n)),e.push(i+t+"="+encodeURIComponent(r))}}catch(Cr){throw e.push(i+"type="+encodeURIComponent("_badmap")),Cr}}catch(Cr){r&&r(n)}}if(l){a=e.join("&");break e}}a=void 0}return e=e.i.splice(0,n),t.G=e,a}function en(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||w(),b||(v(),b=!0),x.add(t,e),e.A=0}}function tn(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ce(l(e.Da,e),an(e,e.A)),e.A++,!0)}function nn(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function rn(e){e.g=new Oe(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=it(e.na);ct(t,"RID","rpc"),ct(t,"SID",e.M),ct(t,"AID",e.K),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&ct(t,"TO",e.ia),ct(t,"TYPE","xmlhttp"),Yt(e,t),e.u&&e.o&&Ot(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=ut(it(t)),n.u=null,n.R=!0,Ve(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function on(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Ze(e.h,t))return;n=t.G,tt(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var s=e.D;Y(r=ve(),new Se(r,n)),Xt(e)}else en(e);else if(3==(s=t.m)||0==s&&t.X>0||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Ce(l(e.Ea,e,t),an(e,e.D)),e.D++,0)))}(e,t)||2==r&&tn(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),s){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function an(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),r=e.Ua;const t=!r;r=new st(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ot(r,"https"),ut(r),t?function(e,t){const n=new Te;if(i.Image){const r=new Image;r.onload=c(_t,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(_t,n,"TestLoadImage: error",!1,t,r),r.onabort=c(_t,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(_t,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Te;const n=new AbortController,r=setTimeout(()=>{n.abort(),_t(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?_t(0,0,!0,t):_t(0,0,!1,t)}).catch(()=>{clearTimeout(r),_t(0,0,!1,t)})}(r.toString(),n)}else Ne(2);e.I=0,e.l&&e.l.pa(t),cn(e),Jt(e)}function cn(e){if(e.I=0,e.ja=[],e.l){const t=nt(e.h);0==t.length&&0==e.i.length||(p(e.ja,t),p(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function un(e,t,n){var r=n instanceof st?it(n):new st(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.u);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;const e=new st(null);r&&ot(e,r),t&&(e.g=t),s&&at(e,s),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&ct(r,n,t),ct(r,"VER",e.ka),Yt(e,r),r}function hn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Lt(new jt({ab:n})):new Lt(e.ma)).Fa(e.L),t}function dn(){}function pn(){}function mn(e,t){Q.call(this),this.g=new qt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!T(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!T(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function fn(e){de.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){me.call(this),this.status=1}function yn(e){this.g=e}(e=Lt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ie.g(),this.g.onreadystatechange=h(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(Pe){return void Ft(this,Pe)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(Array.prototype.indexOf.call(Ut,t,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(Pe){Ft(this,Pe)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Y(this,"complete"),Y(this,"abort"),$t(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$t(this,!0)),Lt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Bt(this):this.Xa())},e.Xa=function(){Bt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Ht(this)>2?this.g.status:-1}catch(ye){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(ye){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oe(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=qt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){Ne(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=un(this,null,this.W),Xt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new Oe(this,this.j,e);let i=this.o;if(this.U&&(i?(i=P(i),O(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,s,t),ct(n=it(this.J),"RID",e),ct(n,"CVER",22),this.G&&ct(n,"X-HTTP-Session-Id",this.G),Yt(this,n),i&&(this.R?t="headers="+Re(Dt(i))+"&"+t:this.u&&Ot(n,this.u,i)),et(this.h,s),this.Ra&&ct(n,"TYPE","init"),this.S?(ct(n,"$req",t),ct(n,"SID","null"),s.U=!0,Fe(s,n,null)):Fe(s,n,t),this.I=2}}else 3==this.I&&(e?Qt(this,e):0==this.i.length||Qe(this.h)||Qt(this))},e.Da=function(){if(this.v=null,rn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ce(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),Wt(this),rn(this))},e.Va=function(){null!=this.C&&(this.C=null,Wt(this),tn(this),Ne(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},pn.prototype.g=function(e,t){return new mn(e,t)},u(mn,Q),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Kt(this.g)},mn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ie(e),e=n);t.i.push(new Je(t.Ya++,e)),3==t.I&&Xt(t)},mn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,mn.Z.N.call(this)},u(fn,de),u(gn,me),u(yn,dn),yn.prototype.ra=function(){Y(this.g,"a")},yn.prototype.qa=function(e){Y(this.g,new fn(e))},yn.prototype.pa=function(e){Y(this.g,new gn)},yn.prototype.oa=function(){Y(this.g,"b")},pn.prototype.createWebChannel=pn.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Er=function(){return new pn},wr=function(){return ve()},xr=fe,br={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},je.NO_ERROR=0,je.TIMEOUT=8,je.HTTP_ERROR=6,vr=je,Ae.COMPLETE="complete",yr=Ae,ce.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",Q.prototype.listen=Q.prototype.J,gr=ce,Lt.prototype.listenOnce=Lt.prototype.K,Lt.prototype.getLastError=Lt.prototype.Ha,Lt.prototype.getLastErrorCode=Lt.prototype.ya,Lt.prototype.getStatus=Lt.prototype.ca,Lt.prototype.getResponseJson=Lt.prototype.La,Lt.prototype.getResponseText=Lt.prototype.la,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Fa,fr=Lt}).apply(void 0!==Nr?Nr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Sr="@firebase/firestore",Cr="4.9.2";
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
 */class Tr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tr.UNAUTHENTICATED=new Tr(null),Tr.GOOGLE_CREDENTIALS=new Tr("google-credentials-uid"),Tr.FIRST_PARTY=new Tr("first-party-uid"),Tr.MOCK_USER=new Tr("mock-user");
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
let _r="12.3.0";
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
 */const Ir=new Wt("@firebase/firestore");function jr(){return Ir.logLevel}function Ar(e,...t){if(Ir.logLevel<=Ht.DEBUG){const n=t.map(Pr);Ir.debug(`Firestore (${_r}): ${e}`,...n)}}function kr(e,...t){if(Ir.logLevel<=Ht.ERROR){const n=t.map(Pr);Ir.error(`Firestore (${_r}): ${e}`,...n)}}function Rr(e,...t){if(Ir.logLevel<=Ht.WARN){const n=t.map(Pr);Ir.warn(`Firestore (${_r}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{
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
return function(e){return JSON.stringify(e)}(e)}catch(fe){return e}}
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
 */function Dr(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Or(e,r,n)}function Or(e,t,n){let r=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw kr(r),new Error(r)}function Lr(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||Or(t,s,r)}function Mr(e,t){return e}
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
 */const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fr extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Vr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class Br{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $r{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Tr.UNAUTHENTICATED))}shutdown(){}}class Hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zr{constructor(e){this.t=e,this.currentUser=Tr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Lr(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vr,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{Ar("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ar("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vr)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Ar("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Lr("string"==typeof t.accessToken,31837,{l:t}),new Br(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Lr(null===e||"string"==typeof e,2055,{h:e}),new Tr(e)}}class Gr{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Tr.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qr{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Gr(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Tr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wr{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Lr(void 0===this.o,3512);const n=e=>{null!=e.error&&Ar("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Ar("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Ar("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Ar("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Lr("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Kr(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function Jr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Xr{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Jr(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Qr(e,t){return e<t?-1:e>t?1:0}function Yr(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),s=t.charAt(r);if(n!==s)return ts(n)===ts(s)?Qr(n,s):ts(n)?1:-1}return Qr(e.length,t.length)}const Zr=55296,es=57343;function ts(e){const t=e.charCodeAt(0);return t>=Zr&&t<=es}function ns(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
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
 */const rs="__name__";class ss{constructor(e,t,n){void 0===t?t=0:t>e.length&&Dr(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Dr(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ss.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ss?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=ss.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Qr(e.length,t.length)}static compareSegments(e,t){const n=ss.isNumericId(e),r=ss.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ss.extractNumericId(e).compare(ss.extractNumericId(t)):Yr(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class is extends ss{construct(e,t,n){return new is(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Fr(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new is(t)}static emptyPath(){return new is([])}}const os=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class as extends ss{construct(e,t,n){return new as(e,t,n)}static isValidIdentifier(e){return os.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),as.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===rs}static keyField(){return new as([rs])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Fr(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Fr(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fr(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Fr(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new as(t)}static emptyPath(){return new as([])}}
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
 */class ls{constructor(e){this.path=e}static fromPath(e){return new ls(is.fromString(e))}static fromName(e){return new ls(is.fromString(e).popFirst(5))}static empty(){return new ls(is.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===is.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return is.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ls(new is(e.slice()))}}
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
 */function cs(e){if(!ls.isDocumentKey(e))throw new Fr(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function us(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function hs(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Dr(12329,{type:typeof e})}function ds(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fr(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hs(e);throw new Fr(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */function ps(e,t){const n={typeString:e};return t&&(n.value=t),n}function ms(e,t){if(!us(e))throw new Fr(Ur.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Fr(Ur.INVALID_ARGUMENT,n);return!0}
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
 */const fs=-62135596800,gs=1e6;class ys{static now(){return ys.fromMillis(Date.now())}static fromDate(e){return ys.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*gs);return new ys(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<fs)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gs}_compareTo(e){return this.seconds===e.seconds?Qr(this.nanoseconds,e.nanoseconds):Qr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ys._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ms(e,ys._jsonSchema))return new ys(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ys._jsonSchemaVersion="firestore/timestamp/1.0",ys._jsonSchema={type:ps("string",ys._jsonSchemaVersion),seconds:ps("number"),nanoseconds:ps("number")};
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
class vs{static fromTimestamp(e){return new vs(e)}static min(){return new vs(new ys(0,0))}static max(){return new vs(new ys(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function bs(e){return new xs(e.readTime,e.key,-1)}class xs{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new xs(vs.min(),ls.empty(),-1)}static max(){return new xs(vs.max(),ls.empty(),-1)}}function ws(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ls.comparator(e.documentKey,t.documentKey),0!==n?n:Qr(e.largestBatchId,t.largestBatchId)
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
 */)}class Es{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
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
 */async function Ns(e){if(e.code!==Ur.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Ar("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ss{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Dr(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ss((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ss?t:Ss.resolve(t)}catch(e){return Ss.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ss.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ss.reject(t)}static resolve(e){return new Ss((t,n)=>{t(e)})}static reject(e){return new Ss((t,n)=>{n(e)})}static waitFor(e){return new Ss((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Ss.resolve(!1);for(const n of e)t=t.next(e=>e?Ss.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ss((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next(e=>{i[l]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Ss((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function Cs(e){return"IndexedDbTransactionError"===e.name}
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
 */class Ts{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ts.ce=-1;function _s(e){return null==e}function Is(e){return 0===e&&1/e==-1/0}function js(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function As(e){return e+""}
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
 */function ks(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Rs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ps(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Ds{constructor(e,t){this.comparator=e,this.root=t||Ls.EMPTY}insert(e,t){return new Ds(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ls.BLACK,null,null))}remove(e){return new Ds(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ls.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ls{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Ls.RED,this.left=null!=r?r:Ls.EMPTY,this.right=null!=s?s:Ls.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Ls(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ls.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ls.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ls.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ls.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Dr(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Dr(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Dr(27949);return e+(this.isRed()?0:1)}}Ls.EMPTY=null,Ls.RED=!0,Ls.BLACK=!1,Ls.EMPTY=new class{constructor(){this.size=0}get key(){throw Dr(57766)}get value(){throw Dr(16141)}get color(){throw Dr(16727)}get left(){throw Dr(29726)}get right(){throw Dr(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new Ls(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ms{constructor(e){this.comparator=e,this.data=new Ds(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Us(this.data.getIterator())}getIteratorFrom(e){return new Us(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ms))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ms(this.comparator);return t.data=e,t}}class Us{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class Fs{constructor(e){this.fields=e,e.sort(as.comparator)}static empty(){return new Fs([])}unionWith(e){let t=new Ms(as.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Fs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
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
 */class Vs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class Bs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Vs("Invalid base64 string: "+e):e}}(e);return new Bs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Bs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bs.EMPTY_BYTE_STRING=new Bs("");const $s=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hs(e){if(Lr(!!e,39018),"string"==typeof e){let t=0;const n=$s.exec(e);if(Lr(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:zs(e.seconds),nanos:zs(e.nanos)}}function zs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Gs(e){return"string"==typeof e?Bs.fromBase64String(e):Bs.fromUint8Array(e)}
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
 */const qs="server_timestamp",Ks="__type__",Ws="__previous_value__",Js="__local_write_time__";function Xs(e){const t=(e?.mapValue?.fields||{})[Ks]?.stringValue;return t===qs}function Qs(e){const t=e.mapValue.fields[Ws];return Xs(t)?Qs(t):t}function Ys(e){const t=Hs(e.mapValue.fields[Js].timestampValue);return new ys(t.seconds,t.nanos)}
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
 */class Zs{constructor(e,t,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l,this.isUsingEmulator=c}}const ei="(default)";class ti{constructor(e,t){this.projectId=e,this.database=t||ei}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database===ei}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const ni="__type__",ri="__max__",si={fields:{__type__:{stringValue:ri}}},ii="__vector__",oi="value";function ai(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xs(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ri}
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
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[ni]?.stringValue;return t===ii}(e)?10:11:Dr(28295,{value:e})}function li(e,t){if(e===t)return!0;const n=ai(e);if(n!==ai(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ys(e).isEqual(Ys(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Hs(e.timestampValue),r=Hs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Gs(e.bytesValue).isEqual(Gs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return zs(e.geoPointValue.latitude)===zs(t.geoPointValue.latitude)&&zs(e.geoPointValue.longitude)===zs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return zs(e.integerValue)===zs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=zs(e.doubleValue),r=zs(t.doubleValue);return n===r?Is(n)===Is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ns(e.arrayValue.values||[],t.arrayValue.values||[],li);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ks(n)!==ks(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!li(n[s],r[s])))return!1;return!0}(e,t);default:return Dr(52216,{left:e})}}function ci(e,t){return void 0!==(e.values||[]).find(e=>li(e,t))}function ui(e,t){if(e===t)return 0;const n=ai(e),r=ai(t);if(n!==r)return Qr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=zs(e.integerValue||e.doubleValue),r=zs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return hi(e.timestampValue,t.timestampValue);case 4:return hi(Ys(e),Ys(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Gs(e),r=Gs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Qr(n[s],r[s]);if(0!==e)return e}return Qr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Qr(zs(e.latitude),zs(t.latitude));return 0!==n?n:Qr(zs(e.longitude),zs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return di(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},s=n[oi]?.arrayValue,i=r[oi]?.arrayValue,o=Qr(s?.values?.length||0,i?.values?.length||0);return 0!==o?o:di(s,i)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===si&&t===si)return 0;if(e===si)return 1;if(t===si)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Yr(r[o],i[o]);if(0!==e)return e;const t=ui(n[r[o]],s[i[o]]);if(0!==t)return t}return Qr(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Dr(23264,{he:n})}}function hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Qr(e,t);const n=Hs(e),r=Hs(t),s=Qr(n.seconds,r.seconds);return 0!==s?s:Qr(n.nanos,r.nanos)}function di(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=ui(n[s],r[s]);if(e)return e}return Qr(n.length,r.length)}function pi(e){return mi(e)}function mi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Hs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Gs(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ls.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=mi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${mi(e.fields[s])}`;return n+"}"}(e.mapValue):Dr(61005,{value:e})}function fi(e){switch(ai(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Qs(e);return t?16+fi(t):16;case 5:return 2*e.stringValue.length;case 6:return Gs(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+fi(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Rs(e.fields,(e,n)=>{t+=e.length+fi(n)}),t}(e.mapValue);default:throw Dr(13486,{value:e})}}function gi(e){return!!e&&"integerValue"in e}function yi(e){return!!e&&"arrayValue"in e}function vi(e){return!!e&&"mapValue"in e}function bi(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Rs(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=bi(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=bi(e.arrayValue.values[n]);return t}return{...e}}class xi{constructor(e){this.value=e}static empty(){return new xi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(t)}setAll(e){let t=as.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=bi(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());vi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return li(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Rs(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new xi(bi(this.value))}}function wi(e){const t=[];return Rs(e.fields,(e,n)=>{const r=new as([e]);if(vi(n)){const e=wi(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Fs(t)
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
 */}class Ei{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ei(e,0,vs.min(),vs.min(),vs.min(),xi.empty(),0)}static newFoundDocument(e,t,n,r){return new Ei(e,1,t,vs.min(),n,r,0)}static newNoDocument(e,t){return new Ei(e,2,t,vs.min(),vs.min(),xi.empty(),0)}static newUnknownDocument(e,t){return new Ei(e,3,t,vs.min(),vs.min(),xi.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(vs.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=vs.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ei&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ei(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ni{constructor(e,t){this.position=e,this.inclusive=t}}function Si(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?ls.comparator(ls.fromName(o.referenceValue),n.key):ui(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ci(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!li(e.position[n],t.position[n]))return!1;return!0}
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
 */class Ti{constructor(e,t="asc"){this.field=e,this.dir=t}}function _i(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Ii{}class ji extends Ii{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Li(e,t,n):"array-contains"===t?new Vi(e,n):"in"===t?new Bi(e,n):"not-in"===t?new $i(e,n):"array-contains-any"===t?new Hi(e,n):new ji(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Mi(e,n):new Ui(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(ui(t,this.value)):null!==t&&ai(this.value)===ai(t)&&this.matchesComparison(ui(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Dr(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ai extends Ii{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ai(e,t)}matches(e){return ki(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ki(e){return"and"===e.op}function Ri(e){return function(e){for(const t of e.filters)if(t instanceof Ai)return!1;return!0}(e)&&ki(e)}function Pi(e){if(e instanceof ji)return e.field.canonicalString()+e.op.toString()+pi(e.value);if(Ri(e))return e.filters.map(e=>Pi(e)).join(",");{const t=e.filters.map(e=>Pi(e)).join(",");return`${e.op}(${t})`}}function Di(e,t){return e instanceof ji?function(e,t){return t instanceof ji&&e.op===t.op&&e.field.isEqual(t.field)&&li(e.value,t.value)}(e,t):e instanceof Ai?function(e,t){return t instanceof Ai&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Di(n,t.filters[r]),!0)}(e,t):void Dr(19439)}function Oi(e){return e instanceof ji?function(e){return`${e.field.canonicalString()} ${e.op} ${pi(e.value)}`}(e):e instanceof Ai?function(e){return e.op.toString()+" {"+e.getFilters().map(Oi).join(" ,")+"}"}(e):"Filter"}class Li extends ji{constructor(e,t,n){super(e,t,n),this.key=ls.fromName(n.referenceValue)}matches(e){const t=ls.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mi extends ji{constructor(e,t){super(e,"in",t),this.keys=Fi("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ui extends ji{constructor(e,t){super(e,"not-in",t),this.keys=Fi("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fi(e,t){return(t.arrayValue?.values||[]).map(e=>ls.fromName(e.referenceValue))}class Vi extends ji{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yi(t)&&ci(t.arrayValue,this.value)}}class Bi extends ji{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ci(this.value.arrayValue,t)}}class $i extends ji{constructor(e,t){super(e,"not-in",t)}matches(e){if(ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!ci(this.value.arrayValue,t)}}class Hi extends ji{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ci(this.value.arrayValue,e))}}
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
 */class zi{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Te=null}}function Gi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new zi(e,t,n,r,s,i,o)}function qi(e){const t=Mr(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Pi(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),_s(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>pi(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>pi(e)).join(",")),t.Te=e}return t.Te}function Ki(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!_i(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Di(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ci(e.startAt,t.startAt)&&Ci(e.endAt,t.endAt)}
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
 */class Wi{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ji(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Xi(e){const t=Mr(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ms(as.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new Ti(r,n))}),e.has(as.keyField().canonicalString())||t.Ie.push(new Ti(as.keyField(),n))}return t.Ie}function Qi(e){const t=Mr(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return Gi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Ti(e.field,t)});const n=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;return Gi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Xi(e))),t.Ee}function Yi(e,t,n){return new Wi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zi(e,t){return Ki(Qi(e),Qi(t))&&e.limitType===t.limitType}function eo(e){return`${qi(Qi(e))}|lt:${e.limitType}`}function to(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Oi(e)).join(", ")}]`),_s(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>pi(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>pi(e)).join(",")),`Target(${t})`}(Qi(e))}; limitType=${e.limitType})`}function no(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ls.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Xi(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Si(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Xi(e),t))&&!(e.endAt&&!function(e,t,n){const r=Si(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Xi(e),t))}(e,t)}function ro(e,t,n){const r=e.field.isKeyField()?ls.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?ui(r,s):Dr(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Dr(19790,{direction:e.dir})}}
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
 */class so{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Ps(this.inner)}size(){return this.innerSize}}
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
 */const io=new Ds(ls.comparator);function oo(){return io}const ao=new Ds(ls.comparator);function lo(...e){let t=ao;for(const n of e)t=t.insert(n.key,n);return t}function co(e){let t=ao;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function uo(){return po()}function ho(){return po()}function po(){return new so(e=>e.toString(),(e,t)=>e.isEqual(t))}const mo=new Ds(ls.comparator),fo=new Ms(ls.comparator);function go(...e){let t=fo;for(const n of e)t=t.add(n);return t}const yo=new Ms(Qr);
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
function vo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Is(t)?"-0":t}}function bo(e){return{integerValue:""+e}}function xo(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */(t)?bo(t):vo(e,t)}
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
 */class wo{constructor(){this._=void 0}}function Eo(e,t,n){return e instanceof Co?function(e,t){const n={fields:{[Ks]:{stringValue:qs},[Js]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Xs(t)&&(t=Qs(t)),t&&(n.fields[Ws]=t),{mapValue:n}}(n,t):e instanceof To?_o(e,t):e instanceof Io?jo(e,t):function(e,t){const n=So(e,t),r=ko(n)+ko(e.Ae);return gi(n)&&gi(e.Ae)?bo(r):vo(e.serializer,r)}(e,t)}function No(e,t,n){return e instanceof To?_o(e,t):e instanceof Io?jo(e,t):n}function So(e,t){return e instanceof Ao?function(e){return gi(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Co extends wo{}class To extends wo{constructor(e){super(),this.elements=e}}function _o(e,t){const n=Ro(t);for(const r of e.elements)n.some(e=>li(e,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends wo{constructor(e){super(),this.elements=e}}function jo(e,t){let n=Ro(t);for(const r of e.elements)n=n.filter(e=>!li(e,r));return{arrayValue:{values:n}}}class Ao extends wo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ko(e){return zs(e.integerValue||e.doubleValue)}function Ro(e){return yi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Po{constructor(e,t){this.version=e,this.transformResults=t}}class Do{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Do}static exists(e){return new Do(void 0,e)}static updateTime(e){return new Do(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Lo{}function Mo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ko(e.key,Do.none()):new $o(e.key,e.data,Do.none());{const n=e.data,r=xi.empty();let s=new Ms(as.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Ho(e.key,r,new Fs(s.toArray()),Do.none())}}function Uo(e,t,n){e instanceof $o?function(e,t,n){const r=e.value.clone(),s=Go(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ho?function(e,t,n){if(!Oo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Go(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(zo(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Fo(e,t,n,r){return e instanceof $o?function(e,t,n,r){if(!Oo(e.precondition,t))return n;const s=e.value.clone(),i=qo(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ho?function(e,t,n,r){if(!Oo(e.precondition,t))return n;const s=qo(e.fieldTransforms,r,t),i=t.data;return i.setAll(zo(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return Oo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Vo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=So(r.transform,e||null);null!=s&&(null===n&&(n=xi.empty()),n.set(r.field,s))}return n||null}function Bo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ns(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof To&&t instanceof To||e instanceof Io&&t instanceof Io?ns(e.elements,t.elements,li):e instanceof Ao&&t instanceof Ao?li(e.Ae,t.Ae):e instanceof Co&&t instanceof Co}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $o extends Lo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ho extends Lo{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Go(e,t,n){const r=new Map;Lr(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,No(o,a,n[s]))}return r}function qo(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Eo(e,i,t))}return r}class Ko extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wo extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Jo{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Uo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Fo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Fo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ho();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Mo(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(vs.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),go())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(e,t)=>Bo(e,t))&&ns(this.baseMutations,e.baseMutations,(e,t)=>Bo(e,t))}}class Xo{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Lr(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=mo;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Xo(e,t,n,r)}}
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
 */class Qo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */var Yo,Zo;(Zo=Yo||(Yo={}))[Zo.OK=0]="OK",Zo[Zo.CANCELLED=1]="CANCELLED",Zo[Zo.UNKNOWN=2]="UNKNOWN",Zo[Zo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Zo[Zo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Zo[Zo.NOT_FOUND=5]="NOT_FOUND",Zo[Zo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Zo[Zo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Zo[Zo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Zo[Zo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Zo[Zo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Zo[Zo.ABORTED=10]="ABORTED",Zo[Zo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Zo[Zo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Zo[Zo.INTERNAL=13]="INTERNAL",Zo[Zo.UNAVAILABLE=14]="UNAVAILABLE",Zo[Zo.DATA_LOSS=15]="DATA_LOSS",
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
new pr([4294967295,4294967295],0);class ea{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ta(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function na(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ra(e,t){return ta(e,t.toTimestamp())}function sa(e){return Lr(!!e,49232),vs.fromTimestamp(function(e){const t=Hs(e);return new ys(t.seconds,t.nanos)}(e))}function ia(e,t){return oa(e,t).canonicalString()}function oa(e,t){const n=function(e){return new is(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function aa(e,t){return ia(e.databaseId,t.path)}function la(e){const t=function(e){const t=is.fromString(e);return Lr(function(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */(t),10190,{key:t.toString()}),t}(e);return 4===t.length?is.emptyPath():function(e){return Lr(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}(t)}function ca(e,t,n){return{name:aa(e,t),fields:n.value.mapValue.fields}}function ua(e){let t=la(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Lr(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=ha(e);return t instanceof Ai&&Ri(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new Ti(da(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,_s(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ni(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Ni(n,t)}(n.endAt)),function(e,t,n,r,s,i,o,a){return new Wi(e,t,n,r,s,i,o,a)}(t,s,o,i,a,"F",l,c)}function ha(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=da(e.unaryFilter.field);return ji.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=da(e.unaryFilter.field);return ji.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=da(e.unaryFilter.field);return ji.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=da(e.unaryFilter.field);return ji.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Dr(61313);default:return Dr(60726)}}(e):void 0!==e.fieldFilter?function(e){return ji.create(da(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Dr(58110);default:return Dr(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ai.create(e.compositeFilter.filters.map(e=>ha(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Dr(1026)}}(e.compositeFilter.op))}(e):Dr(30097,{filter:e})}function da(e){return as.fromServerFormat(e.fieldPath)}function pa(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}class ma{constructor(e){this.yt=e}}function fa(e){const t=ua({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Yi(t,t.limit,"L"):t}
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
 */class ga{constructor(){this.Cn=new ya}addToCollectionParentIndex(e,t){return this.Cn.add(t),Ss.resolve()}getCollectionParents(e,t){return Ss.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Ss.resolve()}deleteFieldIndex(e,t){return Ss.resolve()}deleteAllFieldIndexes(e){return Ss.resolve()}createTargetIndexes(e,t){return Ss.resolve()}getDocumentsMatchingTarget(e,t){return Ss.resolve(null)}getIndexType(e,t){return Ss.resolve(0)}getFieldIndexes(e,t){return Ss.resolve([])}getNextCollectionGroupToUpdate(e){return Ss.resolve(null)}getMinOffset(e,t){return Ss.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return Ss.resolve(xs.min())}updateCollectionGroup(e,t,n){return Ss.resolve()}updateIndexEntries(e,t){return Ss.resolve()}}class ya{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ms(is.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ms(is.comparator)).toArray()}}
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
 */const va={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ba=41943040;class xa{static withCacheSize(e){return new xa(e,xa.DEFAULT_COLLECTION_PERCENTILE,xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */xa.DEFAULT_COLLECTION_PERCENTILE=10,xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xa.DEFAULT=new xa(ba,xa.DEFAULT_COLLECTION_PERCENTILE,xa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xa.DISABLED=new xa(-1,0,0);
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
class wa{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new wa(0)}static cr(){return new wa(-1)}}
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
 */const Ea="LruGarbageCollector";function Na([e,t],[n,r]){const s=Qr(e,n);return 0===s?Qr(t,r):s}class Sa{constructor(e){this.Ir=e,this.buffer=new Ms(Na),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Na(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ca{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){Ar(Ea,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Cs(e)?Ar(Ea,"Ignoring IndexedDB error during garbage collection: ",e):await Ns(e)}await this.Vr(3e5)})}}class Ta{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ss.resolve(Ts.ce);const n=new Sa(t);return this.mr.forEachTarget(e,e=>n.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>n.Ar(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ar("LruGarbageCollector","Garbage collection skipped; disabled"),Ss.resolve(va)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Ar("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),va):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,s,i,o,a,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Ar("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),jr()<=Ht.DEBUG&&Ar("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-c}ms`),Ss.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}
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
class _a{constructor(){this.changes=new so(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ei.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ss.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Ia{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class ja{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Fo(n.mutation,e,Fs.empty(),ys.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,go()).next(()=>t))}getLocalViewOfDocuments(e,t,n=go()){const r=uo();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=lo();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=uo();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,go()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=oo();const i=po(),o=po();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Ho)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Fo(o.mutation,t,o.mutation.getFieldMask(),ys.now())):i.set(t.key,Fs.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>o.set(e,new Ia(t,i.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=po();let r=new Ds((e,t)=>e-t),s=go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Fs.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||go()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=ho();l.forEach(e=>{if(!s.has(e)){const r=Mo(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ss.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return ls.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Ss.resolve(uo());let o=-1,a=s;return i.next(t=>Ss.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ss.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,go())).next(e=>({batchId:o,changes:co(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ls(t)).next(e=>{let t=lo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=lo();return this.indexManager.getCollectionParents(e,s).next(o=>Ss.forEach(o,o=>{const a=function(e,t){return new Wi(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Ei.newInvalidDocument(r)))});let n=lo();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&Fo(i.mutation,r,Fs.empty(),ys.now()),no(t,r)&&(n=n.insert(e,r))}),n})}}
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
 */class Aa{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return Ss.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:sa(e.createTime)}}(t)),Ss.resolve()}getNamedQuery(e,t){return Ss.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(e){return{name:e.name,query:fa(e.bundledQuery),readTime:sa(e.readTime)}}(t)),Ss.resolve()}}
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
 */class ka{constructor(){this.overlays=new Ds(ls.comparator),this.qr=new Map}getOverlay(e,t){return Ss.resolve(this.overlays.get(t))}getOverlays(e,t){const n=uo();return Ss.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Ss.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(n)),Ss.resolve()}getOverlaysForCollection(e,t,n){const r=uo(),s=t.length+1,i=new ls(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ss.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Ds((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=uo(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=uo(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ss.resolve(o)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Qo(t,n));let s=this.qr.get(t);void 0===s&&(s=go(),this.qr.set(t,s)),this.qr.set(t,s.add(n.key))}}
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
 */class Ra{constructor(){this.sessionToken=Bs.EMPTY_BYTE_STRING}getSessionToken(e){return Ss.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ss.resolve()}}
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
 */class Pa{constructor(){this.Qr=new Ms(Da.$r),this.Ur=new Ms(Da.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Da(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new Da(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new ls(new is([])),n=new Da(t,e),r=new Da(t,e+1),s=[];return this.Ur.forEachInRange([n,r],e=>{this.Gr(e),s.push(e.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ls(new is([])),n=new Da(t,e),r=new Da(t,e+1);let s=go();return this.Ur.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new Da(e,0),n=this.Qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Da{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ls.comparator(e.key,t.key)||Qr(e.Yr,t.Yr)}static Kr(e,t){return Qr(e.Yr,t.Yr)||ls.comparator(e.key,t.key)}}
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
 */class Oa{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ms(Da.$r)}checkEmpty(e){return Ss.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Jo(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.Zr=this.Zr.add(new Da(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ss.resolve(i)}lookupMutationBatch(e,t){return Ss.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),s=r<0?0:r;return Ss.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ss.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return Ss.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Da(t,0),r=new Da(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([n,r],e=>{const t=this.Xr(e.Yr);s.push(t)}),Ss.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ms(Qr);return t.forEach(e=>{const t=new Da(e,0),r=new Da(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,r],e=>{n=n.add(e.Yr)})}),Ss.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;ls.isDocumentKey(s)||(s=s.child(""));const i=new Da(new ls(s),0);let o=new Ms(Qr);return this.Zr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Yr)),!0)},i),Ss.resolve(this.ti(o))}ti(e){const t=[];return e.forEach(e=>{const n=this.Xr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Lr(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return Ss.forEach(t.mutations,r=>{const s=new Da(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Da(t,0),r=this.Zr.firstAfterOrEqual(n);return Ss.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ss.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class La{constructor(e){this.ri=e,this.docs=new Ds(ls.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ss.resolve(n?n.document.mutableCopy():Ei.newInvalidDocument(t))}getEntries(e,t){let n=oo();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ei.newInvalidDocument(e))}),Ss.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=oo();const i=t.path,o=new ls(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||ws(bs(o),n)<=0||(r.has(o.key)||no(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ss.resolve(s)}getAllFromCollectionGroup(e,t,n,r){Dr(9500)}ii(e,t){return Ss.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Ma(this)}getSize(e){return Ss.resolve(this.size)}}class Ma extends _a{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),Ss.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}
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
 */class Ua{constructor(e){this.persistence=e,this.si=new so(e=>qi(e),Ki),this.lastRemoteSnapshotVersion=vs.min(),this.highestTargetId=0,this.oi=0,this._i=new Pa,this.targetCount=0,this.ai=wa.ur()}forEachTarget(e,t){return this.si.forEach((e,n)=>t(n)),Ss.resolve()}getLastRemoteSnapshotVersion(e){return Ss.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ss.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),Ss.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),Ss.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new wa(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,Ss.resolve()}updateTargetData(e,t){return this.Pr(t),Ss.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,Ss.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.si.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.si.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ss.waitFor(s).next(()=>r)}getTargetCount(e){return Ss.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return Ss.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),Ss.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Ss.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),Ss.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return Ss.resolve(n)}containsKey(e,t){return Ss.resolve(this._i.containsKey(t))}}
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
 */class Fa{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ts(0),this.li=!1,this.li=!0,this.hi=new Ra,this.referenceDelegate=e(this),this.Pi=new Ua(this),this.indexManager=new ga,this.remoteDocumentCache=function(e){return new La(e)}(e=>this.referenceDelegate.Ti(e)),this.serializer=new ma(t),this.Ii=new Aa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ka,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Oa(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){Ar("MemoryPersistence","Starting transaction:",e);const r=new Va(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return Ss.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class Va extends Es{constructor(e){super(),this.currentSequenceNumber=e}}class Ba{constructor(e){this.persistence=e,this.Ri=new Pa,this.Vi=null}static mi(e){return new Ba(e)}get fi(){if(this.Vi)return this.Vi;throw Dr(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),Ss.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),Ss.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),Ss.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ss.forEach(this.fi,n=>{const r=ls.fromPath(n);return this.gi(e,r).next(e=>{e||t.removeEntry(r,vs.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return Ss.or([()=>Ss.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $a{constructor(e,t){this.persistence=e,this.pi=new so(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=As(t)),t=js(e.get(n),t);return As(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new Ta(e,t)}(this,t)}static mi(e,t){return new $a(e,t)}Ei(){}di(e){return Ss.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return Ss.forEach(this.pi,(n,r)=>this.br(e,n,r).next(e=>e?Ss.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ii(e,r=>this.br(e,r,t).next(e=>{e||(n++,s.removeEntry(r,vs.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),Ss.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ss.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),Ss.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),Ss.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fi(e.data.value)),t}br(e,t,n){return Ss.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t);return Ss.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
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
 */class Ha{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=go(),r=go();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ha(e,t.fromCache,n,r)}}
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
 */class za{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class Ga{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=jt()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(It())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.ys(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.ws(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new za;return this.Ss(e,t,n).next(r=>{if(s.result=r,this.Vs)return this.bs(e,t,n,r.size)})}).next(()=>s.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(jr()<=Ht.DEBUG&&Ar("QueryEngine","SDK will not create cache indexes for query:",to(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Ss.resolve()):(jr()<=Ht.DEBUG&&Ar("QueryEngine","Query:",to(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(jr()<=Ht.DEBUG&&Ar("QueryEngine","The SDK decides to create cache indexes for query:",to(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qi(t))):Ss.resolve())}ys(e,t){if(Ji(t))return Ss.resolve(null);let n=Qi(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Yi(t,null,"F"),n=Qi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=go(...r);return this.ps.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.Ds(t,r);return this.Cs(t,i,s,n.readTime)?this.ys(e,Yi(t,null,"F")):this.vs(e,i,t,n)}))})))}ws(e,t,n,r){return Ji(t)||r.isEqual(vs.min())?Ss.resolve(null):this.ps.getDocuments(e,n).next(s=>{const i=this.Ds(t,s);return this.Cs(t,i,n,r)?Ss.resolve(null):(jr()<=Ht.DEBUG&&Ar("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),to(t)),this.vs(e,i,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=vs.fromTimestamp(1e9===r?new ys(n+1,0):new ys(n,r));return new xs(s,ls.empty(),t)}(r,-1)).next(e=>e))})}Ds(e,t){let n=new Ms(function(e){return(t,n)=>{let r=!1;for(const s of Xi(e)){const e=ro(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}(e));return t.forEach((t,r)=>{no(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ss(e,t,n){return jr()<=Ht.DEBUG&&Ar("QueryEngine","Using full collection scan to execute query:",to(t)),this.ps.getDocumentsMatchingQuery(e,t,xs.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
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
 */class qa{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new Ds(Qr),this.xs=new so(e=>qi(e),Ki),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ja(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}async function Ka(e,t){const n=Mr(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.Bs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=go();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Ls:e,removedBatchIds:s,addedBatchIds:i}))})})}function Wa(e,t){const n=Mr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}class Ja{constructor(){this.activeTargetIds=yo}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xa{constructor(){this.Mo=new Ja,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ja,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Qa{Oo(e){}shutdown(){}}
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
 */const Ya="ConnectivityMonitor";class Za{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Ar(Ya,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Ar(Ya,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let el=null;function tl(){return null===el?el=268435456+Math.round(2147483648*Math.random()):el++,"0x"+el.toString(16)
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
 */}const nl="RestConnection",rl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sl{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===ei?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,s){const i=tl(),o=this.zo(e,t.toUriEncodedString());Ar(nl,`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(a,r,s);const{host:l}=new URL(o),c=Nt(l);return this.Jo(e,o,a,n,c).then(t=>(Ar(nl,`Received RPC '${e}' ${i}: `,t),t),t=>{throw Rr(nl,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}Ho(e,t,n,r,s,i){return this.Go(e,t,n,r,s)}jo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_r,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}zo(e,t){const n=rl[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}
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
 */class il{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}
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
 */const ol="WebChannelConnection";class al extends sl{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,s){const i=tl();return new Promise((s,o)=>{const a=new fr;a.setWithCredentials(!0),a.listenOnce(yr.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case vr.NO_ERROR:const t=a.getResponseJson();Ar(ol,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case vr.TIMEOUT:Ar(ol,`RPC '${e}' ${i} timed out`),o(new Fr(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case vr.HTTP_ERROR:const n=a.getStatus();if(Ar(ol,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(t.status);o(new Fr(e,t.message))}else o(new Fr(Ur.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fr(Ur.UNAVAILABLE,"Connection failed."));break;default:Dr(9055,{l_:e,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{Ar(ol,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);Ar(ol,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)})}T_(e,t,n){const r=tl(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Er(),o=wr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");Ar(ol,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=i.createWebChannel(c,a);this.I_(u);let h=!1,d=!1;const p=new il({Yo:t=>{d?Ar(ol,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Ar(ol,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),Ar(ol,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Zo:()=>u.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(u,gr.EventType.OPEN,()=>{d||(Ar(ol,`RPC '${e}' stream ${r} transport opened.`),p.o_())}),m(u,gr.EventType.CLOSE,()=>{d||(d=!0,Ar(ol,`RPC '${e}' stream ${r} transport closed`),p.a_(),this.E_(u))}),m(u,gr.EventType.ERROR,t=>{d||(d=!0,Rr(ol,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),p.a_(new Fr(Ur.UNAVAILABLE,"The operation could not be completed")))}),m(u,gr.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];Lr(!!n,16349);const s=n,i=s?.error||s[0]?.error;if(i){Ar(ol,`RPC '${e}' stream ${r} received error:`,i);const t=i.status;let n=function(e){const t=Yo[e];if(void 0!==t)return function(e){if(void 0===e)return kr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Yo.OK:return Ur.OK;case Yo.CANCELLED:return Ur.CANCELLED;case Yo.UNKNOWN:return Ur.UNKNOWN;case Yo.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Yo.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Yo.INTERNAL:return Ur.INTERNAL;case Yo.UNAVAILABLE:return Ur.UNAVAILABLE;case Yo.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Yo.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Yo.NOT_FOUND:return Ur.NOT_FOUND;case Yo.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Yo.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Yo.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Yo.ABORTED:return Ur.ABORTED;case Yo.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Yo.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Yo.DATA_LOSS:return Ur.DATA_LOSS;default:return Dr(39323,{code:e})}}(t)}(t),s=i.message;void 0===n&&(n=Ur.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),d=!0,p.a_(new Fr(n,s)),u.close()}else Ar(ol,`RPC '${e}' stream ${r} received:`,n),p.u_(n)}}),m(o,xr.STAT_EVENT,t=>{t.stat===br.PROXY?Ar(ol,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===br.NOPROXY&&Ar(ol,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.__()},0),p}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ll(){return"undefined"!=typeof document?document:null}
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
 */function cl(e){return new ea(e,!0)}
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
 */class ul{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Ar("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
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
 */const hl="PersistentStream";class dl{constructor(e,t,n,r,s,i,o,a){this.Mi=e,this.S_=n,this.b_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ul(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(kr(t.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new Fr(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ar(hl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Ar(hl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pl extends dl{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Lr(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Lr(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Lr(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Lr(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?sa(e.updateTime):sa(t);return n.isEqual(vs.min())&&(n=sa(t)),new Po(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=sa(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=function(e){return new is(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof $o)n={update:ca(e,t.key,t.value)};else if(t instanceof Ko)n={delete:aa(e,t.key)};else if(t instanceof Ho)n={update:ca(e,t.key,t.data),updateMask:pa(t.fieldMask)};else{if(!(t instanceof Wo))return Dr(16599,{Vt:t.type});n={verify:aa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Co)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof To)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Io)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ao)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Dr(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ra(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Dr(27497)}(e,t.precondition)),n}(this.serializer,e))};this.q_(t)}}
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
 */class ml{}class fl extends ml{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Fr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Go(e,oa(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fr(Ur.UNKNOWN,e.toString())})}Ho(e,t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ho(e,oa(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fr(Ur.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class gl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kr(t),this.aa=!1):Ar("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
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
 */const yl="RemoteStore";class vl{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(e=>{n.enqueueAndForget(async()=>{wl(this)&&(Ar(yl,"Restarting streams for network reachability change."),await async function(e){const t=Mr(e);t.Ea.add(4),await xl(t),t.Ra.set("Unknown"),t.Ea.delete(4),await bl(t)}(this))})}),this.Ra=new gl(n,r)}}async function bl(e){if(wl(e))for(const t of e.da)await t(!0)}async function xl(e){for(const t of e.da)await t(!1)}function wl(e){return 0===Mr(e).Ea.size}async function El(e,t,n){if(!Cs(t))throw t;e.Ea.add(1),await xl(e),e.Ra.set("Offline"),n||(n=()=>function(e){const t=Mr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Ar(yl,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await bl(e)})}function Nl(e,t){return t().catch(n=>El(e,n,t))}async function Sl(e){const t=Mr(e),n=Dl(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;Cl(t);)try{const e=await Wa(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,Tl(t,e)}catch(e){await El(t,e)}_l(t)&&Il(t)}function Cl(e){return wl(e)&&e.Ta.length<10}function Tl(e,t){e.Ta.push(t);const n=Dl(e);n.O_()&&n.X_&&n.ea(t.mutations)}function _l(e){return wl(e)&&!Dl(e).x_()&&e.Ta.length>0}function Il(e){Dl(e).start()}async function jl(e){Dl(e).ra()}async function Al(e){const t=Dl(e);for(const n of e.Ta)t.ea(n.mutations)}async function kl(e,t,n){const r=e.Ta.shift(),s=Xo.from(r,t,n);await Nl(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Sl(e)}async function Rl(e,t){t&&Dl(e).X_&&await async function(e,t){if(function(e){return function(e){switch(e){case Ur.OK:return Dr(64938);case Ur.CANCELLED:case Ur.UNKNOWN:case Ur.DEADLINE_EXCEEDED:case Ur.RESOURCE_EXHAUSTED:case Ur.INTERNAL:case Ur.UNAVAILABLE:case Ur.UNAUTHENTICATED:return!1;case Ur.INVALID_ARGUMENT:case Ur.NOT_FOUND:case Ur.ALREADY_EXISTS:case Ur.PERMISSION_DENIED:case Ur.FAILED_PRECONDITION:case Ur.ABORTED:case Ur.OUT_OF_RANGE:case Ur.UNIMPLEMENTED:case Ur.DATA_LOSS:return!0;default:return Dr(15467,{code:e})}}(e)&&e!==Ur.ABORTED}(t.code)){const n=e.Ta.shift();Dl(e).B_(),await Nl(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Sl(e)}}(e,t),_l(e)&&Il(e)}async function Pl(e,t){const n=Mr(e);n.asyncQueue.verifyOperationInProgress(),Ar(yl,"RemoteStore received new credentials");const r=wl(n);n.Ea.add(3),await xl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await bl(n)}function Dl(e){return e.fa||(e.fa=function(e,t,n){const r=Mr(e);return r.sa(),new pl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:jl.bind(null,e),r_:Rl.bind(null,e),ta:Al.bind(null,e),na:kl.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await Sl(e)):(await e.fa.stop(),e.Ta.length>0&&(Ar(yl,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
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
 */}class Ol{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Ol(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fr(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ll(e,t){if(kr("AsyncQueue",`${t}: ${e}`),Cs(e))return new Fr(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}class Ml{constructor(){this.queries=Ul(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Mr(e),r=n.queries;n.queries=Ul(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new Fr(Ur.ABORTED,"Firestore shutting down"))}}function Ul(){return new so(e=>eo(e),Zi)}var Fl,Vl;(Vl=Fl||(Fl={})).Ma="default",Vl.Cache="cache";class Bl{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new so(e=>eo(e),Zi),this.Iu=new Map,this.Eu=new Set,this.du=new Ds(ls.comparator),this.Au=new Map,this.Ru=new Pa,this.Vu={},this.mu=new Map,this.fu=wa.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function $l(e,t,n){const r=function(e){const t=Mr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gl.bind(null,t),t}(e);try{const e=await function(e,t){const n=Mr(e),r=ys.now(),s=t.reduce((e,t)=>e.add(t.key),go());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=oo(),l=go();return n.Ns.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=Vo(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Ho(e.key,t,wi(t.value.mapValue),Do.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:co(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Vu[e.currentUser.toKey()];r||(r=new Ds(Qr)),r=r.insert(t,n),e.Vu[e.currentUser.toKey()]=r}(r,e.batchId,n),await Wl(r,e.changes),await Sl(r.remoteStore)}catch(e){const t=Ll(e,"Failed to persist write");n.reject(t)}}function Hl(e,t,n){const r=Mr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const s=r.view.va(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=Mr(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.Sa)s.va(t)&&(r=!0)}),r&&function(e){e.Ca.forEach(e=>{e.next()})}(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zl(e,t){const n=Mr(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Mr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ss.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);Lr(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=go();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);Kl(n,r,null),ql(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wl(n,e)}catch(e){await Ns(e)}}async function Gl(e,t,n){const r=Mr(e);try{const e=await function(e,t){const n=Mr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Lr(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Kl(r,t,n),ql(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Wl(r,e)}catch(n){await Ns(n)}}function ql(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function Kl(e,t,n){const r=Mr(e);let s=r.Vu[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}async function Wl(e,t,n){const r=Mr(e),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((e,a)=>{o.push(r.pu(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){s.push(e);const t=Ha.As(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(e,t){const n=Mr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ss.forEach(t,t=>Ss.forEach(t.Es,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ss.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Cs(e))throw e;Ar("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,s)}}}(r.localStore,i))}async function Jl(e,t){const n=Mr(e);if(!n.currentUser.isEqual(t)){Ar("SyncEngine","User change. New user:",t.toKey());const e=await Ka(n.localStore,t);n.currentUser=t,function(e,t){e.mu.forEach(e=>{e.forEach(e=>{e.reject(new Fr(Ur.CANCELLED,t))})}),e.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Wl(n,e.Ls)}}class Xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new qa(e,t,n,r)}(this.persistence,new Ga,e.initialUser,this.serializer)}Cu(e){return new Fa(Ba.mi,this.serializer)}Du(e){return new Xa}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xl.provider={build:()=>new Xl};class Ql extends Xl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Lr(this.persistence.referenceDelegate instanceof $a,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ca(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?xa.withCacheSize(this.cacheSizeBytes):xa.DEFAULT;return new Fa(e=>$a.mi(e,t),this.serializer)}}class Yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jl.bind(null,this.syncEngine),await async function(e,t){const n=Mr(e);t?(n.Ea.delete(2),await bl(n)):t||(n.Ea.add(2),await xl(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ml}createDatastore(e){const t=cl(e.databaseInfo.databaseId),n=function(e){return new al(e)}(e.databaseInfo);return function(e,t,n,r){return new fl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,s){return new vl(e,t,n,r,s)}(this.localStore,this.datastore,e.asyncQueue,e=>Hl(this.syncEngine,e,0),Za.v()?new Za:new Qa)}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Bl(e,t,n,r,s,i);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Mr(e);Ar(yl,"RemoteStore shutting down."),t.Ea.add(5),await xl(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Yl.provider={build:()=>new Yl};
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
const Zl="FirestoreClient";class ec{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Tr.UNAUTHENTICATED,this.clientId=Xr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{Ar(Zl,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Ar(Zl,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(fe){const n=Ll(fe,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function tc(e,t){e.asyncQueue.verifyOperationInProgress(),Ar(Zl,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ka(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function nc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ar(Zl,"Using user provided OfflineComponentProvider");try{await tc(e,e._uninitializedComponentsProvider._offline)}catch(t){const r=t;if(!function(e){return"FirebaseError"===e.name?e.code===Ur.FAILED_PRECONDITION||e.code===Ur.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(r))throw r;Rr("Error using user provided cache. Falling back to memory cache: "+r),await tc(e,new Xl)}}else Ar(Zl,"Using default OfflineComponentProvider"),await tc(e,new Ql(void 0));return e._offlineComponents}(e);Ar(Zl,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Pl(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Pl(t.remoteStore,n)),e._onlineComponents=t}function rc(e){return async function(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ar(Zl,"Using user provided OnlineComponentProvider"),await nc(e,e._uninitializedComponentsProvider._online)):(Ar(Zl,"Using default OnlineComponentProvider"),await nc(e,new Yl))),e._onlineComponents}(e).then(e=>e.syncEngine)}
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
 */function sc(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const ic=new Map,oc="firestore.googleapis.com",ac=!0;
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
 */class lc{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new Fr(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oc,this.ssl=ac}else this.host=e.host,this.ssl=e.ssl??ac;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=ba;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fr(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Fr(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sc(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Fr(Ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Fr(Ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Fr(Ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Fr(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fr(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new $r;switch(e.type){case"firstParty":return new qr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Fr(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ic.get(e);t&&(Ar("ComponentProvider","Removing Datastore"),ic.delete(e),t.terminate())}(this),Promise.resolve()}}function uc(e,t,n,r={}){e=ds(e,cc);const s=Nt(t),i=e._getSettings(),o={...i,emulatorOptions:e._getEmulatorOptions()},a=`${t}:${n}`;s&&(St(`https://${a}`),_t("Firestore",!0)),i.host!==oc&&i.host!==a&&Rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!Pt(l,o)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Tr.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[ft(JSON.stringify({alg:"none",type:"JWT"})),ft(JSON.stringify(i)),""].join(".")}(r.mockUserToken,e._app?.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Fr(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Tr(s)}e._authCredentials=new Hr(new Br(t,n))}}
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
 */class hc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hc(this.firestore,e,this._query)}}class dc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dc(this.firestore,e,this._key)}toJSON(){return{type:dc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ms(t,dc._jsonSchema))return new dc(e,n||null,new ls(is.fromString(t.referencePath)))}}dc._jsonSchemaVersion="firestore/documentReference/1.0",dc._jsonSchema={type:ps("string",dc._jsonSchemaVersion),referencePath:ps("string")};class pc extends hc{constructor(e,t,n){super(e,t,function(e){return new Wi(e)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dc(this.firestore,null,new ls(e))}withConverter(e){return new pc(this.firestore,e,this._path)}}function mc(e,t,...n){if(e=Ut(e),1===arguments.length&&(t=Xr.newId()),function(e,t,n){if(!n)throw new Fr(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof cc){const r=is.fromString(t,...n);return cs(r),new dc(e,null,new ls(r))}{if(!(e instanceof dc||e instanceof pc))throw new Fr(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(is.fromString(t,...n));return cs(r),new dc(e.firestore,e instanceof pc?e.converter:null,new ls(r))}}
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
 */const fc="AsyncQueue";class gc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ul(this,"async_queue_retry"),this._c=()=>{const e=ll();e&&Ar(fc,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=ll();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ll();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(me){if(!Cs(me))throw me;Ar(fc,"Operation failed with retryable error: "+me)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,kr("INTERNAL UNHANDLED ERROR: ",yc(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Ol.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Dr(47125,{Pc:yc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yc(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class vc extends cc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new gc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gc(e),this._firestoreClient=void 0,await e}}}function bc(e){if(e._terminated)throw new Fr(Ur.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=function(e,t,n,r){return new Zs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,sc(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new ec(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
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
 */(e),e._firestoreClient}class xc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xc(Bs.fromBase64String(e))}catch(e){throw new Fr(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new xc(Bs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ms(e,xc._jsonSchema))return xc.fromBase64String(e.bytes)}}xc._jsonSchemaVersion="firestore/bytes/1.0",xc._jsonSchema={type:ps("string",xc._jsonSchemaVersion),bytes:ps("string")};
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
class wc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fr(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new as(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Ec{constructor(e){this._methodName=e}}
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
 */class Nc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fr(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fr(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Qr(this._lat,e._lat)||Qr(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nc._jsonSchemaVersion}}static fromJSON(e){if(ms(e,Nc._jsonSchema))return new Nc(e.latitude,e.longitude)}}Nc._jsonSchemaVersion="firestore/geoPoint/1.0",Nc._jsonSchema={type:ps("string",Nc._jsonSchemaVersion),latitude:ps("number"),longitude:ps("number")};
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
class Sc{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Sc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ms(e,Sc._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new Sc(e.vectorValues);throw new Fr(Ur.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sc._jsonSchemaVersion="firestore/vectorValue/1.0",Sc._jsonSchema={type:ps("string",Sc._jsonSchemaVersion),vectorValues:ps("object")};
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
const Cc=/^__.*__$/;class Tc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ho(e,this.data,this.fieldMask,t,this.fieldTransforms):new $o(e,this.data,t,this.fieldTransforms)}}function _c(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Dr(40011,{Ac:e})}}class Ic{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ic({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Fc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(_c(this.Ac)&&Cc.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class jc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||cl(e)}Cc(e,t,n,r=!1){return new Ic({Ac:e,methodName:t,Dc:n,path:as.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ac(e){const t=e._freezeSettings(),n=cl(e._databaseId);return new jc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function kc(e,t,n,r,s,i={}){const o=e.Cc(i.merge||i.mergeFields?2:0,t,n,s);Oc("Data must be an object, but it was:",o,r);const a=Pc(r,o);let l,c;if(i.merge)l=new Fs(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Lc(t,r,n);if(!o.contains(s))throw new Fr(Ur.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Vc(e,s)||e.push(s)}l=new Fs(e),c=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=o.fieldTransforms;return new Tc(new xi(a),l,c)}function Rc(e,t){if(Dc(e=Ut(e)))return Oc("Unsupported field value:",t,e),Pc(e,t);if(e instanceof Ec)return function(e,t){if(!_c(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Rc(s,t.wc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Ut(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ys.fromDate(e);return{timestampValue:ta(t.serializer,n)}}if(e instanceof ys){const n=new ys(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ta(t.serializer,n)}}if(e instanceof Nc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof xc)return{bytesValue:na(t.serializer,e._byteString)};if(e instanceof dc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ia(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Sc)return function(e,t){return{mapValue:{fields:{[ni]:{stringValue:ii},[oi]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Sc("VectorValues must only contain numeric values.");return vo(t.serializer,e)})}}}}}}(e,t);throw t.Sc(`Unsupported field value: ${hs(e)}`)}(e,t)}function Pc(e,t){const n={};return Ps(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rs(e,(e,r)=>{const s=Rc(r,t.mc(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Dc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ys||e instanceof Nc||e instanceof xc||e instanceof dc||e instanceof Ec||e instanceof Sc)}function Oc(e,t,n){if(!Dc(n)||!us(n)){const r=hs(n);throw"an object"===r?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function Lc(e,t,n){if((t=Ut(t))instanceof wc)return t._internalPath;if("string"==typeof t)return Uc(e,t);throw Fc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Mc=new RegExp("[~\\*/\\[\\]]");function Uc(e,t,n){if(t.search(Mc)>=0)throw Fc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new wc(...t.split("."))._internalPath}catch(r){throw Fc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fc(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Fr(Ur.INVALID_ARGUMENT,a+e+l)}function Vc(e,t){return e.some(e=>e.isEqual(t))}
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
 */class Bc{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new $c(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class $c extends Bc{data(){return super.data()}}function Hc(e,t){return"string"==typeof t?Uc(e,t):t instanceof wc?t._internalPath:t._delegate._internalPath}
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
 */class zc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gc extends Bc{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Hc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Fr(Ur.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gc._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Gc._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gc._jsonSchema={type:ps("string",Gc._jsonSchemaVersion),bundleSource:ps("string","DocumentSnapshot"),bundleName:ps("string"),bundle:ps("string")};class qc extends Gc{data(e={}){return super.data(e)}}class Kc{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new zc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new qc(this._firestore,this._userDataWriter,n.key,n,new zc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Fr(Ur.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new qc(e._firestore,e._userDataWriter,n.doc.key,n.doc,new zc(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new qc(e._firestore,e._userDataWriter,t.doc.key,t.doc,new zc(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Wc(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Fr(Ur.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kc._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xr.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Wc(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Dr(61501,{type:e})}}function Jc(e,t,n){e=ds(e,dc);const r=ds(e.firestore,vc),s=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return function(e,t){return function(e,t){const n=new Vr;return e.asyncQueue.enqueueAndForget(async()=>$l(await rc(e),t,n)),n.promise}(bc(e),t)}(r,[kc(Ac(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Do.none())])}Kc._jsonSchemaVersion="firestore/querySnapshot/1.0",Kc._jsonSchema={type:ps("string",Kc._jsonSchemaVersion),bundleSource:ps("string","QuerySnapshot"),bundleName:ps("string"),bundle:ps("string")},function(e,t=!0){!function(e){_r=e}(Zn),Wn(new Ft("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new vc(new zr(e.getProvider("auth-internal")),new Wr(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fr(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(e.options.projectId,t)}(s,n),s);return r={useFetchStreams:t,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),nr(Sr,Cr,e),nr(Sr,Cr,"esm2020")}();function Xc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
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
nr("firebase","12.5.0","app");const Qc=Xc,Yc=new kt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zc=new Wt("@firebase/auth");function eu(e,...t){Zc.logLevel<=Ht.ERROR&&Zc.error(`Auth (${Zn}): ${e}`,...t)}
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
 */function tu(e,...t){throw ou(e,...t)}function nu(e,...t){return ou(e,...t)}function ru(e,t,n){const r={...Qc(),[t]:n};return new kt("auth","Firebase",r).create(t,{appName:e.name})}function su(e){return ru(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iu(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&tu(e,"argument-error"),ru(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ou(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Yc.create(e,...t)}function au(e,t,...n){if(!e)throw ou(t,...n)}function lu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw eu(t),new Error(t)}function cu(e,t){e||lu(t)}
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
 */function uu(){return"undefined"!=typeof self&&self.location?.href||""}function hu(){return"undefined"!=typeof self&&self.location?.protocol||null}
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
 */function du(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==hu()&&"https:"!==hu()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class pu{constructor(e,t){this.shortDelay=e,this.longDelay=t,cu(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return du()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function mu(e,t){cu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class fu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void lu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void lu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void lu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const gu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},yu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vu=new pu(3e4,6e4);
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
 */function bu(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function xu(e,t,n,r,s={}){return wu(e,s,async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=Ot({key:e.config.apiKey,...i}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:a,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Nt(e.emulatorConfig.host)&&(l.credentials="include"),fu.fetch()(await Eu(e,e.config.apiHost,n,o),l)})}async function wu(e,t,n){e._canInitEmulator=!1;const r={...gu,...t};try{const t=new Nu(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Su(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Su(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Su(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Su(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ru(e,a,o);tu(e,a)}}catch(me){if(me instanceof At)throw me;tu(e,"network-request-failed",{message:String(me)})}}async function Eu(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?mu(e.config,s):`${e.config.apiScheme}://${s}`;if(yu.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}class Nu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(nu(this.auth,"network-request-failed")),vu.get())})}}function Su(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nu(e,t,r);return s.customData._tokenResponse=n,s}
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
 */async function Cu(e,t){return xu(e,"POST","/v1/accounts:lookup",t)}
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
 */function Tu(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(me){}}function _u(e){return 1e3*Number(e)}function Iu(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const e=gt(n);return e?JSON.parse(e):(eu("Failed to decode base64 JWT payload"),null)}catch(me){return eu("Caught error parsing JWT payload as JSON",me?.toString()),null}}function ju(e){const t=Iu(e);return au(t,"internal-error"),au(void 0!==t.exp,"internal-error"),au(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Au(e,t,n=!1){if(n)return t;try{return await t}catch(me){throw me instanceof At&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(me)&&e.auth.currentUser===e&&await e.auth.signOut(),me}}class ku{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(me){return void("auth/network-request-failed"===me?.code&&this.schedule(!0))}this.schedule()}}
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
 */class Ru{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tu(this.lastLoginAt),this.creationTime=Tu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Pu(e){const t=e.auth,n=await e.getIdToken(),r=await Au(e,Cu(t,{idToken:n}));au(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Du(s.providerUserInfo):[],o=function(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,i),a=e.isAnonymous,l=!(e.email&&s.passwordHash||o?.length),c=!!a&&l,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ru(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,u)}function Du(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class Ou{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){au(e.idToken,"internal-error"),au(void 0!==e.idToken,"internal-error"),au(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){au(0!==e.length,"internal-error");const t=ju(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(au(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await async function(e,t){const n=await wu(e,{},async()=>{const n=Ot({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=await Eu(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&Nt(e.emulatorConfig.host)&&(a.credentials="include"),fu.fetch()(i,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Ou;return n&&(au("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(au("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(au("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ou,this.toJSON())}_performRefresh(){return lu("not implemented")}}
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
 */function Lu(e,t){au("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Mu{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new ku(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ru(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Au(this,this.stsTokenManager.getToken(this.auth,e));return au(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ut(e),r=await n.getIdToken(t),s=Iu(r);au(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Tu(_u(s.auth_time)),issuedAtTime:Tu(_u(s.iat)),expirationTime:Tu(_u(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Ut(e);await Pu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(au(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mu({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){au(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Pu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(su(this.auth));const e=await this.getIdToken();return await Au(this,async function(e,t){return xu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:p,stsTokenManager:m}=t;au(u&&m,e,"internal-error");const f=Ou.fromJSON(this.name,m);au("string"==typeof u,e,"internal-error"),Lu(n,e.name),Lu(r,e.name),au("boolean"==typeof h,e,"internal-error"),au("boolean"==typeof d,e,"internal-error"),Lu(s,e.name),Lu(i,e.name),Lu(o,e.name),Lu(a,e.name),Lu(l,e.name),Lu(c,e.name);const g=new Mu({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:i,phoneNumber:s,tenantId:o,stsTokenManager:f,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ou;r.updateFromServerResponse(t);const s=new Mu({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Pu(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];au(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?Du(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||s?.length),o=new Ou;o.updateFromIdToken(n);const a=new Mu({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Ru(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||s?.length)};return Object.assign(a,l),a}}
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
 */const Uu=new Map;function Fu(e){cu(e instanceof Function,"Expected a class definition");let t=Uu.get(e);return t?(cu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Uu.set(e,t),t)}
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
 */class Vu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vu.type="NONE";const Bu=Vu;
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
 */function $u(e,t,n){return`firebase:${e}:${t}:${n}`}class Hu{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=$u(this.userKey,r.apiKey,s),this.fullPersistenceKey=$u("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Cu(this.auth,{idToken:e}).catch(()=>{});return t?Mu._fromGetAccountInfoResponse(this.auth,t,e):null}return Mu._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Hu(Fu(Bu),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=r[0]||Fu(Bu);const i=$u(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){let n;if("string"==typeof t){const r=await Cu(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Mu._fromGetAccountInfoResponse(e,r,t)}else n=Mu._fromJSON(e,t);l!==s&&(o=n),s=l;break}}catch{}const a=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new Hu(s,e,n)):new Hu(s,e,n)}}
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
 */function zu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xu(t))return"Blackberry";if(Qu(t))return"Webos";if(qu(t))return"Safari";if((t.includes("chrome/")||Ku(t))&&!t.includes("edge/"))return"Chrome";if(Ju(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Gu(e=It()){return/firefox\//i.test(e)}function qu(e=It()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ku(e=It()){return/crios\//i.test(e)}function Wu(e=It()){return/iemobile/i.test(e)}function Ju(e=It()){return/android/i.test(e)}function Xu(e=It()){return/blackberry/i.test(e)}function Qu(e=It()){return/webos/i.test(e)}function Yu(e=It()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Zu(){return function(){const e=It();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function eh(e=It()){return Yu(e)||Ju(e)||Qu(e)||Xu(e)||/windows phone/i.test(e)||Wu(e)}
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
 */function th(e,t=[]){let n;switch(e){case"Browser":n=zu(It());break;case"Worker":n=`${zu(It())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${r}`}
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
 */class nh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(me){r(me)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(me){t.reverse();for(const n of t)try{n()}catch(Oe){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:me?.message})}}}
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
 */class rh{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
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
 */class sh{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new nh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fu(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Hu.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(me){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Cu(this,{idToken:e}),n=await Mu._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Xn(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,s=n?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==s||!i?.user||(n=i.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(me){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(me))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return au(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(me){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pu(e)}catch(me){if("auth/network-request-failed"!==me?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(su(this));const t=e?Ut(e):null;return t&&au(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&au(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(su(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(su(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fu(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return xu(e,"GET","/v2/passwordPolicy",bu(e,t))}
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
 */(this),t=new rh(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return xu(e,"POST","/v2/accounts:revokeToken",bu(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fu(e)||this._popupRedirectResolver;au(t,this,"argument-error"),this.redirectPersistenceManager=await Hu.create(this,[Fu(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(au(o,this,"internal-error"),o.then(()=>{i||s(this.currentUser)}),"function"==typeof t){const s=e.addObserver(t,n,r);return()=>{i=!0,s()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return au(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){Zc.logLevel<=Ht.WARN&&Zc.warn(`Auth (${Zn}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ih(e){return Ut(e)}class oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Lt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return au(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lh(e,t,n){const r=ih(e);au(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!n?.disableWarnings,i=ch(t),{host:o,port:a}=function(e){const t=ch(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:uh(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:uh(t)}}}(t),l=null===a?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return au(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void au(Pt(c,r.config.emulator)&&Pt(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Nt(o)?(St(`${i}//${o}${l}`),_t("Auth",!0)):s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ch(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function uh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class hh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lu("not implemented")}_getIdTokenResponse(e){return lu("not implemented")}_linkToIdToken(e,t){return lu("not implemented")}_getReauthenticationResolver(e){return lu("not implemented")}}
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
 */async function dh(e,t){return async function(e,t,n,r,s={}){const i=await xu(e,t,n,r,s);return"mfaPendingCredential"in i&&tu(e,"multi-factor-auth-required",{_serverResponse:i}),i}(e,"POST","/v1/accounts:signInWithIdp",bu(e,t))}
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
 */class ph extends hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ph(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tu("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=t;if(!n||!r)return null;const i=new ph(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return dh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}}
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
 */class mh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class fh extends mh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class gh extends fh{constructor(){super("facebook.com")}static credential(e){return ph._fromParams({providerId:gh.PROVIDER_ID,signInMethod:gh.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gh.credentialFromTaggedObject(e)}static credentialFromError(e){return gh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gh.credential(e.oauthAccessToken)}catch{return null}}}gh.FACEBOOK_SIGN_IN_METHOD="facebook.com",gh.PROVIDER_ID="facebook.com";
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
class yh extends fh{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ph._fromParams({providerId:yh.PROVIDER_ID,signInMethod:yh.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yh.credentialFromTaggedObject(e)}static credentialFromError(e){return yh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return yh.credential(t,n)}catch{return null}}}yh.GOOGLE_SIGN_IN_METHOD="google.com",yh.PROVIDER_ID="google.com";
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
class vh extends fh{constructor(){super("github.com")}static credential(e){return ph._fromParams({providerId:vh.PROVIDER_ID,signInMethod:vh.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vh.credentialFromTaggedObject(e)}static credentialFromError(e){return vh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vh.credential(e.oauthAccessToken)}catch{return null}}}vh.GITHUB_SIGN_IN_METHOD="github.com",vh.PROVIDER_ID="github.com";
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
class bh extends fh{constructor(){super("twitter.com")}static credential(e,t){return ph._fromParams({providerId:bh.PROVIDER_ID,signInMethod:bh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bh.credentialFromTaggedObject(e)}static credentialFromError(e){return bh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return bh.credential(t,n)}catch{return null}}}bh.TWITTER_SIGN_IN_METHOD="twitter.com",bh.PROVIDER_ID="twitter.com";
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
class xh{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Mu._fromIdTokenResponse(e,n,r),i=wh(n);return new xh({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=wh(n);return new xh({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function wh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Eh extends At{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Eh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Eh(e,t,n,r)}}function Nh(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Eh._fromErrorAndOperation(e,n,t,r);throw n})}const Sh="__sak";
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
 */class Ch{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sh,"1"),this.storage.removeItem(Sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Th extends Ch{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Zu()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Th.type="LOCAL";const _h=Th;
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
 */class Ih extends Ch{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ih.type="SESSION";const jh=Ih;
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
class Ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ah(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,s)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function kh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ah.receivers=[];class Rh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((o,a)=>{const l=kh("",20);r.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
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
 */function Ph(){return window}
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
function Dh(){return void 0!==Ph().WorkerGlobalScope&&"function"==typeof Ph().importScripts}
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
const Oh="firebaseLocalStorageDb",Lh="firebaseLocalStorage",Mh="fbase_key";class Uh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fh(e,t){return e.transaction([Lh],t?"readwrite":"readonly").objectStore(Lh)}function Vh(){const e=indexedDB.open(Oh,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Lh,{keyPath:Mh})}catch(me){n(me)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Lh)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Oh);return new Uh(e).toPromise()}(),t(await Vh()))})})}async function Bh(e,t,n){const r=Fh(e,!0).put({[Mh]:t,value:n});return new Uh(r).toPromise()}function $h(e,t){const n=Fh(e,!0).delete(t);return new Uh(n).toPromise()}class Hh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Vh()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(me){if(t++>3)throw me;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(Dh()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Rh(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await Bh(e,Sh,"1"),await $h(e,Sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Fh(e,!1).get(t),r=await new Uh(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$h(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Fh(e,!1).getAll();return new Uh(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Hh.type="LOCAL";const zh=Hh;
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
function Gh(e,t){return t?Fu(t):(au(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new pu(3e4,6e4);class qh extends hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kh(e){
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
return async function(e,t,n=!1){if(Xn(e.app))return Promise.reject(su(e));const r="signIn",s=await Nh(e,r,t),i=await xh._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}(e.auth,new qh(e),e.bypassAuthState)}function Wh(e){const{auth:t,user:n}=e;return au(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e;if(Xn(r.app))return Promise.reject(su(r));const s="reauthenticate";try{const i=await Au(e,Nh(r,s,t,e),n);au(i.idToken,r,"internal-error");const o=Iu(i.idToken);au(o,r,"internal-error");const{sub:a}=o;return au(e.uid===a,r,"user-mismatch"),xh._forOperation(e,s,i)}catch(me){throw"auth/user-not-found"===me?.code&&tu(r,"user-mismatch"),me}}(n,new qh(e),e.bypassAuthState)}async function Jh(e){const{auth:t,user:n}=e;return au(n,t,"internal-error"),async function(e,t,n=!1){const r=await Au(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xh._forOperation(e,"link",r)}(n,new qh(e),e.bypassAuthState)}
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
 */class Xh{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(me){this.reject(me)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(me){this.reject(me)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kh;case"linkViaPopup":case"linkViaRedirect":return Jh;case"reauthViaPopup":case"reauthViaRedirect":return Wh;default:tu(this.auth,"internal-error")}}resolve(e){cu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Qh=new pu(2e3,1e4);class Yh extends Xh{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Yh.currentPopupAction&&Yh.currentPopupAction.cancel(),Yh.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return au(e,this.auth,"internal-error"),e}async onExecution(){cu(1===this.filter.length,"Popup operations only handle one event");const e=kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(nu(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yh.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nu(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Qh.get())};e()}}Yh.currentPopupAction=null;
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
const Zh=new Map;class ed extends Xh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Zh.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=rd(t),r=nd(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(me){e=()=>Promise.reject(me)}Zh.set(this.auth._key(),e)}return this.bypassAuthState||Zh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function td(e,t){Zh.set(e._key(),t)}function nd(e){return Fu(e._redirectPersistence)}function rd(e){return $u("pendingRedirect",e.config.apiKey,e.name)}
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
 */function sd(e,t,n){return async function(e,t,n){if(Xn(e.app))return Promise.reject(su(e));const r=ih(e);iu(e,t,mh),await r._initializationPromise;const s=Gh(r,n);return await async function(e,t){return nd(e)._set(rd(t),"true")}(s,r),s._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function id(e,t,n=!1){if(Xn(e.app))return Promise.reject(su(e));const r=ih(e),s=Gh(r,t),i=new ed(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class od{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ld(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ld(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nu(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ad(e))}saveEventToCache(e){this.cachedEventUids.add(ad(e)),this.lastProcessedEventTime=Date.now()}}function ad(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ld({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
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
const cd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ud=/^https?/;async function hd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return xu(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(dd(n))return}catch{}tu(e,"unauthorized-domain")}function dd(e){const t=uu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!ud.test(n))return!1;if(cd.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
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
 */const pd=new pu(3e4,6e4);function md(){const e=Ph().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function fd(e){return new Promise((t,n)=>{function r(){md(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{md(),n(nu(e,"network-request-failed"))},timeout:pd.get()})}if(Ph().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Ph().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ph()[t]=()=>{gapi.load?r():n(nu(e,"network-request-failed"))},(s=`${ah.gapiScript}?onload=${t}`,ah.loadJS(s)).catch(e=>n(e))}r()}var s}).catch(e=>{throw gd=null,e})}let gd=null;
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
const yd=new pu(5e3,15e3),vd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xd(e){const t=e.config;au(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?mu(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Zn},s=bd.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ot(r).slice(1)}`}async function wd(e){const t=await function(e){return gd=gd||fd(e),gd}(e),n=Ph().gapi;return au(n,e,"internal-error"),t.open({where:document.body,url:xd(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vd,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=nu(e,"network-request-failed"),i=Ph().setTimeout(()=>{r(s)},yd.get());function o(){Ph().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{r(s)})}))}
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
 */const Ed={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(me){}}}function Sd(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Ed,width:r.toString(),height:s.toString(),top:i,left:o},c=It().toLowerCase();n&&(a=Ku(c)?"_blank":n),Gu(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=It()){return Yu(e)&&!!window.navigator?.standalone}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Nd(null);const h=window.open(t||"",a,u);au(h,e,"popup-blocked");try{h.focus()}catch(me){}return new Nd(h)}const Cd="__/auth/handler",Td="emulator/auth/handler",_d=encodeURIComponent("fac");async function Id(e,t,n,r,s,i){au(e.config.authDomain,e,"auth-domain-config-required"),au(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zn,eventId:s};if(t instanceof mh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof fh){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))void 0===a[u]&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${_d}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Cd}`;return mu(e,Td)}
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
 */(e)}?${Ot(a).slice(1)}${c}`}const jd="webStorageSupport";const Ad=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jh,this._completeRedirectFn=id,this._overrideRedirectResult=td}async _openPopup(e,t,n,r){cu(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Sd(e,await Id(e,t,n,uu(),r),kh())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Ph().location.href=e}(await Id(e,t,n,uu(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(cu(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await wd(e),n=new od(e);return t.register("authEvent",t=>{au(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(jd,{type:jd},n=>{const r=n?.[0]?.[jd];void 0!==r&&t(!!r),tu(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eh()||qu()||Yu()}};var kd="@firebase/auth",Rd="1.11.1";
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
class Pd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){au(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Dd=wt("authIdTokenMaxAge")||300;let Od=null;var Ld;!function(e){ah=e}({loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=nu("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Ld="Browser",Wn(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;au(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:Ld,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(Ld)},l=new sh(n,r,s,a);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Fu);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Wn(new Ft("auth-internal",e=>(e=>new Pd(e))(ih(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),nr(kd,Rd,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Ld)),nr(kd,Rd,"esm2020");const Md={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:Md.apiKey?"✅ Configurado":"❌ Faltando",authDomain:Md.authDomain,projectId:Md.projectId});const Ud=er(Md),Fd=function(e=tr()){const t=Jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
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
function(e,t){const n=Jn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Pt(n.getOptions(),t??{}))return e;tu(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ad,persistence:[zh,_h,jh]}),r=wt("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Dd)return;const r=t?.token;Od!==r&&(Od=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Ut(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){Ut(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var s;const i=bt("auth");return i&&lh(n,`http://${i}`),n}(Ud),Vd=new yh;Vd.addScope("email"),Vd.addScope("profile");const Bd=function(e,t){const n="object"==typeof e?e:tr(),r="string"==typeof e?e:t||ei,s=Jn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(e=>{const t=bt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&uc(s,...e)}return s}(Ud);const $d={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:$d.getBaseURL(),authSignup:$d.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[$d.auth.signup,$d.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const Hd=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,n){if(Xn(e.app))return Promise.reject(nu(e,"operation-not-supported-in-this-environment"));const r=ih(e);iu(e,t,mh);const s=Gh(r,n);return new Yh(r,"signInViaPopup",t,s).executeNotNull()}(Fd,Vd),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await sd(Fd,Vd)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await ih(e)._initializationPromise,id(e,t,!1)}(Fd);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=Fd.currentUser,n=t?await t.getIdToken():null,r=await fetch($d.auth.login,{method:"POST",headers:{"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!r.ok)return this.createUserInBackend(e);const s=await r.json();return console.log("✅ Usuário sincronizado com backend"),s}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch($d.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return Ut(e).signOut()}(Fd),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return Fd.currentUser}onAuthStateChange(e){return Fd.onAuthStateChanged(e)}};const zd=new class{getBaseURL(){const e=$d.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((n,r)=>{const s=new XMLHttpRequest,i=$d.auth.login;s.open("POST",i,!0),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("Cache-Control","no-cache"),s.onreadystatechange=function(){if(4===s.readyState)if(console.log("🔍 XHR Status:",s.status),console.log("🔍 XHR Response:",s.responseText),200===s.status)try{const e=JSON.parse(s.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),n(e.user)}catch(e){r(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(s.responseText);r(new Error(e.message||"Erro no login"))}catch(e){r(new Error("Credenciais inválidas"))}},s.onerror=function(){r(new Error("Erro de conexão"))},s.ontimeout=function(){r(new Error("Timeout na conexão"))},s.timeout=1e4;const o=JSON.stringify({email:e,password:t});s.send(o)})}catch(n){throw console.error("❌ Erro no login alternativo:",n),n}}async login(e,t){try{const r=$d.auth.login;console.log("🔐 Login attempt:",{email:e,url:r});const s=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",s);const i=new AbortController,o=setTimeout(()=>i.abort(),1e4),a=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:s,signal:i.signal});if(clearTimeout(o),console.log("📡 Response status:",a.status),console.log("📡 Response ok:",a.ok),console.log("📡 Response headers:",Object.fromEntries(a.headers.entries())),!a.ok){const e=await a.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",a.status),console.error("❌ Error response statusText:",a.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(n){t=e||t}throw 401===a.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await a.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(n){throw console.error("❌ Failed to parse response JSON:",n),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(r){if(console.error("❌ Erro no login completo:",r),"AbortError"===r.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===r.name&&r.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw r}}async register(e,t,n){try{this.clearPlanData();const r=$d.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:r});const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})});if(!s.ok){const e=await s.json();throw new Error(e.message||"Falha no registro")}return(await s.json()).user}catch(r){throw console.error("Erro no registro:",r),r}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await Hd.loginWithPopup(),t=await Hd.syncWithBackend(e),n={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(n)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",n),n}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await Hd.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await Hd.handleRedirectResult();if(!e)return null;const t=await Hd.syncWithBackend(e),n={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(n)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),n}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await Hd.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const n={basic:0,professional:1,premium:2};return n[t.type]>=n[e]}isAdmin(){const e=this.getCurrentUser();return"admin"===e?.role}},Gd=()=>{const[t,n]=e.useState(null),[r,s]=e.useState(!0),[i,o]=e.useState(null),[a,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=zd.getCurrentUser(),t=zd.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),n(e),l(t),e){const e=zd.getUserPlan();console.log("📋 useAuth - Plano do usuário:",e),o(e)}else o(null);s(!1)},[]);return{user:t,loading:r,plan:i,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await zd.logout(),n(null),o(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),zd.updateUserPlan(e),o(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=zd.getCurrentUser(),t=zd.isAuthenticated();n(e),l(t),o(e?zd.getUserPlan():null)},isAuthenticated:a,isAdmin:zd.isAdmin(),checkPlanAccess:e=>zd.checkPlanAccess(e)}},qd=()=>{const t=r(),{user:n}=Gd();return e.useEffect(()=>{const e=new URLSearchParams(window.location.search),r=e.get("external_reference"),s=e.get("collection_status");if(r&&"approved"===s&&n?.id){const[e]=r.split("_"),s=new Date;let i="monthly";const o=new Date(s);o.setDate(s.getDate()+30),async function({userId:e,planId:t,period:n,startDate:r,expirationDate:s}){try{return await Jc(mc(Bd,"userPlans",e),{planId:t,period:n,startDate:r,expirationDate:s,updatedAt:(new Date).toISOString()}),!0}catch(i){return console.error("Erro ao salvar plano no Firestore:",i),!1}}({userId:n.id,planId:e,period:i,startDate:s.toISOString(),expirationDate:o.toISOString()}),ct.success("Pagamento aprovado! Plano ativado."),setTimeout(()=>{t("/")},2e3)}else ct.error("Não foi possível ativar o plano."),setTimeout(()=>{t("/payment")},2e3)},[t,n]),se.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen",children:[se.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Processando pagamento..."}),se.jsx("p",{children:"Aguarde, estamos ativando seu plano."})]})},Kd=()=>se.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[se.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),se.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),se.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),se.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),se.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[se.jsxs(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[se.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:se.jsx(h,{className:"w-10 h-10 text-white"})}),se.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),se.jsxs(u.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",se.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",se.jsx("br",{}),se.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[se.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[se.jsx(d,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),se.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),se.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),se.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[se.jsx(p,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),se.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),se.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),se.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[se.jsx(h,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),se.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),se.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[se.jsx(s,{to:"/login",children:se.jsxs(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",se.jsx(m,{className:"w-5 h-5"})]})}),se.jsx(s,{to:"/login?mode=signup",children:se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),Wd=()=>{const[t,n]=e.useState(""),[s,o]=e.useState(""),[a,l]=e.useState(""),[c,h]=e.useState(!0),[d,p]=e.useState(!1),[m,w]=e.useState(!1),E=r(),[N]=i(),{refreshAuth:S}=Gd();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",N.get("mode")),console.log("authService.isAuthenticated():",zd.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await zd.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),ct.success(`Bem-vindo, ${e.name}! 🎉`),void E("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),ct.error("Erro ao processar login Google")}})();const e=N.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void h(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[E,N]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",m),se.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[se.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[se.jsx(u.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),se.jsx(u.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),se.jsx(u.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),se.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[se.jsxs("div",{className:"text-center mb-10",children:[se.jsx(u.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:se.jsx("span",{className:"text-3xl",children:"💰"})}),se.jsx(u.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),se.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&se.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),se.jsxs(u.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[se.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&s&&(c||a)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?s.length<6?(ct.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&a.length<2&&(ct.error("O nome deve ter pelo menos 2 caracteres"),1)):(ct.error("Por favor, insira um e-mail válido"),0):(ct.error("Por favor, preencha todos os campos"),0)){w(!0);try{if(c){let e=!1,i=null;try{console.log("🔄 Tentando login principal..."),i=await zd.login(t,s),e=!0}catch(n){console.log("❌ Login principal falhou:",n.message),console.log("🔄 Tentando método alternativo...");try{i=await zd.loginAlternative(t,s),e=!0,console.log("✅ Login alternativo funcionou!")}catch(r){throw console.error("❌ Login alternativo também falhou:",r.message),r}}e&&i&&(localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),ct.success("Login realizado com sucesso!"),E("/dashboard"))}else await zd.register(a,t,s),ct.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),E("/dashboard")}catch(i){console.error("Auth error:",i);const e=i.message||"Erro inesperado. Tente novamente";ct.error(e)}finally{w(!1)}}},className:"space-y-6",children:[!c&&se.jsxs("div",{children:[se.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),se.jsxs("div",{className:"relative",children:[se.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:se.jsx(f,{className:"h-5 w-5 text-gray-400"})}),se.jsx("input",{id:"name",type:"text",value:a,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),se.jsxs("div",{children:[se.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),se.jsxs("div",{className:"relative",children:[se.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:se.jsx(g,{className:"h-5 w-5 text-gray-400"})}),se.jsx("input",{id:"email",type:"email",value:t,onChange:e=>n(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),se.jsxs("div",{children:[se.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),se.jsxs("div",{className:"relative",children:[se.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:se.jsx(y,{className:"h-5 w-5 text-gray-400"})}),se.jsx("input",{id:"password",type:d?"text":"password",value:s,onChange:e=>o(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),se.jsx("button",{type:"button",onClick:()=>p(!d),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:d?se.jsx(v,{className:"h-5 w-5"}):se.jsx(b,{className:"h-5 w-5"})})]})]}),se.jsx(u.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:m,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:m?se.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):se.jsxs(se.Fragment,{children:[c?se.jsx(x,{className:"h-5 w-5"}):se.jsx(f,{className:"h-5 w-5"}),se.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),se.jsxs("div",{className:"mt-6",children:[se.jsxs("div",{className:"relative",children:[se.jsx("div",{className:"absolute inset-0 flex items-center",children:se.jsx("div",{className:"w-full border-t border-gray-300/30"})}),se.jsx("div",{className:"relative flex justify-center text-sm",children:se.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),se.jsxs(u.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(m)return;w(!0);const e=ct.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await zd.loginWithGoogle();ct.dismiss(e),ct.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),E("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),ct.dismiss(e);let n="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?n="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?n="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(n="Erro de conexão. Verifique sua internet"),ct.error(n)}finally{w(!1)}},disabled:m,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[se.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[se.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),se.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),se.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),se.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),se.jsx("span",{children:"Continuar com Google"})]})]}),c&&se.jsx("div",{className:"mt-6 text-center",children:se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>E("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),se.jsxs("div",{className:"mt-8 text-center",children:[se.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>h(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},Jd=()=>(console.log("LoginSimple carregando..."),se.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[se.jsx("h1",{children:"LOGIN SIMPLES"}),se.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),se.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[se.jsxs("div",{style:{marginBottom:"15px"},children:[se.jsx("label",{children:"Email:"}),se.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),se.jsxs("div",{style:{marginBottom:"15px"},children:[se.jsx("label",{children:"Senha:"}),se.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),se.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]})),Xd=()=>{const[t,n]=e.useState("test@teste.com"),[r,s]=e.useState("123456"),[i,o]=e.useState(!1);console.log("🔥 LOGIN ALTERNATIVO - baseURL:",$d.getBaseURL()),console.log("🔥 LOGIN ALTERNATIVO - loginURL:",$d.auth.login);return se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:se.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full max-w-md",children:[se.jsx("h1",{className:"text-3xl font-bold text-white mb-6 text-center",children:"🔧 Login Alternativo"}),se.jsxs("div",{className:"mb-6",children:[se.jsxs("p",{className:"text-white/80 text-sm mb-4",children:["API: ",se.jsx("code",{className:"bg-black/30 px-2 py-1 rounded text-green-300",children:$d.getBaseURL()})]}),se.jsxs("div",{className:"flex gap-2 mb-4",children:[se.jsx("button",{onClick:async()=>{try{const e=await fetch($d.getBaseURL());if(e.ok){const t=await e.text();Fe.success(`Backend conectado: ${t}`)}}catch(e){Fe.error(`Erro de conexão: ${e.message}`)}},className:"bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors",children:"✅ Testar Conexão"}),se.jsx("button",{onClick:async()=>{try{const e=$d.auth.signup;console.log("📝 Criando usuário em:",e);const t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Usuário Teste",email:"test@teste.com",password:"123456"})}),n=await t.json();t.ok?Fe.success("Usuário teste criado com sucesso!"):Fe.error(n.message||"Erro ao criar usuário")}catch(e){Fe.error(`Erro: ${e.message}`)}},className:"bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors",children:"👤 Criar User Teste"})]})]}),se.jsxs("form",{onSubmit:async e=>{e.preventDefault(),o(!0);try{Fe.loading("Tentando login...");const e=$d.auth.login;console.log("🔐 Fazendo login em:",e);const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})}),s=await n.json();n.ok?(Fe.success("Login realizado com sucesso!"),localStorage.setItem("token",s.access_token),localStorage.setItem("user",JSON.stringify(s.user)),window.location.href="/dashboard"):Fe.error(s.message||"Erro no login")}catch(n){console.error("Login error:",n),Fe.error(`Erro de conexão: ${n.message}`)}finally{o(!1)}},className:"space-y-4",children:[se.jsxs("div",{children:[se.jsx("label",{className:"block text-white/80 text-sm font-medium mb-2",children:"Email"}),se.jsx("input",{type:"email",value:t,onChange:e=>n(e.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"seu@email.com",required:!0})]}),se.jsxs("div",{children:[se.jsx("label",{className:"block text-white/80 text-sm font-medium mb-2",children:"Senha"}),se.jsx("input",{type:"password",value:r,onChange:e=>s(e.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"sua senha",required:!0})]}),se.jsx("button",{type:"submit",disabled:i,className:"w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors",children:i?"🔄 Entrando...":"🚀 Entrar"})]}),se.jsxs("div",{className:"mt-6 pt-6 border-t border-white/20",children:[se.jsx("p",{className:"text-white/60 text-sm text-center mb-3",children:"Outros testes:"}),se.jsxs("div",{className:"flex gap-2",children:[se.jsx("a",{href:"/login",className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center",children:"🔐 Login OAuth"}),se.jsx("a",{href:"/debug",className:"flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center",children:"🔧 Debug"})]})]})]})})},Qd=()=>{const t=r(),[n]=i();return e.useEffect(()=>{(async()=>{const e=n.get("token"),r=n.get("user");if(n.get("error"))return ct.error("Erro no login com Google. Tente novamente."),void t("/login");if(e&&r)try{const n=JSON.parse(decodeURIComponent(r));localStorage.setItem("accessToken",e),localStorage.setItem("currentUser",JSON.stringify(n)),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),ct.success("Login com Google realizado com sucesso!"),t("/dashboard")}catch(s){console.error("Erro ao processar callback:",s),ct.error("Erro ao processar login. Tente novamente."),t("/login")}else ct.error("Dados de login inválidos."),t("/login")})()},[t,n]),se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center",children:se.jsxs("div",{className:"text-center",children:[se.jsx("div",{className:"w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"}),se.jsx("p",{className:"text-white text-lg",children:"Processando login com Google..."})]})})};function Yd(...e){return e.filter(e=>"string"==typeof e&&e).join(" ")}const Zd=({children:e,className:t,padding:n="md"})=>se.jsx("div",{className:Yd("bg-white rounded-lg border border-gray-200 shadow-sm",{none:"p-0",sm:"p-4",md:"p-6",lg:"p-8"}[n],t),children:e}),ep=({className:e,variant:t="default",size:n="md",loading:r,children:s,disabled:i,...o})=>se.jsxs("button",{className:Yd("inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",{default:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-green-500",ghost:"text-gray-600 hover:bg-gray-100 focus:ring-green-500"}[t],{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"}[n],e),disabled:i||r,...o,children:[r&&se.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[se.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),se.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s]}),tp=({className:e,type:t,label:n,error:r,startIcon:s,endIcon:i,...o})=>se.jsxs("div",{className:"w-full",children:[n&&se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:n}),se.jsxs("div",{className:"relative",children:[s&&se.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:se.jsx("div",{className:"h-5 w-5 text-gray-400",children:s})}),se.jsx("input",{type:t,className:Yd("flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",s?"pl-10":"",i?"pr-10":"",r?"border-red-500 focus:ring-red-600":"",e),...o}),i&&se.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:se.jsx("div",{className:"h-5 w-5 text-gray-400",children:i})})]}),r&&se.jsx("p",{className:"mt-1 text-sm text-red-600",children:r})]}),np=()=>{const t=r(),[n,s]=e.useState(""),[i,o]=e.useState(!1),[a,l]=e.useState(!1),c=()=>{t("/login")};return a?se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:se.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:se.jsxs(Zd,{className:"p-8 text-center",children:[se.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:se.jsx(w,{className:"w-16 h-16 text-green-500 mx-auto"})}),se.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Email Enviado!"}),se.jsxs("p",{className:"text-gray-300 mb-6",children:["Enviamos um link de recuperação para ",se.jsx("strong",{children:n}),". Verifique sua caixa de entrada e siga as instruções para redefinir sua senha."]}),se.jsxs("div",{className:"space-y-4",children:[se.jsxs(ep,{onClick:c,variant:"outline",className:"w-full",children:[se.jsx(E,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]}),se.jsx("p",{className:"text-sm text-gray-400",children:"Não recebeu o email? Verifique sua pasta de spam ou tente novamente em alguns minutos."}),se.jsxs("div",{className:"mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700",children:[se.jsxs("p",{className:"text-xs text-blue-300 mb-2",children:[se.jsx("strong",{children:"Demonstração:"})," Clique no link abaixo para simular o acesso via email"]}),se.jsx("button",{onClick:()=>t("/reset-password?token=demo-token-123"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm underline",children:"Redefinir Senha (Demo)"})]})]})]})})}):se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:se.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:se.jsxs(Zd,{className:"p-8",children:[se.jsxs("div",{className:"text-center mb-8",children:[se.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:se.jsx(g,{className:"w-12 h-12 text-blue-400 mx-auto"})}),se.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Esqueci a Senha"}),se.jsx("p",{className:"text-gray-300",children:"Digite seu email para receber um link de recuperação de senha"})]}),se.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!n)return void Fe.error("Por favor, insira seu email");if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){o(!0);try{await new Promise(e=>setTimeout(e,2e3)),l(!0),Fe.success("Email de recuperação enviado com sucesso!")}catch(t){Fe.error("Erro ao enviar email de recuperação")}finally{o(!1)}}else Fe.error("Por favor, insira um email válido")},className:"space-y-6",children:[se.jsx("div",{children:se.jsx(tp,{type:"email",placeholder:"Digite seu email",value:n,onChange:e=>s(e.target.value),disabled:i,className:"w-full"})}),se.jsxs(ep,{type:"submit",disabled:i||!n,className:"w-full",children:[i?se.jsx(u.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):se.jsx(N,{className:"w-4 h-4 mr-2"}),i?"Enviando...":"Enviar Link de Recuperação"]}),se.jsxs(ep,{type:"button",variant:"outline",onClick:c,className:"w-full",children:[se.jsx(E,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]}),se.jsx("div",{className:"mt-6 text-center",children:se.jsxs("p",{className:"text-sm text-gray-400",children:["Lembrou da senha?"," ",se.jsx("button",{onClick:c,className:"text-blue-400 hover:text-blue-300 font-medium transition-colors",children:"Faça login aqui"})]})})]})})})},rp=()=>{const t=r(),[n]=i(),[s,o]=e.useState(""),[a,l]=e.useState(""),[c,h]=e.useState(!1),[d,p]=e.useState(!1),[m,f]=e.useState(!1),[g,x]=e.useState(!0),[N,C]=e.useState(!1),T=n.get("token");e.useEffect(()=>{T||(x(!1),Fe.error("Token de recuperação inválido ou expirado"))},[T]);const _=()=>{t("/login")};return g?N?se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:se.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:se.jsxs(Zd,{className:"p-8 text-center",children:[se.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:se.jsx(w,{className:"w-16 h-16 text-green-500 mx-auto"})}),se.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Senha Redefinida!"}),se.jsx("p",{className:"text-gray-300 mb-6",children:"Sua senha foi redefinida com sucesso. Agora você pode fazer login com sua nova senha."}),se.jsx(ep,{onClick:_,className:"w-full",children:"Fazer Login"})]})})}):se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:se.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:se.jsxs(Zd,{className:"p-8",children:[se.jsxs("div",{className:"text-center mb-8",children:[se.jsx(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:se.jsx(y,{className:"w-12 h-12 text-blue-400 mx-auto"})}),se.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Redefinir Senha"}),se.jsx("p",{className:"text-gray-300",children:"Digite sua nova senha"})]}),se.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!s||!a)return void Fe.error("Por favor, preencha todos os campos");const t=(n=s).length<8?"A senha deve ter pelo menos 8 caracteres":/(?=.*[a-z])/.test(n)?/(?=.*[A-Z])/.test(n)?/(?=.*\d)/.test(n)?null:"A senha deve conter pelo menos um número":"A senha deve conter pelo menos uma letra maiúscula":"A senha deve conter pelo menos uma letra minúscula";var n;if(t)Fe.error(t);else if(s===a){f(!0);try{await new Promise(e=>setTimeout(e,2e3)),C(!0),Fe.success("Senha redefinida com sucesso!")}catch(r){Fe.error("Erro ao redefinir senha. Tente novamente")}finally{f(!1)}}else Fe.error("As senhas não coincidem")},className:"space-y-6",children:[se.jsxs("div",{children:[se.jsxs("div",{className:"relative",children:[se.jsx(tp,{type:c?"text":"password",placeholder:"Nova senha",value:s,onChange:e=>o(e.target.value),disabled:m,className:"w-full pr-12"}),se.jsx("button",{type:"button",onClick:()=>h(!c),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:c?se.jsx(v,{className:"w-4 h-4"}):se.jsx(b,{className:"w-4 h-4"})})]}),s&&se.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[se.jsxs("div",{className:"flex items-center "+(s.length>=8?"text-green-400":"text-red-400"),children:[se.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(s.length>=8?"bg-green-400":"bg-red-400")}),"Pelo menos 8 caracteres"]}),se.jsxs("div",{className:"flex items-center "+(/(?=.*[a-z])/.test(s)?"text-green-400":"text-red-400"),children:[se.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[a-z])/.test(s)?"bg-green-400":"bg-red-400")}),"Uma letra minúscula"]}),se.jsxs("div",{className:"flex items-center "+(/(?=.*[A-Z])/.test(s)?"text-green-400":"text-red-400"),children:[se.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[A-Z])/.test(s)?"bg-green-400":"bg-red-400")}),"Uma letra maiúscula"]}),se.jsxs("div",{className:"flex items-center "+(/(?=.*\d)/.test(s)?"text-green-400":"text-red-400"),children:[se.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*\d)/.test(s)?"bg-green-400":"bg-red-400")}),"Um número"]})]})]}),se.jsxs("div",{children:[se.jsxs("div",{className:"relative",children:[se.jsx(tp,{type:d?"text":"password",placeholder:"Confirmar nova senha",value:a,onChange:e=>l(e.target.value),disabled:m,className:"w-full pr-12"}),se.jsx("button",{type:"button",onClick:()=>p(!d),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:d?se.jsx(v,{className:"w-4 h-4"}):se.jsx(b,{className:"w-4 h-4"})})]}),a&&se.jsx("div",{className:"mt-2 text-xs",children:se.jsxs("div",{className:"flex items-center "+(s===a?"text-green-400":"text-red-400"),children:[se.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(s===a?"bg-green-400":"bg-red-400")}),s===a?"Senhas coincidem":"Senhas não coincidem"]})})]}),se.jsxs(ep,{type:"submit",disabled:m||!s||!a||s!==a,className:"w-full",children:[m?se.jsx(u.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):se.jsx(y,{className:"w-4 h-4 mr-2"}),m?"Redefinindo...":"Redefinir Senha"]}),se.jsxs(ep,{type:"button",variant:"outline",onClick:_,className:"w-full",children:[se.jsx(E,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})}):se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:se.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:se.jsxs(Zd,{className:"p-8 text-center",children:[se.jsx(S,{className:"w-16 h-16 text-red-500 mx-auto mb-6"}),se.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Token Inválido"}),se.jsx("p",{className:"text-gray-300 mb-6",children:"O link de recuperação é inválido ou expirou. Por favor, solicite um novo link de recuperação."}),se.jsxs("div",{className:"space-y-4",children:[se.jsx(ep,{onClick:()=>t("/forgot-password"),className:"w-full",children:"Solicitar Novo Link"}),se.jsxs(ep,{onClick:_,variant:"outline",className:"w-full",children:[se.jsx(E,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})})};function sp(e,t){return function(){return e.apply(t,arguments)}}const{toString:ip}=Object.prototype,{getPrototypeOf:op}=Object,{iterator:ap,toStringTag:lp}=Symbol,cp=(up=Object.create(null),e=>{const t=ip.call(e);return up[t]||(up[t]=t.slice(8,-1).toLowerCase())});var up;const hp=e=>(e=e.toLowerCase(),t=>cp(t)===e),dp=e=>t=>typeof t===e,{isArray:pp}=Array,mp=dp("undefined");function fp(e){return null!==e&&!mp(e)&&null!==e.constructor&&!mp(e.constructor)&&vp(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const gp=hp("ArrayBuffer");const yp=dp("string"),vp=dp("function"),bp=dp("number"),xp=e=>null!==e&&"object"==typeof e,wp=e=>{if("object"!==cp(e))return!1;const t=op(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||lp in e||ap in e)},Ep=hp("Date"),Np=hp("File"),Sp=hp("Blob"),Cp=hp("FileList"),Tp=hp("URLSearchParams"),[_p,Ip,jp,Ap]=["ReadableStream","Request","Response","Headers"].map(hp);function kp(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,s;if("object"!=typeof e&&(e=[e]),pp(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(fp(e))return;const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let o;for(r=0;r<i;r++)o=s[r],t.call(null,e[o],o,e)}}function Rp(e,t){if(fp(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,s=n.length;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const Pp="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Dp=e=>!mp(e)&&e!==Pp;const Op=(Lp="undefined"!=typeof Uint8Array&&op(Uint8Array),e=>Lp&&e instanceof Lp);var Lp;const Mp=hp("HTMLFormElement"),Up=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Fp=hp("RegExp"),Vp=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};kp(n,(n,s)=>{let i;!1!==(i=t(n,s,e))&&(r[s]=i||n)}),Object.defineProperties(e,r)};const Bp=hp("AsyncFunction"),$p=(Hp="function"==typeof setImmediate,zp=vp(Pp.postMessage),Hp?setImmediate:zp?(Gp=`axios@${Math.random()}`,qp=[],Pp.addEventListener("message",({source:e,data:t})=>{e===Pp&&t===Gp&&qp.length&&qp.shift()()},!1),e=>{qp.push(e),Pp.postMessage(Gp,"*")}):e=>setTimeout(e));var Hp,zp,Gp,qp;const Kp="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Pp):"undefined"!=typeof process&&process.nextTick||$p,Wp={isArray:pp,isArrayBuffer:gp,isBuffer:fp,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||vp(e.append)&&("formdata"===(t=cp(e))||"object"===t&&vp(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&gp(e.buffer),t},isString:yp,isNumber:bp,isBoolean:e=>!0===e||!1===e,isObject:xp,isPlainObject:wp,isEmptyObject:e=>{if(!xp(e)||fp(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(me){return!1}},isReadableStream:_p,isRequest:Ip,isResponse:jp,isHeaders:Ap,isUndefined:mp,isDate:Ep,isFile:Np,isBlob:Sp,isRegExp:Fp,isFunction:vp,isStream:e=>xp(e)&&vp(e.pipe),isURLSearchParams:Tp,isTypedArray:Op,isFileList:Cp,forEach:kp,merge:function e(){const{caseless:t,skipUndefined:n}=Dp(this)&&this||{},r={},s=(s,i)=>{const o=t&&Rp(r,i)||i;wp(r[o])&&wp(s)?r[o]=e(r[o],s):wp(s)?r[o]=e({},s):pp(s)?r[o]=s.slice():n&&mp(s)||(r[o]=s)};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&kp(arguments[i],s);return r},extend:(e,t,n,{allOwnKeys:r}={})=>(kp(t,(t,r)=>{n&&vp(t)?e[r]=sp(t,n):e[r]=t},{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&op(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:cp,kindOfTest:hp,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(pp(e))return e;let t=e.length;if(!bp(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[ap]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Mp,hasOwnProperty:Up,hasOwnProp:Up,reduceDescriptors:Vp,freezeMethods:e=>{Vp(e,(t,n)=>{if(vp(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];vp(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return pp(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Rp,global:Pp,isContextDefined:Dp,isSpecCompliantForm:function(e){return!!(e&&vp(e.append)&&"FormData"===e[lp]&&e[ap])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(xp(e)){if(t.indexOf(e)>=0)return;if(fp(e))return e;if(!("toJSON"in e)){t[r]=e;const s=pp(e)?[]:{};return kp(e,(e,t)=>{const i=n(e,r+1);!mp(i)&&(s[t]=i)}),t[r]=void 0,s}}return e};return n(e,0)},isAsyncFn:Bp,isThenable:e=>e&&(xp(e)||vp(e))&&vp(e.then)&&vp(e.catch),setImmediate:$p,asap:Kp,isIterable:e=>null!=e&&vp(e[ap])};function Jp(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}Wp.inherits(Jp,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Wp.toJSONObject(this.config),code:this.code,status:this.status}}});const Xp=Jp.prototype,Qp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qp[e]={value:e}}),Object.defineProperties(Jp,Qp),Object.defineProperty(Xp,"isAxiosError",{value:!0}),Jp.from=(e,t,n,r,s,i)=>{const o=Object.create(Xp);Wp.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const a=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Jp.call(o,a,l,n,r,s),e&&null==o.cause&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",i&&Object.assign(o,i),o};function Yp(e){return Wp.isPlainObject(e)||Wp.isArray(e)}function Zp(e){return Wp.endsWith(e,"[]")?e.slice(0,-2):e}function em(e,t,n){return e?e.concat(t).map(function(e,t){return e=Zp(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}const tm=Wp.toFlatObject(Wp,{},null,function(e){return/^is[A-Z]/.test(e)});function nm(e,t,n){if(!Wp.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Wp.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Wp.isUndefined(t[e])})).metaTokens,s=n.visitor||c,i=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&Wp.isSpecCompliantForm(t);if(!Wp.isFunction(s))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Wp.isDate(e))return e.toISOString();if(Wp.isBoolean(e))return e.toString();if(!a&&Wp.isBlob(e))throw new Jp("Blob is not supported. Use a Buffer instead.");return Wp.isArrayBuffer(e)||Wp.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,s){let a=e;if(e&&!s&&"object"==typeof e)if(Wp.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Wp.isArray(e)&&function(e){return Wp.isArray(e)&&!e.some(Yp)}(e)||(Wp.isFileList(e)||Wp.endsWith(n,"[]"))&&(a=Wp.toArray(e)))return n=Zp(n),a.forEach(function(e,r){!Wp.isUndefined(e)&&null!==e&&t.append(!0===o?em([n],r,i):null===o?n:n+"[]",l(e))}),!1;return!!Yp(e)||(t.append(em(s,n,i),l(e)),!1)}const u=[],h=Object.assign(tm,{defaultVisitor:c,convertValue:l,isVisitable:Yp});if(!Wp.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Wp.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Wp.forEach(n,function(n,i){!0===(!(Wp.isUndefined(n)||null===n)&&s.call(t,n,Wp.isString(i)?i.trim():i,r,h))&&e(n,r?r.concat(i):[i])}),u.pop()}}(e),t}function rm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function sm(e,t){this._pairs=[],e&&nm(e,this,t)}const im=sm.prototype;function om(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function am(e,t,n){if(!t)return e;const r=n&&n.encode||om;Wp.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(i=s?s(t,n):Wp.isURLSearchParams(t)?t.toString():new sm(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}im.append=function(e,t){this._pairs.push([e,t])},im.toString=function(e){const t=e?function(t){return e.call(this,t,rm)}:rm;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const lm=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Wp.forEach(this.handlers,function(t){null!==t&&e(t)})}},cm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},um={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:sm,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},hm="undefined"!=typeof window&&"undefined"!=typeof document,dm="object"==typeof navigator&&navigator||void 0,pm=hm&&(!dm||["ReactNative","NativeScript","NS"].indexOf(dm.product)<0),mm="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,fm=hm&&window.location.href||"http://localhost",gm={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hm,hasStandardBrowserEnv:pm,hasStandardBrowserWebWorkerEnv:mm,navigator:dm,origin:fm},Symbol.toStringTag,{value:"Module"})),...um};function ym(e){function t(e,n,r,s){let i=e[s++];if("__proto__"===i)return!0;const o=Number.isFinite(+i),a=s>=e.length;if(i=!i&&Wp.isArray(r)?r.length:i,a)return Wp.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!o;r[i]&&Wp.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],s)&&Wp.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}(r[i])),!o}if(Wp.isFormData(e)&&Wp.isFunction(e.entries)){const n={};return Wp.forEachEntry(e,(e,r)=>{t(function(e){return Wp.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),r,n,0)}),n}return null}const vm={transitional:cm,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=Wp.isObject(e);s&&Wp.isHTMLForm(e)&&(e=new FormData(e));if(Wp.isFormData(e))return r?JSON.stringify(ym(e)):e;if(Wp.isArrayBuffer(e)||Wp.isBuffer(e)||Wp.isStream(e)||Wp.isFile(e)||Wp.isBlob(e)||Wp.isReadableStream(e))return e;if(Wp.isArrayBufferView(e))return e.buffer;if(Wp.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return nm(e,new gm.classes.URLSearchParams,{visitor:function(e,t,n,r){return gm.isNode&&Wp.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((i=Wp.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return nm(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),function(e,t,n){if(Wp.isString(e))try{return(t||JSON.parse)(e),Wp.trim(e)}catch(me){if("SyntaxError"!==me.name)throw me}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||vm.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Wp.isResponse(e)||Wp.isReadableStream(e))return e;if(e&&Wp.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(me){if(n){if("SyntaxError"===me.name)throw Jp.from(me,Jp.ERR_BAD_RESPONSE,this,null,this.response);throw me}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gm.classes.FormData,Blob:gm.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Wp.forEach(["delete","get","head","post","put","patch"],e=>{vm.headers[e]={}});const bm=vm,xm=Wp.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wm=Symbol("internals");function Em(e){return e&&String(e).trim().toLowerCase()}function Nm(e){return!1===e||null==e?e:Wp.isArray(e)?e.map(Nm):String(e)}function Sm(e,t,n,r,s){return Wp.isFunction(r)?r.call(this,t,n):(s&&(t=n),Wp.isString(t)?Wp.isString(r)?-1!==t.indexOf(r):Wp.isRegExp(r)?r.test(t):void 0:void 0)}class Cm{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function s(e,t,n){const s=Em(t);if(!s)throw new Error("header name must be a non-empty string");const i=Wp.findKey(r,s);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Nm(e))}const i=(e,t)=>Wp.forEach(e,(e,n)=>s(e,n,t));if(Wp.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Wp.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,s;return e&&e.split("\n").forEach(function(e){s=e.indexOf(":"),n=e.substring(0,s).trim().toLowerCase(),r=e.substring(s+1).trim(),!n||t[n]&&xm[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t})(e),t);else if(Wp.isObject(e)&&Wp.isIterable(e)){let n,r,s={};for(const t of e){if(!Wp.isArray(t))throw TypeError("Object iterator must return a key-value pair");s[r=t[0]]=(n=s[r])?Wp.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}i(s,t)}else null!=e&&s(t,e,n);return this}get(e,t){if(e=Em(e)){const n=Wp.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Wp.isFunction(t))return t.call(this,e,n);if(Wp.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Em(e)){const n=Wp.findKey(this,e);return!(!n||void 0===this[n]||t&&!Sm(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function s(e){if(e=Em(e)){const s=Wp.findKey(n,e);!s||t&&!Sm(0,n[s],s,t)||(delete n[s],r=!0)}}return Wp.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const s=t[n];e&&!Sm(0,this[s],s,e,!0)||(delete this[s],r=!0)}return r}normalize(e){const t=this,n={};return Wp.forEach(this,(r,s)=>{const i=Wp.findKey(n,s);if(i)return t[i]=Nm(r),void delete t[s];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}(s):String(s).trim();o!==s&&delete t[s],t[o]=Nm(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Wp.forEach(this,(n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Wp.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){const t=(this[wm]=this[wm]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Em(e);t[r]||(!function(e,t){const n=Wp.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,s){return this[r].call(this,t,e,n,s)},configurable:!0})})}(n,e),t[r]=!0)}return Wp.isArray(e)?e.forEach(r):r(e),this}}Cm.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Wp.reduceDescriptors(Cm.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),Wp.freezeMethods(Cm);const Tm=Cm;function _m(e,t){const n=this||bm,r=t||n,s=Tm.from(r.headers);let i=r.data;return Wp.forEach(e,function(e){i=e.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Im(e){return!(!e||!e.__CANCEL__)}function jm(e,t,n){Jp.call(this,null==e?"canceled":e,Jp.ERR_CANCELED,t,n),this.name="CanceledError"}function Am(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Jp("Request failed with status code "+n.status,[Jp.ERR_BAD_REQUEST,Jp.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}Wp.inherits(jm,Jp,{__CANCEL__:!0});const km=(e,t,n=3)=>{let r=0;const s=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s,i=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];s||(s=l),n[i]=a,r[i]=l;let u=o,h=0;for(;u!==i;)h+=n[u++],u%=e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),l-s<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}(50,250);return function(e,t){let n,r,s=0,i=1e3/t;const o=(t,i=Date.now())=>{s=i,n=null,r&&(clearTimeout(r),r=null),e(...t)};return[(...e)=>{const t=Date.now(),a=t-s;a>=i?o(e,t):(n=e,r||(r=setTimeout(()=>{r=null,o(n)},i-a)))},()=>n&&o(n)]}(n=>{const i=n.loaded,o=n.lengthComputable?n.total:void 0,a=i-r,l=s(a);r=i;e({loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&i<=o?(o-i)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0})},n)},Rm=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Pm=e=>(...t)=>Wp.asap(()=>e(...t)),Dm=gm.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,gm.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(gm.origin),gm.navigator&&/(msie|trident)/i.test(gm.navigator.userAgent)):()=>!0,Om=gm.hasStandardBrowserEnv?{write(e,t,n,r,s,i,o){if("undefined"==typeof document)return;const a=[`${e}=${encodeURIComponent(t)}`];Wp.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),Wp.isString(r)&&a.push(`path=${r}`),Wp.isString(s)&&a.push(`domain=${s}`),!0===i&&a.push("secure"),Wp.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function Lm(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Mm=e=>e instanceof Tm?{...e}:e;function Um(e,t){t=t||{};const n={};function r(e,t,n,r){return Wp.isPlainObject(e)&&Wp.isPlainObject(t)?Wp.merge.call({caseless:r},e,t):Wp.isPlainObject(t)?Wp.merge({},t):Wp.isArray(t)?t.slice():t}function s(e,t,n,s){return Wp.isUndefined(t)?Wp.isUndefined(e)?void 0:r(void 0,e,0,s):r(e,t,0,s)}function i(e,t){if(!Wp.isUndefined(t))return r(void 0,t)}function o(e,t){return Wp.isUndefined(t)?Wp.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,s,i){return i in t?r(n,s):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t,n)=>s(Mm(e),Mm(t),0,!0)};return Wp.forEach(Object.keys({...e,...t}),function(r){const i=l[r]||s,o=i(e[r],t[r],r);Wp.isUndefined(o)&&i!==a||(n[r]=o)}),n}const Fm=e=>{const t=Um({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;if(t.headers=o=Tm.from(o),t.url=am(Lm(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),Wp.isFormData(n))if(gm.hasStandardBrowserEnv||gm.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(Wp.isFunction(n.getHeaders)){const e=n.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}if(gm.hasStandardBrowserEnv&&(r&&Wp.isFunction(r)&&(r=r(t)),r||!1!==r&&Dm(t.url))){const e=s&&i&&Om.read(i);e&&o.set(s,e)}return t},Vm="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,n){const r=Fm(e);let s=r.data;const i=Tm.from(r.headers).normalize();let o,a,l,c,u,{responseType:h,onUploadProgress:d,onDownloadProgress:p}=r;function m(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let f=new XMLHttpRequest;function g(){if(!f)return;const r=Tm.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders());Am(function(e){t(e),m()},function(e){n(e),m()},{data:h&&"text"!==h&&"json"!==h?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f}),f=null}f.open(r.method.toUpperCase(),r.url,!0),f.timeout=r.timeout,"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(g)},f.onabort=function(){f&&(n(new Jp("Request aborted",Jp.ECONNABORTED,e,f)),f=null)},f.onerror=function(t){const r=new Jp(t&&t.message?t.message:"Network Error",Jp.ERR_NETWORK,e,f);r.event=t||null,n(r),f=null},f.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const s=r.transitional||cm;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Jp(t,s.clarifyTimeoutError?Jp.ETIMEDOUT:Jp.ECONNABORTED,e,f)),f=null},void 0===s&&i.setContentType(null),"setRequestHeader"in f&&Wp.forEach(i.toJSON(),function(e,t){f.setRequestHeader(t,e)}),Wp.isUndefined(r.withCredentials)||(f.withCredentials=!!r.withCredentials),h&&"json"!==h&&(f.responseType=r.responseType),p&&([l,u]=km(p,!0),f.addEventListener("progress",l)),d&&f.upload&&([a,c]=km(d),f.upload.addEventListener("progress",a),f.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(o=t=>{f&&(n(!t||t.type?new jm(null,e,f):t),f.abort(),f=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===gm.protocols.indexOf(y)?n(new Jp("Unsupported protocol "+y+":",Jp.ERR_BAD_REQUEST,e)):f.send(s||null)})},Bm=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const s=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Jp?t:new jm(t instanceof Error?t.message:t))}};let i=t&&setTimeout(()=>{i=null,s(new Jp(`timeout ${t} of ms exceeded`,Jp.ETIMEDOUT))},t);const o=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(s):e.removeEventListener("abort",s)}),e=null)};e.forEach(e=>e.addEventListener("abort",s));const{signal:a}=r;return a.unsubscribe=()=>Wp.asap(o),a}},$m=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,s=0;for(;s<n;)r=s+t,yield e.slice(s,r),s=r},Hm=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},zm=(e,t,n,r)=>{const s=async function*(e,t){for await(const n of Hm(e))yield*$m(n,t)}(e,t);let i,o=0,a=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await s.next();if(t)return a(),void e.close();let i=r.byteLength;if(n){let e=o+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel:e=>(a(e),s.return())},{highWaterMark:2})},{isFunction:Gm}=Wp,qm=(({Request:e,Response:t})=>({Request:e,Response:t}))(Wp.global),{ReadableStream:Km,TextEncoder:Wm}=Wp.global,Jm=(e,...t)=>{try{return!!e(...t)}catch(me){return!1}},Xm=e=>{e=Wp.merge.call({skipUndefined:!0},qm,e);const{fetch:t,Request:n,Response:r}=e,s=t?Gm(t):"function"==typeof fetch,i=Gm(n),o=Gm(r);if(!s)return!1;const a=s&&Gm(Km),l=s&&("function"==typeof Wm?(c=new Wm,e=>c.encode(e)):async e=>new Uint8Array(await new n(e).arrayBuffer()));var c;const u=i&&a&&Jm(()=>{let e=!1;const t=new n(gm.origin,{body:new Km,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),h=o&&a&&Jm(()=>Wp.isReadableStream(new r("").body)),d={stream:h&&(e=>e.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new Jp(`Response type '${e}' is not supported`,Jp.ERR_NOT_SUPPORT,n)})});const p=async(e,t)=>{const r=Wp.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(Wp.isBlob(e))return e.size;if(Wp.isSpecCompliantForm(e)){const t=new n(gm.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Wp.isArrayBufferView(e)||Wp.isArrayBuffer(e)?e.byteLength:(Wp.isURLSearchParams(e)&&(e+=""),Wp.isString(e)?(await l(e)).byteLength:void 0)})(t):r};return async e=>{let{url:s,method:o,data:a,signal:l,cancelToken:c,timeout:m,onDownloadProgress:f,onUploadProgress:g,responseType:y,headers:v,withCredentials:b="same-origin",fetchOptions:x}=Fm(e),w=t||fetch;y=y?(y+"").toLowerCase():"text";let E=Bm([l,c&&c.toAbortSignal()],m),N=null;const S=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let C;try{if(g&&u&&"get"!==o&&"head"!==o&&0!==(C=await p(v,a))){let e,t=new n(s,{method:"POST",body:a,duplex:"half"});if(Wp.isFormData(a)&&(e=t.headers.get("content-type"))&&v.setContentType(e),t.body){const[e,n]=Rm(C,km(Pm(g)));a=zm(t.body,65536,e,n)}}Wp.isString(b)||(b=b?"include":"omit");const t=i&&"credentials"in n.prototype,l={...x,signal:E,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:a,duplex:"half",credentials:t?b:void 0};N=i&&new n(s,l);let c=await(i?w(N,x):w(s,l));const m=h&&("stream"===y||"response"===y);if(h&&(f||m&&S)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=Wp.toFiniteNumber(c.headers.get("content-length")),[n,s]=f&&Rm(t,km(Pm(f),!0))||[];c=new r(zm(c.body,65536,n,()=>{s&&s(),S&&S()}),e)}y=y||"text";let T=await d[Wp.findKey(d,y)||"text"](c,e);return!m&&S&&S(),await new Promise((t,n)=>{Am(t,n,{data:T,headers:Tm.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:N})})}catch(T){if(S&&S(),T&&"TypeError"===T.name&&/Load failed|fetch/i.test(T.message))throw Object.assign(new Jp("Network Error",Jp.ERR_NETWORK,e,N),{cause:T.cause||T});throw Jp.from(T,T&&T.code,e,N)}}},Qm=new Map,Ym=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,i=[r,s,n];let o,a,l=i.length,c=Qm;for(;l--;)o=i[l],a=c.get(o),void 0===a&&c.set(o,a=l?new Map:Xm(t)),c=a;return a};Ym();const Zm={http:null,xhr:Vm,fetch:{get:Ym}};Wp.forEach(Zm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(me){}Object.defineProperty(e,"adapterName",{value:t})}});const ef=e=>`- ${e}`,tf=e=>Wp.isFunction(e)||null===e||!1===e;const nf={getAdapter:function(e,t){e=Wp.isArray(e)?e:[e];const{length:n}=e;let r,s;const i={};for(let o=0;o<n;o++){let n;if(r=e[o],s=r,!tf(r)&&(s=Zm[(n=String(r)).toLowerCase()],void 0===s))throw new Jp(`Unknown adapter '${n}'`);if(s&&(Wp.isFunction(s)||(s=s.get(t))))break;i[n||"#"+o]=s}if(!s){const e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Jp("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(ef).join("\n"):" "+ef(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return s},adapters:Zm};function rf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new jm(null,e)}function sf(e){rf(e),e.headers=Tm.from(e.headers),e.data=_m.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return nf.getAdapter(e.adapter||bm.adapter,e)(e).then(function(t){return rf(e),t.data=_m.call(e,e.transformResponse,t),t.headers=Tm.from(t.headers),t},function(t){return Im(t)||(rf(e),t&&t.response&&(t.response.data=_m.call(e,e.transformResponse,t.response),t.response.headers=Tm.from(t.response.headers))),Promise.reject(t)})}const of="1.13.1",af={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{af[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const lf={};af.transitional=function(e,t,n){function r(e,t){return"[Axios v"+of+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,s,i)=>{if(!1===e)throw new Jp(r(s," has been removed"+(t?" in "+t:"")),Jp.ERR_DEPRECATED);return t&&!lf[s]&&(lf[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,s,i)}},af.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const cf={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Jp("options must be an object",Jp.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const t=e[i],n=void 0===t||o(t,i,e);if(!0!==n)throw new Jp("option "+i+" must be "+n,Jp.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new Jp("Unknown option "+i,Jp.ERR_BAD_OPTION)}},validators:af},uf=cf.validators;class hf{constructor(e){this.defaults=e||{},this.interceptors={request:new lm,response:new lm}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(me){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Um(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;void 0!==n&&cf.assertOptions(n,{silentJSONParsing:uf.transitional(uf.boolean),forcedJSONParsing:uf.transitional(uf.boolean),clarifyTimeoutError:uf.transitional(uf.boolean)},!1),null!=r&&(Wp.isFunction(r)?t.paramsSerializer={serialize:r}:cf.assertOptions(r,{encode:uf.function,serialize:uf.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),cf.assertOptions(t,{baseUrl:uf.spelling("baseURL"),withXsrfToken:uf.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=s&&Wp.merge(s.common,s[t.method]);s&&Wp.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=Tm.concat(i,s);const o=[];let a=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let u,h=0;if(!a){const e=[sf.bind(this),void 0];for(e.unshift(...o),e.push(...l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=o.length;let d=t;for(;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(p){t.call(this,p);break}}try{c=sf.call(this,d)}catch(p){return Promise.reject(p)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return am(Lm((e=Um(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Wp.forEach(["delete","get","head","options"],function(e){hf.prototype[e]=function(t,n){return this.request(Um(n||{},{method:e,url:t,data:(n||{}).data}))}}),Wp.forEach(["post","put","patch"],function(e){function t(t){return function(n,r,s){return this.request(Um(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}hf.prototype[e]=t(),hf.prototype[e+"Form"]=t(!0)});const df=hf;class pf{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,s){n.reason||(n.reason=new jm(e,r,s),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new pf(function(t){e=t});return{token:t,cancel:e}}}const mf=pf;const ff={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ff).forEach(([e,t])=>{ff[t]=e});const gf=ff;const yf=function e(t){const n=new df(t),r=sp(df.prototype.request,n);return Wp.extend(r,df.prototype,n,{allOwnKeys:!0}),Wp.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Um(t,n))},r}(bm);yf.Axios=df,yf.CanceledError=jm,yf.CancelToken=mf,yf.isCancel=Im,yf.VERSION=of,yf.toFormData=nm,yf.AxiosError=Jp,yf.Cancel=yf.CanceledError,yf.all=function(e){return Promise.all(e)},yf.spread=function(e){return function(t){return e.apply(null,t)}},yf.isAxiosError=function(e){return Wp.isObject(e)&&!0===e.isAxiosError},yf.mergeConfig=Um,yf.AxiosHeaders=Tm,yf.formToJSON=e=>ym(Wp.isHTMLForm(e)?new FormData(e):e),yf.getAdapter=nf.getAdapter,yf.HttpStatusCode=gf,yf.default=yf;const vf=yf;const bf=()=>{const{user:t}=Gd(),[n,r]=e.useState("monthly"),[s,i]=e.useState({isConnected:!1,isLoading:!0,products:null}),[o,a]=e.useState(null),[l,c]=e.useState(null),h=[{id:"basic",name:"Básico",icon:se.jsx(C,{className:"w-10 h-10 text-gray-500"}),color:"gray",gradient:"from-gray-400 to-gray-600",features:["Gratuito (R$ 0,00/mês)","Limite de 2 moedas (ex: BRL, USD)","Limite de 2 plataformas (Shopify, Nuvemshop)","Limite de 2 gateways de pagamento (Stripe, Mercado Pago)","Pode realizar 10 cálculos por mês","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:0,quarterly:{total:0,perMonth:0},annual:{total:0,perMonth:0}}},{id:"gold",name:"Gold",icon:se.jsx(u.div,{initial:{scale:1},animate:{scale:[1,1.15,1],boxShadow:["0 0 0px #FFD700","0 0 24px #FFD700","0 0 0px #FFD700"]},transition:{repeat:1/0,duration:2},children:se.jsx(T,{className:"w-12 h-12 text-yellow-500 drop-shadow-lg"})}),color:"yellow",gradient:"from-yellow-400 to-yellow-600",popular:!0,features:["R$ 9,90/mês","Suporte a 10 moedas","Até 4 plataformas","Até 4 gateways de pagamento","Cálculo automático em tempo real","Atualização automática de câmbio","Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)","Suporte via e-mail"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:9},annual:{total:89.9,perMonth:7.5}}},{id:"premium",name:"Premium",icon:se.jsxs(u.div,{initial:{rotate:0,scale:1},animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{repeat:1/0,duration:3},className:"relative flex items-center justify-center",children:[se.jsx(_,{className:"w-12 h-12 text-purple-500 drop-shadow-lg"}),se.jsx(u.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1},className:"absolute -top-2 -right-2",children:se.jsx(I,{className:"w-7 h-7 text-blue-500 drop-shadow-xl"})})]}),color:"purple",gradient:"from-purple-400 to-purple-600",features:["R$ 19,90/mês","Todas as moedas disponíveis (70+)","Todas as plataformas integradas","Todos os gateways de pagamento","Cálculo automático em tempo real","Histórico de preços completo","Suporte técnico prioritário","Segurança avançada nos pagamentos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.6}}}],d=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)} (R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês)`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)} (R$ ${e.prices.annual.perMonth.toFixed(2)}/mês)`}}},m=(e,t)=>{const n=e.prices.monthly*("quarterly"===t?3:12),r=e.prices[t].total;return Math.round((n-r)/n*100)};return e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),n=localStorage.getItem("currentUser");if(e&&"active"===t&&n){const t=localStorage.getItem("subscriptionDate");if(t){const n=new Date(t);((new Date).getTime()-n.getTime())/36e5<24?a(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"))}}i({isConnected:!0,isLoading:!1,products:null})},[]),se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center",children:se.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8",children:[se.jsx("h3",{className:"text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight",children:"Escolha o período de cobrança"}),se.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:["monthly","quarterly","annual"].map(e=>se.jsxs(u.button,{whileHover:{scale:1.07,boxShadow:"0 0 16px #60A5FA"},whileTap:{scale:.97},onClick:()=>r(e),className:"p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg "+(n===e?"border-blue-500 bg-blue-100 text-blue-700":"border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"),children:[se.jsx("p",{className:"font-bold text-lg",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&se.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow",children:["-",m(h[1],e),"%"]})]},e))})]}),!s.isLoading&&se.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:h.map((e,r)=>se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*r},className:`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${e.popular?"border-yellow-400 shadow-yellow-200 scale-105":""} ${o===e.id?"ring-2 ring-green-500":""}`,children:[se.jsxs("div",{className:"flex flex-col items-center mb-8",children:[se.jsx("div",{className:`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${e.gradient} shadow-lg`,children:e.icon}),se.jsx("span",{className:`text-3xl font-extrabold text-${e.color}-700 mb-2 tracking-tight`,children:e.name}),e.popular&&se.jsx(u.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.5},className:"px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse",children:"⭐ Mais Popular"}),se.jsx("span",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:d(e,n).label})]}),se.jsx("ul",{className:"mb-8 text-base text-gray-900 space-y-4 flex-1",children:e.features.map((e,t)=>se.jsxs("li",{className:"flex items-center gap-2",children:[se.jsx(C,{className:"w-5 h-5 text-green-500"}),se.jsx("span",{children:e})]},t))}),se.jsx("div",{className:"mt-auto",children:se.jsxs(u.button,{whileHover:{scale:o===e.id?1:1.07,boxShadow:o===e.id?void 0:"0 0 16px "+("yellow"===e.color?"#FFD700":"purple"===e.color?"#6366F1":"#60A5FA")},whileTap:{scale:o===e.id?1:.97},onClick:async()=>{if(o!==e.id){c(`${e.id}_${n}`);try{if(ct.loading("Redirecionando para pagamento...",{id:"purchase"}),!t?.id)throw new Error("Usuário não encontrado");const r=await async function({title:e,description:t,price:n,quantity:r=1,planId:s,userId:i}){const o={items:[{title:e,description:t,quantity:r,currency_id:"BRL",unit_price:n}],external_reference:`${s}_${i}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:i}};return(await vf.post("https://api.mercadopago.com/checkout/preferences",o,{headers:{Authorization:"Bearer APP_USR-377913103077270-111122-afa5f8cbbd113e80aff4c90b5c812766-2984123394","Content-Type":"application/json"}})).data}({title:`Assinatura DropCalc - ${e.name}`,description:`Plano ${e.name} (${n})`,price:d(e,n).value,planId:e.id,userId:t.id});window.location.href=r.init_point}catch(r){console.error("Erro ao criar pagamento:",r),ct.error("Erro ao redirecionar para pagamento.",{id:"purchase"})}finally{c(null)}}},disabled:l===`${e.id}_${n}`||o===e.id,className:"w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 "+(o===e.id?"bg-green-100 text-green-700 cursor-default":l===`${e.id}_${n}`?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-2xl`),children:[se.jsx(j,{className:"w-5 h-5"}),"Assinar"]})})]},e.id))}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"overflow-x-auto mb-10",children:[se.jsx("h3",{className:"text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight",children:"Comparativo dos Planos"}),se.jsxs("table",{className:"min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100",children:[se.jsx("thead",{children:se.jsxs("tr",{children:[se.jsx("th",{className:"py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl",children:"Benefício"}),h.map(e=>se.jsx("th",{className:"py-4 px-6 text-center font-bold text-lg bg-blue-50",children:se.jsx("span",{className:`text-base font-bold text-${e.color}-700`,children:e.name})},e.id))]})}),se.jsxs("tbody",{children:[se.jsxs("tr",{className:"bg-white/60",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Preço"}),h.map(e=>se.jsx("td",{className:"py-3 px-6 text-center font-bold text-lg",children:d(e,n).label},e.id))]}),se.jsxs("tr",{className:"bg-blue-50/60",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Moedas suportadas"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"70+"})]}),se.jsxs("tr",{className:"bg-white/60",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Plataformas integradas"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"Todas"})]}),se.jsxs("tr",{className:"bg-blue-50/60",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Gateways de pagamento"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"Todos"})]}),se.jsxs("tr",{className:"bg-white/60",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Cálculos por mês"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"})]}),se.jsxs("tr",{className:"bg-blue-50/60",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Suporte"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"Prioritário"})]}),se.jsxs("tr",{className:"bg-white/60 rounded-b-3xl",children:[se.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Segurança avançada"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),se.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),se.jsx("td",{className:"py-3 px-6 text-center",children:se.jsx(C,{className:"w-6 h-6 text-green-500 mx-auto"})})]})]})]})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10",children:[se.jsx(p,{className:"w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce"}),se.jsx("h3",{className:"text-2xl font-extrabold mb-3 tracking-tight",children:"💡 Dica Especial"}),se.jsxs("p",{className:"opacity-95 text-lg",children:["Com o ",se.jsx("span",{className:"font-bold text-yellow-200",children:"DropCalc Premium"}),", você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada."]})]})]})})},xf=()=>{const{t:t}=ue(),[n,r]=e.useState([]);e.useEffect(()=>{try{const e=localStorage.getItem("calculadora-historico");e&&r(JSON.parse(e))}catch{r([])}},[]);return 0===n.length?se.jsxs("div",{className:"text-center py-8 text-gray-500",children:[se.jsx(U,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),se.jsx("p",{children:t("calc.noHistory")})]}):se.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:n.map(e=>{return se.jsx(u.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all",children:se.jsxs("div",{className:"flex justify-between items-start",children:[se.jsxs("div",{className:"flex-1",children:[se.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:e.nomeProduto}),se.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[se.jsxs("p",{children:[se.jsx("span",{className:"font-medium",children:"Preço:"})," ",(s=e.moedaDestino,{USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[s]||s)," ",e.precoVenda.toFixed(2)]}),se.jsxs("p",{children:[se.jsx("span",{className:"font-medium",children:"Plataforma:"})," ",e.plataforma," | ",se.jsx("span",{className:"font-medium",children:"Gateway:"})," ",e.gateway]}),se.jsxs("p",{className:"text-xs text-gray-500",children:[t("calc.savedAt"),": ",e.dataCalculo]})]})]}),se.jsx("button",{onClick:()=>(e=>{const t=n.filter(t=>t.id!==e);r(t),localStorage.setItem("calculadora-historico",JSON.stringify(t)),Fe.success("Cálculo excluído")})(e.id),className:"text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",title:t("calc.deleteCalculation"),children:se.jsx(F,{className:"w-4 h-4"})})]})},e.id);var s})})},wf=()=>{const t=r(),{theme:n,setTheme:s}=function(){const t=e.useContext(ut);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t}(),{language:i,setLanguage:o,t:a}=ue(),[l,c]=e.useState(null),[h,d]=e.useState("basic"),[p,m]=e.useState({language:"pt",notifications:!0,isPremium:!1});e.useEffect(()=>{const e=localStorage.getItem("user");e&&c(JSON.parse(e));const t=localStorage.getItem("userPlan");if(t)try{const e=JSON.parse(t);e&&"object"==typeof e&&e.type&&d(e.type)}catch{d("basic")}else d("basic");const n=i,r="true"===localStorage.getItem("notifications");m({language:n,notifications:r,isPremium:"premium"===h})},[i]);const f=e=>{s(e),Fe.success(`Tema ${"dark"===e?"escuro":"claro"} ativado!`)};return se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900",children:se.jsxs("div",{className:"container mx-auto px-4 py-8",children:[se.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[se.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",children:se.jsx(E,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})}),se.jsxs("div",{className:"flex items-center gap-3",children:[se.jsx(A,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"}),se.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:a("settings.title")})]})]}),se.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[se.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[se.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center",children:se.jsx(k,{className:"w-6 h-6 text-white"})}),se.jsxs("div",{children:[se.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:l?.name||"Usuário"}),se.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:l?.email})]})]}),se.jsx("div",{className:"flex items-center gap-2",children:"premium"===h?se.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:[se.jsx(R,{className:"w-4 h-4"}),"Premium Ativo"]}):"gold"===h?se.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium",children:[se.jsx(R,{className:"w-4 h-4"}),"Gold Ativo"]}):se.jsxs("div",{className:"flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium",children:[se.jsx(k,{className:"w-4 h-4"}),"Plano Básico"]})})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[se.jsxs("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2",children:["dark"===n?se.jsx(P,{className:"w-5 h-5"}):se.jsx(D,{className:"w-5 h-5"}),a("settings.theme")]}),se.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[se.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>f("light"),className:"p-4 rounded-xl border-2 transition-all "+("light"===n?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[se.jsx(D,{className:"w-6 h-6 mx-auto mb-2 text-yellow-500"}),se.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:a("settings.light")}),"light"===n&&se.jsx(C,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]}),se.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>f("dark"),className:"p-4 rounded-xl border-2 transition-all "+("dark"===n?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[se.jsx(P,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),se.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:a("settings.dark")}),"dark"===n&&se.jsx(C,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]})]})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[se.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[se.jsx(O,{className:"w-5 h-5"}),a("settings.language")]}),se.jsx("div",{className:"space-y-2",children:[{code:"pt",name:"Português",flag:"🇧🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"es",name:"Español",flag:"🇪🇸"}].map(e=>se.jsxs(u.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:()=>{return t=e.code,m(e=>({...e,language:t})),o(t),void Fe.success(a("msg.languageChanged"));var t},className:"w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 "+(p.language===e.code?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[se.jsx("span",{className:"text-2xl",children:e.flag}),se.jsx("span",{className:"font-medium text-gray-800",children:e.name}),p.language===e.code&&se.jsx(C,{className:"w-4 h-4 text-blue-500 ml-auto"})]},e.code))})]}),se.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:se.jsxs("div",{className:"flex items-center justify-between",children:[se.jsxs("div",{className:"flex items-center gap-3",children:[se.jsx(L,{className:"w-5 h-5 text-gray-600"}),se.jsxs("div",{children:[se.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:a("settings.notifications")}),se.jsx("p",{className:"text-gray-600 text-sm",children:"Receber alertas e atualizações"})]})]}),se.jsx(u.button,{whileTap:{scale:.95},onClick:()=>{const e=!p.notifications;m(t=>({...t,notifications:e})),localStorage.setItem("notifications",e.toString()),Fe.success(`Notificações ${e?"ativadas":"desativadas"}!`)},className:"relative inline-flex h-6 w-11 items-center rounded-full transition-colors "+(p.notifications?"bg-blue-600":"bg-gray-300"),children:se.jsx(u.span,{animate:{x:p.notifications?20:4},transition:{type:"spring",stiffness:500,damping:30},className:"inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"})})]})}),!p.isPremium&&se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white",children:[se.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[se.jsx(R,{className:"w-6 h-6"}),se.jsx("h3",{className:"text-lg font-semibold",children:"Upgrade para Premium"})]}),se.jsx("p",{className:"mb-4 opacity-90",children:"Desbloqueie todos os recursos da calculadora e tenha acesso completo às funcionalidades avançadas."}),se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("/payment"),className:"bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Ativar Premium"})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[se.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[se.jsx(A,{className:"w-5 h-5"}),a("calc.calculationHistory")]}),se.jsx(xf,{})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[se.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[se.jsx(I,{className:"w-5 h-5"}),"Segurança"]}),se.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:async()=>{try{localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("premiumActive"),localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),Fe.success("Logout realizado com sucesso!"),t("/")}catch(e){Fe.error("Erro ao fazer logout")}},className:"w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2 font-medium",children:[se.jsx(M,{className:"w-5 h-5"}),a("settings.logout")]})]})]})]})})},Ef=()=>{const t=r(),[n,s]=e.useState(null),i=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:se.jsx(h,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:se.jsx(G,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:se.jsx(d,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:se.jsx(R,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Google Play"',"4. Complete o pagamento através da Google Play Store","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:se.jsxs("div",{className:"container mx-auto px-4 py-8",children:[se.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[se.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:se.jsx(E,{className:"w-6 h-6 text-gray-600"})}),se.jsxs("div",{className:"flex items-center gap-3",children:[se.jsx(V,{className:"w-8 h-8 text-blue-600"}),se.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),se.jsxs("div",{className:"max-w-4xl mx-auto",children:[se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[se.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),se.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[se.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),i.map((e,t)=>se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[se.jsxs("button",{onClick:()=>{return t=e.id,void s(n===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[se.jsxs("div",{className:"flex items-center gap-4",children:[se.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),se.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),se.jsx(u.div,{animate:{rotate:n===e.id?90:0},transition:{duration:.2},children:se.jsx(B,{className:"w-5 h-5 text-gray-500"})})]}),se.jsx($,{children:n===e.id&&se.jsx(u.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:se.jsxs("div",{className:"p-6 pt-4",children:[se.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>se.jsx(u.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&se.jsxs(u.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[se.jsx(H,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[se.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),se.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>se.jsxs(u.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[se.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),se.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),se.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",children:[se.jsx(z,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),se.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),se.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Entrar em Contato"})]})]})]})})},Nf=()=>{const[t,n]=e.useState([]),[r,s]=e.useState(!1),i="https://appdropcalc-production.up.railway.app",o=(e,t,r,s)=>{n(n=>n.map(n=>n.test===e?{...n,status:t,message:r,details:s}:n))};return se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4",children:se.jsx("div",{className:"max-w-4xl mx-auto",children:se.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20",children:[se.jsx("h1",{className:"text-3xl font-bold text-white mb-6",children:"🔧 Debug DropCalc"}),se.jsxs("div",{className:"mb-6",children:[se.jsxs("p",{className:"text-white/80 mb-4",children:["API Base URL: ",se.jsx("code",{className:"bg-black/30 px-2 py-1 rounded text-green-300",children:i})]}),se.jsxs("div",{className:"flex gap-4",children:[se.jsx("button",{onClick:async()=>{s(!0);n([{test:"Conectividade Backend",status:"pending",message:"Verificando..."},{test:"Health Check",status:"pending",message:"Verificando..."},{test:"Plataformas API",status:"pending",message:"Verificando..."},{test:"OAuth Google Redirect",status:"pending",message:"Verificando..."},{test:"Variáveis de Ambiente",status:"pending",message:"Verificando..."}]);try{const e=await fetch(`${i}/`),t=await e.text();o("Conectividade Backend","success",`✅ Conectado: ${t}`,{status:e.status})}catch(e){o("Conectividade Backend","error",`❌ Erro: ${e.message}`,e)}try{const e=await fetch(`${i}/health`),t=await e.json();o("Health Check","success",`✅ Saudável: ${t.message}`,t)}catch(e){o("Health Check","error",`❌ Erro: ${e.message}`,e)}try{const e=await fetch(`${i}/calc/platforms`),t=await e.json();o("Plataformas API","success",`✅ ${t.length} plataformas carregadas`,t.slice(0,2))}catch(e){o("Plataformas API","error",`❌ Erro: ${e.message}`,e)}try{o("Firebase Auth","success","✅ Firebase Auth disponível (Google via popup)",{info:"Agora usando Firebase em vez de backend OAuth"})}catch(e){o("Firebase Auth","error",`❌ Firebase Error: ${e.message}`,{error:e.message})}o("Variáveis de Ambiente","success","✅ Variáveis carregadas",{VITE_API_URL:"https://appdropcalc-production.up.railway.app",VITE_OFFLINE_MODE:"false",VITE_APP_MODE:"production"}),s(!1),Fe.success("Diagnóstico concluído!")},disabled:r,className:"bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:r?"🔄 Executando...":"🧪 Executar Diagnóstico"}),se.jsx("button",{onClick:async()=>{try{const e=Fe.loading("Testando login Google Firebase..."),t=await zd.loginWithGoogle();Fe.dismiss(e),Fe.success(`Login Google funcionando! Usuário: ${t.name}`)}catch(e){Fe.error(`Erro no teste Google: ${e.message}`)}},className:"bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:"🔐 Testar Login Google"})]})]}),se.jsx("div",{className:"space-y-4",children:t.map((e,t)=>se.jsxs("div",{className:"p-4 rounded-lg border-l-4 "+("success"===e.status?"bg-green-900/20 border-green-500":"error"===e.status?"bg-red-900/20 border-red-500":"bg-yellow-900/20 border-yellow-500"),children:[se.jsxs("div",{className:"flex items-center justify-between",children:[se.jsx("h3",{className:"font-semibold text-white",children:e.test}),se.jsx("span",{className:"px-2 py-1 rounded text-xs font-bold "+("success"===e.status?"bg-green-600 text-white":"error"===e.status?"bg-red-600 text-white":"bg-yellow-600 text-black"),children:e.status.toUpperCase()})]}),se.jsx("p",{className:"text-white/80 mt-2",children:e.message}),e.details&&se.jsxs("details",{className:"mt-2",children:[se.jsx("summary",{className:"text-white/60 cursor-pointer hover:text-white",children:"Ver detalhes"}),se.jsx("pre",{className:"bg-black/30 p-3 rounded mt-2 text-xs text-green-300 overflow-x-auto",children:JSON.stringify(e.details,null,2)})]})]},t))})]})})})},Sf="https://appdropcalc-production.up.railway.app",Cf=()=>{const{user:t,plan:n,checkPlanAccess:s}=Gd(),i=r();if(console.log("=== DashboardCalculadora INICIANDO ==="),console.log("User:",t),console.log("User autenticado:",!!t),console.log("Plan:",n),console.log("localStorage userPlan:",localStorage.getItem("userPlan")),console.log("localStorage premiumActive:",localStorage.getItem("premiumActive")),!t)return console.log("Usuário não autenticado, redirecionando para login"),se.jsx("div",{className:"min-h-screen flex items-center justify-center",children:se.jsxs("div",{className:"text-center",children:[se.jsx("h1",{children:"Carregando usuário..."}),se.jsx("p",{children:"Redirecionando..."})]})});const[o,a]=e.useState({custoProduto:100,custosAdicionais:0,moedaOrigem:"USD",moedaVenda:"BRL",plataforma:"mercado-livre",gateway:"mercado-pago",margemLucro:30}),[l,c]=e.useState(null),[p,m]=e.useState(0),[f,g]=e.useState(!1),[y,v]=e.useState(!1),b=()=>"basic"===n?.type||!s("professional"),x=async()=>{v(!0);try{const e=await fetch(`${Sf}/calc/calcular`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok)throw new Error("Erro no cálculo");const t=await e.json();c(t)}catch(e){console.error("Erro no cálculo:",e);const t=(o.custoProduto+o.custosAdicionais)*p,n=.05*t,r=.035*t,s=t+n+r,i=s*(o.margemLucro/100);c({precoVenda:s+i,detalhes:{custoProduto:o.custoProduto,custosAdicionais:o.custosAdicionais,taxaCambio:p,custoConvertido:t,taxaPlataforma:n,taxaGateway:r,taxaTotal:n+r,margemLucro:o.margemLucro,valorMargemBRL:i}})}finally{v(!1)}};e.useEffect(()=>{o.moedaOrigem&&o.moedaVenda&&(async()=>{try{const e=await fetch(`${Sf}/exchange/rate/${o.moedaOrigem}/${o.moedaVenda}`),t=await e.json();m(t.rate)}catch(e){console.error("Erro ao buscar taxa de câmbio:",e),m(5.5)}})()},[o.moedaOrigem,o.moedaVenda]),e.useEffect(()=>{b()?null!==l&&c(null):p>0&&o.custoProduto>0&&x()},[o,p,n]);const w=(e,t)=>{a(n=>({...n,[e]:t}))};return t?se.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:[se.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20",children:[se.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:se.jsxs("div",{className:"flex justify-between items-center py-4",children:[se.jsxs("div",{className:"flex items-center gap-3",children:[se.jsx("div",{className:"p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl",children:se.jsx(h,{className:"h-6 w-6 text-white"})}),se.jsxs("div",{children:[se.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"DropCalc"}),"true"===localStorage.getItem("premiumActive")&&se.jsxs("div",{className:"flex items-center gap-1",children:[se.jsx(R,{className:"w-3 h-3 text-yellow-500"}),se.jsx("span",{className:"text-xs text-yellow-600 font-medium",children:"Premium"})]})]})]}),se.jsxs("div",{className:"flex items-center gap-4",children:[se.jsxs("span",{className:"text-gray-700 font-medium hidden sm:block",children:["Olá, ",t?.name||"Usuário","!"]}),se.jsxs("div",{className:"flex items-center gap-2",children:[se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i("/help"),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Ajuda",children:se.jsx(V,{className:"w-5 h-5"})}),se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i("/settings"),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Configurações",children:se.jsx(A,{className:"w-5 h-5"})}),se.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>g(!f),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors sm:hidden",title:"Menu",children:f?se.jsx(q,{className:"w-5 h-5"}):se.jsx(K,{className:"w-5 h-5"})})]})]})]})}),se.jsx($,{children:f&&se.jsx(u.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"border-t border-gray-200 bg-white sm:hidden",children:se.jsxs("div",{className:"px-4 py-3 space-y-2",children:[se.jsxs("button",{onClick:()=>{i("/help"),g(!1)},className:"flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:[se.jsx(V,{className:"w-5 h-5"}),"Ajuda"]}),se.jsxs("button",{onClick:()=>{i("/settings"),g(!1)},className:"flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:[se.jsx(A,{className:"w-5 h-5"}),"Configurações"]})]})})})]}),se.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:se.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[se.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[se.jsxs("div",{className:"flex items-center mb-6",children:[se.jsx(A,{className:"h-6 w-6 text-blue-600 mr-2"}),se.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Parâmetros do Produto"})]}),se.jsxs("div",{className:"space-y-6",children:[se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Custo do Produto"}),se.jsxs("div",{className:"relative",children:[se.jsx(W,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400"}),se.jsx("input",{type:"number",value:o.custoProduto,onChange:e=>w("custoProduto",parseFloat(e.target.value)||0),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"100.00"})]})]}),se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Custos Adicionais (Frete, Impostos, etc.)"}),se.jsx("input",{type:"number",value:o.custosAdicionais,onChange:e=>w("custosAdicionais",parseFloat(e.target.value)||0),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"0.00"})]}),se.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Moeda Origem"}),se.jsxs("select",{value:o.moedaOrigem,onChange:e=>w("moedaOrigem",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[se.jsxs("optgroup",{label:" Principais",children:[se.jsx("option",{value:"USD",children:"USD - Dólar Americano"}),se.jsx("option",{value:"EUR",children:"EUR - Euro"}),se.jsx("option",{value:"BRL",children:"BRL - Real Brasileiro"}),se.jsx("option",{value:"CNY",children:"CNY - Yuan Chinês"}),se.jsx("option",{value:"GBP",children:"GBP - Libra Esterlina"}),se.jsx("option",{value:"JPY",children:"JPY - Iene Japonês"})]}),se.jsxs("optgroup",{label:"🇺🇸 América do Norte",children:[se.jsx("option",{value:"CAD",children:"CAD - Dólar Canadense"}),se.jsx("option",{value:"MXN",children:"MXN - Peso Mexicano"})]}),se.jsxs("optgroup",{label:"🇧🇷 América do Sul",children:[se.jsx("option",{value:"ARS",children:"ARS - Peso Argentino"}),se.jsx("option",{value:"CLP",children:"CLP - Peso Chileno"}),se.jsx("option",{value:"COP",children:"COP - Peso Colombiano"}),se.jsx("option",{value:"UYU",children:"UYU - Peso Uruguaio"}),se.jsx("option",{value:"PEN",children:"PEN - Sol Peruano"}),se.jsx("option",{value:"BOB",children:"BOB - Boliviano"}),se.jsx("option",{value:"PYG",children:"PYG - Guarani Paraguaio"}),se.jsx("option",{value:"VES",children:"VES - Bolívar Venezuelano"})]}),se.jsxs("optgroup",{label:"🇪🇺 Europa",children:[se.jsx("option",{value:"CHF",children:"CHF - Franco Suíço"}),se.jsx("option",{value:"NOK",children:"NOK - Coroa Norueguesa"}),se.jsx("option",{value:"SEK",children:"SEK - Coroa Sueca"}),se.jsx("option",{value:"DKK",children:"DKK - Coroa Dinamarquesa"}),se.jsx("option",{value:"PLN",children:"PLN - Zloty Polonês"}),se.jsx("option",{value:"CZK",children:"CZK - Coroa Tcheca"}),se.jsx("option",{value:"HUF",children:"HUF - Forint Húngaro"}),se.jsx("option",{value:"RON",children:"RON - Leu Romeno"}),se.jsx("option",{value:"BGN",children:"BGN - Lev Búlgaro"}),se.jsx("option",{value:"HRK",children:"HRK - Kuna Croata"}),se.jsx("option",{value:"RUB",children:"RUB - Rublo Russo"}),se.jsx("option",{value:"UAH",children:"UAH - Hryvnia Ucraniana"}),se.jsx("option",{value:"TRY",children:"TRY - Lira Turca"})]}),se.jsxs("optgroup",{label:" Ásia-Pacífico",children:[se.jsx("option",{value:"AUD",children:"AUD - Dólar Australiano"}),se.jsx("option",{value:"NZD",children:"NZD - Dólar Neozelandês"}),se.jsx("option",{value:"KRW",children:"KRW - Won Sul-coreano"}),se.jsx("option",{value:"SGD",children:"SGD - Dólar de Singapura"}),se.jsx("option",{value:"HKD",children:"HKD - Dólar de Hong Kong"}),se.jsx("option",{value:"THB",children:"THB - Baht Tailandês"}),se.jsx("option",{value:"MYR",children:"MYR - Ringgit Malaio"}),se.jsx("option",{value:"PHP",children:"PHP - Peso Filipino"}),se.jsx("option",{value:"IDR",children:"IDR - Rupia Indonésia"}),se.jsx("option",{value:"VND",children:"VND - Dong Vietnamita"}),se.jsx("option",{value:"INR",children:"INR - Rupia Indiana"}),se.jsx("option",{value:"PKR",children:"PKR - Rupia Paquistanesa"}),se.jsx("option",{value:"BDT",children:"BDT - Taka de Bangladesh"}),se.jsx("option",{value:"LKR",children:"LKR - Rupia do Sri Lanka"}),se.jsx("option",{value:"NPR",children:"NPR - Rupia Nepalesa"}),se.jsx("option",{value:"MMK",children:"MMK - Kyat de Mianmar"}),se.jsx("option",{value:"KHR",children:"KHR - Riel Cambojano"}),se.jsx("option",{value:"LAK",children:"LAK - Kip Laosiano"}),se.jsx("option",{value:"BND",children:"BND - Dólar de Brunei"})]}),se.jsxs("optgroup",{label:" Oriente Médio & África",children:[se.jsx("option",{value:"SAR",children:"SAR - Riyal Saudita"}),se.jsx("option",{value:"AED",children:"AED - Dirham dos Emirados"}),se.jsx("option",{value:"QAR",children:"QAR - Riyal do Qatar"}),se.jsx("option",{value:"KWD",children:"KWD - Dinar do Kuwait"}),se.jsx("option",{value:"BHD",children:"BHD - Dinar do Bahrein"}),se.jsx("option",{value:"OMR",children:"OMR - Rial Omanense"}),se.jsx("option",{value:"JOD",children:"JOD - Dinar Jordaniano"}),se.jsx("option",{value:"LBP",children:"LBP - Libra Libanesa"}),se.jsx("option",{value:"ILS",children:"ILS - Shekel Israelense"}),se.jsx("option",{value:"EGP",children:"EGP - Libra Egípcia"}),se.jsx("option",{value:"ZAR",children:"ZAR - Rand Sul-africano"}),se.jsx("option",{value:"NGN",children:"NGN - Naira Nigeriana"}),se.jsx("option",{value:"KES",children:"KES - Xelim Queniano"}),se.jsx("option",{value:"UGX",children:"UGX - Xelim Ugandense"}),se.jsx("option",{value:"TZS",children:"TZS - Xelim Tanzaniano"}),se.jsx("option",{value:"GHS",children:"GHS - Cedi Ganês"}),se.jsx("option",{value:"MAD",children:"MAD - Dirham Marroquino"}),se.jsx("option",{value:"TND",children:"TND - Dinar Tunisiano"}),se.jsx("option",{value:"DZD",children:"DZD - Dinar Argelino"}),se.jsx("option",{value:"LYD",children:"LYD - Dinar Líbio"}),se.jsx("option",{value:"SDG",children:"SDG - Libra Sudanesa"}),se.jsx("option",{value:"ETB",children:"ETB - Birr Etíope"}),se.jsx("option",{value:"XOF",children:"XOF - Franco CFA Oeste Africano"}),se.jsx("option",{value:"XAF",children:"XAF - Franco CFA Centro Africano"})]}),se.jsxs("optgroup",{label:" Criptomoedas",children:[se.jsx("option",{value:"BTC",children:"BTC - Bitcoin"}),se.jsx("option",{value:"ETH",children:"ETH - Ethereum"}),se.jsx("option",{value:"USDT",children:"USDT - Tether"}),se.jsx("option",{value:"BNB",children:"BNB - Binance Coin"}),se.jsx("option",{value:"ADA",children:"ADA - Cardano"}),se.jsx("option",{value:"DOGE",children:"DOGE - Dogecoin"}),se.jsx("option",{value:"XRP",children:"XRP - Ripple"}),se.jsx("option",{value:"LTC",children:"LTC - Litecoin"}),se.jsx("option",{value:"BCH",children:"BCH - Bitcoin Cash"})]})]})]}),se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Moeda Venda"}),se.jsxs("select",{value:o.moedaVenda,onChange:e=>w("moedaVenda",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[se.jsxs("optgroup",{label:" Principais",children:[se.jsx("option",{value:"BRL",children:"BRL - Real Brasileiro"}),se.jsx("option",{value:"USD",children:"USD - Dólar Americano"}),se.jsx("option",{value:"EUR",children:"EUR - Euro"}),se.jsx("option",{value:"CNY",children:"CNY - Yuan Chinês"}),se.jsx("option",{value:"GBP",children:"GBP - Libra Esterlina"}),se.jsx("option",{value:"JPY",children:"JPY - Iene Japonês"})]}),se.jsxs("optgroup",{label:"🇺🇸 América do Norte",children:[se.jsx("option",{value:"CAD",children:"CAD - Dólar Canadense"}),se.jsx("option",{value:"MXN",children:"MXN - Peso Mexicano"})]}),se.jsxs("optgroup",{label:"🇧🇷 América do Sul",children:[se.jsx("option",{value:"ARS",children:"ARS - Peso Argentino"}),se.jsx("option",{value:"CLP",children:"CLP - Peso Chileno"}),se.jsx("option",{value:"COP",children:"COP - Peso Colombiano"}),se.jsx("option",{value:"UYU",children:"UYU - Peso Uruguaio"}),se.jsx("option",{value:"PEN",children:"PEN - Sol Peruano"}),se.jsx("option",{value:"BOB",children:"BOB - Boliviano"}),se.jsx("option",{value:"PYG",children:"PYG - Guarani Paraguaio"}),se.jsx("option",{value:"VES",children:"VES - Bolívar Venezuelano"})]}),se.jsxs("optgroup",{label:"🇪🇺 Europa",children:[se.jsx("option",{value:"CHF",children:"CHF - Franco Suíço"}),se.jsx("option",{value:"NOK",children:"NOK - Coroa Norueguesa"}),se.jsx("option",{value:"SEK",children:"SEK - Coroa Sueca"}),se.jsx("option",{value:"DKK",children:"DKK - Coroa Dinamarquesa"}),se.jsx("option",{value:"PLN",children:"PLN - Zloty Polonês"}),se.jsx("option",{value:"CZK",children:"CZK - Coroa Tcheca"}),se.jsx("option",{value:"HUF",children:"HUF - Forint Húngaro"}),se.jsx("option",{value:"RON",children:"RON - Leu Romeno"}),se.jsx("option",{value:"BGN",children:"BGN - Lev Búlgaro"}),se.jsx("option",{value:"HRK",children:"HRK - Kuna Croata"}),se.jsx("option",{value:"RUB",children:"RUB - Rublo Russo"}),se.jsx("option",{value:"UAH",children:"UAH - Hryvnia Ucraniana"}),se.jsx("option",{value:"TRY",children:"TRY - Lira Turca"})]}),se.jsxs("optgroup",{label:" Ásia-Pacífico",children:[se.jsx("option",{value:"AUD",children:"AUD - Dólar Australiano"}),se.jsx("option",{value:"NZD",children:"NZD - Dólar Neozelandês"}),se.jsx("option",{value:"KRW",children:"KRW - Won Sul-coreano"}),se.jsx("option",{value:"SGD",children:"SGD - Dólar de Singapura"}),se.jsx("option",{value:"HKD",children:"HKD - Dólar de Hong Kong"}),se.jsx("option",{value:"THB",children:"THB - Baht Tailandês"}),se.jsx("option",{value:"MYR",children:"MYR - Ringgit Malaio"}),se.jsx("option",{value:"PHP",children:"PHP - Peso Filipino"}),se.jsx("option",{value:"IDR",children:"IDR - Rupia Indonésia"}),se.jsx("option",{value:"VND",children:"VND - Dong Vietnamita"}),se.jsx("option",{value:"INR",children:"INR - Rupia Indiana"}),se.jsx("option",{value:"PKR",children:"PKR - Rupia Paquistanesa"}),se.jsx("option",{value:"BDT",children:"BDT - Taka de Bangladesh"}),se.jsx("option",{value:"LKR",children:"LKR - Rupia do Sri Lanka"}),se.jsx("option",{value:"NPR",children:"NPR - Rupia Nepalesa"}),se.jsx("option",{value:"MMK",children:"MMK - Kyat de Mianmar"}),se.jsx("option",{value:"KHR",children:"KHR - Riel Cambojano"}),se.jsx("option",{value:"LAK",children:"LAK - Kip Laosiano"}),se.jsx("option",{value:"BND",children:"BND - Dólar de Brunei"})]}),se.jsxs("optgroup",{label:" Oriente Médio & África",children:[se.jsx("option",{value:"SAR",children:"SAR - Riyal Saudita"}),se.jsx("option",{value:"AED",children:"AED - Dirham dos Emirados"}),se.jsx("option",{value:"QAR",children:"QAR - Riyal do Qatar"}),se.jsx("option",{value:"KWD",children:"KWD - Dinar do Kuwait"}),se.jsx("option",{value:"BHD",children:"BHD - Dinar do Bahrein"}),se.jsx("option",{value:"OMR",children:"OMR - Rial Omanense"}),se.jsx("option",{value:"JOD",children:"JOD - Dinar Jordaniano"}),se.jsx("option",{value:"LBP",children:"LBP - Libra Libanesa"}),se.jsx("option",{value:"ILS",children:"ILS - Shekel Israelense"}),se.jsx("option",{value:"EGP",children:"EGP - Libra Egípcia"}),se.jsx("option",{value:"ZAR",children:"ZAR - Rand Sul-africano"}),se.jsx("option",{value:"NGN",children:"NGN - Naira Nigeriana"}),se.jsx("option",{value:"KES",children:"KES - Xelim Queniano"}),se.jsx("option",{value:"UGX",children:"UGX - Xelim Ugandense"}),se.jsx("option",{value:"TZS",children:"TZS - Xelim Tanzaniano"}),se.jsx("option",{value:"GHS",children:"GHS - Cedi Ganês"}),se.jsx("option",{value:"MAD",children:"MAD - Dirham Marroquino"}),se.jsx("option",{value:"TND",children:"TND - Dinar Tunisiano"}),se.jsx("option",{value:"DZD",children:"DZD - Dinar Argelino"}),se.jsx("option",{value:"LYD",children:"LYD - Dinar Líbio"}),se.jsx("option",{value:"SDG",children:"SDG - Libra Sudanesa"}),se.jsx("option",{value:"ETB",children:"ETB - Birr Etíope"}),se.jsx("option",{value:"XOF",children:"XOF - Franco CFA Oeste Africano"}),se.jsx("option",{value:"XAF",children:"XAF - Franco CFA Centro Africano"})]}),se.jsxs("optgroup",{label:" Criptomoedas",children:[se.jsx("option",{value:"BTC",children:"BTC - Bitcoin"}),se.jsx("option",{value:"ETH",children:"ETH - Ethereum"}),se.jsx("option",{value:"USDT",children:"USDT - Tether"}),se.jsx("option",{value:"BNB",children:"BNB - Binance Coin"}),se.jsx("option",{value:"ADA",children:"ADA - Cardano"}),se.jsx("option",{value:"DOGE",children:"DOGE - Dogecoin"}),se.jsx("option",{value:"XRP",children:"XRP - Ripple"}),se.jsx("option",{value:"LTC",children:"LTC - Litecoin"}),se.jsx("option",{value:"BCH",children:"BCH - Bitcoin Cash"})]})]})]})]}),se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Plataforma de Venda"}),se.jsxs("select",{value:o.plataforma,onChange:e=>w("plataforma",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[se.jsxs("optgroup",{label:"Marketplaces Nacionais",children:[se.jsx("option",{value:"mercado-livre",children:"Mercado Livre"}),se.jsx("option",{value:"amazon-br",children:"Amazon Brasil"}),se.jsx("option",{value:"shopee",children:"Shopee"}),se.jsx("option",{value:"magazineluiza",children:"Magazine Luiza"}),se.jsx("option",{value:"americanas",children:"Americanas"}),se.jsx("option",{value:"casas-bahia",children:"Casas Bahia"}),se.jsx("option",{value:"via-varejo",children:"Via Varejo"})]}),se.jsxs("optgroup",{label:"E-commerce Próprio",children:[se.jsx("option",{value:"shopify",children:"Shopify"}),se.jsx("option",{value:"nuvemshop",children:"Nuvemshop"}),se.jsx("option",{value:"woocommerce",children:"WooCommerce"}),se.jsx("option",{value:"magento",children:"Magento"}),se.jsx("option",{value:"opencart",children:"OpenCart"}),se.jsx("option",{value:"prestashop",children:"PrestaShop"}),se.jsx("option",{value:"tray",children:"Tray Commerce"}),se.jsx("option",{value:"vtex",children:"VTEX"})]}),se.jsxs("optgroup",{label:"Marketplaces Internacionais",children:[se.jsx("option",{value:"amazon-us",children:"Amazon US"}),se.jsx("option",{value:"ebay",children:"eBay"}),se.jsx("option",{value:"etsy",children:"Etsy"}),se.jsx("option",{value:"aliexpress",children:"AliExpress"})]}),se.jsxs("optgroup",{label:"Redes Sociais",children:[se.jsx("option",{value:"facebook-shop",children:"Facebook Shop"}),se.jsx("option",{value:"instagram-shop",children:"Instagram Shopping"}),se.jsx("option",{value:"whatsapp-business",children:"WhatsApp Business"})]})]})]}),se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Gateway de Pagamento"}),se.jsxs("select",{value:o.gateway,onChange:e=>w("gateway",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[se.jsxs("optgroup",{label:"Gateways Nacionais",children:[se.jsx("option",{value:"mercado-pago",children:"Mercado Pago"}),se.jsx("option",{value:"pagseguro",children:"PagSeguro"}),se.jsx("option",{value:"cielo",children:"Cielo"}),se.jsx("option",{value:"rede",children:"Rede"}),se.jsx("option",{value:"getnet",children:"Getnet"}),se.jsx("option",{value:"stone",children:"Stone"}),se.jsx("option",{value:"pagar-me",children:"Pagar.me"}),se.jsx("option",{value:"wirecard",children:"Wirecard"}),se.jsx("option",{value:"asaas",children:"Asaas"}),se.jsx("option",{value:"ebanx",children:"EBANX"})]}),se.jsxs("optgroup",{label:"Gateways Internacionais",children:[se.jsx("option",{value:"paypal",children:"PayPal"}),se.jsx("option",{value:"stripe",children:"Stripe"}),se.jsx("option",{value:"square",children:"Square"}),se.jsx("option",{value:"braintree",children:"Braintree"}),se.jsx("option",{value:"adyen",children:"Adyen"}),se.jsx("option",{value:"checkout",children:"Checkout.com"})]}),se.jsxs("optgroup",{label:"Pagamento Digital",children:[se.jsx("option",{value:"pix",children:"PIX"}),se.jsx("option",{value:"picpay",children:"PicPay"}),se.jsx("option",{value:"payoneer",children:"Payoneer"}),se.jsx("option",{value:"skrill",children:"Skrill"})]})]})]}),se.jsxs("div",{children:[se.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Margem de Lucro (%)"}),se.jsxs("div",{className:"relative",children:[se.jsx(d,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400"}),se.jsx("input",{type:"number",value:o.margemLucro,onChange:e=>w("margemLucro",parseFloat(e.target.value)||0),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"30"})]})]}),p>0&&se.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:se.jsxs("p",{className:"text-sm text-blue-600",children:["Taxa de câmbio atual: ",o.moedaOrigem," → ",o.moedaVenda," = ",p.toFixed(4)]})}),b()&&se.jsxs("button",{onClick:x,disabled:y||o.custoProduto<=0||p<=0,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center",children:[se.jsx(h,{className:"h-5 w-5 mr-2"}),y?"Calculando...":"Calcular Preço"]}),se.jsxs("button",{onClick:()=>{a({custoProduto:0,custosAdicionais:0,moedaOrigem:"USD",moedaVenda:"BRL",plataforma:"mercado-livre",gateway:"mercado-pago",margemLucro:30}),c(null)},className:"w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center",children:[se.jsx(A,{className:"h-5 w-5 mr-2"}),"Limpar Formulário"]}),se.jsx("div",{className:"p-4 rounded-lg "+(b()?"bg-orange-50":"bg-green-50"),children:se.jsxs("p",{className:"text-sm flex items-center "+(b()?"text-orange-600":"text-green-600"),children:[se.jsx(d,{className:"h-4 w-4 mr-2"}),b()?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real"]})})]})]}),se.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[se.jsxs("div",{className:"flex items-center mb-6",children:[se.jsx(W,{className:"h-6 w-6 text-green-600 mr-2"}),se.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Resultado do Cálculo"})]}),l?se.jsxs("div",{className:"space-y-6",children:[se.jsxs("div",{className:"text-center bg-green-50 p-6 rounded-lg",children:[se.jsx("h3",{className:"text-2xl font-bold text-green-600 mb-2",children:"Preço de Venda Sugerido"}),se.jsxs("p",{className:"text-4xl font-bold text-green-700",children:[o.moedaVenda," ",l.precoVenda.toFixed(2)]})]}),se.jsxs("div",{className:"space-y-4",children:[se.jsx("h4",{className:"text-lg font-semibold text-gray-900",children:"Detalhamento:"}),se.jsxs("div",{className:"space-y-3",children:[se.jsxs("div",{className:"flex justify-between",children:[se.jsx("span",{className:"text-gray-600",children:"Custo do Produto:"}),se.jsxs("span",{className:"font-medium",children:[o.moedaOrigem," ",l.detalhes.custoProduto.toFixed(2)]})]}),se.jsxs("div",{className:"flex justify-between",children:[se.jsx("span",{className:"text-gray-600",children:"Custos Adicionais:"}),se.jsxs("span",{className:"font-medium",children:[o.moedaOrigem," ",l.detalhes.custosAdicionais.toFixed(2)]})]}),se.jsxs("div",{className:"flex justify-between",children:[se.jsx("span",{className:"text-gray-600",children:"Taxa de Câmbio:"}),se.jsx("span",{className:"font-medium",children:l.detalhes.taxaCambio.toFixed(4)})]}),se.jsxs("div",{className:"flex justify-between",children:[se.jsx("span",{className:"text-gray-600",children:"Custo Convertido:"}),se.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.custoConvertido.toFixed(2)]})]}),se.jsxs("div",{className:"flex justify-between",children:[se.jsx("span",{className:"text-gray-600",children:"Taxa da Plataforma:"}),se.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.taxaPlataforma.toFixed(2)]})]}),se.jsxs("div",{className:"flex justify-between",children:[se.jsx("span",{className:"text-gray-600",children:"Taxa do Gateway:"}),se.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.taxaGateway.toFixed(2)]})]}),se.jsxs("div",{className:"flex justify-between border-t pt-3",children:[se.jsx("span",{className:"text-gray-600",children:"Total de Taxas:"}),se.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.taxaTotal.toFixed(2)]})]}),se.jsxs("div",{className:"flex justify-between",children:[se.jsxs("span",{className:"text-gray-600",children:["Margem de Lucro (",o.margemLucro,"%):"]}),se.jsxs("span",{className:"font-medium text-green-600",children:[o.moedaVenda," ",l.detalhes.valorMargemBRL.toFixed(2)]})]})]})]})]}):se.jsxs("div",{className:"text-center text-gray-500 py-12",children:[se.jsx(h,{className:"h-16 w-16 mx-auto mb-4 opacity-50"}),se.jsx("p",{children:'Preencha os dados e clique em "Calcular Preço" para ver o resultado'})]})]})]})})]}):se.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center",children:se.jsx("div",{children:"Carregando..."})})};class Tf extends n.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?se.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:se.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center max-w-md",children:[se.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ops! Algo deu errado"}),se.jsx("p",{className:"text-gray-300 mb-6",children:"Ocorreu um erro inesperado. Tente recarregar a página."}),se.jsx("button",{onClick:()=>window.location.reload(),className:"bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200",children:"Recarregar Página"}),this.state.error&&se.jsxs("details",{className:"mt-4 text-left",children:[se.jsx("summary",{className:"text-gray-400 cursor-pointer",children:"Detalhes técnicos"}),se.jsx("pre",{className:"text-xs text-red-300 mt-2 overflow-auto",children:this.state.error.toString()})]})]})}):this.props.children}}const _f=()=>(console.log("=== AppHybrid carregando ==="),se.jsx(ht,{children:se.jsx(o,{children:se.jsxs("div",{className:"App",children:[se.jsxs(a,{children:[se.jsx(l,{path:"/welcome",element:se.jsx(Kd,{})}),se.jsx(l,{path:"/debug",element:se.jsx(Nf,{})}),se.jsx(l,{path:"/login",element:se.jsx(Wd,{})}),se.jsx(l,{path:"/login-simple",element:se.jsx(Jd,{})}),se.jsx(l,{path:"/login-alt",element:se.jsx(Xd,{})}),se.jsx(l,{path:"/auth/callback",element:se.jsx(Qd,{})}),se.jsx(l,{path:"/forgot-password",element:se.jsx(np,{})}),se.jsx(l,{path:"/reset-password",element:se.jsx(rp,{})}),se.jsx(l,{path:"/signup",element:se.jsx(Wd,{})}),se.jsx(l,{path:"/payment",element:se.jsx(bf,{})}),se.jsx(l,{path:"/payment-success",element:se.jsx(qd,{})}),se.jsx(l,{path:"/dashboard",element:se.jsx(Tf,{children:se.jsx(Cf,{})})}),se.jsx(l,{path:"/settings",element:se.jsx(wf,{})}),se.jsx(l,{path:"/help",element:se.jsx(Ef,{})}),se.jsx(l,{path:"/",element:se.jsx(c,{to:"/welcome",replace:!0})}),se.jsx(l,{path:"*",element:se.jsx(c,{to:"/welcome",replace:!0})})]}),se.jsx(lt,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})}));let If;async function jf(){if(If){If.prompt();const{outcome:e}=await If.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}If=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),If=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",jf),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const Af=document.createElement("style");Af.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(Af),console.log("=== main.tsx carregando AppHybrid com sistema de idiomas ===");ie.createRoot(document.getElementById("root")).render(se.jsx(ce,{children:se.jsx(_f,{})}));
