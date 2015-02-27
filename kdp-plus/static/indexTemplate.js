(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index.tmpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<header id=\"header\">\r\n			<div id=\"logo-group\">\r\n\r\n				<!-- PLACE YOUR LOGO HERE -->\r\n				<span id=\"logo\"></span>\r\n				<!-- END LOGO PLACEHOLDER -->\r\n            </div>\r\n\r\n			<div class=\"pull-right\">\r\n            <ul class=\"top-nav\">\r\n                <li class=\"active\">\r\n                    <a href=\"#index.html\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span class=\"menu-item-parent\">Dashboard</span></a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a href=\"#books.html\"><i class=\"fa fa-lg fa-fw fa-book\"></i> <span class=\"menu-item-parent\">Books</span></a>\r\n                </li>\r\n\r\n            </ul>\r\n            </div>\r\n\r\n\r\n\r\n			<!-- pulled right: nav area -->\r\n			<div class=\"pull-right\">\r\n\r\n				<!-- input: search field -->\r\n<!--\r\n				<form action=\"#\" class=\"header-search pull-right\">\r\n					<input id=\"search-fld\"  type=\"text\" name=\"param\" placeholder=\"Find a book\" data-autocomplete='[\r\n					\"todo\"]'>\r\n					<button type=\"submit\">\r\n						<i class=\"fa fa-search\"></i>\r\n					</button>\r\n					<a href=\"javascript:void(0);\" id=\"cancel-search-js\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\r\n				</form>\r\n-->\r\n				<!-- end input: search field -->\r\n\r\n\r\n			</div>\r\n			<!-- end pulled right: nav area -->\r\n\r\n		</header>\r\n		<!-- END HEADER -->\r\n\r\n		<!-- MAIN PANEL -->\r\n		<div id=\"main\" role=\"main\">\r\n\r\n			<!-- MAIN CONTENT -->\r\n			<div id=\"content\">\r\n\r\n                <div class=\"row\">\r\n\r\n                    <article class=\"col-sm-12 col-md-12 col-lg-6\">\r\n\r\n                        <!-- new widget -->\r\n                        <div class=\"jarviswidget\" id=\"wid-id-000\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\" data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\r\n                            <header>\r\n                                <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\r\n                                <h2>Today</h2>\r\n                            </header>\r\n\r\n								<!-- widget div-->\r\n								<div>\r\n								    <!-- content -->\r\n									<div class=\"widget-body\" id=\"today-widget\">\r\n                                        <img src=\""
    + escapeExpression(((helper = (helper = helpers.host || (depth0 != null ? depth0.host : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"host","hash":{},"data":data}) : helper)))
    + "img/loading.gif\"></img>\r\n									</div>\r\n								    <!-- end content -->\r\n								</div>\r\n                        </div>\r\n                        <!-- end widget -->\r\n                    </article>\r\n\r\n\r\n                    <article class=\"col-sm-12 col-md-12 col-lg-6\">\r\n\r\n                        <!-- new widget -->\r\n                        <div class=\"jarviswidget\" id=\"wid-id-000\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\" data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\r\n                            <header>\r\n                                <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\r\n                                <h2>Yesterday</h2>\r\n                            </header>\r\n\r\n								<!-- widget div-->\r\n								<div>\r\n								    <!-- content -->\r\n									<div class=\"widget-body\" id=\"yesterday-widget\">\r\n                                        <img src=\""
    + escapeExpression(((helper = (helper = helpers.host || (depth0 != null ? depth0.host : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"host","hash":{},"data":data}) : helper)))
    + "img/loading.gif\"></img>\r\n									</div>\r\n								    <!-- end content -->\r\n								</div>\r\n                        </div>\r\n                        <!-- end widget -->\r\n\r\n                    </article>\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <!-- end row -->\r\n                <div class=\"row\">\r\n                    <article class=\"col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                        <!-- new widget -->\r\n                        <div class=\"jarviswidget\" id=\"wid-id-000\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\" data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\r\n                            <header>\r\n                                <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\r\n                                <h2>Month To Date</h2>\r\n                            </header>\r\n\r\n								<!-- widget div-->\r\n								<div>\r\n								    <!-- content -->\r\n									<div class=\"widget-body\" id=\"mtd-widget\">\r\n                                        <img src=\""
    + escapeExpression(((helper = (helper = helpers.host || (depth0 != null ? depth0.host : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"host","hash":{},"data":data}) : helper)))
    + "img/loading.gif\"></img>\r\n									</div>\r\n								    <!-- end content -->\r\n\r\n								</div>\r\n\r\n\r\n                        </div>\r\n                        <!-- end widget -->\r\n                    </article>\r\n\r\n                </div>\r\n                <!-- end row -->\r\n\r\n                <!-- end row -->\r\n                <div class=\"row\">\r\n                    <article class=\"col-sm-12 col-md-12 col-lg-12\">\r\n\r\n                        <!-- new widget -->\r\n                        <div class=\"jarviswidget\" id=\"wid-id-000\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\" data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\r\n                            <header>\r\n                                <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\r\n                                <h2>Prior Month</h2>\r\n                            </header>\r\n\r\n								<!-- widget div-->\r\n								<div>\r\n								    <!-- content -->\r\n									<div class=\"widget-body\" id=\"priormonth-widget\">\r\n                                        <img src=\""
    + escapeExpression(((helper = (helper = helpers.host || (depth0 != null ? depth0.host : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"host","hash":{},"data":data}) : helper)))
    + "img/loading.gif\"></img>\r\n									</div>\r\n								    <!-- end content -->\r\n\r\n								</div>\r\n\r\n\r\n                        </div>\r\n                        <!-- end widget -->\r\n                    </article>\r\n\r\n                </div>\r\n                <!-- end row -->\r\n\r\n\r\n				<div class=\"row\">\r\n					<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n					</div>\r\n				</div>\r\n				<!-- widget grid -->\r\n				<section id=\"widget-grid\" class=\"\">\r\n\r\n					<!-- row -->\r\n					<div class=\"row\">\r\n						<article class=\"col-sm-12\">\r\n\r\n						</article>\r\n					</div>\r\n\r\n					<!-- end row -->\r\n\r\n					<!-- row -->\r\n\r\n					<div class=\"row\">\r\n\r\n						<article class=\"col-sm-12 col-md-12 col-lg-6\">\r\n\r\n						</article>\r\n\r\n						<article class=\"col-sm-12 col-md-12 col-lg-6\">\r\n\r\n\r\n						</article>\r\n\r\n					</div>\r\n\r\n					<!-- end row -->\r\n\r\n				</section>\r\n				<!-- end widget grid -->\r\n\r\n			</div>\r\n			<!-- END MAIN CONTENT -->\r\n\r\n		</div>\r\n		<!-- END MAIN PANEL -->\r\n\r\n		<!-- PAGE FOOTER -->\r\n		<div class=\"page-footer\">\r\n			<div class=\"row\">\r\n				<div class=\"col-xs-12 col-sm-6\">\r\n					<span class=\"txt-color-white\"></span>\r\n				</div>\r\n\r\n				<div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<!-- END PAGE FOOTER -->\r\n\r\n		<!-- JS TOUCH : include this plugin for mobile drag / drop touch events\r\n		<script src=\"js/plugin/jquery-touch/jquery.ui.touch-punch.min.js\"></script> -->\r\n\r\n		<!-- BOOTSTRAP JS -->\r\n        <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\r\n\r\n		<!--[if IE 8]>\r\n\r\n		<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>\r\n\r\n		<![endif]-->\r\n\r\n\r\n\r\n\r\n\r\n";
},"useData":true});
})();