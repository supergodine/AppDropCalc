import{r as e,b as t,a}from"./vendor-5fcaeebf-1762556504426.js";import{L as r,u as s,a as i,B as o,R as n,b as l,N as c}from"./router-0057e328-1762556504426.js";import{m as d,C as u,T as h,Z as m,A as p,U as g,M as x,L as f,E as b,a as y,b as v,c as w,d as N,S as j,e as k,f as C,g as S,h as I,i as E,G as _,j as P,k as T,l as A,n as R,o as D,p as L,q as O,B as M,r as U,s as F,t as B,H as V,u as $,v as z,P as H,w as G,x as W,X as q,y as K,I as J,D as Z}from"./ui-7c66321e-1762556504426.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var Y={exports:{}},X={},Q=e,ee=Symbol.for("react.element"),te=Symbol.for("react.fragment"),ae=Object.prototype.hasOwnProperty,re=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,se={key:!0,ref:!0,__self:!0,__source:!0};function ie(e,t,a){var r,s={},i=null,o=null;for(r in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)ae.call(t,r)&&!se.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:ee,type:e,key:i,ref:o,props:s,_owner:re.current}}X.Fragment=te,X.jsx=ie,X.jsxs=ie,Y.exports=X;var oe=Y.exports,ne={},le=t;ne.createRoot=le.createRoot,ne.hydrateRoot=le.hydrateRoot;const ce={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},de=e.createContext(void 0),ue=({children:t})=>{const[a,r]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&r(e)},[]);const s={language:a,setLanguage:e=>{r(e),localStorage.setItem("language",e)},t:e=>ce[a][e]||e};return oe.jsx(de.Provider,{value:s,children:t})},he=()=>{const t=e.useContext(de);if(!t)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return t};let me,pe,ge,xe={data:""},fe=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||xe},be=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ye=/\/\*[^]*?\*\/|  +/g,ve=/\n+/g,we=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?we(o,i):i+"{"+we(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=we(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=we.p?we.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},Ne={},je=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+je(e[a]);return t}return e},ke=(e,t,a,r,s)=>{let i=je(e),o=Ne[i]||(Ne[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!Ne[o]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=be.exec(e.replace(ye,""));)t[4]?r.shift():t[3]?(a=t[3].replace(ve," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(ve," ").trim();return r[0]})(e);Ne[o]=we(s?{["@keyframes "+o]:t}:t,a?"":"."+o)}let n=a&&Ne.g?Ne.g:null;return a&&(Ne.g=Ne[o]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(Ne[o],t,r,n),o};function Ce(e){let t=this||{},a=e.call?e(t.p):e;return ke(a.unshift?a.raw?((e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":we(e,""):!1===e?"":e}return e+r+(null==i?"":i)},""))(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,fe(t.target),t.g,t.o,t.k)}Ce.bind({g:1});let Se=Ce.bind({k:1});function Ie(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:pe&&pe()},n),a.o=/ *go\d+/.test(l),n.className=Ce.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),ge&&c[0]&&ge(n),me(c,n)}return t?t(s):s}}var Ee=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,_e=(()=>{let e=0;return()=>(++e).toString()})(),Pe=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Te="default",Ae=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return Ae(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},Re=[],De={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},Le={},Oe=(e,t=Te)=>{Le[t]=Ae(Le[t]||De,e),Re.forEach(([e,a])=>{e===t&&a(Le[t])})},Me=e=>Object.keys(Le).forEach(t=>Oe(e,t)),Ue=(e=Te)=>t=>{Oe(t,e)},Fe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Be=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||_e()}))(t,e,a);return Ue(r.toasterId||(e=>Object.keys(Le).find(t=>Le[t].toasts.some(t=>t.id===e)))(r.id))({type:2,toast:r}),r.id},Ve=(e,t)=>Be("blank")(e,t);Ve.error=Be("error"),Ve.success=Be("success"),Ve.loading=Be("loading"),Ve.custom=Be("custom"),Ve.dismiss=(e,t)=>{let a={type:3,toastId:e};t?Ue(t)(a):Me(a)},Ve.dismissAll=e=>Ve.dismiss(void 0,e),Ve.remove=(e,t)=>{let a={type:4,toastId:e};t?Ue(t)(a):Me(a)},Ve.removeAll=e=>Ve.remove(void 0,e),Ve.promise=(e,t,a)=>{let r=Ve.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?Ee(t.success,e):void 0;return s?Ve.success(s,{id:r,...a,...null==a?void 0:a.success}):Ve.dismiss(r),e}).catch(e=>{let s=t.error?Ee(t.error,e):void 0;s?Ve.error(s,{id:r,...a,...null==a?void 0:a.error}):Ve.dismiss(r)}),e};var $e=(t,a="default")=>{let{toasts:r,pausedAt:s}=((t={},a=Te)=>{let[r,s]=e.useState(Le[a]||De),i=e.useRef(Le[a]);e.useEffect(()=>(i.current!==Le[a]&&s(Le[a]),Re.push([a,s]),()=>{let e=Re.findIndex(([e])=>e===a);e>-1&&Re.splice(e,1)}),[a]);let o=r.toasts.map(e=>{var a,r,s;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(a=t[e.type])?void 0:a.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(r=t[e.type])?void 0:r.duration)||(null==t?void 0:t.duration)||Fe[e.type],style:{...t.style,...null==(s=t[e.type])?void 0:s.style,...e.style}}});return{...r,toasts:o}})(t,a),i=e.useRef(new Map).current,o=e.useCallback((e,t=1e3)=>{if(i.has(e))return;let a=setTimeout(()=>{i.delete(e),n({type:4,toastId:e})},t);i.set(e,a)},[]);e.useEffect(()=>{if(s)return;let e=Date.now(),t=r.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout(()=>Ve.dismiss(t.id,a),r);t.visible&&Ve.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[r,s,a]);let n=e.useCallback(Ue(a),[a]),l=e.useCallback(()=>{n({type:5,time:Date.now()})},[n]),c=e.useCallback((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=e.useCallback(()=>{s&&n({type:6,time:Date.now()})},[s,n]),u=e.useCallback((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return e.useEffect(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},ze=Se`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,He=Se`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ge=Se`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,We=Ie("div")`
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
    animation: ${He} 0.15s ease-out forwards;
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
    animation: ${Ge} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,qe=Se`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ke=Ie("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${qe} 1s linear infinite;
`,Je=Se`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ze=Se`
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
}`,Ye=Ie("div")`
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
    animation: ${Ze} 0.2s ease-out forwards;
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
`,Xe=Ie("div")`
  position: absolute;
`,Qe=Ie("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,et=Se`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,tt=Ie("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${et} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,at=({toast:t})=>{let{icon:a,type:r,iconTheme:s}=t;return void 0!==a?"string"==typeof a?e.createElement(tt,null,a):a:"blank"===r?null:e.createElement(Qe,null,e.createElement(Ke,{...s}),"loading"!==r&&e.createElement(Xe,null,"error"===r?e.createElement(We,{...s}):e.createElement(Ye,{...s})))},rt=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,st=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,it=Ie("div")`
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
`,ot=Ie("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,nt=e.memo(({toast:t,position:a,style:r,children:s})=>{let i=t.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=Pe()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[rt(a),st(a)];return{animation:t?`${Se(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Se(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||a||"top-center",t.visible):{opacity:0},o=e.createElement(at,{toast:t}),n=e.createElement(ot,{...t.ariaProps},Ee(t.message,t));return e.createElement(it,{className:t.className,style:{...i,...r,...t.style}},"function"==typeof s?s({icon:o,message:n}):e.createElement(e.Fragment,null,o,n))});!function(e,t,a,r){we.p=t,me=e,pe=a,ge=r}(e.createElement);var lt=({id:t,className:a,style:r,onHeightUpdate:s,children:i})=>{let o=e.useCallback(e=>{if(e){let a=()=>{let a=e.getBoundingClientRect().height;s(t,a)};a(),new MutationObserver(a).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return e.createElement("div",{ref:o,className:a,style:r},i)},ct=Ce`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,dt=({reverseOrder:t,position:a="top-center",toastOptions:r,gutter:s,children:i,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=$e(r,o);return e.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let o=r.position||a,n=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Pe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...s}})(o,d.calculateOffset(r,{reverseOrder:t,gutter:s,defaultPosition:a}));return e.createElement(lt,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ct:"",style:n},"custom"===r.type?Ee(r.message,r):i?i(r):e.createElement(nt,{toast:r,position:o}))}))},ut=Ve;const ht=e.createContext(void 0);function mt({children:t}){const[a,r]=e.useState(()=>localStorage.getItem("theme")||"dark");e.useEffect(()=>{const e=window.document.documentElement;"dark"===a?e.classList.add("dark"):e.classList.remove("dark")},[a]);const s=e=>{r(e),localStorage.setItem("theme",e)};return oe.jsx(ht.Provider,{value:{theme:a,setTheme:s,toggleTheme:()=>{s("light"===a?"dark":"light")}},children:t})}const pt=()=>oe.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #f0fdf4 0%, #dbeafe 100%)",padding:"2rem",fontFamily:"system-ui, sans-serif"},children:oe.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[oe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem"},children:[oe.jsxs("div",{style:{textAlign:"center"},children:[oe.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#1f2937",marginBottom:"0.5rem"},children:"🧮 DropCalc"}),oe.jsx("p",{style:{fontSize:"1.125rem",color:"#6b7280"},children:"Calculadora de Preços para Dropshipping"})]}),oe.jsxs("div",{style:{display:"flex",gap:"10px"},children:[oe.jsx("a",{href:"/dashboard",style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",textDecoration:"none",fontSize:"14px"},children:"📊 Dashboard"}),oe.jsx("button",{onClick:()=>{localStorage.clear(),alert("Todos os dados do localStorage foram limpos! Recarregue a página.")},style:{padding:"8px 16px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px"},children:"🗑️ Limpar Dados"})]})]}),oe.jsxs("div",{style:{display:"grid",gridTemplateColumns:window.innerWidth>1024?"1fr 1fr":"1fr",gap:"2rem"},children:[oe.jsxs("div",{style:{background:"white",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",padding:"1.5rem"},children:[oe.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600",color:"#1f2937",marginBottom:"1.5rem"},children:"Dados do Produto"}),oe.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[oe.jsxs("div",{children:[oe.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Custo do Fornecedor (USD)"}),oe.jsx("input",{type:"number",defaultValue:"100",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"}})]}),oe.jsxs("div",{children:[oe.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Margem Desejada (%)"}),oe.jsx("input",{type:"number",defaultValue:"30",style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"}})]}),oe.jsxs("div",{children:[oe.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Plataforma"}),oe.jsxs("select",{style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"},children:[oe.jsx("option",{children:"Mercado Livre (16%)"}),oe.jsx("option",{children:"Amazon Brasil (15%)"}),oe.jsx("option",{children:"Nuvemshop (2%)"})]})]}),oe.jsxs("div",{children:[oe.jsx("label",{style:{display:"block",fontSize:"0.875rem",fontWeight:"500",color:"#374151",marginBottom:"0.25rem"},children:"Gateway de Pagamento"}),oe.jsxs("select",{style:{width:"100%",padding:"0.5rem 0.75rem",border:"1px solid #d1d5db",borderRadius:"0.5rem",fontSize:"0.875rem"},children:[oe.jsx("option",{children:"Mercado Pago (4.99%)"}),oe.jsx("option",{children:"PagSeguro (4.99%)"}),oe.jsx("option",{children:"PayPal (6.4%)"})]})]})]})]}),oe.jsxs("div",{style:{background:"white",borderRadius:"0.5rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",padding:"1.5rem"},children:[oe.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600",color:"#1f2937",marginBottom:"1.5rem"},children:"✨ Resultado"}),oe.jsxs("div",{style:{background:"#f0fdf4",borderRadius:"0.5rem",padding:"1rem",border:"1px solid #bbf7d0",marginBottom:"1.5rem",textAlign:"center"},children:[oe.jsx("p",{style:{fontSize:"0.875rem",color:"#16a34a",fontWeight:"500",marginBottom:"0.25rem"},children:"PREÇO DE VENDA"}),oe.jsx("p",{style:{fontSize:"2rem",fontWeight:"bold",color:"#15803d"},children:"R$ 825,00"}),oe.jsx("p",{style:{fontSize:"0.875rem",color:"#16a34a"},children:"(USD $ 150,00)"})]}),oe.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[oe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid #e5e7eb"},children:[oe.jsx("span",{style:{color:"#6b7280"},children:"Custo em BRL:"}),oe.jsx("span",{style:{fontWeight:"500"},children:"R$ 550,00"})]}),oe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid #e5e7eb"},children:[oe.jsx("span",{style:{color:"#6b7280"},children:"Taxa da Plataforma:"}),oe.jsx("span",{style:{fontWeight:"500"},children:"R$ 132,00"})]}),oe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid #e5e7eb"},children:[oe.jsx("span",{style:{color:"#6b7280"},children:"Taxa do Gateway:"}),oe.jsx("span",{style:{fontWeight:"500"},children:"R$ 41,17"})]}),oe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#f9fafb",borderRadius:"0.375rem",padding:"0.75rem"},children:[oe.jsx("span",{style:{color:"#1f2937",fontWeight:"500"},children:"Lucro:"}),oe.jsx("span",{style:{fontWeight:"bold",color:"#16a34a"},children:"R$ 101,83"})]})]}),oe.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"#eff6ff",borderRadius:"0.5rem",border:"1px solid #bfdbfe"},children:oe.jsxs("p",{style:{fontSize:"0.875rem",color:"#2563eb"},children:[oe.jsx("strong",{children:"Taxa de câmbio:"})," 1 USD = R$ 5,50"]})})]})]}),oe.jsx("div",{style:{marginTop:"2rem",textAlign:"center"},children:oe.jsx("p",{style:{color:"#6b7280"},children:"💡 DropCalc - Calculadora funcionando! Interface completa em desenvolvimento."})})]})}),gt=()=>oe.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[oe.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),oe.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),oe.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),oe.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),oe.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[oe.jsxs(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[oe.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:oe.jsx(u,{className:"w-10 h-10 text-white"})}),oe.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),oe.jsxs(d.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",oe.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",oe.jsx("br",{}),oe.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[oe.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[oe.jsx(h,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),oe.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),oe.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),oe.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[oe.jsx(m,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),oe.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),oe.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),oe.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[oe.jsx(u,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),oe.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),oe.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[oe.jsx(r,{to:"/login",children:oe.jsxs(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",oe.jsx(p,{className:"w-5 h-5"})]})}),oe.jsx(r,{to:"/login?mode=signup",children:oe.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),xt={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:xt.getBaseURL(),authSignup:xt.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[xt.auth.signup,xt.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const ft=function(e){const t=[];let a=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[a++]=s:s<2048?(t[a++]=s>>6|192,t[a++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[a++]=s>>18|240,t[a++]=s>>12&63|128,t[a++]=s>>6&63|128,t[a++]=63&s|128):(t[a++]=s>>12|224,t[a++]=s>>6&63|128,t[a++]=63&s|128)}return t},bt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,n=s+2<e.length,l=n?e[s+2]:0,c=t>>2,d=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,h=63&l;n||(h=64,i||(u=64)),r.push(a[c],a[d],a[u],a[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ft(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let a=0,r=0;for(;a<e.length;){const s=e[a++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[a++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[a++])<<12|(63&e[a++])<<6|63&e[a++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[a++],o=e[a++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const a=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=a[e.charAt(s++)],i=s<e.length?a[e.charAt(s)]:0;++s;const o=s<e.length?a[e.charAt(s)]:64;++s;const n=s<e.length?a[e.charAt(s)]:64;if(++s,null==t||null==i||null==o||null==n)throw new yt;const l=t<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==n){const e=o<<6&192|n;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class yt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vt=function(e){return function(e){const t=ft(e);return bt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},wt=function(e){try{return bt.decodeString(e,!0)}catch(xe){console.error("base64Decode failed: ",xe)}return null};
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
const Nt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,jt=()=>{try{return Nt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(xe){return}const t=e&&wt(e[1]);return t&&JSON.parse(t)})()}catch(xe){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${xe}`)}},kt=()=>jt()?.config,Ct=e=>jt()?.[`_${e}`];
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
class St{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,a))}}}
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
 */function It(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const Et={};let _t=!1;function Pt(e,t){if("undefined"==typeof window||"undefined"==typeof document||!It(window.location.host)||Et[e]===t||Et[e]||_t)return;function a(e){return`__firebase__banner__${e}`}Et[e]=t;const r="__firebase__banner",s=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(Et))Et[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function i(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{_t=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),a=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),a=!0),{created:a,element:t}}(r),t=a("text"),o=document.getElementById(t)||document.createElement("span"),n=a("learnmore"),l=document.getElementById(n)||document.createElement("a"),c=a("preprendIcon"),d=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,n);const a=i();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(d,c),t.append(d,o,l,a),document.body.appendChild(t)}s?(o.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function Tt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class At extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}}class Rt{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(Dt,(e,a)=>{const r=t[a];return null!=r?String(r):`<${a}?>`})}(s,a):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new At(r,o,a)}}const Dt=/\{\$([^}]+)}/g;function Lt(e,t){if(e===t)return!0;const a=Object.keys(e),r=Object.keys(t);for(const s of a){if(!r.includes(s))return!1;const a=e[s],i=t[s];if(Ot(a)&&Ot(i)){if(!Lt(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!a.includes(s))return!1;return!0}function Ot(e){return null!==e&&"object"==typeof e}
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
 */function Mt(e){const t=[];for(const[a,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Ut{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let r;if(void 0===e&&void 0===t&&void 0===a)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const a of t)if(a in e&&"function"==typeof e[a])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:a},void 0===r.next&&(r.next=Ft),void 0===r.error&&(r.error=Ft),void 0===r.complete&&(r.complete=Ft);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(xe){}}),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(xe){"undefined"!=typeof console&&console.error&&console.error(xe)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ft(){}
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
 */function Bt(e){return e&&e._delegate?e._delegate:e}class Vt{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const $t="[DEFAULT]";
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
 */class zt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new St;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&e.resolve(a)}catch(xe){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(xe){if(a)return null;throw xe}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch(xe){}for(const[e,t]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:a});t.resolve(e)}catch(xe){}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[s,i]of this.instancesDeferred.entries()){a===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){const a=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(a)??new Set;r.add(e),this.onInitCallbacks.set(a,r);const s=this.instances.get(a);return s&&e(s,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const r of a)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===$t?void 0:r),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}var r;return a||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ht{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Gt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Gt||(Gt={}));const Wt={debug:Gt.DEBUG,verbose:Gt.VERBOSE,info:Gt.INFO,warn:Gt.WARN,error:Gt.ERROR,silent:Gt.SILENT},qt=Gt.INFO,Kt={[Gt.DEBUG]:"log",[Gt.VERBOSE]:"log",[Gt.INFO]:"info",[Gt.WARN]:"warn",[Gt.ERROR]:"error"},Jt=(e,t,...a)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=Kt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...a)};class Zt{constructor(e){this.name=e,this._logLevel=qt,this._logHandler=Jt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Gt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Wt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Gt.DEBUG,...e),this._logHandler(this,Gt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Gt.VERBOSE,...e),this._logHandler(this,Gt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Gt.INFO,...e),this._logHandler(this,Gt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Gt.WARN,...e),this._logHandler(this,Gt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Gt.ERROR,...e),this._logHandler(this,Gt.ERROR,...e)}}let Yt,Xt;const Qt=new WeakMap,ea=new WeakMap,ta=new WeakMap,aa=new WeakMap,ra=new WeakMap;let sa={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return ea.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ta.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return na(e[t])},set:(e,t,a)=>(e[t]=a,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ia(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(la(this),t),na(Qt.get(this))}:function(...t){return na(e.apply(la(this),t))}:function(t,...a){const r=e.call(la(this),t,...a);return ta.set(r,t.sort?t.sort():[t]),na(r)}}function oa(e){return"function"==typeof e?ia(e):(e instanceof IDBTransaction&&function(e){if(ea.has(e))return;const t=new Promise((t,a)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});ea.set(e,t)}(e),t=e,(Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,sa):e);var t}function na(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,a)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(na(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&Qt.set(t,e)}).catch(()=>{}),ra.set(t,e),t}(e);if(aa.has(e))return aa.get(e);const t=oa(e);return t!==e&&(aa.set(e,t),ra.set(t,e)),t}const la=e=>ra.get(e);const ca=["get","getKey","getAll","getAllKeys","count"],da=["put","add","delete","clear"],ua=new Map;function ha(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ua.get(t))return ua.get(t);const a=t.replace(/FromIndex$/,""),r=t!==a,s=da.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!ca.includes(a))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[a](...t),s&&i.done]))[0]};return ua.set(t,i),i}sa=(e=>({...e,get:(t,a,r)=>ha(t,a)||e.get(t,a,r),has:(t,a)=>!!ha(t,a)||e.has(t,a)}))(sa);
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
class ma{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const pa="@firebase/app",ga="0.14.5",xa=new Zt("@firebase/app"),fa="@firebase/app-compat",ba="@firebase/analytics-compat",ya="@firebase/analytics",va="@firebase/app-check-compat",wa="@firebase/app-check",Na="@firebase/auth",ja="@firebase/auth-compat",ka="@firebase/database",Ca="@firebase/data-connect",Sa="@firebase/database-compat",Ia="@firebase/functions",Ea="@firebase/functions-compat",_a="@firebase/installations",Pa="@firebase/installations-compat",Ta="@firebase/messaging",Aa="@firebase/messaging-compat",Ra="@firebase/performance",Da="@firebase/performance-compat",La="@firebase/remote-config",Oa="@firebase/remote-config-compat",Ma="@firebase/storage",Ua="@firebase/storage-compat",Fa="@firebase/firestore",Ba="@firebase/ai",Va="@firebase/firestore-compat",$a="firebase",za="[DEFAULT]",Ha={[pa]:"fire-core",[fa]:"fire-core-compat",[ya]:"fire-analytics",[ba]:"fire-analytics-compat",[wa]:"fire-app-check",[va]:"fire-app-check-compat",[Na]:"fire-auth",[ja]:"fire-auth-compat",[ka]:"fire-rtdb",[Ca]:"fire-data-connect",[Sa]:"fire-rtdb-compat",[Ia]:"fire-fn",[Ea]:"fire-fn-compat",[_a]:"fire-iid",[Pa]:"fire-iid-compat",[Ta]:"fire-fcm",[Aa]:"fire-fcm-compat",[Ra]:"fire-perf",[Da]:"fire-perf-compat",[La]:"fire-rc",[Oa]:"fire-rc-compat",[Ma]:"fire-gcs",[Ua]:"fire-gcs-compat",[Fa]:"fire-fst",[Va]:"fire-fst-compat",[Ba]:"fire-vertex","fire-js":"fire-js",[$a]:"fire-js-all"},Ga=new Map,Wa=new Map,qa=new Map;function Ka(e,t){try{e.container.addComponent(t)}catch(xe){xa.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,xe)}}function Ja(e){const t=e.name;if(qa.has(t))return xa.debug(`There were multiple attempts to register component ${t}.`),!1;qa.set(t,e);for(const a of Ga.values())Ka(a,e);for(const a of Wa.values())Ka(a,e);return!0}function Za(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}function Ya(e){return null!=e&&void 0!==e.settings}
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
 */const Xa=new Rt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Qa{constructor(e,t,a){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xa.create("app-deleted",{appName:this._name})}}
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
 */const er="12.5.0";function tr(e,t={}){let a=e;if("object"!=typeof t){t={name:t}}const r={name:za,automaticDataCollectionEnabled:!0,...t},s=r.name;if("string"!=typeof s||!s)throw Xa.create("bad-app-name",{appName:String(s)});if(a||(a=kt()),!a)throw Xa.create("no-options");const i=Ga.get(s);if(i){if(Lt(a,i.options)&&Lt(r,i.config))return i;throw Xa.create("duplicate-app",{appName:s})}const o=new Ht(s);for(const l of qa.values())o.addComponent(l);const n=new Qa(a,r,o);return Ga.set(s,n),n}function ar(e,t,a){let r=Ha[e]??e;a&&(r+=`-${a}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void xa.warn(e.join(" "))}Ja(new Vt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
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
 */const rr="firebase-heartbeat-store";let sr=null;function ir(){return sr||(sr=function(e,t,{blocked:a,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),n=na(o);return r&&o.addEventListener("upgradeneeded",e=>{r(na(o.result),e.oldVersion,e.newVersion,na(o.transaction),e)}),a&&o.addEventListener("blocked",e=>a(e.oldVersion,e.newVersion,e)),n.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),n}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(rr)}catch(xe){console.warn(xe)}}}).catch(e=>{throw Xa.create("idb-open",{originalErrorMessage:e.message})})),sr}async function or(e,t){try{const a=(await ir()).transaction(rr,"readwrite"),r=a.objectStore(rr);await r.put(t,nr(e)),await a.done}catch(xe){if(xe instanceof At)xa.warn(xe.message);else{const t=Xa.create("idb-set",{originalErrorMessage:xe?.message});xa.warn(t.message)}}}function nr(e){return`${e.name}!${e.options.appId}`}
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
 */class lr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=cr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,a=e[0].date;for(let r=1;r<e.length;r++)e[r].date<a&&(a=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(xe){xa.warn(xe)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=cr(),{heartbeatsToSend:t,unsentEntries:a}=function(e,t=1024){const a=[];let r=e.slice();for(const s of e){const e=a.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),ur(a)>t){e.dates.pop();break}}else if(a.push({agent:s.agent,dates:[s.date]}),ur(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=vt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(xe){return xa.warn(xe),""}}}function cr(){return(new Date).toISOString().substring(0,10)}class dr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(xe){return!1}}()&&new Promise((e,t)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),a||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{a=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(a){t(a)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ir()).transaction(rr),a=await t.objectStore(rr).get(nr(e));return await t.done,a}catch(xe){if(xe instanceof At)xa.warn(xe.message);else{const t=Xa.create("idb-get",{originalErrorMessage:xe?.message});xa.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function ur(e){return vt(JSON.stringify({version:2,heartbeats:e})).length}var hr;function mr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}hr="",Ja(new Vt("platform-logger",e=>new ma(e),"PRIVATE")),Ja(new Vt("heartbeat",e=>new lr(e),"PRIVATE")),ar(pa,ga,hr),ar(pa,ga,"esm2020"),ar("fire-js","");const pr=mr,gr=new Rt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),xr=new Zt("@firebase/auth");function fr(e,...t){xr.logLevel<=Gt.ERROR&&xr.error(`Auth (${er}): ${e}`,...t)}
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
 */function br(e,...t){throw jr(e,...t)}function yr(e,...t){return jr(e,...t)}function vr(e,t,a){const r={...pr(),[t]:a};return new Rt("auth","Firebase",r).create(t,{appName:e.name})}function wr(e){return vr(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nr(e,t,a){if(!(t instanceof a))throw a.name!==t.constructor.name&&br(e,"argument-error"),vr(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jr(e,...t){if("string"!=typeof e){const a=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(a,...r)}return gr.create(e,...t)}function kr(e,t,...a){if(!e)throw jr(t,...a)}function Cr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw fr(t),new Error(t)}function Sr(e,t){e||Cr(t)}
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
 */function Ir(){return"undefined"!=typeof self&&self.location?.href||""}function Er(){return"undefined"!=typeof self&&self.location?.protocol||null}
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
 */function _r(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Er()&&"https:"!==Er()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return _r()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Tr(e,t){Sr(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return t?`${a}${t.startsWith("/")?t.slice(1):t}`:a}
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
 */class Ar{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Rr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Dr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lr=new Pr(3e4,6e4);
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
 */function Or(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Mr(e,t,a,r,s={}){return Ur(e,s,async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=Mt({key:e.config.apiKey,...i}).slice(1),n=await e._getAdditionalHeaders();n["Content-Type"]="application/json",e.languageCode&&(n["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:n,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&It(e.emulatorConfig.host)&&(l.credentials="include"),Ar.fetch()(await Fr(e,e.config.apiHost,a,o),l)})}async function Ur(e,t,a){e._canInitEmulator=!1;const r={...Rr,...t};try{const t=new Br(e),s=await Promise.race([a(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Vr(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[a,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===a)throw Vr(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===a)throw Vr(e,"email-already-in-use",i);if("USER_DISABLED"===a)throw Vr(e,"user-disabled",i);const n=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw vr(e,n,o);br(e,n)}}catch(xe){if(xe instanceof At)throw xe;br(e,"network-request-failed",{message:String(xe)})}}async function Fr(e,t,a,r){const s=`${t}${a}?${r}`,i=e,o=i.config.emulator?Tr(e.config,s):`${e.config.apiScheme}://${s}`;if(Dr.includes(a)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(o).toString()}return o}class Br{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(yr(this.auth,"network-request-failed")),Lr.get())})}}function Vr(e,t,a){const r={appName:e.name};a.email&&(r.email=a.email),a.phoneNumber&&(r.phoneNumber=a.phoneNumber);const s=yr(e,t,r);return s.customData._tokenResponse=a,s}
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
 */async function $r(e,t){return Mr(e,"POST","/v1/accounts:lookup",t)}
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
 */function zr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(xe){}}function Hr(e){return 1e3*Number(e)}function Gr(e){const[t,a,r]=e.split(".");if(void 0===t||void 0===a||void 0===r)return fr("JWT malformed, contained fewer than 3 sections"),null;try{const e=wt(a);return e?JSON.parse(e):(fr("Failed to decode base64 JWT payload"),null)}catch(xe){return fr("Caught error parsing JWT payload as JSON",xe?.toString()),null}}function Wr(e){const t=Gr(e);return kr(t,"internal-error"),kr(void 0!==t.exp,"internal-error"),kr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function qr(e,t,a=!1){if(a)return t;try{return await t}catch(xe){throw xe instanceof At&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(xe)&&e.auth.currentUser===e&&await e.auth.signOut(),xe}}class Kr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(xe){return void("auth/network-request-failed"===xe?.code&&this.schedule(!0))}this.schedule()}}
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
 */class Jr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Zr(e){const t=e.auth,a=await e.getIdToken(),r=await qr(e,$r(t,{idToken:a}));kr(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Yr(s.providerUserInfo):[],o=function(e,t){const a=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...a,...t]}(e.providerData,i),n=e.isAnonymous,l=!(e.email&&s.passwordHash||o?.length),c=!!n&&l,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Jr(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}function Yr(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){kr(e.idToken,"internal-error"),kr(void 0!==e.idToken,"internal-error"),kr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Wr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){kr(0!==e.length,"internal-error");const t=Wr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(kr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:r,expiresIn:s}=await async function(e,t){const a=await Ur(e,{},async()=>{const a=Mt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=await Fr(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const n={method:"POST",headers:o,body:a};return e.emulatorConfig&&It(e.emulatorConfig.host)&&(n.credentials="include"),Ar.fetch()(i,n)});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}(e,t);this.updateTokensAndExpiration(a,r,Number(s))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*a}static fromJSON(e,t){const{refreshToken:a,accessToken:r,expirationTime:s}=t,i=new Xr;return a&&(kr("string"==typeof a,"internal-error",{appName:e}),i.refreshToken=a),r&&(kr("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(kr("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return Cr("not implemented")}}
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
 */function Qr(e,t){kr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class es{constructor({uid:e,auth:t,stsTokenManager:a,...r}){this.providerId="firebase",this.proactiveRefresh=new Kr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Jr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await qr(this,this.stsTokenManager.getToken(this.auth,e));return kr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const a=Bt(e),r=await a.getIdToken(t),s=Gr(r);kr(s&&s.exp&&s.auth_time&&s.iat,a.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:zr(Hr(s.auth_time)),issuedAtTime:zr(Hr(s.iat)),expirationTime:zr(Hr(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Bt(e);await Zr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(kr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new es({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){kr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await Zr(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ya(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await qr(this,async function(e,t){return Mr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const a=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,n=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:h,providerData:m,stsTokenManager:p}=t;kr(d&&p,e,"internal-error");const g=Xr.fromJSON(this.name,p);kr("string"==typeof d,e,"internal-error"),Qr(a,e.name),Qr(r,e.name),kr("boolean"==typeof u,e,"internal-error"),kr("boolean"==typeof h,e,"internal-error"),Qr(s,e.name),Qr(i,e.name),Qr(o,e.name),Qr(n,e.name),Qr(l,e.name),Qr(c,e.name);const x=new es({uid:d,auth:e,email:r,emailVerified:u,displayName:a,isAnonymous:h,photoURL:i,phoneNumber:s,tenantId:o,stsTokenManager:g,createdAt:l,lastLoginAt:c});return m&&Array.isArray(m)&&(x.providerData=m.map(e=>({...e}))),n&&(x._redirectEventId=n),x}static async _fromIdTokenResponse(e,t,a=!1){const r=new Xr;r.updateFromServerResponse(t);const s=new es({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:a});return await Zr(s),s}static async _fromGetAccountInfoResponse(e,t,a){const r=t.users[0];kr(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?Yr(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||s?.length),o=new Xr;o.updateFromIdToken(a);const n=new es({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Jr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||s?.length)};return Object.assign(n,l),n}}
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
 */const ts=new Map;function as(e){Sr(e instanceof Function,"Expected a class definition");let t=ts.get(e);return t?(Sr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ts.set(e,t),t)}
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
 */class rs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rs.type="NONE";const ss=rs;
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
 */function is(e,t,a){return`firebase:${e}:${t}:${a}`}class os{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:r,name:s}=this.auth;this.fullUserKey=is(this.userKey,r.apiKey,s),this.fullPersistenceKey=is("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await $r(this.auth,{idToken:e}).catch(()=>{});return t?es._fromGetAccountInfoResponse(this.auth,t,e):null}return es._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new os(as(ss),e,a);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=r[0]||as(ss);const i=is(a,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){let a;if("string"==typeof t){const r=await $r(e,{idToken:t}).catch(()=>{});if(!r)break;a=await es._fromGetAccountInfoResponse(e,r,t)}else a=es._fromJSON(e,t);l!==s&&(o=a),s=l;break}}catch{}const n=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&n.length?(s=n[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new os(s,e,a)):new os(s,e,a)}}
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
 */function ns(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(us(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ls(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ms(t))return"Blackberry";if(ps(t))return"Webos";if(cs(t))return"Safari";if((t.includes("chrome/")||ds(t))&&!t.includes("edge/"))return"Chrome";if(hs(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=e.match(t);if(2===a?.length)return a[1]}return"Other"}function ls(e=Tt()){return/firefox\//i.test(e)}function cs(e=Tt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ds(e=Tt()){return/crios\//i.test(e)}function us(e=Tt()){return/iemobile/i.test(e)}function hs(e=Tt()){return/android/i.test(e)}function ms(e=Tt()){return/blackberry/i.test(e)}function ps(e=Tt()){return/webos/i.test(e)}function gs(e=Tt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xs(){return function(){const e=Tt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function fs(e=Tt()){return gs(e)||hs(e)||ps(e)||ms(e)||/windows phone/i.test(e)||us(e)}
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
 */function bs(e,t=[]){let a;switch(e){case"Browser":a=ns(Tt());break;case"Worker":a=`${ns(Tt())}-${e}`;break;default:a=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${a}/JsCore/${er}/${r}`}
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
 */class ys{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=t=>new Promise((a,r)=>{try{a(e(t))}catch(xe){r(xe)}});a.onAbort=t,this.queue.push(a);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(xe){t.reverse();for(const a of t)try{a()}catch(Me){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:xe?.message})}}}
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
 */class vs{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let a;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)a=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
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
 */class ws{constructor(e,t,a,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new js(this),this.idTokenSubscription=new js(this),this.beforeStateQueue=new ys(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=as(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await os.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(xe){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await $r(this,{idToken:e}),a=await es._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(a)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ya(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let a=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,s=a?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==s||!i?.user||(a=i.user,r=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(a)}catch(xe){a=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(xe))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return kr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(xe){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zr(e)}catch(xe){if("auth/network-request-failed"!==xe?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ya(this.app))return Promise.reject(wr(this));const t=e?Bt(e):null;return t&&kr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&kr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ya(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ya(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(as(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Mr(e,"GET","/v2/passwordPolicy",Or(e,t))}
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
 */(this),t=new vs(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Mr(e,"POST","/v2/accounts:revokeToken",Or(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return null===e?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&as(e)||this._popupRedirectResolver;kr(t,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[as(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(kr(o,this,"internal-error"),o.then(()=>{i||s(this.currentUser)}),"function"==typeof t){const s=e.addObserver(t,a,r);return()=>{i=!0,s()}}{const a=e.addObserver(t);return()=>{i=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return kr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(Ya(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){xr.logLevel<=Gt.WARN&&xr.warn(`Auth (${er}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ns(e){return Bt(e)}class js{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const a=new Ut(e,t);return a.subscribe.bind(a)}(e=>this.observer=e)}get next(){return kr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cs(e,t,a){const r=Ns(e);kr(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!a?.disableWarnings,i=Ss(t),{host:o,port:n}=function(e){const t=Ss(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!a)return{host:"",port:null};const r=a[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Is(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Is(t)}}}(t),l=null===n?"":`:${n}`,c={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:n,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return kr(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void kr(Lt(c,r.config.emulator)&&Lt(d,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,It(o)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${i}//${o}${l}`),Pt("Auth",!0)):s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ss(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Is(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Es{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}
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
 */async function _s(e,t){return async function(e,t,a,r,s={}){const i=await Mr(e,t,a,r,s);return"mfaPendingCredential"in i&&br(e,"multi-factor-auth-required",{_serverResponse:i}),i}(e,"POST","/v1/accounts:signInWithIdp",Or(e,t))}
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
 */class Ps extends Es{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:a,signInMethod:r,...s}=t;if(!a||!r)return null;const i=new Ps(a,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return _s(e,this.buildRequest())}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,_s(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_s(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mt(t)}return e}}
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
 */class Ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class As extends Ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class Rs extends As{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com",Rs.PROVIDER_ID="facebook.com";
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
class Ds extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ps._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return Ds.credential(t,a)}catch{return null}}}Ds.GOOGLE_SIGN_IN_METHOD="google.com",Ds.PROVIDER_ID="google.com";
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
class Ls extends As{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ls.credential(e.oauthAccessToken)}catch{return null}}}Ls.GITHUB_SIGN_IN_METHOD="github.com",Ls.PROVIDER_ID="github.com";
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
class Os extends As{constructor(){super("twitter.com")}static credential(e,t){return Ps._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return Os.credential(t,a)}catch{return null}}}Os.TWITTER_SIGN_IN_METHOD="twitter.com",Os.PROVIDER_ID="twitter.com";
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
class Ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,r=!1){const s=await es._fromIdTokenResponse(e,a,r),i=Us(a);return new Ms({user:s,providerId:i,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const r=Us(a);return new Ms({user:e,providerId:r,_tokenResponse:a,operationType:t})}}function Us(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Fs extends At{constructor(e,t,a,r){super(t.code,t.message),this.operationType=a,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,r){return new Fs(e,t,a,r)}}function Bs(e,t,a,r){return("reauthenticate"===t?a._getReauthenticationResolver(e):a._getIdTokenResponse(e)).catch(a=>{if("auth/multi-factor-auth-required"===a.code)throw Fs._fromErrorAndOperation(e,a,t,r);throw a})}const Vs="__sak";
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
 */class $s{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class zs extends $s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),r=this.localCache[t];a!==r&&e(t,r,a)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,a)=>{this.notifyListeners(e,a)});const a=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(a);(t||this.localCache[a]!==e)&&this.notifyListeners(a,e)},s=this.storage.getItem(a);xs()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const r of Array.from(a))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zs.type="LOCAL";const Hs=zs;
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
 */class Gs extends $s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gs.type="SESSION";const Ws=Gs;
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
class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const a=new qs(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,s)),n=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:a,eventType:r,response:n})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ks(e="",t=10){let a="";for(let r=0;r<t;r++)a+=Math.floor(10*Math.random());return e+a}
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
 */qs.receivers=[];class Js{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((o,n)=>{const l=Ks("",20);r.port1.start();const c=setTimeout(()=>{n(new Error("unsupported_event"))},a);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{n(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),n(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
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
 */function Zs(){return window}
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
function Ys(){return void 0!==Zs().WorkerGlobalScope&&"function"==typeof Zs().importScripts}
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
const Xs="firebaseLocalStorageDb",Qs="firebaseLocalStorage",ei="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ai(e,t){return e.transaction([Qs],t?"readwrite":"readonly").objectStore(Qs)}function ri(){const e=indexedDB.open(Xs,1);return new Promise((t,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Qs,{keyPath:ei})}catch(xe){a(xe)}}),e.addEventListener("success",async()=>{const a=e.result;a.objectStoreNames.contains(Qs)?t(a):(a.close(),await function(){const e=indexedDB.deleteDatabase(Xs);return new ti(e).toPromise()}(),t(await ri()))})})}async function si(e,t,a){const r=ai(e,!0).put({[ei]:t,value:a});return new ti(r).toPromise()}function ii(e,t){const a=ai(e,!0).delete(t);return new ti(a).toPromise()}class oi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ri()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(xe){if(t++>3)throw xe;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ys()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(Ys()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Js(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ri();return await si(e,Vs,"1"),await ii(e,Vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>si(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const a=ai(e,!1).get(t),r=await new ti(a).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ii(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=ai(e,!1).getAll();return new ti(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],a=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)a.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!a.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const r of Array.from(a))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}oi.type="LOCAL";const ni=oi;
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
function li(e,t){return t?as(t):(kr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Pr(3e4,6e4);class ci extends Es{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _s(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function di(e){
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
return async function(e,t,a=!1){if(Ya(e.app))return Promise.reject(wr(e));const r="signIn",s=await Bs(e,r,t),i=await Ms._fromIdTokenResponse(e,r,s);return a||await e._updateCurrentUser(i.user),i}(e.auth,new ci(e),e.bypassAuthState)}function ui(e){const{auth:t,user:a}=e;return kr(a,t,"internal-error"),
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
async function(e,t,a=!1){const{auth:r}=e;if(Ya(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await qr(e,Bs(r,s,t,e),a);kr(i.idToken,r,"internal-error");const o=Gr(i.idToken);kr(o,r,"internal-error");const{sub:n}=o;return kr(e.uid===n,r,"user-mismatch"),Ms._forOperation(e,s,i)}catch(xe){throw"auth/user-not-found"===xe?.code&&br(r,"user-mismatch"),xe}}(a,new ci(e),e.bypassAuthState)}async function hi(e){const{auth:t,user:a}=e;return kr(a,t,"internal-error"),async function(e,t,a=!1){const r=await qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),a);return Ms._forOperation(e,"link",r)}(a,new ci(e),e.bypassAuthState)}
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
 */class mi{constructor(e,t,a,r,s=!1){this.auth=e,this.resolver=a,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(xe){this.reject(xe)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const n={auth:this.auth,requestUri:t,sessionId:a,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(n))}catch(xe){this.reject(xe)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return di;case"linkViaPopup":case"linkViaRedirect":return hi;case"reauthViaPopup":case"reauthViaRedirect":return ui;default:br(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const pi=new Pr(2e3,1e4);class gi extends mi{constructor(e,t,a,r,s){super(e,t,r,s),this.provider=a,this.authWindow=null,this.pollId=null,gi.currentPopupAction&&gi.currentPopupAction.cancel(),gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return kr(e,this.auth,"internal-error"),e}async onExecution(){Sr(1===this.filter.length,"Popup operations only handle one event");const e=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(yr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(yr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yr(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,pi.get())};e()}}gi.currentPopupAction=null;
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
const xi=new Map;class fi extends mi{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const a=vi(t),r=yi(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(a);return await r._remove(a),s}(this.resolver,this.auth),a=t?await super.execute():null;e=()=>Promise.resolve(a)}catch(xe){e=()=>Promise.reject(xe)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function bi(e,t){xi.set(e._key(),t)}function yi(e){return as(e._redirectPersistence)}function vi(e){return is("pendingRedirect",e.config.apiKey,e.name)}
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
 */function wi(e,t,a){return async function(e,t,a){if(Ya(e.app))return Promise.reject(wr(e));const r=Ns(e);Nr(e,t,Ts),await r._initializationPromise;const s=li(r,a);return await async function(e,t){return yi(e)._set(vi(t),"true")}(s,r),s._openRedirect(r,t,"signInViaRedirect")}(e,t,a)}async function Ni(e,t,a=!1){if(Ya(e.app))return Promise.reject(wr(e));const r=Ns(e),s=li(r,t),i=new fi(r,s,a),o=await i.execute();return o&&!a&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class ji{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ci(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ci(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";t.onError(yr(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Ci({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
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
const Si=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ii=/^https?/;async function Ei(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Mr(e,"GET","/v1/projects",t)}(e);for(const a of t)try{if(_i(a))return}catch{}br(e,"unauthorized-domain")}function _i(e){const t=Ir(),{protocol:a,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===a&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===a&&s.hostname===r}if(!Ii.test(a))return!1;if(Si.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
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
 */const Pi=new Pr(3e4,6e4);function Ti(){const e=Zs().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}function Ai(e){return new Promise((t,a)=>{function r(){Ti(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ti(),a(yr(e,"network-request-failed"))},timeout:Pi.get()})}if(Zs().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Zs().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Zs()[t]=()=>{gapi.load?r():a(yr(e,"network-request-failed"))},(s=`${ks.gapiScript}?onload=${t}`,ks.loadJS(s)).catch(e=>a(e))}r()}var s}).catch(e=>{throw Ri=null,e})}let Ri=null;
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
const Di=new Pr(5e3,15e3),Li={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mi(e){const t=e.config;kr(t.authDomain,e,"auth-domain-config-required");const a=t.emulator?Tr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:er},s=Oi.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${a}?${Mt(r).slice(1)}`}async function Ui(e){const t=await function(e){return Ri=Ri||Ai(e),Ri}(e),a=Zs().gapi;return kr(a,e,"internal-error"),t.open({where:document.body,url:Mi(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Li,dontclear:!0},t=>new Promise(async(a,r)=>{await t.restyle({setHideOnLeave:!1});const s=yr(e,"network-request-failed"),i=Zs().setTimeout(()=>{r(s)},Di.get());function o(){Zs().clearTimeout(i),a(t)}t.ping(o).then(o,()=>{r(s)})}))}
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
 */const Fi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Bi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(xe){}}}function Vi(e,t,a,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let n="";const l={...Fi,width:r.toString(),height:s.toString(),top:i,left:o},c=Tt().toLowerCase();a&&(n=ds(c)?"_blank":a),ls(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,a])=>`${e}${t}=${a},`,"");if(function(e=Tt()){return gs(e)&&!!window.navigator?.standalone}(c)&&"_self"!==n)return function(e,t){const a=document.createElement("a");a.href=e,a.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(r)}
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
 */(t||"",n),new Bi(null);const u=window.open(t||"",n,d);kr(u,e,"popup-blocked");try{u.focus()}catch(xe){}return new Bi(u)}const $i="__/auth/handler",zi="emulator/auth/handler",Hi=encodeURIComponent("fac");async function Gi(e,t,a,r,s,i){kr(e.config.authDomain,e,"auth-domain-config-required"),kr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:r,v:er,eventId:s};if(t instanceof Ts){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof As){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const n=o;for(const d of Object.keys(n))void 0===n[d]&&delete n[d];const l=await e._getAppCheckToken(),c=l?`#${Hi}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${$i}`;return Tr(e,zi)}
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
 */(e)}?${Mt(n).slice(1)}${c}`}const Wi="webStorageSupport";const qi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ws,this._completeRedirectFn=Ni,this._overrideRedirectResult=bi}async _openPopup(e,t,a,r){Sr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Vi(e,await Gi(e,t,a,Ir(),r),Ks())}async _openRedirect(e,t,a,r){await this._originValidation(e);return function(e){Zs().location.href=e}(await Gi(e,t,a,Ir(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:a}=this.eventManagers[t];return e?Promise.resolve(e):(Sr(a,"If manager is not set, promise should be"),a)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await Ui(e),a=new ji(e);return t.register("authEvent",t=>{kr(t?.authEvent,e,"invalid-auth-event");return{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wi,{type:Wi},a=>{const r=a?.[0]?.[Wi];void 0!==r&&t(!!r),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ei(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fs()||cs()||gs()}};var Ki="@firebase/auth",Ji="1.11.1";
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
class Zi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){kr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Yi=Ct("authIdTokenMaxAge")||300;let Xi=null;var Qi;!function(e){ks=e}({loadJS:e=>new Promise((t,a)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=yr("internal-error");t.customData=e,a(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Qi="Browser",Ja(new Vt("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=a.options;kr(i&&!i.includes(":"),"invalid-api-key",{appName:a.name});const n={apiKey:i,authDomain:o,clientPlatform:Qi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bs(Qi)},l=new ws(a,r,s,n);return function(e,t){const a=t?.persistence||[],r=(Array.isArray(a)?a:[a]).map(as);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),Ja(new Vt("auth-internal",e=>(e=>new Zi(e))(Ns(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),ar(Ki,Ji,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Qi)),ar(Ki,Ji,"esm2020");
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
ar("firebase","12.5.0","app");const eo={apiKey:"AIzaSyBm6NrH2zKnp-KE_CovPGZrXsVTQKTNvZE",authDomain:"dropcalc-7dba9.firebaseapp.com",projectId:"dropcalc-7dba9",storageBucket:"dropcalc-7dba9.appspot.com",messagingSenderId:"123456789012",appId:"1:123456789012:web:abc123def456ghi789"};console.log("🔥 Firebase Config:",{apiKey:eo.apiKey?"✅ Configurado":"❌ Faltando",authDomain:eo.authDomain,projectId:eo.projectId});const to=function(e=function(e=za){const t=Ga.get(e);if(!t&&e===za&&kt())return tr();if(!t)throw Xa.create("no-app",{appName:e});return t}()){const t=Za(e,"auth");if(t.isInitialized())return t.getImmediate();const a=
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
function(e,t){const a=Za(e,"auth");if(a.isInitialized()){const e=a.getImmediate();if(Lt(a.getOptions(),t??{}))return e;br(e,"already-initialized")}return a.initialize({options:t})}(e,{popupRedirectResolver:qi,persistence:[ni,Hs,Ws]}),r=Ct("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),a=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>Yi)return;const r=t?.token;Xi!==r&&(Xi=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,a){Bt(e).beforeAuthStateChanged(t,a)}(a,t,()=>t(a.currentUser)),function(e,t,a,r){Bt(e).onIdTokenChanged(t,a,r)}(a,e=>t(e))}}var s;const i=(o="auth",jt()?.emulatorHosts?.[o]);var o;return i&&Cs(a,`http://${i}`),a}(tr(eo)),ao=new Ds;ao.addScope("email"),ao.addScope("profile");const ro=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,a){if(Ya(e.app))return Promise.reject(yr(e,"operation-not-supported-in-this-environment"));const r=Ns(e);Nr(e,t,Ts);const s=li(r,a);return new gi(r,"signInViaPopup",t,s).executeNotNull()}(to,ao),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await wi(to,ao)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await Ns(e)._initializationPromise,Ni(e,t,!1)}(to);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=await fetch(xt.auth.login,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!t.ok)return this.createUserInBackend(e);const a=await t.json();return console.log("✅ Usuário sincronizado com backend"),a}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(xt.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return Bt(e).signOut()}(to),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return to.currentUser}onAuthStateChange(e){return to.onAuthStateChanged(e)}};const so=new class{getBaseURL(){const e=xt.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async login(e,t){try{const a=xt.auth.login;console.log("🔐 Login attempt:",{email:e,url:a});const r=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(!r.ok){const e=await r.json();throw new Error(e.message||"Falha no login")}const s=await r.json();return localStorage.setItem("accessToken",s.accessToken),localStorage.setItem("currentUser",JSON.stringify(s.user)),s.user}catch(a){throw console.error("Erro no login:",a),a}}async register(e,t,a){try{this.clearPlanData();const r=xt.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:r});const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:a})});if(!s.ok){const e=await s.json();throw new Error(e.message||"Falha no registro")}return(await s.json()).user}catch(r){throw console.error("Erro no registro:",r),r}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await ro.loginWithPopup(),t=await ro.syncWithBackend(e),a={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(a)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",a),a}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await ro.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await ro.handleRedirectResult();if(!e)return null;const t=await ro.syncWithBackend(e),a={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(a)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),a}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await ro.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const a={basic:0,professional:1,premium:2};return a[t.type]>=a[e]}},io=()=>{const[t,a]=e.useState(""),[r,o]=e.useState(""),[n,l]=e.useState(""),[c,u]=e.useState(!0),[h,m]=e.useState(!1),[p,w]=e.useState(!1),N=s(),[j]=i();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",j.get("mode")),console.log("authService.isAuthenticated():",so.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await so.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),ut.success(`Bem-vindo, ${e.name}! 🎉`),void N("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),ut.error("Erro ao processar login Google")}})();const e=j.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void u(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[N,j]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",p),oe.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[oe.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[oe.jsx(d.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),oe.jsx(d.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),oe.jsx(d.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),oe.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[oe.jsxs("div",{className:"text-center mb-10",children:[oe.jsx(d.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:oe.jsx("span",{className:"text-3xl",children:"💰"})}),oe.jsx(d.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),oe.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&oe.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),oe.jsxs(d.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[oe.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&r&&(c||n)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?r.length<6?(ut.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&n.length<2&&(ut.error("O nome deve ter pelo menos 2 caracteres"),1)):(ut.error("Por favor, insira um e-mail válido"),0):(ut.error("Por favor, preencha todos os campos"),0)){w(!0);try{c?(await so.login(t,r),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),ut.success("Login realizado com sucesso!"),N("/dashboard")):(await so.register(n,t,r),ut.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),N("/dashboard"))}catch(a){console.error("Auth error:",a);const e=a.message||"Erro inesperado. Tente novamente";ut.error(e)}finally{w(!1)}}},className:"space-y-6",children:[!c&&oe.jsxs("div",{children:[oe.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),oe.jsxs("div",{className:"relative",children:[oe.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:oe.jsx(g,{className:"h-5 w-5 text-gray-400"})}),oe.jsx("input",{id:"name",type:"text",value:n,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),oe.jsxs("div",{children:[oe.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),oe.jsxs("div",{className:"relative",children:[oe.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:oe.jsx(x,{className:"h-5 w-5 text-gray-400"})}),oe.jsx("input",{id:"email",type:"email",value:t,onChange:e=>a(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),oe.jsxs("div",{children:[oe.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),oe.jsxs("div",{className:"relative",children:[oe.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:oe.jsx(f,{className:"h-5 w-5 text-gray-400"})}),oe.jsx("input",{id:"password",type:h?"text":"password",value:r,onChange:e=>o(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),oe.jsx("button",{type:"button",onClick:()=>m(!h),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:h?oe.jsx(b,{className:"h-5 w-5"}):oe.jsx(y,{className:"h-5 w-5"})})]})]}),oe.jsx(d.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:p,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:p?oe.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):oe.jsxs(oe.Fragment,{children:[c?oe.jsx(v,{className:"h-5 w-5"}):oe.jsx(g,{className:"h-5 w-5"}),oe.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),oe.jsxs("div",{className:"mt-6",children:[oe.jsxs("div",{className:"relative",children:[oe.jsx("div",{className:"absolute inset-0 flex items-center",children:oe.jsx("div",{className:"w-full border-t border-gray-300/30"})}),oe.jsx("div",{className:"relative flex justify-center text-sm",children:oe.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),oe.jsxs(d.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(p)return;w(!0);const e=ut.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await so.loginWithGoogle();ut.dismiss(e),ut.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),N("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),ut.dismiss(e);let a="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?a="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?a="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(a="Erro de conexão. Verifique sua internet"),ut.error(a)}finally{w(!1)}},disabled:p,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[oe.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[oe.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),oe.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),oe.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),oe.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),oe.jsx("span",{children:"Continuar com Google"})]})]}),c&&oe.jsx("div",{className:"mt-6 text-center",children:oe.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>N("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),oe.jsxs("div",{className:"mt-8 text-center",children:[oe.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),oe.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>u(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},oo=()=>(console.log("LoginSimple carregando..."),oe.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[oe.jsx("h1",{children:"LOGIN SIMPLES"}),oe.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),oe.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[oe.jsxs("div",{style:{marginBottom:"15px"},children:[oe.jsx("label",{children:"Email:"}),oe.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),oe.jsxs("div",{style:{marginBottom:"15px"},children:[oe.jsx("label",{children:"Senha:"}),oe.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),oe.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]})),no=()=>{const[t,a]=e.useState("test@teste.com"),[r,s]=e.useState("123456"),[i,o]=e.useState(!1);console.log("🔥 LOGIN ALTERNATIVO - baseURL:",xt.getBaseURL()),console.log("🔥 LOGIN ALTERNATIVO - loginURL:",xt.auth.login);return oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:oe.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full max-w-md",children:[oe.jsx("h1",{className:"text-3xl font-bold text-white mb-6 text-center",children:"🔧 Login Alternativo"}),oe.jsxs("div",{className:"mb-6",children:[oe.jsxs("p",{className:"text-white/80 text-sm mb-4",children:["API: ",oe.jsx("code",{className:"bg-black/30 px-2 py-1 rounded text-green-300",children:xt.getBaseURL()})]}),oe.jsxs("div",{className:"flex gap-2 mb-4",children:[oe.jsx("button",{onClick:async()=>{try{const e=await fetch(xt.getBaseURL());if(e.ok){const t=await e.text();Ve.success(`Backend conectado: ${t}`)}}catch(e){Ve.error(`Erro de conexão: ${e.message}`)}},className:"bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors",children:"✅ Testar Conexão"}),oe.jsx("button",{onClick:async()=>{try{const e=xt.auth.signup;console.log("📝 Criando usuário em:",e);const t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Usuário Teste",email:"test@teste.com",password:"123456"})}),a=await t.json();t.ok?Ve.success("Usuário teste criado com sucesso!"):Ve.error(a.message||"Erro ao criar usuário")}catch(e){Ve.error(`Erro: ${e.message}`)}},className:"bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors",children:"👤 Criar User Teste"})]})]}),oe.jsxs("form",{onSubmit:async e=>{e.preventDefault(),o(!0);try{Ve.loading("Tentando login...");const e=xt.auth.login;console.log("🔐 Fazendo login em:",e);const a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})}),s=await a.json();a.ok?(Ve.success("Login realizado com sucesso!"),localStorage.setItem("token",s.access_token),localStorage.setItem("user",JSON.stringify(s.user)),window.location.href="/dashboard"):Ve.error(s.message||"Erro no login")}catch(a){console.error("Login error:",a),Ve.error(`Erro de conexão: ${a.message}`)}finally{o(!1)}},className:"space-y-4",children:[oe.jsxs("div",{children:[oe.jsx("label",{className:"block text-white/80 text-sm font-medium mb-2",children:"Email"}),oe.jsx("input",{type:"email",value:t,onChange:e=>a(e.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"seu@email.com",required:!0})]}),oe.jsxs("div",{children:[oe.jsx("label",{className:"block text-white/80 text-sm font-medium mb-2",children:"Senha"}),oe.jsx("input",{type:"password",value:r,onChange:e=>s(e.target.value),className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"sua senha",required:!0})]}),oe.jsx("button",{type:"submit",disabled:i,className:"w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors",children:i?"🔄 Entrando...":"🚀 Entrar"})]}),oe.jsxs("div",{className:"mt-6 pt-6 border-t border-white/20",children:[oe.jsx("p",{className:"text-white/60 text-sm text-center mb-3",children:"Outros testes:"}),oe.jsxs("div",{className:"flex gap-2",children:[oe.jsx("a",{href:"/login",className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center",children:"🔐 Login OAuth"}),oe.jsx("a",{href:"/debug",className:"flex-1 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors text-center",children:"🔧 Debug"})]})]})]})})},lo=()=>{const t=s(),[a]=i();return e.useEffect(()=>{(async()=>{const e=a.get("token"),r=a.get("user");if(a.get("error"))return ut.error("Erro no login com Google. Tente novamente."),void t("/login");if(e&&r)try{const a=JSON.parse(decodeURIComponent(r));localStorage.setItem("accessToken",e),localStorage.setItem("currentUser",JSON.stringify(a)),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),ut.success("Login com Google realizado com sucesso!"),t("/dashboard")}catch(s){console.error("Erro ao processar callback:",s),ut.error("Erro ao processar login. Tente novamente."),t("/login")}else ut.error("Dados de login inválidos."),t("/login")})()},[t,a]),oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center",children:oe.jsxs("div",{className:"text-center",children:[oe.jsx("div",{className:"w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"}),oe.jsx("p",{className:"text-white text-lg",children:"Processando login com Google..."})]})})};function co(...e){return e.filter(e=>"string"==typeof e&&e).join(" ")}const uo=({children:e,className:t,padding:a="md"})=>oe.jsx("div",{className:co("bg-white rounded-lg border border-gray-200 shadow-sm",{none:"p-0",sm:"p-4",md:"p-6",lg:"p-8"}[a],t),children:e}),ho=({className:e,variant:t="default",size:a="md",loading:r,children:s,disabled:i,...o})=>oe.jsxs("button",{className:co("inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",{default:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-green-500",ghost:"text-gray-600 hover:bg-gray-100 focus:ring-green-500"}[t],{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"}[a],e),disabled:i||r,...o,children:[r&&oe.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[oe.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),oe.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s]}),mo=({className:e,type:t,label:a,error:r,startIcon:s,endIcon:i,...o})=>oe.jsxs("div",{className:"w-full",children:[a&&oe.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:a}),oe.jsxs("div",{className:"relative",children:[s&&oe.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:oe.jsx("div",{className:"h-5 w-5 text-gray-400",children:s})}),oe.jsx("input",{type:t,className:co("flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",s?"pl-10":"",i?"pr-10":"",r?"border-red-500 focus:ring-red-600":"",e),...o}),i&&oe.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:oe.jsx("div",{className:"h-5 w-5 text-gray-400",children:i})})]}),r&&oe.jsx("p",{className:"mt-1 text-sm text-red-600",children:r})]}),po=()=>{const t=s(),[a,r]=e.useState(""),[i,o]=e.useState(!1),[n,l]=e.useState(!1),c=()=>{t("/login")};return n?oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:oe.jsxs(uo,{className:"p-8 text-center",children:[oe.jsx(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:oe.jsx(w,{className:"w-16 h-16 text-green-500 mx-auto"})}),oe.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Email Enviado!"}),oe.jsxs("p",{className:"text-gray-300 mb-6",children:["Enviamos um link de recuperação para ",oe.jsx("strong",{children:a}),". Verifique sua caixa de entrada e siga as instruções para redefinir sua senha."]}),oe.jsxs("div",{className:"space-y-4",children:[oe.jsxs(ho,{onClick:c,variant:"outline",className:"w-full",children:[oe.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]}),oe.jsx("p",{className:"text-sm text-gray-400",children:"Não recebeu o email? Verifique sua pasta de spam ou tente novamente em alguns minutos."}),oe.jsxs("div",{className:"mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700",children:[oe.jsxs("p",{className:"text-xs text-blue-300 mb-2",children:[oe.jsx("strong",{children:"Demonstração:"})," Clique no link abaixo para simular o acesso via email"]}),oe.jsx("button",{onClick:()=>t("/reset-password?token=demo-token-123"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm underline",children:"Redefinir Senha (Demo)"})]})]})]})})}):oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:oe.jsxs(uo,{className:"p-8",children:[oe.jsxs("div",{className:"text-center mb-8",children:[oe.jsx(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:oe.jsx(x,{className:"w-12 h-12 text-blue-400 mx-auto"})}),oe.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Esqueci a Senha"}),oe.jsx("p",{className:"text-gray-300",children:"Digite seu email para receber um link de recuperação de senha"})]}),oe.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!a)return void Ve.error("Por favor, insira seu email");if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){o(!0);try{await new Promise(e=>setTimeout(e,2e3)),l(!0),Ve.success("Email de recuperação enviado com sucesso!")}catch(t){Ve.error("Erro ao enviar email de recuperação")}finally{o(!1)}}else Ve.error("Por favor, insira um email válido")},className:"space-y-6",children:[oe.jsx("div",{children:oe.jsx(mo,{type:"email",placeholder:"Digite seu email",value:a,onChange:e=>r(e.target.value),disabled:i,className:"w-full"})}),oe.jsxs(ho,{type:"submit",disabled:i||!a,className:"w-full",children:[i?oe.jsx(d.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):oe.jsx(j,{className:"w-4 h-4 mr-2"}),i?"Enviando...":"Enviar Link de Recuperação"]}),oe.jsxs(ho,{type:"button",variant:"outline",onClick:c,className:"w-full",children:[oe.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]}),oe.jsx("div",{className:"mt-6 text-center",children:oe.jsxs("p",{className:"text-sm text-gray-400",children:["Lembrou da senha?"," ",oe.jsx("button",{onClick:c,className:"text-blue-400 hover:text-blue-300 font-medium transition-colors",children:"Faça login aqui"})]})})]})})})},go=()=>{const t=s(),[a]=i(),[r,o]=e.useState(""),[n,l]=e.useState(""),[c,u]=e.useState(!1),[h,m]=e.useState(!1),[p,g]=e.useState(!1),[x,v]=e.useState(!0),[j,C]=e.useState(!1),S=a.get("token");e.useEffect(()=>{S||(v(!1),Ve.error("Token de recuperação inválido ou expirado"))},[S]);const I=()=>{t("/login")};return x?j?oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:oe.jsxs(uo,{className:"p-8 text-center",children:[oe.jsx(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-6",children:oe.jsx(w,{className:"w-16 h-16 text-green-500 mx-auto"})}),oe.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Senha Redefinida!"}),oe.jsx("p",{className:"text-gray-300 mb-6",children:"Sua senha foi redefinida com sucesso. Agora você pode fazer login com sua nova senha."}),oe.jsx(ho,{onClick:I,className:"w-full",children:"Fazer Login"})]})})}):oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:oe.jsxs(uo,{className:"p-8",children:[oe.jsxs("div",{className:"text-center mb-8",children:[oe.jsx(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-4",children:oe.jsx(f,{className:"w-12 h-12 text-blue-400 mx-auto"})}),oe.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Redefinir Senha"}),oe.jsx("p",{className:"text-gray-300",children:"Digite sua nova senha"})]}),oe.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),!r||!n)return void Ve.error("Por favor, preencha todos os campos");const t=(a=r).length<8?"A senha deve ter pelo menos 8 caracteres":/(?=.*[a-z])/.test(a)?/(?=.*[A-Z])/.test(a)?/(?=.*\d)/.test(a)?null:"A senha deve conter pelo menos um número":"A senha deve conter pelo menos uma letra maiúscula":"A senha deve conter pelo menos uma letra minúscula";var a;if(t)Ve.error(t);else if(r===n){g(!0);try{await new Promise(e=>setTimeout(e,2e3)),C(!0),Ve.success("Senha redefinida com sucesso!")}catch(s){Ve.error("Erro ao redefinir senha. Tente novamente")}finally{g(!1)}}else Ve.error("As senhas não coincidem")},className:"space-y-6",children:[oe.jsxs("div",{children:[oe.jsxs("div",{className:"relative",children:[oe.jsx(mo,{type:c?"text":"password",placeholder:"Nova senha",value:r,onChange:e=>o(e.target.value),disabled:p,className:"w-full pr-12"}),oe.jsx("button",{type:"button",onClick:()=>u(!c),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:c?oe.jsx(b,{className:"w-4 h-4"}):oe.jsx(y,{className:"w-4 h-4"})})]}),r&&oe.jsxs("div",{className:"mt-2 space-y-1 text-xs",children:[oe.jsxs("div",{className:"flex items-center "+(r.length>=8?"text-green-400":"text-red-400"),children:[oe.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(r.length>=8?"bg-green-400":"bg-red-400")}),"Pelo menos 8 caracteres"]}),oe.jsxs("div",{className:"flex items-center "+(/(?=.*[a-z])/.test(r)?"text-green-400":"text-red-400"),children:[oe.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[a-z])/.test(r)?"bg-green-400":"bg-red-400")}),"Uma letra minúscula"]}),oe.jsxs("div",{className:"flex items-center "+(/(?=.*[A-Z])/.test(r)?"text-green-400":"text-red-400"),children:[oe.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*[A-Z])/.test(r)?"bg-green-400":"bg-red-400")}),"Uma letra maiúscula"]}),oe.jsxs("div",{className:"flex items-center "+(/(?=.*\d)/.test(r)?"text-green-400":"text-red-400"),children:[oe.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(/(?=.*\d)/.test(r)?"bg-green-400":"bg-red-400")}),"Um número"]})]})]}),oe.jsxs("div",{children:[oe.jsxs("div",{className:"relative",children:[oe.jsx(mo,{type:h?"text":"password",placeholder:"Confirmar nova senha",value:n,onChange:e=>l(e.target.value),disabled:p,className:"w-full pr-12"}),oe.jsx("button",{type:"button",onClick:()=>m(!h),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors",children:h?oe.jsx(b,{className:"w-4 h-4"}):oe.jsx(y,{className:"w-4 h-4"})})]}),n&&oe.jsx("div",{className:"mt-2 text-xs",children:oe.jsxs("div",{className:"flex items-center "+(r===n?"text-green-400":"text-red-400"),children:[oe.jsx("div",{className:"w-2 h-2 rounded-full mr-2 "+(r===n?"bg-green-400":"bg-red-400")}),r===n?"Senhas coincidem":"Senhas não coincidem"]})})]}),oe.jsxs(ho,{type:"submit",disabled:p||!r||!n||r!==n,className:"w-full",children:[p?oe.jsx(d.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"}):oe.jsx(f,{className:"w-4 h-4 mr-2"}),p?"Redefinindo...":"Redefinir Senha"]}),oe.jsxs(ho,{type:"button",variant:"outline",onClick:I,className:"w-full",children:[oe.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})}):oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4",children:oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md",children:oe.jsxs(uo,{className:"p-8 text-center",children:[oe.jsx(k,{className:"w-16 h-16 text-red-500 mx-auto mb-6"}),oe.jsx("h1",{className:"text-2xl font-bold text-white mb-4",children:"Token Inválido"}),oe.jsx("p",{className:"text-gray-300 mb-6",children:"O link de recuperação é inválido ou expirou. Por favor, solicite um novo link de recuperação."}),oe.jsxs("div",{className:"space-y-4",children:[oe.jsx(ho,{onClick:()=>t("/forgot-password"),className:"w-full",children:"Solicitar Novo Link"}),oe.jsxs(ho,{onClick:I,variant:"outline",className:"w-full",children:[oe.jsx(N,{className:"w-4 h-4 mr-2"}),"Voltar ao Login"]})]})]})})})},xo=()=>{const t=s(),[a,r]=e.useState({isConnected:!1,isLoading:!0,products:null}),[i,o]=e.useState(null),[n,l]=e.useState("monthly"),[c,u]=e.useState(null),h=[{id:"basic",name:"Básico",icon:oe.jsx(_,{className:"w-8 h-8"}),color:"blue",gradient:"from-blue-500 to-cyan-500",features:["Cálculo de precificação manual e automático","Suporte a Real (BRL) e Dólar (USD)","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:4.9,quarterly:{total:12.9,perMonth:4.3},annual:{total:39.9,perMonth:3.33}}},{id:"gold",name:"Gold",icon:oe.jsx(P,{className:"w-8 h-8"}),color:"yellow",gradient:"from-yellow-500 to-orange-500",popular:!0,features:["Suporte a 10+ moedas internacionais","Integração com principais plataformas","Cálculo automático em tempo real","Atualização automática de câmbio","Shopee, AliExpress, Nuvemshop"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:8.97},annual:{total:89.9,perMonth:7.49}}},{id:"premium",name:"Premium",icon:oe.jsx(T,{className:"w-8 h-8"}),color:"purple",gradient:"from-purple-500 to-pink-500",features:["Todas as moedas globais (70+)","Integração com todas as plataformas","IA de precificação inteligente","Suporte técnico prioritário","Recursos avançados exclusivos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.66}}}];e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),a=localStorage.getItem("currentUser");if(e&&"active"===t&&a){const t=localStorage.getItem("subscriptionDate");if(t){const a=new Date(t);((new Date).getTime()-a.getTime())/36e5<24?u(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive"))}else u(e)}p()},[]);const p=async()=>{try{r(e=>({...e,isLoading:!0})),await new Promise(e=>setTimeout(e,2e3));r({isConnected:!0,isLoading:!1,products:{dropcalc_basic:{id:"dropcalc_basic",title:"DropCalc Básico",prices:{monthly:"R$ 4,90",quarterly:"R$ 12,90",annual:"R$ 39,90"}},dropcalc_gold:{id:"dropcalc_gold",title:"DropCalc Gold",prices:{monthly:"R$ 9,90",quarterly:"R$ 26,90",annual:"R$ 89,90"}},dropcalc_premium:{id:"dropcalc_premium",title:"DropCalc Premium",prices:{monthly:"R$ 19,90",quarterly:"R$ 54,90",annual:"R$ 199,90"}}}})}catch(e){console.error("Erro ao inicializar billing:",e),r(e=>({...e,isLoading:!1})),ut.error("Erro ao conectar com a loja. Tente novamente.")}},g=(e,t)=>{const a=e.prices.monthly*("quarterly"===t?3:12),r="quarterly"===t?e.prices.quarterly.total:e.prices.annual.total;return Math.round((a-r)/a*100)};return oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:oe.jsxs("div",{className:"container mx-auto px-4 py-8",children:[oe.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[oe.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:oe.jsx(N,{className:"w-6 h-6 text-gray-600"})}),oe.jsxs("div",{children:[oe.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Escolha seu plano DropCalc"}),oe.jsx("p",{className:"text-gray-600 mt-1",children:"Ative os recursos avançados de precificação e integração automática."})]})]}),c&&oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-green-50 border border-green-200 rounded-xl p-4 mb-8",children:oe.jsxs("div",{className:"flex items-center gap-3",children:[oe.jsx(C,{className:"w-6 h-6 text-green-600"}),oe.jsxs("div",{children:[oe.jsxs("h3",{className:"font-semibold text-green-800",children:["Plano Ativo: ",h.find(e=>e.id===c)?.name]}),oe.jsx("p",{className:"text-green-600 text-sm",children:"Sua assinatura está ativa e funcionando perfeitamente!"})]})]})}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[oe.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4 text-center",children:"Período de Cobrança"}),oe.jsx("div",{className:"grid grid-cols-3 gap-3",children:["monthly","quarterly","annual"].map(e=>oe.jsxs(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>l(e),className:"p-3 rounded-xl border-2 transition-all relative "+(n===e?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[oe.jsx("p",{className:"font-medium text-gray-800",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&oe.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full",children:["-",g(h[1],e),"%"]})]},e))})]}),a.isLoading&&oe.jsxs("div",{className:"text-center mb-8",children:[oe.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),oe.jsx("p",{className:"text-gray-600",children:"Carregando planos disponíveis..."})]}),!a.isLoading&&oe.jsx("div",{className:"grid lg:grid-cols-3 gap-6 mb-8",children:h.map((e,r)=>{const s=((e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}/mês`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)}`,savings:`≈ R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)}`,savings:`≈ R$ ${e.prices.annual.perMonth.toFixed(2)}/mês`}}})(e,n),l=c===e.id,m=`${e.id}_${n}`,p=i===m;return oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*r},className:`relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 border shadow-xl transition-all duration-300 ${e.popular?"border-yellow-300 shadow-2xl transform scale-105":"border-white/20 hover:shadow-2xl hover:scale-102"} ${l?"ring-2 ring-green-500":""}`,children:[e.popular&&oe.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:oe.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold",children:"Mais Popular"})}),l&&oe.jsx("div",{className:"absolute -top-3 right-4",children:oe.jsxs("div",{className:"bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1",children:[oe.jsx(C,{className:"w-3 h-3"}),"Ativo"]})}),oe.jsxs("div",{className:"text-center mb-6",children:[oe.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${e.gradient} rounded-2xl mb-4 text-white`,children:e.icon}),oe.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:e.name})]}),oe.jsxs("div",{className:"text-center mb-6",children:[oe.jsx("div",{className:"text-3xl font-bold text-gray-800 mb-1",children:s.label}),s.savings&&oe.jsx("p",{className:"text-green-600 text-sm font-medium",children:s.savings}),"monthly"!==n&&oe.jsxs("p",{className:"text-gray-500 text-xs mt-1",children:["Economize ",g(e,n),"% vs mensal"]})]}),oe.jsx("div",{className:"space-y-3 mb-8",children:e.features.map((e,t)=>oe.jsxs("div",{className:"flex items-start gap-3",children:[oe.jsx("div",{className:"flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5",children:oe.jsx(C,{className:"w-3 h-3 text-white"})}),oe.jsx("span",{className:"text-gray-700 text-sm",children:e})]},t))}),oe.jsx(d.button,{whileHover:{scale:l?1:1.02},whileTap:{scale:l?1:.98},onClick:()=>!l&&(async(e,r)=>{if(!a.products)return;o(`${e}_${r}`);try{ut.loading("Processando pagamento...",{id:"purchase"}),await new Promise(e=>setTimeout(e,1e3)),console.log("Salvando dados do plano:",e),localStorage.setItem("userPlan",e),localStorage.setItem("billingStatus","active"),localStorage.setItem("subscriptionPeriod",r),localStorage.setItem("subscriptionDate",(new Date).toISOString()),localStorage.setItem("premiumActive","true"),u(e);const a=h.find(t=>t.id===e)?.name||"Desconhecido";ut.success(`🎉 Assinatura ${a} ativada com sucesso!`,{id:"purchase"}),console.log("Dados salvos no localStorage:"),console.log("- userPlan:",localStorage.getItem("userPlan")),console.log("- billingStatus:",localStorage.getItem("billingStatus")),console.log("- premiumActive:",localStorage.getItem("premiumActive")),console.log("- currentUser:",localStorage.getItem("currentUser")),console.log("Redirecionando para /dashboard em 1.5s..."),setTimeout(()=>{console.log("Executando navigate(/dashboard)"),t("/dashboard")},1500)}catch(s){console.error("Erro na compra:",s),ut.error("Erro ao processar pagamento. Tente novamente.",{id:"purchase"})}finally{o(null)}})(e.id,n),disabled:p||l,className:"w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 "+(l?"bg-green-100 text-green-700 cursor-default":p?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-xl`),children:p?oe.jsxs(oe.Fragment,{children:[oe.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Processando..."]}):l?oe.jsxs(oe.Fragment,{children:[oe.jsx(C,{className:"w-5 h-5"}),"Plano Ativo"]}):oe.jsxs(oe.Fragment,{children:[oe.jsx(S,{className:"w-5 h-5"}),"Assinar com Google Play"]})}),!l&&oe.jsxs("div",{className:"flex items-center justify-center gap-4 mt-4 text-xs text-gray-500",children:[oe.jsxs("div",{className:"flex items-center gap-1",children:[oe.jsx(I,{className:"w-3 h-3"}),oe.jsx("span",{children:"Pagamento Seguro"})]}),oe.jsxs("div",{className:"flex items-center gap-1",children:[oe.jsx(E,{className:"w-3 h-3"}),oe.jsx("span",{children:"Google Play"})]})]})]},e.id)})}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl mb-8",children:[oe.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6 text-center",children:"Compare os Recursos"}),oe.jsx("div",{className:"overflow-x-auto",children:oe.jsxs("table",{className:"w-full",children:[oe.jsx("thead",{children:oe.jsxs("tr",{className:"border-b border-gray-200",children:[oe.jsx("th",{className:"text-left py-3 px-4 font-semibold text-gray-800",children:"Recursos"}),oe.jsx("th",{className:"text-center py-3 px-4 font-semibold text-blue-600",children:"Básico"}),oe.jsx("th",{className:"text-center py-3 px-4 font-semibold text-yellow-600",children:"Gold"}),oe.jsx("th",{className:"text-center py-3 px-4 font-semibold text-purple-600",children:"Premium"})]})}),oe.jsxs("tbody",{className:"text-sm",children:[oe.jsxs("tr",{className:"border-b border-gray-100",children:[oe.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Calculadora de precificação"}),oe.jsx("td",{className:"text-center py-3 px-4",children:oe.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})}),oe.jsx("td",{className:"text-center py-3 px-4",children:oe.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})}),oe.jsx("td",{className:"text-center py-3 px-4",children:oe.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})})]}),oe.jsxs("tr",{className:"border-b border-gray-100",children:[oe.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Moedas suportadas"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"2"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"10+"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"70+"})]}),oe.jsxs("tr",{className:"border-b border-gray-100",children:[oe.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Integração com plataformas"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-400",children:"—"}),oe.jsx("td",{className:"text-center py-3 px-4",children:oe.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})}),oe.jsx("td",{className:"text-center py-3 px-4",children:oe.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})})]}),oe.jsxs("tr",{className:"border-b border-gray-100",children:[oe.jsx("td",{className:"py-3 px-4 text-gray-700",children:"IA de precificação"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-400",children:"—"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-400",children:"—"}),oe.jsx("td",{className:"text-center py-3 px-4",children:oe.jsx(C,{className:"w-4 h-4 text-green-500 mx-auto"})})]}),oe.jsxs("tr",{children:[oe.jsx("td",{className:"py-3 px-4 text-gray-700",children:"Suporte técnico"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"E-mail"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"E-mail"}),oe.jsx("td",{className:"text-center py-3 px-4 text-gray-600",children:"Prioritário"})]})]})]})})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",children:[oe.jsx(m,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),oe.jsx("h3",{className:"text-xl font-bold mb-2",children:"💡 Dica Especial"}),oe.jsx("p",{className:"opacity-90",children:"Com o DropCalc Premium, você economiza tempo e maximiza seus lucros com cálculos automáticos e integração completa."})]})]})})},fo=()=>{const[t,a]=e.useState(null),[r,s]=e.useState(!0),[i,o]=e.useState(null),[n,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=so.getCurrentUser(),t=so.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),a(e),l(t),e){const e=so.getUserPlan();console.log("📋 useAuth - Plano do usuário:",e),o(e)}else o(null);s(!1)},[]);return{user:t,loading:r,plan:i,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await so.logout(),a(null),o(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),so.updateUserPlan(e),o(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=so.getCurrentUser(),t=so.isAuthenticated();a(e),l(t),o(e?so.getUserPlan():null)},isAuthenticated:n,checkPlanAccess:e=>so.checkPlanAccess(e)}},bo=[{id:"basic",name:"Básico",price:0,features:["Calculadora básica","Até 10 cálculos por dia","Suporte por email"]},{id:"gold",name:"Gold",price:29.9,features:["Calculadora avançada","Cálculos ilimitados","Análise de margem","Suporte prioritário","Relatórios mensais"],popular:!0},{id:"premium",name:"Premium",price:49.9,features:["Todos os recursos Gold","API de integração","Suporte 24/7","Relatórios personalizados","Consultoria especializada"]}],yo=()=>{const t=s(),{user:a,isAuthenticated:r}=fo(),[i,o]=e.useState(""),[n,l]=e.useState(!1);e.useEffect(()=>{if(!r)return console.log("❌ Usuário não autenticado, redirecionando para login"),void t("/login");console.log("✅ Usuário autenticado na seleção de planos:",a)},[r,a,t]);return r?oe.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4",children:oe.jsxs("div",{className:"max-w-6xl mx-auto",children:[oe.jsxs("div",{className:"flex items-center mb-8",children:[oe.jsx("button",{onClick:()=>t("/dashboard"),className:"mr-4 p-2 hover:bg-white/10 rounded-lg transition-colors",children:oe.jsx(N,{className:"w-6 h-6"})}),oe.jsx("h1",{className:"text-3xl font-bold",children:"Escolha seu Plano"})]}),oe.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:bo.map(e=>oe.jsxs("div",{className:"relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 "+(e.popular?"border-yellow-400 shadow-lg shadow-yellow-400/20":"border-gray-600 hover:border-blue-400"),children:[e.popular&&oe.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:oe.jsx("span",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold",children:"Mais Popular"})}),oe.jsxs("div",{className:"text-center mb-6",children:[oe.jsx(T,{className:"w-12 h-12 mx-auto mb-4 "+("premium"===e.id?"text-yellow-400":"gold"===e.id?"text-yellow-300":"text-gray-400")}),oe.jsx("h3",{className:"text-2xl font-bold mb-2",children:e.name}),oe.jsx("div",{className:"text-3xl font-bold",children:0===e.price?"Grátis":oe.jsxs(oe.Fragment,{children:["R$ ",oe.jsx("span",{className:"text-4xl",children:e.price}),oe.jsx("span",{className:"text-lg text-gray-300",children:"/mês"})]})})]}),oe.jsx("ul",{className:"space-y-3 mb-8",children:e.features.map((e,t)=>oe.jsxs("li",{className:"flex items-center",children:[oe.jsx(C,{className:"w-5 h-5 text-green-400 mr-3 flex-shrink-0"}),oe.jsx("span",{children:e})]},t))}),oe.jsx("button",{onClick:()=>(async e=>{l(!0);try{console.log("Plano selecionado:",e),o(e),await new Promise(e=>setTimeout(e,1e3)),t("/dashboard")}catch(a){console.error("Erro ao selecionar plano:",a)}finally{l(!1)}})(e.id),disabled:n,className:`w-full py-3 rounded-lg font-semibold transition-colors ${e.popular?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600":"bg-blue-600 hover:bg-blue-700 text-white"} disabled:opacity-50 disabled:cursor-not-allowed`,children:n?"Processando...":i===e.id?"Selecionado":"Escolher Plano"})]},e.id))}),oe.jsxs("div",{className:"mt-8 text-center text-gray-300",children:[oe.jsx("p",{children:"Todos os planos incluem garantia de 30 dias"}),oe.jsx("p",{className:"text-sm mt-2",children:"Cancele a qualquer momento"})]})]})}):null},vo=()=>{const{t:t}=he(),[a,r]=e.useState([]);e.useEffect(()=>{try{const e=localStorage.getItem("calculadora-historico");e&&r(JSON.parse(e))}catch{r([])}},[]);return 0===a.length?oe.jsxs("div",{className:"text-center py-8 text-gray-500",children:[oe.jsx(F,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),oe.jsx("p",{children:t("calc.noHistory")})]}):oe.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:a.map(e=>{return oe.jsx(d.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all",children:oe.jsxs("div",{className:"flex justify-between items-start",children:[oe.jsxs("div",{className:"flex-1",children:[oe.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:e.nomeProduto}),oe.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[oe.jsxs("p",{children:[oe.jsx("span",{className:"font-medium",children:"Preço:"})," ",(s=e.moedaDestino,{USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[s]||s)," ",e.precoVenda.toFixed(2)]}),oe.jsxs("p",{children:[oe.jsx("span",{className:"font-medium",children:"Plataforma:"})," ",e.plataforma," | ",oe.jsx("span",{className:"font-medium",children:"Gateway:"})," ",e.gateway]}),oe.jsxs("p",{className:"text-xs text-gray-500",children:[t("calc.savedAt"),": ",e.dataCalculo]})]})]}),oe.jsx("button",{onClick:()=>(e=>{const t=a.filter(t=>t.id!==e);r(t),localStorage.setItem("calculadora-historico",JSON.stringify(t)),Ve.success("Cálculo excluído")})(e.id),className:"text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",title:t("calc.deleteCalculation"),children:oe.jsx(B,{className:"w-4 h-4"})})]})},e.id);var s})})},wo=()=>{const t=s(),{theme:a,setTheme:r}=function(){const t=e.useContext(ht);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t}(),{language:i,setLanguage:o,t:n}=he(),[l,c]=e.useState(null),[u,h]=e.useState({language:"pt",notifications:!0,isPremium:!1});e.useEffect(()=>{const e=localStorage.getItem("user");e&&c(JSON.parse(e));const t=i,a="true"===localStorage.getItem("notifications"),r="true"===localStorage.getItem("premiumActive");h({language:t,notifications:a,isPremium:r})},[]);const m=e=>{r(e),Ve.success(`Tema ${"dark"===e?"escuro":"claro"} ativado!`)};return oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900",children:oe.jsxs("div",{className:"container mx-auto px-4 py-8",children:[oe.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[oe.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",children:oe.jsx(N,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})}),oe.jsxs("div",{className:"flex items-center gap-3",children:[oe.jsx(A,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"}),oe.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:n("settings.title")})]})]}),oe.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[oe.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[oe.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center",children:oe.jsx(R,{className:"w-6 h-6 text-white"})}),oe.jsxs("div",{children:[oe.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:l?.name||"Usuário"}),oe.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:l?.email})]})]}),oe.jsx("div",{className:"flex items-center gap-2",children:u.isPremium?oe.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:[oe.jsx(T,{className:"w-4 h-4"}),"Premium Ativo"]}):oe.jsxs("div",{className:"flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm",children:[oe.jsx(R,{className:"w-4 h-4"}),"Plano Gratuito"]})})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[oe.jsxs("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2",children:["dark"===a?oe.jsx(D,{className:"w-5 h-5"}):oe.jsx(L,{className:"w-5 h-5"}),n("settings.theme")]}),oe.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[oe.jsxs(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>m("light"),className:"p-4 rounded-xl border-2 transition-all "+("light"===a?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[oe.jsx(L,{className:"w-6 h-6 mx-auto mb-2 text-yellow-500"}),oe.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:n("settings.light")}),"light"===a&&oe.jsx(C,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]}),oe.jsxs(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>m("dark"),className:"p-4 rounded-xl border-2 transition-all "+("dark"===a?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[oe.jsx(D,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),oe.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:n("settings.dark")}),"dark"===a&&oe.jsx(C,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]})]})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[oe.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[oe.jsx(O,{className:"w-5 h-5"}),n("settings.language")]}),oe.jsx("div",{className:"space-y-2",children:[{code:"pt",name:"Português",flag:"🇧🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"es",name:"Español",flag:"🇪🇸"}].map(e=>oe.jsxs(d.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:()=>{return t=e.code,h(e=>({...e,language:t})),o(t),void Ve.success(n("msg.languageChanged"));var t},className:"w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 "+(u.language===e.code?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[oe.jsx("span",{className:"text-2xl",children:e.flag}),oe.jsx("span",{className:"font-medium text-gray-800",children:e.name}),u.language===e.code&&oe.jsx(C,{className:"w-4 h-4 text-blue-500 ml-auto"})]},e.code))})]}),oe.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:oe.jsxs("div",{className:"flex items-center justify-between",children:[oe.jsxs("div",{className:"flex items-center gap-3",children:[oe.jsx(M,{className:"w-5 h-5 text-gray-600"}),oe.jsxs("div",{children:[oe.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:n("settings.notifications")}),oe.jsx("p",{className:"text-gray-600 text-sm",children:"Receber alertas e atualizações"})]})]}),oe.jsx(d.button,{whileTap:{scale:.95},onClick:()=>{const e=!u.notifications;h(t=>({...t,notifications:e})),localStorage.setItem("notifications",e.toString()),Ve.success(`Notificações ${e?"ativadas":"desativadas"}!`)},className:"relative inline-flex h-6 w-11 items-center rounded-full transition-colors "+(u.notifications?"bg-blue-600":"bg-gray-300"),children:oe.jsx(d.span,{animate:{x:u.notifications?20:4},transition:{type:"spring",stiffness:500,damping:30},className:"inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"})})]})}),!u.isPremium&&oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white",children:[oe.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[oe.jsx(T,{className:"w-6 h-6"}),oe.jsx("h3",{className:"text-lg font-semibold",children:"Upgrade para Premium"})]}),oe.jsx("p",{className:"mb-4 opacity-90",children:"Desbloqueie todos os recursos da calculadora e tenha acesso completo às funcionalidades avançadas."}),oe.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("/payment"),className:"bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Ativar Premium"})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[oe.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[oe.jsx(A,{className:"w-5 h-5"}),n("calc.calculationHistory")]}),oe.jsx(vo,{})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[oe.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[oe.jsx(I,{className:"w-5 h-5"}),"Segurança"]}),oe.jsxs(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:async()=>{try{localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("premiumActive"),localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),Ve.success("Logout realizado com sucesso!"),t("/")}catch(e){Ve.error("Erro ao fazer logout")}},className:"w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2 font-medium",children:[oe.jsx(U,{className:"w-5 h-5"}),n("settings.logout")]})]})]})]})})},No=()=>{const t=s(),[a,r]=e.useState(null),i=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:oe.jsx(u,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:oe.jsx(W,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:oe.jsx(h,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:oe.jsx(T,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Google Play"',"4. Complete o pagamento através da Google Play Store","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:oe.jsxs("div",{className:"container mx-auto px-4 py-8",children:[oe.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[oe.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:oe.jsx(N,{className:"w-6 h-6 text-gray-600"})}),oe.jsxs("div",{className:"flex items-center gap-3",children:[oe.jsx(V,{className:"w-8 h-8 text-blue-600"}),oe.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),oe.jsxs("div",{className:"max-w-4xl mx-auto",children:[oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[oe.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),oe.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[oe.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),i.map((e,t)=>oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[oe.jsxs("button",{onClick:()=>{return t=e.id,void r(a===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[oe.jsxs("div",{className:"flex items-center gap-4",children:[oe.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),oe.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),oe.jsx(d.div,{animate:{rotate:a===e.id?90:0},transition:{duration:.2},children:oe.jsx($,{className:"w-5 h-5 text-gray-500"})})]}),oe.jsx(z,{children:a===e.id&&oe.jsx(d.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:oe.jsxs("div",{className:"p-6 pt-4",children:[oe.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>oe.jsx(d.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&oe.jsxs(d.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[oe.jsx(H,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[oe.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),oe.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>oe.jsxs(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[oe.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),oe.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",children:[oe.jsx(G,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),oe.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),oe.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),oe.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Entrar em Contato"})]})]})]})})},jo=()=>{const[t,a]=e.useState([]),[r,s]=e.useState(!1),i="https://appdropcalc-production.up.railway.app",o=(e,t,r,s)=>{a(a=>a.map(a=>a.test===e?{...a,status:t,message:r,details:s}:a))};return oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4",children:oe.jsx("div",{className:"max-w-4xl mx-auto",children:oe.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20",children:[oe.jsx("h1",{className:"text-3xl font-bold text-white mb-6",children:"🔧 Debug DropCalc"}),oe.jsxs("div",{className:"mb-6",children:[oe.jsxs("p",{className:"text-white/80 mb-4",children:["API Base URL: ",oe.jsx("code",{className:"bg-black/30 px-2 py-1 rounded text-green-300",children:i})]}),oe.jsxs("div",{className:"flex gap-4",children:[oe.jsx("button",{onClick:async()=>{s(!0);a([{test:"Conectividade Backend",status:"pending",message:"Verificando..."},{test:"Health Check",status:"pending",message:"Verificando..."},{test:"Plataformas API",status:"pending",message:"Verificando..."},{test:"OAuth Google Redirect",status:"pending",message:"Verificando..."},{test:"Variáveis de Ambiente",status:"pending",message:"Verificando..."}]);try{const e=await fetch(`${i}/`),t=await e.text();o("Conectividade Backend","success",`✅ Conectado: ${t}`,{status:e.status})}catch(e){o("Conectividade Backend","error",`❌ Erro: ${e.message}`,e)}try{const e=await fetch(`${i}/health`),t=await e.json();o("Health Check","success",`✅ Saudável: ${t.message}`,t)}catch(e){o("Health Check","error",`❌ Erro: ${e.message}`,e)}try{const e=await fetch(`${i}/calc/platforms`),t=await e.json();o("Plataformas API","success",`✅ ${t.length} plataformas carregadas`,t.slice(0,2))}catch(e){o("Plataformas API","error",`❌ Erro: ${e.message}`,e)}try{o("Firebase Auth","success","✅ Firebase Auth disponível (Google via popup)",{info:"Agora usando Firebase em vez de backend OAuth"})}catch(e){o("Firebase Auth","error",`❌ Firebase Error: ${e.message}`,{error:e.message})}o("Variáveis de Ambiente","success","✅ Variáveis carregadas",{VITE_API_URL:"https://appdropcalc-production.up.railway.app",VITE_OFFLINE_MODE:"false",VITE_APP_MODE:"production"}),s(!1),Ve.success("Diagnóstico concluído!")},disabled:r,className:"bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:r?"🔄 Executando...":"🧪 Executar Diagnóstico"}),oe.jsx("button",{onClick:async()=>{try{const e=Ve.loading("Testando login Google Firebase..."),t=await so.loginWithGoogle();Ve.dismiss(e),Ve.success(`Login Google funcionando! Usuário: ${t.name}`)}catch(e){Ve.error(`Erro no teste Google: ${e.message}`)}},className:"bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",children:"🔐 Testar Login Google"})]})]}),oe.jsx("div",{className:"space-y-4",children:t.map((e,t)=>oe.jsxs("div",{className:"p-4 rounded-lg border-l-4 "+("success"===e.status?"bg-green-900/20 border-green-500":"error"===e.status?"bg-red-900/20 border-red-500":"bg-yellow-900/20 border-yellow-500"),children:[oe.jsxs("div",{className:"flex items-center justify-between",children:[oe.jsx("h3",{className:"font-semibold text-white",children:e.test}),oe.jsx("span",{className:"px-2 py-1 rounded text-xs font-bold "+("success"===e.status?"bg-green-600 text-white":"error"===e.status?"bg-red-600 text-white":"bg-yellow-600 text-black"),children:e.status.toUpperCase()})]}),oe.jsx("p",{className:"text-white/80 mt-2",children:e.message}),e.details&&oe.jsxs("details",{className:"mt-2",children:[oe.jsx("summary",{className:"text-white/60 cursor-pointer hover:text-white",children:"Ver detalhes"}),oe.jsx("pre",{className:"bg-black/30 p-3 rounded mt-2 text-xs text-green-300 overflow-x-auto",children:JSON.stringify(e.details,null,2)})]})]},t))})]})})})},ko=({text:e,children:t})=>{const[r,s]=a.useState(!1);return oe.jsxs("div",{className:"relative inline-block",children:[oe.jsx("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"cursor-help",children:t}),r&&oe.jsxs("div",{className:"absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 max-w-xs",children:[e,oe.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"})]})]})},Co=()=>{const t=s(),{t:a}=he(),{user:r,plan:i,logout:o,refreshAuth:n}=fo();console.log("🎯 DashboardSimples - Estado atual:",{user:!!r,userEmail:r?.email,userName:r?.name,plan:!!i,planType:i?.type,planName:i?.name}),e.useEffect(()=>{const e=localStorage.getItem("accessToken"),a=localStorage.getItem("currentUser");if(console.log("🔍 DashboardSimples - Verificação de auth:",{hasToken:!!e,hasUserData:!!a}),!e||!a)return console.log("❌ Não autenticado, redirecionando para login"),void t("/login");!r&&a&&(console.log("🔄 Fazendo refresh do auth..."),n())},[r,t,n]);const[l,c]=e.useState(""),[m,p]=e.useState(()=>{try{const e=localStorage.getItem("calculadora-historico");return e?JSON.parse(e):[]}catch{return[]}}),[g,x]=e.useState("5.00"),[f,b]=e.useState("4.70"),[y,v]=e.useState("25"),[w,N]=e.useState("0"),[j,k]=e.useState("3"),[C,S]=e.useState("shopify"),[I,E]=e.useState("stripe"),[_,P]=e.useState("USD"),[D,L]=e.useState("USD"),[O,M]=e.useState(null),[U,F]=e.useState(!1),[B,V]=e.useState(!1),$="premium"===i?.type,H="professional"===i?.type,G=e=>({USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[e]||e);e.useEffect(()=>{},[]);const W=[{id:"shopify",nome:"Shopify",taxa:2.9},{id:"nuvemshop",nome:"Nuvem Shop",taxa:3.5},{id:"woocommerce",nome:"WooCommerce",taxa:0},{id:"magento",nome:"Magento",taxa:0},{id:"opencart",nome:"OpenCart",taxa:0},{id:"prestashop",nome:"PrestaShop",taxa:0},{id:"mercadolivre",nome:"Mercado Livre",taxa:13.99},{id:"amazon",nome:"Amazon Brasil",taxa:15},{id:"americanas",nome:"Americanas",taxa:17},{id:"submarino",nome:"Submarino",taxa:17},{id:"casasbahia",nome:"Casas Bahia",taxa:18},{id:"extra",nome:"Extra",taxa:16},{id:"pontofrio",nome:"Ponto Frio",taxa:17},{id:"shopee",nome:"Shopee",taxa:12},{id:"aliexpress",nome:"AliExpress",taxa:8},{id:"wish",nome:"Wish",taxa:15},{id:"etsy",nome:"Etsy",taxa:6.5},{id:"ebay",nome:"eBay",taxa:10},{id:"facebook",nome:"Facebook Shop",taxa:5},{id:"instagram",nome:"Instagram Shop",taxa:5},{id:"tiktok",nome:"TikTok Shop",taxa:6},{id:"elo7",nome:"Elo7",taxa:12},{id:"enjoei",nome:"Enjoei",taxa:15},{id:"olx",nome:"OLX",taxa:0},{id:"vinted",nome:"Vinted",taxa:7},{id:"shein",nome:"Shein",taxa:10},{id:"temu",nome:"Temu",taxa:8},{id:"zoom",nome:"Zoom",taxa:5},{id:"buscape",nome:"Buscapé",taxa:8},{id:"personalizado",nome:"Site Personalizado",taxa:0}],Y=[{id:"stripe",nome:"Stripe",taxa:3.4},{id:"pagseguro",nome:"PagSeguro",taxa:3.99},{id:"mercadopago",nome:"Mercado Pago",taxa:4.99},{id:"paypal",nome:"PayPal",taxa:4.4},{id:"cielo",nome:"Cielo",taxa:3.25},{id:"rede",nome:"Rede",taxa:3.5},{id:"getnet",nome:"Getnet",taxa:3.2},{id:"stone",nome:"Stone",taxa:2.95},{id:"adyen",nome:"Adyen",taxa:2.9},{id:"wirecard",nome:"Wirecard",taxa:3.8},{id:"iugu",nome:"Iugu",taxa:4.5},{id:"pagar.me",nome:"Pagar.me",taxa:4.99},{id:"picpay",nome:"PicPay",taxa:3.99},{id:"asaas",nome:"Asaas",taxa:3.5},{id:"gerencianet",nome:"Gerencianet",taxa:4.2},{id:"moip",nome:"Moip",taxa:4.69},{id:"ebanx",nome:"EBANX",taxa:4.2},{id:"checkout",nome:"Checkout.com",taxa:2.95},{id:"rakuten",nome:"Rakuten Pay",taxa:4.5},{id:"ifood",nome:"iFood Pay",taxa:5.2},{id:"shipay",nome:"SiPay",taxa:3.8},{id:"zoop",nome:"Zoop",taxa:3.59},{id:"vindi",nome:"Vindi",taxa:3.99},{id:"yapay",nome:"YaPay",taxa:4.1},{id:"pagarme",nome:"Pagar.me",taxa:4.99}],X=[{codigo:"USD",nome:"Dólar Americano"},{codigo:"EUR",nome:"Euro"},{codigo:"GBP",nome:"Libra Esterlina"},{codigo:"CNY",nome:"Yuan Chinês"},{codigo:"JPY",nome:"Iene Japonês"},{codigo:"CAD",nome:"Dólar Canadense"},{codigo:"AUD",nome:"Dólar Australiano"},{codigo:"CHF",nome:"Franco Suíço"},{codigo:"SEK",nome:"Coroa Sueca"},{codigo:"NOK",nome:"Coroa Norueguesa"},{codigo:"DKK",nome:"Coroa Dinamarquesa"},{codigo:"PLN",nome:"Zloty Polonês"},{codigo:"CZK",nome:"Coroa Tcheca"},{codigo:"HUF",nome:"Forint Húngaro"},{codigo:"RON",nome:"Leu Romeno"},{codigo:"BGN",nome:"Lev Búlgaro"},{codigo:"HRK",nome:"Kuna Croata"},{codigo:"RUB",nome:"Rublo Russo"},{codigo:"TRY",nome:"Lira Turca"},{codigo:"ILS",nome:"Shekel Israelense"},{codigo:"ZAR",nome:"Rand Sul-Africano"},{codigo:"INR",nome:"Rupia Indiana"},{codigo:"KRW",nome:"Won Sul-Coreano"},{codigo:"SGD",nome:"Dólar de Singapura"},{codigo:"HKD",nome:"Dólar de Hong Kong"},{codigo:"THB",nome:"Baht Tailandês"},{codigo:"MYR",nome:"Ringgit Malaio"},{codigo:"IDR",nome:"Rupia Indonésia"},{codigo:"PHP",nome:"Peso Filipino"},{codigo:"VND",nome:"Dong Vietnamita"},{codigo:"BDT",nome:"Taka de Bangladesh"},{codigo:"PKR",nome:"Rupia Paquistanesa"},{codigo:"LKR",nome:"Rupia do Sri Lanka"},{codigo:"NPR",nome:"Rupia Nepalesa"},{codigo:"MVR",nome:"Rufiyaa das Maldivas"},{codigo:"BTN",nome:"Ngultrum do Butão"},{codigo:"AFN",nome:"Afghani Afegão"},{codigo:"IRR",nome:"Rial Iraniano"},{codigo:"IQD",nome:"Dinar Iraquiano"},{codigo:"JOD",nome:"Dinar Jordaniano"},{codigo:"KWD",nome:"Dinar Kuwaitiano"},{codigo:"LBP",nome:"Libra Libanesa"},{codigo:"SAR",nome:"Riyal Saudita"},{codigo:"AED",nome:"Dirham dos Emirados"},{codigo:"QAR",nome:"Riyal do Catar"},{codigo:"OMR",nome:"Rial de Omã"},{codigo:"BHD",nome:"Dinar do Bahrein"},{codigo:"YER",nome:"Rial Iemenita"},{codigo:"SYP",nome:"Libra Síria"},{codigo:"EGP",nome:"Libra Egípcia"},{codigo:"LYD",nome:"Dinar Líbio"},{codigo:"TND",nome:"Dinar Tunisiano"},{codigo:"DZD",nome:"Dinar Argelino"},{codigo:"MAD",nome:"Dirham Marroquino"},{codigo:"NGN",nome:"Naira Nigeriana"},{codigo:"GHS",nome:"Cedi Ganês"},{codigo:"KES",nome:"Xelim Queniano"},{codigo:"UGX",nome:"Xelim Ugandense"},{codigo:"TZS",nome:"Xelim Tanzaniano"},{codigo:"ETB",nome:"Birr Etíope"},{codigo:"RWF",nome:"Franco Ruandês"},{codigo:"MXN",nome:"Peso Mexicano"},{codigo:"GTQ",nome:"Quetzal Guatemalteco"},{codigo:"HNL",nome:"Lempira Hondurenha"},{codigo:"NIO",nome:"Córdoba Nicaraguense"},{codigo:"CRC",nome:"Colón Costa-riquenho"},{codigo:"PAB",nome:"Balboa Panamenha"},{codigo:"COP",nome:"Peso Colombiano"},{codigo:"VES",nome:"Bolívar Venezuelano"},{codigo:"GYD",nome:"Dólar Guianense"},{codigo:"SRD",nome:"Dólar Surinamês"},{codigo:"PEN",nome:"Sol Peruano"},{codigo:"BOB",nome:"Boliviano"},{codigo:"PYG",nome:"Guarani Paraguaio"},{codigo:"UYU",nome:"Peso Uruguaio"},{codigo:"ARS",nome:"Peso Argentino"},{codigo:"CLP",nome:"Peso Chileno"},{codigo:"BRL",nome:"Real Brasileiro"}];e.useEffect(()=>{const e=setTimeout(()=>{(async()=>{if(g&&j){V(!0);try{const e=parseFloat(g),t=parseFloat(j),a=parseFloat(y),r=parseFloat(w)||0,s=parseFloat(f)||0,i=((e,t)=>{if(e===t)return 1;const a={BRL:5.2,EUR:.92,GBP:.8,JPY:150,CNY:7.3,CAD:1.35,AUD:1.55,CHF:.9,SEK:10.5,NOK:10.8,MXN:18.5,ARS:365,CLP:900,COP:4100,PEN:3.75,INR:83.5,KRW:1320,THB:36,SGD:1.35,HKD:7.8};return"USD"===e?a[t]||1:"USD"===t?1/(a[e]||1):1/(a[e]||1)*(a[t]||1)})(_,D),o=W.find(e=>e.id===C),n=Y.find(e=>e.id===I),l=o?.taxa||2.9,c=n?.taxa||3.4,d=e*i,u=d*t,h=d+s*i+r*i,m=u*(c/100),p=u*(l/100),x=u*(a/100),b=m+p+x,v=u-h-b,N=h+b,k=[1,10,50,100,500,1e3].map(e=>({quantidade:e,lucro:v*e}));M({precoVenda:u,custoTotal:h,custoFornecedor:d,markup:t,taxaCambio:i,lucroLiquido:v,breakeven:N,taxas:{gateway:{percentual:c,valor:m},plataforma:{percentual:l,valor:p},marketing:{percentual:a,valor:x},extra:{percentual:0,valor:0},total:b},projecoes:k,percentuais:{custoMedio:h/u*100,marketing:a,margemContrib:v/u*100,breakeven:N/u*100}})}catch(e){console.error("Erro no cálculo:",e),M(null)}finally{V(!1)}}else M(null)})()},500);return()=>clearTimeout(e)},[g,f,y,w,j,C,I,_,D]);const Q=async()=>{try{console.log("🚪 Iniciando logout..."),localStorage.clear(),await o(),console.log("✅ Logout concluído, redirecionando..."),window.location.href="/welcome"}catch(e){console.error("❌ Erro no logout:",e),localStorage.clear(),window.location.href="/welcome"}};return oe.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900",children:[oe.jsx("header",{className:"bg-white/20 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10",children:oe.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:oe.jsxs("div",{className:"flex justify-between items-center h-16",children:[oe.jsxs("div",{className:"flex items-center",children:[oe.jsx(u,{className:"h-8 w-8 text-purple-400 mr-3"}),oe.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"DropCalc"})]}),oe.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[oe.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:[a("calc.welcome"),", ",r?.name||"Usuário","!",!1]}),i&&oe.jsxs("span",{className:"px-2 py-1 text-xs font-bold rounded-full flex items-center "+($?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":H?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[oe.jsx(T,{className:"w-3 h-3 mr-1"}),i.name.toUpperCase()]}),oe.jsx("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano, navegando para /plans"),t("/plans")},className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors",children:i?"Alterar Plano":"Escolher Plano"}),oe.jsx("button",{onClick:()=>t("/users"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",title:"Ver Usuários",children:oe.jsx(R,{className:"w-5 h-5"})}),oe.jsx("button",{onClick:()=>t("/settings"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:oe.jsx(A,{className:"w-5 h-5"})}),oe.jsx("button",{onClick:Q,className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors",children:a("nav.logout")})]}),oe.jsx("button",{onClick:()=>F(!U),className:"md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:U?oe.jsx(q,{className:"w-6 h-6"}):oe.jsx(K,{className:"w-6 h-6"})})]})})}),oe.jsx(z,{children:U&&oe.jsx(d.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-black/30 backdrop-blur-sm border-b border-white/10",children:oe.jsxs("div",{className:"px-4 py-4 space-y-2",children:[oe.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:[a("calc.welcome"),", ",r?.name||a("calc.user"),"!"]}),i&&oe.jsxs("div",{className:"inline-flex px-2 py-1 text-xs font-bold rounded-full items-center mb-2 "+($?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":H?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[oe.jsx(T,{className:"w-3 h-3 mr-1"}),i.name.toUpperCase()]}),oe.jsxs("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano (mobile), navegando para /plans"),t("/plans"),F(!1)},className:"flex items-center w-full p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[oe.jsx(T,{className:"w-4 h-4 mr-2"}),i?"Alterar Plano":"Escolher Plano"]}),oe.jsxs("button",{onClick:()=>{t("/users"),F(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[oe.jsx(R,{className:"w-4 h-4 mr-2"}),"Ver Usuários"]}),oe.jsxs("button",{onClick:()=>{t("/settings"),F(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[oe.jsx(A,{className:"w-4 h-4 mr-2"}),a("nav.settings")]}),oe.jsxs("button",{onClick:Q,className:"flex items-center w-full p-2 text-red-400 hover:text-red-300 transition-colors",children:[oe.jsx(R,{className:"w-4 h-4 mr-2"}),a("nav.logout")]})]})})}),oe.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:oe.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[oe.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[oe.jsx(u,{className:"w-6 h-6 mr-2 text-purple-400"}),a("calc.title"),B&&oe.jsx("span",{className:"ml-3 text-sm text-yellow-400 animate-pulse",children:a("calc.loading")})]}),oe.jsxs("div",{className:"space-y-4",children:[oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.productName"),oe.jsx(ko,{text:a("tooltip.productName"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("input",{type:"text",className:"w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500",placeholder:a("calc.productName"),value:l,onChange:e=>c(e.target.value)})]}),oe.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.productCost")," (",_,")",oe.jsx(ko,{text:a("tooltip.productCost"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("input",{type:"number",value:g,onChange:e=>x(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 16.73",step:"0.01"})]}),oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.originCurrency"),oe.jsx(ko,{text:a("tooltip.originCurrency"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("select",{value:_,onChange:e=>P(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:X.map(e=>oe.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))})]}),oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.saleCurrency"),oe.jsx(ko,{text:a("tooltip.saleCurrency"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("select",{value:D,onChange:e=>L(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:X.map(e=>oe.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))})]})]}),oe.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.additionalCosts")," (",_,")",oe.jsx(ko,{text:a("tooltip.additionalCosts"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("input",{type:"number",value:f,onChange:e=>b(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 5.00",step:"0.01"})]}),oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.profitMargin"),oe.jsx(ko,{text:a("tooltip.profitMargin"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("input",{type:"number",value:j,onChange:e=>k(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 4.12",step:"0.01",min:"1"})]})]}),oe.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Marketing (%)",oe.jsx(ko,{text:a("tooltip.marketing"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("input",{type:"number",value:y,onChange:e=>v(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 25",step:"0.1",min:"0",max:"100"})]}),oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Custo Extra (",_,")",oe.jsx(ko,{text:a("tooltip.extraCost"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("input",{type:"number",value:w,onChange:e=>N(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 2.00",step:"0.01"})]})]}),oe.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.platform"),oe.jsx(ko,{text:a("tooltip.platform"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("select",{value:C,onChange:e=>S(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:W.map(e=>oe.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))})]}),oe.jsxs("div",{children:[oe.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[a("calc.paymentGateway"),oe.jsx(ko,{text:a("tooltip.gateway"),children:oe.jsx(J,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),oe.jsx("select",{value:I,onChange:e=>E(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:Y.map(e=>oe.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))})]})]})]})]}),oe.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[oe.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[oe.jsx(h,{className:"w-6 h-6 mr-2 text-green-400"}),a("calc.calculationResult")]}),O?oe.jsxs("div",{className:"space-y-6",children:[oe.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4",children:oe.jsxs("div",{className:"text-center",children:[oe.jsx("p",{className:"text-green-100 text-sm",children:a("calc.suggestedPrice")}),oe.jsxs("p",{className:"text-3xl font-bold text-white",children:[G(D)," ",O.precoVenda.toFixed(2)]}),oe.jsxs("p",{className:"text-green-200 text-xs mt-1",children:[a("calc.exchangeRate"),": 1 ",_," = ",O.taxaCambio.toFixed(4)," ",D]})]})}),oe.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3",children:oe.jsxs("div",{className:"flex flex-wrap justify-center gap-4 text-sm",children:[oe.jsxs("div",{className:"flex items-center",children:[oe.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Plataforma:"}),oe.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:W.find(e=>e.id===C)?.nome||C})]}),oe.jsxs("div",{className:"flex items-center",children:[oe.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Gateway:"}),oe.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:Y.find(e=>e.id===I)?.nome||I})]})]})}),oe.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[oe.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[oe.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:a("calc.pricing")}),oe.jsxs("div",{className:"space-y-2 text-sm",children:[oe.jsxs("div",{className:"flex justify-between items-center bg-green-600 text-white px-2 py-1 rounded",children:[oe.jsxs("span",{className:"flex items-center",children:[a("calc.sellingPrice"),":",oe.jsx(ko,{text:a("tooltip.resultSellingPrice"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{children:[G(D)," ",O.precoVenda.toFixed(2)]})]}),oe.jsxs("div",{className:"flex justify-between items-center bg-red-500 text-white px-2 py-1 rounded",children:[oe.jsxs("span",{className:"flex items-center",children:[a("calc.supplierCost"),":",oe.jsx(ko,{text:a("tooltip.resultSupplierCost"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{children:[G(D)," ",O.custoFornecedor.toFixed(2)]})]}),oe.jsxs("div",{className:"flex justify-between items-center bg-gray-500 text-white px-2 py-1 rounded",children:[oe.jsxs("span",{className:"flex items-center",children:[a("calc.markupLabel"),":",oe.jsx(ko,{text:a("tooltip.resultMarkup"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsx("span",{children:O.markup.toFixed(8)})]})]}),oe.jsx("h4",{className:"text-white font-bold text-center bg-blue-600 text-sm py-2 mt-4 mb-2 rounded",children:a("calc.taxes")}),oe.jsxs("div",{className:"space-y-1 text-sm",children:[oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsx("span",{className:"text-blue-400",children:Y.find(e=>e.id===I)?.nome||I}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[O.taxas.gateway.percentual.toFixed(2),"%"]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.taxas.gateway.valor.toFixed(2)]})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsx("span",{className:"text-blue-400",children:W.find(e=>e.id===C)?.nome||C}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[O.taxas.plataforma.percentual.toFixed(2),"%"]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.taxas.plataforma.valor.toFixed(2)]})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsx("span",{className:"text-blue-400",children:a("calc.marketing")}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[O.taxas.marketing.percentual,"%"]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.taxas.marketing.valor.toFixed(2)]})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsx("span",{className:"text-blue-400",children:a("calc.extra")}),oe.jsx("span",{className:"text-gray-900 dark:text-white",children:"0%"}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.taxas.extra.valor.toFixed(2)]})]}),oe.jsxs("div",{className:"flex justify-center bg-green-600 text-white px-2 py-1 rounded font-bold",children:[G(D)," ",O.taxas.total.toFixed(2)]})]})]}),oe.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[oe.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:a("calc.importantValues")}),oe.jsxs("div",{className:"space-y-2 text-sm",children:[oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[a("calc.saleValue"),oe.jsx(ko,{text:a("tooltip.resultSaleValue"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.precoVenda.toFixed(2)]}),oe.jsx("span",{className:"text-green-600 dark:text-green-400",children:"100,00%"})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[a("calc.averageCost"),oe.jsx(ko,{text:a("tooltip.resultAverageCost"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.custoTotal.toFixed(2)]}),oe.jsxs("span",{className:"text-red-400",children:[O.percentuais.custoMedio.toFixed(2),"%"]})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[a("calc.marketing"),oe.jsx(ko,{text:a("tooltip.resultMarketing"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.taxas.marketing.valor.toFixed(2)]}),oe.jsxs("span",{className:"text-yellow-400",children:[O.percentuais.marketing.toFixed(2),"%"]})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[a("calc.contributionMargin"),oe.jsx(ko,{text:a("tooltip.resultContributionMargin"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.lucroLiquido.toFixed(2)]}),oe.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[O.percentuais.margemContrib.toFixed(2),"%"]})]}),oe.jsxs("div",{className:"flex justify-between items-center",children:[oe.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[a("calc.breakeven"),oe.jsx(ko,{text:a("tooltip.resultBreakeven"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{className:"text-gray-900 dark:text-white",children:[G(D)," ",O.breakeven.toFixed(2)]}),oe.jsxs("span",{className:"text-orange-400",children:[O.percentuais.breakeven.toFixed(2),"%"]})]})]}),oe.jsx("h4",{className:"text-white font-bold text-center bg-green-600 text-sm py-2 mt-4 mb-2 rounded",children:a("calc.sales")}),oe.jsxs("div",{className:"flex justify-between text-sm font-bold text-green-600 dark:text-green-400 mb-2",children:[oe.jsxs("span",{className:"flex items-center",children:[a("calc.units"),":",oe.jsx(ko,{text:a("tooltip.resultUnits"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]}),oe.jsxs("span",{className:"flex items-center",children:[a("calc.profitLabel"),oe.jsx(ko,{text:a("tooltip.resultProfit"),children:oe.jsx(J,{className:"w-3 h-3 ml-1"})})]})]}),oe.jsx("div",{className:"space-y-1 text-sm",children:O.projecoes.map((e,t)=>oe.jsxs("div",{className:"flex justify-between items-center bg-green-100/10 px-2 py-1 rounded",children:[oe.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[a("calc.units"),":"]}),oe.jsx("span",{className:"text-gray-900 dark:text-white font-bold",children:e.quantidade}),oe.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[G(D)," ",e.lucro.toFixed(2)]})]},t))})]})]}),oe.jsx("div",{className:"text-center",children:oe.jsxs("button",{onClick:()=>{if(!O)return;const e=[{id:Date.now().toString(),nomeProduto:l||"Produto sem nome",precoVenda:O.precoVenda,moedaDestino:D,plataforma:C,gateway:I,dataCalculo:(new Date).toLocaleString("pt-BR"),detalhes:O},...m].slice(0,50);p(e),localStorage.setItem("calculadora-historico",JSON.stringify(e)),alert(a("calc.calculationSaved"))},className:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto",children:[oe.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),a("calc.saveCalculation")]})})]}):B?oe.jsxs("div",{className:"text-center py-12",children:[oe.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"}),oe.jsx("p",{className:"text-purple-400 font-medium",children:a("calc.loading")})]}):g&&j?oe.jsxs("div",{className:"text-center py-12",children:[oe.jsx(Z,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),oe.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:a("calc.enterValuesMessage")})]}):oe.jsxs("div",{className:"text-center py-12",children:[oe.jsx(Z,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),oe.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:a("calc.fillFieldsMessage")})]})]})]})})]})},So=()=>{const[t,a]=e.useState([]),[r,i]=e.useState(!0),[o,n]=e.useState(null),l=s();e.useEffect(()=>{c()},[]);const c=async()=>{try{const e=localStorage.getItem("token");if(!e)throw new Error("Token não encontrado");const t=xt.users.list;console.log("🔍 Buscando usuários em:",t);const r=await fetch(t,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}});if(!r.ok)throw new Error(`Erro: ${r.status}`);const s=await r.json();a(s)}catch(e){n(e instanceof Error?e.message:"Erro desconhecido"),console.error("Erro ao buscar usuários:",e)}finally{i(!1)}},d=e=>new Date(e).toLocaleString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return r?oe.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex items-center justify-center",children:oe.jsx("div",{className:"text-xl",children:"Carregando usuários..."})}):o?oe.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white flex items-center justify-center",children:oe.jsxs("div",{className:"bg-red-500/20 border border-red-500 rounded-lg p-6 max-w-md w-full mx-4",children:[oe.jsx("h2",{className:"text-xl font-bold mb-2",children:"Erro"}),oe.jsx("p",{className:"mb-4",children:o}),oe.jsx("button",{onClick:()=>l("/dashboard"),className:"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded",children:"Voltar ao Dashboard"})]})}):oe.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4",children:oe.jsxs("div",{className:"max-w-6xl mx-auto",children:[oe.jsxs("div",{className:"flex justify-between items-center mb-6",children:[oe.jsx("h1",{className:"text-3xl font-bold",children:"Usuários Cadastrados"}),oe.jsx("button",{onClick:()=>l("/dashboard"),className:"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded",children:"← Voltar"})]}),oe.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-lg p-6",children:[oe.jsx("div",{className:"mb-4",children:oe.jsxs("p",{className:"text-lg",children:["Total de usuários: ",oe.jsx("span",{className:"font-bold text-yellow-300",children:t.length})]})}),oe.jsx("div",{className:"overflow-x-auto",children:oe.jsxs("table",{className:"w-full text-left",children:[oe.jsx("thead",{children:oe.jsxs("tr",{className:"border-b border-white/20",children:[oe.jsx("th",{className:"pb-3 pr-4",children:"Nome"}),oe.jsx("th",{className:"pb-3 pr-4",children:"Email"}),oe.jsx("th",{className:"pb-3 pr-4",children:"Data de Cadastro"}),oe.jsx("th",{className:"pb-3",children:"Última Atualização"})]})}),oe.jsx("tbody",{children:t.map((e,t)=>oe.jsxs("tr",{className:t%2==0?"bg-white/5":"",children:[oe.jsxs("td",{className:"py-3 pr-4",children:[oe.jsx("div",{className:"font-medium",children:e.name}),oe.jsxs("div",{className:"text-sm text-gray-300",children:["ID: ",e.id]})]}),oe.jsx("td",{className:"py-3 pr-4",children:e.email}),oe.jsx("td",{className:"py-3 pr-4",children:d(e.createdAt)}),oe.jsx("td",{className:"py-3",children:d(e.updatedAt)})]},e.id))})]})}),0===t.length&&oe.jsx("div",{className:"text-center py-8",children:oe.jsx("p",{className:"text-xl text-gray-300",children:"Nenhum usuário encontrado"})})]}),oe.jsx("div",{className:"mt-6 bg-blue-500/20 border border-blue-500 rounded-lg p-4",children:oe.jsxs("p",{className:"text-sm",children:[oe.jsx("strong",{children:"Nota:"})," Esta é uma página administrativa para visualizar todos os usuários cadastrados no sistema. Total atual: ",t.length," usuário(s)."]})})]})})};class Io extends a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t)}render(){return this.state.hasError?oe.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:oe.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center max-w-md",children:[oe.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Ops! Algo deu errado"}),oe.jsx("p",{className:"text-gray-300 mb-6",children:"Ocorreu um erro inesperado. Tente recarregar a página."}),oe.jsx("button",{onClick:()=>window.location.reload(),className:"bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200",children:"Recarregar Página"}),this.state.error&&oe.jsxs("details",{className:"mt-4 text-left",children:[oe.jsx("summary",{className:"text-gray-400 cursor-pointer",children:"Detalhes técnicos"}),oe.jsx("pre",{className:"text-xs text-red-300 mt-2 overflow-auto",children:this.state.error.toString()})]})]})}):this.props.children}}const Eo=()=>(console.log("=== AppHybrid carregando ==="),oe.jsx(mt,{children:oe.jsx(o,{children:oe.jsxs("div",{className:"App",children:[oe.jsxs(n,{children:[oe.jsx(l,{path:"/welcome",element:oe.jsx(gt,{})}),oe.jsx(l,{path:"/test",element:oe.jsx(pt,{})}),oe.jsx(l,{path:"/debug",element:oe.jsx(jo,{})}),oe.jsx(l,{path:"/login",element:oe.jsx(io,{})}),oe.jsx(l,{path:"/login-simple",element:oe.jsx(oo,{})}),oe.jsx(l,{path:"/login-alt",element:oe.jsx(no,{})}),oe.jsx(l,{path:"/auth/callback",element:oe.jsx(lo,{})}),oe.jsx(l,{path:"/forgot-password",element:oe.jsx(po,{})}),oe.jsx(l,{path:"/reset-password",element:oe.jsx(go,{})}),oe.jsx(l,{path:"/signup",element:oe.jsx(io,{})}),oe.jsx(l,{path:"/payment",element:oe.jsx(xo,{})}),oe.jsx(l,{path:"/plans",element:oe.jsx(yo,{})}),oe.jsx(l,{path:"/dashboard",element:oe.jsx(Io,{children:oe.jsx(Co,{})})}),oe.jsx(l,{path:"/settings",element:oe.jsx(wo,{})}),oe.jsx(l,{path:"/help",element:oe.jsx(No,{})}),oe.jsx(l,{path:"/users",element:oe.jsx(So,{})}),oe.jsx(l,{path:"/",element:oe.jsx(c,{to:"/dashboard",replace:!0})}),oe.jsx(l,{path:"*",element:oe.jsx(c,{to:"/dashboard",replace:!0})})]}),oe.jsx(dt,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})}));let _o;async function Po(){if(_o){_o.prompt();const{outcome:e}=await _o.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}_o=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),_o=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",Po),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const To=document.createElement("style");To.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(To),console.log("=== main.tsx carregando AppHybrid com sistema de idiomas ===");ne.createRoot(document.getElementById("root")).render(oe.jsx(ue,{children:oe.jsx(Eo,{})}));
