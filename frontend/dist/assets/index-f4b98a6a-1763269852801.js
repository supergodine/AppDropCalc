import{r as e,b as t,a as r}from"./vendor-5fcaeebf-1763269852801.js";import{u as a,N as n,L as s,a as o,b as i,B as l,R as c,c as d}from"./router-0c3e8c14-1763269852801.js";import{m as u,C as h,T as p,Z as m,A as g,U as f,M as y,L as x,E as b,a as v,b as w,c as N,S as C,G as k,d as S,e as E,f as j,g as I,h as _,X as T,i as P,j as A,I as R,D as O,k as L,H as D,l as M,P as U,n as F,o as B}from"./ui-93d1abd8-1763269852801.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var H={exports:{}},V={},$=e,z=Symbol.for("react.element"),G=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,W=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J={key:!0,ref:!0,__self:!0,__source:!0};function K(e,t,r){var a,n={},s=null,o=null;for(a in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)q.call(t,a)&&!J.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:z,type:e,key:s,ref:o,props:n,_owner:W.current}}V.Fragment=G,V.jsx=K,V.jsxs=K,H.exports=V;var Z=H.exports,X={},Y=t;X.createRoot=Y.createRoot,X.hydrateRoot=Y.hydrateRoot;const Q={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},ee=e.createContext(void 0),te=({children:t})=>{const[r,a]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&a(e)},[]);const n={language:r,setLanguage:e=>{a(e),localStorage.setItem("language",e)},t:e=>Q[r][e]||e};return Z.jsx(ee.Provider,{value:n,children:t})};let re,ae,ne,se={data:""},oe=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||se},ie=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,le=/\/\*[^]*?\*\/|  +/g,ce=/\n+/g,de=(e,t)=>{let r="",a="",n="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+o+";":a+="f"==s[1]?de(o,s):s+"{"+de(o,"k"==s[1]?"":t)+"}":"object"==typeof o?a+=de(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=de.p?de.p(s,o):s+":"+o+";")}return r+(t&&n?t+"{"+n+"}":n)+a},ue={},he=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+he(e[r]);return t}return e},pe=(e,t,r,a,n)=>{let s=he(e),o=ue[s]||(ue[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!ue[o]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=ie.exec(e.replace(le,""));)t[4]?a.shift():t[3]?(r=t[3].replace(ce," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(ce," ").trim();return a[0]})(e);ue[o]=de(n?{["@keyframes "+o]:t}:t,r?"":"."+o)}let i=r&&ue.g?ue.g:null;return r&&(ue.g=ue[o]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(ue[o],t,a,i),o};function me(e){let t=this||{},r=e.call?e(t.p):e;return pe(r.unshift?r.raw?((e,t,r)=>e.reduce((e,a,n)=>{let s=t[n];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":de(e,""):!1===e?"":e}return e+a+(null==s?"":s)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,oe(t.target),t.g,t.o,t.k)}me.bind({g:1});let ge=me.bind({k:1});function fe(e,t){let r=this||{};return function(){let a=arguments;function n(s,o){let i=Object.assign({},s),l=i.className||n.className;r.p=Object.assign({theme:ae&&ae()},i),r.o=/ *go\d+/.test(l),i.className=me.apply(r,a)+(l?" "+l:""),t&&(i.ref=o);let c=e;return e[0]&&(c=i.as||e,delete i.as),ne&&c[0]&&ne(i),re(c,i)}return t?t(n):n}}var ye=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,xe=(()=>{let e=0;return()=>(++e).toString()})(),be=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ve="default",we=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return we(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},Ne=[],Ce={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},ke={},Se=(e,t=ve)=>{ke[t]=we(ke[t]||Ce,e),Ne.forEach(([e,r])=>{e===t&&r(ke[t])})},Ee=e=>Object.keys(ke).forEach(t=>Se(e,t)),je=(e=ve)=>t=>{Se(t,e)},Ie={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_e=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||xe()}))(t,e,r);return je(a.toasterId||(e=>Object.keys(ke).find(t=>ke[t].toasts.some(t=>t.id===e)))(a.id))({type:2,toast:a}),a.id},Te=(e,t)=>_e("blank")(e,t);Te.error=_e("error"),Te.success=_e("success"),Te.loading=_e("loading"),Te.custom=_e("custom"),Te.dismiss=(e,t)=>{let r={type:3,toastId:e};t?je(t)(r):Ee(r)},Te.dismissAll=e=>Te.dismiss(void 0,e),Te.remove=(e,t)=>{let r={type:4,toastId:e};t?je(t)(r):Ee(r)},Te.removeAll=e=>Te.remove(void 0,e),Te.promise=(e,t,r)=>{let a=Te.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let n=t.success?ye(t.success,e):void 0;return n?Te.success(n,{id:a,...r,...null==r?void 0:r.success}):Te.dismiss(a),e}).catch(e=>{let n=t.error?ye(t.error,e):void 0;n?Te.error(n,{id:a,...r,...null==r?void 0:r.error}):Te.dismiss(a)}),e};var Pe=(t,r="default")=>{let{toasts:a,pausedAt:n}=((t={},r=ve)=>{let[a,n]=e.useState(ke[r]||Ce),s=e.useRef(ke[r]);e.useEffect(()=>(s.current!==ke[r]&&n(ke[r]),Ne.push([r,n]),()=>{let e=Ne.findIndex(([e])=>e===r);e>-1&&Ne.splice(e,1)}),[r]);let o=a.toasts.map(e=>{var r,a,n;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(a=t[e.type])?void 0:a.duration)||(null==t?void 0:t.duration)||Ie[e.type],style:{...t.style,...null==(n=t[e.type])?void 0:n.style,...e.style}}});return{...a,toasts:o}})(t,r),s=e.useRef(new Map).current,o=e.useCallback((e,t=1e3)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),i({type:4,toastId:e})},t);s.set(e,r)},[]);e.useEffect(()=>{if(n)return;let e=Date.now(),t=a.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout(()=>Te.dismiss(t.id,r),a);t.visible&&Te.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[a,n,r]);let i=e.useCallback(je(r),[r]),l=e.useCallback(()=>{i({type:5,time:Date.now()})},[i]),c=e.useCallback((e,t)=>{i({type:1,toast:{id:e,height:t}})},[i]),d=e.useCallback(()=>{n&&i({type:6,time:Date.now()})},[n,i]),u=e.useCallback((e,t)=>{let{reverseOrder:r=!1,gutter:n=8,defaultPosition:s}=t||{},o=a.filter(t=>(t.position||s)===(e.position||s)&&t.height),i=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<i&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+n,0)},[a]);return e.useEffect(()=>{a.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},Ae=ge`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Re=ge`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Oe=ge`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Le=fe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Re} 0.15s ease-out forwards;
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
    animation: ${Oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,De=ge`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Me=fe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${De} 1s linear infinite;
`,Ue=ge`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Fe=ge`
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
}`,Be=fe("div")`
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
    animation: ${Fe} 0.2s ease-out forwards;
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
`,He=fe("div")`
  position: absolute;
`,Ve=fe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$e=ge`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ze=fe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ge=({toast:t})=>{let{icon:r,type:a,iconTheme:n}=t;return void 0!==r?"string"==typeof r?e.createElement(ze,null,r):r:"blank"===a?null:e.createElement(Ve,null,e.createElement(Me,{...n}),"loading"!==a&&e.createElement(He,null,"error"===a?e.createElement(Le,{...n}):e.createElement(Be,{...n})))},qe=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,We=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Je=fe("div")`
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
`,Ke=fe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ze=e.memo(({toast:t,position:r,style:a,children:n})=>{let s=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,n]=be()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[qe(r),We(r)];return{animation:t?`${ge(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ge(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},o=e.createElement(Ge,{toast:t}),i=e.createElement(Ke,{...t.ariaProps},ye(t.message,t));return e.createElement(Je,{className:t.className,style:{...s,...a,...t.style}},"function"==typeof n?n({icon:o,message:i}):e.createElement(e.Fragment,null,o,i))});!function(e,t,r,a){de.p=t,re=e,ae=r,ne=a}(e.createElement);var Xe=({id:t,className:r,style:a,onHeightUpdate:n,children:s})=>{let o=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;n(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return e.createElement("div",{ref:o,className:r,style:a},s)},Ye=me`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qe=({reverseOrder:t,position:r="top-center",toastOptions:a,gutter:n,children:s,toasterId:o,containerStyle:i,containerClassName:l})=>{let{toasts:c,handlers:d}=Pe(a,o);return e.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(a=>{let o=a.position||r,i=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:be()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...n}})(o,d.calculateOffset(a,{reverseOrder:t,gutter:n,defaultPosition:r}));return e.createElement(Xe,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?Ye:"",style:i},"custom"===a.type?ye(a.message,a):s?s(a):e.createElement(Ze,{toast:a,position:o}))}))},et=Te;const tt={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:tt.getBaseURL(),authSignup:tt.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[tt.auth.signup,tt.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const rt=function(e){const t=[];let r=0;for(let a=0;a<e.length;a++){let n=e.charCodeAt(a);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++a)),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},at={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<e.length;n+=3){const t=e[n],s=n+1<e.length,o=s?e[n+1]:0,i=n+2<e.length,l=i?e[n+2]:0,c=t>>2,d=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,h=63&l;i||(h=64,s||(u=64)),a.push(r[c],r[d],r[u],r[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,a=0;for(;r<e.length;){const n=e[r++];if(n<128)t[a++]=String.fromCharCode(n);else if(n>191&&n<224){const s=e[r++];t[a++]=String.fromCharCode((31&n)<<6|63&s)}else if(n>239&&n<365){const s=((7&n)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[a++]=String.fromCharCode(55296+(s>>10)),t[a++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],o=e[r++];t[a++]=String.fromCharCode((15&n)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<e.length;){const t=r[e.charAt(n++)],s=n<e.length?r[e.charAt(n)]:0;++n;const o=n<e.length?r[e.charAt(n)]:64;++n;const i=n<e.length?r[e.charAt(n)]:64;if(++n,null==t||null==s||null==o||null==i)throw new nt;const l=t<<2|s>>4;if(a.push(l),64!==o){const e=s<<4&240|o>>2;if(a.push(e),64!==i){const e=o<<6&192|i;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class nt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const st=function(e){return function(e){const t=rt(e);return at.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ot=function(e){try{return at.decodeString(e,!0)}catch(se){console.error("base64Decode failed: ",se)}return null};
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
const it=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,lt=()=>{try{return it()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(se){return}const t=e&&ot(e[1]);return t&&JSON.parse(t)})()}catch(se){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${se}`)}},ct=()=>lt()?.config,dt=e=>lt()?.[`_${e}`];
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
class ut{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
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
 */function ht(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const pt={};let mt=!1;function gt(e,t){if("undefined"==typeof window||"undefined"==typeof document||!ht(window.location.host)||pt[e]===t||pt[e]||mt)return;function r(e){return`__firebase__banner__${e}`}pt[e]=t;const a="__firebase__banner",n=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(pt))pt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{mt=!0,function(){const e=document.getElementById(a);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(a),t=r("text"),o=document.getElementById(t)||document.createElement("span"),i=r("learnmore"),l=document.getElementById(i)||document.createElement("a"),c=r("preprendIcon"),d=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,i);const r=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(d,c),t.append(d,o,l,r),document.body.appendChild(t)}n?(o.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function ft(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xt.prototype.create)}}class xt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,n=this.errors[e],s=n?function(e,t){return e.replace(bt,(e,r)=>{const a=t[r];return null!=a?String(a):`<${r}?>`})}(n,r):"Error",o=`${this.serviceName}: ${s} (${a}).`;return new yt(a,o,r)}}const bt=/\{\$([^}]+)}/g;function vt(e,t){if(e===t)return!0;const r=Object.keys(e),a=Object.keys(t);for(const n of r){if(!a.includes(n))return!1;const r=e[n],s=t[n];if(wt(r)&&wt(s)){if(!vt(r,s))return!1}else if(r!==s)return!1}for(const n of a)if(!r.includes(n))return!1;return!0}function wt(e){return null!==e&&"object"==typeof e}
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
 */function Nt(e){const t=[];for(const[r,a]of Object.entries(e))Array.isArray(a)?a.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}class Ct{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");a=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===a.next&&(a.next=kt),void 0===a.error&&(a.error=kt),void 0===a.complete&&(a.complete=kt);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(se){}}),this.observers.push(a),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(se){"undefined"!=typeof console&&console.error&&console.error(se)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kt(){}
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
 */function St(e){return e&&e._delegate?e._delegate:e}class Et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const jt="[DEFAULT]";
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
 */class It{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ut;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(se){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(se){if(r)return null;throw se}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch(se){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(se){}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[n,s]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(n)&&s.resolve(a)}return a}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(r)??new Set;a.add(e),this.onInitCallbacks.set(r,a);const n=this.instances.get(r);return n&&e(n,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===jt?void 0:a),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}var a;return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _t{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new It(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Tt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Tt||(Tt={}));const Pt={debug:Tt.DEBUG,verbose:Tt.VERBOSE,info:Tt.INFO,warn:Tt.WARN,error:Tt.ERROR,silent:Tt.SILENT},At=Tt.INFO,Rt={[Tt.DEBUG]:"log",[Tt.VERBOSE]:"log",[Tt.INFO]:"info",[Tt.WARN]:"warn",[Tt.ERROR]:"error"},Ot=(e,t,...r)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),n=Rt[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${a}]  ${e.name}:`,...r)};class Lt{constructor(e){this.name=e,this._logLevel=At,this._logHandler=Ot,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Tt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Pt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Tt.DEBUG,...e),this._logHandler(this,Tt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Tt.VERBOSE,...e),this._logHandler(this,Tt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Tt.INFO,...e),this._logHandler(this,Tt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Tt.WARN,...e),this._logHandler(this,Tt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Tt.ERROR,...e),this._logHandler(this,Tt.ERROR,...e)}}let Dt,Mt;const Ut=new WeakMap,Ft=new WeakMap,Bt=new WeakMap,Ht=new WeakMap,Vt=new WeakMap;let $t={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Ft.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Bt.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return qt(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function zt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Mt||(Mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Wt(this),t),qt(Ut.get(this))}:function(...t){return qt(e.apply(Wt(this),t))}:function(t,...r){const a=e.call(Wt(this),t,...r);return Bt.set(a,t.sort?t.sort():[t]),qt(a)}}function Gt(e){return"function"==typeof e?zt(e):(e instanceof IDBTransaction&&function(e){if(Ft.has(e))return;const t=new Promise((t,r)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",s),e.removeEventListener("abort",s)},n=()=>{t(),a()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",s),e.addEventListener("abort",s)});Ft.set(e,t)}(e),t=e,(Dt||(Dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,$t):e);var t}function qt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",s)},n=()=>{t(qt(e.result)),a()},s=()=>{r(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Ut.set(t,e)}).catch(()=>{}),Vt.set(t,e),t}(e);if(Ht.has(e))return Ht.get(e);const t=Gt(e);return t!==e&&(Ht.set(e,t),Vt.set(t,e)),t}const Wt=e=>Vt.get(e);const Jt=["get","getKey","getAll","getAllKeys","count"],Kt=["put","add","delete","clear"],Zt=new Map;function Xt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Zt.get(t))return Zt.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,n=Kt.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!Jt.includes(r))return;const s=async function(e,...t){const s=this.transaction(e,n?"readwrite":"readonly");let o=s.store;return a&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),n&&s.done]))[0]};return Zt.set(t,s),s}$t=(e=>({...e,get:(t,r,a)=>Xt(t,r)||e.get(t,r,a),has:(t,r)=>!!Xt(t,r)||e.has(t,r)}))($t);
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
class Yt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Qt="@firebase/app",er="0.14.5",tr=new Lt("@firebase/app"),rr="@firebase/app-compat",ar="@firebase/analytics-compat",nr="@firebase/analytics",sr="@firebase/app-check-compat",or="@firebase/app-check",ir="@firebase/auth",lr="@firebase/auth-compat",cr="@firebase/database",dr="@firebase/data-connect",ur="@firebase/database-compat",hr="@firebase/functions",pr="@firebase/functions-compat",mr="@firebase/installations",gr="@firebase/installations-compat",fr="@firebase/messaging",yr="@firebase/messaging-compat",xr="@firebase/performance",br="@firebase/performance-compat",vr="@firebase/remote-config",wr="@firebase/remote-config-compat",Nr="@firebase/storage",Cr="@firebase/storage-compat",kr="@firebase/firestore",Sr="@firebase/ai",Er="@firebase/firestore-compat",jr="firebase",Ir="[DEFAULT]",_r={[Qt]:"fire-core",[rr]:"fire-core-compat",[nr]:"fire-analytics",[ar]:"fire-analytics-compat",[or]:"fire-app-check",[sr]:"fire-app-check-compat",[ir]:"fire-auth",[lr]:"fire-auth-compat",[cr]:"fire-rtdb",[dr]:"fire-data-connect",[ur]:"fire-rtdb-compat",[hr]:"fire-fn",[pr]:"fire-fn-compat",[mr]:"fire-iid",[gr]:"fire-iid-compat",[fr]:"fire-fcm",[yr]:"fire-fcm-compat",[xr]:"fire-perf",[br]:"fire-perf-compat",[vr]:"fire-rc",[wr]:"fire-rc-compat",[Nr]:"fire-gcs",[Cr]:"fire-gcs-compat",[kr]:"fire-fst",[Er]:"fire-fst-compat",[Sr]:"fire-vertex","fire-js":"fire-js",[jr]:"fire-js-all"},Tr=new Map,Pr=new Map,Ar=new Map;function Rr(e,t){try{e.container.addComponent(t)}catch(se){tr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,se)}}function Or(e){const t=e.name;if(Ar.has(t))return tr.debug(`There were multiple attempts to register component ${t}.`),!1;Ar.set(t,e);for(const r of Tr.values())Rr(r,e);for(const r of Pr.values())Rr(r,e);return!0}function Lr(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Dr(e){return null!=e&&void 0!==e.settings}
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
 */const Mr=new xt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Ur{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}
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
 */const Fr="12.5.0";function Br(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const a={name:Ir,automaticDataCollectionEnabled:!0,...t},n=a.name;if("string"!=typeof n||!n)throw Mr.create("bad-app-name",{appName:String(n)});if(r||(r=ct()),!r)throw Mr.create("no-options");const s=Tr.get(n);if(s){if(vt(r,s.options)&&vt(a,s.config))return s;throw Mr.create("duplicate-app",{appName:n})}const o=new _t(n);for(const l of Ar.values())o.addComponent(l);const i=new Ur(r,a,o);return Tr.set(n,i),i}function Hr(e,t,r){let a=_r[e]??e;r&&(a+=`-${r}`);const n=a.match(/\s|\//),s=t.match(/\s|\//);if(n||s){const e=[`Unable to register library "${a}" with version "${t}":`];return n&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),n&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void tr.warn(e.join(" "))}Or(new Et(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}
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
 */const Vr="firebase-heartbeat-store";let $r=null;function zr(){return $r||($r=function(e,t,{blocked:r,upgrade:a,blocking:n,terminated:s}={}){const o=indexedDB.open(e,t),i=qt(o);return a&&o.addEventListener("upgradeneeded",e=>{a(qt(o.result),e.oldVersion,e.newVersion,qt(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),i.then(e=>{s&&e.addEventListener("close",()=>s()),n&&e.addEventListener("versionchange",e=>n(e.oldVersion,e.newVersion,e))}).catch(()=>{}),i}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Vr)}catch(se){console.warn(se)}}}).catch(e=>{throw Mr.create("idb-open",{originalErrorMessage:e.message})})),$r}async function Gr(e,t){try{const r=(await zr()).transaction(Vr,"readwrite"),a=r.objectStore(Vr);await a.put(t,qr(e)),await r.done}catch(se){if(se instanceof yt)tr.warn(se.message);else{const t=Mr.create("idb-set",{originalErrorMessage:se?.message});tr.warn(t.message)}}}function qr(e){return`${e.name}!${e.options.appId}`}
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
 */class Wr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kr(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Jr();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let a=1;a<e.length;a++)e[a].date<r&&(r=e[a].date,t=a);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(se){tr.warn(se)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Jr(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let a=e.slice();for(const n of e){const e=r.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),Zr(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Zr(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}(this._heartbeatsCache.heartbeats),a=st(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(se){return tr.warn(se),""}}}function Jr(){return(new Date).toISOString().substring(0,10)}class Kr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(se){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(a),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{t(n.error?.message||"")}}catch(r){t(r)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await zr()).transaction(Vr),r=await t.objectStore(Vr).get(qr(e));return await t.done,r}catch(se){if(se instanceof yt)tr.warn(se.message);else{const t=Mr.create("idb-get",{originalErrorMessage:se?.message});tr.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Gr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Gr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Zr(e){return st(JSON.stringify({version:2,heartbeats:e})).length}var Xr;function Yr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Xr="",Or(new Et("platform-logger",e=>new Yt(e),"PRIVATE")),Or(new Et("heartbeat",e=>new Wr(e),"PRIVATE")),Hr(Qt,er,Xr),Hr(Qt,er,"esm2020"),Hr("fire-js","");const Qr=Yr,ea=new xt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ta=new Lt("@firebase/auth");function ra(e,...t){ta.logLevel<=Tt.ERROR&&ta.error(`Auth (${Fr}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,...t){throw la(e,...t)}function na(e,...t){return la(e,...t)}function sa(e,t,r){const a={...Qr(),[t]:r};return new xt("auth","Firebase",a).create(t,{appName:e.name})}function oa(e){return sa(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ia(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&aa(e,"argument-error"),sa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function la(e,...t){if("string"!=typeof e){const r=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=e.name),e._errorFactory.create(r,...a)}return ea.create(e,...t)}function ca(e,t,...r){if(!e)throw la(t,...r)}function da(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ra(t),new Error(t)}function ua(e,t){e||da(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(){return"undefined"!=typeof self&&self.location?.href||""}function pa(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==pa()&&"https:"!==pa()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,ua(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ma()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e,t){ua(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void da("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void da("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void da("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ba=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],va=new ga(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Na(e,t,r,a,n={}){return Ca(e,n,async()=>{let n={},s={};a&&("GET"===t?s=a:n={body:JSON.stringify(a)});const o=Nt({key:e.config.apiKey,...s}).slice(1),i=await e._getAdditionalHeaders();i["Content-Type"]="application/json",e.languageCode&&(i["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:i,...n};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ht(e.emulatorConfig.host)&&(l.credentials="include"),ya.fetch()(await ka(e,e.config.apiHost,r,o),l)})}async function Ca(e,t,r){e._canInitEmulator=!1;const a={...xa,...t};try{const t=new Sa(e),n=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw Ea(e,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const t=n.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Ea(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw Ea(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw Ea(e,"user-disabled",s);const i=a[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw sa(e,i,o);aa(e,i)}}catch(se){if(se instanceof yt)throw se;aa(e,"network-request-failed",{message:String(se)})}}async function ka(e,t,r,a){const n=`${t}${r}?${a}`,s=e,o=s.config.emulator?fa(e.config,n):`${e.config.apiScheme}://${n}`;if(ba.includes(r)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}class Sa{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(na(this.auth,"network-request-failed")),va.get())})}}function Ea(e,t,r){const a={appName:e.name};r.email&&(a.email=r.email),r.phoneNumber&&(a.phoneNumber=r.phoneNumber);const n=na(e,t,a);return n.customData._tokenResponse=r,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(e,t){return Na(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(se){}}function _a(e){return 1e3*Number(e)}function Ta(e){const[t,r,a]=e.split(".");if(void 0===t||void 0===r||void 0===a)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const e=ot(r);return e?JSON.parse(e):(ra("Failed to decode base64 JWT payload"),null)}catch(se){return ra("Caught error parsing JWT payload as JSON",se?.toString()),null}}function Pa(e){const t=Ta(e);return ca(t,"internal-error"),ca(void 0!==t.exp,"internal-error"),ca(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(e,t,r=!1){if(r)return t;try{return await t}catch(se){throw se instanceof yt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(se)&&e.auth.currentUser===e&&await e.auth.signOut(),se}}class Ra{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(se){return void("auth/network-request-failed"===se?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function La(e){const t=e.auth,r=await e.getIdToken(),a=await Aa(e,ja(t,{idToken:r}));ca(a?.users.length,t,"internal-error");const n=a.users[0];e._notifyReloadListener(n);const s=n.providerUserInfo?.length?Da(n.providerUserInfo):[],o=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,s),i=e.isAnonymous,l=!(e.email&&n.passwordHash||o?.length),c=!!i&&l,d={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new Oa(n.createdAt,n.lastLoginAt),isAnonymous:c};Object.assign(e,d)}function Da(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ca(e.idToken,"internal-error"),ca(void 0!==e.idToken,"internal-error"),ca(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Pa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ca(0!==e.length,"internal-error");const t=Pa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(ca(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:n}=await async function(e,t){const r=await Ca(e,{},async()=>{const r=Nt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:n}=e.config,s=await ka(e,a,"/v1/token",`key=${n}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const i={method:"POST",headers:o,body:r};return e.emulatorConfig&&ht(e.emulatorConfig.host)&&(i.credentials="include"),ya.fetch()(s,i)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,a,Number(n))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:n}=t,s=new Ma;return r&&(ca("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),a&&(ca("string"==typeof a,"internal-error",{appName:e}),s.accessToken=a),n&&(ca("number"==typeof n,"internal-error",{appName:e}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return da("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e,t){ca("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Fa{constructor({uid:e,auth:t,stsTokenManager:r,...a}){this.providerId="firebase",this.proactiveRefresh=new Ra(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Oa(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return ca(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=St(e),a=await r.getIdToken(t),n=Ta(a);ca(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const s="object"==typeof n.firebase?n.firebase:void 0,o=s?.sign_in_provider;return{claims:n,token:a,authTime:Ia(_a(n.auth_time)),issuedAtTime:Ia(_a(n.iat)),expirationTime:Ia(_a(n.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=St(e);await La(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ca(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fa({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ca(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dr(this.auth.app))return Promise.reject(oa(this.auth));const e=await this.getIdToken();return await Aa(this,async function(e,t){return Na(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,a=t.email??void 0,n=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,i=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:h,providerData:p,stsTokenManager:m}=t;ca(d&&m,e,"internal-error");const g=Ma.fromJSON(this.name,m);ca("string"==typeof d,e,"internal-error"),Ua(r,e.name),Ua(a,e.name),ca("boolean"==typeof u,e,"internal-error"),ca("boolean"==typeof h,e,"internal-error"),Ua(n,e.name),Ua(s,e.name),Ua(o,e.name),Ua(i,e.name),Ua(l,e.name),Ua(c,e.name);const f=new Fa({uid:d,auth:e,email:a,emailVerified:u,displayName:r,isAnonymous:h,photoURL:s,phoneNumber:n,tenantId:o,stsTokenManager:g,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(f.providerData=p.map(e=>({...e}))),i&&(f._redirectEventId=i),f}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ma;a.updateFromServerResponse(t);const n=new Fa({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await La(n),n}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];ca(void 0!==a.localId,"internal-error");const n=void 0!==a.providerUserInfo?Da(a.providerUserInfo):[],s=!(a.email&&a.passwordHash||n?.length),o=new Ma;o.updateFromIdToken(r);const i=new Fa({uid:a.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:n,metadata:new Oa(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash||n?.length)};return Object.assign(i,l),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Map;function Ha(e){ua(e instanceof Function,"Expected a class definition");let t=Ba.get(e);return t?(ua(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ba.set(e,t),t)}
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
 */class Va{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Va.type="NONE";const $a=Va;
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
 */function za(e,t,r){return`firebase:${e}:${t}:${r}`}class Ga{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:n}=this.auth;this.fullUserKey=za(this.userKey,a.apiKey,n),this.fullPersistenceKey=za("persistence",a.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await ja(this.auth,{idToken:e}).catch(()=>{});return t?Fa._fromGetAccountInfoResponse(this.auth,t,e):null}return Fa._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ga(Ha($a),e,r);const a=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let n=a[0]||Ha($a);const s=za(r,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){let r;if("string"==typeof t){const a=await ja(e,{idToken:t}).catch(()=>{});if(!a)break;r=await Fa._fromGetAccountInfoResponse(e,a,t)}else r=Fa._fromJSON(e,t);l!==n&&(o=r),n=l;break}}catch{}const i=a.filter(e=>e._shouldAllowMigration);return n._shouldAllowMigration&&i.length?(n=i[0],o&&await n._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==n)try{await e._remove(s)}catch{}})),new Ga(n,e,r)):new Ga(n,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Za(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ya(t))return"Blackberry";if(Qa(t))return"Webos";if(Ja(t))return"Safari";if((t.includes("chrome/")||Ka(t))&&!t.includes("edge/"))return"Chrome";if(Xa(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===r?.length)return r[1]}return"Other"}function Wa(e=ft()){return/firefox\//i.test(e)}function Ja(e=ft()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ka(e=ft()){return/crios\//i.test(e)}function Za(e=ft()){return/iemobile/i.test(e)}function Xa(e=ft()){return/android/i.test(e)}function Ya(e=ft()){return/blackberry/i.test(e)}function Qa(e=ft()){return/webos/i.test(e)}function en(e=ft()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tn(){return function(){const e=ft();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function rn(e=ft()){return en(e)||Xa(e)||Qa(e)||Ya(e)||/windows phone/i.test(e)||Za(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t=[]){let r;switch(e){case"Browser":r=qa(ft());break;case"Worker":r=`${qa(ft())}-${e}`;break;default:r=e}const a=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Fr}/${a}`}
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
 */class nn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,a)=>{try{r(e(t))}catch(se){a(se)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(se){t.reverse();for(const r of t)try{r()}catch(Ee){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:se?.message})}}}
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
 */class sn{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cn(this),this.idTokenSubscription=new cn(this),this.beforeStateQueue=new nn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ea,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ha(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ga.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(se){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ja(this,{idToken:e}),r=await Fa._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Dr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,n=r?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==n||!s?.user||(r=s.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(se){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(se))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ca(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(se){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(se){if("auth/network-request-failed"!==se?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dr(this.app))return Promise.reject(oa(this));const t=e?St(e):null;return t&&ca(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ca(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dr(this.app)?Promise.reject(oa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dr(this.app)?Promise.reject(oa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ha(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Na(e,"GET","/v2/passwordPolicy",wa(e,t))}
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
 */(this),t=new sn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Na(e,"POST","/v2/accounts:revokeToken",wa(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ha(e)||this._popupRedirectResolver;ca(t,this,"argument-error"),this.redirectPersistenceManager=await Ga.create(this,[Ha(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const n="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ca(o,this,"internal-error"),o.then(()=>{s||n(this.currentUser)}),"function"==typeof t){const n=e.addObserver(t,r,a);return()=>{s=!0,n()}}{const r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ca(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=an(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Dr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){ta.logLevel<=Tt.WARN&&ta.warn(`Auth (${Fr}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ln(e){return St(e)}class cn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new Ct(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return ca(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function un(e,t,r){const a=ln(e);ca(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const n=!!r?.disableWarnings,s=hn(t),{host:o,port:i}=function(e){const t=hn(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const a=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const e=n[1];return{host:e,port:pn(a.substr(e.length+1))}}{const[e,t]=a.split(":");return{host:e,port:pn(t)}}}(t),l=null===i?"":`:${i}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:i,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!a._canInitEmulator)return ca(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),void ca(vt(c,a.config.emulator)&&vt(d,a.emulatorConfig),a,"emulator-config-failed");a.config.emulator=c,a.emulatorConfig=d,a.settings.appVerificationDisabledForTesting=!0,ht(o)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${s}//${o}${l}`),gt("Auth",!0)):n||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function hn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class mn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return da("not implemented")}_getIdTokenResponse(e){return da("not implemented")}_linkToIdToken(e,t){return da("not implemented")}_getReauthenticationResolver(e){return da("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){return async function(e,t,r,a,n={}){const s=await Na(e,t,r,a,n);return"mfaPendingCredential"in s&&aa(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",wa(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends mn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):aa("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:a,...n}=t;if(!r||!a)return null;const s=new fn(r,a);return s.idToken=n.idToken||void 0,s.accessToken=n.accessToken||void 0,s.secret=n.secret,s.nonce=n.nonce,s.pendingToken=n.pendingToken||null,s}_getIdTokenResponse(e){return gn(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class xn extends yn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends xn{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com",bn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class vn extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vn.credential(t,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com",vn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class wn extends xn{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com",wn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Nn extends xn{constructor(){super("twitter.com")}static credential(e,t){return fn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com",Nn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const n=await Fa._fromIdTokenResponse(e,r,a),s=kn(r);return new Cn({user:n,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=kn(r);return new Cn({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function kn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends yt{constructor(e,t,r,a){super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Sn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Sn(e,t,r,a)}}function En(e,t,r,a){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw Sn._fromErrorAndOperation(e,r,t,a);throw r})}const jn="__sak";
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
 */class In{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jn,"1"),this.storage.removeItem(jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends In{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},n=this.storage.getItem(r);tn()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_n.type="LOCAL";const Tn=_n;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends In{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pn.type="SESSION";const An=Pn;
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
class Rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new Rn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:n}=t.data,s=this.handlersMap[a];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const o=Array.from(s).map(async e=>e(t.origin,n)),i=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:i})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function On(e="",t=10){let r="";for(let a=0;a<t;a++)r+=Math.floor(10*Math.random());return e+r}
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
 */Rn.receivers=[];class Ln{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let n,s;return new Promise((o,i)=>{const l=On("",20);a.port1.start();const c=setTimeout(()=>{i(new Error("unsupported_event"))},r);s={messageChannel:a,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),n=setTimeout(()=>{i(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(t.data.response);break;default:clearTimeout(c),clearTimeout(n),i(new Error("invalid_response"))}}},this.handlers.add(s),a.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[a.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}
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
function Mn(){return void 0!==Dn().WorkerGlobalScope&&"function"==typeof Dn().importScripts}
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
const Un="firebaseLocalStorageDb",Fn="firebaseLocalStorage",Bn="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vn(e,t){return e.transaction([Fn],t?"readwrite":"readonly").objectStore(Fn)}function $n(){const e=indexedDB.open(Un,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Fn,{keyPath:Bn})}catch(se){r(se)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Fn)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(Un);return new Hn(e).toPromise()}(),t(await $n()))})})}async function zn(e,t,r){const a=Vn(e,!0).put({[Bn]:t,value:r});return new Hn(a).toPromise()}function Gn(e,t){const r=Vn(e,!0).delete(t);return new Hn(r).toPromise()}class qn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await $n()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(se){if(t++>3)throw se;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rn._getInstance(Mn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Ln(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $n();return await zn(e,jn,"1"),await Gn(e,jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=Vn(e,!1).get(t),a=await new Hn(r).toPromise();return void 0===a?null:a.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Vn(e,!1).getAll();return new Hn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:a,value:n}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(n)&&(this.notifyListeners(a,n),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qn.type="LOCAL";const Wn=qn;
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
function Jn(e,t){return t?Ha(t):(ca(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new ga(3e4,6e4);class Kn extends mn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zn(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
return async function(e,t,r=!1){if(Dr(e.app))return Promise.reject(oa(e));const a="signIn",n=await En(e,a,t),s=await Cn._fromIdTokenResponse(e,a,n);return r||await e._updateCurrentUser(s.user),s}(e.auth,new Kn(e),e.bypassAuthState)}function Xn(e){const{auth:t,user:r}=e;return ca(r,t,"internal-error"),
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
async function(e,t,r=!1){const{auth:a}=e;if(Dr(a.app))return Promise.reject(oa(a));const n="reauthenticate";try{const s=await Aa(e,En(a,n,t,e),r);ca(s.idToken,a,"internal-error");const o=Ta(s.idToken);ca(o,a,"internal-error");const{sub:i}=o;return ca(e.uid===i,a,"user-mismatch"),Cn._forOperation(e,n,s)}catch(se){throw"auth/user-not-found"===se?.code&&aa(a,"user-mismatch"),se}}(r,new Kn(e),e.bypassAuthState)}async function Yn(e){const{auth:t,user:r}=e;return ca(r,t,"internal-error"),async function(e,t,r=!1){const a=await Aa(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Cn._forOperation(e,"link",a)}(r,new Kn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,r,a,n=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(se){this.reject(se)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:n,error:s,type:o}=e;if(s)return void this.reject(s);const i={auth:this.auth,requestUri:t,sessionId:r,tenantId:n||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(i))}catch(se){this.reject(se)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zn;case"linkViaPopup":case"linkViaRedirect":return Yn;case"reauthViaPopup":case"reauthViaRedirect":return Xn;default:aa(this.auth,"internal-error")}}resolve(e){ua(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ua(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new ga(2e3,1e4);class ts extends Qn{constructor(e,t,r,a,n){super(e,t,a,n),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ca(e,this.auth,"internal-error"),e}async onExecution(){ua(1===this.filter.length,"Popup operations only handle one event");const e=On();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(na(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(na(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(na(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,es.get())};e()}}ts.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const rs=new Map;class as extends Qn{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=os(t),a=ss(e);if(!(await a._isAvailable()))return!1;const n="true"===await a._get(r);return await a._remove(r),n}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(se){e=()=>Promise.reject(se)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ns(e,t){rs.set(e._key(),t)}function ss(e){return Ha(e._redirectPersistence)}function os(e){return za("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t,r){return async function(e,t,r){if(Dr(e.app))return Promise.reject(oa(e));const a=ln(e);ia(e,t,yn),await a._initializationPromise;const n=Jn(a,r);return await async function(e,t){return ss(e)._set(os(t),"true")}(n,a),n._openRedirect(a,t,"signInViaRedirect")}(e,t,r)}async function ls(e,t,r=!1){if(Dr(e.app))return Promise.reject(oa(e));const a=ln(e),n=Jn(a,t),s=new as(a,n,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return us(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!us(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(na(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ds(e))}saveEventToCache(e){this.cachedEventUids.add(ds(e)),this.lastProcessedEventTime=Date.now()}}function ds(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function us({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const hs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ps=/^https?/;async function ms(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Na(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(gs(r))return}catch{}aa(e,"unauthorized-domain")}function gs(e){const t=ha(),{protocol:r,hostname:a}=new URL(t);if(e.startsWith("chrome-extension://")){const n=new URL(e);return""===n.hostname&&""===a?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&n.hostname===a}if(!ps.test(r))return!1;if(hs.test(e))return a===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}
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
 */const fs=new ga(3e4,6e4);function ys(){const e=Dn().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function xs(e){return new Promise((t,r)=>{function a(){ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ys(),r(na(e,"network-request-failed"))},timeout:fs.get()})}if(Dn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Dn().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Dn()[t]=()=>{gapi.load?a():r(na(e,"network-request-failed"))},(n=`${dn.gapiScript}?onload=${t}`,dn.loadJS(n)).catch(e=>r(e))}a()}var n}).catch(e=>{throw bs=null,e})}let bs=null;
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
const vs=new ga(5e3,15e3),ws={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ns=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cs(e){const t=e.config;ca(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?fa(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,a={apiKey:t.apiKey,appName:e.name,v:Fr},n=Ns.get(e.config.apiHost);n&&(a.eid=n);const s=e._getFrameworks();return s.length&&(a.fw=s.join(",")),`${r}?${Nt(a).slice(1)}`}async function ks(e){const t=await function(e){return bs=bs||xs(e),bs}(e),r=Dn().gapi;return ca(r,e,"internal-error"),t.open({where:document.body,url:Cs(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ws,dontclear:!0},t=>new Promise(async(r,a)=>{await t.restyle({setHideOnLeave:!1});const n=na(e,"network-request-failed"),s=Dn().setTimeout(()=>{a(n)},vs.get());function o(){Dn().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{a(n)})}))}
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
 */const Ss={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Es{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(se){}}}function js(e,t,r,a=500,n=600){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),o=Math.max((window.screen.availWidth-a)/2,0).toString();let i="";const l={...Ss,width:a.toString(),height:n.toString(),top:s,left:o},c=ft().toLowerCase();r&&(i=Ka(c)?"_blank":r),Wa(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=ft()){return en(e)&&!!window.navigator?.standalone}(c)&&"_self"!==i)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(a)}
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
 */(t||"",i),new Es(null);const u=window.open(t||"",i,d);ca(u,e,"popup-blocked");try{u.focus()}catch(se){}return new Es(u)}const Is="__/auth/handler",_s="emulator/auth/handler",Ts=encodeURIComponent("fac");async function Ps(e,t,r,a,n,s){ca(e.config.authDomain,e,"auth-domain-config-required"),ca(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:a,v:Fr,eventId:n};if(t instanceof yn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof xn){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const i=o;for(const d of Object.keys(i))void 0===i[d]&&delete i[d];const l=await e._getAppCheckToken(),c=l?`#${Ts}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Is}`;return fa(e,_s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Nt(i).slice(1)}${c}`}const As="webStorageSupport";const Rs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=An,this._completeRedirectFn=ls,this._overrideRedirectResult=ns}async _openPopup(e,t,r,a){ua(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return js(e,await Ps(e,t,r,ha(),a),On())}async _openRedirect(e,t,r,a){await this._originValidation(e);return function(e){Dn().location.href=e}(await Ps(e,t,r,ha(),a)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(ua(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ks(e),r=new cs(e);return t.register("authEvent",t=>{ca(t?.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(As,{type:As},r=>{const a=r?.[0]?.[As];void 0!==a&&t(!!a),aa(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ms(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rn()||Ja()||en()}};var Os="@firebase/auth",Ls="1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ds{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ca(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const Ms=dt("authIdTokenMaxAge")||300;let Us=null;var Fs;!function(e){dn=e}({loadJS:e=>new Promise((t,r)=>{const a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=e=>{const t=na("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(a)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Fs="Browser",Or(new Et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;ca(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const i={apiKey:s,authDomain:o,clientPlatform:Fs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:an(Fs)},l=new on(r,a,n,i);return function(e,t){const r=t?.persistence||[],a=(Array.isArray(r)?r:[r]).map(Ha);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(a,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Or(new Et("auth-internal",e=>(e=>new Ds(e))(ln(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(Os,Ls,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Fs)),Hr(Os,Ls,"esm2020");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
Hr("firebase","12.5.0","app");const Bs={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:Bs.apiKey?"✅ Configurado":"❌ Faltando",authDomain:Bs.authDomain,projectId:Bs.projectId});const Hs=function(e=function(e=Ir){const t=Tr.get(e);if(!t&&e===Ir&&ct())return Br();if(!t)throw Mr.create("no-app",{appName:e});return t}()){const t=Lr(e,"auth");if(t.isInitialized())return t.getImmediate();const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function(e,t){const r=Lr(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(vt(r.getOptions(),t??{}))return e;aa(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Rs,persistence:[Wn,Tn,An]}),a=dt("authTokenSyncURL");if(a&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(a,location.origin);if(location.origin===e.origin){const t=(n=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ms)return;const a=t?.token;Us!==a&&(Us=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))});!function(e,t,r){St(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,a){St(e).onIdTokenChanged(t,r,a)}(r,e=>t(e))}}var n;const s=(o="auth",lt()?.emulatorHosts?.[o]);var o;return s&&un(r,`http://${s}`),r}(Br(Bs)),Vs=new vn;Vs.addScope("email"),Vs.addScope("profile");const $s=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,r){if(Dr(e.app))return Promise.reject(na(e,"operation-not-supported-in-this-environment"));const a=ln(e);ia(e,t,yn);const n=Jn(a,r);return new ts(a,"signInViaPopup",t,n).executeNotNull()}(Hs,Vs),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await is(Hs,Vs)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await ln(e)._initializationPromise,ls(e,t,!1)}(Hs);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=Hs.currentUser,r=t?await t.getIdToken():null,a=await fetch(tt.auth.login,{method:"POST",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!a.ok)return this.createUserInBackend(e);const n=await a.json();return console.log("✅ Usuário sincronizado com backend"),n}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(tt.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return St(e).signOut()}(Hs),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return Hs.currentUser}onAuthStateChange(e){return Hs.onAuthStateChanged(e)}};const zs=new class{getBaseURL(){const e=tt.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((r,a)=>{const n=new XMLHttpRequest,s=tt.auth.login;n.open("POST",s,!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("Accept","application/json"),n.setRequestHeader("Cache-Control","no-cache"),n.onreadystatechange=function(){if(4===n.readyState)if(console.log("🔍 XHR Status:",n.status),console.log("🔍 XHR Response:",n.responseText),200===n.status)try{const e=JSON.parse(n.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),r(e.user)}catch(e){a(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(n.responseText);a(new Error(e.message||"Erro no login"))}catch(e){a(new Error("Credenciais inválidas"))}},n.onerror=function(){a(new Error("Erro de conexão"))},n.ontimeout=function(){a(new Error("Timeout na conexão"))},n.timeout=1e4;const o=JSON.stringify({email:e,password:t});n.send(o)})}catch(r){throw console.error("❌ Erro no login alternativo:",r),r}}async login(e,t){try{const a=tt.auth.login;console.log("🔐 Login attempt:",{email:e,url:a});const n=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",n);const s=new AbortController,o=setTimeout(()=>s.abort(),1e4),i=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:n,signal:s.signal});if(clearTimeout(o),console.log("📡 Response status:",i.status),console.log("📡 Response ok:",i.ok),console.log("📡 Response headers:",Object.fromEntries(i.headers.entries())),!i.ok){const e=await i.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",i.status),console.error("❌ Error response statusText:",i.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(r){t=e||t}throw 401===i.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await i.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(r){throw console.error("❌ Failed to parse response JSON:",r),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(a){if(console.error("❌ Erro no login completo:",a),"AbortError"===a.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===a.name&&a.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw a}}async register(e,t,r){try{this.clearPlanData();const a=tt.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:a});const n=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:r})});if(!n.ok){const e=await n.json();throw new Error(e.message||"Falha no registro")}return(await n.json()).user}catch(a){throw console.error("Erro no registro:",a),a}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await $s.loginWithPopup(),t=await $s.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",r),r}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await $s.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await $s.handleRedirectResult();if(!e)return null;const t=await $s.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),r}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await $s.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const r={basic:0,professional:1,premium:2};return r[t.type]>=r[e]}isAdmin(){const e=this.getCurrentUser();return"admin"===e?.role}},Gs=()=>{const[t,r]=e.useState(null),[a,n]=e.useState(!0),[s,o]=e.useState(null),[i,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=zs.getCurrentUser(),t=zs.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),r(e),l(t),e){let e=zs.getUserPlan();e&&"object"==typeof e&&e.type||(e={type:"basic",name:"Básico",price:0,active:!0}),console.log("📋 useAuth - Plano do usuário:",e),o(e)}else o({type:"basic",name:"Básico",price:0,active:!0});n(!1)},[]);return{user:t,loading:a,plan:s,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await zs.logout(),r(null),o(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),zs.updateUserPlan(e),o(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=zs.getCurrentUser(),t=zs.isAuthenticated();r(e),l(t),o(e?zs.getUserPlan():null)},isAuthenticated:i,isAdmin:zs.isAdmin(),checkPlanAccess:e=>zs.checkPlanAccess(e)}},qs=({children:e})=>{const{isAuthenticated:t,loading:r}=Gs(),s=a();return r?Z.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:Z.jsxs("div",{className:"text-center",children:[Z.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),Z.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):t?Z.jsx(Z.Fragment,{children:e}):Z.jsx(n,{to:"/login",state:{from:s},replace:!0})},Ws=()=>Z.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[Z.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),Z.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),Z.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),Z.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),Z.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[Z.jsxs(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[Z.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:Z.jsx(h,{className:"w-10 h-10 text-white"})}),Z.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),Z.jsxs(u.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",Z.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",Z.jsx("br",{}),Z.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[Z.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[Z.jsx(p,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),Z.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),Z.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),Z.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[Z.jsx(m,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),Z.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),Z.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),Z.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[Z.jsx(h,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),Z.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),Z.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[Z.jsx(s,{to:"/login",children:Z.jsxs(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",Z.jsx(g,{className:"w-5 h-5"})]})}),Z.jsx(s,{to:"/login?mode=signup",children:Z.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),Js=()=>{const[t,r]=e.useState(""),[a,n]=e.useState(""),[s,l]=e.useState(""),[c,d]=e.useState(!0),[h,p]=e.useState(!1),[m,g]=e.useState(!1),N=o(),[C]=i(),{refreshAuth:k}=Gs();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",C.get("mode")),console.log("authService.isAuthenticated():",zs.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await zs.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),et.success(`Bem-vindo, ${e.name}! 🎉`),void N("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),et.error("Erro ao processar login Google")}})();const e=C.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void d(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[N,C]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",m),Z.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[Z.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[Z.jsx(u.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),Z.jsx(u.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),Z.jsx(u.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),Z.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[Z.jsxs("div",{className:"text-center mb-10",children:[Z.jsx(u.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:Z.jsx("span",{className:"text-3xl",children:"💰"})}),Z.jsx(u.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),Z.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&Z.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),Z.jsxs(u.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[Z.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&a&&(c||s)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?a.length<6?(et.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&s.length<2&&(et.error("O nome deve ter pelo menos 2 caracteres"),1)):(et.error("Por favor, insira um e-mail válido"),0):(et.error("Por favor, preencha todos os campos"),0)){g(!0);try{if(c){let e=!1,s=null;try{console.log("🔄 Tentando login principal..."),s=await zs.login(t,a),e=!0}catch(r){console.log("❌ Login principal falhou:",r.message),console.log("🔄 Tentando método alternativo...");try{s=await zs.loginAlternative(t,a),e=!0,console.log("✅ Login alternativo funcionou!")}catch(n){throw console.error("❌ Login alternativo também falhou:",n.message),n}}e&&s&&(localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),k(),et.success("Login realizado com sucesso!"),N("/dashboard"))}else await zs.register(s,t,a),et.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),k(),N("/dashboard")}catch(o){console.error("Auth error:",o);const e=o.message||"Erro inesperado. Tente novamente";et.error(e)}finally{g(!1)}}},className:"space-y-6",children:[!c&&Z.jsxs("div",{children:[Z.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),Z.jsxs("div",{className:"relative",children:[Z.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:Z.jsx(f,{className:"h-5 w-5 text-gray-400"})}),Z.jsx("input",{id:"name",type:"text",value:s,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),Z.jsxs("div",{children:[Z.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),Z.jsxs("div",{className:"relative",children:[Z.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:Z.jsx(y,{className:"h-5 w-5 text-gray-400"})}),Z.jsx("input",{id:"email",type:"email",value:t,onChange:e=>r(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),Z.jsxs("div",{children:[Z.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),Z.jsxs("div",{className:"relative",children:[Z.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:Z.jsx(x,{className:"h-5 w-5 text-gray-400"})}),Z.jsx("input",{id:"password",type:h?"text":"password",value:a,onChange:e=>n(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),Z.jsx("button",{type:"button",onClick:()=>p(!h),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:h?Z.jsx(b,{className:"h-5 w-5"}):Z.jsx(v,{className:"h-5 w-5"})})]})]}),Z.jsx(u.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:m,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:m?Z.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):Z.jsxs(Z.Fragment,{children:[c?Z.jsx(w,{className:"h-5 w-5"}):Z.jsx(f,{className:"h-5 w-5"}),Z.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),Z.jsxs("div",{className:"mt-6",children:[Z.jsxs("div",{className:"relative",children:[Z.jsx("div",{className:"absolute inset-0 flex items-center",children:Z.jsx("div",{className:"w-full border-t border-gray-300/30"})}),Z.jsx("div",{className:"relative flex justify-center text-sm",children:Z.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),Z.jsxs(u.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(m)return;g(!0);const e=et.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await zs.loginWithGoogle();et.dismiss(e),et.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),N("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),et.dismiss(e);let r="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?r="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?r="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(r="Erro de conexão. Verifique sua internet"),et.error(r)}finally{g(!1)}},disabled:m,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[Z.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[Z.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),Z.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),Z.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),Z.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),Z.jsx("span",{children:"Continuar com Google"})]})]}),c&&Z.jsx("div",{className:"mt-6 text-center",children:Z.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>N("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),Z.jsxs("div",{className:"mt-8 text-center",children:[Z.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),Z.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>d(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},Ks=()=>(console.log("LoginSimple carregando..."),Z.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[Z.jsx("h1",{children:"LOGIN SIMPLES"}),Z.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),Z.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[Z.jsxs("div",{style:{marginBottom:"15px"},children:[Z.jsx("label",{children:"Email:"}),Z.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),Z.jsxs("div",{style:{marginBottom:"15px"},children:[Z.jsx("label",{children:"Senha:"}),Z.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),Z.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]}));function Zs(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xs}=Object.prototype,{getPrototypeOf:Ys}=Object,{iterator:Qs,toStringTag:eo}=Symbol,to=(ro=Object.create(null),e=>{const t=Xs.call(e);return ro[t]||(ro[t]=t.slice(8,-1).toLowerCase())});var ro;const ao=e=>(e=e.toLowerCase(),t=>to(t)===e),no=e=>t=>typeof t===e,{isArray:so}=Array,oo=no("undefined");function io(e){return null!==e&&!oo(e)&&null!==e.constructor&&!oo(e.constructor)&&uo(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const lo=ao("ArrayBuffer");const co=no("string"),uo=no("function"),ho=no("number"),po=e=>null!==e&&"object"==typeof e,mo=e=>{if("object"!==to(e))return!1;const t=Ys(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||eo in e||Qs in e)},go=ao("Date"),fo=ao("File"),yo=ao("Blob"),xo=ao("FileList"),bo=ao("URLSearchParams"),[vo,wo,No,Co]=["ReadableStream","Request","Response","Headers"].map(ao);function ko(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let a,n;if("object"!=typeof e&&(e=[e]),so(e))for(a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else{if(io(e))return;const n=r?Object.getOwnPropertyNames(e):Object.keys(e),s=n.length;let o;for(a=0;a<s;a++)o=n[a],t.call(null,e[o],o,e)}}function So(e,t){if(io(e))return null;t=t.toLowerCase();const r=Object.keys(e);let a,n=r.length;for(;n-- >0;)if(a=r[n],t===a.toLowerCase())return a;return null}const Eo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,jo=e=>!oo(e)&&e!==Eo;const Io=(_o="undefined"!=typeof Uint8Array&&Ys(Uint8Array),e=>_o&&e instanceof _o);var _o;const To=ao("HTMLFormElement"),Po=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ao=ao("RegExp"),Ro=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),a={};ko(r,(r,n)=>{let s;!1!==(s=t(r,n,e))&&(a[n]=s||r)}),Object.defineProperties(e,a)};const Oo=ao("AsyncFunction"),Lo=(Do="function"==typeof setImmediate,Mo=uo(Eo.postMessage),Do?setImmediate:Mo?(Uo=`axios@${Math.random()}`,Fo=[],Eo.addEventListener("message",({source:e,data:t})=>{e===Eo&&t===Uo&&Fo.length&&Fo.shift()()},!1),e=>{Fo.push(e),Eo.postMessage(Uo,"*")}):e=>setTimeout(e));var Do,Mo,Uo,Fo;const Bo="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Eo):"undefined"!=typeof process&&process.nextTick||Lo,Ho={isArray:so,isArrayBuffer:lo,isBuffer:io,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||uo(e.append)&&("formdata"===(t=to(e))||"object"===t&&uo(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&lo(e.buffer),t},isString:co,isNumber:ho,isBoolean:e=>!0===e||!1===e,isObject:po,isPlainObject:mo,isEmptyObject:e=>{if(!po(e)||io(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(se){return!1}},isReadableStream:vo,isRequest:wo,isResponse:No,isHeaders:Co,isUndefined:oo,isDate:go,isFile:fo,isBlob:yo,isRegExp:Ao,isFunction:uo,isStream:e=>po(e)&&uo(e.pipe),isURLSearchParams:bo,isTypedArray:Io,isFileList:xo,forEach:ko,merge:function e(){const{caseless:t,skipUndefined:r}=jo(this)&&this||{},a={},n=(n,s)=>{const o=t&&So(a,s)||s;mo(a[o])&&mo(n)?a[o]=e(a[o],n):mo(n)?a[o]=e({},n):so(n)?a[o]=n.slice():r&&oo(n)||(a[o]=n)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&ko(arguments[s],n);return a},extend:(e,t,r,{allOwnKeys:a}={})=>(ko(t,(t,a)=>{r&&uo(t)?e[a]=Zs(t,r):e[a]=t},{allOwnKeys:a}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,a)=>{e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,a)=>{let n,s,o;const i={};if(t=t||{},null==e)return t;do{for(n=Object.getOwnPropertyNames(e),s=n.length;s-- >0;)o=n[s],a&&!a(o,e,t)||i[o]||(t[o]=e[o],i[o]=!0);e=!1!==r&&Ys(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:to,kindOfTest:ao,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const a=e.indexOf(t,r);return-1!==a&&a===r},toArray:e=>{if(!e)return null;if(so(e))return e;let t=e.length;if(!ho(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Qs]).call(e);let a;for(;(a=r.next())&&!a.done;){const r=a.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const a=[];for(;null!==(r=e.exec(t));)a.push(r);return a},isHTMLForm:To,hasOwnProperty:Po,hasOwnProp:Po,reduceDescriptors:Ro,freezeMethods:e=>{Ro(e,(t,r)=>{if(uo(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const a=e[r];uo(a)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},a=e=>{e.forEach(e=>{r[e]=!0})};return so(e)?a(e):a(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:So,global:Eo,isContextDefined:jo,isSpecCompliantForm:function(e){return!!(e&&uo(e.append)&&"FormData"===e[eo]&&e[Qs])},toJSONObject:e=>{const t=new Array(10),r=(e,a)=>{if(po(e)){if(t.indexOf(e)>=0)return;if(io(e))return e;if(!("toJSON"in e)){t[a]=e;const n=so(e)?[]:{};return ko(e,(e,t)=>{const s=r(e,a+1);!oo(s)&&(n[t]=s)}),t[a]=void 0,n}}return e};return r(e,0)},isAsyncFn:Oo,isThenable:e=>e&&(po(e)||uo(e))&&uo(e.then)&&uo(e.catch),setImmediate:Lo,asap:Bo,isIterable:e=>null!=e&&uo(e[Qs])};function Vo(e,t,r,a,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n,this.status=n.status?n.status:null)}Ho.inherits(Vo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ho.toJSONObject(this.config),code:this.code,status:this.status}}});const $o=Vo.prototype,zo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{zo[e]={value:e}}),Object.defineProperties(Vo,zo),Object.defineProperty($o,"isAxiosError",{value:!0}),Vo.from=(e,t,r,a,n,s)=>{const o=Object.create($o);Ho.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const i=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Vo.call(o,i,l,r,a,n),e&&null==o.cause&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};function Go(e){return Ho.isPlainObject(e)||Ho.isArray(e)}function qo(e){return Ho.endsWith(e,"[]")?e.slice(0,-2):e}function Wo(e,t,r){return e?e.concat(t).map(function(e,t){return e=qo(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const Jo=Ho.toFlatObject(Ho,{},null,function(e){return/^is[A-Z]/.test(e)});function Ko(e,t,r){if(!Ho.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const a=(r=Ho.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Ho.isUndefined(t[e])})).metaTokens,n=r.visitor||c,s=r.dots,o=r.indexes,i=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Ho.isSpecCompliantForm(t);if(!Ho.isFunction(n))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ho.isDate(e))return e.toISOString();if(Ho.isBoolean(e))return e.toString();if(!i&&Ho.isBlob(e))throw new Vo("Blob is not supported. Use a Buffer instead.");return Ho.isArrayBuffer(e)||Ho.isTypedArray(e)?i&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,n){let i=e;if(e&&!n&&"object"==typeof e)if(Ho.endsWith(r,"{}"))r=a?r:r.slice(0,-2),e=JSON.stringify(e);else if(Ho.isArray(e)&&function(e){return Ho.isArray(e)&&!e.some(Go)}(e)||(Ho.isFileList(e)||Ho.endsWith(r,"[]"))&&(i=Ho.toArray(e)))return r=qo(r),i.forEach(function(e,a){!Ho.isUndefined(e)&&null!==e&&t.append(!0===o?Wo([r],a,s):null===o?r:r+"[]",l(e))}),!1;return!!Go(e)||(t.append(Wo(n,r,s),l(e)),!1)}const d=[],u=Object.assign(Jo,{defaultVisitor:c,convertValue:l,isVisitable:Go});if(!Ho.isObject(e))throw new TypeError("data must be an object");return function e(r,a){if(!Ho.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+a.join("."));d.push(r),Ho.forEach(r,function(r,s){!0===(!(Ho.isUndefined(r)||null===r)&&n.call(t,r,Ho.isString(s)?s.trim():s,a,u))&&e(r,a?a.concat(s):[s])}),d.pop()}}(e),t}function Zo(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function Xo(e,t){this._pairs=[],e&&Ko(e,this,t)}const Yo=Xo.prototype;function Qo(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ei(e,t,r){if(!t)return e;const a=r&&r.encode||Qo;Ho.isFunction(r)&&(r={serialize:r});const n=r&&r.serialize;let s;if(s=n?n(t,r):Ho.isURLSearchParams(t)?t.toString():new Xo(t,r).toString(a),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}Yo.append=function(e,t){this._pairs.push([e,t])},Yo.toString=function(e){const t=e?function(t){return e.call(this,t,Zo)}:Zo;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const ti=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ho.forEach(this.handlers,function(t){null!==t&&e(t)})}},ri={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ai={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Xo,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ni="undefined"!=typeof window&&"undefined"!=typeof document,si="object"==typeof navigator&&navigator||void 0,oi=ni&&(!si||["ReactNative","NativeScript","NS"].indexOf(si.product)<0),ii="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,li=ni&&window.location.href||"http://localhost",ci={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ni,hasStandardBrowserEnv:oi,hasStandardBrowserWebWorkerEnv:ii,navigator:si,origin:li},Symbol.toStringTag,{value:"Module"})),...ai};function di(e){function t(e,r,a,n){let s=e[n++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),i=n>=e.length;if(s=!s&&Ho.isArray(a)?a.length:s,i)return Ho.hasOwnProp(a,s)?a[s]=[a[s],r]:a[s]=r,!o;a[s]&&Ho.isObject(a[s])||(a[s]=[]);return t(e,r,a[s],n)&&Ho.isArray(a[s])&&(a[s]=function(e){const t={},r=Object.keys(e);let a;const n=r.length;let s;for(a=0;a<n;a++)s=r[a],t[s]=e[s];return t}(a[s])),!o}if(Ho.isFormData(e)&&Ho.isFunction(e.entries)){const r={};return Ho.forEachEntry(e,(e,a)=>{t(function(e){return Ho.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),a,r,0)}),r}return null}const ui={transitional:ri,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,n=Ho.isObject(e);n&&Ho.isHTMLForm(e)&&(e=new FormData(e));if(Ho.isFormData(e))return a?JSON.stringify(di(e)):e;if(Ho.isArrayBuffer(e)||Ho.isBuffer(e)||Ho.isStream(e)||Ho.isFile(e)||Ho.isBlob(e)||Ho.isReadableStream(e))return e;if(Ho.isArrayBufferView(e))return e.buffer;if(Ho.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(n){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Ko(e,new ci.classes.URLSearchParams,{visitor:function(e,t,r,a){return ci.isNode&&Ho.isBuffer(e)?(this.append(t,e.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((s=Ho.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ko(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return n||a?(t.setContentType("application/json",!1),function(e,t,r){if(Ho.isString(e))try{return(t||JSON.parse)(e),Ho.trim(e)}catch(se){if("SyntaxError"!==se.name)throw se}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ui.transitional,r=t&&t.forcedJSONParsing,a="json"===this.responseType;if(Ho.isResponse(e)||Ho.isReadableStream(e))return e;if(e&&Ho.isString(e)&&(r&&!this.responseType||a)){const r=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(e,this.parseReviver)}catch(se){if(r){if("SyntaxError"===se.name)throw Vo.from(se,Vo.ERR_BAD_RESPONSE,this,null,this.response);throw se}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ci.classes.FormData,Blob:ci.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ho.forEach(["delete","get","head","post","put","patch"],e=>{ui.headers[e]={}});const hi=ui,pi=Ho.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mi=Symbol("internals");function gi(e){return e&&String(e).trim().toLowerCase()}function fi(e){return!1===e||null==e?e:Ho.isArray(e)?e.map(fi):String(e)}function yi(e,t,r,a,n){return Ho.isFunction(a)?a.call(this,t,r):(n&&(t=r),Ho.isString(t)?Ho.isString(a)?-1!==t.indexOf(a):Ho.isRegExp(a)?a.test(t):void 0:void 0)}class xi{constructor(e){e&&this.set(e)}set(e,t,r){const a=this;function n(e,t,r){const n=gi(t);if(!n)throw new Error("header name must be a non-empty string");const s=Ho.findKey(a,n);(!s||void 0===a[s]||!0===r||void 0===r&&!1!==a[s])&&(a[s||t]=fi(e))}const s=(e,t)=>Ho.forEach(e,(e,r)=>n(e,r,t));if(Ho.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(Ho.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let r,a,n;return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),r=e.substring(0,n).trim().toLowerCase(),a=e.substring(n+1).trim(),!r||t[r]&&pi[r]||("set-cookie"===r?t[r]?t[r].push(a):t[r]=[a]:t[r]=t[r]?t[r]+", "+a:a)}),t})(e),t);else if(Ho.isObject(e)&&Ho.isIterable(e)){let r,a,n={};for(const t of e){if(!Ho.isArray(t))throw TypeError("Object iterator must return a key-value pair");n[a=t[0]]=(r=n[a])?Ho.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}s(n,t)}else null!=e&&n(t,e,r);return this}get(e,t){if(e=gi(e)){const r=Ho.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)t[a[1]]=a[2];return t}(e);if(Ho.isFunction(t))return t.call(this,e,r);if(Ho.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=gi(e)){const r=Ho.findKey(this,e);return!(!r||void 0===this[r]||t&&!yi(0,this[r],r,t))}return!1}delete(e,t){const r=this;let a=!1;function n(e){if(e=gi(e)){const n=Ho.findKey(r,e);!n||t&&!yi(0,r[n],n,t)||(delete r[n],a=!0)}}return Ho.isArray(e)?e.forEach(n):n(e),a}clear(e){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const n=t[r];e&&!yi(0,this[n],n,e,!0)||(delete this[n],a=!0)}return a}normalize(e){const t=this,r={};return Ho.forEach(this,(a,n)=>{const s=Ho.findKey(r,n);if(s)return t[s]=fi(a),void delete t[n];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(n):String(n).trim();o!==n&&delete t[n],t[o]=fi(a),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Ho.forEach(this,(r,a)=>{null!=r&&!1!==r&&(t[a]=e&&Ho.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[mi]=this[mi]={accessors:{}}).accessors,r=this.prototype;function a(e){const a=gi(e);t[a]||(!function(e,t){const r=Ho.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(e,r,n){return this[a].call(this,t,e,r,n)},configurable:!0})})}(r,e),t[a]=!0)}return Ho.isArray(e)?e.forEach(a):a(e),this}}xi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ho.reduceDescriptors(xi.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),Ho.freezeMethods(xi);const bi=xi;function vi(e,t){const r=this||hi,a=t||r,n=bi.from(a.headers);let s=a.data;return Ho.forEach(e,function(e){s=e.call(r,s,n.normalize(),t?t.status:void 0)}),n.normalize(),s}function wi(e){return!(!e||!e.__CANCEL__)}function Ni(e,t,r){Vo.call(this,null==e?"canceled":e,Vo.ERR_CANCELED,t,r),this.name="CanceledError"}function Ci(e,t,r){const a=r.config.validateStatus;r.status&&a&&!a(r.status)?t(new Vo("Request failed with status code "+r.status,[Vo.ERR_BAD_REQUEST,Vo.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}Ho.inherits(Ni,Vo,{__CANCEL__:!0});const ki=(e,t,r=3)=>{let a=0;const n=function(e,t){e=e||10;const r=new Array(e),a=new Array(e);let n,s=0,o=0;return t=void 0!==t?t:1e3,function(i){const l=Date.now(),c=a[o];n||(n=l),r[s]=i,a[s]=l;let d=o,u=0;for(;d!==s;)u+=r[d++],d%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-n<t)return;const h=c&&l-c;return h?Math.round(1e3*u/h):void 0}}(50,250);return function(e,t){let r,a,n=0,s=1e3/t;const o=(t,s=Date.now())=>{n=s,r=null,a&&(clearTimeout(a),a=null),e(...t)};return[(...e)=>{const t=Date.now(),i=t-n;i>=s?o(e,t):(r=e,a||(a=setTimeout(()=>{a=null,o(r)},s-i)))},()=>r&&o(r)]}(r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,i=s-a,l=n(i);a=s;e({loaded:s,total:o,progress:o?s/o:void 0,bytes:i,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r,lengthComputable:null!=o,[t?"download":"upload"]:!0})},r)},Si=(e,t)=>{const r=null!=e;return[a=>t[0]({lengthComputable:r,total:e,loaded:a}),t[1]]},Ei=e=>(...t)=>Ho.asap(()=>e(...t)),ji=ci.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,ci.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(ci.origin),ci.navigator&&/(msie|trident)/i.test(ci.navigator.userAgent)):()=>!0,Ii=ci.hasStandardBrowserEnv?{write(e,t,r,a,n,s,o){if("undefined"==typeof document)return;const i=[`${e}=${encodeURIComponent(t)}`];Ho.isNumber(r)&&i.push(`expires=${new Date(r).toUTCString()}`),Ho.isString(a)&&i.push(`path=${a}`),Ho.isString(n)&&i.push(`domain=${n}`),!0===s&&i.push("secure"),Ho.isString(o)&&i.push(`SameSite=${o}`),document.cookie=i.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function _i(e,t,r){let a=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(a||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ti=e=>e instanceof bi?{...e}:e;function Pi(e,t){t=t||{};const r={};function a(e,t,r,a){return Ho.isPlainObject(e)&&Ho.isPlainObject(t)?Ho.merge.call({caseless:a},e,t):Ho.isPlainObject(t)?Ho.merge({},t):Ho.isArray(t)?t.slice():t}function n(e,t,r,n){return Ho.isUndefined(t)?Ho.isUndefined(e)?void 0:a(void 0,e,0,n):a(e,t,0,n)}function s(e,t){if(!Ho.isUndefined(t))return a(void 0,t)}function o(e,t){return Ho.isUndefined(t)?Ho.isUndefined(e)?void 0:a(void 0,e):a(void 0,t)}function i(r,n,s){return s in t?a(r,n):s in e?a(void 0,r):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:i,headers:(e,t,r)=>n(Ti(e),Ti(t),0,!0)};return Ho.forEach(Object.keys({...e,...t}),function(a){const s=l[a]||n,o=s(e[a],t[a],a);Ho.isUndefined(o)&&s!==i||(r[a]=o)}),r}const Ai=e=>{const t=Pi({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:n,xsrfCookieName:s,headers:o,auth:i}=t;if(t.headers=o=bi.from(o),t.url=ei(_i(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),i&&o.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?unescape(encodeURIComponent(i.password)):""))),Ho.isFormData(r))if(ci.hasStandardBrowserEnv||ci.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(Ho.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&o.set(e,r)})}if(ci.hasStandardBrowserEnv&&(a&&Ho.isFunction(a)&&(a=a(t)),a||!1!==a&&ji(t.url))){const e=n&&s&&Ii.read(s);e&&o.set(n,e)}return t},Ri="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const a=Ai(e);let n=a.data;const s=bi.from(a.headers).normalize();let o,i,l,c,d,{responseType:u,onUploadProgress:h,onDownloadProgress:p}=a;function m(){c&&c(),d&&d(),a.cancelToken&&a.cancelToken.unsubscribe(o),a.signal&&a.signal.removeEventListener("abort",o)}let g=new XMLHttpRequest;function f(){if(!g)return;const a=bi.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());Ci(function(e){t(e),m()},function(e){r(e),m()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:a,config:e,request:g}),g=null}g.open(a.method.toUpperCase(),a.url,!0),g.timeout=a.timeout,"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(f)},g.onabort=function(){g&&(r(new Vo("Request aborted",Vo.ECONNABORTED,e,g)),g=null)},g.onerror=function(t){const a=new Vo(t&&t.message?t.message:"Network Error",Vo.ERR_NETWORK,e,g);a.event=t||null,r(a),g=null},g.ontimeout=function(){let t=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const n=a.transitional||ri;a.timeoutErrorMessage&&(t=a.timeoutErrorMessage),r(new Vo(t,n.clarifyTimeoutError?Vo.ETIMEDOUT:Vo.ECONNABORTED,e,g)),g=null},void 0===n&&s.setContentType(null),"setRequestHeader"in g&&Ho.forEach(s.toJSON(),function(e,t){g.setRequestHeader(t,e)}),Ho.isUndefined(a.withCredentials)||(g.withCredentials=!!a.withCredentials),u&&"json"!==u&&(g.responseType=a.responseType),p&&([l,d]=ki(p,!0),g.addEventListener("progress",l)),h&&g.upload&&([i,c]=ki(h),g.upload.addEventListener("progress",i),g.upload.addEventListener("loadend",c)),(a.cancelToken||a.signal)&&(o=t=>{g&&(r(!t||t.type?new Ni(null,e,g):t),g.abort(),g=null)},a.cancelToken&&a.cancelToken.subscribe(o),a.signal&&(a.signal.aborted?o():a.signal.addEventListener("abort",o)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(a.url);y&&-1===ci.protocols.indexOf(y)?r(new Vo("Unsupported protocol "+y+":",Vo.ERR_BAD_REQUEST,e)):g.send(n||null)})},Oi=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,a=new AbortController;const n=function(e){if(!r){r=!0,o();const t=e instanceof Error?e:this.reason;a.abort(t instanceof Vo?t:new Ni(t instanceof Error?t.message:t))}};let s=t&&setTimeout(()=>{s=null,n(new Vo(`timeout ${t} of ms exceeded`,Vo.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(n):e.removeEventListener("abort",n)}),e=null)};e.forEach(e=>e.addEventListener("abort",n));const{signal:i}=a;return i.unsubscribe=()=>Ho.asap(o),i}},Li=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let a,n=0;for(;n<r;)a=n+t,yield e.slice(n,a),n=a},Di=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Mi=(e,t,r,a)=>{const n=async function*(e,t){for await(const r of Di(e))yield*Li(r,t)}(e,t);let s,o=0,i=e=>{s||(s=!0,a&&a(e))};return new ReadableStream({async pull(e){try{const{done:t,value:a}=await n.next();if(t)return i(),void e.close();let s=a.byteLength;if(r){let e=o+=s;r(e)}e.enqueue(new Uint8Array(a))}catch(t){throw i(t),t}},cancel:e=>(i(e),n.return())},{highWaterMark:2})},{isFunction:Ui}=Ho,Fi=(({Request:e,Response:t})=>({Request:e,Response:t}))(Ho.global),{ReadableStream:Bi,TextEncoder:Hi}=Ho.global,Vi=(e,...t)=>{try{return!!e(...t)}catch(se){return!1}},$i=e=>{e=Ho.merge.call({skipUndefined:!0},Fi,e);const{fetch:t,Request:r,Response:a}=e,n=t?Ui(t):"function"==typeof fetch,s=Ui(r),o=Ui(a);if(!n)return!1;const i=n&&Ui(Bi),l=n&&("function"==typeof Hi?(c=new Hi,e=>c.encode(e)):async e=>new Uint8Array(await new r(e).arrayBuffer()));var c;const d=s&&i&&Vi(()=>{let e=!1;const t=new r(ci.origin,{body:new Bi,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),u=o&&i&&Vi(()=>Ho.isReadableStream(new a("").body)),h={stream:u&&(e=>e.body)};n&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!h[e]&&(h[e]=(t,r)=>{let a=t&&t[e];if(a)return a.call(t);throw new Vo(`Response type '${e}' is not supported`,Vo.ERR_NOT_SUPPORT,r)})});const p=async(e,t)=>{const a=Ho.toFiniteNumber(e.getContentLength());return null==a?(async e=>{if(null==e)return 0;if(Ho.isBlob(e))return e.size;if(Ho.isSpecCompliantForm(e)){const t=new r(ci.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ho.isArrayBufferView(e)||Ho.isArrayBuffer(e)?e.byteLength:(Ho.isURLSearchParams(e)&&(e+=""),Ho.isString(e)?(await l(e)).byteLength:void 0)})(t):a};return async e=>{let{url:n,method:o,data:i,signal:l,cancelToken:c,timeout:m,onDownloadProgress:g,onUploadProgress:f,responseType:y,headers:x,withCredentials:b="same-origin",fetchOptions:v}=Ai(e),w=t||fetch;y=y?(y+"").toLowerCase():"text";let N=Oi([l,c&&c.toAbortSignal()],m),C=null;const k=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let S;try{if(f&&d&&"get"!==o&&"head"!==o&&0!==(S=await p(x,i))){let e,t=new r(n,{method:"POST",body:i,duplex:"half"});if(Ho.isFormData(i)&&(e=t.headers.get("content-type"))&&x.setContentType(e),t.body){const[e,r]=Si(S,ki(Ei(f)));i=Mi(t.body,65536,e,r)}}Ho.isString(b)||(b=b?"include":"omit");const t=s&&"credentials"in r.prototype,l={...v,signal:N,method:o.toUpperCase(),headers:x.normalize().toJSON(),body:i,duplex:"half",credentials:t?b:void 0};C=s&&new r(n,l);let c=await(s?w(C,v):w(n,l));const m=u&&("stream"===y||"response"===y);if(u&&(g||m&&k)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=Ho.toFiniteNumber(c.headers.get("content-length")),[r,n]=g&&Si(t,ki(Ei(g),!0))||[];c=new a(Mi(c.body,65536,r,()=>{n&&n(),k&&k()}),e)}y=y||"text";let E=await h[Ho.findKey(h,y)||"text"](c,e);return!m&&k&&k(),await new Promise((t,r)=>{Ci(t,r,{data:E,headers:bi.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:C})})}catch(E){if(k&&k(),E&&"TypeError"===E.name&&/Load failed|fetch/i.test(E.message))throw Object.assign(new Vo("Network Error",Vo.ERR_NETWORK,e,C),{cause:E.cause||E});throw Vo.from(E,E&&E.code,e,C)}}},zi=new Map,Gi=e=>{let t=e&&e.env||{};const{fetch:r,Request:a,Response:n}=t,s=[a,n,r];let o,i,l=s.length,c=zi;for(;l--;)o=s[l],i=c.get(o),void 0===i&&c.set(o,i=l?new Map:$i(t)),c=i;return i};Gi();const qi={http:null,xhr:Ri,fetch:{get:Gi}};Ho.forEach(qi,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(se){}Object.defineProperty(e,"adapterName",{value:t})}});const Wi=e=>`- ${e}`,Ji=e=>Ho.isFunction(e)||null===e||!1===e;const Ki={getAdapter:function(e,t){e=Ho.isArray(e)?e:[e];const{length:r}=e;let a,n;const s={};for(let o=0;o<r;o++){let r;if(a=e[o],n=a,!Ji(a)&&(n=qi[(r=String(a)).toLowerCase()],void 0===n))throw new Vo(`Unknown adapter '${r}'`);if(n&&(Ho.isFunction(n)||(n=n.get(t))))break;s[r||"#"+o]=n}if(!n){const e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Vo("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(Wi).join("\n"):" "+Wi(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n},adapters:qi};function Zi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ni(null,e)}function Xi(e){Zi(e),e.headers=bi.from(e.headers),e.data=vi.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ki.getAdapter(e.adapter||hi.adapter,e)(e).then(function(t){return Zi(e),t.data=vi.call(e,e.transformResponse,t),t.headers=bi.from(t.headers),t},function(t){return wi(t)||(Zi(e),t&&t.response&&(t.response.data=vi.call(e,e.transformResponse,t.response),t.response.headers=bi.from(t.response.headers))),Promise.reject(t)})}const Yi="1.13.1",Qi={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Qi[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const el={};Qi.transitional=function(e,t,r){function a(e,t){return"[Axios v"+Yi+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,n,s)=>{if(!1===e)throw new Vo(a(n," has been removed"+(t?" in "+t:"")),Vo.ERR_DEPRECATED);return t&&!el[n]&&(el[n]=!0,console.warn(a(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},Qi.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const tl={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Vo("options must be an object",Vo.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let n=a.length;for(;n-- >0;){const s=a[n],o=t[s];if(o){const t=e[s],r=void 0===t||o(t,s,e);if(!0!==r)throw new Vo("option "+s+" must be "+r,Vo.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Vo("Unknown option "+s,Vo.ERR_BAD_OPTION)}},validators:Qi},rl=tl.validators;class al{constructor(e){this.defaults=e||{},this.interceptors={request:new ti,response:new ti}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(se){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Pi(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:n}=t;void 0!==r&&tl.assertOptions(r,{silentJSONParsing:rl.transitional(rl.boolean),forcedJSONParsing:rl.transitional(rl.boolean),clarifyTimeoutError:rl.transitional(rl.boolean)},!1),null!=a&&(Ho.isFunction(a)?t.paramsSerializer={serialize:a}:tl.assertOptions(a,{encode:rl.function,serialize:rl.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),tl.assertOptions(t,{baseUrl:rl.spelling("baseURL"),withXsrfToken:rl.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=n&&Ho.merge(n.common,n[t.method]);n&&Ho.forEach(["delete","get","head","post","put","patch","common"],e=>{delete n[e]}),t.headers=bi.concat(s,n);const o=[];let i=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,o.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!i){const e=[Xi.bind(this),void 0];for(e.unshift(...o),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let h=t;for(;u<d;){const e=o[u++],t=o[u++];try{h=e(h)}catch(p){t.call(this,p);break}}try{c=Xi.call(this,h)}catch(p){return Promise.reject(p)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return ei(_i((e=Pi(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Ho.forEach(["delete","get","head","options"],function(e){al.prototype[e]=function(t,r){return this.request(Pi(r||{},{method:e,url:t,data:(r||{}).data}))}}),Ho.forEach(["post","put","patch"],function(e){function t(t){return function(r,a,n){return this.request(Pi(n||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:a}))}}al.prototype[e]=t(),al.prototype[e+"Form"]=t(!0)});const nl=al;class sl{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const a=new Promise(e=>{r.subscribe(e),t=e}).then(e);return a.cancel=function(){r.unsubscribe(t)},a},e(function(e,a,n){r.reason||(r.reason=new Ni(e,a,n),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new sl(function(t){e=t});return{token:t,cancel:e}}}const ol=sl;const il={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(il).forEach(([e,t])=>{il[t]=e});const ll=il;const cl=function e(t){const r=new nl(t),a=Zs(nl.prototype.request,r);return Ho.extend(a,nl.prototype,r,{allOwnKeys:!0}),Ho.extend(a,r,null,{allOwnKeys:!0}),a.create=function(r){return e(Pi(t,r))},a}(hi);cl.Axios=nl,cl.CanceledError=Ni,cl.CancelToken=ol,cl.isCancel=wi,cl.VERSION=Yi,cl.toFormData=Ko,cl.AxiosError=Vo,cl.Cancel=cl.CanceledError,cl.all=function(e){return Promise.all(e)},cl.spread=function(e){return function(t){return e.apply(null,t)}},cl.isAxiosError=function(e){return Ho.isObject(e)&&!0===e.isAxiosError},cl.mergeConfig=Pi,cl.AxiosHeaders=bi,cl.formToJSON=e=>di(Ho.isHTMLForm(e)?new FormData(e):e),cl.getAdapter=Ki.getAdapter,cl.HttpStatusCode=ll,cl.default=cl;const dl=cl;const ul=()=>{const{user:t}=Gs(),[r,a]=e.useState("monthly"),[n,s]=e.useState({isConnected:!1,isLoading:!0,products:null}),[o,i]=e.useState(null),[l,c]=e.useState(null),d=[{id:"basic",name:"Básico",icon:Z.jsx(N,{className:"w-10 h-10 text-gray-500"}),color:"gray",gradient:"from-gray-400 to-gray-600",features:["Gratuito (R$ 0,00/mês)","Limite de 2 moedas (ex: BRL, USD)","Limite de 2 plataformas (Shopify, Nuvemshop)","Limite de 2 gateways de pagamento (Stripe, Mercado Pago)","Pode realizar 10 cálculos por mês","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:0,quarterly:{total:0,perMonth:0},annual:{total:0,perMonth:0}}},{id:"gold",name:"Gold",icon:Z.jsx(u.div,{initial:{scale:1},animate:{scale:[1,1.15,1],boxShadow:["0 0 0px #FFD700","0 0 24px #FFD700","0 0 0px #FFD700"]},transition:{repeat:1/0,duration:2},children:Z.jsx(C,{className:"w-12 h-12 text-yellow-500 drop-shadow-lg"})}),color:"yellow",gradient:"from-yellow-400 to-yellow-600",popular:!0,features:["R$ 9,90/mês","Suporte a 10 moedas","Até 4 plataformas","Até 4 gateways de pagamento","Cálculo automático em tempo real","Atualização automática de câmbio","Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)","Suporte via e-mail"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:9},annual:{total:89.9,perMonth:7.5}}},{id:"premium",name:"Premium",icon:Z.jsxs(u.div,{initial:{rotate:0,scale:1},animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{repeat:1/0,duration:3},className:"relative flex items-center justify-center",children:[Z.jsx(k,{className:"w-12 h-12 text-purple-500 drop-shadow-lg"}),Z.jsx(u.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1},className:"absolute -top-2 -right-2",children:Z.jsx(S,{className:"w-7 h-7 text-blue-500 drop-shadow-xl"})})]}),color:"purple",gradient:"from-purple-400 to-purple-600",features:["R$ 19,90/mês","Todas as moedas disponíveis (70+)","Todas as plataformas integradas","Todos os gateways de pagamento","Cálculo automático em tempo real","Histórico de preços completo","Suporte técnico prioritário","Segurança avançada nos pagamentos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.6}}}],h=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)} (R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês)`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)} (R$ ${e.prices.annual.perMonth.toFixed(2)}/mês)`}}},p=(e,t)=>{const r=e.prices.monthly*("quarterly"===t?3:12),a=e.prices[t].total;return Math.round((r-a)/r*100)};return e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),r=localStorage.getItem("currentUser");if(e&&"active"===t&&r){const t=localStorage.getItem("subscriptionDate");if(t){const r=new Date(t);((new Date).getTime()-r.getTime())/36e5<24?i(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"))}}s({isConnected:!0,isLoading:!1,products:null})},[]),Z.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center",children:Z.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8",children:[Z.jsx("h3",{className:"text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight",children:"Escolha o período de cobrança"}),Z.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:["monthly","quarterly","annual"].map(e=>Z.jsxs(u.button,{whileHover:{scale:1.07,boxShadow:"0 0 16px #60A5FA"},whileTap:{scale:.97},onClick:()=>a(e),className:"p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg "+(r===e?"border-blue-500 bg-blue-100 text-blue-700":"border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"),children:[Z.jsx("p",{className:"font-bold text-lg",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&Z.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow",children:["-",p(d[1],e),"%"]})]},e))})]}),!n.isLoading&&Z.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:d.map((e,a)=>Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*a},className:`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${e.popular?"border-yellow-400 shadow-yellow-200 scale-105":""} ${o===e.id?"ring-2 ring-green-500":""}`,children:[Z.jsxs("div",{className:"flex flex-col items-center mb-8",children:[Z.jsx("div",{className:`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${e.gradient} shadow-lg`,children:e.icon}),Z.jsx("span",{className:`text-3xl font-extrabold text-${e.color}-700 mb-2 tracking-tight`,children:e.name}),e.popular&&Z.jsx(u.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.5},className:"px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse",children:"⭐ Mais Popular"}),Z.jsx("span",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:h(e,r).label})]}),Z.jsx("ul",{className:"mb-8 text-base text-gray-900 space-y-4 flex-1",children:e.features.map((e,t)=>Z.jsxs("li",{className:"flex items-center gap-2",children:[Z.jsx(N,{className:"w-5 h-5 text-green-500"}),Z.jsx("span",{children:e})]},t))}),Z.jsx("div",{className:"mt-auto",children:Z.jsxs(u.button,{whileHover:{scale:o===e.id?1:1.07,boxShadow:o===e.id?void 0:"0 0 16px "+("yellow"===e.color?"#FFD700":"purple"===e.color?"#6366F1":"#60A5FA")},whileTap:{scale:o===e.id?1:.97},onClick:async()=>{if(o!==e.id){c(`${e.id}_${r}`);try{if(et.loading("Redirecionando para pagamento...",{id:"purchase"}),!t?.id)throw new Error("Usuário não encontrado");const a=await async function({title:e,description:t,price:r,quantity:a=1,planId:n,userId:s}){const o={items:[{title:e,description:t,quantity:a,currency_id:"BRL",unit_price:r}],external_reference:`${n}_${s}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:s}};return(await dl.post("https://api.mercadopago.com/checkout/preferences",o,{headers:{Authorization:"Bearer [REDACTED_APP_USR_TOKEN]","Content-Type":"application/json"}})).data}({title:`Assinatura DropCalc - ${e.name}`,description:`Plano ${e.name} (${r})`,price:h(e,r).value,planId:e.id,userId:t.id});window.location.href=a.init_point}catch(a){console.error("Erro ao criar pagamento:",a),et.error("Erro ao redirecionar para pagamento.",{id:"purchase"})}finally{c(null)}}},disabled:l===`${e.id}_${r}`||o===e.id,className:"w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 "+(o===e.id?"bg-green-100 text-green-700 cursor-default":l===`${e.id}_${r}`?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-2xl`),children:[Z.jsx(E,{className:"w-5 h-5"}),"Assinar"]})})]},e.id))}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"overflow-x-auto mb-10",children:[Z.jsx("h3",{className:"text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight",children:"Comparativo dos Planos"}),Z.jsxs("table",{className:"min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100",children:[Z.jsx("thead",{children:Z.jsxs("tr",{children:[Z.jsx("th",{className:"py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl",children:"Benefício"}),d.map(e=>Z.jsx("th",{className:"py-4 px-6 text-center font-bold text-lg bg-blue-50",children:Z.jsx("span",{className:`text-base font-bold text-${e.color}-700`,children:e.name})},e.id))]})}),Z.jsxs("tbody",{children:[Z.jsxs("tr",{className:"bg-white/60",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Preço"}),d.map(e=>Z.jsx("td",{className:"py-3 px-6 text-center font-bold text-lg",children:h(e,r).label},e.id))]}),Z.jsxs("tr",{className:"bg-blue-50/60",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Moedas suportadas"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"70+"})]}),Z.jsxs("tr",{className:"bg-white/60",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Plataformas integradas"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"Todas"})]}),Z.jsxs("tr",{className:"bg-blue-50/60",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Gateways de pagamento"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"Todos"})]}),Z.jsxs("tr",{className:"bg-white/60",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Cálculos por mês"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"})]}),Z.jsxs("tr",{className:"bg-blue-50/60",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Suporte"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"Prioritário"})]}),Z.jsxs("tr",{className:"bg-white/60 rounded-b-3xl",children:[Z.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Segurança avançada"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),Z.jsx("td",{className:"py-3 px-6 text-center",children:Z.jsx(N,{className:"w-6 h-6 text-green-500 mx-auto"})})]})]})]})]}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10",children:[Z.jsx(m,{className:"w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce"}),Z.jsx("h3",{className:"text-2xl font-extrabold mb-3 tracking-tight",children:"💡 Dica Especial"}),Z.jsxs("p",{className:"opacity-95 text-lg",children:["Com o ",Z.jsx("span",{className:"font-bold text-yellow-200",children:"DropCalc Premium"}),", você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada."]})]})]})})},hl={basic:{maxCurrencies:2,maxPlatforms:2,maxGateways:2,maxCalculationsPerMonth:10,hasAutoCalc:!1,hasExchangeUpdate:!1,hasAI:!1,hasHistory:!1,supportType:"email"},gold:{maxCurrencies:10,maxPlatforms:4,maxGateways:4,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!1,hasHistory:!1,supportType:"email"},premium:{maxCurrencies:70,maxPlatforms:99,maxGateways:99,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!0,hasHistory:!0,supportType:"priority"}};const pl=({text:e,children:t})=>{const[a,n]=r.useState(!1);return Z.jsxs("div",{className:"relative inline-block",children:[Z.jsx("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"cursor-help",children:t}),a&&Z.jsxs("div",{className:"absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 max-w-xs",children:[e,Z.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"})]})]})},ml=()=>{const{plan:t,limits:r,isBasic:a,isGold:n,isPremium:s}=function(){const t=localStorage.getItem("userPlan")||"basic",r=e.useMemo(()=>hl[t],[t]);return{plan:t,limits:r,isBasic:"basic"===t,isGold:"gold"===t,isPremium:"premium"===t}}(),i=r,l=a,c=o(),{t:d}=(()=>{const t=e.useContext(ee);if(!t)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return t})(),{user:m,logout:g,refreshAuth:f,isAdmin:y}=Gs();console.log("🎯 DashboardSimples - Estado atual:",{user:!!m,userEmail:m?.email,userName:m?.name,plan:!!t,planType:t,planName:t}),e.useEffect(()=>{const e=localStorage.getItem("accessToken"),t=localStorage.getItem("currentUser");if(console.log("🔍 DashboardSimples - Verificação de auth:",{hasToken:!!e,hasUserData:!!t}),!e||!t)return console.log("❌ Não autenticado, redirecionando para login"),void c("/login");!m&&t&&(console.log("🔄 Fazendo refresh do auth..."),f())},[m,c,f]);const[x,b]=e.useState(""),[v,w]=e.useState(()=>{try{const e=localStorage.getItem("calculadora-historico");return e?JSON.parse(e):[]}catch{return[]}}),[N,C]=e.useState("5.00"),[k,S]=e.useState("4.70"),[E,L]=e.useState("25"),[D,M]=e.useState("0"),[U,F]=e.useState("3"),[B,H]=e.useState("shopify"),[V,$]=e.useState("stripe"),[z,G]=e.useState("USD"),[q,W]=e.useState("USD"),[J,K]=e.useState(null),[X,Y]=e.useState(!1),[Q,te]=e.useState(!1),[re,ae]=e.useState(!1),[ne,se]=e.useState(()=>{try{const e=localStorage.getItem("calculations-used-this-month");return e?parseInt(e):0}catch{return 0}});e.useEffect(()=>{},[]);const oe=[{id:"shopify",nome:"Shopify",taxa:2.9},{id:"nuvemshop",nome:"Nuvem Shop",taxa:3.5},{id:"woocommerce",nome:"WooCommerce",taxa:0},{id:"magento",nome:"Magento",taxa:0},{id:"opencart",nome:"OpenCart",taxa:0},{id:"prestashop",nome:"PrestaShop",taxa:0},{id:"mercadolivre",nome:"Mercado Livre",taxa:13.99},{id:"amazon",nome:"Amazon Brasil",taxa:15},{id:"americanas",nome:"Americanas",taxa:17},{id:"submarino",nome:"Submarino",taxa:17},{id:"casasbahia",nome:"Casas Bahia",taxa:18},{id:"extra",nome:"Extra",taxa:16},{id:"pontofrio",nome:"Ponto Frio",taxa:17},{id:"shopee",nome:"Shopee",taxa:12},{id:"aliexpress",nome:"AliExpress",taxa:8},{id:"wish",nome:"Wish",taxa:15},{id:"etsy",nome:"Etsy",taxa:6.5},{id:"ebay",nome:"eBay",taxa:10},{id:"facebook",nome:"Facebook Shop",taxa:5},{id:"instagram",nome:"Instagram Shop",taxa:5},{id:"tiktok",nome:"TikTok Shop",taxa:6},{id:"elo7",nome:"Elo7",taxa:12},{id:"enjoei",nome:"Enjoei",taxa:15},{id:"olx",nome:"OLX",taxa:0},{id:"vinted",nome:"Vinted",taxa:7},{id:"shein",nome:"Shein",taxa:10},{id:"temu",nome:"Temu",taxa:8},{id:"zoom",nome:"Zoom",taxa:5},{id:"buscape",nome:"Buscapé",taxa:8},{id:"personalizado",nome:"Site Personalizado",taxa:0}],ie=[{id:"stripe",nome:"Stripe",taxa:3.4},{id:"pagseguro",nome:"PagSeguro",taxa:3.99},{id:"mercadopago",nome:"Mercado Pago",taxa:4.99},{id:"paypal",nome:"PayPal",taxa:4.4},{id:"cielo",nome:"Cielo",taxa:3.25},{id:"rede",nome:"Rede",taxa:3.5},{id:"getnet",nome:"Getnet",taxa:3.2},{id:"stone",nome:"Stone",taxa:2.95},{id:"adyen",nome:"Adyen",taxa:2.9},{id:"wirecard",nome:"Wirecard",taxa:3.8},{id:"iugu",nome:"Iugu",taxa:4.5},{id:"pagar.me",nome:"Pagar.me",taxa:4.99},{id:"picpay",nome:"PicPay",taxa:3.99},{id:"asaas",nome:"Asaas",taxa:3.5},{id:"gerencianet",nome:"Gerencianet",taxa:4.2},{id:"moip",nome:"Moip",taxa:4.69},{id:"ebanx",nome:"EBANX",taxa:4.2},{id:"checkout",nome:"Checkout.com",taxa:2.95},{id:"rakuten",nome:"Rakuten Pay",taxa:4.5},{id:"ifood",nome:"iFood Pay",taxa:5.2},{id:"shipay",nome:"SiPay",taxa:3.8},{id:"zoop",nome:"Zoop",taxa:3.59},{id:"vindi",nome:"Vindi",taxa:3.99},{id:"yapay",nome:"YaPay",taxa:4.1},{id:"pagarme",nome:"Pagar.me",taxa:4.99}],le=oe.slice(0,i.maxPlatforms),ce=[{codigo:"USD",nome:"Dólar Americano"},{codigo:"EUR",nome:"Euro"},{codigo:"GBP",nome:"Libra Esterlina"},{codigo:"CNY",nome:"Yuan Chinês"},{codigo:"JPY",nome:"Iene Japonês"},{codigo:"CAD",nome:"Dólar Canadense"},{codigo:"AUD",nome:"Dólar Australiano"},{codigo:"CHF",nome:"Franco Suíço"},{codigo:"SEK",nome:"Coroa Sueca"},{codigo:"NOK",nome:"Coroa Norueguesa"},{codigo:"DKK",nome:"Coroa Dinamarquesa"},{codigo:"PLN",nome:"Zloty Polonês"},{codigo:"CZK",nome:"Coroa Tcheca"},{codigo:"HUF",nome:"Forint Húngaro"},{codigo:"RON",nome:"Leu Romeno"},{codigo:"BGN",nome:"Lev Búlgaro"},{codigo:"HRK",nome:"Kuna Croata"},{codigo:"RUB",nome:"Rublo Russo"},{codigo:"TRY",nome:"Lira Turca"},{codigo:"ILS",nome:"Shekel Israelense"},{codigo:"ZAR",nome:"Rand Sul-Africano"},{codigo:"INR",nome:"Rupia Indiana"},{codigo:"KRW",nome:"Won Sul-Coreano"},{codigo:"SGD",nome:"Dólar de Singapura"},{codigo:"HKD",nome:"Dólar de Hong Kong"},{codigo:"THB",nome:"Baht Tailandês"},{codigo:"MYR",nome:"Ringgit Malaio"},{codigo:"IDR",nome:"Rupia Indonésia"},{codigo:"PHP",nome:"Peso Filipino"},{codigo:"VND",nome:"Dong Vietnamita"},{codigo:"BDT",nome:"Taka de Bangladesh"},{codigo:"PKR",nome:"Rupia Paquistanesa"},{codigo:"LKR",nome:"Rupia do Sri Lanka"},{codigo:"NPR",nome:"Rupia Nepalesa"},{codigo:"MVR",nome:"Rufiyaa das Maldivas"},{codigo:"BTN",nome:"Ngultrum do Butão"},{codigo:"AFN",nome:"Afghani Afegão"},{codigo:"IRR",nome:"Rial Iraniano"},{codigo:"IQD",nome:"Dinar Iraquiano"},{codigo:"JOD",nome:"Dinar Jordaniano"},{codigo:"KWD",nome:"Dinar Kuwaitiano"},{codigo:"LBP",nome:"Libra Libanesa"},{codigo:"SAR",nome:"Riyal Saudita"},{codigo:"AED",nome:"Dirham dos Emirados"},{codigo:"QAR",nome:"Riyal do Catar"},{codigo:"OMR",nome:"Rial de Omã"},{codigo:"BHD",nome:"Dinar do Bahrein"},{codigo:"YER",nome:"Rial Iemenita"},{codigo:"SYP",nome:"Libra Síria"},{codigo:"EGP",nome:"Libra Egípcia"},{codigo:"LYD",nome:"Dinar Líbio"},{codigo:"TND",nome:"Dinar Tunisiano"},{codigo:"DZD",nome:"Dinar Argelino"},{codigo:"MAD",nome:"Dirham Marroquino"},{codigo:"NGN",nome:"Naira Nigeriana"},{codigo:"GHS",nome:"Cedi Ganês"},{codigo:"KES",nome:"Xelim Queniano"},{codigo:"UGX",nome:"Xelim Ugandense"},{codigo:"TZS",nome:"Xelim Tanzaniano"},{codigo:"ETB",nome:"Birr Etíope"},{codigo:"RWF",nome:"Franco Ruandês"},{codigo:"MXN",nome:"Peso Mexicano"},{codigo:"GTQ",nome:"Quetzal Guatemalteco"},{codigo:"HNL",nome:"Lempira Hondurenha"},{codigo:"NIO",nome:"Córdoba Nicaraguense"},{codigo:"CRC",nome:"Colón Costa-riquenho"},{codigo:"PAB",nome:"Balboa Panamenha"},{codigo:"COP",nome:"Peso Colombiano"},{codigo:"VES",nome:"Bolívar Venezuelano"},{codigo:"GYD",nome:"Dólar Guianense"},{codigo:"SRD",nome:"Dólar Surinamês"},{codigo:"PEN",nome:"Sol Peruano"},{codigo:"BOB",nome:"Boliviano"},{codigo:"PYG",nome:"Guarani Paraguaio"},{codigo:"UYU",nome:"Peso Uruguaio"},{codigo:"ARS",nome:"Peso Argentino"},{codigo:"CLP",nome:"Peso Chileno"},{codigo:"BRL",nome:"Real Brasileiro"}].slice(0,i.maxCurrencies),de=ie.slice(0,i.maxGateways),ue=e=>({USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[e]||e);e.useEffect(()=>{},[]);const he=async()=>{if(ae(!0),!N||!U)return K(null),void ae(!1);if(i.maxCalculationsPerMonth&&ne>=i.maxCalculationsPerMonth)return alert(`Limite de ${i.maxCalculationsPerMonth} cálculos por mês atingido! Faça upgrade para continuar calculando.`),void ae(!1);te(!0);try{const e=parseFloat(N),t=parseFloat(U),r=parseFloat(E),a=parseFloat(D)||0,n=parseFloat(k)||0,s=((e,t)=>{if(e===t)return 1;const r={BRL:5.2,EUR:.92,GBP:.8,JPY:150,CNY:7.3,CAD:1.35,AUD:1.55,CHF:.9,SEK:10.5,NOK:10.8,MXN:18.5,ARS:365,CLP:900,COP:4100,PEN:3.75,INR:83.5,KRW:1320,THB:36,SGD:1.35,HKD:7.8};return"USD"===e?r[t]||1:"USD"===t?1/(r[e]||1):1/(r[e]||1)*(r[t]||1)})(z,q),o=oe.find(e=>e.id===B),i=ie.find(e=>e.id===V),l=o?.taxa||2.9,c=i?.taxa||3.4,d=e*s,u=d*t,h=d+n*s+a*s,p=u*(c/100),m=u*(l/100),g=u*(r/100),f=p+m+g,y=u-h-f,x=h+f,b=[1,10,50,100,500,1e3].map(e=>({quantidade:e,lucro:y*e}));K({precoVenda:u,custoTotal:h,custoFornecedor:d,markup:t,taxaCambio:s,lucroLiquido:y,breakeven:x,taxas:{gateway:{percentual:c,valor:p},plataforma:{percentual:l,valor:m},marketing:{percentual:r,valor:g},extra:{percentual:0,valor:0},total:f},projecoes:b,percentuais:{custoMedio:h/u*100,marketing:r,margemContrib:y/u*100,breakeven:x/u*100}});const v=ne+1;se(v),localStorage.setItem("calculations-used-this-month",v.toString())}catch(e){console.error("Erro no cálculo:",e),K(null)}finally{te(!1),ae(!1)}};e.useEffect(()=>{i&&(ce.length>0&&!ce.map(e=>e.codigo).includes(z)&&G(ce[0].codigo||"USD"),ce.length>0&&!ce.map(e=>e.codigo).includes(q)&&W(ce[0].codigo||"USD"),le.length>0&&!le.map(e=>e.id).includes(B)&&H(le[0].id||"shopify"),de.length>0&&!de.map(e=>e.id).includes(V)&&$(de[0].id||"stripe"))},[t,i,z,q,B,V]),e.useEffect(()=>{if(!l){const e=setTimeout(()=>{he()},500);return()=>clearTimeout(e)}null!==J&&K(null)},[N,k,E,D,U,B,V,z,q,l]);const pe=async()=>{try{console.log("🚪 Iniciando logout..."),localStorage.clear(),await g(),console.log("✅ Logout concluído, redirecionando..."),window.location.href="/welcome"}catch(e){console.error("❌ Erro no logout:",e),localStorage.clear(),window.location.href="/welcome"}};return Z.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900",children:[Z.jsx("header",{className:"bg-white/20 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10",children:Z.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Z.jsxs("div",{className:"flex justify-between items-center h-16",children:[Z.jsxs("div",{className:"flex items-center",children:[Z.jsx(h,{className:"h-8 w-8 text-purple-400 mr-3"}),Z.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"DropCalc"})]}),Z.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[Z.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:[d("calc.welcome"),", ",m?.name||"Usuário","!",!1]}),t&&Z.jsxs("span",{className:"px-2 py-1 text-xs font-bold rounded-full flex items-center "+(s?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":n?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[Z.jsx(j,{className:"w-3 h-3 mr-1"}),t.toUpperCase()]}),Z.jsx("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano, navegando para /payment"),c("/payment")},className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors",children:t?"Alterar Plano":"Escolher Plano"}),y&&Z.jsx("button",{onClick:()=>c("/users"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",title:"Ver Usuários (Admin)",children:Z.jsx(I,{className:"w-5 h-5"})}),Z.jsx("button",{onClick:()=>c("/settings"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:Z.jsx(_,{className:"w-5 h-5"})}),Z.jsx("button",{onClick:pe,className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors",children:d("nav.logout")})]}),Z.jsx("button",{onClick:()=>Y(!X),className:"md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:X?Z.jsx(T,{className:"w-6 h-6"}):Z.jsx(P,{className:"w-6 h-6"})})]})})}),Z.jsx(A,{children:X&&Z.jsx(u.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-black/30 backdrop-blur-sm border-b border-white/10",children:Z.jsxs("div",{className:"px-4 py-4 space-y-2",children:[Z.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:[d("calc.welcome"),", ",m?.name||d("calc.user"),"!"]}),t&&Z.jsxs("div",{className:"inline-flex px-2 py-1 text-xs font-bold rounded-full items-center mb-2 "+(s?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":n?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[Z.jsx(j,{className:"w-3 h-3 mr-1"}),t.toUpperCase()]}),Z.jsxs("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano (mobile), navegando para /payment"),c("/payment"),Y(!1)},className:"flex items-center w-full p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[Z.jsx(j,{className:"w-4 h-4 mr-2"}),t?"Alterar Plano":"Escolher Plano"]}),y&&Z.jsxs("button",{onClick:()=>{c("/users"),Y(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[Z.jsx(I,{className:"w-4 h-4 mr-2"}),"Ver Usuários (Admin)"]}),Z.jsxs("button",{onClick:()=>{c("/settings"),Y(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[Z.jsx(_,{className:"w-4 h-4 mr-2"}),d("nav.settings")]}),Z.jsxs("button",{onClick:pe,className:"flex items-center w-full p-2 text-red-400 hover:text-red-300 transition-colors",children:[Z.jsx(I,{className:"w-4 h-4 mr-2"}),d("nav.logout")]})]})})}),Z.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:Z.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[Z.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[Z.jsx(h,{className:"w-6 h-6 mr-2 text-purple-400"}),d("calc.title"),Q&&Z.jsx("span",{className:"ml-3 text-sm text-yellow-400 animate-pulse",children:d("calc.loading")})]}),null!==i.maxCalculationsPerMonth&&Z.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4",children:[Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsx("span",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"Cálculos restantes este mês:"}),Z.jsxs("span",{className:"font-bold "+((i.maxCalculationsPerMonth||10)-ne<=2?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"),children:[(i.maxCalculationsPerMonth||10)-ne," de ",i.maxCalculationsPerMonth||10]})]}),(i.maxCalculationsPerMonth||10)-ne<=2&&Z.jsx("p",{className:"text-xs text-orange-600 dark:text-orange-400 mt-1",children:"Poucos cálculos restantes! Considere fazer upgrade para continuar usando."})]}),Z.jsxs("div",{className:"space-y-4",children:[Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.productName"),Z.jsx(pl,{text:d("tooltip.productName"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("input",{type:"text",className:"w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500",placeholder:d("calc.productName"),value:x,onChange:e=>b(e.target.value)})]}),Z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.productCost")," (",z,")",Z.jsx(pl,{text:d("tooltip.productCost"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("input",{type:"number",value:N,onChange:e=>C(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 16.73",step:"0.01"})]}),Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.originCurrency"),Z.jsx(pl,{text:d("tooltip.originCurrency"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("select",{value:z,onChange:e=>G(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ce.map(e=>Z.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))}),!s&&Z.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]}),Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.saleCurrency"),Z.jsx(pl,{text:d("tooltip.saleCurrency"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("select",{value:q,onChange:e=>W(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ce.map(e=>Z.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))}),!s&&Z.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]})]}),Z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.additionalCosts")," (",z,")",Z.jsx(pl,{text:d("tooltip.additionalCosts"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("input",{type:"number",value:k,onChange:e=>S(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 5.00",step:"0.01"})]}),Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.profitMargin"),Z.jsx(pl,{text:d("tooltip.profitMargin"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("input",{type:"number",value:U,onChange:e=>F(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 4.12",step:"0.01",min:"1"})]})]}),Z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Marketing (%)",Z.jsx(pl,{text:d("tooltip.marketing"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("input",{type:"number",value:E,onChange:e=>L(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 25",step:"0.1",min:"0",max:"100"})]}),Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Custo Extra (",z,")",Z.jsx(pl,{text:d("tooltip.extraCost"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("input",{type:"number",value:D,onChange:e=>M(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 2.00",step:"0.01"})]})]}),Z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.platform"),Z.jsx(pl,{text:d("tooltip.platform"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("select",{value:B,onChange:e=>H(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:le.map(e=>Z.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))}),!s&&Z.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: Apenas Shopify e Nuvem Shop":"Plano Gold: Plataformas limitadas"," - Upgrade para Premium para todas as plataformas"]})]}),Z.jsxs("div",{children:[Z.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.paymentGateway"),Z.jsx(pl,{text:d("tooltip.gateway"),children:Z.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),Z.jsx("select",{value:V,onChange:e=>$(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:de.map(e=>Z.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))}),!s&&Z.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: Apenas Stripe e PayPal":"Plano Gold: 4 gateways principais"," - Upgrade para Premium para todos os gateways"]})]})]}),l&&Z.jsx("div",{className:"mt-6",children:Z.jsxs("button",{onClick:he,disabled:re||!N||!U,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center text-lg",children:[Z.jsx(h,{className:"h-5 w-5 mr-2"}),re?"Calculando...":"Calcular Preço"]})}),Z.jsx("div",{className:"mt-4 p-4 rounded-lg "+(l?"bg-orange-50 dark:bg-orange-900/20":"bg-green-50 dark:bg-green-900/20"),children:Z.jsxs("p",{className:"text-sm flex items-center "+(l?"text-orange-600 dark:text-orange-400":"text-green-600 dark:text-green-400"),children:[Z.jsx(p,{className:"h-4 w-4 mr-2"}),l?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real"]})})]})]}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[Z.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[Z.jsx(p,{className:"w-6 h-6 mr-2 text-green-400"}),d("calc.calculationResult")]}),J?Z.jsxs("div",{className:"space-y-6",children:[Z.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4",children:Z.jsxs("div",{className:"text-center",children:[Z.jsx("p",{className:"text-green-100 text-sm",children:d("calc.suggestedPrice")}),Z.jsxs("p",{className:"text-3xl font-bold text-white",children:[ue(q)," ",J.precoVenda.toFixed(2)]}),Z.jsxs("p",{className:"text-green-200 text-xs mt-1",children:[d("calc.exchangeRate"),": 1 ",z," = ",J.taxaCambio.toFixed(4)," ",q]})]})}),Z.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3",children:Z.jsxs("div",{className:"flex flex-wrap justify-center gap-4 text-sm",children:[Z.jsxs("div",{className:"flex items-center",children:[Z.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Plataforma:"}),Z.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:oe.find(e=>e.id===B)?.nome||B})]}),Z.jsxs("div",{className:"flex items-center",children:[Z.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Gateway:"}),Z.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:ie.find(e=>e.id===V)?.nome||V})]})]})}),Z.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[Z.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[Z.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:d("calc.pricing")}),Z.jsxs("div",{className:"space-y-2 text-sm",children:[Z.jsxs("div",{className:"flex justify-between items-center bg-green-600 text-white px-2 py-1 rounded",children:[Z.jsxs("span",{className:"flex items-center",children:[d("calc.sellingPrice"),":",Z.jsx(pl,{text:d("tooltip.resultSellingPrice"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{children:[ue(q)," ",J.precoVenda.toFixed(2)]})]}),Z.jsxs("div",{className:"flex justify-between items-center bg-red-500 text-white px-2 py-1 rounded",children:[Z.jsxs("span",{className:"flex items-center",children:[d("calc.supplierCost"),":",Z.jsx(pl,{text:d("tooltip.resultSupplierCost"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{children:[ue(q)," ",J.custoFornecedor.toFixed(2)]})]}),Z.jsxs("div",{className:"flex justify-between items-center bg-gray-500 text-white px-2 py-1 rounded",children:[Z.jsxs("span",{className:"flex items-center",children:[d("calc.markupLabel"),":",Z.jsx(pl,{text:d("tooltip.resultMarkup"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsx("span",{children:J.markup.toFixed(8)})]})]}),Z.jsx("h4",{className:"text-white font-bold text-center bg-blue-600 text-sm py-2 mt-4 mb-2 rounded",children:d("calc.taxes")}),Z.jsxs("div",{className:"space-y-1 text-sm",children:[Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsx("span",{className:"text-blue-400",children:ie.find(e=>e.id===V)?.nome||V}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[J.taxas.gateway.percentual.toFixed(2),"%"]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.taxas.gateway.valor.toFixed(2)]})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsx("span",{className:"text-blue-400",children:oe.find(e=>e.id===B)?.nome||B}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[J.taxas.plataforma.percentual.toFixed(2),"%"]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.taxas.plataforma.valor.toFixed(2)]})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsx("span",{className:"text-blue-400",children:d("calc.marketing")}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[J.taxas.marketing.percentual,"%"]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.taxas.marketing.valor.toFixed(2)]})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsx("span",{className:"text-blue-400",children:d("calc.extra")}),Z.jsx("span",{className:"text-gray-900 dark:text-white",children:"0%"}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.taxas.extra.valor.toFixed(2)]})]}),Z.jsxs("div",{className:"flex justify-center bg-green-600 text-white px-2 py-1 rounded font-bold",children:[ue(q)," ",J.taxas.total.toFixed(2)]})]})]}),Z.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[Z.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:d("calc.importantValues")}),Z.jsxs("div",{className:"space-y-2 text-sm",children:[Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.saleValue"),Z.jsx(pl,{text:d("tooltip.resultSaleValue"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.precoVenda.toFixed(2)]}),Z.jsx("span",{className:"text-green-600 dark:text-green-400",children:"100,00%"})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.averageCost"),Z.jsx(pl,{text:d("tooltip.resultAverageCost"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.custoTotal.toFixed(2)]}),Z.jsxs("span",{className:"text-red-400",children:[J.percentuais.custoMedio.toFixed(2),"%"]})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.marketing"),Z.jsx(pl,{text:d("tooltip.resultMarketing"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.taxas.marketing.valor.toFixed(2)]}),Z.jsxs("span",{className:"text-yellow-400",children:[J.percentuais.marketing.toFixed(2),"%"]})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.contributionMargin"),Z.jsx(pl,{text:d("tooltip.resultContributionMargin"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.lucroLiquido.toFixed(2)]}),Z.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[J.percentuais.margemContrib.toFixed(2),"%"]})]}),Z.jsxs("div",{className:"flex justify-between items-center",children:[Z.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.breakeven"),Z.jsx(pl,{text:d("tooltip.resultBreakeven"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{className:"text-gray-900 dark:text-white",children:[ue(q)," ",J.breakeven.toFixed(2)]}),Z.jsxs("span",{className:"text-orange-400",children:[J.percentuais.breakeven.toFixed(2),"%"]})]})]}),Z.jsx("h4",{className:"text-white font-bold text-center bg-green-600 text-sm py-2 mt-4 mb-2 rounded",children:d("calc.sales")}),Z.jsxs("div",{className:"flex justify-between text-sm font-bold text-green-600 dark:text-green-400 mb-2",children:[Z.jsxs("span",{className:"flex items-center",children:[d("calc.units"),":",Z.jsx(pl,{text:d("tooltip.resultUnits"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]}),Z.jsxs("span",{className:"flex items-center",children:[d("calc.profitLabel"),Z.jsx(pl,{text:d("tooltip.resultProfit"),children:Z.jsx(R,{className:"w-3 h-3 ml-1"})})]})]}),Z.jsx("div",{className:"space-y-1 text-sm",children:J.projecoes.map((e,t)=>Z.jsxs("div",{className:"flex justify-between items-center bg-green-100/10 px-2 py-1 rounded",children:[Z.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[d("calc.units"),":"]}),Z.jsx("span",{className:"text-gray-900 dark:text-white font-bold",children:e.quantidade}),Z.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[ue(q)," ",e.lucro.toFixed(2)]})]},t))})]})]}),i?.hasHistory&&Z.jsx("div",{className:"text-center",children:Z.jsxs("button",{onClick:()=>{if(!J)return;if(!i?.hasHistory)return void alert("Histórico disponível apenas no plano Premium. Faça upgrade para salvar seus cálculos!");const e=[{id:Date.now().toString(),nomeProduto:x||"Produto sem nome",precoVenda:J.precoVenda,moedaDestino:q,plataforma:B,gateway:V,dataCalculo:(new Date).toLocaleString("pt-BR"),detalhes:J},...v].slice(0,50);w(e),localStorage.setItem("calculadora-historico",JSON.stringify(e)),alert(d("calc.calculationSaved"))},className:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto",children:[Z.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),d("calc.saveCalculation")]})}),!i?.hasHistory&&Z.jsxs("div",{className:"text-center bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4",children:[Z.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm mb-2",children:"💾 Histórico de cálculos disponível apenas no plano Premium"}),Z.jsx("button",{onClick:()=>c("/payment"),className:"bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm",children:"Fazer Upgrade Premium"})]})]}):Q?Z.jsxs("div",{className:"text-center py-12",children:[Z.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"}),Z.jsx("p",{className:"text-purple-400 font-medium",children:d("calc.loading")})]}):N&&U?Z.jsxs("div",{className:"text-center py-12",children:[Z.jsx(O,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),Z.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:d("calc.enterValuesMessage")})]}):Z.jsxs("div",{className:"text-center py-12",children:[Z.jsx(O,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),Z.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:d("calc.fillFieldsMessage")})]})]})]})})]})},gl=()=>Z.jsx(ml,{}),fl=()=>{const t=o(),[r,a]=e.useState(null),n=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:Z.jsx(h,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:Z.jsx(B,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:Z.jsx(p,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:Z.jsx(j,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Mercado Pago"',"4. Complete o pagamento através do Mercado Pago","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return Z.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:Z.jsxs("div",{className:"container mx-auto px-4 py-8",children:[Z.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[Z.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:Z.jsx(L,{className:"w-6 h-6 text-gray-600"})}),Z.jsxs("div",{className:"flex items-center gap-3",children:[Z.jsx(D,{className:"w-8 h-8 text-blue-600"}),Z.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),Z.jsxs("div",{className:"max-w-4xl mx-auto",children:[Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[Z.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),Z.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[Z.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),n.map((e,t)=>Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[Z.jsxs("button",{onClick:()=>{return t=e.id,void a(r===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[Z.jsxs("div",{className:"flex items-center gap-4",children:[Z.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),Z.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),Z.jsx(u.div,{animate:{rotate:r===e.id?90:0},transition:{duration:.2},children:Z.jsx(M,{className:"w-5 h-5 text-gray-500"})})]}),Z.jsx(A,{children:r===e.id&&Z.jsx(u.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:Z.jsxs("div",{className:"p-6 pt-4",children:[Z.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>Z.jsx(u.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&Z.jsxs(u.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[Z.jsx(U,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),Z.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[Z.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),Z.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>Z.jsxs(u.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[Z.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),Z.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),Z.jsxs(u.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",onSubmit:async e=>{e.preventDefault();const t=e.target,r=new FormData(t),a=r.get("nome"),n=r.get("email"),s=r.get("mensagem");try{await fetch("https://formspree.io/f/xwkzqgqg",{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify({nome:a,email:n,mensagem:s})}),alert("Mensagem enviada com sucesso!"),t.reset()}catch{alert("Erro ao enviar mensagem. Tente novamente.")}},children:[Z.jsx(F,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),Z.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),Z.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),Z.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[Z.jsx("input",{name:"nome",required:!0,placeholder:"Seu nome",className:"p-3 rounded-xl text-gray-800"}),Z.jsx("input",{name:"email",required:!0,type:"email",placeholder:"Seu e-mail",className:"p-3 rounded-xl text-gray-800"}),Z.jsx("input",{name:"mensagem",required:!0,placeholder:"Sua mensagem",className:"p-3 rounded-xl text-gray-800"})]}),Z.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Enviar Mensagem"})]})]})]})})},yl=()=>{const{loading:e,user:t}=Gs();return console.log("=== AppWithAuth carregando ==="),console.log("Loading:",e,"User:",t),e?Z.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:Z.jsxs("div",{className:"text-center",children:[Z.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),Z.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):Z.jsx(l,{children:Z.jsxs("div",{className:"App",children:[Z.jsxs(c,{children:[Z.jsx(d,{path:"/welcome",element:Z.jsx(Ws,{})}),Z.jsx(d,{path:"/login",element:Z.jsx(Js,{})}),Z.jsx(d,{path:"/login-simple",element:Z.jsx(Ks,{})}),Z.jsx(d,{path:"/signup",element:Z.jsx(Js,{})}),Z.jsx(d,{path:"/help",element:Z.jsx(fl,{})}),Z.jsx(d,{path:"/payment",element:Z.jsx(qs,{children:Z.jsx(ul,{})})}),Z.jsx(d,{path:"/dashboard",element:Z.jsx(qs,{children:Z.jsx(gl,{})})}),Z.jsx(d,{path:"/",element:t?Z.jsx(n,{to:"/dashboard",replace:!0}):Z.jsx(n,{to:"/welcome",replace:!0})}),Z.jsx(d,{path:"*",element:Z.jsx(n,{to:"/welcome",replace:!0})})]}),Z.jsx(Qe,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})};let xl;async function bl(){if(xl){xl.prompt();const{outcome:e}=await xl.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}xl=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),xl=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",bl),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const vl=document.createElement("style");vl.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(vl),console.log("=== main.tsx carregando AppWithAuth com sistema de idiomas ===");X.createRoot(document.getElementById("root")).render(Z.jsx(te,{children:Z.jsx(yl,{})}));
