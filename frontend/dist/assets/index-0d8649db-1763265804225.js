import{r as e,b as t}from"./vendor-5fcaeebf-1763265804225.js";import{u as r,N as n,L as a,a as o,b as s,B as i,R as l,c}from"./router-9ab902ce-1763265804225.js";import{m as d,C as u,T as h,Z as p,A as m,U as g,M as f,L as y,E as b,a as v,b as x,c as w,S as C,G as j,d as S,e as N,f as E,g as I,h as T,H as _,i as k,X as P,j as A,k as R,D as O,l as D,n as L,P as U,o as M,p as B}from"./ui-ad87c1e2-1763265804225.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var F={exports:{}},H={},V=e,z=Symbol.for("react.element"),$=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,q=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function K(e,t,r){var n,a={},o=null,s=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(s=t.ref),t)G.call(t,n)&&!W.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:z,type:e,key:o,ref:s,props:a,_owner:q.current}}H.Fragment=$,H.jsx=K,H.jsxs=K,F.exports=H;var J=F.exports,X={},Z=t;X.createRoot=Z.createRoot,X.hydrateRoot=Z.hydrateRoot;const Y={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},Q=e.createContext(void 0),ee=({children:t})=>{const[r,n]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&n(e)},[]);const a={language:r,setLanguage:e=>{n(e),localStorage.setItem("language",e)},t:e=>Y[r][e]||e};return J.jsx(Q.Provider,{value:a,children:t})};let te,re,ne,ae={data:""},oe=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ae},se=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ie=/\/\*[^]*?\*\/|  +/g,le=/\n+/g,ce=(e,t)=>{let r="",n="",a="";for(let o in e){let s=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+s+";":n+="f"==o[1]?ce(s,o):o+"{"+ce(s,"k"==o[1]?"":t)+"}":"object"==typeof s?n+=ce(s,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=s&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=ce.p?ce.p(o,s):o+":"+s+";")}return r+(t&&a?t+"{"+a+"}":a)+n},de={},ue=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+ue(e[r]);return t}return e},he=(e,t,r,n,a)=>{let o=ue(e),s=de[o]||(de[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!de[s]){let t=o!==e?e:(e=>{let t,r,n=[{}];for(;t=se.exec(e.replace(ie,""));)t[4]?n.shift():t[3]?(r=t[3].replace(le," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(le," ").trim();return n[0]})(e);de[s]=ce(a?{["@keyframes "+s]:t}:t,r?"":"."+s)}let i=r&&de.g?de.g:null;return r&&(de.g=de[s]),((e,t,r,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(de[s],t,n,i),s};function pe(e){let t=this||{},r=e.call?e(t.p):e;return he(r.unshift?r.raw?((e,t,r)=>e.reduce((e,n,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":ce(e,""):!1===e?"":e}return e+n+(null==o?"":o)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,oe(t.target),t.g,t.o,t.k)}pe.bind({g:1});let me=pe.bind({k:1});function ge(e,t){let r=this||{};return function(){let n=arguments;function a(o,s){let i=Object.assign({},o),l=i.className||a.className;r.p=Object.assign({theme:re&&re()},i),r.o=/ *go\d+/.test(l),i.className=pe.apply(r,n)+(l?" "+l:""),t&&(i.ref=s);let c=e;return e[0]&&(c=i.as||e,delete i.as),ne&&c[0]&&ne(i),te(c,i)}return t?t(a):a}}var fe=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,ye=(()=>{let e=0;return()=>(++e).toString()})(),be=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ve="default",xe=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return xe(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},we=[],Ce={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},je={},Se=(e,t=ve)=>{je[t]=xe(je[t]||Ce,e),we.forEach(([e,r])=>{e===t&&r(je[t])})},Ne=e=>Object.keys(je).forEach(t=>Se(e,t)),Ee=(e=ve)=>t=>{Se(t,e)},Ie={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Te=e=>(t,r)=>{let n=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||ye()}))(t,e,r);return Ee(n.toasterId||(e=>Object.keys(je).find(t=>je[t].toasts.some(t=>t.id===e)))(n.id))({type:2,toast:n}),n.id},_e=(e,t)=>Te("blank")(e,t);_e.error=Te("error"),_e.success=Te("success"),_e.loading=Te("loading"),_e.custom=Te("custom"),_e.dismiss=(e,t)=>{let r={type:3,toastId:e};t?Ee(t)(r):Ne(r)},_e.dismissAll=e=>_e.dismiss(void 0,e),_e.remove=(e,t)=>{let r={type:4,toastId:e};t?Ee(t)(r):Ne(r)},_e.removeAll=e=>_e.remove(void 0,e),_e.promise=(e,t,r)=>{let n=_e.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?fe(t.success,e):void 0;return a?_e.success(a,{id:n,...r,...null==r?void 0:r.success}):_e.dismiss(n),e}).catch(e=>{let a=t.error?fe(t.error,e):void 0;a?_e.error(a,{id:n,...r,...null==r?void 0:r.error}):_e.dismiss(n)}),e};var ke=(t,r="default")=>{let{toasts:n,pausedAt:a}=((t={},r=ve)=>{let[n,a]=e.useState(je[r]||Ce),o=e.useRef(je[r]);e.useEffect(()=>(o.current!==je[r]&&a(je[r]),we.push([r,a]),()=>{let e=we.findIndex(([e])=>e===r);e>-1&&we.splice(e,1)}),[r]);let s=n.toasts.map(e=>{var r,n,a;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==t?void 0:t.duration)||Ie[e.type],style:{...t.style,...null==(a=t[e.type])?void 0:a.style,...e.style}}});return{...n,toasts:s}})(t,r),o=e.useRef(new Map).current,s=e.useCallback((e,t=1e3)=>{if(o.has(e))return;let r=setTimeout(()=>{o.delete(e),i({type:4,toastId:e})},t);o.set(e,r)},[]);e.useEffect(()=>{if(a)return;let e=Date.now(),t=n.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout(()=>_e.dismiss(t.id,r),n);t.visible&&_e.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[n,a,r]);let i=e.useCallback(Ee(r),[r]),l=e.useCallback(()=>{i({type:5,time:Date.now()})},[i]),c=e.useCallback((e,t)=>{i({type:1,toast:{id:e,height:t}})},[i]),d=e.useCallback(()=>{a&&i({type:6,time:Date.now()})},[a,i]),u=e.useCallback((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:o}=t||{},s=n.filter(t=>(t.position||o)===(e.position||o)&&t.height),i=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<i&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[n]);return e.useEffect(()=>{n.forEach(e=>{if(e.dismissed)s(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},Pe=me`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ae=me`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Re=me`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Oe=ge("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ae} 0.15s ease-out forwards;
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
    animation: ${Re} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,De=me`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Le=ge("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${De} 1s linear infinite;
`,Ue=me`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Me=me`
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
}`,Be=ge("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Me} 0.2s ease-out forwards;
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
`,Fe=ge("div")`
  position: absolute;
`,He=ge("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ve=me`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ze=ge("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ve} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$e=({toast:t})=>{let{icon:r,type:n,iconTheme:a}=t;return void 0!==r?"string"==typeof r?e.createElement(ze,null,r):r:"blank"===n?null:e.createElement(He,null,e.createElement(Le,{...a}),"loading"!==n&&e.createElement(Fe,null,"error"===n?e.createElement(Oe,{...a}):e.createElement(Be,{...a})))},Ge=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,qe=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,We=ge("div")`
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
`,Ke=ge("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Je=e.memo(({toast:t,position:r,style:n,children:a})=>{let o=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,a]=be()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Ge(r),qe(r)];return{animation:t?`${me(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${me(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},s=e.createElement($e,{toast:t}),i=e.createElement(Ke,{...t.ariaProps},fe(t.message,t));return e.createElement(We,{className:t.className,style:{...o,...n,...t.style}},"function"==typeof a?a({icon:s,message:i}):e.createElement(e.Fragment,null,s,i))});!function(e,t,r,n){ce.p=t,te=e,re=r,ne=n}(e.createElement);var Xe=({id:t,className:r,style:n,onHeightUpdate:a,children:o})=>{let s=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;a(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return e.createElement("div",{ref:s,className:r,style:n},o)},Ze=pe`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ye=({reverseOrder:t,position:r="top-center",toastOptions:n,gutter:a,children:o,toasterId:s,containerStyle:i,containerClassName:l})=>{let{toasts:c,handlers:d}=ke(n,s);return e.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(n=>{let s=n.position||r,i=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:be()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...a}})(s,d.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return e.createElement(Xe,{id:n.id,key:n.id,onHeightUpdate:d.updateHeight,className:n.visible?Ze:"",style:i},"custom"===n.type?fe(n.message,n):o?o(n):e.createElement(Je,{toast:n,position:s}))}))},Qe=_e;const et={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:et.getBaseURL(),authSignup:et.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[et.auth.signup,et.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const tt=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<e.length;a+=3){const t=e[a],o=a+1<e.length,s=o?e[a+1]:0,i=a+2<e.length,l=i?e[a+2]:0,c=t>>2,d=(3&t)<<4|s>>4;let u=(15&s)<<2|l>>6,h=63&l;i||(h=64,o||(u=64)),n.push(r[c],r[d],r[u],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){const o=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&o)}else if(a>239&&a<365){const o=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{const o=e[r++],s=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<e.length;){const t=r[e.charAt(a++)],o=a<e.length?r[e.charAt(a)]:0;++a;const s=a<e.length?r[e.charAt(a)]:64;++a;const i=a<e.length?r[e.charAt(a)]:64;if(++a,null==t||null==o||null==s||null==i)throw new nt;const l=t<<2|o>>4;if(n.push(l),64!==s){const e=o<<4&240|s>>2;if(n.push(e),64!==i){const e=s<<6&192|i;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class nt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const at=function(e){return function(e){const t=tt(e);return rt.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ot=function(e){try{return rt.decodeString(e,!0)}catch(ae){console.error("base64Decode failed: ",ae)}return null};
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
const st=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,it=()=>{try{return st()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(ae){return}const t=e&&ot(e[1]);return t&&JSON.parse(t)})()}catch(ae){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${ae}`)}},lt=()=>it()?.config,ct=e=>it()?.[`_${e}`];
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
class dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
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
 */function ut(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const ht={};let pt=!1;function mt(e,t){if("undefined"==typeof window||"undefined"==typeof document||!ut(window.location.host)||ht[e]===t||ht[e]||pt)return;function r(e){return`__firebase__banner__${e}`}ht[e]=t;const n="__firebase__banner",a=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(ht))ht[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function o(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{pt=!0,function(){const e=document.getElementById(n);e&&e.remove()}()},e}function s(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(n),t=r("text"),s=document.getElementById(t)||document.createElement("span"),i=r("learnmore"),l=document.getElementById(i)||document.createElement("a"),c=r("preprendIcon"),d=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,i);const r=o();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(d,c),t.append(d,s,l,r),document.body.appendChild(t)}a?(s.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',s.innerText="Preview backend running in this workspace."),s.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",s):s()}
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
 */function gt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yt.prototype.create)}}class yt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,a=this.errors[e],o=a?function(e,t){return e.replace(bt,(e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`})}(a,r):"Error",s=`${this.serviceName}: ${o} (${n}).`;return new ft(n,s,r)}}const bt=/\{\$([^}]+)}/g;function vt(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const a of r){if(!n.includes(a))return!1;const r=e[a],o=t[a];if(xt(r)&&xt(o)){if(!vt(r,o))return!1}else if(r!==o)return!1}for(const a of n)if(!r.includes(a))return!1;return!0}function xt(e){return null!==e&&"object"==typeof e}
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
 */function wt(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}class Ct{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=jt),void 0===n.error&&(n.error=jt),void 0===n.complete&&(n.complete=jt);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(ae){}}),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(ae){"undefined"!=typeof console&&console.error&&console.error(ae)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jt(){}
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
 */function St(e){return e&&e._delegate?e._delegate:e}class Nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Et="[DEFAULT]";
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
 */class It{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new dt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(ae){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(ae){if(r)return null;throw ae}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch(ae){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(ae){}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,o]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(a)&&o.resolve(n)}return n}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);const a=this.instances.get(r);return a&&e(a,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===Et?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}var n;return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Tt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new It(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var _t;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(_t||(_t={}));const kt={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},Pt=_t.INFO,At={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},Rt=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),a=At[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)};class Ot{constructor(e){this.name=e,this._logLevel=Pt,this._logHandler=Rt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _t))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?kt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...e),this._logHandler(this,_t.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...e),this._logHandler(this,_t.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...e),this._logHandler(this,_t.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...e),this._logHandler(this,_t.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...e),this._logHandler(this,_t.ERROR,...e)}}let Dt,Lt;const Ut=new WeakMap,Mt=new WeakMap,Bt=new WeakMap,Ft=new WeakMap,Ht=new WeakMap;let Vt={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Mt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Bt.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Gt(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function zt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Lt||(Lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(qt(this),t),Gt(Ut.get(this))}:function(...t){return Gt(e.apply(qt(this),t))}:function(t,...r){const n=e.call(qt(this),t,...r);return Bt.set(n,t.sort?t.sort():[t]),Gt(n)}}function $t(e){return"function"==typeof e?zt(e):(e instanceof IDBTransaction&&function(e){if(Mt.has(e))return;const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Mt.set(e,t)}(e),t=e,(Dt||(Dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Vt):e);var t}function Gt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{t(Gt(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&Ut.set(t,e)}).catch(()=>{}),Ht.set(t,e),t}(e);if(Ft.has(e))return Ft.get(e);const t=$t(e);return t!==e&&(Ft.set(e,t),Ht.set(t,e)),t}const qt=e=>Ht.get(e);const Wt=["get","getKey","getAll","getAllKeys","count"],Kt=["put","add","delete","clear"],Jt=new Map;function Xt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Jt.get(t))return Jt.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,a=Kt.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!Wt.includes(r))return;const o=async function(e,...t){const o=this.transaction(e,a?"readwrite":"readonly");let s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),a&&o.done]))[0]};return Jt.set(t,o),o}Vt=(e=>({...e,get:(t,r,n)=>Xt(t,r)||e.get(t,r,n),has:(t,r)=>!!Xt(t,r)||e.has(t,r)}))(Vt);
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
class Zt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Yt="@firebase/app",Qt="0.14.5",er=new Ot("@firebase/app"),tr="@firebase/app-compat",rr="@firebase/analytics-compat",nr="@firebase/analytics",ar="@firebase/app-check-compat",or="@firebase/app-check",sr="@firebase/auth",ir="@firebase/auth-compat",lr="@firebase/database",cr="@firebase/data-connect",dr="@firebase/database-compat",ur="@firebase/functions",hr="@firebase/functions-compat",pr="@firebase/installations",mr="@firebase/installations-compat",gr="@firebase/messaging",fr="@firebase/messaging-compat",yr="@firebase/performance",br="@firebase/performance-compat",vr="@firebase/remote-config",xr="@firebase/remote-config-compat",wr="@firebase/storage",Cr="@firebase/storage-compat",jr="@firebase/firestore",Sr="@firebase/ai",Nr="@firebase/firestore-compat",Er="firebase",Ir="[DEFAULT]",Tr={[Yt]:"fire-core",[tr]:"fire-core-compat",[nr]:"fire-analytics",[rr]:"fire-analytics-compat",[or]:"fire-app-check",[ar]:"fire-app-check-compat",[sr]:"fire-auth",[ir]:"fire-auth-compat",[lr]:"fire-rtdb",[cr]:"fire-data-connect",[dr]:"fire-rtdb-compat",[ur]:"fire-fn",[hr]:"fire-fn-compat",[pr]:"fire-iid",[mr]:"fire-iid-compat",[gr]:"fire-fcm",[fr]:"fire-fcm-compat",[yr]:"fire-perf",[br]:"fire-perf-compat",[vr]:"fire-rc",[xr]:"fire-rc-compat",[wr]:"fire-gcs",[Cr]:"fire-gcs-compat",[jr]:"fire-fst",[Nr]:"fire-fst-compat",[Sr]:"fire-vertex","fire-js":"fire-js",[Er]:"fire-js-all"},_r=new Map,kr=new Map,Pr=new Map;function Ar(e,t){try{e.container.addComponent(t)}catch(ae){er.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,ae)}}function Rr(e){const t=e.name;if(Pr.has(t))return er.debug(`There were multiple attempts to register component ${t}.`),!1;Pr.set(t,e);for(const r of _r.values())Ar(r,e);for(const r of kr.values())Ar(r,e);return!0}function Or(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Dr(e){return null!=e&&void 0!==e.settings}
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
 */const Lr=new yt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Ur{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}
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
 */const Mr="12.5.0";function Br(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const n={name:Ir,automaticDataCollectionEnabled:!0,...t},a=n.name;if("string"!=typeof a||!a)throw Lr.create("bad-app-name",{appName:String(a)});if(r||(r=lt()),!r)throw Lr.create("no-options");const o=_r.get(a);if(o){if(vt(r,o.options)&&vt(n,o.config))return o;throw Lr.create("duplicate-app",{appName:a})}const s=new Tt(a);for(const l of Pr.values())s.addComponent(l);const i=new Ur(r,n,s);return _r.set(a,i),i}function Fr(e,t,r){let n=Tr[e]??e;r&&(n+=`-${r}`);const a=n.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${n}" with version "${t}":`];return a&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void er.warn(e.join(" "))}Rr(new Nt(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}
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
 */const Hr="firebase-heartbeat-store";let Vr=null;function zr(){return Vr||(Vr=function(e,t,{blocked:r,upgrade:n,blocking:a,terminated:o}={}){const s=indexedDB.open(e,t),i=Gt(s);return n&&s.addEventListener("upgradeneeded",e=>{n(Gt(s.result),e.oldVersion,e.newVersion,Gt(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),i.then(e=>{o&&e.addEventListener("close",()=>o()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),i}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Hr)}catch(ae){console.warn(ae)}}}).catch(e=>{throw Lr.create("idb-open",{originalErrorMessage:e.message})})),Vr}async function $r(e,t){try{const r=(await zr()).transaction(Hr,"readwrite"),n=r.objectStore(Hr);await n.put(t,Gr(e)),await r.done}catch(ae){if(ae instanceof ft)er.warn(ae.message);else{const t=Lr.create("idb-set",{originalErrorMessage:ae?.message});er.warn(t.message)}}}function Gr(e){return`${e.name}!${e.options.appId}`}
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
 */class qr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Wr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(ae){er.warn(ae)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Wr(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const a of e){const e=r.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),Jr(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Jr(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=at(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(ae){return er.warn(ae),""}}}function Wr(){return(new Date).toISOString().substring(0,10)}class Kr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(ae){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(r){t(r)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await zr()).transaction(Hr),r=await t.objectStore(Hr).get(Gr(e));return await t.done,r}catch(ae){if(ae instanceof ft)er.warn(ae.message);else{const t=Lr.create("idb-get",{originalErrorMessage:ae?.message});er.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return $r(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return $r(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Jr(e){return at(JSON.stringify({version:2,heartbeats:e})).length}var Xr;function Zr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Xr="",Rr(new Nt("platform-logger",e=>new Zt(e),"PRIVATE")),Rr(new Nt("heartbeat",e=>new qr(e),"PRIVATE")),Fr(Yt,Qt,Xr),Fr(Yt,Qt,"esm2020"),Fr("fire-js","");const Yr=Zr,Qr=new yt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),en=new Ot("@firebase/auth");function tn(e,...t){en.logLevel<=_t.ERROR&&en.error(`Auth (${Mr}): ${e}`,...t)}
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
 */function rn(e,...t){throw ln(e,...t)}function nn(e,...t){return ln(e,...t)}function an(e,t,r){const n={...Yr(),[t]:r};return new yt("auth","Firebase",n).create(t,{appName:e.name})}function on(e){return an(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sn(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&rn(e,"argument-error"),an(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ln(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Qr.create(e,...t)}function cn(e,t,...r){if(!e)throw ln(t,...r)}function dn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tn(t),new Error(t)}function un(e,t){e||dn(t)}
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
 */function hn(){return"undefined"!=typeof self&&self.location?.href||""}function pn(){return"undefined"!=typeof self&&self.location?.protocol||null}
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
 */function mn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==pn()&&"https:"!==pn()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class gn{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return mn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function fn(e,t){un(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
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
 */class yn{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const bn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},vn=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xn=new gn(3e4,6e4);
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
 */function wn(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Cn(e,t,r,n,a={}){return jn(e,a,async()=>{let a={},o={};n&&("GET"===t?o=n:a={body:JSON.stringify(n)});const s=wt({key:e.config.apiKey,...o}).slice(1),i=await e._getAdditionalHeaders();i["Content-Type"]="application/json",e.languageCode&&(i["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:i,...a};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ut(e.emulatorConfig.host)&&(l.credentials="include"),yn.fetch()(await Sn(e,e.config.apiHost,r,s),l)})}async function jn(e,t,r){e._canInitEmulator=!1;const n={...bn,...t};try{const t=new Nn(e),a=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw En(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const t=a.ok?o.errorMessage:o.error.message,[r,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw En(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===r)throw En(e,"email-already-in-use",o);if("USER_DISABLED"===r)throw En(e,"user-disabled",o);const i=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw an(e,i,s);rn(e,i)}}catch(ae){if(ae instanceof ft)throw ae;rn(e,"network-request-failed",{message:String(ae)})}}async function Sn(e,t,r,n){const a=`${t}${r}?${n}`,o=e,s=o.config.emulator?fn(e.config,a):`${e.config.apiScheme}://${a}`;if(vn.includes(r)&&(await o._persistenceManagerAvailable,"COOKIE"===o._getPersistenceType())){return o._getPersistence()._getFinalTarget(s).toString()}return s}class Nn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(nn(this.auth,"network-request-failed")),xn.get())})}}function En(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const a=nn(e,t,n);return a.customData._tokenResponse=r,a}
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
 */async function In(e,t){return Cn(e,"POST","/v1/accounts:lookup",t)}
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
 */function Tn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(ae){}}function _n(e){return 1e3*Number(e)}function kn(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return tn("JWT malformed, contained fewer than 3 sections"),null;try{const e=ot(r);return e?JSON.parse(e):(tn("Failed to decode base64 JWT payload"),null)}catch(ae){return tn("Caught error parsing JWT payload as JSON",ae?.toString()),null}}function Pn(e){const t=kn(e);return cn(t,"internal-error"),cn(void 0!==t.exp,"internal-error"),cn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function An(e,t,r=!1){if(r)return t;try{return await t}catch(ae){throw ae instanceof ft&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(ae)&&e.auth.currentUser===e&&await e.auth.signOut(),ae}}class Rn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(ae){return void("auth/network-request-failed"===ae?.code&&this.schedule(!0))}this.schedule()}}
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
 */class On{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Dn(e){const t=e.auth,r=await e.getIdToken(),n=await An(e,In(t,{idToken:r}));cn(n?.users.length,t,"internal-error");const a=n.users[0];e._notifyReloadListener(a);const o=a.providerUserInfo?.length?Ln(a.providerUserInfo):[],s=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),i=e.isAnonymous,l=!(e.email&&a.passwordHash||s?.length),c=!!i&&l,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new On(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}function Ln(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){cn(e.idToken,"internal-error"),cn(void 0!==e.idToken,"internal-error"),cn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Pn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){cn(0!==e.length,"internal-error");const t=Pn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(cn(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:a}=await async function(e,t){const r=await jn(e,{},async()=>{const r=wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:a}=e.config,o=await Sn(e,n,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";const i={method:"POST",headers:s,body:r};return e.emulatorConfig&&ut(e.emulatorConfig.host)&&(i.credentials="include"),yn.fetch()(o,i)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,n,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:a}=t,o=new Un;return r&&(cn("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),n&&(cn("string"==typeof n,"internal-error",{appName:e}),o.accessToken=n),a&&(cn("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return dn("not implemented")}}
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
 */function Mn(e,t){cn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Bn{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new Rn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new On(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await An(this,this.stsTokenManager.getToken(this.auth,e));return cn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=St(e),n=await r.getIdToken(t),a=kn(n);cn(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const o="object"==typeof a.firebase?a.firebase:void 0,s=o?.sign_in_provider;return{claims:a,token:n,authTime:Tn(_n(a.auth_time)),issuedAtTime:Tn(_n(a.iat)),expirationTime:Tn(_n(a.exp)),signInProvider:s||null,signInSecondFactor:o?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=St(e);await Dn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(cn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){cn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Dn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dr(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await An(this,async function(e,t){return Cn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,n=t.email??void 0,a=t.phoneNumber??void 0,o=t.photoURL??void 0,s=t.tenantId??void 0,i=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:h,providerData:p,stsTokenManager:m}=t;cn(d&&m,e,"internal-error");const g=Un.fromJSON(this.name,m);cn("string"==typeof d,e,"internal-error"),Mn(r,e.name),Mn(n,e.name),cn("boolean"==typeof u,e,"internal-error"),cn("boolean"==typeof h,e,"internal-error"),Mn(a,e.name),Mn(o,e.name),Mn(s,e.name),Mn(i,e.name),Mn(l,e.name),Mn(c,e.name);const f=new Bn({uid:d,auth:e,email:n,emailVerified:u,displayName:r,isAnonymous:h,photoURL:o,phoneNumber:a,tenantId:s,stsTokenManager:g,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(f.providerData=p.map(e=>({...e}))),i&&(f._redirectEventId=i),f}static async _fromIdTokenResponse(e,t,r=!1){const n=new Un;n.updateFromServerResponse(t);const a=new Bn({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Dn(a),a}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];cn(void 0!==n.localId,"internal-error");const a=void 0!==n.providerUserInfo?Ln(n.providerUserInfo):[],o=!(n.email&&n.passwordHash||a?.length),s=new Un;s.updateFromIdToken(r);const i=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:o}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:a,metadata:new On(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||a?.length)};return Object.assign(i,l),i}}
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
 */const Fn=new Map;function Hn(e){un(e instanceof Function,"Expected a class definition");let t=Fn.get(e);return t?(un(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Fn.set(e,t),t)}
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
 */class Vn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vn.type="NONE";const zn=Vn;
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
 */function $n(e,t,r){return`firebase:${e}:${t}:${r}`}class Gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:a}=this.auth;this.fullUserKey=$n(this.userKey,n.apiKey,a),this.fullPersistenceKey=$n("persistence",n.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await In(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gn(Hn(zn),e,r);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let a=n[0]||Hn(zn);const o=$n(r,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){let r;if("string"==typeof t){const n=await In(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Bn._fromGetAccountInfoResponse(e,n,t)}else r=Bn._fromJSON(e,t);l!==a&&(s=r),a=l;break}}catch{}const i=n.filter(e=>e._shouldAllowMigration);return a._shouldAllowMigration&&i.length?(a=i[0],s&&await a._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==a)try{await e._remove(o)}catch{}})),new Gn(a,e,r)):new Gn(a,e,r)}}
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
 */function qn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yn(t))return"Blackberry";if(Qn(t))return"Webos";if(Kn(t))return"Safari";if((t.includes("chrome/")||Jn(t))&&!t.includes("edge/"))return"Chrome";if(Zn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===r?.length)return r[1]}return"Other"}function Wn(e=gt()){return/firefox\//i.test(e)}function Kn(e=gt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jn(e=gt()){return/crios\//i.test(e)}function Xn(e=gt()){return/iemobile/i.test(e)}function Zn(e=gt()){return/android/i.test(e)}function Yn(e=gt()){return/blackberry/i.test(e)}function Qn(e=gt()){return/webos/i.test(e)}function ea(e=gt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ta(){return function(){const e=gt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function ra(e=gt()){return ea(e)||Zn(e)||Qn(e)||Yn(e)||/windows phone/i.test(e)||Xn(e)}
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
 */function na(e,t=[]){let r;switch(e){case"Browser":r=qn(gt());break;case"Worker":r=`${qn(gt())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Mr}/${n}`}
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
 */class aa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,n)=>{try{r(e(t))}catch(ae){n(ae)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(ae){t.reverse();for(const r of t)try{r()}catch(Ne){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:ae?.message})}}}
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
 */class oa{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
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
 */class sa{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new aa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(ae){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await In(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Dr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,a=r?._redirectEventId,o=await this.tryRedirectSignIn(e);t&&t!==a||!o?.user||(r=o.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(ae){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(ae))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return cn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(ae){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dn(e)}catch(ae){if("auth/network-request-failed"!==ae?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dr(this.app))return Promise.reject(on(this));const t=e?St(e):null;return t&&cn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&cn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dr(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dr(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Cn(e,"GET","/v2/passwordPolicy",wn(e,t))}
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
 */(this),t=new oa(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Cn(e,"POST","/v2/accounts:revokeToken",wn(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hn(e)||this._popupRedirectResolver;cn(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[Hn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(cn(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),"function"==typeof t){const a=e.addObserver(t,r,n);return()=>{o=!0,a()}}{const r=e.addObserver(t);return()=>{o=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return cn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=na(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Dr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){en.logLevel<=_t.WARN&&en.warn(`Auth (${Mr}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ia(e){return St(e)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new Ct(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return cn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function da(e,t,r){const n=ia(e);cn(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const a=!!r?.disableWarnings,o=ua(t),{host:s,port:i}=function(e){const t=ua(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const e=a[1];return{host:e,port:ha(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:ha(t)}}}(t),l=null===i?"":`:${i}`,c={url:`${o}//${s}${l}/`},d=Object.freeze({host:s,port:i,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator)return cn(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),void cn(vt(c,n.config.emulator)&&vt(d,n.emulatorConfig),n,"emulator-config-failed");n.config.emulator=c,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,ut(s)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${o}//${s}${l}`),mt("Auth",!0)):a||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ua(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ha(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,t){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}
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
 */async function ma(e,t){return async function(e,t,r,n,a={}){const o=await Cn(e,t,r,n,a);return"mfaPendingCredential"in o&&rn(e,"multi-factor-auth-required",{_serverResponse:o}),o}(e,"POST","/v1/accounts:signInWithIdp",wn(e,t))}
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
 */class ga extends pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ga(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n,...a}=t;if(!r||!n)return null;const o=new ga(r,n);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){return ma(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ma(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ma(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wt(t)}return e}}
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
 */class fa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ya extends fa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class ba extends ya{constructor(){super("facebook.com")}static credential(e){return ga._fromParams({providerId:ba.PROVIDER_ID,signInMethod:ba.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ba.credentialFromTaggedObject(e)}static credentialFromError(e){return ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ba.credential(e.oauthAccessToken)}catch{return null}}}ba.FACEBOOK_SIGN_IN_METHOD="facebook.com",ba.PROVIDER_ID="facebook.com";
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
class va extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ga._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return va.credentialFromTaggedObject(e)}static credentialFromError(e){return va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return va.credential(t,r)}catch{return null}}}va.GOOGLE_SIGN_IN_METHOD="google.com",va.PROVIDER_ID="google.com";
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
class xa extends ya{constructor(){super("github.com")}static credential(e){return ga._fromParams({providerId:xa.PROVIDER_ID,signInMethod:xa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xa.credentialFromTaggedObject(e)}static credentialFromError(e){return xa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xa.credential(e.oauthAccessToken)}catch{return null}}}xa.GITHUB_SIGN_IN_METHOD="github.com",xa.PROVIDER_ID="github.com";
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
class wa extends ya{constructor(){super("twitter.com")}static credential(e,t){return ga._fromParams({providerId:wa.PROVIDER_ID,signInMethod:wa.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wa.credentialFromTaggedObject(e)}static credentialFromError(e){return wa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return wa.credential(t,r)}catch{return null}}}wa.TWITTER_SIGN_IN_METHOD="twitter.com",wa.PROVIDER_ID="twitter.com";
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
class Ca{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const a=await Bn._fromIdTokenResponse(e,r,n),o=ja(r);return new Ca({user:a,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=ja(r);return new Ca({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function ja(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Sa extends ft{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Sa(e,t,r,n)}}function Na(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw Sa._fromErrorAndOperation(e,r,t,n);throw r})}const Ea="__sak";
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
 */class Ia{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Ta extends Ia{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ra(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},a=this.storage.getItem(r);ta()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ta.type="LOCAL";const _a=Ta;
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
 */class ka extends Ia{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ka.type="SESSION";const Pa=ka;
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
class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new Aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:a}=t.data,o=this.handlersMap[n];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const s=Array.from(o).map(async e=>e(t.origin,a)),i=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(s);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:i})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ra(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
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
 */Aa.receivers=[];class Oa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,o;return new Promise((s,i)=>{const l=Ra("",20);n.port1.start();const c=setTimeout(()=>{i(new Error("unsupported_event"))},r);o={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{i(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(t.data.response);break;default:clearTimeout(c),clearTimeout(a),i(new Error("invalid_response"))}}},this.handlers.add(o),n.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function Da(){return window}
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
function La(){return void 0!==Da().WorkerGlobalScope&&"function"==typeof Da().importScripts}
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
const Ua="firebaseLocalStorageDb",Ma="firebaseLocalStorage",Ba="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ha(e,t){return e.transaction([Ma],t?"readwrite":"readonly").objectStore(Ma)}function Va(){const e=indexedDB.open(Ua,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ma,{keyPath:Ba})}catch(ae){r(ae)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ma)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(Ua);return new Fa(e).toPromise()}(),t(await Va()))})})}async function za(e,t,r){const n=Ha(e,!0).put({[Ba]:t,value:r});return new Fa(n).toPromise()}function $a(e,t){const r=Ha(e,!0).delete(t);return new Fa(r).toPromise()}class Ga{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Va()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(ae){if(t++>3)throw ae;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return La()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(La()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Oa(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await za(e,Ea,"1"),await $a(e,Ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>za(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=Ha(e,!1).get(t),n=await new Fa(r).toPromise();return void 0===n?null:n.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$a(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ha(e,!1).getAll();return new Fa(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:n,value:a}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ga.type="LOCAL";const qa=Ga;
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
function Wa(e,t){return t?Hn(t):(cn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new gn(3e4,6e4);class Ka extends pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ma(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ma(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ma(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ja(e){
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
return async function(e,t,r=!1){if(Dr(e.app))return Promise.reject(on(e));const n="signIn",a=await Na(e,n,t),o=await Ca._fromIdTokenResponse(e,n,a);return r||await e._updateCurrentUser(o.user),o}(e.auth,new Ka(e),e.bypassAuthState)}function Xa(e){const{auth:t,user:r}=e;return cn(r,t,"internal-error"),
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
async function(e,t,r=!1){const{auth:n}=e;if(Dr(n.app))return Promise.reject(on(n));const a="reauthenticate";try{const o=await An(e,Na(n,a,t,e),r);cn(o.idToken,n,"internal-error");const s=kn(o.idToken);cn(s,n,"internal-error");const{sub:i}=s;return cn(e.uid===i,n,"user-mismatch"),Ca._forOperation(e,a,o)}catch(ae){throw"auth/user-not-found"===ae?.code&&rn(n,"user-mismatch"),ae}}(r,new Ka(e),e.bypassAuthState)}async function Za(e){const{auth:t,user:r}=e;return cn(r,t,"internal-error"),async function(e,t,r=!1){const n=await An(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Ca._forOperation(e,"link",n)}(r,new Ka(e),e.bypassAuthState)}
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
 */class Ya{constructor(e,t,r,n,a=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(ae){this.reject(ae)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:a,error:o,type:s}=e;if(o)return void this.reject(o);const i={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(i))}catch(ae){this.reject(ae)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ja;case"linkViaPopup":case"linkViaRedirect":return Za;case"reauthViaPopup":case"reauthViaRedirect":return Xa;default:rn(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Qa=new gn(2e3,1e4);class eo extends Ya{constructor(e,t,r,n,a){super(e,t,n,a),this.provider=r,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return cn(e,this.auth,"internal-error"),e}async onExecution(){un(1===this.filter.length,"Popup operations only handle one event");const e=Ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Qa.get())};e()}}eo.currentPopupAction=null;
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
const to=new Map;class ro extends Ya{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=oo(t),n=ao(e);if(!(await n._isAvailable()))return!1;const a="true"===await n._get(r);return await n._remove(r),a}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(ae){e=()=>Promise.reject(ae)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function no(e,t){to.set(e._key(),t)}function ao(e){return Hn(e._redirectPersistence)}function oo(e){return $n("pendingRedirect",e.config.apiKey,e.name)}
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
 */function so(e,t,r){return async function(e,t,r){if(Dr(e.app))return Promise.reject(on(e));const n=ia(e);sn(e,t,fa),await n._initializationPromise;const a=Wa(n,r);return await async function(e,t){return ao(e)._set(oo(t),"true")}(a,n),a._openRedirect(n,t,"signInViaRedirect")}(e,t,r)}async function io(e,t,r=!1){if(Dr(e.app))return Promise.reject(on(e));const n=ia(e),a=Wa(n,t),o=new ro(n,a,r),s=await o.execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}
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
 */class lo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uo(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!uo(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(co(e))}saveEventToCache(e){this.cachedEventUids.add(co(e)),this.lastProcessedEventTime=Date.now()}}function co(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function uo({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
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
const ho=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,po=/^https?/;async function mo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Cn(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(go(r))return}catch{}rn(e,"unauthorized-domain")}function go(e){const t=hn(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===n}if(!po.test(r))return!1;if(ho.test(e))return n===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}
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
 */const fo=new gn(3e4,6e4);function yo(){const e=Da().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function bo(e){return new Promise((t,r)=>{function n(){yo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yo(),r(nn(e,"network-request-failed"))},timeout:fo.get()})}if(Da().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Da().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Da()[t]=()=>{gapi.load?n():r(nn(e,"network-request-failed"))},(a=`${ca.gapiScript}?onload=${t}`,ca.loadJS(a)).catch(e=>r(e))}n()}var a}).catch(e=>{throw vo=null,e})}let vo=null;
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
const xo=new gn(5e3,15e3),wo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Co=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jo(e){const t=e.config;cn(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?fn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:Mr},a=Co.get(e.config.apiHost);a&&(n.eid=a);const o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${wt(n).slice(1)}`}async function So(e){const t=await function(e){return vo=vo||bo(e),vo}(e),r=Da().gapi;return cn(r,e,"internal-error"),t.open({where:document.body,url:jo(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wo,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});const a=nn(e,"network-request-failed"),o=Da().setTimeout(()=>{n(a)},xo.get());function s(){Da().clearTimeout(o),r(t)}t.ping(s).then(s,()=>{n(a)})}))}
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
 */const No={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Eo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(ae){}}}function Io(e,t,r,n=500,a=600){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let i="";const l={...No,width:n.toString(),height:a.toString(),top:o,left:s},c=gt().toLowerCase();r&&(i=Jn(c)?"_blank":r),Wn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=gt()){return ea(e)&&!!window.navigator?.standalone}(c)&&"_self"!==i)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
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
 */(t||"",i),new Eo(null);const u=window.open(t||"",i,d);cn(u,e,"popup-blocked");try{u.focus()}catch(ae){}return new Eo(u)}const To="__/auth/handler",_o="emulator/auth/handler",ko=encodeURIComponent("fac");async function Po(e,t,r,n,a,o){cn(e.config.authDomain,e,"auth-domain-config-required"),cn(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Mr,eventId:a};if(t instanceof fa){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof ya){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const i=s;for(const d of Object.keys(i))void 0===i[d]&&delete i[d];const l=await e._getAppCheckToken(),c=l?`#${ko}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${To}`;return fn(e,_o)}
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
 */(e)}?${wt(i).slice(1)}${c}`}const Ao="webStorageSupport";const Ro=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pa,this._completeRedirectFn=io,this._overrideRedirectResult=no}async _openPopup(e,t,r,n){un(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Io(e,await Po(e,t,r,hn(),n),Ra())}async _openRedirect(e,t,r,n){await this._originValidation(e);return function(e){Da().location.href=e}(await Po(e,t,r,hn(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(un(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await So(e),r=new lo(e);return t.register("authEvent",t=>{cn(t?.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ao,{type:Ao},r=>{const n=r?.[0]?.[Ao];void 0!==n&&t(!!n),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ra()||Kn()||ea()}};var Oo="@firebase/auth",Do="1.11.1";
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
class Lo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){cn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Uo=ct("authIdTokenMaxAge")||300;let Mo=null;var Bo;!function(e){ca=e}({loadJS:e=>new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=nn("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(n)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Bo="Browser",Rr(new Nt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;cn(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const i={apiKey:o,authDomain:s,clientPlatform:Bo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:na(Bo)},l=new sa(r,n,a,i);return function(e,t){const r=t?.persistence||[],n=(Array.isArray(r)?r:[r]).map(Hn);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Rr(new Nt("auth-internal",e=>(e=>new Lo(e))(ia(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Fr(Oo,Do,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Bo)),Fr(Oo,Do,"esm2020");
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
Fr("firebase","12.5.0","app");const Fo={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:Fo.apiKey?"✅ Configurado":"❌ Faltando",authDomain:Fo.authDomain,projectId:Fo.projectId});const Ho=function(e=function(e=Ir){const t=_r.get(e);if(!t&&e===Ir&&lt())return Br();if(!t)throw Lr.create("no-app",{appName:e});return t}()){const t=Or(e,"auth");if(t.isInitialized())return t.getImmediate();const r=
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
function(e,t){const r=Or(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(vt(r.getOptions(),t??{}))return e;rn(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Ro,persistence:[qa,_a,Pa]}),n=ct("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(n,location.origin);if(location.origin===e.origin){const t=(a=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Uo)return;const n=t?.token;Mo!==n&&(Mo=n,await fetch(a,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,r){St(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,n){St(e).onIdTokenChanged(t,r,n)}(r,e=>t(e))}}var a;const o=(s="auth",it()?.emulatorHosts?.[s]);var s;return o&&da(r,`http://${o}`),r}(Br(Fo)),Vo=new va;Vo.addScope("email"),Vo.addScope("profile");const zo=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,r){if(Dr(e.app))return Promise.reject(nn(e,"operation-not-supported-in-this-environment"));const n=ia(e);sn(e,t,fa);const a=Wa(n,r);return new eo(n,"signInViaPopup",t,a).executeNotNull()}(Ho,Vo),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await so(Ho,Vo)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await ia(e)._initializationPromise,io(e,t,!1)}(Ho);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=Ho.currentUser,r=t?await t.getIdToken():null,n=await fetch(et.auth.login,{method:"POST",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!n.ok)return this.createUserInBackend(e);const a=await n.json();return console.log("✅ Usuário sincronizado com backend"),a}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(et.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return St(e).signOut()}(Ho),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return Ho.currentUser}onAuthStateChange(e){return Ho.onAuthStateChanged(e)}};const $o=new class{getBaseURL(){const e=et.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((r,n)=>{const a=new XMLHttpRequest,o=et.auth.login;a.open("POST",o,!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Accept","application/json"),a.setRequestHeader("Cache-Control","no-cache"),a.onreadystatechange=function(){if(4===a.readyState)if(console.log("🔍 XHR Status:",a.status),console.log("🔍 XHR Response:",a.responseText),200===a.status)try{const e=JSON.parse(a.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),r(e.user)}catch(e){n(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(a.responseText);n(new Error(e.message||"Erro no login"))}catch(e){n(new Error("Credenciais inválidas"))}},a.onerror=function(){n(new Error("Erro de conexão"))},a.ontimeout=function(){n(new Error("Timeout na conexão"))},a.timeout=1e4;const s=JSON.stringify({email:e,password:t});a.send(s)})}catch(r){throw console.error("❌ Erro no login alternativo:",r),r}}async login(e,t){try{const n=et.auth.login;console.log("🔐 Login attempt:",{email:e,url:n});const a=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",a);const o=new AbortController,s=setTimeout(()=>o.abort(),1e4),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:a,signal:o.signal});if(clearTimeout(s),console.log("📡 Response status:",i.status),console.log("📡 Response ok:",i.ok),console.log("📡 Response headers:",Object.fromEntries(i.headers.entries())),!i.ok){const e=await i.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",i.status),console.error("❌ Error response statusText:",i.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(r){t=e||t}throw 401===i.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await i.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(r){throw console.error("❌ Failed to parse response JSON:",r),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(n){if(console.error("❌ Erro no login completo:",n),"AbortError"===n.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===n.name&&n.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw n}}async register(e,t,r){try{this.clearPlanData();const n=et.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:n});const a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:r})});if(!a.ok){const e=await a.json();throw new Error(e.message||"Falha no registro")}return(await a.json()).user}catch(n){throw console.error("Erro no registro:",n),n}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await zo.loginWithPopup(),t=await zo.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",r),r}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await zo.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await zo.handleRedirectResult();if(!e)return null;const t=await zo.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),r}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await zo.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const r={basic:0,professional:1,premium:2};return r[t.type]>=r[e]}isAdmin(){const e=this.getCurrentUser();return"admin"===e?.role}},Go=()=>{const[t,r]=e.useState(null),[n,a]=e.useState(!0),[o,s]=e.useState(null),[i,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=$o.getCurrentUser(),t=$o.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),r(e),l(t),e){let e=$o.getUserPlan();e&&"object"==typeof e&&e.type||(e={type:"basic",name:"Básico",price:0,active:!0}),console.log("📋 useAuth - Plano do usuário:",e),s(e)}else s({type:"basic",name:"Básico",price:0,active:!0});a(!1)},[]);return{user:t,loading:n,plan:o,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await $o.logout(),r(null),s(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),$o.updateUserPlan(e),s(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=$o.getCurrentUser(),t=$o.isAuthenticated();r(e),l(t),s(e?$o.getUserPlan():null)},isAuthenticated:i,isAdmin:$o.isAdmin(),checkPlanAccess:e=>$o.checkPlanAccess(e)}},qo=({children:e})=>{const{isAuthenticated:t,loading:a}=Go(),o=r();return a?J.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:J.jsxs("div",{className:"text-center",children:[J.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),J.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):t?J.jsx(J.Fragment,{children:e}):J.jsx(n,{to:"/login",state:{from:o},replace:!0})},Wo=()=>J.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[J.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),J.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),J.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),J.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),J.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[J.jsxs(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[J.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:J.jsx(u,{className:"w-10 h-10 text-white"})}),J.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),J.jsxs(d.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",J.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",J.jsx("br",{}),J.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[J.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[J.jsx(h,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),J.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),J.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),J.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[J.jsx(p,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),J.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),J.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),J.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[J.jsx(u,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),J.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),J.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[J.jsx(a,{to:"/login",children:J.jsxs(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",J.jsx(m,{className:"w-5 h-5"})]})}),J.jsx(a,{to:"/login?mode=signup",children:J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),Ko=()=>{const[t,r]=e.useState(""),[n,a]=e.useState(""),[i,l]=e.useState(""),[c,u]=e.useState(!0),[h,p]=e.useState(!1),[m,w]=e.useState(!1),C=o(),[j]=s(),{refreshAuth:S}=Go();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",j.get("mode")),console.log("authService.isAuthenticated():",$o.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await $o.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),Qe.success(`Bem-vindo, ${e.name}! 🎉`),void C("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),Qe.error("Erro ao processar login Google")}})();const e=j.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void u(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[C,j]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",m),J.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[J.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[J.jsx(d.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),J.jsx(d.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),J.jsx(d.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),J.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[J.jsxs("div",{className:"text-center mb-10",children:[J.jsx(d.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:J.jsx("span",{className:"text-3xl",children:"💰"})}),J.jsx(d.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),J.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&J.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),J.jsxs(d.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[J.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&n&&(c||i)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?n.length<6?(Qe.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&i.length<2&&(Qe.error("O nome deve ter pelo menos 2 caracteres"),1)):(Qe.error("Por favor, insira um e-mail válido"),0):(Qe.error("Por favor, preencha todos os campos"),0)){w(!0);try{if(c){let e=!1,o=null;try{console.log("🔄 Tentando login principal..."),o=await $o.login(t,n),e=!0}catch(r){console.log("❌ Login principal falhou:",r.message),console.log("🔄 Tentando método alternativo...");try{o=await $o.loginAlternative(t,n),e=!0,console.log("✅ Login alternativo funcionou!")}catch(a){throw console.error("❌ Login alternativo também falhou:",a.message),a}}e&&o&&(localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),Qe.success("Login realizado com sucesso!"),C("/dashboard"))}else await $o.register(i,t,n),Qe.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),C("/dashboard")}catch(o){console.error("Auth error:",o);const e=o.message||"Erro inesperado. Tente novamente";Qe.error(e)}finally{w(!1)}}},className:"space-y-6",children:[!c&&J.jsxs("div",{children:[J.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),J.jsxs("div",{className:"relative",children:[J.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:J.jsx(g,{className:"h-5 w-5 text-gray-400"})}),J.jsx("input",{id:"name",type:"text",value:i,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),J.jsxs("div",{children:[J.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),J.jsxs("div",{className:"relative",children:[J.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:J.jsx(f,{className:"h-5 w-5 text-gray-400"})}),J.jsx("input",{id:"email",type:"email",value:t,onChange:e=>r(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),J.jsxs("div",{children:[J.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),J.jsxs("div",{className:"relative",children:[J.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:J.jsx(y,{className:"h-5 w-5 text-gray-400"})}),J.jsx("input",{id:"password",type:h?"text":"password",value:n,onChange:e=>a(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),J.jsx("button",{type:"button",onClick:()=>p(!h),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:h?J.jsx(b,{className:"h-5 w-5"}):J.jsx(v,{className:"h-5 w-5"})})]})]}),J.jsx(d.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:m,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:m?J.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):J.jsxs(J.Fragment,{children:[c?J.jsx(x,{className:"h-5 w-5"}):J.jsx(g,{className:"h-5 w-5"}),J.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),J.jsxs("div",{className:"mt-6",children:[J.jsxs("div",{className:"relative",children:[J.jsx("div",{className:"absolute inset-0 flex items-center",children:J.jsx("div",{className:"w-full border-t border-gray-300/30"})}),J.jsx("div",{className:"relative flex justify-center text-sm",children:J.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),J.jsxs(d.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(m)return;w(!0);const e=Qe.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await $o.loginWithGoogle();Qe.dismiss(e),Qe.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),C("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),Qe.dismiss(e);let r="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?r="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?r="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(r="Erro de conexão. Verifique sua internet"),Qe.error(r)}finally{w(!1)}},disabled:m,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[J.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[J.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),J.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),J.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),J.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),J.jsx("span",{children:"Continuar com Google"})]})]}),c&&J.jsx("div",{className:"mt-6 text-center",children:J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>C("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),J.jsxs("div",{className:"mt-8 text-center",children:[J.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>u(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},Jo=()=>(console.log("LoginSimple carregando..."),J.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[J.jsx("h1",{children:"LOGIN SIMPLES"}),J.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),J.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[J.jsxs("div",{style:{marginBottom:"15px"},children:[J.jsx("label",{children:"Email:"}),J.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),J.jsxs("div",{style:{marginBottom:"15px"},children:[J.jsx("label",{children:"Senha:"}),J.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),J.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]}));function Xo(e,t){return function(){return e.apply(t,arguments)}}const{toString:Zo}=Object.prototype,{getPrototypeOf:Yo}=Object,{iterator:Qo,toStringTag:es}=Symbol,ts=(rs=Object.create(null),e=>{const t=Zo.call(e);return rs[t]||(rs[t]=t.slice(8,-1).toLowerCase())});var rs;const ns=e=>(e=e.toLowerCase(),t=>ts(t)===e),as=e=>t=>typeof t===e,{isArray:os}=Array,ss=as("undefined");function is(e){return null!==e&&!ss(e)&&null!==e.constructor&&!ss(e.constructor)&&ds(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ls=ns("ArrayBuffer");const cs=as("string"),ds=as("function"),us=as("number"),hs=e=>null!==e&&"object"==typeof e,ps=e=>{if("object"!==ts(e))return!1;const t=Yo(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||es in e||Qo in e)},ms=ns("Date"),gs=ns("File"),fs=ns("Blob"),ys=ns("FileList"),bs=ns("URLSearchParams"),[vs,xs,ws,Cs]=["ReadableStream","Request","Response","Headers"].map(ns);function js(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,a;if("object"!=typeof e&&(e=[e]),os(e))for(n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else{if(is(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let s;for(n=0;n<o;n++)s=a[n],t.call(null,e[s],s,e)}}function Ss(e,t){if(is(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n,a=r.length;for(;a-- >0;)if(n=r[a],t===n.toLowerCase())return n;return null}const Ns="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Es=e=>!ss(e)&&e!==Ns;const Is=(Ts="undefined"!=typeof Uint8Array&&Yo(Uint8Array),e=>Ts&&e instanceof Ts);var Ts;const _s=ns("HTMLFormElement"),ks=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ps=ns("RegExp"),As=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};js(r,(r,a)=>{let o;!1!==(o=t(r,a,e))&&(n[a]=o||r)}),Object.defineProperties(e,n)};const Rs=ns("AsyncFunction"),Os=(Ds="function"==typeof setImmediate,Ls=ds(Ns.postMessage),Ds?setImmediate:Ls?(Us=`axios@${Math.random()}`,Ms=[],Ns.addEventListener("message",({source:e,data:t})=>{e===Ns&&t===Us&&Ms.length&&Ms.shift()()},!1),e=>{Ms.push(e),Ns.postMessage(Us,"*")}):e=>setTimeout(e));var Ds,Ls,Us,Ms;const Bs="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Ns):"undefined"!=typeof process&&process.nextTick||Os,Fs={isArray:os,isArrayBuffer:ls,isBuffer:is,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||ds(e.append)&&("formdata"===(t=ts(e))||"object"===t&&ds(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ls(e.buffer),t},isString:cs,isNumber:us,isBoolean:e=>!0===e||!1===e,isObject:hs,isPlainObject:ps,isEmptyObject:e=>{if(!hs(e)||is(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(ae){return!1}},isReadableStream:vs,isRequest:xs,isResponse:ws,isHeaders:Cs,isUndefined:ss,isDate:ms,isFile:gs,isBlob:fs,isRegExp:Ps,isFunction:ds,isStream:e=>hs(e)&&ds(e.pipe),isURLSearchParams:bs,isTypedArray:Is,isFileList:ys,forEach:js,merge:function e(){const{caseless:t,skipUndefined:r}=Es(this)&&this||{},n={},a=(a,o)=>{const s=t&&Ss(n,o)||o;ps(n[s])&&ps(a)?n[s]=e(n[s],a):ps(a)?n[s]=e({},a):os(a)?n[s]=a.slice():r&&ss(a)||(n[s]=a)};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&js(arguments[o],a);return n},extend:(e,t,r,{allOwnKeys:n}={})=>(js(t,(t,n)=>{r&&ds(t)?e[n]=Xo(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let a,o,s;const i={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)s=a[o],n&&!n(s,e,t)||i[s]||(t[s]=e[s],i[s]=!0);e=!1!==r&&Yo(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:ts,kindOfTest:ns,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(os(e))return e;let t=e.length;if(!us(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Qo]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:_s,hasOwnProperty:ks,hasOwnProp:ks,reduceDescriptors:As,freezeMethods:e=>{As(e,(t,r)=>{if(ds(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];ds(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach(e=>{r[e]=!0})};return os(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ss,global:Ns,isContextDefined:Es,isSpecCompliantForm:function(e){return!!(e&&ds(e.append)&&"FormData"===e[es]&&e[Qo])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(hs(e)){if(t.indexOf(e)>=0)return;if(is(e))return e;if(!("toJSON"in e)){t[n]=e;const a=os(e)?[]:{};return js(e,(e,t)=>{const o=r(e,n+1);!ss(o)&&(a[t]=o)}),t[n]=void 0,a}}return e};return r(e,0)},isAsyncFn:Rs,isThenable:e=>e&&(hs(e)||ds(e))&&ds(e.then)&&ds(e.catch),setImmediate:Os,asap:Bs,isIterable:e=>null!=e&&ds(e[Qo])};function Hs(e,t,r,n,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),a&&(this.response=a,this.status=a.status?a.status:null)}Fs.inherits(Hs,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Fs.toJSONObject(this.config),code:this.code,status:this.status}}});const Vs=Hs.prototype,zs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{zs[e]={value:e}}),Object.defineProperties(Hs,zs),Object.defineProperty(Vs,"isAxiosError",{value:!0}),Hs.from=(e,t,r,n,a,o)=>{const s=Object.create(Vs);Fs.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const i=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Hs.call(s,i,l,r,n,a),e&&null==s.cause&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",o&&Object.assign(s,o),s};function $s(e){return Fs.isPlainObject(e)||Fs.isArray(e)}function Gs(e){return Fs.endsWith(e,"[]")?e.slice(0,-2):e}function qs(e,t,r){return e?e.concat(t).map(function(e,t){return e=Gs(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const Ws=Fs.toFlatObject(Fs,{},null,function(e){return/^is[A-Z]/.test(e)});function Ks(e,t,r){if(!Fs.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Fs.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Fs.isUndefined(t[e])})).metaTokens,a=r.visitor||c,o=r.dots,s=r.indexes,i=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Fs.isSpecCompliantForm(t);if(!Fs.isFunction(a))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Fs.isDate(e))return e.toISOString();if(Fs.isBoolean(e))return e.toString();if(!i&&Fs.isBlob(e))throw new Hs("Blob is not supported. Use a Buffer instead.");return Fs.isArrayBuffer(e)||Fs.isTypedArray(e)?i&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,a){let i=e;if(e&&!a&&"object"==typeof e)if(Fs.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Fs.isArray(e)&&function(e){return Fs.isArray(e)&&!e.some($s)}(e)||(Fs.isFileList(e)||Fs.endsWith(r,"[]"))&&(i=Fs.toArray(e)))return r=Gs(r),i.forEach(function(e,n){!Fs.isUndefined(e)&&null!==e&&t.append(!0===s?qs([r],n,o):null===s?r:r+"[]",l(e))}),!1;return!!$s(e)||(t.append(qs(a,r,o),l(e)),!1)}const d=[],u=Object.assign(Ws,{defaultVisitor:c,convertValue:l,isVisitable:$s});if(!Fs.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Fs.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),Fs.forEach(r,function(r,o){!0===(!(Fs.isUndefined(r)||null===r)&&a.call(t,r,Fs.isString(o)?o.trim():o,n,u))&&e(r,n?n.concat(o):[o])}),d.pop()}}(e),t}function Js(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Xs(e,t){this._pairs=[],e&&Ks(e,this,t)}const Zs=Xs.prototype;function Ys(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Qs(e,t,r){if(!t)return e;const n=r&&r.encode||Ys;Fs.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let o;if(o=a?a(t,r):Fs.isURLSearchParams(t)?t.toString():new Xs(t,r).toString(n),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}Zs.append=function(e,t){this._pairs.push([e,t])},Zs.toString=function(e){const t=e?function(t){return e.call(this,t,Js)}:Js;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const ei=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Fs.forEach(this.handlers,function(t){null!==t&&e(t)})}},ti={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ri={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Xs,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ni="undefined"!=typeof window&&"undefined"!=typeof document,ai="object"==typeof navigator&&navigator||void 0,oi=ni&&(!ai||["ReactNative","NativeScript","NS"].indexOf(ai.product)<0),si="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ii=ni&&window.location.href||"http://localhost",li={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ni,hasStandardBrowserEnv:oi,hasStandardBrowserWebWorkerEnv:si,navigator:ai,origin:ii},Symbol.toStringTag,{value:"Module"})),...ri};function ci(e){function t(e,r,n,a){let o=e[a++];if("__proto__"===o)return!0;const s=Number.isFinite(+o),i=a>=e.length;if(o=!o&&Fs.isArray(n)?n.length:o,i)return Fs.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!s;n[o]&&Fs.isObject(n[o])||(n[o]=[]);return t(e,r,n[o],a)&&Fs.isArray(n[o])&&(n[o]=function(e){const t={},r=Object.keys(e);let n;const a=r.length;let o;for(n=0;n<a;n++)o=r[n],t[o]=e[o];return t}(n[o])),!s}if(Fs.isFormData(e)&&Fs.isFunction(e.entries)){const r={};return Fs.forEachEntry(e,(e,n)=>{t(function(e){return Fs.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),n,r,0)}),r}return null}const di={transitional:ti,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,a=Fs.isObject(e);a&&Fs.isHTMLForm(e)&&(e=new FormData(e));if(Fs.isFormData(e))return n?JSON.stringify(ci(e)):e;if(Fs.isArrayBuffer(e)||Fs.isBuffer(e)||Fs.isStream(e)||Fs.isFile(e)||Fs.isBlob(e)||Fs.isReadableStream(e))return e;if(Fs.isArrayBufferView(e))return e.buffer;if(Fs.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Ks(e,new li.classes.URLSearchParams,{visitor:function(e,t,r,n){return li.isNode&&Fs.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((o=Fs.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ks(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||n?(t.setContentType("application/json",!1),function(e,t,r){if(Fs.isString(e))try{return(t||JSON.parse)(e),Fs.trim(e)}catch(ae){if("SyntaxError"!==ae.name)throw ae}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||di.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Fs.isResponse(e)||Fs.isReadableStream(e))return e;if(e&&Fs.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e,this.parseReviver)}catch(ae){if(r){if("SyntaxError"===ae.name)throw Hs.from(ae,Hs.ERR_BAD_RESPONSE,this,null,this.response);throw ae}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:li.classes.FormData,Blob:li.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Fs.forEach(["delete","get","head","post","put","patch"],e=>{di.headers[e]={}});const ui=di,hi=Fs.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pi=Symbol("internals");function mi(e){return e&&String(e).trim().toLowerCase()}function gi(e){return!1===e||null==e?e:Fs.isArray(e)?e.map(gi):String(e)}function fi(e,t,r,n,a){return Fs.isFunction(n)?n.call(this,t,r):(a&&(t=r),Fs.isString(t)?Fs.isString(n)?-1!==t.indexOf(n):Fs.isRegExp(n)?n.test(t):void 0:void 0)}class yi{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function a(e,t,r){const a=mi(t);if(!a)throw new Error("header name must be a non-empty string");const o=Fs.findKey(n,a);(!o||void 0===n[o]||!0===r||void 0===r&&!1!==n[o])&&(n[o||t]=gi(e))}const o=(e,t)=>Fs.forEach(e,(e,r)=>a(e,r,t));if(Fs.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(Fs.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((e=>{const t={};let r,n,a;return e&&e.split("\n").forEach(function(e){a=e.indexOf(":"),r=e.substring(0,a).trim().toLowerCase(),n=e.substring(a+1).trim(),!r||t[r]&&hi[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(e),t);else if(Fs.isObject(e)&&Fs.isIterable(e)){let r,n,a={};for(const t of e){if(!Fs.isArray(t))throw TypeError("Object iterator must return a key-value pair");a[n=t[0]]=(r=a[n])?Fs.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}o(a,t)}else null!=e&&a(t,e,r);return this}get(e,t){if(e=mi(e)){const r=Fs.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Fs.isFunction(t))return t.call(this,e,r);if(Fs.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=mi(e)){const r=Fs.findKey(this,e);return!(!r||void 0===this[r]||t&&!fi(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function a(e){if(e=mi(e)){const a=Fs.findKey(r,e);!a||t&&!fi(0,r[a],a,t)||(delete r[a],n=!0)}}return Fs.isArray(e)?e.forEach(a):a(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const a=t[r];e&&!fi(0,this[a],a,e,!0)||(delete this[a],n=!0)}return n}normalize(e){const t=this,r={};return Fs.forEach(this,(n,a)=>{const o=Fs.findKey(r,a);if(o)return t[o]=gi(n),void delete t[a];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(a):String(a).trim();s!==a&&delete t[a],t[s]=gi(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Fs.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Fs.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[pi]=this[pi]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=mi(e);t[n]||(!function(e,t){const r=Fs.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,a){return this[n].call(this,t,e,r,a)},configurable:!0})})}(r,e),t[n]=!0)}return Fs.isArray(e)?e.forEach(n):n(e),this}}yi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Fs.reduceDescriptors(yi.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),Fs.freezeMethods(yi);const bi=yi;function vi(e,t){const r=this||ui,n=t||r,a=bi.from(n.headers);let o=n.data;return Fs.forEach(e,function(e){o=e.call(r,o,a.normalize(),t?t.status:void 0)}),a.normalize(),o}function xi(e){return!(!e||!e.__CANCEL__)}function wi(e,t,r){Hs.call(this,null==e?"canceled":e,Hs.ERR_CANCELED,t,r),this.name="CanceledError"}function Ci(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Hs("Request failed with status code "+r.status,[Hs.ERR_BAD_REQUEST,Hs.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}Fs.inherits(wi,Hs,{__CANCEL__:!0});const ji=(e,t,r=3)=>{let n=0;const a=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let a,o=0,s=0;return t=void 0!==t?t:1e3,function(i){const l=Date.now(),c=n[s];a||(a=l),r[o]=i,n[o]=l;let d=s,u=0;for(;d!==o;)u+=r[d++],d%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-a<t)return;const h=c&&l-c;return h?Math.round(1e3*u/h):void 0}}(50,250);return function(e,t){let r,n,a=0,o=1e3/t;const s=(t,o=Date.now())=>{a=o,r=null,n&&(clearTimeout(n),n=null),e(...t)};return[(...e)=>{const t=Date.now(),i=t-a;i>=o?s(e,t):(r=e,n||(n=setTimeout(()=>{n=null,s(r)},o-i)))},()=>r&&s(r)]}(r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,i=o-n,l=a(i);n=o;e({loaded:o,total:s,progress:s?o/s:void 0,bytes:i,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:r,lengthComputable:null!=s,[t?"download":"upload"]:!0})},r)},Si=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ni=e=>(...t)=>Fs.asap(()=>e(...t)),Ei=li.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,li.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(li.origin),li.navigator&&/(msie|trident)/i.test(li.navigator.userAgent)):()=>!0,Ii=li.hasStandardBrowserEnv?{write(e,t,r,n,a,o,s){if("undefined"==typeof document)return;const i=[`${e}=${encodeURIComponent(t)}`];Fs.isNumber(r)&&i.push(`expires=${new Date(r).toUTCString()}`),Fs.isString(n)&&i.push(`path=${n}`),Fs.isString(a)&&i.push(`domain=${a}`),!0===o&&i.push("secure"),Fs.isString(s)&&i.push(`SameSite=${s}`),document.cookie=i.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function Ti(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const _i=e=>e instanceof bi?{...e}:e;function ki(e,t){t=t||{};const r={};function n(e,t,r,n){return Fs.isPlainObject(e)&&Fs.isPlainObject(t)?Fs.merge.call({caseless:n},e,t):Fs.isPlainObject(t)?Fs.merge({},t):Fs.isArray(t)?t.slice():t}function a(e,t,r,a){return Fs.isUndefined(t)?Fs.isUndefined(e)?void 0:n(void 0,e,0,a):n(e,t,0,a)}function o(e,t){if(!Fs.isUndefined(t))return n(void 0,t)}function s(e,t){return Fs.isUndefined(t)?Fs.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function i(r,a,o){return o in t?n(r,a):o in e?n(void 0,r):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:i,headers:(e,t,r)=>a(_i(e),_i(t),0,!0)};return Fs.forEach(Object.keys({...e,...t}),function(n){const o=l[n]||a,s=o(e[n],t[n],n);Fs.isUndefined(s)&&o!==i||(r[n]=s)}),r}const Pi=e=>{const t=ki({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:i}=t;if(t.headers=s=bi.from(s),t.url=Qs(Ti(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),i&&s.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?unescape(encodeURIComponent(i.password)):""))),Fs.isFormData(r))if(li.hasStandardBrowserEnv||li.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(Fs.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&s.set(e,r)})}if(li.hasStandardBrowserEnv&&(n&&Fs.isFunction(n)&&(n=n(t)),n||!1!==n&&Ei(t.url))){const e=a&&o&&Ii.read(o);e&&s.set(a,e)}return t},Ai="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const n=Pi(e);let a=n.data;const o=bi.from(n.headers).normalize();let s,i,l,c,d,{responseType:u,onUploadProgress:h,onDownloadProgress:p}=n;function m(){c&&c(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(s),n.signal&&n.signal.removeEventListener("abort",s)}let g=new XMLHttpRequest;function f(){if(!g)return;const n=bi.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());Ci(function(e){t(e),m()},function(e){r(e),m()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:n,config:e,request:g}),g=null}g.open(n.method.toUpperCase(),n.url,!0),g.timeout=n.timeout,"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(f)},g.onabort=function(){g&&(r(new Hs("Request aborted",Hs.ECONNABORTED,e,g)),g=null)},g.onerror=function(t){const n=new Hs(t&&t.message?t.message:"Network Error",Hs.ERR_NETWORK,e,g);n.event=t||null,r(n),g=null},g.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const a=n.transitional||ti;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Hs(t,a.clarifyTimeoutError?Hs.ETIMEDOUT:Hs.ECONNABORTED,e,g)),g=null},void 0===a&&o.setContentType(null),"setRequestHeader"in g&&Fs.forEach(o.toJSON(),function(e,t){g.setRequestHeader(t,e)}),Fs.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),u&&"json"!==u&&(g.responseType=n.responseType),p&&([l,d]=ji(p,!0),g.addEventListener("progress",l)),h&&g.upload&&([i,c]=ji(h),g.upload.addEventListener("progress",i),g.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(s=t=>{g&&(r(!t||t.type?new wi(null,e,g):t),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(s),n.signal&&(n.signal.aborted?s():n.signal.addEventListener("abort",s)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);y&&-1===li.protocols.indexOf(y)?r(new Hs("Unsupported protocol "+y+":",Hs.ERR_BAD_REQUEST,e)):g.send(a||null)})},Ri=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const a=function(e){if(!r){r=!0,s();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Hs?t:new wi(t instanceof Error?t.message:t))}};let o=t&&setTimeout(()=>{o=null,a(new Hs(`timeout ${t} of ms exceeded`,Hs.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)}),e=null)};e.forEach(e=>e.addEventListener("abort",a));const{signal:i}=n;return i.unsubscribe=()=>Fs.asap(s),i}},Oi=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,a=0;for(;a<r;)n=a+t,yield e.slice(a,n),a=n},Di=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Li=(e,t,r,n)=>{const a=async function*(e,t){for await(const r of Di(e))yield*Oi(r,t)}(e,t);let o,s=0,i=e=>{o||(o=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await a.next();if(t)return i(),void e.close();let o=n.byteLength;if(r){let e=s+=o;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw i(t),t}},cancel:e=>(i(e),a.return())},{highWaterMark:2})},{isFunction:Ui}=Fs,Mi=(({Request:e,Response:t})=>({Request:e,Response:t}))(Fs.global),{ReadableStream:Bi,TextEncoder:Fi}=Fs.global,Hi=(e,...t)=>{try{return!!e(...t)}catch(ae){return!1}},Vi=e=>{e=Fs.merge.call({skipUndefined:!0},Mi,e);const{fetch:t,Request:r,Response:n}=e,a=t?Ui(t):"function"==typeof fetch,o=Ui(r),s=Ui(n);if(!a)return!1;const i=a&&Ui(Bi),l=a&&("function"==typeof Fi?(c=new Fi,e=>c.encode(e)):async e=>new Uint8Array(await new r(e).arrayBuffer()));var c;const d=o&&i&&Hi(()=>{let e=!1;const t=new r(li.origin,{body:new Bi,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),u=s&&i&&Hi(()=>Fs.isReadableStream(new n("").body)),h={stream:u&&(e=>e.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!h[e]&&(h[e]=(t,r)=>{let n=t&&t[e];if(n)return n.call(t);throw new Hs(`Response type '${e}' is not supported`,Hs.ERR_NOT_SUPPORT,r)})});const p=async(e,t)=>{const n=Fs.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Fs.isBlob(e))return e.size;if(Fs.isSpecCompliantForm(e)){const t=new r(li.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Fs.isArrayBufferView(e)||Fs.isArrayBuffer(e)?e.byteLength:(Fs.isURLSearchParams(e)&&(e+=""),Fs.isString(e)?(await l(e)).byteLength:void 0)})(t):n};return async e=>{let{url:a,method:s,data:i,signal:l,cancelToken:c,timeout:m,onDownloadProgress:g,onUploadProgress:f,responseType:y,headers:b,withCredentials:v="same-origin",fetchOptions:x}=Pi(e),w=t||fetch;y=y?(y+"").toLowerCase():"text";let C=Ri([l,c&&c.toAbortSignal()],m),j=null;const S=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let N;try{if(f&&d&&"get"!==s&&"head"!==s&&0!==(N=await p(b,i))){let e,t=new r(a,{method:"POST",body:i,duplex:"half"});if(Fs.isFormData(i)&&(e=t.headers.get("content-type"))&&b.setContentType(e),t.body){const[e,r]=Si(N,ji(Ni(f)));i=Li(t.body,65536,e,r)}}Fs.isString(v)||(v=v?"include":"omit");const t=o&&"credentials"in r.prototype,l={...x,signal:C,method:s.toUpperCase(),headers:b.normalize().toJSON(),body:i,duplex:"half",credentials:t?v:void 0};j=o&&new r(a,l);let c=await(o?w(j,x):w(a,l));const m=u&&("stream"===y||"response"===y);if(u&&(g||m&&S)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=Fs.toFiniteNumber(c.headers.get("content-length")),[r,a]=g&&Si(t,ji(Ni(g),!0))||[];c=new n(Li(c.body,65536,r,()=>{a&&a(),S&&S()}),e)}y=y||"text";let E=await h[Fs.findKey(h,y)||"text"](c,e);return!m&&S&&S(),await new Promise((t,r)=>{Ci(t,r,{data:E,headers:bi.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:j})})}catch(E){if(S&&S(),E&&"TypeError"===E.name&&/Load failed|fetch/i.test(E.message))throw Object.assign(new Hs("Network Error",Hs.ERR_NETWORK,e,j),{cause:E.cause||E});throw Hs.from(E,E&&E.code,e,j)}}},zi=new Map,$i=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:a}=t,o=[n,a,r];let s,i,l=o.length,c=zi;for(;l--;)s=o[l],i=c.get(s),void 0===i&&c.set(s,i=l?new Map:Vi(t)),c=i;return i};$i();const Gi={http:null,xhr:Ai,fetch:{get:$i}};Fs.forEach(Gi,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(ae){}Object.defineProperty(e,"adapterName",{value:t})}});const qi=e=>`- ${e}`,Wi=e=>Fs.isFunction(e)||null===e||!1===e;const Ki={getAdapter:function(e,t){e=Fs.isArray(e)?e:[e];const{length:r}=e;let n,a;const o={};for(let s=0;s<r;s++){let r;if(n=e[s],a=n,!Wi(n)&&(a=Gi[(r=String(n)).toLowerCase()],void 0===a))throw new Hs(`Unknown adapter '${r}'`);if(a&&(Fs.isFunction(a)||(a=a.get(t))))break;o[r||"#"+s]=a}if(!a){const e=Object.entries(o).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Hs("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(qi).join("\n"):" "+qi(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return a},adapters:Gi};function Ji(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new wi(null,e)}function Xi(e){Ji(e),e.headers=bi.from(e.headers),e.data=vi.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ki.getAdapter(e.adapter||ui.adapter,e)(e).then(function(t){return Ji(e),t.data=vi.call(e,e.transformResponse,t),t.headers=bi.from(t.headers),t},function(t){return xi(t)||(Ji(e),t&&t.response&&(t.response.data=vi.call(e,e.transformResponse,t.response),t.response.headers=bi.from(t.response.headers))),Promise.reject(t)})}const Zi="1.13.1",Yi={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yi[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qi={};Yi.transitional=function(e,t,r){function n(e,t){return"[Axios v"+Zi+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,a,o)=>{if(!1===e)throw new Hs(n(a," has been removed"+(t?" in "+t:"")),Hs.ERR_DEPRECATED);return t&&!Qi[a]&&(Qi[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,a,o)}},Yi.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const el={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Hs("options must be an object",Hs.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let a=n.length;for(;a-- >0;){const o=n[a],s=t[o];if(s){const t=e[o],r=void 0===t||s(t,o,e);if(!0!==r)throw new Hs("option "+o+" must be "+r,Hs.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Hs("Unknown option "+o,Hs.ERR_BAD_OPTION)}},validators:Yi},tl=el.validators;class rl{constructor(e){this.defaults=e||{},this.interceptors={request:new ei,response:new ei}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(ae){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ki(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:a}=t;void 0!==r&&el.assertOptions(r,{silentJSONParsing:tl.transitional(tl.boolean),forcedJSONParsing:tl.transitional(tl.boolean),clarifyTimeoutError:tl.transitional(tl.boolean)},!1),null!=n&&(Fs.isFunction(n)?t.paramsSerializer={serialize:n}:el.assertOptions(n,{encode:tl.function,serialize:tl.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),el.assertOptions(t,{baseUrl:tl.spelling("baseURL"),withXsrfToken:tl.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=a&&Fs.merge(a.common,a[t.method]);a&&Fs.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=bi.concat(o,a);const s=[];let i=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,s.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!i){const e=[Xi.bind(this),void 0];for(e.unshift(...s),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=s.length;let h=t;for(;u<d;){const e=s[u++],t=s[u++];try{h=e(h)}catch(p){t.call(this,p);break}}try{c=Xi.call(this,h)}catch(p){return Promise.reject(p)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return Qs(Ti((e=ki(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Fs.forEach(["delete","get","head","options"],function(e){rl.prototype[e]=function(t,r){return this.request(ki(r||{},{method:e,url:t,data:(r||{}).data}))}}),Fs.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,a){return this.request(ki(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}rl.prototype[e]=t(),rl.prototype[e+"Form"]=t(!0)});const nl=rl;class al{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,a){r.reason||(r.reason=new wi(e,n,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new al(function(t){e=t});return{token:t,cancel:e}}}const ol=al;const sl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(sl).forEach(([e,t])=>{sl[t]=e});const il=sl;const ll=function e(t){const r=new nl(t),n=Xo(nl.prototype.request,r);return Fs.extend(n,nl.prototype,r,{allOwnKeys:!0}),Fs.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(ki(t,r))},n}(ui);ll.Axios=nl,ll.CanceledError=wi,ll.CancelToken=ol,ll.isCancel=xi,ll.VERSION=Zi,ll.toFormData=Ks,ll.AxiosError=Hs,ll.Cancel=ll.CanceledError,ll.all=function(e){return Promise.all(e)},ll.spread=function(e){return function(t){return e.apply(null,t)}},ll.isAxiosError=function(e){return Fs.isObject(e)&&!0===e.isAxiosError},ll.mergeConfig=ki,ll.AxiosHeaders=bi,ll.formToJSON=e=>ci(Fs.isHTMLForm(e)?new FormData(e):e),ll.getAdapter=Ki.getAdapter,ll.HttpStatusCode=il,ll.default=ll;const cl=ll;const dl=()=>{const{user:t}=Go(),[r,n]=e.useState("monthly"),[a,o]=e.useState({isConnected:!1,isLoading:!0,products:null}),[s,i]=e.useState(null),[l,c]=e.useState(null),u=[{id:"basic",name:"Básico",icon:J.jsx(w,{className:"w-10 h-10 text-gray-500"}),color:"gray",gradient:"from-gray-400 to-gray-600",features:["Gratuito (R$ 0,00/mês)","Limite de 2 moedas (ex: BRL, USD)","Limite de 2 plataformas (Shopify, Nuvemshop)","Limite de 2 gateways de pagamento (Stripe, Mercado Pago)","Pode realizar 10 cálculos por mês","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:0,quarterly:{total:0,perMonth:0},annual:{total:0,perMonth:0}}},{id:"gold",name:"Gold",icon:J.jsx(d.div,{initial:{scale:1},animate:{scale:[1,1.15,1],boxShadow:["0 0 0px #FFD700","0 0 24px #FFD700","0 0 0px #FFD700"]},transition:{repeat:1/0,duration:2},children:J.jsx(C,{className:"w-12 h-12 text-yellow-500 drop-shadow-lg"})}),color:"yellow",gradient:"from-yellow-400 to-yellow-600",popular:!0,features:["R$ 9,90/mês","Suporte a 10 moedas","Até 4 plataformas","Até 4 gateways de pagamento","Cálculo automático em tempo real","Atualização automática de câmbio","Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)","Suporte via e-mail"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:9},annual:{total:89.9,perMonth:7.5}}},{id:"premium",name:"Premium",icon:J.jsxs(d.div,{initial:{rotate:0,scale:1},animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{repeat:1/0,duration:3},className:"relative flex items-center justify-center",children:[J.jsx(j,{className:"w-12 h-12 text-purple-500 drop-shadow-lg"}),J.jsx(d.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1},className:"absolute -top-2 -right-2",children:J.jsx(S,{className:"w-7 h-7 text-blue-500 drop-shadow-xl"})})]}),color:"purple",gradient:"from-purple-400 to-purple-600",features:["R$ 19,90/mês","Todas as moedas disponíveis (70+)","Todas as plataformas integradas","Todos os gateways de pagamento","Cálculo automático em tempo real","Histórico de preços completo","Suporte técnico prioritário","Segurança avançada nos pagamentos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.6}}}],h=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)} (R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês)`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)} (R$ ${e.prices.annual.perMonth.toFixed(2)}/mês)`}}},m=(e,t)=>{const r=e.prices.monthly*("quarterly"===t?3:12),n=e.prices[t].total;return Math.round((r-n)/r*100)};return e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),r=localStorage.getItem("currentUser");if(e&&"active"===t&&r){const t=localStorage.getItem("subscriptionDate");if(t){const r=new Date(t);((new Date).getTime()-r.getTime())/36e5<24?i(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"))}}o({isConnected:!0,isLoading:!1,products:null})},[]),J.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center",children:J.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8",children:[J.jsx("h3",{className:"text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight",children:"Escolha o período de cobrança"}),J.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:["monthly","quarterly","annual"].map(e=>J.jsxs(d.button,{whileHover:{scale:1.07,boxShadow:"0 0 16px #60A5FA"},whileTap:{scale:.97},onClick:()=>n(e),className:"p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg "+(r===e?"border-blue-500 bg-blue-100 text-blue-700":"border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"),children:[J.jsx("p",{className:"font-bold text-lg",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&J.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow",children:["-",m(u[1],e),"%"]})]},e))})]}),!a.isLoading&&J.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:u.map((e,n)=>J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*n},className:`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${e.popular?"border-yellow-400 shadow-yellow-200 scale-105":""} ${s===e.id?"ring-2 ring-green-500":""}`,children:[J.jsxs("div",{className:"flex flex-col items-center mb-8",children:[J.jsx("div",{className:`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${e.gradient} shadow-lg`,children:e.icon}),J.jsx("span",{className:`text-3xl font-extrabold text-${e.color}-700 mb-2 tracking-tight`,children:e.name}),e.popular&&J.jsx(d.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.5},className:"px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse",children:"⭐ Mais Popular"}),J.jsx("span",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:h(e,r).label})]}),J.jsx("ul",{className:"mb-8 text-base text-gray-900 space-y-4 flex-1",children:e.features.map((e,t)=>J.jsxs("li",{className:"flex items-center gap-2",children:[J.jsx(w,{className:"w-5 h-5 text-green-500"}),J.jsx("span",{children:e})]},t))}),J.jsx("div",{className:"mt-auto",children:J.jsxs(d.button,{whileHover:{scale:s===e.id?1:1.07,boxShadow:s===e.id?void 0:"0 0 16px "+("yellow"===e.color?"#FFD700":"purple"===e.color?"#6366F1":"#60A5FA")},whileTap:{scale:s===e.id?1:.97},onClick:async()=>{if(s!==e.id){c(`${e.id}_${r}`);try{if(Qe.loading("Redirecionando para pagamento...",{id:"purchase"}),!t?.id)throw new Error("Usuário não encontrado");const n=await async function({title:e,description:t,price:r,quantity:n=1,planId:a,userId:o}){const s={items:[{title:e,description:t,quantity:n,currency_id:"BRL",unit_price:r}],external_reference:`${a}_${o}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:o}};return(await cl.post("https://api.mercadopago.com/checkout/preferences",s,{headers:{Authorization:"Bearer APP_USR-377913103077270-111122-afa5f8cbbd113e80aff4c90b5c812766-2984123394","Content-Type":"application/json"}})).data}({title:`Assinatura DropCalc - ${e.name}`,description:`Plano ${e.name} (${r})`,price:h(e,r).value,planId:e.id,userId:t.id});window.location.href=n.init_point}catch(n){console.error("Erro ao criar pagamento:",n),Qe.error("Erro ao redirecionar para pagamento.",{id:"purchase"})}finally{c(null)}}},disabled:l===`${e.id}_${r}`||s===e.id,className:"w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 "+(s===e.id?"bg-green-100 text-green-700 cursor-default":l===`${e.id}_${r}`?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-2xl`),children:[J.jsx(N,{className:"w-5 h-5"}),"Assinar"]})})]},e.id))}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"overflow-x-auto mb-10",children:[J.jsx("h3",{className:"text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight",children:"Comparativo dos Planos"}),J.jsxs("table",{className:"min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100",children:[J.jsx("thead",{children:J.jsxs("tr",{children:[J.jsx("th",{className:"py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl",children:"Benefício"}),u.map(e=>J.jsx("th",{className:"py-4 px-6 text-center font-bold text-lg bg-blue-50",children:J.jsx("span",{className:`text-base font-bold text-${e.color}-700`,children:e.name})},e.id))]})}),J.jsxs("tbody",{children:[J.jsxs("tr",{className:"bg-white/60",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Preço"}),u.map(e=>J.jsx("td",{className:"py-3 px-6 text-center font-bold text-lg",children:h(e,r).label},e.id))]}),J.jsxs("tr",{className:"bg-blue-50/60",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Moedas suportadas"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"70+"})]}),J.jsxs("tr",{className:"bg-white/60",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Plataformas integradas"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"Todas"})]}),J.jsxs("tr",{className:"bg-blue-50/60",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Gateways de pagamento"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"Todos"})]}),J.jsxs("tr",{className:"bg-white/60",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Cálculos por mês"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"})]}),J.jsxs("tr",{className:"bg-blue-50/60",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Suporte"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"Prioritário"})]}),J.jsxs("tr",{className:"bg-white/60 rounded-b-3xl",children:[J.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Segurança avançada"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),J.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),J.jsx("td",{className:"py-3 px-6 text-center",children:J.jsx(w,{className:"w-6 h-6 text-green-500 mx-auto"})})]})]})]})]}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10",children:[J.jsx(p,{className:"w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce"}),J.jsx("h3",{className:"text-2xl font-extrabold mb-3 tracking-tight",children:"💡 Dica Especial"}),J.jsxs("p",{className:"opacity-95 text-lg",children:["Com o ",J.jsx("span",{className:"font-bold text-yellow-200",children:"DropCalc Premium"}),", você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada."]})]})]})})};const ul="https://appdropcalc-production.up.railway.app",hl=()=>{const{user:t,plan:r,checkPlanAccess:n}=Go(),{theme:a,setTheme:s}=function(){const[t,r]=e.useState(()=>"undefined"!=typeof window&&localStorage.getItem("theme")||"light");return e.useEffect(()=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(t),localStorage.setItem("theme",t)},[t]),{theme:t,setTheme:r,isDark:"dark"===t,isLight:"light"===t}}(),i=o();if(console.log("=== DashboardCalculadora INICIANDO ==="),console.log("User:",t),console.log("User autenticado:",!!t),console.log("Plan:",r),console.log("localStorage userPlan:",localStorage.getItem("userPlan")),console.log("localStorage premiumActive:",localStorage.getItem("premiumActive")),e.useEffect(()=>{const e=setTimeout(()=>{t||(console.log("Usuário não autenticado, redirecionando para o login."),i("/login"))},1500);return()=>clearTimeout(e)},[t,i]),!t)return J.jsx("div",{className:"min-h-screen flex items-center justify-center",children:J.jsx("div",{className:"text-center",children:J.jsx("h1",{children:"Verificando autenticação..."})})});const[l,c]=e.useState({custoProduto:100,custosAdicionais:0,moedaOrigem:"USD",moedaVenda:"BRL",plataforma:"mercado-livre",gateway:"mercado-pago",margemLucro:30}),[p,m]=e.useState(null),[g,f]=e.useState(0),[y,b]=e.useState(!1),[v,x]=e.useState(!1),w=()=>"basic"===r?.type||!n("professional"),C=e.useCallback(async()=>{x(!0);try{const e=await fetch(`${ul}/calc/calcular`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!e.ok)throw new Error("Erro no cálculo");const t=await e.json();m(t)}catch(e){console.error("Erro no cálculo:",e);const t=(l.custoProduto+l.custosAdicionais)*g,r=.05*t,n=.035*t,a=t+r+n,o=a*(l.margemLucro/100);m({precoVenda:a+o,detalhes:{custoProduto:l.custoProduto,custosAdicionais:l.custosAdicionais,taxaCambio:g,custoConvertido:t,taxaPlataforma:r,taxaGateway:n,taxaTotal:r+n,margemLucro:l.margemLucro,valorMargemBRL:o}})}finally{x(!1)}},[l,g]);e.useEffect(()=>{l.moedaOrigem&&l.moedaVenda&&(async()=>{try{const e=await fetch(`${ul}/exchange/rate/${l.moedaOrigem}/${l.moedaVenda}`),t=await e.json();f(t.rate)}catch(e){console.error("Erro ao buscar taxa de câmbio:",e),f(5.5)}})()},[l.moedaOrigem,l.moedaVenda]),e.useEffect(()=>{w()?null!==p&&m(null):g>0&&l.custoProduto>0&&C()},[l,g,r,C,p,w]);const j=(e,t)=>{c(r=>({...r,[e]:t}))},S="basic"===(r&&r.type?r.type:"basic")?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real";return J.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900",children:[J.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-b border-white/20 dark:border-gray-700/20",children:[J.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:J.jsxs("div",{className:"flex justify-between items-center py-4",children:[J.jsxs("div",{className:"flex items-center gap-3",children:[J.jsx("div",{className:"p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl",children:J.jsx(u,{className:"h-6 w-6 text-white"})}),J.jsxs("div",{children:[J.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"DropCalc"}),"true"===localStorage.getItem("premiumActive")&&J.jsxs("div",{className:"flex items-center gap-1",children:[J.jsx(E,{className:"w-3 h-3 text-yellow-500"}),J.jsx("span",{className:"text-xs text-yellow-600 font-medium",children:"Premium"})]})]})]}),J.jsxs("div",{className:"flex items-center gap-4",children:[J.jsxs("span",{className:"text-gray-700 dark:text-gray-200 font-medium hidden sm:block",children:["Olá, ",t?.name||"Usuário","!"]}),J.jsxs("div",{className:"flex items-center gap-2",children:[J.jsx("button",{onClick:()=>s("dark"===a?"light":"dark"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors",title:"dark"===a?"Modo claro":"Modo escuro",children:"dark"===a?J.jsx(I,{className:"w-5 h-5"}):J.jsx(T,{className:"w-5 h-5"})}),J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i("/help"),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Ajuda",children:J.jsx(_,{className:"w-5 h-5"})}),J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>i("/settings"),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Configurações",children:J.jsx(k,{className:"w-5 h-5"})}),J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>b(!y),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors sm:hidden",title:"Menu",children:y?J.jsx(P,{className:"w-5 h-5"}):J.jsx(A,{className:"w-5 h-5"})})]})]})]})}),J.jsx(R,{children:y&&J.jsx(d.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"border-t border-gray-200 bg-white sm:hidden",children:J.jsxs("div",{className:"px-4 py-3 space-y-2",children:[J.jsxs("button",{onClick:()=>{i("/help"),b(!1)},className:"flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:[J.jsx(_,{className:"w-5 h-5"}),"Ajuda"]}),J.jsxs("button",{onClick:()=>{i("/settings"),b(!1)},className:"flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:[J.jsx(k,{className:"w-5 h-5"}),"Configurações"]})]})})})]}),J.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:J.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[J.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-lg shadow p-6",children:[J.jsxs("div",{className:"flex items-center mb-6",children:[J.jsx(k,{className:"h-6 w-6 text-blue-600 mr-2"}),J.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Parâmetros do Produto"})]}),J.jsxs("div",{className:"space-y-6",children:[J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Custo do Produto"}),J.jsxs("div",{className:"relative",children:[J.jsx(O,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500"}),J.jsx("input",{type:"number",value:l.custoProduto,onChange:e=>j("custoProduto",parseFloat(e.target.value)||0),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"100.00"})]})]}),J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Custos Adicionais (Frete, Impostos, etc.)"}),J.jsx("input",{type:"number",value:l.custosAdicionais,onChange:e=>j("custosAdicionais",parseFloat(e.target.value)||0),className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white",placeholder:"0.00"})]}),J.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Moeda Origem"}),J.jsxs("select",{value:l.moedaOrigem,onChange:e=>j("moedaOrigem",e.target.value),className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white",children:[J.jsxs("optgroup",{label:" Principais",children:[J.jsx("option",{value:"USD",children:"USD - Dólar Americano"}),J.jsx("option",{value:"EUR",children:"EUR - Euro"}),J.jsx("option",{value:"BRL",children:"BRL - Real Brasileiro"}),J.jsx("option",{value:"CNY",children:"CNY - Yuan Chinês"}),J.jsx("option",{value:"GBP",children:"GBP - Libra Esterlina"}),J.jsx("option",{value:"JPY",children:"JPY - Iene Japonês"})]}),J.jsxs("optgroup",{label:"🇺🇸 América do Norte",children:[J.jsx("option",{value:"CAD",children:"CAD - Dólar Canadense"}),J.jsx("option",{value:"MXN",children:"MXN - Peso Mexicano"})]}),J.jsxs("optgroup",{label:"🇧🇷 América do Sul",children:[J.jsx("option",{value:"ARS",children:"ARS - Peso Argentino"}),J.jsx("option",{value:"CLP",children:"CLP - Peso Chileno"}),J.jsx("option",{value:"COP",children:"COP - Peso Colombiano"}),J.jsx("option",{value:"UYU",children:"UYU - Peso Uruguaio"}),J.jsx("option",{value:"PEN",children:"PEN - Sol Peruano"}),J.jsx("option",{value:"BOB",children:"BOB - Boliviano"}),J.jsx("option",{value:"PYG",children:"PYG - Guarani Paraguaio"}),J.jsx("option",{value:"VES",children:"VES - Bolívar Venezuelano"})]}),J.jsxs("optgroup",{label:"🇪🇺 Europa",children:[J.jsx("option",{value:"CHF",children:"CHF - Franco Suíço"}),J.jsx("option",{value:"NOK",children:"NOK - Coroa Norueguesa"}),J.jsx("option",{value:"SEK",children:"SEK - Coroa Sueca"}),J.jsx("option",{value:"DKK",children:"DKK - Coroa Dinamarquesa"}),J.jsx("option",{value:"PLN",children:"PLN - Zloty Polonês"}),J.jsx("option",{value:"CZK",children:"CZK - Coroa Tcheca"}),J.jsx("option",{value:"HUF",children:"HUF - Forint Húngaro"}),J.jsx("option",{value:"RON",children:"RON - Leu Romeno"}),J.jsx("option",{value:"BGN",children:"BGN - Lev Búlgaro"}),J.jsx("option",{value:"HRK",children:"HRK - Kuna Croata"}),J.jsx("option",{value:"RUB",children:"RUB - Rublo Russo"}),J.jsx("option",{value:"UAH",children:"UAH - Hryvnia Ucraniana"}),J.jsx("option",{value:"TRY",children:"TRY - Lira Turca"})]}),J.jsxs("optgroup",{label:" Ásia-Pacífico",children:[J.jsx("option",{value:"AUD",children:"AUD - Dólar Australiano"}),J.jsx("option",{value:"NZD",children:"NZD - Dólar Neozelandês"}),J.jsx("option",{value:"KRW",children:"KRW - Won Sul-coreano"}),J.jsx("option",{value:"SGD",children:"SGD - Dólar de Singapura"}),J.jsx("option",{value:"HKD",children:"HKD - Dólar de Hong Kong"}),J.jsx("option",{value:"THB",children:"THB - Baht Tailandês"}),J.jsx("option",{value:"MYR",children:"MYR - Ringgit Malaio"}),J.jsx("option",{value:"PHP",children:"PHP - Peso Filipino"}),J.jsx("option",{value:"IDR",children:"IDR - Rupia Indonésia"}),J.jsx("option",{value:"VND",children:"VND - Dong Vietnamita"}),J.jsx("option",{value:"INR",children:"INR - Rupia Indiana"}),J.jsx("option",{value:"PKR",children:"PKR - Rupia Paquistanesa"}),J.jsx("option",{value:"BDT",children:"BDT - Taka de Bangladesh"}),J.jsx("option",{value:"LKR",children:"LKR - Rupia do Sri Lanka"}),J.jsx("option",{value:"NPR",children:"NPR - Rupia Nepalesa"}),J.jsx("option",{value:"MMK",children:"MMK - Kyat de Mianmar"}),J.jsx("option",{value:"KHR",children:"KHR - Riel Cambojano"}),J.jsx("option",{value:"LAK",children:"LAK - Kip Laosiano"}),J.jsx("option",{value:"BND",children:"BND - Dólar de Brunei"})]}),J.jsxs("optgroup",{label:" Oriente Médio & África",children:[J.jsx("option",{value:"SAR",children:"SAR - Riyal Saudita"}),J.jsx("option",{value:"AED",children:"AED - Dirham dos Emirados"}),J.jsx("option",{value:"QAR",children:"QAR - Riyal do Qatar"}),J.jsx("option",{value:"KWD",children:"KWD - Dinar do Kuwait"}),J.jsx("option",{value:"BHD",children:"BHD - Dinar do Bahrein"}),J.jsx("option",{value:"OMR",children:"OMR - Rial Omanense"}),J.jsx("option",{value:"JOD",children:"JOD - Dinar Jordaniano"}),J.jsx("option",{value:"LBP",children:"LBP - Libra Libanesa"}),J.jsx("option",{value:"ILS",children:"ILS - Shekel Israelense"}),J.jsx("option",{value:"EGP",children:"EGP - Libra Egípcia"}),J.jsx("option",{value:"ZAR",children:"ZAR - Rand Sul-africano"}),J.jsx("option",{value:"NGN",children:"NGN - Naira Nigeriana"}),J.jsx("option",{value:"KES",children:"KES - Xelim Queniano"}),J.jsx("option",{value:"UGX",children:"UGX - Xelim Ugandense"}),J.jsx("option",{value:"TZS",children:"TZS - Xelim Tanzaniano"}),J.jsx("option",{value:"GHS",children:"GHS - Cedi Ganês"}),J.jsx("option",{value:"MAD",children:"MAD - Dirham Marroquino"}),J.jsx("option",{value:"TND",children:"TND - Dinar Tunisiano"}),J.jsx("option",{value:"DZD",children:"DZD - Dinar Argelino"}),J.jsx("option",{value:"LYD",children:"LYD - Dinar Líbio"}),J.jsx("option",{value:"SDG",children:"SDG - Libra Sudanesa"}),J.jsx("option",{value:"ETB",children:"ETB - Birr Etíope"}),J.jsx("option",{value:"XOF",children:"XOF - Franco CFA Oeste Africano"}),J.jsx("option",{value:"XAF",children:"XAF - Franco CFA Centro Africano"})]}),J.jsxs("optgroup",{label:" Criptomoedas",children:[J.jsx("option",{value:"BTC",children:"BTC - Bitcoin"}),J.jsx("option",{value:"ETH",children:"ETH - Ethereum"}),J.jsx("option",{value:"USDT",children:"USDT - Tether"}),J.jsx("option",{value:"BNB",children:"BNB - Binance Coin"}),J.jsx("option",{value:"ADA",children:"ADA - Cardano"}),J.jsx("option",{value:"DOGE",children:"DOGE - Dogecoin"}),J.jsx("option",{value:"XRP",children:"XRP - Ripple"}),J.jsx("option",{value:"LTC",children:"LTC - Litecoin"}),J.jsx("option",{value:"BCH",children:"BCH - Bitcoin Cash"})]})]})]}),J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Moeda Venda"}),J.jsxs("select",{value:l.moedaVenda,onChange:e=>j("moedaVenda",e.target.value),className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white",children:[J.jsxs("optgroup",{label:" Principais",children:[J.jsx("option",{value:"BRL",children:"BRL - Real Brasileiro"}),J.jsx("option",{value:"USD",children:"USD - Dólar Americano"}),J.jsx("option",{value:"EUR",children:"EUR - Euro"}),J.jsx("option",{value:"CNY",children:"CNY - Yuan Chinês"}),J.jsx("option",{value:"GBP",children:"GBP - Libra Esterlina"}),J.jsx("option",{value:"JPY",children:"JPY - Iene Japonês"})]}),J.jsxs("optgroup",{label:"🇺🇸 América do Norte",children:[J.jsx("option",{value:"CAD",children:"CAD - Dólar Canadense"}),J.jsx("option",{value:"MXN",children:"MXN - Peso Mexicano"})]}),J.jsxs("optgroup",{label:"🇧🇷 América do Sul",children:[J.jsx("option",{value:"ARS",children:"ARS - Peso Argentino"}),J.jsx("option",{value:"CLP",children:"CLP - Peso Chileno"}),J.jsx("option",{value:"COP",children:"COP - Peso Colombiano"}),J.jsx("option",{value:"UYU",children:"UYU - Peso Uruguaio"}),J.jsx("option",{value:"PEN",children:"PEN - Sol Peruano"}),J.jsx("option",{value:"BOB",children:"BOB - Boliviano"}),J.jsx("option",{value:"PYG",children:"PYG - Guarani Paraguaio"}),J.jsx("option",{value:"VES",children:"VES - Bolívar Venezuelano"})]}),J.jsxs("optgroup",{label:"🇪🇺 Europa",children:[J.jsx("option",{value:"CHF",children:"CHF - Franco Suíço"}),J.jsx("option",{value:"NOK",children:"NOK - Coroa Norueguesa"}),J.jsx("option",{value:"SEK",children:"SEK - Coroa Sueca"}),J.jsx("option",{value:"DKK",children:"DKK - Coroa Dinamarquesa"}),J.jsx("option",{value:"PLN",children:"PLN - Zloty Polonês"}),J.jsx("option",{value:"CZK",children:"CZK - Coroa Tcheca"}),J.jsx("option",{value:"HUF",children:"HUF - Forint Húngaro"}),J.jsx("option",{value:"RON",children:"RON - Leu Romeno"}),J.jsx("option",{value:"BGN",children:"BGN - Lev Búlgaro"}),J.jsx("option",{value:"HRK",children:"HRK - Kuna Croata"}),J.jsx("option",{value:"RUB",children:"RUB - Rublo Russo"}),J.jsx("option",{value:"UAH",children:"UAH - Hryvnia Ucraniana"}),J.jsx("option",{value:"TRY",children:"TRY - Lira Turca"})]}),J.jsxs("optgroup",{label:" Ásia-Pacífico",children:[J.jsx("option",{value:"AUD",children:"AUD - Dólar Australiano"}),J.jsx("option",{value:"NZD",children:"NZD - Dólar Neozelandês"}),J.jsx("option",{value:"KRW",children:"KRW - Won Sul-coreano"}),J.jsx("option",{value:"SGD",children:"SGD - Dólar de Singapura"}),J.jsx("option",{value:"HKD",children:"HKD - Dólar de Hong Kong"}),J.jsx("option",{value:"THB",children:"THB - Baht Tailandês"}),J.jsx("option",{value:"MYR",children:"MYR - Ringgit Malaio"}),J.jsx("option",{value:"PHP",children:"PHP - Peso Filipino"}),J.jsx("option",{value:"IDR",children:"IDR - Rupia Indonésia"}),J.jsx("option",{value:"VND",children:"VND - Dong Vietnamita"}),J.jsx("option",{value:"INR",children:"INR - Rupia Indiana"}),J.jsx("option",{value:"PKR",children:"PKR - Rupia Paquistanesa"}),J.jsx("option",{value:"BDT",children:"BDT - Taka de Bangladesh"}),J.jsx("option",{value:"LKR",children:"LKR - Rupia do Sri Lanka"}),J.jsx("option",{value:"NPR",children:"NPR - Rupia Nepalesa"}),J.jsx("option",{value:"MMK",children:"MMK - Kyat de Mianmar"}),J.jsx("option",{value:"KHR",children:"KHR - Riel Cambojano"}),J.jsx("option",{value:"LAK",children:"LAK - Kip Laosiano"}),J.jsx("option",{value:"BND",children:"BND - Dólar de Brunei"})]}),J.jsxs("optgroup",{label:" Oriente Médio & África",children:[J.jsx("option",{value:"SAR",children:"SAR - Riyal Saudita"}),J.jsx("option",{value:"AED",children:"AED - Dirham dos Emirados"}),J.jsx("option",{value:"QAR",children:"QAR - Riyal do Qatar"}),J.jsx("option",{value:"KWD",children:"KWD - Dinar do Kuwait"}),J.jsx("option",{value:"BHD",children:"BHD - Dinar do Bahrein"}),J.jsx("option",{value:"OMR",children:"OMR - Rial Omanense"}),J.jsx("option",{value:"JOD",children:"JOD - Dinar Jordaniano"}),J.jsx("option",{value:"LBP",children:"LBP - Libra Libanesa"}),J.jsx("option",{value:"ILS",children:"ILS - Shekel Israelense"}),J.jsx("option",{value:"EGP",children:"EGP - Libra Egípcia"}),J.jsx("option",{value:"ZAR",children:"ZAR - Rand Sul-africano"}),J.jsx("option",{value:"NGN",children:"NGN - Naira Nigeriana"}),J.jsx("option",{value:"KES",children:"KES - Xelim Queniano"}),J.jsx("option",{value:"UGX",children:"UGX - Xelim Ugandense"}),J.jsx("option",{value:"TZS",children:"TZS - Xelim Tanzaniano"}),J.jsx("option",{value:"GHS",children:"GHS - Cedi Ganês"}),J.jsx("option",{value:"MAD",children:"MAD - Dirham Marroquino"}),J.jsx("option",{value:"TND",children:"TND - Dinar Tunisiano"}),J.jsx("option",{value:"DZD",children:"DZD - Dinar Argelino"}),J.jsx("option",{value:"LYD",children:"LYD - Dinar Líbio"}),J.jsx("option",{value:"SDG",children:"SDG - Libra Sudanesa"}),J.jsx("option",{value:"ETB",children:"ETB - Birr Etíope"}),J.jsx("option",{value:"XOF",children:"XOF - Franco CFA Oeste Africano"}),J.jsx("option",{value:"XAF",children:"XAF - Franco CFA Centro Africano"})]}),J.jsxs("optgroup",{label:" Criptomoedas",children:[J.jsx("option",{value:"BTC",children:"BTC - Bitcoin"}),J.jsx("option",{value:"ETH",children:"ETH - Ethereum"}),J.jsx("option",{value:"USDT",children:"USDT - Tether"}),J.jsx("option",{value:"BNB",children:"BNB - Binance Coin"}),J.jsx("option",{value:"ADA",children:"ADA - Cardano"}),J.jsx("option",{value:"DOGE",children:"DOGE - Dogecoin"}),J.jsx("option",{value:"XRP",children:"XRP - Ripple"}),J.jsx("option",{value:"LTC",children:"LTC - Litecoin"}),J.jsx("option",{value:"BCH",children:"BCH - Bitcoin Cash"})]})]})]})]}),J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Plataforma de Venda"}),J.jsxs("select",{value:l.plataforma,onChange:e=>j("plataforma",e.target.value),className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white",children:[J.jsxs("optgroup",{label:"Marketplaces Nacionais",children:[J.jsx("option",{value:"mercado-livre",children:"Mercado Livre"}),J.jsx("option",{value:"amazon-br",children:"Amazon Brasil"}),J.jsx("option",{value:"shopee",children:"Shopee"}),J.jsx("option",{value:"magazineluiza",children:"Magazine Luiza"}),J.jsx("option",{value:"americanas",children:"Americanas"}),J.jsx("option",{value:"casas-bahia",children:"Casas Bahia"}),J.jsx("option",{value:"via-varejo",children:"Via Varejo"})]}),J.jsxs("optgroup",{label:"E-commerce Próprio",children:[J.jsx("option",{value:"shopify",children:"Shopify"}),J.jsx("option",{value:"nuvemshop",children:"Nuvemshop"}),J.jsx("option",{value:"woocommerce",children:"WooCommerce"}),J.jsx("option",{value:"magento",children:"Magento"}),J.jsx("option",{value:"opencart",children:"OpenCart"}),J.jsx("option",{value:"prestashop",children:"PrestaShop"}),J.jsx("option",{value:"tray",children:"Tray Commerce"}),J.jsx("option",{value:"vtex",children:"VTEX"})]}),J.jsxs("optgroup",{label:"Marketplaces Internacionais",children:[J.jsx("option",{value:"amazon-us",children:"Amazon US"}),J.jsx("option",{value:"ebay",children:"eBay"}),J.jsx("option",{value:"etsy",children:"Etsy"}),J.jsx("option",{value:"aliexpress",children:"AliExpress"})]}),J.jsxs("optgroup",{label:"Redes Sociais",children:[J.jsx("option",{value:"facebook-shop",children:"Facebook Shop"}),J.jsx("option",{value:"instagram-shop",children:"Instagram Shopping"}),J.jsx("option",{value:"whatsapp-business",children:"WhatsApp Business"})]})]})]}),J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Gateway de Pagamento"}),J.jsxs("select",{value:l.gateway,onChange:e=>j("gateway",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[J.jsxs("optgroup",{label:"Gateways Nacionais",children:[J.jsx("option",{value:"mercado-pago",children:"Mercado Pago"}),J.jsx("option",{value:"pagseguro",children:"PagSeguro"}),J.jsx("option",{value:"cielo",children:"Cielo"}),J.jsx("option",{value:"rede",children:"Rede"}),J.jsx("option",{value:"getnet",children:"Getnet"}),J.jsx("option",{value:"stone",children:"Stone"}),J.jsx("option",{value:"pagar-me",children:"Pagar.me"}),J.jsx("option",{value:"wirecard",children:"Wirecard"}),J.jsx("option",{value:"asaas",children:"Asaas"}),J.jsx("option",{value:"ebanx",children:"EBANX"})]}),J.jsxs("optgroup",{label:"Gateways Internacionais",children:[J.jsx("option",{value:"paypal",children:"PayPal"}),J.jsx("option",{value:"stripe",children:"Stripe"}),J.jsx("option",{value:"square",children:"Square"}),J.jsx("option",{value:"braintree",children:"Braintree"}),J.jsx("option",{value:"adyen",children:"Adyen"}),J.jsx("option",{value:"checkout",children:"Checkout.com"})]}),J.jsxs("optgroup",{label:"Pagamento Digital",children:[J.jsx("option",{value:"pix",children:"PIX"}),J.jsx("option",{value:"picpay",children:"PicPay"}),J.jsx("option",{value:"payoneer",children:"Payoneer"}),J.jsx("option",{value:"skrill",children:"Skrill"})]})]})]}),J.jsxs("div",{children:[J.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Margem de Lucro (%)"}),J.jsxs("div",{className:"relative",children:[J.jsx(h,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500"}),J.jsx("input",{type:"number",value:l.margemLucro,onChange:e=>j("margemLucro",parseFloat(e.target.value)||0),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"30"})]})]}),g>0&&J.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:J.jsxs("p",{className:"text-sm text-blue-600",children:["Taxa de câmbio atual: ",l.moedaOrigem," → ",l.moedaVenda," = ",g.toFixed(4)]})}),w()&&J.jsxs("button",{onClick:C,disabled:v||l.custoProduto<=0||g<=0,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center",children:[J.jsx(u,{className:"h-5 w-5 mr-2"}),v?"Calculando...":"Calcular Preço"]}),J.jsxs("button",{onClick:()=>{c({custoProduto:0,custosAdicionais:0,moedaOrigem:"USD",moedaVenda:"BRL",plataforma:"mercado-livre",gateway:"mercado-pago",margemLucro:30}),m(null)},className:"w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center",children:[J.jsx(k,{className:"h-5 w-5 mr-2"}),"Limpar Formulário"]}),J.jsx("div",{className:"p-4 rounded-lg "+(w()?"bg-orange-50":"bg-green-50"),children:J.jsxs("p",{className:"text-sm flex items-center "+(w()?"text-orange-600":"text-green-600"),children:[J.jsx(h,{className:"h-4 w-4 mr-2"}),S]})})]})]}),J.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-lg shadow p-6",children:[J.jsxs("div",{className:"flex items-center mb-6",children:[J.jsx(O,{className:"h-6 w-6 text-green-600 mr-2"}),J.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Resultado do Cálculo"})]}),p?J.jsxs("div",{className:"space-y-6",children:[J.jsxs("div",{className:"text-center bg-green-50 dark:bg-green-900 p-6 rounded-lg",children:[J.jsx("h3",{className:"text-2xl font-bold text-green-600 dark:text-green-400 mb-2",children:"Preço de Venda Sugerido"}),J.jsxs("p",{className:"text-4xl font-bold text-green-700 dark:text-green-300",children:[l.moedaVenda," ",p.precoVenda.toFixed(2)]})]}),J.jsxs("div",{className:"space-y-4",children:[J.jsx("h4",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Detalhamento:"}),J.jsxs("div",{className:"space-y-3",children:[J.jsxs("div",{className:"flex justify-between",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Custo do Produto:"}),J.jsxs("span",{className:"font-medium",children:[l.moedaOrigem," ",p.detalhes.custoProduto.toFixed(2)]})]}),J.jsxs("div",{className:"flex justify-between",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Custos Adicionais:"}),J.jsxs("span",{className:"font-medium",children:[l.moedaOrigem," ",p.detalhes.custosAdicionais.toFixed(2)]})]}),J.jsxs("div",{className:"flex justify-between",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Taxa de Câmbio:"}),J.jsx("span",{className:"font-medium",children:p.detalhes.taxaCambio.toFixed(4)})]}),J.jsxs("div",{className:"flex justify-between",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Custo Convertido:"}),J.jsxs("span",{className:"font-medium",children:[l.moedaVenda," ",p.detalhes.custoConvertido.toFixed(2)]})]}),J.jsxs("div",{className:"flex justify-between",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Taxa da Plataforma:"}),J.jsxs("span",{className:"font-medium",children:[l.moedaVenda," ",p.detalhes.taxaPlataforma.toFixed(2)]})]}),J.jsxs("div",{className:"flex justify-between",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Taxa do Gateway:"}),J.jsxs("span",{className:"font-medium",children:[l.moedaVenda," ",p.detalhes.taxaGateway.toFixed(2)]})]}),J.jsxs("div",{className:"flex justify-between border-t pt-3",children:[J.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Total de Taxas:"}),J.jsxs("span",{className:"font-medium",children:[l.moedaVenda," ",p.detalhes.taxaTotal.toFixed(2)]})]}),J.jsxs("div",{className:"flex justify-between",children:[J.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:["Margem de Lucro (",l.margemLucro,"%):"]}),J.jsxs("span",{className:"font-medium text-green-600 dark:text-green-400",children:[l.moedaVenda," ",p.detalhes.valorMargemBRL.toFixed(2)]})]})]})]})]}):J.jsxs("div",{className:"text-center text-gray-500 dark:text-gray-400 py-12",children:[J.jsx(u,{className:"h-16 w-16 mx-auto mb-4 opacity-50"}),J.jsx("p",{children:'Preencha os dados e clique em "Calcular Preço" para ver o resultado'})]})]})]})})]})},pl=()=>{const t=o(),[r,n]=e.useState(null),a=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:J.jsx(u,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:J.jsx(B,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:J.jsx(h,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:J.jsx(E,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Mercado Pago"',"4. Complete o pagamento através do Mercado Pago","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return J.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:J.jsxs("div",{className:"container mx-auto px-4 py-8",children:[J.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[J.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:J.jsx(D,{className:"w-6 h-6 text-gray-600"})}),J.jsxs("div",{className:"flex items-center gap-3",children:[J.jsx(_,{className:"w-8 h-8 text-blue-600"}),J.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),J.jsxs("div",{className:"max-w-4xl mx-auto",children:[J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[J.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),J.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[J.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),a.map((e,t)=>J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[J.jsxs("button",{onClick:()=>{return t=e.id,void n(r===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[J.jsxs("div",{className:"flex items-center gap-4",children:[J.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),J.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),J.jsx(d.div,{animate:{rotate:r===e.id?90:0},transition:{duration:.2},children:J.jsx(L,{className:"w-5 h-5 text-gray-500"})})]}),J.jsx(R,{children:r===e.id&&J.jsx(d.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:J.jsxs("div",{className:"p-6 pt-4",children:[J.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>J.jsx(d.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&J.jsxs(d.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[J.jsx(U,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),J.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[J.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),J.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>J.jsxs(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[J.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),J.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),J.jsxs(d.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",onSubmit:async e=>{e.preventDefault();const t=e.target,r=new FormData(t),n=r.get("nome"),a=r.get("email"),o=r.get("mensagem");try{await fetch("https://formspree.io/f/xwkzqgqg",{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify({nome:n,email:a,mensagem:o})}),alert("Mensagem enviada com sucesso!"),t.reset()}catch{alert("Erro ao enviar mensagem. Tente novamente.")}},children:[J.jsx(M,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),J.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),J.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),J.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[J.jsx("input",{name:"nome",required:!0,placeholder:"Seu nome",className:"p-3 rounded-xl text-gray-800"}),J.jsx("input",{name:"email",required:!0,type:"email",placeholder:"Seu e-mail",className:"p-3 rounded-xl text-gray-800"}),J.jsx("input",{name:"mensagem",required:!0,placeholder:"Sua mensagem",className:"p-3 rounded-xl text-gray-800"})]}),J.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Enviar Mensagem"})]})]})]})})},ml=()=>{const{loading:e,user:t}=Go();return console.log("=== AppWithAuth carregando ==="),console.log("Loading:",e,"User:",t),e?J.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:J.jsxs("div",{className:"text-center",children:[J.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),J.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):J.jsx(i,{children:J.jsxs("div",{className:"App",children:[J.jsxs(l,{children:[J.jsx(c,{path:"/welcome",element:J.jsx(Wo,{})}),J.jsx(c,{path:"/login",element:J.jsx(Ko,{})}),J.jsx(c,{path:"/login-simple",element:J.jsx(Jo,{})}),J.jsx(c,{path:"/signup",element:J.jsx(Ko,{})}),J.jsx(c,{path:"/help",element:J.jsx(pl,{})}),J.jsx(c,{path:"/payment",element:J.jsx(qo,{children:J.jsx(dl,{})})}),J.jsx(c,{path:"/dashboard",element:J.jsx(qo,{children:J.jsx(hl,{})})}),J.jsx(c,{path:"/",element:t?J.jsx(n,{to:"/dashboard",replace:!0}):J.jsx(n,{to:"/welcome",replace:!0})}),J.jsx(c,{path:"*",element:J.jsx(n,{to:"/welcome",replace:!0})})]}),J.jsx(Ye,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})};let gl;async function fl(){if(gl){gl.prompt();const{outcome:e}=await gl.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}gl=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),gl=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",fl),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const yl=document.createElement("style");yl.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(yl),console.log("=== main.tsx carregando AppWithAuth com sistema de idiomas ===");X.createRoot(document.getElementById("root")).render(J.jsx(ee,{children:J.jsx(ml,{})}));
