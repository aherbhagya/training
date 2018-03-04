from __future__ import unicode_literals
import frappe, json
import frappe.desk.form.meta
import frappe.desk.form.load
import frappe.permissions
import json
from frappe.model.document import Document
from frappe import _


@frappe.whitelist()
def ping():
	print("s")
	return 1



# @frappe.whitelist()
# def add_expense(exp_approver='',remark=''):
# 	print("hello")
# 	"""allow any logged user to post toDo via interaction master"""
# 	# doc = frappe.get_doc("Expense Claim")
# 	expense = frappe.new_doc("Expense Claim")
# 	print("in")
# 	# expense.approval_status = approval_status
# 	expense.exp_approver = exp_approver
# 	# expense.is_paid = is_paid
# 	expense.remark = remark
# 	expense.insert(ignore_permissions=True)
# 	expense.save(ignore_permissions=True)
# 	frappe.db.commit()
# 	frappe.msgprint("New Expense record created");
	# return {"message":"Claim added successfully"}
		

@frappe.whitelist()
def create_todo(owner, assigned_by, description, date,reference_name,reference_type):
        """allow any logged user to post toDo via interaction master"""
        #emp = frappe.db.get_value("ToDo",{"owner":owner, "reference_name": reference_name},"owner")
        #if emp:
        todo = frappe.new_doc("ToDo")
        todo.owner = owner
        todo.assigned_by = assigned_by
        todo.description = description
        todo.date = date
        todo.reference_type = reference_type
        todo.reference_name = reference_name
        todo.insert(ignore_permissions=True)



@frappe.whitelist()
def create_interaction(doc):
        doc_json=json.loads(doc)
        # emp = frappe.db.get_value("Employee",{"user_id":doc_json['responsible']},"name")
        # doc_json['employee'] = emp
        """allow any logged user to post a comment"""
        doc = frappe.get_doc(doc_json)

        if doc.doctype != "Interaction":
                frappe.throw(_("This method can only be used to create a Interaction Master"), frappe.PermissionError)

        doc.insert(ignore_permissions = True)

        return doc.as_dict()


@frappe.whitelist()
def add_expense(doc):
        doc_json=json.loads(doc)
        # emp = frappe.db.get_value("Employee",{"user_id":doc_json['responsible']},"name")
        # doc_json['employee'] = emp
        """allow any logged user to post a comment"""
        doc = frappe.get_doc(doc_json)

        if doc.doctype != "Expense Claim":
                frappe.throw(_("This method can only be used to create a Expense Claim"), frappe.PermissionError)

        doc.insert(ignore_permissions = True)

        return doc.as_dict()        


        