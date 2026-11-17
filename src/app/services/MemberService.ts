import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

class MemberService {
    private readonly path: string;

    constructor() {
        this.path = serverApi
    }

    public async getTopUsers(): Promise<Member[]> {
        try{
            return [];
        } catch (err) {
            console.log("Error, getProduct:", err);
            throw err;
        }
    }
}

export default MemberService;