// import sys
// reload(sys)
// sys.setdefaultencoding('utf8')
// source = unicode(job_titles, 'utf-8')

frappe.provide("frappe.sample");
frappe.pages['sample'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'CRM Dashboard',
		single_column: true
	});

	frappe.breadcrumbs.add("Sample");

	page.main.html(frappe.render_template("sample", {}));

}
console.log("hello96532854218542178451");


// $(document).ready(function(){
// $("#mytable #checkall").click(function () {
//         if ($("#mytable #checkall").is(':checked')) {
//             $("#mytable input[type=checkbox]").each(function () {
//                 $(this).prop("checked", true);
//             });

//         } else {
//             $("#mytable input[type=checkbox]").each(function () {
//                 $(this).prop("checked", false);
//             });
//         }
//     });
    
//     $("[data-toggle=tooltip]").tooltip();
// });


// var draw_page = function(me){
// 	frappe.model.with_doctype("Lead", function() {
// 		me.page.list = new frappe.ui.BaseList({
// 			hide_refresh: true,
// 			page: me.page,
// 			method: 'training.training.training.page.sample.sample.get_customer',
// 			//args: {name: patient},
// 			parent: $("<div></div>").appendTo(me.page.main),
// 			render_view: function(values) {
// 				var me = this;
// 				var wrapper = me.page.main.find(".result-list").get(0);
// 				values.map(function (value) {
// 					var row = $('<div class="list-row">').data("data", value).appendTo($(wrapper)).get(0);
// 					new frappe.sample.Feed(row, value);
// 				});
// 			},
// 			show_filters: true,
// 			doctype: "Lead",
// 		});
// 		show_patient_info(me);
// 		me.page.list.run();
// 	});
// };


// show_patient_info = function(me){
// 	frappe.call({
// 		"method": "training.training.training.page.sample.sample.get_customer",
// 		args: {
// 		},
// 		callback: function (r) {
// 			var data = r.message;
// 			var details = "";
// 			if(data.lead_name) details += "<br><b>Person Name :</b> " + data.lead_name;
// 			if(data.company_name) details += "<br><b>Organization Name :</b> " + data.company_name;
// 			me.page.sidebar.addClass("col-sm-3");
// 			me.page.sidebar.html(details);
// 			me.page.wrapper.find(".layout-main-section-wrapper").addClass("col-sm-9");
// 		}
// 	});


// frappe.sample.last_feed_date = false;
// frappe.sample.Feed = Class.extend({
// 	init: function(row, data) {
// 		this.scrub_data(data);
// 		this.add_date_separator(row, data);
// 		if(!data.add_class)
// 			data.add_class = "label-default";

// 		data.link = "";
// 		if (data.reference_doctype && data.reference_name) {
// 			data.link = frappe.format(data.reference_name, {fieldtype: "Link", options: data.reference_doctype},
// 				{label: __(data.reference_doctype)});
// 		}

// 		$(row)
// 			.append(frappe.render_template("sample", data))
// 			.find("a").addClass("grey");
// 	},
	
// 	// add_date_separator: function(row, data) {
// 	// 	var date = frappe.datetime.str_to_obj(data.creation);
// 	// 	var last = frappe.medical_record.last_feed_date;

// 	// 	if((last && frappe.datetime.obj_to_str(last) != frappe.datetime.obj_to_str(date)) || (!last)) {
// 	// 		var diff = frappe.datetime.get_day_diff(frappe.datetime.get_today(), frappe.datetime.obj_to_str(date));
// 	// 		if(diff < 1) {
// 	// 			var pdate = 'Today';
// 	// 		} else if(diff < 2) {
// 	// 			pdate = 'Yesterday';
// 	// 		} else {
// 	// 			pdate = frappe.datetime.global_date_format(date);
// 	// 		}
// 	// 		data.date_sep = pdate;
// 	// 		data.date_class = pdate=='Today' ? "date-indicator blue" : "date-indicator";
// 	// 	} else {
// 	// 		data.date_sep = null;
// 	// 		data.date_class = "";
// 	// 	}
// 	// 	frappe.sample.last_feed_date = date;
// 	// }
// });

// };
