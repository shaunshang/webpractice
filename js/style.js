$(function() {
	$("#datatable").DataTable({
		searching: false,
		paging: false,
		fixedColumns: {
      leftColumns: 2
    },
    scrollX: true,
    scrollY: 300,
    "fnInitComplete": function() {
    }
	});
})