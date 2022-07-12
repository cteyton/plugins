async getUsers(craftRoomId) {
    return await this.ThemisAPIService.get(`api/craft-room/users/${craftRoomId}`);
}

 craftWorkshopSessionRetrospectiveDate() {
    const dateString = moment(this.craftWorkshopInformations.retrospectiveDate).format('ddd D MMMM');
    return dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

craftWorkshopSessionRetrospectiveTime() {
    return moment(this.craftWorkshopInformations.retrospectiveDate).format('HH:mm');
}


async getAllCraftRooms() {
    return await this.ThemisAPIService.get(`api/craft-room/all`);
}

async getAllCraftWorkshopSessions(craftRoomId) {
    return await this.ThemisAPIService.get(`api/craft-workshops-session/${craftRoomId}`);
}

async getUsersSessionInformation() {
    if (!this.craftWorkshopInformations) {
        return;
    }

    const sessionId = this.craftWorkshopInformations._id;
    try {
        return await this.ThemisAPIService.get(`api/craft-workshop-session/goal-information/${sessionId}`);
    } catch (error) {
        this.ThemisAPIService.handleError(error);
    }
}
