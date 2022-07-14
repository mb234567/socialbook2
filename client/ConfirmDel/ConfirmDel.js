Template.ConfirmDel.events({
    'click .js-conDel'() {
        $("#ConDelmodal").modal("hide");
        let cId = $("#conId").val();  
        $("#" + cId).fadeOut("slow", () => {
            socialdb.remove({ 
                "_id" : cId
            });
        });
    }
});
// test