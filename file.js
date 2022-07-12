async getUsers(craftRoomId) {
    return await this.ThemisAPIService.get(`api/craft-room/users/${craftRoomId}`);
}

async getAllCraftRooms() {
    return await this.ThemisAPIService.get(`api/craft-room/all`);
}

async getAllCraftWorkshopSessions(craftRoomId) {
    return await this.ThemisAPIService.get(`api/craft-workshops-session/${craftRoomId}`);
}
