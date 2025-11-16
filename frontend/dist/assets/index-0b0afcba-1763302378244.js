import{r as e,b as t,a as r}from"./vendor-5fcaeebf-1763302378244.js";import{u as a,N as s,L as n,a as o,b as i,B as l,R as c,c as d}from"./router-5060ca5f-1763302378244.js";import{m as u,C as h,T as p,Z as m,A as g,U as f,M as x,L as y,E as b,a as w,b as v,c as N,S as C,G as k,d as S,e as j,f as E,H as I,g as _,X as T,h as P,i as A,I as R,D as O,j as L,k as D,P as M,l as U,n as F,o as B,p as H,q as $,r as V,B as z,s as G,t as q,u as W}from"./ui-94c1474a-1763302378244.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var J={exports:{}},K={},Z=e,X=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),Q=Object.prototype.hasOwnProperty,ee=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,te={key:!0,ref:!0,__self:!0,__source:!0};function re(e,t,r){var a,s={},n=null,o=null;for(a in void 0!==r&&(n=""+r),void 0!==t.key&&(n=""+t.key),void 0!==t.ref&&(o=t.ref),t)Q.call(t,a)&&!te.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:X,type:e,key:n,ref:o,props:s,_owner:ee.current}}K.Fragment=Y,K.jsx=re,K.jsxs=re,J.exports=K;var ae=J.exports,se={},ne=t;se.createRoot=ne.createRoot,se.hydrateRoot=ne.hydrateRoot;const oe={pt:{"nav.dashboard":"Dashboard","nav.calculator":"Calculadora","nav.settings":"Configurações","nav.plans":"Planos","nav.logout":"Sair","calc.title":"Calculadora de Preços para Dropshipping","calc.loading":"Carregando dados das APIs...","calc.calculationSaved":"Cálculo salvo com sucesso!","calc.totalCostConverted":"Custo Total Convertido","calc.platformTax":"Taxa da Plataforma","calc.gatewayTax":"Taxa do Gateway","calc.totalTax":"Taxa Total","calc.productCost":"Custo do Produto","calc.additionalCosts":"Custos Adicionais","calc.profit":"Margem de Lucro (%)","calc.platform":"Plataforma","calc.gateway":"Gateway de Pagamento","calc.calculate":"Calcular Preço","calc.result":"Preço Ideal de Venda","calc.details":"Detalhes do Cálculo","calc.dataProduct":"Dados do Produto","calc.calculationResult":"Resultado do Cálculo","calc.suggestedPrice":"Preço de Venda Sugerido","calc.exchangeRate":"Taxa de Câmbio","calc.costDetails":"Detalhamento dos Custos","calc.originCurrency":"Moeda de Origem","calc.saleCurrency":"Moeda de Venda","calc.salesPlatform":"Plataforma de Venda","calc.paymentGateway":"Gateway de Pagamento","calc.profitMargin":"Margem de Lucro (%)","calc.clear":"Limpar","calc.save":"Salvar Cálculo","calc.netProfit":"Lucro Líquido","calc.productName":"Nome do Produto","calc.calculationHistory":"Histórico de Cálculos","calc.noHistory":"Nenhum cálculo salvo ainda","calc.savedAt":"Salvo em","calc.deleteCalculation":"Excluir","calc.saveCalculation":"Salvar Cálculo","calc.welcome":"Bem-vindo","calc.user":"Usuário","calc.fillFieldsMessage":"Preencha o custo fornecedor e o markup para ver o cálculo automático","calc.costSupplier":"custo fornecedor","calc.markup":"markup","calc.enterValuesMessage":"Digite os valores para ver o resultado do cálculo","calc.pricing":"PRECIFICAÇÃO","calc.sellingPrice":"Preço de venda","calc.supplierCost":"Custo Fornecedor","calc.markupLabel":"Markup","calc.taxes":"TAXAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venda","calc.averageCost":"Custo médio","calc.marketing":"Marketing","calc.contributionMargin":"Margem Contrib.","calc.breakeven":"Breakeven","calc.sales":"VENDAS","calc.units":"Unidades","calc.profitLabel":"LUCRO","calc.extra":"Extra","tooltip.productName":"Nome identificativo do produto para facilitar o histórico de cálculos","tooltip.productCost":"O custo que você paga para o fornecedor pelo produto","tooltip.originCurrency":"A moeda em que você paga o fornecedor","tooltip.saleCurrency":"A moeda em que você vai vender o produto","tooltip.additionalCosts":"Custos extras como frete, embalagem, impostos de importação","tooltip.profitMargin":"Multiplicador aplicado sobre o custo total (ex: 3 = 300% do custo)","tooltip.marketing":"Percentual do preço de venda destinado a marketing e publicidade","tooltip.extraCost":"Custos adicionais não cobertos em outras categorias","tooltip.platform":"Marketplace onde você vai vender (cada um tem taxas diferentes)","tooltip.gateway":"Processador de pagamento (taxa cobrada por transação)","tooltip.resultSellingPrice":"Preço final sugerido para vender o produto com lucro","tooltip.resultSupplierCost":"Valor que você paga ao fornecedor pelo produto","tooltip.resultMarkup":"Multiplicador aplicado sobre o custo para calcular o preço de venda","tooltip.resultSaleValue":"Valor total que o cliente paga pelo produto","tooltip.resultAverageCost":"Custo médio incluindo produto, frete e custos extras","tooltip.resultMarketing":"Porcentagem do preço destinada para investimento em marketing","tooltip.resultContributionMargin":"Margem que contribui para cobrir custos fixos e gerar lucro","tooltip.resultBreakeven":"Ponto de equilíbrio - preço mínimo para não ter prejuízo","tooltip.resultUnits":"Quantidade de produtos vendidos","tooltip.resultProfit":"Lucro líquido obtido com a venda","settings.title":"Configurações","settings.theme":"Tema do Aplicativo","settings.language":"Idioma","settings.notifications":"Notificações","settings.account":"Conta","settings.logout":"Sair da Conta","settings.light":"Claro","settings.dark":"Escuro","plans.title":"Escolha seu Plano","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mês","plans.upgrade":"Fazer Upgrade","plans.current":"Plano Atual","msg.languageChanged":"Idioma alterado com sucesso!","msg.themeChanged":"Tema alterado com sucesso!","msg.calculationDone":"Cálculo realizado com sucesso!","msg.error":"Ocorreu um erro","msg.success":"Sucesso!","btn.save":"Salvar","btn.cancel":"Cancelar","btn.back":"Voltar","btn.continue":"Continuar","btn.close":"Fechar","currency.brl":"Real Brasileiro","currency.usd":"Dólar Americano","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Iene Japonês","currency.cny":"Yuan Chinês"},en:{"nav.dashboard":"Dashboard","nav.calculator":"Calculator","nav.settings":"Settings","nav.plans":"Plans","nav.logout":"Logout","calc.title":"Dropshipping Price Calculator","calc.loading":"Loading API data...","calc.calculationSaved":"Calculation saved successfully!","calc.totalCostConverted":"Total Cost Converted","calc.platformTax":"Platform Fee","calc.gatewayTax":"Gateway Fee","calc.totalTax":"Total Fee","calc.productCost":"Product Cost","calc.additionalCosts":"Additional Costs","calc.profit":"Profit Margin (%)","calc.platform":"Platform","calc.gateway":"Payment Gateway","calc.calculate":"Calculate Price","calc.result":"Ideal Selling Price","calc.details":"Calculation Details","calc.dataProduct":"Product Data","calc.calculationResult":"Calculation Result","calc.suggestedPrice":"Suggested Selling Price","calc.exchangeRate":"Exchange Rate","calc.costDetails":"Cost Breakdown","calc.originCurrency":"Origin Currency","calc.saleCurrency":"Sale Currency","calc.salesPlatform":"Sales Platform","calc.paymentGateway":"Payment Gateway","calc.profitMargin":"Profit Margin (%)","calc.clear":"Clear","calc.save":"Save Calculation","calc.netProfit":"Net Profit","calc.productName":"Product Name","calc.calculationHistory":"Calculation History","calc.noHistory":"No calculations saved yet","calc.savedAt":"Saved at","calc.deleteCalculation":"Delete","calc.saveCalculation":"Save Calculation","calc.welcome":"Welcome","calc.user":"User","calc.fillFieldsMessage":"Fill in the supplier cost and markup to see the automatic calculation","calc.costSupplier":"supplier cost","calc.markup":"markup","calc.enterValuesMessage":"Enter values to see the calculation result","calc.pricing":"PRICING","calc.sellingPrice":"Selling price","calc.supplierCost":"Supplier Cost","calc.markupLabel":"Markup","calc.taxes":"TAXES","calc.importantValues":"IMPORTANT VALUES","calc.saleValue":"Sale value","calc.averageCost":"Average cost","calc.marketing":"Marketing","calc.contributionMargin":"Contrib. Margin","calc.breakeven":"Breakeven","calc.sales":"SALES","calc.units":"Units","calc.profitLabel":"PROFIT","calc.extra":"Extra","tooltip.productName":"Identification name for the product to facilitate calculation history","tooltip.productCost":"The cost you pay to the supplier for the product","tooltip.originCurrency":"The currency in which you pay the supplier","tooltip.saleCurrency":"The currency in which you will sell the product","tooltip.additionalCosts":"Extra costs like shipping, packaging, import taxes","tooltip.profitMargin":"Multiplier applied to total cost (e.g. 3 = 300% of cost)","tooltip.marketing":"Percentage of selling price allocated to marketing and advertising","tooltip.extraCost":"Additional costs not covered in other categories","tooltip.platform":"Marketplace where you will sell (each has different fees)","tooltip.gateway":"Payment processor (fee charged per transaction)","tooltip.resultSellingPrice":"Suggested final price to sell the product with profit","tooltip.resultSupplierCost":"Amount you pay to the supplier for the product","tooltip.resultMarkup":"Multiplier applied to cost to calculate selling price","tooltip.resultSaleValue":"Total amount the customer pays for the product","tooltip.resultAverageCost":"Average cost including product, shipping and extra costs","tooltip.resultMarketing":"Percentage of price allocated for marketing investment","tooltip.resultContributionMargin":"Margin that contributes to cover fixed costs and generate profit","tooltip.resultBreakeven":"Break-even point - minimum price to avoid loss","tooltip.resultUnits":"Quantity of products sold","tooltip.resultProfit":"Net profit obtained from the sale","settings.title":"Settings","settings.theme":"App Theme","settings.language":"Language","settings.notifications":"Notifications","settings.account":"Account","settings.logout":"Logout Account","settings.light":"Light","settings.dark":"Dark","plans.title":"Choose your Plan","plans.free":"Free","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/month","plans.upgrade":"Upgrade","plans.current":"Current Plan","msg.languageChanged":"Language changed successfully!","msg.themeChanged":"Theme changed successfully!","msg.calculationDone":"Calculation completed successfully!","msg.error":"An error occurred","msg.success":"Success!","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Back","btn.continue":"Continue","btn.close":"Close","currency.brl":"Brazilian Real","currency.usd":"US Dollar","currency.eur":"Euro","currency.gbp":"British Pound","currency.jpy":"Japanese Yen","currency.cny":"Chinese Yuan"},es:{"nav.dashboard":"Panel","nav.calculator":"Calculadora","nav.settings":"Configuración","nav.plans":"Planes","nav.logout":"Cerrar Sesión","calc.title":"Calculadora de Precios para Dropshipping","calc.loading":"Cargando datos de las APIs...","calc.calculationSaved":"¡Cálculo guardado con éxito!","calc.totalCostConverted":"Costo Total Convertido","calc.platformTax":"Tasa de la Plataforma","calc.gatewayTax":"Tasa del Gateway","calc.totalTax":"Tasa Total","calc.productCost":"Costo del Producto","calc.additionalCosts":"Costos Adicionales","calc.profit":"Margen de Ganancia (%)","calc.platform":"Plataforma","calc.gateway":"Pasarela de Pago","calc.calculate":"Calcular Precio","calc.result":"Precio Ideal de Venta","calc.details":"Detalles del Cálculo","calc.dataProduct":"Datos del Producto","calc.calculationResult":"Resultado del Cálculo","calc.suggestedPrice":"Precio de Venta Sugerido","calc.exchangeRate":"Tipo de Cambio","calc.costDetails":"Desglose de Costos","calc.originCurrency":"Moneda de Origen","calc.saleCurrency":"Moneda de Venta","calc.salesPlatform":"Plataforma de Ventas","calc.paymentGateway":"Pasarela de Pago","calc.profitMargin":"Margen de Ganancia (%)","calc.clear":"Limpiar","calc.save":"Guardar Cálculo","calc.netProfit":"Ganancia Neta","calc.welcome":"Bienvenido","calc.user":"Usuario","calc.fillFieldsMessage":"Complete el costo del proveedor y el markup para ver el cálculo automático","calc.costSupplier":"costo del proveedor","calc.markup":"markup","calc.enterValuesMessage":"Ingrese valores para ver el resultado del cálculo","calc.pricing":"PRECIFICACIÓN","calc.sellingPrice":"Precio de venta","calc.supplierCost":"Costo Proveedor","calc.markupLabel":"Markup","calc.taxes":"TASAS","calc.importantValues":"VALORES IMPORTANTES","calc.saleValue":"Valor de venta","calc.averageCost":"Costo promedio","calc.marketing":"Marketing","calc.contributionMargin":"Margen Contrib.","calc.breakeven":"Punto de equilibrio","calc.sales":"VENTAS","calc.units":"Unidades","calc.profitLabel":"GANANCIA","calc.extra":"Extra","calc.productName":"Nombre del Producto","calc.calculationHistory":"Historial de Cálculos","calc.noHistory":"Ningún cálculo guardado aún","calc.savedAt":"Guardado en","calc.deleteCalculation":"Eliminar","calc.saveCalculation":"Guardar Cálculo","tooltip.productName":"Nombre identificativo del producto para facilitar el historial de cálculos","tooltip.productCost":"El costo que pagas al proveedor por el producto","tooltip.originCurrency":"La moneda en que pagas al proveedor","tooltip.saleCurrency":"La moneda en que vas a vender el producto","tooltip.additionalCosts":"Costos extras como envío, embalaje, impuestos de importación","tooltip.profitMargin":"Multiplicador aplicado al costo total (ej: 3 = 300% del costo)","tooltip.marketing":"Porcentaje del precio de venta destinado a marketing y publicidad","tooltip.extraCost":"Costos adicionales no cubiertos en otras categorías","tooltip.platform":"Marketplace donde vas a vender (cada uno tiene tarifas diferentes)","tooltip.gateway":"Procesador de pagos (tarifa cobrada por transacción)","tooltip.resultSellingPrice":"Precio final sugerido para vender el producto con ganancia","tooltip.resultSupplierCost":"Valor que pagas al proveedor por el producto","tooltip.resultMarkup":"Multiplicador aplicado sobre el costo para calcular precio de venta","tooltip.resultSaleValue":"Valor total que el cliente paga por el producto","tooltip.resultAverageCost":"Costo promedio incluyendo producto, envío y costos extras","tooltip.resultMarketing":"Porcentaje del precio destinado para inversión en marketing","tooltip.resultContributionMargin":"Margen que contribuye a cubrir costos fijos y generar ganancia","tooltip.resultBreakeven":"Punto de equilibrio - precio mínimo para no tener pérdidas","tooltip.resultUnits":"Cantidad de productos vendidos","tooltip.resultProfit":"Ganancia neta obtenida con la venta","settings.title":"Configuración","settings.theme":"Tema de la Aplicación","settings.language":"Idioma","settings.notifications":"Notificaciones","settings.account":"Cuenta","settings.logout":"Cerrar Cuenta","settings.light":"Claro","settings.dark":"Oscuro","plans.title":"Elige tu Plan","plans.free":"Gratuito","plans.gold":"Gold","plans.premium":"Premium","plans.month":"/mes","plans.upgrade":"Mejorar","plans.current":"Plan Actual","msg.languageChanged":"¡Idioma cambiado con éxito!","msg.themeChanged":"¡Tema cambiado con éxito!","msg.calculationDone":"¡Cálculo realizado con éxito!","msg.error":"Ocurrió un error","msg.success":"¡Éxito!","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver","btn.continue":"Continuar","btn.close":"Cerrar","currency.brl":"Real Brasileño","currency.usd":"Dólar Estadounidense","currency.eur":"Euro","currency.gbp":"Libra Esterlina","currency.jpy":"Yen Japonés","currency.cny":"Yuan Chino"}},ie=e.createContext(void 0),le=({children:t})=>{const[r,a]=e.useState("pt");e.useEffect(()=>{const e=localStorage.getItem("language");e&&["pt","en","es"].includes(e)&&a(e)},[]);const s={language:r,setLanguage:e=>{a(e),localStorage.setItem("language",e)},t:e=>oe[r][e]||e};return ae.jsx(ie.Provider,{value:s,children:t})},ce=()=>{const t=e.useContext(ie);if(!t)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return t};let de,ue,he,pe={data:""},me=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||pe},ge=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,fe=/\/\*[^]*?\*\/|  +/g,xe=/\n+/g,ye=(e,t)=>{let r="",a="",s="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":a+="f"==n[1]?ye(o,n):n+"{"+ye(o,"k"==n[1]?"":t)+"}":"object"==typeof o?a+=ye(o,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=ye.p?ye.p(n,o):n+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},be={},we=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+we(e[r]);return t}return e},ve=(e,t,r,a,s)=>{let n=we(e),o=be[n]||(be[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!be[o]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=ge.exec(e.replace(fe,""));)t[4]?a.shift():t[3]?(r=t[3].replace(xe," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(xe," ").trim();return a[0]})(e);be[o]=ye(s?{["@keyframes "+o]:t}:t,r?"":"."+o)}let i=r&&be.g?be.g:null;return r&&(be.g=be[o]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(be[o],t,a,i),o};function Ne(e){let t=this||{},r=e.call?e(t.p):e;return ve(r.unshift?r.raw?((e,t,r)=>e.reduce((e,a,s)=>{let n=t[s];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":ye(e,""):!1===e?"":e}return e+a+(null==n?"":n)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,me(t.target),t.g,t.o,t.k)}Ne.bind({g:1});let Ce=Ne.bind({k:1});function ke(e,t){let r=this||{};return function(){let a=arguments;function s(n,o){let i=Object.assign({},n),l=i.className||s.className;r.p=Object.assign({theme:ue&&ue()},i),r.o=/ *go\d+/.test(l),i.className=Ne.apply(r,a)+(l?" "+l:""),t&&(i.ref=o);let c=e;return e[0]&&(c=i.as||e,delete i.as),he&&c[0]&&he(i),de(c,i)}return t?t(s):s}}var Se=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,je=(()=>{let e=0;return()=>(++e).toString()})(),Ee=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ie="default",_e=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return _e(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},Te=[],Pe={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},Ae={},Re=(e,t=Ie)=>{Ae[t]=_e(Ae[t]||Pe,e),Te.forEach(([e,r])=>{e===t&&r(Ae[t])})},Oe=e=>Object.keys(Ae).forEach(t=>Re(e,t)),Le=(e=Ie)=>t=>{Re(t,e)},De={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Me=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||je()}))(t,e,r);return Le(a.toasterId||(e=>Object.keys(Ae).find(t=>Ae[t].toasts.some(t=>t.id===e)))(a.id))({type:2,toast:a}),a.id},Ue=(e,t)=>Me("blank")(e,t);Ue.error=Me("error"),Ue.success=Me("success"),Ue.loading=Me("loading"),Ue.custom=Me("custom"),Ue.dismiss=(e,t)=>{let r={type:3,toastId:e};t?Le(t)(r):Oe(r)},Ue.dismissAll=e=>Ue.dismiss(void 0,e),Ue.remove=(e,t)=>{let r={type:4,toastId:e};t?Le(t)(r):Oe(r)},Ue.removeAll=e=>Ue.remove(void 0,e),Ue.promise=(e,t,r)=>{let a=Ue.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?Se(t.success,e):void 0;return s?Ue.success(s,{id:a,...r,...null==r?void 0:r.success}):Ue.dismiss(a),e}).catch(e=>{let s=t.error?Se(t.error,e):void 0;s?Ue.error(s,{id:a,...r,...null==r?void 0:r.error}):Ue.dismiss(a)}),e};var Fe=(t,r="default")=>{let{toasts:a,pausedAt:s}=((t={},r=Ie)=>{let[a,s]=e.useState(Ae[r]||Pe),n=e.useRef(Ae[r]);e.useEffect(()=>(n.current!==Ae[r]&&s(Ae[r]),Te.push([r,s]),()=>{let e=Te.findIndex(([e])=>e===r);e>-1&&Te.splice(e,1)}),[r]);let o=a.toasts.map(e=>{var r,a,s;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(a=t[e.type])?void 0:a.duration)||(null==t?void 0:t.duration)||De[e.type],style:{...t.style,...null==(s=t[e.type])?void 0:s.style,...e.style}}});return{...a,toasts:o}})(t,r),n=e.useRef(new Map).current,o=e.useCallback((e,t=1e3)=>{if(n.has(e))return;let r=setTimeout(()=>{n.delete(e),i({type:4,toastId:e})},t);n.set(e,r)},[]);e.useEffect(()=>{if(s)return;let e=Date.now(),t=a.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout(()=>Ue.dismiss(t.id,r),a);t.visible&&Ue.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[a,s,r]);let i=e.useCallback(Le(r),[r]),l=e.useCallback(()=>{i({type:5,time:Date.now()})},[i]),c=e.useCallback((e,t)=>{i({type:1,toast:{id:e,height:t}})},[i]),d=e.useCallback(()=>{s&&i({type:6,time:Date.now()})},[s,i]),u=e.useCallback((e,t)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:n}=t||{},o=a.filter(t=>(t.position||n)===(e.position||n)&&t.height),i=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<i&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[a]);return e.useEffect(()=>{a.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=n.get(e.id);t&&(clearTimeout(t),n.delete(e.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},Be=Ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,He=Ce`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$e=Ce`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ve=ke("div")`
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
    animation: ${$e} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ze=Ce`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ge=ke("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ze} 1s linear infinite;
`,qe=Ce`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,We=Ce`
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
}`,Je=ke("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,Ke=ke("div")`
  position: absolute;
`,Ze=ke("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Xe=Ce`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ye=ke("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Qe=({toast:t})=>{let{icon:r,type:a,iconTheme:s}=t;return void 0!==r?"string"==typeof r?e.createElement(Ye,null,r):r:"blank"===a?null:e.createElement(Ze,null,e.createElement(Ge,{...s}),"loading"!==a&&e.createElement(Ke,null,"error"===a?e.createElement(Ve,{...s}):e.createElement(Je,{...s})))},et=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,tt=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,rt=ke("div")`
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
`,at=ke("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,st=e.memo(({toast:t,position:r,style:a,children:s})=>{let n=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,s]=Ee()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[et(r),tt(r)];return{animation:t?`${Ce(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ce(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},o=e.createElement(Qe,{toast:t}),i=e.createElement(at,{...t.ariaProps},Se(t.message,t));return e.createElement(rt,{className:t.className,style:{...n,...a,...t.style}},"function"==typeof s?s({icon:o,message:i}):e.createElement(e.Fragment,null,o,i))});!function(e,t,r,a){ye.p=t,de=e,ue=r,he=a}(e.createElement);var nt=({id:t,className:r,style:a,onHeightUpdate:s,children:n})=>{let o=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;s(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return e.createElement("div",{ref:o,className:r,style:a},n)},ot=Ne`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,it=({reverseOrder:t,position:r="top-center",toastOptions:a,gutter:s,children:n,toasterId:o,containerStyle:i,containerClassName:l})=>{let{toasts:c,handlers:d}=Fe(a,o);return e.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(a=>{let o=a.position||r,i=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ee()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...s}})(o,d.calculateOffset(a,{reverseOrder:t,gutter:s,defaultPosition:r}));return e.createElement(nt,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?ot:"",style:i},"custom"===a.type?Se(a.message,a):n?n(a):e.createElement(st,{toast:a,position:o}))}))},lt=Ue;const ct={getBaseURL:()=>(console.log("🔴 FORÇANDO SEMPRE RAILWAY HTTPS - NUNCA LOCALHOST"),"https://appdropcalc-production.up.railway.app"),get auth(){const e=this.getBaseURL(),t={login:`${e}/auth/login`,signup:`${e}/auth/signup`,refresh:`${e}/auth/refresh`,logout:`${e}/auth/logout`,profile:`${e}/auth/profile`};return console.log("🔐 AUTH URLs:",t),t},get users(){const e=this.getBaseURL();return{profile:`${e}/users/profile`,list:`${e}/users/list`}},get calc(){const e=this.getBaseURL();return{calculate:`${e}/calc/calcular`,platforms:`${e}/calc/platforms`,gateways:`${e}/calc/gateways`}},get exchange(){const e=this.getBaseURL();return{rate:`${e}/exchange/rate`,currencies:`${e}/exchange/currencies`}}};console.log("🔧 API_CONFIG INICIALIZADO (SEMPRE RAILWAY):",{hostname:window.location.hostname,forceProduction:!0,baseURL:ct.getBaseURL(),authSignup:ct.auth.signup});(()=>{const e=[":3002","vercel.app:3002","localhost:",":3001",":3000"];[ct.auth.signup,ct.auth.login].forEach(t=>{e.forEach(e=>{t.includes(e)&&(console.error("🚨 URL PROBLEMÁTICA DETECTADA:",t),console.error("🚨 PADRÃO PROBLEMÁTICO:",e),console.error("🚨 DEVE SER SEMPRE RAILWAY HTTPS!"))})})})();const dt=function(e){const t=[];let r=0;for(let a=0;a<e.length;a++){let s=e.charCodeAt(a);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=63&s|128):55296==(64512&s)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++a)),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=63&s|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=63&s|128)}return t},ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<e.length;s+=3){const t=e[s],n=s+1<e.length,o=n?e[s+1]:0,i=s+2<e.length,l=i?e[s+2]:0,c=t>>2,d=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,h=63&l;i||(h=64,n||(u=64)),a.push(r[c],r[d],r[u],r[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,a=0;for(;r<e.length;){const s=e[r++];if(s<128)t[a++]=String.fromCharCode(s);else if(s>191&&s<224){const n=e[r++];t[a++]=String.fromCharCode((31&s)<<6|63&n)}else if(s>239&&s<365){const n=((7&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[a++]=String.fromCharCode(55296+(n>>10)),t[a++]=String.fromCharCode(56320+(1023&n))}else{const n=e[r++],o=e[r++];t[a++]=String.fromCharCode((15&s)<<12|(63&n)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<e.length;){const t=r[e.charAt(s++)],n=s<e.length?r[e.charAt(s)]:0;++s;const o=s<e.length?r[e.charAt(s)]:64;++s;const i=s<e.length?r[e.charAt(s)]:64;if(++s,null==t||null==n||null==o||null==i)throw new ht;const l=t<<2|n>>4;if(a.push(l),64!==o){const e=n<<4&240|o>>2;if(a.push(e),64!==i){const e=o<<6&192|i;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class ht extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pt=function(e){return function(e){const t=dt(e);return ut.encodeByteArray(t,!0)}(e).replace(/\./g,"")},mt=function(e){try{return ut.decodeString(e,!0)}catch(pe){console.error("base64Decode failed: ",pe)}return null};
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
const gt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ft=()=>{try{return gt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(pe){return}const t=e&&mt(e[1]);return t&&JSON.parse(t)})()}catch(pe){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${pe}`)}},xt=()=>ft()?.config,yt=e=>ft()?.[`_${e}`];
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
class bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}
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
 */function wt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}const vt={};let Nt=!1;function Ct(e,t){if("undefined"==typeof window||"undefined"==typeof document||!wt(window.location.host)||vt[e]===t||vt[e]||Nt)return;function r(e){return`__firebase__banner__${e}`}vt[e]=t;const a="__firebase__banner",s=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(vt))vt[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function n(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{Nt=!0,function(){const e=document.getElementById(a);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),r=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),r=!0),{created:r,element:t}}(a),t=r("text"),o=document.getElementById(t)||document.createElement("span"),i=r("learnmore"),l=document.getElementById(i)||document.createElement("a"),c=r("preprendIcon"),d=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,i);const r=n();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(d,c),t.append(d,o,l,r),document.body.appendChild(t)}s?(o.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
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
 */function kt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class St extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,s=this.errors[e],n=s?function(e,t){return e.replace(Et,(e,r)=>{const a=t[r];return null!=a?String(a):`<${r}?>`})}(s,r):"Error",o=`${this.serviceName}: ${n} (${a}).`;return new St(a,o,r)}}const Et=/\{\$([^}]+)}/g;function It(e,t){if(e===t)return!0;const r=Object.keys(e),a=Object.keys(t);for(const s of r){if(!a.includes(s))return!1;const r=e[s],n=t[s];if(_t(r)&&_t(n)){if(!It(r,n))return!1}else if(r!==n)return!1}for(const s of a)if(!r.includes(s))return!1;return!0}function _t(e){return null!==e&&"object"==typeof e}
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
 */function Tt(e){const t=[];for(const[r,a]of Object.entries(e))Array.isArray(a)?a.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}class Pt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");a=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===a.next&&(a.next=At),void 0===a.error&&(a.error=At),void 0===a.complete&&(a.complete=At);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(pe){}}),this.observers.push(a),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(pe){"undefined"!=typeof console&&console.error&&console.error(pe)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function At(){}
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
 */function Rt(e){return e&&e._delegate?e._delegate:e}class Ot{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Lt="[DEFAULT]";
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
 */class Dt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new bt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(pe){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(pe){if(r)return null;throw pe}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch(pe){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(pe){}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,n]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(s)&&n.resolve(a)}return a}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(r)??new Set;a.add(e),this.onInitCallbacks.set(r,a);const s=this.instances.get(r);return s&&e(s,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===Lt?void 0:a),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}var a;return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Mt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Ut;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ut||(Ut={}));const Ft={debug:Ut.DEBUG,verbose:Ut.VERBOSE,info:Ut.INFO,warn:Ut.WARN,error:Ut.ERROR,silent:Ut.SILENT},Bt=Ut.INFO,Ht={[Ut.DEBUG]:"log",[Ut.VERBOSE]:"log",[Ut.INFO]:"info",[Ut.WARN]:"warn",[Ut.ERROR]:"error"},$t=(e,t,...r)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),s=Ht[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${a}]  ${e.name}:`,...r)};class Vt{constructor(e){this.name=e,this._logLevel=Bt,this._logHandler=$t,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ft[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ut.DEBUG,...e),this._logHandler(this,Ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ut.VERBOSE,...e),this._logHandler(this,Ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ut.INFO,...e),this._logHandler(this,Ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ut.WARN,...e),this._logHandler(this,Ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ut.ERROR,...e),this._logHandler(this,Ut.ERROR,...e)}}let zt,Gt;const qt=new WeakMap,Wt=new WeakMap,Jt=new WeakMap,Kt=new WeakMap,Zt=new WeakMap;let Xt={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Wt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Jt.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return er(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Yt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Gt||(Gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(tr(this),t),er(qt.get(this))}:function(...t){return er(e.apply(tr(this),t))}:function(t,...r){const a=e.call(tr(this),t,...r);return Jt.set(a,t.sort?t.sort():[t]),er(a)}}function Qt(e){return"function"==typeof e?Yt(e):(e instanceof IDBTransaction&&function(e){if(Wt.has(e))return;const t=new Promise((t,r)=>{const a=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",n),e.removeEventListener("abort",n)},s=()=>{t(),a()},n=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",s),e.addEventListener("error",n),e.addEventListener("abort",n)});Wt.set(e,t)}(e),t=e,(zt||(zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Xt):e);var t}function er(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,r)=>{const a=()=>{e.removeEventListener("success",s),e.removeEventListener("error",n)},s=()=>{t(er(e.result)),a()},n=()=>{r(e.error),a()};e.addEventListener("success",s),e.addEventListener("error",n)});return t.then(t=>{t instanceof IDBCursor&&qt.set(t,e)}).catch(()=>{}),Zt.set(t,e),t}(e);if(Kt.has(e))return Kt.get(e);const t=Qt(e);return t!==e&&(Kt.set(e,t),Zt.set(t,e)),t}const tr=e=>Zt.get(e);const rr=["get","getKey","getAll","getAllKeys","count"],ar=["put","add","delete","clear"],sr=new Map;function nr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(sr.get(t))return sr.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,s=ar.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!s&&!rr.includes(r))return;const n=async function(e,...t){const n=this.transaction(e,s?"readwrite":"readonly");let o=n.store;return a&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),s&&n.done]))[0]};return sr.set(t,n),n}Xt=(e=>({...e,get:(t,r,a)=>nr(t,r)||e.get(t,r,a),has:(t,r)=>!!nr(t,r)||e.has(t,r)}))(Xt);
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
class or{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const ir="@firebase/app",lr="0.14.5",cr=new Vt("@firebase/app"),dr="@firebase/app-compat",ur="@firebase/analytics-compat",hr="@firebase/analytics",pr="@firebase/app-check-compat",mr="@firebase/app-check",gr="@firebase/auth",fr="@firebase/auth-compat",xr="@firebase/database",yr="@firebase/data-connect",br="@firebase/database-compat",wr="@firebase/functions",vr="@firebase/functions-compat",Nr="@firebase/installations",Cr="@firebase/installations-compat",kr="@firebase/messaging",Sr="@firebase/messaging-compat",jr="@firebase/performance",Er="@firebase/performance-compat",Ir="@firebase/remote-config",_r="@firebase/remote-config-compat",Tr="@firebase/storage",Pr="@firebase/storage-compat",Ar="@firebase/firestore",Rr="@firebase/ai",Or="@firebase/firestore-compat",Lr="firebase",Dr="[DEFAULT]",Mr={[ir]:"fire-core",[dr]:"fire-core-compat",[hr]:"fire-analytics",[ur]:"fire-analytics-compat",[mr]:"fire-app-check",[pr]:"fire-app-check-compat",[gr]:"fire-auth",[fr]:"fire-auth-compat",[xr]:"fire-rtdb",[yr]:"fire-data-connect",[br]:"fire-rtdb-compat",[wr]:"fire-fn",[vr]:"fire-fn-compat",[Nr]:"fire-iid",[Cr]:"fire-iid-compat",[kr]:"fire-fcm",[Sr]:"fire-fcm-compat",[jr]:"fire-perf",[Er]:"fire-perf-compat",[Ir]:"fire-rc",[_r]:"fire-rc-compat",[Tr]:"fire-gcs",[Pr]:"fire-gcs-compat",[Ar]:"fire-fst",[Or]:"fire-fst-compat",[Rr]:"fire-vertex","fire-js":"fire-js",[Lr]:"fire-js-all"},Ur=new Map,Fr=new Map,Br=new Map;function Hr(e,t){try{e.container.addComponent(t)}catch(pe){cr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,pe)}}function $r(e){const t=e.name;if(Br.has(t))return cr.debug(`There were multiple attempts to register component ${t}.`),!1;Br.set(t,e);for(const r of Ur.values())Hr(r,e);for(const r of Fr.values())Hr(r,e);return!0}function Vr(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function zr(e){return null!=e&&void 0!==e.settings}
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
 */const Gr=new jt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class qr{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}
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
 */const Wr="12.5.0";function Jr(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const a={name:Dr,automaticDataCollectionEnabled:!0,...t},s=a.name;if("string"!=typeof s||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(r||(r=xt()),!r)throw Gr.create("no-options");const n=Ur.get(s);if(n){if(It(r,n.options)&&It(a,n.config))return n;throw Gr.create("duplicate-app",{appName:s})}const o=new Mt(s);for(const l of Br.values())o.addComponent(l);const i=new qr(r,a,o);return Ur.set(s,i),i}function Kr(e,t,r){let a=Mr[e]??e;r&&(a+=`-${r}`);const s=a.match(/\s|\//),n=t.match(/\s|\//);if(s||n){const e=[`Unable to register library "${a}" with version "${t}":`];return s&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&n&&e.push("and"),n&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void cr.warn(e.join(" "))}$r(new Ot(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}
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
 */const Zr="firebase-heartbeat-store";let Xr=null;function Yr(){return Xr||(Xr=function(e,t,{blocked:r,upgrade:a,blocking:s,terminated:n}={}){const o=indexedDB.open(e,t),i=er(o);return a&&o.addEventListener("upgradeneeded",e=>{a(er(o.result),e.oldVersion,e.newVersion,er(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),i.then(e=>{n&&e.addEventListener("close",()=>n()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),i}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Zr)}catch(pe){console.warn(pe)}}}).catch(e=>{throw Gr.create("idb-open",{originalErrorMessage:e.message})})),Xr}async function Qr(e,t){try{const r=(await Yr()).transaction(Zr,"readwrite"),a=r.objectStore(Zr);await a.put(t,ea(e)),await r.done}catch(pe){if(pe instanceof St)cr.warn(pe.message);else{const t=Gr.create("idb-set",{originalErrorMessage:pe?.message});cr.warn(t.message)}}}function ea(e){return`${e.name}!${e.options.appId}`}
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
 */class ta{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new aa(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ra();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,r=e[0].date;for(let a=1;a<e.length;a++)e[a].date<r&&(r=e[a].date,t=a);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(pe){cr.warn(pe)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=ra(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let a=e.slice();for(const s of e){const e=r.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),sa(r)>t){e.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),sa(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}(this._heartbeatsCache.heartbeats),a=pt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(pe){return cr.warn(pe),""}}}function ra(){return(new Date).toISOString().substring(0,10)}class aa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(pe){return!1}}()&&new Promise((e,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(a),e(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(r){t(r)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Yr()).transaction(Zr),r=await t.objectStore(Zr).get(ea(e));return await t.done,r}catch(pe){if(pe instanceof St)cr.warn(pe.message);else{const t=Gr.create("idb-get",{originalErrorMessage:pe?.message});cr.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function sa(e){return pt(JSON.stringify({version:2,heartbeats:e})).length}var na;function oa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}na="",$r(new Ot("platform-logger",e=>new or(e),"PRIVATE")),$r(new Ot("heartbeat",e=>new ta(e),"PRIVATE")),Kr(ir,lr,na),Kr(ir,lr,"esm2020"),Kr("fire-js","");const ia=oa,la=new jt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ca=new Vt("@firebase/auth");function da(e,...t){ca.logLevel<=Ut.ERROR&&ca.error(`Auth (${Wr}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e,...t){throw fa(e,...t)}function ha(e,...t){return fa(e,...t)}function pa(e,t,r){const a={...ia(),[t]:r};return new jt("auth","Firebase",a).create(t,{appName:e.name})}function ma(e){return pa(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ga(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&ua(e,"argument-error"),pa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fa(e,...t){if("string"!=typeof e){const r=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=e.name),e._errorFactory.create(r,...a)}return la.create(e,...t)}function xa(e,t,...r){if(!e)throw fa(t,...r)}function ya(e){const t="INTERNAL ASSERTION FAILED: "+e;throw da(t),new Error(t)}function ba(e,t){e||ya(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return"undefined"!=typeof self&&self.location?.href||""}function va(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==va()&&"https:"!==va()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ca{constructor(e,t){this.shortDelay=e,this.longDelay=t,ba(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Na()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e,t){ba(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ya("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ya("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ya("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ea=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ia=new Ca(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Ta(e,t,r,a,s={}){return Pa(e,s,async()=>{let s={},n={};a&&("GET"===t?n=a:s={body:JSON.stringify(a)});const o=Tt({key:e.config.apiKey,...n}).slice(1),i=await e._getAdditionalHeaders();i["Content-Type"]="application/json",e.languageCode&&(i["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:i,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&wt(e.emulatorConfig.host)&&(l.credentials="include"),Sa.fetch()(await Aa(e,e.config.apiHost,r,o),l)})}async function Pa(e,t,r){e._canInitEmulator=!1;const a={...ja,...t};try{const t=new Ra(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const n=await s.json();if("needConfirmation"in n)throw Oa(e,"account-exists-with-different-credential",n);if(s.ok&&!("errorMessage"in n))return n;{const t=s.ok?n.errorMessage:n.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Oa(e,"credential-already-in-use",n);if("EMAIL_EXISTS"===r)throw Oa(e,"email-already-in-use",n);if("USER_DISABLED"===r)throw Oa(e,"user-disabled",n);const i=a[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw pa(e,i,o);ua(e,i)}}catch(pe){if(pe instanceof St)throw pe;ua(e,"network-request-failed",{message:String(pe)})}}async function Aa(e,t,r,a){const s=`${t}${r}?${a}`,n=e,o=n.config.emulator?ka(e.config,s):`${e.config.apiScheme}://${s}`;if(Ea.includes(r)&&(await n._persistenceManagerAvailable,"COOKIE"===n._getPersistenceType())){return n._getPersistence()._getFinalTarget(o).toString()}return o}class Ra{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ha(this.auth,"network-request-failed")),Ia.get())})}}function Oa(e,t,r){const a={appName:e.name};r.email&&(a.email=r.email),r.phoneNumber&&(a.phoneNumber=r.phoneNumber);const s=ha(e,t,a);return s.customData._tokenResponse=r,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(e,t){return Ta(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(pe){}}function Ma(e){return 1e3*Number(e)}function Ua(e){const[t,r,a]=e.split(".");if(void 0===t||void 0===r||void 0===a)return da("JWT malformed, contained fewer than 3 sections"),null;try{const e=mt(r);return e?JSON.parse(e):(da("Failed to decode base64 JWT payload"),null)}catch(pe){return da("Caught error parsing JWT payload as JSON",pe?.toString()),null}}function Fa(e){const t=Ua(e);return xa(t,"internal-error"),xa(void 0!==t.exp,"internal-error"),xa(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(e,t,r=!1){if(r)return t;try{return await t}catch(pe){throw pe instanceof St&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(pe)&&e.auth.currentUser===e&&await e.auth.signOut(),pe}}class Ha{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(pe){return void("auth/network-request-failed"===pe?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Va(e){const t=e.auth,r=await e.getIdToken(),a=await Ba(e,La(t,{idToken:r}));xa(a?.users.length,t,"internal-error");const s=a.users[0];e._notifyReloadListener(s);const n=s.providerUserInfo?.length?za(s.providerUserInfo):[],o=function(e,t){const r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,n),i=e.isAnonymous,l=!(e.email&&s.passwordHash||o?.length),c=!!i&&l,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new $a(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}function za(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xa(e.idToken,"internal-error"),xa(void 0!==e.idToken,"internal-error"),xa(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Fa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xa(0!==e.length,"internal-error");const t=Fa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(xa(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:s}=await async function(e,t){const r=await Pa(e,{},async()=>{const r=Tt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:s}=e.config,n=await Aa(e,a,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const i={method:"POST",headers:o,body:r};return e.emulatorConfig&&wt(e.emulatorConfig.host)&&(i.credentials="include"),Sa.fetch()(n,i)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,a,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:s}=t,n=new Ga;return r&&(xa("string"==typeof r,"internal-error",{appName:e}),n.refreshToken=r),a&&(xa("string"==typeof a,"internal-error",{appName:e}),n.accessToken=a),s&&(xa("number"==typeof s,"internal-error",{appName:e}),n.expirationTime=s),n}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ga,this.toJSON())}_performRefresh(){return ya("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e,t){xa("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Wa{constructor({uid:e,auth:t,stsTokenManager:r,...a}){this.providerId="firebase",this.proactiveRefresh=new Ha(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new $a(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return xa(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Rt(e),a=await r.getIdToken(t),s=Ua(a);xa(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const n="object"==typeof s.firebase?s.firebase:void 0,o=n?.sign_in_provider;return{claims:s,token:a,authTime:Da(Ma(s.auth_time)),issuedAtTime:Da(Ma(s.iat)),expirationTime:Da(Ma(s.exp)),signInProvider:o||null,signInSecondFactor:n?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=Rt(e);await Va(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(xa(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wa({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){xa(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zr(this.auth.app))return Promise.reject(ma(this.auth));const e=await this.getIdToken();return await Ba(this,async function(e,t){return Ta(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,a=t.email??void 0,s=t.phoneNumber??void 0,n=t.photoURL??void 0,o=t.tenantId??void 0,i=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:h,providerData:p,stsTokenManager:m}=t;xa(d&&m,e,"internal-error");const g=Ga.fromJSON(this.name,m);xa("string"==typeof d,e,"internal-error"),qa(r,e.name),qa(a,e.name),xa("boolean"==typeof u,e,"internal-error"),xa("boolean"==typeof h,e,"internal-error"),qa(s,e.name),qa(n,e.name),qa(o,e.name),qa(i,e.name),qa(l,e.name),qa(c,e.name);const f=new Wa({uid:d,auth:e,email:a,emailVerified:u,displayName:r,isAnonymous:h,photoURL:n,phoneNumber:s,tenantId:o,stsTokenManager:g,createdAt:l,lastLoginAt:c});return p&&Array.isArray(p)&&(f.providerData=p.map(e=>({...e}))),i&&(f._redirectEventId=i),f}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ga;a.updateFromServerResponse(t);const s=new Wa({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Va(s),s}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];xa(void 0!==a.localId,"internal-error");const s=void 0!==a.providerUserInfo?za(a.providerUserInfo):[],n=!(a.email&&a.passwordHash||s?.length),o=new Ga;o.updateFromIdToken(r);const i=new Wa({uid:a.localId,auth:e,stsTokenManager:o,isAnonymous:n}),l={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new $a(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash||s?.length)};return Object.assign(i,l),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;function Ka(e){ba(e instanceof Function,"Expected a class definition");let t=Ja.get(e);return t?(ba(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ja.set(e,t),t)}
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
 */class Za{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Za.type="NONE";const Xa=Za;
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
 */function Ya(e,t,r){return`firebase:${e}:${t}:${r}`}class Qa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:s}=this.auth;this.fullUserKey=Ya(this.userKey,a.apiKey,s),this.fullPersistenceKey=Ya("persistence",a.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await La(this.auth,{idToken:e}).catch(()=>{});return t?Wa._fromGetAccountInfoResponse(this.auth,t,e):null}return Wa._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qa(Ka(Xa),e,r);const a=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=a[0]||Ka(Xa);const n=Ya(r,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(n);if(t){let r;if("string"==typeof t){const a=await La(e,{idToken:t}).catch(()=>{});if(!a)break;r=await Wa._fromGetAccountInfoResponse(e,a,t)}else r=Wa._fromJSON(e,t);l!==s&&(o=r),s=l;break}}catch{}const i=a.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&i.length?(s=i[0],o&&await s._set(n,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(n)}catch{}})),new Qa(s,e,r)):new Qa(s,e,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ss(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ts(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(os(t))return"Blackberry";if(is(t))return"Webos";if(rs(t))return"Safari";if((t.includes("chrome/")||as(t))&&!t.includes("edge/"))return"Chrome";if(ns(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===r?.length)return r[1]}return"Other"}function ts(e=kt()){return/firefox\//i.test(e)}function rs(e=kt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function as(e=kt()){return/crios\//i.test(e)}function ss(e=kt()){return/iemobile/i.test(e)}function ns(e=kt()){return/android/i.test(e)}function os(e=kt()){return/blackberry/i.test(e)}function is(e=kt()){return/webos/i.test(e)}function ls(e=kt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cs(){return function(){const e=kt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function ds(e=kt()){return ls(e)||ns(e)||is(e)||os(e)||/windows phone/i.test(e)||ss(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e,t=[]){let r;switch(e){case"Browser":r=es(kt());break;case"Worker":r=`${es(kt())}-${e}`;break;default:r=e}const a=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Wr}/${a}`}
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
 */class hs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise((r,a)=>{try{r(e(t))}catch(pe){a(pe)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(pe){t.reverse();for(const r of t)try{r()}catch(Oe){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:pe?.message})}}}
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
 */class ps{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fs(this),this.idTokenSubscription=new fs(this),this.beforeStateQueue=new hs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=la,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ka(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Qa.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(pe){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await La(this,{idToken:e}),r=await Wa._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(zr(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,s=r?._redirectEventId,n=await this.tryRedirectSignIn(e);t&&t!==s||!n?.user||(r=n.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(pe){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(pe))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return xa(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(pe){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(pe){if("auth/network-request-failed"!==pe?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zr(this.app))return Promise.reject(ma(this));const t=e?Rt(e):null;return t&&xa(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xa(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zr(this.app)?Promise.reject(ma(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zr(this.app)?Promise.reject(ma(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ka(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Ta(e,"GET","/v2/passwordPolicy",_a(e,t))}
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
 */(this),t=new ps(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Ta(e,"POST","/v2/accounts:revokeToken",_a(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ka(e)||this._popupRedirectResolver;xa(t,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[Ka(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let n=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(xa(o,this,"internal-error"),o.then(()=>{n||s(this.currentUser)}),"function"==typeof t){const s=e.addObserver(t,r,a);return()=>{n=!0,s()}}{const r=e.addObserver(t);return()=>{n=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xa(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=us(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(zr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){ca.logLevel<=Ut.WARN&&ca.warn(`Auth (${Wr}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function gs(e){return Rt(e)}class fs{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new Pt(e,t);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return xa(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ys(e,t,r){const a=gs(e);xa(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const s=!!r?.disableWarnings,n=bs(t),{host:o,port:i}=function(e){const t=bs(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const a=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const e=s[1];return{host:e,port:ws(a.substr(e.length+1))}}{const[e,t]=a.split(":");return{host:e,port:ws(t)}}}(t),l=null===i?"":`:${i}`,c={url:`${n}//${o}${l}/`},d=Object.freeze({host:o,port:i,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!a._canInitEmulator)return xa(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),void xa(It(c,a.config.emulator)&&It(d,a.emulatorConfig),a,"emulator-config-failed");a.config.emulator=c,a.emulatorConfig=d,a.settings.appVerificationDisabledForTesting=!0,wt(o)?(!async function(e){(await fetch(e,{credentials:"include"})).ok}(`${n}//${o}${l}`),Ct("Auth",!0)):s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function bs(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ws(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class vs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ya("not implemented")}_getIdTokenResponse(e){return ya("not implemented")}_linkToIdToken(e,t){return ya("not implemented")}_getReauthenticationResolver(e){return ya("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(e,t){return async function(e,t,r,a,s={}){const n=await Ta(e,t,r,a,s);return"mfaPendingCredential"in n&&ua(e,"multi-factor-auth-required",{_serverResponse:n}),n}(e,"POST","/v1/accounts:signInWithIdp",_a(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends vs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ua("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:a,...s}=t;if(!r||!a)return null;const n=new Cs(r,a);return n.idToken=s.idToken||void 0,n.accessToken=s.accessToken||void 0,n.secret=s.secret,n.nonce=s.nonce,n.pendingToken=s.pendingToken||null,n}_getIdTokenResponse(e){return Ns(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ns(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ns(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Ss extends ks{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Ss{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:js.PROVIDER_ID,signInMethod:js.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return js.credentialFromTaggedObject(e)}static credentialFromError(e){return js.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return js.credential(e.oauthAccessToken)}catch{return null}}}js.FACEBOOK_SIGN_IN_METHOD="facebook.com",js.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Es extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cs._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Es.credential(t,r)}catch{return null}}}Es.GOOGLE_SIGN_IN_METHOD="google.com",Es.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Is extends Ss{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com",Is.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class _s extends Ss{constructor(){super("twitter.com")}static credential(e,t){return Cs._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _s.credential(t,r)}catch{return null}}}_s.TWITTER_SIGN_IN_METHOD="twitter.com",_s.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const s=await Wa._fromIdTokenResponse(e,r,a),n=Ps(r);return new Ts({user:s,providerId:n,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=Ps(r);return new Ts({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function Ps(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends St{constructor(e,t,r,a){super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new As(e,t,r,a)}}function Rs(e,t,r,a){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw As._fromErrorAndOperation(e,r,t,a);throw r})}const Os="__sak";
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
 */class Ls{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Ls{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ds(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);cs()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ds.type="LOCAL";const Ms=Ds;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Ls{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Us.type="SESSION";const Fs=Us;
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
class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:s}=t.data,n=this.handlersMap[a];if(!n?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const o=Array.from(n).map(async e=>e(t.origin,s)),i=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:i})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Hs(e="",t=10){let r="";for(let a=0;a<t;a++)r+=Math.floor(10*Math.random());return e+r}
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
 */Bs.receivers=[];class $s{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let s,n;return new Promise((o,i)=>{const l=Hs("",20);a.port1.start();const c=setTimeout(()=>{i(new Error("unsupported_event"))},r);n={messageChannel:a,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{i(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),i(new Error("invalid_response"))}}},this.handlers.add(n),a.port1.addEventListener("message",n.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[a.port2])}).finally(()=>{n&&this.removeMessageHandler(n)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){return window}
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
function zs(){return void 0!==Vs().WorkerGlobalScope&&"function"==typeof Vs().importScripts}
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
const Gs="firebaseLocalStorageDb",qs="firebaseLocalStorage",Ws="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ks(e,t){return e.transaction([qs],t?"readwrite":"readonly").objectStore(qs)}function Zs(){const e=indexedDB.open(Gs,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(qs,{keyPath:Ws})}catch(pe){r(pe)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(qs)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(Gs);return new Js(e).toPromise()}(),t(await Zs()))})})}async function Xs(e,t,r){const a=Ks(e,!0).put({[Ws]:t,value:r});return new Js(a).toPromise()}function Ys(e,t){const r=Ks(e,!0).delete(t);return new Js(r).toPromise()}class Qs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Zs()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(pe){if(t++>3)throw pe;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(zs()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new $s(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zs();return await Xs(e,Os,"1"),await Ys(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xs(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const r=Ks(e,!1).get(t),a=await new Js(r).toPromise();return void 0===a?null:a.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ys(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ks(e,!1).getAll();return new Js(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:a,value:s}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(s)&&(this.notifyListeners(a,s),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qs.type="LOCAL";const en=Qs;
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
function tn(e,t){return t?Ka(t):(xa(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Ca(3e4,6e4);class rn extends vs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ns(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function an(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
return async function(e,t,r=!1){if(zr(e.app))return Promise.reject(ma(e));const a="signIn",s=await Rs(e,a,t),n=await Ts._fromIdTokenResponse(e,a,s);return r||await e._updateCurrentUser(n.user),n}(e.auth,new rn(e),e.bypassAuthState)}function sn(e){const{auth:t,user:r}=e;return xa(r,t,"internal-error"),
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
async function(e,t,r=!1){const{auth:a}=e;if(zr(a.app))return Promise.reject(ma(a));const s="reauthenticate";try{const n=await Ba(e,Rs(a,s,t,e),r);xa(n.idToken,a,"internal-error");const o=Ua(n.idToken);xa(o,a,"internal-error");const{sub:i}=o;return xa(e.uid===i,a,"user-mismatch"),Ts._forOperation(e,s,n)}catch(pe){throw"auth/user-not-found"===pe?.code&&ua(a,"user-mismatch"),pe}}(r,new rn(e),e.bypassAuthState)}async function nn(e){const{auth:t,user:r}=e;return xa(r,t,"internal-error"),async function(e,t,r=!1){const a=await Ba(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Ts._forOperation(e,"link",a)}(r,new rn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,r,a,s=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(pe){this.reject(pe)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:s,error:n,type:o}=e;if(n)return void this.reject(n);const i={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(i))}catch(pe){this.reject(pe)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return an;case"linkViaPopup":case"linkViaRedirect":return nn;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:ua(this.auth,"internal-error")}}resolve(e){ba(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ba(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Ca(2e3,1e4);class cn extends on{constructor(e,t,r,a,s){super(e,t,a,s),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xa(e,this.auth,"internal-error"),e}async onExecution(){ba(1===this.filter.length,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ha(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ha(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ha(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ln.get())};e()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const dn=new Map;class un extends on{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=mn(t),a=pn(e);if(!(await a._isAvailable()))return!1;const s="true"===await a._get(r);return await a._remove(r),s}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(pe){e=()=>Promise.reject(pe)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function hn(e,t){dn.set(e._key(),t)}function pn(e){return Ka(e._redirectPersistence)}function mn(e){return Ya("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e,t,r){return async function(e,t,r){if(zr(e.app))return Promise.reject(ma(e));const a=gs(e);ga(e,t,ks),await a._initializationPromise;const s=tn(a,r);return await async function(e,t){return pn(e)._set(mn(t),"true")}(s,a),s._openRedirect(a,t,"signInViaRedirect")}(e,t,r)}async function fn(e,t,r=!1){if(zr(e.app))return Promise.reject(ma(e));const a=gs(e),s=tn(a,t),n=new un(a,s,r),o=await n.execute();return o&&!r&&(delete o.user._redirectEventId,await a._persistUserIfCurrent(o.user),await a._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!bn(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ha(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(yn(e))}saveEventToCache(e){this.cachedEventUids.add(yn(e)),this.lastProcessedEventTime=Date.now()}}function yn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function bn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vn=/^https?/;async function Nn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ta(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Cn(r))return}catch{}ua(e,"unauthorized-domain")}function Cn(e){const t=wa(),{protocol:r,hostname:a}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===a?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&s.hostname===a}if(!vn.test(r))return!1;if(wn.test(e))return a===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}
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
 */const kn=new Ca(3e4,6e4);function Sn(){const e=Vs().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}function jn(e){return new Promise((t,r)=>{function a(){Sn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sn(),r(ha(e,"network-request-failed"))},timeout:kn.get()})}if(Vs().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Vs().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Vs()[t]=()=>{gapi.load?a():r(ha(e,"network-request-failed"))},(s=`${xs.gapiScript}?onload=${t}`,xs.loadJS(s)).catch(e=>r(e))}a()}var s}).catch(e=>{throw En=null,e})}let En=null;
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
const In=new Ca(5e3,15e3),_n={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pn(e){const t=e.config;xa(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?ka(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,a={apiKey:t.apiKey,appName:e.name,v:Wr},s=Tn.get(e.config.apiHost);s&&(a.eid=s);const n=e._getFrameworks();return n.length&&(a.fw=n.join(",")),`${r}?${Tt(a).slice(1)}`}async function An(e){const t=await function(e){return En=En||jn(e),En}(e),r=Vs().gapi;return xa(r,e,"internal-error"),t.open({where:document.body,url:Pn(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_n,dontclear:!0},t=>new Promise(async(r,a)=>{await t.restyle({setHideOnLeave:!1});const s=ha(e,"network-request-failed"),n=Vs().setTimeout(()=>{a(s)},In.get());function o(){Vs().clearTimeout(n),r(t)}t.ping(o).then(o,()=>{a(s)})}))}
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
 */const Rn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class On{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(pe){}}}function Ln(e,t,r,a=500,s=600){const n=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-a)/2,0).toString();let i="";const l={...Rn,width:a.toString(),height:s.toString(),top:n,left:o},c=kt().toLowerCase();r&&(i=as(c)?"_blank":r),ts(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=kt()){return ls(e)&&!!window.navigator?.standalone}(c)&&"_self"!==i)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(a)}
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
 */(t||"",i),new On(null);const u=window.open(t||"",i,d);xa(u,e,"popup-blocked");try{u.focus()}catch(pe){}return new On(u)}const Dn="__/auth/handler",Mn="emulator/auth/handler",Un=encodeURIComponent("fac");async function Fn(e,t,r,a,s,n){xa(e.config.authDomain,e,"auth-domain-config-required"),xa(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:a,v:Wr,eventId:s};if(t instanceof ks){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(n||{}))o[e]=t}if(t instanceof Ss){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const i=o;for(const d of Object.keys(i))void 0===i[d]&&delete i[d];const l=await e._getAppCheckToken(),c=l?`#${Un}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Dn}`;return ka(e,Mn)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Tt(i).slice(1)}${c}`}const Bn="webStorageSupport";const Hn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fs,this._completeRedirectFn=fn,this._overrideRedirectResult=hn}async _openPopup(e,t,r,a){ba(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Ln(e,await Fn(e,t,r,wa(),a),Hs())}async _openRedirect(e,t,r,a){await this._originValidation(e);return function(e){Vs().location.href=e}(await Fn(e,t,r,wa(),a)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(ba(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await An(e),r=new xn(e);return t.register("authEvent",t=>{xa(t?.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bn,{type:Bn},r=>{const a=r?.[0]?.[Bn];void 0!==a&&t(!!a),ua(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ds()||rs()||ls()}};var $n="@firebase/auth",Vn="1.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class zn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xa(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const Gn=yt("authIdTokenMaxAge")||300;let qn=null;var Wn;!function(e){xs=e}({loadJS:e=>new Promise((t,r)=>{const a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=e=>{const t=ha("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(a)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Wn="Browser",$r(new Ot("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:n,authDomain:o}=r.options;xa(n&&!n.includes(":"),"invalid-api-key",{appName:r.name});const i={apiKey:n,authDomain:o,clientPlatform:Wn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:us(Wn)},l=new ms(r,a,s,i);return function(e,t){const r=t?.persistence||[],a=(Array.isArray(r)?r:[r]).map(Ka);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(a,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$r(new Ot("auth-internal",e=>(e=>new zn(e))(gs(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Kr($n,Vn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Wn)),Kr($n,Vn,"esm2020");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
Kr("firebase","12.5.0","app");const Jn={apiKey:"AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",authDomain:"dropcalc-11fd7.firebaseapp.com",projectId:"dropcalc-11fd7",storageBucket:"dropcalc-11fd7.firebasestorage.app",messagingSenderId:"779840470463",appId:"1:779840470463:web:62b5e584a22c8028a4750a"};console.log("🔥 Firebase Config:",{apiKey:Jn.apiKey?"✅ Configurado":"❌ Faltando",authDomain:Jn.authDomain,projectId:Jn.projectId});const Kn=function(e=function(e=Dr){const t=Ur.get(e);if(!t&&e===Dr&&xt())return Jr();if(!t)throw Gr.create("no-app",{appName:e});return t}()){const t=Vr(e,"auth");if(t.isInitialized())return t.getImmediate();const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function(e,t){const r=Vr(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(It(r.getOptions(),t??{}))return e;ua(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:Hn,persistence:[en,Ms,Fs]}),a=yt("authTokenSyncURL");if(a&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(a,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gn)return;const a=t?.token;qn!==a&&(qn=a,await fetch(s,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))});!function(e,t,r){Rt(e).beforeAuthStateChanged(t,r)}(r,t,()=>t(r.currentUser)),function(e,t,r,a){Rt(e).onIdTokenChanged(t,r,a)}(r,e=>t(e))}}var s;const n=(o="auth",ft()?.emulatorHosts?.[o]);var o;return n&&ys(r,`http://${n}`),r}(Jr(Jn)),Zn=new Es;Zn.addScope("email"),Zn.addScope("profile");const Xn=new class{async loginWithPopup(){try{console.log("🔐 Iniciando login Google com popup...");const e=await async function(e,t,r){if(zr(e.app))return Promise.reject(ha(e,"operation-not-supported-in-this-environment"));const a=gs(e);ga(e,t,ks);const s=tn(a,r);return new cn(a,"signInViaPopup",t,s).executeNotNull()}(Kn,Zn),t=e.user;return console.log("✅ Login Google sucesso:",{uid:t.uid,email:t.email,name:t.displayName}),this.processGoogleUser(t)}catch(e){throw console.error("❌ Erro no login Google popup:",e),new Error(`Falha no login Google: ${e.message}`)}}async loginWithRedirect(){try{console.log("🔐 Iniciando login Google com redirect..."),await gn(Kn,Zn)}catch(e){throw console.error("❌ Erro no redirect Google:",e),new Error(`Falha no redirect Google: ${e.message}`)}}async handleRedirectResult(){try{const e=await async function(e,t){return await gs(e)._initializationPromise,fn(e,t,!1)}(Kn);return e?.user?(console.log("✅ Login Google redirect sucesso:",{uid:e.user.uid,email:e.user.email,name:e.user.displayName}),this.processGoogleUser(e.user)):null}catch(e){throw console.error("❌ Erro no resultado redirect:",e),new Error(`Falha no resultado Google: ${e.message}`)}}processGoogleUser(e){return{id:e.uid,email:e.email||"",name:e.displayName||"",photoURL:e.photoURL||void 0}}async syncWithBackend(e){try{console.log("🔄 Sincronizando com backend...");const t=Kn.currentUser,r=t?await t.getIdToken():null,a=await fetch(ct.auth.login,{method:"POST",headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{}},body:JSON.stringify({email:e.email,name:e.name,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(!a.ok)return this.createUserInBackend(e);const s=await a.json();return console.log("✅ Usuário sincronizado com backend"),s}catch(t){return console.error("❌ Erro na sincronização:",t),e}}async createUserInBackend(e){try{console.log("👤 Criando usuário no backend...");const t=await fetch(ct.auth.signup,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,name:e.name,password:`google_${e.id}`,googleId:e.id,photoURL:e.photoURL,provider:"google"})});if(t.ok){const e=await t.json();return console.log("✅ Usuário criado no backend"),e}return console.warn("⚠️ Falha ao criar no backend, continuando..."),e}catch(t){return console.error("❌ Erro ao criar usuário:",t),e}}async logout(){try{await function(e){return Rt(e).signOut()}(Kn),console.log("✅ Logout Google realizado")}catch(e){throw console.error("❌ Erro no logout Google:",e),e}}getCurrentUser(){return Kn.currentUser}onAuthStateChange(e){return Kn.onAuthStateChanged(e)}};const Yn=new class{getBaseURL(){const e=ct.getBaseURL();return console.log("🔒 AUTH baseURL configurado:",e),e}async loginAlternative(e,t){try{return console.log("🔄 Tentando login alternativo..."),new Promise((r,a)=>{const s=new XMLHttpRequest,n=ct.auth.login;s.open("POST",n,!0),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("Cache-Control","no-cache"),s.onreadystatechange=function(){if(4===s.readyState)if(console.log("🔍 XHR Status:",s.status),console.log("🔍 XHR Response:",s.responseText),200===s.status)try{const e=JSON.parse(s.responseText);localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("currentUser",JSON.stringify(e.user)),r(e.user)}catch(e){a(new Error("Resposta inválida do servidor"))}else try{const e=JSON.parse(s.responseText);a(new Error(e.message||"Erro no login"))}catch(e){a(new Error("Credenciais inválidas"))}},s.onerror=function(){a(new Error("Erro de conexão"))},s.ontimeout=function(){a(new Error("Timeout na conexão"))},s.timeout=1e4;const o=JSON.stringify({email:e,password:t});s.send(o)})}catch(r){throw console.error("❌ Erro no login alternativo:",r),r}}async login(e,t){try{const a=ct.auth.login;console.log("🔐 Login attempt:",{email:e,url:a});const s=JSON.stringify({email:e,password:t,provider:"email"});console.log("📤 Request body:",s);const n=new AbortController,o=setTimeout(()=>n.abort(),1e4),i=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"},body:s,signal:n.signal});if(clearTimeout(o),console.log("📡 Response status:",i.status),console.log("📡 Response ok:",i.ok),console.log("📡 Response headers:",Object.fromEntries(i.headers.entries())),!i.ok){const e=await i.text();console.error("❌ Error response text:",e),console.error("❌ Error response status:",i.status),console.error("❌ Error response statusText:",i.statusText);let t="Falha no login";try{t=JSON.parse(e).message||t}catch(r){t=e||t}throw 401===i.status&&(t="Credenciais inválidas. Verifique email e senha."),new Error(t)}const l=await i.text();let c;console.log("📥 Raw response text:",l);try{c=JSON.parse(l)}catch(r){throw console.error("❌ Failed to parse response JSON:",r),new Error("Resposta inválida do servidor")}if(console.log("✅ Login successful, data:",c),!c.accessToken||!c.user)throw console.error("❌ Invalid response structure:",c),new Error("Resposta do servidor incompleta");return localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("currentUser",JSON.stringify(c.user)),c.user.plan&&localStorage.setItem("userPlan",JSON.stringify(c.user.plan)),c.user}catch(a){if(console.error("❌ Erro no login completo:",a),"AbortError"===a.name)throw new Error("Timeout na conexão. Tente novamente.");if("TypeError"===a.name&&a.message.includes("fetch"))throw new Error("Erro de conexão. Verifique sua internet.");throw a}}async register(e,t,r){try{this.clearPlanData();const a=ct.auth.signup;console.log("📝 Signup attempt:",{name:e,email:t,url:a});const s=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:r})});if(!s.ok){const e=await s.json();throw new Error(e.message||"Falha no registro")}return(await s.json()).user}catch(a){throw console.error("Erro no registro:",a),a}}async loginWithGoogle(){try{console.log("🚀 Iniciando login com Google...");const e=await Xn.loginWithPopup(),t=await Xn.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),console.log("✅ Login Google completo:",r),r}catch(e){throw console.error("❌ Erro no login Google:",e),e}}async loginWithGoogleRedirect(){try{await Xn.loginWithRedirect()}catch(e){throw console.error("❌ Erro no redirect Google:",e),e}}async handleGoogleRedirectResult(){try{const e=await Xn.handleRedirectResult();if(!e)return null;const t=await Xn.syncWithBackend(e),r={id:e.id,email:e.email,name:e.name,photoURL:e.photoURL,provider:"google",plan:t.plan||this.getUserPlan()};return localStorage.setItem("currentUser",JSON.stringify(r)),t.accessToken&&localStorage.setItem("accessToken",t.accessToken),r}catch(e){throw console.error("❌ Erro no resultado redirect:",e),e}}async logout(){try{const e=this.getCurrentUser();"google"===e?.provider&&await Xn.logout(),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser"),console.log("✅ Logout completo realizado")}catch(e){console.error("❌ Erro no logout:",e),this.clearPlanData(),localStorage.removeItem("accessToken"),localStorage.removeItem("currentUser")}}clearPlanData(){localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"),localStorage.removeItem("premiumActive")}getCurrentUser(){const e=localStorage.getItem("currentUser");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.id&&t.email)return t}catch(t){console.warn("🚨 currentUser inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("currentUser")}return null}getAccessToken(){return localStorage.getItem("accessToken")}isAuthenticated(){return!!this.getAccessToken()&&!!this.getCurrentUser()}onAuthStateChange(e){return e(this.getCurrentUser()),()=>{}}getUserPlan(){const e=localStorage.getItem("userPlan");if(e)try{const t=JSON.parse(e);if(t&&"object"==typeof t&&t.type&&t.name)return t}catch(t){console.warn("🚨 userPlan inválido no localStorage:",e),console.warn("Erro:",t),localStorage.removeItem("userPlan")}return{type:"basic",name:"Básico",price:0,active:!0}}updateUserPlan(e){localStorage.setItem("userPlan",JSON.stringify(e))}checkPlanAccess(e){const t=this.getUserPlan();if(!t.active)return!1;const r={basic:0,professional:1,premium:2};return r[t.type]>=r[e]}isAdmin(){const e=this.getCurrentUser();return"admin"===e?.role}},Qn=()=>{const[t,r]=e.useState(null),[a,s]=e.useState(!0),[n,o]=e.useState(null),[i,l]=e.useState(!1);e.useEffect(()=>{console.log("🔄 useAuth - Verificando estado inicial...");const e=Yn.getCurrentUser(),t=Yn.isAuthenticated();if(console.log("🔍 useAuth - Estado encontrado:",{currentUser:!!e,isAuth:t,userEmail:e?.email}),r(e),l(t),e){let e=Yn.getUserPlan();e&&"object"==typeof e&&e.type||(e={type:"basic",name:"Básico",price:0,active:!0}),console.log("📋 useAuth - Plano do usuário:",e),o(e)}else o({type:"basic",name:"Básico",price:0,active:!0});s(!1)},[]);return{user:t,loading:a,plan:n,logout:async()=>{console.log("🚪 useAuth - Fazendo logout..."),await Yn.logout(),r(null),o(null),l(!1)},updatePlan:e=>{console.log("📋 useAuth - Atualizando plano:",e),Yn.updateUserPlan(e),o(e)},refreshAuth:()=>{console.log("🔄 useAuth - Refresh forçado...");const e=Yn.getCurrentUser(),t=Yn.isAuthenticated();r(e),l(t),o(e?Yn.getUserPlan():null)},isAuthenticated:i,isAdmin:Yn.isAdmin(),checkPlanAccess:e=>Yn.checkPlanAccess(e)}},eo=({children:e})=>{const{isAuthenticated:t,loading:r}=Qn(),n=a();return r?ae.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:ae.jsxs("div",{className:"text-center",children:[ae.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):t?ae.jsx(ae.Fragment,{children:e}):ae.jsx(s,{to:"/login",state:{from:n},replace:!0})},to=()=>ae.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden",children:[ae.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-5"}),ae.jsx("div",{className:"absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"}),ae.jsx("div",{className:"absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"}),ae.jsx("div",{className:"absolute -bottom-8 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"}),ae.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4",children:ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[ae.jsxs(u.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2,type:"spring",stiffness:200},className:"mb-8",children:[ae.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg",children:ae.jsx(h,{className:"w-10 h-10 text-white"})}),ae.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"DropCalc"})]}),ae.jsxs(u.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed",children:["Bem-vindo ao ",ae.jsx("span",{className:"font-semibold text-blue-600",children:"DropCalc"})," — a calculadora inteligente para precificar seus produtos de dropshipping com precisão.",ae.jsx("br",{}),ae.jsx("span",{className:"text-lg text-gray-500 mt-2 block",children:"Crie sua conta e escolha o plano ideal para você!"})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"grid md:grid-cols-3 gap-6 mb-12",children:[ae.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsx(p,{className:"w-8 h-8 text-blue-600 mb-4 mx-auto"}),ae.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Precificação Inteligente"}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Calcule margens, taxas e preços finais automaticamente"})]}),ae.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsx(m,{className:"w-8 h-8 text-purple-600 mb-4 mx-auto"}),ae.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Múltiplas Plataformas"}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Suporte para Shopify, Mercado Livre, Nuvemshop e mais"})]}),ae.jsxs("div",{className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsx(h,{className:"w-8 h-8 text-indigo-600 mb-4 mx-auto"}),ae.jsx("h3",{className:"font-semibold text-gray-800 mb-2",children:"Conversão de Moedas"}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Trabalhe com mais de 70 moedas diferentes"})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[ae.jsx(n,{to:"/login",children:ae.jsxs(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto",children:["Entrar",ae.jsx(g,{className:"w-5 h-5"})]})}),ae.jsx(n,{to:"/login?mode=signup",children:ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 w-full sm:w-auto",children:"Criar conta"})})]})]})})]}),ro=()=>{const[t,r]=e.useState(""),[a,s]=e.useState(""),[n,l]=e.useState(""),[c,d]=e.useState(!0),[h,p]=e.useState(!1),[m,g]=e.useState(!1),N=o(),[C]=i(),{refreshAuth:k}=Qn();console.log("=== LOGIN PAGE CARREGANDO ==="),console.log("isLogin:",c),console.log("searchParams mode:",C.get("mode")),console.log("authService.isAuthenticated():",Yn.isAuthenticated()),e.useEffect(()=>{console.log("useEffect Login executando...");(async()=>{try{const e=await Yn.handleGoogleRedirectResult();if(e)return console.log("✅ Login Google por redirect:",e),lt.success(`Bem-vindo, ${e.name}! 🎉`),void N("/dashboard")}catch(e){console.error("❌ Erro no redirect Google:",e),lt.error("Erro ao processar login Google")}})();const e=C.get("mode");if(console.log("Mode detectado:",e),"signup"===e)return console.log("Modo signup detectado, setando isLogin = false"),void d(!1);console.log("Login carregado - usuário deve fazer login manualmente")},[N,C]);return console.log("=== RENDERIZANDO LOGIN PAGE ==="),console.log("Estado atual: isLogin =",c,"loading =",m),ae.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden",children:[ae.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[ae.jsx(u.div,{animate:{scale:[1,1.2,1],rotate:[0,180,360]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"}),ae.jsx(u.div,{animate:{scale:[1.2,1,1.2],rotate:[360,180,0]},transition:{duration:25,repeat:1/0,ease:"linear"},className:"absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"}),ae.jsx(u.div,{animate:{scale:[1,1.5,1],x:[-20,20,-20],y:[-10,10,-10]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl"})]}),ae.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md relative z-10",children:[ae.jsxs("div",{className:"text-center mb-10",children:[ae.jsx(u.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:10},className:"w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl",children:ae.jsx("span",{className:"text-3xl",children:"💰"})}),ae.jsx(u.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-4xl font-bold text-white mb-3",children:"DropCalc"}),ae.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-gray-300 text-lg mb-2",children:c?"Bem-vindo de volta":"Crie sua conta gratuitamente"}),!c&&ae.jsx(u.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"text-gray-400 text-sm",children:"Após criar sua conta, você poderá escolher o plano ideal"})]}),ae.jsxs(u.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},transition:{delay:.3,duration:.5},className:"bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl",children:[ae.jsxs("form",{onSubmit:async e=>{if(e.preventDefault(),t&&a&&(c||n)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?a.length<6?(lt.error("A senha deve ter pelo menos 6 caracteres"),0):!(!c&&n.length<2&&(lt.error("O nome deve ter pelo menos 2 caracteres"),1)):(lt.error("Por favor, insira um e-mail válido"),0):(lt.error("Por favor, preencha todos os campos"),0)){g(!0);try{if(c){let e=!1,n=null;try{console.log("🔄 Tentando login principal..."),n=await Yn.login(t,a),e=!0}catch(r){console.log("❌ Login principal falhou:",r.message),console.log("🔄 Tentando método alternativo...");try{n=await Yn.loginAlternative(t,a),e=!0,console.log("✅ Login alternativo funcionou!")}catch(s){throw console.error("❌ Login alternativo também falhou:",s.message),s}}e&&n&&(localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),k(),lt.success("Login realizado com sucesso!"),N("/dashboard"))}else await Yn.register(n,t,a),lt.success("Conta criada com sucesso!"),localStorage.setItem("premiumActive","true"),localStorage.setItem("userPlan","premium"),localStorage.setItem("billingStatus","active"),k(),N("/dashboard")}catch(o){console.error("Auth error:",o);const e=o.message||"Erro inesperado. Tente novamente";lt.error(e)}finally{g(!1)}}},className:"space-y-6",children:[!c&&ae.jsxs("div",{children:[ae.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-200 mb-3",children:"Nome"}),ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:ae.jsx(f,{className:"h-5 w-5 text-gray-400"})}),ae.jsx("input",{id:"name",type:"text",value:n,onChange:e=>l(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"Seu nome completo",required:!c})]})]}),ae.jsxs("div",{children:[ae.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-200 mb-3",children:"E-mail"}),ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:ae.jsx(x,{className:"h-5 w-5 text-gray-400"})}),ae.jsx("input",{id:"email",type:"email",value:t,onChange:e=>r(e.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"seu@email.com",required:!0})]})]}),ae.jsxs("div",{children:[ae.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-200 mb-3",children:"Senha"}),ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:ae.jsx(y,{className:"h-5 w-5 text-gray-400"})}),ae.jsx("input",{id:"password",type:h?"text":"password",value:a,onChange:e=>s(e.target.value),className:"w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",placeholder:"••••••••",required:!0}),ae.jsx("button",{type:"button",onClick:()=>p(!h),className:"absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors",children:h?ae.jsx(b,{className:"h-5 w-5"}):ae.jsx(w,{className:"h-5 w-5"})})]})]}),ae.jsx(u.button,{whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(139, 92, 246, 0.3)"},whileTap:{scale:.98},type:"submit",disabled:m,className:"w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed",children:m?ae.jsx("div",{className:"w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"}):ae.jsxs(ae.Fragment,{children:[c?ae.jsx(v,{className:"h-5 w-5"}):ae.jsx(f,{className:"h-5 w-5"}),ae.jsx("span",{children:c?"Entrar":"Criar Conta"})]})})]}),ae.jsxs("div",{className:"mt-6",children:[ae.jsxs("div",{className:"relative",children:[ae.jsx("div",{className:"absolute inset-0 flex items-center",children:ae.jsx("div",{className:"w-full border-t border-gray-300/30"})}),ae.jsx("div",{className:"relative flex justify-center text-sm",children:ae.jsx("span",{className:"px-2 bg-transparent text-gray-300",children:"ou"})})]}),ae.jsxs(u.button,{whileHover:{scale:1.02,boxShadow:"0 10px 30px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},type:"button",onClick:async()=>{if(m)return;g(!0);const e=lt.loading("Conectando com Google...");try{console.log("🚀 Iniciando login Google Firebase...");const t=await Yn.loginWithGoogle();lt.dismiss(e),lt.success(`Bem-vindo, ${t.name}! 🎉`),console.log("✅ Login Google realizado:",t),N("/dashboard")}catch(t){console.error("❌ Erro no login Google:",t),lt.dismiss(e);let r="Erro ao fazer login com Google";t.message?.includes("popup-closed-by-user")?r="Login cancelado pelo usuário":t.message?.includes("popup-blocked")?r="Popup bloqueado. Permita popups para este site":t.message?.includes("network")&&(r="Erro de conexão. Verifique sua internet"),lt.error(r)}finally{g(!1)}},disabled:m,className:"w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed border border-gray-200",children:[ae.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[ae.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),ae.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),ae.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),ae.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),ae.jsx("span",{children:"Continuar com Google"})]})]}),c&&ae.jsx("div",{className:"mt-6 text-center",children:ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",onClick:()=>N("/forgot-password"),className:"text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm",children:"Esqueci a senha"})}),ae.jsxs("div",{className:"mt-8 text-center",children:[ae.jsx("p",{className:"text-gray-300 mb-4",children:c?"Não tem uma conta?":"Já tem uma conta?"}),ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>d(!c),className:"text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg bg-white/5 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm",children:c?"Criar conta":"Entrar na minha conta"})]})]})]})]})},ao=()=>(console.log("LoginSimple carregando..."),ae.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#1a1a2e",color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"20px"},children:[ae.jsx("h1",{children:"LOGIN SIMPLES"}),ae.jsx("p",{children:"Esta é uma página de login simplificada para teste"}),ae.jsxs("form",{style:{backgroundColor:"#16213e",padding:"30px",borderRadius:"10px",marginTop:"20px",minWidth:"300px"},children:[ae.jsxs("div",{style:{marginBottom:"15px"},children:[ae.jsx("label",{children:"Email:"}),ae.jsx("input",{type:"email",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),ae.jsxs("div",{style:{marginBottom:"15px"},children:[ae.jsx("label",{children:"Senha:"}),ae.jsx("input",{type:"password",style:{width:"100%",padding:"10px",marginTop:"5px",borderRadius:"5px",border:"none",color:"#333"}})]}),ae.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Entrar"})]})]}));function so(e,t){return function(){return e.apply(t,arguments)}}const{toString:no}=Object.prototype,{getPrototypeOf:oo}=Object,{iterator:io,toStringTag:lo}=Symbol,co=(uo=Object.create(null),e=>{const t=no.call(e);return uo[t]||(uo[t]=t.slice(8,-1).toLowerCase())});var uo;const ho=e=>(e=e.toLowerCase(),t=>co(t)===e),po=e=>t=>typeof t===e,{isArray:mo}=Array,go=po("undefined");function fo(e){return null!==e&&!go(e)&&null!==e.constructor&&!go(e.constructor)&&bo(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const xo=ho("ArrayBuffer");const yo=po("string"),bo=po("function"),wo=po("number"),vo=e=>null!==e&&"object"==typeof e,No=e=>{if("object"!==co(e))return!1;const t=oo(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||lo in e||io in e)},Co=ho("Date"),ko=ho("File"),So=ho("Blob"),jo=ho("FileList"),Eo=ho("URLSearchParams"),[Io,_o,To,Po]=["ReadableStream","Request","Response","Headers"].map(ho);function Ao(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let a,s;if("object"!=typeof e&&(e=[e]),mo(e))for(a=0,s=e.length;a<s;a++)t.call(null,e[a],a,e);else{if(fo(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),n=s.length;let o;for(a=0;a<n;a++)o=s[a],t.call(null,e[o],o,e)}}function Ro(e,t){if(fo(e))return null;t=t.toLowerCase();const r=Object.keys(e);let a,s=r.length;for(;s-- >0;)if(a=r[s],t===a.toLowerCase())return a;return null}const Oo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Lo=e=>!go(e)&&e!==Oo;const Do=(Mo="undefined"!=typeof Uint8Array&&oo(Uint8Array),e=>Mo&&e instanceof Mo);var Mo;const Uo=ho("HTMLFormElement"),Fo=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Bo=ho("RegExp"),Ho=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),a={};Ao(r,(r,s)=>{let n;!1!==(n=t(r,s,e))&&(a[s]=n||r)}),Object.defineProperties(e,a)};const $o=ho("AsyncFunction"),Vo=(zo="function"==typeof setImmediate,Go=bo(Oo.postMessage),zo?setImmediate:Go?(qo=`axios@${Math.random()}`,Wo=[],Oo.addEventListener("message",({source:e,data:t})=>{e===Oo&&t===qo&&Wo.length&&Wo.shift()()},!1),e=>{Wo.push(e),Oo.postMessage(qo,"*")}):e=>setTimeout(e));var zo,Go,qo,Wo;const Jo="undefined"!=typeof queueMicrotask?queueMicrotask.bind(Oo):"undefined"!=typeof process&&process.nextTick||Vo,Ko={isArray:mo,isArrayBuffer:xo,isBuffer:fo,isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||bo(e.append)&&("formdata"===(t=co(e))||"object"===t&&bo(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&xo(e.buffer),t},isString:yo,isNumber:wo,isBoolean:e=>!0===e||!1===e,isObject:vo,isPlainObject:No,isEmptyObject:e=>{if(!vo(e)||fo(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(pe){return!1}},isReadableStream:Io,isRequest:_o,isResponse:To,isHeaders:Po,isUndefined:go,isDate:Co,isFile:ko,isBlob:So,isRegExp:Bo,isFunction:bo,isStream:e=>vo(e)&&bo(e.pipe),isURLSearchParams:Eo,isTypedArray:Do,isFileList:jo,forEach:Ao,merge:function e(){const{caseless:t,skipUndefined:r}=Lo(this)&&this||{},a={},s=(s,n)=>{const o=t&&Ro(a,n)||n;No(a[o])&&No(s)?a[o]=e(a[o],s):No(s)?a[o]=e({},s):mo(s)?a[o]=s.slice():r&&go(s)||(a[o]=s)};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&Ao(arguments[n],s);return a},extend:(e,t,r,{allOwnKeys:a}={})=>(Ao(t,(t,a)=>{r&&bo(t)?e[a]=so(t,r):e[a]=t},{allOwnKeys:a}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,a)=>{e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,a)=>{let s,n,o;const i={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),n=s.length;n-- >0;)o=s[n],a&&!a(o,e,t)||i[o]||(t[o]=e[o],i[o]=!0);e=!1!==r&&oo(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:co,kindOfTest:ho,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const a=e.indexOf(t,r);return-1!==a&&a===r},toArray:e=>{if(!e)return null;if(mo(e))return e;let t=e.length;if(!wo(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[io]).call(e);let a;for(;(a=r.next())&&!a.done;){const r=a.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const a=[];for(;null!==(r=e.exec(t));)a.push(r);return a},isHTMLForm:Uo,hasOwnProperty:Fo,hasOwnProp:Fo,reduceDescriptors:Ho,freezeMethods:e=>{Ho(e,(t,r)=>{if(bo(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const a=e[r];bo(a)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(e,t)=>{const r={},a=e=>{e.forEach(e=>{r[e]=!0})};return mo(e)?a(e):a(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ro,global:Oo,isContextDefined:Lo,isSpecCompliantForm:function(e){return!!(e&&bo(e.append)&&"FormData"===e[lo]&&e[io])},toJSONObject:e=>{const t=new Array(10),r=(e,a)=>{if(vo(e)){if(t.indexOf(e)>=0)return;if(fo(e))return e;if(!("toJSON"in e)){t[a]=e;const s=mo(e)?[]:{};return Ao(e,(e,t)=>{const n=r(e,a+1);!go(n)&&(s[t]=n)}),t[a]=void 0,s}}return e};return r(e,0)},isAsyncFn:$o,isThenable:e=>e&&(vo(e)||bo(e))&&bo(e.then)&&bo(e.catch),setImmediate:Vo,asap:Jo,isIterable:e=>null!=e&&bo(e[io])};function Zo(e,t,r,a,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),s&&(this.response=s,this.status=s.status?s.status:null)}Ko.inherits(Zo,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ko.toJSONObject(this.config),code:this.code,status:this.status}}});const Xo=Zo.prototype,Yo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Yo[e]={value:e}}),Object.defineProperties(Zo,Yo),Object.defineProperty(Xo,"isAxiosError",{value:!0}),Zo.from=(e,t,r,a,s,n)=>{const o=Object.create(Xo);Ko.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e);const i=e&&e.message?e.message:"Error",l=null==t&&e?e.code:t;return Zo.call(o,i,l,r,a,s),e&&null==o.cause&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",n&&Object.assign(o,n),o};function Qo(e){return Ko.isPlainObject(e)||Ko.isArray(e)}function ei(e){return Ko.endsWith(e,"[]")?e.slice(0,-2):e}function ti(e,t,r){return e?e.concat(t).map(function(e,t){return e=ei(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const ri=Ko.toFlatObject(Ko,{},null,function(e){return/^is[A-Z]/.test(e)});function ai(e,t,r){if(!Ko.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const a=(r=Ko.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Ko.isUndefined(t[e])})).metaTokens,s=r.visitor||c,n=r.dots,o=r.indexes,i=(r.Blob||"undefined"!=typeof Blob&&Blob)&&Ko.isSpecCompliantForm(t);if(!Ko.isFunction(s))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ko.isDate(e))return e.toISOString();if(Ko.isBoolean(e))return e.toString();if(!i&&Ko.isBlob(e))throw new Zo("Blob is not supported. Use a Buffer instead.");return Ko.isArrayBuffer(e)||Ko.isTypedArray(e)?i&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,r,s){let i=e;if(e&&!s&&"object"==typeof e)if(Ko.endsWith(r,"{}"))r=a?r:r.slice(0,-2),e=JSON.stringify(e);else if(Ko.isArray(e)&&function(e){return Ko.isArray(e)&&!e.some(Qo)}(e)||(Ko.isFileList(e)||Ko.endsWith(r,"[]"))&&(i=Ko.toArray(e)))return r=ei(r),i.forEach(function(e,a){!Ko.isUndefined(e)&&null!==e&&t.append(!0===o?ti([r],a,n):null===o?r:r+"[]",l(e))}),!1;return!!Qo(e)||(t.append(ti(s,r,n),l(e)),!1)}const d=[],u=Object.assign(ri,{defaultVisitor:c,convertValue:l,isVisitable:Qo});if(!Ko.isObject(e))throw new TypeError("data must be an object");return function e(r,a){if(!Ko.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+a.join("."));d.push(r),Ko.forEach(r,function(r,n){!0===(!(Ko.isUndefined(r)||null===r)&&s.call(t,r,Ko.isString(n)?n.trim():n,a,u))&&e(r,a?a.concat(n):[n])}),d.pop()}}(e),t}function si(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function ni(e,t){this._pairs=[],e&&ai(e,this,t)}const oi=ni.prototype;function ii(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function li(e,t,r){if(!t)return e;const a=r&&r.encode||ii;Ko.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let n;if(n=s?s(t,r):Ko.isURLSearchParams(t)?t.toString():new ni(t,r).toString(a),n){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}oi.append=function(e,t){this._pairs.push([e,t])},oi.toString=function(e){const t=e?function(t){return e.call(this,t,si)}:si;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const ci=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ko.forEach(this.handlers,function(t){null!==t&&e(t)})}},di={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ui={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ni,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},hi="undefined"!=typeof window&&"undefined"!=typeof document,pi="object"==typeof navigator&&navigator||void 0,mi=hi&&(!pi||["ReactNative","NativeScript","NS"].indexOf(pi.product)<0),gi="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,fi=hi&&window.location.href||"http://localhost",xi={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hi,hasStandardBrowserEnv:mi,hasStandardBrowserWebWorkerEnv:gi,navigator:pi,origin:fi},Symbol.toStringTag,{value:"Module"})),...ui};function yi(e){function t(e,r,a,s){let n=e[s++];if("__proto__"===n)return!0;const o=Number.isFinite(+n),i=s>=e.length;if(n=!n&&Ko.isArray(a)?a.length:n,i)return Ko.hasOwnProp(a,n)?a[n]=[a[n],r]:a[n]=r,!o;a[n]&&Ko.isObject(a[n])||(a[n]=[]);return t(e,r,a[n],s)&&Ko.isArray(a[n])&&(a[n]=function(e){const t={},r=Object.keys(e);let a;const s=r.length;let n;for(a=0;a<s;a++)n=r[a],t[n]=e[n];return t}(a[n])),!o}if(Ko.isFormData(e)&&Ko.isFunction(e.entries)){const r={};return Ko.forEachEntry(e,(e,a)=>{t(function(e){return Ko.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),a,r,0)}),r}return null}const bi={transitional:di,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,s=Ko.isObject(e);s&&Ko.isHTMLForm(e)&&(e=new FormData(e));if(Ko.isFormData(e))return a?JSON.stringify(yi(e)):e;if(Ko.isArrayBuffer(e)||Ko.isBuffer(e)||Ko.isStream(e)||Ko.isFile(e)||Ko.isBlob(e)||Ko.isReadableStream(e))return e;if(Ko.isArrayBufferView(e))return e.buffer;if(Ko.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let n;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ai(e,new xi.classes.URLSearchParams,{visitor:function(e,t,r,a){return xi.isNode&&Ko.isBuffer(e)?(this.append(t,e.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((n=Ko.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ai(n?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||a?(t.setContentType("application/json",!1),function(e,t,r){if(Ko.isString(e))try{return(t||JSON.parse)(e),Ko.trim(e)}catch(pe){if("SyntaxError"!==pe.name)throw pe}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||bi.transitional,r=t&&t.forcedJSONParsing,a="json"===this.responseType;if(Ko.isResponse(e)||Ko.isReadableStream(e))return e;if(e&&Ko.isString(e)&&(r&&!this.responseType||a)){const r=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(e,this.parseReviver)}catch(pe){if(r){if("SyntaxError"===pe.name)throw Zo.from(pe,Zo.ERR_BAD_RESPONSE,this,null,this.response);throw pe}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xi.classes.FormData,Blob:xi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ko.forEach(["delete","get","head","post","put","patch"],e=>{bi.headers[e]={}});const wi=bi,vi=Ko.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ni=Symbol("internals");function Ci(e){return e&&String(e).trim().toLowerCase()}function ki(e){return!1===e||null==e?e:Ko.isArray(e)?e.map(ki):String(e)}function Si(e,t,r,a,s){return Ko.isFunction(a)?a.call(this,t,r):(s&&(t=r),Ko.isString(t)?Ko.isString(a)?-1!==t.indexOf(a):Ko.isRegExp(a)?a.test(t):void 0:void 0)}class ji{constructor(e){e&&this.set(e)}set(e,t,r){const a=this;function s(e,t,r){const s=Ci(t);if(!s)throw new Error("header name must be a non-empty string");const n=Ko.findKey(a,s);(!n||void 0===a[n]||!0===r||void 0===r&&!1!==a[n])&&(a[n||t]=ki(e))}const n=(e,t)=>Ko.forEach(e,(e,r)=>s(e,r,t));if(Ko.isPlainObject(e)||e instanceof this.constructor)n(e,t);else if(Ko.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))n((e=>{const t={};let r,a,s;return e&&e.split("\n").forEach(function(e){s=e.indexOf(":"),r=e.substring(0,s).trim().toLowerCase(),a=e.substring(s+1).trim(),!r||t[r]&&vi[r]||("set-cookie"===r?t[r]?t[r].push(a):t[r]=[a]:t[r]=t[r]?t[r]+", "+a:a)}),t})(e),t);else if(Ko.isObject(e)&&Ko.isIterable(e)){let r,a,s={};for(const t of e){if(!Ko.isArray(t))throw TypeError("Object iterator must return a key-value pair");s[a=t[0]]=(r=s[a])?Ko.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}n(s,t)}else null!=e&&s(t,e,r);return this}get(e,t){if(e=Ci(e)){const r=Ko.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)t[a[1]]=a[2];return t}(e);if(Ko.isFunction(t))return t.call(this,e,r);if(Ko.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ci(e)){const r=Ko.findKey(this,e);return!(!r||void 0===this[r]||t&&!Si(0,this[r],r,t))}return!1}delete(e,t){const r=this;let a=!1;function s(e){if(e=Ci(e)){const s=Ko.findKey(r,e);!s||t&&!Si(0,r[s],s,t)||(delete r[s],a=!0)}}return Ko.isArray(e)?e.forEach(s):s(e),a}clear(e){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const s=t[r];e&&!Si(0,this[s],s,e,!0)||(delete this[s],a=!0)}return a}normalize(e){const t=this,r={};return Ko.forEach(this,(a,s)=>{const n=Ko.findKey(r,s);if(n)return t[n]=ki(a),void delete t[s];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}(s):String(s).trim();o!==s&&delete t[s],t[o]=ki(a),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Ko.forEach(this,(r,a)=>{null!=r&&!1!==r&&(t[a]=e&&Ko.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const t=(this[Ni]=this[Ni]={accessors:{}}).accessors,r=this.prototype;function a(e){const a=Ci(e);t[a]||(!function(e,t){const r=Ko.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(e,r,s){return this[a].call(this,t,e,r,s)},configurable:!0})})}(r,e),t[a]=!0)}return Ko.isArray(e)?e.forEach(a):a(e),this}}ji.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ko.reduceDescriptors(ji.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),Ko.freezeMethods(ji);const Ei=ji;function Ii(e,t){const r=this||wi,a=t||r,s=Ei.from(a.headers);let n=a.data;return Ko.forEach(e,function(e){n=e.call(r,n,s.normalize(),t?t.status:void 0)}),s.normalize(),n}function _i(e){return!(!e||!e.__CANCEL__)}function Ti(e,t,r){Zo.call(this,null==e?"canceled":e,Zo.ERR_CANCELED,t,r),this.name="CanceledError"}function Pi(e,t,r){const a=r.config.validateStatus;r.status&&a&&!a(r.status)?t(new Zo("Request failed with status code "+r.status,[Zo.ERR_BAD_REQUEST,Zo.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}Ko.inherits(Ti,Zo,{__CANCEL__:!0});const Ai=(e,t,r=3)=>{let a=0;const s=function(e,t){e=e||10;const r=new Array(e),a=new Array(e);let s,n=0,o=0;return t=void 0!==t?t:1e3,function(i){const l=Date.now(),c=a[o];s||(s=l),r[n]=i,a[n]=l;let d=o,u=0;for(;d!==n;)u+=r[d++],d%=e;if(n=(n+1)%e,n===o&&(o=(o+1)%e),l-s<t)return;const h=c&&l-c;return h?Math.round(1e3*u/h):void 0}}(50,250);return function(e,t){let r,a,s=0,n=1e3/t;const o=(t,n=Date.now())=>{s=n,r=null,a&&(clearTimeout(a),a=null),e(...t)};return[(...e)=>{const t=Date.now(),i=t-s;i>=n?o(e,t):(r=e,a||(a=setTimeout(()=>{a=null,o(r)},n-i)))},()=>r&&o(r)]}(r=>{const n=r.loaded,o=r.lengthComputable?r.total:void 0,i=n-a,l=s(i);a=n;e({loaded:n,total:o,progress:o?n/o:void 0,bytes:i,rate:l||void 0,estimated:l&&o&&n<=o?(o-n)/l:void 0,event:r,lengthComputable:null!=o,[t?"download":"upload"]:!0})},r)},Ri=(e,t)=>{const r=null!=e;return[a=>t[0]({lengthComputable:r,total:e,loaded:a}),t[1]]},Oi=e=>(...t)=>Ko.asap(()=>e(...t)),Li=xi.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,xi.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(xi.origin),xi.navigator&&/(msie|trident)/i.test(xi.navigator.userAgent)):()=>!0,Di=xi.hasStandardBrowserEnv?{write(e,t,r,a,s,n,o){if("undefined"==typeof document)return;const i=[`${e}=${encodeURIComponent(t)}`];Ko.isNumber(r)&&i.push(`expires=${new Date(r).toUTCString()}`),Ko.isString(a)&&i.push(`path=${a}`),Ko.isString(s)&&i.push(`domain=${s}`),!0===n&&i.push("secure"),Ko.isString(o)&&i.push(`SameSite=${o}`),document.cookie=i.join("; ")},read(e){if("undefined"==typeof document)return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read:()=>null,remove(){}};function Mi(e,t,r){let a=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(a||0==r)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ui=e=>e instanceof Ei?{...e}:e;function Fi(e,t){t=t||{};const r={};function a(e,t,r,a){return Ko.isPlainObject(e)&&Ko.isPlainObject(t)?Ko.merge.call({caseless:a},e,t):Ko.isPlainObject(t)?Ko.merge({},t):Ko.isArray(t)?t.slice():t}function s(e,t,r,s){return Ko.isUndefined(t)?Ko.isUndefined(e)?void 0:a(void 0,e,0,s):a(e,t,0,s)}function n(e,t){if(!Ko.isUndefined(t))return a(void 0,t)}function o(e,t){return Ko.isUndefined(t)?Ko.isUndefined(e)?void 0:a(void 0,e):a(void 0,t)}function i(r,s,n){return n in t?a(r,s):n in e?a(void 0,r):void 0}const l={url:n,method:n,data:n,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:i,headers:(e,t,r)=>s(Ui(e),Ui(t),0,!0)};return Ko.forEach(Object.keys({...e,...t}),function(a){const n=l[a]||s,o=n(e[a],t[a],a);Ko.isUndefined(o)&&n!==i||(r[a]=o)}),r}const Bi=e=>{const t=Fi({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:s,xsrfCookieName:n,headers:o,auth:i}=t;if(t.headers=o=Ei.from(o),t.url=li(Mi(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),i&&o.set("Authorization","Basic "+btoa((i.username||"")+":"+(i.password?unescape(encodeURIComponent(i.password)):""))),Ko.isFormData(r))if(xi.hasStandardBrowserEnv||xi.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(Ko.isFunction(r.getHeaders)){const e=r.getHeaders(),t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{t.includes(e.toLowerCase())&&o.set(e,r)})}if(xi.hasStandardBrowserEnv&&(a&&Ko.isFunction(a)&&(a=a(t)),a||!1!==a&&Li(t.url))){const e=s&&n&&Di.read(n);e&&o.set(s,e)}return t},Hi="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){const a=Bi(e);let s=a.data;const n=Ei.from(a.headers).normalize();let o,i,l,c,d,{responseType:u,onUploadProgress:h,onDownloadProgress:p}=a;function m(){c&&c(),d&&d(),a.cancelToken&&a.cancelToken.unsubscribe(o),a.signal&&a.signal.removeEventListener("abort",o)}let g=new XMLHttpRequest;function f(){if(!g)return;const a=Ei.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());Pi(function(e){t(e),m()},function(e){r(e),m()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:a,config:e,request:g}),g=null}g.open(a.method.toUpperCase(),a.url,!0),g.timeout=a.timeout,"onloadend"in g?g.onloadend=f:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(f)},g.onabort=function(){g&&(r(new Zo("Request aborted",Zo.ECONNABORTED,e,g)),g=null)},g.onerror=function(t){const a=new Zo(t&&t.message?t.message:"Network Error",Zo.ERR_NETWORK,e,g);a.event=t||null,r(a),g=null},g.ontimeout=function(){let t=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const s=a.transitional||di;a.timeoutErrorMessage&&(t=a.timeoutErrorMessage),r(new Zo(t,s.clarifyTimeoutError?Zo.ETIMEDOUT:Zo.ECONNABORTED,e,g)),g=null},void 0===s&&n.setContentType(null),"setRequestHeader"in g&&Ko.forEach(n.toJSON(),function(e,t){g.setRequestHeader(t,e)}),Ko.isUndefined(a.withCredentials)||(g.withCredentials=!!a.withCredentials),u&&"json"!==u&&(g.responseType=a.responseType),p&&([l,d]=Ai(p,!0),g.addEventListener("progress",l)),h&&g.upload&&([i,c]=Ai(h),g.upload.addEventListener("progress",i),g.upload.addEventListener("loadend",c)),(a.cancelToken||a.signal)&&(o=t=>{g&&(r(!t||t.type?new Ti(null,e,g):t),g.abort(),g=null)},a.cancelToken&&a.cancelToken.subscribe(o),a.signal&&(a.signal.aborted?o():a.signal.addEventListener("abort",o)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(a.url);x&&-1===xi.protocols.indexOf(x)?r(new Zo("Unsupported protocol "+x+":",Zo.ERR_BAD_REQUEST,e)):g.send(s||null)})},$i=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,a=new AbortController;const s=function(e){if(!r){r=!0,o();const t=e instanceof Error?e:this.reason;a.abort(t instanceof Zo?t:new Ti(t instanceof Error?t.message:t))}};let n=t&&setTimeout(()=>{n=null,s(new Zo(`timeout ${t} of ms exceeded`,Zo.ETIMEDOUT))},t);const o=()=>{e&&(n&&clearTimeout(n),n=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(s):e.removeEventListener("abort",s)}),e=null)};e.forEach(e=>e.addEventListener("abort",s));const{signal:i}=a;return i.unsubscribe=()=>Ko.asap(o),i}},Vi=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let a,s=0;for(;s<r;)a=s+t,yield e.slice(s,a),s=a},zi=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},Gi=(e,t,r,a)=>{const s=async function*(e,t){for await(const r of zi(e))yield*Vi(r,t)}(e,t);let n,o=0,i=e=>{n||(n=!0,a&&a(e))};return new ReadableStream({async pull(e){try{const{done:t,value:a}=await s.next();if(t)return i(),void e.close();let n=a.byteLength;if(r){let e=o+=n;r(e)}e.enqueue(new Uint8Array(a))}catch(t){throw i(t),t}},cancel:e=>(i(e),s.return())},{highWaterMark:2})},{isFunction:qi}=Ko,Wi=(({Request:e,Response:t})=>({Request:e,Response:t}))(Ko.global),{ReadableStream:Ji,TextEncoder:Ki}=Ko.global,Zi=(e,...t)=>{try{return!!e(...t)}catch(pe){return!1}},Xi=e=>{e=Ko.merge.call({skipUndefined:!0},Wi,e);const{fetch:t,Request:r,Response:a}=e,s=t?qi(t):"function"==typeof fetch,n=qi(r),o=qi(a);if(!s)return!1;const i=s&&qi(Ji),l=s&&("function"==typeof Ki?(c=new Ki,e=>c.encode(e)):async e=>new Uint8Array(await new r(e).arrayBuffer()));var c;const d=n&&i&&Zi(()=>{let e=!1;const t=new r(xi.origin,{body:new Ji,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),u=o&&i&&Zi(()=>Ko.isReadableStream(new a("").body)),h={stream:u&&(e=>e.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!h[e]&&(h[e]=(t,r)=>{let a=t&&t[e];if(a)return a.call(t);throw new Zo(`Response type '${e}' is not supported`,Zo.ERR_NOT_SUPPORT,r)})});const p=async(e,t)=>{const a=Ko.toFiniteNumber(e.getContentLength());return null==a?(async e=>{if(null==e)return 0;if(Ko.isBlob(e))return e.size;if(Ko.isSpecCompliantForm(e)){const t=new r(xi.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ko.isArrayBufferView(e)||Ko.isArrayBuffer(e)?e.byteLength:(Ko.isURLSearchParams(e)&&(e+=""),Ko.isString(e)?(await l(e)).byteLength:void 0)})(t):a};return async e=>{let{url:s,method:o,data:i,signal:l,cancelToken:c,timeout:m,onDownloadProgress:g,onUploadProgress:f,responseType:x,headers:y,withCredentials:b="same-origin",fetchOptions:w}=Bi(e),v=t||fetch;x=x?(x+"").toLowerCase():"text";let N=$i([l,c&&c.toAbortSignal()],m),C=null;const k=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let S;try{if(f&&d&&"get"!==o&&"head"!==o&&0!==(S=await p(y,i))){let e,t=new r(s,{method:"POST",body:i,duplex:"half"});if(Ko.isFormData(i)&&(e=t.headers.get("content-type"))&&y.setContentType(e),t.body){const[e,r]=Ri(S,Ai(Oi(f)));i=Gi(t.body,65536,e,r)}}Ko.isString(b)||(b=b?"include":"omit");const t=n&&"credentials"in r.prototype,l={...w,signal:N,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:t?b:void 0};C=n&&new r(s,l);let c=await(n?v(C,w):v(s,l));const m=u&&("stream"===x||"response"===x);if(u&&(g||m&&k)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=c[t]});const t=Ko.toFiniteNumber(c.headers.get("content-length")),[r,s]=g&&Ri(t,Ai(Oi(g),!0))||[];c=new a(Gi(c.body,65536,r,()=>{s&&s(),k&&k()}),e)}x=x||"text";let j=await h[Ko.findKey(h,x)||"text"](c,e);return!m&&k&&k(),await new Promise((t,r)=>{Pi(t,r,{data:j,headers:Ei.from(c.headers),status:c.status,statusText:c.statusText,config:e,request:C})})}catch(j){if(k&&k(),j&&"TypeError"===j.name&&/Load failed|fetch/i.test(j.message))throw Object.assign(new Zo("Network Error",Zo.ERR_NETWORK,e,C),{cause:j.cause||j});throw Zo.from(j,j&&j.code,e,C)}}},Yi=new Map,Qi=e=>{let t=e&&e.env||{};const{fetch:r,Request:a,Response:s}=t,n=[a,s,r];let o,i,l=n.length,c=Yi;for(;l--;)o=n[l],i=c.get(o),void 0===i&&c.set(o,i=l?new Map:Xi(t)),c=i;return i};Qi();const el={http:null,xhr:Hi,fetch:{get:Qi}};Ko.forEach(el,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(pe){}Object.defineProperty(e,"adapterName",{value:t})}});const tl=e=>`- ${e}`,rl=e=>Ko.isFunction(e)||null===e||!1===e;const al={getAdapter:function(e,t){e=Ko.isArray(e)?e:[e];const{length:r}=e;let a,s;const n={};for(let o=0;o<r;o++){let r;if(a=e[o],s=a,!rl(a)&&(s=el[(r=String(a)).toLowerCase()],void 0===s))throw new Zo(`Unknown adapter '${r}'`);if(s&&(Ko.isFunction(s)||(s=s.get(t))))break;n[r||"#"+o]=s}if(!s){const e=Object.entries(n).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new Zo("There is no suitable adapter to dispatch the request "+(r?e.length>1?"since :\n"+e.map(tl).join("\n"):" "+tl(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return s},adapters:el};function sl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ti(null,e)}function nl(e){sl(e),e.headers=Ei.from(e.headers),e.data=Ii.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return al.getAdapter(e.adapter||wi.adapter,e)(e).then(function(t){return sl(e),t.data=Ii.call(e,e.transformResponse,t),t.headers=Ei.from(t.headers),t},function(t){return _i(t)||(sl(e),t&&t.response&&(t.response.data=Ii.call(e,e.transformResponse,t.response),t.response.headers=Ei.from(t.response.headers))),Promise.reject(t)})}const ol="1.13.1",il={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{il[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ll={};il.transitional=function(e,t,r){function a(e,t){return"[Axios v"+ol+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,s,n)=>{if(!1===e)throw new Zo(a(s," has been removed"+(t?" in "+t:"")),Zo.ERR_DEPRECATED);return t&&!ll[s]&&(ll[s]=!0,console.warn(a(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,s,n)}},il.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};const cl={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Zo("options must be an object",Zo.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let s=a.length;for(;s-- >0;){const n=a[s],o=t[n];if(o){const t=e[n],r=void 0===t||o(t,n,e);if(!0!==r)throw new Zo("option "+n+" must be "+r,Zo.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new Zo("Unknown option "+n,Zo.ERR_BAD_OPTION)}},validators:il},dl=cl.validators;class ul{constructor(e){this.defaults=e||{},this.interceptors={request:new ci,response:new ci}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(pe){}}throw r}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Fi(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:s}=t;void 0!==r&&cl.assertOptions(r,{silentJSONParsing:dl.transitional(dl.boolean),forcedJSONParsing:dl.transitional(dl.boolean),clarifyTimeoutError:dl.transitional(dl.boolean)},!1),null!=a&&(Ko.isFunction(a)?t.paramsSerializer={serialize:a}:cl.assertOptions(a,{encode:dl.function,serialize:dl.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),cl.assertOptions(t,{baseUrl:dl.spelling("baseURL"),withXsrfToken:dl.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let n=s&&Ko.merge(s.common,s[t.method]);s&&Ko.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=Ei.concat(n,s);const o=[];let i=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,o.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!i){const e=[nl.bind(this),void 0];for(e.unshift(...o),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let h=t;for(;u<d;){const e=o[u++],t=o[u++];try{h=e(h)}catch(p){t.call(this,p);break}}try{c=nl.call(this,h)}catch(p){return Promise.reject(p)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return li(Mi((e=Fi(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Ko.forEach(["delete","get","head","options"],function(e){ul.prototype[e]=function(t,r){return this.request(Fi(r||{},{method:e,url:t,data:(r||{}).data}))}}),Ko.forEach(["post","put","patch"],function(e){function t(t){return function(r,a,s){return this.request(Fi(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:a}))}}ul.prototype[e]=t(),ul.prototype[e+"Form"]=t(!0)});const hl=ul;class pl{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;const a=new Promise(e=>{r.subscribe(e),t=e}).then(e);return a.cancel=function(){r.unsubscribe(t)},a},e(function(e,a,s){r.reason||(r.reason=new Ti(e,a,s),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new pl(function(t){e=t});return{token:t,cancel:e}}}const ml=pl;const gl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(gl).forEach(([e,t])=>{gl[t]=e});const fl=gl;const xl=function e(t){const r=new hl(t),a=so(hl.prototype.request,r);return Ko.extend(a,hl.prototype,r,{allOwnKeys:!0}),Ko.extend(a,r,null,{allOwnKeys:!0}),a.create=function(r){return e(Fi(t,r))},a}(wi);xl.Axios=hl,xl.CanceledError=Ti,xl.CancelToken=ml,xl.isCancel=_i,xl.VERSION=ol,xl.toFormData=ai,xl.AxiosError=Zo,xl.Cancel=xl.CanceledError,xl.all=function(e){return Promise.all(e)},xl.spread=function(e){return function(t){return e.apply(null,t)}},xl.isAxiosError=function(e){return Ko.isObject(e)&&!0===e.isAxiosError},xl.mergeConfig=Fi,xl.AxiosHeaders=Ei,xl.formToJSON=e=>yi(Ko.isHTMLForm(e)?new FormData(e):e),xl.getAdapter=al.getAdapter,xl.HttpStatusCode=fl,xl.default=xl;const yl=xl;const bl=()=>{const{user:t}=Qn(),[r,a]=e.useState("monthly"),[s,n]=e.useState({isConnected:!1,isLoading:!0,products:null}),[o,i]=e.useState(null),[l,c]=e.useState(null),d=[{id:"basic",name:"Básico",icon:ae.jsx(N,{className:"w-10 h-10 text-gray-500"}),color:"gray",gradient:"from-gray-400 to-gray-600",features:["Gratuito (R$ 0,00/mês)","Limite de 2 moedas (ex: BRL, USD)","Limite de 2 plataformas (Shopify, Nuvemshop)","Limite de 2 gateways de pagamento (Stripe, Mercado Pago)","Pode realizar 10 cálculos por mês","Acesso à calculadora padrão","Suporte via e-mail"],prices:{monthly:0,quarterly:{total:0,perMonth:0},annual:{total:0,perMonth:0}}},{id:"gold",name:"Gold",icon:ae.jsx(u.div,{initial:{scale:1},animate:{scale:[1,1.15,1],boxShadow:["0 0 0px #FFD700","0 0 24px #FFD700","0 0 0px #FFD700"]},transition:{repeat:1/0,duration:2},children:ae.jsx(C,{className:"w-12 h-12 text-yellow-500 drop-shadow-lg"})}),color:"yellow",gradient:"from-yellow-400 to-yellow-600",popular:!0,features:["R$ 9,90/mês","Suporte a 10 moedas","Até 4 plataformas","Até 4 gateways de pagamento","Cálculo automático em tempo real","Atualização automática de câmbio","Principais plataformas (Shopee, AliExpress, Nuvemshop, etc.)","Suporte via e-mail"],prices:{monthly:9.9,quarterly:{total:26.9,perMonth:9},annual:{total:89.9,perMonth:7.5}}},{id:"premium",name:"Premium",icon:ae.jsxs(u.div,{initial:{rotate:0,scale:1},animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{repeat:1/0,duration:3},className:"relative flex items-center justify-center",children:[ae.jsx(k,{className:"w-12 h-12 text-purple-500 drop-shadow-lg"}),ae.jsx(u.span,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1},className:"absolute -top-2 -right-2",children:ae.jsx(S,{className:"w-7 h-7 text-blue-500 drop-shadow-xl"})})]}),color:"purple",gradient:"from-purple-400 to-purple-600",features:["R$ 19,90/mês","Todas as moedas disponíveis (70+)","Todas as plataformas integradas","Todos os gateways de pagamento","Cálculo automático em tempo real","Histórico de preços completo","Suporte técnico prioritário","Segurança avançada nos pagamentos"],prices:{monthly:19.9,quarterly:{total:54.9,perMonth:18.3},annual:{total:199.9,perMonth:16.6}}}],h=(e,t)=>{switch(t){case"monthly":return{value:e.prices.monthly,label:`R$ ${e.prices.monthly.toFixed(2)}`};case"quarterly":return{value:e.prices.quarterly.total,label:`R$ ${e.prices.quarterly.total.toFixed(2)} (R$ ${e.prices.quarterly.perMonth.toFixed(2)}/mês)`};case"annual":return{value:e.prices.annual.total,label:`R$ ${e.prices.annual.total.toFixed(2)} (R$ ${e.prices.annual.perMonth.toFixed(2)}/mês)`}}},p=(e,t)=>{const r=e.prices.monthly*("quarterly"===t?3:12),a=e.prices[t].total;return Math.round((r-a)/r*100)};return e.useEffect(()=>{const e=localStorage.getItem("userPlan"),t=localStorage.getItem("billingStatus"),r=localStorage.getItem("currentUser");if(e&&"active"===t&&r){const t=localStorage.getItem("subscriptionDate");if(t){const r=new Date(t);((new Date).getTime()-r.getTime())/36e5<24?i(e):(localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),localStorage.removeItem("subscriptionPeriod"),localStorage.removeItem("subscriptionDate"))}}n({isConnected:!0,isLoading:!1,products:null})},[]),ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4 flex items-center justify-center",children:ae.jsxs("div",{className:"w-full max-w-6xl mx-auto",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/70 backdrop-blur-2xl rounded-3xl p-6 border-2 border-blue-200 shadow-2xl mb-8",children:[ae.jsx("h3",{className:"text-2xl font-bold text-blue-700 mb-6 text-center tracking-tight",children:"Escolha o período de cobrança"}),ae.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:["monthly","quarterly","annual"].map(e=>ae.jsxs(u.button,{whileHover:{scale:1.07,boxShadow:"0 0 16px #60A5FA"},whileTap:{scale:.97},onClick:()=>a(e),className:"p-4 rounded-2xl border-2 font-semibold text-lg transition-all relative shadow-lg "+(r===e?"border-blue-500 bg-blue-100 text-blue-700":"border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50"),children:[ae.jsx("p",{className:"font-bold text-lg",children:{monthly:"Mensal",quarterly:"Trimestral",annual:"Anual"}[e]}),"monthly"!==e&&ae.jsxs("span",{className:"absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow",children:["-",p(d[1],e),"%"]})]},e))})]}),!s.isLoading&&ae.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:d.map((e,a)=>ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*a},className:`relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border-2 shadow-2xl flex flex-col h-full transition-all duration-300 ${e.popular?"border-yellow-400 shadow-yellow-200 scale-105":""} ${o===e.id?"ring-2 ring-green-500":""}`,children:[ae.jsxs("div",{className:"flex flex-col items-center mb-8",children:[ae.jsx("div",{className:`w-16 h-16 flex items-center justify-center rounded-2xl mb-3 bg-gradient-to-r ${e.gradient} shadow-lg`,children:e.icon}),ae.jsx("span",{className:`text-3xl font-extrabold text-${e.color}-700 mb-2 tracking-tight`,children:e.name}),e.popular&&ae.jsx(u.span,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.5},className:"px-4 py-2 bg-yellow-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg border-2 border-yellow-300 animate-pulse",children:"⭐ Mais Popular"}),ae.jsx("span",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:h(e,r).label})]}),ae.jsx("ul",{className:"mb-8 text-base text-gray-900 space-y-4 flex-1",children:e.features.map((e,t)=>ae.jsxs("li",{className:"flex items-center gap-2",children:[ae.jsx(N,{className:"w-5 h-5 text-green-500"}),ae.jsx("span",{children:e})]},t))}),ae.jsx("div",{className:"mt-auto",children:ae.jsxs(u.button,{whileHover:{scale:o===e.id?1:1.07,boxShadow:o===e.id?void 0:"0 0 16px "+("yellow"===e.color?"#FFD700":"purple"===e.color?"#6366F1":"#60A5FA")},whileTap:{scale:o===e.id?1:.97},onClick:async()=>{if(o!==e.id){c(`${e.id}_${r}`);try{if(lt.loading("Redirecionando para pagamento...",{id:"purchase"}),!t?.id)throw new Error("Usuário não encontrado");const a=await async function({title:e,description:t,price:r,quantity:a=1,planId:s,userId:n}){const o={items:[{title:e,description:t,quantity:a,currency_id:"BRL",unit_price:r}],external_reference:`${s}_${n}`,back_urls:{success:`${window.location.origin}/payment-success`,failure:`${window.location.origin}/payment-failure`,pending:`${window.location.origin}/payment-pending`},auto_return:"approved",payer:{id:n}};return(await yl.post("https://api.mercadopago.com/checkout/preferences",o,{headers:{Authorization:"Bearer APP_USR-377913103077270-111122-afa5f8cbbd113e80aff4c90b5c812766-2984123394","Content-Type":"application/json"}})).data}({title:`Assinatura DropCalc - ${e.name}`,description:`Plano ${e.name} (${r})`,price:h(e,r).value,planId:e.id,userId:t.id});window.location.href=a.init_point}catch(a){console.error("Erro ao criar pagamento:",a),lt.error("Erro ao redirecionar para pagamento.",{id:"purchase"})}finally{c(null)}}},disabled:l===`${e.id}_${r}`||o===e.id,className:"w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 "+(o===e.id?"bg-green-100 text-green-700 cursor-default":l===`${e.id}_${r}`?"bg-gray-400 text-white cursor-not-allowed":`bg-gradient-to-r ${e.gradient} text-white hover:shadow-2xl`),children:[ae.jsx(j,{className:"w-5 h-5"}),"Assinar"]})})]},e.id))}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},className:"overflow-x-auto mb-10",children:[ae.jsx("h3",{className:"text-2xl font-extrabold text-blue-700 mb-6 text-center tracking-tight",children:"Comparativo dos Planos"}),ae.jsxs("table",{className:"min-w-full bg-white/80 rounded-3xl shadow-2xl border border-blue-100",children:[ae.jsx("thead",{children:ae.jsxs("tr",{children:[ae.jsx("th",{className:"py-4 px-6 text-left font-bold text-lg bg-blue-50 rounded-tl-3xl",children:"Benefício"}),d.map(e=>ae.jsx("th",{className:"py-4 px-6 text-center font-bold text-lg bg-blue-50",children:ae.jsx("span",{className:`text-base font-bold text-${e.color}-700`,children:e.name})},e.id))]})}),ae.jsxs("tbody",{children:[ae.jsxs("tr",{className:"bg-white/60",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Preço"}),d.map(e=>ae.jsx("td",{className:"py-3 px-6 text-center font-bold text-lg",children:h(e,r).label},e.id))]}),ae.jsxs("tr",{className:"bg-blue-50/60",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Moedas suportadas"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"70+"})]}),ae.jsxs("tr",{className:"bg-white/60",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Plataformas integradas"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"Todas"})]}),ae.jsxs("tr",{className:"bg-blue-50/60",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Gateways de pagamento"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"2"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"4"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"Todos"})]}),ae.jsxs("tr",{className:"bg-white/60",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Cálculos por mês"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"10"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"Ilimitado"})]}),ae.jsxs("tr",{className:"bg-blue-50/60",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Suporte"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"E-mail"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"Prioritário"})]}),ae.jsxs("tr",{className:"bg-white/60 rounded-b-3xl",children:[ae.jsx("td",{className:"py-3 px-6 text-gray-700 text-base font-medium",children:"Segurança avançada"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:"—"}),ae.jsx("td",{className:"py-3 px-6 text-center",children:ae.jsx(N,{className:"w-6 h-6 text-green-500 mx-auto"})})]})]})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl mt-10",children:[ae.jsx(m,{className:"w-16 h-16 mx-auto mb-6 opacity-90 animate-bounce"}),ae.jsx("h3",{className:"text-2xl font-extrabold mb-3 tracking-tight",children:"💡 Dica Especial"}),ae.jsxs("p",{className:"opacity-95 text-lg",children:["Com o ",ae.jsx("span",{className:"font-bold text-yellow-200",children:"DropCalc Premium"}),", você economiza tempo e maximiza seus lucros com cálculos automáticos, integração completa e segurança avançada."]})]})]})})},wl={basic:{maxCurrencies:2,maxPlatforms:2,maxGateways:2,maxCalculationsPerMonth:10,hasAutoCalc:!1,hasExchangeUpdate:!1,hasAI:!1,hasHistory:!1,supportType:"email"},gold:{maxCurrencies:10,maxPlatforms:4,maxGateways:4,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!1,hasHistory:!1,supportType:"email"},premium:{maxCurrencies:70,maxPlatforms:99,maxGateways:99,maxCalculationsPerMonth:null,hasAutoCalc:!0,hasExchangeUpdate:!0,hasAI:!0,hasHistory:!0,supportType:"priority"}};const vl=({text:e,children:t})=>{const[a,s]=r.useState(!1);return ae.jsxs("div",{className:"relative inline-block",children:[ae.jsx("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"cursor-help",children:t}),a&&ae.jsxs("div",{className:"absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 max-w-xs",children:[e,ae.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"})]})]})},Nl=()=>{const{plan:t,limits:r,isBasic:a,isGold:s,isPremium:n}=function(){const t=localStorage.getItem("userPlan")||"basic",r=e.useMemo(()=>wl[t],[t]);return{plan:t,limits:r,isBasic:"basic"===t,isGold:"gold"===t,isPremium:"premium"===t}}(),i=r,l=a,c=o(),{t:d}=ce(),{user:m,logout:g,refreshAuth:f}=Qn();console.log("🎯 DashboardSimples - Estado atual:",{user:!!m,userEmail:m?.email,userName:m?.name,plan:!!t,planType:t,planName:t}),e.useEffect(()=>{const e=localStorage.getItem("accessToken"),t=localStorage.getItem("currentUser");if(console.log("🔍 DashboardSimples - Verificação de auth:",{hasToken:!!e,hasUserData:!!t}),!e||!t)return console.log("❌ Não autenticado, redirecionando para login"),void c("/login");!m&&t&&(console.log("🔄 Fazendo refresh do auth..."),f())},[m,c,f]);const[x,y]=e.useState(""),[b,w]=e.useState(()=>{try{const e=localStorage.getItem("calculadora-historico");return e?JSON.parse(e):[]}catch{return[]}}),[v,N]=e.useState("5.00"),[C,k]=e.useState("4.70"),[S,j]=e.useState("25"),[L,D]=e.useState("0"),[M,U]=e.useState("3"),[F,B]=e.useState("shopify"),[H,$]=e.useState("stripe"),[V,z]=e.useState("USD"),[G,q]=e.useState("USD"),[W,J]=e.useState(null),[K,Z]=e.useState(!1),[X,Y]=e.useState(!1),[Q,ee]=e.useState(!1),[te,re]=e.useState(()=>{try{const e=localStorage.getItem("calculations-used-this-month");return e?parseInt(e):0}catch{return 0}});e.useEffect(()=>{},[]);const se=[{id:"shopify",nome:"Shopify",taxa:2.9},{id:"nuvemshop",nome:"Nuvem Shop",taxa:3.5},{id:"woocommerce",nome:"WooCommerce",taxa:0},{id:"magento",nome:"Magento",taxa:0},{id:"opencart",nome:"OpenCart",taxa:0},{id:"prestashop",nome:"PrestaShop",taxa:0},{id:"mercadolivre",nome:"Mercado Livre",taxa:13.99},{id:"amazon",nome:"Amazon Brasil",taxa:15},{id:"americanas",nome:"Americanas",taxa:17},{id:"submarino",nome:"Submarino",taxa:17},{id:"casasbahia",nome:"Casas Bahia",taxa:18},{id:"extra",nome:"Extra",taxa:16},{id:"pontofrio",nome:"Ponto Frio",taxa:17},{id:"shopee",nome:"Shopee",taxa:12},{id:"aliexpress",nome:"AliExpress",taxa:8},{id:"wish",nome:"Wish",taxa:15},{id:"etsy",nome:"Etsy",taxa:6.5},{id:"ebay",nome:"eBay",taxa:10},{id:"facebook",nome:"Facebook Shop",taxa:5},{id:"instagram",nome:"Instagram Shop",taxa:5},{id:"tiktok",nome:"TikTok Shop",taxa:6},{id:"elo7",nome:"Elo7",taxa:12},{id:"enjoei",nome:"Enjoei",taxa:15},{id:"olx",nome:"OLX",taxa:0},{id:"vinted",nome:"Vinted",taxa:7},{id:"shein",nome:"Shein",taxa:10},{id:"temu",nome:"Temu",taxa:8},{id:"zoom",nome:"Zoom",taxa:5},{id:"buscape",nome:"Buscapé",taxa:8},{id:"personalizado",nome:"Site Personalizado",taxa:0}],ne=[{id:"stripe",nome:"Stripe",taxa:3.4},{id:"pagseguro",nome:"PagSeguro",taxa:3.99},{id:"mercadopago",nome:"Mercado Pago",taxa:4.99},{id:"paypal",nome:"PayPal",taxa:4.4},{id:"cielo",nome:"Cielo",taxa:3.25},{id:"rede",nome:"Rede",taxa:3.5},{id:"getnet",nome:"Getnet",taxa:3.2},{id:"stone",nome:"Stone",taxa:2.95},{id:"adyen",nome:"Adyen",taxa:2.9},{id:"wirecard",nome:"Wirecard",taxa:3.8},{id:"iugu",nome:"Iugu",taxa:4.5},{id:"pagar.me",nome:"Pagar.me",taxa:4.99},{id:"picpay",nome:"PicPay",taxa:3.99},{id:"asaas",nome:"Asaas",taxa:3.5},{id:"gerencianet",nome:"Gerencianet",taxa:4.2},{id:"moip",nome:"Moip",taxa:4.69},{id:"ebanx",nome:"EBANX",taxa:4.2},{id:"checkout",nome:"Checkout.com",taxa:2.95},{id:"rakuten",nome:"Rakuten Pay",taxa:4.5},{id:"ifood",nome:"iFood Pay",taxa:5.2},{id:"shipay",nome:"SiPay",taxa:3.8},{id:"zoop",nome:"Zoop",taxa:3.59},{id:"vindi",nome:"Vindi",taxa:3.99},{id:"yapay",nome:"YaPay",taxa:4.1},{id:"pagarme",nome:"Pagar.me",taxa:4.99}],oe=se.slice(0,i.maxPlatforms),ie=[{codigo:"USD",nome:"Dólar Americano"},{codigo:"EUR",nome:"Euro"},{codigo:"GBP",nome:"Libra Esterlina"},{codigo:"CNY",nome:"Yuan Chinês"},{codigo:"JPY",nome:"Iene Japonês"},{codigo:"CAD",nome:"Dólar Canadense"},{codigo:"AUD",nome:"Dólar Australiano"},{codigo:"CHF",nome:"Franco Suíço"},{codigo:"SEK",nome:"Coroa Sueca"},{codigo:"NOK",nome:"Coroa Norueguesa"},{codigo:"DKK",nome:"Coroa Dinamarquesa"},{codigo:"PLN",nome:"Zloty Polonês"},{codigo:"CZK",nome:"Coroa Tcheca"},{codigo:"HUF",nome:"Forint Húngaro"},{codigo:"RON",nome:"Leu Romeno"},{codigo:"BGN",nome:"Lev Búlgaro"},{codigo:"HRK",nome:"Kuna Croata"},{codigo:"RUB",nome:"Rublo Russo"},{codigo:"TRY",nome:"Lira Turca"},{codigo:"ILS",nome:"Shekel Israelense"},{codigo:"ZAR",nome:"Rand Sul-Africano"},{codigo:"INR",nome:"Rupia Indiana"},{codigo:"KRW",nome:"Won Sul-Coreano"},{codigo:"SGD",nome:"Dólar de Singapura"},{codigo:"HKD",nome:"Dólar de Hong Kong"},{codigo:"THB",nome:"Baht Tailandês"},{codigo:"MYR",nome:"Ringgit Malaio"},{codigo:"IDR",nome:"Rupia Indonésia"},{codigo:"PHP",nome:"Peso Filipino"},{codigo:"VND",nome:"Dong Vietnamita"},{codigo:"BDT",nome:"Taka de Bangladesh"},{codigo:"PKR",nome:"Rupia Paquistanesa"},{codigo:"LKR",nome:"Rupia do Sri Lanka"},{codigo:"NPR",nome:"Rupia Nepalesa"},{codigo:"MVR",nome:"Rufiyaa das Maldivas"},{codigo:"BTN",nome:"Ngultrum do Butão"},{codigo:"AFN",nome:"Afghani Afegão"},{codigo:"IRR",nome:"Rial Iraniano"},{codigo:"IQD",nome:"Dinar Iraquiano"},{codigo:"JOD",nome:"Dinar Jordaniano"},{codigo:"KWD",nome:"Dinar Kuwaitiano"},{codigo:"LBP",nome:"Libra Libanesa"},{codigo:"SAR",nome:"Riyal Saudita"},{codigo:"AED",nome:"Dirham dos Emirados"},{codigo:"QAR",nome:"Riyal do Catar"},{codigo:"OMR",nome:"Rial de Omã"},{codigo:"BHD",nome:"Dinar do Bahrein"},{codigo:"YER",nome:"Rial Iemenita"},{codigo:"SYP",nome:"Libra Síria"},{codigo:"EGP",nome:"Libra Egípcia"},{codigo:"LYD",nome:"Dinar Líbio"},{codigo:"TND",nome:"Dinar Tunisiano"},{codigo:"DZD",nome:"Dinar Argelino"},{codigo:"MAD",nome:"Dirham Marroquino"},{codigo:"NGN",nome:"Naira Nigeriana"},{codigo:"GHS",nome:"Cedi Ganês"},{codigo:"KES",nome:"Xelim Queniano"},{codigo:"UGX",nome:"Xelim Ugandense"},{codigo:"TZS",nome:"Xelim Tanzaniano"},{codigo:"ETB",nome:"Birr Etíope"},{codigo:"RWF",nome:"Franco Ruandês"},{codigo:"MXN",nome:"Peso Mexicano"},{codigo:"GTQ",nome:"Quetzal Guatemalteco"},{codigo:"HNL",nome:"Lempira Hondurenha"},{codigo:"NIO",nome:"Córdoba Nicaraguense"},{codigo:"CRC",nome:"Colón Costa-riquenho"},{codigo:"PAB",nome:"Balboa Panamenha"},{codigo:"COP",nome:"Peso Colombiano"},{codigo:"VES",nome:"Bolívar Venezuelano"},{codigo:"GYD",nome:"Dólar Guianense"},{codigo:"SRD",nome:"Dólar Surinamês"},{codigo:"PEN",nome:"Sol Peruano"},{codigo:"BOB",nome:"Boliviano"},{codigo:"PYG",nome:"Guarani Paraguaio"},{codigo:"UYU",nome:"Peso Uruguaio"},{codigo:"ARS",nome:"Peso Argentino"},{codigo:"CLP",nome:"Peso Chileno"},{codigo:"BRL",nome:"Real Brasileiro"}].slice(0,i.maxCurrencies),le=ne.slice(0,i.maxGateways),de=e=>({USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[e]||e);e.useEffect(()=>{},[]);const ue=async()=>{if(ee(!0),!v||!M)return J(null),void ee(!1);if(i.maxCalculationsPerMonth&&te>=i.maxCalculationsPerMonth)return alert(`Limite de ${i.maxCalculationsPerMonth} cálculos por mês atingido! Faça upgrade para continuar calculando.`),void ee(!1);Y(!0);try{const e=parseFloat(v),t=parseFloat(M),r=parseFloat(S),a=parseFloat(L)||0,s=parseFloat(C)||0,n=((e,t)=>{if(e===t)return 1;const r={BRL:5.2,EUR:.92,GBP:.8,JPY:150,CNY:7.3,CAD:1.35,AUD:1.55,CHF:.9,SEK:10.5,NOK:10.8,MXN:18.5,ARS:365,CLP:900,COP:4100,PEN:3.75,INR:83.5,KRW:1320,THB:36,SGD:1.35,HKD:7.8};return"USD"===e?r[t]||1:"USD"===t?1/(r[e]||1):1/(r[e]||1)*(r[t]||1)})(V,G),o=se.find(e=>e.id===F),i=ne.find(e=>e.id===H),l=o?.taxa||2.9,c=i?.taxa||3.4,d=e*n,u=d*t,h=d+s*n+a*n,p=u*(c/100),m=u*(l/100),g=u*(r/100),f=p+m+g,x=u-h-f,y=h+f,b=[1,10,50,100,500,1e3].map(e=>({quantidade:e,lucro:x*e}));J({precoVenda:u,custoTotal:h,custoFornecedor:d,markup:t,taxaCambio:n,lucroLiquido:x,breakeven:y,taxas:{gateway:{percentual:c,valor:p},plataforma:{percentual:l,valor:m},marketing:{percentual:r,valor:g},extra:{percentual:0,valor:0},total:f},projecoes:b,percentuais:{custoMedio:h/u*100,marketing:r,margemContrib:x/u*100,breakeven:y/u*100}});const w=te+1;re(w),localStorage.setItem("calculations-used-this-month",w.toString())}catch(e){console.error("Erro no cálculo:",e),J(null)}finally{Y(!1),ee(!1)}};e.useEffect(()=>{i&&(ie.length>0&&!ie.map(e=>e.codigo).includes(V)&&z(ie[0].codigo||"USD"),ie.length>0&&!ie.map(e=>e.codigo).includes(G)&&q(ie[0].codigo||"USD"),oe.length>0&&!oe.map(e=>e.id).includes(F)&&B(oe[0].id||"shopify"),le.length>0&&!le.map(e=>e.id).includes(H)&&$(le[0].id||"stripe"))},[t,i,V,G,F,H]),e.useEffect(()=>{if(!l){const e=setTimeout(()=>{ue()},500);return()=>clearTimeout(e)}null!==W&&J(null)},[v,C,S,L,M,F,H,V,G,l]);const he=async()=>{try{console.log("🚪 Iniciando logout..."),localStorage.clear(),await g(),console.log("✅ Logout concluído, redirecionando..."),window.location.href="/welcome"}catch(e){console.error("❌ Erro no logout:",e),localStorage.clear(),window.location.href="/welcome"}};return ae.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900",children:[ae.jsx("header",{className:"bg-white/20 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200/20 dark:border-white/10",children:ae.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:ae.jsxs("div",{className:"flex justify-between items-center h-16",children:[ae.jsxs("div",{className:"flex items-center",children:[ae.jsx(h,{className:"h-8 w-8 text-purple-400 mr-3"}),ae.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"DropCalc"})]}),ae.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[ae.jsxs("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:[d("calc.welcome"),", ",m?.name||"Usuário","!",!1]}),t&&ae.jsxs("span",{className:"px-2 py-1 text-xs font-bold rounded-full flex items-center "+(n?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":s?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[ae.jsx(E,{className:"w-3 h-3 mr-1"}),t.toUpperCase()]}),ae.jsx("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano, navegando para /payment"),c("/payment")},className:"px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors",children:t?"Alterar Plano":"Escolher Plano"}),ae.jsx("button",{onClick:()=>c("/help"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",title:"Ajuda",children:ae.jsx(I,{className:"w-5 h-5 text-gray-600 dark:text-white transition-colors"})}),ae.jsx("button",{onClick:()=>c("/settings"),className:"p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:ae.jsx(_,{className:"w-5 h-5"})}),ae.jsx("button",{onClick:he,className:"px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors",children:d("nav.logout")})]}),ae.jsx("button",{onClick:()=>Z(!K),className:"md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",children:K?ae.jsx(T,{className:"w-6 h-6"}):ae.jsx(P,{className:"w-6 h-6"})})]})})}),ae.jsx(A,{children:K&&ae.jsx(u.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-black/30 backdrop-blur-sm border-b border-white/10",children:ae.jsxs("div",{className:"px-4 py-4 space-y-2",children:[ae.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:[d("calc.welcome"),", ",m?.name||d("calc.user"),"!"]}),t&&ae.jsxs("div",{className:"inline-flex px-2 py-1 text-xs font-bold rounded-full items-center mb-2 "+(n?"bg-gradient-to-r from-yellow-400 to-orange-500 text-black":s?"bg-gradient-to-r from-yellow-300 to-yellow-500 text-black":"bg-gradient-to-r from-gray-400 to-gray-600 text-white"),children:[ae.jsx(E,{className:"w-3 h-3 mr-1"}),t.toUpperCase()]}),ae.jsxs("button",{onClick:()=>{console.log("🎯 Clicou em Alterar Plano (mobile), navegando para /payment"),c("/payment"),Z(!1)},className:"flex items-center w-full p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors",children:[ae.jsx(E,{className:"w-4 h-4 mr-2"}),t?"Alterar Plano":"Escolher Plano"]}),ae.jsxs("button",{onClick:()=>{c("/help"),Z(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[ae.jsx(I,{className:"w-4 h-4 mr-2 text-gray-600 dark:text-white transition-colors"}),"Ajuda"]}),ae.jsxs("button",{onClick:()=>{c("/settings"),Z(!1)},className:"flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",children:[ae.jsx(_,{className:"w-4 h-4 mr-2"}),d("nav.settings")]}),ae.jsx("button",{onClick:he,className:"flex items-center w-full p-2 text-red-400 hover:text-red-300 transition-colors",children:d("nav.logout")})]})})}),ae.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:ae.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[ae.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[ae.jsx(h,{className:"w-6 h-6 mr-2 text-purple-400"}),d("calc.title"),X&&ae.jsx("span",{className:"ml-3 text-sm text-yellow-400 animate-pulse",children:d("calc.loading")})]}),null!==i.maxCalculationsPerMonth&&ae.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4",children:[ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-700 dark:text-blue-300 font-medium",children:"Cálculos restantes este mês:"}),ae.jsxs("span",{className:"font-bold "+((i.maxCalculationsPerMonth||10)-te<=2?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"),children:[(i.maxCalculationsPerMonth||10)-te," de ",i.maxCalculationsPerMonth||10]})]}),(i.maxCalculationsPerMonth||10)-te<=2&&ae.jsx("p",{className:"text-xs text-orange-600 dark:text-orange-400 mt-1",children:"Poucos cálculos restantes! Considere fazer upgrade para continuar usando."})]}),ae.jsxs("div",{className:"space-y-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.productName"),ae.jsx(vl,{text:d("tooltip.productName"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"text",className:"w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500",placeholder:d("calc.productName"),value:x,onChange:e=>y(e.target.value)})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.productCost")," (",V,")",ae.jsx(vl,{text:d("tooltip.productCost"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:v,onChange:e=>N(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 16.73",step:"0.01"})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.originCurrency"),ae.jsx(vl,{text:d("tooltip.originCurrency"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:V,onChange:e=>z(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ie.map(e=>ae.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))}),!n&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.saleCurrency"),ae.jsx(vl,{text:d("tooltip.saleCurrency"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:G,onChange:e=>q(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:ie.map(e=>ae.jsxs("option",{value:e.codigo,children:[e.codigo," - ",e.nome]},e.codigo))}),!n&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: 2 moedas":"Plano Gold: 10 moedas"," - Upgrade para Premium para todas as moedas"]})]})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.additionalCosts")," (",V,")",ae.jsx(vl,{text:d("tooltip.additionalCosts"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:C,onChange:e=>k(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 5.00",step:"0.01"})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.profitMargin"),ae.jsx(vl,{text:d("tooltip.profitMargin"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:M,onChange:e=>U(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 4.12",step:"0.01",min:"1"})]})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Marketing (%)",ae.jsx(vl,{text:d("tooltip.marketing"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:S,onChange:e=>j(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 25",step:"0.1",min:"0",max:"100"})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:["Custo Extra (",V,")",ae.jsx(vl,{text:d("tooltip.extraCost"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("input",{type:"number",value:L,onChange:e=>D(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400",placeholder:"Ex: 2.00",step:"0.01"})]})]}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.platform"),ae.jsx(vl,{text:d("tooltip.platform"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:F,onChange:e=>B(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:oe.map(e=>ae.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))}),!n&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: Apenas Shopify e Nuvem Shop":"Plano Gold: Plataformas limitadas"," - Upgrade para Premium para todas as plataformas"]})]}),ae.jsxs("div",{children:[ae.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center",children:[d("calc.paymentGateway"),ae.jsx(vl,{text:d("tooltip.gateway"),children:ae.jsx(R,{className:"w-4 h-4 ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"})})]}),ae.jsx("select",{value:H,onChange:e=>$(e.target.value),className:"w-full p-3 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white max-h-40 overflow-y-auto",style:{fontSize:"14px",colorScheme:"light dark"},children:le.map(e=>ae.jsxs("option",{value:e.id,children:[e.nome," (",e.taxa,"%)"]},e.id))}),!n&&ae.jsxs("p",{className:"text-xs text-yellow-600 dark:text-yellow-400 mt-1",children:[a?"Plano Básico: Apenas Stripe e PayPal":"Plano Gold: 4 gateways principais"," - Upgrade para Premium para todos os gateways"]})]})]}),l&&ae.jsx("div",{className:"mt-6",children:ae.jsxs("button",{onClick:ue,disabled:Q||!v||!M,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center text-lg",children:[ae.jsx(h,{className:"h-5 w-5 mr-2"}),Q?"Calculando...":"Calcular Preço"]})}),ae.jsx("div",{className:"mt-4 p-4 rounded-lg "+(l?"bg-orange-50 dark:bg-orange-900/20":"bg-green-50 dark:bg-green-900/20"),children:ae.jsxs("p",{className:"text-sm flex items-center "+(l?"text-orange-600 dark:text-orange-400":"text-green-600 dark:text-green-400"),children:[ae.jsx(p,{className:"h-4 w-4 mr-2"}),l?'Plano Básico - Clique no botão "Calcular Preço" para obter o resultado':"Cálculo automático ativado - O preço é atualizado em tempo real"]})})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/20 shadow-lg",children:[ae.jsxs("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",children:[ae.jsx(p,{className:"w-6 h-6 mr-2 text-green-400"}),d("calc.calculationResult")]}),W?ae.jsxs("div",{className:"space-y-6",children:[ae.jsx("div",{className:"bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4",children:ae.jsxs("div",{className:"text-center",children:[ae.jsx("p",{className:"text-green-100 text-sm",children:d("calc.suggestedPrice")}),ae.jsxs("p",{className:"text-3xl font-bold text-white",children:[de(G)," ",W.precoVenda.toFixed(2)]}),ae.jsxs("p",{className:"text-green-200 text-xs mt-1",children:[d("calc.exchangeRate"),": 1 ",V," = ",W.taxaCambio.toFixed(4)," ",G]})]})}),ae.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3",children:ae.jsxs("div",{className:"flex flex-wrap justify-center gap-4 text-sm",children:[ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Plataforma:"}),ae.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:se.find(e=>e.id===F)?.nome||F})]}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"text-blue-600 dark:text-blue-400 font-medium",children:"Gateway:"}),ae.jsx("span",{className:"ml-1 text-blue-800 dark:text-blue-300 font-semibold",children:ne.find(e=>e.id===H)?.nome||H})]})]})}),ae.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[ae.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[ae.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:d("calc.pricing")}),ae.jsxs("div",{className:"space-y-2 text-sm",children:[ae.jsxs("div",{className:"flex justify-between items-center bg-green-600 text-white px-2 py-1 rounded",children:[ae.jsxs("span",{className:"flex items-center",children:[d("calc.sellingPrice"),":",ae.jsx(vl,{text:d("tooltip.resultSellingPrice"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{children:[de(G)," ",W.precoVenda.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center bg-red-500 text-white px-2 py-1 rounded",children:[ae.jsxs("span",{className:"flex items-center",children:[d("calc.supplierCost"),":",ae.jsx(vl,{text:d("tooltip.resultSupplierCost"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{children:[de(G)," ",W.custoFornecedor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center bg-gray-500 text-white px-2 py-1 rounded",children:[ae.jsxs("span",{className:"flex items-center",children:[d("calc.markupLabel"),":",ae.jsx(vl,{text:d("tooltip.resultMarkup"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsx("span",{children:W.markup.toFixed(8)})]})]}),ae.jsx("h4",{className:"text-white font-bold text-center bg-blue-600 text-sm py-2 mt-4 mb-2 rounded",children:d("calc.taxes")}),ae.jsxs("div",{className:"space-y-1 text-sm",children:[ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:ne.find(e=>e.id===H)?.nome||H}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[W.taxas.gateway.percentual.toFixed(2),"%"]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.taxas.gateway.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:se.find(e=>e.id===F)?.nome||F}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[W.taxas.plataforma.percentual.toFixed(2),"%"]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.taxas.plataforma.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:d("calc.marketing")}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[W.taxas.marketing.percentual,"%"]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.taxas.marketing.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsx("span",{className:"text-blue-400",children:d("calc.extra")}),ae.jsx("span",{className:"text-gray-900 dark:text-white",children:"0%"}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.taxas.extra.valor.toFixed(2)]})]}),ae.jsxs("div",{className:"flex justify-center bg-green-600 text-white px-2 py-1 rounded font-bold",children:[de(G)," ",W.taxas.total.toFixed(2)]})]})]}),ae.jsxs("div",{className:"bg-black/30 rounded-lg p-4",children:[ae.jsx("h3",{className:"text-white font-bold text-center bg-black text-sm py-2 mb-4 rounded",children:d("calc.importantValues")}),ae.jsxs("div",{className:"space-y-2 text-sm",children:[ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.saleValue"),ae.jsx(vl,{text:d("tooltip.resultSaleValue"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.precoVenda.toFixed(2)]}),ae.jsx("span",{className:"text-green-600 dark:text-green-400",children:"100,00%"})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.averageCost"),ae.jsx(vl,{text:d("tooltip.resultAverageCost"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.custoTotal.toFixed(2)]}),ae.jsxs("span",{className:"text-red-400",children:[W.percentuais.custoMedio.toFixed(2),"%"]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.marketing"),ae.jsx(vl,{text:d("tooltip.resultMarketing"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.taxas.marketing.valor.toFixed(2)]}),ae.jsxs("span",{className:"text-yellow-400",children:[W.percentuais.marketing.toFixed(2),"%"]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.contributionMargin"),ae.jsx(vl,{text:d("tooltip.resultContributionMargin"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.lucroLiquido.toFixed(2)]}),ae.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[W.percentuais.margemContrib.toFixed(2),"%"]})]}),ae.jsxs("div",{className:"flex justify-between items-center",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300 flex items-center",children:[d("calc.breakeven"),ae.jsx(vl,{text:d("tooltip.resultBreakeven"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"text-gray-900 dark:text-white",children:[de(G)," ",W.breakeven.toFixed(2)]}),ae.jsxs("span",{className:"text-orange-400",children:[W.percentuais.breakeven.toFixed(2),"%"]})]})]}),ae.jsx("h4",{className:"text-white font-bold text-center bg-green-600 text-sm py-2 mt-4 mb-2 rounded",children:d("calc.sales")}),ae.jsxs("div",{className:"flex justify-between text-sm font-bold text-green-600 dark:text-green-400 mb-2",children:[ae.jsxs("span",{className:"flex items-center",children:[d("calc.units"),":",ae.jsx(vl,{text:d("tooltip.resultUnits"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]}),ae.jsxs("span",{className:"flex items-center",children:[d("calc.profitLabel"),ae.jsx(vl,{text:d("tooltip.resultProfit"),children:ae.jsx(R,{className:"w-3 h-3 ml-1"})})]})]}),ae.jsx("div",{className:"space-y-1 text-sm",children:W.projecoes.map((e,t)=>ae.jsxs("div",{className:"flex justify-between items-center bg-green-100/10 px-2 py-1 rounded",children:[ae.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[d("calc.units"),":"]}),ae.jsx("span",{className:"text-gray-900 dark:text-white font-bold",children:e.quantidade}),ae.jsxs("span",{className:"text-green-600 dark:text-green-400",children:[de(G)," ",e.lucro.toFixed(2)]})]},t))})]})]}),i?.hasHistory&&ae.jsx("div",{className:"text-center",children:ae.jsxs("button",{onClick:()=>{if(!W)return;if(!i?.hasHistory)return void alert("Histórico disponível apenas no plano Premium. Faça upgrade para salvar seus cálculos!");const e=[{id:Date.now().toString(),nomeProduto:x||"Produto sem nome",precoVenda:W.precoVenda,moedaDestino:G,plataforma:F,gateway:H,dataCalculo:(new Date).toLocaleString("pt-BR"),detalhes:W},...b].slice(0,50);w(e),localStorage.setItem("calculadora-historico",JSON.stringify(e)),alert(d("calc.calculationSaved"))},className:"bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto",children:[ae.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:ae.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})}),d("calc.saveCalculation")]})}),!i?.hasHistory&&ae.jsxs("div",{className:"text-center bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4",children:[ae.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm mb-2",children:"💾 Histórico de cálculos disponível apenas no plano Premium"}),ae.jsx("button",{onClick:()=>c("/payment"),className:"bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm",children:"Fazer Upgrade Premium"})]})]}):X?ae.jsxs("div",{className:"text-center py-12",children:[ae.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"}),ae.jsx("p",{className:"text-purple-400 font-medium",children:d("calc.loading")})]}):v&&M?ae.jsxs("div",{className:"text-center py-12",children:[ae.jsx(O,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:d("calc.enterValuesMessage")})]}):ae.jsxs("div",{className:"text-center py-12",children:[ae.jsx(O,{className:"w-16 h-16 text-gray-500 mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:d("calc.fillFieldsMessage")})]})]})]})})]})},Cl=()=>ae.jsx(Nl,{}),kl=()=>{const t=o(),[r,a]=e.useState(null),s=[{id:"calculator",title:"Como usar a calculadora de precificação",icon:ae.jsx(h,{className:"w-5 h-5"}),content:["1. Digite o custo do produto na moeda de origem (ex: USD)","2. Adicione custos extras como frete, impostos ou taxas","3. Selecione a plataforma onde vai vender (Shopify, Mercado Livre, etc.)","4. Escolha o gateway de pagamento (Mercado Pago, PIX, etc.)","5. Defina sua margem de lucro desejada (%)","6. O preço final será calculado automaticamente em tempo real!"],videoUrl:"#"},{id:"products",title:"Como cadastrar produtos",icon:ae.jsx(F,{className:"w-5 h-5"}),content:["1. Acesse a calculadora principal no dashboard","2. Preencha todas as informações do produto",'3. Use o botão "Salvar" para guardar os dados do produto',"4. Seus produtos salvos aparecerão na lista para reutilização","5. Você pode editar ou duplicar produtos existentes",'6. Use a função "Limpar" para começar um novo cálculo']},{id:"margins",title:"Como entender margens e taxas",icon:ae.jsx(p,{className:"w-5 h-5"}),content:["• Margem de Lucro: Percentual que você quer ganhar sobre o custo total","• Taxa da Plataforma: Comissão cobrada pela plataforma de venda","• Taxa do Gateway: Taxa do meio de pagamento escolhido","• Taxa de Câmbio: Conversão entre moedas (atualizada em tempo real)","• Custos Adicionais: Frete, impostos, embalagem, etc.","• Preço Final: Valor que você deve cobrar do cliente"]},{id:"premium",title:"Como ativar o plano Premium",icon:ae.jsx(E,{className:"w-5 h-5"}),content:['1. Clique em "Ativar Premium" no menu principal',"2. Revise os recursos inclusos no plano Premium",'3. Clique em "Comprar com Mercado Pago"',"4. Complete o pagamento através do Mercado Pago","5. Seu acesso Premium será ativado automaticamente","6. Aproveite todos os recursos avançados da calculadora!"]}];return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:ae.jsxs("div",{className:"container mx-auto px-4 py-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[ae.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 transition-colors",children:ae.jsx(L,{className:"w-6 h-6 text-gray-600"})}),ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(I,{className:"w-8 h-8 text-blue-600"}),ae.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Central de Ajuda"})]})]}),ae.jsxs("div",{className:"max-w-4xl mx-auto",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8",children:[ae.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-3",children:"Bem-vindo à Central de Ajuda do DropCalc! 👋"}),ae.jsx("p",{className:"text-gray-600",children:"Aqui você encontra tutoriais completos, dicas práticas e tudo que precisa para dominar a calculadora de precificação e maximizar seus lucros no dropshipping."})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"space-y-4 mb-8",children:[ae.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"📚 Tutoriais Passo a Passo"}),s.map((e,t)=>ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden",children:[ae.jsxs("button",{onClick:()=>{return t=e.id,void a(r===t?null:t);var t},className:"w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors",children:[ae.jsxs("div",{className:"flex items-center gap-4",children:[ae.jsx("div",{className:"p-2 bg-blue-100 rounded-lg text-blue-600",children:e.icon}),ae.jsx("h3",{className:"text-lg font-semibold text-gray-800 text-left",children:e.title})]}),ae.jsx(u.div,{animate:{rotate:r===e.id?90:0},transition:{duration:.2},children:ae.jsx(D,{className:"w-5 h-5 text-gray-500"})})]}),ae.jsx(A,{children:r===e.id&&ae.jsx(u.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"border-t border-gray-200",children:ae.jsxs("div",{className:"p-6 pt-4",children:[ae.jsx("div",{className:"space-y-3 mb-4",children:e.content.map((e,t)=>ae.jsx(u.p,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},className:"text-gray-700",children:e},t))}),e.videoUrl&&ae.jsxs(u.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",children:[ae.jsx(M,{className:"w-5 h-5"}),"Assistir vídeo tutorial"]})]})})})]},e.id))]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mb-8",children:[ae.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"💡 Dicas Rápidas"}),ae.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:[{title:"Dica de Margem",content:"Para dropshipping, recomendamos margens entre 30-50% para cobrir custos inesperados."},{title:"Conversão de Moedas",content:"As taxas de câmbio são atualizadas em tempo real para garantir precisão nos cálculos."},{title:"Múltiplas Plataformas",content:"Cada plataforma tem taxas diferentes. Compare os resultados antes de escolher onde vender."},{title:"Custos Ocultos",content:'Sempre inclua custos como frete, impostos e embalagem nos "Custos Adicionais".'}].map((e,t)=>ae.jsxs(u.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.7+.1*t},className:"bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg",children:[ae.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:e.title}),ae.jsx("p",{className:"text-gray-600 text-sm",children:e.content})]},t))})]}),ae.jsxs(u.form,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center",onSubmit:async e=>{e.preventDefault();const t=e.target,r=new FormData(t),a=r.get("nome"),s=r.get("email"),n=r.get("mensagem");try{await fetch("https://formspree.io/f/xwkzqgqg",{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify({nome:a,email:s,mensagem:n})}),alert("Mensagem enviada com sucesso!"),t.reset()}catch{alert("Erro ao enviar mensagem. Tente novamente.")}},children:[ae.jsx(U,{className:"w-12 h-12 mx-auto mb-4 opacity-80"}),ae.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ainda precisa de ajuda?"}),ae.jsx("p",{className:"mb-4 opacity-90",children:"Nossa equipe de suporte está sempre pronta para ajudar você a aproveitar ao máximo o DropCalc."}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",children:[ae.jsx("input",{name:"nome",required:!0,placeholder:"Seu nome",className:"p-3 rounded-xl text-gray-800"}),ae.jsx("input",{name:"email",required:!0,type:"email",placeholder:"Seu e-mail",className:"p-3 rounded-xl text-gray-800"}),ae.jsx("input",{name:"mensagem",required:!0,placeholder:"Sua mensagem",className:"p-3 rounded-xl text-gray-800"})]}),ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",className:"bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Enviar Mensagem"})]})]})]})})};const Sl=()=>{const{t:t}=ce(),[r,a]=e.useState([]);e.useEffect(()=>{try{const e=localStorage.getItem("calculadora-historico");e&&a(JSON.parse(e))}catch{a([])}},[]);return 0===r.length?ae.jsxs("div",{className:"text-center py-8 text-gray-500",children:[ae.jsx(q,{className:"w-12 h-12 mx-auto mb-3 opacity-50"}),ae.jsx("p",{children:t("calc.noHistory")})]}):ae.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:r.map(e=>{return ae.jsx(u.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all",children:ae.jsxs("div",{className:"flex justify-between items-start",children:[ae.jsxs("div",{className:"flex-1",children:[ae.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:e.nomeProduto}),ae.jsxs("div",{className:"text-sm text-gray-600 space-y-1",children:[ae.jsxs("p",{children:[ae.jsx("span",{className:"font-medium",children:"Preço:"})," ",(s=e.moedaDestino,{USD:"$",EUR:"€",GBP:"£",BRL:"R$",JPY:"¥",CNY:"¥",CAD:"C$",AUD:"A$",CHF:"CHF",SEK:"kr",NOK:"kr",MXN:"$",ARS:"$",CLP:"$",COP:"$",PEN:"S/",INR:"₹",KRW:"₩",THB:"฿",SGD:"S$",HKD:"HK$"}[s]||s)," ",e.precoVenda.toFixed(2)]}),ae.jsxs("p",{children:[ae.jsx("span",{className:"font-medium",children:"Plataforma:"})," ",e.plataforma," | ",ae.jsx("span",{className:"font-medium",children:"Gateway:"})," ",e.gateway]}),ae.jsxs("p",{className:"text-xs text-gray-500",children:[t("calc.savedAt"),": ",e.dataCalculo]})]})]}),ae.jsx("button",{onClick:()=>(e=>{const t=r.filter(t=>t.id!==e);a(t),localStorage.setItem("calculadora-historico",JSON.stringify(t)),Ue.success("Cálculo excluído")})(e.id),className:"text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors",title:t("calc.deleteCalculation"),children:ae.jsx(W,{className:"w-4 h-4"})})]})},e.id);var s})})},jl=()=>{const t=o(),{theme:r,setTheme:a}=function(){const[t,r]=e.useState(()=>"undefined"!=typeof window&&localStorage.getItem("theme")||"light");return e.useEffect(()=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(t),localStorage.setItem("theme",t)},[t]),{theme:t,setTheme:r,isDark:"dark"===t,isLight:"light"===t}}(),{language:s,setLanguage:n,t:i}=ce(),[l,c]=e.useState(null),[d,h]=e.useState("basic"),[p,m]=e.useState({language:"pt",notifications:!0,isPremium:!1});e.useEffect(()=>{const e=localStorage.getItem("user");c(e?JSON.parse(e):null);const t=localStorage.getItem("userPlan");if(t)try{const e=JSON.parse(t);e&&"object"==typeof e&&e.type&&h(e.type)}catch{h("basic")}else h("basic");const r=s,a="true"===localStorage.getItem("notifications");m({language:r,notifications:a,isPremium:"premium"===d})},[s]);const g=e=>{a(e),Ue.success(`Tema ${"dark"===e?"escuro":"claro"} ativado!`)};return ae.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900",children:ae.jsxs("div",{className:"container mx-auto px-4 py-8",children:[ae.jsxs(u.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"flex items-center gap-4 mb-8",children:[ae.jsx("button",{onClick:()=>t(-1),className:"p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",children:ae.jsx(L,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})}),ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(_,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"}),ae.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:i("settings.title")})]})]}),ae.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[ae.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[ae.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center",children:ae.jsx(B,{className:"w-6 h-6 text-white"})}),ae.jsxs("div",{children:[ae.jsx("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:l?.name||"Usuário"}),ae.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:l?.email})]})]}),ae.jsx("div",{className:"flex items-center gap-2",children:"premium"===d?ae.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:[ae.jsx(E,{className:"w-4 h-4"}),"Premium Ativo"]}):"gold"===d?ae.jsxs("div",{className:"flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium",children:[ae.jsx(E,{className:"w-4 h-4"}),"Gold Ativo"]}):ae.jsxs("div",{className:"flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium",children:[ae.jsx(B,{className:"w-4 h-4"}),"Plano Básico"]})})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2",children:["dark"===r?ae.jsx(H,{className:"w-5 h-5"}):ae.jsx($,{className:"w-5 h-5"}),i("settings.theme")]}),ae.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>g("light"),className:"p-4 rounded-xl border-2 transition-all "+("light"===r?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[ae.jsx($,{className:"w-6 h-6 mx-auto mb-2 text-yellow-500"}),ae.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:i("settings.light")}),"light"===r&&ae.jsx(N,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]}),ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>g("dark"),className:"p-4 rounded-xl border-2 transition-all "+("dark"===r?"border-blue-500 bg-blue-50 dark:bg-blue-900/50":"border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"),children:[ae.jsx(H,{className:"w-6 h-6 mx-auto mb-2 text-blue-500"}),ae.jsx("p",{className:"font-medium text-gray-800 dark:text-white",children:i("settings.dark")}),"dark"===r&&ae.jsx(N,{className:"w-4 h-4 text-blue-500 mx-auto mt-1"})]})]})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[ae.jsx(V,{className:"w-5 h-5"}),i("settings.language")]}),ae.jsx("div",{className:"space-y-2",children:[{code:"pt",name:"Português",flag:"🇧🇷"},{code:"en",name:"English",flag:"🇺🇸"},{code:"es",name:"Español",flag:"🇪🇸"}].map(e=>ae.jsxs(u.button,{whileHover:{scale:1.01},whileTap:{scale:.99},onClick:()=>{return t=e.code,m(e=>({...e,language:t})),n(t),void Ue.success(i("msg.languageChanged"));var t},className:"w-full p-3 rounded-xl border-2 transition-all flex items-center gap-3 "+(p.language===e.code?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"),children:[ae.jsx("span",{className:"text-2xl",children:e.flag}),ae.jsx("span",{className:"font-medium text-gray-800",children:e.name}),p.language===e.code&&ae.jsx(N,{className:"w-4 h-4 text-blue-500 ml-auto"})]},e.code))})]}),ae.jsx(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:ae.jsxs("div",{className:"flex items-center justify-between",children:[ae.jsxs("div",{className:"flex items-center gap-3",children:[ae.jsx(z,{className:"w-5 h-5 text-gray-600"}),ae.jsxs("div",{children:[ae.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:i("settings.notifications")}),ae.jsx("p",{className:"text-gray-600 text-sm",children:"Receber alertas e atualizações"})]})]}),ae.jsx(u.button,{whileTap:{scale:.95},onClick:()=>{const e=!p.notifications;m(t=>({...t,notifications:e})),localStorage.setItem("notifications",e.toString()),Ue.success(`Notificações ${e?"ativadas":"desativadas"}!`)},className:"relative inline-flex h-6 w-11 items-center rounded-full transition-colors "+(p.notifications?"bg-blue-600":"bg-gray-300"),children:ae.jsx(u.span,{animate:{x:p.notifications?20:4},transition:{type:"spring",stiffness:500,damping:30},className:"inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"})})]})}),!p.isPremium&&ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white",children:[ae.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[ae.jsx(E,{className:"w-6 h-6"}),ae.jsx("h3",{className:"text-lg font-semibold",children:"Upgrade para Premium"})]}),ae.jsx("p",{className:"mb-4 opacity-90",children:"Desbloqueie todos os recursos da calculadora e tenha acesso completo às funcionalidades avançadas."}),ae.jsx(u.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("/payment"),className:"bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300",children:"Ativar Premium"})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[ae.jsx(_,{className:"w-5 h-5"}),i("calc.calculationHistory")]}),ae.jsx(Sl,{})]}),ae.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg",children:[ae.jsxs("h3",{className:"text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2",children:[ae.jsx(S,{className:"w-5 h-5"}),"Segurança"]}),ae.jsxs(u.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:async()=>{try{localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("premiumActive"),localStorage.removeItem("userPlan"),localStorage.removeItem("billingStatus"),Ue.success("Logout realizado com sucesso!"),t("/")}catch(e){Ue.error("Erro ao fazer logout")}},className:"w-full p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2 font-medium",children:[ae.jsx(G,{className:"w-5 h-5"}),i("settings.logout")]})]})]})]})})},El=()=>{const{loading:e,user:t}=Qn();return console.log("=== AppWithAuth carregando ==="),console.log("Loading:",e,"User:",t),e?ae.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:ae.jsxs("div",{className:"text-center",children:[ae.jsx("div",{className:"w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),ae.jsx("p",{className:"text-gray-600",children:"Carregando..."})]})}):ae.jsx(l,{children:ae.jsxs("div",{className:"App",children:[ae.jsxs(c,{children:[ae.jsx(d,{path:"/welcome",element:ae.jsx(to,{})}),ae.jsx(d,{path:"/login",element:ae.jsx(ro,{})}),ae.jsx(d,{path:"/login-simple",element:ae.jsx(ao,{})}),ae.jsx(d,{path:"/signup",element:ae.jsx(ro,{})}),ae.jsx(d,{path:"/help",element:ae.jsx(kl,{})}),ae.jsx(d,{path:"/payment",element:ae.jsx(eo,{children:ae.jsx(bl,{})})}),ae.jsx(d,{path:"/dashboard",element:ae.jsx(eo,{children:ae.jsx(Cl,{})})}),ae.jsx(d,{path:"/settings",element:ae.jsx(eo,{children:ae.jsx(jl,{})})}),ae.jsx(d,{path:"/",element:t?ae.jsx(s,{to:"/dashboard",replace:!0}):ae.jsx(s,{to:"/welcome",replace:!0})}),ae.jsx(d,{path:"*",element:ae.jsx(s,{to:"/welcome",replace:!0})})]}),ae.jsx(it,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"}}})]})})};let Il;async function _l(){if(Il){Il.prompt();const{outcome:e}=await Il.userChoice;if(console.log("DropCalc PWA: Resultado da instalação:",e),"accepted"===e){console.log("DropCalc PWA: Usuário instalou o app!");const e=document.getElementById("install-pwa-btn");e&&e.remove()}Il=null}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("DropCalc PWA: Service Worker registrado com sucesso:",e.scope),e.addEventListener("updatefound",()=>{console.log("DropCalc PWA: Nova versão disponível!")})}).catch(e=>{console.log("DropCalc PWA: Falha ao registrar Service Worker:",e)})}),window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),Il=e,function(){if(!(document.getElementById("install-pwa-btn")||window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)){const e=document.createElement("button");e.id="install-pwa-btn",e.innerHTML="📱 Instalar App",e.style.cssText="\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n      color: white;\n      border: none;\n      border-radius: 50px;\n      padding: 12px 24px;\n      font-weight: bold;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n      cursor: pointer;\n      z-index: 1000;\n      font-size: 14px;\n      transition: transform 0.2s;\n    ",e.addEventListener("mouseover",()=>{e.style.transform="scale(1.05)"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",_l),document.body.appendChild(e),setTimeout(()=>{e.style.animation="pulse 2s infinite"},1e3)}}()}),window.addEventListener("appinstalled",()=>{console.log("DropCalc PWA: App instalado com sucesso!");const e=document.getElementById("install-pwa-btn");e&&e.remove()});const Tl=document.createElement("style");Tl.textContent="\n  @keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n",document.head.appendChild(Tl),console.log("=== main.tsx carregando AppWithAuth com sistema de idiomas ===");se.createRoot(document.getElementById("root")).render(ae.jsx(le,{children:ae.jsx(El,{})}));
