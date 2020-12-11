(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calandar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					dataJSON.push(['"
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":11,"column":21},"end":{"line":11,"column":29}}}) : helper)))
    + "','"
    + alias4(((helper = (helper = lookupProperty(helpers,"data") || (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"data","hash":{},"data":data,"loc":{"start":{"line":11,"column":32},"end":{"line":11,"column":40}}}) : helper)))
    + "'])\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "﻿\n<head>\n	<meta charset=\"UTF-8\">\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n	<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\"\n		  integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\" crossorigin=\"anonymous\">\n	\n		<script>\n			var dataJSON = [];\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"Quests") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "		</script>\n\n</head>\n<div class=\"container, col-lg-4 col-xl-7 col-xxl-4 mt-5 mx-auto\">\n    <h1> calendar</h1>\n    <div class=\"form-inline\">\n        <button class=\"btn btn-outline-primary col-sm-6\" onclick=previous()>Previous</button>\n        <button class=\"btn btn-outline-primary col-sm-6\" onclick=next()>Next</button>\n    </div>\n	<div class=\"card\">\n        <h3 class=\"card card-header\" id=\"monthAndYear\"></h3>\n		<table class=\"table table-bordered table-responsive-sm\" id=\"calendar\">\n			<thead>\n				<tr>\n					<th>Sun</th>\n					<th>Mon</th>\n					<th>Tue</th>\n					<th>Wed</th>\n					<th>Thu</th>\n					<th>Fri</th>\n					<th>Sat</th>\n				</tr>\n			</thead>\n\n			<tbody id=\"calendar-body\"></tbody>\n		</table>\n		\n	</div>\n</div>\n\n\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script>\n<script src=\"calendar.js\"></script>\n";
},"useData":true});
})();