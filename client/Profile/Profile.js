Meteor.subscribe("name");

Template.profile.helpers({
    profiles(){
        return socialdb.find();
    },
    whatsex(){
        let ws = this.sex; 
        if(ws=="male"){
            return true;
        } 
        return false; 
    }
});