# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "training"
app_title = "Training"
app_publisher = "Digital Prizm Infotch Pvt Ltd"
app_description = "Managing training events"
app_icon = "octicon octicon-file-directory"
app_color = "blue"
app_email = "contact@digitalprizm.net"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/training/css/training.css"
# app_include_js = "/assets/training/js/training.js"

# include js, css files in header of web template
# web_include_css = "/assets/training/css/training.css"
# web_include_js = "/assets/training/js/training.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}


fixtures = ["Custom Field","Property Setter","Print Format"]
# Home Pages
# ----------
doctype_js = {
    "Lead":["custom_script/lead.js"],
    "Opportunity":["custom_script/Opportunity.js"],
    "Sales Order":["custom_script/sales_order.js"],
    "Quotation":["custom_script/quotation.js"],
    "Supplier":["custom_script/supplier.js"],
    "Sales Invoice":["custom_script/sales_invoice.js"],
    "Customer":["custom_script/customer.js"],
    "Delivery Note":["custom_script/delivery_note.js"],
    "Payment Entry":["custom_script/payment_entry.js"],
    "Journal Entry":["custom_script/journal_entry.js"],
    "Purchase Order":["custom_script/purchase_order.js"],
    "Purchase Invoice":["custom_script/purchase_invoice.js"],
    "Purchase Receipt":["custom_script/purchase_receipt.js"],
    "Request for Quotation":["custom_script/request_for_quotation.js"],
    "Material Request":["custom_script/material_request.js"],
    "Supplier Quotation":["custom_script/supplier_quotation.js"],

    "Brand":["custom_script/brand.js"]

}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "training.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "training.install.before_install"
# after_install = "training.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "training.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"training.tasks.all"
# 	],
# 	"daily": [
# 		"training.tasks.daily"
# 	],
# 	"hourly": [
# 		"training.tasks.hourly"
# 	],
# 	"weekly": [
# 		"training.tasks.weekly"
# 	]
# 	"monthly": [
# 		"training.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "training.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "training.event.get_events"
# }

