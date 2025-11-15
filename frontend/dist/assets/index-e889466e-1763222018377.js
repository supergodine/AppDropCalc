import{r as e,b as t}from"./vendor-5fcaeebf-1763222018377.js";import{u as r,N as n,L as a,a as s,b as o,B as i,R as l,c}from"./router-0b9136c3-1763222018377.js";import{m as d,C as u,T as h,Z as p,A as m,U as g,M as f,L as y,E as b,a as v,b as x,c as w,S as C,G as j,d as S,e as N,f as E,H as I,g as T,X as _,h as P,i as A,D as R,j as k,k as O,P as D,l as L,n as U}from"./ui-4fab3ca0-1763222018377.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var M={exports:{}},B={},F=e,H=Symbol.for("react.element"),V=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,$=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,a={},s=null,o=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)z.call(t,n)&&!G.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:H,type:e,key:s,ref:o,props:a,_owner:$.current}}B.Fragment=V,B.jsx=q,B.jsxs=q,M.exports=B;var W=M.exports,K={},J=t;K.createRoot=J.createRoot,K.hydrateRoot=J.hydrateRoot;const X={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},Z=e.createContext(void 0),Y=({children:t})=>{const[r,n]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&n(e)},[]);const a={language:r,setLanguage:e=>{n(e),localStorage.setItem("language",e)},t:e=>X[r][e]||e};return W.jsx(Z.Provider,{value:a,children:t})};let Q,ee,te,re={data:""},ne=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||re},ae=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,se=/\/\*[^]*?\*\/|  +/g,oe=/\n+/g,ie=(e,t)=>{let r="",n="",a="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+o+";":n+="f"==s[1]?ie(o,s):s+"{"+ie(o,"k"==s[1]?"":t)+"}":"object"==typeof o?n+=ie(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=ie.p?ie.p(s,o):s+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+n},le={},ce=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+ce(e[r]);return t}return e},de=(e,t,r,n,a)=>{let s=ce(e),o=le[s]||(le[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!le[o]){let t=s!==e?e:(e=>{let t,r,n=[{}];for(;t=ae.exec(e.replace(se,""));)t[4]?n.shift():t[3]?(r=t[3].replace(oe," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(oe," ").trim();return n[0]})(e);le[o]=ie(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let i=r&&le.g?le.g:null;return r&&(le.g=le[o]),((e,t,r,n)=>{n?t.data=t.data.replace(n,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(le[o],t,n,i),o};function ue(e){let t=this||{},r=e.call?e(t.p):e;return de(r.unshift?r.raw?((e,t,r)=>e.reduce((e,n,a)=>{let s=t[a];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":ie(e,""):!1===e?"":e}return e+n+(null==s?"":s)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,ne(t.target),t.g,t.o,t.k)}ue.bind({g:1});let he=ue.bind({k:1});function pe(e,t){let r=this||{};return function(){let n=arguments;function a(s,o){let i=Object.assign({},s),l=i.className||a.className;r.p=Object.assign({theme:ee&&ee()},i),r.o=/ *go\d+/.test(l),i.className=ue.apply(r,n)+(l?" "+l:""),t&&(i.ref=o);let c=e;return e[0]&&(c=i.as||e,delete i.as),te&&c[0]&&te(i),Q(c,i)}return t?t(a):a}}var me=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,ge=(()=>{let e=0;return()=>(++e).toString()})(),fe=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ye="default",be=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return be(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},ve=[],xe={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},we={},Ce=(e,t=ye)=>{we[t]=be(we[t]||xe,e),ve.forEach(([e,r])=>{e===t&&r(we[t])})},je=e=>Object.keys(we).forEach(t=>Ce(e,t)),Se=(e=ye)=>t=>{Ce(t,e)},Ne={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ee=e=>(t,r)=>{let n=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||ge()}))(t,e,r);return Se(n.toasterId||(e=>Object.keys(we).find(t=>we[t].toasts.some(t=>t.id===e)))(n.id))({type:2,toast:n}),n.id},Ie=(e,t)=>Ee("blank")(e,t);Ie.error=Ee("error"),Ie.success=Ee("success"),Ie.loading=Ee("loading"),Ie.custom=Ee("custom"),Ie.dismiss=(e,t)=>{let r={type:3,toastId:e};t?Se(t)(r):je(r)},Ie.dismissAll=e=>Ie.dismiss(void 0,e),Ie.remove=(e,t)=>{let r={type:4,toastId:e};t?Se(t)(r):je(r)},Ie.removeAll=e=>Ie.remove(void 0,e),Ie.promise=(e,t,r)=>{let n=Ie.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?me(t.success,e):void 0;return a?Ie.success(a,{id:n,...r,...null==r?void 0:r.success}):Ie.dismiss(n),e}).catch(e=>{let a=t.error?me(t.error,e):void 0;a?Ie.error(a,{id:n,...r,...null==r?void 0:r.error}):Ie.dismiss(n)}),e};var Te=(t,r="default")=>{let{toasts:n,pausedAt:a}=((t={},r=ye)=>{let[n,a]=e.useState(we[r]||xe),s=e.useRef(we[r]);e.useEffect(()=>(s.current!==we[r]&&a(we[r]),ve.push([r,a]),()=>{let e=ve.findIndex(([e])=>e===r);e>-1&&ve.splice(e,1)}),[r]);let o=n.toasts.map(e=>{var r,n,a;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==t?void 0:t.duration)||Ne[e.type],style:{...t.style,...null==(a=t[e.type])?void 0:a.style,...e.style}}});return{...n,toasts:o}})(t,r),s=e.useRef(new Map).current,o=e.useCallback((e,t=1e3)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),i({type:4,toastId:e})},t);s.set(e,r)},[]);e.useEffect(()=>{if(a)return;let e=Date.now(),t=n.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout(()=>Ie.dismiss(t.id,r),n);t.visible&&Ie.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[n,a,r]);let i=e.useCallback(Se(r),[r]),l=e.useCallback(()=>{i({type:5,time:Date.now()})},[i]),c=e.useCallback((e,t)=>{i({type:1,toast:{id:e,height:t}})},[i]),d=e.useCallback(()=>{a&&i({type:6,time:Date.now()})},[a,i]),u=e.useCallback((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:s}=t||{},o=n.filter(t=>(t.position||s)===(e.position||s)&&t.height),i=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<i&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[n]);return e.useEffect(()=>{n.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[n,o]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},_e=he`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Pe=he`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ae=he`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Re=pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Pe} 0.15s ease-out forwards;
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
    animation: ${Ae} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ke=he`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Oe=pe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ke} 1s linear infinite;
`,De=he`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Le=he`
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
}`,Ue=pe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${De} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Le} 0.2s ease-out forwards;
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
`,Me=pe("div")`
  position: absolute;
`,Be=pe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fe=he`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,He=pe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ve=({toast:t})=>{let{icon:r,type:n,iconTheme:a}=t;return void 0!==r?"string"==typeof r?e.createElement(He,null,r):r:"blank"===n?null:e.createElement(Be,null,e.createElement(Oe,{...a}),"loading"!==n&&e.createElement(Me,null,"error"===n?e.createElement(Re,{...a}):e.createElement(Ue,{...a})))},ze=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,$e=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Ge=pe("div")`
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
`,qe=pe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,We=e.memo(({toast:t,position:r,style:n,children:a})=>{let s=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,a]=fe()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ze(r),$e(r)];return{animation:t?`${he(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${he(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},o=e.createElement(Ve,{toast:t}),i=e.createElement(qe,{...t.ariaProps},me(t.message,t));return e.createElement(Ge,{className:t.className,style:{...s,...n,...t.style}},"function"==typeof a?a({icon:o,message:i}):e.createElement(e.Fragment,null,o,i))});!function(e,t,r,n){ie.p=t,Q=e,ee=r,te=n}(e.createElement);var Ke=({id:t,className:r,style:n,onHeightUpdate:a,children:s})=>{let o=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;a(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return e.createElement("div",{ref:o,className:r,style:n},s)},Je=ue`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Xe=({reverseOrder:t,position:r="top-center",toastOptions:n,gutter:a,children:s,toasterId:o,containerStyle:i,containerClassName:l})=>{let{toasts:c,handlers:d}=Te(n,o);return e.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(n=>{let o=n.position||r,i=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:fe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...a}})(o,d.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return e.createElement(Ke,{id:n.id,key:n.id,onHeightUpdate:d.updateHeight,className:n.visible?Je:"",style:i},"custom"===n.type?me(n.message,n):s?s(n):e.createElement(We,{toast:n,position:o}))}))},Ze=Ie;const Ye={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:Ye.getBaseURL(),authSignup:Ye.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[Ye.auth.signup,Ye.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const Qe=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},et={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<e.length;a+=3){const t=e[a],s=a+1<e.length,o=s?e[a+1]:0,i=a+2<e.length,l=i?e[a+2]:0,c=t>>2,d=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,h=63&l;i||(h=64,s||(u=64)),n.push(r[c],r[d],r[u],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){const s=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&s)}else if(a>239&&a<365){const s=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<e.length;){const t=r[e.charAt(a++)],s=a<e.length?r[e.charAt(a)]:0;++a;const o=a<e.length?r[e.charAt(a)]:64;++a;const i=a<e.length?r[e.charAt(a)]:64;if(++a,null==t||null==s||null==o||null==i)throw new tt;const l=t<<2|s>>4;if(n.push(l),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==i){const e=o<<6&192|i;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class tt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rt=function(e){return function(e){const t=Qe(e);return et.encodeByteArray(t,!0)}(e).replace(/\./g,"")},nt=function(e){try{return et.decodeString(e,!0)}catch(re){console.error("base64Decode failed: ",re)}return null};
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
const at=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,st=()=>{try{return at()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(re){return}const t=e&&nt(e[1]);return t&&JSON.parse(t)})()}catch(re){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${re}`)}},ot=()=>st()?.config,it=e=>st()?.[`_${e}`];
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
class lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
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
 */function ct(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const dt={};let ut=!1;function ht(e,t){if("undefined"==typeof window||"undefined"==typeof document||!ct(window.location.host)||dt[e]===t||dt[e]||ut)return;function r(e){return`__firebase__banner__${e}`}dt[e]=t;const n="__firebase__banner",a=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(dt))dt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{ut=!0,function(){const e=document.getElementById(n);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(n),t=r("text"),o=document.getElementById(t)||document.createElement("span"),i=r("learnmore"),l=document.getElementById(i)||document.createElement("a"),c=r("preprendIcon"),d=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,i);const r=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(d,c),t.append(d,o,l,r),document.body.appendChild(t)}a?(o.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function pt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class mt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gt.prototype.create)}}class gt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,a=this.errors[e],s=a?function(e,t){return e.replace(ft,(e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`})}(a,r):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new mt(n,o,r)}}const ft=/\{\$([^}]+)}/g;function yt(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const a of r){if(!n.includes(a))return!1;const r=e[a],s=t[a];if(bt(r)&&bt(s)){if(!yt(r,s))return!1}else if(r!==s)return!1}for(const a of n)if(!r.includes(a))return!1;return!0}function bt(e){return null!==e&&"object"==typeof e}
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
 */function vt(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}class xt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=wt),void 0===n.error&&(n.error=wt),void 0===n.complete&&(n.complete=wt);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(re){}}),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(re){"undefined"!=typeof console&&console.error&&console.error(re)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wt(){}
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const St="[DEFAULT]";
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
 */class Nt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new lt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(re){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(re){if(r)return null;throw re}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch(re){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(re){}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,s]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(a)&&s.resolve(n)}return n}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);const a=this.instances.get(r);return a&&e(a,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===St?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}var n;return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Et{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var It;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(It||(It={}));const Tt={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},_t=It.INFO,Pt={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},At=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),a=Pt[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)};class Rt{constructor(e){this.name=e,this._logLevel=_t,this._logHandler=At,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in It))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Tt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...e),this._logHandler(this,It.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...e),this._logHandler(this,It.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,It.INFO,...e),this._logHandler(this,It.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,It.WARN,...e),this._logHandler(this,It.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...e),this._logHandler(this,It.ERROR,...e)}}let kt,Ot;const Dt=new WeakMap,Lt=new WeakMap,Ut=new WeakMap,Mt=new WeakMap,Bt=new WeakMap;let Ft={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Lt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ut.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return zt(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ht(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ot||(Ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply($t(this),t),zt(Dt.get(this))}:function(...t){return zt(e.apply($t(this),t))}:function(t,...r){const n=e.call($t(this),t,...r);return Ut.set(n,t.sort?t.sort():[t]),zt(n)}}function Vt(e){return"function"==typeof e?Ht(e):(e instanceof IDBTransaction&&function(e){if(Lt.has(e))return;const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});Lt.set(e,t)}(e),t=e,(kt||(kt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Ft):e);var t}function zt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{t(zt(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Dt.set(t,e)}).catch(()=>{}),Bt.set(t,e),t}(e);if(Mt.has(e))return Mt.get(e);const t=Vt(e);return t!==e&&(Mt.set(e,t),Bt.set(t,e)),t}const $t=e=>Bt.get(e);const Gt=["get","getKey","getAll","getAllKeys","count"],qt=["put","add","delete","clear"],Wt=new Map;function Kt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Wt.get(t))return Wt.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,a=qt.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!Gt.includes(r))return;const s=async function(e,...t){const s=this.transaction(e,a?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),a&&s.done]))[0]};return Wt.set(t,s),s}Ft=(e=>({...e,get:(t,r,n)=>Kt(t,r)||e.get(t,r,n),has:(t,r)=>!!Kt(t,r)||e.has(t,r)}))(Ft);
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
class Jt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Xt="@firebase/app",Zt="0.14.5",Yt=new Rt("@firebase/app"),Qt="@firebase/app-compat",er="@firebase/analytics-compat",tr="@firebase/analytics",rr="@firebase/app-check-compat",nr="@firebase/app-check",ar="@firebase/auth",sr="@firebase/auth-compat",or="@firebase/database",ir="@firebase/data-connect",lr="@firebase/database-compat",cr="@firebase/functions",dr="@firebase/functions-compat",ur="@firebase/installations",hr="@firebase/installations-compat",pr="@firebase/messaging",mr="@firebase/messaging-compat",gr="@firebase/performance",fr="@firebase/performance-compat",yr="@firebase/remote-config",br="@firebase/remote-config-compat",vr="@firebase/storage",xr="@firebase/storage-compat",wr="@firebase/firestore",Cr="@firebase/ai",jr="@firebase/firestore-compat",Sr="firebase",Nr="[DEFAULT]",Er={[Xt]:"fire-core",[Qt]:"fire-core-compat",[tr]:"fire-analytics",[er]:"fire-analytics-compat",[nr]:"fire-app-check",[rr]:"fire-app-check-compat",[ar]:"fire-auth",[sr]:"fire-auth-compat",[or]:"fire-rtdb",[ir]:"fire-data-connect",[lr]:"fire-rtdb-compat",[cr]:"fire-fn",[dr]:"fire-fn-compat",[ur]:"fire-iid",[hr]:"fire-iid-compat",[pr]:"fire-fcm",[mr]:"fire-fcm-compat",[gr]:"fire-perf",[fr]:"fire-perf-compat",[yr]:"fire-rc",[br]:"fire-rc-compat",[vr]:"fire-gcs",[xr]:"fire-gcs-compat",[wr]:"fire-fst",[jr]:"fire-fst-compat",[Cr]:"fire-vertex","fire-js":"fire-js",[Sr]:"fire-js-all"},Ir=new Map,Tr=new Map,_r=new Map;function Pr(e,t){try{e.container.addComponent(t)}catch(re){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,re)}}function Ar(e){const t=e.name;if(_r.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;_r.set(t,e);for(const r of Ir.values())Pr(r,e);for(const r of Tr.values())Pr(r,e);return!0}function Rr(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function kr(e){return null!=e&&void 0!==e.settings}
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
 */const Or=new gt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Dr{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}
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
 */const Lr="12.5.0";function Ur(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const n={name:Nr,automaticDataCollectionEnabled:!0,...t},a=n.name;if("string"!=typeof a||!a)throw Or.create("bad-app-name",{appName:String(a)});if(r||(r=ot()),!r)throw Or.create("no-options");const s=Ir.get(a);if(s){if(yt(r,s.options)&&yt(n,s.config))return s;throw Or.create("duplicate-app",{appName:a})}const o=new Et(a);for(const l of _r.values())o.addComponent(l);const i=new Dr(r,n,o);return Ir.set(a,i),i}function Mr(e,t,r){let n=Er[e]??e;r&&(n+=`-${r}`);const a=n.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${n}" with version "${t}":`];return a&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Yt.warn(e.join(" "))}Ar(new jt(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}
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
 */const Br="firebase-heartbeat-store";let Fr=null;function Hr(){return Fr||(Fr=function(e,t,{blocked:r,upgrade:n,blocking:a,terminated:s}={}){const o=indexedDB.open(e,t),i=zt(o);return n&&o.addEventListener("upgradeneeded",e=>{n(zt(o.result),e.oldVersion,e.newVersion,zt(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),i.then(e=>{s&&e.addEventListener("close",()=>s()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),i}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Br)}catch(re){console.warn(re)}}}).catch(e=>{throw Or.create("idb-open",{originalErrorMessage:e.message})})),Fr}async function Vr(e,t){try{const r=(await Hr()).transaction(Br,"readwrite"),n=r.objectStore(Br);await n.put(t,zr(e)),await r.done}catch(re){if(re instanceof mt)Yt.warn(re.message);else{const t=Or.create("idb-set",{originalErrorMessage:re?.message});Yt.warn(t.message)}}}function zr(e){return`${e.name}!${e.options.appId}`}
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
 */class $r{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Gr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(re){Yt.warn(re)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Gr(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const a of e){const e=r.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),Wr(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Wr(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=rt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(re){return Yt.warn(re),""}}}function Gr(){return(new Date).toISOString().substring(0,10)}class qr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(re){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(r){t(r)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Hr()).transaction(Br),r=await t.objectStore(Br).get(zr(e));return await t.done,r}catch(re){if(re instanceof mt)Yt.warn(re.message);else{const t=Or.create("idb-get",{originalErrorMessage:re?.message});Yt.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Vr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Vr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Wr(e){return rt(JSON.stringify({version:2,heartbeats:e})).length}var Kr;function Jr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Kr="",Ar(new jt("platform-logger",e=>new Jt(e),"PRIVATE")),Ar(new jt("heartbeat",e=>new $r(e),"PRIVATE")),Mr(Xt,Zt,Kr),Mr(Xt,Zt,"esm2020"),Mr("fire-js","");const Xr=Jr,Zr=new gt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Yr=new Rt("@firebase/auth");function Qr(e,...t){Yr.logLevel<=It.ERROR&&Yr.error(`Auth (${Lr}): ${e}`,...t)}
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
 */function en(e,...t){throw sn(e,...t)}function tn(e,...t){return sn(e,...t)}function rn(e,t,r){const n={...Xr(),[t]:r};return new gt("auth","Firebase",n).create(t,{appName:e.name})}function nn(e){return rn(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function an(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&en(e,"argument-error"),rn(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sn(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Zr.create(e,...t)}function on(e,t,...r){if(!e)throw sn(t,...r)}function ln(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qr(t),new Error(t)}function cn(e,t){e||ln(t)}
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
 */function dn(){return"undefined"!=typeof self&&self.location?.href||""}function un(){return"undefined"!=typeof self&&self.location?.protocol||null}
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
 */function hn(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==un()&&"https:"!==un()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class pn{constructor(e,t){this.shortDelay=e,this.longDelay=t,cn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return hn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function mn(e,t){cn(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
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
 */class gn{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const fn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},yn=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bn=new pn(3e4,6e4);
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
 */function vn(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function xn(e,t,r,n,a={}){return wn(e,a,async()=>{let a={},s={};n&&("GET"===t?s=n:a={body:JSON.stringify(n)});const o=vt({key:e.config.apiKey,...s}).slice(1),i=await e._getAdditionalHeaders();i["Content-Type"]="application/json",e.languageCode&&(i["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:i,...a};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ct(e.emulatorConfig.host)&&(l.credentials="include"),gn.fetch()(await Cn(e,e.config.apiHost,r,o),l)})}async function wn(e,t,r){e._canInitEmulator=!1;const n={...fn,...t};try{const t=new jn(e),a=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const s=await a.json();if("needConfirmation"in s)throw Sn(e,"account-exists-with-different-credential",s);if(a.ok&&!("errorMessage"in s))return s;{const t=a.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Sn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw Sn(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw Sn(e,"user-disabled",s);const i=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rn(e,i,o);en(e,i)}}catch(re){if(re instanceof mt)throw re;en(e,"network-request-failed",{message:String(re)})}}async function Cn(e,t,r,n){const a=`${t}${r}?${n}`,s=e,o=s.config.emulator?mn(e.config,a):`${e.config.apiScheme}://${a}`;if(yn.includes(r)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}class jn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tn(this.auth,"network-request-failed")),bn.get())})}}function Sn(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const a=tn(e,t,n);return a.customData._tokenResponse=r,a}
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
 */async function Nn(e,t){return xn(e,"POST","/v1/accounts:lookup",t)}
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
 */function En(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(re){}}function In(e){return 1e3*Number(e)}function Tn(e){const[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const e=nt(r);return e?JSON.parse(e):(Qr("Failed to decode base64 JWT payload"),null)}catch(re){return Qr("Caught error parsing JWT payload as JSON",re?.toString()),null}}function _n(e){const t=Tn(e);return on(t,"internal-error"),on(void 0!==t.exp,"internal-error"),on(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Pn(e,t,r=!1){if(r)return t;try{return await t}catch(re){throw re instanceof mt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(re)&&e.auth.currentUser===e&&await e.auth.signOut(),re}}class An{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(re){return void("auth/network-request-failed"===re?.code&&this.schedule(!0))}this.schedule()}}
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
 */class Rn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function kn(e){const t=e.auth,r=await e.getIdToken(),n=await Pn(e,Nn(t,{idToken:r}));on(n?.users.length,t,"internal-error");const a=n.users[0];e._notifyReloadListener(a);const s=a.providerUserInfo?.length?On(a.providerUserInfo):[],o=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,s),i=e.isAnonymous,l=!(e.email&&a.passwordHash||o?.length),c=!!i&&l,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Rn(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}function On(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){on(e.idToken,"internal-error"),on(void 0!==e.idToken,"internal-error"),on(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):_n(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){on(0!==e.length,"internal-error");const t=_n(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(on(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:a}=await async function(e,t){const r=await wn(e,{},async()=>{const r=vt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:a}=e.config,s=await Cn(e,n,"/v1/token",`key=${a}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const i={method:"POST",headers:o,body:r};return e.emulatorConfig&&ct(e.emulatorConfig.host)&&(i.credentials="include"),gn.fetch()(s,i)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,n,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:a}=t,s=new Dn;return r&&(on("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(on("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),a&&(on("number"==typeof a,"internal-error",{appName:e}),s.expirationTime=a),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return ln("not implemented")}}
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
 */function Ln(e,t){on("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Un{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new An(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Rn(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return on(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Ct(e),n=await r.getIdToken(t),a=Tn(n);on(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const s="object"==typeof a.firebase?a.firebase:void 0,o=s?.sign_in_provider;return{claims:a,token:n,authTime:En(In(a.auth_time)),issuedAtTime:En(In(a.iat)),expirationTime:En(In(a.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Ct(e);await kn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(on(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){on(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await kn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kr(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await Pn(this,async function(e,t){return xn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,n=t.email??void 0,a=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,i=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:h,providerData:p,stsTokenManager:m}=t;on(d&&m,e,"internal-error");const g=Dn.fromJSON(this.name,m);on("string"==typeof d,e,"internal-error"),Ln(r,e.name),Ln(n,e.name),on("boolean"==typeof u,e,"internal-error"),on("boolean"==typeof h,e,"internal-error"),Ln(a,e.name),Ln(s,e.name),Ln(o,e.name),Ln(i,e.name),Ln(l,e.name),Ln(c,e.name);const f=new Un({uid:d,auth:e,email:n,emailVerified:u,displayName:r,isAnonymous:h,photoURL:s,phoneNumber:a,tenantId:o,stsTokenManager:g,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(f.providerData=p.map(e=>({...e}))),i&&(f._redirectEventId=i),f}static async _fromIdTokenResponse(e,t,r=!1){const n=new Dn;n.updateFromServerResponse(t);const a=new Un({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await kn(a),a}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];on(void 0!==n.localId,"internal-error");const a=void 0!==n.providerUserInfo?On(n.providerUserInfo):[],s=!(n.email&&n.passwordHash||a?.length),o=new Dn;o.updateFromIdToken(r);const i=new Un({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:a,metadata:new Rn(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||a?.length)};return Object.assign(i,l),i}}
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
 */const Mn=new Map;function Bn(e){cn(e instanceof Function,"Expected a class definition");let t=Mn.get(e);return t?(cn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mn.set(e,t),t)}
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
 */class Fn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fn.type="NONE";const Hn=Fn;
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
 */function Vn(e,t,r){return`firebase:${e}:${t}:${r}`}class zn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:a}=this.auth;this.fullUserKey=Vn(this.userKey,n.apiKey,a),this.fullPersistenceKey=Vn("persistence",n.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Nn(this.auth,{idToken:e}).catch(()=>{});return t?Un._fromGetAccountInfoResponse(this.auth,t,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zn(Bn(Hn),e,r);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let a=n[0]||Bn(Hn);const s=Vn(r,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){let r;if("string"==typeof t){const n=await Nn(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Un._fromGetAccountInfoResponse(e,n,t)}else r=Un._fromJSON(e,t);l!==a&&(o=r),a=l;break}}catch{}const i=n.filter(e=>e._shouldAllowMigration);return a._shouldAllowMigration&&i.length?(a=i[0],o&&await a._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==a)try{await e._remove(s)}catch{}})),new zn(a,e,r)):new zn(a,e,r)}}
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
 */function $n(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Kn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xn(t))return"Blackberry";if(Zn(t))return"Webos";if(qn(t))return"Safari";if((t.includes("chrome/")||Wn(t))&&!t.includes("edge/"))return"Chrome";if(Jn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===r?.length)return r[1]}return"Other"}function Gn(e=pt()){return/firefox\//i.test(e)}function qn(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wn(e=pt()){return/crios\//i.test(e)}function Kn(e=pt()){return/iemobile/i.test(e)}function Jn(e=pt()){return/android/i.test(e)}function Xn(e=pt()){return/blackberry/i.test(e)}function Zn(e=pt()){return/webos/i.test(e)}function Yn(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Qn(){return function(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function ea(e=pt()){return Yn(e)||Jn(e)||Zn(e)||Xn(e)||/windows phone/i.test(e)||Kn(e)}
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
 */function ta(e,t=[]){let r;switch(e){case"Browser":r=$n(pt());break;case"Worker":r=`${$n(pt())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Lr}/${n}`}
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
 */class ra{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,n)=>{try{r(e(t))}catch(re){n(re)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(re){t.reverse();for(const r of t)try{r()}catch(je){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:re?.message})}}}
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
 */class na{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}
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
 */class aa{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oa(this),this.idTokenSubscription=new oa(this),this.beforeStateQueue=new ra(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(re){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Nn(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(kr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,a=r?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==a||!s?.user||(r=s.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(re){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(re))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return on(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(re){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kn(e)}catch(re){if("auth/network-request-failed"!==re?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kr(this.app))return Promise.reject(nn(this));const t=e?Ct(e):null;return t&&on(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&on(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kr(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kr(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return xn(e,"GET","/v2/passwordPolicy",vn(e,t))}
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
 */(this),t=new na(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return xn(e,"POST","/v2/accounts:revokeToken",vn(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bn(e)||this._popupRedirectResolver;on(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Bn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(on(o,this,"internal-error"),o.then(()=>{s||a(this.currentUser)}),"function"==typeof t){const a=e.addObserver(t,r,n);return()=>{s=!0,a()}}{const r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return on(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ta(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(kr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){Yr.logLevel<=It.WARN&&Yr.warn(`Auth (${Lr}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function sa(e){return Ct(e)}class oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new xt(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return on(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function la(e,t,r){const n=sa(e);on(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const a=!!r?.disableWarnings,s=ca(t),{host:o,port:i}=function(e){const t=ca(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const e=a[1];return{host:e,port:da(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:da(t)}}}(t),l=null===i?"":`:${i}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:i,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator)return on(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),void on(yt(c,n.config.emulator)&&yt(d,n.emulatorConfig),n,"emulator-config-failed");n.config.emulator=c,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,ct(o)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${s}//${o}${l}`),ht("Auth",!0)):a||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ca(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function da(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ua{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,t){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}
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
 */async function ha(e,t){return async function(e,t,r,n,a={}){const s=await xn(e,t,r,n,a);return"mfaPendingCredential"in s&&en(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",vn(e,t))}
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
 */class pa extends ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):en("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n,...a}=t;if(!r||!n)return null;const s=new pa(r,n);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}_getIdTokenResponse(e){return ha(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ha(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ha(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vt(t)}return e}}
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
 */class ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ga extends ma{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class fa extends ga{constructor(){super("facebook.com")}static credential(e){return pa._fromParams({providerId:fa.PROVIDER_ID,signInMethod:fa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fa.credentialFromTaggedObject(e)}static credentialFromError(e){return fa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fa.credential(e.oauthAccessToken)}catch{return null}}}fa.FACEBOOK_SIGN_IN_METHOD="facebook.com",fa.PROVIDER_ID="facebook.com";
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
class ya extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pa._fromParams({providerId:ya.PROVIDER_ID,signInMethod:ya.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ya.credentialFromTaggedObject(e)}static credentialFromError(e){return ya.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ya.credential(t,r)}catch{return null}}}ya.GOOGLE_SIGN_IN_METHOD="google.com",ya.PROVIDER_ID="google.com";
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
class ba extends ga{constructor(){super("github.com")}static credential(e){return pa._fromParams({providerId:ba.PROVIDER_ID,signInMethod:ba.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ba.credentialFromTaggedObject(e)}static credentialFromError(e){return ba.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ba.credential(e.oauthAccessToken)}catch{return null}}}ba.GITHUB_SIGN_IN_METHOD="github.com",ba.PROVIDER_ID="github.com";
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
class va extends ga{constructor(){super("twitter.com")}static credential(e,t){return pa._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return va.credentialFromTaggedObject(e)}static credentialFromError(e){return va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return va.credential(t,r)}catch{return null}}}va.TWITTER_SIGN_IN_METHOD="twitter.com",va.PROVIDER_ID="twitter.com";
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
class xa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const a=await Un._fromIdTokenResponse(e,r,n),s=wa(r);return new xa({user:a,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=wa(r);return new xa({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function wa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Ca extends mt{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Ca.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Ca(e,t,r,n)}}function ja(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw Ca._fromErrorAndOperation(e,r,t,n);throw r})}const Sa="__sak";
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
 */class Na{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Ea extends Na{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ea(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},a=this.storage.getItem(r);Qn()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ea.type="LOCAL";const Ia=Ea;
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
 */class Ta extends Na{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ta.type="SESSION";const _a=Ta;
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
class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:a}=t.data,s=this.handlersMap[n];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const o=Array.from(s).map(async e=>e(t.origin,a)),i=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:i})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Aa(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
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
 */Pa.receivers=[];class Ra{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,s;return new Promise((o,i)=>{const l=Aa("",20);n.port1.start();const c=setTimeout(()=>{i(new Error("unsupported_event"))},r);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{i(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),o(t.data.response);break;default:clearTimeout(c),clearTimeout(a),i(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
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
 */function ka(){return window}
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
function Oa(){return void 0!==ka().WorkerGlobalScope&&"function"==typeof ka().importScripts}
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
const Da="firebaseLocalStorageDb",La="firebaseLocalStorage",Ua="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ba(e,t){return e.transaction([La],t?"readwrite":"readonly").objectStore(La)}function Fa(){const e=indexedDB.open(Da,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(La,{keyPath:Ua})}catch(re){r(re)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(La)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(Da);return new Ma(e).toPromise()}(),t(await Fa()))})})}async function Ha(e,t,r){const n=Ba(e,!0).put({[Ua]:t,value:r});return new Ma(n).toPromise()}function Va(e,t){const r=Ba(e,!0).delete(t);return new Ma(r).toPromise()}class za{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Fa()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(re){if(t++>3)throw re;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(Oa()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Ra(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await Ha(e,Sa,"1"),await Va(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ha(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=Ba(e,!1).get(t),n=await new Ma(r).toPromise();return void 0===n?null:n.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Va(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ba(e,!1).getAll();return new Ma(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:n,value:a}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}za.type="LOCAL";const $a=za;
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
function Ga(e,t){return t?Bn(t):(on(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new pn(3e4,6e4);class qa extends ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ha(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ha(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ha(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wa(e){
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
return async function(e,t,r=!1){if(kr(e.app))return Promise.reject(nn(e));const n="signIn",a=await ja(e,n,t),s=await xa._fromIdTokenResponse(e,n,a);return r||await e._updateCurrentUser(s.user),s}(e.auth,new qa(e),e.bypassAuthState)}function Ka(e){const{auth:t,user:r}=e;return on(r,t,"internal-error"),
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
async function(e,t,r=!1){const{auth:n}=e;if(kr(n.app))return Promise.reject(nn(n));const a="reauthenticate";try{const s=await Pn(e,ja(n,a,t,e),r);on(s.idToken,n,"internal-error");const o=Tn(s.idToken);on(o,n,"internal-error");const{sub:i}=o;return on(e.uid===i,n,"user-mismatch"),xa._forOperation(e,a,s)}catch(re){throw"auth/user-not-found"===re?.code&&en(n,"user-mismatch"),re}}(r,new qa(e),e.bypassAuthState)}async function Ja(e){const{auth:t,user:r}=e;return on(r,t,"internal-error"),async function(e,t,r=!1){const n=await Pn(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return xa._forOperation(e,"link",n)}(r,new qa(e),e.bypassAuthState)}
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
 */class Xa{constructor(e,t,r,n,a=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(re){this.reject(re)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:a,error:s,type:o}=e;if(s)return void this.reject(s);const i={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(i))}catch(re){this.reject(re)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wa;case"linkViaPopup":case"linkViaRedirect":return Ja;case"reauthViaPopup":case"reauthViaRedirect":return Ka;default:en(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Za=new pn(2e3,1e4);class Ya extends Xa{constructor(e,t,r,n,a){super(e,t,n,a),this.provider=r,this.authWindow=null,this.pollId=null,Ya.currentPopupAction&&Ya.currentPopupAction.cancel(),Ya.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return on(e,this.auth,"internal-error"),e}async onExecution(){cn(1===this.filter.length,"Popup operations only handle one event");const e=Aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ya.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Za.get())};e()}}Ya.currentPopupAction=null;
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
const Qa=new Map;class es extends Xa{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Qa.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=ns(t),n=rs(e);if(!(await n._isAvailable()))return!1;const a="true"===await n._get(r);return await n._remove(r),a}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(re){e=()=>Promise.reject(re)}Qa.set(this.auth._key(),e)}return this.bypassAuthState||Qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ts(e,t){Qa.set(e._key(),t)}function rs(e){return Bn(e._redirectPersistence)}function ns(e){return Vn("pendingRedirect",e.config.apiKey,e.name)}
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
 */function as(e,t,r){return async function(e,t,r){if(kr(e.app))return Promise.reject(nn(e));const n=sa(e);an(e,t,ma),await n._initializationPromise;const a=Ga(n,r);return await async function(e,t){return rs(e)._set(ns(t),"true")}(a,n),a._openRedirect(n,t,"signInViaRedirect")}(e,t,r)}async function ss(e,t,r=!1){if(kr(e.app))return Promise.reject(nn(e));const n=sa(e),a=Ga(n,t),s=new es(n,a,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}
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
 */class os{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ls(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ls(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(tn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(is(e))}saveEventToCache(e){this.cachedEventUids.add(is(e)),this.lastProcessedEventTime=Date.now()}}function is(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function ls({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
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
const cs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ds=/^https?/;async function us(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return xn(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(hs(r))return}catch{}en(e,"unauthorized-domain")}function hs(e){const t=dn(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===n}if(!ds.test(r))return!1;if(cs.test(e))return n===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}
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
 */const ps=new pn(3e4,6e4);function ms(){const e=ka().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function gs(e){return new Promise((t,r)=>{function n(){ms(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ms(),r(tn(e,"network-request-failed"))},timeout:ps.get()})}if(ka().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!ka().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ka()[t]=()=>{gapi.load?n():r(tn(e,"network-request-failed"))},(a=`${ia.gapiScript}?onload=${t}`,ia.loadJS(a)).catch(e=>r(e))}n()}var a}).catch(e=>{throw fs=null,e})}let fs=null;
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
const ys=new pn(5e3,15e3),bs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xs(e){const t=e.config;on(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?mn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:Lr},a=vs.get(e.config.apiHost);a&&(n.eid=a);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${vt(n).slice(1)}`}async function ws(e){const t=await function(e){return fs=fs||gs(e),fs}(e),r=ka().gapi;return on(r,e,"internal-error"),t.open({where:document.body,url:xs(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bs,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});const a=tn(e,"network-request-failed"),s=ka().setTimeout(()=>{n(a)},ys.get());function o(){ka().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(a)})}))}
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
 */const Cs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class js{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(re){}}}function Ss(e,t,r,n=500,a=600){const s=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let i="";const l={...Cs,width:n.toString(),height:a.toString(),top:s,left:o},c=pt().toLowerCase();r&&(i=Wn(c)?"_blank":r),Gn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=pt()){return Yn(e)&&!!window.navigator?.standalone}(c)&&"_self"!==i)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
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
 */(t||"",i),new js(null);const u=window.open(t||"",i,d);on(u,e,"popup-blocked");try{u.focus()}catch(re){}return new js(u)}const Ns="__/auth/handler",Es="emulator/auth/handler",Is=encodeURIComponent("fac");async function Ts(e,t,r,n,a,s){on(e.config.authDomain,e,"auth-domain-config-required"),on(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Lr,eventId:a};if(t instanceof ma){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ga){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const i=o;for(const d of Object.keys(i))void 0===i[d]&&delete i[d];const l=await e._getAppCheckToken(),c=l?`#${Is}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ns}`;return mn(e,Es)}
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
 */(e)}?${vt(i).slice(1)}${c}`}const _s="webStorageSupport";const Ps=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_a,this._completeRedirectFn=ss,this._overrideRedirectResult=ts}async _openPopup(e,t,r,n){cn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Ss(e,await Ts(e,t,r,dn(),n),Aa())}async _openRedirect(e,t,r,n){await this._originValidation(e);return function(e){ka().location.href=e}(await Ts(e,t,r,dn(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(cn(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ws(e),r=new os(e);return t.register("authEvent",t=>{on(t?.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_s,{type:_s},r=>{const n=r?.[0]?.[_s];void 0!==n&&t(!!n),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=us(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ea()||qn()||Yn()}};var As="@firebase/auth",Rs="1.11.1";
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
class ks{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){on(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Os=it("authIdTokenMaxAge")||300;let Ds=null;var Ls;!function(e){ia=e}({loadJS:e=>new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=tn("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(n)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Ls="Browser",Ar(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;on(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const i={apiKey:s,authDomain:o,clientPlatform:Ls,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ta(Ls)},l=new aa(r,n,a,i);return function(e,t){const r=t?.persistence||[],n=(Array.isArray(r)?r:[r]).map(Bn);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new jt("auth-internal",e=>(e=>new ks(e))(sa(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Mr(As,Rs,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Ls)),Mr(As,Rs,"esm2020");
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
Mr("firebase","12.5.0","app");const Us={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:Us.apiKey?"✅ Configurado":"❌ Faltando",authDomain:Us.authDomain,projectId:Us.projectId});const Ms=function(e=function(e=Nr){const t=Ir.get(e);if(!t&&e===Nr&&ot())return Ur();if(!t)throw Or.create("no-app",{appName:e});return t}()){const t=Rr(e,"auth");if(t.isInitialized())return t.getImmediate();const r=
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
function(e,t){const r=Rr(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(yt(r.getOptions(),t??{}))return e;en(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Ps,persistence:[$a,Ia,_a]}),n=it("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(n,location.origin);if(location.origin===e.origin){const t=(a=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Os)return;const n=t?.token;Ds!==n&&(Ds=n,await fetch(a,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,r){Ct(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,n){Ct(e).onIdTokenChanged(t,r,n)}(r,e=>t(e))}}var a;const s=(o="auth",st()?.emulatorHosts?.[o]);var o;return s&&la(r,`http://${s}`),r}(Ur(Us)),Bs=new ya;Bs.addScope("email"),Bs.addScope("profile");const Fs=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,r){if(kr(e.app))return Promise.reject(tn(e,"operation-not-supported-in-this-environment"));const n=sa(e);an(e,t,ma);const a=Ga(n,r);return new Ya(n,"signInViaPopup",t,a).executeNotNull()}(Ms,Bs),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await as(Ms,Bs)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await sa(e)._initializationPromise,ss(e,t,!1)}(Ms);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=Ms.currentUser,r=t?await t.getIdToken():null,n=await fetch(Ye.auth.login,{method:"POST",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!n.ok)return this.createUserInBackend(e);const a=await n.json();return console.log("✅ Usuário sincronizado com backend"),a}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(Ye.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return Ct(e).signOut()}(Ms),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return Ms.currentUser}onAuthStateChange(e){return Ms.onAuthStateChanged(e)}};const Hs=new class{getBaseURL(){const e=Ye.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((r,n)=>{const a=new XMLHttpRequest,s=Ye.auth.login;a.open("POST",s,!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("Accept","application/json"),a.setRequestHeader("Cache-Control","no-cache"),a.onreadystatechange=function(){if(4===a.readyState)if(console.log("🔍 XHR Status:",a.status),console.log("🔍 XHR Response:",a.responseText),200===a.status)try{const e=JSON.parse(a.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),r(e.user)}catch(e){n(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(a.responseText);n(new Error(e.message||"Erro no login"))}catch(e){n(new Error("Credenciais inválidas"))}},a.onerror=function(){n(new Error("Erro de conexão"))},a.ontimeout=function(){n(new Error("Timeout na conexão"))},a.timeout=1e4;const o=JSON.stringify({email:e,password:t});a.send(o)})}catch(r){throw console.error("❌ Erro no login alternativo:",r),r}}async login(e,t){try{const n=Ye.auth.login;console.log("🔐 Login attempt:",{email:e,url:n});const a=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",a);const s=new AbortController,o=setTimeout(()=>s.abort(),1e4),i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:a,signal:s.signal});if(clearTimeout(o),console.log("📡 Response status:",i.status),console.log("📡 Response ok:",i.ok),console.log("📡 Response headers:",Object.fromEntries(i.headers.entries())),!i.ok){const e=await i.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",i.status),console.error("❌ Error response statusText:",i.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(r){t=e||t}throw 401===i.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await i.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(r){throw console.error("❌ Failed to parse response JSON:",r),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(n){if(console.error("❌ Erro no login completo:",n),"AbortError"===n.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===n.name&&n.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw n}}async register(e,t,r){try{this.clearPlanData();const n=Ye.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:n});const a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:r})});if(!a.ok){const e=await a.json();throw new Error(e.message||"Falha no registro")}return(await a.json()).user}catch(n){throw console.error("Erro no registro:",n),n}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await Fs.loginWithPopup(),t=await Fs.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",r),r}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await Fs.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await Fs.handleRedirectResult();if(!e)return null;const t=await Fs.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),r}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await Fs.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const r={basic:0,professional:1,premium:2};return r[t.type]>=r[e]}isAdmin(){const e=this.getCurrentUser();return"admin"===e?.role}},Vs=()=>{const[t,r]=e.useState(null),[n,a]=e.useState(!0),[s,o]=e.useState(null),[i,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=Hs.getCurrentUser(),t=Hs.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),r(e),l(t),e){const e=Hs.getUserPlan();console.log("📋 useAuth - Plano do usuário:",e),o(e)}else o(null);a(!1)},[]);return{user:t,loading:n,plan:s,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await Hs.logout(),r(null),o(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),Hs.updateUserPlan(e),o(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=Hs.getCurrentUser(),t=Hs.isAuthenticated();r(e),l(t),o(e?Hs.getUserPlan():null)},isAuthenticated:i,isAdmin:Hs.isAdmin(),checkPlanAccess:e=>Hs.checkPlanAccess(e)}},zs=({children:e})=>{const{isAuthenticated:t,loading:a}=Vs(),s=r();return a?W.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:W.jsxs("div",{className:"text-center",children:[W.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),W.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):t?W.jsx(W.Fragment,{children:e}):W.jsx(n,{to:"/login",state:{from:s},replace:!0})},$s=()=>W.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[W.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),W.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),W.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),W.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),W.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[W.jsxs(d.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[W.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:W.jsx(u,{className:"w-10 h-10 text-white"})}),W.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),W.jsxs(d.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",W.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",W.jsx("br",{}),W.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[W.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[W.jsx(h,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),W.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),W.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),W.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[W.jsx(p,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),W.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),W.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),W.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[W.jsx(u,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),W.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),W.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[W.jsx(a,{to:"/login",children:W.jsxs(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",W.jsx(m,{className:"w-5 h-5"})]})}),W.jsx(a,{to:"/login?mode=signup",children:W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),Gs=()=>{const[t,r]=e.useState(""),[n,a]=e.useState(""),[i,l]=e.useState(""),[c,u]=e.useState(!0),[h,p]=e.useState(!1),[m,w]=e.useState(!1),C=s(),[j]=o(),{refreshAuth:S}=Vs();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",j.get("mode")),console.log("authService.isAuthenticated():",Hs.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await Hs.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),Ze.success(`Bem-vindo, ${e.name}! 🎉`),void C("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),Ze.error("Erro ao processar login Google")}})();const e=j.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void u(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[C,j]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",m),W.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[W.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[W.jsx(d.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),W.jsx(d.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),W.jsx(d.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),W.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[W.jsxs("div",{className:"text-center mb-10",children:[W.jsx(d.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:W.jsx("span",{className:"text-3xl",children:"💰"})}),W.jsx(d.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),W.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&W.jsx(d.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),W.jsxs(d.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[W.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&n&&(c||i)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?n.length<6?(Ze.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&i.length<2&&(Ze.error("O nome deve ter pelo menos 2 caracteres"),1)):(Ze.error("Por favor, insira um e-mail válido"),0):(Ze.error("Por favor, preencha todos os campos"),0)){w(!0);try{if(c){let e=!1,s=null;try{console.log("🔄 Tentando login principal..."),s=await Hs.login(t,n),e=!0}catch(r){console.log("❌ Login principal falhou:",r.message),console.log("🔄 Tentando método alternativo...");try{s=await Hs.loginAlternative(t,n),e=!0,console.log("✅ Login alternativo funcionou!")}catch(a){throw console.error("❌ Login alternativo também falhou:",a.message),a}}e&&s&&(localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),Ze.success("Login realizado com sucesso!"),C("/dashboard"))}else await Hs.register(i,t,n),Ze.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),S(),C("/dashboard")}catch(s){console.error("Auth error:",s);const e=s.message||"Erro inesperado. Tente novamente";Ze.error(e)}finally{w(!1)}}},className:"space-y-6",children:[!c&&W.jsxs("div",{children:[W.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),W.jsxs("div",{className:"relative",children:[W.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:W.jsx(g,{className:"h-5 w-5 text-gray-400"})}),W.jsx("input",{id:"name",type:"text",value:i,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),W.jsxs("div",{className:"relative",children:[W.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:W.jsx(f,{className:"h-5 w-5 text-gray-400"})}),W.jsx("input",{id:"email",type:"email",value:t,onChange:e=>r(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),W.jsxs("div",{className:"relative",children:[W.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:W.jsx(y,{className:"h-5 w-5 text-gray-400"})}),W.jsx("input",{id:"password",type:h?"text":"password",value:n,onChange:e=>a(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),W.jsx("button",{type:"button",onClick:()=>p(!h),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:h?W.jsx(b,{className:"h-5 w-5"}):W.jsx(v,{className:"h-5 w-5"})})]})]}),W.jsx(d.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:m,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:m?W.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):W.jsxs(W.Fragment,{children:[c?W.jsx(x,{className:"h-5 w-5"}):W.jsx(g,{className:"h-5 w-5"}),W.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),W.jsxs("div",{className:"mt-6",children:[W.jsxs("div",{className:"relative",children:[W.jsx("div",{className:"absolute inset-0 flex items-center",children:W.jsx("div",{className:"w-full border-t border-gray-300/30"})}),W.jsx("div",{className:"relative flex justify-center text-sm",children:W.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),W.jsxs(d.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(m)return;w(!0);const e=Ze.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await Hs.loginWithGoogle();Ze.dismiss(e),Ze.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),C("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),Ze.dismiss(e);let r="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?r="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?r="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(r="Erro de conexão. Verifique sua internet"),Ze.error(r)}finally{w(!1)}},disabled:m,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[W.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[W.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),W.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),W.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),W.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),W.jsx("span",{children:"Continuar com Google"})]})]}),c&&W.jsx("div",{className:"mt-6 text-center",children:W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>C("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),W.jsxs("div",{className:"mt-8 text-center",children:[W.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>u(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},qs=()=>(console.log("LoginSimple carregando..."),W.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[W.jsx("h1",{children:"LOGIN SIMPLES"}),W.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),W.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[W.jsxs("div",{style:{marginBottom:"15px"},children:[W.jsx("label",{children:"Email:"}),W.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),W.jsxs("div",{style:{marginBottom:"15px"},children:[W.jsx("label",{children:"Senha:"}),W.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),W.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]}));function Ws(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ks}=Object.prototype,{getPrototypeOf:Js}=Object,{iterator:Xs,toStringTag:Zs}=Symbol,Ys=(Qs=Object.create(null),e=>{const t=Ks.call(e);return Qs[t]||(Qs[t]=t.slice(8,-1).toLowerCase())});var Qs;const eo=e=>(e=e.toLowerCase(),t=>Ys(t)===e),to=e=>t=>typeof t===e,{isArray:ro}=Array,no=to("undefined");function ao(e){return null!==e&&!no(e)&&null!==e.constructor&&!no(e.constructor)&&io(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const so=eo("ArrayBuffer");const oo=to("string"),io=to("function"),lo=to("number"),co=e=>null!==e&&"object"==typeof e,uo=e=>{if("object"!==Ys(e))return!1;const t=Js(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Zs in e||Xs in e)},ho=eo("Date"),po=eo("File"),mo=eo("Blob"),go=eo("FileList"),fo=eo("URLSearchParams"),[yo,bo,vo,xo]=["ReadableStream","Request","Response","Headers"].map(eo);function wo(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,a;if("object"!=typeof e&&(e=[e]),ro(e))for(n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else{if(ao(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let o;for(n=0;n<s;n++)o=a[n],t.call(null,e[o],o,e)}}function Co(e,t){if(ao(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n,a=r.length;for(;a-- >0;)if(n=r[a],t===n.toLowerCase())return n;return null}const jo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,So=e=>!no(e)&&e!==jo;const No=(Eo="undefined"!=typeof Uint8Array&&Js(Uint8Array),e=>Eo&&e instanceof Eo);var Eo;const Io=eo("HTMLFormElement"),To=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),_o=eo("RegExp"),Po=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};wo(r,(r,a)=>{let s;!1!==(s=t(r,a,e))&&(n[a]=s||r)}),Object.defineProperties(e,n)};const Ao=eo("AsyncFunction"),Ro=(ko="function"==typeof setImmediate,Oo=io(jo.postMessage),ko?setImmediate:Oo?(Do=`axios@${Math.random()}`,Lo=[],jo.addEventListener("message",({source:e,data:t})=>{e===jo&&t===Do&&Lo.length&&Lo.shift()()},!1),e=>{Lo.push(e),jo.postMessage(Do,"*")}):e=>setTimeout(e));var ko,Oo,Do,Lo;const Uo="undefined"!=typeof queueMicrotask?queueMicrotask.bind(jo):"undefined"!=typeof process&&process.nextTick||Ro,Mo={isArray:ro,isArrayBuffer:so,isBuffer:ao,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||io(e.append)&&("formdata"===(t=Ys(e))||"object"===t&&io(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&so(e.buffer),t},isString:oo,isNumber:lo,isBoolean:e=>!0===e||!1===e,isObject:co,isPlainObject:uo,isEmptyObject:e=>{if(!co(e)||ao(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(re){return!1}},isReadableStream:yo,isRequest:bo,isResponse:vo,isHeaders:xo,isUndefined:no,isDate:ho,isFile:po,isBlob:mo,isRegExp:_o,isFunction:io,isStream:e=>co(e)&&io(e.pipe),isURLSearchParams:fo,isTypedArray:No,isFileList:go,forEach:wo,merge:function e(){const{caseless:t,skipUndefined:r}=So(this)&&this||{},n={},a=(a,s)=>{const o=t&&Co(n,s)||s;uo(n[o])&&uo(a)?n[o]=e(n[o],a):uo(a)?n[o]=e({},a):ro(a)?n[o]=a.slice():r&&no(a)||(n[o]=a)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&wo(arguments[s],a);return n},extend:(e,t,r,{allOwnKeys:n}={})=>(wo(t,(t,n)=>{r&&io(t)?e[n]=Ws(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let a,s,o;const i={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),s=a.length;s-- >0;)o=a[s],n&&!n(o,e,t)||i[o]||(t[o]=e[o],i[o]=!0);e=!1!==r&&Js(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:Ys,kindOfTest:eo,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(ro(e))return e;let t=e.length;if(!lo(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Xs]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:Io,hasOwnProperty:To,hasOwnProp:To,reduceDescriptors:Po,freezeMethods:e=>{Po(e,(t,r)=>{if(io(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];io(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach(e=>{r[e]=!0})};return ro(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Co,global:jo,isContextDefined:So,isSpecCompliantForm:function(e){return!!(e&&io(e.append)&&"FormData"===e[Zs]&&e[Xs])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(co(e)){if(t.indexOf(e)>=0)return;if(ao(e))return e;if(!("toJSON"in e)){t[n]=e;const a=ro(e)?[]:{};return wo(e,(e,t)=>{const s=r(e,n+1);!no(s)&&(a[t]=s)}),t[n]=void 0,a}}return e};return r(e,0)},isAsyncFn:Ao,isThenable:e=>e&&(co(e)||io(e))&&io(e.then)&&io(e.catch),setImmediate:Ro,asap:Uo,isIterable:e=>null!=e&&io(e[Xs])};function Bo(e,t,r,n,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),a&&(this.response=a,this.status=a.status?a.status:null)}Mo.inherits(Bo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Mo.toJSONObject(this.config),code:this.code,status:this.status}}});const Fo=Bo.prototype,Ho={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ho[e]={value:e}}),Object.defineProperties(Bo,Ho),Object.defineProperty(Fo,"isAxiosError",{value:!0}),Bo.from=(e,t,r,n,a,s)=>{const o=Object.create(Fo);Mo.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const i=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Bo.call(o,i,l,r,n,a),e&&null==o.cause&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};function Vo(e){return Mo.isPlainObject(e)||Mo.isArray(e)}function zo(e){return Mo.endsWith(e,"[]")?e.slice(0,-2):e}function $o(e,t,r){return e?e.concat(t).map(function(e,t){return e=zo(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const Go=Mo.toFlatObject(Mo,{},null,function(e){return/^is[A-Z]/.test(e)});function qo(e,t,r){if(!Mo.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=Mo.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Mo.isUndefined(t[e])})).metaTokens,a=r.visitor||c,s=r.dots,o=r.indexes,i=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Mo.isSpecCompliantForm(t);if(!Mo.isFunction(a))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Mo.isDate(e))return e.toISOString();if(Mo.isBoolean(e))return e.toString();if(!i&&Mo.isBlob(e))throw new Bo("Blob is not supported. Use a Buffer instead.");return Mo.isArrayBuffer(e)||Mo.isTypedArray(e)?i&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,a){let i=e;if(e&&!a&&"object"==typeof e)if(Mo.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(Mo.isArray(e)&&function(e){return Mo.isArray(e)&&!e.some(Vo)}(e)||(Mo.isFileList(e)||Mo.endsWith(r,"[]"))&&(i=Mo.toArray(e)))return r=zo(r),i.forEach(function(e,n){!Mo.isUndefined(e)&&null!==e&&t.append(!0===o?$o([r],n,s):null===o?r:r+"[]",l(e))}),!1;return!!Vo(e)||(t.append($o(a,r,s),l(e)),!1)}const d=[],u=Object.assign(Go,{defaultVisitor:c,convertValue:l,isVisitable:Vo});if(!Mo.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!Mo.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),Mo.forEach(r,function(r,s){!0===(!(Mo.isUndefined(r)||null===r)&&a.call(t,r,Mo.isString(s)?s.trim():s,n,u))&&e(r,n?n.concat(s):[s])}),d.pop()}}(e),t}function Wo(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Ko(e,t){this._pairs=[],e&&qo(e,this,t)}const Jo=Ko.prototype;function Xo(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Zo(e,t,r){if(!t)return e;const n=r&&r.encode||Xo;Mo.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let s;if(s=a?a(t,r):Mo.isURLSearchParams(t)?t.toString():new Ko(t,r).toString(n),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}Jo.append=function(e,t){this._pairs.push([e,t])},Jo.toString=function(e){const t=e?function(t){return e.call(this,t,Wo)}:Wo;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const Yo=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Mo.forEach(this.handlers,function(t){null!==t&&e(t)})}},Qo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ei={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Ko,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ti="undefined"!=typeof window&&"undefined"!=typeof document,ri="object"==typeof navigator&&navigator||void 0,ni=ti&&(!ri||["ReactNative","NativeScript","NS"].indexOf(ri.product)<0),ai="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,si=ti&&window.location.href||"http://localhost",oi={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ti,hasStandardBrowserEnv:ni,hasStandardBrowserWebWorkerEnv:ai,navigator:ri,origin:si},Symbol.toStringTag,{value:"Module"})),...ei};function ii(e){function t(e,r,n,a){let s=e[a++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),i=a>=e.length;if(s=!s&&Mo.isArray(n)?n.length:s,i)return Mo.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!o;n[s]&&Mo.isObject(n[s])||(n[s]=[]);return t(e,r,n[s],a)&&Mo.isArray(n[s])&&(n[s]=function(e){const t={},r=Object.keys(e);let n;const a=r.length;let s;for(n=0;n<a;n++)s=r[n],t[s]=e[s];return t}(n[s])),!o}if(Mo.isFormData(e)&&Mo.isFunction(e.entries)){const r={};return Mo.forEachEntry(e,(e,n)=>{t(function(e){return Mo.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),n,r,0)}),r}return null}const li={transitional:Qo,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,a=Mo.isObject(e);a&&Mo.isHTMLForm(e)&&(e=new FormData(e));if(Mo.isFormData(e))return n?JSON.stringify(ii(e)):e;if(Mo.isArrayBuffer(e)||Mo.isBuffer(e)||Mo.isStream(e)||Mo.isFile(e)||Mo.isBlob(e)||Mo.isReadableStream(e))return e;if(Mo.isArrayBufferView(e))return e.buffer;if(Mo.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return qo(e,new oi.classes.URLSearchParams,{visitor:function(e,t,r,n){return oi.isNode&&Mo.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((s=Mo.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return qo(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||n?(t.setContentType("application/json",!1),function(e,t,r){if(Mo.isString(e))try{return(t||JSON.parse)(e),Mo.trim(e)}catch(re){if("SyntaxError"!==re.name)throw re}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||li.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(Mo.isResponse(e)||Mo.isReadableStream(e))return e;if(e&&Mo.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e,this.parseReviver)}catch(re){if(r){if("SyntaxError"===re.name)throw Bo.from(re,Bo.ERR_BAD_RESPONSE,this,null,this.response);throw re}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oi.classes.FormData,Blob:oi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Mo.forEach(["delete","get","head","post","put","patch"],e=>{li.headers[e]={}});const ci=li,di=Mo.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ui=Symbol("internals");function hi(e){return e&&String(e).trim().toLowerCase()}function pi(e){return!1===e||null==e?e:Mo.isArray(e)?e.map(pi):String(e)}function mi(e,t,r,n,a){return Mo.isFunction(n)?n.call(this,t,r):(a&&(t=r),Mo.isString(t)?Mo.isString(n)?-1!==t.indexOf(n):Mo.isRegExp(n)?n.test(t):void 0:void 0)}class gi{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function a(e,t,r){const a=hi(t);if(!a)throw new Error("header name must be a non-empty string");const s=Mo.findKey(n,a);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||t]=pi(e))}const s=(e,t)=>Mo.forEach(e,(e,r)=>a(e,r,t));if(Mo.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(Mo.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let r,n,a;return e&&e.split("\n").forEach(function(e){a=e.indexOf(":"),r=e.substring(0,a).trim().toLowerCase(),n=e.substring(a+1).trim(),!r||t[r]&&di[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(e),t);else if(Mo.isObject(e)&&Mo.isIterable(e)){let r,n,a={};for(const t of e){if(!Mo.isArray(t))throw TypeError("Object iterator must return a key-value pair");a[n=t[0]]=(r=a[n])?Mo.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}s(a,t)}else null!=e&&a(t,e,r);return this}get(e,t){if(e=hi(e)){const r=Mo.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(Mo.isFunction(t))return t.call(this,e,r);if(Mo.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=hi(e)){const r=Mo.findKey(this,e);return!(!r||void 0===this[r]||t&&!mi(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function a(e){if(e=hi(e)){const a=Mo.findKey(r,e);!a||t&&!mi(0,r[a],a,t)||(delete r[a],n=!0)}}return Mo.isArray(e)?e.forEach(a):a(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const a=t[r];e&&!mi(0,this[a],a,e,!0)||(delete this[a],n=!0)}return n}normalize(e){const t=this,r={};return Mo.forEach(this,(n,a)=>{const s=Mo.findKey(r,a);if(s)return t[s]=pi(n),void delete t[a];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(a):String(a).trim();o!==a&&delete t[a],t[o]=pi(n),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Mo.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&Mo.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[ui]=this[ui]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=hi(e);t[n]||(!function(e,t){const r=Mo.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,a){return this[n].call(this,t,e,r,a)},configurable:!0})})}(r,e),t[n]=!0)}return Mo.isArray(e)?e.forEach(n):n(e),this}}gi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Mo.reduceDescriptors(gi.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),Mo.freezeMethods(gi);const fi=gi;function yi(e,t){const r=this||ci,n=t||r,a=fi.from(n.headers);let s=n.data;return Mo.forEach(e,function(e){s=e.call(r,s,a.normalize(),t?t.status:void 0)}),a.normalize(),s}function bi(e){return!(!e||!e.__CANCEL__)}function vi(e,t,r){Bo.call(this,null==e?"canceled":e,Bo.ERR_CANCELED,t,r),this.name="CanceledError"}function xi(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Bo("Request failed with status code "+r.status,[Bo.ERR_BAD_REQUEST,Bo.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}Mo.inherits(vi,Bo,{__CANCEL__:!0});const wi=(e,t,r=3)=>{let n=0;const a=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let a,s=0,o=0;return t=void 0!==t?t:1e3,function(i){const l=Date.now(),c=n[o];a||(a=l),r[s]=i,n[s]=l;let d=o,u=0;for(;d!==s;)u+=r[d++],d%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-a<t)return;const h=c&&l-c;return h?Math.round(1e3*u/h):void 0}}(50,250);return function(e,t){let r,n,a=0,s=1e3/t;const o=(t,s=Date.now())=>{a=s,r=null,n&&(clearTimeout(n),n=null),e(...t)};return[(...e)=>{const t=Date.now(),i=t-a;i>=s?o(e,t):(r=e,n||(n=setTimeout(()=>{n=null,o(r)},s-i)))},()=>r&&o(r)]}(r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,i=s-n,l=a(i);n=s;e({loaded:s,total:o,progress:o?s/o:void 0,bytes:i,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r,lengthComputable:null!=o,[t?"download":"upload"]:!0})},r)},Ci=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},ji=e=>(...t)=>Mo.asap(()=>e(...t)),Si=oi.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,oi.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(oi.origin),oi.navigator&&/(msie|trident)/i.test(oi.navigator.userAgent)):()=>!0,Ni=oi.hasStandardBrowserEnv?{write(e,t,r,n,a,s,o){if("undefined"==typeof document)return;const i=[`${e}=${encodeURIComponent(t)}`];Mo.isNumber(r)&&i.push(`expires=${new Date(r).toUTCString()}`),Mo.isString(n)&&i.push(`path=${n}`),Mo.isString(a)&&i.push(`domain=${a}`),!0===s&&i.push("secure"),Mo.isString(o)&&i.push(`SameSite=${o}`),document.cookie=i.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function Ei(e,t,r){let n=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(n||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ii=e=>e instanceof fi?{...e}:e;function Ti(e,t){t=t||{};const r={};function n(e,t,r,n){return Mo.isPlainObject(e)&&Mo.isPlainObject(t)?Mo.merge.call({caseless:n},e,t):Mo.isPlainObject(t)?Mo.merge({},t):Mo.isArray(t)?t.slice():t}function a(e,t,r,a){return Mo.isUndefined(t)?Mo.isUndefined(e)?void 0:n(void 0,e,0,a):n(e,t,0,a)}function s(e,t){if(!Mo.isUndefined(t))return n(void 0,t)}function o(e,t){return Mo.isUndefined(t)?Mo.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function i(r,a,s){return s in t?n(r,a):s in e?n(void 0,r):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:i,headers:(e,t,r)=>a(Ii(e),Ii(t),0,!0)};return Mo.forEach(Object.keys({...e,...t}),function(n){const s=l[n]||a,o=s(e[n],t[n],n);Mo.isUndefined(o)&&s!==i||(r[n]=o)}),r}const _i=e=>{const t=Ti({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:s,headers:o,auth:i}=t;if(t.headers=o=fi.from(o),t.url=Zo(Ei(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),i&&o.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?unescape(encodeURIComponent(i.password)):""))),Mo.isFormData(r))if(oi.hasStandardBrowserEnv||oi.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(Mo.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&o.set(e,r)})}if(oi.hasStandardBrowserEnv&&(n&&Mo.isFunction(n)&&(n=n(t)),n||!1!==n&&Si(t.url))){const e=a&&s&&Ni.read(s);e&&o.set(a,e)}return t},Pi="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const n=_i(e);let a=n.data;const s=fi.from(n.headers).normalize();let o,i,l,c,d,{responseType:u,onUploadProgress:h,onDownloadProgress:p}=n;function m(){c&&c(),d&&d(),n.cancelToken&&n.cancelToken.unsubscribe(o),n.signal&&n.signal.removeEventListener("abort",o)}let g=new XMLHttpRequest;function f(){if(!g)return;const n=fi.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());xi(function(e){t(e),m()},function(e){r(e),m()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:n,config:e,request:g}),g=null}g.open(n.method.toUpperCase(),n.url,!0),g.timeout=n.timeout,"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(f)},g.onabort=function(){g&&(r(new Bo("Request aborted",Bo.ECONNABORTED,e,g)),g=null)},g.onerror=function(t){const n=new Bo(t&&t.message?t.message:"Network Error",Bo.ERR_NETWORK,e,g);n.event=t||null,r(n),g=null},g.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const a=n.transitional||Qo;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new Bo(t,a.clarifyTimeoutError?Bo.ETIMEDOUT:Bo.ECONNABORTED,e,g)),g=null},void 0===a&&s.setContentType(null),"setRequestHeader"in g&&Mo.forEach(s.toJSON(),function(e,t){g.setRequestHeader(t,e)}),Mo.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),u&&"json"!==u&&(g.responseType=n.responseType),p&&([l,d]=wi(p,!0),g.addEventListener("progress",l)),h&&g.upload&&([i,c]=wi(h),g.upload.addEventListener("progress",i),g.upload.addEventListener("loadend",c)),(n.cancelToken||n.signal)&&(o=t=>{g&&(r(!t||t.type?new vi(null,e,g):t),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(o),n.signal&&(n.signal.aborted?o():n.signal.addEventListener("abort",o)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);y&&-1===oi.protocols.indexOf(y)?r(new Bo("Unsupported protocol "+y+":",Bo.ERR_BAD_REQUEST,e)):g.send(a||null)})},Ai=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const a=function(e){if(!r){r=!0,o();const t=e instanceof Error?e:this.reason;n.abort(t instanceof Bo?t:new vi(t instanceof Error?t.message:t))}};let s=t&&setTimeout(()=>{s=null,a(new Bo(`timeout ${t} of ms exceeded`,Bo.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)}),e=null)};e.forEach(e=>e.addEventListener("abort",a));const{signal:i}=n;return i.unsubscribe=()=>Mo.asap(o),i}},Ri=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,a=0;for(;a<r;)n=a+t,yield e.slice(a,n),a=n},ki=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Oi=(e,t,r,n)=>{const a=async function*(e,t){for await(const r of ki(e))yield*Ri(r,t)}(e,t);let s,o=0,i=e=>{s||(s=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await a.next();if(t)return i(),void e.close();let s=n.byteLength;if(r){let e=o+=s;r(e)}e.enqueue(new Uint8Array(n))}catch(t){throw i(t),t}},cancel:e=>(i(e),a.return())},{highWaterMark:2})},{isFunction:Di}=Mo,Li=(({Request:e,Response:t})=>({Request:e,Response:t}))(Mo.global),{ReadableStream:Ui,TextEncoder:Mi}=Mo.global,Bi=(e,...t)=>{try{return!!e(...t)}catch(re){return!1}},Fi=e=>{e=Mo.merge.call({skipUndefined:!0},Li,e);const{fetch:t,Request:r,Response:n}=e,a=t?Di(t):"function"==typeof fetch,s=Di(r),o=Di(n);if(!a)return!1;const i=a&&Di(Ui),l=a&&("function"==typeof Mi?(c=new Mi,e=>c.encode(e)):async e=>new Uint8Array(await new r(e).arrayBuffer()));var c;const d=s&&i&&Bi(()=>{let e=!1;const t=new r(oi.origin,{body:new Ui,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),u=o&&i&&Bi(()=>Mo.isReadableStream(new n("").body)),h={stream:u&&(e=>e.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!h[e]&&(h[e]=(t,r)=>{let n=t&&t[e];if(n)return n.call(t);throw new Bo(`Response type '${e}' is not supported`,Bo.ERR_NOT_SUPPORT,r)})});const p=async(e,t)=>{const n=Mo.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Mo.isBlob(e))return e.size;if(Mo.isSpecCompliantForm(e)){const t=new r(oi.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Mo.isArrayBufferView(e)||Mo.isArrayBuffer(e)?e.byteLength:(Mo.isURLSearchParams(e)&&(e+=""),Mo.isString(e)?(await l(e)).byteLength:void 0)})(t):n};return async e=>{let{url:a,method:o,data:i,signal:l,cancelToken:c,timeout:m,onDownloadProgress:g,onUploadProgress:f,responseType:y,headers:b,withCredentials:v="same-origin",fetchOptions:x}=_i(e),w=t||fetch;y=y?(y+"").toLowerCase():"text";let C=Ai([l,c&&c.toAbortSignal()],m),j=null;const S=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let N;try{if(f&&d&&"get"!==o&&"head"!==o&&0!==(N=await p(b,i))){let e,t=new r(a,{method:"POST",body:i,duplex:"half"});if(Mo.isFormData(i)&&(e=t.headers.get("content-type"))&&b.setContentType(e),t.body){const[e,r]=Ci(N,wi(ji(f)));i=Oi(t.body,65536,e,r)}}Mo.isString(v)||(v=v?"include":"omit");const t=s&&"credentials"in r.prototype,l={...x,signal:C,method:o.toUpperCase(),headers:b.normalize().toJSON(),body:i,duplex:"half",credentials:t?v:void 0};j=s&&new r(a,l);let c=await(s?w(j,x):w(a,l));const m=u&&("stream"===y||"response"===y);if(u&&(g||m&&S)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=Mo.toFiniteNumber(c.headers.get("content-length")),[r,a]=g&&Ci(t,wi(ji(g),!0))||[];c=new n(Oi(c.body,65536,r,()=>{a&&a(),S&&S()}),e)}y=y||"text";let E=await h[Mo.findKey(h,y)||"text"](c,e);return!m&&S&&S(),await new Promise((t,r)=>{xi(t,r,{data:E,headers:fi.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:j})})}catch(E){if(S&&S(),E&&"TypeError"===E.name&&/Load failed|fetch/i.test(E.message))throw Object.assign(new Bo("Network Error",Bo.ERR_NETWORK,e,j),{cause:E.cause||E});throw Bo.from(E,E&&E.code,e,j)}}},Hi=new Map,Vi=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:a}=t,s=[n,a,r];let o,i,l=s.length,c=Hi;for(;l--;)o=s[l],i=c.get(o),void 0===i&&c.set(o,i=l?new Map:Fi(t)),c=i;return i};Vi();const zi={http:null,xhr:Pi,fetch:{get:Vi}};Mo.forEach(zi,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(re){}Object.defineProperty(e,"adapterName",{value:t})}});const $i=e=>`- ${e}`,Gi=e=>Mo.isFunction(e)||null===e||!1===e;const qi={getAdapter:function(e,t){e=Mo.isArray(e)?e:[e];const{length:r}=e;let n,a;const s={};for(let o=0;o<r;o++){let r;if(n=e[o],a=n,!Gi(n)&&(a=zi[(r=String(n)).toLowerCase()],void 0===a))throw new Bo(`Unknown adapter '${r}'`);if(a&&(Mo.isFunction(a)||(a=a.get(t))))break;s[r||"#"+o]=a}if(!a){const e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Bo("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map($i).join("\n"):" "+$i(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return a},adapters:zi};function Wi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vi(null,e)}function Ki(e){Wi(e),e.headers=fi.from(e.headers),e.data=yi.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return qi.getAdapter(e.adapter||ci.adapter,e)(e).then(function(t){return Wi(e),t.data=yi.call(e,e.transformResponse,t),t.headers=fi.from(t.headers),t},function(t){return bi(t)||(Wi(e),t&&t.response&&(t.response.data=yi.call(e,e.transformResponse,t.response),t.response.headers=fi.from(t.response.headers))),Promise.reject(t)})}const Ji="1.13.1",Xi={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xi[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Zi={};Xi.transitional=function(e,t,r){function n(e,t){return"[Axios v"+Ji+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,a,s)=>{if(!1===e)throw new Bo(n(a," has been removed"+(t?" in "+t:"")),Bo.ERR_DEPRECATED);return t&&!Zi[a]&&(Zi[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,a,s)}},Xi.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const Yi={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Bo("options must be an object",Bo.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let a=n.length;for(;a-- >0;){const s=n[a],o=t[s];if(o){const t=e[s],r=void 0===t||o(t,s,e);if(!0!==r)throw new Bo("option "+s+" must be "+r,Bo.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Bo("Unknown option "+s,Bo.ERR_BAD_OPTION)}},validators:Xi},Qi=Yi.validators;class el{constructor(e){this.defaults=e||{},this.interceptors={request:new Yo,response:new Yo}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(re){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ti(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:a}=t;void 0!==r&&Yi.assertOptions(r,{silentJSONParsing:Qi.transitional(Qi.boolean),forcedJSONParsing:Qi.transitional(Qi.boolean),clarifyTimeoutError:Qi.transitional(Qi.boolean)},!1),null!=n&&(Mo.isFunction(n)?t.paramsSerializer={serialize:n}:Yi.assertOptions(n,{encode:Qi.function,serialize:Qi.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Yi.assertOptions(t,{baseUrl:Qi.spelling("baseURL"),withXsrfToken:Qi.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=a&&Mo.merge(a.common,a[t.method]);a&&Mo.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=fi.concat(s,a);const o=[];let i=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,o.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!i){const e=[Ki.bind(this),void 0];for(e.unshift(...o),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let h=t;for(;u<d;){const e=o[u++],t=o[u++];try{h=e(h)}catch(p){t.call(this,p);break}}try{c=Ki.call(this,h)}catch(p){return Promise.reject(p)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return Zo(Ei((e=Ti(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Mo.forEach(["delete","get","head","options"],function(e){el.prototype[e]=function(t,r){return this.request(Ti(r||{},{method:e,url:t,data:(r||{}).data}))}}),Mo.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,a){return this.request(Ti(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}el.prototype[e]=t(),el.prototype[e+"Form"]=t(!0)});const tl=el;class rl{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,a){r.reason||(r.reason=new vi(e,n,a),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new rl(function(t){e=t});return{token:t,cancel:e}}}const nl=rl;const al={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(al).forEach(([e,t])=>{al[t]=e});const sl=al;const ol=function e(t){const r=new tl(t),n=Ws(tl.prototype.request,r);return Mo.extend(n,tl.prototype,r,{allOwnKeys:!0}),Mo.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Ti(t,r))},n}(ci);ol.Axios=tl,ol.CanceledError=vi,ol.CancelToken=nl,ol.isCancel=bi,ol.VERSION=Ji,ol.toFormData=qo,ol.AxiosError=Bo,ol.Cancel=ol.CanceledError,ol.all=function(e){return Promise.all(e)},ol.spread=function(e){return function(t){return e.apply(null,t)}},ol.isAxiosError=function(e){return Mo.isObject(e)&&!0===e.isAxiosError},ol.mergeConfig=Ti,ol.AxiosHeaders=fi,ol.formToJSON=e=>ii(Mo.isHTMLForm(e)?new FormData(e):e),ol.getAdapter=qi.getAdapter,ol.HttpStatusCode=sl,ol.default=ol;const il=ol;const ll=()=>{const{user:t}=Vs(),[r,n]=e.useState("monthly"),[a,s]=e.useState({isConnected:!1,isLoading:!0,products:null}),[o,i]=e.useState(null),[l,c]=e.useState(null),u=[{id:"basic",name:"Básico",icon:W.jsx(w,{className:"w-10 h-10 text-gray-500"}),color:"gray",gradient:"from-gray-400 to-gray-600",features:["Gratuito (R$ 0,00/mês)","Limite de 2 moedas (ex: BRL, USD)","Limite de 2 plataformas (Shopify, Nuvemshop)","Limite de 2 gateways de pagamento (Stripe, Mercado Pago)","Pode realizar 10 cálculos por mês","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:0,quarterly:{total:0,perMonth:0},annual:{total:0,perMonth:0}}},{id:"gold",name:"Gold",icon:W.jsx(d.div,{initial:{scale:1},animate:{scale:[1,1.15,1],boxShadow:["0 0 0px #FFD700","0 0 24px #FFD700","0 0 0px #FFD700"]},transition:{repeat:1/0,duration:2},children:W.jsx(C,{className:"w-12 h-12 text-yellow-500 drop-shadow-lg"})}),color:"yellow",gradient:"from-yellow-400 to-yellow-600",popular:!0,features:["R$ 9,90/mês","Suporte a 10 moedas","Até 4 plataformas","Até 4 gateways de pagamento","Cálculo automático em tempo real","Atualização automática de câmbio","Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)","Suporte via e-mail"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:9},annual:{total:89.9,perMonth:7.5}}},{id:"premium",name:"Premium",icon:W.jsxs(d.div,{initial:{rotate:0,scale:1},animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{repeat:1/0,duration:3},className:"relative flex items-center justify-center",children:[W.jsx(j,{className:"w-12 h-12 text-purple-500 drop-shadow-lg"}),W.jsx(d.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1},className:"absolute -top-2 -right-2",children:W.jsx(S,{className:"w-7 h-7 text-blue-500 drop-shadow-xl"})})]}),color:"purple",gradient:"from-purple-400 to-purple-600",features:["R$ 19,90/mês","Todas as moedas disponíveis (70+)","Todas as plataformas integradas","Todos os gateways de pagamento","Cálculo automático em tempo real","Histórico de preços completo","Suporte técnico prioritário","Segurança avançada nos pagamentos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.6}}}],h=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)} (R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês)`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)} (R$ ${e.prices.annual.perMonth.toFixed(2)}/mês)`}}},m=(e,t)=>{const r=e.prices.monthly*("quarterly"===t?3:12),n=e.prices[t].total;return Math.round((r-n)/r*100)};return e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),r=localStorage.getItem("currentUser");if(e&&"active"===t&&r){const t=localStorage.getItem("subscriptionDate");if(t){const r=new Date(t);((new Date).getTime()-r.getTime())/36e5<24?i(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"))}}s({isConnected:!0,isLoading:!1,products:null})},[]),W.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center",children:W.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8",children:[W.jsx("h3",{className:"text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight",children:"Escolha o período de cobrança"}),W.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:["monthly","quarterly","annual"].map(e=>W.jsxs(d.button,{whileHover:{scale:1.07,boxShadow:"0 0 16px #60A5FA"},whileTap:{scale:.97},onClick:()=>n(e),className:"p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg "+(r===e?"border-blue-500 bg-blue-100 text-blue-700":"border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"),children:[W.jsx("p",{className:"font-bold text-lg",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&W.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow",children:["-",m(u[1],e),"%"]})]},e))})]}),!a.isLoading&&W.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:u.map((e,n)=>W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*n},className:`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${e.popular?"border-yellow-400 shadow-yellow-200 scale-105":""} ${o===e.id?"ring-2 ring-green-500":""}`,children:[W.jsxs("div",{className:"flex flex-col items-center mb-8",children:[W.jsx("div",{className:`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${e.gradient} shadow-lg`,children:e.icon}),W.jsx("span",{className:`text-3xl font-extrabold text-${e.color}-700 mb-2 tracking-tight`,children:e.name}),e.popular&&W.jsx(d.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.5},className:"px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse",children:"⭐ Mais Popular"}),W.jsx("span",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:h(e,r).label})]}),W.jsx("ul",{className:"mb-8 text-base text-gray-900 space-y-4 flex-1",children:e.features.map((e,t)=>W.jsxs("li",{className:"flex items-center gap-2",children:[W.jsx(w,{className:"w-5 h-5 text-green-500"}),W.jsx("span",{children:e})]},t))}),W.jsx("div",{className:"mt-auto",children:W.jsxs(d.button,{whileHover:{scale:o===e.id?1:1.07,boxShadow:o===e.id?void 0:"0 0 16px "+("yellow"===e.color?"#FFD700":"purple"===e.color?"#6366F1":"#60A5FA")},whileTap:{scale:o===e.id?1:.97},onClick:async()=>{if(o!==e.id){c(`${e.id}_${r}`);try{if(Ze.loading("Redirecionando para pagamento...",{id:"purchase"}),!t?.id)throw new Error("Usuário não encontrado");const n=await async function({title:e,description:t,price:r,quantity:n=1,planId:a,userId:s}){const o={items:[{title:e,description:t,quantity:n,currency_id:"BRL",unit_price:r}],external_reference:`${a}_${s}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:s}};return(await il.post("https://api.mercadopago.com/checkout/preferences",o,{headers:{Authorization:"Bearer APP_USR-377913103077270-111122-afa5f8cbbd113e80aff4c90b5c812766-2984123394","Content-Type":"application/json"}})).data}({title:`Assinatura DropCalc - ${e.name}`,description:`Plano ${e.name} (${r})`,price:h(e,r).value,planId:e.id,userId:t.id});window.location.href=n.init_point}catch(n){console.error("Erro ao criar pagamento:",n),Ze.error("Erro ao redirecionar para pagamento.",{id:"purchase"})}finally{c(null)}}},disabled:l===`${e.id}_${r}`||o===e.id,className:"w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 "+(o===e.id?"bg-green-100 text-green-700 cursor-default":l===`${e.id}_${r}`?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-2xl`),children:[W.jsx(N,{className:"w-5 h-5"}),"Assinar"]})})]},e.id))}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"overflow-x-auto mb-10",children:[W.jsx("h3",{className:"text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight",children:"Comparativo dos Planos"}),W.jsxs("table",{className:"min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100",children:[W.jsx("thead",{children:W.jsxs("tr",{children:[W.jsx("th",{className:"py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl",children:"Benefício"}),u.map(e=>W.jsx("th",{className:"py-4 px-6 text-center font-bold text-lg bg-blue-50",children:W.jsx("span",{className:`text-base font-bold text-${e.color}-700`,children:e.name})},e.id))]})}),W.jsxs("tbody",{children:[W.jsxs("tr",{className:"bg-white/60",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Preço"}),u.map(e=>W.jsx("td",{className:"py-3 px-6 text-center font-bold text-lg",children:h(e,r).label},e.id))]}),W.jsxs("tr",{className:"bg-blue-50/60",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Moedas suportadas"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"70+"})]}),W.jsxs("tr",{className:"bg-white/60",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Plataformas integradas"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"Todas"})]}),W.jsxs("tr",{className:"bg-blue-50/60",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Gateways de pagamento"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"Todos"})]}),W.jsxs("tr",{className:"bg-white/60",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Cálculos por mês"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"})]}),W.jsxs("tr",{className:"bg-blue-50/60",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Suporte"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"Prioritário"})]}),W.jsxs("tr",{className:"bg-white/60 rounded-b-3xl",children:[W.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Segurança avançada"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),W.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),W.jsx("td",{className:"py-3 px-6 text-center",children:W.jsx(w,{className:"w-6 h-6 text-green-500 mx-auto"})})]})]})]})]}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10",children:[W.jsx(p,{className:"w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce"}),W.jsx("h3",{className:"text-2xl font-extrabold mb-3 tracking-tight",children:"💡 Dica Especial"}),W.jsxs("p",{className:"opacity-95 text-lg",children:["Com o ",W.jsx("span",{className:"font-bold text-yellow-200",children:"DropCalc Premium"}),", você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada."]})]})]})})},cl="https://appdropcalc-production.up.railway.app",dl=()=>{const{user:t,plan:r,checkPlanAccess:n}=Vs(),a=s();console.log("=== DashboardCalculadora INICIANDO ==="),console.log("User:",t),console.log("User autenticado:",!!t),console.log("Plan:",r),console.log("localStorage userPlan:",localStorage.getItem("userPlan")),console.log("localStorage premiumActive:",localStorage.getItem("premiumActive"));const[o,i]=e.useState({custoProduto:100,custosAdicionais:0,moedaOrigem:"USD",moedaVenda:"BRL",plataforma:"mercado-livre",gateway:"mercado-pago",margemLucro:30}),[l,c]=e.useState(null),[p,m]=e.useState(0),[g,f]=e.useState(!1),[y,b]=e.useState(!1),v=()=>"basic"===r?.type||!n("professional"),x=async()=>{b(!0);try{const e=await fetch(`${cl}/calc/calcular`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok)throw new Error("Erro no cálculo");const t=await e.json();c(t)}catch(e){console.error("Erro no cálculo:",e);const t=(o.custoProduto+o.custosAdicionais)*p,r=.05*t,n=.035*t,a=t+r+n,s=a*(o.margemLucro/100);c({precoVenda:a+s,detalhes:{custoProduto:o.custoProduto,custosAdicionais:o.custosAdicionais,taxaCambio:p,custoConvertido:t,taxaPlataforma:r,taxaGateway:n,taxaTotal:r+n,margemLucro:o.margemLucro,valorMargemBRL:s}})}finally{b(!1)}};e.useEffect(()=>{o.moedaOrigem&&o.moedaVenda&&(async()=>{try{const e=await fetch(`${cl}/exchange/rate/${o.moedaOrigem}/${o.moedaVenda}`),t=await e.json();m(t.rate)}catch(e){console.error("Erro ao buscar taxa de câmbio:",e),m(5.5)}})()},[o.moedaOrigem,o.moedaVenda]),e.useEffect(()=>{v()?null!==l&&c(null):p>0&&o.custoProduto>0&&x()},[o,p,r]);const w=(e,t)=>{i(r=>({...r,[e]:t}))};return t?W.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:[W.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20",children:[W.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:W.jsxs("div",{className:"flex justify-between items-center py-4",children:[W.jsxs("div",{className:"flex items-center gap-3",children:[W.jsx("div",{className:"p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl",children:W.jsx(u,{className:"h-6 w-6 text-white"})}),W.jsxs("div",{children:[W.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"DropCalc"}),"true"===localStorage.getItem("premiumActive")&&W.jsxs("div",{className:"flex items-center gap-1",children:[W.jsx(E,{className:"w-3 h-3 text-yellow-500"}),W.jsx("span",{className:"text-xs text-yellow-600 font-medium",children:"Premium"})]})]})]}),W.jsxs("div",{className:"flex items-center gap-4",children:[W.jsxs("span",{className:"text-gray-700 font-medium hidden sm:block",children:["Olá, ",t?.name||"Usuário","!"]}),W.jsxs("div",{className:"flex items-center gap-2",children:[W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>a("/help"),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Ajuda",children:W.jsx(I,{className:"w-5 h-5"})}),W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>a("/settings"),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Configurações",children:W.jsx(T,{className:"w-5 h-5"})}),W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>f(!g),className:"p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors sm:hidden",title:"Menu",children:g?W.jsx(_,{className:"w-5 h-5"}):W.jsx(P,{className:"w-5 h-5"})})]})]})]})}),W.jsx(A,{children:g&&W.jsx(d.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"border-t border-gray-200 bg-white sm:hidden",children:W.jsxs("div",{className:"px-4 py-3 space-y-2",children:[W.jsxs("button",{onClick:()=>{a("/help"),f(!1)},className:"flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:[W.jsx(I,{className:"w-5 h-5"}),"Ajuda"]}),W.jsxs("button",{onClick:()=>{a("/settings"),f(!1)},className:"flex items-center gap-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors",children:[W.jsx(T,{className:"w-5 h-5"}),"Configurações"]})]})})})]}),W.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:W.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[W.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[W.jsxs("div",{className:"flex items-center mb-6",children:[W.jsx(T,{className:"h-6 w-6 text-blue-600 mr-2"}),W.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Parâmetros do Produto"})]}),W.jsxs("div",{className:"space-y-6",children:[W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Custo do Produto"}),W.jsxs("div",{className:"relative",children:[W.jsx(R,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400"}),W.jsx("input",{type:"number",value:o.custoProduto,onChange:e=>w("custoProduto",parseFloat(e.target.value)||0),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"100.00"})]})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Custos Adicionais (Frete, Impostos, etc.)"}),W.jsx("input",{type:"number",value:o.custosAdicionais,onChange:e=>w("custosAdicionais",parseFloat(e.target.value)||0),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"0.00"})]}),W.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Moeda Origem"}),W.jsxs("select",{value:o.moedaOrigem,onChange:e=>w("moedaOrigem",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[W.jsxs("optgroup",{label:" Principais",children:[W.jsx("option",{value:"USD",children:"USD - Dólar Americano"}),W.jsx("option",{value:"EUR",children:"EUR - Euro"}),W.jsx("option",{value:"BRL",children:"BRL - Real Brasileiro"}),W.jsx("option",{value:"CNY",children:"CNY - Yuan Chinês"}),W.jsx("option",{value:"GBP",children:"GBP - Libra Esterlina"}),W.jsx("option",{value:"JPY",children:"JPY - Iene Japonês"})]}),W.jsxs("optgroup",{label:"🇺🇸 América do Norte",children:[W.jsx("option",{value:"CAD",children:"CAD - Dólar Canadense"}),W.jsx("option",{value:"MXN",children:"MXN - Peso Mexicano"})]}),W.jsxs("optgroup",{label:"🇧🇷 América do Sul",children:[W.jsx("option",{value:"ARS",children:"ARS - Peso Argentino"}),W.jsx("option",{value:"CLP",children:"CLP - Peso Chileno"}),W.jsx("option",{value:"COP",children:"COP - Peso Colombiano"}),W.jsx("option",{value:"UYU",children:"UYU - Peso Uruguaio"}),W.jsx("option",{value:"PEN",children:"PEN - Sol Peruano"}),W.jsx("option",{value:"BOB",children:"BOB - Boliviano"}),W.jsx("option",{value:"PYG",children:"PYG - Guarani Paraguaio"}),W.jsx("option",{value:"VES",children:"VES - Bolívar Venezuelano"})]}),W.jsxs("optgroup",{label:"🇪🇺 Europa",children:[W.jsx("option",{value:"CHF",children:"CHF - Franco Suíço"}),W.jsx("option",{value:"NOK",children:"NOK - Coroa Norueguesa"}),W.jsx("option",{value:"SEK",children:"SEK - Coroa Sueca"}),W.jsx("option",{value:"DKK",children:"DKK - Coroa Dinamarquesa"}),W.jsx("option",{value:"PLN",children:"PLN - Zloty Polonês"}),W.jsx("option",{value:"CZK",children:"CZK - Coroa Tcheca"}),W.jsx("option",{value:"HUF",children:"HUF - Forint Húngaro"}),W.jsx("option",{value:"RON",children:"RON - Leu Romeno"}),W.jsx("option",{value:"BGN",children:"BGN - Lev Búlgaro"}),W.jsx("option",{value:"HRK",children:"HRK - Kuna Croata"}),W.jsx("option",{value:"RUB",children:"RUB - Rublo Russo"}),W.jsx("option",{value:"UAH",children:"UAH - Hryvnia Ucraniana"}),W.jsx("option",{value:"TRY",children:"TRY - Lira Turca"})]}),W.jsxs("optgroup",{label:" Ásia-Pacífico",children:[W.jsx("option",{value:"AUD",children:"AUD - Dólar Australiano"}),W.jsx("option",{value:"NZD",children:"NZD - Dólar Neozelandês"}),W.jsx("option",{value:"KRW",children:"KRW - Won Sul-coreano"}),W.jsx("option",{value:"SGD",children:"SGD - Dólar de Singapura"}),W.jsx("option",{value:"HKD",children:"HKD - Dólar de Hong Kong"}),W.jsx("option",{value:"THB",children:"THB - Baht Tailandês"}),W.jsx("option",{value:"MYR",children:"MYR - Ringgit Malaio"}),W.jsx("option",{value:"PHP",children:"PHP - Peso Filipino"}),W.jsx("option",{value:"IDR",children:"IDR - Rupia Indonésia"}),W.jsx("option",{value:"VND",children:"VND - Dong Vietnamita"}),W.jsx("option",{value:"INR",children:"INR - Rupia Indiana"}),W.jsx("option",{value:"PKR",children:"PKR - Rupia Paquistanesa"}),W.jsx("option",{value:"BDT",children:"BDT - Taka de Bangladesh"}),W.jsx("option",{value:"LKR",children:"LKR - Rupia do Sri Lanka"}),W.jsx("option",{value:"NPR",children:"NPR - Rupia Nepalesa"}),W.jsx("option",{value:"MMK",children:"MMK - Kyat de Mianmar"}),W.jsx("option",{value:"KHR",children:"KHR - Riel Cambojano"}),W.jsx("option",{value:"LAK",children:"LAK - Kip Laosiano"}),W.jsx("option",{value:"BND",children:"BND - Dólar de Brunei"})]}),W.jsxs("optgroup",{label:" Oriente Médio & África",children:[W.jsx("option",{value:"SAR",children:"SAR - Riyal Saudita"}),W.jsx("option",{value:"AED",children:"AED - Dirham dos Emirados"}),W.jsx("option",{value:"QAR",children:"QAR - Riyal do Qatar"}),W.jsx("option",{value:"KWD",children:"KWD - Dinar do Kuwait"}),W.jsx("option",{value:"BHD",children:"BHD - Dinar do Bahrein"}),W.jsx("option",{value:"OMR",children:"OMR - Rial Omanense"}),W.jsx("option",{value:"JOD",children:"JOD - Dinar Jordaniano"}),W.jsx("option",{value:"LBP",children:"LBP - Libra Libanesa"}),W.jsx("option",{value:"ILS",children:"ILS - Shekel Israelense"}),W.jsx("option",{value:"EGP",children:"EGP - Libra Egípcia"}),W.jsx("option",{value:"ZAR",children:"ZAR - Rand Sul-africano"}),W.jsx("option",{value:"NGN",children:"NGN - Naira Nigeriana"}),W.jsx("option",{value:"KES",children:"KES - Xelim Queniano"}),W.jsx("option",{value:"UGX",children:"UGX - Xelim Ugandense"}),W.jsx("option",{value:"TZS",children:"TZS - Xelim Tanzaniano"}),W.jsx("option",{value:"GHS",children:"GHS - Cedi Ganês"}),W.jsx("option",{value:"MAD",children:"MAD - Dirham Marroquino"}),W.jsx("option",{value:"TND",children:"TND - Dinar Tunisiano"}),W.jsx("option",{value:"DZD",children:"DZD - Dinar Argelino"}),W.jsx("option",{value:"LYD",children:"LYD - Dinar Líbio"}),W.jsx("option",{value:"SDG",children:"SDG - Libra Sudanesa"}),W.jsx("option",{value:"ETB",children:"ETB - Birr Etíope"}),W.jsx("option",{value:"XOF",children:"XOF - Franco CFA Oeste Africano"}),W.jsx("option",{value:"XAF",children:"XAF - Franco CFA Centro Africano"})]}),W.jsxs("optgroup",{label:" Criptomoedas",children:[W.jsx("option",{value:"BTC",children:"BTC - Bitcoin"}),W.jsx("option",{value:"ETH",children:"ETH - Ethereum"}),W.jsx("option",{value:"USDT",children:"USDT - Tether"}),W.jsx("option",{value:"BNB",children:"BNB - Binance Coin"}),W.jsx("option",{value:"ADA",children:"ADA - Cardano"}),W.jsx("option",{value:"DOGE",children:"DOGE - Dogecoin"}),W.jsx("option",{value:"XRP",children:"XRP - Ripple"}),W.jsx("option",{value:"LTC",children:"LTC - Litecoin"}),W.jsx("option",{value:"BCH",children:"BCH - Bitcoin Cash"})]})]})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Moeda Venda"}),W.jsxs("select",{value:o.moedaVenda,onChange:e=>w("moedaVenda",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[W.jsxs("optgroup",{label:" Principais",children:[W.jsx("option",{value:"BRL",children:"BRL - Real Brasileiro"}),W.jsx("option",{value:"USD",children:"USD - Dólar Americano"}),W.jsx("option",{value:"EUR",children:"EUR - Euro"}),W.jsx("option",{value:"CNY",children:"CNY - Yuan Chinês"}),W.jsx("option",{value:"GBP",children:"GBP - Libra Esterlina"}),W.jsx("option",{value:"JPY",children:"JPY - Iene Japonês"})]}),W.jsxs("optgroup",{label:"🇺🇸 América do Norte",children:[W.jsx("option",{value:"CAD",children:"CAD - Dólar Canadense"}),W.jsx("option",{value:"MXN",children:"MXN - Peso Mexicano"})]}),W.jsxs("optgroup",{label:"🇧🇷 América do Sul",children:[W.jsx("option",{value:"ARS",children:"ARS - Peso Argentino"}),W.jsx("option",{value:"CLP",children:"CLP - Peso Chileno"}),W.jsx("option",{value:"COP",children:"COP - Peso Colombiano"}),W.jsx("option",{value:"UYU",children:"UYU - Peso Uruguaio"}),W.jsx("option",{value:"PEN",children:"PEN - Sol Peruano"}),W.jsx("option",{value:"BOB",children:"BOB - Boliviano"}),W.jsx("option",{value:"PYG",children:"PYG - Guarani Paraguaio"}),W.jsx("option",{value:"VES",children:"VES - Bolívar Venezuelano"})]}),W.jsxs("optgroup",{label:"🇪🇺 Europa",children:[W.jsx("option",{value:"CHF",children:"CHF - Franco Suíço"}),W.jsx("option",{value:"NOK",children:"NOK - Coroa Norueguesa"}),W.jsx("option",{value:"SEK",children:"SEK - Coroa Sueca"}),W.jsx("option",{value:"DKK",children:"DKK - Coroa Dinamarquesa"}),W.jsx("option",{value:"PLN",children:"PLN - Zloty Polonês"}),W.jsx("option",{value:"CZK",children:"CZK - Coroa Tcheca"}),W.jsx("option",{value:"HUF",children:"HUF - Forint Húngaro"}),W.jsx("option",{value:"RON",children:"RON - Leu Romeno"}),W.jsx("option",{value:"BGN",children:"BGN - Lev Búlgaro"}),W.jsx("option",{value:"HRK",children:"HRK - Kuna Croata"}),W.jsx("option",{value:"RUB",children:"RUB - Rublo Russo"}),W.jsx("option",{value:"UAH",children:"UAH - Hryvnia Ucraniana"}),W.jsx("option",{value:"TRY",children:"TRY - Lira Turca"})]}),W.jsxs("optgroup",{label:" Ásia-Pacífico",children:[W.jsx("option",{value:"AUD",children:"AUD - Dólar Australiano"}),W.jsx("option",{value:"NZD",children:"NZD - Dólar Neozelandês"}),W.jsx("option",{value:"KRW",children:"KRW - Won Sul-coreano"}),W.jsx("option",{value:"SGD",children:"SGD - Dólar de Singapura"}),W.jsx("option",{value:"HKD",children:"HKD - Dólar de Hong Kong"}),W.jsx("option",{value:"THB",children:"THB - Baht Tailandês"}),W.jsx("option",{value:"MYR",children:"MYR - Ringgit Malaio"}),W.jsx("option",{value:"PHP",children:"PHP - Peso Filipino"}),W.jsx("option",{value:"IDR",children:"IDR - Rupia Indonésia"}),W.jsx("option",{value:"VND",children:"VND - Dong Vietnamita"}),W.jsx("option",{value:"INR",children:"INR - Rupia Indiana"}),W.jsx("option",{value:"PKR",children:"PKR - Rupia Paquistanesa"}),W.jsx("option",{value:"BDT",children:"BDT - Taka de Bangladesh"}),W.jsx("option",{value:"LKR",children:"LKR - Rupia do Sri Lanka"}),W.jsx("option",{value:"NPR",children:"NPR - Rupia Nepalesa"}),W.jsx("option",{value:"MMK",children:"MMK - Kyat de Mianmar"}),W.jsx("option",{value:"KHR",children:"KHR - Riel Cambojano"}),W.jsx("option",{value:"LAK",children:"LAK - Kip Laosiano"}),W.jsx("option",{value:"BND",children:"BND - Dólar de Brunei"})]}),W.jsxs("optgroup",{label:" Oriente Médio & África",children:[W.jsx("option",{value:"SAR",children:"SAR - Riyal Saudita"}),W.jsx("option",{value:"AED",children:"AED - Dirham dos Emirados"}),W.jsx("option",{value:"QAR",children:"QAR - Riyal do Qatar"}),W.jsx("option",{value:"KWD",children:"KWD - Dinar do Kuwait"}),W.jsx("option",{value:"BHD",children:"BHD - Dinar do Bahrein"}),W.jsx("option",{value:"OMR",children:"OMR - Rial Omanense"}),W.jsx("option",{value:"JOD",children:"JOD - Dinar Jordaniano"}),W.jsx("option",{value:"LBP",children:"LBP - Libra Libanesa"}),W.jsx("option",{value:"ILS",children:"ILS - Shekel Israelense"}),W.jsx("option",{value:"EGP",children:"EGP - Libra Egípcia"}),W.jsx("option",{value:"ZAR",children:"ZAR - Rand Sul-africano"}),W.jsx("option",{value:"NGN",children:"NGN - Naira Nigeriana"}),W.jsx("option",{value:"KES",children:"KES - Xelim Queniano"}),W.jsx("option",{value:"UGX",children:"UGX - Xelim Ugandense"}),W.jsx("option",{value:"TZS",children:"TZS - Xelim Tanzaniano"}),W.jsx("option",{value:"GHS",children:"GHS - Cedi Ganês"}),W.jsx("option",{value:"MAD",children:"MAD - Dirham Marroquino"}),W.jsx("option",{value:"TND",children:"TND - Dinar Tunisiano"}),W.jsx("option",{value:"DZD",children:"DZD - Dinar Argelino"}),W.jsx("option",{value:"LYD",children:"LYD - Dinar Líbio"}),W.jsx("option",{value:"SDG",children:"SDG - Libra Sudanesa"}),W.jsx("option",{value:"ETB",children:"ETB - Birr Etíope"}),W.jsx("option",{value:"XOF",children:"XOF - Franco CFA Oeste Africano"}),W.jsx("option",{value:"XAF",children:"XAF - Franco CFA Centro Africano"})]}),W.jsxs("optgroup",{label:" Criptomoedas",children:[W.jsx("option",{value:"BTC",children:"BTC - Bitcoin"}),W.jsx("option",{value:"ETH",children:"ETH - Ethereum"}),W.jsx("option",{value:"USDT",children:"USDT - Tether"}),W.jsx("option",{value:"BNB",children:"BNB - Binance Coin"}),W.jsx("option",{value:"ADA",children:"ADA - Cardano"}),W.jsx("option",{value:"DOGE",children:"DOGE - Dogecoin"}),W.jsx("option",{value:"XRP",children:"XRP - Ripple"}),W.jsx("option",{value:"LTC",children:"LTC - Litecoin"}),W.jsx("option",{value:"BCH",children:"BCH - Bitcoin Cash"})]})]})]})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Plataforma de Venda"}),W.jsxs("select",{value:o.plataforma,onChange:e=>w("plataforma",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[W.jsxs("optgroup",{label:"Marketplaces Nacionais",children:[W.jsx("option",{value:"mercado-livre",children:"Mercado Livre"}),W.jsx("option",{value:"amazon-br",children:"Amazon Brasil"}),W.jsx("option",{value:"shopee",children:"Shopee"}),W.jsx("option",{value:"magazineluiza",children:"Magazine Luiza"}),W.jsx("option",{value:"americanas",children:"Americanas"}),W.jsx("option",{value:"casas-bahia",children:"Casas Bahia"}),W.jsx("option",{value:"via-varejo",children:"Via Varejo"})]}),W.jsxs("optgroup",{label:"E-commerce Próprio",children:[W.jsx("option",{value:"shopify",children:"Shopify"}),W.jsx("option",{value:"nuvemshop",children:"Nuvemshop"}),W.jsx("option",{value:"woocommerce",children:"WooCommerce"}),W.jsx("option",{value:"magento",children:"Magento"}),W.jsx("option",{value:"opencart",children:"OpenCart"}),W.jsx("option",{value:"prestashop",children:"PrestaShop"}),W.jsx("option",{value:"tray",children:"Tray Commerce"}),W.jsx("option",{value:"vtex",children:"VTEX"})]}),W.jsxs("optgroup",{label:"Marketplaces Internacionais",children:[W.jsx("option",{value:"amazon-us",children:"Amazon US"}),W.jsx("option",{value:"ebay",children:"eBay"}),W.jsx("option",{value:"etsy",children:"Etsy"}),W.jsx("option",{value:"aliexpress",children:"AliExpress"})]}),W.jsxs("optgroup",{label:"Redes Sociais",children:[W.jsx("option",{value:"facebook-shop",children:"Facebook Shop"}),W.jsx("option",{value:"instagram-shop",children:"Instagram Shopping"}),W.jsx("option",{value:"whatsapp-business",children:"WhatsApp Business"})]})]})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Gateway de Pagamento"}),W.jsxs("select",{value:o.gateway,onChange:e=>w("gateway",e.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[W.jsxs("optgroup",{label:"Gateways Nacionais",children:[W.jsx("option",{value:"mercado-pago",children:"Mercado Pago"}),W.jsx("option",{value:"pagseguro",children:"PagSeguro"}),W.jsx("option",{value:"cielo",children:"Cielo"}),W.jsx("option",{value:"rede",children:"Rede"}),W.jsx("option",{value:"getnet",children:"Getnet"}),W.jsx("option",{value:"stone",children:"Stone"}),W.jsx("option",{value:"pagar-me",children:"Pagar.me"}),W.jsx("option",{value:"wirecard",children:"Wirecard"}),W.jsx("option",{value:"asaas",children:"Asaas"}),W.jsx("option",{value:"ebanx",children:"EBANX"})]}),W.jsxs("optgroup",{label:"Gateways Internacionais",children:[W.jsx("option",{value:"paypal",children:"PayPal"}),W.jsx("option",{value:"stripe",children:"Stripe"}),W.jsx("option",{value:"square",children:"Square"}),W.jsx("option",{value:"braintree",children:"Braintree"}),W.jsx("option",{value:"adyen",children:"Adyen"}),W.jsx("option",{value:"checkout",children:"Checkout.com"})]}),W.jsxs("optgroup",{label:"Pagamento Digital",children:[W.jsx("option",{value:"pix",children:"PIX"}),W.jsx("option",{value:"picpay",children:"PicPay"}),W.jsx("option",{value:"payoneer",children:"Payoneer"}),W.jsx("option",{value:"skrill",children:"Skrill"})]})]})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Margem de Lucro (%)"}),W.jsxs("div",{className:"relative",children:[W.jsx(h,{className:"absolute left-3 top-3 h-5 w-5 text-gray-400"}),W.jsx("input",{type:"number",value:o.margemLucro,onChange:e=>w("margemLucro",parseFloat(e.target.value)||0),className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"30"})]})]}),p>0&&W.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:W.jsxs("p",{className:"text-sm text-blue-600",children:["Taxa de câmbio atual: ",o.moedaOrigem," → ",o.moedaVenda," = ",p.toFixed(4)]})}),v()&&W.jsxs("button",{onClick:x,disabled:y||o.custoProduto<=0||p<=0,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center",children:[W.jsx(u,{className:"h-5 w-5 mr-2"}),y?"Calculando...":"Calcular Preço"]}),W.jsxs("button",{onClick:()=>{i({custoProduto:0,custosAdicionais:0,moedaOrigem:"USD",moedaVenda:"BRL",plataforma:"mercado-livre",gateway:"mercado-pago",margemLucro:30}),c(null)},className:"w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center",children:[W.jsx(T,{className:"h-5 w-5 mr-2"}),"Limpar Formulário"]}),W.jsx("div",{className:"p-4 rounded-lg "+(v()?"bg-orange-50":"bg-green-50"),children:W.jsxs("p",{className:"text-sm flex items-center "+(v()?"text-orange-600":"text-green-600"),children:[W.jsx(h,{className:"h-4 w-4 mr-2"}),v()?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real"]})})]})]}),W.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[W.jsxs("div",{className:"flex items-center mb-6",children:[W.jsx(R,{className:"h-6 w-6 text-green-600 mr-2"}),W.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Resultado do Cálculo"})]}),l?W.jsxs("div",{className:"space-y-6",children:[W.jsxs("div",{className:"text-center bg-green-50 p-6 rounded-lg",children:[W.jsx("h3",{className:"text-2xl font-bold text-green-600 mb-2",children:"Preço de Venda Sugerido"}),W.jsxs("p",{className:"text-4xl font-bold text-green-700",children:[o.moedaVenda," ",l.precoVenda.toFixed(2)]})]}),W.jsxs("div",{className:"space-y-4",children:[W.jsx("h4",{className:"text-lg font-semibold text-gray-900",children:"Detalhamento:"}),W.jsxs("div",{className:"space-y-3",children:[W.jsxs("div",{className:"flex justify-between",children:[W.jsx("span",{className:"text-gray-600",children:"Custo do Produto:"}),W.jsxs("span",{className:"font-medium",children:[o.moedaOrigem," ",l.detalhes.custoProduto.toFixed(2)]})]}),W.jsxs("div",{className:"flex justify-between",children:[W.jsx("span",{className:"text-gray-600",children:"Custos Adicionais:"}),W.jsxs("span",{className:"font-medium",children:[o.moedaOrigem," ",l.detalhes.custosAdicionais.toFixed(2)]})]}),W.jsxs("div",{className:"flex justify-between",children:[W.jsx("span",{className:"text-gray-600",children:"Taxa de Câmbio:"}),W.jsx("span",{className:"font-medium",children:l.detalhes.taxaCambio.toFixed(4)})]}),W.jsxs("div",{className:"flex justify-between",children:[W.jsx("span",{className:"text-gray-600",children:"Custo Convertido:"}),W.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.custoConvertido.toFixed(2)]})]}),W.jsxs("div",{className:"flex justify-between",children:[W.jsx("span",{className:"text-gray-600",children:"Taxa da Plataforma:"}),W.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.taxaPlataforma.toFixed(2)]})]}),W.jsxs("div",{className:"flex justify-between",children:[W.jsx("span",{className:"text-gray-600",children:"Taxa do Gateway:"}),W.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.taxaGateway.toFixed(2)]})]}),W.jsxs("div",{className:"flex justify-between border-t pt-3",children:[W.jsx("span",{className:"text-gray-600",children:"Total de Taxas:"}),W.jsxs("span",{className:"font-medium",children:[o.moedaVenda," ",l.detalhes.taxaTotal.toFixed(2)]})]}),W.jsxs("div",{className:"flex justify-between",children:[W.jsxs("span",{className:"text-gray-600",children:["Margem de Lucro (",o.margemLucro,"%):"]}),W.jsxs("span",{className:"font-medium text-green-600",children:[o.moedaVenda," ",l.detalhes.valorMargemBRL.toFixed(2)]})]})]})]})]}):W.jsxs("div",{className:"text-center text-gray-500 py-12",children:[W.jsx(u,{className:"h-16 w-16 mx-auto mb-4 opacity-50"}),W.jsx("p",{children:'Preencha os dados e clique em "Calcular Preço" para ver o resultado'})]})]})]})})]}):W.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center",children:W.jsx("div",{children:"Carregando..."})})},ul=()=>{const t=s(),[r,n]=e.useState(null),a=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:W.jsx(u,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:W.jsx(U,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:W.jsx(h,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:W.jsx(E,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Mercado Pago"',"4. Complete o pagamento através do Mercado Pago","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return W.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:W.jsxs("div",{className:"container mx-auto px-4 py-8",children:[W.jsxs(d.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[W.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:W.jsx(k,{className:"w-6 h-6 text-gray-600"})}),W.jsxs("div",{className:"flex items-center gap-3",children:[W.jsx(I,{className:"w-8 h-8 text-blue-600"}),W.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),W.jsxs("div",{className:"max-w-4xl mx-auto",children:[W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[W.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),W.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[W.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),a.map((e,t)=>W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[W.jsxs("button",{onClick:()=>{return t=e.id,void n(r===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[W.jsxs("div",{className:"flex items-center gap-4",children:[W.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),W.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),W.jsx(d.div,{animate:{rotate:r===e.id?90:0},transition:{duration:.2},children:W.jsx(O,{className:"w-5 h-5 text-gray-500"})})]}),W.jsx(A,{children:r===e.id&&W.jsx(d.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:W.jsxs("div",{className:"p-6 pt-4",children:[W.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>W.jsx(d.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&W.jsxs(d.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[W.jsx(D,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),W.jsxs(d.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[W.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),W.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>W.jsxs(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[W.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),W.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),W.jsxs(d.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",onSubmit:async e=>{e.preventDefault();const t=e.target,r=new FormData(t),n=r.get("nome"),a=r.get("email"),s=r.get("mensagem");try{await fetch("https://formspree.io/f/xwkzqgqg",{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify({nome:n,email:a,mensagem:s})}),alert("Mensagem enviada com sucesso!"),t.reset()}catch{alert("Erro ao enviar mensagem. Tente novamente.")}},children:[W.jsx(L,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),W.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),W.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),W.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[W.jsx("input",{name:"nome",required:!0,placeholder:"Seu nome",className:"p-3 rounded-xl text-gray-800"}),W.jsx("input",{name:"email",required:!0,type:"email",placeholder:"Seu e-mail",className:"p-3 rounded-xl text-gray-800"}),W.jsx("input",{name:"mensagem",required:!0,placeholder:"Sua mensagem",className:"p-3 rounded-xl text-gray-800"})]}),W.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Enviar Mensagem"})]})]})]})})},hl=()=>{const{loading:e,user:t}=Vs();return console.log("=== AppWithAuth carregando ==="),console.log("Loading:",e,"User:",t),e?W.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:W.jsxs("div",{className:"text-center",children:[W.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),W.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):W.jsx(i,{children:W.jsxs("div",{className:"App",children:[W.jsxs(l,{children:[W.jsx(c,{path:"/welcome",element:W.jsx($s,{})}),W.jsx(c,{path:"/login",element:W.jsx(Gs,{})}),W.jsx(c,{path:"/login-simple",element:W.jsx(qs,{})}),W.jsx(c,{path:"/signup",element:W.jsx(Gs,{})}),W.jsx(c,{path:"/help",element:W.jsx(ul,{})}),W.jsx(c,{path:"/payment",element:W.jsx(zs,{children:W.jsx(ll,{})})}),W.jsx(c,{path:"/dashboard",element:W.jsx(zs,{children:W.jsx(dl,{})})}),W.jsx(c,{path:"/",element:t?W.jsx(n,{to:"/dashboard",replace:!0}):W.jsx(n,{to:"/welcome",replace:!0})}),W.jsx(c,{path:"*",element:W.jsx(n,{to:"/welcome",replace:!0})})]}),W.jsx(Xe,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})};let pl;async function ml(){if(pl){pl.prompt();const{outcome:e}=await pl.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}pl=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),pl=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",ml),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const gl=document.createElement("style");gl.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(gl),console.log("=== main.tsx carregando AppWithAuth com sistema de idiomas ===");K.createRoot(document.getElementById("root")).render(W.jsx(Y,{children:W.jsx(hl,{})}));
