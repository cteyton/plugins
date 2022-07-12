async getUsers(craftRoomId) {
    return await this.ThemisAPIService.get(`api/craft-room/users/${craftRoomId}`);
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
