from _future_ import unicode_literals
import frappe
from frappe.utils import cstr,now,add_days
import json
import datetime



@frappe.whitelist()
def get_customer():
	frappe.msgprint("hello")
	query = """SELECT `lead_name`,`company_name`
			 from 
			 	`tabLead`"""
	batch = frappe.db.sql(query, as_dict=1)
	# for batch_details in batch:
	# 	if batch_details.get('size'):
	# 		batch_details[batch_details.get('size')] = batch_details.get('multiplication_factor')

	return batch