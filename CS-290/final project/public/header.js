(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n		<div class=\"container-fluid\">\n			<a class=\"navbar-brand\" href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":44}}}) : helper)))
    + "</a>\n			<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n				<script src=\"index.js\" charset=\"utf-8\" defer></script>\n				<span class=\"navbar-toggler-icon\"></span>\n			</button>\n			<div class=\"user-info\">\n				Current Level : <span id=\"current-level\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":9,"column":46},"end":{"line":9,"column":55}}}) : helper)))
    + " </span>\n				<progress id=\"progress-bar\" max=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"maxExp") || (depth0 != null ? lookupProperty(depth0,"maxExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxExp","hash":{},"data":data,"loc":{"start":{"line":10,"column":37},"end":{"line":10,"column":47}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":10,"column":56},"end":{"line":10,"column":67}}}) : helper)))
    + "\" data-label=\"Current xp is 0\"> </progress>\n			</div>\n			<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n				<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n					<li class=\"nav-item\">\n						<a class=\"nav-link active\" aria-current=\"page\" href=\"/\">Calendar</a>\n					</li>\n					<li class=\"nav-item\">\n						<a class=\"nav-link\" href=\"games\">Q&A</a>\n					</li>\n				</ul>\n			</div>\n		</div>\n	</nav>\n";
},"useData":true});
})();