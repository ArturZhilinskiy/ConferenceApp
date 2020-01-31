import { LightningElement, api } from 'lwc';

export default class RoomList extends LightningElement {
    @api rooms = [
        {
            "icon" : "utility:breadcrumbs",
            "name" : "Room 1"
        },
        {
            "icon" : "utility:breadcrumbs",
            "name" : "Room 2"
        },
        {
            "icon" : "utility:breadcrumbs",
            "name" : "Room 3"
        },
        {
            "icon" : "utility:breadcrumbs",
            "name" : "Room 4"
        }
    ];
}