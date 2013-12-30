Thorax.Models.Participant = Thorax.Model.extend({
    defaults: {
        firstname: "Bye",
        lastname: "",
        seat: null,
        fullname: function () {
    		return this.firstname +' '+ this.lastname;
    	}
    }
})