frappe.provide('training');
// frappe.pages['dashboard'].on_page_load = function(wrapper) {
// 	var page = frappe.ui.make_app_page({
// 		parent: wrapper,
// 		title: 'Dashboard',
// 		single_column: true
// 	});
// }

frappe.pages['dashboard'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Dashboard',
		single_column: true
	});

	/*new webapp.Dashboard(wrapper, page);*/
	wrapper.dashboard = new trainings.Dashboard(wrapper);
	frappe.breadcrumbs.add("Dashboard");

	var html = frappe.render_template("dashboard", {"data":"this is encripted data"})
	$(html).appendTo($(wrapper).find('.layout-main'));

    $("div.bhoechie-tab-menu>ul.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
}

trainings.Dashboard = Class.extend({
	init:function(wrapper){
		var me = this;
		this.setup(wrapper);
		frappe.call({
			method:"training.training.page.dashboard.dashboard.get_customer",
			callback:function(r){
				$(".layout-main-section-wrapper").css("margin-bottom","0");
				$(".btn-pref .btn").click(function(){
					$(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
					$(this).removeClass("btn-default").addClass("btn-primary");
				});
				function requiredFieldValidator(value){
					if(value == null || value == undefined || !value.length){
						return {valid: false, msg: "This is a required field"};
					}
					else{
						return{valid: true,msg:null};
					}
				}
				var grid;
				var data = [];
				var columns = [
					{id:"customer_name",name:"Full Name", field:"customer_name",width:150,
					formatter:linkFormatter =function(row,cell,value,columnDef,dataContext){
						return '<a href="desk#Form/Customer/'+dataContext['name'] + '">' + value +'</a>';
					},
					cssClass:"cell-title", validator:requiredFieldValidator},
					{id:"customer_type",name:"Customer Type",field:"customer_type",width:150},
					{id:"customer_group",name:"Customer Group",field:"customer_group",width:160},
					{id:"territory",name:"Territory",field:"territory",minWidth:155},
				];
				function editbuttonFormatter(row,cell,value,columnDef,dataContext){
					var i = 0;
					var button = "<a class = 'btn-xs btn-info del' id = 'del_"+row+"'><em class='icon-edit'></em></a>";
					return button;
				}
				function buttonFormatter(row,cell,value,columnDef,dataContext){
					var i = 0;
					var button ="<a class='btn-xs btn-danger del' id='del_"+row+"'><em class='icon-remove'></em></a>";
					return button;
				}
				var options = {
					editable:true,
					enableColumnReorder:true,
					enableAddRow:true,
					explicitIntialization:true;
					enableCellNavigation:true,
					asyncEditorLoading:false,
					autoEdit:false
				};
				$(function (){
					$.each(r.message, function(,item){
						var d = (data[i] ={});
						d["id"] = i+1,
						d["customer_name"] = item.customer_name;
						d["customer_type"] = item.customer_type;
						d["customer_group"] = item.customer_group;
						d["territory"] = item.territory;
						d["name"] = item.name;
						i =i + 1;
					});
				});
			}	setTimeout(function(){
				dataView = new Slick.Data.Dataview();
				grid = new Slick.Grid("#customerGrid",dataView,columns,options);
				var columnFilters =[];
				function filter(item){
					for (var columnId in ColumnFilters){
						if (columnId !==undefined && columnFilters[columnId] !==""){
							var c = grid.getColumns()[grid.getColumnIndex(columnId)];
							if (item[c.field] !== columnFilters[columnId]){
								return false;
							}
						}
					}
					return true;
				}
				dataView.onRowCountChanged.subscribe(function(e,args){
					grid.updateRowCount();
					grid.render();
				});
				dataView.onRowsChanged.subscribe(function (e,args){
					grid.invalidateRows(args.rows);
					grid.render();
				});
				$(grid.getHeaderRow()).delegate(":input","change keyup",function(e){
					$(args.node).empty();
					$("<input type ='text'>").data("columnId",args.column.id).val(columnFilters[args.columnId]).appendTo(args.node);
				});
				grid.init();
				dataView.setFilter(filter);
				dataView.beginUpdate();
				dataView.setItems(data);
				dataView.endUpdate();
			},500);
		})
	}
})