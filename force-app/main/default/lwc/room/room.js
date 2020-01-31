import { LightningElement, api } from 'lwc';

export default class Room extends LightningElement {
    @api icon = "utility:breadcrumbs";
    @api roomName = "Room #16";
}