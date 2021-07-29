export class Election{
    public id: number;
    public name: string;
    public date: string;
    public c_id: number = 0;
    public winner: string = "";
    public freeze_status: String = "unfreezed";
    public publish_status: String = "unpublished";
}