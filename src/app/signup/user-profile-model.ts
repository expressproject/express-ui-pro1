export class UserProfileModel {
    constructor(
        public userName: string,
        public password:string,
        public email: string,
        public phoneNumber: number,
        public district: string,
        public offer: boolean,
        public membership: string
    ) {}
}
