frappe.provide('training');
frappe.pages['my-custom-sample-pag'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'my_custom_sample_page',
		single_column: true
	});

	var html = frappe.render_template("my_custom_sample_page", {"data":"this is encripted data"})
	$(html).appendTo($(wrapper).find('.layout-main'));
}