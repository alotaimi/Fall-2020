(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addUser'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\r\n      <div class=\"User-card\">\r\n            <a href=\"/user/"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":35}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":45}}}) : helper)))
    + "</a>\r\n      </div>\r\n</div>";
},"useData":true});
})();