(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['userInfo'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class = \"user-info\">\r\n          Current Level : <span id= \"current-level\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"level") || (depth0 != null ? lookupProperty(depth0,"level") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"level","hash":{},"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":62}}}) : helper)))
    + " </span>\r\n        <progress max = "
    + alias4(((helper = (helper = lookupProperty(helpers,"maxExp") || (depth0 != null ? lookupProperty(depth0,"maxExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxExp","hash":{},"data":data,"loc":{"start":{"line":3,"column":24},"end":{"line":3,"column":34}}}) : helper)))
    + " value = "
    + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":3,"column":43},"end":{"line":3,"column":54}}}) : helper)))
    + " data-label=\"Current xp is "
    + alias4(((helper = (helper = lookupProperty(helpers,"currExp") || (depth0 != null ? lookupProperty(depth0,"currExp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"currExp","hash":{},"data":data,"loc":{"start":{"line":3,"column":81},"end":{"line":3,"column":92}}}) : helper)))
    + "\"> </progress>\r\n      </div>\r\n\r\n";
},"useData":true});
})();